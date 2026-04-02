import * as THREE from 'three';
import gameConfig from './gameConfig';

export interface Biome {
  name: string;
  fog: number;
  terrainType: 'FLAT' | 'HILLS' | 'MOUNTAINS' | 'GORGES' | 'CANYON';
}

export const BIOMES: Biome[] = [

  { name: "EMBER PEAKS",    fog: 0x2A0E05, terrainType: 'MOUNTAINS' },
  { name: "TEAL PLATEAU",   fog: 0x001414, terrainType: 'FLAT'      },
  { name: "EMBER FLATS",    fog: 0x1A0A05, terrainType: 'FLAT'      },
  { name: "AMBER GORGES",   fog: 0x0a001a, terrainType: 'GORGES'    },

  { name: "GLACIAL HILLS",  fog: 0x080a10, terrainType: 'HILLS'     },
  { name: "VERDANT ROLL",   fog: 0x000a05, terrainType: 'HILLS'     },
  { name: "TIDAL EXPANSE",  fog: 0x001018, terrainType: 'HILLS'     },
  { name: "FERNWEAVE HILLS",fog: 0x020D08, terrainType: 'HILLS'     },

  // --- Canyon ---
  { name: "CRIMSON CHASM",  fog: 0x150404, terrainType: 'CANYON'    },
  { name: "AZURE RIFT",     fog: 0x04091a, terrainType: 'CANYON'    },
];

const cfg = gameConfig;

export const CONFIG = {
  ...cfg,
  // THREE.js objects derived from config arrays
  cameraOffset: new THREE.Vector3(...(cfg.camera.offset as [number, number, number])),
  cameraLookAtOffset: new THREE.Vector3(...(cfg.camera.lookAtOffset as [number, number, number])),
};
