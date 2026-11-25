// Procedural low-poly furniture in the neon look. Every model is built from boxes and cylinders in
// local coordinates (x across, z depth with the front at +z, y up) scaled to the item's size, then
// rotated and moved into place. Solids go into the floor's wall buffer, main outlines into its line
// buffer and a soft contact shadow into the shadow layer, so furniture adds no draw calls.

import { Color } from "three";
import type { Furniture, Vec2 } from "../model.ts";
import { builtinBase, gangsOf, stairsULayout, POOL_VALVE_Y } from "../model.ts";
import { adventCandles, isRobotVacuum, mountBase, packItem, packMotion, packMovingPart, packRobotCentre, packRobotPart, packScreen, packSpinAxis, type PackItem, type PackMotion, type PackPart } from "../packs.ts";
import { fitParts } from "../pack-scale.ts";
import { hasLiveParts, liveKey, type PartBind } from "../live-parts.ts";
import { binColors, binShape, householdCountry, mailboxShape, type BinShape, type MailboxShape } from "../household.ts";
import type { Floor } from "../model.ts";
import { ALWAYS, DEG, EDGE_TOP, GeoBuffer, LineBuffer, pushLoft, pushLyingCyl, pushPrism, shade } from "./geo.ts";
import { hexColor, naturalPalette, palette } from "./palette.ts";
import { finishTargetOf, finishTargets } from "../finishes.ts";

const BASE = palette({
  body: 0x172238,
  bodyTop: 0x1d2b47,
  fabric: 0x1a2644,
  fabricTop: 0x22325a,
  cushion: 0x243661,
  wood: 0x19233c,
  woodTop: 0x202d4b,
  white: 0x1d2946,
  whiteTop: 0x26375e,
  // door and drawer fronts of pack items (3.5): drawn like "white" until a finish tells them apart (#1177)
  front: 0x1d2946,
  frontTop: 0x26375e,
  metal: 0x2a3a60,
  dark: 0x0b111f,
  glass: 0x1c3a52,
  plant: 0x12302e,
  plantTop: 0x1a4540,
  pot: 0x1d2640,
  accent: 0x2b8fb3,
}, { body: 0xe8e3db, bodyTop: 0xf2efe9, fabric: 0x8e97a5, fabricTop: 0xa4acb9, cushion: 0xb4bbc5, wood: 0xa67a52, woodTop: 0xbd9067, white: 0xedebe7, whiteTop: 0xf8f7f4, front: 0xedebe7, frontTop: 0xf8f7f4, metal: 0x9da3ab, dark: 0x40454d, glass: 0xa9cfe0, plant: 0x4b8a49, plantTop: 0x66a861, pot: 0xcdbfae, accent: 0x2b8fb3 });

/**
 * A placed item's own finish (finishes.ts) while it is built: its colours stand in for the palette roles, in the
 * homely styles only (the neon looks colour every item themselves).
 */
let finish: Partial<Record<keyof typeof BASE, number>> | null = null;
const C = new Proxy(BASE, { get: (t, k) => (finish && typeof k === "string" && k in finish ? finish[k as keyof typeof BASE] : Reflect.get(t, k)) }) as typeof BASE;

/**
 * The role colours a finish gives (tops and cushions a little lighter), null without one or in a neon look. Fronts
 * and carcass (#1177): "front" parts take the front finish, "white" parts the carcass finish or, without one, the
 * front finish as before.
 */
function finishColors(f: Pick<Furniture, "finish">): Partial<Record<keyof typeof BASE, number>> | null {
  if (!f.finish || !naturalPalette()) return null;
  const out: Partial<Record<keyof typeof BASE, number>> = {};
  const t = finishTargets(f);
  const wood = finishSafe(hexColor(t.wood));
  const fabric = finishSafe(hexColor(t.fabric));
  const front = finishSafe(hexColor(t.front));
  const white = finishSafe(hexColor(t.white));
  if (wood !== null) Object.assign(out, { wood, woodTop: shade(wood, 1.12).getHex() });
  if (fabric !== null) Object.assign(out, { fabric, fabricTop: shade(fabric, 1.12).getHex(), cushion: shade(fabric, 1.28).getHex() });
  if (front !== null) Object.assign(out, { front, frontTop: shade(front, 1.05).getHex() });
  if (white !== null) Object.assign(out, { white, whiteTop: shade(white, 1.05).getHex() });
  return Object.keys(out).length ? out : null;
}

/**
 * A finish colour as the homely styles can show it. They turn the neon palette's dark navy leftovers neutral grey
 * (theme.ts: blue far over red and green, and dark), and with the shading towards the floor a blue finish fell into
 * that rule on some faces only – a blue drawer front grey beside its blue side (#1175). A finish that blue gets just
 * enough green that the rule never takes it, however dark a face is shaded; other colours stay exactly as they are.
 */
export function finishSafe(hex: number | null): number | null {
  if (hex === null) return null;
  // linear colours, as the shader sees them
  const c = new Color(hex);
  if (!(c.b > c.r * 2 && c.b > c.g * 1.5) || c.b >= 0.5) return hex;
  return new Color(c.r, Math.min(1, (c.b / 1.5) * 1.02), c.b).getHex();
}

/**
 * The smallest width or depth a model is drawn at. It used to be 5 cm, so a socket (1.4 cm deep), a switch (1.2 cm)
 * or a sensor made thinner by hand stood far out of the wall, while the plan and the selection showed them thin
 * (#1236). Only a size of zero needs catching, the same floor the height has.
 */
export const MIN_SIZE = 0.005;

const EDGE_FURN = shade(0x5b7cff, 0.3);
const EDGE_FAINT = shade(0x5b7cff, 0.17);
const EDGE_GLOW = shade(0x37e0ff, 0.45);

type Tf = (x: number, z: number) => Vec2;

class Builder {
  private readonly buf: GeoBuffer;
  private readonly lines: LineBuffer;
  private readonly tf: Tf;
  /** The transform mirrors (negative determinant): parts not wound by ccw() come out inside out. */
  readonly mirrored: boolean;

  /** The vertex colours drawn so far (a part's own range is lifted for the light looks). */
  get colors(): number[] {
    return this.buf.c;
  }

  constructor(buf: GeoBuffer, lines: LineBuffer, tf: Tf) {
    this.buf = buf;
    this.lines = lines;
    this.tf = tf;
    this.mirrored = tfMirrors(tf);
  }

  /** The same buffers with the local coordinates turned by `deg` around (cx, cz): turned parts of pack items. */
  rotated(cx: number, cz: number, deg: number): Builder {
    const a = deg * DEG;
    const c = Math.cos(a);
    const s = Math.sin(a);
    const tf = this.tf;
    return new Builder(this.buf, this.lines, (x, z) => tf(cx + (x - cx) * c - (z - cz) * s, cz + (x - cx) * s + (z - cz) * c));
  }

  /** Axis-aligned box in local coordinates; `edges` draws its outline. */
  box(x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, side: number, top = side, edges: Color | null = null): void {
    if (x1 - x0 < 1e-4 || z1 - z0 < 1e-4 || y1 - y0 < 1e-4) return;
    const poly = [this.tf(x0, z0), this.tf(x0, z1), this.tf(x1, z1), this.tf(x1, z0)];
    pushPrism(this.buf, ccw(poly), y0, y1, side, top, { aoFrom: 0, bottom: y0 > 0.05 });
    if (edges) this.outline(poly, y0, y1, edges);
  }

  /** A box whose top face is the rectangle `t` (sloped sides): hoods, windscreens, tapered shades. */
  loft(b: [number, number, number, number], t: [number, number, number, number], y0: number, y1: number, side: number, top = side, edges: Color | null = null): void {
    if (y1 - y0 < 1e-4) return;
    const lo: Vec2[] = [this.tf(b[0], b[2]), this.tf(b[0], b[3]), this.tf(b[1], b[3]), this.tf(b[1], b[2])];
    const hi: Vec2[] = [this.tf(t[0], t[2]), this.tf(t[0], t[3]), this.tf(t[1], t[3]), this.tf(t[1], t[2])];
    if (lo !== ccw(lo)) {
      lo.reverse();
      hi.reverse();
    }
    pushLoft(this.buf, lo, hi, y0, y1, side, top);
    if (edges) {
      for (let i = 0; i < 4; i++) {
        this.line(hi[i], hi[(i + 1) % 4], y1, y1, edges);
        this.line(lo[i], hi[i], y0, y1, edges);
      }
    }
  }

  /** Box with bevelled top and bottom edges (cushions, mattresses, arm rests). */
  pad(x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, side: number, top = side, r = 0.03, edges: Color | null = null): void {
    r = Math.min(r, (x1 - x0) / 2 - 0.005, (z1 - z0) / 2 - 0.005, (y1 - y0) / 2);
    if (r < 0.008) return this.box(x0, x1, y0, y1, z0, z1, side, top, edges);
    this.loft([x0 + r, x1 - r, z0 + r, z1 - r], [x0, x1, z0, z1], y0, y0 + r, side);
    if (y1 - y0 - 2 * r > 0.005) this.box(x0, x1, y0 + r, y1 - r, z0, z1, side, side, edges);
    this.loft([x0, x1, z0, z1], [x0 + r, x1 - r, z0 + r, z1 - r], y1 - r, y1, side, top);
  }

  /** A cylinder lying along x or z (wheels, rollers); `edges` draws both rims. */
  lyingCyl(axis: "x" | "z", cx: number, cz: number, y0: number, y1: number, len: number, dia: number, side: number, cap = side, n = 12, edges: Color | null = null): void {
    const r = Math.min(dia, y1 - y0) / 2;
    if (r < 1e-4 || len < 1e-4) return;
    const cy = (y0 + y1) / 2;
    const along = axis === "x" ? cx : cz;
    const across = axis === "x" ? cz : cx;
    const at = (a: number, c: number): Vec2 => (axis === "x" ? this.tf(a, c) : this.tf(c, a));
    // the faces are turned outwards in world space already (also when the builder mirrors)
    pushLyingCyl(this.buf, at, along - len / 2, along + len / 2, across, cy, r, side, cap, n);
    if (edges) {
      for (const a of [along - len / 2, along + len / 2]) {
        for (let i = 0; i < n; i++) {
          const t0 = (i / n) * Math.PI * 2;
          const t1 = ((i + 1) / n) * Math.PI * 2;
          this.line(at(a, across + Math.sin(t0) * r), at(a, across + Math.sin(t1) * r), cy + Math.cos(t0) * r, cy + Math.cos(t1) * r, edges);
        }
      }
    }
  }

  /** Vertical cylinder with `n` sides. */
  cyl(cx: number, cz: number, r: number, y0: number, y1: number, side: number, top = side, n = 10, edges: Color | null = null): void {
    const poly: Vec2[] = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      poly.push(this.tf(cx + Math.cos(a) * r, cz + Math.sin(a) * r));
    }
    pushPrism(this.buf, ccw(poly), y0, y1, side, top, { aoFrom: 0, bottom: y0 > 0.05 });
    if (edges) for (let i = 0; i < n; i++) this.line(poly[i], poly[(i + 1) % n], y1, y1, edges);
  }

  /** Line between two local points at heights ya and yb. */
  seg(xa: number, ya: number, za: number, xb: number, yb: number, zb: number, color: Color = EDGE_FURN): void {
    this.line(this.tf(xa, za), this.tf(xb, zb), ya, yb, color);
  }

  private line(a: Vec2, b: Vec2, ya: number, yb: number, color: Color): void {
    this.lines.seg([a[0], ya, a[1]], [b[0], yb, b[1]], color, ALWAYS);
  }

  private outline(poly: Vec2[], y0: number, y1: number, color: Color): void {
    for (let i = 0; i < 4; i++) {
      const a = poly[i];
      const b = poly[(i + 1) % 4];
      this.line(a, b, y1, y1, color);
      this.line(a, a, y0, y1, color);
    }
  }
}

/** Whether a plan transform mirrors (its determinant is negative). */
function tfMirrors(tf: Tf): boolean {
  const o = tf(0, 0);
  const ex = tf(1, 0);
  const ez = tf(0, 1);
  return (ex[0] - o[0]) * (ez[1] - o[1]) - (ex[1] - o[1]) * (ez[0] - o[0]) < 0;
}

function ccw(poly: Vec2[]): Vec2[] {
  let a = 0;
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i];
    const q = poly[(i + 1) % poly.length];
    a += p[0] * q[1] - q[0] * p[1];
  }
  return a >= 0 ? poly : [...poly].reverse();
}

/** Four architectural legs inside a w × d footprint with brushed metal ferrule caps. */
function legs(b: Builder, w: number, d: number, h: number, t: number, inset: number, color = C.metal, taper = false): void {
  const x = w / 2 - inset - t;
  const z = d / 2 - inset - t;
  const ferruleH = Math.min(0.025, h * 0.3);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const cx = sx * x;
      const cz = sz * z;
      if (taper) {
        b.box(cx - t * 0.32, cx + t * 0.32, 0, ferruleH, cz - t * 0.32, cz + t * 0.32, C.metal);
        b.loft([cx - t * 0.3, cx + t * 0.3, cz - t * 0.3, cz + t * 0.3], [cx - t / 2, cx + t / 2, cz - t / 2, cz + t / 2], ferruleH, h, color);
      } else {
        b.box(cx - t * 0.52, cx + t * 0.52, 0, ferruleH, cz - t * 0.52, cz + t * 0.52, C.metal);
        b.box(cx - t / 2, cx + t / 2, ferruleH, h, cz - t / 2, cz + t / 2, color);
      }
    }
  }
}

/** Door or drawer fronts: architectural gola shadow reveals, division lines, and minimalist edge-pull handles. */
function fronts(b: Builder, x0: number, x1: number, y0: number, y1: number, z: number, count: number, handleY: number | null = null, horizontal = false): void {
  const w = (x1 - x0) / count;
  b.seg(x0, y0, z + 0.002, x1, y0, z + 0.002, EDGE_FAINT);
  b.seg(x0, y1, z + 0.002, x1, y1, z + 0.002, EDGE_FAINT);
  for (let i = 1; i < count; i++) {
    const x = x0 + w * i;
    b.seg(x, y0 + 0.01, z + 0.002, x, y1 - 0.01, z + 0.002, EDGE_FAINT);
  }
  for (let i = 0; i < count; i++) {
    const cx = x0 + w * (i + 0.5);
    const hy = handleY ?? y1 - 0.06;
    if (horizontal) {
      const hw = Math.min(0.12, w * 0.28);
      b.box(cx - hw, cx + hw, hy - 0.01, hy + 0.01, z, z + 0.015, C.metal, C.metal, EDGE_GLOW);
    } else {
      const hx = count > 1 ? cx + (i % 2 ? -w / 2 + 0.05 : w / 2 - 0.05) : cx + w / 2 - 0.05;
      b.box(hx - 0.008, hx + 0.008, hy - 0.07, hy + 0.07, z, z + 0.015, C.metal, C.metal, EDGE_GLOW);
    }
  }
}

function sofa(b: Builder, w: number, d: number, h: number, seats: number): void {
  const x0 = -w / 2;
  const x1 = w / 2;
  const z0 = -d / 2;
  const z1 = d / 2;
  const arm = Math.min(0.2, w * 0.12);
  const seatH = h * 0.5;
  const back = Math.min(0.24, d * 0.28);

  // Recessed architectural dark plinth runner with floating sled feet
  b.box(x0 + 0.06, x1 - 0.06, 0, 0.045, z0 + 0.08, z1 - 0.08, C.dark, C.dark, EDGE_FAINT);
  for (const sx of [-1, 1]) {
    const lx = sx * (w / 2 - 0.08);
    b.box(lx - 0.015, lx + 0.015, 0, 0.065, z0 + 0.06, z1 - 0.06, C.metal, C.metal);
  }

  // Tailored upholstered seat platform deck
  b.pad(x0, x1, 0.045, seatH - 0.06, z0 + 0.02, z1, C.fabric, C.fabricTop, 0.03, EDGE_FURN);

  // Ergonomic low-slung backrest structure
  b.loft([x0, x1, z0, z0 + back], [x0 + 0.01, x1 - 0.01, z0, z0 + back * 0.55], seatH - 0.06, h, C.fabric, C.fabricTop, EDGE_FURN);

  // Sculpted wide armrests with outer shadow bevel
  b.pad(x0, x0 + arm, seatH - 0.06, h * 0.74, z0 + 0.02, z1 - 0.02, C.fabric, C.fabricTop, 0.035, EDGE_FURN);
  b.pad(x1 - arm, x1, seatH - 0.06, h * 0.74, z0 + 0.02, z1 - 0.02, C.fabric, C.fabricTop, 0.035, EDGE_FURN);

  // Deep plush multi-density seat cushions and angled back cushions
  const inner = x1 - arm - (x0 + arm);
  const cw = inner / seats;
  for (let i = 0; i < seats; i++) {
    const cx0 = x0 + arm + cw * i + 0.02;
    const cx1 = cx0 + cw - 0.04;
    // Seat cushion with French seam perimeter
    b.pad(cx0, cx1, seatH - 0.06, seatH + 0.06, z0 + back + 0.02, z1 - 0.04, C.cushion, C.cushion, 0.035, EDGE_FAINT);
    // Back cushion with lumbar support angle
    b.loft([cx0 + 0.015, cx1 - 0.015, z0 + back * 0.58, z0 + back + 0.16], [cx0 + 0.025, cx1 - 0.025, z0 + back * 0.42, z0 + back * 0.42 + 0.07], seatH + 0.04, h * 0.95, C.cushion, C.cushion, EDGE_FAINT);
  }

  // Residential luxury accent pillows in corners for multi-seat sofas
  if (seats > 1) {
    b.pad(x0 + arm + 0.03, x0 + arm + 0.22, seatH + 0.06, seatH + 0.26, z0 + back + 0.05, z0 + back + 0.14, C.fabricTop, C.fabricTop, 0.02);
    b.pad(x1 - arm - 0.22, x1 - arm - 0.03, seatH + 0.06, seatH + 0.26, z0 + back + 0.05, z0 + back + 0.14, C.fabricTop, C.fabricTop, 0.02);
  }
}

/**
 * Corner sofa in contemporary European luxury modular style: continuous floating plinth,
 * tailored deck, deep modular cushions, lumbar support backrests, and corner accent pillows.
 */
function cornerSofa(b: Builder, w: number, d: number, h: number, u: boolean): void {
  const x0 = -w / 2;
  const x1 = w / 2;
  const z0 = -d / 2;
  const z1 = d / 2;
  const dep = Math.max(0.3, Math.min(0.95, d * 0.5, w * (u ? 0.34 : 0.45)));
  const back = Math.min(0.24, dep * 0.28);
  const arm = Math.min(0.2, dep * 0.24);
  const seatH = h * 0.5;
  const armH = h * 0.74;
  const sides = u ? [-1, 1] : [-1];

  // Architectural dark recessed plinth runner with metal sled feet
  b.box(x0 + 0.06, x1 - 0.06, 0, 0.045, z0 + 0.06, z0 + dep - 0.06, C.dark, C.dark, EDGE_FAINT);
  for (const sx of sides) {
    const [a0, a1] = sx < 0 ? [x0 + 0.06, x0 + dep - 0.06] : [x1 - dep + 0.06, x1 - 0.06];
    b.box(a0, a1, 0, 0.045, z0 + dep - 0.06, z1 - 0.06, C.dark, C.dark, EDGE_FAINT);
  }
  const sled = (x: number, z: number) => b.box(x - 0.015, x + 0.015, 0, 0.065, z - 0.04, z + 0.04, C.metal, C.metal);
  sled(x0 + 0.08, z0 + 0.08);
  sled(x1 - 0.08, z0 + 0.08);
  if (!u) sled(x1 - 0.08, z0 + dep - 0.08);
  for (const sx of sides) {
    sled(sx * (w / 2 - 0.08), z1 - 0.08);
    sled(sx * (w / 2 - dep + 0.08), z1 - 0.08);
  }

  // Tailored platform deck
  b.pad(x0, x1, 0.045, seatH - 0.06, z0 + 0.02, z0 + dep, C.fabric, C.fabricTop, 0.03, EDGE_FURN);
  for (const sx of sides) {
    const [a0, a1] = sx < 0 ? [x0 + 0.02, x0 + dep] : [x1 - dep, x1 - 0.02];
    b.pad(a0, a1, 0.045, seatH - 0.06, z0 + dep - 0.02, z1, C.fabric, C.fabricTop, 0.03, EDGE_FURN);
  }

  // Backrests with gentle comfort tilt
  b.loft([x0, x1, z0, z0 + back], [x0 + 0.01, x1 - 0.01, z0, z0 + back * 0.55], seatH - 0.06, h, C.fabric, C.fabricTop, EDGE_FURN);
  for (const sx of sides) {
    if (sx < 0) b.loft([x0, x0 + back, z0 + back, z1], [x0, x0 + back * 0.55, z0 + back, z1 - 0.01], seatH - 0.06, h, C.fabric, C.fabricTop, EDGE_FURN);
    else b.loft([x1 - back, x1, z0 + back, z1], [x1 - back * 0.55, x1, z0 + back, z1 - 0.01], seatH - 0.06, h, C.fabric, C.fabricTop, EDGE_FURN);
  }

  // Tailored armrests
  for (const sx of sides) {
    const [a0, a1] = sx < 0 ? [x0 + back, x0 + dep] : [x1 - dep, x1 - back];
    b.pad(a0, a1, seatH - 0.06, armH, z1 - arm, z1, C.fabric, C.fabricTop, 0.035, EDGE_FURN);
  }
  if (!u) b.pad(x1 - arm, x1, seatH - 0.06, armH, z0 + 0.02, z0 + dep - 0.02, C.fabric, C.fabricTop, 0.035, EDGE_FURN);

  // Seat and back cushions along x (rear section)
  const ra = x0 + back;
  const rb = u ? x1 - back : x1 - arm;
  const nx = Math.max(1, Math.round((rb - ra) / 0.62));
  const cw = (rb - ra) / nx;
  for (let i = 0; i < nx; i++) {
    const cx0 = ra + cw * i + 0.02;
    const cx1 = cx0 + cw - 0.04;
    b.pad(cx0, cx1, seatH - 0.06, seatH + 0.06, z0 + back + 0.02, z0 + dep - 0.04, C.cushion, C.cushion, 0.035, EDGE_FAINT);
    b.loft([cx0 + 0.015, cx1 - 0.015, z0 + back * 0.58, z0 + back + 0.16], [cx0 + 0.025, cx1 - 0.025, z0 + back * 0.42, z0 + back * 0.42 + 0.07], seatH + 0.04, h * 0.95, C.cushion, C.cushion, EDGE_FAINT);
  }

  // Seat and back cushions along z (side sections)
  const za = z0 + dep;
  const zb = z1 - arm;
  if (zb - za >= 0.2) {
    const nz = Math.max(1, Math.round((zb - za) / 0.62));
    const cd = (zb - za) / nz;
    for (const sx of sides) {
      for (let i = 0; i < nz; i++) {
        const cz0 = za + cd * i + 0.02;
        const cz1 = cz0 + cd - 0.04;
        if (sx < 0) {
          b.pad(x0 + back + 0.02, x0 + dep - 0.04, seatH - 0.06, seatH + 0.06, cz0, cz1, C.cushion, C.cushion, 0.035, EDGE_FAINT);
          b.loft([x0 + back * 0.58, x0 + back + 0.16, cz0 + 0.015, cz1 - 0.015], [x0 + back * 0.42, x0 + back * 0.42 + 0.07, cz0 + 0.025, cz1 - 0.025], seatH + 0.04, h * 0.95, C.cushion, C.cushion, EDGE_FAINT);
        } else {
          b.pad(x1 - dep + 0.04, x1 - back - 0.02, seatH - 0.06, seatH + 0.06, cz0, cz1, C.cushion, C.cushion, 0.035, EDGE_FAINT);
          b.loft([x1 - back - 0.16, x1 - back * 0.58, cz0 + 0.015, cz1 - 0.015], [x1 - back * 0.42 - 0.07, x1 - back * 0.42, cz0 + 0.025, cz1 - 0.025], seatH + 0.04, h * 0.95, C.cushion, C.cushion, EDGE_FAINT);
        }
      }
    }
  }

  // Corner accent pillows for bourgeois residential staging
  b.pad(x0 + back + 0.04, x0 + back + 0.24, seatH + 0.06, seatH + 0.28, z0 + back + 0.04, z0 + back + 0.16, C.fabricTop, C.fabricTop, 0.025);
  if (u) {
    b.pad(x1 - back - 0.24, x1 - back - 0.04, seatH + 0.06, seatH + 0.28, z0 + back + 0.04, z0 + back + 0.16, C.fabricTop, C.fabricTop, 0.025);
  }
}

