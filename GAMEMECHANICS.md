# Game Mechanics

Deep dive into the systems and algorithms that power VOIDRUNNER. For setup and configuration, see the [README](README.md).

---

## Table of Contents

- [Terrain Generation](#terrain-generation)
  - [Chunk System](#chunk-system)
  - [Fractal Brownian Motion (FBM)](#fractal-brownian-motion-fbm)
  - [Ridged Noise (Mountains)](#ridged-noise-mountains)
  - [Power Curve Shaping](#power-curve-shaping)
  - [Biome Blending](#biome-blending)
- [Rock Scattering](#rock-scattering)
- [Crater Generation](#crater-generation)
- [Biome System](#biome-system)
  - [Biome Sequencing](#biome-sequencing)
  - [Visual Transitions](#visual-transitions)
- [Flight Physics](#flight-physics)
  - [Quaternion Rotations](#quaternion-rotations)
  - [Momentum-Based Controls](#momentum-based-controls)
  - [Speed and Energy Model](#speed-and-energy-model)
  - [Agility Scaling](#agility-scaling)
- [Plasma Recharger System](#plasma-recharger-system)
  - [Spawning Logic](#spawning-logic)
  - [Fuel Calculation](#fuel-calculation)
  - [Difficulty Ramp](#difficulty-ramp)
- [Starfield Generation](#starfield-generation)
- [Planet and Moon Generation](#planet-and-moon-generation)
- [Lighting](#lighting)
- [Post-Processing and Motion Effects](#post-processing-and-motion-effects)
- [Altitude Guardrails](#altitude-guardrails)
- [Upgrade System](#upgrade-system)

---

## Terrain Generation

**Source:** [`TerrainManager.ts`](src/engine/TerrainManager.ts)

### Chunk System

The world is an infinite grid of square terrain tiles called **chunks**. Only chunks within `renderDist` of the player are loaded — the rest don't exist in memory. As the player flies forward, new chunks are created ahead and old ones behind are disposed.

```
Player at chunk (5, 3), renderDist = 3:

   ┌───┬───┬───┬───┬───┬───┬───┐
   │2,0│3,0│4,0│5,0│6,0│7,0│8,0│
   ├───┼───┼───┼───┼───┼───┼───┤
   │   │   │   │   │   │   │   │  ← 7×7 grid of loaded chunks
   ├───┼───┼───┼───┼───┼───┼───┤
   │   │   │   │ P │   │   │   │  ← P = player
   ├───┼───┼───┼───┼───┼───┼───┤
   │   │   │   │   │   │   │   │
   └───┴───┴───┴───┴───┴───┴───┘
```

Each chunk is a `PlaneGeometry` (default 64×64 vertices) whose Y values are displaced by `getHeight(x, z)`. This means the terrain mesh has ~4,096 triangles per chunk, and with `renderDist = 3` there are 49 chunks loaded = ~200K triangles total. This keeps the frame rate high while still covering a large visible area.

**Key config:** `terrain.chunkSize`, `terrain.chunkRes`, `terrain.renderDist`

### Fractal Brownian Motion (FBM)

Each vertex height is computed using **Fractal Brownian Motion** — a technique that layers multiple "octaves" of 2D simplex noise at increasing frequencies and decreasing amplitudes.

```
Octave 0:  freq = 0.004,  amplitude = 1.0    (broad rolling shapes)
Octave 1:  freq = 0.0084, amplitude = 0.5    (medium bumps)
Octave 2:  freq = 0.0176, amplitude = 0.25   (fine low-poly detail)
```

Each successive octave's frequency is multiplied by `noise.frequencyMultiplier` (2.1) and its amplitude by `noise.amplitudeDecay` (0.5). The final value is the weighted average of all octaves, producing a natural-looking height in the range [0, 1].

More octaves = finer detail but more expensive. Flat terrain uses 2 octaves (cheap), mountains use 4 (detailed ridges).

**Key config:** `terrain.noise.amplitudeDecay`, `terrain.noise.frequencyMultiplier`

### Ridged Noise (Mountains)

For the `MOUNTAINS` terrain type, standard noise produces rounded hills — not dramatic enough. Instead, the noise is **folded** to create sharp ridgelines:

```
Standard:   n = (noise + 1) / 2           → smooth [0, 1]
Ridged:     n = 1.0 - abs(noise)          → sharp peaks where noise crosses zero
            n = n * n                      → squaring sharpens the ridges further
```

The zero-crossings of simplex noise become sharp mountain spines, and the squaring step makes them even more pronounced while flattening the valleys.

### Power Curve Shaping

After FBM sampling, a **power curve** reshapes the height distribution:

```
height = noise ^ power
```

| Terrain | Power | Effect |
|---------|-------|--------|
| FLAT | 1.0 | Linear — no change |
| HILLS | 1.5 | Slightly sharpened peaks, flattened valleys |
| MOUNTAINS | 2.2 | Aggressive peaks, wide flat valleys between them |
| GORGES | 0.6 | Inverted — flattens peaks, deepens valleys into canyons |

A power < 1 (gorges) pushes values toward 1, making the terrain mostly high with deep gashes cut into it. A power > 1 (mountains) pushes values toward 0, making the terrain mostly low with dramatic spikes.

### Biome Blending

At any world position, two adjacent biomes are blended based on how far the player is through the current biome segment:

```
transition = (distFromSegmentStart) / segmentLength    // 0 → 1

blendedNoise  = lerp(noise1, noise2, transition)
blendedHeight = lerp(amp1,   amp2,   transition)
finalHeight   = blendedNoise × blendedHeight + baseHeight
```

This means terrain smoothly morphs from one type to another — you'll see flat plains gradually grow into rolling hills, then into jagged mountains, with no hard edges.

**Key config:** `terrain.params` (per-type freq, amp, power, octaves, ridged)

---

## Rock Scattering

**Source:** [`TerrainManager.ts → scatterRocks()`](src/engine/TerrainManager.ts)

Rocks only spawn on `FLAT` and `HILLS` biomes (mountains and gorges are busy enough). They're placed in **clusters** to look like natural rock formations rather than random dots.

**Algorithm:**
1. Pick 2–5 random cluster centers within the chunk
2. For each cluster, spawn 3–7 individual rocks within a scatter radius
3. Each rock is a `DodecahedronGeometry` (12-sided polyhedron) at a random scale
4. Rock color = terrain grayscale + 5–10% brightness offset + slight per-rock jitter
5. Random rotation on all axes for visual variety

The cluster approach creates natural-looking boulder fields and outcroppings instead of evenly distributed noise.

**Key config:** `terrain.rocks.*`

---

## Crater Generation

**Source:** [`TerrainManager.ts → generateCraters()`](src/engine/TerrainManager.ts)

Craters appear only on `FLAT` biomes and are generated **deterministically** — the same chunk coordinates always produce the same craters, even if the chunk is unloaded and recreated later.

**Algorithm:**
1. Hash the chunk coordinates into a seed: `seed = cx × 73856093 XOR cz × 19349663`
2. Roll the seed through a `sin`-based PRNG to decide if this chunk gets craters (30% chance)
3. If yes, generate 1–2 craters with seeded random positions, radii, and depths
4. During height queries, subtract a smooth bowl depression:

```
normalizedDist = (distToCraterCenter / craterRadius)²
falloff = (1 - normalizedDist)²
depression = craterDepth × falloff
```

The `(1 - d²)²` falloff creates a smooth bowl with a flat bottom and gentle rim — like a real impact crater. The squared distance avoids a costly `sqrt` call.

Crater depressions span chunk boundaries, so `getHeight()` checks the current chunk plus all 8 neighbors.

**Key config:** `terrain.craters.*`

---

## Biome System

### Biome Sequencing

**Source:** [`TerrainManager.ts → growBiomes(), getBiomeAtDist()`](src/engine/TerrainManager.ts)

Biomes are sequenced by the player's **radial distance from the world origin** (not by direction). Each biome has a random length (1,000–5,000 metres, except the first which is always 500m for a quick early transition).

The biome list is stored as a **cumulative length array** that grows lazily as the player flies further:

```
biomeLengths:     [500,  3200,  1800,  4500, ...]
biomeCumulative:  [0,    500,   3700,  5500, 10000, ...]
```

To find which biome the player is in at distance `d`, a binary search on `biomeCumulative` gives O(log n) lookup.

A random **biome offset** is applied at session start so each game begins on a different biome. The offset is restricted to FLAT or HILLS types so the player never spawns inside a mountain.

The five biomes cycle in order with the offset applied:

| Name | Terrain Type | Fog Color | Sun Color |
|------|-------------|-----------|-----------|
| AETHERIA | FLAT | Near-black | Cyan |
| NOVA PRIME | MOUNTAINS | Dark orange | Orange |
| VERIDIA | HILLS | Dark green | Green |
| NEON VOID | GORGES | Dark purple | Magenta |
| FROST REACH | HILLS | Blue-gray | Pale blue |

### Visual Transitions

When the player crosses a biome boundary, the terrain color randomises to a new grayscale value and the following properties smoothly interpolate over time:
- **Fog color** — blended via `lerpColors`
- **Sun color** — blended via `lerpColors`
- **Sun intensity** — linearly interpolated

The transition speed is controlled by `terrain.biomes.transitionSpeed` (default 0.005 per frame = ~200 frames for a full transition).

---

## Flight Physics

**Source:** [`ShipController.ts`](src/engine/ShipController.ts)

### Quaternion Rotations

The ship's orientation is stored as a **quaternion**, not Euler angles. This prevents gimbal lock and allows true 360-degree free-roam flight (including inverted flight, barrel rolls, and vertical loops).

Each frame, rotations are applied **incrementally** around the ship's local axes:
```
group.rotateX(pitch)   // local X = pitch
group.rotateZ(roll)    // local Z = roll
group.rotateY(yaw)     // local Y = yaw
```

**Important:** Never use Euler angles for the ship — it will break the flight model.

### Momentum-Based Controls

Inputs don't directly set rotation — they apply **angular torque** that accelerates angular velocities. This creates a momentum-based feel where the ship takes time to start and stop rotating.

```
Per frame:
  angularVelocity.pitch += (input × pitchTorque) × dtScale
  angularVelocity.roll  += (input × rollTorque)  × dtScale
  angularVelocity.yaw   += (input × yawTorque + bankingYaw) × dtScale

  // Air resistance bleeds off rotation
  angularVelocity.pitch *= damping    // 0.88 = 12% decay per frame
  angularVelocity.roll  *= damping
  angularVelocity.yaw   *= damping

  // Apply accumulated rotation
  ship.rotateX(angularVelocity.pitch)
  ship.rotateZ(angularVelocity.roll)
  ship.rotateY(angularVelocity.yaw)
```

**Banking yaw:** When the ship rolls, it automatically induces yaw in the roll direction (`bankingYaw`). This creates coordinated turns — rolling left makes the ship turn left — without needing explicit rudder input.

**Nose dip:** A small constant downward pitch torque (`noseDip`) is applied every frame, requiring the player to actively pitch up to maintain altitude. This prevents passive "set and forget" flying.

**Key config:** `shipControls.*`

### Speed and Energy Model

Speed is driven by the ship's pitch angle relative to the horizon:

```
forward = ship's local Z axis (world space)

if forward.y < -0.1:   // DIVING
    speed += accelRate + (|forward.y| × gravityImpact)     // gravity adds speed

if forward.y > 0.1:    // CLIMBING
    speed -= decelRate + (forward.y × gravityImpact)       // gravity removes speed
    speed += throttle if W is held                          // thrust fights gravity

else:                   // LEVEL FLIGHT
    speed += (cruiseSpeed - speed) × drag                  // drag toward cruise
    speed += throttle if W is held
```

Speed is clamped between `speed.min` (stall) and `speed.max` (terminal velocity). The ship then moves forward along its local Z axis by `speed × forwardScale × dtScale`.

Gravity is also applied as a constant downward displacement (`gravity × gravityScale × dtScale`), separate from the speed system.

**Key config:** `speed.*`, `gravity`

### Agility Scaling

At high speeds, the ship becomes harder to maneuver:

```
speedFactor = 1.0 - smoothstep(currentSpeed, cruiseSpeed, maxSpeed) × agilityReduction
effectiveTorque = baseTorque × speedFactor
```

At cruise speed, `speedFactor = 1.0` (full agility). At max speed, `speedFactor = 0.5` (half agility). This makes high-speed dives dangerous — you build speed fast but can't turn well to avoid terrain.

**Key config:** `shipControls.agilityReduction`

---

## Plasma Recharger System

**Source:** [`PlasmaRecharger.ts`](src/engine/PlasmaRecharger.ts)

### Spawning Logic

The manager ensures exactly **one active recharger** exists at all times. When the current one is collected or expires (after 30 seconds), the next one spawns.

**Spawn distance** scales with fuel level — emergency spawns when fuel is low:
```
fuelT = clamp(fuelPercent / 100, 0, 1)
distance = minDistance + (maxDistance - minDistance) × fuelT

// fuel at 10%  → spawns ~175 units ahead
// fuel at 100% → spawns ~400 units ahead
```

The first recharger always spawns at a fixed distance (500 units) so the player sees it immediately.

### Fuel Calculation

Fuel collected scales with proximity on two axes:

```
verticalFactor = 1.0 - (shipAltAbovePad / beamRange) × 0.8
                 → 1.0 at pad level, 0.2 at beam top

horizFactor    = 1.0 - (horizDist / collectionRadius) × 0.5
                 → 1.0 at center, 0.5 at edge

fuel = maxFuelReplenish × verticalFactor × horizFactor
       → 90 fuel at point-blank, ~9 fuel at beam top edge
```

This rewards precise flying — skimming low over the pad gives 10× more fuel than clipping the beam edge at altitude.

### Difficulty Ramp

Each collection increments a global counter. The **angle offset** of the next spawn increases with this counter:

```
difficultyT = min(collectCount / difficultyRampCount, 1)
maxOffset = maxAngleOffset × difficultyT
angleOffset = random(-maxOffset, +maxOffset)
```

- Collect #1: spawns directly ahead (0° offset)
- Collect #10: spawns up to ±30° off course
- Collect #20+: spawns up to ±60° off course (plateau)

This forces the player to actively scan for rechargers as the game progresses.

**Key config:** `plasmaRecharger.*`

---

## Starfield Generation

**Source:** [`GameEngine.ts → createStars()`](src/engine/GameEngine.ts)

Stars are rendered as three layers of `THREE.Points` on a sphere around the camera (so they move with you and feel infinitely distant).

**Algorithm:**
1. Generate 6 random **clump focal points** on the sphere using spherical coordinates
2. For each star, 45% chance to cluster near a random focal point (organic Milky Way look), 55% chance of uniform random placement
3. Stars are distributed across three size tiers for depth perception:
   - 60% tiny (size 1.2) — distant background
   - 30% small (size 2.2) — mid-field
   - 10% large (size 3.8) — bright foreground stars
4. Stars below `horizonCutoff` (-40 Y) are culled so they don't appear below the terrain

Total star count is randomised between 1,000 and 3,000 per session.

**Key config:** `visuals.stars.*`

---

## Planet and Moon Generation

**Source:** [`GameEngine.ts → createSpaceObjects()`](src/engine/GameEngine.ts)

1–5 low-poly planets/moons are placed on the skybox using `IcosahedronGeometry` (subdivision level 1 for a faceted alien look).

Each planet gets:
- Random HSL color with high saturation (0.7) and lightness (0.7) for vibrant alien tones
- Self-illumination via `emissiveIntensity` so they glow without external light
- Slow random rotation on all three axes (each axis up to ±0.002 rad/tick)
- Distance from camera: 1,200–1,700 units
- Size: 40–140 unit radius

Like stars, the space objects group follows the camera position so they appear fixed on the horizon.

**Key config:** `visuals.spaceObjects.*`

---

## Lighting

**Source:** [`GameEngine.ts → constructor(), setupLighting()`](src/engine/GameEngine.ts)

The scene uses a three-layer lighting setup:

| Light | Type | Purpose |
|-------|------|---------|
| **Sun** | DirectionalLight | Primary illumination + shadow casting. Color and intensity change per biome. |
| **Hemisphere** | HemisphereLight | Sky-to-ground gradient (blue sky → brown ground) for natural ambient. |
| **Ambient** | AmbientLight | Flat fill to prevent pure-black shadows. |

The sun casts PCF soft shadows via a 2048×2048 shadow map. The shadow camera frustum covers a 400×400 unit area around the origin.

**Fog** uses `FogExp2` (exponential falloff) — its color transitions between biomes to match the atmosphere. Default density is very low (0.0001) so it only affects distant chunks, creating depth without obscuring nearby terrain.

**Key config:** `visuals.sun.*`, `visuals.lighting.*`, `visuals.fog.*`

---

## Post-Processing and Motion Effects

### Bloom

An `UnrealBloomPass` adds glow to bright surfaces (engine exhaust, plasma beams, stars). Bloom strength increases with speed:

```
bloomStrength = baseStrength + speedRatio × speedBoost
              = 0.8 at idle → 1.4 at max speed
```

### Speed Lines

100 point particles streak past the camera during high-speed maneuvers. Their opacity scales with `motionIntensity` — a 0–1 value computed from:

```
motionIntensity = speedChangeDelta + pitchInput × 2.0 + highSpeedFactor × 0.3
```

Rapid speed changes (diving/pulling up) and high-speed flight both contribute. Lines respawn in front of the ship when they fall behind.

### Screen Shake

Camera shake triggers from:
- **Terrain proximity** ("PULL UP" warning) — constant mild shake
- **High-speed maneuvers** — shake proportional to motion intensity, only above a speed threshold
- **Crash** — intense shake during the death sequence

Shake is applied as random displacement on the camera's ideal position before lerping.

### Ship Glow

When plasma is collected, all ship meshes get a temporary cyan emissive glow that fades over 1.2 seconds:
```
emissiveIntensity = glowTimer × intensityMultiplier
```

**Key config:** `visuals.bloom.*`, `visuals.speedLines.*`, `motion.*`, `crash.*`

---

## Altitude Guardrails

The game enforces altitude limits through escalating penalties:

| Altitude | Effect |
|----------|--------|
| Below `groundWarningOffset` (15m above terrain) | "PULL UP!" warning + screen shake |
| Below `collisionOffset` (1m above terrain) | Instant crash |
| Above `warningThreshold` (120m) | "HIGH ALTITUDE" warning + 4× plasma drain |
| Above `criticalThreshold` (200m) | "PULL BACK IMMEDIATELY!" + 10× drain + 3-second death timer |

This creates a vertical "corridor" — fly too low and you crash, fly too high and your fuel evaporates. The sweet spot is 15–120m altitude.

**Key config:** `altitude.*`, `fuel.highAltMultiplier`, `fuel.criticalAltMultiplier`

---

## Upgrade System

**Source:** [`App.tsx`](src/App.tsx), [`PersistenceService.ts`](src/engine/PersistenceService.ts)

Points earned during gameplay are saved as persistent credits (localStorage). Players spend credits in the Hangar shop on two upgrade tracks:

| Upgrade | Effect per Level | Max Level |
|---------|-----------------|-----------|
| **Plasma Efficiency** | -10% fuel drain rate | 5 (= 50% total reduction) |
| **Hull Reinforcement** | +20 max HP | 5 (= 200 HP total) |

Upgrade costs escalate: 0 → 5K → 15K → 30K → 60K → 100K credits.

Players can also swap between 5 ship color palettes (free, cosmetic only).

**Key config:** `upgrades.*`, `health.upgradeBonus`, `fuel.upgradeEfficiency`
