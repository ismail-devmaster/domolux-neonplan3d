// DOMOLUX VILLA 200 — COLLECTION D: GOURMET KITCHENS & SPECIALTY CULINARY EQUIPMENT (Products 061–080)
// Batches 13–16

export const COLLECTION_D_PRODUCTS = [
  // -------------------------------------------------------------------------
  // BATCH 13: Products 061–065 (Coffee, Wine & Specialty Beverage Preservation)
  // -------------------------------------------------------------------------
  {
    num: 61,
    id: "integrated_espresso_machine",
    packId: "domolux.integrated_espresso_machine",
    name: {
      en: "Domolux Integrated Luxury Espresso Machine",
      de: "Domolux Integrierter Einbau-Espressovollautomat",
      ar: "ماكينة قهوة إسبريسو مدمجة فاخرة دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Commercial-grade built-in dual boiler espresso machine featuring brushed black titanium finish, dual dispensing spouts, TFT touch display, cup warming stage, and bean hopper access.",
    size: [0.60, 0.55, 0.45],
    mount: "surface",
    surface: true,
    group: "kitchen",
    room: ["kitchen"],
    tags: ["espresso", "coffee", "integrated", "culinary", "appliance", "domolux"],
    parts: [
      // Outer built-in housing chassis
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.0, h: 1.0, color: "#1c1d22", edges: true },
      // Black titanium front fascia
      { shape: "box", x: 0.0, z: 0.46, w: 0.98, d: 0.06, y: 0.0, h: 0.98, color: "#25272e", edges: true, fix: "wd" },
      // Recessed dispensing alcove cavity (dark)
      { shape: "box", x: 0.0, z: 0.32, w: 0.70, d: 0.32, y: 0.12, h: 0.52, color: "#141518", edges: "faint" },
      // Stainless drip tray grille with cup grid
      { shape: "box", x: 0.0, z: 0.36, w: 0.68, d: 0.28, y: 0.10, h: 0.03, color: "metal", edges: true, fix: "h" },
      // Dual brass/chrome dispensing spouts
      { shape: "cyl", x: -0.06, z: 0.35, w: 0.03, d: 0.03, y: 0.42, h: 0.14, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.06, z: 0.35, w: 0.03, d: 0.03, y: 0.42, h: 0.14, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Steam / hot water wand (left side)
      { shape: "cyl", x: -0.25, z: 0.35, w: 0.02, d: 0.02, y: 0.22, h: 0.30, rot: 15, color: "metal", fix: "wd" },
      // Glass color touchscreen interface
      { shape: "box", x: 0.0, z: 0.48, w: 0.52, d: 0.02, y: 0.72, h: 0.20, color: "#0ea5e9", glow: true, edges: "glow", fix: "wdh" },
      // Twin rotary control dials
      { shape: "cyl", x: -0.34, z: 0.49, w: 0.08, d: 0.08, y: 0.76, h: 0.03, axis: "z", color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.34, z: 0.49, w: 0.08, d: 0.08, y: 0.76, h: 0.03, axis: "z", color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "rect", x: 0.0, z: 0.32, w: 0.7, d: 0.32, fill: true },
      { shape: "circle", x: -0.06, z: 0.35, r: 0.04 },
      { shape: "circle", x: 0.06, z: 0.35, r: 0.04 }
    ]
  },

  {
    num: 62,
    id: "precision_coffee_grinder",
    packId: "domolux.precision_coffee_grinder",
    name: {
      en: "Domolux Precision On-Demand Coffee Grinder",
      de: "Domolux Präzisions-Kaffeemühle",
      ar: "مطحنة قهوة دقيقة عند الطلب دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Countertop commercial espresso bean grinder featuring stepless micrometric burr adjustment, smoked glass bean hopper with walnut lid, and hands-free portafilter cradle.",
    size: [0.22, 0.32, 0.52],
    mount: "surface",
    surface: false,
    group: "kitchen",
    room: ["kitchen"],
    tags: ["grinder", "coffee", "espresso", "burrs", "countertop", "domolux"],
    parts: [
      // Cast aluminum heavy stabilizing base
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.92, y: 0.0, h: 0.12, color: "#1c1d22", edges: true, fix: "h" },
      // Portafilter cradle fork
      { shape: "box", x: 0.0, z: 0.38, w: 0.40, d: 0.25, y: 0.14, h: 0.05, color: "metal", edges: "glow", fix: "wdh" },
      // Main motor housing tower (Loft)
      { shape: "loft", x: 0.0, z: -0.05, w: 0.75, d: 0.75, y: 0.12, h: 0.52, tx: 0.0, tz: -0.05, tw: 0.65, td: 0.65, color: "#25272e", finish: "dark", edges: true },
      // Digital dosage touch screen
      { shape: "box", x: 0.0, z: 0.28, w: 0.42, d: 0.02, y: 0.38, h: 0.14, color: "#38bdf8", glow: true, edges: "glow", fix: "wdh" },
      // Stepless micrometric brass adjustment collar
      { shape: "cyl", x: 0.0, z: -0.05, w: 0.68, d: 0.68, y: 0.64, h: 0.06, color: "#c5a059", edges: "glow", fix: "h" },
      // Smoked glass conical bean hopper (Loft)
      { shape: "loft", x: 0.0, z: -0.05, w: 0.40, d: 0.40, y: 0.70, h: 0.24, tx: 0.0, tz: -0.05, tw: 0.75, td: 0.75, color: "glass", edges: true },
      // Solid walnut hopper lid
      { shape: "cyl", x: 0.0, z: -0.05, w: 0.78, d: 0.78, y: 0.94, h: 0.06, color: "#45362a", finish: "wood", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.92, d: 0.92 },
      { shape: "circle", x: 0.0, z: -0.05, r: 0.38 }
    ]
  },

  {
    num: 63,
    id: "climate_controlled_wine_cabinet",
    packId: "domolux.climate_controlled_wine_cabinet",
    name: {
      en: "Domolux Climate-Controlled Wine Cabinet",
      de: "Domolux Dreizonen-Weinklimaschrank",
      ar: "خزانة تبريد نبيذ متعددة المناخات دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Triple-temperature-zone preservation wine column with capacity for 120 bottles, low-vibration inverter compressor, natural beech glide shelves, and UV-absorbing smoked glass door.",
    size: [0.65, 0.72, 2.15],
    mount: "floor",
    surface: false,
    group: "kitchen",
    room: ["kitchen", "dining"],
    tags: ["wine", "cooler", "refrigerator", "sommelier", "appliance", "domolux"],
    parts: [
      // Base ventilation plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.95, y: 0.0, h: 0.05, color: "#141518", fix: "h" },
      // Insulated dark titanium carcass
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.05, h: 0.93, color: "#1e2229", finish: "dark", edges: true },
      // 6 Beechwood pull-out shelf rows (visible through glass)
      { shape: "box", x: 0.0, z: 0.05, w: 0.84, d: 0.80, y: 0.15, h: 0.02, color: "#a88158", finish: "wood", fix: "h" },
      { shape: "box", x: 0.0, z: 0.05, w: 0.84, d: 0.80, y: 0.28, h: 0.02, color: "#a88158", finish: "wood", fix: "h" },
      { shape: "box", x: 0.0, z: 0.05, w: 0.84, d: 0.80, y: 0.42, h: 0.02, color: "#a88158", finish: "wood", fix: "h" },
      { shape: "box", x: 0.0, z: 0.05, w: 0.84, d: 0.80, y: 0.56, h: 0.02, color: "#a88158", finish: "wood", fix: "h" },
      { shape: "box", x: 0.0, z: 0.05, w: 0.84, d: 0.80, y: 0.70, h: 0.02, color: "#a88158", finish: "wood", fix: "h" },
      { shape: "box", x: 0.0, z: 0.05, w: 0.84, d: 0.80, y: 0.84, h: 0.02, color: "#a88158", finish: "wood", fix: "h" },
      // Warm LED vertical internal column lighting
      { shape: "box", x: -0.42, z: 0.25, w: 0.02, d: 0.02, y: 0.08, h: 0.88, color: "#ffe0b2", glow: true, edges: "glow", fix: "wd" },
      { shape: "box", x: 0.42, z: 0.25, w: 0.02, d: 0.02, y: 0.08, h: 0.88, color: "#ffe0b2", glow: true, edges: "glow", fix: "wd" },
      // Smoked glass full-height door with bronze perimeter frame
      { shape: "box", x: 0.0, z: 0.48, w: 0.96, d: 0.04, y: 0.06, h: 0.92, color: "glass", edges: true },
      { shape: "box", x: -0.46, z: 0.48, w: 0.04, d: 0.05, y: 0.06, h: 0.92, color: "#c5a059", edges: "glow", fix: "wd" },
      // Full-length vertical bronze tubular handle
      { shape: "cyl", x: 0.42, z: 0.48, w: 0.03, d: 0.03, y: 0.20, h: 0.60, color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.98 },
      { shape: "line", x1: -0.45, z1: 0.48, x2: 0.45, z2: 0.48 }
    ]
  },

  {
    num: 64,
    id: "modular_wine_cellar_racking",
    packId: "domolux.modular_wine_cellar_racking",
    name: {
      en: "Domolux Modular Architectural Wine Cellar Racking",
      de: "Domolux Modulares Weinkeller-Regalsystem",
      ar: "نظام رفوف قبو النبيذ المعماري دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Architectural cellar racking installation with modular diamond storage bins, individual bottle presentation racks in French oak, and recessed LED accent lighting.",
    size: [2.20, 0.45, 2.50],
    mount: "floor",
    surface: true,
    group: "kitchen",
    room: ["dining", "kitchen", "hall"],
    tags: ["cellar", "wine", "racking", "oak", "diamond", "sommelier", "domolux"],
    parts: [
      // Base kick plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.92, y: 0.0, h: 0.04, color: "#16171b", fix: "h" },
      // Outer oak structural frame
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.98, y: 0.04, h: 0.94, color: "#3a2d23", finish: "wood", edges: true },
      // Lower diamond bin partitions (cross geometry)
      { shape: "box", x: -0.25, z: 0.0, w: 0.45, d: 0.85, y: 0.06, h: 0.42, color: "#2d231b", finish: "wood", edges: true },
      { shape: "box", x: 0.25, z: 0.0, w: 0.45, d: 0.85, y: 0.06, h: 0.42, color: "#2d231b", finish: "wood", edges: true },
      { shape: "box", x: -0.25, z: 0.0, w: 0.03, d: 0.82, y: 0.08, h: 0.38, rot: 45, color: "#47382c", finish: "wood" },
      { shape: "box", x: 0.25, z: 0.0, w: 0.03, d: 0.82, y: 0.08, h: 0.38, rot: 45, color: "#47382c", finish: "wood" },
      // Center display tasting ledge
      { shape: "box", x: 0.0, z: 0.05, w: 0.96, d: 0.95, y: 0.48, h: 0.04, color: "#c5a059", edges: "glow", fix: "h" },
      // Upper individual horizontal display pigeonholes
      { shape: "box", x: -0.25, z: 0.0, w: 0.44, d: 0.85, y: 0.54, h: 0.40, color: "#2d231b", finish: "wood", edges: true },
      { shape: "box", x: 0.25, z: 0.0, w: 0.44, d: 0.85, y: 0.54, h: 0.40, color: "#2d231b", finish: "wood", edges: true },
      // Recessed LED cove header strip
      { shape: "box", x: 0.0, z: 0.35, w: 0.96, d: 0.04, y: 0.95, h: 0.02, color: "#ffe0b2", glow: true, edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.98 },
      { shape: "line", x1: -0.45, z1: 0.0, x2: 0.45, z2: 0.0 }
    ]
  },

  {
    num: 65,
    id: "undercounter_beverage_cooler",
    packId: "domolux.undercounter_beverage_cooler",
    name: {
      en: "Domolux Undercounter Luxury Beverage Cooler",
      de: "Domolux Unterbau-Getränkekühlschrank",
      ar: "مبرد مشروبات فاخر تحت الكاونتر دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Built-under hospitality beverage center with double-glazed glass door, adjustable metal shelves for cans and champagne, toe-kick ventilation, and blue LED illumination.",
    size: [0.60, 0.60, 0.85],
    mount: "floor",
    surface: true,
    group: "kitchen",
    room: ["kitchen", "living"],
    tags: ["cooler", "beverage", "drinks", "undercounter", "appliance", "domolux"],
    parts: [
      // Toe kick grille
      { shape: "box", x: 0.0, z: -0.05, w: 0.98, d: 0.85, y: 0.0, h: 0.12, color: "#141519", fix: "h" },
      // Cabinet carcass
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.12, h: 0.86, color: "#22252c", finish: "dark", edges: true },
      // 3 Stainless Wire beverage shelves
      { shape: "box", x: 0.0, z: 0.05, w: 0.84, d: 0.78, y: 0.30, h: 0.02, color: "metal", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.05, w: 0.84, d: 0.78, y: 0.50, h: 0.02, color: "metal", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.05, w: 0.84, d: 0.78, y: 0.70, h: 0.02, color: "metal", edges: true, fix: "h" },
      // Stainless steel glass door frame & low-E glass
      { shape: "box", x: 0.0, z: 0.46, w: 0.96, d: 0.05, y: 0.13, h: 0.84, color: "metal", edges: true },
      { shape: "box", x: 0.0, z: 0.46, w: 0.78, d: 0.03, y: 0.20, h: 0.70, color: "glass", edges: true },
      // Interior cool cyan status illumination
      { shape: "box", x: 0.0, z: 0.35, w: 0.78, d: 0.02, y: 0.88, h: 0.02, color: "#00e5ff", glow: true, edges: "glow", fix: "wdh" },
      // Brushed stainless door handle
      { shape: "cyl", x: 0.42, z: 0.48, w: 0.03, d: 0.03, y: 0.35, h: 0.40, color: "metal", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "line", x1: -0.45, z1: 0.46, x2: 0.45, z2: 0.46 }
    ]
  },

  // -------------------------------------------------------------------------
  // BATCH 14: Products 066–070 (Ovens, Ice Makers & Specialized Cooking)
  // -------------------------------------------------------------------------
  {
    num: 66,
    id: "professional_ice_maker",
    packId: "domolux.professional_ice_maker",
    name: {
      en: "Domolux Professional Clear Ice Maker",
      de: "Domolux Professioneller Klareis-Bereiter",
      ar: "صانعة ثلج نقي كريستالي احترافية دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Built-in luxury clear ice machine producing crystal gourmet cubes with insulated storage bunker, internal sanitization cycle, and matching kitchen cabinet front.",
    size: [0.40, 0.60, 0.85],
    mount: "floor",
    surface: true,
    group: "kitchen",
    room: ["kitchen", "living"],
    tags: ["ice", "icemaker", "appliance", "gourmet", "kitchen", "domolux"],
    parts: [
      // Base louvered air intake
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.85, y: 0.0, h: 0.12, color: "#141518", fix: "h" },
      // Main insulated carcass
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.12, h: 0.86, color: "#22252c", finish: "dark", edges: true },
      // Stainless door panel with satin bronze handle
      { shape: "box", x: 0.0, z: 0.46, w: 0.96, d: 0.05, y: 0.13, h: 0.84, color: "metal", finish: "front", edges: true },
      { shape: "cyl", x: 0.35, z: 0.48, w: 0.03, d: 0.03, y: 0.35, h: 0.40, color: "#c5a059", edges: "glow", fix: "wd" },
      // Ice bin access top control status display
      { shape: "box", x: 0.0, z: 0.48, w: 0.50, d: 0.015, y: 0.88, h: 0.04, color: "#38bdf8", glow: true, edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "circle", x: 0.0, z: 0.1, r: 0.25 }
    ]
  },

  {
    num: 67,
    id: "built_in_combi_microwave",
    packId: "domolux.built_in_combi_microwave",
    name: {
      en: "Domolux Built-In Combi Microwave Oven",
      de: "Domolux Integrierte Kompakt-Mikrowelle",
      ar: "فرن ميكروويف مدمج متعدد الوظائف دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "45cm architectural compact combination microwave and convection oven with black obsidian glass facade, full-color touch display, and motor drop-down door.",
    size: [0.60, 0.55, 0.45],
    mount: "surface",
    surface: true,
    group: "kitchen",
    room: ["kitchen"],
    tags: ["microwave", "oven", "combi", "built-in", "kitchen", "domolux"],
    parts: [
      // Chassis
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.0, h: 1.0, color: "#1c1d22", edges: true },
      // Obsidian glass fascia
      { shape: "box", x: 0.0, z: 0.48, w: 0.98, d: 0.03, y: 0.0, h: 0.98, color: "#111215", finish: "dark", edges: true },
      // Smoked viewing window
      { shape: "box", x: 0.0, z: 0.48, w: 0.65, d: 0.015, y: 0.08, h: 0.55, color: "glass", edges: true },
      // Full color touch UI screen
      { shape: "box", x: 0.0, z: 0.48, w: 0.48, d: 0.015, y: 0.75, h: 0.16, color: "#38bdf8", glow: true, edges: "glow", fix: "wdh" },
      // Horizontal brushed dark bronze handle bar
      { shape: "cyl", x: 0.0, z: 0.48, w: 0.025, d: 0.025, y: 0.62, h: 0.72, axis: "x", color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "rect", x: 0.0, z: 0.48, w: 0.65, d: 0.04, fill: true }
    ]
  },

  {
    num: 68,
    id: "compact_steam_oven",
    packId: "domolux.compact_steam_oven",
    name: {
      en: "Domolux Compact Steam Oven",
      de: "Domolux Kompakt-Dampfbackofen",
      ar: "فرن بخاري مدمج فاخر دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Precision culinary sous-vide steam oven with external boiler generation, motor-lifted fascia revealing motorized water cartridge, and sous-vide cooking programs.",
    size: [0.60, 0.55, 0.45],
    mount: "surface",
    surface: true,
    group: "kitchen",
    room: ["kitchen"],
    tags: ["steam", "oven", "sous-vide", "culinary", "kitchen", "domolux"],
    parts: [
      // Outer carcass
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.0, h: 1.0, color: "#1c1d22", edges: true },
      // Obsidian glass door
      { shape: "box", x: 0.0, z: 0.48, w: 0.98, d: 0.03, y: 0.0, h: 0.75, color: "#111215", edges: true },
      { shape: "box", x: 0.0, z: 0.48, w: 0.68, d: 0.015, y: 0.10, h: 0.55, color: "glass", edges: true },
      // Motorized lift-up top water tank fascia
      { shape: "box", x: 0.0, z: 0.48, w: 0.98, d: 0.03, y: 0.78, h: 0.20, color: "#25272e", edges: "glow", fix: "wdh" },
      // Touch display in top fascia
      { shape: "box", x: 0.0, z: 0.48, w: 0.45, d: 0.015, y: 0.82, h: 0.12, color: "#00e5ff", glow: true, edges: "glow", fix: "wdh" },
      // Bronze handle
      { shape: "cyl", x: 0.0, z: 0.48, w: 0.025, d: 0.025, y: 0.66, h: 0.72, axis: "x", color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "rect", x: 0.0, z: 0.48, w: 0.68, d: 0.04 }
    ]
  },

  {
    num: 69,
    id: "vacuum_sealing_drawer",
    packId: "domolux.vacuum_sealing_drawer",
    name: {
      en: "Domolux Vacuum-Sealing Drawer",
      de: "Domolux Vakuumierschublade",
      ar: "درج تفريغ الهواء والتغليف دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Built-in 14cm culinary vacuum-sealing drawer featuring 99% chamber vacuum level, marinating functions, touch controls, and push-to-open mechanism.",
    size: [0.60, 0.55, 0.14],
    mount: "surface",
    surface: true,
    group: "kitchen",
    room: ["kitchen"],
    tags: ["vacuum", "drawer", "sous-vide", "sealing", "kitchen", "domolux"],
    parts: [
      // Carcass
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.0, h: 1.0, color: "#1c1d22", edges: true },
      // Front obsidian glass fascia
      { shape: "box", x: 0.0, z: 0.48, w: 0.98, d: 0.03, y: 0.0, h: 0.98, color: "#111215", finish: "dark", edges: true },
      // Touch slider strip
      { shape: "box", x: 0.0, z: 0.49, w: 0.40, d: 0.015, y: 0.42, h: 0.20, color: "#38bdf8", glow: true, edges: "glow", fix: "wdh" },
      // Recessed bronze push-to-open accent trim
      { shape: "box", x: 0.0, z: 0.48, w: 0.98, d: 0.02, y: 0.94, h: 0.04, color: "#c5a059", edges: "glow", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "line", x1: -0.4, z1: 0.48, x2: 0.4, z2: 0.48 }
    ]
  },

  {
    num: 70,
    id: "sous_vide_cooking_station",
    packId: "domolux.sous_vide_cooking_station",
    name: {
      en: "Domolux Precision Sous-Vide Cooking Station",
      de: "Domolux Präzisions-Sous-Vide-Garstation",
      ar: "محطة طهي سو-فيد دقيقة دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Countertop culinary immersion thermal bath station featuring circulating heating impeller, insulated clear polycarbonate bath with rack dividers, and WiFi touch head.",
    size: [0.38, 0.48, 0.38],
    mount: "surface",
    surface: false,
    group: "kitchen",
    room: ["kitchen"],
    tags: ["sous-vide", "immersion", "culinary", "cooker", "bath", "domolux"],
    parts: [
      // Stainless water bath base
      { shape: "box", x: 0.0, z: -0.05, w: 0.92, d: 0.85, y: 0.0, h: 0.08, color: "metal", edges: true, fix: "h" },
      // Polycarbonate transparent water tank vessel
      { shape: "box", x: 0.0, z: -0.05, w: 0.88, d: 0.80, y: 0.08, h: 0.55, color: "glass", edges: true },
      // Precision thermal circulator head tower (rear mounted)
      { shape: "cyl", x: 0.0, z: -0.32, w: 0.16, d: 0.16, y: 0.12, h: 0.85, color: "#1c1d22", edges: true, fix: "wdh" },
      // Circulator top touch display
      { shape: "cyl", x: 0.0, z: -0.32, w: 0.15, d: 0.15, y: 0.95, h: 0.04, color: "#38bdf8", glow: true, edges: "glow", fix: "wdh" },
      // Water level floating indicator
      { shape: "box", x: 0.0, z: -0.05, w: 0.82, d: 0.75, y: 0.48, h: 0.02, color: "#00e5ff", glow: true, edges: "glow" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: -0.05, w: 0.88, d: 0.8 },
      { shape: "circle", x: 0.0, z: -0.32, r: 0.08 }
    ]
  },

  // -------------------------------------------------------------------------
  // BATCH 15: Products 071–075 (Mixers, Chillers & Statement Extraction Hoods)
  // -------------------------------------------------------------------------
  {
    num: 71,
    id: "luxury_stand_mixer",
    packId: "domolux.luxury_stand_mixer",
    name: {
      en: "Domolux Luxury Stand Mixer",
      de: "Domolux Luxus-Küchenmaschine",
      ar: "عجانة كهربائية فاخرة دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Countertop die-cast aluminum stand mixer finished in dark anthracite enamel with mirror-polished stainless steel bowl, planetary gearing head, and brass speed lever.",
    size: [0.38, 0.42, 0.45],
    mount: "surface",
    surface: false,
    group: "kitchen",
    room: ["kitchen"],
    tags: ["mixer", "baking", "culinary", "appliance", "countertop", "domolux"],
    parts: [
      // Heavy pedestal foot plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.82, d: 0.88, y: 0.0, h: 0.10, color: "#1c1d22", edges: true, fix: "h" },
      // Mirror polished stainless mixing bowl
      { shape: "loft", x: 0.0, z: 0.18, w: 0.52, d: 0.52, y: 0.10, h: 0.48, tx: 0.0, tz: 0.18, tw: 0.65, td: 0.65, color: "metal", edges: true },
      // Rear upright column body (Loft)
      { shape: "loft", x: 0.0, z: -0.22, w: 0.45, d: 0.40, y: 0.10, h: 0.45, tx: 0.0, tz: -0.22, tw: 0.38, td: 0.35, color: "#25272e", finish: "dark", edges: true },
      // Cantilevered planetary motor head
      { shape: "loft", x: 0.0, z: 0.0, w: 0.38, d: 0.80, y: 0.55, h: 0.38, tx: 0.0, tz: 0.05, tw: 0.35, td: 0.75, color: "#25272e", finish: "dark", edges: true },
      // Speed selection brass lever & dial
      { shape: "cyl", x: 0.20, z: -0.15, w: 0.05, d: 0.05, y: 0.68, h: 0.04, axis: "x", color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.82, d: 0.88 },
      { shape: "circle", x: 0.0, z: 0.18, r: 0.32 }
    ]
  },

  {
    num: 72,
    id: "precision_food_processor",
    packId: "domolux.precision_food_processor",
    name: {
      en: "Domolux Precision Food Processor",
      de: "Domolux Präzisions-Küchen-Food-Processor",
      ar: "محضر طعام دقيق فاخر دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Induction-drive commercial food processor with transparent Tritan work bowl, precision pulse dials, dual feed chute, and brushed stainless motor base.",
    size: [0.32, 0.35, 0.48],
    mount: "surface",
    surface: false,
    group: "kitchen",
    room: ["kitchen"],
    tags: ["processor", "food", "chopper", "blender", "kitchen", "domolux"],
    parts: [
      // Motor base housing
      { shape: "box", x: 0.0, z: 0.0, w: 0.85, d: 0.85, y: 0.0, h: 0.35, color: "metal", edges: true, fix: "h" },
      // Push button control panel
      { shape: "box", x: 0.0, z: 0.38, w: 0.55, d: 0.04, y: 0.12, h: 0.14, color: "#1c1d22", edges: "glow", fix: "wdh" },
      // Transparent polycarbonate main bowl
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.78, d: 0.78, y: 0.35, h: 0.45, color: "glass", edges: true },
      // Lid with feed chute
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.80, d: 0.80, y: 0.80, h: 0.05, color: "#25272e", edges: true, fix: "h" },
      { shape: "cyl", x: 0.18, z: 0.10, w: 0.22, d: 0.22, y: 0.85, h: 0.14, color: "glass", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.85, d: 0.85 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.39 }
    ]
  },

  {
    num: 73,
    id: "undercounter_blast_chiller",
    packId: "domolux.undercounter_blast_chiller",
    name: {
      en: "Domolux Undercounter Blast Chiller",
      de: "Domolux Unterbau-Schockkühler",
      ar: "مبرد صدمات سريع تحت الكاونتر دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Culinary blast chiller and shock freezer with core food temperature probe, forced cross-flow evaporation fans, touch screen cycles, and insulated stainless door.",
    size: [0.60, 0.62, 0.85],
    mount: "floor",
    surface: true,
    group: "kitchen",
    room: ["kitchen"],
    tags: ["chiller", "blast", "freezer", "culinary", "appliance", "domolux"],
    parts: [
      // Base louvered air intake
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.85, y: 0.0, h: 0.12, color: "#141518", fix: "h" },
      // Insulated stainless body
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.12, h: 0.86, color: "#22252c", finish: "dark", edges: true },
      // Stainless door panel with satin bronze handle
      { shape: "box", x: 0.0, z: 0.46, w: 0.96, d: 0.05, y: 0.13, h: 0.84, color: "metal", finish: "front", edges: true },
      { shape: "cyl", x: 0.38, z: 0.48, w: 0.03, d: 0.03, y: 0.35, h: 0.40, color: "#c5a059", edges: "glow", fix: "wd" },
      // Digital cycle touch display (Blue backlight)
      { shape: "box", x: 0.0, z: 0.48, w: 0.52, d: 0.015, y: 0.85, h: 0.06, color: "#00e5ff", glow: true, edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "line", x1: -0.45, z1: 0.46, x2: 0.45, z2: 0.46 }
    ]
  },

  {
    num: 74,
    id: "filtered_water_dispenser",
    packId: "domolux.filtered_water_dispenser",
    name: {
      en: "Domolux Boiling and Chilled Water Dispensing Tower",
      de: "Domolux Multifunktions-Wassersäule",
      ar: "برج توزيع مياه مغلية ومثلجة ومكربنة دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Countertop architectural hydro-tap dispensing instant 100°C boiling water, chilled still, and sparkling water via sub-counter filtration chiller tank with illuminated touch ring.",
    size: [0.18, 0.24, 0.45],
    mount: "surface",
    surface: false,
    group: "kitchen",
    room: ["kitchen"],
    tags: ["water", "dispenser", "tap", "boiling", "sparkling", "kitchen", "domolux"],
    parts: [
      // Base escutcheon plate
      { shape: "cyl", x: 0.0, z: -0.15, w: 0.55, d: 0.55, y: 0.0, h: 0.04, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Main vertical cylindrical tap pillar
      { shape: "cyl", x: 0.0, z: -0.15, w: 0.28, d: 0.28, y: 0.04, h: 0.70, color: "#c5a059", edges: "glow", fix: "wd" },
      // Horizontal gooseneck spout arm
      { shape: "box", x: 0.0, z: 0.05, w: 0.22, d: 0.55, y: 0.74, h: 0.12, color: "#c5a059", edges: "glow", fix: "h" },
      // Dispensing aerator nozzle
      { shape: "cyl", x: 0.0, z: 0.25, w: 0.15, d: 0.15, y: 0.65, h: 0.09, color: "metal", fix: "wdh" },
      // Interactive LED touch mode ring (Boiling red / chilled blue)
      { shape: "cyl", x: 0.0, z: -0.15, w: 0.32, d: 0.32, y: 0.86, h: 0.04, color: "#00e5ff", glow: true, edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: -0.15, r: 0.28 },
      { shape: "line", x1: 0.0, z1: -0.15, x2: 0.0, z2: 0.25 }
    ]
  },

  {
    num: 75,
    id: "ceiling_island_extractor",
    packId: "domolux.ceiling_island_extractor",
    name: {
      en: "Domolux Ceiling-Mounted Island Extraction Hood",
      de: "Domolux Deckenhängende Kücheninsel-Dunstabzugshaube",
      ar: "شفاط مطبخ جزيرة معلق بالسقف دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Suspended architectural island range hood with brushed champagne bronze shell, perimeter aspiration baffle filters, integrated warm LED cooktop floodlights, and silent motor.",
    size: [1.40, 0.65, 0.85],
    mount: "ceiling",
    surface: false,
    group: "ceiling",
    room: ["kitchen"],
    tags: ["extractor", "hood", "island", "kitchen", "ventilation", "bronze", "domolux"],
    parts: [
      // Top ceiling mounting plate
      { shape: "box", x: 0.0, z: 0.0, w: 0.50, d: 0.50, y: 0.95, h: 0.05, color: "#1e2229", fix: "wdh" },
      // Twin vertical flue suspension chimneys
      { shape: "box", x: 0.0, z: 0.0, w: 0.45, d: 0.45, y: 0.35, h: 0.60, color: "#3d301b", finish: "dark", edges: "glow" },
      // Main flared bronze canopy body (Loft)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.50, d: 0.50, y: 0.12, h: 0.24, tx: 0.0, tz: 0.0, tw: 0.98, td: 0.95, color: "#c5a059", edges: "glow" },
      // Bottom extraction base rim
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.98, y: 0.02, h: 0.10, color: "#c5a059", edges: "glow", fix: "h" },
      // Stainless perimeter aspiration baffle filters (recessed)
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.84, y: 0.0, h: 0.03, color: "metal", edges: true, fix: "h" },
      // Integrated high-CRI cooktop LED floodlights
      { shape: "box", x: -0.32, z: 0.0, w: 0.15, d: 0.60, y: 0.01, h: 0.015, color: "#fff5ea", glow: true, edges: "glow", fix: "h" },
      { shape: "box", x: 0.32, z: 0.0, w: 0.15, d: 0.60, y: 0.01, h: 0.015, color: "#fff5ea", glow: true, edges: "glow", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.98 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.88, d: 0.84, fill: true }
    ]
  },

  // -------------------------------------------------------------------------
  // BATCH 16: Products 076–080 (Downdrafts, Pantries & Waste Management)
  // -------------------------------------------------------------------------
  {
    num: 76,
    id: "retractable_downdraft_extractor",
    packId: "domolux.retractable_downdraft_extractor",
    name: {
      en: "Domolux Retractable Countertop Downdraft Extractor",
      de: "Domolux Versenkbarer Tisch-Dunstabzug",
      ar: "شفاط مدمج هابط في الكاونتر وقابل للسحب دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Motorized flush-countertop downdraft ventilation unit rising 40cm above island worktops with perimeter extraction slot, glass touch control slider, and dimmable LED strip.",
    size: [0.90, 0.15, 0.75],
    mount: "surface",
    surface: true,
    group: "kitchen",
    room: ["kitchen"],
    tags: ["downdraft", "extractor", "countertop", "motorized", "kitchen", "domolux"],
    parts: [
      // Sub-counter housing mechanism chassis
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.92, y: 0.0, h: 0.55, color: "#1c1d22", edges: "faint" },
      // Flush countertop glass collar rim
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.54, h: 0.02, color: "#111215", fix: "h" },
      // Motorized rising extractor screen blade (Extending above counter)
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.40, y: 0.56, h: 0.44, color: "#25272e", edges: true },
      // Stainless extraction grille slot
      { shape: "box", x: 0.0, z: 0.18, w: 0.88, d: 0.04, y: 0.65, h: 0.28, color: "metal", edges: true },
      // Top ambient LED task illumination strip
      { shape: "box", x: 0.0, z: 0.15, w: 0.90, d: 0.03, y: 0.98, h: 0.015, color: "#fff5ea", glow: true, edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "line", x1: -0.45, z1: 0.0, x2: 0.45, z2: 0.0 }
    ]
  },

  {
    num: 77,
    id: "pull_out_pantry_carousel",
    packId: "domolux.pull_out_pantry_carousel",
    name: {
      en: "Domolux Pull-Out Pantry Carousel System",
      de: "Domolux Ausziehbarer Vorratsschrank-Drehkarussell",
      ar: "نظام دوار سحاب لخزانة المؤن دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Heavy-duty full-extension tall pantry larder with revolving tiered smoked-glass baskets, soft-closing damper slides, solid oak trim, and integrated sensor illumination.",
    size: [0.45, 0.60, 2.15],
    mount: "floor",
    surface: false,
    group: "kitchen",
    room: ["kitchen"],
    tags: ["pantry", "larder", "carousel", "storage", "pull-out", "kitchen", "domolux"],
    parts: [
      // Tall carcass housing
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.0, h: 1.0, color: "#22252c", finish: "dark", edges: true },
      // Pull-out door front panel with bronze handle
      { shape: "box", x: 0.0, z: 0.48, w: 0.96, d: 0.04, y: 0.02, h: 0.96, color: "#3a2d23", finish: "wood", edges: true },
      { shape: "cyl", x: 0.0, z: 0.48, w: 0.03, d: 0.03, y: 0.35, h: 0.50, color: "#c5a059", edges: "glow", fix: "wd" },
      // Central vertical chrome spine column
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.06, d: 0.06, y: 0.06, h: 0.88, color: "metal", fix: "wd" },
      // 5 Tiered rotating smoked-glass and bronze wire baskets
      { shape: "box", x: 0.0, z: 0.0, w: 0.82, d: 0.78, y: 0.12, h: 0.08, color: "glass", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.82, d: 0.78, y: 0.30, h: 0.08, color: "glass", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.82, d: 0.78, y: 0.48, h: 0.08, color: "glass", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.82, d: 0.78, y: 0.66, h: 0.08, color: "glass", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.82, d: 0.78, y: 0.84, h: 0.08, color: "glass", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.98 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.35 }
    ]
  },

  {
    num: 78,
    id: "butlers_pantry_wall",
    packId: "domolux.butlers_pantry_wall",
    name: {
      en: "Domolux Butler's Pantry Storage Wall",
      de: "Domolux Butler's Pantry Vorrats- und Servicewand",
      ar: "جدار خزانة خدمة وخادم المطبخ دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Floor-to-ceiling back-kitchen hospitality staging wall with pocket cabinet doors, integrated microwave and coffee niches, honed quartzite prep counter, and LED glass cabinets.",
    size: [2.60, 0.70, 2.60],
    mount: "floor",
    surface: true,
    group: "kitchen",
    room: ["kitchen"],
    tags: ["butler", "pantry", "storage", "cabinet", "quartzite", "kitchen", "domolux"],
    parts: [
      // Base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.92, y: 0.0, h: 0.04, color: "#16171b", fix: "h" },
      // Lower cabinet bank
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.95, y: 0.04, h: 0.36, color: "#2d241c", finish: "wood", edges: true },
      // Honed Taj Mahal quartzite staging countertop
      { shape: "box", x: 0.0, z: 0.02, w: 1.0, d: 0.98, y: 0.40, h: 0.05, color: "#e4dfd5", finish: "body", edges: true, fix: "h" },
      // Middle appliance counter prep niche cavity (tiled back wall)
      { shape: "box", x: 0.0, z: -0.38, w: 0.96, d: 0.04, y: 0.45, h: 0.35, color: "#cfc8bc", finish: "body" },
      // Upper glazed display cupboards
      { shape: "box", x: 0.0, z: -0.15, w: 0.96, d: 0.55, y: 0.80, h: 0.20, color: "#2d241c", finish: "wood", edges: true },
      { shape: "box", x: -0.24, z: 0.12, w: 0.44, d: 0.03, y: 0.81, h: 0.18, color: "glass", edges: true },
      { shape: "box", x: 0.24, z: 0.12, w: 0.44, d: 0.03, y: 0.81, h: 0.18, color: "glass", edges: true },
      // Concealed LED counter task strip
      { shape: "box", x: 0.0, z: -0.05, w: 0.94, d: 0.04, y: 0.79, h: 0.015, color: "#fff5ea", glow: true, edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.98 },
      { shape: "line", x1: -0.48, z1: 0.0, x2: 0.48, z2: 0.0 }
    ]
  },

  {
    num: 79,
    id: "kitchen_waste_compactor",
    packId: "domolux.kitchen_waste_compactor",
    name: {
      en: "Domolux Integrated Kitchen Waste Compactor",
      de: "Domolux Integrierter Müllverdichter",
      ar: "مكبس نفايات مطبخ مدمج دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Built-in 4:1 compaction ratio residential trash compactor featuring odor-control charcoal filter, push-to-open foot pedal, stainless compaction ram, and sound insulation.",
    size: [0.38, 0.60, 0.85],
    mount: "floor",
    surface: true,
    group: "kitchen",
    room: ["kitchen"],
    tags: ["compactor", "waste", "trash", "recycling", "kitchen", "domolux"],
    parts: [
      // Base toe kick
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.85, y: 0.0, h: 0.12, color: "#141518", fix: "h" },
      // Cabinet carcass
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.12, h: 0.86, color: "#22252c", finish: "dark", edges: true },
      // Heavy pull-out compactor bin drawer
      { shape: "box", x: 0.0, z: 0.46, w: 0.96, d: 0.05, y: 0.13, h: 0.84, color: "metal", finish: "front", edges: true },
      // Toe-kick foot release pedal
      { shape: "box", x: 0.0, z: 0.46, w: 0.25, d: 0.06, y: 0.04, h: 0.04, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Handle and lock key switch
      { shape: "cyl", x: 0.0, z: 0.46, w: 0.03, d: 0.03, y: 0.86, h: 0.24, axis: "x", color: "#c5a059", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "rect", x: 0.0, z: 0.46, w: 0.25, d: 0.06 }
    ]
  },

  {
    num: 80,
    id: "indoor_food_waste_composter",
    packId: "domolux.indoor_food_waste_composter",
    name: {
      en: "Domolux Indoor Food-Waste Dehydrating Composter",
      de: "Domolux Elektrischer Küchenabfall-Komposter",
      ar: "جهاز تجفيف وتحويل مخلفات الطعام المنزلي دومولوكس"
    },
    collection: "Gourmet Kitchens and Specialty Culinary Equipment",
    collectionSlug: "04_Gourmet_Kitchens_Culinary",
    category: "Kitchen",
    description: "Countertop or undercounter electric culinary waste dehydrator and compost transformer with activated carbon odor scrubbing, cast aluminum processing chamber, and touch controls.",
    size: [0.35, 0.45, 0.42],
    mount: "surface",
    surface: true,
    group: "kitchen",
    room: ["kitchen"],
    tags: ["composter", "waste", "organic", "sustainability", "kitchen", "domolux"],
    parts: [
      // Base housing
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.92, y: 0.0, h: 0.15, color: "#1c1d22", edges: true, fix: "h" },
      // Main rounded body chamber (Loft)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.88, d: 0.88, y: 0.15, h: 0.65, tx: 0.0, tz: 0.0, tw: 0.84, td: 0.84, color: "#25272e", finish: "dark", edges: true },
      // Sealed top lid with bronze release latch
      { shape: "box", x: 0.0, z: 0.0, w: 0.86, d: 0.86, y: 0.80, h: 0.15, color: "#16171b", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.38, w: 0.18, d: 0.06, y: 0.84, h: 0.05, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Illuminated status halo ring (Green processing / white idle)
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.42, d: 0.42, y: 0.96, h: 0.03, color: "#00e676", glow: true, edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.92, d: 0.92 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.22 }
    ]
  }
];
