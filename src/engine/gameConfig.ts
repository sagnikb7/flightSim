// ─── Game Configuration ─────────────────────────────────────────────────────
// Tweak these values to tune gameplay, visuals, and physics.
// Grouped by system — each section has a brief explanation of what the params control.

const gameConfig = {

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
    drainRate: 0.04,        // base plasma consumed per frame-tick
    upgradeEfficiency: 0.1, // 10% drain reduction per upgrade level
    highAltMultiplier: 3,   // drain multiplier above warningThreshold (120m)
    criticalAltMultiplier: 10, // drain multiplier above criticalThreshold (200m)
  },

  // ── Speed ──────────────────────────────────────────────────────────────────
  // Ship speed in m/s (HUD converts to km/h × 3.6).
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
  },

  // Base downward force applied every frame (units/tick)
  gravity: 0.075,

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
  // Procedural infinite terrain using simplex noise.
  // chunkSize × renderDist determines visible area. Higher = more terrain, worse perf.
  terrain: {
    chunkSize: 200,         // world-units per terrain tile
    chunkRes: 64,           // vertex resolution per chunk (64×64 grid)
    renderDist: 3,          // chunks loaded in each direction from player
    baseHeight: -45,        // global height offset (shifts entire terrain down)
    groupYOffset: -50,      // Y position of chunk groups (visual offset)

    // Terrain type noise parameters — each biome type uses different settings.
    // freq: noise frequency (lower = broader features)
    // amp: height multiplier (higher = taller terrain)
    // power: exponent applied to noise (>1 = sharper peaks, <1 = flattened valleys)
    // octaves: noise layers (more = finer detail, costs performance)
    // ridged: true = sharp mountain ridges instead of smooth hills
    params: {
      FLAT:      { freq: 0.002, amp: 15,  power: 1.0, octaves: 2, ridged: false },
      HILLS:     { freq: 0.004, amp: 45,  power: 1.5, octaves: 3, ridged: false },
      MOUNTAINS: { freq: 0.006, amp: 110, power: 2.2, octaves: 4, ridged: true  },
      GORGES:    { freq: 0.005, amp: 130, power: 0.6, octaves: 3, ridged: false },
    },

    // FBM noise stacking — each octave gets smaller amplitude and higher frequency
    noise: {
      amplitudeDecay: 0.5,      // each octave's amplitude = previous × this
      frequencyMultiplier: 2.1, // each octave's frequency = previous × this
    },

    // Biome length controls how far you fly before the terrain type changes.
    // First biome is short so new players see a transition early.
    biomes: {
      firstLength: 500,         // metres before first biome change
      minLength: 1000,          // shortest a biome can be after the first
      maxExtraLength: 1500,     // random extra length added (total: 1000–5000m)
      transitionSpeed: 0.005,   // fog/sun color blend speed between biomes
    },

    // Rock clusters scattered on FLAT and HILLS terrain
    rocks: {
      minClusters: 2,       // min rock clusters per chunk
      maxClusters: 5,       // max rock clusters per chunk
      minPerCluster: 3,     // min rocks in a cluster
      maxPerCluster: 7,     // max rocks in a cluster
      clusterSpread: 0.8,   // fraction of chunk used for cluster placement
      offsetRange: 15,      // scatter radius within a cluster (units)
      minScale: 0.8,        // smallest rock size
      maxScale: 3.0,        // largest rock size
      roughness: 0.9,       // rock material roughness
      metalness: 0.1,       // rock material metalness
      colorOffset: [0.05, 0.1] as [number, number], // rocks are 5–10% brighter than terrain
      colorVariation: 0.03, // per-rock brightness jitter (±1.5%)
    },

    // Impact craters on FLAT biomes only (deterministic per chunk)
    craters: {
      chance: 0.3,          // 30% of flat chunks get craters
      minRadius: 20,        // smallest crater (units)
      maxRadius: 60,        // largest crater (units)
      minDepth: 8,          // shallowest crater depression
      maxDepth: 20,         // deepest crater depression
      placementArea: 0.6,   // fraction of chunk where craters can spawn
    },

    // Terrain surface material
    material: {
      roughness: 0.8,      // matte surface (1.0 = fully rough)
      metalness: 0.0,       // non-metallic
      grayscaleMin: 0.3,    // darkest possible terrain shade
      grayscaleRange: 0.6,  // range above min (0.3–0.9)
    },
  },

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

    // Distance from ship where next recharger spawns
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
      respawnDistance: 50,   // reset line if this far from ship
      zCullOffset: 40,      // reset line if this far behind ship
      spreadX: 30,          // horizontal scatter on respawn
      spreadY: 20,          // vertical scatter on respawn
      spreadZ: 10,          // depth scatter on respawn
      maxOpacity: 0.8,      // peak opacity at full motion intensity
    },

    // Background starfield — procedural points on a sphere around the camera
    stars: {
      minCount: 500,       // minimum stars (sparse sky)
      maxExtraCount: 1500,  // random extra stars (total: 1000–3000)
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

    // Distant planets/moons — decorative objects on the skybox
    spaceObjects: {
      minCount: 1,          // minimum planets
      maxCount: 3,          // maximum planets
      minDistance: 1200,     // closest planet distance
      distanceRange: 500,   // random extra distance (1200–1700)
      minHeight: 200,       // lowest planet elevation
      heightRange: 600,     // random extra height (200–800)
      minSize: 40,          // smallest planet radius
      sizeRange: 100,       // random extra size (40–140)
      emissiveIntensity: 0.4, // self-glow brightness
      rotationSpeed: 0.002, // max rotation speed per axis per tick
    },

    // Directional sun light and shadow mapping
    sun: {
      position: [200, 50, 100] as [number, number, number],
      intensity: 1.5,
      shadowMapSize: 2048,  // shadow texture resolution (higher = crisper, slower)
      shadowBounds: 200,    // shadow camera frustum size
      shadowNear: 0.5,
      shadowFar: 500,
    },

    // Ambient and hemisphere lighting
    lighting: {
      hemisphereIntensity: 0.5, // sky-to-ground gradient light
      ambientIntensity: 0.3,    // flat fill light
    },

    // Ship hull glow when plasma is collected
    shipGlow: {
      intensityMultiplier: 2.0, // glow strength = remaining timer × this
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
    warningShakeTimer: 0.4,     // shake duration for "PULL UP" warnings
    shakeThreshold: 0.4,       // motion intensity needed to trigger speed shake
    shakeStrengthMultiplier: 10,// camera displacement = timer × this
    speedChangeDivisor: 5.0,   // normalizes speed delta to 0–1 range
    pitchMultiplier: 2.0,      // weight of pitch input in motion intensity
    highSpeedContribution: 0.3,// how much raw high speed adds to intensity
  },

  // ── Timing ─────────────────────────────────────────────────────────────────
  // Frame timing and UI durations.
  timing: {
    dtClampMax: 0.033,          // max delta time per frame (caps at ~30fps)
    dtLerpFactor: 0.2,          // delta time smoothing (prevents chunk-gen jitter)
    statusMessageDuration: 2.0, // seconds "+35 PLASMA" text stays visible
  },

  // ── Upgrades ───────────────────────────────────────────────────────────────
  // Shop prices per upgrade level. Index 0 = already unlocked, index 5 = max tier.
  upgrades: {
    costs: [0, 5000, 15000, 30000, 60000, 100000],
    maxLevel: 5,
  },

};

export default gameConfig;
