// ─── PlasmaRecharger ─────────────────────────────────────────────────────────
//
// The plasma recharger system is the game's fuel replenishment mechanic.
//
// How it works:
//   1. The PlasmaRechargerManager spawns recharger stations ahead of the ship.
//   2. Each station is a ground pad with a glowing beam cone shooting upward.
//   3. The player flies through the beam to collect fuel. Fuel amount scales
//      with proximity — flying low and centered gives the most plasma.
//   4. After collection (or after a timeout), the station deactivates.
//   5. The manager ensures there's always one active recharger in the world
//      and spawns the next one when the current one is used or expires.
//
// Difficulty ramp:
//   Early rechargers spawn directly ahead. As the player collects more,
//   they spawn at increasing angles off the flight path (up to ±60°),
//   forcing the player to hunt for them. This plateaus after 20 collections.
//
// Spawning distance:
//   Scales with current fuel level — when fuel is low, the next recharger
//   spawns closer (150 units). When fuel is full, it spawns further (400 units).
// ─────────────────────────────────────────────────────────────────────────────

import * as THREE from 'three';
import { CONFIG } from './constants';

// ─── Module state ────────────────────────────────────────────────────────────

const PR = CONFIG.plasmaRecharger;

/** Shared beam/glow color — sky-blue plasma matching the ship's engine exhaust. */
const BEAM_COLOR = 0x66ccff;

/** Tracks total collections across all rechargers. Drives the difficulty ramp. */
let globalCollectCount = 0;

// ─── PlasmaRecharger (single station) ────────────────────────────────────────
//
// One ground pad + beam cone + point light. Handles its own lifetime,
// collection detection, and cleanup.

export class PlasmaRecharger {
  /** Root group containing all meshes — add this to the scene. */
  public group: THREE.Group;

  /** Whether this recharger has been collected by the player. */
  public used = false;

  /** Whether this recharger timed out without being collected. */
  public expired = false;

  /** World-space position of the ground pad (set once on construction). */
  public worldPos = new THREE.Vector3();

  /** Seconds since this recharger was spawned (drives shimmer animation + lifetime). */
  public age = 0;

  private beamMesh: THREE.Mesh;
  private beamMaterial: THREE.ShaderMaterial;
  private baseMesh: THREE.Mesh;
  private beamLight: THREE.PointLight;
  private beamRange: number;

  constructor(x: number, groundY: number, z: number, beamRange = PR.beamRange) {
    this.beamRange = beamRange;
    this.group = new THREE.Group();

    this.baseMesh = this.buildBasePad();
    this.group.add(this.baseMesh);
    this.group.add(this.buildGlowRing());

    this.beamMaterial = this.buildBeamMaterial();
    this.beamMesh = this.buildBeamCone(this.beamMaterial);
    this.group.add(this.beamMesh);

    this.beamLight = this.buildBeamLight();
    this.group.add(this.beamLight);

    this.group.position.set(x, groundY, z);
    this.worldPos.set(x, groundY, z);
  }

  // ── Per-frame update ───────────────────────────────────────────────────────

  /**
   * Advance the recharger's lifetime and animate the beam shimmer.
   * @returns true if the recharger just expired this frame.
   */
  public tick(dt: number): boolean {
    if (this.used || this.expired) return false;

    this.age += dt;
    this.beamMaterial.uniforms.uTime.value = this.age;

    if (this.age >= PR.lifetime) {
      this.deactivate();
      this.expired = true;
      return true;
    }
    return false;
  }

  // ── Collection ─────────────────────────────────────────────────────────────

  /**
   * Check if the ship is within the beam and return the fuel amount collected.
   *
   * Fuel scales with proximity on two axes:
   *   - Vertical: 100% at ground level → 20% at beam top
   *   - Horizontal: 100% at beam center → 50% at collection edge
   *
   * @returns Fuel amount (0 if out of range or already used)
   */
  public tryCollect(shipPos: THREE.Vector3): number {
    if (this.used || this.expired) return 0;

    // Horizontal distance check (XZ plane)
    const dx = shipPos.x - this.worldPos.x;
    const dz = shipPos.z - this.worldPos.z;
    const horizDist = Math.sqrt(dx * dx + dz * dz);
    if (horizDist > PR.collectionRadius) return 0;

    // Vertical range check — must be above the pad and below beam top
    const shipAlt = shipPos.y - this.worldPos.y;
    if (shipAlt < 0 || shipAlt > this.beamRange) return 0;

    // Fuel scales inversely with distance on both axes
    const verticalFactor = 1.0 - (shipAlt / this.beamRange) * 0.8;
    const horizFactor = 1.0 - (horizDist / PR.collectionRadius) * 0.5;
    const fuel = PR.maxFuelReplenish * verticalFactor * horizFactor;

    this.deactivate();
    globalCollectCount++;
    return fuel;
  }

  // ── Cleanup ────────────────────────────────────────────────────────────────

