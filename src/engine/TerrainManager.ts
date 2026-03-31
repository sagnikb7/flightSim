// ─── TerrainManager ──────────────────────────────────────────────────────────
//
// Generates an infinite procedural landscape using a chunk-based system.
//
// How it works (high level):
//   1. The world is divided into a grid of square "chunks" (tiles).
//   2. Only chunks near the player are loaded; distant ones are unloaded.
//   3. Each chunk's surface is shaped by simplex noise (FBM) — the noise
//      parameters change per biome to produce flat plains, rolling hills,
//      sharp mountains, or deep gorges.
//   4. Biomes are selected by the player's distance from the origin.
//      Each biome has a random length; when the player crosses into a
//      new biome the fog color, sun, and terrain color smoothly transition.
//   5. Rocks and craters are scattered on eligible biomes for visual variety.
//
// Key concepts for new devs:
//   - "chunk coords" (cx, cz) are integer grid indices, not world units.
//     World position = chunk coord × chunkSize.
//   - getHeight(x, z) is the authoritative height query used by every system
//     (collision, object placement, etc). It blends two adjacent biome noise
//     fields and subtracts any crater depressions.
//   - Biome sequencing uses a cumulative-length array so each biome can have
//     a different length. The offset randomises which biome appears first.
// ─────────────────────────────────────────────────────────────────────────────

import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise';
import { CONFIG, BIOMES } from './constants';

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Random grayscale THREE.Color in the range [grayscaleMin, grayscaleMin + grayscaleRange]. */
function randomGrayscale(): THREE.Color {
  const { grayscaleMin, grayscaleRange } = CONFIG.terrain.material;
  const v = grayscaleMin + Math.random() * grayscaleRange;
  return new THREE.Color(v, v, v);
}

/**
 * Deterministic pseudo-random from an integer seed.
 * Used so craters are placed identically every time a chunk is regenerated.
 */
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

