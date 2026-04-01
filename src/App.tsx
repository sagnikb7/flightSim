import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GameEngine, GameStats } from './engine/GameEngine';
import { PersistenceService, UserData, Upgrades } from './engine/PersistenceService';
import { ShipPreview } from './components/ShipPreview';
import { MusicManager } from './engine/MusicManager';
import { CONFIG } from './engine/constants';

const PALETTE_OPTIONS = [
  { 
    name: 'Solaris',     
    skinColor: '#F4D35E', 
    accentColor: '#EE964B' 
  }, // warm golden hull + burnt orange — high-energy, starfighter aesthetic

  { 
    name: 'Nebula',      
    skinColor: '#5F4B8B', 
    accentColor: '#E0A6FF' 
  }, // deep violet + soft magenta — cosmic / sci-fi exotic

  { 
    name: 'Verdant',     
    skinColor: '#2F5D50', 
    accentColor: '#7DCEA0' 
  }, // muted green hull + mint accent — industrial / eco-tech hybrid

  { 
    name: 'Arctic',      
    skinColor: '#D9EAFD', 
    accentColor: '#3A86FF' 
  }, // icy white-blue + vivid azure — clean, high-tech exploration

  { 
    name: 'Inferno',     
    skinColor: '#2B0F0F', 
    accentColor: '#FF3D00' 
  }, // dark ember base + bright lava orange — aggressive combat profile
];