function bed(b: Builder, w: number, d: number, h: number): void {
  const z0 = -d / 2;
  const z1 = d / 2;
  const x0 = -w / 2;
  const x1 = w / 2;
  const frameH = Math.min(0.34, h * 0.38);

  // Recessed architectural dark floating plinth base
  b.box(x0 + 0.08, x1 - 0.08, 0, 0.06, z0 + 0.08, z1 - 0.08, C.dark, C.dark, EDGE_FAINT);

  // Upholstered bedstead deck with refined perimeter edge
  b.pad(x0, x1, 0.06, frameH, z0 + 0.06, z1, C.wood, C.woodTop, 0.03, EDGE_FURN);

  // Architectural grand upholstered headboard with vertical fluted channeling
  const headD = 0.08;
  b.pad(x0 - 0.04, x1 + 0.04, 0.06, h, z0, z0 + headD, C.fabric, C.fabricTop, 0.03, EDGE_FURN);
  const channels = Math.max(4, Math.round(w / 0.28));
  for (let i = 1; i < channels; i++) {
    const cx = x0 - 0.04 + ((w + 0.08) / channels) * i;
    b.seg(cx, 0.08, z0 + headD + 0.002, cx, h - 0.02, z0 + headD + 0.002, EDGE_FAINT);
  }

  // Deep luxury mattress with taped piping rim
  const matTop = frameH + 0.22;
  b.pad(x0 + 0.04, x1 - 0.04, frameH, matTop, z0 + headD + 0.02, z1 - 0.03, C.white, C.whiteTop, 0.035, EDGE_FAINT);

  // Folded textured duvet with turned-back cuff
  const fold = z0 + (d - 0.1) * 0.38;
  b.pad(x0 + 0.02, x1 - 0.02, matTop - 0.08, matTop + 0.06, fold, z1 - 0.01, C.cushion, C.fabricTop, 0.03, EDGE_FAINT);
  b.lyingCyl("x", 0, fold + 0.04, matTop - 0.02, matTop + 0.1, w - 0.04, 0.12, C.cushion, C.fabricTop, 10);

  // Layered luxury sleeping pillows and accent bolster
  const pillows = w > 1.2 ? 2 : 1;
  const pw = (w - 0.2) / pillows;
  for (let i = 0; i < pillows; i++) {
    const px = x0 + 0.1 + pw * i;
    const pz = z0 + headD + 0.04;
    const pd = Math.min(0.42, d * 0.2);
    // Base sleeping pillow
    b.pad(px + 0.04, px + pw - 0.04, matTop, matTop + 0.08, pz, pz + pd, C.whiteTop, C.whiteTop, 0.025, EDGE_FAINT);
    // Angled decorative accent pillow
    b.loft([px + 0.06, px + pw - 0.06, pz + 0.04, pz + pd - 0.06], [px + 0.08, px + pw - 0.08, pz + 0.02, pz + pd * 0.45], matTop + 0.06, matTop + 0.16, C.fabricTop, C.fabricTop, EDGE_FAINT);
  }

  // Cashmere bed throw runner across the foot
  b.pad(x0 + 0.01, x1 - 0.01, matTop + 0.06, matTop + 0.08, z1 - 0.32, z1 - 0.02, C.fabricTop, C.fabricTop, 0.015);
}

function chair(b: Builder, w: number, d: number, h: number): void {
  const seat = Math.min(0.46, h * 0.52);

  // Tapered architectural legs with brushed metal ferrule caps
  legs(b, w, d, seat - 0.04, 0.032, 0.025, C.wood, true);

  // Dark metal cross-stretcher tie bars
  b.box(-w / 2 + 0.04, w / 2 - 0.04, seat * 0.4, seat * 0.4 + 0.012, -d / 2 + 0.04, -d / 2 + 0.055, C.metal);
  b.box(-w / 2 + 0.04, w / 2 - 0.04, seat * 0.4, seat * 0.4 + 0.012, d / 2 - 0.055, d / 2 - 0.04, C.metal);

  // Sculpted solid wood / upholstered seat pan
  b.box(-w / 2, w / 2, seat - 0.04, seat, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);

  // Tailored upholstered seat cushion with French piping
  b.pad(-w / 2 + 0.02, w / 2 - 0.02, seat, seat + 0.045, -d / 2 + 0.04, d / 2 - 0.02, C.cushion, C.cushion, 0.02, EDGE_FAINT);

  // Ergonomic curved wraparound backrest
  b.loft([-w / 2, w / 2, -d / 2 + 0.02, -d / 2 + 0.08], [-w / 2 + 0.02, w / 2 - 0.02, -d / 2, -d / 2 + 0.04], seat, h, C.wood, C.woodTop, EDGE_FURN);
  // Lumbar cushion inset
  b.pad(-w / 2 + 0.05, w / 2 - 0.05, seat + 0.06, h - 0.04, -d / 2 + 0.02, -d / 2 + 0.05, C.cushion, C.cushion, 0.015);
}

function table(b: Builder, w: number, d: number, h: number): void {
  // Sculptural faceted bridge/trestle legs with brushed metal tie-rod stretcher
  const legT = 0.07;
  const legH = h - 0.05;
  const legInset = Math.min(0.18, w * 0.12);

  for (const sx of [-1, 1]) {
    const lx = sx * (w / 2 - legInset);
    // Trestle vertical blade legs
    b.loft([lx - legT * 0.4, lx + legT * 0.4, -d / 2 + 0.08, d / 2 - 0.08], [lx - legT / 2, lx + legT / 2, -d / 2 + 0.06, d / 2 - 0.06], 0.02, legH, C.wood, C.woodTop, EDGE_FURN);
    // Metal foot caps
    b.box(lx - legT * 0.45, lx + legT * 0.45, 0, 0.02, -d / 2 + 0.07, d / 2 - 0.07, C.metal);
  }

  // Longitudinal brushed metal tie-rod stretcher
  const lx0 = -w / 2 + legInset;
  const lx1 = w / 2 - legInset;
  b.box(lx0, lx1, legH * 0.35, legH * 0.35 + 0.02, -0.015, 0.015, C.metal, C.metal, EDGE_FAINT);

  // Recessed shadow reveal frame under tabletop
  b.box(-w / 2 + 0.06, w / 2 - 0.06, legH, legH + 0.015, -d / 2 + 0.06, d / 2 - 0.06, C.dark, C.dark);

  // Reverse-beveled luxury tabletop slab
  b.loft([-w / 2 + 0.02, w / 2 - 0.02, -d / 2 + 0.02, d / 2 - 0.02], [-w / 2, w / 2, -d / 2, d / 2], legH + 0.015, h, C.wood, C.woodTop, EDGE_GLOW);
}

function desk(b: Builder, w: number, d: number, h: number): void {
  const x0 = -w / 2;
  const x1 = w / 2;

  // Floating chamfered executive worktop with shadow reveal
  b.box(x0 + 0.04, x1 - 0.04, h - 0.05, h - 0.035, -d / 2 + 0.04, d / 2 - 0.04, C.dark, C.dark);
  b.pad(x0, x1, h - 0.035, h, -d / 2, d / 2, C.wood, C.woodTop, 0.015, EDGE_FURN);

  // Inset leather desk pad blotter
  b.pad(x0 + 0.18, x1 - 0.38, h, h + 0.004, -d / 2 + 0.08, d / 2 - 0.06, C.dark, C.dark, 0.008, EDGE_FAINT);

  // Architectural sled leg frame in brushed metal on left
  b.box(x0 + 0.04, x0 + 0.07, 0, h - 0.05, -d / 2 + 0.06, d / 2 - 0.06, C.metal, C.metal, EDGE_FURN);
  b.box(x0 + 0.02, x0 + 0.09, 0, 0.015, -d / 2 + 0.04, d / 2 - 0.04, C.metal);

  // Asymmetric suspended pedestal credenza with fluted drawers on right
  const dw = Math.min(0.44, w * 0.32);
  const px0 = x1 - dw;
  b.box(px0, x1 - 0.02, 0.06, h - 0.05, -d / 2 + 0.04, d / 2 - 0.03, C.body, C.bodyTop, EDGE_FURN);
  // Recessed dark plinth
  b.box(px0 + 0.02, x1 - 0.04, 0, 0.06, -d / 2 + 0.06, d / 2 - 0.05, C.dark);
  // Fluted drawer front horizontal dividers and brushed metallic edge-pulls
  const zf = d / 2 - 0.03;
  for (const y of [h * 0.38, h * 0.68]) b.seg(px0, y, zf, x1 - 0.02, y, zf, EDGE_FAINT);
  for (const y of [h * 0.22, h * 0.52, h * 0.82]) {
    b.box(px0 + dw * 0.2, x1 - 0.02 - dw * 0.2, y - 0.008, y + 0.008, zf, zf + 0.014, C.metal, C.metal, EDGE_GLOW);
  }

  // Brushed metal cable pass hatch with flip cover
  b.box(-0.15, 0.15, h, h + 0.003, -d / 2 + 0.05, -d / 2 + 0.09, C.metal, C.metal, EDGE_FAINT);

  // Ultra-thin curved 4K display on articulated aluminum monitor arm
  const screenW = Math.min(0.72, w * 0.55);
  const screenH = screenW * 0.52;
  // Monitor base and articulated arm
  b.cyl(0, -d / 2 + 0.14, 0.06, h, h + 0.015, C.metal, C.metal, 12);
  b.cyl(0, -d / 2 + 0.14, 0.018, h + 0.015, h + 0.16, C.metal, C.metal, 8);
  // Curved screen panel with slim bezel
  b.box(-screenW / 2, screenW / 2, h + 0.14, h + 0.14 + screenH, -d / 2 + 0.13, -d / 2 + 0.155, C.dark, C.dark, EDGE_GLOW);
  // Thin metallic bezel trim
  b.seg(-screenW / 2, h + 0.14, -d / 2 + 0.156, screenW / 2, h + 0.14, -d / 2 + 0.156, EDGE_FAINT);
}

function cabinet(b: Builder, w: number, d: number, h: number, doors: number, handleY: number | null = null, horizontal = false): void {
  // Recessed architectural dark shadow kick-plinth
  b.box(-w / 2 + 0.03, w / 2 - 0.03, 0, 0.06, -d / 2 + 0.03, d / 2 - 0.05, C.dark, C.dark);
  // Main carcass with shadow perimeter
  b.box(-w / 2, w / 2, 0.06, h - 0.015, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);
  // Inset top slab
  b.box(-w / 2 + 0.005, w / 2 - 0.005, h - 0.015, h, -d / 2 + 0.005, d / 2 - 0.015, C.bodyTop, C.bodyTop, EDGE_FAINT);
  // Precision front doors with gola shadow reveals
  fronts(b, -w / 2, w / 2, 0.06, h - 0.02, d / 2 - 0.02, doors, handleY, horizontal);
}

function shelf(b: Builder, w: number, d: number, h: number): void {
  const t = 0.028;
  // Architectural open étagère with slender twin-metal upright stiles
  for (const sx of [-1, 1]) {
    const x = sx * (w / 2 - 0.025);
    for (const sz of [-1, 1]) {
      const z = sz * (d / 2 - 0.025);
      b.box(x - 0.01, x + 0.01, 0, h, z - 0.01, z + 0.01, C.metal, C.metal, EDGE_FAINT);
    }
  }

  // Floating thick shelves in dark wood / smoked oak
  const n = Math.max(2, Math.round(h / 0.38));
  for (let i = 0; i <= n; i++) {
    const y = Math.min(h - t, (h / n) * i + (i === 0 ? 0.06 : 0));
    b.box(-w / 2 + 0.01, w / 2 - 0.01, y, y + t, -d / 2 + 0.01, d / 2 - 0.01, C.wood, C.woodTop, EDGE_FURN);

    // Curated high-end decorative objects on intermediate shelves
    if (i < n && i > 0) {
      if (i % 2 === 1) {
        // Sculptural ceramic vase
        b.cyl(-w / 2 + 0.14, 0, 0.05, y + t, y + t + 0.16, C.pot, C.pot, 12, EDGE_FAINT);
        // Books with marble bookends
        let x = -w / 2 + 0.26;
        let k = i * 4;
        while (x < w / 2 - 0.12) {
          const bw = 0.035 + ((k * 7) % 4) * 0.01;
          const bh = (h / n) * 0.65 - ((k * 5) % 3) * 0.03;
          b.box(x, x + bw, y + t, y + t + bh, -d / 2 + 0.06, d / 2 - 0.06, (k % 2) ? C.fabric : C.cushion, C.fabricTop);
          x += bw + 0.008;
          k++;
        }
      } else {
        // Books with marble bookends on left
        let x = -w / 2 + 0.08;
        let k = i * 5;
        while (x < -0.05) {
          const bw = 0.035 + ((k * 7) % 4) * 0.01;
          const bh = (h / n) * 0.65 - ((k * 5) % 3) * 0.03;
          b.box(x, x + bw, y + t, y + t + bh, -d / 2 + 0.06, d / 2 - 0.06, (k % 2) ? C.cushion : C.fabric, C.fabricTop);
          x += bw + 0.008;
          k++;
        }
        // Decorative art sculpture on right
        b.box(w * 0.15, w * 0.32, y + t, y + t + 0.02, -0.06, 0.06, C.metal);
        b.loft([w * 0.2, w * 0.27, -0.04, 0.04], [w * 0.22, w * 0.25, -0.02, 0.02], y + t + 0.02, y + t + 0.18, C.whiteTop, C.whiteTop, EDGE_FAINT);
      }
    }
  }
}

function kitchen(b: Builder, w: number, d: number, h: number): void {
  const doors = Math.max(1, Math.round(w / 0.6));
  // Recessed dark toe-kick plinth
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.08, -d / 2 + 0.02, d / 2 - 0.07, C.dark, C.dark);

  // Base carcass with recessed gola channel profile
  b.box(-w / 2, w / 2, 0.08, h - 0.04, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);
  // Recessed dark horizontal gola finger-rail under countertop
  b.box(-w / 2, w / 2, h - 0.07, h - 0.04, d / 2 - 0.04, d / 2 - 0.02, C.dark, C.dark);
  // Cabinet door / drawer fronts
  fronts(b, -w / 2, w / 2, 0.08, h - 0.07, d / 2 - 0.02, doors, null, true);

  // Thick solid stone / quartz worktop with chamfered edge and rear upstand
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, worktop(), worktop(), EDGE_FURN);
  // Rear upstand splash lip
  b.box(-w / 2, w / 2, h, h + 0.04, -d / 2, -d / 2 + 0.02, worktop(), worktop(), EDGE_FAINT);
}

/** A built-in worktop's slab: light like a front, or the placed item's wood finish (#1175). */
function worktop(): number {
  return finish?.woodTop ?? C.whiteTop;
}

function fridge(b: Builder, w: number, d: number, h: number): void {
  // Premium French-door luxury refrigerator (Sub-Zero / Gaggenau)
  // Recessed dark plinth and top vent
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.05, -d / 2 + 0.02, d / 2 - 0.04, C.dark);
  b.box(-w / 2, w / 2, 0.05, h, -d / 2, d / 2 - 0.02, C.white, C.whiteTop, EDGE_FURN);

  const split = h * 0.65;
  // Lower freezer drawer facade
  b.box(-w / 2, w / 2, 0.06, split - 0.02, d / 2 - 0.02, d / 2, C.metal, C.metal, EDGE_FAINT);
  // Horizontal brushed metal bar handle on freezer
  b.box(-w * 0.35, w * 0.35, (0.06 + split) / 2 - 0.012, (0.06 + split) / 2 + 0.012, d / 2, d / 2 + 0.025, C.metal, C.metal, EDGE_GLOW);

  // Upper French doors (left & right)
  const midX = 0;
  b.box(-w / 2, midX - 0.003, split, h - 0.02, d / 2 - 0.02, d / 2, C.metal, C.metal, EDGE_FAINT);
  b.box(midX + 0.003, w / 2, split, h - 0.02, d / 2 - 0.02, d / 2, C.metal, C.metal, EDGE_FAINT);

  // Full-height vertical architectural tubular bar handles with knurled mounts
  const hy0 = split + 0.12;
  const hy1 = h - 0.12;
  for (const sx of [-1, 1]) {
    const hx = sx * 0.035;
    // Handle standoffs
    for (const y of [hy0 + 0.04, hy1 - 0.04]) {
      b.box(hx - 0.008, hx + 0.008, y - 0.01, y + 0.01, d / 2, d / 2 + 0.025, C.dark);
    }
    // Vertical grip bar
    b.box(hx - 0.008, hx + 0.008, hy0, hy1, d / 2 + 0.025, d / 2 + 0.038, C.metal, C.metal, EDGE_GLOW);
  }

  // Top architectural ventilation louver grille
  for (let i = 0; i < 3; i++) {
    const y = h - 0.015 + i * 0.005;
    b.seg(-w / 2 + 0.04, y, d / 2 + 0.001, w / 2 - 0.04, y, d / 2 + 0.001, EDGE_FAINT);
  }
}

/** A real colour toned into the neon look: darker for a body, a little brighter for a lid. */
const tone = (hex: string, k: number) => shade(parseInt(hex.slice(1), 16), k).getHex();

/**
 * The blueprint and day looks keep only bright, strong colours and turn the rest into their own tones: waste bins
 * are drawn in their full colour there, or a brown or blue bin turns blue or grey like any cupboard (#609).
 */
let lightLook = false;
export function setLightLook(on: boolean): void {
  lightLook = on;
}

/** Vertex colours from `from` on: saturated ones darkened by the shading are lifted back to a kept brightness. */
export function keepBright(c: number[], from: number): void {
  for (let i = from; i + 2 < c.length; i += 3) {
    const mx = Math.max(c[i], c[i + 1], c[i + 2]);
    const mn = Math.min(c[i], c[i + 1], c[i + 2]);
    // wheels and dark parts stay dark; grey and white parts follow the look
    if (mx < 0.1 || (mx - mn) / mx < 0.45 || mx >= 0.62) continue;
    const k = 0.62 / mx;
    c[i] *= k;
    c[i + 1] *= k;
    c[i + 2] *= k;
  }
}

/**
 * A waste bin in its shape and colours (household.ts): wheelie bins taper to the bottom and have their wheels and
 * handle at the back (-z), a 1100 l container stands on four castors, a sack is tied at the top.
 */
/**
 * A waste bin in its shape and colours (household.ts): European modern waste receptacles
 * with reinforced lids, ergonomic handle bars, and rubberized spoke wheels.
 */
function wasteBin(b: Builder, w: number, d: number, h: number, shape: BinShape, colors: [string, string]): void {
  const full = (hex: string) => {
    const mx = Math.max(...new Color(hex).toArray());
    return tone(hex, mx > 0.05 ? Math.max(1, 0.62 / mx) : 1);
  };
  const body = lightLook ? full(colors[0]) : tone(colors[0], 0.55);
  const lid = lightLook ? full(colors[1]) : tone(colors[1], 0.8);
  const lidTop = tone(colors[1], 1);

  if (shape === "bag") {
    b.loft([-w * 0.42, w * 0.42, -d * 0.4, d * 0.4], [-w / 2, w / 2, -d / 2, d / 2], 0, h * 0.55, body, body, EDGE_FAINT);
    b.loft([-w / 2, w / 2, -d / 2, d / 2], [-w * 0.12, w * 0.12, -d * 0.12, d * 0.12], h * 0.55, h * 0.9, lid, lid, EDGE_FAINT);
    b.cyl(0, 0, Math.min(w, d) * 0.1, h * 0.9, h, lidTop, lidTop, 10);
    return;
  }
  if (shape === "caddy") {
    b.loft([-w * 0.45, w * 0.45, -d * 0.45, d * 0.45], [-w / 2, w / 2, -d / 2, d / 2], 0, h * 0.85, body, body, EDGE_FURN);
    b.box(-w / 2, w / 2, h * 0.85, h * 0.95, -d / 2, d / 2, lid, lidTop, EDGE_FAINT);
    b.box(-w * 0.42, -w * 0.36, h * 0.95, h, -0.01, 0.01, lid);
    b.box(w * 0.36, w * 0.42, h * 0.95, h, -0.01, 0.01, lid);
    b.box(-w * 0.42, w * 0.42, h * 0.98, h, -0.01, 0.01, lid);
    return;
  }
  if (shape === "underground") {
    // Architectural stainless / basalt deposit column
    const r = Math.min(w, d) * 0.32;
    b.cyl(0, 0, r, 0, h * 0.88, body, body, 18, EDGE_FURN);
    b.cyl(0, 0, r * 1.08, h * 0.88, h, lid, lidTop, 18, EDGE_FAINT);
    // Weighted drop drum hopper with handle
    b.box(-r * 0.52, r * 0.52, h * 0.6, h * 0.8, r * 0.7, r * 1.04, C.dark, C.dark, EDGE_FAINT);
    b.box(-r * 0.3, r * 0.3, h * 0.78, h * 0.81, r * 1.04, r * 1.08, C.metal);
    // Paved stone perimeter plate
    b.box(-w / 2, w / 2, 0, 0.02, -d / 2, d / 2, C.metal, C.metal, EDGE_FAINT);
    return;
  }
  if (shape === "bin1100") {
    const cast = 0.14;
    // Four heavy-duty swivel casters with brake levers
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        b.cyl(sx * (w / 2 - 0.12), sz * (d / 2 - 0.12), 0.05, 0, cast, C.dark, C.dark, 10);
      }
    }
    // Corrugated ribbed container body
    b.loft([-w / 2 + 0.06, w / 2 - 0.06, -d / 2 + 0.06, d / 2 - 0.08], [-w / 2, w / 2, -d / 2, d / 2], cast, h - 0.1, body, body, EDGE_FURN);
    // Twin curved dome lid with rubber bumper
    b.loft([-w / 2, w / 2, -d / 2, 0], [-w / 2, w / 2, -d / 2, 0], h - 0.1, h, lid, lidTop, EDGE_FAINT);
    b.loft([-w / 2, w / 2, 0, d / 2], [-w / 2, w / 2, 0, d / 2 - 0.05], h - 0.1, h - 0.03, lid, lidTop, EDGE_FAINT);
    return;
  }

  // Modern European wheelie bins (120L / 240L / multi-compartment)
  const wheel = Math.min(0.2, h * 0.19);
  const back = -d / 2;
  // Rubberized wheels with metal hub caps
  for (const sx of [-1, 1]) {
    b.lyingCyl("x", sx * (w / 2 - 0.05), back + wheel / 2 + 0.01, 0, wheel, 0.05, wheel, C.dark, C.metal, 14);
    b.cyl(sx * (w / 2 - 0.05), back + wheel / 2 + 0.01, 0.02, 0, wheel, C.metal, C.metal, 8);
  }
  // Tapered bin body with reinforced side lifting ribs
  b.loft([-w * 0.42, w * 0.42, back + 0.07, d / 2 - 0.05], [-w / 2 + 0.01, w / 2 - 0.01, back + 0.05, d / 2 - 0.01], 0.03, h - 0.05, body, body, EDGE_FURN);
  // Ergonomic handle bar along rear
  b.box(-w * 0.42, w * 0.42, h - 0.1, h - 0.02, back, back + 0.04, lid, lidTop);
  // Overhanging ribbed lid with front pull tab
  b.box(-w / 2, w / 2, h - 0.05, h, back + 0.03, d / 2, lid, lidTop, EDGE_FAINT);
  b.box(-w * 0.15, w * 0.15, h - 0.06, h - 0.045, d / 2, d / 2 + 0.02, lid);

  if (shape === "multi") {
    b.seg(-w / 2, h + 0.002, (back + d / 2) / 2, w / 2, h + 0.002, (back + d / 2) / 2, EDGE_GLOW);
    b.seg(0, h * 0.25, d / 2 - 0.01, 0, h - 0.06, d / 2 - 0.01, EDGE_FAINT);
  }
}

