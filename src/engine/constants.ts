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
  { name: "AETHERIA", fog: 0x000008, terrainType: 'FLAT', sunColor: 0x00ffff, sunIntensity: 0.8 },
  { name: "NOVA PRIME", fog: 0x1a0800, terrainType: 'MOUNTAINS', sunColor: 0xff6600, sunIntensity: 1.2 },
  { name: "VERIDIA", fog: 0x000a05, terrainType: 'HILLS', sunColor: 0x00ff88, sunIntensity: 0.7 },
  { name: "NEON VOID", fog: 0x0a001a, terrainType: 'GORGES', sunColor: 0xff00ff, sunIntensity: 0.6 },
  { name: "FROST REACH", fog: 0x080a10, terrainType: 'HILLS', sunColor: 0xccccff, sunIntensity: 0.9 }
];

const cfg = gameConfig;

export const CONFIG = {
  ...cfg,
  // THREE.js objects derived from config arrays
  cameraOffset: new THREE.Vector3(...(cfg.camera.offset as [number, number, number])),
  cameraLookAtOffset: new THREE.Vector3(...(cfg.camera.lookAtOffset as [number, number, number])),
};
