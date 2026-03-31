import * as THREE from 'three';

// ─── Types ────────────────────────────────────────────────────────────────────

type V3 = [number, number, number];
type WingStation = { x: number; zFront: number; zRear: number; halfThick: number };

interface ShipMaterials {
  hull:   THREE.MeshStandardMaterial;
  accent: THREE.MeshStandardMaterial;
  canopy: THREE.MeshStandardMaterial;
  engine: THREE.MeshStandardMaterial;
  dark:   THREE.MeshStandardMaterial;
}

// ─── Shape Parameters ─────────────────────────────────────────────────────────
// Edit values here to reshape the ship — no need to touch geometry code below.

const SHIP_SCALE = 2.25; // overall size multiplier

// Fuselage hex cross-section (x, y pairs; extruded along z)
const HEX_BASE: [number, number][] = [
  [-0.30,  0.15], // top-left
  [ 0.30,  0.15], // top-right
  [ 0.40,  0.00], // right
  [ 0.30, -0.15], // bottom-right
  [-0.30, -0.15], // bottom-left
  [-0.40,  0.00], // left
];
const FUSELAGE_Z: [rear: number, front: number] = [-1.0, 1.0];

// Nose cone (attaches at front of fuselage)
const NOSE_BLUNT = 0.18; // tip hex is this fraction of HEX_BASE
const NOSE_LEN   = 1.4;  // cone length

// Cockpit canopy
const COCKPIT = {
  baseHW: 0.22, topHW: 0.13,   // half-widths at base and peak
  baseY:  0.15, peakY:  0.30,  // heights above ship center
  rearZ: -0.05, midRZ:  0.12,  // z stations: rear tip, mid-rear,
  midFZ:  0.45, frontZ: 0.62,  //             mid-front, front tip
};

// Wing span stations — left side only; right side mirrors x
const WING_STATIONS: WingStation[] = [
  { x: -0.40, zFront:  0.35, zRear: -0.55, halfThick: 0.058 }, // root
  { x: -1.50, zFront:  0.10, zRear: -0.62, halfThick: 0.044 }, // inner
  { x: -2.60, zFront: -0.08, zRear: -0.72, halfThick: 0.028 }, // outer
  { x: -3.80, zFront: -0.22, zRear: -0.80, halfThick: 0.012 }, // tip
];

// Accent stripe on the wing top surface near root (mirrored ±x)
const STRIPE = { absX: 0.90, y: 0.062, z: 0.18, w: 0.95, h: 0.012, d: 0.10 };

// Wingtip cannons (mirrored ±x)
const CANNON = { absX: 3.8, y: 0, bodyZ: -0.3, tipZ: 0.2 };

// Engines (mirrored ±x)
const ENGINE = { absX: 1.0, y: 0, z: -0.4 };

// Vertical stabiliser fins — F-16 style swept profile above each engine
// Right-angle at rear-base; swept leading edge from front-base to top
const FIN = {
  halfW:  0.05,                    // fin thickness (half)
  baseY:  0.35, topY:   0.82,     // y at base and apex
  frontZ: 0.05, rearZ: -0.70,     // z extent
};

// ─── ShipModel ────────────────────────────────────────────────────────────────

export class ShipModel {
  public group: THREE.Group;
  public glowMaterial: THREE.MeshStandardMaterial;

  private static readonly GLOW_COLOR = 0x66ccff; // Sky blue plasma

  constructor(skinColor: string, accentColor = '#ff0000') {
    this.glowMaterial = new THREE.MeshStandardMaterial({
      color: ShipModel.GLOW_COLOR,
      emissive: ShipModel.GLOW_COLOR,
      emissiveIntensity: 1.6,
    });
    this.group = this.buildShip(skinColor, accentColor);
  }

  // ── Orchestrator ─────────────────────────────────────────────────────────────

  private buildShip(skinColor: string, accentColor: string): THREE.Group {
    const ship = new THREE.Group();
    const mats = ShipModel.buildMaterials(skinColor, accentColor);

    this.addFuselage(ship, mats.hull);
    this.addNose(ship, mats.hull);
    this.addCockpit(ship, mats.canopy);
    this.addWings(ship, mats.hull, mats.accent);
    this.addCannons(ship, mats.accent, mats.dark);
    this.addEngines(ship, mats.engine, mats.accent, mats.dark);
    this.addFins(ship, mats.hull);

    ship.scale.setScalar(SHIP_SCALE);
    ship.traverse(child => {
      if (child instanceof THREE.Mesh) child.castShadow = true;
    });

    return ship;
  }