/**
 * Wall switch or socket: ultra-slim architectural wiring devices (Gira Esprit / Jung LS990 / Buster + Punch)
 * with chamfered faceplate, LED status micro-dots, and shuttered sockets.
 */
function wallPlate(b: Builder, w: number, d: number, h: number, n: number, socket: boolean, outdoor: boolean): void {
  const gw = w / n;

  // Bevelled architectural faceplate frame with shadow reveal to the wall
  b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, outdoor ? C.metal : C.white, outdoor ? C.metal : C.whiteTop, EDGE_FURN);
  // Outer perimeter bevel highlight
  b.seg(-w / 2 + 0.004, 0.004, d / 2 + 0.001, w / 2 - 0.004, 0.004, d / 2 + 0.001, EDGE_FAINT);
  b.seg(-w / 2 + 0.004, h - 0.004, d / 2 + 0.001, w / 2 - 0.004, h - 0.004, d / 2 + 0.001, EDGE_FAINT);

  for (let i = 0; i < n; i++) {
    const cx = -w / 2 + gw * (i + 0.5);
    if (i) b.seg(-w / 2 + gw * i, h * 0.06, d / 2 + 0.001, -w / 2 + gw * i, h * 0.94, d / 2 + 0.001, EDGE_FAINT);

    if (!socket) {
      // Precision tactile rocker with subtle seam and status micro-LED dot
      b.box(cx - gw * 0.35, cx + gw * 0.35, h * 0.15, h * 0.85, d / 2, d / 2 + 0.006, C.white, C.whiteTop, EDGE_FAINT);
      b.seg(cx - gw * 0.32, h * 0.5, d / 2 + 0.007, cx + gw * 0.32, h * 0.5, d / 2 + 0.007, EDGE_FAINT);
      // LED indicator dot
      b.cyl(cx, d / 2 + 0.007, 0.003, h * 0.22, h * 0.25, C.accent, C.accent, 6, EDGE_GLOW);
    } else if (outdoor) {
      // Weatherproof spring-loaded cover flap with silicone seal
      b.box(cx - gw * 0.42, cx + gw * 0.42, h * 0.1, h * 0.9, d / 2, d / 2 + 0.02, C.metal, C.metal, EDGE_FAINT);
      b.seg(cx - gw * 0.38, h * 0.86, d / 2 + 0.021, cx + gw * 0.38, h * 0.86, d / 2 + 0.021, EDGE_FAINT);
      b.box(cx - gw * 0.15, cx + gw * 0.15, h * 0.11, h * 0.14, d / 2 + 0.02, d / 2 + 0.025, C.dark);
    } else {
      // Child-safety shuttered socket with metallic bezel ring and earth contacts
      const r = Math.min(gw, h) * 0.34;
      b.lyingCyl("z", cx, d / 2 + 0.002, h / 2 - r, h / 2 + r, 0.005, r * 2, C.dark, C.dark, 16, EDGE_FAINT);
      // Earth clips top and bottom
      b.box(cx - 0.003, cx + 0.003, h / 2 + r * 0.72, h / 2 + r * 0.88, d / 2 + 0.002, d / 2 + 0.006, C.metal);
      b.box(cx - 0.003, cx + 0.003, h / 2 - r * 0.88, h / 2 - r * 0.72, d / 2 + 0.002, d / 2 + 0.006, C.metal);
      // Shuttered pin holes
      b.seg(cx - r * 0.45, h / 2, d / 2 + 0.005, cx - r * 0.45 + 0.005, h / 2, d / 2 + 0.005, EDGE_FURN);
      b.seg(cx + r * 0.45 - 0.005, h / 2, d / 2 + 0.005, cx + r * 0.45, h / 2, d / 2 + 0.005, EDGE_FURN);
    }
  }
}

/** Wi-Fi access point: enterprise architectural AP with micro-perimeter LED halo ring. */
function wifiAp(b: Builder, w: number, d: number, h: number, wall: boolean): void {
  if (wall) {
    // In-wall architectural AP faceplate with Ethernet jacks
    b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
    const r = Math.min(w, h) * 0.28;
    for (let i = 0; i < 20; i++) {
      const a0 = (i / 20) * Math.PI * 2;
      const a1 = ((i + 1) / 20) * Math.PI * 2;
      b.seg(Math.cos(a0) * r, h * 0.6 + Math.sin(a0) * r, d / 2 + 0.002, Math.cos(a1) * r, h * 0.6 + Math.sin(a1) * r, d / 2 + 0.002, EDGE_GLOW);
    }
    // Bottom Ethernet pass-through jacks
    b.box(-w * 0.28, -w * 0.06, 0.03, 0.09, d / 2 - 0.005, d / 2 + 0.003, C.dark);
    b.box(w * 0.06, w * 0.28, 0.03, 0.09, d / 2 - 0.005, d / 2 + 0.003, C.dark);
    return;
  }

  // Ceiling-mount low-profile saucer AP (UniFi U6-Pro / Cisco Catalyst)
  const r = Math.min(w, d) / 2;
  // Mounting bracket
  b.cyl(0, 0, r * 0.6, h, h + 0.01, C.metal, C.metal, 14);
  // Chamfered disc housing
  b.cyl(0, 0, r, 0, h, C.white, C.whiteTop, 24, EDGE_FURN);
  // Micro-perimeter status LED halo ring
  const ringR = r * 0.65;
  for (let i = 0; i < 24; i++) {
    const a0 = (i / 24) * Math.PI * 2;
    const a1 = ((i + 1) / 24) * Math.PI * 2;
    b.seg(Math.cos(a0) * ringR, 0.002, Math.sin(a0) * ringR, Math.cos(a1) * ringR, 0.002, Math.sin(a1) * ringR, EDGE_GLOW);
  }
  // Central subtle logo disc
  b.cyl(0, 0, r * 0.15, 0, 0.002, C.metal, C.metal, 12, EDGE_FAINT);
}

/** Water heater: ultra-slim dual-tank smart water heater with digital LED display or heat pump cylinder. */
function waterHeater(b: Builder, w: number, d: number, h: number, wall: boolean): void {
  if (wall) {
    // Ultra-slim dual-tank smart water heater (Ariston Velis Tech Dry)
    b.pad(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.white, C.whiteTop, 0.05, EDGE_FURN);

    // Champagne / brushed metallic front decorative fascia panel
    b.box(-w * 0.44, w * 0.44, 0.06, h - 0.06, d / 2, d / 2 + 0.005, C.metal, C.metal, EDGE_FAINT);

    // Digital LED touch display with shower icons
    b.box(-w * 0.18, w * 0.18, h * 0.78, h * 0.88, d / 2 + 0.005, d / 2 + 0.008, C.dark, C.dark, EDGE_GLOW);
    b.seg(-w * 0.14, h * 0.83, d / 2 + 0.01, w * 0.14, h * 0.83, d / 2 + 0.01, EDGE_GLOW);

    // Concealed hydraulic connections below
    for (const x of [-w * 0.2, w * 0.2]) {
      b.cyl(x, 0, 0.014, -0.12, 0, C.metal, C.metal, 8);
    }
    return;
  }

  // Floor-standing high-efficiency heat pump water heater cylinder
  const r = Math.min(w, d) / 2;
  // Base ring
  b.cyl(0, 0, r * 0.95, 0, 0.04, C.dark, C.dark, 20);

  // Main insulated tank body in satin white
  b.cyl(0, 0, r, 0.04, h - 0.12, C.white, C.whiteTop, 24, EDGE_FURN);

  // Top heat pump air duct collar
  b.cyl(0, 0, r * 0.82, h - 0.12, h, C.dark, C.metal, 20, EDGE_FAINT);

  // Front digital control panel
  b.box(-r * 0.32, r * 0.32, h * 0.54, h * 0.68, r - 0.005, r + 0.012, C.dark, C.dark, EDGE_GLOW);
  b.seg(-r * 0.24, h * 0.61, r + 0.014, r * 0.24, h * 0.61, r + 0.014, EDGE_GLOW);
}

/** Architectural mailbox with brushed stainless flap, soft-close buffer, and newspaper compartment. */
function mailbox(b: Builder, w: number, d: number, h: number, shape: MailboxShape): void {
  const body = C.metal;
  const top = shade(C.metal, 1.25).getHex();
  const panel = shade(C.metal, 0.85).getHex();

  if (shape === "pole") {
    // US mailbox on a post with red flag
    const post = Math.min(0.09, w * 0.4);
    const boxH = Math.min(0.24, h * 0.22);
    b.box(-post / 2, post / 2, 0, h - boxH, -post / 2, post / 2, C.wood, C.woodTop, EDGE_FAINT);
    b.box(-w / 2, w / 2, h - boxH, h - boxH * 0.45, -d / 2, d / 2, body, top, EDGE_FURN);
    b.lyingCyl("z", 0, 0, h - boxH * 0.9, h, d, w, body, top, 14, EDGE_FURN);
    b.box(w / 2, w / 2 + 0.015, h - boxH * 0.4, h + 0.08, -d * 0.1, -d * 0.04, 0x8a1c1c);
    b.box(w / 2, w / 2 + 0.015, h + 0.02, h + 0.08, -d * 0.04, d * 0.12, 0x8a1c1c);
    return;
  }
  if (shape === "pillar") {
    // Architectural monolith in dark basalt with package compartment & newspaper roll
    const boxH = Math.min(0.42, h * 0.32);
    b.box(-w * 0.22, w * 0.22, 0, h - boxH, -d * 0.22, d * 0.22, C.dark, C.dark, EDGE_FAINT);
    b.lyingCyl("z", 0, 0, h - boxH - 0.22, h - boxH - 0.04, d * 0.9, 0.18, body, top, 14, EDGE_FAINT);
    b.loft([-w / 2, w / 2, -d / 2, d / 2], [-w / 2, w / 2, -d / 2, d / 2 - 0.05], h - boxH, h, body, top, EDGE_FURN);
    b.box(-w * 0.35, w * 0.35, h - 0.12, h - 0.08, d / 2 - 0.05, d / 2 - 0.038, C.dark);
    return;
  }
  if (shape === "parcel") {
    // Smart parcel drop box with electronic keypad
    b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, body, top, EDGE_FURN);
    b.box(-w / 2 + 0.04, w / 2 - 0.04, 0.08, h * 0.72, d / 2, d / 2 + 0.014, panel, top, EDGE_FAINT);
    b.box(-w * 0.32, w * 0.32, h * 0.82, h * 0.88, d / 2, d / 2 + 0.012, C.dark);
    b.box(-0.06, 0.06, h * 0.74, h * 0.8, d / 2 + 0.014, d / 2 + 0.018, C.dark, C.dark, EDGE_GLOW);
    return;
  }
  if (shape === "bank") {
    // Precision mailbox bank with laser-cut nameplate slots
    b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, body, top, EDGE_FURN);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 2; j++) {
        const x0 = -w / 2 + (w / 3) * i + 0.015;
        const y0 = (h / 2) * j + 0.015;
        b.box(x0, x0 + w / 3 - 0.03, y0, y0 + h / 2 - 0.03, d / 2, d / 2 + 0.012, panel, top, EDGE_FAINT);
        b.box(x0 + 0.04, x0 + w / 3 - 0.07, y0 + h / 2 - 0.09, y0 + h / 2 - 0.07, d / 2 + 0.012, d / 2 + 0.016, C.dark);
      }
    }
    return;
  }

  // Wall mailbox with slanted rain canopy, brushed stainless flap, and lower newspaper holder
  b.box(-w / 2, w / 2, 0.14, h * 0.82, -d / 2, d / 2, body, top, EDGE_FURN);
  b.loft([-w / 2, w / 2, -d / 2, d / 2 + 0.025], [-w / 2, w / 2, -d / 2, -d / 2 + 0.02], h * 0.82, h, body, top, EDGE_FURN);
  // Brushed stainless mail slot flap
  b.box(-w * 0.38, w * 0.38, h * 0.68, h * 0.74, d / 2, d / 2 + 0.01, C.metal, C.metal, EDGE_FAINT);
  // Lower tubular newspaper roll
  b.lyingCyl("x", 0, 0, 0, 0.12, w * 0.92, 0.12, body, top, 12, EDGE_FAINT);
}

/** Smart side-by-side fridge: interior LED light columns, tempered glass shelves with metal trims, stainless rear wall. */
function fridgeSmart(b: Builder, w: number, d: number, h: number): void {
  const front = d / 2 - FRIDGE_DOOR;
  // Carcass
  b.box(-w / 2, w / 2, 0.02, h, -d / 2, front, C.body, C.bodyTop, EDGE_FURN);
  b.box(-w / 2 + 0.05, w / 2 - 0.05, 0, 0.02, -d / 2 + 0.05, front - 0.05, C.dark);

  // Interior stainless rear cooling panel (Metal Cooling)
  b.box(-w / 2 + 0.04, w / 2 - 0.04, 0.15, h - 0.1, -d / 2 + 0.01, -d / 2 + 0.02, C.metal, C.metal, EDGE_FAINT);

  // Vertical LED light guides on left and right side walls
  for (const sx of [-1, 1]) {
    const lx = sx * (w / 2 - 0.02);
    b.seg(lx, 0.2, -d / 2 + 0.08, lx, h - 0.15, -d / 2 + 0.08, EDGE_GLOW);
  }

  // Tempered glass shelves with metallic edge trims
  for (const y of [0.35, 0.7, 1.05, 1.4]) {
    if (y > h - 0.15) continue;
    b.box(-w / 2 + 0.03, -0.03, y, y + 0.01, -d / 2 + 0.03, front, C.glass, C.metal, EDGE_FAINT);
    b.box(0.03, w / 2 - 0.03, y, y + 0.01, -d / 2 + 0.03, front, C.glass, C.metal, EDGE_FAINT);
  }
}

/** Thickness of a smart fridge's doors. */
export const FRIDGE_DOOR = 0.06;

/**
 * The two doors of a smart fridge, each swung open by a fraction (0 closed … 1 wide open) around its
 * outer hinge: the left one carries the water dispenser, the right one the screen. An open door turns
 * red – it should not stay open for long.
 */
/**
 * An awning, by its kind (`variant`): "arm" a folding-arm awning over a terrace (default), "drop" a drop-arm awning
 * at a balcony or window, "vertical" a vertical screen running down in side rails (ZIP), "pergola" a frame with posts
 * whose fabric runs out on top, "side" a side awning pulled out sideways from a post (a privacy screen). `out` is how
 * far it is run out (0 … 1); `base` the cassette's underside above the floor (a side awning: its top).
 */
export function pushAwning(buf: GeoBuffer, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "variant" | "awning_pitch" | "awning_valance">, base: number, out: number): void {
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const t = Math.max(0, Math.min(1, out));
  // local x along the wall, local z out from the wall (the item's front), y up
  const P = (lx: number, y: number, lz: number): number[] => [f.x + lx * c - lz * s, y, f.z + lx * s + lz * c];
  const quad = (p: number[], q: number[], r: number[], u: number[], col: Color) => {
    buf.tri(p, q, r, col);
    buf.tri(p, r, u, col);
    buf.tri(p, r, q, col);
    buf.tri(p, u, r, col);
  };
  // a square beam between two local points (arms, bars, posts, rails)
  const beam = (pl: number[], ql: number[], r: number, col: Color) => {
    const p = P(pl[0], pl[1], pl[2]);
    const q = P(ql[0], ql[1], ql[2]);
    const dx = q[0] - p[0];
    const dy = q[1] - p[1];
    const dz = q[2] - p[2];
    const len = Math.hypot(dx, dy, dz) || 1;
    const d = [dx / len, dy / len, dz / len];
    const up = Math.abs(d[1]) > 0.9 ? [1, 0, 0] : [0, 1, 0];
    const u = [d[1] * up[2] - d[2] * up[1], d[2] * up[0] - d[0] * up[2], d[0] * up[1] - d[1] * up[0]];
    const ul = Math.hypot(u[0], u[1], u[2]) || 1;
    const n1 = [(u[0] / ul) * r, (u[1] / ul) * r, (u[2] / ul) * r];
    const n2 = [d[1] * n1[2] - d[2] * n1[1], d[2] * n1[0] - d[0] * n1[2], d[0] * n1[1] - d[1] * n1[0]];
    const K = [
      [1, 1],
      [-1, 1],
      [-1, -1],
      [1, -1],
    ];
    const corner = (o: number[], i: number) => [o[0] + n1[0] * K[i][0] + n2[0] * K[i][1], o[1] + n1[1] * K[i][0] + n2[1] * K[i][1], o[2] + n1[2] * K[i][0] + n2[2] * K[i][1]];
    for (let i = 0; i < 4; i++) {
      const j = (i + 1) % 4;
      buf.tri(corner(p, i), corner(q, i), corner(q, j), col);
      buf.tri(corner(p, i), corner(q, j), corner(p, j), col);
    }
  };
  // a box between two local corners (cassettes)
  const box = (x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, col: Color, topCol: Color) => {
    quad(P(x0, y1, z0), P(x1, y1, z0), P(x1, y1, z1), P(x0, y1, z1), topCol);
    quad(P(x0, y0, z1), P(x1, y0, z1), P(x1, y1, z1), P(x0, y1, z1), col);
    quad(P(x0, y0, z0), P(x1, y0, z0), P(x1, y0, z1), P(x0, y0, z1), col);
    quad(P(x0, y0, z0), P(x0, y0, z1), P(x0, y1, z1), P(x0, y1, z0), col);
    quad(P(x1, y0, z0), P(x1, y0, z1), P(x1, y1, z1), P(x1, y1, z0), col);
  };
  const body = new Color(C.body);
  const top = new Color(C.bodyTop);
  const accent = new Color(C.accent);
  // Luxury outdoor architectural fabrics: refined solution-dyed acrylic weave in warm ecru and muted taupe
  const stripeA = new Color(0xd9d2c7);
  const stripeB = new Color(0xbab0a0);
  // a striped sheet between two local edges (p0–p1 the first edge, q0–q1 the second), stripes across the first edge
  const sheet = (p0: number[], p1: number[], q0: number[], q1: number[], n: number) => {
    const mix = (u: number[], v: number[], k: number) => [u[0] + (v[0] - u[0]) * k, u[1] + (v[1] - u[1]) * k, u[2] + (v[2] - u[2]) * k];
    for (let i = 0; i < n; i++) {
      const a0 = mix(p0, p1, i / n);
      const a1 = mix(p0, p1, (i + 1) / n);
      const b1 = mix(q0, q1, (i + 1) / n);
      const b0 = mix(q0, q1, i / n);
      quad(P(a0[0], a0[1], a0[2]), P(a1[0], a1[1], a1[2]), P(b1[0], b1[1], b1[2]), P(b0[0], b0[1], b0[2]), i % 2 ? stripeA : stripeB);
    }
  };
  const hw = f.w / 2;
  const back = -f.d / 2;
  const cas = Math.max(0.12, Math.min(0.3, f.h));
  const stripes = Math.max(4, Math.round(f.w / 0.3));
  const pitch = ((f.awning_pitch ?? 12) * Math.PI) / 180;
  const valance = (y: number, z: number) => {
    if (f.awning_valance === false) return;
    sheet([-hw + 0.04, y, z + 0.01], [hw - 0.04, y, z + 0.01], [-hw + 0.04, y - 0.2, z + 0.01], [hw - 0.04, y - 0.2, z + 0.01], stripes);
  };
  const kind = f.variant ?? "arm";

  if (kind === "side") {
    // a post with the rolled fabric at the left end, the pull bar running to the right, a post to hook it into
    const y1 = base;
    const y0 = 0.05;
    const z = 0;
    const end = -hw + 0.08 + t * (f.w - 0.16);
    box(-hw, -hw + 0.1, 0, y1 + 0.05, z - 0.05, z + 0.05, body, top);
    box(hw - 0.06, hw, 0, y1 + 0.05, z - 0.03, z + 0.03, body, top);
    if (t > 0.01) sheet([-hw + 0.1, y1, z], [-hw + 0.1, y0, z], [end, y1, z], [end, y0, z], Math.max(4, Math.round((y1 - y0) / 0.3)));
    beam([end, y0, z], [end, y1, z], 0.02, accent);
    return;
  }

  if (kind === "vertical") {
    // a cassette across the top, side rails down to the floor, the fabric running down to its bottom bar
    const z0 = back;
    const z1 = Math.min(f.d / 2, back + cas);
    box(-hw, hw, base, base + cas, z0, z1, body, top);
    const zf = (z0 + z1) / 2;
    for (const x of [-hw + 0.02, hw - 0.02]) beam([x, 0.02, zf], [x, base, zf], 0.02, accent);
    const yb = base - t * Math.max(0, base - 0.04);
    if (t > 0.01) sheet([-hw + 0.04, base, zf], [hw - 0.04, base, zf], [-hw + 0.04, yb, zf], [hw - 0.04, yb, zf], stripes);
    beam([-hw + 0.03, yb, zf], [hw - 0.03, yb, zf], 0.025, accent);
    return;
  }

  if (kind === "pergola") {
    // a fixed frame: rails from the wall to the posts at the front, falling with the pitch; the fabric runs out on top
    const zf = f.d / 2 - 0.05;
    const yw = base + cas;
    const yf = yw - (zf - back) * Math.tan(pitch);
    box(-hw, hw, base, yw, back, back + cas, body, top);
    for (const x of [-hw + 0.05, hw - 0.05]) {
      beam([x, yw, back + cas], [x, yf, zf], 0.035, accent);
      beam([x, 0, zf], [x, yf, zf], 0.045, body);
    }
    beam([-hw + 0.05, yf, zf], [hw - 0.05, yf, zf], 0.035, accent);
    const zr = back + cas + t * (zf - back - cas);
    const yr = yw - (zr - back) * Math.tan(pitch) + 0.04;
    if (t > 0.01) sheet([-hw + 0.08, yw + 0.04, back + cas], [hw - 0.08, yw + 0.04, back + cas], [-hw + 0.08, yr, zr], [hw - 0.08, yr, zr], stripes);
    beam([-hw + 0.08, yr, zr], [hw - 0.08, yr, zr], 0.025, accent);
    return;
  }

  // the cassette on the wall (folding-arm and drop-arm awnings)
  const z0 = back;
  const z1 = back + cas;
  box(-hw, hw, base, base + cas, z0, z1, body, top);
  const mouth = [z1 - 0.02, base + cas * 0.35];

  if (kind === "drop") {
    // arms hinged on the wall below the cassette swing out and down; the fabric runs from the cassette to their bar
    const arm = Math.max(0.3, f.d - cas);
    // the hinge sits an arm's length under the cassette's mouth: retracted, the bar rests at the cassette
    const pivot = [z1, mouth[1] - arm];
    // retracted the arms point up along the wall, run out they reach the set angle below the horizontal
    const phi = t * (Math.PI / 2 + pitch);
    const bar = [pivot[0] + Math.sin(phi) * arm, pivot[1] + Math.cos(phi) * arm];
    for (const x of [-hw + 0.08, hw - 0.08]) beam([x, pivot[1], pivot[0]], [x, bar[1], bar[0]], 0.018, accent);
    if (t > 0.01) sheet([-hw + 0.04, mouth[1], mouth[0]], [hw - 0.04, mouth[1], mouth[0]], [-hw + 0.04, bar[1], bar[0]], [hw - 0.04, bar[1], bar[0]], stripes);
    beam([-hw + 0.02, bar[1], bar[0]], [hw - 0.02, bar[1], bar[0]], 0.03, accent);
    if (t > 0.05) valance(bar[1], bar[0]);
    return;
  }

  // folding-arm awning: the fabric down its fall to the front bar, two folding arms bending out sideways
  const reach = Math.max(0, f.d - cas) * t;
  const end = [mouth[0] + reach, mouth[1] - reach * Math.tan(pitch)];
  if (reach > 0.01) {
    sheet([-hw + 0.04, mouth[1], mouth[0]], [hw - 0.04, mouth[1], mouth[0]], [-hw + 0.04, end[1], end[0]], [hw - 0.04, end[1], end[0]], stripes);
    const arm = Math.max(0.3, (f.d - cas) / 2 + 0.05);
    for (const side of [-1, 1]) {
      const x = side * (hw - 0.12);
      const sh = [x, base + 0.02, z1 - 0.04];
      const hand = [x, end[1] - 0.02, end[0]];
      const span = Math.hypot(hand[2] - sh[2], hand[1] - sh[1]);
      const bend = Math.sqrt(Math.max(0, arm * arm - (span / 2) ** 2));
      const elbow = [x - side * Math.min(bend, hw - 0.15), (sh[1] + hand[1]) / 2, (sh[2] + hand[2]) / 2];
      beam(sh, elbow, 0.018, accent);
      beam(elbow, hand, 0.018, accent);
    }
  }
  beam([-hw + 0.02, end[1], end[0]], [hw - 0.02, end[1], end[0]], 0.03, accent);
  if (reach > 0.05) valance(end[1], end[0]);
}

