// Collection C: Products 14 to 18

export const DOMOLUX_COLLECTION_PART3 = [
  // =========================================================================
  // COLLECTION C — ARCHITECTURAL WELLNESS AND PRIVATE SANCTUARIES (14-18)
  // =========================================================================
  {
    num: 14,
    id: "sculptural_room_divider",
    packId: "domolux.sculptural_room_divider",
    name: {
      en: "Domolux Sculptural Room Divider",
      de: "Domolux Skulpturaler Raumteiler",
      ar: "فاصل المساحات المعماري النحتي دومولوكس"
    },
    collection: "Architectural Wellness & Private Sanctuaries",
    description: "Architectural spatial partition featuring alternating vertical fluted smoked oak louvers, satin bronze structural uprights, and a honed travertine base.",
    size: [2.20, 0.35, 2.10],
    mount: "floor",
    surface: false,
    group: "deco",
    room: ["living", "bedroom", "hall"],
    tags: ["divider", "screen", "partition", "travertine", "oak", "domolux"],
    parts: [
      // 1. Heavy honed travertine anchor plinth base
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.90, y: 0.0, h: 0.05, color: "#d8cfc4", edges: true, fix: "h" },
      // 2. Base recessed brass floor mounting track
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.30, y: 0.05, h: 0.02, color: "#c5a059", glow: true, fix: "wdh" },
      // 3. Top horizontal champagne bronze header rail
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.25, y: 0.96, h: 0.04, color: "#8c6747", edges: true, fix: "h" },
      // 4-8: 5 Main champagne bronze vertical structural posts
      { shape: "cyl", x: -0.44, z: 0.0, w: 0.04, d: 0.04, y: 0.06, h: 0.90, color: "#c5a059", fix: "wd" },
      { shape: "cyl", x: -0.22, z: 0.0, w: 0.04, d: 0.04, y: 0.06, h: 0.90, color: "#c5a059", fix: "wd" },
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.04, d: 0.04, y: 0.06, h: 0.90, color: "#c5a059", fix: "wd" },
      { shape: "cyl", x: 0.22, z: 0.0, w: 0.04, d: 0.04, y: 0.06, h: 0.90, color: "#c5a059", fix: "wd" },
      { shape: "cyl", x: 0.44, z: 0.0, w: 0.04, d: 0.04, y: 0.06, h: 0.90, color: "#c5a059", fix: "wd" },
      // 9-18: 10 Sculptural fluted smoked oak vertical blades with varied angular orientations
      { shape: "box", x: -0.38, z: 0.02, w: 0.06, d: 0.45, y: 0.08, h: 0.86, color: "#2d241e", finish: "wood", rot: 15, edges: true },
      { shape: "box", x: -0.31, z: -0.02, w: 0.06, d: 0.45, y: 0.08, h: 0.86, color: "#362b24", finish: "wood", rot: -20, edges: true },
      { shape: "box", x: -0.16, z: 0.03, w: 0.06, d: 0.45, y: 0.08, h: 0.86, color: "#2d241e", finish: "wood", rot: 30, edges: true },
      { shape: "box", x: -0.09, z: -0.03, w: 0.06, d: 0.45, y: 0.08, h: 0.86, color: "#362b24", finish: "wood", rot: -10, edges: true },
      { shape: "box", x: 0.06, z: 0.02, w: 0.06, d: 0.45, y: 0.08, h: 0.86, color: "#2d241e", finish: "wood", rot: 25, edges: true },
      { shape: "box", x: 0.13, z: -0.02, w: 0.06, d: 0.45, y: 0.08, h: 0.86, color: "#362b24", finish: "wood", rot: -30, edges: true },
      { shape: "box", x: 0.28, z: 0.03, w: 0.06, d: 0.45, y: 0.08, h: 0.86, color: "#2d241e", finish: "wood", rot: 15, edges: true },
      { shape: "box", x: 0.35, z: -0.03, w: 0.06, d: 0.45, y: 0.08, h: 0.86, color: "#362b24", finish: "wood", rot: -20, edges: true }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.90 },
      { shape: "line", x1: -0.45, z1: 0.0, x2: 0.45, z2: 0.0 },
      { shape: "circle", x: -0.44, z: 0.0, r: 0.05 },
      { shape: "circle", x: 0.44, z: 0.0, r: 0.05 }
    ]
  },

  {
    num: 15,
    id: "indoor_sculptural_fountain",
    packId: "domolux.indoor_sculptural_fountain",
    name: {
      en: "Domolux Indoor Sculptural Fountain",
      de: "Domolux Skulpturaler Innenbrunnen",
      ar: "نافورة دومولوكس الداخلية النحتية"
    },
    collection: "Architectural Wellness & Private Sanctuaries",
    description: "Architectural monolithic interior water sculpture in textured dark basalt with satin bronze weir water blade, laminar water sheet, and pebble basin.",
    size: [1.40, 0.70, 1.90],
    mount: "floor",
    surface: false,
    group: "deco",
    room: ["hall", "living"],
    tags: ["fountain", "water", "basalt", "bronze", "sculpture", "domolux"],
    parts: [
      // 1. Deep basalt catch basin outer perimeter walls
      { shape: "box", x: 0.0, z: 0.12, w: 0.94, d: 0.72, y: 0.0, h: 0.18, color: "#1c1e22", edges: true, fix: "h" },
      // 2. Basalt basin coping top rim slab
      { shape: "box", x: 0.0, z: 0.12, w: 0.96, d: 0.74, y: 0.18, h: 0.03, color: "#25282f", edges: true, fix: "h" },
      // 3. Basalt monolithic vertical water cascade slab
      { shape: "box", x: 0.0, z: -0.28, w: 0.78, d: 0.18, y: 0.05, h: 0.92, color: "#1a1c20", edges: true },
      // 4. Textured front water wall relief panel
      { shape: "box", x: 0.0, z: -0.18, w: 0.68, d: 0.02, y: 0.20, h: 0.74, color: "#22252c", edges: "faint" },
      // 5. Satin champagne bronze top weir blade housing
      { shape: "box", x: 0.0, z: -0.22, w: 0.82, d: 0.22, y: 0.94, h: 0.06, color: "#8c6747", edges: "glow", fix: "h" },
      // 6. Precision water outlet spillway blade
      { shape: "box", x: 0.0, z: -0.12, w: 0.62, d: 0.08, y: 0.94, h: 0.02, color: "#c5a059", glow: true, fix: "wdh" },
      // 7. Laminar flowing water film cascade (aquamarine plane)
      { shape: "box", x: 0.0, z: -0.15, w: 0.60, d: 0.015, y: 0.21, h: 0.73, color: "#1d637d", glow: true, edges: "faint" },
      // 8. Basin water surface plane
      { shape: "box", x: 0.0, z: 0.15, w: 0.82, d: 0.58, y: 0.14, h: 0.015, color: "#174b60", glow: true, edges: "faint" },
      // 9. Black river pebble bed under water
      { shape: "box", x: 0.0, z: 0.15, w: 0.82, d: 0.58, y: 0.06, h: 0.08, color: "#282a30", edges: "faint" },
      // 10. Ambient underwater LED lighting strip
      { shape: "box", x: 0.0, z: -0.08, w: 0.70, d: 0.04, y: 0.08, h: 0.02, color: "#5dade2", glow: true, fix: "wdh" },
      // 11. Sculptural river stones (3 accents)
      { shape: "cyl", x: -0.22, z: 0.18, w: 0.12, d: 0.12, y: 0.10, h: 0.08, color: "#3a3c42" },
      { shape: "cyl", x: 0.25, z: 0.22, w: 0.16, d: 0.16, y: 0.10, h: 0.09, color: "#32343a" },
      { shape: "cyl", x: 0.08, z: 0.32, w: 0.10, d: 0.10, y: 0.10, h: 0.06, color: "#3a3c42" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.12, w: 0.96, d: 0.74 },
      { shape: "rect", x: 0.0, z: -0.28, w: 0.78, d: 0.18, fill: true },
      { shape: "rect", x: 0.0, z: 0.15, w: 0.82, d: 0.58 },
      { shape: "line", x1: -0.31, z1: -0.12, x2: 0.31, z2: -0.12 }
    ]
  },

  {
    num: 16,
    id: "luxury_aquarium",
    packId: "domolux.luxury_aquarium",
    name: {
      en: "Domolux Architectural Luxury Aquarium",
      de: "Domolux Architektonisches Luxus-Aquarium",
      ar: "حوض الأسماك المعماري الفاخر دومولوكس"
    },
    collection: "Architectural Wellness & Private Sanctuaries",
    description: "Frameless ultra-clear low-iron glass residential aquarium with naturalistic aquascape, submerged water volume, suspended LED canopy, and dark walnut cabinet.",
    size: [1.80, 0.65, 1.70],
    mount: "floor",
    surface: false,
    group: "deco",
    room: ["living", "dining", "office"],
    tags: ["aquarium", "water", "fish", "glass", "luxury", "domolux"],
    parts: [
      // 1. Dark walnut lower cabinetry base carcass
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.92, y: 0.0, h: 0.44, color: "#2d241e", finish: "wood", edges: true },
      // 2. Double cabinet doors (front access to canister filtration)
      { shape: "box", x: -0.23, z: 0.47, w: 0.45, d: 0.02, y: 0.04, h: 0.38, color: "#2d241e", finish: "wood", edges: true },
      { shape: "box", x: 0.23, z: 0.47, w: 0.45, d: 0.02, y: 0.04, h: 0.38, color: "#2d241e", finish: "wood", edges: true },
      // 3. Champagne bronze door pulls
      { shape: "box", x: -0.04, z: 0.485, w: 0.015, d: 0.015, y: 0.22, h: 0.12, color: "#c5a059", glow: true, fix: "wdh" },
      { shape: "box", x: 0.04, z: 0.485, w: 0.015, d: 0.015, y: 0.22, h: 0.12, color: "#c5a059", glow: true, fix: "wdh" },
      // 4. Cabinet top neoprene leveling mat
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.90, y: 0.44, h: 0.01, color: "#111215", fix: "h" },
      // 5. Frameless front glass viewing pane
      { shape: "box", x: 0.0, z: 0.44, w: 0.94, d: 0.02, y: 0.45, h: 0.42, color: "glass", edges: "glow" },
      // 6. Frameless rear glass pane (frosted backing)
      { shape: "box", x: 0.0, z: -0.44, w: 0.94, d: 0.02, y: 0.45, h: 0.42, color: "#1c2b36", edges: "faint" },
      // 7. Left glass side pane
      { shape: "box", x: -0.46, z: 0.0, w: 0.02, d: 0.88, y: 0.45, h: 0.42, color: "glass", edges: "glow" },
      // 8. Right glass side pane
      { shape: "box", x: 0.46, z: 0.0, w: 0.02, d: 0.88, y: 0.45, h: 0.42, color: "glass", edges: "glow" },
      // 9. Submerged aquatic water volume
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.84, y: 0.46, h: 0.38, color: "#1c5a75", glow: true, edges: "faint" },
      // 10. Natural white cosmetic substrate / sand bed
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.84, y: 0.45, h: 0.05, color: "#d9d0be", edges: "faint" },
      // 11. Sculptural central dragon stone aquascape monolith
      { shape: "loft", x: -0.10, z: 0.0, w: 0.28, d: 0.40, y: 0.50, h: 0.24, tx: -0.12, tz: 0.0, tw: 0.12, td: 0.18, color: "#524436", edges: "faint" },
      // 12. Secondary dragon stone peak
      { shape: "loft", x: 0.18, z: -0.10, w: 0.22, d: 0.30, y: 0.50, h: 0.18, tx: 0.16, tz: -0.10, tw: 0.08, td: 0.12, color: "#483b2e", edges: "faint" },
      // 13. Aquatic botanical lush green plant cluster
      { shape: "cyl", x: 0.25, z: 0.15, w: 0.18, d: 0.18, y: 0.50, h: 0.16, color: "#246b38", glow: true },
      // 14. Overhead slimline LED lighting hood canopy
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.40, y: 0.92, h: 0.03, color: "#18191d", edges: "glow", fix: "wdh" },
      // 15. Canopy champagne bronze suspension bracket pillars (left)
      { shape: "box", x: -0.42, z: 0.0, w: 0.02, d: 0.30, y: 0.87, h: 0.09, color: "#c5a059", fix: "wdh" },
      // 16. Canopy champagne bronze suspension bracket pillars (right)
      { shape: "box", x: 0.42, z: 0.0, w: 0.02, d: 0.30, y: 0.87, h: 0.09, color: "#c5a059", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.92 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.90, d: 0.84, fill: true },
      { shape: "circle", x: -0.10, z: 0.0, r: 0.14 },
      { shape: "circle", x: 0.18, z: -0.10, r: 0.10 }
    ]
  },

  {
    num: 17,
    id: "finnish_sauna_cabin",
    packId: "domolux.finnish_sauna_cabin",
    name: {
      en: "Domolux Finnish Sauna Sanctuary",
      de: "Domolux Finnische Sauna-Kabine",
      ar: "مقصورة الساونا الفنلندية الفاخرة دومولوكس"
    },
    collection: "Architectural Wellness & Private Sanctuaries",
    description: "Freestanding thermal aspen timber private sauna cabin with full-height tempered glass entry, multi-level floating benches, and volcanic stone heater tower.",
    size: [2.10, 1.80, 2.15],
    mount: "floor",
    surface: false,
    group: "bath",
    room: ["bath", "hobby"],
    tags: ["sauna", "spa", "wellness", "timber", "aspen", "domolux"],
    parts: [
      // 1. Cabin floor platform
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.0, h: 0.04, color: "#bfa17a", finish: "wood", fix: "h" },
      // 2. Cabin ceiling roof canopy
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.96, h: 0.04, color: "#a88a64", finish: "wood", edges: true, fix: "h" },
      // 3. Cabin rear insulated timber wall
      { shape: "box", x: 0.0, z: -0.46, w: 0.98, d: 0.08, y: 0.04, h: 0.92, color: "#c4a781", finish: "wood", edges: "faint" },
      // 4. Cabin left insulated timber wall
      { shape: "box", x: -0.46, z: 0.0, w: 0.08, d: 0.96, y: 0.04, h: 0.92, color: "#c4a781", finish: "wood", edges: "faint" },
      // 5. Cabin right insulated timber wall
      { shape: "box", x: 0.46, z: 0.0, w: 0.08, d: 0.96, y: 0.04, h: 0.92, color: "#c4a781", finish: "wood", edges: "faint" },
      // 6. Front glass facade fixed left panel
      { shape: "box", x: -0.32, z: 0.46, w: 0.20, d: 0.02, y: 0.04, h: 0.92, color: "glass", edges: "glow" },
      // 7. Front glass pivot door
      { shape: "box", x: 0.06, z: 0.46, w: 0.54, d: 0.02, y: 0.04, h: 0.92, color: "glass", edges: "glow" },
      // 8. Front glass door massive timber vertical handle
      { shape: "box", x: -0.16, z: 0.49, w: 0.03, d: 0.03, y: 0.35, h: 0.40, color: "#7a5a3a", finish: "wood", fix: "wdh" },
      // 9. Upper floating bench (rear wall)
      { shape: "box", x: 0.0, z: -0.24, w: 0.84, d: 0.34, y: 0.45, h: 0.06, color: "#dfcbb1", finish: "wood", edges: true },
      // 10. Upper bench ergonomic curved backrest
      { shape: "box", x: 0.0, z: -0.41, w: 0.84, d: 0.03, y: 0.58, h: 0.14, color: "#dfcbb1", finish: "wood", edges: "faint" },
      // 11. Upper backrest warm indirect LED lighting channel
      { shape: "box", x: 0.0, z: -0.40, w: 0.82, d: 0.01, y: 0.56, h: 0.02, color: "#ffb84d", glow: true },
      // 12. Lower stepping bench (front offset)
      { shape: "box", x: 0.04, z: 0.08, w: 0.76, d: 0.30, y: 0.22, h: 0.06, color: "#dfcbb1", finish: "wood", edges: true },
      // 13. Bench vertical support apron
      { shape: "box", x: 0.04, z: 0.22, w: 0.76, d: 0.02, y: 0.04, h: 0.18, color: "#c4a781", finish: "wood" },
      // 14. Stainless steel cylindrical sauna heater tower
      { shape: "cyl", x: -0.34, z: 0.24, w: 0.20, d: 0.20, y: 0.04, h: 0.45, color: "metal", edges: "glow", fix: "wdh" },
      // 15. Volcanic sauna stones cluster atop heater
      { shape: "cyl", x: -0.34, z: 0.24, w: 0.18, d: 0.18, y: 0.48, h: 0.08, color: "#2d2f33", fix: "wdh" },
      // 16. Heater wooden safety guardrail
      { shape: "box", x: -0.34, z: 0.24, w: 0.26, d: 0.26, y: 0.38, h: 0.03, color: "#7a5a3a", finish: "wood", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "rect", x: 0.0, z: -0.24, w: 0.84, d: 0.34, fill: true },
      { shape: "rect", x: 0.04, z: 0.08, w: 0.76, d: 0.30 },
      { shape: "circle", x: -0.34, z: 0.24, r: 0.10 },
      { shape: "line", x1: -0.21, z1: 0.46, x2: 0.33, z2: 0.46 }
    ]
  },

  {
    num: 18,
    id: "full_body_massage_chair",
    packId: "domolux.full_body_massage_chair",
    name: {
      en: "Domolux Full-Body Massage Chair",
      de: "Domolux Ganzkörper-Massagesessel",
      ar: "كرسي المساج الفاخر لكامل الجسم دومولوكس"
    },
    collection: "Architectural Wellness & Private Sanctuaries",
    description: "Robotic zero-gravity relaxation capsule with aerodynamic pearl metallic shell, quilted charcoal Nappa leather, and enclosed calf and foot reflexology pod.",
    size: [0.90, 1.55, 1.25],
    mount: "floor",
    surface: false,
    group: "seating",
    room: ["living", "bedroom", "hobby"],
    tags: ["massage", "wellness", "zero_gravity", "recliner", "relaxation", "domolux"],
    parts: [
      // 1. Heavy circular architectural swivel pedestal base
      { shape: "cyl", x: 0.0, z: -0.05, w: 0.70, d: 0.70, y: 0.0, h: 0.05, color: "#8c6747", edges: "faint", fix: "wdh" },
      // 2. Central articulation pivot mechanism
      { shape: "cyl", x: 0.0, z: -0.05, w: 0.25, d: 0.25, y: 0.05, h: 0.12, color: "#18191d", fix: "wdh" },
      // 3. Aerodynamic metallic pearl main outer cocoon shell
      { shape: "loft", x: 0.0, z: -0.08, w: 0.92, d: 0.75, y: 0.14, h: 0.76, tx: 0.0, tz: -0.16, tw: 0.84, td: 0.55, color: "#dcdde2", edges: "glow" },
      // 4. Quilted charcoal Nappa leather seat cushion
      { shape: "box", x: 0.0, z: 0.05, w: 0.56, d: 0.52, y: 0.24, h: 0.18, color: "#282a30", finish: "fabric", edges: true },
      // 5. Contoured lumbar massage backrest
      { shape: "loft", x: 0.0, z: -0.18, w: 0.54, d: 0.22, y: 0.40, h: 0.32, tx: 0.0, tz: -0.25, tw: 0.50, td: 0.16, color: "#282a30", finish: "fabric", edges: true },
      // 6. Upper shoulder & neck massage contour pod
      { shape: "loft", x: 0.0, z: -0.28, w: 0.50, d: 0.16, y: 0.70, h: 0.24, tx: 0.0, tz: -0.34, tw: 0.44, td: 0.12, color: "#22242a", finish: "fabric", edges: true },
      // 7. Padded ergonomic headrest pillow
      { shape: "box", x: 0.0, z: -0.34, w: 0.38, d: 0.10, y: 0.88, h: 0.10, color: "#1a1b20", finish: "fabric", fix: "wdh" },
      // 8. Left sculpted armrest cocoon wing with airbag channel
      { shape: "loft", x: -0.36, z: 0.0, w: 0.16, d: 0.65, y: 0.22, h: 0.45, tx: -0.38, tz: -0.05, tw: 0.14, td: 0.55, color: "#dcdde2", edges: true },
      // 9. Left inner arm leather massage lining
      { shape: "box", x: -0.34, z: 0.0, w: 0.12, d: 0.55, y: 0.42, h: 0.18, color: "#282a30", finish: "fabric" },
      // 10. Right sculpted armrest cocoon wing
      { shape: "loft", x: 0.36, z: 0.0, w: 0.16, d: 0.65, y: 0.22, h: 0.45, tx: 0.38, tz: -0.05, tw: 0.14, td: 0.55, color: "#dcdde2", edges: true },
      // 11. Right inner arm leather massage lining
      { shape: "box", x: 0.34, z: 0.0, w: 0.12, d: 0.55, y: 0.42, h: 0.18, color: "#282a30", finish: "fabric" },
      // 12. Right arm quick-dial touchscreen interface console
      { shape: "box", x: 0.36, z: 0.18, w: 0.08, d: 0.12, y: 0.58, h: 0.02, color: "accent", glow: true, fix: "wdh" },
      // 13. Articulated lower calf and foot reflexology pod
      { shape: "box", x: 0.0, z: 0.42, w: 0.52, d: 0.38, y: 0.10, h: 0.28, color: "#dcdde2", edges: true, fix: "wdh" },
      // 14. Foot pod inner cushioned slots
      { shape: "box", x: -0.14, z: 0.44, w: 0.16, d: 0.26, y: 0.14, h: 0.20, color: "#18191d", fix: "wdh" },
      { shape: "box", x: 0.14, z: 0.44, w: 0.16, d: 0.26, y: 0.14, h: 0.20, color: "#18191d", fix: "wdh" },
      // 15. Satin champagne metallic perimeter accent trim line
      { shape: "box", x: 0.0, z: -0.05, w: 0.94, d: 0.76, y: 0.48, h: 0.02, color: "#c5a059", glow: true }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.92, d: 0.90 },
      { shape: "circle", x: 0.0, z: -0.05, r: 0.32 },
      { shape: "rect", x: 0.0, z: 0.42, w: 0.52, d: 0.38 },
      { shape: "line", x1: -0.28, z1: 0.10, x2: 0.28, z2: 0.10 }
    ]
  }
];
