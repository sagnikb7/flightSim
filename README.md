# VOIDRUNNER

A high-performance, browser-based third-person space flight sim with procedurally generated infinite terrain, dynamic biomes, and momentum-based flight physics. Built with **Three.js**, **React**, and **TypeScript** — no game engine required.

Fly through alien landscapes at 360 km/h, dodge mountain ridges, dive into gorges, and chase plasma beams to stay alive. Every session generates a unique world.

## Controls

| Key | Action |
|-----|--------|
| `W` / `Arrow Up` | Pitch up + thrust boost |
| `S` / `Arrow Down` | Pitch down |
| `A` / `Arrow Left` | Roll left |
| `D` / `Arrow Right` | Roll right |
| `Q` | Yaw left (rudder) |
| `E` | Yaw right (rudder) |

**Flight tips:**
- Rolling into a turn automatically induces yaw (banking turn) — you rarely need Q/E.
- Diving builds speed; climbing bleeds it. Use `W` during climbs for a thrust boost.
- The ship has a natural nose-down tendency — keep pitching up to maintain altitude.
- Fly through the cyan plasma beams to refuel. Flying closer to the base gives more fuel.
- Stay below 120m altitude — higher altitudes drain plasma faster. Above 200m is a death sentence.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

Deployable to Netlify, Vercel, or any static host with standard Vite settings.

## Tech Stack

| | |
|---|---|
| **Rendering** | Three.js with post-processing (UnrealBloomPass) |
| **UI** | React 18 |
| **Language** | TypeScript |
| **Bundler** | Vite |
| **Terrain noise** | simplex-noise (2D) |

## Project Structure

```
src/
├── engine/
│   ├── gameConfig.ts        ← All tunable parameters (start here!)
│   ├── constants.ts         ← Biome definitions + config export
│   ├── GameEngine.ts        ← Main loop, scene setup, collision, effects
│   ├── ShipController.ts    ← Flight physics, input handling
│   ├── TerrainManager.ts    ← Procedural terrain, biomes, rocks, craters
│   ├── PlasmaRecharger.ts   ← Fuel beam stations + spawning logic
│   ├── ShipModel.ts         ← Procedural ship mesh geometry
│   ├── MusicManager.ts      ← Background music with crossfade
│   └── PersistenceService.ts← User data, upgrades, localStorage
├── components/
│   └── ShipPreview.tsx      ← 3D ship preview for the shop UI
└── App.tsx                  ← Game UI, HUD, menus, shop
```

## Configuration Reference

All gameplay, physics, and visual parameters live in [`src/engine/gameConfig.ts`](src/engine/gameConfig.ts). Every value is commented — open it and start tweaking.

| Section | What it controls | Example tweaks |
|---------|-----------------|----------------|
| `health` | Ship hull HP and upgrade scaling | Increase `max` for a more forgiving game |
| `fuel` | Plasma drain rate, altitude penalties | Lower `drainRate` for longer flights |
| `speed` | Min/max/cruise speed, acceleration, drag | Raise `max` for faster diving speeds |
| `gravity` | Constant downward pull on the ship | Lower for a floatier, more arcadey feel |
| `shipControls` | Pitch/roll/yaw torques, damping, agility | Raise `rollTorque` for snappier rolls |
| `shipGlow` | Engine exhaust glow animation | Increase `thrustTarget` for brighter engines |
| `camera` | FOV, chase distance, smoothing | Widen `offset` Z for a further camera |
| `terrain` | Chunk size, noise params per biome type, rocks, craters | Raise `amp` in MOUNTAINS for taller peaks |
| `terrain.biomes` | How long each biome lasts before changing | Lower `firstLength` for faster early transitions |
| `plasmaRecharger` | Beam range, collection radius, spawn distance, difficulty ramp | Increase `collectionRadius` for easier pickups |
| `altitude` | Warning/critical thresholds, death timer | Raise `criticalThreshold` to allow higher flight |
| `visuals.bloom` | Glow post-processing intensity | Raise `baseStrength` for a more neon look |
| `visuals.stars` | Starfield density, clustering, size tiers | Increase `minCount` for a denser sky |
| `visuals.spaceObjects` | Planet/moon count, size, distance | Raise `maxCount` for a busier skybox |
| `visuals.speedLines` | Motion streak particles | Increase `count` for denser speed trails |
| `crash` | Death animation timing and camera roll | Increase `timerDuration` for a slower crash |
| `motion` | Screen shake thresholds and intensity | Lower `shakeThreshold` for more frequent shake |
| `upgrades` | Shop prices per upgrade tier | Adjust `costs` array to rebalance progression |

## Game Mechanics

For a deep dive into the algorithms behind terrain generation, flight physics, biome blending, starfield rendering, and more, see **[Game Mechanics](GAMEMECHANICS.md)**.

## License

MIT
