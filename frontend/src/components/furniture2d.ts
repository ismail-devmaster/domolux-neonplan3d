// Top-view symbols of furniture for the 2D editor, in local metres (x across, z depth, front at +z).
// The editor places them with translate/rotate/scale; strokes keep their width on screen.

import { nothing, svg, type SVGTemplateResult } from "lit";
import { packItem, type PackItem } from "../packs.ts";
import { stairsULayout } from "../model.ts";

type Part = SVGTemplateResult;

const rect = (x0: number, z0: number, x1: number, z1: number, cls = "") => svg`<rect class=${cls} x=${Math.min(x0, x1)} y=${Math.min(z0, z1)} width=${Math.abs(x1 - x0)} height=${Math.abs(z1 - z0)} />`;
const line = (x0: number, z0: number, x1: number, z1: number, cls = "") => svg`<line class=${cls} x1=${x0} y1=${z0} x2=${x1} y2=${z1} />`;
const circle = (x: number, z: number, r: number, cls = "") => svg`<circle class=${cls} cx=${x} cy=${z} r=${r} />`;
const ellipse = (x: number, z: number, rx: number, rz: number, cls = "") => svg`<ellipse class=${cls} cx=${x} cy=${z} rx=${rx} ry=${rz} />`;

/** Door or drawer divisions along the front edge. */
function fronts(w: number, d: number, n: number): Part[] {
  const out: Part[] = [];
  for (let i = 1; i < n; i++) {
    const x = -w / 2 + (w / n) * i;
    out.push(line(x, d / 2, x, d / 2 - Math.min(0.12, d * 0.3)));
  }
  return out;
}

function seating(w: number, d: number, seats: number, arms: boolean): Part[] {
  const back = Math.min(0.24, d * 0.28);
  const arm = arms ? Math.min(0.2, w * 0.12) : 0;
  const out: Part[] = [rect(-w / 2, -d / 2, w / 2, -d / 2 + back, "fp3d-sym-fill")];
  if (arms) out.push(rect(-w / 2, -d / 2, -w / 2 + arm, d / 2, "fp3d-sym-fill"), rect(w / 2 - arm, -d / 2, w / 2, d / 2, "fp3d-sym-fill"));
  const inner = w - 2 * arm;
  for (let i = 1; i < seats; i++) {
    const x = -w / 2 + arm + (inner / seats) * i;
    out.push(line(x, -d / 2 + back, x, d / 2 - 0.02));
  }
  if (arms && arm > 0.08) {
    const pillW = Math.min(0.14, arm * 0.9);
    const pillD = Math.min(0.28, (d - back) * 0.45);
    out.push(
      rect(-w / 2 + arm + 0.02, -d / 2 + back + 0.04, -w / 2 + arm + 0.02 + pillW, -d / 2 + back + 0.04 + pillD),
      rect(w / 2 - arm - 0.02 - pillW, -d / 2 + back + 0.04, w / 2 - arm - 0.02, -d / 2 + back + 0.04 + pillD),
    );
  }
  return out;
}

