// ─── Terrain Configuration ───────────────────────────────────────────────────
// Controls all procedural terrain generation:
//   - Chunk grid size and render distance
//   - Per-biome noise parameters (FLAT / HILLS / MOUNTAINS / GORGES / CANYON)
//   - FBM octave stacking
//   - Biome segment lengths and transition speed
//   - Rock clusters, craters, surface material
//   - Canyon gorge shape
//   - Terrain colour palettes and per-biome colour hop

const terrainConfig = {

  chunkSize: 200,  // world-units per terrain tile
  chunkRes: 32,    // vertex resolution per chunk (32×32 grid) — lower = more low-poly, fewer triangles
  renderDist: 3,   // chunks loaded in each direction from player
  baseHeight: -45, // global height offset (shifts entire terrain down)
  groupYOffset: -50, // Y position of chunk groups (visual offset)

  // ── Noise parameters ────────────────────────────────────────────────────────
  // Per terrain type — each biome uses a different noise profile.
  // freq:   noise frequency  (lower = broader features)
  // amp:    height multiplier (higher = taller terrain)
  // power:  exponent on noise (>1 = sharper peaks, <1 = flattened valleys)
  // octaves: FBM layers (more = finer detail, costs performance)
  // ridged: true = sharp mountain ridges instead of smooth hills
  params: {
    FLAT:      { freq: 0.002, amp: 15,  power: 1.0, octaves: 2, ridged: false },
    HILLS:     { freq: 0.004, amp: 45,  power: 1.5, octaves: 3, ridged: false },
    MOUNTAINS: { freq: 0.006, amp: 110, power: 1.6, octaves: 4, ridged: true  },
    GORGES:    { freq: 0.005, amp: 130, power: 0.6, octaves: 3, ridged: false },
  },

  // FBM octave stacking — each octave gets smaller amplitude and higher frequency
  noise: {
    amplitudeDecay: 0.5,      // each octave's amplitude = previous × this
    frequencyMultiplier: 2.1, // each octave's frequency = previous × this
  },

  // ── Biome segments ──────────────────────────────────────────────────────────
  // Controls how far the player flies before the terrain type changes.
  // First biome is short so new players see a transition early.
  biomes: {
    firstLength: 500,       // metres before first biome change
    minLength: 1000,        // shortest a biome can be after the first
    maxExtraLength: 1500,   // random extra length added (total: 1000–2500m)
    transitionSpeed: 0.005, // fog blend speed between biomes
  },

  // ── Rock clusters ───────────────────────────────────────────────────────────
  // Scattered on FLAT and HILLS terrain only.
  rocks: {
    minClusters: 2,     // min rock clusters per chunk
    maxClusters: 5,     // max rock clusters per chunk
    minPerCluster: 3,   // min rocks in a cluster
    maxPerCluster: 7,   // max rocks in a cluster
    clusterSpread: 0.8, // fraction of chunk used for cluster placement
    offsetRange: 15,    // scatter radius within a cluster (units)
    minScale: 0.8,      // smallest rock size
    maxScale: 3.0,      // largest rock size
    roughness: 0.9,     // rock material roughness
    metalness: 0.1,     // rock material metalness
    colorOffset: [0.05, 0.1] as [number, number], // rocks are 5–10% brighter than terrain
    colorVariation: 0.03, // per-rock brightness jitter (±1.5%)
  },

  // ── Impact craters ──────────────────────────────────────────────────────────
  // FLAT biomes only, deterministic per chunk via seeded placement.
  craters: {
    chance: 0.3,        // 30% of flat chunks get craters
    minRadius: 20,      // smallest crater (units)
    maxRadius: 60,      // largest crater (units)
    minDepth: 8,        // shallowest crater depression
    maxDepth: 20,       // deepest crater depression
    placementArea: 0.6, // fraction of chunk where craters can spawn
  },

  // ── Surface material ────────────────────────────────────────────────────────
  material: {
    roughness: 0.8, // matte surface (1.0 = fully rough)
    metalness: 0.0, // non-metallic
    // Height-based vertex colour gradient — low vertices darker, high vertices brighter.
    // Normalised per-chunk so every biome gets the same contrast regardless of elevation range.
    heightGradient:       false, // set true to enable; false = flat biome colour
    heightGradientDark:   0.25,  // colour multiplier at the lowest vertex in a chunk
    heightGradientBright: 1.0,   // colour multiplier at the highest vertex in a chunk
  },

  // ── Canyon terrain ──────────────────────────────────────────────────────────
  // The CANYON terrain type carves a navigable gorge through tall walls.
  // The gorge floor is low and flat; the walls are tall hill-like slopes.
  // Canyon width and centerline both meander using separate noise instances.
  canyon: {
    gorgeDepth: 65,         // how far below baseHeight the floor sits
    minHalfWidth: 50,       // narrowest gorge half-width (units)
    maxHalfWidth: 90,       // widest gorge half-width (units)
    meanderAmplitude: 55,   // max X drift of the centerline from X=0
    meanderFreq: 0.0007,    // how slowly the centerline wanders (lower = gentler bends)
    widthFreq: 0.0025,      // noise frequency for width variation along Z
    wallAmp: 150,           // wall height amplitude
    floorAmp: 8,            // floor height amplitude (keep low for navigability)
    wallParams:  { freq: 0.004, power: 1.2, octaves: 3, ridged: false },
    floorParams: { freq: 0.002, power: 1.0, octaves: 2, ridged: false },
  },

  // ── Terrain colour ──────────────────────────────────────────────────────────
  // Each palette defines the two ends of an allowed colour range.
  // leftShade = darkest / coolest end, rightShade = lightest / warmest end.
  // forcePalette: set to a palette name (e.g. "gray") to lock it for testing;
  // leave null to pick one at random each session.
  //
  // The palette range is mapped onto a number line [hop.rangeMin, hop.rangeMax].
  // On every biome change the shade "hops" by a random signed amount.
  // If the hop pushes past a boundary it snaps back near the midpoint (± hop.midSnapJitter).
  color: {
    forcePalette: null as string | null,
    palettes: [
      // { name: 'gray', leftShade: '#b9a2a2', rightShade: '#ecdfdf' },
      { name: 'mars', leftShade: '#bd421c', rightShade: '#c8623d' },
    ] as { name: string; leftShade: string; rightShade: string }[],
    hop: {
      rangeMin: 0,        // maps to leftShade
      rangeMax: 10,       // maps to rightShade
      hopMin: 1,          // smallest hop per biome change
      hopMax: 4,          // largest hop per biome change
      midSnapJitter: 1.5, // random scatter around midpoint when snapping back
    },
  },

};

export default terrainConfig;
