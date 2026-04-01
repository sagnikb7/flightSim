import * as THREE from 'three';
import gameConfig from './gameConfig';

export interface Biome {
  name: string;
  fog: number;
  terrainType: 'FLAT' | 'HILLS' | 'MOUNTAINS' | 'GORGES';
  sunColor: number;
  sunIntensity: number;
}

export const BIOMES: Biome[] = [
  // --- Original (renamed) ---
  { name: "TEAL PLATEAU",   fog: 0x001414, terrainType: 'FLAT',       sunColor: 0x2ED6C9, sunIntensity: 0.8 },
  { name: "EMBER PEAKS",    fog: 0x2A0E05, terrainType: 'MOUNTAINS',  sunColor: 0xFF5A1F, sunIntensity: 1.2 },
  { name: "VERDANT ROLL",   fog: 0x000a05, terrainType: 'HILLS',      sunColor: 0x6EDC5F, sunIntensity: 0.7 },
  { name: "AMBER GORGES",   fog: 0x0a001a, terrainType: 'GORGES',     sunColor: 0xFFB347, sunIntensity: 0.6 },
  { name: "GLACIAL HILLS",  fog: 0x080a10, terrainType: 'HILLS',      sunColor: 0xE6F2FF, sunIntensity: 0.9 },

  // --- New ---
  { name: "EMBER FLATS",    fog: 0x1A0A05, terrainType: 'FLAT',       sunColor: 0xFF7A2F, sunIntensity: 1.0 },
  { name: "TIDAL EXPANSE",  fog: 0x001018, terrainType: 'HILLS',      sunColor: 0x3AA6FF, sunIntensity: 0.85 },
  { name: "FERNWEAVE HILLS",fog: 0x020D08, terrainType: 'HILLS',      sunColor: 0xA4E07C, sunIntensity: 0.75 }
];

const cfg = gameConfig;

export const CONFIG = {
  ...cfg,
  // THREE.js objects derived from config arrays
  cameraOffset: new THREE.Vector3(...(cfg.camera.offset as [number, number, number])),
  cameraLookAtOffset: new THREE.Vector3(...(cfg.camera.lookAtOffset as [number, number, number])),
};