const UPGRADE_COSTS = CONFIG.upgrades.costs;

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<GameEngine | null>(null);
  const musicRef = useRef<MusicManager | null>(null);

  const [user, setUser] = useState<UserData | null>(PersistenceService.getCurrentUser());
  const [usernameInput, setUsernameInput] = useState('');
  const [gameState, setGameState] = useState<'menu' | 'shop' | 'playing' | 'gameOver'>('menu');

  const [stats, setStats] = useState<GameStats>({
    health: 100, maxHealth: 100, fuel: 100, maxFuel: 100,
    points: 0, speed: 0, alt: 0, dist: 0,
    warning: '', isCrashing: false, statusMessage: ''
  });
  const [discovery, setDiscovery] = useState<{ name: string; visible: boolean }>({ name: '', visible: false });
  const [gameOverReason, setGameOverReason] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(false);
  const [resourceAlert, setResourceAlert] = useState('');
  const lastFuelTier = useRef(4);
  const lastHealthTier = useRef(4);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!usernameInput.trim()) return;
    const loggedInUser = PersistenceService.login(usernameInput.trim());
    setUser(loggedInUser);
    setGameState('menu');
  };

  const handleLogout = () => {
    PersistenceService.logout();
    setUser(null);
    setGameState('menu');
  };

  const togglePause = useCallback(() => {
    setIsPaused(prev => {
      isPausedRef.current = !prev;
      return !prev;
    });
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && gameState === 'playing') {
        e.preventDefault();
        togglePause();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [gameState, togglePause]);

  const startGame = () => {
    if (!user) return;
    setIsPaused(false);
    isPausedRef.current = false;
    lastFuelTier.current = 0;
    lastHealthTier.current = 0;
    setResourceAlert('');
    setGameState('playing');
  };

  const buyUpgrade = (type: keyof Upgrades) => {
    if (!user) return;
    const currentLevel = user.upgrades[type] as number;
    if (currentLevel >= 5) return;
    const cost = UPGRADE_COSTS[currentLevel + 1];
    if (user.totalPoints >= cost) {
      const updatedUser = {
        ...user,
        totalPoints: user.totalPoints - cost,
        upgrades: { ...user.upgrades, [type]: currentLevel + 1 }
      };
      setUser(updatedUser);
      PersistenceService.saveUser(updatedUser);
    }
  };

  const changePalette = (skinColor: string, accentColor: string) => {
    if (!user) return;
    const updatedUser = {
      ...user,
      upgrades: { ...user.upgrades, skin: skinColor, accentColor }
    };
    setUser(updatedUser);
    PersistenceService.saveUser(updatedUser);
  };

  useEffect(() => {
    if (gameState !== 'playing' || !containerRef.current || !user) return;

    const music = new MusicManager();
    musicRef.current = music;
    music.start();

    const engine = new GameEngine(containerRef.current, user.upgrades);
    engineRef.current = engine;

    engine.onBiomeChange = (name) => {
      setDiscovery({ name, visible: true });
      setTimeout(() => setDiscovery(prev => ({ ...prev, visible: false })), 3000);
    };

    engine.onUpdateStats = (newStats) => {
      setStats(newStats);

      // Fuel threshold alerts (compare as percentage)
      const fuelPct = (newStats.fuel / newStats.maxFuel) * 100;
      const fuelThresholds = [75, 50, 25, 10];
      const fuelTier = fuelThresholds.filter(t => fuelPct <= t).length;
      if (fuelTier > lastFuelTier.current) {
        const crossedAt = fuelThresholds[fuelTier - 1];
        setResourceAlert(`PLASMA AT ${crossedAt}%`);
        setTimeout(() => setResourceAlert(''), 2500);
      }
      lastFuelTier.current = fuelTier;

      // Health threshold alerts (compare as percentage)
      const healthPct = (newStats.health / newStats.maxHealth) * 100;
      const healthThresholds = [75, 50, 25, 10];
      const healthTier = healthThresholds.filter(t => healthPct <= t).length;
      if (healthTier > lastHealthTier.current) {
        const crossedAt = healthThresholds[healthTier - 1];
        setResourceAlert(`HULL AT ${crossedAt}%`);
        setTimeout(() => setResourceAlert(''), 2500);
      }
      lastHealthTier.current = healthTier;
    };

    engine.onGameOver = (reason) => {
      setGameOverReason(reason);
      setGameState('gameOver');
      if (user) {
        const updatedUser = { ...user, totalPoints: user.totalPoints + Math.floor(engine.points) };
        setUser(updatedUser);
        PersistenceService.saveUser(updatedUser);
      }
    };

    let animationId: number;
    const animate = () => {
      if (!isPausedRef.current) engine.animate();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      musicRef.current?.stop();
      musicRef.current = null;
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, [gameState]);

  // ── Login ────────────────────────────────────────────────────────────────

  if (!user) {
    return (
      <div id="login-screen">
        <h1 id="login-title" data-text="VOID RUNNER">VOID RUNNER</h1>
        <form id="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="PILOT USERNAME"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
          <button type="submit" className="btn">INITIALIZE SESSION</button>
        </form>
      </div>
    );
  }

  // ── Main app ─────────────────────────────────────────────────────────────

  const statusText = stats.statusMessage || resourceAlert || (discovery.visible ? `ENTERING ${discovery.name}` : '');
  const statusClass = stats.statusMessage ? 'status--plasma' : resourceAlert ? 'status--warning' : 'status--biome';

  return (
    <div id="app-root">
      <div id="game-canvas-container" ref={containerRef} />

      {/* ── Menu ──────────────────────────────────────────────────────── */}
      {gameState === 'menu' && (
        <div id="menu-screen" className="overlay">
          <h1>Greetings, {user.username}</h1>
          <p className="credits">TOTAL CREDITS: {user.totalPoints}</p>
          <div id="menu-actions">
            <button className="btn" onClick={startGame}>START MISSION</button>
            <button className="btn" onClick={() => setGameState('shop')}>HANGAR (SHOP)</button>
            <button className="btn btn--danger" onClick={handleLogout}>LOGOUT</button>
          </div>
        </div>
      )}

      {/* ── Hangar / Shop ─────────────────────────────────────────────── */}
      {gameState === 'shop' && (
        <div id="hangar-screen" className="overlay">
          <button id="hangar-back" className="btn-back" onClick={() => setGameState('menu')}>
            &larr; BACK
          </button>

          <div id="hangar-header">
            <h3>SHIP HANGAR</h3>
            <p className="credits">{user.totalPoints} CREDITS</p>
          </div>

          <div id="hangar-layout">
            <div id="ship-preview-panel">
              <ShipPreview skinColor={user.upgrades.skin} accentColor={user.upgrades.accentColor ?? '#ff0000'} width={480} height={420} />
            </div>

            <div id="hangar-upgrades">
              {/* Upgrade cards */}
              {([
                { id: 'fuel-efficiency', key: 'fuelEfficiency' as keyof Upgrades, label: 'PLASMA EFFICIENCY', desc: 'Reduces fuel drain per level' },
                { id: 'hull-reinforcement', key: 'maxHealth' as keyof Upgrades, label: 'HULL REINFORCEMENT', desc: 'Increases max hull points' },
              ] as const).map(({ id, key, label, desc }) => {
                const level = user.upgrades[key] as number;
                const isMaxed = level >= 5;
                return (
                  <div key={id} className="shop-card">
                    <div className="shop-card__header">
                      <h3>{label}</h3>
                      <span className="shop-card__desc">{desc}</span>
                    </div>
                    <div className="shop-card__level">
                      <div className="level-pips">
                        {Array.from({ length: 5 }, (_, i) => (
                          <div key={i} className={`pip${i < level ? ' pip--filled' : ''}`} />
                        ))}
                      </div>
                      <span className="level-label">LVL {level}/5</span>
                    </div>
                    {isMaxed ? (
                      <p className="maxed">FULLY UPGRADED</p>
                    ) : (
                      <button className="btn--shop" onClick={() => buyUpgrade(key)}>
                        UPGRADE — {UPGRADE_COSTS[level + 1].toLocaleString()} CR
                      </button>
                    )}
                  </div>
                );
              })}

              {/* Paint card */}
              <div className="shop-card">
                <div className="shop-card__header">
                  <h3>SHIP LIVERY</h3>
                  <span className="shop-card__desc">
                    {PALETTE_OPTIONS.find(p => p.skinColor === user.upgrades.skin)?.name || 'Custom'}
                  </span>
                </div>
                <div id="palette-grid">
                  {PALETTE_OPTIONS.map(palette => {
                    const isSelected = user.upgrades.skin === palette.skinColor;
                    return (
                      <div
                        key={palette.skinColor}
                        className={`palette-swatch${isSelected ? ' palette-swatch--selected' : ''}`}
                        onClick={() => changePalette(palette.skinColor, palette.accentColor)}
                        title={palette.name}
                      >
                        <div className="palette-swatch__top" style={{ backgroundColor: palette.skinColor }} />
                        <div className="palette-swatch__bottom" style={{ backgroundColor: palette.accentColor }} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Playing HUD ───────────────────────────────────────────────── */}
      {gameState === 'playing' && (
        <>
          <div id="hud-overlay">
            <div id="hud-left-stats">
              <div id="health-section">
                <div className="hud-label">HULL INTEGRITY <span className="hud-value">{stats.health}/{stats.maxHealth}</span></div>
                <div id="health-bar" className="hud-bar">
                  <div id="health-bar-fill" style={{ width: `${(stats.health / stats.maxHealth) * 100}%`, background: (stats.health / stats.maxHealth) < 0.3 ? 'var(--color-danger)' : 'var(--color-cyan)' }} />
                </div>
              </div>
              <div id="fuel-section">
                <div className="hud-label">PLASMA RESERVE <span className="hud-value">{stats.fuel}/{stats.maxFuel}</span></div>
                <div id="fuel-bar" className="hud-bar">
                  <div id="fuel-bar-fill" style={{ width: `${(stats.fuel / stats.maxFuel) * 100}%` }} />
                </div>
              </div>
            </div>

            <div id="hud-center-status">
              {stats.warning && (
                <div id="hud-warning" key={stats.warning}>{stats.warning}</div>
              )}
              {!stats.warning && statusText && (
                <div id="hud-status-message" className={statusClass} key={statusText}>
                  {statusText}
                </div>
              )}
            </div>

            <div id="hud-right-stats">
              <div id="hud-points">{stats.points.toLocaleString()} PTS</div>
              <div id="hud-speed">SPD: {stats.speed} km/h</div>
              <div id="hud-altitude">ALT: {stats.alt} m</div>
              <div id="hud-distance">DST: {stats.dist} m</div>
            </div>
          </div>

          <div id="crosshair">+</div>

          {stats.warning && <div id="warning-vignette" />}
          {stats.isCrashing && <div id="crash-flash-overlay" />}

          {/* ── Pause overlay ─────────────────────────────────────────── */}
          {isPaused && (
            <div id="pause-overlay" className="overlay">
              <h1>MISSION PAUSED</h1>
              <p className="pause-subtitle">Press ESC to resume</p>

              <div id="pause-help-layout">
                <div id="pause-controls-section">
                  <h2 className="pause-section-title">FLIGHT CONTROLS</h2>
                  <table className="controls-table">
                    <tbody>
                      {([
                        ['W / \u2191', 'Pitch up + thrust boost'],
                        ['S / \u2193', 'Pitch down'],
                        ['A / \u2190', 'Roll left'],
                        ['D / \u2192', 'Roll right'],
                        ['Q', 'Yaw left (rudder)'],
                        ['E', 'Yaw right (rudder)'],
                        ['ESC', 'Pause / Resume'],
                      ] as [string, string][]).map(([key, desc]) => (
                        <tr key={key}>
                          <td>{key}</td>
                          <td>{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div id="pause-tips-section">
                  <h2 className="pause-section-title">HOW TO SURVIVE</h2>
                  <div id="pause-tips-list">
                    <div>
                      <span className="tip-label--plasma">PLASMA BEAMS</span><br />
                      Cyan beams shoot up from ground stations. Fly through them to refuel.
                      The closer you fly to the base, the more plasma you collect.
                      Beams expire after 30 seconds — don't wait too long.
                    </div>
                    <div>
                      <span className="tip-label--danger">ALTITUDE</span><br />
                      Stay between 15m and 120m. Too low triggers crash warnings.
                      Above 120m drains plasma 4x faster. Above 200m is a 3-second death sentence.
                    </div>
                    <div>
                      <span className="tip-label--speed">SPEED</span><br />
                      Diving builds speed, climbing bleeds it. Hold W during climbs for a thrust boost.
                      At high speed, controls stiffen — plan your dives carefully.
                    </div>
                    <div>
                      <span className="tip-label--banking">BANKING</span><br />
                      Roll into turns — the ship automatically yaws in the roll direction.
                      You rarely need Q/E for normal flying.
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn" style={{ marginTop: '40px' }} onClick={togglePause}>RESUME MISSION</button>
            </div>
          )}
        </>
      )}

      {/* ── Game Over ─────────────────────────────────────────────────── */}
      {gameState === 'gameOver' && (
        <div id="game-over-screen" className="overlay">
          <h1>MISSION FAILED</h1>
          <p className="death-reason">{gameOverReason}</p>
          <div id="game-over-summary">
            <div className="points">{stats.points.toLocaleString()}</div>
            <div className="label">UNITS RECOVERED</div>
          </div>
          <button className="btn" onClick={() => setGameState('menu')}>RETURN TO COMMAND</button>
        </div>
      )}
    </div>
  );
};

export default App;
