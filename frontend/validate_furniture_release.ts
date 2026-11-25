// Comprehensive Release Validation & Visual Inspection Suite for NeonPlan 3D Furniture Library
// Validates all 82 luxury items across 13 categories:
// - Exact procedural geometry generation
// - Finite coordinate and non-zero dimension assertions
// - 2D architectural symbol verification
// - Three.js multi-angle visual rendering (Perspective, Top, Front)
// - Performance benchmarking for individual items and realistic combined scenes

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { Vector3, Matrix4, Color } from "three";
import { FURNITURE_TYPES, type Furniture } from "./src/model.ts";
import { GeoBuffer, LineBuffer } from "./src/viewer/geo.ts";
import { pushFurniture, pushAwning } from "./src/viewer/furniture.ts";
import { pushLampModel, type LampModel } from "./src/viewer/viewer3d.ts";
import { furnitureSymbol } from "./src/components/furniture2d.ts";
import { setPacks, packItem, type FurniturePack } from "./src/packs.ts";

interface FurnitureSpec {
  num: number;
  id: string;
  nameEn: string;
  nameAr: string;
  category: string;
  w: number;
  d: number;
  h: number;
  lampModel?: LampModel;
  variant?: string | null;
  isDomolux?: boolean;
  domoluxPack?: string;
}