  /** Remove all meshes from the scene and dispose GPU resources. */
  public dispose(scene: THREE.Scene) {
    scene.remove(this.group);
    this.group.traverse(child => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        mats.forEach(m => m.dispose());
      }
    });
  }

  // ── Internal helpers ───────────────────────────────────────────────────────

  /** Turn off the beam visuals and dim the base pad. */
  private deactivate() {
    this.used = true;
    this.beamMesh.visible = false;
    this.beamLight.visible = false;
    (this.baseMesh.material as THREE.MeshStandardMaterial).emissiveIntensity = 0;
  }

  // ── Mesh builders ──────────────────────────────────────────────────────────
  // Each returns a positioned mesh ready to add to this.group.

  /** Flat metallic cylinder sitting on the ground — the recharger's landing pad. */
  private buildBasePad(): THREE.Mesh {
    const geo = new THREE.CylinderGeometry(PR.baseRadius, PR.baseRadius, PR.baseHeight, 24);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x888899,
      metalness: 0.9,
      roughness: 0.2,
      emissive: BEAM_COLOR,
      emissiveIntensity: 0.3,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = PR.baseHeight / 2;
    return mesh;
  }

  /** Glowing torus ring sitting on top of the base pad. */
  private buildGlowRing(): THREE.Mesh {
    const geo = new THREE.TorusGeometry(PR.baseRadius * 0.6, 0.15, 8, 24);
    const mat = new THREE.MeshBasicMaterial({
      color: BEAM_COLOR,
      transparent: true,
      opacity: 0.6,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = PR.baseHeight + 0.05;
    return mesh;
  }

  /**
   * Truncated cone (frustum) that forms the visible beam.
   * Uses a custom ShaderMaterial for animated shimmer + vertical fade.
   */
  private buildBeamCone(material: THREE.ShaderMaterial): THREE.Mesh {
    const geo = new THREE.CylinderGeometry(
      PR.beamConeSpread,  // wide end (top)
      PR.beamBaseRadius,  // base end (bottom) — wider than a point for a searchlight look
      this.beamRange,
      24, 16, true,       // open-ended cylinder
    );
    const mesh = new THREE.Mesh(geo, material);
    mesh.position.y = PR.baseHeight + this.beamRange / 2;
    return mesh;
  }

  /** Point light near the top of the beam — casts atmospheric glow on nearby terrain. */
  private buildBeamLight(): THREE.PointLight {
    const light = new THREE.PointLight(BEAM_COLOR, 4, this.beamRange * 2);
    light.position.y = PR.baseHeight + this.beamRange * 0.7;
    return light;
  }

  /**
   * Custom shader for the beam cone.
   *
   * Vertex shader:
   *   - Passes UV coords and a normalized height (0 = base, 1 = top) to the fragment.
   *
   * Fragment shader:
   *   - baseFade: beam is bright at the base and fades toward the top.
   *   - shimmer: two layers of scrolling hash-noise create a plasma swirl effect.
   *   - pulse: slow sine wave adds a breathing glow.
   *   - Final alpha = baseFade × shimmer × pulse, kept subtle (× 0.35).
   */
  private buildBeamMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(BEAM_COLOR) },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        varying float vHeight;
        void main() {
          vUv = uv;
          // Normalized height: 0 at bottom, 1 at top
          vHeight = position.y / ${this.beamRange.toFixed(1)} + 0.5;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        uniform vec3 uColor;
        varying vec2 vUv;
        varying float vHeight;

        // Fast hash-based noise for shimmer effect
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f); // smoothstep
          return mix(
            mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
            mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
            f.y
          );
        }

        void main() {
          // Fade out toward the top of the beam
          float baseFade = 1.0 - vHeight * 0.85;

          // Two layers of scrolling noise — simulates rising plasma
          float n1 = noise(vec2(vUv.x * 6.0, vUv.y * 4.0 - uTime * 1.5));
          float n2 = noise(vec2(vUv.x * 12.0, vUv.y * 8.0 - uTime * 2.5));
          float shimmer = 0.5 + 0.3 * n1 + 0.2 * n2;

          // Slow breathing pulse
          float pulse = 0.9 + 0.1 * sin(uTime * 3.0);

          float alpha = baseFade * shimmer * pulse * 0.35;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }
}

// ─── PlasmaRechargerManager ──────────────────────────────────────────────────
//
// Owns the lifecycle of all PlasmaRecharger instances:
//   - Ensures exactly one active recharger exists at all times
//   - Spawns the next recharger when the current one is collected or expires
//   - Cleans up distant used/expired rechargers to free GPU memory
//   - Exposes shipGlowTimer so GameEngine can pulse the ship hull on collection

export class PlasmaRechargerManager {
  private scene: THREE.Scene;
  private rechargers: PlasmaRecharger[] = [];
  private getTerrainHeight: (x: number, z: number) => number;
  private firstSpawn = true;

  /**
   * Optional callback set by GameEngine to constrain the spawn X coordinate.
   * Used for CANYON terrain so rechargers only appear inside the gorge.
   * Receives the candidate (x, z) and returns the adjusted X.
   */
  public constrainSpawnX?: (x: number, z: number) => number;

