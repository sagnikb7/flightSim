import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { CONFIG } from './constants';
import { Upgrades } from './PersistenceService';
import { TerrainManager } from './TerrainManager';
import { ShipController } from './ShipController';
import { PlasmaRechargerManager } from './PlasmaRecharger';

export interface GameStats {
  health: number;
  maxHealth: number;
  fuel: number;
  maxFuel: number;
  points: number;
  speed: number;
  alt: number;
  dist: number;
  warning: string;
  isCrashing: boolean;
  statusMessage: string;
}

/**
 * GameEngine: The central orchestrator of the flight simulator.
 * 
 * This class manages the entire Three.js lifecycle, including:
 * - Scene setup (Lighting, Fog, Camera)
 * - Sub-system initialization (Terrain, Ship, Plasma, Music)
 * - Game state management (Fuel, Score, Health, Collisions)
 * - Visual effects (Particles, Speed lines, Stars, Post-processing)
 * - The core animation loop
 */
export class GameEngine {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private composer: EffectComposer;
  private clock: THREE.Clock;
  private bloomPass: UnrealBloomPass;
  private terrain: TerrainManager;
  private ship: ShipController;
  private stars: THREE.Group;
  private spaceObjects: THREE.Group = new THREE.Group();
  private sun: THREE.DirectionalLight;
  private plasmaManager: PlasmaRechargerManager;

  // Ship glow materials cache for plasma charge effect
  private shipOriginalMaterials: Map<THREE.Mesh, THREE.Material> = new Map();

  // Particles: Used for fuel/plasma collection effects
  private particles: THREE.Points;
  private particlePositions: Float32Array;
  private particleActive: boolean[] = [];

  // Speed lines: Visual feedback for high-speed motion
  private speedLines: THREE.Points;
  private speedLinePositions: Float32Array;
  private speedLineVelocities: Float32Array;

  // Gameplay State
  private upgrades: Upgrades;
  private maxHealth: number;
  private fuelDrainRate: number;
  private health: number;
  private fuel = CONFIG.fuel.max;
  public points = 0;
  private isGameOver = false;
  private isCrashing = false;
  private crashReason = "";
  private crashTimer = 0;
  private shakeTimer = 0;
  private lastDist = 0;

  // Altitude Guardrails: Logic for high-altitude penalties
  private altWarning = "";
  private altGameOverTimer = 0;

  // Status message: Transient UI notifications (e.g. "+35 PLASMA")
  private statusMessage = "";
  private statusMessageTimer = 0;

  // Smoothed delta time to prevent jitter from chunk generation
  private smoothedDt = 1 / 60;

  public onBiomeChange?: (name: string) => void;
  public onUpdateStats?: (stats: GameStats) => void;
  public onGameOver?: (reason: string) => void;

