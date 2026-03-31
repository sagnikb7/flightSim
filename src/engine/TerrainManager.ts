import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise';
import { CONFIG, BIOMES } from './constants';

const TERRAIN_PARAMS = {
  'FLAT': { freq: 0.002, amp: 15, power: 1, octaves: 2, ridged: false },
  'HILLS': { freq: 0.004, amp: 45, power: 1.5, octaves: 3, ridged: false },
  'MOUNTAINS': { freq: 0.006, amp: 110, power: 2.2, octaves: 4, ridged: true },
  'GORGES': { freq: 0.005, amp: 130, power: 0.6, octaves: 3, ridged: false }
};

// Returns a random grayscale color with brightness in [0.3, 0.9] (3–9 on a 0–10 scale)
function randomGrayscale(): THREE.Color {
  const v = 0.3 + Math.random() * 0.6;
  return new THREE.Color(v, v, v);
}

export class TerrainManager {
  private noise2D = createNoise2D();
  private terrainChunks: Map<string, THREE.Group> = new Map();
  private terrainMaterial: THREE.MeshStandardMaterial;
  
  public fuelCells: THREE.Group[] = [];
  
  private currentBiomeIndex = 0;
  private nextBiomeIndex = 0;
  private biomeOffset = (() => {
    // Only start at a FLAT or HILLS biome so the ship never spawns into mountains/gorges
    const safeIndices = BIOMES.map((_, i) => i).filter(i => BIOMES[i].terrainType === 'FLAT' || BIOMES[i].terrainType === 'HILLS');
    return safeIndices[Math.floor(Math.random() * safeIndices.length)];
  })();
  private biomeTransition = 1;

  // Variable-length biomes: each entry is the length of that biome in metres (1000–5000)
  // biomeCumulative[i] = distance at which biome i starts; biomeCumulative[0] = 0
  private biomeLengths: number[] = [];
  private biomeCumulative: number[] = [0];
  private fog: THREE.FogExp2;
  private sun: THREE.DirectionalLight;
  private currentBiomeColor: THREE.Color;

  public onBiomeChange?: (name: string) => void;

  constructor(scene: THREE.Scene, fog: THREE.FogExp2, sun: THREE.DirectionalLight) {
    this.fog = fog;
    this.sun = sun;

    // Initial biome setup based on offset
    this.currentBiomeIndex = 0;
    this.nextBiomeIndex = 0;
    const initialBiome = BIOMES[this.biomeOffset % BIOMES.length];

    // Initialize fog and sun to match starting biome
    this.fog.color.set(initialBiome.fog);
    this.sun.color.set(initialBiome.sunColor);
    this.sun.intensity = initialBiome.sunIntensity;

    this.currentBiomeColor = randomGrayscale();
    this.terrainMaterial = new THREE.MeshStandardMaterial({
      color: this.currentBiomeColor,
      flatShading: true,
      roughness: 0.95,
      metalness: 0.0
    });
  }

  // Grow the biome length array until it covers at least upToDist metres
  private growBiomes(upToDist: number) {
    while (this.biomeCumulative[this.biomeCumulative.length - 1] <= upToDist) {
      const len = 1000 + Math.random() * 4000; // 1000–5000 m
      this.biomeLengths.push(len);
      this.biomeCumulative.push(this.biomeCumulative[this.biomeCumulative.length - 1] + len);
    }
  }

