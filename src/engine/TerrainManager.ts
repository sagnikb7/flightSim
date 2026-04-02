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

  // Separate noise instance for canyon geometry (centerline + width) so canyon
  // shape is independent of terrain surface noise.
  private noise2DCanyon = createNoise2D();

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

  // Current terrain tint — updated on each biome change via the hop system
  private currentBiomeColor: THREE.Color;

  // Active colour palette and current position on its [rangeMin, rangeMax] number line
  private activePalette: { name: string; leftShade: string; rightShade: string };
  private shadePosition: number;

  // Sun intensity random walk — current is the lerp "from", target is the lerp "to"
  private currentSunIntensity: number;
  private targetSunIntensity: number;

  // Cached fog colors for biome transition lerp — set once per transition, reused every frame
  private _fromFogColor = new THREE.Color();
  private _toFogColor   = new THREE.Color();

  /** Fired when the player crosses into a new biome. GameEngine uses this to show the zone name. */
  public onBiomeChange?: (name: string) => void;

  // ── Constructor ──────────────────────────────────────────────────────────

  constructor(scene: THREE.Scene, fog: THREE.FogExp2, sun: THREE.DirectionalLight) {
    this.fog = fog;
    this.sun = sun;

    // Apply the starting biome's visuals immediately
    const startBiome = BIOMES[this.biomeOffset % BIOMES.length];
    this.fog.color.set(startBiome.fog);
    // Sun colour is fixed in ModuleConfigs/lightConfig.ts (sun.color) — not per-biome
    // Sun intensity is managed by the random walk — initialised below

    // Pick the active palette (forced or random) and set the initial shade position
    const { palettes, forcePalette } = CONFIG.terrain.color;
    this.activePalette = forcePalette
      ? (palettes.find((p) => p.name === forcePalette) ?? palettes[Math.floor(Math.random() * palettes.length)])
      : palettes[Math.floor(Math.random() * palettes.length)];

    const { rangeMin, rangeMax } = CONFIG.terrain.color.hop;
    this.shadePosition  = rangeMin + Math.random() * (rangeMax - rangeMin);
    this.currentBiomeColor = this.shadeToColor(this.shadePosition);

    // Pick a random starting sun intensity within the allowed walk range
    const siw = CONFIG.visuals.lighting.intensityWalk;
    const startIntensity = siw.min + Math.random() * (siw.max - siw.min);
    this.currentSunIntensity = startIntensity;
    this.targetSunIntensity  = startIntensity;
    this.sun.intensity = startIntensity;

    this.terrainMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true,
      color: 0xffffff,  // neutral tint — vertex colours drive everything
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

    // Each biome slot contributes a height sample; CANYON uses its own formula
    const h1 = this.sampleBiomeHeight(x, z, b1.terrainType);
    const h2 = this.sampleBiomeHeight(x, z, b2.terrainType);

    let height = THREE.MathUtils.lerp(h1, h2, transition);
    height -= this.getCraterDepression(x, z);
    return height;
  }

  /** Returns the terrain height contribution for a single biome type at (x, z). */
  private sampleBiomeHeight(x: number, z: number, terrainType: string): number {
    if (terrainType === 'CANYON') return this.sampleCanyonHeight(x, z);
    const p = CONFIG.terrain.params[terrainType as 'FLAT' | 'HILLS' | 'MOUNTAINS' | 'GORGES'];
    const n = Math.pow(this.sampleFBM(x, z, p.freq, p.octaves, p.ridged), p.power);
    return n * p.amp + CONFIG.terrain.baseHeight;
  }

  /**
   * Canyon height formula: a floor-to-wall lerp driven by distance from the
   * meandering centerline. The canyon widens and narrows along Z via noise.
   */
  private sampleCanyonHeight(x: number, z: number): number {
    const cfg = CONFIG.terrain.canyon;
    const center    = this.getCanyonCenter(z);
    const halfWidth = this.getCanyonHalfWidth(z);

    // Normalized distance from centerline: 0 = inside gorge, 1 = canyon rim and beyond
    const d = Math.abs(x - center);
    const t = this.smoothstep(0, halfWidth, d);

    const wp = cfg.wallParams;
    const fp = cfg.floorParams;

    const wallNoise  = Math.pow(this.sampleFBM(x, z, wp.freq, wp.octaves, wp.ridged), wp.power);
    const floorNoise = Math.pow(this.sampleFBM(x, z, fp.freq, fp.octaves, fp.ridged), fp.power);

    const wallH  = wallNoise  * cfg.wallAmp  + CONFIG.terrain.baseHeight;
    const floorH = floorNoise * cfg.floorAmp + CONFIG.terrain.baseHeight - cfg.gorgeDepth;

    return THREE.MathUtils.lerp(floorH, wallH, t);
  }

  // ── Canyon public API ─────────────────────────────────────────────────────

  /**
   * X coordinate of the canyon centerline at world Z.
   * Drifts slowly using low-frequency noise so the gorge gently meanders.
   */
  public getCanyonCenter(z: number): number {
    const cfg = CONFIG.terrain.canyon;
    return this.noise2DCanyon(z * cfg.meanderFreq, 0) * cfg.meanderAmplitude;
  }

  /**
   * Half-width of the navigable gorge at world Z.
   * Varies between minHalfWidth and maxHalfWidth using a separate noise band.
   */
  public getCanyonHalfWidth(z: number): number {
    const cfg = CONFIG.terrain.canyon;
    const n = (this.noise2DCanyon(0, z * cfg.widthFreq) + 1) * 0.5; // → [0, 1]
    return cfg.minHalfWidth + n * (cfg.maxHalfWidth - cfg.minHalfWidth);
  }

  /** Returns the terrain type of the currently active biome. */
  public getCurrentTerrainType(): string {
    return this.biomeAt(this.currentBiomeIndex).terrainType;
  }

  // ── Math helpers ──────────────────────────────────────────────────────────

  /** Smooth Hermite interpolation — equivalent to GLSL smoothstep(edge0, edge1, x). */
  private smoothstep(edge0: number, edge1: number, x: number): number {
    const t = THREE.MathUtils.clamp((x - edge0) / (edge1 - edge0), 0, 1);
    return t * t * (3 - 2 * t);
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
        group.traverse((obj) => {
          if (obj instanceof THREE.Mesh) {
            obj.geometry.dispose();
            // Skip the shared terrain surface material — it lives across all chunks.
            // Only dispose per-rock materials (unique per instance).
            if (obj.material !== this.terrainMaterial) {
              if (Array.isArray(obj.material)) {
                obj.material.forEach((m) => m.dispose());
              } else {
                obj.material.dispose();
              }
            }
          }
        });
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

    // Pass 1 — displace each vertex vertically using getHeight()
    const pos = geo.attributes.position;
    for (let row = 0; row <= chunkRes; row++) {
      for (let col = 0; col <= chunkRes; col++) {
        const worldX = (col / chunkRes - 0.5) * chunkSize + cx * chunkSize;
        const worldZ = (row / chunkRes - 0.5) * chunkSize + cz * chunkSize;
        pos.setY(row * (chunkRes + 1) + col, this.getHeight(worldX, worldZ));
      }
    }
    geo.computeVertexNormals();

    // Pass 2 — vertex colours: lerp between dark and bright variants of the biome
    // colour based on each vertex's normalised height within this chunk.
    // Disabled when heightGradient is false — falls back to flat biome colour.
    const { heightGradient, heightGradientDark, heightGradientBright } = CONFIG.terrain.material;
    const vertexCount = pos.count;
    const colorData   = new Float32Array(vertexCount * 3);

    if (heightGradient) {
      let minY = Infinity, maxY = -Infinity;
      for (let i = 0; i < vertexCount; i++) {
        const y = pos.getY(i);
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
      const yRange = maxY - minY || 1;

      const darkColor   = this.currentBiomeColor.clone().multiplyScalar(heightGradientDark);
      const brightColor = this.currentBiomeColor.clone().multiplyScalar(heightGradientBright);
      const tempColor   = new THREE.Color();

      for (let i = 0; i < vertexCount; i++) {
        const t = (pos.getY(i) - minY) / yRange;
        tempColor.copy(darkColor).lerp(brightColor, t);
        colorData[i * 3]     = tempColor.r;
        colorData[i * 3 + 1] = tempColor.g;
        colorData[i * 3 + 2] = tempColor.b;
      }
    } else {
      // Flat biome colour — fill every vertex with the same colour
      for (let i = 0; i < vertexCount; i++) {
        colorData[i * 3]     = this.currentBiomeColor.r;
        colorData[i * 3 + 1] = this.currentBiomeColor.g;
        colorData[i * 3 + 2] = this.currentBiomeColor.b;
      }
    }

    geo.setAttribute('color', new THREE.BufferAttribute(colorData, 3));

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

    // Snap to the terrain vertex grid so the height query hits the same position
    // that buildTerrainMesh uses. The mesh interpolates linearly between vertices,
    // so querying at an off-grid point on steep/ridged terrain can return a height
    // above the rendered surface — causing rocks to visually float.
    // Global vertex grid = multiples of (chunkSize / chunkRes).
    const step = CONFIG.terrain.chunkSize / CONFIG.terrain.chunkRes;
    const snapWX = Math.round((chunkCenterX + localX) / step) * step;
    const snapWZ = Math.round((chunkCenterZ + localZ) / step) * step;
    const worldY = this.getHeight(snapWX, snapWZ);

    const scale = randFloat(rocks.minScale, rocks.maxScale);
    const geometry = new THREE.DodecahedronGeometry(scale, 0);

    // Tint rocks slightly brighter than the terrain — preserve hue, shift lightness
    const rockColor = this.currentBiomeColor.clone();
    const brightnessOffset = randFloat(rocks.colorOffset[0], rocks.colorOffset[1]);
    const variation = (Math.random() - 0.5) * rocks.colorVariation;
    rockColor.offsetHSL(0, 0, brightnessOffset + variation);

    const material = new THREE.MeshStandardMaterial({
      color: rockColor,
      flatShading: true,
      roughness: rocks.roughness,
      metalness: rocks.metalness,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(snapWX - chunkCenterX, worldY + scale * 0.5, snapWZ - chunkCenterZ);
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
   * Convert a position on the [rangeMin, rangeMax] number line to a THREE.Color
   * by lerping between the active palette's leftShade and rightShade.
   */
  private shadeToColor(position: number): THREE.Color {
    const { rangeMin, rangeMax } = CONFIG.terrain.color.hop;
    const t = THREE.MathUtils.clamp((position - rangeMin) / (rangeMax - rangeMin), 0, 1);
    return new THREE.Color(this.activePalette.leftShade).lerp(
      new THREE.Color(this.activePalette.rightShade), t
    );
  }

  /**
   * Apply a random signed hop to the current shade position on each biome change.
   * If the hop pushes past either boundary, snap the position back near the midpoint
   * so the shade never gets stuck at an extreme.
   */
  private hopShade() {
    const { rangeMin, rangeMax, hopMin, hopMax, midSnapJitter } = CONFIG.terrain.color.hop;
    const mid     = (rangeMin + rangeMax) / 2;
    const hopMag  = hopMin + Math.random() * (hopMax - hopMin);
    const hopDir  = Math.random() < 0.5 ? 1 : -1;

    this.shadePosition += hopDir * hopMag;

    if (this.shadePosition <= rangeMin || this.shadePosition >= rangeMax) {
      this.shadePosition = mid + (Math.random() - 0.5) * 2 * midSnapJitter;
    }

    this.currentBiomeColor = this.shadeToColor(this.shadePosition);
  }

  /**
   * Apply a small random hop to the sun intensity on each biome change.
   * Captures the live sun intensity as the "from" value so mid-transition
   * crossings lerp smoothly from wherever the sun actually is.
   */
  private hopSunIntensity() {
    const { min, max, hopMin, hopMax, midSnapJitter } = CONFIG.visuals.lighting.intensityWalk;
    const mid    = (min + max) / 2;
    const hopMag = hopMin + Math.random() * (hopMax - hopMin);
    const hopDir = Math.random() < 0.5 ? 1 : -1;

    this.currentSunIntensity = this.sun.intensity; // freeze current as "from"
    this.targetSunIntensity  = this.currentSunIntensity + hopDir * hopMag;

    if (this.targetSunIntensity <= min || this.targetSunIntensity >= max) {
      this.targetSunIntensity = mid + (Math.random() - 0.5) * 2 * midSnapJitter;
    }
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
      this.hopShade();
      this.hopSunIntensity();
      this.onBiomeChange?.(this.biomeAt(this.nextBiomeIndex).name);
      // Cache fog endpoints once — reused every frame during this transition
      this._fromFogColor.set(this.biomeAt(this.currentBiomeIndex).fog);
      this._toFogColor.set(this.biomeAt(this.nextBiomeIndex).fog);
    }

    // Interpolate fog and sun toward the target biome
    if (this.biomeTransition < 1) {
      this.biomeTransition += CONFIG.terrain.biomes.transitionSpeed;

      this.fog.color.lerpColors(this._fromFogColor, this._toFogColor, this.biomeTransition);
      this.sun.intensity = THREE.MathUtils.lerp(this.currentSunIntensity, this.targetSunIntensity, this.biomeTransition);

      if (this.biomeTransition >= 1) {
        this.currentBiomeIndex = this.nextBiomeIndex;
      }
    }
  }
}