/** Corner sofa from above: backs along the rear and the left side (U: the right side too), arms and seat divisions. */
function cornerSeating(w: number, d: number, u: boolean): Part[] {
  const x0 = -w / 2;
  const x1 = w / 2;
  const z0 = -d / 2;
  const z1 = d / 2;
  const dep = Math.max(0.3, Math.min(0.95, d * 0.5, w * (u ? 0.34 : 0.45)));
  const back = Math.min(0.24, dep * 0.28);
  const arm = Math.min(0.2, dep * 0.24);
  const out: Part[] = [rect(x0, z0, x1, z0 + back, "fp3d-sym-fill"), rect(x0, z0 + back, x0 + back, z1, "fp3d-sym-fill"), rect(x0 + back, z1 - arm, x0 + dep, z1, "fp3d-sym-fill")];
  if (u) out.push(rect(x1 - back, z0 + back, x1, z1, "fp3d-sym-fill"), rect(x1 - dep, z1 - arm, x1 - back, z1, "fp3d-sym-fill"));
  else out.push(rect(x1 - arm, z0 + back, x1, z0 + dep, "fp3d-sym-fill"));
  // the seat edge of the L (or U) and the divisions between the seats
  const rb = u ? x1 - dep : x1 - arm;
  out.push(line(x0 + dep, z1 - arm, x0 + dep, z0 + dep), line(x0 + dep, z0 + dep, rb, z0 + dep));
  if (u) out.push(line(x1 - dep, z0 + dep, x1 - dep, z1 - arm));
  const ra = x0 + back;
  const rx = u ? x1 - back : x1 - arm;
  const nx = Math.max(1, Math.round((rx - ra) / 0.62));
  for (let i = 1; i < nx; i++) out.push(line(ra + ((rx - ra) / nx) * i, z0 + back, ra + ((rx - ra) / nx) * i, z0 + dep));
  const za = z0 + dep;
  const zb = z1 - arm;
  const nz = zb - za < 0.2 ? 0 : Math.max(1, Math.round((zb - za) / 0.62));
  for (let i = 0; i < nz; i++) {
    const z = za + ((zb - za) / nz) * i;
    out.push(line(x0 + back, z, x0 + dep, z));
    if (u) out.push(line(x1 - dep, z, x1 - back, z));
  }
  return out;
}