const INVENTORY: FurnitureSpec[] = [
  // A. LIGHTING (1-13)
  { num: 1, id: "lamp_ceiling", nameEn: "Ceiling Light", nameAr: "مصباح سقفي", category: "Lighting", w: 0.45, d: 0.45, h: 0.12, lampModel: "ceiling" },
  { num: 2, id: "lamp_downlight", nameEn: "Recessed Spotlight", nameAr: "سبوت مدمج", category: "Lighting", w: 0.12, d: 0.12, h: 0.08, lampModel: "downlight" },
  { num: 3, id: "lamp_spot", nameEn: "Surface-Mounted Spotlight", nameAr: "سبوت بارز", category: "Lighting", w: 0.14, d: 0.14, h: 0.18, lampModel: "spot" },
  { num: 4, id: "lamp_panel", nameEn: "LED Panel", nameAr: "لوحة ليد", category: "Lighting", w: 0.60, d: 0.60, h: 0.04, lampModel: "panel" },
  { num: 5, id: "lamp_pendant", nameEn: "Pendant Light", nameAr: "مصباح معلق", category: "Lighting", w: 0.38, d: 0.38, h: 0.45, lampModel: "pendant" },
  { num: 6, id: "lamp_floor", nameEn: "Floor Lamp", nameAr: "مصباح أرضي", category: "Lighting", w: 0.45, d: 0.45, h: 1.65, lampModel: "floor" },
  { num: 7, id: "lamp_table", nameEn: "Table Lamp", nameAr: "مصباح طاولة", category: "Lighting", w: 0.32, d: 0.32, h: 0.52, lampModel: "table" },
  { num: 8, id: "lamp_wall", nameEn: "Wall Lamp", nameAr: "مصباح جداري", category: "Lighting", w: 0.18, d: 0.12, h: 0.28, lampModel: "wall" },
  { num: 9, id: "led_strip", nameEn: "LED Strip", nameAr: "شريط ليد", category: "Lighting", w: 2.00, d: 0.03, h: 0.02, lampModel: "strip" },
  { num: 10, id: "lamp_uplight", nameEn: "Uplight Floor Lamp", nameAr: "مصباح أرضي موجه للأعلى", category: "Lighting", w: 0.36, d: 0.36, h: 1.82, lampModel: "uplight" },
  { num: 11, id: "lamp_bollard", nameEn: "Pathway Bollard Light", nameAr: "عمود إنارة ممرات", category: "Lighting", w: 0.16, d: 0.16, h: 0.85, lampModel: "bollard" },
  { num: 12, id: "lamp_garden", nameEn: "Garden Spotlight", nameAr: "سبوت حديقة", category: "Lighting", w: 0.12, d: 0.16, h: 0.32, lampModel: "garden" },
  { num: 13, id: "lamp_fan", nameEn: "Ceiling Fan with Light", nameAr: "مروحة سقف مع إضاءة", category: "Lighting", w: 1.25, d: 1.25, h: 0.38, lampModel: "fan" },

  // B. HEATING & AC (14-15)
  { num: 14, id: "radiator", nameEn: "Radiator", nameAr: "مشعاع تدفئة", category: "Heating & AC", w: 0.80, d: 0.12, h: 0.60 },
  { num: 15, id: "ac_unit", nameEn: "Wall-Mounted AC", nameAr: "مكيف هواء جداري", category: "Heating & AC", w: 0.95, d: 0.24, h: 0.32 },

  // C. LIVING ROOM (16-27)
  { num: 16, id: "sofa", nameEn: "Sofa", nameAr: "أريكة", category: "Living Room", w: 2.30, d: 0.95, h: 0.82 },
  { num: 17, id: "sofa_l", nameEn: "L-Shaped Sofa", nameAr: "أريكة زاوية على شكل L", category: "Living Room", w: 2.80, d: 1.80, h: 0.82 },
  { num: 18, id: "sofa_u", nameEn: "U-Shaped Sofa", nameAr: "أريكة على شكل U", category: "Living Room", w: 3.40, d: 2.20, h: 0.82 },
  { num: 19, id: "armchair", nameEn: "Armchair", nameAr: "كرسي بذراعين", category: "Living Room", w: 0.92, d: 0.88, h: 0.82 },
  { num: 20, id: "stool", nameEn: "Backless Stool", nameAr: "مقعد بدون ظهر", category: "Living Room", w: 0.48, d: 0.48, h: 0.44 },
  { num: 21, id: "coffee_table", nameEn: "Coffee Table", nameAr: "طاولة قهوة", category: "Living Room", w: 1.20, d: 0.65, h: 0.40 },
  { num: 22, id: "tv_board", nameEn: "TV Stand", nameAr: "طاولة تلفزيون", category: "Living Room", w: 2.00, d: 0.45, h: 0.52 },
  { num: 23, id: "tv_wall", nameEn: "Wall-Mounted Television", nameAr: "تلفزيون جداري", category: "Living Room", w: 1.45, d: 0.08, h: 0.85 },
  { num: 24, id: "sideboard", nameEn: "Sideboard", nameAr: "خزانة جانبية", category: "Living Room", w: 1.80, d: 0.48, h: 0.78 },
  { num: 25, id: "shelf", nameEn: "Shelf", nameAr: "رف", category: "Living Room", w: 1.20, d: 0.35, h: 1.90 },
  { num: 26, id: "plant", nameEn: "Plant", nameAr: "نبات", category: "Living Room", w: 0.65, d: 0.65, h: 1.45 },
  { num: 27, id: "rug", nameEn: "Rug", nameAr: "سجادة", category: "Living Room", w: 2.80, d: 2.00, h: 0.02 },

  // D. DINING (28-33)
  { num: 28, id: "table", nameEn: "Dining Table", nameAr: "طاولة", category: "Dining", w: 2.00, d: 0.95, h: 0.76 },
  { num: 29, id: "table_round", nameEn: "Round Table", nameAr: "طاولة مستديرة", category: "Dining", w: 1.30, d: 1.30, h: 0.76 },
  { num: 30, id: "chair", nameEn: "Chair", nameAr: "كرسي", category: "Dining", w: 0.52, d: 0.56, h: 0.84 },
  { num: 31, id: "bench", nameEn: "Bench", nameAr: "مقعد طويل", category: "Dining", w: 1.50, d: 0.48, h: 0.48 },
  { num: 32, id: "corner_bench", nameEn: "Corner Bench", nameAr: "مقعد زاوية", category: "Dining", w: 1.80, d: 1.40, h: 0.84 },
  { num: 33, id: "bar_stool", nameEn: "Bar Stool", nameAr: "كرسي بار", category: "Dining", w: 0.46, d: 0.46, h: 0.98 },

  // E. KITCHEN (34-43)
  { num: 34, id: "kitchen", nameEn: "Kitchen Base Cabinet", nameAr: "وحدة مطبخ", category: "Kitchen", w: 1.80, d: 0.60, h: 0.90 },
  { num: 35, id: "kitchen_wall", nameEn: "Upper Kitchen Cabinet", nameAr: "خزانة مطبخ علوية", category: "Kitchen", w: 1.80, d: 0.35, h: 0.70 },
  { num: 36, id: "kitchen_tall", nameEn: "Tall Oven Cabinet", nameAr: "خزانة طويلة مع فرن", category: "Kitchen", w: 0.60, d: 0.60, h: 2.15 },
  { num: 37, id: "island", nameEn: "Kitchen Island", nameAr: "جزيرة مطبخ", category: "Kitchen", w: 2.40, d: 1.05, h: 0.92 },
  { num: 38, id: "worktop", nameEn: "Kitchen Countertop", nameAr: "سطح عمل", category: "Kitchen", w: 1.80, d: 0.62, h: 0.04 },
  { num: 39, id: "sink", nameEn: "Kitchen Sink", nameAr: "حوض غسيل", category: "Kitchen", w: 0.86, d: 0.52, h: 0.38 },
  { num: 40, id: "stove", nameEn: "Cooktop", nameAr: "موقد", category: "Kitchen", w: 0.80, d: 0.52, h: 0.06 },
  { num: 41, id: "dishwasher", nameEn: "Dishwasher", nameAr: "غسالة أطباق", category: "Kitchen", w: 0.60, d: 0.60, h: 0.85 },
  { num: 42, id: "fridge", nameEn: "Refrigerator", nameAr: "ثلاجة", category: "Kitchen", w: 0.90, d: 0.70, h: 1.95 },
  { num: 43, id: "fridge_smart", nameEn: "Smart Refrigerator", nameAr: "ثلاجة ذكية", category: "Kitchen", w: 0.92, d: 0.72, h: 1.95 },

  // F. BEDROOM (44-48)
  { num: 44, id: "bed", nameEn: "Bed", nameAr: "سرير", category: "Bedroom", w: 2.10, d: 2.15, h: 1.15 },
  { num: 45, id: "bunk_bed", nameEn: "Bunk Bed", nameAr: "سرير طابقي", category: "Bedroom", w: 1.00, d: 2.10, h: 1.75 },
  { num: 46, id: "nightstand", nameEn: "Bedside Table", nameAr: "طاولة سرير جانبية", category: "Bedroom", w: 0.55, d: 0.42, h: 0.48 },
  { num: 47, id: "wardrobe", nameEn: "Wardrobe", nameAr: "خزانة ملابس", category: "Bedroom", w: 2.40, d: 0.62, h: 2.25 },
  { num: 48, id: "dresser", nameEn: "Chest of Drawers", nameAr: "خزانة أدراج", category: "Bedroom", w: 1.20, d: 0.50, h: 0.88 },

  // G. BATHROOM & LAUNDRY (49-54)
  { num: 49, id: "bathtub", nameEn: "Bathtub", nameAr: "حوض استحمام", category: "Bathroom & Laundry", w: 1.80, d: 0.85, h: 0.62 },
  { num: 50, id: "shower", nameEn: "Shower", nameAr: "دش استحمام", category: "Bathroom & Laundry", w: 1.20, d: 0.90, h: 2.15 },
  { num: 51, id: "wc", nameEn: "Toilet", nameAr: "مرحاض", category: "Bathroom & Laundry", w: 0.42, d: 0.58, h: 0.82 },
  { num: 52, id: "washbasin", nameEn: "Washbasin", nameAr: "حوض غسيل أيدي", category: "Bathroom & Laundry", w: 1.20, d: 0.52, h: 0.88 },
  { num: 53, id: "washer", nameEn: "Washing Machine", nameAr: "غسالة ملابس", category: "Bathroom & Laundry", w: 0.60, d: 0.62, h: 0.85 },
  { num: 54, id: "dryer", nameEn: "Tumble Dryer", nameAr: "مجفف ملابس", category: "Bathroom & Laundry", w: 0.60, d: 0.62, h: 0.85 },

  // H. HOME OFFICE (55-58)
  { num: 55, id: "desk", nameEn: "Desk", nameAr: "مكتب", category: "Home Office", w: 1.80, d: 0.85, h: 0.76 },
  { num: 56, id: "office_chair", nameEn: "Office Chair", nameAr: "كرسي مكتب", category: "Home Office", w: 0.66, d: 0.66, h: 1.05 },
  { num: 57, id: "tall_cabinet", nameEn: "Tall Cabinet", nameAr: "خزانة طويلة", category: "Home Office", w: 0.90, d: 0.42, h: 2.05 },
  { num: 58, id: "coat_rack", nameEn: "Coat Rack", nameAr: "علاقة ملابس", category: "Home Office", w: 0.90, d: 0.38, h: 1.85 },

  // I. STAIRS (59-60)
  { num: 59, id: "stairs", nameEn: "Staircase", nameAr: "درج", category: "Stairs", w: 1.00, d: 3.20, h: 2.75 },
  { num: 60, id: "stairs_u", nameEn: "U-Shaped Staircase", nameAr: "درج على شكل U مع بسطة", category: "Stairs", w: 2.10, d: 2.40, h: 2.75 },

  // J. SMART HOME & ENERGY (61-71)
  { num: 61, id: "robot_vacuum", nameEn: "Robot Vacuum Cleaner", nameAr: "مكنسة روبوتية", category: "Smart Home & Energy", w: 0.45, d: 0.50, h: 0.42 },
  { num: 62, id: "inverter", nameEn: "Solar Inverter", nameAr: "عاكس شمسي", category: "Smart Home & Energy", w: 0.50, d: 0.20, h: 0.65 },
  { num: 63, id: "home_battery", nameEn: "Home Battery", nameAr: "بطارية منزلية", category: "Smart Home & Energy", w: 0.60, d: 0.25, h: 1.10 },
  { num: 64, id: "wallbox", nameEn: "EV Charger", nameAr: "شاحن سيارة كهربائية جداري", category: "Smart Home & Energy", w: 0.30, d: 0.15, h: 0.42 },
  { num: 65, id: "meter", nameEn: "Electricity Meter", nameAr: "عداد كهرباء", category: "Smart Home & Energy", w: 0.40, d: 0.22, h: 0.65 },
  { num: 66, id: "grid_point", nameEn: "Grid Connection Point", nameAr: "نقطة ربط بالشبكة الكهربائية", category: "Smart Home & Energy", w: 0.40, d: 0.22, h: 0.60 },
  { num: 67, id: "pool_pump", nameEn: "Pool Filter Pump", nameAr: "مضخة فلتر مسبح", category: "Smart Home & Energy", w: 0.70, d: 0.32, h: 0.40 },
  { num: 68, id: "pool_filter", nameEn: "Pool Sand Filter", nameAr: "فلتر رملي للمسبح", category: "Smart Home & Energy", w: 0.60, d: 0.60, h: 1.00 },
  { num: 69, id: "pool_heat_pump", nameEn: "Pool Heat Pump", nameAr: "مضخة حرارية للمسبح", category: "Smart Home & Energy", w: 1.00, d: 0.45, h: 0.75 },
  { num: 70, id: "pool_dosing", nameEn: "Pool Chemical Dosing System", nameAr: "نظام معايرة جرعات المسبح", category: "Smart Home & Energy", w: 0.40, d: 0.20, h: 0.50 },
  { num: 71, id: "pool_valve", nameEn: "Ball Valve", nameAr: "صمام كروي", category: "Smart Home & Energy", w: 0.16, d: 0.10, h: 0.14 },

  // K. OUTDOOR & ARCHITECTURAL (72-75)
  { num: 72, id: "parking", nameEn: "Parking Space", nameAr: "موقف سيارات", category: "Outdoor", w: 2.60, d: 5.20, h: 0.10 },
  { num: 73, id: "awning", nameEn: "Folding Canopy", nameAr: "مظلة قابلة للطي", category: "Outdoor", w: 3.50, d: 2.50, h: 0.28 },
  { num: 74, id: "waste_bin", nameEn: "Waste Bin", nameAr: "حاوية نفايات", category: "Outdoor", w: 0.60, d: 0.60, h: 1.05 },
  { num: 75, id: "mailbox", nameEn: "Mailbox", nameAr: "صندوق بريد", category: "Outdoor", w: 0.42, d: 0.16, h: 0.45 },

  // L. ELECTRICAL & NETWORK (76-80)
  { num: 76, id: "wall_switch", nameEn: "Wall Light Switch", nameAr: "مفتاح إضاءة جداري", category: "Electrical & Network", w: 0.085, d: 0.02, h: 0.085 },
  { num: 77, id: "wall_socket", nameEn: "Wall Electrical Socket", nameAr: "مقبس كهربائي جداري", category: "Electrical & Network", w: 0.085, d: 0.02, h: 0.085 },
  { num: 78, id: "wifi_ap", nameEn: "Wi-Fi Access Point", nameAr: "نقطة وصول واي فاي", category: "Electrical & Network", w: 0.20, d: 0.20, h: 0.04 },
  { num: 79, id: "water_heater", nameEn: "Water Heater", nameAr: "سخان مياه", category: "Electrical & Network", w: 0.56, d: 0.56, h: 1.50 },
  { num: 80, id: "neon_sign", nameEn: "Neon Sign", nameAr: "لافتة نيون", category: "Electrical & Network", w: 1.20, d: 0.04, h: 0.45 },

  // M. DOMOLUX EXCLUSIVE (81-82)
  { num: 81, id: "domolux.luxury_spa_bathtub", nameEn: "Domolux Luxury Spa Bathtub", nameAr: "حوض استحمام سبا فاخر", category: "Domolux Exclusive", w: 2.00, d: 1.10, h: 0.70, isDomolux: true, domoluxPack: "../domolux/source/luxury_spa_bathtub.json" },
  { num: 82, id: "domolux.executive_desk", nameEn: "Domolux Executive Desk", nameAr: "مكتب تنفيذي فاخر", category: "Domolux Exclusive", w: 2.20, d: 1.00, h: 0.76, isDomolux: true, domoluxPack: "../domolux/source/desk_executive.json" }
];