/** Random int in [min, max] (inclusive). */
function randInt(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

/** Random float in [min, max). */
function randFloat(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

// ─── Types ───────────────────────────────────────────────────────────────────

interface Crater {
  x: number;      // world-space X
  z: number;      // world-space Z
  radius: number; // radius of the bowl
  depth: number;  // depth at the center
}

// ─── TerrainManager ──────────────────────────────────────────────────────────

export class TerrainManager {
  // Simplex noise instance — shared across all height queries
  private noise2D = createNoise2D();

  // Active chunks keyed by "cx,cz" string
  private chunks: Map<string, THREE.Group> = new Map();

  // Shared material whose color is updated per biome
  private terrainMaterial: THREE.MeshStandardMaterial;

  // Crater storage per chunk (deterministic, so re-creating a chunk is consistent)
  private craters: Map<string, Crater[]> = new Map();

  // ── Biome state ──────────────────────────────────────────────────────────

  // Index into the sequential biome list (not the BIOMES array directly)
  private currentBiomeIndex = 0;
  private nextBiomeIndex = 0;

  // Random offset into the BIOMES array so each session starts on a different biome.
  // Restricted to FLAT or HILLS so the player never spawns inside a mountain.
  private biomeOffset = (() => {
    const safe = BIOMES
      .map((_, i) => i)
      .filter(i => BIOMES[i].terrainType === 'FLAT' || BIOMES[i].terrainType === 'HILLS');
    return safe[Math.floor(Math.random() * safe.length)];
  })();

  // 0 → 1 progress of the visual transition (fog, sun) between two biomes
  private biomeTransition = 1; // start at 1 = "transition complete"

  // Variable-length biome segments.
  // biomeLengths[i]      = length in metres of segment i
  // biomeCumulative[i]   = distance at which segment i starts (prefix-sum)
  // These grow lazily as the player flies further from the origin.
  private biomeLengths: number[] = [];
  private biomeCumulative: number[] = [0];

  // Scene references for biome transitions
  private fog: THREE.FogExp2;
  private sun: THREE.DirectionalLight;

  // Current terrain tint — randomised each biome change
  private currentBiomeColor: THREE.Color;

  /** Fired when the player crosses into a new biome. GameEngine uses this to show the zone name. */
  public onBiomeChange?: (name: string) => void;

  // ── Constructor ──────────────────────────────────────────────────────────

  constructor(scene: THREE.Scene, fog: THREE.FogExp2, sun: THREE.DirectionalLight) {
    this.fog = fog;
    this.sun = sun;

    // Apply the starting biome's visuals immediately
    const startBiome = BIOMES[this.biomeOffset % BIOMES.length];
    this.fog.color.set(startBiome.fog);
    this.sun.color.set(startBiome.sunColor);
    this.sun.intensity = startBiome.sunIntensity;

    this.currentBiomeColor = randomGrayscale();
    this.terrainMaterial = new THREE.MeshStandardMaterial({
      color: this.currentBiomeColor,
      flatShading: true,
      roughness: CONFIG.terrain.material.roughness,
      metalness: CONFIG.terrain.material.metalness,
    });
  }

  // ── Public API ───────────────────────────────────────────────────────────

  /**
   * Called every frame by GameEngine.
   * Loads nearby chunks, unloads distant ones, and advances the biome transition.
   *
   * @param playerPos - Ship world position
   * @param scene     - THREE scene to add/remove chunks
   * @param distance  - 2D distance from origin (used for biome lookup)
   */
  public update(playerPos: THREE.Vector3, scene: THREE.Scene, distance: number) {
    this.loadChunksAroundPlayer(playerPos, scene);
    this.unloadDistantChunks(playerPos, scene);
    this.advanceBiomeTransition(distance);
  }

  /**
   * Returns the terrain height at any world (x, z) coordinate.
   * This is the single source of truth — used for collision detection,
   * object placement, and camera floor clamping.
   *
   * The height is computed by:
   *   1. Finding the two biomes that blend at this distance from origin
   *   2. Sampling FBM noise with each biome's terrain parameters
   *   3. Lerping the two results based on the biome transition factor
   *   4. Subtracting any crater depressions that overlap this point
   */
  public getHeight(x: number, z: number): number {
    // Determine which two biomes blend at this world position
    const dist = Math.sqrt(x * x + z * z);
    const { idx, transition } = this.getBiomeAtDist(dist);
    const b1 = this.biomeAt(idx);
    const b2 = this.biomeAt(idx + 1);

    const p1 = CONFIG.terrain.params[b1.terrainType];
    const p2 = CONFIG.terrain.params[b2.terrainType];

    // Sample noise for both biomes, apply power curve, then blend
    const n1 = Math.pow(this.sampleFBM(x, z, p1.freq, p1.octaves, p1.ridged), p1.power);
    const n2 = Math.pow(this.sampleFBM(x, z, p2.freq, p2.octaves, p2.ridged), p2.power);

    const blendedNoise = THREE.MathUtils.lerp(n1, n2, transition);
    const blendedAmp   = THREE.MathUtils.lerp(p1.amp, p2.amp, transition);

    let height = blendedNoise * blendedAmp + CONFIG.terrain.baseHeight;

    // Subtract crater depressions (check this chunk and its 8 neighbors)
    height -= this.getCraterDepression(x, z);

    return height;
  }

  // ── Chunk lifecycle ──────────────────────────────────────────────────────

  /** Load any missing chunks within renderDist of the player. */
  private loadChunksAroundPlayer(playerPos: THREE.Vector3, scene: THREE.Scene) {
    const { chunkSize, renderDist } = CONFIG.terrain;
    const px = Math.floor((playerPos.x + chunkSize / 2) / chunkSize);
    const pz = Math.floor((playerPos.z + chunkSize / 2) / chunkSize);

    for (let x = px - renderDist; x <= px + renderDist; x++) {
      for (let z = pz - renderDist; z <= pz + renderDist; z++) {
        const key = `${x},${z}`;
        if (!this.chunks.has(key)) {
          this.chunks.set(key, this.buildChunk(x, z, scene));
        }
      }
    }
  }

  /** Remove chunks that have moved outside the render distance. */
  private unloadDistantChunks(playerPos: THREE.Vector3, scene: THREE.Scene) {
    const { chunkSize, renderDist } = CONFIG.terrain;
    const px = Math.floor((playerPos.x + chunkSize / 2) / chunkSize);
    const pz = Math.floor((playerPos.z + chunkSize / 2) / chunkSize);

    for (const [key, group] of this.chunks) {
      const [cx, cz] = key.split(',').map(Number);
      if (Math.abs(cx - px) > renderDist || Math.abs(cz - pz) > renderDist) {
        scene.remove(group);
        this.chunks.delete(key);
        this.craters.delete(key);
      }
    }
  }

  /**
   * Build a single terrain chunk: heightmapped plane + rocks + craters.
   *
   * @param cx - Chunk grid X index
   * @param cz - Chunk grid Z index
   */
  private buildChunk(cx: number, cz: number, scene: THREE.Scene): THREE.Group {
    const group = new THREE.Group();
    const { chunkSize, chunkRes } = CONFIG.terrain;

    // ── Terrain mesh ───────────────────────────────────────────────────────
    const mesh = this.buildTerrainMesh(cx, cz, chunkSize, chunkRes);
    group.add(mesh);

    // ── Decorations (rocks, craters) ───────────────────────────────────────
    const chunkBiome = this.getBiomeForChunk(cx, cz);

    if (chunkBiome.terrainType === 'FLAT' || chunkBiome.terrainType === 'HILLS') {
      this.scatterRocks(group, cx, cz, chunkSize);
    }

    if (chunkBiome.terrainType === 'FLAT') {
      this.generateCraters(cx, cz, chunkSize);
    }

    // Position in world space (groupYOffset shifts the whole grid vertically)
    group.position.set(cx * chunkSize, CONFIG.terrain.groupYOffset, cz * chunkSize);
    scene.add(group);
    return group;
  }

  /** Create the heightmapped PlaneGeometry mesh for one chunk. */
  private buildTerrainMesh(cx: number, cz: number, chunkSize: number, chunkRes: number): THREE.Mesh {
    const geo = new THREE.PlaneGeometry(chunkSize, chunkSize, chunkRes, chunkRes);
    geo.rotateX(-Math.PI / 2); // lay flat on the XZ plane

    // Displace each vertex vertically using getHeight()
    const pos = geo.attributes.position;
    for (let row = 0; row <= chunkRes; row++) {
      for (let col = 0; col <= chunkRes; col++) {
        const worldX = (col / chunkRes - 0.5) * chunkSize + cx * chunkSize;
        const worldZ = (row / chunkRes - 0.5) * chunkSize + cz * chunkSize;
        pos.setY(row * (chunkRes + 1) + col, this.getHeight(worldX, worldZ));
      }
    }
    geo.computeVertexNormals();

    this.terrainMaterial.color.copy(this.currentBiomeColor);
    const mesh = new THREE.Mesh(geo, this.terrainMaterial);
    mesh.receiveShadow = true;
    return mesh;
  }

  // ── Rock generation ──────────────────────────────────────────────────────

  /** Scatter random rock clusters across the chunk. */
  private scatterRocks(group: THREE.Group, cx: number, cz: number, chunkSize: number) {
    const { rocks } = CONFIG.terrain;
    const chunkCenterX = cx * chunkSize;
    const chunkCenterZ = cz * chunkSize;

    const clusterCount = randInt(rocks.minClusters, rocks.maxClusters);

    for (let c = 0; c < clusterCount; c++) {
      // Pick a random cluster center within the chunk
      const clusterX = (Math.random() - 0.5) * chunkSize * rocks.clusterSpread;
      const clusterZ = (Math.random() - 0.5) * chunkSize * rocks.clusterSpread;
      const rockCount = randInt(rocks.minPerCluster, rocks.maxPerCluster);

      for (let r = 0; r < rockCount; r++) {
        group.add(this.createRock(
          chunkCenterX, chunkCenterZ,
          clusterX, clusterZ,
          rocks,
        ));
      }
    }
  }

  /** Create a single rock mesh offset from its cluster center. */
  private createRock(
    chunkCenterX: number, chunkCenterZ: number,
    clusterX: number, clusterZ: number,
    rocks: typeof CONFIG.terrain.rocks,
  ): THREE.Mesh {
    // Scatter within the cluster
    const localX = clusterX + (Math.random() - 0.5) * rocks.offsetRange;
    const localZ = clusterZ + (Math.random() - 0.5) * rocks.offsetRange;
    const worldY = this.getHeight(chunkCenterX + localX, chunkCenterZ + localZ);

    const scale = randFloat(rocks.minScale, rocks.maxScale);
    const geometry = new THREE.DodecahedronGeometry(scale, 0);

    // Tint rocks slightly brighter than the terrain surface
    const terrainGray = this.currentBiomeColor.r; // grayscale → r = g = b
    const brightnessOffset = randFloat(rocks.colorOffset[0], rocks.colorOffset[1]);
    const variation = (Math.random() - 0.5) * rocks.colorVariation;
    const gray = THREE.MathUtils.clamp(terrainGray + brightnessOffset + variation, 0, 1);

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(gray, gray, gray),
      flatShading: true,
      roughness: rocks.roughness,
      metalness: rocks.metalness,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(localX, worldY + scale * 0.5, localZ);
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }

  // ── Crater generation ────────────────────────────────────────────────────

  /**
   * Deterministically generate craters for a FLAT chunk (if not already cached).
   * Uses seeded random so the same chunk always gets the same craters.
   */
  private generateCraters(cx: number, cz: number, chunkSize: number) {
    const key = `${cx},${cz}`;
    if (this.craters.has(key)) return;

    const { craters } = CONFIG.terrain;
    const craterList: Crater[] = [];

    // Hash chunk coords into a seed
    const seed = cx * 73856093 ^ cz * 19349663;
    const roll = seededRandom(seed);

    if (roll < craters.chance) {
      const count = seededRandom(seed + 1) < 0.5 ? 1 : 2;

      for (let i = 0; i < count; i++) {
        const rx     = seededRandom(seed + 10 + i * 4);
        const rz     = seededRandom(seed + 11 + i * 4);
        const rRad   = seededRandom(seed + 12 + i * 4);
        const rDepth = seededRandom(seed + 13 + i * 4);

        craterList.push({
          x:      cx * chunkSize + (rx - 0.5) * chunkSize * craters.placementArea,
          z:      cz * chunkSize + (rz - 0.5) * chunkSize * craters.placementArea,
          radius: craters.minRadius + rRad * (craters.maxRadius - craters.minRadius),
          depth:  craters.minDepth + rDepth * (craters.maxDepth - craters.minDepth),
        });
      }
    }

    this.craters.set(key, craterList);
  }

  /**
   * Sum crater depressions at a world point.
   * Checks the chunk containing (x, z) plus its 8 neighbors,
   * since a crater near a chunk edge can spill into adjacent chunks.
   */
  private getCraterDepression(x: number, z: number): number {
    const { chunkSize } = CONFIG.terrain;
    const cx = Math.floor(x / chunkSize);
    const cz = Math.floor(z / chunkSize);
    let depression = 0;

    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        const list = this.craters.get(`${cx + dx},${cz + dz}`);
        if (!list) continue;

        for (const crater of list) {
          const distSq = (x - crater.x) ** 2 + (z - crater.z) ** 2;
          const radiusSq = crater.radius * crater.radius;
          if (distSq >= radiusSq) continue;

          // Smooth bowl falloff: depth × (1 − (d/r)²)²
          const norm = distSq / radiusSq;       // (d/r)² — already squared
          const falloff = (1 - norm);            // 1 − (d/r)²
          depression += crater.depth * falloff * falloff;
        }
      }
    }

    return depression;
  }

  // ── Noise / height helpers ───────────────────────────────────────────────

  /**
   * Fractal Brownian Motion (FBM) noise.
   *
   * Stacks multiple octaves of simplex noise at increasing frequency
   * and decreasing amplitude to produce natural-looking terrain.
   *
   * When `ridged` is true, the noise is folded (abs + invert + square)
   * to create sharp mountain ridgelines instead of smooth undulations.
   *
   * @returns Normalized value in roughly [0, 1]
   */
  private sampleFBM(x: number, z: number, freq: number, octaves: number, ridged: boolean): number {
    const { amplitudeDecay, frequencyMultiplier } = CONFIG.terrain.noise;
    let value = 0;
    let amplitude = 1;
    let f = freq;
    let totalWeight = 0;

    for (let i = 0; i < octaves; i++) {
      let n = this.noise2D(x * f, z * f);

      if (ridged) {
        // Fold the noise: abs removes valleys, invert flips,
        // squaring sharpens the remaining peaks into ridges
        n = 1.0 - Math.abs(n);
        n = n * n;
      } else {
        // Remap [-1, 1] → [0, 1]
        n = (n + 1) / 2;
      }

      value += n * amplitude;
      totalWeight += amplitude;
      amplitude *= amplitudeDecay;
      f *= frequencyMultiplier;
    }

    return value / totalWeight;
  }

  // ── Biome system ─────────────────────────────────────────────────────────

  /** Look up the BIOMES entry for a sequential slot index (applies the random offset). */
  private biomeAt(slotIndex: number) {
    return BIOMES[(slotIndex + this.biomeOffset) % BIOMES.length];
  }

  /** Determine which biome a chunk belongs to (based on its center's distance from origin). */
  private getBiomeForChunk(cx: number, cz: number) {
    const chunkSize = CONFIG.terrain.chunkSize;
    const worldX = cx * chunkSize;
    const worldZ = cz * chunkSize;
    const dist = Math.sqrt(worldX * worldX + worldZ * worldZ);
    const { idx } = this.getBiomeAtDist(dist);
    return this.biomeAt(idx);
  }

  /**
   * Lazily extend the biome segment array until it covers `upToDist` metres.
   *
   * Each segment has a random length (first biome is shorter to give early variety).
   * biomeCumulative is the prefix-sum so we can binary-search by distance.
   */
  private growBiomes(upToDist: number) {
    const { biomes } = CONFIG.terrain;
    while (this.biomeCumulative[this.biomeCumulative.length - 1] <= upToDist) {
      const len = this.biomeLengths.length === 0
        ? biomes.firstLength
        : biomes.minLength + Math.random() * biomes.maxExtraLength;
      this.biomeLengths.push(len);
      this.biomeCumulative.push(this.biomeCumulative[this.biomeCumulative.length - 1] + len);
    }
  }

  /**
   * Given a distance from origin, return which biome segment the player is in
   * and how far through the transition to the next segment (0 = just entered, 1 = at boundary).
   *
   * Uses binary search on the cumulative length array for O(log n) lookup.
   */
  private getBiomeAtDist(dist: number): { idx: number; transition: number } {
    this.growBiomes(dist);

    let lo = 0;
    let hi = this.biomeLengths.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (this.biomeCumulative[mid] <= dist) lo = mid;
      else hi = mid - 1;
    }

    const transition = (dist - this.biomeCumulative[lo]) / this.biomeLengths[lo];
    return { idx: lo, transition };
  }

  /**
   * Smoothly blend fog color, sun color, and sun intensity when the player
   * enters a new biome segment. Called once per frame.
   */
  private advanceBiomeTransition(distance: number) {
    const { idx: targetIdx } = this.getBiomeAtDist(distance);

    // Detect biome boundary crossing → start a new transition
    if (targetIdx !== this.nextBiomeIndex) {
      this.nextBiomeIndex = targetIdx;
      this.biomeTransition = 0;
      this.currentBiomeColor = randomGrayscale();
      this.onBiomeChange?.(this.biomeAt(this.nextBiomeIndex).name);
    }

    // Interpolate fog and sun toward the target biome
    if (this.biomeTransition < 1) {
      this.biomeTransition += CONFIG.terrain.biomes.transitionSpeed;

      const from = this.biomeAt(this.currentBiomeIndex);
      const to   = this.biomeAt(this.nextBiomeIndex);

      this.fog.color.lerpColors(new THREE.Color(from.fog), new THREE.Color(to.fog), this.biomeTransition);
      this.sun.color.lerpColors(new THREE.Color(from.sunColor), new THREE.Color(to.sunColor), this.biomeTransition);
      this.sun.intensity = THREE.MathUtils.lerp(from.sunIntensity, to.sunIntensity, this.biomeTransition);

      if (this.biomeTransition >= 1) {
        this.currentBiomeIndex = this.nextBiomeIndex;
      }
    }
  }
}