export function pushFridgeDoors(buf: GeoBuffer, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number, left: number, right: number): void {
  const p0 = buf.p.length;
  pushFridgeDoorsUnflipped(buf, f, base, left, right);
  if (f.mirror) flipWinding(buf, p0);
}

function pushFridgeDoorsUnflipped(buf: GeoBuffer, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number, left: number, right: number): void {
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const mx = f.mirror ? -1 : 1;
  const tf = (lx: number, lz: number): [number, number] => [f.x + mx * lx * c - lz * s, f.z + mx * lx * s + lz * c];
  const y0 = base + 0.05;
  const y1 = base + f.h - 0.02;
  const red = new Color(0.75, 0.1, 0.14);
  const dark = new Color(C.dark);
  const accent = new Color(C.accent);
  const dw = f.w / 2 - 0.006;
  // a door: u runs from the hinge along the door (positive to the right), v through its thickness (0 = front face)
  const door = (hx: number, sign: 1 | -1, angle: number) => {
    const open = angle / opening;
    const front = new Color(0x1f2d4c).lerp(red, open);
    const side = new Color(C.body).lerp(red, open * 0.8);
    const ca = Math.cos(angle);
    const sa = Math.sin(angle);
    const at = (u: number, v: number): [number, number] => tf(hx + sign * (u * ca - v * sa), f.d / 2 + u * sa + v * ca);
    const quad = (p: [number, number][], ya: number, yb: number, col: Color) => {
      const [p0, p1, p2, p3] = p;
      buf.tri([p0[0], ya, p0[1]], [p1[0], ya, p1[1]], [p2[0], yb, p2[1]], col);
      buf.tri([p0[0], ya, p0[1]], [p2[0], yb, p2[1]], [p3[0], yb, p3[1]], col);
    };
    const box = (u0: number, u1: number, ya: number, yb: number, v0: number, v1: number, col: Color, face = col) => {
      const q = [at(u0, v1), at(u1, v1), at(u1, v0), at(u0, v0)];
      // front (v1 side), back, sides, top and bottom
      quad([q[0], q[1], q[1], q[0]], ya, yb, face);
      quad([q[3], q[2], q[2], q[3]], ya, yb, col);
      quad([q[0], q[3], q[3], q[0]], ya, yb, col);
      quad([q[1], q[2], q[2], q[1]], ya, yb, col);
      quad([q[0], q[1], q[2], q[3]], yb, yb, col);
      quad([q[3], q[2], q[1], q[0]], ya, ya, col);
    };
    box(0, dw, y0, y1, -FRIDGE_DOOR, 0, side, front);
    // handle at the free edge
    box(dw - 0.05, dw - 0.03, base + f.h * 0.45, base + f.h * 0.75, 0.005, 0.025, accent);
    return box;
  };
  const opening = 1.83; // ~105°
  const leftBox = door(-f.w / 2, 1, left * opening);
  // water dispenser: a dark recess in the left door
  leftBox(0.12, 0.3, base + f.h * 0.5, base + f.h * 0.68, 0.001, 0.005, dark);
  const rightBox = door(f.w / 2, -1, right * opening);
  // the screen: a dark panel on the right door (a picture rule puts its picture over it)
  rightBox(0.06, dw - 0.06, base + f.h * 0.52, base + f.h * 0.86, 0.001, 0.005, dark);
}

function stove(b: Builder, w: number, d: number, h: number): void {
  // Ultra-flush induction cooktop with integrated downdraft extraction (BORA / Gaggenau style)
  cabinet(b, w, d - 0.02, h - 0.04, 1, h - 0.24, true);

  // Black ceramic-glass cooktop surface
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.dark, C.dark, EDGE_FURN);

  // Central architectural downdraft extractor ventilation grille
  b.box(-w * 0.08, w * 0.08, h, h + 0.003, -d * 0.28, d * 0.28, C.dark, C.dark, EDGE_GLOW);
  for (let i = -3; i <= 3; i++) {
    const z = (d * 0.25 / 3) * i;
    b.seg(-w * 0.07, h + 0.004, z, w * 0.07, h + 0.004, z, EDGE_FAINT);
  }

  // Dual flex-induction bridge cooking zones with precision crosshairs
  for (const [x, z, r] of [
    [-0.15, -0.13, 0.085],
    [0.15, -0.13, 0.07],
    [-0.15, 0.13, 0.07],
    [0.15, 0.13, 0.085],
  ]) {
    const sx = (x * w) / 0.6;
    const sz = (z * d) / 0.62;
    b.cyl(sx, sz, r, h, h + 0.003, C.dark, 0x16263f, 14, EDGE_GLOW);
    // Crosshair markings
    b.seg(sx - r * 0.4, h + 0.004, sz, sx + r * 0.4, h + 0.004, sz, EDGE_FAINT);
    b.seg(sx, h + 0.004, sz - r * 0.4, sx, h + 0.004, sz + r * 0.4, EDGE_FAINT);
  }

  // Front touch-slider control panel
  b.box(-w * 0.22, w * 0.22, h, h + 0.002, d / 2 - 0.06, d / 2 - 0.02, C.dark, C.dark, EDGE_FAINT);
  b.seg(-w * 0.18, h + 0.003, d / 2 - 0.04, w * 0.18, h + 0.003, d / 2 - 0.04, EDGE_GLOW);
}

function sink(b: Builder, w: number, d: number, h: number): void {
  // Undermount large single-bowl granite/stainless sink with designer gooseneck faucet
  cabinet(b, w, d - 0.02, h - 0.04, Math.max(1, Math.round(w / 0.45)), h - 0.2);
  const bw = Math.min(0.52, w - 0.2);

  // Solid stone worktop perimeter around the bowl
  b.box(-w / 2, -bw / 2, h - 0.04, h, -d / 2, d / 2, worktop(), worktop(), EDGE_FURN);
  b.box(bw / 2, w / 2, h - 0.04, h, -d / 2, d / 2, worktop(), worktop(), EDGE_FURN);
  b.box(-bw / 2, bw / 2, h - 0.04, h, -d / 2, -d / 2 + 0.12, worktop(), worktop());
  b.box(-bw / 2, bw / 2, h - 0.04, h, d / 2 - 0.08, d / 2, worktop(), worktop());

  // Deep recessed undermount sink basin
  b.box(-bw / 2, bw / 2, h - 0.22, h - 0.18, -d / 2 + 0.12, d / 2 - 0.08, C.metal, C.metal, EDGE_GLOW);
  b.box(-bw / 2, -bw / 2 + 0.02, h - 0.18, h - 0.04, -d / 2 + 0.12, d / 2 - 0.08, C.metal);
  b.box(bw / 2 - 0.02, bw / 2, h - 0.18, h - 0.04, -d / 2 + 0.12, d / 2 - 0.08, C.metal);
  b.box(-bw / 2, bw / 2, h - 0.18, h - 0.04, -d / 2 + 0.12, -d / 2 + 0.14, C.metal);
  b.box(-bw / 2, bw / 2, h - 0.18, h - 0.04, d / 2 - 0.1, d / 2 - 0.08, C.metal);

  // Stainless basket strainer
  b.cyl(0, 0, 0.035, h - 0.22, h - 0.21, C.metal, C.metal, 10, EDGE_FAINT);

  // Designer architectural gooseneck faucet with pull-down spray wand
  const fz = -d / 2 + 0.06;
  b.cyl(0, fz, 0.024, h, h + 0.02, C.metal, C.metal, 10);
  b.cyl(0, fz, 0.016, h + 0.02, h + 0.32, C.metal, C.metal, 8);
  b.box(-0.014, 0.014, h + 0.29, h + 0.32, fz, fz + 0.18, C.metal, C.metal, EDGE_FAINT);
  b.cyl(0, fz + 0.18, 0.014, h + 0.22, h + 0.29, C.metal, C.metal, 8);
  // Single-lever mixer handle
  b.box(0.022, 0.055, h + 0.05, h + 0.08, fz - 0.01, fz + 0.01, C.metal, C.metal);
  // Countertop flush soap dispenser
  b.cyl(bw / 2 + 0.05, fz, 0.014, h, h + 0.07, C.metal, C.metal, 8);
}

function bathtub(b: Builder, w: number, d: number, h: number): void {
  // Contemporary freestanding solid-surface soaking tub (Antonio Lupi / Boffi)
  // Sculpted flared outer shell
  b.loft([-w / 2 + 0.06, w / 2 - 0.06, -d / 2 + 0.05, d / 2 - 0.05], [-w / 2, w / 2, -d / 2, d / 2], 0, h, C.white, C.whiteTop, EDGE_FURN);

  // Inner ergonomic bathing well with sloped backrests
  const rim = 0.055;
  b.box(-w / 2 + rim, w / 2 - rim, h - 0.04, h - 0.02, -d / 2 + rim, d / 2 - rim, C.glass, C.glass, EDGE_GLOW);

  // Recessed slot overflow
  b.seg(w / 2 - rim - 0.002, h - 0.08, -0.04, w / 2 - rim - 0.002, h - 0.08, 0.04, EDGE_FAINT);
  // Chrome pop-up drain
  b.cyl(0, 0, 0.03, h - 0.04, h - 0.035, C.metal, C.metal, 10);

  // Freestanding floor-mounted architectural tub-filler faucet in brushed metal
  const fx = -w / 2 - 0.05;
  b.cyl(fx, 0, 0.035, 0, 0.02, C.metal, C.metal, 10);
  b.cyl(fx, 0, 0.018, 0.02, h + 0.18, C.metal, C.metal, 8);
  b.box(fx, fx + 0.12, h + 0.15, h + 0.18, -0.012, 0.012, C.metal, C.metal, EDGE_FAINT);
  b.cyl(fx + 0.12, 0, 0.012, h + 0.11, h + 0.15, C.metal, C.metal, 8);
  // Mixer lever
  b.box(fx - 0.01, fx + 0.01, h + 0.1, h + 0.13, 0.02, 0.06, C.metal);
}

function shower(b: Builder, w: number, d: number, h: number): void {
  // Walk-in wetroom luxury shower with ultra-low profile architectural stone tray
  b.box(-w / 2, w / 2, 0, 0.03, -d / 2, d / 2, C.whiteTop, C.whiteTop, EDGE_FURN);

  // Linear stainless steel drainage channel
  b.box(-w / 2 + 0.1, w / 2 - 0.1, 0.025, 0.032, -d / 2 + 0.05, -d / 2 + 0.09, C.metal, C.metal, EDGE_FAINT);

  // Frameless 10mm architectural tempered glass panel with metallic wall stabilization channel
  b.seg(-w / 2, 0.03, d / 2, w / 2, 0.03, d / 2, EDGE_GLOW);
  b.seg(-w / 2, h, d / 2, w / 2, h, d / 2, EDGE_GLOW);
  b.seg(w / 2, 0.03, d / 2, w / 2, h, d / 2, EDGE_GLOW);
  b.seg(w / 2, 0.03, -d / 2, w / 2, 0.03, d / 2, EDGE_GLOW);
  b.seg(w / 2, h, -d / 2, w / 2, h, d / 2, EDGE_GLOW);
  b.seg(w / 2, 0.03, d / 2, w / 2, h, d / 2, EDGE_GLOW);
  // Overhead stabilizer bar
  b.box(-w / 2, w / 2, h - 0.04, h - 0.025, d / 2 - 0.015, d / 2, C.metal);

  // Concealed thermostatic valve panel with knurled controls
  b.box(-w / 2, -w / 2 + 0.02, 1.0, 1.25, -0.1, 0.1, C.metal, C.metal, EDGE_FAINT);
  b.cyl(-w / 2 + 0.025, -0.04, 0.022, 1.04, 1.08, C.metal, C.metal, 10);
  b.cyl(-w / 2 + 0.025, 0.04, 0.022, 1.15, 1.19, C.metal, C.metal, 10);

  // Large ceiling-flush rainfall shower head
  b.box(-0.16, 0.16, h - 0.02, h, -0.16, 0.16, C.metal, C.metal, EDGE_GLOW);

  // Wall-mounted hand shower wand and vertical slide rail
  b.cyl(-w / 2 + 0.03, 0.2, 0.01, 0.75, 1.6, C.metal, C.metal, 6);
  b.box(-w / 2 + 0.03, -w / 2 + 0.055, 1.25, 1.45, 0.19, 0.22, C.metal);
}

function wc(b: Builder, w: number, d: number, h: number): void {
  // Contemporary wall-hung toilet (Duravit ME by Starck / Geberit AquaClean)
  const tankD = Math.min(0.18, d * 0.3);

  // In-wall installation chase with architectural dual-flush actuator plate
  b.box(-w / 2, w / 2, 0.45, h, -d / 2, -d / 2 + tankD, C.body, C.bodyTop, EDGE_FURN);
  // Dual-flush plate in brushed metal
  b.box(-0.11, 0.11, h - 0.22, h - 0.1, -d / 2 + tankD, -d / 2 + tankD + 0.008, C.metal, C.metal, EDGE_GLOW);
  b.box(-0.08, -0.01, h - 0.19, h - 0.13, -d / 2 + tankD + 0.008, -d / 2 + tankD + 0.012, C.whiteTop);
  b.box(0.01, 0.08, h - 0.19, h - 0.13, -d / 2 + tankD + 0.008, -d / 2 + tankD + 0.012, C.whiteTop);

  // Floating wall-hung ceramic bowl (suspended above floor)
  b.loft([-w * 0.32, w * 0.32, -d / 2 + tankD, d / 2 - 0.18], [-w * 0.38, w * 0.38, -d / 2 + tankD, d / 2 - 0.12], 0.12, 0.38, C.white, C.whiteTop, EDGE_FAINT);
  b.cyl(0, d / 2 - 0.24, Math.min(w / 2 - 0.02, 0.19), 0.14, 0.41, C.white, C.whiteTop, 16, EDGE_FURN);

  // Ultra-slim soft-close ergonomic seat and lid with metallic hinge caps
  b.box(-w * 0.36, w * 0.36, 0.41, 0.43, -d / 2 + tankD + 0.02, d / 2 - 0.06, C.whiteTop, C.whiteTop, EDGE_FAINT);
  b.cyl(-0.07, -d / 2 + tankD + 0.03, 0.012, 0.41, 0.435, C.metal, C.metal, 8);
  b.cyl(0.07, -d / 2 + tankD + 0.03, 0.012, 0.41, 0.435, C.metal, C.metal, 8);
}

