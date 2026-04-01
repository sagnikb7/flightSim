# VOIDRUNNER - Project Context & Guidelines

## Project Overview
VOIDRUNNER is a high-performance, browser-based third-person space flight simulator. It features procedurally generated infinite terrain, dynamic biome transitions, and momentum-based flight physics. The project is built using **React 18**, **Three.js**, **TypeScript**, and **Vite**.

## Core Architecture

The game is structured as a class-based engine wrapped in a React UI layer.

### 1. Game Engine (`src/engine/`)
- **`GameEngine.ts`**: The central orchestrator. Manages the Three.js scene, renderer, post-processing (bloom), collision detection, and the main animation loop. It coordinates state between the ship, terrain, and fuel systems.
- **`ShipController.ts`**: Handles flight physics using **quaternions** for 360-degree rotation. Implements momentum, drag, gravity-based speed scaling (diving/climbing), and input handling.
- **`TerrainManager.ts`**: Manages chunk-based procedural terrain using **Simplex noise** and Fractal Brownian Motion (FBM). Handles biome blending, rock scattering, and crater generation.
- **`gameConfig.ts`**: The **Single Source of Truth** for all gameplay parameters (speed, health, fuel, terrain params, visuals, etc.).
- **`constants.ts`**: Defines biomes (colors, terrain types) and exports the merged configuration.
- **`ShipModel.ts`**: Procedurally generates the ship's geometry and handles customization (skins).
- **`PlasmaRecharger.ts`**: Manages fuel replenishment stations and their spawning logic.
- **`PersistenceService.ts`**: Handles user data, upgrades, and high scores via `localStorage`.

### 2. React UI Layer (`src/`)
- **`App.tsx`**: Manages game states (Menu, Shop, Playing, GameOver), HUD rendering, and initializes the `GameEngine`.
- **`components/ShipPreview.tsx`**: A standalone Three.js component for the Hangar/Shop UI.
- **`styles/`**: Modular CSS for HUD, menus, and overlays.

## Building and Running
- **Install Dependencies**: `pnpm install` (or `npm`/`yarn`)
- **Development**: `npm run dev` (Hot-reloading Vite server)
- **Build**: `npm run build` (TypeScript check + Minified bundle to `/dist`)
- **Preview**: `npm run preview` (Local server for production build)

## Development Conventions

### 1. Rotation & Physics
- **NEVER use Euler angles** for ship rotation. The engine uses incremental quaternion rotations (`ship.rotateX`, `ship.rotateZ`) to prevent gimbal lock and support free-roam flight.
- **Physics is incremental**: Input applies torque, which increases angular velocity, which is then damped by air resistance.

### 2. Terrain & Performance
- **Chunk System**: Terrain is generated in 200x200 unit chunks. The `renderDist` (default: 3) determines the grid size around the player.
- **Disposal**: Always ensure Three.js geometries and materials are properly disposed of when chunks are unloaded to prevent memory leaks.
- **FBM**: Higher octaves increase detail but decrease performance. Flat biomes use 2 octaves; Mountains use 4.

### 3. Tuning & Configuration
- All gameplay tweaks should be made in **`src/engine/gameConfig.ts`**. Avoid hardcoding values in engine classes.
- Biome visuals (fog, sun, terrain type) are defined in **`src/engine/constants.ts`**.

### 4. Code Quality
- **Strict Typing**: Maintain full TypeScript coverage for all engine parameters and state objects.
- **Conventional Commits**: Use `feat:`, `fix:`, `refactor:`, etc., for commit messages.

## Key Game Mechanics
- **Biomes**: Seamlessly blended based on radial distance from the origin.
- **Fuel System**: Plasma drains faster at high altitudes (>120m). Collection amount depends on proximity to the recharger base.
- **Speed Model**: Diving builds speed; climbing bleeds it. W-key provides a thrust boost during climbs.
- **Agility Scaling**: Controls become stiffer at higher speeds to make fast dives more dangerous.

## File Structure Reference
- `/assets`: 3D models and reference images.
- `/music`: Background tracks for the crossfade system.
- `/src/engine`: Core game logic and physics.
- `/src/components`: React UI components.
- `/src/styles`: CSS modules for the HUD and menus.