/** Symbol parts for a furniture type of size w × d (metres). */
export function furnitureSymbol(type: string, w: number, d: number): Part[] | typeof nothing {
  switch (type) {
    case "sofa":
      return seating(w, d, Math.max(1, Math.round((w - 0.4) / 0.62)), true);
    case "armchair":
      return seating(w, d, 1, true);
    case "sofa_l":
      return cornerSeating(w, d, false);
    case "sofa_u":
      return cornerSeating(w, d, true);
    case "bench":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.08, "fp3d-sym-fill")];
    case "corner_bench": {
      const depth = Math.min(0.5, d * 0.4);
      return [
        rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.08, "fp3d-sym-fill"),
        rect(-w / 2, -d / 2, -w / 2 + 0.08, d / 2, "fp3d-sym-fill"),
        line(-w / 2 + depth, -d / 2 + depth, w / 2, -d / 2 + depth),
        line(-w / 2 + depth, -d / 2 + depth, -w / 2 + depth, d / 2),
      ];
    }
    case "chair":
      return [
        rect(-w / 2 + 0.02, -d / 2, w / 2 - 0.02, -d / 2 + 0.06, "fp3d-sym-fill"),
        rect(-w / 2 + 0.04, -d / 2 + 0.08, w / 2 - 0.04, d / 2 - 0.03),
      ];
    case "office_chair":
      return [
        circle(0, 0.03, Math.min(w, d) * 0.36),
        rect(-w * 0.35, -d / 2 + 0.02, w * 0.35, -d / 2 + 0.1, "fp3d-sym-fill"),
        line(-w * 0.38, 0, -w * 0.28, 0, "fp3d-sym-strong"),
        line(w * 0.28, 0, w * 0.38, 0, "fp3d-sym-strong"),
      ];
    case "bar_stool": {
      const r = Math.min(w, d) * 0.42;
      return [
        circle(0, 0, r),
        circle(0, 0, r * 0.65),
        line(-r * 0.7, -r * 0.5, r * 0.7, -r * 0.5, "fp3d-sym-strong"),
      ];
    }
    case "table_round": {
      const r = Math.min(w, d) * 0.44;
      return [circle(0, 0, r), circle(0, 0, r * 0.92), circle(0, 0, r * 0.28, "fp3d-sym-fill")];
    }
    case "stool":
      return [rect(-w / 2 + 0.04, -d / 2 + 0.04, w / 2 - 0.04, d / 2 - 0.04)];
    case "table": {
      return [
        rect(-w / 2 + 0.02, -d / 2 + 0.02, w / 2 - 0.02, d / 2 - 0.02),
        rect(-w / 2 + 0.06, -d / 2 + 0.06, w / 2 - 0.06, d / 2 - 0.06),
        line(-w * 0.36, -d * 0.35, -w * 0.36, d * 0.35, "fp3d-sym-strong"),
        line(w * 0.36, -d * 0.35, w * 0.36, d * 0.35, "fp3d-sym-strong"),
      ];
    }
    case "coffee_table":
      return [
        rect(-w / 2 + 0.04, -d / 2 + 0.04, w / 2 - 0.04, d / 2 - 0.04),
        rect(-w * 0.38, -d * 0.35, w * 0.42, d * 0.35),
      ];
    case "desk": {
      return [
        rect(-w / 2 + 0.03, -d / 2 + 0.03, w / 2 - 0.03, d / 2 - 0.03),
        rect(w * 0.16, -d / 2 + 0.05, w / 2 - 0.05, d / 2 - 0.05, "fp3d-sym-fill"),
        rect(-w * 0.28, -d * 0.12, w * 0.12, d * 0.32),
        line(-0.35, -d / 2 + 0.12, 0.35, -d / 2 + 0.12, "fp3d-sym-strong"),
      ];
    }
    case "bed":
    case "bunk_bed": {
      const pillows = w > 1.2 ? 2 : 1;
      const pw = (w - 0.24) / pillows;
      const out: Part[] = [
        rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.08, "fp3d-sym-fill"),
        rect(-w / 2 + 0.05, -d / 2 + 0.08, w / 2 - 0.05, d / 2 - 0.03),
        line(-w / 2 + 0.05, d * 0.14, w / 2 - 0.05, d * 0.14, "fp3d-sym-strong"),
      ];
      for (let i = 0; i < pillows; i++) {
        out.push(
          rect(-w / 2 + 0.12 + pw * i, -d / 2 + 0.11, -w / 2 + 0.06 + pw * (i + 1), -d / 2 + 0.11 + Math.min(0.38, d * 0.17)),
          rect(-w / 2 + 0.15 + pw * i, -d / 2 + 0.26, -w / 2 + 0.03 + pw * (i + 1), -d / 2 + 0.26 + Math.min(0.24, d * 0.12)),
        );
      }
      return out;
    }
    case "nightstand":
    case "wardrobe":
    case "dresser":
    case "sideboard":
    case "tall_cabinet":
    case "kitchen":
    case "kitchen_wall":
    case "kitchen_tall":
    case "shelf":
      return fronts(w, d, type === "nightstand" || type === "tall_cabinet" || type === "kitchen_tall" ? 1 : Math.max(2, Math.round(w / 0.5)));
    case "coat_rack":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.03, "fp3d-sym-fill"), ...fronts(w, d, Math.max(2, Math.round(w / 0.5)))];
    case "island":
      // cabinets on the back side, overhanging worktop on the front
      return [line(-w / 2, d / 2 - 0.3, w / 2, d / 2 - 0.3)];
    case "fridge":
      return [line(-w / 2 + 0.06, d / 2 - 0.04, w / 2 - 0.06, d / 2 - 0.04, "fp3d-sym-strong")];
    case "stove": {
      const r = Math.min(w, d) * 0.14;
      return [circle(-w * 0.22, -d * 0.2, r), circle(w * 0.22, -d * 0.2, r * 0.8), circle(-w * 0.22, d * 0.2, r * 0.8), circle(w * 0.22, d * 0.2, r)];
    }
    case "sink": {
      const bw = Math.min(0.5, w - 0.2);
      return [rect(-bw / 2, -d / 2 + 0.1, bw / 2, d / 2 - 0.08), circle(0, -d / 2 + 0.06, 0.025, "fp3d-sym-fill")];
    }
    case "dishwasher":
      return [line(-w / 2 + 0.08, d / 2 - 0.05, w / 2 - 0.08, d / 2 - 0.05, "fp3d-sym-strong")];
    case "washer":
    case "dryer":
      return [circle(0, 0.05, Math.min(w, d) * 0.3), line(-w / 2, -d / 2 + 0.1, w / 2, -d / 2 + 0.1)];
    case "bathtub":
      return [
        rect(-w / 2 + 0.04, -d / 2 + 0.04, w / 2 - 0.04, d / 2 - 0.04),
        ellipse(0, 0, w * 0.40, d * 0.38),
        circle(0, 0, 0.025, "fp3d-sym-fill"),
        circle(0, -d / 2 + 0.06, 0.03, "fp3d-sym-fill"),
      ];
    case "shower":
      return [
        rect(-w / 2 + 0.02, -d / 2 + 0.02, w / 2 - 0.02, d / 2 - 0.02),
        rect(-w * 0.35, -d / 2 + 0.05, w * 0.35, -d / 2 + 0.10, "fp3d-sym-fill"),
        line(-w / 2 + 0.02, d * 0.12, w * 0.24, d * 0.12, "fp3d-sym-strong"),
        circle(0, -d * 0.05, 0.07),
      ];
    case "wc":
      return [
        rect(-w / 2, -d / 2, w / 2, -d / 2 + Math.min(0.18, d * 0.3), "fp3d-sym-fill"),
        rect(-0.08, -d / 2 + 0.03, 0.08, -d / 2 + 0.08),
        ellipse(0, d * 0.12, w * 0.36, d * 0.30),
        ellipse(0, d * 0.14, w * 0.25, d * 0.20),
      ];
    case "washbasin":
      return [
        rect(-w / 2 + 0.02, -d / 2 + 0.02, w / 2 - 0.02, d / 2 - 0.02),
        ellipse(0, 0.04, w * 0.35, d * 0.32),
        circle(0, 0.04, 0.025, "fp3d-sym-fill"),
        circle(0, -d / 2 + 0.08, 0.02, "fp3d-sym-fill"),
      ];
    case "tv_board":
      return [line(-Math.min(w * 0.4, 0.72), -d / 2 + 0.14, Math.min(w * 0.4, 0.72), -d / 2 + 0.14, "fp3d-sym-strong"), ...fronts(w, d, Math.max(2, Math.round(w / 0.6)))];
    case "tv_wall":
      return [line(-w / 2, 0, w / 2, 0, "fp3d-sym-strong")];
    case "lamp_downlight":
    case "lamp_spot":
      return [circle(0, 0, Math.min(w, d) * 0.45, "fp3d-sym-fill"), circle(0, 0, Math.min(w, d) * 1.4)];
    case "lamp_bollard":
    case "lamp_garden":
      return [circle(0, 0, Math.min(w, d) * 0.5, "fp3d-sym-fill"), circle(0, 0, Math.min(w, d) * 1.6)];
    case "parking":
      return [
        rect(-w / 2 + 0.05, -d / 2 + 0.05, w / 2 - 0.05, d / 2 - 0.05),
        rect(-w / 2 + 0.12, -d / 2 + 0.12, w / 2 - 0.12, d / 2 - 0.12),
        rect(-w * 0.36, -d / 2 + 0.45, w * 0.36, -d / 2 + 0.60, "fp3d-sym-fill"),
        line(-w * 0.16, d / 2 - 0.55, 0, d / 2 - 0.25, "fp3d-sym-strong"),
        line(0, d / 2 - 0.25, w * 0.16, d / 2 - 0.55, "fp3d-sym-strong"),
      ];
    case "robot_vacuum":
      return [
        rect(-w * 0.40, -d / 2, w * 0.40, -d / 2 + d * 0.36, "fp3d-sym-fill"),
        line(0, -d / 2, 0, -d / 2 + d * 0.36),
        rect(-w * 0.42, -d / 2 + d * 0.36, w * 0.42, 0.08),
        circle(0, d * 0.20, Math.min(w, d) * 0.44),
        circle(0, d * 0.16, Math.min(w, d) * 0.14, "fp3d-sym-fill"),
      ];
    case "radiator": {
      const out: Part[] = [
        rect(-w / 2, -d / 2, w / 2, d / 2),
        circle(-w / 2 + 0.03, 0, 0.035, "fp3d-sym-fill"),
      ];
      const n = Math.max(3, Math.round(w / 0.08));
      for (let i = 1; i < n; i++) out.push(line(-w / 2 + (w / n) * i, -d / 2, -w / 2 + (w / n) * i, d / 2));
      return out;
    }
    case "ac_unit":
      return [
        rect(-w / 2 + 0.02, -d / 2, w / 2 - 0.02, d / 2, "fp3d-sym-fill"),
        line(-w * 0.44, d / 2 - 0.04, w * 0.44, d / 2 - 0.04, "fp3d-sym-strong"),
        circle(w * 0.35, d / 2 - 0.04, 0.015),
      ];
    case "awning":
      return [
        rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.18, "fp3d-sym-fill"),
        rect(-w / 2 + 0.02, -d / 2 + 0.18, w / 2 - 0.02, d / 2),
        line(-w * 0.4, -d / 2 + 0.2, -w * 0.1, d * 0.15),
        line(-w * 0.1, d * 0.15, -w * 0.35, d / 2 - 0.05),
        line(w * 0.4, -d / 2 + 0.2, w * 0.1, d * 0.15),
        line(w * 0.1, d * 0.15, w * 0.35, d / 2 - 0.05),
      ];
    case "inverter":
      return [
        rect(-w / 2 + 0.02, -d / 2, w / 2 - 0.02, d / 2, "fp3d-sym-fill"),
        rect(-0.09, d / 2 - 0.03, 0.09, d / 2),
        line(-w * 0.38, -d / 2 + 0.03, w * 0.38, -d / 2 + 0.03),
      ];
    case "home_battery":
      return [
        rect(-w / 2 + 0.02, -d / 2 + 0.02, w / 2 - 0.02, d / 2 - 0.02, "fp3d-sym-fill"),
        line(-w * 0.28, d / 2 - 0.02, w * 0.28, d / 2 - 0.02, "fp3d-sym-strong"),
      ];
    case "wallbox":
      return [
        rect(-w / 2 + 0.02, -d / 2, w / 2 - 0.02, d / 2, "fp3d-sym-fill"),
        circle(0, 0, Math.min(w, d) * 0.28),
        circle(w / 2 - 0.02, 0, 0.035),
      ];
    case "grid_point":
      return [
        rect(-w / 2 + 0.02, -d / 2 + 0.02, w / 2 - 0.02, d / 2 - 0.02, "fp3d-sym-fill"),
        line(-w / 2, -d / 2, w / 2, -d / 2, "fp3d-sym-strong"),
      ];
    case "pool_pump":
      return [
        rect(-w * 0.45, -d * 0.35, 0.05, d * 0.35, "fp3d-sym-fill"),
        circle(w * 0.26, 0, d * 0.36),
      ];
    case "pool_filter":
      return [
        circle(0, 0, Math.min(w, d) * 0.46),
        circle(0, 0, Math.min(w, d) * 0.22, "fp3d-sym-fill"),
        line(0, 0, 0, -Math.min(w, d) * 0.28, "fp3d-sym-strong"),
      ];
    case "pool_heat_pump":
      return [
        rect(-w / 2 + 0.03, -d / 2 + 0.03, w / 2 - 0.03, d / 2 - 0.03),
        circle(-w * 0.16, 0, d * 0.38),
        rect(w * 0.28, -d * 0.32, w * 0.44, -d * 0.08, "fp3d-sym-fill"),
      ];
    case "pool_dosing":
      return [
        rect(-w / 2 + 0.02, -d / 2, w / 2 - 0.02, d / 2, "fp3d-sym-fill"),
        circle(-w * 0.22, d * 0.08, d * 0.22),
        circle(w * 0.22, d * 0.08, d * 0.22),
      ];
    case "pool_valve":
      return [
        line(-w / 2, 0, w / 2, 0, "fp3d-sym-strong"),
        rect(-w * 0.35, -d * 0.35, -w * 0.15, d * 0.35),
        rect(w * 0.15, -d * 0.35, w * 0.35, d * 0.35),
        line(0, -d * 0.45, 0, d * 0.45, "fp3d-sym-strong"),
      ];
    case "waste_bin":
      return [
        rect(-w / 2 + 0.02, -d / 2 + 0.02, w / 2 - 0.02, d / 2 - 0.02),
        line(0, -d / 2 + 0.02, 0, d / 2 - 0.02),
        line(-w * 0.35, d / 2 - 0.04, -w * 0.1, d / 2 - 0.04, "fp3d-sym-strong"),
        line(w * 0.1, d / 2 - 0.04, w * 0.35, d / 2 - 0.04, "fp3d-sym-strong"),
      ];
    case "mailbox":
      return [
        rect(-w / 2 + 0.02, -d / 2, w / 2 - 0.02, d / 2, "fp3d-sym-fill"),
        line(-w * 0.38, 0, w * 0.38, 0, "fp3d-sym-strong"),
      ];
    case "wifi_ap": {
      const r = Math.min(w, d) * 0.45;
      return [circle(0, 0, r), circle(0, 0, r * 0.65), circle(0, 0, 0.02, "fp3d-sym-fill")];
    }
    case "water_heater": {
      const r = Math.min(w, d) * 0.46;
      return [circle(0, 0, r), circle(0, 0, r * 0.82, "fp3d-sym-fill")];
    }
    case "neon_sign":
      return [line(-w / 2, 0, w / 2, 0, "fp3d-sym-strong")];
    case "lamp_fan": {
      // a ceiling fan from above: its hub and four blades
      const r = Math.min(w, d) / 2;
      const out: Part[] = [circle(0, 0, 0.12, "fp3d-sym-fill"), circle(0, 0, r)];
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
        out.push(line(Math.cos(a) * 0.13, Math.sin(a) * 0.13, Math.cos(a) * r * 0.95, Math.sin(a) * r * 0.95, "fp3d-sym-strong"));
      }
      return out;
    }
    case "lamp_panel":
      return [rect(-w / 2 + 0.03, -d / 2 + 0.03, w / 2 - 0.03, d / 2 - 0.03, "fp3d-sym-fill")];
    case "lamp_uplight":
    case "lamp_ceiling":
    case "lamp_pendant":
    case "lamp_floor":
    case "lamp_table": {
      // a lamp from above: the shade, and short rays for hanging ones
      const r = Math.min(w, d) / 2;
      const out: Part[] = [circle(0, 0, r * 0.9, "fp3d-sym-fill"), circle(0, 0, r * 0.3)];
      if (type === "lamp_ceiling" || type === "lamp_pendant") {
        for (let i = 0; i < 8; i++) {
          const a = (i / 8) * Math.PI * 2;
          out.push(line(Math.cos(a) * r * 1.05, Math.sin(a) * r * 1.05, Math.cos(a) * r * 1.35, Math.sin(a) * r * 1.35));
        }
      }
      return out;
    }
    case "lamp_wall":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.03, "fp3d-sym-fill"), ellipse(0, 0.01, w * 0.4, d * 0.4)];
    case "led_strip":
      return [line(-w / 2, 0, w / 2, 0, "fp3d-sym-strong")];
    case "wall_switch":
    case "wall_socket":
      // the frame on the wall and a ring around it: a few centimetres are hard to find in the plan otherwise
      return [rect(-w / 2, -d / 2, w / 2, d / 2, "fp3d-sym-fill"), ellipse(0, d / 2, w / 2 + 0.06, 0.09)];
    case "plant":
      return [circle(0, 0, Math.min(w, d) * 0.46), circle(0, 0, Math.min(w, d) * 0.25)];
    case "rug":
      return [rect(-w / 2 + 0.1, -d / 2 + 0.1, w / 2 - 0.1, d / 2 - 0.1)];
    case "stairs": {
      // steps and an arrow pointing up the stair (towards the back)
      const n = Math.max(3, Math.round(d / 0.26));
      const out: Part[] = [];
      for (let i = 1; i < n; i++) out.push(line(-w / 2, d / 2 - (d / n) * i, w / 2, d / 2 - (d / n) * i));
      out.push(line(0, d / 2 - 0.1, 0, -d / 2 + 0.25, "fp3d-sym-strong"), line(-0.15, -d / 2 + 0.45, 0, -d / 2 + 0.25, "fp3d-sym-strong"), line(0.15, -d / 2 + 0.45, 0, -d / 2 + 0.25, "fp3d-sym-strong"));
      return out;
    }
    case "stairs_u": {
      // the treads of both flights, the landing's edge and an arrow up the first flight, round, and up the second
      const { steps1, steps2, fw, landing, run } = stairsULayout(w, d, 2.75);
      const zl = -d / 2 + landing;
      const xa = -w / 2 + fw;
      const xb = w / 2 - fw;
      const out: Part[] = [line(-w / 2, zl, xa, zl), line(xa, zl, xa, d / 2), line(xb, zl, xb, d / 2)];
      for (let i = 1; i < steps1; i++) out.push(line(-w / 2, d / 2 - run * i, xa, d / 2 - run * i));
      for (let j = 1; j <= steps2; j++) out.push(line(xb, zl + run * j, w / 2, zl + run * j));
      const ca = (-w / 2 + xa) / 2;
      const cb = (xb + w / 2) / 2;
      const zm = -d / 2 + landing / 2;
      const tip = d / 2 - 0.15;
      out.push(
        line(ca, d / 2 - 0.1, ca, zm, "fp3d-sym-strong"),
        line(ca, zm, cb, zm, "fp3d-sym-strong"),
        line(cb, zm, cb, tip, "fp3d-sym-strong"),
        line(cb - 0.15, tip - 0.2, cb, tip, "fp3d-sym-strong"),
        line(cb + 0.15, tip - 0.2, cb, tip, "fp3d-sym-strong"),
      );
      return out;
    }
    default: {
      const item = packItem(type);
      return item ? packSymbol(item, w, d) : nothing;
    }
  }
}

/** Plan symbol of a pack item: its own symbol, or its parts seen from above (except the full-size base). */
function packSymbol(item: PackItem, w: number, d: number): Part[] {
  if (item.symbol?.length) {
    return item.symbol.map((s) =>
      s.shape === "rect"
        ? rect((s.x - s.w / 2) * w, (s.z - s.d / 2) * d, (s.x + s.w / 2) * w, (s.z + s.d / 2) * d, s.fill ? "fp3d-sym-fill" : "")
        : s.shape === "circle"
          ? circle(s.x * w, s.z * d, s.r * Math.min(w, d))
          : line(s.x1 * w, s.z1 * d, s.x2 * w, s.z2 * d),
    );
  }
  return item.parts
    .filter((p) => p.w < 0.98 || p.d < 0.98)
    .map((p) =>
      p.shape === "cyl" && (p.axis ?? "y") === "y"
        ? circle(p.x * w, p.z * d, Math.min(p.w * w, p.d * d) / 2)
        : rect((p.x - p.w / 2) * w, (p.z - p.d / 2) * d, (p.x + p.w / 2) * w, (p.z + p.d / 2) * d),
    );
}