function washbasin(b: Builder, w: number, d: number, h: number): void {
  // Floating Italian vanity console with deep pull-out drawer in fluted wood
  cabinet(b, w, d - 0.02, h - 0.12, w > 0.8 ? 2 : 1, h - 0.3);

  // Thick solid-surface countertop with seamlessly integrated basin
  b.box(-w / 2, w / 2, h - 0.12, h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  // Recessed basin cavity with water reflection
  b.pad(-w / 2 + 0.1, w / 2 - 0.1, h - 0.08, h - 0.02, -d / 2 + 0.12, d / 2 - 0.08, C.glass, C.glass, 0.03, EDGE_GLOW);

  // Wall-mounted architectural minimalist faucet
  const fz = -d / 2 + 0.05;
  b.cyl(0, fz, 0.014, h, h + 0.18, C.metal, C.metal, 8);
  b.box(-0.01, 0.01, h + 0.15, h + 0.18, fz, fz + 0.14, C.metal, C.metal, EDGE_FAINT);
  b.cyl(0.1, fz, 0.018, h, h + 0.06, C.metal, C.metal, 8);

  // Large backlit LED mirror with ambient glow frame
  b.box(-w / 2 + 0.03, w / 2 - 0.03, h + 0.28, h + 1.05, -d / 2, -d / 2 + 0.025, C.glass, C.glass, EDGE_GLOW);
  b.box(-w / 2 + 0.01, w / 2 - 0.01, h + 0.26, h + 1.07, -d / 2 - 0.005, -d / 2, C.dark, C.dark, EDGE_FAINT);
}

function tvBoard(b: Builder, w: number, d: number, h: number): void {
  // Low-slung Italian media credenza with acoustic vertical slatting
  cabinet(b, w, d, h, Math.max(2, Math.round(w / 0.6)), h * 0.55, true);

  // Inset marble / stone top tray
  b.box(-w / 2 + 0.02, w / 2 - 0.02, h, h + 0.015, -d / 2 + 0.02, d / 2 - 0.02, C.whiteTop, C.whiteTop, EDGE_FAINT);

  // OLED screen on minimalist metal swivel pedestal
  const tw = Math.min(w * 0.8, 1.45);
  const th = tw * 0.56;
  b.box(-0.14, 0.14, h + 0.015, h + 0.03, -d / 2 + 0.1, -d / 2 + 0.22, C.metal, C.metal, EDGE_FAINT);
  b.box(-0.025, 0.025, h + 0.03, h + 0.12, -d / 2 + 0.14, -d / 2 + 0.18, C.metal);
  // Ultra-thin OLED display panel
  b.box(-tw / 2, tw / 2, h + 0.1, h + 0.1 + th, -d / 2 + 0.13, -d / 2 + 0.155, C.dark, C.dark, EDGE_GLOW);

  // Integrated slim soundbar below screen
  b.box(-tw * 0.4, tw * 0.4, h + 0.04, h + 0.085, -d / 2 + 0.12, -d / 2 + 0.17, C.dark, C.dark, EDGE_FAINT);
}

function plant(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  const potH = Math.min(0.42, h * 0.35);

  // Architectural brushed brass / metal saucer base
  b.cyl(0, 0, r * 0.66, 0, 0.025, C.metal, C.metal, 14);

  // Fluted ceramic / stone tapered planter
  b.loft([-r * 0.5, r * 0.5, -r * 0.5, r * 0.5], [-r * 0.62, r * 0.62, -r * 0.62, r * 0.62], 0.025, potH, C.pot, C.pot, EDGE_FURN);
  // Dark potting soil
  b.cyl(0, 0, r * 0.58, potH - 0.02, potH, C.dark, C.dark, 12);

  // Natural branching trunk
  b.cyl(0, 0, r * 0.08, potH, h * 0.6, C.wood, C.wood, 8);
  b.loft([0, r * 0.06, 0, r * 0.06], [-r * 0.2, -r * 0.15, r * 0.15, r * 0.2], potH + (h - potH) * 0.3, potH + (h - potH) * 0.65, C.wood, C.wood);

  // Multi-layered lush Fiddle-leaf fig foliage canopy
  const layers = 5;
  for (let i = 0; i < layers; i++) {
    const t = i / (layers - 1);
    const lr = r * (0.96 - 0.52 * t);
    const y0 = potH + (h - potH) * (0.16 + 0.17 * i);
    const ox = Math.sin(i * 2.3) * 0.04;
    const oz = Math.cos(i * 1.9) * 0.04;
    b.cyl(ox, oz, lr, y0, y0 + (h - potH) * 0.15, C.plant, C.plantTop, 10, i === layers - 1 ? EDGE_FAINT : null);
  }
}

function rug(b: Builder, w: number, d: number): void {
  // Luxury hand-tufted wool / silk area rug with border band and tailored whipstitch perimeter
  b.box(-w / 2, w / 2, 0, 0.014, -d / 2, d / 2, C.fabric, C.fabricTop);

  // Border band frame
  const border = Math.min(0.14, Math.min(w, d) * 0.1);
  for (const [xa, za, xb, zb] of [
    [-w / 2 + border, -d / 2 + border, w / 2 - border, -d / 2 + border],
    [w / 2 - border, -d / 2 + border, w / 2 - border, d / 2 - border],
    [w / 2 - border, d / 2 - border, -w / 2 + border, d / 2 - border],
    [-w / 2 + border, d / 2 - border, -w / 2 + border, -d / 2 + border],
  ]) {
    b.seg(xa, 0.016, za, xb, 0.016, zb, EDGE_FURN);
  }

  // Inner field subtle contrast pattern
  const inner = border * 1.8;
  if (w - 2 * inner > 0.4 && d - 2 * inner > 0.4) {
    b.box(-w / 2 + inner, w / 2 - inner, 0.014, 0.016, -d / 2 + inner, d / 2 - inner, C.cushion, C.fabricTop, EDGE_FAINT);
  }
}

/** Straight stair rising towards -z (the back), with open risers and architectural glass balustrade. */
function stairs(b: Builder, w: number, d: number, h: number): void {
  const n = Math.max(3, Math.round(h / 0.18));
  const rise = h / n;
  const run = d / n;
  const treadThick = 0.045;

  for (let i = 0; i < n; i++) {
    const z1 = d / 2 - run * i;
    const z0 = z1 - run;
    const y1 = rise * (i + 1);

    // Floating solid oak tread with shadow reveal
    b.box(-w / 2, w / 2, y1 - treadThick, y1, z0, z1 + 0.02, C.wood, C.woodTop, EDGE_FURN);

    // Under-tread LED wash light line
    b.seg(-w / 2 + 0.04, y1 - treadThick, z1 + 0.015, w / 2 - 0.04, y1 - treadThick, z1 + 0.015, EDGE_GLOW);

    // Open riser spacer bracket in dark metal
    b.box(-w / 2 + 0.1, w / 2 - 0.1, y1 - rise, y1 - treadThick, z0 + run * 0.4, z0 + run * 0.6, C.metal);
  }

  // Frameless glass balustrade with brushed shoe base on +x side
  const railH = 0.92;
  const xr = w / 2 - 0.03;
  const last = Math.max(1, n - 4);
  const zStart = d / 2 - run / 2;
  const zEnd = d / 2 - run * (last - 0.5);
  const yStart = rise + railH;
  const yEnd = rise * last + railH;

  // Handrail
  b.seg(xr, yStart, zStart, xr, yEnd, zEnd, EDGE_GLOW);

  // Glass balustrade panel perimeter
  b.seg(xr, rise, zStart, xr, yStart, zStart, EDGE_FAINT);
  b.seg(xr, rise * last, zEnd, xr, yEnd, zEnd, EDGE_FAINT);
  b.seg(xr, rise, zStart, xr, rise * last, zEnd, EDGE_FAINT);

  // Balustrade support stanchions
  for (let i = 0; i < last; i += 3) {
    const z = d / 2 - run * (i + 0.5);
    const y = rise * (i + 1);
    b.seg(xr, y, z, xr, y + railH, z, EDGE_FAINT);
  }
}

/**
 * U-stair: contemporary architectural switchback staircase with solid cantilevered landing,
 * open risers on second flight, glass balustrade, and under-tread LED wash lines.
 */
function stairsU(b: Builder, w: number, d: number, h: number): void {
  const { k, steps1, steps2, fw, landing, run, rise } = stairsULayout(w, d, h);
  const xa0 = -w / 2;
  const xa1 = -w / 2 + fw;
  const xb0 = w / 2 - fw;
  const xb1 = w / 2;
  const zl = -d / 2 + landing;
  const treadThick = 0.045;

  // Flight 1: rising towards back
  for (let i = 0; i < steps1; i++) {
    const z1 = d / 2 - run * i;
    const z0 = z1 - run;
    const y1 = rise * (i + 1);
    b.box(xa0, xa1, y1 - treadThick, y1, z0, z1 + 0.02, C.wood, C.woodTop, EDGE_FURN);
    b.seg(xa0 + 0.02, y1 - treadThick, z1 + 0.015, xa1 - 0.02, y1 - treadThick, z1 + 0.015, EDGE_GLOW);
    b.box(xa0 + 0.06, xa1 - 0.06, y1 - rise, y1 - treadThick, z0 + run * 0.4, z0 + run * 0.6, C.metal);
  }

  // Cantilevered landing platform across both flights
  const yl = rise * k;
  const slab = 0.22;
  b.box(xa0, xa1, 0, yl, -d / 2, zl, C.wood, C.woodTop, EDGE_FURN);
  b.box(xa1, xb1, Math.max(0, yl - slab), yl, -d / 2, zl, C.wood, C.woodTop, EDGE_FURN);
  b.seg(xa0, yl, zl, xa1, yl, zl, EDGE_GLOW);

  // Flight 2: rising from landing towards front as floating open treads
  for (let j = 0; j < steps2; j++) {
    const z0 = zl + run * j;
    const y1 = rise * (k + 1 + j);
    b.box(xb0, xb1, y1 - treadThick, y1, z0, z0 + run + 0.02, C.wood, C.woodTop, EDGE_FURN);
    b.seg(xb0 + 0.02, y1 - treadThick, z0 + run + 0.015, xb1 - 0.02, y1 - treadThick, z0 + run + 0.015, EDGE_GLOW);
    b.box(xb0 + 0.06, xb1 - 0.06, Math.max(0, y1 - rise - slab), y1 - treadThick, z0 + run * 0.4, z0 + run * 0.6, C.metal);
  }

  // Outer stringers
  b.seg(xa0, rise, d / 2, xa0, yl, zl, EDGE_FAINT);
  b.seg(xb1, yl, zl, xb1, h, zl + run * (steps2 - 1), EDGE_FAINT);

  // Continuous architectural glass balustrade wrapping around the stair eye
  const rail = 0.92;
  const ra = xa1 - 0.03;
  const rb = xb0 + 0.03;
  const zr = zl - 0.03;
  const last = Math.max(1, steps2 - 4);

  b.seg(ra, rise + rail, d / 2 - run / 2, ra, yl + rail, zr, EDGE_GLOW);
  b.seg(ra, yl + rail, zr, rb, yl + rail, zr, EDGE_GLOW);
  b.seg(rb, yl + rail, zr, rb, rise * (k + last) + rail, zl + run * (last - 0.5), EDGE_GLOW);

  for (let i = 0; i < steps1; i += 3) {
    const z = d / 2 - run * (i + 0.5);
    b.seg(ra, rise * (i + 1), z, ra, rise * (i + 1) + rail, z, EDGE_FAINT);
  }
  for (const x of [ra, rb]) b.seg(x, yl, zr, x, yl + rail, zr, EDGE_FAINT);
  for (let j = 2; j < last; j += 3) {
    const z = zl + run * (j + 0.5);
    b.seg(rb, rise * (k + 1 + j), z, rb, rise * (k + 1 + j) + rail, z, EDGE_FAINT);
  }
}

function sideboard(b: Builder, w: number, d: number, h: number): void {
  // Italian architectural credenza with fluted doors and inset stone top slab
  // Slender architectural metal bridge base with brass ferrule caps
  legs(b, w, d, 0.14, 0.032, 0.04, C.metal, true);
  b.box(-w / 2 + 0.04, w / 2 - 0.04, 0.06, 0.075, -d / 2 + 0.04, d / 2 - 0.06, C.metal);

  // Main carcass with shadow reveal
  b.box(-w / 2, w / 2, 0.14, h - 0.02, -d / 2, d / 2 - 0.02, C.wood, C.woodTop, EDGE_FURN);

  // Inset honed marble or dark glass top slab
  b.box(-w / 2 + 0.005, w / 2 - 0.005, h - 0.02, h, -d / 2 + 0.005, d / 2 - 0.02, C.whiteTop, C.whiteTop, EDGE_FAINT);

  // Fluted door panels with precision horizontal gola reveal and vertical slats
  const doors = Math.max(2, Math.round(w / 0.45));
  fronts(b, -w / 2, w / 2, 0.14, h - 0.04, d / 2 - 0.02, doors, h - 0.08, true);
}

function dresser(b: Builder, w: number, d: number, h: number): void {
  // Low luxury commode with inset marble top slab and wide soft-close drawers
  // Recessed dark shadow plinth
  b.box(-w / 2 + 0.03, w / 2 - 0.03, 0, 0.06, -d / 2 + 0.03, d / 2 - 0.05, C.dark, C.dark);

  // Main carcass
  b.box(-w / 2, w / 2, 0.06, h - 0.02, -d / 2, d / 2 - 0.02, C.wood, C.woodTop, EDGE_FURN);
  // Inset marble top slab
  b.box(-w / 2 + 0.005, w / 2 - 0.005, h - 0.02, h, -d / 2 + 0.005, d / 2 - 0.02, C.whiteTop, C.whiteTop, EDGE_FAINT);

  // Multi-tier drawers with continuous horizontal reveals and brushed metallic edge-pulls
  const n = Math.max(3, Math.round((h - 0.08) / 0.22));
  const z = d / 2 - 0.02;
  const dh = (h - 0.08) / n;
  for (let i = 1; i < n; i++) {
    const y = 0.06 + dh * i;
    b.seg(-w / 2, y, z + 0.002, w / 2, y, z + 0.002, EDGE_FAINT);
  }
  for (let i = 0; i < n; i++) {
    const y = 0.06 + dh * (i + 0.5);
    const hw = Math.min(0.14, w * 0.2);
    b.box(-hw, hw, y - 0.008, y + 0.008, z, z + 0.015, C.metal, C.metal, EDGE_GLOW);
  }
}

function coatRack(b: Builder, w: number, d: number, h: number): void {
  // Luxury entryway console: floating bench, upholstered seat pad, fluted slat back panel, brass hooks & hat shelf
  // Base shoe storage bench with recessed dark plinth
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.05, -d / 2 + 0.02, d / 2 - 0.02, C.dark);
  b.box(-w / 2, w / 2, 0.05, 0.44, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  // Upholstered leather/bouclé seat cushion pad
  b.pad(-w / 2 + 0.02, w / 2 - 0.02, 0.44, 0.49, -d / 2 + 0.04, d / 2 - 0.02, C.cushion, C.fabricTop, 0.02, EDGE_FAINT);

  // Acoustic fluted wood slat back panel
  b.box(-w / 2, w / 2, 0.49, h, -d / 2, -d / 2 + 0.035, C.body, C.bodyTop, EDGE_FURN);
  const slats = Math.max(6, Math.round(w / 0.1));
  for (let i = 1; i < slats; i++) {
    const x = -w / 2 + (w / slats) * i;
    b.seg(x, 0.49, -d / 2 + 0.037, x, h - 0.05, -d / 2 + 0.037, EDGE_FAINT);
  }

  // Overhead floating hat shelf with integrated LED wash light
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
  b.seg(-w / 2 + 0.02, h - 0.042, -d / 2 + 0.05, w / 2 - 0.02, h - 0.042, -d / 2 + 0.05, EDGE_GLOW);

  // Precision machined brass/black wall coat peg hooks
  const hooks = Math.max(2, Math.round(w / 0.25));
  for (let i = 0; i < hooks; i++) {
    const x = -w / 2 + (w / hooks) * (i + 0.5);
    const hy = h - 0.35 + (i % 2 ? 0.06 : 0);
    b.cyl(x, -d / 2 + 0.05, 0.012, hy, hy + 0.03, C.metal, C.metal, 8);
    b.box(x - 0.012, x + 0.012, hy + 0.025, hy + 0.04, -d / 2 + 0.035, -d / 2 + 0.1, C.metal, C.metal, EDGE_FAINT);
  }
}

/** Upholstered luxury banquette bench with channel-tufted backrest and French piping seams. */
function bench(b: Builder, w: number, d: number, h: number, corner: boolean): void {
  const seat = 0.46;
  const depth = Math.min(0.52, corner ? d * 0.42 : d);
  const back = 0.09;

  // Recessed dark wood / brass kick plinth
  b.box(-w / 2 + 0.03, w / 2 - 0.03, 0, 0.06, -d / 2 + 0.03, -d / 2 + depth - 0.03, C.dark, C.dark);

  // Upholstered seat structure & plush seat pad
  b.box(-w / 2, w / 2, 0.06, seat - 0.06, -d / 2, -d / 2 + depth, C.fabric, C.fabricTop, EDGE_FURN);
  b.pad(-w / 2 + (corner ? depth : 0.02), w / 2 - 0.02, seat - 0.06, seat + 0.03, -d / 2 + back, -d / 2 + depth, C.cushion, C.cushion, 0.025, EDGE_FAINT);

  // Ergonomic channel-tufted backrest
  b.loft([-w / 2, w / 2, -d / 2, -d / 2 + back], [-w / 2 + 0.01, w / 2 - 0.01, -d / 2, -d / 2 + back * 0.65], seat - 0.06, h, C.fabric, C.fabricTop, EDGE_FURN);
  const tufts = Math.max(3, Math.round(w / 0.22));
  for (let i = 1; i < tufts; i++) {
    const x = -w / 2 + (w / tufts) * i;
    b.seg(x, seat, -d / 2 + back * 0.7, x, h - 0.02, -d / 2 + back * 0.5, EDGE_FAINT);
  }

  if (corner) {
    // Side arm along -x meeting the rear section
    b.box(-w / 2 + 0.03, -w / 2 + depth - 0.03, 0, 0.06, -d / 2 + depth - 0.03, d / 2 - 0.03, C.dark, C.dark);
    b.box(-w / 2, -w / 2 + depth, 0.06, seat - 0.06, -d / 2 + depth, d / 2, C.fabric, C.fabricTop, EDGE_FURN);
    b.pad(-w / 2 + back, -w / 2 + depth, seat - 0.06, seat + 0.03, -d / 2 + back, d / 2 - 0.02, C.cushion, C.cushion, 0.025, EDGE_FAINT);
    b.loft([-w / 2, -w / 2 + back, -d / 2 + back, d / 2], [-w / 2, -w / 2 + back * 0.65, -d / 2 + back, d / 2 - 0.01], seat - 0.06, h, C.fabric, C.fabricTop, EDGE_FURN);
  }
}

function barStool(b: Builder, w: number, d: number, h: number): void {
  // Luxury counter stool with low bucket backrest, padded seat, and brushed metal footrest
  const r = Math.min(w, d) / 2;

  // Weighted brushed bronze / steel disc base
  b.cyl(0, 0, r * 0.82, 0, 0.025, C.metal, C.metal, 14, EDGE_FAINT);

  // Slender central fluted column
  b.cyl(0, 0, 0.028, 0.025, h - 0.1, C.metal, C.metal, 8);

  // Integrated circular footrest ring with radial support arms
  const footH = h * 0.36;
  b.cyl(0, 0, r * 0.76, footH, footH + 0.018, C.metal, C.metal, 14, EDGE_GLOW);
  b.box(-r * 0.74, r * 0.74, footH + 0.002, footH + 0.016, -0.01, 0.01, C.metal);

  // Swivel mechanism hub
  b.cyl(0, 0, 0.06, h - 0.1, h - 0.06, C.dark, C.dark, 10);

  // Deep comfort padded waterfall seat cushion
  b.pad(-r * 0.82, r * 0.82, h - 0.06, h, -r * 0.82, r * 0.82, C.cushion, C.fabricTop, 0.03, EDGE_FURN);

  // Low curved wraparound lumbar backrest
  b.loft([-r * 0.85, r * 0.85, -r * 0.85, -r * 0.55], [-r * 0.8, r * 0.8, -r * 0.8, -r * 0.62], h, h + 0.18, C.fabric, C.fabricTop, EDGE_FURN);
}

function officeChair(b: Builder, w: number, d: number, h: number): void {
  // High-end ergonomic executive chair (Herman Miller Aeron / Vitra Soft Pad)
  const r = Math.min(w, d) / 2;

  // Sculpted 5-star swivel base with dual-wheel casters
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const ax = Math.cos(a) * (r * 0.95);
    const az = Math.sin(a) * (r * 0.95);
    b.loft([-0.02, 0.02, -0.02, 0.02], [ax - 0.015, ax + 0.015, az - 0.015, az + 0.015], 0.04, 0.08, C.metal, C.metal);
    // Dual casters
    b.cyl(ax, az, 0.024, 0, 0.045, C.dark, C.dark, 8);
  }
  b.cyl(0, 0, 0.06, 0.03, 0.11, C.dark, C.dark, 10);

  // Pneumatic lift cylinder and synchro-tilt mechanism box
  b.cyl(0, 0, 0.026, 0.11, 0.42, C.metal, C.metal, 8);
  b.box(-0.09, 0.09, 0.42, 0.47, -0.09, 0.09, C.dark, C.dark);

  // Ergonomic contoured seat cushion with waterfall front edge
  b.pad(-r * 0.8, r * 0.8, 0.46, 0.54, -r * 0.72, r * 0.78, C.fabric, C.cushion, 0.03, EDGE_FURN);

  // High breathable lumbar-supported backrest with die-cast aluminum spine
  b.box(-0.03, 0.03, 0.48, h - 0.05, -r * 0.76, -r * 0.68, C.metal, C.metal);
  b.pad(-r * 0.72, r * 0.72, 0.58, h, -r * 0.8, -r * 0.65, C.fabric, C.fabricTop, 0.025, EDGE_FURN);

  // 3D adjustable cantilevered armrests
  for (const sx of [-1, 1]) {
    const ax = sx * (r * 0.82);
    // Armrest metal upright
    b.box(ax - 0.015, ax + 0.015, 0.48, 0.66, -0.08, 0.04, C.metal);
    // Padded soft-touch arm pad
    b.pad(ax - 0.035, ax + 0.035, 0.66, 0.69, -0.16, 0.1, C.dark, C.dark, 0.012);
  }
}

function stool(b: Builder, w: number, d: number, h: number): void {
  // Bouclé / leather luxury ottoman pouf with recessed brushed brass plinth ring
  const r = Math.min(w, d) / 2;

  // Recessed brushed bronze / brass plinth ring
  b.cyl(0, 0, r * 0.88, 0, 0.04, C.metal, C.metal, 16, EDGE_GLOW);

  // Sculpted cylindrical / soft-corner bouclé cushion body
  b.cyl(0, 0, r, 0.04, h - 0.03, C.cushion, C.fabricTop, 16, EDGE_FURN);
  // Crowned lofted top pad with French piping rim
  b.cyl(0, 0, r * 0.94, h - 0.03, h, C.fabricTop, C.cushion, 16, EDGE_FAINT);
}

function kitchenWall(b: Builder, w: number, d: number, h: number): void {
  // Minimalist floating upper cabinetry with integrated under-cabinet LED task light strip
  const y0 = 1.45;
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);

  // Precision vertical door splits with bottom overhang finger-grip opening
  const doors = Math.max(1, Math.round(w / 0.5));
  fronts(b, -w / 2, w / 2, y0, y0 + h, d / 2 - 0.02, doors, null, true);

  // Continuous under-cabinet LED task light diffuser channel recessed into the underside
  b.box(-w / 2 + 0.04, w / 2 - 0.04, y0, y0 + 0.012, -d / 2 + 0.05, d / 2 - 0.08, C.glass, C.glass, EDGE_GLOW);
}

function kitchenTall(b: Builder, w: number, d: number, h: number): void {
  // Monolithic floor-to-ceiling built-in architectural appliance tower (Miele ArtLine / Gaggenau)
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.08, -d / 2 + 0.02, d / 2 - 0.06, C.dark);
  b.box(-w / 2, w / 2, 0.08, h, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);

  const z = d / 2 - 0.02;

  // Integrated flush combination steam oven with dark glass door and metallic accents
  b.box(-w / 2 + 0.025, w / 2 - 0.025, 0.88, 1.48, z, z + 0.015, C.dark, C.dark, EDGE_GLOW);
  // Oven glass viewing window
  b.box(-w / 2 + 0.06, w / 2 - 0.06, 0.96, 1.38, z + 0.015, z + 0.018, C.glass, C.dark);
  // Slim metallic horizontal touch interface bar
  b.box(-w / 2 + 0.06, w / 2 - 0.06, 1.42, 1.46, z + 0.015, z + 0.018, C.metal, C.metal, EDGE_FAINT);
  // Glowing minimal oven handle bar
  b.box(-w / 2 + 0.1, w / 2 - 0.1, 1.39, 1.41, z + 0.018, z + 0.032, C.metal, C.metal, EDGE_GLOW);

  // Warming drawer below oven
  b.box(-w / 2 + 0.025, w / 2 - 0.025, 0.72, 0.86, z, z + 0.012, C.metal, C.metal, EDGE_FAINT);
  b.seg(-w / 2 + 0.05, 0.79, z + 0.013, w / 2 - 0.05, 0.79, z + 0.013, EDGE_GLOW);

  // Upper & lower tall pantry doors with vertical gola finger channel
  for (const y of [0.72, 0.88, 1.48]) b.seg(-w / 2, y, z, w / 2, y, z, EDGE_FAINT);
  b.box(w / 2 - 0.035, w / 2 - 0.015, 0.12, 0.7, z, z + 0.012, C.metal, C.metal);
  b.box(w / 2 - 0.035, w / 2 - 0.015, 1.52, h - 0.1, z, z + 0.012, C.metal, C.metal);
}

function island(b: Builder, w: number, d: number, h: number): void {
  // Monolithic architectural kitchen island with waterfall stone countertop ends
  const inner = d - 0.32;
  const topThick = 0.045;

  // Recessed dark kick plinth
  b.box(-w / 2 + topThick + 0.03, w / 2 - topThick - 0.03, 0, 0.08, -d / 2 + 0.03, -d / 2 + inner - 0.04, C.dark);

  // Cabinet modules on chef side with horizontal gola profile
  b.box(-w / 2 + topThick, w / 2 - topThick, 0.08, h - topThick, -d / 2 + 0.02, -d / 2 + inner, C.body, C.bodyTop, EDGE_FURN);
  // Recessed gola channel under countertop
  b.box(-w / 2 + topThick, w / 2 - topThick, h - topThick - 0.03, h - topThick, -d / 2 + inner - 0.02, -d / 2 + inner, C.dark);
  fronts(b, -w / 2 + topThick, w / 2 - topThick, 0.08, h - topThick - 0.03, -d / 2 + inner, Math.max(2, Math.round(w / 0.6)), null, true);

  // Waterfall stone countertop cascading down left and right ends
  b.box(-w / 2, w / 2, h - topThick, h, -d / 2, d / 2, worktop(), worktop(), EDGE_FURN);
  b.box(-w / 2, -w / 2 + topThick, 0, h - topThick, -d / 2, d / 2, worktop(), worktop(), EDGE_FURN);
  b.box(w / 2 - topThick, w / 2, 0, h - topThick, -d / 2, d / 2, worktop(), worktop(), EDGE_FURN);

  // Recessed warm LED wash light under cantilevered breakfast bar overhang
  b.seg(-w / 2 + topThick + 0.02, h - topThick - 0.002, -d / 2 + inner + 0.02, w / 2 - topThick - 0.02, h - topThick - 0.002, -d / 2 + inner + 0.02, EDGE_GLOW);
}

function dishwasher(b: Builder, w: number, d: number, h: number): void {
  // Fully integrated luxury dishwasher matching cabinetry with projected floor status dot
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.08, -d / 2 + 0.02, d / 2 - 0.06, C.dark);
  b.box(-w / 2, w / 2, 0.08, h - 0.04, -d / 2, d / 2 - 0.02, C.body, C.bodyTop, EDGE_FURN);

  // Recessed gola rail and concealed top-edge controls
  b.box(-w / 2, w / 2, h - 0.07, h - 0.04, d / 2 - 0.04, d / 2 - 0.02, C.dark);
  b.seg(-w / 2 + 0.08, h - 0.05, d / 2 - 0.015, w / 2 - 0.08, h - 0.05, d / 2 - 0.015, EDGE_GLOW);

  // Matching worktop slab on top
  b.box(-w / 2, w / 2, h - 0.04, h, -d / 2, d / 2, worktop(), worktop(), EDGE_FURN);

  // Projected floor status indicator dot (TimeLight)
  b.cyl(0, d / 2 + 0.04, 0.012, 0, 0.002, C.accent, C.accent, 8);
}

function laundry(b: Builder, w: number, d: number, h: number, dryer: boolean): void {
  // Premium European appliances (Miele Passion / V-ZUG)
  // Base plinth
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.04, -d / 2 + 0.02, d / 2 - 0.03, C.dark);
  b.box(-w / 2, w / 2, 0.04, h, -d / 2, d / 2 - 0.02, C.white, C.whiteTop, EDGE_FURN);

  const z = d / 2 - 0.012;

  // Incline black glass fascia control panel with crisp digital TFT touch display and rotary dial
  b.box(-w / 2 + 0.02, w / 2 - 0.02, h - 0.16, h - 0.02, z, z + 0.014, C.dark, C.dark, EDGE_FAINT);
  // TFT digital touch display
  b.box(-0.12, 0.12, h - 0.13, h - 0.05, z + 0.014, z + 0.016, C.dark, C.dark, EDGE_GLOW);
  // Rotary programme selector dial
  b.cyl(w / 2 - 0.1, z + 0.015, 0.028, h - 0.11, h - 0.07, C.metal, C.metal, 12, EDGE_FAINT);

  // Detergent dispenser drawer on washer
  if (!dryer) {
    b.box(-w / 2 + 0.04, -w * 0.18, h - 0.14, h - 0.04, z + 0.014, z + 0.016, C.whiteTop);
  }

  // Black glass porthole door with polished chrome outer bezel ring
  const cy = (h - 0.18) / 2 + 0.04;
  const r = Math.min(w * 0.36, (h - 0.22) * 0.44);
  const n = 24;
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2;
    const a1 = ((i + 1) / n) * Math.PI * 2;
    // Outer chrome bezel
    b.seg(Math.cos(a0) * r, cy + Math.sin(a0) * r, z + 0.01, Math.cos(a1) * r, cy + Math.sin(a1) * r, z + 0.01, EDGE_GLOW);
    // Inner glass rim
    b.seg(Math.cos(a0) * r * 0.82, cy + Math.sin(a0) * r * 0.82, z + 0.008, Math.cos(a1) * r * 0.82, cy + Math.sin(a1) * r * 0.82, z + 0.008, EDGE_FAINT);
  }
  b.cyl(0, z + 0.005, r * 0.78, cy - r * 0.78, cy + r * 0.78, C.dark, C.dark, 16);
}

function bunkBed(b: Builder, w: number, d: number, h: number): void {
  // Custom architectural bunk system with privacy panels, modern guardrails, and angled ladder
  const t = 0.055;
  // Solid corner upright posts
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      b.box(sx * (w / 2) - (sx > 0 ? t : 0), sx * (w / 2) + (sx < 0 ? t : 0), 0, h, sz * (d / 2) - (sz > 0 ? t : 0), sz * (d / 2) + (sz < 0 ? t : 0), C.wood, C.woodTop, EDGE_FURN);
    }
  }

  // Lower and upper bunk frames with plush bedding
  for (const y of [0.24, h - 0.58]) {
    // Bedstead rails
    b.box(-w / 2, w / 2, y, y + 0.09, -d / 2, d / 2, C.wood, C.woodTop, EDGE_FURN);
    // Deep comfortable mattress
    b.pad(-w / 2 + 0.04, w / 2 - 0.04, y + 0.09, y + 0.25, -d / 2 + 0.04, d / 2 - 0.04, C.white, C.whiteTop, 0.03, EDGE_FAINT);
    // Folded duvet and pillow
    b.pad(-w / 2 + 0.05, w / 2 - 0.05, y + 0.24, y + 0.32, -d / 2 + 0.12, d / 2 - 0.06, C.cushion, C.fabricTop, 0.025);
    b.pad(-w / 2 + 0.08, w / 2 - 0.08, y + 0.25, y + 0.35, -d / 2 + 0.06, -d / 2 + 0.36, C.whiteTop, C.whiteTop, 0.02);
  }

  // Modern slotted safety guardrail on top bunk
  b.box(-w / 2, w / 2, h - 0.18, h - 0.14, d / 2 - t, d / 2, C.wood, C.woodTop, EDGE_FAINT);
  b.box(-w / 2, w / 2, h - 0.32, h - 0.28, d / 2 - t, d / 2, C.wood, C.woodTop, EDGE_FAINT);

  // Precision architectural angled ladder with flat rungs
  const lx = w / 2 - 0.38;
  for (const x of [lx - 0.18, lx + 0.18]) {
    b.box(x - 0.015, x + 0.015, 0, h - 0.14, d / 2 + 0.02, d / 2 + 0.05, C.metal, C.metal, EDGE_FURN);
  }
  for (let y = 0.28; y < h - 0.2; y += 0.26) {
    b.box(lx - 0.17, lx + 0.17, y - 0.012, y + 0.012, d / 2 + 0.015, d / 2 + 0.055, C.wood, C.woodTop, EDGE_FAINT);
  }
}