  constructor(container: HTMLElement, upgrades: Upgrades) {
    this.upgrades = upgrades;
    this.maxHealth = CONFIG.health.max + (this.upgrades.maxHealth * CONFIG.health.upgradeBonus);
    this.fuelDrainRate = CONFIG.fuel.drainRate * (1 - (this.upgrades.fuelEfficiency * CONFIG.fuel.upgradeEfficiency));
    this.health = this.maxHealth;

    const { camera, visuals, terrain } = CONFIG;

    // 1. Core Rendering Setup
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(camera.fov, window.innerWidth / window.innerHeight, camera.near, camera.far);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, camera.pixelRatioCap));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    // 2. Atmospheric & Environmental Effects
    const fog = new THREE.FogExp2(0x000008, visuals.fog.density);
    this.scene.fog = fog;
    this.renderer.setClearColor(0x000002);

    const sunCfg = visuals.sun;
    this.sun = new THREE.DirectionalLight(0xffffff, sunCfg.intensity);
    this.sun.position.set(sunCfg.position[0], sunCfg.position[1], sunCfg.position[2]);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.width = sunCfg.shadowMapSize;
    this.sun.shadow.mapSize.height = sunCfg.shadowMapSize;
    this.sun.shadow.camera.left = -sunCfg.shadowBounds;
    this.sun.shadow.camera.right = sunCfg.shadowBounds;
    this.sun.shadow.camera.top = sunCfg.shadowBounds;
    this.sun.shadow.camera.bottom = -sunCfg.shadowBounds;
    this.sun.shadow.camera.near = sunCfg.shadowNear;
    this.sun.shadow.camera.far = sunCfg.shadowFar;
    this.scene.add(this.sun);

    // 3. System Managers
    this.terrain = new TerrainManager(this.scene, fog, this.sun);
    this.terrain.onBiomeChange = (name) => this.onBiomeChange?.(name);

    this.plasmaManager = new PlasmaRechargerManager(
      this.scene,
      (x, z) => this.terrain.getHeight(x, z)
    );

    this.ship = new ShipController(this.upgrades);
    this.scene.add(this.ship.group);

    // 4. Initial Spawn Positioning
    const spawnTerrainY = this.terrain.getHeight(0, 0) + terrain.groupYOffset;
    const { spawnClearance, spawnMinY, spawnMaxY } = CONFIG.altitude;
    this.ship.group.position.y = THREE.MathUtils.clamp(spawnTerrainY + spawnClearance, spawnMinY, spawnMaxY);

    // 5. Background Visuals
    this.stars = this.createStars();
    this.scene.add(this.stars);

    this.createSpaceObjects();
    this.scene.add(this.spaceObjects);

    // 6. Particle System Initialization
    const particleCfg = visuals.particles;
    const pCount = particleCfg.count;
    const pGeo = new THREE.BufferGeometry();
    this.particlePositions = new Float32Array(pCount * 3);
    for(let i=0; i<pCount; i++) {
        this.particlePositions[i*3] = 0;
        this.particlePositions[i*3+1] = -1000;
        this.particlePositions[i*3+2] = 0;
        this.particleActive.push(false);
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(this.particlePositions, 3));
    this.particles = new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0x00ffff, size: particleCfg.size, transparent: true, opacity: particleCfg.opacity, blending: THREE.AdditiveBlending }));
    this.scene.add(this.particles);

    this.clock = new THREE.Clock();
    this.setupLighting();

    // 7. Post-Processing Pipeline
    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    const bloomCfg = visuals.bloom;
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      bloomCfg.baseStrength,
      bloomCfg.radius,
      bloomCfg.threshold
    );
    this.composer.addPass(this.bloomPass);

    // 8. Motion FX: Speed lines for high-speed flight
    const slCfg = visuals.speedLines;
    const speedLineCount = slCfg.count;
    const speedGeo = new THREE.BufferGeometry();
    this.speedLinePositions = new Float32Array(speedLineCount * 3);
    this.speedLineVelocities = new Float32Array(speedLineCount * 3);

    for(let i = 0; i < speedLineCount; i++) {
      this.speedLinePositions[i * 3] = 0;
      this.speedLinePositions[i * 3 + 1] = -1000;
      this.speedLinePositions[i * 3 + 2] = 0;
      this.speedLineVelocities[i * 3] = (Math.random() - 0.5) * 2;
      this.speedLineVelocities[i * 3 + 1] = (Math.random() - 0.5) * 2;
      this.speedLineVelocities[i * 3 + 2] = Math.random() * -5 - 5;
    }

    speedGeo.setAttribute('position', new THREE.BufferAttribute(this.speedLinePositions, 3));
    this.speedLines = new THREE.Points(
      speedGeo,
      new THREE.PointsMaterial({
        color: 0x00ffff,
        size: slCfg.size,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending
      })
    );
    this.scene.add(this.speedLines);

    window.addEventListener('resize', this.onResize.bind(this));
  }

  /**
   * Generates a procedural starfield with clumps, layers, and horizon culling.
   * Stars are grouped into a single unit that follows the camera for an infinite effect.
   */
  private createStars(): THREE.Group {
    const group = new THREE.Group();
    const starsCfg = CONFIG.visuals.stars;
    const starCount = starsCfg.minCount + Math.floor(Math.random() * starsCfg.maxExtraCount);

    // Create organic focal points (clumps) to avoid perfectly uniform distribution
    const clumps = Array.from({ length: starsCfg.clumpCount }, () => ({
        theta: Math.random() * Math.PI * 2,
        phi: Math.acos(2 * Math.random() - 1),
        spread: starsCfg.clumpSpreadMin + Math.random() * starsCfg.clumpSpreadRange
    }));

    const layers = [
      { size: starsCfg.layers[0].size, color: 0xffffff, ratio: starsCfg.layers[0].ratio },
      { size: starsCfg.layers[1].size, color: 0xeeeeee, ratio: starsCfg.layers[1].ratio },
      { size: starsCfg.layers[2].size, color: 0xfafafa, ratio: starsCfg.layers[2].ratio }
    ];

    layers.forEach(layer => {
      const geo = new THREE.BufferGeometry();
      const vertices = [];
      const count = Math.floor(starCount * layer.ratio);

      for (let i = 0; i < count; i++) {
        let theta, phi;

        // Either cluster near a clump or distribute randomly
        if (Math.random() < starsCfg.clusterChance) {
          const clump = clumps[Math.floor(Math.random() * clumps.length)];
          theta = clump.theta + (Math.random() - 0.5) * clump.spread;
          phi = clump.phi + (Math.random() - 0.5) * clump.spread;
        } else {
          theta = Math.random() * Math.PI * 2;
          phi = Math.acos(2 * Math.random() - 1);
        }

        const r = starsCfg.minRadius + Math.random() * starsCfg.radiusRange;
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        // Cull stars below the horizon to improve performance
        if (y > starsCfg.horizonCutoff) {
          vertices.push(x, y, z);
        }
      }

      geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      const mat = new THREE.PointsMaterial({
        color: layer.color,
        size: layer.size,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true
      });
      group.add(new THREE.Points(geo, mat));
    });

    return group;
  }

  /**
   * Spawns random "planets" or space debris at extreme distances
   * to provide a sense of scale and background depth.
   */
  private createSpaceObjects() {
    const soCfg = CONFIG.visuals.spaceObjects;
    const count = soCfg.minCount + Math.floor(Math.random() * soCfg.maxCount);
    for (let i = 0; i < count; i++) {
        const dist = soCfg.minDistance + Math.random() * soCfg.distanceRange;
        const angle = Math.random() * Math.PI * 2;
        const height = soCfg.minHeight + Math.random() * soCfg.heightRange;

        const size = soCfg.minSize + Math.random() * soCfg.sizeRange;
        const geo = new THREE.IcosahedronGeometry(size, 1);

        const color = new THREE.Color().setHSL(Math.random(), 0.7, 0.7);
        const mat = new THREE.MeshStandardMaterial({
            color: color,
            flatShading: true,
            emissive: color,
            emissiveIntensity: soCfg.emissiveIntensity
        });

        const planet = new THREE.Mesh(geo, mat);
        planet.position.set(
            Math.cos(angle) * dist,
            height,
            Math.sin(angle) * dist
        );

        planet.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

        (planet as any).userData.rotSpeed = {
            x: (Math.random() - 0.5) * soCfg.rotationSpeed,
            y: (Math.random() - 0.5) * soCfg.rotationSpeed,
            z: (Math.random() - 0.5) * soCfg.rotationSpeed
        };

        this.spaceObjects.add(planet);
    }
  }

  private setupLighting() {
    const { lighting } = CONFIG.visuals;
    const hemiLight = new THREE.HemisphereLight(0x87ceeb, 0x5a4a3a, lighting.hemisphereIntensity);
    this.scene.add(hemiLight);
    this.scene.add(new THREE.AmbientLight(0xffffff, lighting.ambientIntensity));
  }

  /**
   * Spawns "collection" particles when the ship gathers plasma.
   * Particles fly from a spawn radius toward the ship.
   */
  private triggerFuelEffect(pos: THREE.Vector3) {
    const particleCfg = CONFIG.visuals.particles;
    let activated = 0;
    for(let i=0; i<this.particleActive.length && activated < particleCfg.activateCount; i++) {
        if(!this.particleActive[i]) {
            this.particleActive[i] = true;
            const angle = Math.random() * Math.PI * 2;
            const dist = particleCfg.minSpawnRadius + Math.random() * (particleCfg.maxSpawnRadius - particleCfg.minSpawnRadius);
            this.particlePositions[i*3] = pos.x + Math.cos(angle) * dist;
            this.particlePositions[i*3+1] = pos.y + (Math.random() - 0.5) * particleCfg.heightSpread;
            this.particlePositions[i*3+2] = pos.z + Math.sin(angle) * dist;
            activated++;
        }
    }
  }

  /**
   * Manages the visual emissive glow of the ship during plasma recharge.
   */
  private updateShipGlow() {
    const glowTimer = this.plasmaManager.shipGlowTimer;
    const glowCfg = CONFIG.visuals.shipGlow;
    if (glowTimer > 0) {
      if (this.shipOriginalMaterials.size === 0) {
        this.ship.group.traverse(obj => {
          if (obj instanceof THREE.Mesh && obj.material instanceof THREE.MeshStandardMaterial) {
            this.shipOriginalMaterials.set(obj, obj.material.clone());
          }
        });
      }
      const intensity = glowTimer * glowCfg.intensityMultiplier;
      this.ship.group.traverse(obj => {
        if (obj instanceof THREE.Mesh && obj.material instanceof THREE.MeshStandardMaterial) {
          obj.material.emissive = new THREE.Color(0x66ccff);
          obj.material.emissiveIntensity = intensity;
        }
      });
    } else if (this.shipOriginalMaterials.size > 0) {
      this.shipOriginalMaterials.forEach((origMat, mesh) => {
        if (mesh.material instanceof THREE.MeshStandardMaterial) {
          mesh.material.emissive = (origMat as THREE.MeshStandardMaterial).emissive;
          mesh.material.emissiveIntensity = (origMat as THREE.MeshStandardMaterial).emissiveIntensity;
        }
      });
      this.shipOriginalMaterials.clear();
    }
  }

  /**
   * Animates active collection particles toward the ship.
   */
  private updateParticles() {
    const particleCfg = CONFIG.visuals.particles;
    const attr = this.particles.geometry.attributes.position as THREE.BufferAttribute;
    const target = this.ship.group.position;
    for(let i=0; i<this.particleActive.length; i++) {
        if(this.particleActive[i]) {
            const px = attr.getX(i);
            const py = attr.getY(i);
            const pz = attr.getZ(i);
            attr.setX(i, px + (target.x - px) * particleCfg.lerp);
            attr.setY(i, py + (target.y - py) * particleCfg.lerp);
            attr.setZ(i, pz + (target.z - pz) * particleCfg.lerp);
            if(Math.abs(target.x - px) < particleCfg.collectionThreshold && Math.abs(target.y - py) < particleCfg.collectionThreshold && Math.abs(target.z - pz) < particleCfg.collectionThreshold) {
                this.particleActive[i] = false;
                attr.setY(i, -1000);
            }
        }
    }
    attr.needsUpdate = true;
  }

  /**
   * Updates speed lines based on current ship motion.
   * Higher motion intensity = more visible and faster lines.
   */
  private updateSpeedLines(motionIntensity: number) {
    const slCfg = CONFIG.visuals.speedLines;
    const attr = this.speedLines.geometry.attributes.position as THREE.BufferAttribute;
    const material = this.speedLines.material as THREE.PointsMaterial;

    material.opacity = THREE.MathUtils.lerp(material.opacity, motionIntensity * slCfg.maxOpacity, 0.1);

    if (material.opacity > 0.05) {
      const shipPos = this.ship.group.position;
      const shipForward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.ship.group.quaternion);

      for (let i = 0; i < this.speedLinePositions.length / 3; i++) {
        const px = attr.getX(i);
        const py = attr.getY(i);
        const pz = attr.getZ(i);

        const newX = px + this.speedLineVelocities[i * 3] * motionIntensity;
        const newY = py + this.speedLineVelocities[i * 3 + 1] * motionIntensity;
        const newZ = pz + this.speedLineVelocities[i * 3 + 2] * motionIntensity * 2;

        const dist = Math.sqrt(
          Math.pow(newX - shipPos.x, 2) +
          Math.pow(newY - shipPos.y, 2) +
          Math.pow(newZ - shipPos.z, 2)
        );

        // Respawn line if it gets too far or behind the ship
        if (dist > slCfg.respawnDistance || newZ < shipPos.z - slCfg.zCullOffset) {
          const spreadX = (Math.random() - 0.5) * slCfg.spreadX;
          const spreadY = (Math.random() - 0.5) * slCfg.spreadY;
          const spreadZ = (Math.random() - 0.5) * slCfg.spreadZ;

          attr.setX(i, shipPos.x + shipForward.x * 20 + spreadX);
          attr.setY(i, shipPos.y + shipForward.y * 20 + spreadY);
          attr.setZ(i, shipPos.z + shipForward.z * 20 + spreadZ);
        } else {
          attr.setX(i, newX);
          attr.setY(i, newY);
          attr.setZ(i, newZ);
        }
      }

      attr.needsUpdate = true;
    }
  }

  /**
   * Basic AABB/Height check for terrain collision.
   */
  private checkCollisions() {
    const terrainHeight = this.terrain.getHeight(this.ship.group.position.x, this.ship.group.position.z) + CONFIG.terrain.groupYOffset;
    if (this.ship.group.position.y < terrainHeight + CONFIG.altitude.collisionOffset) this.triggerDeath("CRASHED INTO TERRAIN");
  }

  /**
   * Initiates the game over sequence with a crash animation.
   */
  private triggerDeath(reason: string) {
    if (this.isGameOver || this.isCrashing) return;
    this.isCrashing = true;
    this.crashReason = reason;
    this.crashTimer = CONFIG.crash.timerDuration;
    this.shakeTimer = CONFIG.crash.shakeTimerInitial;

    this.ship.group.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.material = new THREE.MeshBasicMaterial({ color: 0x000000 });
      }
    });
  }

  private onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.composer.setSize(window.innerWidth, window.innerHeight);
  }

  /**
   * The core game loop, called ~60 times per second.
   */
  public animate() {
    const rawDt = this.clock.getDelta();
    // Clamp DT to prevent massive jumps during lag or chunk generation
    const clampedDt = Math.min(rawDt, CONFIG.timing.dtClampMax);
    // Smooth DT to reduce jitter
    this.smoothedDt = THREE.MathUtils.lerp(this.smoothedDt, clampedDt, CONFIG.timing.dtLerpFactor);
    const dt = this.smoothedDt;
    const dtScale = dt * 60;

    if (this.isGameOver) {
      this.composer.render();
      return;
    }

    // --- 1. CRASH ANIMATION ---
    const crashCfg = CONFIG.crash;
    if (this.isCrashing) {
        this.crashTimer -= dt;
        this.shakeTimer = Math.max(this.shakeTimer, crashCfg.shakeMinimum);

        this.camera.rotation.z += crashCfg.cameraRollSpeed * dtScale;
        this.ship.group.position.y -= crashCfg.shipFallSpeed * dtScale;

        if (this.crashTimer <= 0) {
          this.isGameOver = true;
          this.onGameOver?.(this.crashReason);
        }
    }

    // --- 2. PROGRESSION & SCORING ---
    const distTotal = this.ship.group.position.length();
    const dist2D = Math.sqrt(this.ship.group.position.x ** 2 + this.ship.group.position.z ** 2);
    const deltaDist = distTotal - this.lastDist;
    this.lastDist = distTotal;

    this.points += deltaDist * 0.1;
    const alt = this.ship.group.position.y - CONFIG.terrain.groupYOffset;

    // --- 3. PROXIMITY & ALTITUDE LOGIC ---
    // Ray-like "look ahead" for collision warnings
    const forward = new THREE.Vector3(0, 0, 10).applyQuaternion(this.ship.group.quaternion);
    const lookAheadPos = this.ship.group.position.clone().add(forward);
    const terrainHeightAtShip = this.terrain.getHeight(this.ship.group.position.x, this.ship.group.position.z) + CONFIG.terrain.groupYOffset;
    const terrainHeightAhead = this.terrain.getHeight(lookAheadPos.x, lookAheadPos.z) + CONFIG.terrain.groupYOffset;

    let currentFuelDrain = this.fuelDrainRate;
    this.altWarning = "";

    const altCfg = CONFIG.altitude;
    const isCloseToGround = this.ship.group.position.y < terrainHeightAtShip + altCfg.groundWarningOffset;
    const isApproachingObstacle = this.ship.group.position.y < terrainHeightAhead + altCfg.groundWarningOffset;

    if (isCloseToGround || isApproachingObstacle) {
        this.altWarning = "PULL UP!";
        this.shakeTimer = Math.max(this.shakeTimer, CONFIG.motion.warningShakeTimer);
    } else if (alt >= altCfg.criticalThreshold) {
        // Punish flying too high (leaving the atmosphere)
        currentFuelDrain *= CONFIG.fuel.criticalAltMultiplier;
        this.altGameOverTimer += dt;
        this.altWarning = `PULL BACK IMMEDIATELY! ${Math.max(0, altCfg.criticalTimeout - this.altGameOverTimer).toFixed(1)}s`;
        if (this.altGameOverTimer >= altCfg.criticalTimeout) this.triggerDeath("LOST IN UPPER ATMOSPHERE");
    } else if (alt >= altCfg.warningThreshold) {
        currentFuelDrain *= CONFIG.fuel.highAltMultiplier;
        this.altWarning = "WARNING: HIGH ALTITUDE - PLASMA DRAIN INCREASED";
        this.altGameOverTimer = 0;
    } else {
        this.altGameOverTimer = 0;
    }

    // --- 4. SHIP & MOVEMENT UPDATES ---
    const { speed } = CONFIG;
    const motionCfg = CONFIG.motion;

    if (!this.isCrashing) {
        this.fuel -= currentFuelDrain * dtScale;
        if (this.fuel <= 0) this.triggerDeath("PLASMA DEPLETED");

        this.ship.update(dtScale);

        const motionIntensity = this.ship.motionIntensity;

        // Dynamic camera shake based on speed/turn intensity
        const shakeSpeedThreshold = (speed.cruise + speed.max) / 2.25;
        if (motionIntensity > motionCfg.shakeThreshold && this.shakeTimer < 0.2 && this.ship.currentSpeed > shakeSpeedThreshold) {
          this.shakeTimer = Math.max(this.shakeTimer, motionIntensity * 0.5);
        }

        // Visual juice: Bloom intensity matches speed
        const bloomCfg = CONFIG.visuals.bloom;
        const speedRatio = (this.ship.currentSpeed - speed.min) / (speed.max - speed.min);
        this.bloomPass.strength = bloomCfg.baseStrength + (speedRatio * bloomCfg.speedBoost);

        this.updateSpeedLines(motionIntensity);
    }

    // --- 5. CAMERA ORCHESTRATION ---
    // Smooth camera following with lerp
    const idealPos = CONFIG.cameraOffset.clone().applyQuaternion(this.ship.group.quaternion).add(this.ship.group.position);
    if (this.shakeTimer > 0) {
      const shakeStrength = this.shakeTimer * motionCfg.shakeStrengthMultiplier;
      idealPos.x += (Math.random() - 0.5) * shakeStrength;
      idealPos.y += (Math.random() - 0.5) * shakeStrength;
      idealPos.z += (Math.random() - 0.5) * shakeStrength;
      this.shakeTimer -= dt;
    }
    this.camera.position.lerp(idealPos, CONFIG.camera.lerp);

    // Safety: Prevent camera from clipping into terrain
    const terrainHeightAtCamera = this.terrain.getHeight(this.camera.position.x, this.camera.position.z) + CONFIG.terrain.groupYOffset;
    if (this.camera.position.y < terrainHeightAtCamera + CONFIG.camera.terrainClearance) {
      this.camera.position.y = terrainHeightAtCamera + CONFIG.camera.terrainClearance;
    }

    // Maintain camera 'up' relative to ship for smooth rolls
    const shipUp = new THREE.Vector3(0, 1, 0).applyQuaternion(this.ship.group.quaternion);
    this.camera.up.lerp(shipUp, CONFIG.camera.lerp);

    this.camera.lookAt(CONFIG.cameraLookAtOffset.clone().applyQuaternion(this.ship.group.quaternion).add(this.ship.group.position));

    // --- 6. PLASMA RECHARGE SYSTEM ---
    const plasmaResult = this.plasmaManager.update(
      this.ship.group.position,
      this.ship.group.quaternion,
      this.fuel,
      dt
    );
    if (plasmaResult.fuel > 0) {
      this.fuel = Math.min(CONFIG.fuel.max, this.fuel + plasmaResult.fuel);
      this.points += plasmaResult.points;
      this.triggerFuelEffect(this.ship.group.position.clone());
      this.statusMessage = `+${Math.round(plasmaResult.fuel)} PLASMA`;
      this.statusMessageTimer = CONFIG.timing.statusMessageDuration;
    }

    // Transient UI message decay
    if (this.statusMessageTimer > 0) {
      this.statusMessageTimer -= dt;
      if (this.statusMessageTimer <= 0) this.statusMessage = "";
    }

    this.updateShipGlow();

    // --- 7. ENVIRONMENT & BACKGROUND SYNC ---
    this.terrain.update(this.ship.group.position, this.scene, dist2D);
    this.checkCollisions();
    this.updateParticles();

    // Lock background objects to camera/ship to simulate infinite space
    this.stars.position.copy(this.camera.position);
    this.spaceObjects.position.copy(this.camera.position);
    this.speedLines.position.copy(this.ship.group.position);

    // Passive planetary rotation
    this.spaceObjects.children.forEach(obj => {
        if (obj instanceof THREE.Mesh && obj.userData.rotSpeed) {
            obj.rotation.x += obj.userData.rotSpeed.x * dtScale;
            obj.rotation.y += obj.userData.rotSpeed.y * dtScale;
            obj.rotation.z += obj.userData.rotSpeed.z * dtScale;
        }
    });

    // --- 8. UI STATE DISPATCH ---
    this.onUpdateStats?.({
      health: Math.round(Math.max(0, this.health)), maxHealth: this.maxHealth,
      fuel: Math.round(Math.max(0, Math.min(this.fuel, CONFIG.fuel.max))), maxFuel: CONFIG.fuel.max,
      points: Math.floor(this.points),
      speed: Math.round(this.ship.currentSpeed * 3.6),
      alt: Math.round(alt),
      dist: Math.round(distTotal),
      warning: this.altWarning,
      isCrashing: this.isCrashing,
      statusMessage: this.statusMessage
    });

    // Final render pass
    this.composer.render();
  }
}