  // ── Part builders ─────────────────────────────────────────────────────────────

  private addFuselage(ship: THREE.Group, mat: THREE.Material): void {
    const [zBack, zFront] = FUSELAGE_Z;
    const verts: number[] = [];

    // One quad per hex edge, extruded from rear to front
    for (let i = 0; i < 6; i++) {
      const [ax, ay] = HEX_BASE[i];
      const [bx, by] = HEX_BASE[(i + 1) % 6];
      verts.push(bx, by, zBack,  ax, ay, zBack,  ax, ay, zFront);
      verts.push(bx, by, zBack,  ax, ay, zFront, bx, by, zFront);
    }
    // Rear cap — triangle fan from vertex 0
    for (let i = 1; i < 5; i++) {
      const [ax, ay] = HEX_BASE[0];
      const [bx, by] = HEX_BASE[i];
      const [cx, cy] = HEX_BASE[i + 1];
      verts.push(ax, ay, zBack, bx, by, zBack, cx, cy, zBack);
    }
    // Front cap — same fan, reversed winding
    for (let i = 1; i < 5; i++) {
      const [ax, ay] = HEX_BASE[0];
      const [bx, by] = HEX_BASE[i];
      const [cx, cy] = HEX_BASE[i + 1];
      verts.push(ax, ay, zFront, cx, cy, zFront, bx, by, zFront);
    }

    ship.add(new THREE.Mesh(ShipModel.bufGeo(verts), mat));
  }

  private addNose(ship: THREE.Group, mat: THREE.Material): void {
    // Hex frustum: HEX_BASE at z=0 tapering to a scaled-down hex at z=NOSE_LEN
    const tipHex: V3[] = HEX_BASE.map(([x, y]) => [x * NOSE_BLUNT, y * NOSE_BLUNT, NOSE_LEN]);
    const verts: number[] = [];

    for (let i = 0; i < 6; i++) {
      const [ax, ay] = HEX_BASE[i];
      const [bx, by] = HEX_BASE[(i + 1) % 6];
      const ta = tipHex[i], tb = tipHex[(i + 1) % 6];
      verts.push(bx, by, 0, ax, ay, 0, ...ta);
      verts.push(bx, by, 0, ...ta,    ...tb);
    }
    // Blunt tip cap — triangle fan
    for (let i = 1; i < 5; i++) {
      verts.push(...tipHex[0], ...tipHex[i + 1], ...tipHex[i]);
    }

    const mesh = new THREE.Mesh(ShipModel.bufGeo(verts), mat);
    mesh.position.z = FUSELAGE_Z[1]; // attach at fuselage front
    ship.add(mesh);
  }

  private addCockpit(ship: THREE.Group, mat: THREE.Material): void {
    const { baseHW, topHW, baseY, peakY, rearZ, midRZ, midFZ, frontZ } = COCKPIT;

    // Vertex names: r/f = rear/front, T/B = top/bottom, L/R = left/right
    const rTip: V3 = [0,       baseY + 0.02, rearZ ];
    const rBL:  V3 = [-baseHW, baseY,        midRZ ];
    const rTL:  V3 = [-topHW,  peakY,        midRZ ];
    const rTR:  V3 = [ topHW,  peakY,        midRZ ];
    const rBR:  V3 = [ baseHW, baseY,        midRZ ];
    const fBL:  V3 = [-baseHW, baseY,        midFZ ];
    const fTL:  V3 = [-topHW,  peakY,        midFZ ];
    const fTR:  V3 = [ topHW,  peakY,        midFZ ];
    const fBR:  V3 = [ baseHW, baseY,        midFZ ];
    const fTip: V3 = [0,       baseY + 0.02, frontZ];

    const verts: number[] = [];
    const t = (a: V3, b: V3, c: V3) => verts.push(...a, ...b, ...c);

    // Rear taper (3 faces from rear tip to mid-rear ring)
    t(rTip, rBL, rTL); t(rTip, rTL, rTR); t(rTip, rTR, rBR);
    // Mid body (3 quads bridging mid-rear to mid-front)
    t(rTL, rBL, fBL); t(rTL, fBL, fTL); // left side
    t(rTL, fTL, fTR); t(rTL, fTR, rTR); // top
    t(rBR, rTR, fTR); t(rBR, fTR, fBR); // right side
    // Front taper (3 faces from mid-front ring to front tip)
    t(fTip, fTL, fBL); t(fTip, fTR, fTL); t(fTip, fBR, fTR);

    ship.add(new THREE.Mesh(ShipModel.bufGeo(verts), mat));
  }