function roundTable(b: Builder, w: number, d: number, h: number): void {
  // Sculptural pedestal dining table (Saarinen Tulip / B&B Italia Allure O')
  const r = Math.min(w, d) / 2;

  // Flared heavy pedestal base in brushed bronze / dark oak
  b.cyl(0, 0, r * 0.46, 0, 0.025, C.metal, C.metal, 20, EDGE_FAINT);
  b.loft([-r * 0.32, r * 0.32, -r * 0.32, r * 0.32], [-0.06, 0.06, -0.06, 0.06], 0.025, h * 0.35, C.wood, C.woodTop);

  // Slender central fluted column
  b.cyl(0, 0, 0.055, h * 0.35, h - 0.05, C.metal, C.metal, 12);

  // Tabletop under-mount hub
  b.cyl(0, 0, r * 0.32, h - 0.05, h - 0.038, C.metal, C.metal, 16);

  // Chamfered round stone / wood tabletop with undercut reveal
  b.cyl(0, 0, r, h - 0.038, h, C.wood, C.woodTop, 24, EDGE_GLOW);

  // Inset brass lazy susan / central decorative medallion
  b.cyl(0, 0, r * 0.26, h, h + 0.002, C.metal, C.metal, 16, EDGE_FAINT);
}

function coffeeTable(b: Builder, w: number, d: number, h: number): void {
  // Multi-tier architectural low table with honed stone slab, smoked glass lower shelf, and satin metal sled base
  // Minimalist satin metal sled runner frame
  const sledH = h - 0.04;
  for (const sx of [-1, 1]) {
    const lx = sx * (w / 2 - 0.08);
    b.box(lx - 0.012, lx + 0.012, 0, sledH, -d / 2 + 0.05, d / 2 - 0.05, C.metal, C.metal, EDGE_FURN);
    b.box(lx - 0.012, lx + 0.012, 0, 0.015, -d / 2 + 0.03, d / 2 - 0.03, C.metal);
  }
  b.box(-w / 2 + 0.08, w / 2 - 0.08, 0.08, 0.095, -0.01, 0.01, C.metal);

  // Smoked glass / dark walnut secondary tier lower shelf
  b.box(-w / 2 + 0.08, w / 2 - 0.08, 0.1, 0.125, -d / 2 + 0.06, d / 2 - 0.06, C.glass, C.glass, EDGE_FAINT);

  // Recessed dark shadow reveal frame
  b.box(-w / 2 + 0.04, w / 2 - 0.04, sledH, sledH + 0.012, -d / 2 + 0.04, d / 2 - 0.04, C.dark, C.dark);

  // Honed travertine / marble top slab with reverse-beveled chamfer
  b.loft([-w / 2 + 0.02, w / 2 - 0.02, -d / 2 + 0.02, d / 2 - 0.02], [-w / 2, w / 2, -d / 2, d / 2], sledH + 0.012, h, C.whiteTop, C.whiteTop, EDGE_GLOW);
}

function tvWall(b: Builder, w: number, d: number, h: number): void {
  // Gallery Art Frame OLED TV with chamfered anodized bezel & floating acoustic soundbar
  const y0 = 1.3 - h / 2;

  // Ultra-shallow recessed wall mounting bracket
  b.box(-0.16, 0.16, y0 + h * 0.35, y0 + h * 0.65, -d / 2, -d / 2 + 0.015, C.metal);

  // Chamfered architectural art bezel frame in brushed metal
  b.box(-w / 2 - 0.012, w / 2 + 0.012, y0 - 0.012, y0 + h + 0.012, -d / 2 + 0.015, -d / 2 + 0.03, C.metal, C.metal, EDGE_FAINT);

  // Ultra-thin OLED display screen panel
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2 + 0.025, d / 2, C.dark, C.dark, EDGE_GLOW);

  // Integrated floating architectural soundbar suspended below screen
  b.box(-w * 0.42, w * 0.42, y0 - 0.09, y0 - 0.03, -d / 2 + 0.015, -d / 2 + 0.065, C.dark, C.dark, EDGE_FAINT);
  b.seg(-w * 0.38, y0 - 0.06, -d / 2 + 0.066, w * 0.38, y0 - 0.06, -d / 2 + 0.066, EDGE_GLOW);
}

/** Neon sign: a floating frameless acrylic plate on polished metal standoffs with edge-lit luminescence. */
function neonSign(b: Builder, w: number, d: number, h: number): void {
  // Polished cylindrical wall standoffs at 4 corners
  for (const x of [-w / 2 + 0.05, w / 2 - 0.05]) {
    for (const y of [0.05, h - 0.05]) {
      b.cyl(x, -d / 2 + 0.012, 0.014, y - 0.014, y + 0.014, C.metal, C.metal, 8, EDGE_FAINT);
    }
  }

  // Floating frameless acrylic panel with glowing edge-lit perimeter
  b.box(-w / 2, w / 2, 0, h, -d / 2 + 0.025, d / 2, C.dark, C.dark, EDGE_GLOW);
}

/** Radiator on the wall: architectural flat-tube designer radiator with precision blades and knurled thermostatic valve. */
function radiator(b: Builder, w: number, d: number, h: number): void {
  const y0 = RADIATOR_Y;

  // Standoff wall brackets in dark metal
  for (const sx of [-1, 1]) {
    const bx = sx * (w / 2 - 0.1);
    b.box(bx - 0.015, bx + 0.015, y0 + 0.06, y0 + h - 0.06, -d / 2, -d / 2 + 0.02, C.metal);
  }

  // Top & bottom horizontal manifold headers
  b.box(-w / 2, w / 2, y0, y0 + 0.035, -d / 2 + 0.02, d / 2 - 0.01, C.white, C.whiteTop, EDGE_FAINT);
  b.box(-w / 2, w / 2, y0 + h - 0.035, y0 + h, -d / 2 + 0.02, d / 2 - 0.01, C.white, C.whiteTop, EDGE_FAINT);

  // Vertical architectural flat heating blades with precision shadow reveals
  const n = Math.max(3, Math.round(w / 0.08));
  const bw = (w / n) * 0.82;
  for (let i = 0; i < n; i++) {
    const cx = -w / 2 + (w / n) * (i + 0.5);
    b.pad(cx - bw / 2, cx + bw / 2, y0 + 0.035, y0 + h - 0.035, -d / 2 + 0.02, d / 2, C.white, C.whiteTop, 0.008, EDGE_FURN);
  }

  // Side integrated knurled thermostatic digital valve in brushed metal with status LED ring
  const vx = w / 2 + 0.035;
  b.box(w / 2, vx, y0 + 0.06, y0 + 0.1, -d / 2 + 0.03, -d / 2 + 0.05, C.metal);
  b.cyl(vx, -d / 2 + 0.04, 0.022, y0 + 0.05, y0 + 0.13, C.metal, C.metal, 14, EDGE_GLOW);
}

/** Air conditioner indoor unit: ultra-slim aerodynamic split unit with concealed louver and hidden OLED display. */
function acUnit(b: Builder, w: number, d: number, h: number): void {
  const y0 = AC_Y;

  // Recessed dark shadow reveal to the wall
  b.box(-w / 2 + 0.02, w / 2 - 0.02, y0 + 0.02, y0 + h - 0.02, -d / 2, -d / 2 + 0.015, C.dark, C.dark);

  // Aerodynamic curved / chamfered housing facade
  b.loft([-w / 2, w / 2, -d / 2 + 0.015, d / 2 - 0.04], [-w / 2, w / 2, -d / 2 + 0.015, d / 2], y0 + 0.08, y0 + h, C.white, C.whiteTop, EDGE_FURN);

  // Precision motorized bottom discharge louver with dark aerodynamic plenum
  b.box(-w / 2 + 0.04, w / 2 - 0.04, y0 + 0.015, y0 + 0.08, -d / 2 + 0.04, d / 2 - 0.02, C.dark, C.dark, EDGE_FAINT);
  b.box(-w / 2 + 0.03, w / 2 - 0.03, y0 + 0.03, y0 + 0.06, d / 2 - 0.04, d / 2 + 0.005, C.metal, C.whiteTop, EDGE_GLOW);

  // Top intake micro-ventilation louvers
  for (let i = 0; i < 4; i++) {
    const z = -d / 2 + 0.04 + i * 0.03;
    b.seg(-w / 2 + 0.06, y0 + h + 0.002, z, w / 2 - 0.06, y0 + h + 0.002, z, EDGE_FAINT);
  }

  // Hidden OLED ambient temperature display in brushed metallic badge
  b.box(w / 2 - 0.16, w / 2 - 0.06, y0 + h * 0.65, y0 + h * 0.82, d / 2 - 0.002, d / 2 + 0.003, C.dark, C.dark, EDGE_GLOW);
  b.seg(w / 2 - 0.14, y0 + h * 0.74, d / 2 + 0.004, w / 2 - 0.08, y0 + h * 0.74, d / 2 + 0.004, EDGE_FAINT);
}

/** A ring of glowing line on a front face (z = front), for dials and fans. */
function ring(b: Builder, cx: number, cy: number, r: number, z: number, n = 20): void {
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2;
    const a1 = ((i + 1) / n) * Math.PI * 2;
    b.seg(cx + Math.cos(a0) * r, cy + Math.sin(a0) * r, z, cx + Math.cos(a1) * r, cy + Math.sin(a1) * r, z, EDGE_GLOW);
  }
}

/** Solar inverter: sculpted die-cast aluminum enclosure with weather-proof front shield, cooling fins, and OLED display. */
function inverter(b: Builder, w: number, d: number, h: number, variant: string | null): void {
  const y0 = 1.1;
  const z = d / 2;

  if (variant === "slim") {
    b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2, C.dark, C.body, EDGE_FURN);
    b.seg(-w * 0.25, y0 + h * 0.15, z + 0.004, -w * 0.25, y0 + h * 0.85, z + 0.004, EDGE_GLOW);
    b.box(-w * 0.1, w * 0.3, y0 + h * 0.7, y0 + h * 0.85, z, z + 0.005, C.dark);
    return;
  }
  if (variant === "hybrid") {
    b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
    ring(b, 0, y0 + h * 0.66, Math.min(w, h) * 0.22, z + 0.004);
    b.seg(-w * 0.08, y0 + h * 0.66, z + 0.005, w * 0.08, y0 + h * 0.66, z + 0.005, EDGE_GLOW);
    for (const s of [-1, 1]) ring(b, s * w * 0.22, y0 + h * 0.2, Math.min(w, h) * 0.1, -d / 2 - 0.002, 12);
    return;
  }

  // Standard architectural residential inverter (Fronius / Tesla style)
  b.loft([-w / 2, w / 2, -d / 2, d / 2 - 0.02], [-w / 2 + 0.02, w / 2 - 0.02, -d / 2, d / 2], y0, y0 + h, C.white, C.whiteTop, EDGE_FURN);

  // Black glass interactive interface panel
  b.box(-w * 0.3, w * 0.3, y0 + h * 0.55, y0 + h * 0.84, d / 2 - 0.005, d / 2 + 0.006, C.dark, C.dark, EDGE_GLOW);
  b.seg(-w * 0.22, y0 + h * 0.68, d / 2 + 0.008, w * 0.22, y0 + h * 0.68, d / 2 + 0.008, EDGE_GLOW);

  // Lateral extruded heat sink fins
  for (const s of [-1, 1]) {
    for (let i = 1; i < 7; i++) {
      b.seg((s * w) / 2 + s * 0.002, y0 + (h * i) / 7, -d / 2 + 0.03, (s * w) / 2 + s * 0.002, y0 + (h * i) / 7, d / 2 - 0.03, EDGE_FAINT);
    }
  }

  // Integrated rotary DC disconnect isolator switch at bottom
  b.cyl(0, z, 0.035, y0 + 0.06, y0 + 0.14, C.dark, C.metal, 12, EDGE_FAINT);
}

/** Pool pump: variable-speed TEFC motor with cooling ribs, clear cam-lock strainer pot, and digital touchscreen drive. */
function poolPump(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(d, h) * 0.32;

  // Heavy vibration-isolated base plate
  b.box(-w / 2, w / 2, 0, 0.035, -d / 2, d / 2, C.dark, C.dark, EDGE_FAINT);

  // High-efficiency TEFC motor body with extruded cooling ribs
  b.box(-w / 2, w * 0.12, 0.045, 0.045 + r * 2, -r, r, C.metal, C.metal, EDGE_FURN);
  for (const x of [-w * 0.42, -w * 0.3, -w * 0.18, -w * 0.06]) {
    b.seg(x, 0.045 + r * 2 + 0.003, -r, x, 0.045 + r * 2 + 0.003, r, EDGE_FAINT);
  }

  // Top digital touchscreen drive control computer
  b.box(-w * 0.35, 0, 0.045 + r * 2, 0.045 + r * 2 + 0.06, -r * 0.65, r * 0.65, C.dark, C.dark, EDGE_GLOW);

  // Strainer pot with clear cam-lock lid and glowing water ring
  const pr = Math.min(w * 0.22, d * 0.46);
  b.cyl(w * 0.28, 0, pr, 0.035, h * 0.84, C.dark, C.body, 16, EDGE_FURN);
  b.cyl(w * 0.28, 0, pr * 0.92, h * 0.84, h, C.glass, C.glass, 16);
  // Glowing status water ring
  const rr = pr * 0.96;
  for (let i = 0; i < 16; i++) {
    const a0 = (i / 16) * Math.PI * 2;
    const a1 = ((i + 1) / 16) * Math.PI * 2;
    b.seg(w * 0.28 + Math.cos(a0) * rr, h * 0.85, Math.sin(a0) * rr, w * 0.28 + Math.cos(a1) * rr, h * 0.85, Math.sin(a1) * rr, EDGE_GLOW);
  }
}

/** Sand filter: filament-wound fiberglass vessel with reinforced base and 6-way multiport valve. */
function poolFilter(b: Builder, w: number, d: number, h: number, valve: string | null): void {
  const r = Math.min(w, d) / 2;

  // Reinforced pedestal base ring
  b.cyl(0, 0, r * 0.96, 0, h * 0.09, C.dark, C.dark, 18, EDGE_FAINT);

  // Fiberglass filament-wound spherical tank body
  b.cyl(0, 0, r, h * 0.09, h * 0.78, C.dark, C.body, 20, EDGE_FURN);
  b.cyl(0, 0, r * 0.76, h * 0.78, h * 0.85, C.dark, C.body, 18);

  if (valve === "side6") {
    // Side multiport valve
    const x0 = r * 0.9;
    b.box(x0, x0 + 0.13, h * 0.3, h * 0.68, -0.075, 0.075, C.dark, C.metal, EDGE_FURN);
    ring(b, x0 + 0.065, h * 0.56, 0.055, 0.08, 16);
    b.box(x0 + 0.04, x0 + 0.09, h * 0.68, h * 0.74, -0.015, 0.015, C.dark, C.body);
    return;
  }

  // Top 6-way multiport valve head with selector lever, pressure gauge, and sight glass
  b.cyl(0, 0, r * 0.46, h * 0.85, h * 0.96, C.dark, C.metal, 18, EDGE_FURN);
  const rr = r * 0.42;
  for (let i = 0; i < 16; i++) {
    const a0 = (i / 16) * Math.PI * 2;
    const a1 = ((i + 1) / 16) * Math.PI * 2;
    b.seg(Math.cos(a0) * rr, h * 0.965, Math.sin(a0) * rr, Math.cos(a1) * rr, h * 0.965, Math.sin(a1) * rr, EDGE_GLOW);
  }
  // Selector handle
  b.box(-0.02, 0.02, h * 0.96, h, -r * 0.36, r * 0.36, C.dark, C.body);
  // Dial pressure gauge
  b.cyl(r * 0.35, -r * 0.2, 0.03, h * 0.9, h * 0.98, C.metal, C.whiteTop, 12, EDGE_FAINT);
}

/** Heat pump: high-efficiency inverter heat pump with aero-acoustic fan grille and digital touch interface. */
function poolHeatPump(b: Builder, w: number, d: number, h: number): void {
  // Base rubber vibration-isolating feet
  for (const x of [-w * 0.4, w * 0.4]) {
    b.box(x - 0.035, x + 0.035, 0, 0.06, -d / 2 + 0.02, d / 2 - 0.02, C.dark);
  }

  // Main chassis with weather-proof casing
  b.box(-w / 2, w / 2, 0.06, h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);

  // Aero-acoustic spiral fan discharge grille
  const r = Math.min(h * 0.38, w * 0.3);
  const cx = -w * 0.15;
  const cy = h * 0.53;
  ring(b, cx, cy, r, d / 2 + 0.004, 24);
  ring(b, cx, cy, r * 0.6, d / 2 + 0.004, 18);
  ring(b, cx, cy, r * 0.25, d / 2 + 0.004, 12);
  b.seg(cx - r, cy, d / 2 + 0.005, cx + r, cy, d / 2 + 0.005, EDGE_FAINT);
  b.seg(cx, cy - r, d / 2 + 0.005, cx, cy + r, d / 2 + 0.005, EDGE_FAINT);

  // Digital touch controller in top right corner
  b.box(w * 0.2, w * 0.44, h * 0.62, h * 0.82, d / 2, d / 2 + 0.008, C.dark, C.dark, EDGE_GLOW);
  b.seg(w * 0.24, h * 0.72, d / 2 + 0.01, w * 0.4, h * 0.72, d / 2 + 0.01, EDGE_GLOW);

  // Lateral evaporator heat exchanger fins
  for (let i = 1; i < 9; i++) {
    b.seg(w / 2 + 0.002, h * (0.08 + i * 0.09), -d / 2 + 0.03, w / 2 + 0.002, h * (0.08 + i * 0.09), d / 2 - 0.03, EDGE_FAINT);
  }
}

/** Dosing unit: dual peristaltic dosing controller unit with clear roller heads, flow cell, and graduated canisters. */
function poolDosing(b: Builder, w: number, d: number, h: number): void {
  const y0 = 0.9;
  // Wall-mount controller housing
  b.box(-w / 2, w / 2, y0, y0 + h * 0.46, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);

  // Twin peristaltic pump heads with transparent covers
  for (const s of [-1, 1]) {
    const px = s * w * 0.22;
    const py = y0 + h * 0.22;
    ring(b, px, py, Math.min(w, h) * 0.09, d / 2 + 0.004, 14);
    // Rotor star rollers
    b.cyl(px, d / 2 + 0.002, 0.015, py - 0.015, py + 0.015, C.metal, C.metal, 8);
  }

  // Digital status readout display
  b.box(-w * 0.32, w * 0.32, y0 + h * 0.35, y0 + h * 0.43, d / 2, d / 2 + 0.006, C.dark, C.dark, EDGE_GLOW);

  // Chemical holding canisters on floor with graduated capacity marks
  for (const s of [-1, 1]) {
    const cx = s * w * 0.25;
    b.box(cx - w * 0.18, cx + w * 0.18, 0, h * 0.5, -d / 2, d / 2, C.white, C.glass, EDGE_FAINT);
    // Suction lance cap
    b.cyl(cx, 0, 0.03, h * 0.5, h * 0.55, C.dark, C.dark, 8);
  }
}

/** Ball valve: true-union PVC-U industrial ball valve with hex union nuts and ergonomic high-torque lever. */
function poolValve(b: Builder, w: number, d: number, h: number): void {
  const y0 = POOL_VALVE_Y - h * 0.4;

  // True-union cylindrical body with faceted union collar nuts on both ends
  b.box(-w / 2, w / 2, y0 + h * 0.24, y0 + h * 0.62, -d * 0.26, d * 0.26, C.metal, C.metal, EDGE_FURN);
  // Collar nuts
  for (const sx of [-1, 1]) {
    const nx = sx * (w / 2 - 0.03);
    b.box(nx - 0.02, nx + 0.02, y0 + h * 0.2, y0 + h * 0.66, -d * 0.3, d * 0.3, C.dark, C.dark, EDGE_FAINT);
  }

  // Valve stem housing and position indicator
  b.box(-w * 0.14, w * 0.14, y0 + h * 0.6, y0 + h * 0.82, -d * 0.14, d * 0.14, C.dark);

  // Ergonomic high-torque lever handle with red/blue position lock button
  b.box(-w * 0.12, w * 0.48, y0 + h * 0.82, y0 + h, -d * 0.16, d * 0.16, C.accent, C.accent, EDGE_GLOW);
  b.cyl(0, 0, 0.025, y0 + h * 0.82, y0 + h + 0.005, C.metal, C.metal, 8);
}

/** Grid connection: heavy-duty architectural outdoor distribution pillar with rain canopy and hazard chevron. */
function gridCabinet(b: Builder, w: number, d: number, h: number): void {
  // Ground root base
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.06, -d / 2 + 0.02, d / 2 - 0.02, C.dark);

  // Main polyester fiberglass body
  b.box(-w / 2, w / 2, 0.06, h, -d / 2, d / 2, C.dark, C.body, EDGE_FURN);

  // Chamfered rain-shedding canopy lid
  b.box(-w / 2 - 0.015, w / 2 + 0.015, h, h + 0.035, -d / 2 - 0.015, d / 2 + 0.015, C.dark, C.body, EDGE_GLOW);

  // Labyrinth ventilation slits and warning hazard indicator
  for (let i = 0; i < 3; i++) {
    const y = h * 0.65 + i * 0.035;
    b.seg(-w * 0.25, y, d / 2 + 0.003, w * 0.25, y, d / 2 + 0.003, EDGE_FAINT);
  }
}

/** Wallbox: luxury EV charging station with glass faceplate, interactive RGB halo ring, cable holster, and Type 2 gun. */
function wallbox(b: Builder, w: number, d: number, h: number): void {
  const y0 = 1.0;

  // Aluminum rear housing with recessed wall standoff
  b.box(-w / 2 + 0.02, w / 2 - 0.02, y0 + 0.04, y0 + h - 0.04, -d / 2, -d / 2 + 0.02, C.dark);
  b.loft([-w / 2, w / 2, -d / 2 + 0.02, d / 2 - 0.02], [-w / 2 + 0.01, w / 2 - 0.01, -d / 2 + 0.02, d / 2], y0, y0 + h, C.metal, C.metal, EDGE_FURN);

  // Tempered glass front panel with interactive RGB status halo ring
  b.box(-w / 2 + 0.015, w / 2 - 0.015, y0 + 0.02, y0 + h - 0.02, d / 2 - 0.005, d / 2 + 0.005, C.dark, C.dark, EDGE_GLOW);
  const r = Math.min(w, h) * 0.28;
  const cy = y0 + h * 0.6;
  ring(b, 0, cy, r, d / 2 + 0.007, 20);

  // Integrated cable management saddle holster below
  b.box(-0.06, 0.06, y0 - 0.12, y0, d / 2 - 0.05, d / 2, C.metal);
  // Coiled heavy-duty charging cable
  b.cyl(0, d / 2 - 0.02, 0.08, y0 - 0.42, y0 - 0.12, C.dark, C.dark, 14);
  // Type 2 charging gun docked in holster
  b.box(-0.03, 0.03, y0 - 0.22, y0 - 0.08, d / 2, d / 2 + 0.07, C.dark, C.metal, EDGE_FAINT);
}