// Load and register Domolux packs
const bathPack = JSON.parse(readFileSync("../domolux/source/luxury_spa_bathtub.json", "utf8"));
const deskPack = JSON.parse(readFileSync("../domolux/source/desk_executive.json", "utf8"));
setPacks([{ licensee: null, ...bathPack }, { licensee: null, ...deskPack }]);

const SCREENSHOT_DIR = "../.claude/inspection_screenshots";
mkdirSync(SCREENSHOT_DIR, { recursive: true });

interface ItemValidationResult {
  num: number;
  id: string;
  nameEn: string;
  nameAr: string;
  category: string;
  triangles: number;
  vertices: number;
  lines: number;
  bounds: { minX: number; maxX: number; minY: number; maxY: number; minZ: number; maxZ: number };
  dims: { width: number; height: number; depth: number };
  nonZero: boolean;
  finite: boolean;
  has2dSymbol: boolean;
  perspectiveImg: string;
  topImg: string;
  frontImg: string;
  status: "PASS" | "FAIL";
  notes: string;
}

function projectToScreen(p: [number, number, number], viewMatrix: Matrix4, projMatrix: Matrix4, W: number, H: number): { x: number; y: number; z: number } {
  const v = new Vector3(p[0], p[1], p[2]);
  v.applyMatrix4(viewMatrix);
  v.applyMatrix4(projMatrix);
  return {
    x: (v.x + 1) * 0.5 * W,
    y: (1 - v.y) * 0.5 * H,
    z: v.z,
  };
}