  // Returns the sequential biome slot index and transition (0–1) for a given distance
  private getBiomeAtDist(dist: number): { idx: number; transition: number } {
    this.growBiomes(dist);
    // Binary search for the segment containing dist
    let lo = 0, hi = this.biomeLengths.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (this.biomeCumulative[mid] <= dist) lo = mid;
      else hi = mid - 1;
    }
    const transition = (dist - this.biomeCumulative[lo]) / this.biomeLengths[lo];
    return { idx: lo, transition };
  }

  private getNoise(x: number, z: number, freq: number, octaves: number, ridged: boolean): number {
    let value = 0;
    let amplitude = 1;
    let f = freq;
    let weight = 0;

    for (let i = 0; i < octaves; i++) {
      let n = this.noise2D(x * f, z * f);
      
      if (ridged) {
        n = 1.0 - Math.abs(n);
        n = n * n; // Sharpen peaks
      } else {
        n = (n + 1) / 2;
      }

      value += n * amplitude;
      weight += amplitude;
      amplitude *= 0.5;
      f *= 2.1;
    }

    return value / weight;
  }

  public getHeight(x: number, z: number) {
    const dist = Math.sqrt(x * x + z * z);
    const { idx, transition } = this.getBiomeAtDist(dist);
    const b1 = BIOMES[(idx + this.biomeOffset) % BIOMES.length];
    const b2 = BIOMES[(idx + 1 + this.biomeOffset) % BIOMES.length];

    const p1 = TERRAIN_PARAMS[b1.terrainType];
    const p2 = TERRAIN_PARAMS[b2.terrainType];

    // Sample noise for both biomes and lerp
    const n1 = this.getNoise(x, z, p1.freq, p1.octaves, p1.ridged);
    const n2 = this.getNoise(x, z, p2.freq, p2.octaves, p2.ridged);
    
    const val1 = Math.pow(n1, p1.power);
    const val2 = Math.pow(n2, p2.power);

    const n = THREE.MathUtils.lerp(val1, val2, transition);
    const amp = THREE.MathUtils.lerp(p1.amp, p2.amp, transition);
    
    const baseHeight = amp;
    const offset = -45;

    return (n * baseHeight) + offset;
  }

  private createChunk(cx: number, cz: number, scene: THREE.Scene) {
    const group = new THREE.Group();
    const res = CONFIG.chunkRes;
    const size = CONFIG.chunkSize;
    const geo = new THREE.PlaneGeometry(size, size, res, res);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position;

    // Set vertex heights
    for (let i = 0; i <= res; i++) {
      for (let j = 0; j <= res; j++) {
        const px = (j / res - 0.5) * size + cx * size;
        const pz = (i / res - 0.5) * size + cz * size;
        const idx = i * (res + 1) + j;
        pos.setY(idx, this.getHeight(px, pz));
      }
    }

    geo.computeVertexNormals();

    this.terrainMaterial.color.copy(this.currentBiomeColor);

    const mesh = new THREE.Mesh(geo, this.terrainMaterial);
    mesh.receiveShadow = true;
    group.add(mesh);

    // Fuel Cells
    const fuelCount = CONFIG.fuelCanCount;

    for(let i = 0; i < fuelCount; i++) {
      const rx = (Math.random() - 0.5) * CONFIG.chunkSize;
      const rz = (Math.random() - 0.5) * CONFIG.chunkSize;
      const ry = 5 + Math.random() * 25;
      const fuelGroup = new THREE.Group();
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(1.2, 16, 16),
        new THREE.MeshStandardMaterial({
          color: 0x00ffff,
          emissive: 0x00aaaa,
          emissiveIntensity: 1.5,
          transparent: true,
          opacity: 0.9,
          roughness: 0.3,
          metalness: 0.1
        })
      );
      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(2.5, 16, 16),
        new THREE.MeshBasicMaterial({
          color: 0x00ffff,
          transparent: true,
          opacity: 0.2
        })
      );
      fuelGroup.add(core);
      fuelGroup.add(glow);
      fuelGroup.position.set(rx, ry, rz);
      group.add(fuelGroup);
      this.fuelCells.push(fuelGroup);
    }

    group.position.set(cx * CONFIG.chunkSize, -50, cz * CONFIG.chunkSize);
    scene.add(group);
    return group;
  }

  public update(playerPos: THREE.Vector3, scene: THREE.Scene, distance: number) {
    const px = Math.floor((playerPos.x + CONFIG.chunkSize / 2) / CONFIG.chunkSize);
    const pz = Math.floor((playerPos.z + CONFIG.chunkSize / 2) / CONFIG.chunkSize);

    for (let x = px - CONFIG.renderDist; x <= px + CONFIG.renderDist; x++) {
      for (let z = pz - CONFIG.renderDist; z <= pz + CONFIG.renderDist; z++) {
        const key = `${x},${z}`;
        if (!this.terrainChunks.has(key)) {
          this.terrainChunks.set(key, this.createChunk(x, z, scene));
        }
      }
    }

    for (const [key, group] of this.terrainChunks) {
      const [cx, cz] = key.split(',').map(Number);
      if (Math.abs(cx - px) > CONFIG.renderDist || Math.abs(cz - pz) > CONFIG.renderDist) {
        group.traverse((child) => {
          if (child instanceof THREE.Group) {
            this.fuelCells = this.fuelCells.filter(f => f !== child);
          }
        });
        scene.remove(group);
        this.terrainChunks.delete(key);
      }
    }

    this.updateBiomes(distance);
  }

  private updateBiomes(distance: number) {
    const { idx: targetIdx } = this.getBiomeAtDist(distance);
    if (targetIdx !== this.nextBiomeIndex) {
      this.nextBiomeIndex = targetIdx;
      this.biomeTransition = 0;

      const newBiome = BIOMES[(this.nextBiomeIndex + this.biomeOffset) % BIOMES.length];
      this.currentBiomeColor = randomGrayscale();
      this.onBiomeChange?.(newBiome.name);
    }

    if (this.biomeTransition < 1) {
      this.biomeTransition += 0.005;
      const b1 = BIOMES[(this.currentBiomeIndex + this.biomeOffset) % BIOMES.length];
      const b2 = BIOMES[(this.nextBiomeIndex + this.biomeOffset) % BIOMES.length];

      this.fog.color.lerpColors(new THREE.Color(b1.fog), new THREE.Color(b2.fog), this.biomeTransition);

      // Lerp Sun color and intensity
      this.sun.color.lerpColors(new THREE.Color(b1.sunColor), new THREE.Color(b2.sunColor), this.biomeTransition);
      this.sun.intensity = THREE.MathUtils.lerp(b1.sunIntensity, b2.sunIntensity, this.biomeTransition);

      if (this.biomeTransition >= 1) {
          this.currentBiomeIndex = this.nextBiomeIndex;
      }
    }
  }

}