/** Meter cabinet: modern utility cabinet with flush window showing smart digital meter with pulse LED. */
function meterCabinet(b: Builder, w: number, d: number, h: number): void {
  const y0 = 0.4;
  b.box(-w / 2, w / 2, y0, y0 + h, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);

  // Door edge reveal and quarter-turn lock latch
  b.seg(-w / 2 + 0.025, y0 + 0.025, d / 2 + 0.003, -w / 2 + 0.025, y0 + h - 0.025, d / 2 + 0.003, EDGE_FAINT);
  b.seg(-w / 2 + 0.025, y0 + h - 0.025, d / 2 + 0.003, w / 2 - 0.025, y0 + h - 0.025, d / 2 + 0.003, EDGE_FAINT);
  b.cyl(w / 2 - 0.045, d / 2 + 0.006, 0.016, y0 + h * 0.5 - 0.02, y0 + h * 0.5 + 0.02, C.dark, C.metal, 10);

  // Smart digital electricity meter behind glass inspection window
  b.box(-w * 0.32, w * 0.32, y0 + h * 0.58, y0 + h * 0.84, d / 2, d / 2 + 0.006, C.dark, C.dark, EDGE_GLOW);
  // Digital LCD readout screen and pulse LED
  b.box(-w * 0.24, w * 0.24, y0 + h * 0.68, y0 + h * 0.78, d / 2 + 0.006, d / 2 + 0.009, C.dark, C.dark);
  b.seg(-w * 0.2, y0 + h * 0.73, d / 2 + 0.01, w * 0.2, y0 + h * 0.73, d / 2 + 0.01, EDGE_GLOW);
  b.cyl(w * 0.2, d / 2 + 0.01, 0.006, y0 + h * 0.62, y0 + h * 0.64, C.accent, C.accent, 6);
}

/** Home battery: monocoque residential energy storage with breathing status light bar and wall mounting bracket. */
function homeBattery(b: Builder, w: number, d: number, h: number, variant: string | null): void {
  if (variant === "wall") {
    const y0 = 0.5;
    // Wall-mount slim battery (Tesla Powerwall style)
    b.loft([-w / 2, w / 2, -d / 2, d / 2 - 0.01], [-w / 2 + 0.015, w / 2 - 0.015, -d / 2, d / 2], y0, y0 + h, C.white, C.whiteTop, EDGE_FURN);
    // Vertical pulsing charge status light bar
    b.seg(0, y0 + h * 0.15, d / 2 + 0.004, 0, y0 + h * 0.88, d / 2 + 0.004, EDGE_GLOW);
    return;
  }
  if (variant === "cube") {
    b.box(-w / 2 + 0.01, w / 2 - 0.01, 0, 0.03, -d / 2 + 0.01, d / 2 - 0.01, C.dark);
    b.box(-w / 2, w / 2, 0.03, h, -d / 2, d / 2, C.dark, C.body, EDGE_FURN);
    b.seg(-w * 0.35, h * 0.85, d / 2 + 0.004, w * 0.35, h * 0.85, d / 2 + 0.004, EDGE_GLOW);
    b.box(-w * 0.15, w * 0.15, h, h + 0.025, -0.012, 0.012, C.dark);
    return;
  }

  // Floor-standing modular battery tower (Enphase / Sonnen style)
  b.box(-w / 2 + 0.02, w / 2 - 0.02, 0, 0.06, -d / 2 + 0.02, d / 2 - 0.02, C.dark);
  const modules = Math.max(2, Math.round((h - 0.06) / 0.3));
  const mh = (h - 0.06) / modules;
  for (let i = 0; i < modules; i++) {
    b.box(-w / 2, w / 2, 0.06 + i * mh + 0.004, 0.06 + (i + 1) * mh, -d / 2, d / 2, C.white, C.whiteTop, EDGE_FURN);
  }
  // Vertical 5-segment LED battery state-of-charge bar
  for (let k = 0; k < 5; k++) {
    const y = 0.06 + h * 0.2 + k * ((h - 0.35) / 5);
    b.seg(-w * 0.05, y, d / 2 + 0.004, w * 0.05, y, d / 2 + 0.004, EDGE_GLOW);
  }
}

/** Height of the underside of a radiator. */
export const RADIATOR_Y = 0.12;
/** Height of the bottom of an air conditioner's indoor unit (as builtinBase). */
export const AC_Y = 2.05;

/**
 * The size of a picture (cover, app icon) on a screen of sw × sh metres: the whole picture visible ("contain"),
 * with a dark margin that grows with the screen – 4 cm on a TV, a few millimetres on a small smart display
 * (a fixed 4 cm left only a sliver on a 5″ display, #799).
 */
export function screenPictureSize(sw: number, sh: number, aspect: number): { w: number; h: number } {
  const m = Math.min(0.04, 0.08 * Math.min(sw, sh));
  const w = Math.min(sw - m, (sh - m) * aspect);
  return { w, h: w / aspect };
}

/**
 * Screen of a TV or monitor in local coordinates (x across, y up, z = its front face), for the glow
 * shown while the linked device is on. Null for furniture without a screen.
 */
export function screenRect(f: Furniture, floor?: Floor): { x0: number; x1: number; y0: number; y1: number; z: number } | null {
  const r = screenRectUnmirrored(f, floor);
  return r && f.mirror ? { ...r, x0: -r.x1, x1: -r.x0 } : r;
}

function screenRectUnmirrored(f: Furniture, floor?: Floor): { x0: number; x1: number; y0: number; y1: number; z: number } | null {
  const w = Math.max(MIN_SIZE, f.w);
  const d = Math.max(MIN_SIZE, f.d);
  const h = Math.max(0.005, f.h);
  const part = packScreen(f.type);
  if (part) {
    // the screen part's front face, at the item's mount height
    const base = floor ? mountBase(floor, f) : 0;
    const x0 = (part.x - part.w / 2) * w;
    const x1 = (part.x + part.w / 2) * w;
    const inset = Math.min(0.02, (x1 - x0) * 0.05);
    return { x0: x0 + inset, x1: x1 - inset, y0: base + part.y * h + inset, y1: base + (part.y + part.h) * h - inset, z: (part.z + part.d / 2) * d };
  }
  // built-in models are lifted as a whole by their mount height
  const lift = floor && f.type !== "fridge_smart" ? mountBase(floor, f) - builtinBase(f) : 0;
  const r = builtInScreen(f, w, d, h, floor);
  return r ? { ...r, y0: r.y0 + lift, y1: r.y1 + lift } : null;
}

function builtInScreen(f: Furniture, w: number, d: number, h: number, floor?: Floor): { x0: number; x1: number; y0: number; y1: number; z: number } | null {
  // Pool Pro: the pump's motor side, the heat pump's grille, the filter's valve head, the dosing unit's front
  if (f.type === "pool_pump") {
    const r = Math.min(d, h) * 0.32;
    return { x0: -w / 2 + 0.03, x1: w * 0.08, y0: 0.07, y1: 0.03 + r * 2, z: r + 0.004 };
  }
  if (f.type === "pool_heat_pump") return { x0: -w / 2 + 0.05, x1: w * 0.15, y0: h * 0.15, y1: h * 0.9, z: d / 2 + 0.003 };
  if (f.type === "pool_filter") {
    const r = Math.min(w, d) / 2;
    return { x0: -r * 0.4, x1: r * 0.4, y0: h * 0.85, y1: h * 0.94, z: r * 0.45 + 0.004 };
  }
  if (f.type === "pool_dosing") return { x0: -w * 0.4, x1: w * 0.4, y0: 0.9 + h * 0.05, y1: 0.9 + h * 0.4, z: d / 2 + 0.003 };
  if (f.type === "tv_board") {
    const tw = Math.min(w * 0.8, 1.45);
    const th = tw * 0.56;
    return { x0: -tw / 2 + 0.02, x1: tw / 2 - 0.02, y0: h + 0.12, y1: h + 0.08 + th, z: -d / 2 + 0.165 };
  }
  if (f.type === "tv_wall") {
    const y0 = 1.3 - h / 2;
    return { x0: -w / 2 + 0.02, x1: w / 2 - 0.02, y0: y0 + 0.02, y1: y0 + h - 0.02, z: d / 2 + 0.003 };
  }
  if (f.type === "neon_sign") {
    const y0 = builtinBase(f);
    return { x0: -w / 2 + 0.01, x1: w / 2 - 0.01, y0: y0 + 0.01, y1: y0 + h - 0.01, z: d / 2 + 0.002 };
  }
  if (f.type === "desk") return { x0: -0.28, x1: 0.28, y0: h + 0.1, y1: h + 0.4, z: -d / 2 + 0.115 };
  if (f.type === "fridge_smart") {
    // the screen sits on the right door (mirrored: the door's u runs to the left from its hinge at +w/2)
    const base = floor ? mountBase(floor, f) : 0;
    return { x0: 0.06, x1: w / 2 - 0.06, y0: base + h * 0.52 + 0.01, y1: base + h * 0.86 - 0.01, z: d / 2 + 0.006 };
  }
  // glowing fronts of appliances that run and of a radiator that heats
  if (f.type === "radiator") return { x0: -w / 2 + 0.02, x1: w / 2 - 0.02, y0: RADIATOR_Y + 0.02, y1: RADIATOR_Y + h - 0.02, z: d / 2 + 0.004 };
  // an air conditioner glows at its air outlet in the colour of its mode
  if (f.type === "ac_unit") return { x0: -w / 2 + 0.05, x1: w / 2 - 0.05, y0: AC_Y + 0.015, y1: AC_Y + 0.06, z: d / 2 - 0.015 };
  if (f.type === "washer" || f.type === "dryer") {
    const cy = (h - 0.14) / 2 + 0.04;
    const r = Math.min(w * 0.36, (h - 0.2) * 0.42) * 0.8;
    return { x0: -r, x1: r, y0: cy - r, y1: cy + r, z: d / 2 - 0.004 };
  }
  if (f.type === "dishwasher") return { x0: -w / 2 + 0.06, x1: w / 2 - 0.06, y0: h - 0.16, y1: h - 0.08, z: d / 2 - 0.004 };
  return null;
}

/** Round things cast a round shadow: a round table, a plant, a pack item whose largest part is an upright cylinder (#719). */
export function roundFootprint(f: Pick<Furniture, "type">): boolean {
  if (f.type === "table_round" || f.type === "plant") return true;
  const item = packItem(f.type);
  if (!item?.parts.length) return false;
  const big = item.parts.reduce((m, p) => (p.w * p.d > m.w * m.d ? p : m), item.parts[0]);
  return big.shape === "cyl" && (big.axis ?? "y") === "y" && big.w >= 0.85 && big.d >= 0.85;
}

/**
 * Soft contact shadow under an item: a dark core that fades out beyond its footprint – round under round things.
 * `y`: the ground it lies on (an item in the garden stands lower than the floor, #708).
 */
function contactShadow(shadow: GeoBuffer, tf: Tf, w: number, d: number, strength: number, round = false, ground = 0): void {
  const grow = Math.min(0.14, Math.max(0.06, Math.min(w, d) * 0.15));
  const dark = new Color(1 - strength, 1 - strength, 1 - strength);
  const clear = new Color(1, 1, 1);
  const y = ground + 0.003;
  if (round) {
    const P = (p: Vec2) => [p[0], y, p[1]];
    const n = 24;
    const at = (i: number, rx: number, rz: number) => tf(Math.cos((i / n) * 2 * Math.PI) * rx, Math.sin((i / n) * 2 * Math.PI) * rz);
    const s0 = shadow.p.length;
    const c = P(tf(0, 0));
    for (let i = 0; i < n; i++) {
      const a0 = P(at(i, w / 2, d / 2));
      const a1 = P(at(i + 1, w / 2, d / 2));
      const o0 = P(at(i, w / 2 + grow, d / 2 + grow));
      const o1 = P(at(i + 1, w / 2 + grow, d / 2 + grow));
      // the same turn as the square shadow's triangles
      shadow.tri(c, a0, a1, dark);
      shadow.tri(a0, o0, o1, dark, clear, clear);
      shadow.tri(a0, o1, a1, dark, clear, dark);
    }
    if (tfMirrors(tf)) flipWinding(shadow, s0);
    return;
  }
  const inner = [tf(-w / 2, -d / 2), tf(w / 2, -d / 2), tf(w / 2, d / 2), tf(-w / 2, d / 2)];
  const outer = [tf(-w / 2 - grow, -d / 2 - grow), tf(w / 2 + grow, -d / 2 - grow), tf(w / 2 + grow, d / 2 + grow), tf(-w / 2 - grow, d / 2 + grow)];
  const P = (p: Vec2) => [p[0], y, p[1]];
  const s0 = shadow.p.length;
  shadow.tri(P(inner[0]), P(inner[1]), P(inner[2]), dark);
  shadow.tri(P(inner[0]), P(inner[2]), P(inner[3]), dark);
  for (let i = 0; i < 4; i++) {
    const j = (i + 1) % 4;
    shadow.tri(P(inner[i]), P(outer[i]), P(outer[j]), dark, clear, clear);
    shadow.tri(P(inner[i]), P(outer[j]), P(inner[j]), dark, clear, dark);
  }
  if (tfMirrors(tf)) flipWinding(shadow, s0);
}

/** `still`: a picture of the item (a preview), so a pack's robot vacuum keeps its robot instead of driving it (#645). */
export function pushFurniture(buf: GeoBuffer, lines: LineBuffer, shadow: GeoBuffer, f: Furniture, base = 0, still = false): void {
  // a mirrored item needs no rewinding here: boxes, lofts and upright cylinders wind themselves (ccw),
  // lying cylinders and the contact shadow rewind themselves when the transform mirrors (#159)
  pushUpright(buf, lines, shadow, f, base, still);
}

