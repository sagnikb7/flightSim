// ─── Master Config ───────────────────────────────────────────────────────────
// Top-level gameplay configuration. Complex module configs are imported from
// ModuleConfigs/ and merged in — edit those files to tune terrain or lighting.

import lightConfig   from './ModuleConfigs/lightConfig';
import terrainConfig from './ModuleConfigs/terrainConfig';

const masterConfig = {

  // ── Health ──────────────────────────────────────────────────────────────────
  // Ship hull points. upgradeBonus is added per upgrade level (max 5 levels).
  health: {
    max: 100,
    upgradeBonus: 20,       // +20 HP per upgrade level → max 200 HP at level 5
  },

  // ── Fuel / Plasma ──────────────────────────────────────────────────────────
  // Plasma is consumed every frame. Flying too high drains it faster.
  // upgradeEfficiency reduces drain by 10% per level.
  fuel: {
    max: 100,
    drainRate: 0.04,           // base plasma consumed per frame-tick
    upgradeEfficiency: 0.1,    // 10% drain reduction per upgrade level
    highAltMultiplier: 3,      // drain multiplier above warningThreshold
    criticalAltMultiplier: 10, // drain multiplier above criticalThreshold
  },

  // ── Ship Physics ────────────────────────────────────────────────────────────
  // Speed in m/s (HUD converts to km/h × 3.6).
  // Diving accelerates toward max, climbing decelerates toward min.
  // drag pulls speed back toward cruise when flying level.
  speed: {
    min: 40,                // stall speed — ship won't go slower
    max: 250,               // terminal velocity — cap from diving
    cruise: 100,            // neutral speed when flying level
    accelRate: 0.5,         // speed gained per tick while diving
    decelRate: 0.3,         // speed lost per tick while climbing
    gravityImpact: 0.8,     // how much pitch angle affects speed change
    throttleMultiplier: 1.5,// W-key thrust = accelRate × this
    drag: 0.01,             // pull toward cruise speed when level
    gravity: 0.075,         // base downward force applied every frame (units/tick)
  },

  // ── Ship Controls ──────────────────────────────────────────────────────────
  // Torque values = angular acceleration per input per frame.
  // Lower = sluggish, higher = twitchy. damping bleeds off rotation each frame.
  // agilityReduction: at max speed, torques are reduced by this fraction (0–1).
  shipControls: {
    pitchTorque: 0.0015,    // W/S nose up/down responsiveness
    rollTorque: 0.0035,     // A/D roll responsiveness
    yawTorque: 0.0008,      // Q/E rudder responsiveness
    bankingYaw: 0.0015,     // auto-yaw induced by rolling (coordinated turn)
    noseDip: 0.00025,       // constant downward pitch — requires active piloting
    damping: 0.88,          // 0.88 = 12% rotation decay per frame (air resistance)
    agilityReduction: 0.5,  // at max speed, controls are 50% stiffer
    forwardScale: 0.01,     // converts speed to position movement per tick
    gravityScale: 0.15,     // scales gravity for flight feel (lower = floatier)
  },

  // ── Engine Glow ────────────────────────────────────────────────────────────
  // Controls the exhaust glow animation on the ship engines.
  shipGlow: {
    idleBase: 1.4,          // resting glow intensity
    idleAmplitude: 0.3,     // how much the idle pulse oscillates (±0.3)
    idleFrequency: 0.0015,  // pulse speed (radians per ms)
    thrustTarget: 8.0,      // glow intensity when W is held
    thrustLerp: 0.1,        // how fast glow ramps up on thrust
    fadeLerp: 0.04,         // how fast glow fades back to idle
    yawGlowDelta: 2.0,      // how much one thruster dims/brightens during yaw
  },

  // ── Camera ─────────────────────────────────────────────────────────────────
  // Third-person chase camera. offset = position behind ship, lookAtOffset = focus ahead.
  // FOV widens at high speed for a sense of velocity (fov → maxFov).
  camera: {
    fov: 75,                // base field of view (degrees)
    maxFov: 90,             // FOV at max speed
    near: 0.1,              // near clipping plane
    far: 3000,              // far clipping plane — matches fog fade
    pixelRatioCap: 1.5,     // caps devicePixelRatio for performance
    lerp: 0.1,              // camera smoothing (0 = frozen, 1 = instant)
    offset: [0, 5, -15] as [number, number, number],       // camera position relative to ship
    lookAtOffset: [0, 2, 10] as [number, number, number],   // where camera looks relative to ship
    terrainClearance: 2,    // minimum height above terrain for camera
  },

  // ── Terrain ────────────────────────────────────────────────────────────────
  // Defined in ModuleConfigs/terrainConfig.ts — edit there to tune noise, biomes, canyon, colours.
  terrain: terrainConfig,

  // ── Plasma Recharger ───────────────────────────────────────────────────────
  // Beam stations that spawn ahead of the ship. Fly through the beam to refuel.
  // Fuel amount scales with proximity — closer to base = more fuel.
  plasmaRecharger: {
    baseRadius: 3.5,        // ground pad radius
    baseHeight: 1.2,        // ground pad height
    beamConeSpread: 8.0,    // beam radius at the top of the cone
    beamBaseRadius: 2.0,    // beam radius at the bottom (0 = sharp point, higher = wider base)
    beamRange: 90,          // how high the beam reaches (units)
    maxFuelReplenish: 70,   // max fuel at point-blank flyover
    collectionRadius: 15,   // horizontal distance to trigger collection
    shipGlowDuration: 1.2,  // seconds the ship glows after collecting
    lifetime: 30,           // seconds before uncollected recharger expires
    maxAngleOffset: 1.0472, // max spawn angle offset at hardest difficulty (~60°)
    difficultyRampCount: 20,// collections before difficulty plateaus
    collectPoints: 500,     // score awarded per collection
    spawning: {
      firstDistance: 500,   // first recharger is placed close so player sees it
      minDistance: 250,     // closest spawn when fuel is low
      maxDistance: 500,     // farthest spawn when fuel is full
    },
  },

  // ── Altitude Rules ─────────────────────────────────────────────────────────
  // Guardrails that punish flying too high or warn when too low.
  altitude: {
    warningThreshold: 150,  // alt (m) where "HIGH ALTITUDE" warning + 4× drain starts
    criticalThreshold: 200, // alt (m) where "PULL BACK" + 10× drain + death timer starts
    criticalTimeout: 3,     // seconds above critical before forced death
    groundWarningOffset: 15,// units above terrain that triggers "PULL UP!" warning
    collisionOffset: 1,     // units above terrain = instant crash
    spawnClearance: 35,     // units above terrain for ship spawn
    spawnMinY: 5,           // minimum spawn Y position
    spawnMaxY: 70,          // maximum spawn Y position
  },

  // ── Visuals ────────────────────────────────────────────────────────────────
  visuals: {

    // ── Lighting ──────────────────────────────────────────────────────────────
    // Defined in ModuleConfigs/lightConfig.ts — edit there to tune sun, presets, intensity walk.
    lighting: lightConfig,

    // Bloom post-processing — glow effect that intensifies at high speed
    bloom: {
      baseStrength: 0.8,    // bloom at idle
      speedBoost: 0.6,      // added bloom at max speed (total: 0.8 + 0.6 = 1.4)
      radius: 0.3,          // blur spread
      threshold: 0.8,       // brightness cutoff for bloom
    },

    // Exponential fog — fades distant terrain to black
    fog: {
      density: 0.0009,      // higher = thicker fog, shorter visibility
    },

    // Collectible particle burst — cyan sparkles that fly toward ship on fuel pickup
    particles: {
      count: 200,           // total particle pool size
      size: 0.4,            // particle dot size
      opacity: 0.6,         // particle brightness
      lerp: 0.15,           // how fast particles home toward ship
      collectionThreshold: 0.5, // distance to ship before particle despawns
      minSpawnRadius: 5,    // closest particle spawn distance from pickup
      maxSpawnRadius: 10,   // farthest particle spawn distance from pickup
      heightSpread: 5,      // vertical scatter range
      activateCount: 50,    // particles activated per fuel event
    },

    // Speed lines — streaking dots visible during fast maneuvers
    speedLines: {
      count: 100,           // number of speed line particles
      size: 0.8,            // dot size
      respawnDistance: 50,  // reset line if this far from ship
      zCullOffset: 40,      // reset line if this far behind ship
      spreadX: 30,          // horizontal scatter on respawn
      spreadY: 20,          // vertical scatter on respawn
      spreadZ: 10,          // depth scatter on respawn
      maxOpacity: 0.8,      // peak opacity at full motion intensity
    },

    // Ship hull glow when plasma is collected
    shipGlow: {
      intensityMultiplier: 2.0, // glow strength = remaining timer × this
    },

    // ── Sky ───────────────────────────────────────────────────────────────────

    // Background starfield — procedural points on a sphere around the camera
    stars: {
      minCount: 500,        // minimum stars (sparse sky)
      maxExtraCount: 1500,  // random extra stars (total: 500–2000)
      clumpCount: 6,        // number of star cluster focal points
      clumpSpreadMin: 0.3,  // tightest cluster grouping (radians)
      clumpSpreadRange: 0.5,// random extra spread per cluster
      clusterChance: 0.45,  // 45% of stars cluster around focal points
      minRadius: 850,       // closest star distance from camera
      radiusRange: 350,     // random extra distance (850–1200)
      horizonCutoff: -40,   // stars below this Y are culled (below terrain)
      layers: [             // three size tiers — smaller stars are more common
        { size: 2.0, ratio: 0.6 },  // 60% tiny
        { size: 3.5, ratio: 0.3 },  // 30% small
        { size: 5.5, ratio: 0.1 },  // 10% large/bright
      ],
    },

    // Alien planet atmosphere: horizon glow band, galactic belt, and nebula patches.
    nightSky: {

      // Cylindrical glow band sitting at the horizon — gives the sky depth and atmosphere.
      horizonGlow: {
        color: 0x1a0d3a,        // deep violet
        opacity: 0.33,          // overall glow brightness (0 = off, 1 = full)
        radius: 900,            // cylinder radius — should exceed fog render distance
        height: 300,            // how tall the band is (units); gradient fades top & bottom
        segments: 48,           // horizontal polygon count — higher = smoother ring
      },

      // Dense micro-star belt stretched across the sky like a galaxy arm.
      // Randomly tilted each session so no two runs look the same.
      galacticBand: {
        spawnChance: 0.6,         // probability (0–1) the band appears in a given session
        starCount: 2200,          // number of stars in the band
        phiSpreadMin: 0.06,       // narrowest possible band (radians) — tight stripe
        phiSpreadMax: 0.18,       // widest possible band (radians) — broad sweep
        widthVariation: 0.65,     // how dramatically the width swells/pinches (0 = uniform, 1 = very organic)
        brightnessVariation: 0.5, // wide sections are brighter, pinch-points dimmer (0 = uniform opacity)
        radius: 820,              // distance from camera (should be inside star sphere)
        size: 1.4,                // point size
        opacity: 0.5,             // base band brightness
        colors: [0xc8d0ff, 0xffe8d0, 0xe8d0ff], // pastel tints: blue-white / amber-white / lavender
      },

      // Large soft nebula patches — glowing clouds placed at high elevation angles.
      nebulae: [
        { color: 0x6a0dad, opacity: 0.055, azimuth: 0.5,  elevation: 0.70, radius: 240, tiltZ: 0.3 },
        { color: 0x0d4a6a, opacity: 0.050, azimuth: 2.1,  elevation: 0.80, radius: 190, tiltZ: 0.6 },
        { color: 0x6a0d3a, opacity: 0.045, azimuth: 3.9,  elevation: 0.65, radius: 210, tiltZ: 0.1 },
        { color: 0x0d1a6a, opacity: 0.050, azimuth: 5.3,  elevation: 0.75, radius: 170, tiltZ: 0.5 },
      ],
    },

    // Distant planets/moons — decorative objects on the skybox
    spaceObjects: {
      minCount: 1,          // minimum planets
      maxCount: 3,          // maximum planets
      minDistance: 1200,    // closest planet distance
      distanceRange: 500,   // random extra distance (1200–1700)
      minHeight: 200,       // lowest planet elevation
      heightRange: 600,     // random extra height (200–800)
      minSize: 40,          // smallest planet radius
      sizeRange: 100,       // random extra size (40–140)
      emissiveIntensity: 0.4, // self-glow brightness
      rotationSpeed: 0.002, // max rotation speed per axis per tick
    },

  },

  // ── Crash Sequence ─────────────────────────────────────────────────────────
  // What happens visually when the ship dies.
  crash: {
    timerDuration: 0.5,     // seconds of crash animation before game over screen
    shakeTimerInitial: 1.0, // camera shake duration on crash
    shakeMinimum: 0.8,      // minimum shake maintained during crash
    cameraRollSpeed: 0.2,   // camera barrel-roll speed during crash
    shipFallSpeed: 0.8,     // how fast the ship drops on death
  },

  // ── Motion Effects ─────────────────────────────────────────────────────────
  // Screen shake and intensity tracking based on speed changes and maneuvers.
  motion: {
    warningShakeTimer: 0.4,      // shake duration for "PULL UP" warnings
    shakeThreshold: 0.4,         // motion intensity needed to trigger speed shake
    shakeStrengthMultiplier: 10, // camera displacement = timer × this
    speedChangeDivisor: 5.0,     // normalizes speed delta to 0–1 range
    pitchMultiplier: 2.0,        // weight of pitch input in motion intensity
    highSpeedContribution: 0.3,  // how much raw high speed adds to intensity
  },

  // ── Timing ─────────────────────────────────────────────────────────────────
  // Frame timing and UI durations.
  timing: {
    dtClampMax: 0.033,           // max delta time per frame (caps at ~30fps)
    dtLerpFactor: 0.2,           // delta time smoothing (prevents chunk-gen jitter)
    statusMessageDuration: 2.0,  // seconds "+35 PLASMA" text stays visible
  },

  // ── Upgrades ───────────────────────────────────────────────────────────────
  // Shop prices per upgrade level. Index 0 = already unlocked, index 5 = max tier.
  upgrades: {
    costs: [0, 5000, 15000, 30000, 60000, 100000],
  },

};

export default masterConfig;
