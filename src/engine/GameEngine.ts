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

  // Particles
  private particles: THREE.Points;
  private particlePositions: Float32Array;
  private particleActive: boolean[] = [];

  // Speed lines for motion effect
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

  // Altitude Guardrails
  private altWarning = "";
  private altGameOverTimer = 0;

  // Status message (e.g. "+35 PLASMA")
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

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(camera.fov, window.innerWidth / window.innerHeight, camera.near, camera.far);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, camera.pixelRatioCap));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    // Atmospheric fog
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

    this.terrain = new TerrainManager(this.scene, fog, this.sun);
    this.terrain.onBiomeChange = (name) => this.onBiomeChange?.(name);

    this.plasmaManager = new PlasmaRechargerManager(
      this.scene,
      (x, z) => this.terrain.getHeight(x, z)
    );

    this.ship = new ShipController(this.upgrades);
    this.scene.add(this.ship.group);

    // Spawn ship safely above terrain
    const spawnTerrainY = this.terrain.getHeight(0, 0) + terrain.groupYOffset;
    const { spawnClearance, spawnMinY, spawnMaxY } = CONFIG.altitude;
    this.ship.group.position.y = THREE.MathUtils.clamp(spawnTerrainY + spawnClearance, spawnMinY, spawnMaxY);

    this.stars = this.createStars();
    this.scene.add(this.stars);

    this.createSpaceObjects();
    this.scene.add(this.spaceObjects);

    // Initialize Particles
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

    // Post-processing
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

    // Speed lines for motion blur effect
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

  private createStars(): THREE.Group {
    const group = new THREE.Group();
    const starsCfg = CONFIG.visuals.stars;
    const starCount = starsCfg.minCount + Math.floor(Math.random() * starsCfg.maxExtraCount);

    // Create organic focal points (clumps)
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

  private checkCollisions() {
    const terrainHeight = this.terrain.getHeight(this.ship.group.position.x, this.ship.group.position.z) + CONFIG.terrain.groupYOffset;
    if (this.ship.group.position.y < terrainHeight + CONFIG.altitude.collisionOffset) this.triggerDeath("CRASHED INTO TERRAIN");
  }

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

  public animate() {
    const rawDt = this.clock.getDelta();
    const clampedDt = Math.min(rawDt, CONFIG.timing.dtClampMax);

    this.smoothedDt = THREE.MathUtils.lerp(this.smoothedDt, clampedDt, CONFIG.timing.dtLerpFactor);
    const dt = this.smoothedDt;

    const dtScale = dt * 60;

    if (this.isGameOver) {
      this.composer.render();
      return;
    }

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

    const distTotal = this.ship.group.position.length();
    const dist2D = Math.sqrt(this.ship.group.position.x ** 2 + this.ship.group.position.z ** 2);
    const deltaDist = distTotal - this.lastDist;
    this.lastDist = distTotal;

    this.points += deltaDist * 0.1;

    const alt = this.ship.group.position.y - CONFIG.terrain.groupYOffset;

    // Proximity/Crash Detection
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

    const { speed } = CONFIG;
    const motionCfg = CONFIG.motion;

    if (!this.isCrashing) {
        this.fuel -= currentFuelDrain * dtScale;
        if (this.fuel <= 0) this.triggerDeath("PLASMA DEPLETED");

        this.ship.update(dtScale);

        const motionIntensity = this.ship.motionIntensity;

        const shakeSpeedThreshold = (speed.cruise + speed.max) / 2.75;
        if (motionIntensity > motionCfg.shakeThreshold && this.shakeTimer < 0.2 && this.ship.currentSpeed > shakeSpeedThreshold) {
          this.shakeTimer = Math.max(this.shakeTimer, motionIntensity * 0.5);
        }

        // Update bloom intensity based on speed
        const bloomCfg = CONFIG.visuals.bloom;
        const speedRatio = (this.ship.currentSpeed - speed.min) / (speed.max - speed.min);
        this.bloomPass.strength = bloomCfg.baseStrength + (speedRatio * bloomCfg.speedBoost);

        // Dynamic FOV
        // const cameraCfg = CONFIG.camera;
        // this.camera.fov = cameraCfg.fov + (speedRatio * (cameraCfg.maxFov - cameraCfg.fov));
        // this.camera.updateProjectionMatrix();

        this.updateSpeedLines(motionIntensity);
    }

    const idealPos = CONFIG.cameraOffset.clone().applyQuaternion(this.ship.group.quaternion).add(this.ship.group.position);
    if (this.shakeTimer > 0) {
      const shakeStrength = this.shakeTimer * motionCfg.shakeStrengthMultiplier;
      idealPos.x += (Math.random() - 0.5) * shakeStrength;
      idealPos.y += (Math.random() - 0.5) * shakeStrength;
      idealPos.z += (Math.random() - 0.5) * shakeStrength;
      this.shakeTimer -= dt;
    }
    this.camera.position.lerp(idealPos, CONFIG.camera.lerp);

    // Prevent camera from going through the floor terrain
    const terrainHeightAtCamera = this.terrain.getHeight(this.camera.position.x, this.camera.position.z) + CONFIG.terrain.groupYOffset;
    if (this.camera.position.y < terrainHeightAtCamera + CONFIG.camera.terrainClearance) {
      this.camera.position.y = terrainHeightAtCamera + CONFIG.camera.terrainClearance;
    }

    // Maintain camera 'up' relative to ship for free-roam
    const shipUp = new THREE.Vector3(0, 1, 0).applyQuaternion(this.ship.group.quaternion);
    this.camera.up.lerp(shipUp, CONFIG.camera.lerp);

    this.camera.lookAt(CONFIG.cameraLookAtOffset.clone().applyQuaternion(this.ship.group.quaternion).add(this.ship.group.position));

    // Plasma recharger system
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

    // Decay status message
    if (this.statusMessageTimer > 0) {
      this.statusMessageTimer -= dt;
      if (this.statusMessageTimer <= 0) this.statusMessage = "";
    }

    this.updateShipGlow();

    this.terrain.update(this.ship.group.position, this.scene, dist2D);
    this.checkCollisions();
    this.updateParticles();

    // Space objects, stars, and speed lines follow camera to stay "infinite"
    this.stars.position.copy(this.camera.position);
    this.spaceObjects.position.copy(this.camera.position);
    this.speedLines.position.copy(this.ship.group.position);

    // Rotate space objects (planets/moons)
    this.spaceObjects.children.forEach(obj => {
        if (obj instanceof THREE.Mesh && obj.userData.rotSpeed) {
            obj.rotation.x += obj.userData.rotSpeed.x * dtScale;
            obj.rotation.y += obj.userData.rotSpeed.y * dtScale;
            obj.rotation.z += obj.userData.rotSpeed.z * dtScale;
        }
    });

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

    this.composer.render();
  }
}