  /**
   * Countdown timer for the ship hull glow effect after collecting plasma.
   * GameEngine reads this each frame to set emissive intensity on ship meshes.
   */
  public shipGlowTimer = 0;

  constructor(scene: THREE.Scene, getTerrainHeight: (x: number, z: number) => number) {
    this.scene = scene;
    this.getTerrainHeight = getTerrainHeight;
  }

  // ── Per-frame update ───────────────────────────────────────────────────────

  /**
   * Main update loop — called once per frame by GameEngine.
   *
   * Steps:
   *   1. Tick all rechargers (advance lifetime, animate)
   *   2. Check each recharger for collection against the ship position
   *   3. Decay the ship glow timer
   *   4. Spawn a new recharger if none are active
   *   5. Clean up old rechargers that are far behind the player
   *
   * @returns Total fuel collected and points earned this frame
   */
  public update(
    shipPos: THREE.Vector3,
    shipQuaternion: THREE.Quaternion,
    fuelPercent: number,
    dt: number,
  ): { fuel: number; points: number } {
    let totalFuel = 0;
    let totalPoints = 0;

    // Tick and check collection for all rechargers
    for (const recharger of this.rechargers) {
      recharger.tick(dt);
      const fuel = recharger.tryCollect(shipPos);
      if (fuel > 0) {
        totalFuel += fuel;
        totalPoints += PR.collectPoints;
        this.shipGlowTimer = PR.shipGlowDuration;
      }
    }

    // Decay the hull glow
    if (this.shipGlowTimer > 0) {
      this.shipGlowTimer -= dt;
    }

    // Always keep one active recharger in the world
    if (!this.hasActiveRecharger()) {
      this.spawnNext(shipPos, shipQuaternion, fuelPercent);
    }

    this.cleanupDistant(shipPos);

    return { fuel: totalFuel, points: totalPoints };
  }

  /** Reset all state for a new game session. */
  public reset() {
    for (const r of this.rechargers) {
      r.dispose(this.scene);
    }
    this.rechargers = [];
    this.shipGlowTimer = 0;
    this.firstSpawn = true;
    globalCollectCount = 0;
  }

  // ── Spawning ───────────────────────────────────────────────────────────────

  /**
   * Spawn the next recharger ahead of the ship.
   *
   * Placement logic:
   *   - Distance scales with fuel: low fuel → closer spawn, full fuel → further
   *   - Angle offset increases with difficulty (globalCollectCount):
   *     early game = directly ahead, late game = up to ±60° off the flight path
   *   - The first spawn is always at a fixed distance so the player sees it immediately
   */
  private spawnNext(shipPos: THREE.Vector3, shipQuaternion: THREE.Quaternion, fuelPercent: number) {
    const spawnDist = this.calculateSpawnDistance(fuelPercent);
    const angleOffset = this.calculateAngleOffset();

    // Project the ship's forward direction onto the XZ plane and rotate by the offset
    const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(shipQuaternion);
    forward.y = 0;
    forward.normalize();
    forward.applyAxisAngle(new THREE.Vector3(0, 1, 0), angleOffset);

    let spawnX = shipPos.x + forward.x * spawnDist;
    const spawnZ = shipPos.z + forward.z * spawnDist;
    if (this.constrainSpawnX) spawnX = this.constrainSpawnX(spawnX, spawnZ);
    const groundY = this.getTerrainHeight(spawnX, spawnZ) + CONFIG.terrain.groupYOffset;

    const recharger = new PlasmaRecharger(spawnX, groundY, spawnZ);
    this.rechargers.push(recharger);
    this.scene.add(recharger.group);
  }

  /** How far ahead to place the next recharger (closer when fuel is low). */
  private calculateSpawnDistance(fuelPercent: number): number {
    if (this.firstSpawn) {
      this.firstSpawn = false;
      return PR.spawning.firstDistance;
    }
    const fuelT = THREE.MathUtils.clamp(fuelPercent / 100, 0, 1);
    return PR.spawning.minDistance + (PR.spawning.maxDistance - PR.spawning.minDistance) * fuelT;
  }

  /** Random angle offset based on difficulty progression. */
  private calculateAngleOffset(): number {
    const difficultyT = Math.min(globalCollectCount / PR.difficultyRampCount, 1);
    const maxOffset = PR.maxAngleOffset * difficultyT;
    return (Math.random() - 0.5) * 2 * maxOffset;
  }

  // ── Helpers ────────────────────────────────────────────────────────────────

  /** True if at least one recharger in the world hasn't been used or expired. */
  private hasActiveRecharger(): boolean {
    return this.rechargers.some(r => !r.used && !r.expired);
  }

  /** Remove used/expired rechargers that are far behind the player. */
  private cleanupDistant(shipPos: THREE.Vector3) {
    const maxDist = CONFIG.terrain.chunkSize * CONFIG.terrain.renderDist * 2;
    this.rechargers = this.rechargers.filter(r => {
      if ((r.used || r.expired) && shipPos.distanceTo(r.worldPos) > maxDist) {
        r.dispose(this.scene);
        return false;
      }
      return true;
    });
  }
}
