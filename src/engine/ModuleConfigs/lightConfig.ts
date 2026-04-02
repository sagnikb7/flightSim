// ─── Lighting Configuration ──────────────────────────────────────────────────
// All scene light settings in one place:
//   - Primary sun (position, color, shadow)
//   - Secondary sun (optional orange backlight)
//   - Sun intensity random walk (drifts between biomes)
//   - Lighting presets A–F (fill, ambient, hemisphere)
//
// Switch `activePreset` to swap the entire fill/ambient/hemisphere rig in one letter.

const lightConfig = {

  // Primary directional sun — casts shadows, illuminates terrain from above.
  sun: {
    position:      [100, 380, -150] as [number, number, number], // 11AM — high overhead, slight east (+X) and south (-Z) lean
    color:         0xfff5e0,  // warm white — single place to shift the whole scene's sun hue
    intensity:     0.75,      // base sun brightness (modified by intensityWalk)
    shadowMapSize: 2048,      // shadow texture resolution (higher = crisper, slower)
    shadowBounds:  200,       // shadow camera frustum size
    shadowNear:    0.5,
    shadowFar:     500,
  },

  // Secondary sun — orange backlight from behind the typical flight direction.
  // Hits back faces of terrain features creating warm silhouette edges on
  // mountains and ridges as the ship flies toward them.
  secondarySun: {
    enabled:   true,
    color:     0xff7733,                                 // orange — tune freely
    intensity: 0.6,                                      // relative to primary
    position:  [0, 60, 300] as [number, number, number], // low, directly behind
  },

  // Sun intensity random walk — drifts between biomes instead of fixed per-biome values.
  // On each biome change a small hop is applied. If it pushes past a boundary
  // it snaps back near the midpoint (± midSnapJitter).
  intensityWalk: {
    min:           0.45,  // dimmest the sun ever gets
    max:           1.25,  // brightest the sun ever gets
    hopMin:        0.05,  // smallest intensity hop per biome change
    hopMax:        0.15,  // largest intensity hop per biome change
    midSnapJitter: 0.08,  // scatter around midpoint when snapping back
  },

  // Switch activePreset to try different fill / ambient / hemisphere moods.
  // Each preset is a full lighting rig — change one letter to swap the whole mood.
  activePreset: 'F' as 'A' | 'B' | 'C' | 'D' | 'E' | 'F',

  presets: {

    // A: Deep Space Night — very dark ambient, sun dominates, deep shadows
    A: {
      ambientColor:     0x080818,
      ambientIntensity: 0.05,
      hemiSkyColor:     0x05060f,
      hemiGroundColor:  0x020203,
      hemiIntensity:    0.35,
      fillColor:        0x1133cc,  // cold blue
      fillIntensity:    0.22,
      fillPosition:     [-150, 80, -80] as [number, number, number],
    },

    // B: Cold Moonlight — pervasive blue-cold cast, medium ambient lifts shadows
    B: {
      ambientColor:     0x0d1530,
      ambientIntensity: 0.15,
      hemiSkyColor:     0x0a1228,
      hemiGroundColor:  0x050810,
      hemiIntensity:    0.55,
      fillColor:        0x2255dd,  // brighter cold blue
      fillIntensity:    0.35,
      fillPosition:     [-150, 100, -80] as [number, number, number],
    },

    // C: Dusk Glow — neutral white ambient, purple hemisphere, visible and alien
    C: {
      ambientColor:     0xffffff,
      ambientIntensity: 0.60,
      hemiSkyColor:     0x0f0818,
      hemiGroundColor:  0x080508,
      hemiIntensity:    0.5,
      fillColor:        0xffffff,
      fillIntensity:    0.9,
      fillPosition:     [-150, 80, -80] as [number, number, number],
    },

    // D: Nebula Haze — magenta hemisphere above, warm amber fill from the side
    D: {
      ambientColor:     0x100508,
      ambientIntensity: 0.08,
      hemiSkyColor:     0x1a0818,
      hemiGroundColor:  0x0a0604,
      hemiIntensity:    0.50,
      fillColor:        0xaa5511,  // warm amber-orange
      fillIntensity:    0.28,
      fillPosition:     [-150, 60, -80] as [number, number, number],
    },

    // E: Teal Void — gas giant cyan light bathes the terrain in alien green
    E: {
      ambientColor:     0x051a12,
      ambientIntensity: 0.12,
      hemiSkyColor:     0x061a14,
      hemiGroundColor:  0x030808,
      hemiIntensity:    0.50,
      fillColor:        0x11aa77,  // bright teal-green
      fillIntensity:    0.28,
      fillPosition:     [-150, 90, -80] as [number, number, number],
    },

    // F: Ember Horizon — low warm fill like a volcanic field just out of view
    F: {
      ambientColor:     0x120805,
      ambientIntensity: 0.07,
      hemiSkyColor:     0x0d0606,
      hemiGroundColor:  0x080404,
      hemiIntensity:    0.40,
      fillColor:        0xcc4411,  // deep amber-red
      fillIntensity:    0.32,
      fillPosition:     [-150, 30, -80] as [number, number, number], // low angle = horizon glow
    },

  } as Record<string, {
    ambientColor: number; ambientIntensity: number;
    hemiSkyColor: number; hemiGroundColor: number; hemiIntensity: number;
    fillColor: number; fillIntensity: number; fillPosition: [number, number, number];
  }>,

};

export default lightConfig;