  private addWings(ship: THREE.Group, hullMat: THREE.Material, accentMat: THREE.Material): void {
    // Right side is a mirror of the left stations
    const rightStations = WING_STATIONS.map(s => ({ ...s, x: -s.x }));
    ship.add(new THREE.Mesh(ShipModel.wingGeo(WING_STATIONS, -1), hullMat));
    ship.add(new THREE.Mesh(ShipModel.wingGeo(rightStations,  1), hullMat));

    // Accent stripe sitting flush on the wing top surface near root
    const stripeGeo = new THREE.BoxGeometry(STRIPE.w, STRIPE.h, STRIPE.d);
    [-1, 1].forEach(side => {
      const stripe = new THREE.Mesh(stripeGeo, accentMat);
      stripe.position.set(STRIPE.absX * side, STRIPE.y, STRIPE.z);
      ship.add(stripe);
    });
  }

  private addCannons(ship: THREE.Group, accentMat: THREE.Material, darkMat: THREE.Material): void {
    const bodyGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.8, 6);
    const tipGeo  = new THREE.ConeGeometry(0.09, 0.2, 6);
    const rot: V3 = [Math.PI / 2, 0, 0];

    [-1, 1].forEach(side => {
      const x = CANNON.absX * side;
      ShipModel.addPart(ship, bodyGeo, accentMat, [x, CANNON.y, CANNON.bodyZ], rot);
      ShipModel.addPart(ship, tipGeo,  darkMat,   [x, CANNON.y, CANNON.tipZ ], rot);
    });
  }

  private addEngines(
    ship:      THREE.Group,
    engineMat: THREE.Material,
    accentMat: THREE.Material,
    darkMat:   THREE.Material,
  ): void {
    const bodyGeo    = new THREE.CylinderGeometry(0.35, 0.38, 1.50, 12);
    const bandGeo    = new THREE.CylinderGeometry(0.39, 0.39, 0.15, 12);
    const intakeGeo  = new THREE.CylinderGeometry(0.25, 0.25, 0.10, 12);
    const exhaustGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.12, 12);
    const rot: V3 = [Math.PI / 2, 0, 0];

    [-1, 1].forEach(side => {
      const x = ENGINE.absX * side;
      ShipModel.addPart(ship, bodyGeo,    engineMat,        [x, ENGINE.y, ENGINE.z], rot);
      ShipModel.addPart(ship, bandGeo,    accentMat,        [x, ENGINE.y,  0.0    ], rot);
      ShipModel.addPart(ship, intakeGeo,  darkMat,          [x, ENGINE.y,  0.4    ], rot);
      ShipModel.addPart(ship, exhaustGeo, this.glowMaterial, [x, ENGINE.y, -1.2    ], rot);
    });
  }

  private addFins(ship: THREE.Group, mat: THREE.Material): void {
    const { halfW, baseY, topY, frontZ, rearZ } = FIN;

    // Vertex layout — F-16 profile viewed from the side:
    //   FL ———————— BL  (horizontal base)
    //                |   (vertical trailing edge)
    //               TL  (apex directly above BL)
    //   hypotenuse FL→TL = swept leading edge
    const FL: V3 = [-halfW, baseY, frontZ]; const FR: V3 = [ halfW, baseY, frontZ];
    const BL: V3 = [-halfW, baseY, rearZ ]; const BR: V3 = [ halfW, baseY, rearZ ];
    const TL: V3 = [-halfW, topY,  rearZ ]; const TR: V3 = [ halfW, topY,  rearZ ];

    const verts: number[] = [];
    const t = (a: V3, b: V3, c: V3) => verts.push(...a, ...b, ...c);

    t(FL, TL, BL);                 // left face
    t(FR, BR, TR);                 // right face
    t(FL, FR, TR); t(FL, TR, TL); // swept leading edge
    t(BL, TL, TR); t(BL, TR, BR); // vertical trailing edge

    const finGeo = ShipModel.bufGeo(verts);
    [-1, 1].forEach(side => {
      const fin = new THREE.Mesh(finGeo, mat);
      fin.position.set(ENGINE.absX * side, 0, ENGINE.z);
      ship.add(fin);
    });
  }

  // ── Static helpers ────────────────────────────────────────────────────────────

  private static buildMaterials(skinColor: string, accentColor: string): ShipMaterials {
    const mat = (color: THREE.ColorRepresentation, roughness: number, metalness: number) =>
      new THREE.MeshStandardMaterial({ color, flatShading: true, roughness, metalness });

    return {
      hull:   mat(skinColor,   0.7, 0.8),
      accent: mat(accentColor, 0.6, 0.6),
      canopy: mat(accentColor, 0.3, 0.4), // smoother/glossier for cockpit glass
      engine: mat(0x666666,    0.5, 0.6),
      dark:   mat(0x333333,    0.9, 0.1),
    };
  }

  /** Create a BufferGeometry from a flat vertex position array. */
  private static bufGeo(verts: number[]): THREE.BufferGeometry {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(verts), 3));
    geo.computeVertexNormals();
    return geo;
  }

  /** Create and add a mesh with optional rotation. */
  private static addPart(
    ship: THREE.Group,
    geo:  THREE.BufferGeometry,
    mat:  THREE.Material,
    pos:  V3,
    rot:  V3 = [0, 0, 0],
  ): void {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(...pos);
    mesh.rotation.set(...rot);
    ship.add(mesh);
  }

  /**
   * Build a lofted wing surface from span stations (root → tip).
   * tipDir: −1 for left wing (tip cap normal faces −x), +1 for right (+x).
   * Edge winding is flipped per side so all normals face outward.
   */
  private static wingGeo(stations: WingStation[], tipDir: -1 | 1): THREE.BufferGeometry {
    const v: number[] = [];
    const t = (a: V3, b: V3, c: V3) => v.push(...a, ...b, ...c);

    for (let i = 0; i < stations.length - 1; i++) {
      const a = stations[i], b = stations[i + 1];
      const aFT: V3 = [a.x,  a.halfThick, a.zFront];
      const aFB: V3 = [a.x, -a.halfThick, a.zFront];
      const aRT: V3 = [a.x,  a.halfThick, a.zRear ];
      const aRB: V3 = [a.x, -a.halfThick, a.zRear ];
      const bFT: V3 = [b.x,  b.halfThick, b.zFront];
      const bFB: V3 = [b.x, -b.halfThick, b.zFront];
      const bRT: V3 = [b.x,  b.halfThick, b.zRear ];
      const bRB: V3 = [b.x, -b.halfThick, b.zRear ];

      t(aFT, aRT, bRT); t(aFT, bRT, bFT); // top    (+y normal)
      t(aFB, bFB, bRB); t(aFB, bRB, aRB); // bottom (−y normal)

      if (tipDir < 0) {                           // left wing
        t(aFT, bFT, bFB); t(aFT, bFB, aFB);      // leading edge
        t(aRT, aRB, bRB); t(aRT, bRB, bRT);      // trailing edge
      } else {                                    // right wing
        t(aFT, aFB, bFB); t(aFT, bFB, bFT);      // leading edge
        t(aRT, bRT, bRB); t(aRT, bRB, aRB);      // trailing edge
      }
    }

    // Tip cap
    const s = stations[stations.length - 1];
    const tFT: V3 = [s.x,  s.halfThick, s.zFront];
    const tFB: V3 = [s.x, -s.halfThick, s.zFront];
    const tRT: V3 = [s.x,  s.halfThick, s.zRear ];
    const tRB: V3 = [s.x, -s.halfThick, s.zRear ];
    if (tipDir < 0) { t(tFT, tRT, tRB); t(tFT, tRB, tFB); } // −x normal
    else            { t(tFT, tFB, tRB); t(tFT, tRB, tRT); } // +x normal

    return ShipModel.bufGeo(v);
  }
}