/** Swap the second and third vertex of every triangle from `from` on (positions, colours, folds, uvs, tiles). */
export function flipWinding(buf: GeoBuffer, from: number): void {
  const swap = (arr: number[] | null, start: number, n: number) => {
    if (!arr) return;
    for (let k = 0; k < n; k++) {
      const i = start + n + k;
      const j = start + 2 * n + k;
      const t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
  };
  for (let i = from; i < buf.p.length; i += 9) {
    const tri = i / 9;
    swap(buf.p, i, 3);
    swap(buf.c, i, 3);
    swap(buf.f, tri * 3, 1);
    swap(buf.uv, tri * 6, 2);
    swap(buf.tile, tri * 6, 2);
  }
}

function pushUpright(buf: GeoBuffer, lines: LineBuffer, shadow: GeoBuffer, f: Furniture, base: number, still = false): void {
  // pack items place their parts at `base` themselves; built-in models are drawn on the floor and
  // lifted as a whole (a dryer on the washer, a shelf on the wall), without a shadow on the floor
  // the mount height is absolute: a wall cabinet drawn at 1.45 m moves by the difference (up or down)
  const lift = packItem(f.type) ? 0 : base - builtinBase(f);
  if (packItem(f.type) || Math.abs(lift) < 0.001) return buildFurniture(buf, lines, shadow, f, base, still);
  const p0 = buf.p.length;
  const l0 = lines.p.length;
  const s0 = shadow.p.length;
  buildFurniture(buf, lines, base < 0.05 ? shadow : new GeoBuffer(), f, 0);
  for (let i = p0 + 1; i < buf.p.length; i += 3) buf.p[i] += lift;
  for (let i = l0 + 1; i < lines.p.length; i += 3) lines.p[i] += lift;
  // in the garden the item stands lower than the floor: its shadow goes down with it
  if (base < 0) for (let i = s0 + 1; i < shadow.p.length; i += 3) shadow.p[i] += lift;
}

function buildFurniture(buf: GeoBuffer, lines: LineBuffer, shadow: GeoBuffer, f: Furniture, base: number, still = false): void {
  const before = finish;
  finish = finishColors(f);
  try {
    buildModel(buf, lines, shadow, f, base, still);
  } finally {
    finish = before;
  }
}

function buildModel(buf: GeoBuffer, lines: LineBuffer, shadow: GeoBuffer, f: Furniture, base: number, still = false): void {
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  // mirrored: the item's own x runs the other way
  const mx = f.mirror ? -1 : 1;
  const tf: Tf = (x, z) => [f.x + mx * x * c - z * s, f.z + mx * x * s + z * c];
  const b = new Builder(buf, lines, tf);
  const w = Math.max(MIN_SIZE, f.w);
  const d = Math.max(MIN_SIZE, f.d);
  const h = Math.max(0.005, f.h);
  switch (f.type) {
    case "sofa":
      sofa(b, w, d, h, Math.max(1, Math.round((w - 0.4) / 0.62)));
      break;
    case "armchair":
      sofa(b, w, d, h, 1);
      break;
    case "sofa_l":
      cornerSofa(b, w, d, h, false);
      break;
    case "sofa_u":
      cornerSofa(b, w, d, h, true);
      break;
    case "bed":
      bed(b, w, d, h);
      break;
    case "chair":
      chair(b, w, d, h);
      break;
    case "table":
      table(b, w, d, h);
      break;
    case "desk":
      desk(b, w, d, h);
      break;
    case "nightstand":
      cabinet(b, w, d, h, 1, h * 0.72, true);
      b.seg(-w / 2, h * 0.5, d / 2 - 0.02, w / 2, h * 0.5, d / 2 - 0.02, EDGE_FAINT);
      break;
    case "wardrobe":
      cabinet(b, w, d, h, Math.max(2, Math.round(w / 0.5)), h * 0.5);
      break;
    case "shelf":
      shelf(b, w, d, h);
      break;
    case "kitchen":
      kitchen(b, w, d, h);
      break;
    case "fridge":
      fridge(b, w, d, h);
      break;
    case "fridge_smart":
      fridgeSmart(b, w, d, h);
      break;
    case "waste_bin": {
      const c0 = buf.c.length;
      wasteBin(b, w, d, h, binShape(f), binColors(f, householdCountry()));
      // the light looks keep only bright saturated colours: the shading towards the floor made the lower half of a
      // bin fall back to the look's grey (#609), so its coloured parts keep their brightness all the way down
      if (lightLook) keepBright(buf.c, c0);
      break;
    }
    case "mailbox": {
      // like the other built-in wall models it is drawn at its own height (a wall mailbox at 1 m, a bank at 0.75 m)
      const p0 = buf.p.length;
      const l0 = lines.p.length;
      mailbox(b, w, d, h, mailboxShape(f));
      const lift = builtinBase(f);
      for (let i = p0 + 1; i < buf.p.length; i += 3) buf.p[i] += lift;
      for (let i = l0 + 1; i < lines.p.length; i += 3) lines.p[i] += lift;
      if (lift > 0) return; // hangs on the wall: no shadow on the floor
      break;
    }
    case "wifi_ap":
      // under the ceiling or on the wall: lifted by its mount height, no shadow
      wifiAp(b, w, d, h, f.variant === "wall");
      return;
    case "water_heater":
      waterHeater(b, w, d, h, f.variant === "wall");
      if (f.variant === "wall") return;
      break;
    case "wall_switch":
    case "wall_socket": {
      // drawn at its own height like the other built-in wall models; never a shadow on the floor
      const p0 = buf.p.length;
      const l0 = lines.p.length;
      wallPlate(b, w, d, h, gangsOf(f).length, f.type === "wall_socket", f.variant === "outdoor");
      const lift = builtinBase(f);
      for (let i = p0 + 1; i < buf.p.length; i += 3) buf.p[i] += lift;
      for (let i = l0 + 1; i < lines.p.length; i += 3) lines.p[i] += lift;
      return;
    }
    case "awning":
      // drawn with its moving fabric and arms by pushAwning (it runs in and out with its cover)
      return;
    case "stove":
      stove(b, w, d, h);
      break;
    case "sink":
      sink(b, w, d, h);
      break;
    case "bathtub":
      bathtub(b, w, d, h);
      break;
    case "shower":
      shower(b, w, d, h);
      break;
    case "wc":
      wc(b, w, d, h);
      break;
    case "washbasin":
      washbasin(b, w, d, h);
      break;
    case "tv_board":
      tvBoard(b, w, d, h);
      break;
    case "plant":
      plant(b, w, d, h);
      break;
    case "rug":
      rug(b, w, d);
      return; // flat, no contact shadow
    case "stairs":
      stairs(b, w, d, h);
      break;
    case "stairs_u":
      stairsU(b, w, d, h);
      break;
    case "stairwell":
      return; // only a hole in the floor (see stairHoles in build.ts), nothing to draw
    case "sideboard":
      sideboard(b, w, d, h);
      break;
    case "dresser":
      dresser(b, w, d, h);
      break;
    case "tall_cabinet":
      cabinet(b, w, d, h, 1, h * 0.5);
      break;
    case "coat_rack":
      coatRack(b, w, d, h);
      break;
    case "bench":
      bench(b, w, d, h, false);
      break;
    case "corner_bench":
      bench(b, w, d, h, true);
      break;
    case "bar_stool":
      barStool(b, w, d, h);
      break;
    case "office_chair":
      officeChair(b, w, d, h);
      break;
    case "stool":
      stool(b, w, d, h);
      break;
    case "kitchen_wall":
      kitchenWall(b, w, d, h);
      return; // hangs on the wall, no shadow on the floor
    case "kitchen_tall":
      kitchenTall(b, w, d, h);
      break;
    case "island":
      island(b, w, d, h);
      break;
    case "worktop":
      // only the 4 cm top at its height, nothing below it (no contact shadow)
      b.box(-w / 2, w / 2, Math.max(0, h - 0.04), h, -d / 2, d / 2, worktop(), worktop(), EDGE_FURN);
      return;
    case "dishwasher":
      dishwasher(b, w, d, h);
      break;
    case "washer":
      laundry(b, w, d, h, false);
      break;
    case "dryer":
      laundry(b, w, d, h, true);
      break;
    case "bunk_bed":
      bunkBed(b, w, d, h);
      break;
    case "table_round":
      roundTable(b, w, d, h);
      break;
    case "coffee_table":
      coffeeTable(b, w, d, h);
      break;
    case "tv_wall":
      tvWall(b, w, d, h);
      return;
    case "neon_sign": {
      // hangs on the wall at its own height: no shadow on the floor
      const p0 = buf.p.length;
      const l0 = lines.p.length;
      neonSign(b, w, d, h);
      const lift = builtinBase(f);
      for (let i = p0 + 1; i < buf.p.length; i += 3) buf.p[i] += lift;
      for (let i = l0 + 1; i < lines.p.length; i += 3) lines.p[i] += lift;
      return;
    }
    case "parking": {
      // Architectural luxury driveway stall: double crisp perimeter lines, entry threshold, rear wheel-stop curb bumper
      const y = 0.012;
      const x0 = -w / 2;
      const x1 = w / 2;
      const z0 = -d / 2;
      const z1 = d / 2;
      // Outer border
      b.seg(x0, y, z0, x1, y, z0, EDGE_FAINT);
      b.seg(x1, y, z0, x1, y, z1, EDGE_FAINT);
      b.seg(x1, y, z1, x0, y, z1, EDGE_FAINT);
      b.seg(x0, y, z1, x0, y, z0, EDGE_FAINT);
      // Inner stall offset pinstripe for refined European estate paving
      const ins = 0.08;
      b.seg(x0 + ins, y, z0 + ins, x1 - ins, y, z0 + ins, EDGE_FAINT);
      b.seg(x1 - ins, y, z0 + ins, x1 - ins, y, z1 - ins, EDGE_FAINT);
      b.seg(x0 + ins, y, z0 + ins, x0 + ins, y, z1 - ins, EDGE_FAINT);
      // Heavy-duty rubberized architectural wheel-stop curb at the back
      const bw = Math.min(w * 0.72, 1.8);
      const bz0 = z0 + 0.45;
      const bz1 = z0 + 0.60;
      b.box(-bw / 2, bw / 2, 0, 0.09, bz0, bz1, C.dark, C.dark, EDGE_FURN);
      // High-visibility reflector strip inserts on the wheel stop
      for (const rx of [-bw * 0.32, 0, bw * 0.32]) {
        b.box(rx - 0.07, rx + 0.07, 0.02, 0.07, bz1, bz1 + 0.003, C.accent, C.accent);
      }
      // Directional entry chevron arrow at the front threshold
      const ay = y;
      b.seg(-w * 0.16, ay, z1 - 0.55, 0, ay, z1 - 0.25, EDGE_FURN);
      b.seg(0, ay, z1 - 0.25, w * 0.16, ay, z1 - 0.55, EDGE_FURN);
      b.seg(-w * 0.16, ay, z1 - 0.70, 0, ay, z1 - 0.40, EDGE_FAINT);
      b.seg(0, ay, z1 - 0.40, w * 0.16, ay, z1 - 0.70, EDGE_FAINT);
      return;
    }
    case "robot_vacuum": {
      // Auto-empty & mop cleaning wash station (Roborock / Dreame luxury flagship dock)
      const dockD = d * 0.36;
      const z0 = -d / 2;
      const z1 = z0 + dockD;
      const rampZ = 0.08;
      // Low-profile ramp landing baseplate with ribbed alignment rails
      b.box(-w * 0.42, w * 0.42, 0, 0.018, z0, rampZ, C.dark, C.dark, EDGE_FURN);
      // Side guidance tracks for robot entry
      for (const side of [-1, 1]) {
        const gx = side * (w * 0.38);
        b.box(gx - 0.015, gx + 0.015, 0.018, 0.038, z1, rampZ, C.metal, C.metal);
      }
      // Main station tower in matte architectural finish
      b.box(-w * 0.40, w * 0.40, 0.018, h, z0, z1, C.white, C.whiteTop, EDGE_FURN);
      // Recessed auto-empty suction / charging bay in lower third
      const bayH = h * 0.32;
      b.box(-w * 0.32, w * 0.32, 0.018, bayH, z1 - 0.04, z1 + 0.005, C.dark, C.dark);
      // Charging contacts
      b.box(-0.06, -0.02, bayH * 0.4, bayH * 0.6, z1 + 0.003, z1 + 0.008, C.accent);
      b.box(0.02, 0.06, bayH * 0.4, bayH * 0.6, z1 + 0.003, z1 + 0.008, C.accent);
      // Brushed aluminum trim separator between bay and upper water reservoirs
      b.box(-w * 0.402, w * 0.402, bayH + 0.01, bayH + 0.025, z0 - 0.002, z1 + 0.002, C.metal, C.metal);
      // Upper dual tank compartment lids (clean water left, dirty water right)
      const tankW = w * 0.36;
      const lidY0 = h - 0.03;
      b.box(-tankW, -0.01, lidY0, h + 0.005, z0 + 0.03, z1 - 0.03, C.white, C.metal, EDGE_FURN);
      b.box(0.01, tankW, lidY0, h + 0.005, z0 + 0.03, z1 - 0.03, C.white, C.metal, EDGE_FURN);
      // Recessed flush tank handles
      b.box(-tankW * 0.65, -tankW * 0.35, h + 0.002, h + 0.006, (z0 + z1) / 2 - 0.015, (z0 + z1) / 2 + 0.015, C.dark);
      b.box(tankW * 0.35, tankW * 0.65, h + 0.002, h + 0.006, (z0 + z1) / 2 - 0.015, (z0 + z1) / 2 + 0.015, C.dark);
      // Smoked level inspection windows
      b.box(-tankW * 0.6, -tankW * 0.4, bayH + 0.05, lidY0 - 0.04, z1, z1 + 0.004, C.glass);
      b.box(tankW * 0.4, tankW * 0.6, bayH + 0.05, lidY0 - 0.04, z1, z1 + 0.004, C.dark);
      // Subtle LED status glow indicator
      b.box(-0.04, 0.04, bayH + 0.05, bayH + 0.06, z1, z1 + 0.003, C.accent, C.accent);
      return;
    }
    case "radiator":
      radiator(b, w, d, h);
      return; // on the wall, no shadow on the floor
    case "ac_unit":
      acUnit(b, w, d, h);
      return;
    case "inverter":
      inverter(b, w, d, h, f.variant ?? null);
      return;
    case "grid_point":
      gridCabinet(b, w, d, h);
      break;
    case "wallbox":
      wallbox(b, w, d, h);
      return;
    case "pool_pump":
      poolPump(b, w, d, h);
      break;
    case "pool_filter":
      poolFilter(b, w, d, h, f.variant ?? null);
      break;
    case "pool_heat_pump":
      poolHeatPump(b, w, d, h);
      break;
    case "pool_dosing":
      poolDosing(b, w, d, h);
      break;
    case "pool_valve":
      poolValve(b, w, d, h);
      return;
    case "meter":
      meterCabinet(b, w, d, h);
      return;
    case "home_battery":
      homeBattery(b, w, d, h, f.variant ?? null);
      if (f.variant === "wall") return;
      break;
    default: {
      const item = packItem(f.type);
      if (item) {
        // a motorised curtain's fabric or a roll-down screen's cloth is drawn with its cover's state (pushPackMotion);
        // a pack's robot vacuum drives around as the viewer's robot (pushPackRobot), only its dock stays here (#645)
        const motion = packMotion(f.type);
        const own = motion ? (p: PackPart) => packMovingPart(motion, p) : isRobotVacuum(f.type) && !still ? packRobotPart : null;
        // turning fan blades are a model of their own the viewer turns (pushPackSpin, #1084); a picture keeps them
        // live parts (3.4) are models of their own too, moved by the viewer (pushPackLive); a picture keeps them
        const live = !still && hasLiveParts(item);
        const skip = !still && (packSpinAxis(item) || live) ? (p: PackPart) => !!p.spin || !!p.bind || !!own?.(p) : own;
        packModel(b, item, w, d, h, base, null, null, skip);
        // items on furniture, walls or ceilings cast no shadow on the floor
        if (base > 0.05) return;
      } else b.box(-w / 2, w / 2, 0, h, -d / 2, d / 2, C.body, C.bodyTop, EDGE_FURN);
    }
  }
  contactShadow(shadow, tf, w, d, f.type === "plant" ? 0.35 : 0.5, roundFootprint(f), Math.min(0, base));
}

/**
 * A pack item with parts in a colour of their own ("#rrggbb", a pumpkin's orange): the light looks keep such colours
 * only while bright and strong enough, so these parts are drawn anew on a look change (#609).
 */
export function hasFixedColors(type: string): boolean {
  return !!packItem(type)?.parts.some((p) => p.color?.startsWith("#") || p.top?.startsWith("#"));
}

/** The dark top the packs give their worktops (kitchen units, vanities): a placed item's wood finish replaces it. */
const WORKTOP_TOP = "#1d2640";

/** Colour of a pack part: a palette role (so packs follow the look) or "#rrggbb". */
function packColor(value: string | undefined, top: boolean): number | null {
  if (!value) return null;
  if (value.startsWith("#")) return parseInt(value.slice(1), 16);
  const palette = C as Record<string, number>;
  return (top ? palette[`${value}Top`] : undefined) ?? palette[value] ?? null;
}

/** Model of a pack item: its parts scaled to the item's size; glowing parts take `glow` (a lit lamp). */
function packModel(
  b: Builder,
  item: PackItem,
  w: number,
  d: number,
  h: number,
  base: number,
  glow: number | null,
  only: ((p: PackItem["parts"][number]) => boolean) | null = null,
  skip: ((p: PackItem["parts"][number]) => boolean) | null = null,
): void {
  const onlyGlow = !!only;
  const advent = item.parts.some((p) => p.advent) ? adventCandles() : 4;
  for (const q of fitParts(item, w, d, h)) {
    if (skip?.(q)) continue;
    // an Advent candle's flame burns only from its Sunday on
    if (q.advent && q.advent > advent) continue;
    // only some parts (the glowing ones of a speaker, a car's windows), a hair larger so they cover the item's own
    if (only && !only(q)) continue;
    const p = onlyGlow ? { ...q, glow: true, w: q.w + 0.006 / w, d: q.d + 0.006 / d, y: Math.max(0, q.y - 0.002 / h), h: q.h + 0.004 / h } : q;
    const lit = p.glow && glow !== null;
    // a part in a colour of its own that follows a finish (a gaming chair's red cover, a table's oak top, #1175) takes
    // the placed item's colour for that finish; without one it keeps its own
    const own = p.finish ? finishTargetOf(p.finish) : null;
    const ownSide = own ? finish?.[own] : undefined;
    const side = lit ? glow : (ownSide ?? packColor(p.color, false) ?? C.body);
    // a worktop (a wood part with the packs' dark worktop colour on top) takes a wood finish on its top as well, not
    // only on its front edge (#1143); without a finish it keeps its own top
    const finishedTop = ownSide !== undefined || (p.top === WORKTOP_TOP && finish?.[`${p.color}Top` as keyof typeof BASE] !== undefined);
    // without a top colour, the top is the role's top shade or a little lighter
    const top = lit ? glow : ownSide !== undefined ? (finish?.[`${own}Top` as keyof typeof BASE] ?? ownSide) : ((finishedTop ? null : packColor(p.top, false)) ?? packColor(p.color, true) ?? shade(side, 1.25).getHex());
    const y0 = base + p.y * h;
    const y1 = base + Math.min(h, (p.y + p.h) * h);
    const c0 = b.colors.length;
    // "glow" lines are as bright as the wall lines, so a pack item can be drawn like the walls
    const edges = p.edges === "glow" ? EDGE_TOP : p.edges === "faint" ? EDGE_FAINT : p.edges ? EDGE_FURN : null;
    // a turned part draws through a builder whose coordinates turn around the part's centre
    const bb = p.rot ? b.rotated(p.x * w, p.z * d, p.rot) : b;
    if (p.shape === "cyl" && (p.axis === "x" || p.axis === "z")) {
      bb.lyingCyl(p.axis, p.x * w, p.z * d, y0, y1, p.axis === "x" ? p.w * w : p.d * d, p.axis === "x" ? p.d * d : p.w * w, side, top, 14, edges);
    } else if (p.shape === "cyl") bb.cyl(p.x * w, p.z * d, (Math.min(p.w * w, p.d * d)) / 2, y0, y1, side, top, 14, edges);
    else if (p.shape === "loft") {
      const tx = p.tx ?? p.x;
      const tz = p.tz ?? p.z;
      const tw = p.tw ?? p.w;
      const td = p.td ?? p.d;
      bb.loft([(p.x - p.w / 2) * w, (p.x + p.w / 2) * w, (p.z - p.d / 2) * d, (p.z + p.d / 2) * d], [(tx - tw / 2) * w, (tx + tw / 2) * w, (tz - td / 2) * d, (tz + td / 2) * d], y0, y1, side, top, edges);
    } else bb.box((p.x - p.w / 2) * w, (p.x + p.w / 2) * w, y0, y1, (p.z - p.d / 2) * d, (p.z + p.d / 2) * d, side, top, edges);
    // a part in a colour of its own keeps it in the light looks down to the ground, like a waste bin (#609): the
    // shading towards the floor would push its lower half under the looks' signal-colour threshold (palette roles
    // follow the look and stay as they are)
    if (lightLook && !lit && !onlyGlow && ownSide === undefined && (p.color?.startsWith("#") || (p.top?.startsWith("#") && !finishedTop))) keepBright(b.colors, c0);
  }
}

/**
 * A security camera into the lamp buffer: on a wall a small body with a lens looking along +z (turned
 * by `rotation`), on the ceiling a dome hanging at the ceiling height `y`.
 */
export function pushCameraModel(buf: GeoBuffer, model: "camera_wall" | "camera_ceiling", x: number, y: number, z: number, rotation: number): void {
  const a = rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const tf: Tf = (lx, lz) => [x + lx * c - lz * s, z + lx * s + lz * c];
  const b = new Builder(buf, new LineBuffer(), tf);
  const body = 0x1a2640;
  const bodyTop = 0x243660;
  const lens = 0x0b111f;
  if (model === "camera_ceiling") {
    // dome: a flat base and a half-dome below it
    b.cyl(0, 0, 0.07, y - 0.03, y, body, bodyTop, 12);
    b.loft([-0.05, 0.05, -0.05, 0.05], [-0.025, 0.025, -0.025, 0.025], y - 0.1, y - 0.03, lens, body);
    b.cyl(0, 0, 0.012, y - 0.075, y - 0.06, C.accent, C.accent, 6);
    return;
  }
  // wall camera: bracket at the wall (-z), body pointing into the room (+z), lens in front
  b.box(-0.02, 0.02, y - 0.02, y + 0.02, -0.06, -0.03, body, bodyTop);
  b.box(-0.01, 0.01, y - 0.01, y + 0.06, -0.05, -0.03, body, bodyTop);
  b.loft([-0.035, 0.035, -0.03, 0.09], [-0.04, 0.04, -0.03, 0.09], y + 0.02, y + 0.09, body, bodyTop);
  b.lyingCyl("z", 0, 0.1, y + 0.03, y + 0.08, 0.03, 0.05, lens, C.accent, 10);
  b.box(-0.006, 0.006, y + 0.075, y + 0.085, 0.085, 0.09, 0xff3b4f, 0xff3b4f);
}

/**
 * The robot of a pack's robot vacuum (the parts in front of its dock) as a model of its own, centred on the robot
 * and standing on y = 0, facing +z – the viewer drives it around (#645). Returns the robot's radius and height, for
 * the status light on top.
 */
export function pushPackRobot(buf: GeoBuffer, item: PackItem, w: number, d: number, h: number): { radius: number; top: number } {
  const cz = packRobotCentre(item) * d;
  const b = new Builder(buf, new LineBuffer(), (x, z) => [x, z - cz]);
  packModel(b, item, Math.max(MIN_SIZE, w), Math.max(MIN_SIZE, d), Math.max(0.005, h), 0, null, packRobotPart);
  let radius = 0;
  let top = 0;
  for (const p of fitParts(item, w, d, h)) {
    if (!packRobotPart(p)) continue;
    const r = Math.min(p.w * w, p.d * d) / 2;
    if (p.shape === "cyl" && r > radius) radius = r;
    top = Math.max(top, Math.min(h, (p.y + p.h) * h));
  }
  return { radius: radius || 0.17, top: top || 0.09 };
}

/** The glowing parts of a pack item that is no lamp (a smart speaker's light ring) in `color`: for the screen layer. */
export function pushPackGlow(buf: GeoBuffer, item: PackItem, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number, color: number, pick: (p: PackItem["parts"][number]) => boolean = (p) => !!p.glow): void {
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const mx = f.mirror ? -1 : 1;
  const tf: Tf = (x, z) => [f.x + mx * x * c - z * s, f.z + mx * x * s + z * c];
  packModel(new Builder(buf, new LineBuffer(), tf), item, Math.max(MIN_SIZE, f.w), Math.max(MIN_SIZE, f.d), Math.max(0.005, f.h), base, color, pick);
}

/**
 * The moving parts of a motorised curtain or roll-down screen from a pack (#511), `open` 0 … 1 as its cover reports
 * (open = curtain drawn aside, screen rolled up). The curtain's panels gather towards both ends; the screen's cloth
 * and bar hang from the roller as far as it is down.
 */
export function pushPackMotion(buf: GeoBuffer, item: PackItem, kind: PackMotion, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror" | "variant">, base: number, open: number): void {
  const parts = packMotionParts(item, kind, open, f.variant === "left" || f.variant === "right" ? f.variant : "both");
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const mx = f.mirror ? -1 : 1;
  const tf: Tf = (x, z) => [f.x + mx * x * c - z * s, f.z + mx * x * s + z * c];
  packModel(new Builder(buf, new LineBuffer(), tf), { ...item, parts }, Math.max(MIN_SIZE, f.w), Math.max(MIN_SIZE, f.d), Math.max(0.005, f.h), base, null);
}

/** The moving parts of such an item where they are at `open` (in the item's fractions of its size). */
export function packMotionParts(item: PackItem, kind: PackMotion, open: number, side: "both" | "left" | "right" = "both"): PackItem["parts"] {
  const t = Math.min(1, Math.max(0, open));
  const moving = item.parts.filter((p) => packMovingPart(kind, p));
  let parts: PackItem["parts"];
  if (kind === "curtain") {
    // each panel keeps its width and moves outwards: fully open, the panels bunch up in the outer fifth of each half
    parts = moving.map((p) => {
      // x is the part's centre as a share of the width, from -0.5 (left end) to 0.5 (right end, seen from the front);
      // a curtain opening to one side gathers all its panels at that end (#511)
      const edge = side === "left" ? -0.5 : side === "right" ? 0.5 : Math.sign(p.x || 1) * 0.5;
      return { ...p, x: edge - (edge - p.x) * (1 - 0.8 * t) };
    });
  } else {
    // the cloth hangs from its top edge (under the roller) and is as long as the screen is down
    const top = Math.max(...moving.map((p) => p.y + p.h));
    const down = Math.max(0.02, 1 - t);
    parts = moving.map((p) => ({ ...p, y: top - (top - p.y) * down, h: p.h * down }));
  }
  return parts;
}

/** A pack lamp into the lamp buffer: glowing parts in the light's colour (`glow`), or dark when off. */
/**
 * Where a pack lamp's light comes from (#680): the centre of its glowing parts – each weighed by its size, so the
 * glass of a lantern counts more than a small indicator – turned and mirrored like the item, as plan x and z and the
 * height y. Null for an item without glowing parts.
 */
export function packGlowCentre(item: PackItem, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number): [number, number, number] | null {
  const w = Math.max(MIN_SIZE, f.w);
  const d = Math.max(MIN_SIZE, f.d);
  const h = Math.max(0.005, f.h);
  let weight = 0;
  let sx = 0;
  let sy = 0;
  let sz = 0;
  for (const p of fitParts(item, w, d, h)) {
    if (!p.glow) continue;
    // a loft's centre lies between its bottom and its top rectangle; a turned part turns around its own centre
    const x = ((p.x + (p.shape === "loft" ? (p.tx ?? p.x) : p.x)) / 2) * w;
    const z = ((p.z + (p.shape === "loft" ? (p.tz ?? p.z) : p.z)) / 2) * d;
    const y0 = p.y * h;
    const y1 = Math.min(h, (p.y + p.h) * h);
    const k = Math.max(1e-6, p.w * w * p.d * d * Math.max(0, y1 - y0));
    weight += k;
    sx += x * k;
    sy += ((y0 + y1) / 2) * k;
    sz += z * k;
  }
  if (!weight) return null;
  const x = sx / weight;
  const z = sz / weight;
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const mx = f.mirror ? -1 : 1;
  return [f.x + mx * x * c - z * s, base + sy / weight, f.z + mx * x * s + z * c];
}

/**
 * Every glowing part of a pack lamp as a point of its own (a track with three spots, a chandelier's candles): the
 * light and the cones come from each of them, not from their middle (#1034). Parts that touch each other (a shade
 * built from several pieces) count as one.
 */
export function packGlowCentres(item: PackItem, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">, base: number): [number, number, number][] {
  const w = Math.max(MIN_SIZE, f.w);
  const d = Math.max(MIN_SIZE, f.d);
  const h = Math.max(0.005, f.h);
  const pts: { x: number; y: number; z: number; r: number }[] = [];
  for (const p of fitParts(item, w, d, h)) {
    if (!p.glow) continue;
    const x = ((p.x + (p.shape === "loft" ? (p.tx ?? p.x) : p.x)) / 2) * w;
    const z = ((p.z + (p.shape === "loft" ? (p.tz ?? p.z) : p.z)) / 2) * d;
    const y0 = p.y * h;
    const y1 = Math.min(h, (p.y + p.h) * h);
    const r = Math.max(p.w * w, p.d * d) / 2;
    const near = pts.find((q) => Math.hypot(q.x - x, q.z - z) < q.r + r + 0.01);
    if (near) continue;
    pts.push({ x, y: (y0 + y1) / 2, z, r });
  }
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const mx = f.mirror ? -1 : 1;
  return pts.map((p) => [f.x + mx * p.x * c - p.z * s, base + p.y, f.z + mx * p.x * s + p.z * c]);
}

export function pushPackLamp(buf: GeoBuffer, item: PackItem, f: Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror" | "finish">, base: number, glow: number, still = false): void {
  const a = f.rotation * DEG;
  const c = Math.cos(a);
  const s = Math.sin(a);
  // mirrored: the item's own x runs the other way (the builder rewinds what needs it)
  const mx = f.mirror ? -1 : 1;
  const tf: Tf = (x, z) => [f.x + mx * x * c - z * s, f.z + mx * x * s + z * c];
  // lamps have no outlines: their edges are dropped; a ceiling fan's turning blades are drawn by pushPackSpin
  const skip = !still && (packSpinAxis(item) || hasLiveParts(item)) ? (p: PackPart) => !!p.spin || !!p.bind : null;
  // the lamp's body takes the placed item's finish like any furniture (#1175); its glowing parts keep the light's colour
  const before = finish;
  finish = finishColors(f);
  try {
    packModel(new Builder(buf, new LineBuffer(), tf), item, Math.max(MIN_SIZE, f.w), Math.max(MIN_SIZE, f.d), Math.max(0.005, f.h), base, glow, null, skip);
  } finally {
    finish = before;
  }
}

/**
 * One group of live parts of a pack item (same slot and kind, 3.4) as a model of its own around its pivot, in the
 * item's own coordinates (not turned, not mirrored, standing on y = 0): a door about its hinge edge at the front, a
 * drawer or a status light about its middle, a filling tank from its bottom. Status lights and glowing parts are
 * drawn white: the viewer tints them. Null when the item has no such parts. A placed item's finish colours its doors
 * and fronts like the rest of it; their edges go to `lines`.
 */
export function pushPackLive(buf: GeoBuffer, item: PackItem, w: number, d: number, h: number, key: string, placed: Pick<Furniture, "finish"> = {}, lines: LineBuffer = new LineBuffer()): { pivot: [number, number, number]; bind: PartBind; depth: number; rest: number } | null {
  const W = Math.max(MIN_SIZE, w);
  const D = Math.max(MIN_SIZE, d);
  const H = Math.max(0.005, h);
  const parts = fitParts(item, W, D, H).filter((p) => p.bind && liveKey(p.bind) === key);
  if (!parts.length) return null;
  const bind = parts[0].bind!;
  const x0 = Math.min(...parts.map((p) => (p.x - p.w / 2) * W));
  const x1 = Math.max(...parts.map((p) => (p.x + p.w / 2) * W));
  const y0 = Math.min(...parts.map((p) => p.y * H));
  const y1 = Math.max(...parts.map((p) => Math.min(1, p.y + p.h) * H));
  const z0 = Math.min(...parts.map((p) => (p.z - p.d / 2) * D));
  const z1 = Math.max(...parts.map((p) => (p.z + p.d / 2) * D));
  const cx = (x0 + x1) / 2;
  const cy = (y0 + y1) / 2;
  const cz = (z0 + z1) / 2;
  let pivot: [number, number, number] = [cx, cy, cz];
  if (bind.kind === "open") {
    const hinge = bind.hinge ?? "left";
    pivot = hinge === "left" ? [x0, cy, z1] : hinge === "right" ? [x1, cy, z1] : hinge === "top" ? [cx, y1, z1] : [cx, y0, z1];
  } else if (bind.kind === "level") pivot = [cx, y0, cz];
  const lit = bind.kind === "blink" || bind.kind === "glow";
  // the edges move with the part (a neon door keeps its glowing outline); a status light has none
  const b = new Builder(buf, lit ? new LineBuffer() : lines, (x, z) => [x - pivot[0], z - pivot[2]]);
  const before = finish;
  finish = finishColors(placed);
  try {
    packModel(b, { ...item, size: [W, D, H], parts: lit ? parts.map((p) => ({ ...p, glow: true })) : parts }, W, D, H, -pivot[1], lit ? 0xffffff : null);
  } finally {
    finish = before;
  }
  // its own colour: what a status light or a glowing part shows while no entity is linked
  return { pivot, bind, depth: D, rest: packColor(parts[0].color, false) ?? 0xffffff };
}

/**
 * The turning parts of a pack item (fan blades, #1084) as a model of their own around their pivot – the middle of
 * those parts – in the item's own coordinates (not turned, not mirrored, standing on y = 0). The viewer places it at
 * the pivot and turns it about `axis`. Null for an item without such parts.
 */
export function pushPackSpin(buf: GeoBuffer, item: PackItem, w: number, d: number, h: number): { pivot: [number, number, number]; axis: "y" | "z" } | null {
  const W = Math.max(MIN_SIZE, w);
  const D = Math.max(MIN_SIZE, d);
  const H = Math.max(0.005, h);
  const parts = fitParts(item, W, D, H).filter((p) => p.spin === "y" || p.spin === "z");
  if (!parts.length) return null;
  const mean = (f: (p: PackPart) => number) => parts.reduce((s, p) => s + f(p), 0) / parts.length;
  const px = mean((p) => p.x) * W;
  const pz = mean((p) => p.z) * D;
  const py = mean((p) => p.y + p.h / 2) * H;
  const b = new Builder(buf, new LineBuffer(), (x, z) => [x - px, z - pz]);
  // the parts are fitted already: drawn at the size they were fitted to
  packModel(b, { ...item, size: [W, D, H], parts }, W, D, H, -py, null);
  return { pivot: [px, py, pz], axis: parts[0].spin as "y" | "z" };
}