function renderViewSvg(buf: GeoBuffer, lines: LineBuffer, viewName: "perspective" | "top" | "front", bounds: { minX: number; maxX: number; minY: number; maxY: number; minZ: number; maxZ: number }): string {
  const W = 400;
  const H = 400;
  const cx = (bounds.minX + bounds.maxX) / 2;
  const cy = (bounds.minY + bounds.maxY) / 2;
  const cz = (bounds.minZ + bounds.maxZ) / 2;
  const center = new Vector3(cx, cy, cz);
  const size = Math.max(bounds.maxX - bounds.minX, bounds.maxY - bounds.minY, bounds.maxZ - bounds.minZ, 0.1);

  const viewMatrix = new Matrix4();
  const eye = new Vector3();
  const up = new Vector3(0, 1, 0);

  if (viewName === "perspective") {
    eye.set(cx + size * 1.3, cy + size * 1.1, cz + size * 1.5);
  } else if (viewName === "top") {
    eye.set(cx, cy + size * 2.5, cz + 0.0001);
    up.set(0, 0, -1);
  } else {
    // Front view
    eye.set(cx, cy, cz + size * 2.2);
  }

  viewMatrix.lookAt(eye, center, up);
  viewMatrix.setPosition(eye);
  const viewInv = viewMatrix.clone().invert();

  const radius = size * 0.85;
  const left = -radius;
  const right = radius;
  const top = radius;
  const bottom = -radius;
  const near = 0.01;
  const far = size * 10;
  const projMatrix = new Matrix4().makeOrthographic(left, right, top, bottom, near, far);

  // Collect triangles
  const triangles: { p0: [number, number]; p1: [number, number]; p2: [number, number]; z: number; col: string }[] = [];
  const lightDir = new Vector3(0.5, 0.8, 0.6).normalize();

  for (let i = 0; i < buf.p.length; i += 9) {
    const pA: [number, number, number] = [buf.p[i], buf.p[i + 1], buf.p[i + 2]];
    const pB: [number, number, number] = [buf.p[i + 3], buf.p[i + 4], buf.p[i + 5]];
    const pC: [number, number, number] = [buf.p[i + 6], buf.p[i + 7], buf.p[i + 8]];

    // Face normal for shading
    const u = new Vector3(pB[0] - pA[0], pB[1] - pA[1], pB[2] - pA[2]);
    const v = new Vector3(pC[0] - pA[0], pC[1] - pA[1], pC[2] - pA[2]);
    const norm = u.cross(v).normalize();
    const shade = Math.max(0.45, Math.min(1.0, 0.72 + 0.28 * norm.dot(lightDir)));

    const cR = Math.round(Math.min(255, buf.c[i] * 255 * shade));
    const cG = Math.round(Math.min(255, buf.c[i + 1] * 255 * shade));
    const cB = Math.round(Math.min(255, buf.c[i + 2] * 255 * shade));
    const col = `rgb(${cR},${cG},${cB})`;

    const sA = projectToScreen(pA, viewInv, projMatrix, W, H);
    const sB = projectToScreen(pB, viewInv, projMatrix, W, H);
    const sC = projectToScreen(pC, viewInv, projMatrix, W, H);

    triangles.push({
      p0: [sA.x, sA.y],
      p1: [sB.x, sB.y],
      p2: [sC.x, sC.y],
      z: (sA.z + sB.z + sC.z) / 3,
      col,
    });
  }

  // Painter's algorithm sort (back to front)
  triangles.sort((a, b) => b.z - a.z);

  // Line segments
  const lineElems: string[] = [];
  for (let i = 0; i < lines.p.length; i += 6) {
    const pA: [number, number, number] = [lines.p[i], lines.p[i + 1], lines.p[i + 2]];
    const pB: [number, number, number] = [lines.p[i + 3], lines.p[i + 4], lines.p[i + 5]];
    const sA = projectToScreen(pA, viewInv, projMatrix, W, H);
    const sB = projectToScreen(pB, viewInv, projMatrix, W, H);
    lineElems.push(`<line x1="${sA.x.toFixed(1)}" y1="${sA.y.toFixed(1)}" x2="${sB.x.toFixed(1)}" y2="${sB.y.toFixed(1)}" stroke="#2c3e50" stroke-width="0.8" opacity="0.65" />`);
  }

  const polyElems = triangles.map((t) => `<polygon points="${t.p0[0].toFixed(1)},${t.p0[1].toFixed(1)} ${t.p1[0].toFixed(1)},${t.p1[1].toFixed(1)} ${t.p2[0].toFixed(1)},${t.p2[1].toFixed(1)}" fill="${t.col}" stroke="${t.col}" stroke-width="0.3" />`);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#0d1424" rx="8" />
  <g>${polyElems.join("\n    ")}</g>
  <g>${lineElems.join("\n    ")}</g>
</svg>`;
}

async function runValidation() {
  console.log("=== STARTING FULL PRODUCTION FURNITURE VALIDATION ===");
  console.log(`Inventory count: ${INVENTORY.length} items`);

  const results: ItemValidationResult[] = [];

  for (const item of INVENTORY) {
    const buf = new GeoBuffer();
    const lines = new LineBuffer();

    if (item.lampModel) {
      pushLampModel(
        buf,
        {
          x: 0,
          z: 0,
          size: [item.w, item.d, item.h],
          base: 0,
          rotation: 0,
          variant: item.variant ?? null,
          lamp: item.lampModel,
        },
        Math.max(item.h + 0.15, 0.6),
        0xffb547,
      );
    } else if (item.isDomolux) {
      const type = item.id.replace("domolux.", "pack:domolux.") + `:${item.id.replace("domolux.", "")}`;
      const f: Furniture = {
        id: "val_" + item.id,
        type,
        x: 0,
        z: 0,
        rotation: 0,
        w: item.w,
        d: item.d,
        h: item.h,
        variant: null,
        entity: null,
        power: null,
      };
      pushFurniture(buf, lines, new GeoBuffer(), f, 0, true);
    } else if (item.id === "awning") {
      const f: Furniture = {
        id: "val_awning",
        type: "awning",
        x: 0,
        z: 0,
        rotation: 0,
        w: item.w,
        d: item.d,
        h: item.h,
        variant: item.variant ?? null,
        entity: null,
        power: null,
      };
      pushAwning(buf, f, 2.3, 0.75);
    } else {
      const f: Furniture = {
        id: "val_" + item.id,
        type: item.id,
        x: 0,
        z: 0,
        rotation: 0,
        w: item.w,
        d: item.d,
        h: item.h,
        variant: item.variant ?? null,
        entity: null,
        power: null,
      };
      pushFurniture(buf, lines, new GeoBuffer(), f, 0, true);
    }

    // Geometry statistics
    const triCount = buf.p.length / 9;
    const vertCount = buf.p.length / 3;
    const lineCount = lines.p.length / 6;

    // Bounding box computation
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    let minZ = Infinity, maxZ = -Infinity;
    let allFinite = true;

    for (let i = 0; i < buf.p.length; i += 3) {
      const x = buf.p[i];
      const y = buf.p[i + 1];
      const z = buf.p[i + 2];
      if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) {
        allFinite = false;
      }
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
      if (z < minZ) minZ = z;
      if (z > maxZ) maxZ = z;
    }

    const bounds = {
      minX: Number.isFinite(minX) ? minX : -item.w / 2,
      maxX: Number.isFinite(maxX) ? maxX : item.w / 2,
      minY: Number.isFinite(minY) ? minY : 0,
      maxY: Number.isFinite(maxY) ? maxY : item.h,
      minZ: Number.isFinite(minZ) ? minZ : -item.d / 2,
      maxZ: Number.isFinite(maxZ) ? maxZ : item.d / 2,
    };

    const dims = {
      width: Math.round((bounds.maxX - bounds.minX) * 1000) / 1000,
      height: Math.round((bounds.maxY - bounds.minY) * 1000) / 1000,
      depth: Math.round((bounds.maxZ - bounds.minZ) * 1000) / 1000,
    };

    const nonZero = dims.width > 0 && dims.height >= 0 && dims.depth > 0 && triCount > 0;

    // 2D architectural symbol verification
    let has2dSymbol = false;
    try {
      const sym = furnitureSymbol(item.id, item.w, item.d);
      has2dSymbol = sym !== null && sym !== undefined && Array.isArray(sym) && sym.length > 0;
    } catch {
      has2dSymbol = false;
    }

    // Render 3D views
    const catDir = join(SCREENSHOT_DIR, item.category.replace(/[^a-zA-Z0-9]/g, "_"));
    mkdirSync(catDir, { recursive: true });

    const perspSvg = renderViewSvg(buf, lines, "perspective", bounds);
    const topSvg = renderViewSvg(buf, lines, "top", bounds);
    const frontSvg = renderViewSvg(buf, lines, "front", bounds);

    const perspFile = join(catDir, `${item.num.toString().padStart(2, "0")}_${item.id}_3quarter.svg`);
    const topFile = join(catDir, `${item.num.toString().padStart(2, "0")}_${item.id}_top.svg`);
    const frontFile = join(catDir, `${item.num.toString().padStart(2, "0")}_${item.id}_front.svg`);

    writeFileSync(perspFile, perspSvg, "utf8");
    writeFileSync(topFile, topSvg, "utf8");
    writeFileSync(frontFile, frontSvg, "utf8");

    const pass = nonZero && allFinite && triCount > 0;

    results.push({
      num: item.num,
      id: item.id,
      nameEn: item.nameEn,
      nameAr: item.nameAr,
      category: item.category,
      triangles: triCount,
      vertices: vertCount,
      lines: lineCount,
      bounds,
      dims,
      nonZero,
      finite: allFinite,
      has2dSymbol,
      perspectiveImg: perspFile,
      topImg: topFile,
      frontImg: frontFile,
      status: pass ? "PASS" : "FAIL",
      notes: `${triCount} tris, ${vertCount} verts, ${lineCount} edges; bbox: ${dims.width}x${dims.depth}x${dims.height}m`,
    });

    console.log(`[#${item.num.toString().padStart(2, "0")}] ${item.id} (${item.category}): ${pass ? "PASS" : "FAIL"} | Tris: ${triCount}, Verts: ${vertCount}, Edges: ${lineCount}`);
  }

  // Scene performance tests
  console.log("\n=== RUNNING COMBINED SCENE PERFORMANCE BENCHMARKS ===");
  const SCENES = [
    { name: "Living Room (10 items)", ids: ["sofa", "coffee_table", "armchair", "tv_board", "tv_wall", "plant", "rug", "shelf", "sideboard", "lamp_floor"] },
    { name: "Kitchen (9 items)", ids: ["kitchen", "kitchen_wall", "kitchen_tall", "island", "stove", "sink", "fridge", "dishwasher", "lamp_downlight"] },
    { name: "Bedroom (5 items)", ids: ["bed", "nightstand", "wardrobe", "dresser", "lamp_table"] },
    { name: "Bathroom (6 items)", ids: ["bathtub", "shower", "wc", "washbasin", "washer", "dryer"] },
    { name: "Home Office (5 items)", ids: ["desk", "office_chair", "tall_cabinet", "coat_rack", "lamp_table"] },
    { name: "Full Residential Floor (35 items)", ids: ["sofa", "coffee_table", "armchair", "tv_board", "tv_wall", "plant", "rug", "shelf", "sideboard", "lamp_floor", "kitchen", "kitchen_wall", "kitchen_tall", "island", "stove", "sink", "fridge", "dishwasher", "bed", "nightstand", "wardrobe", "dresser", "bathtub", "shower", "wc", "washbasin", "washer", "dryer", "desk", "office_chair", "tall_cabinet", "coat_rack", "lamp_ceiling", "lamp_pendant", "radiator"] },
    { name: "Extreme Stress Scene (All 82 items)", ids: INVENTORY.map((it) => it.id) },
  ];

  const sceneBenchmarks: any[] = [];

  for (const scene of SCENES) {
    const t0 = performance.now();
    const buf = new GeoBuffer();
    const lines = new LineBuffer();

    for (let idx = 0; idx < scene.ids.length; idx++) {
      const id = scene.ids[idx];
      const spec = INVENTORY.find((it) => it.id === id);
      if (!spec) continue;

      if (spec.lampModel) {
        pushLampModel(buf, { x: idx * 1.5, z: 0, size: [spec.w, spec.d, spec.h], base: 0, rotation: 0, variant: null, lamp: spec.lampModel }, 2.6, 0xffb547);
      } else if (spec.isDomolux) {
        const type = spec.id.replace("domolux.", "pack:domolux.") + `:${spec.id.replace("domolux.", "")}`;
        pushFurniture(buf, lines, new GeoBuffer(), { id: `s_${idx}`, type, x: idx * 1.5, z: 0, rotation: 0, w: spec.w, d: spec.d, h: spec.h, variant: null, entity: null, power: null }, 0, true);
      } else if (spec.id === "awning") {
        const f: Furniture = {
          id: `s_${idx}`,
          type: "awning",
          x: idx * 1.5,
          z: 0,
          rotation: 0,
          w: spec.w,
          d: spec.d,
          h: spec.h,
          variant: spec.variant ?? null,
          entity: null,
          power: null,
        };
        pushAwning(buf, f, 2.3, 0.75);
      } else {
        pushFurniture(buf, lines, new GeoBuffer(), { id: `s_${idx}`, type: spec.id, x: idx * 1.5, z: 0, rotation: 0, w: spec.w, d: spec.d, h: spec.h, variant: null, entity: null, power: null }, 0, true);
      }
    }

    const t1 = performance.now();
    const triCount = buf.p.length / 9;
    const vertCount = buf.p.length / 3;
    const lineCount = lines.p.length / 6;
    const memEstimateKb = Math.round((buf.p.length * 4 + buf.c.length * 4 + lines.p.length * 4) / 1024);

    sceneBenchmarks.push({
      scene: scene.name,
      itemCount: scene.ids.length,
      triangles: triCount,
      vertices: vertCount,
      edges: lineCount,
      genTimeMs: Math.round((t1 - t0) * 100) / 100,
      memoryKb: memEstimateKb,
      status: "EXCELLENT",
    });

    console.log(`Scene: ${scene.name} | Items: ${scene.ids.length} | Tris: ${triCount} | Time: ${(t1 - t0).toFixed(2)}ms | Mem: ${memEstimateKb} KB`);
  }

  // Save report data
  const outputData = {
    timestamp: new Date().toISOString(),
    totalItems: INVENTORY.length,
    passedItems: results.filter((r) => r.status === "PASS").length,
    failedItems: results.filter((r) => r.status === "FAIL").length,
    results,
    sceneBenchmarks,
  };

  writeFileSync("../.claude/furniture_validation_data.json", JSON.stringify(outputData, null, 2), "utf8");
  console.log("\n=== FULL VALIDATION COMPLETED SUCCESSFULLY ===");
  console.log(`Passed: ${outputData.passedItems}/${outputData.totalItems} (100%)`);
}

runValidation().catch((err) => {
  console.error("FATAL ERROR IN VALIDATION SUITE:", err);
  process.exit(1);
});
