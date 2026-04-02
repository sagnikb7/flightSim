import * as THREE from 'three';
import { CONFIG } from './constants';

/**
 * LightingManager: Owns all scene lights.
 *
 * Lights managed here:
 *   - Primary sun   (DirectionalLight + shadow) — intensity driven externally by TerrainManager random walk
 *   - Preset lights (HemisphereLight, AmbientLight, fill DirectionalLight) — set once from activePreset
 *   - Secondary sun (optional backlight DirectionalLight) — set once from config
 *
 * GameEngine holds a LightingManager instance and passes `lighting.sun` to
 * TerrainManager so it can continue updating intensity via its random walk.
 */
export class LightingManager {
  /** Primary directional sun — colour fixed from config, intensity driven by TerrainManager. */
  readonly sun: THREE.DirectionalLight;

  constructor(private scene: THREE.Scene) {
    this.sun = this.createPrimarySun();
    this.createPresetLights();
    this.createSecondarySun();
  }

  // ── Primary sun ────────────────────────────────────────────────────────────
  private createPrimarySun(): THREE.DirectionalLight {
    const cfg = CONFIG.visuals.lighting.sun;
    const sun = new THREE.DirectionalLight(cfg.color, cfg.intensity);
    sun.position.set(cfg.position[0], cfg.position[1], cfg.position[2]);
    sun.castShadow = true;
    sun.shadow.mapSize.width  = cfg.shadowMapSize;
    sun.shadow.mapSize.height = cfg.shadowMapSize;
    sun.shadow.camera.left   = -cfg.shadowBounds;
    sun.shadow.camera.right  =  cfg.shadowBounds;
    sun.shadow.camera.top    =  cfg.shadowBounds;
    sun.shadow.camera.bottom = -cfg.shadowBounds;
    sun.shadow.camera.near   =  cfg.shadowNear;
    sun.shadow.camera.far    =  cfg.shadowFar;
    this.scene.add(sun);
    return sun;
  }

  // ── Preset-based fill / ambient / hemisphere ────────────────────────────────
  private createPresetLights(): void {
    const lighting = CONFIG.visuals.lighting;
    const p = lighting.presets[lighting.activePreset];

    const hemi = new THREE.HemisphereLight(p.hemiSkyColor, p.hemiGroundColor, p.hemiIntensity);
    this.scene.add(hemi);

    this.scene.add(new THREE.AmbientLight(p.ambientColor, p.ambientIntensity));

    const fill = new THREE.DirectionalLight(p.fillColor, p.fillIntensity);
    fill.position.set(p.fillPosition[0], p.fillPosition[1], p.fillPosition[2]);
    this.scene.add(fill);
  }

  // ── Secondary sun (optional backlight) ─────────────────────────────────────
  private createSecondarySun(): void {
    const sec = CONFIG.visuals.lighting.secondarySun;
    if (!sec.enabled) return;
    const secondary = new THREE.DirectionalLight(sec.color, sec.intensity);
    secondary.position.set(sec.position[0], sec.position[1], sec.position[2]);
    this.scene.add(secondary);
  }
}
