// DOMOLUX VILLA 200 — COLLECTION A: ARCHITECTURAL INTERIOR SYSTEMS (Products 001–020)
// Batches 01–04

export const COLLECTION_A_PRODUCTS = [
  // -------------------------------------------------------------------------
  // BATCH 01: Products 001–005 (Wall Cladding & Surface Architecture)
  // -------------------------------------------------------------------------
  {
    num: 1,
    id: "architectural_wall_cladding",
    packId: "domolux.architectural_wall_cladding",
    name: {
      en: "Domolux Architectural Wall Cladding System",
      de: "Domolux Architektur-Wandverkleidungssystem",
      ar: "نظام دومولوكس لتكسية الجدران المعمارية"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Monumental modular architectural wall paneling system featuring fluted smoked oak stiles, honed Calacatta marble central reveal, recessed satin bronze shadow gaps, and integrated vertical ambient LED illumination.",
    size: [2.80, 0.12, 2.80],
    mount: "wall",
    wall_y: 0.0,
    surface: false,
    group: "wall",
    room: ["living", "hall", "dining", "bedroom"],
    tags: ["wall", "cladding", "wood", "marble", "bronze", "architectural", "domolux"],
    parts: [
      { shape: "box", x: 0.0, z: -0.25, w: 0.98, d: 0.40, y: 0.0, h: 0.025, color: "#121316", edges: "faint", fix: "h" },
      { shape: "box", x: 0.0, z: -0.05, w: 0.36, d: 0.70, y: 0.025, h: 0.95, color: "#dcd6cc", finish: "body", edges: true },
      { shape: "box", x: -0.32, z: -0.15, w: 0.32, d: 0.60, y: 0.025, h: 0.95, color: "#2c241e", finish: "wood", edges: "faint" },
      { shape: "box", x: 0.32, z: -0.15, w: 0.32, d: 0.60, y: 0.025, h: 0.95, color: "#2c241e", finish: "wood", edges: "faint" },
      { shape: "box", x: -0.49, z: 0.0, w: 0.02, d: 0.85, y: 0.025, h: 0.95, color: "#9e8354", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.49, z: 0.0, w: 0.02, d: 0.85, y: 0.025, h: 0.95, color: "#9e8354", edges: "glow", fix: "wd" },
      { shape: "box", x: -0.18, z: 0.02, w: 0.015, d: 0.88, y: 0.025, h: 0.95, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.18, z: 0.02, w: 0.015, d: 0.88, y: 0.025, h: 0.95, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: -0.19, z: 0.05, w: 0.01, d: 0.15, y: 0.04, h: 0.92, color: "#ffe0b2", glow: true, edges: "glow", fix: "wd" },
      { shape: "box", x: 0.19, z: 0.05, w: 0.01, d: 0.15, y: 0.04, h: 0.92, color: "#ffe0b2", glow: true, edges: "glow", fix: "wd" },
      { shape: "box", x: -0.44, z: 0.08, w: 0.04, d: 0.50, y: 0.025, h: 0.95, color: "#3d322a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: -0.38, z: 0.08, w: 0.04, d: 0.50, y: 0.025, h: 0.95, color: "#3d322a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: -0.30, z: 0.08, w: 0.04, d: 0.50, y: 0.025, h: 0.95, color: "#3d322a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: -0.24, z: 0.08, w: 0.04, d: 0.50, y: 0.025, h: 0.95, color: "#3d322a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.24, z: 0.08, w: 0.04, d: 0.50, y: 0.025, h: 0.95, color: "#3d322a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.30, z: 0.08, w: 0.04, d: 0.50, y: 0.025, h: 0.95, color: "#3d322a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.38, z: 0.08, w: 0.04, d: 0.50, y: 0.025, h: 0.95, color: "#3d322a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.44, z: 0.08, w: 0.04, d: 0.50, y: 0.025, h: 0.95, color: "#3d322a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.0, z: -0.10, w: 1.0, d: 0.65, y: 0.975, h: 0.025, color: "#1f1d1b", edges: "faint", fix: "h" },
      { shape: "box", x: 0.0, z: 0.02, w: 0.98, d: 0.88, y: 0.97, h: 0.015, color: "#9e8354", edges: "glow", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.85 },
      { shape: "line", x1: -0.49, z1: -0.42, x2: 0.49, z2: -0.42 },
      { shape: "line", x1: -0.18, z1: 0.42, x2: -0.18, z2: -0.42 },
      { shape: "line", x1: 0.18, z1: 0.42, x2: 0.18, z2: -0.42 }
    ]
  },

  {
    num: 2,
    id: "fluted_timber_feature_wall",
    packId: "domolux.fluted_timber_feature_wall",
    name: {
      en: "Domolux Fluted Timber Feature Wall",
      de: "Domolux Geriffelte Holz-Akzentwand",
      ar: "جدار خشبي مضلع مميز دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Floor-to-ceiling smoked walnut acoustic wall featuring deep vertical flutes, acoustic absorption backing, dark bronze shadow reveals, and integrated top perimeter wash lighting.",
    size: [2.40, 0.10, 3.00],
    mount: "wall",
    wall_y: 0.0,
    surface: false,
    group: "wall",
    room: ["living", "dining", "hall", "office"],
    tags: ["fluted", "wood", "walnut", "acoustic", "wall", "feature", "domolux"],
    parts: [
      { shape: "box", x: 0.0, z: -0.35, w: 1.0, d: 0.30, y: 0.0, h: 1.0, color: "#16171b", edges: "faint" },
      { shape: "box", x: 0.0, z: -0.15, w: 0.98, d: 0.40, y: 0.02, h: 0.96, color: "#2d241e", finish: "wood", edges: "faint" },
      { shape: "box", x: 0.0, z: -0.40, w: 1.0, d: 0.20, y: 0.0, h: 0.02, color: "#0d0e11", fix: "h" },
      { shape: "box", x: 0.0, z: -0.40, w: 1.0, d: 0.20, y: 0.98, h: 0.02, color: "#0d0e11", fix: "h" },
      { shape: "box", x: 0.0, z: 0.25, w: 0.96, d: 0.15, y: 0.97, h: 0.015, color: "#ffe2ba", glow: true, edges: "glow", fix: "wdh" },
      // 12 precision walnut slats
      { shape: "box", x: -0.44, z: 0.15, w: 0.05, d: 0.60, y: 0.02, h: 0.95, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: -0.36, z: 0.15, w: 0.05, d: 0.60, y: 0.02, h: 0.95, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: -0.28, z: 0.15, w: 0.05, d: 0.60, y: 0.02, h: 0.95, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: -0.20, z: 0.15, w: 0.05, d: 0.60, y: 0.02, h: 0.95, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: -0.12, z: 0.15, w: 0.05, d: 0.60, y: 0.02, h: 0.95, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: -0.04, z: 0.15, w: 0.05, d: 0.60, y: 0.02, h: 0.95, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.04, z: 0.15, w: 0.05, d: 0.60, y: 0.02, h: 0.95, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.12, z: 0.15, w: 0.05, d: 0.60, y: 0.02, h: 0.95, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.20, z: 0.15, w: 0.05, d: 0.60, y: 0.02, h: 0.95, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.28, z: 0.15, w: 0.05, d: 0.60, y: 0.02, h: 0.95, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.36, z: 0.15, w: 0.05, d: 0.60, y: 0.02, h: 0.95, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.44, z: 0.15, w: 0.05, d: 0.60, y: 0.02, h: 0.95, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      // Bronze side trim
      { shape: "box", x: -0.49, z: 0.10, w: 0.02, d: 0.75, y: 0.0, h: 1.0, color: "#7a623a", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.49, z: 0.10, w: 0.02, d: 0.75, y: 0.0, h: 1.0, color: "#7a623a", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.9 },
      { shape: "line", x1: -0.48, z1: 0.4, x2: 0.48, z2: 0.4 }
    ]
  },

  {
    num: 3,
    id: "upholstered_acoustic_wall_panels",
    packId: "domolux.upholstered_acoustic_wall_panels",
    name: {
      en: "Domolux Upholstered Acoustic Wall Panels",
      de: "Domolux Gepolsterte Akustik-Wandpaneele",
      ar: "ألواح حائط صوتية منجدة دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Geometric modular upholstered acoustic wall system with Italian cashmere and bouclé segment pillows, recessed dark bronze framing, and sound dampening core.",
    size: [2.60, 0.14, 2.60],
    mount: "wall",
    wall_y: 0.20,
    surface: false,
    group: "wall",
    room: ["cinema", "bedroom", "living", "office"],
    tags: ["acoustic", "upholstered", "fabric", "boucle", "panels", "cinema", "domolux"],
    parts: [
      { shape: "box", x: 0.0, z: -0.35, w: 0.98, d: 0.25, y: 0.0, h: 1.0, color: "#191a20", edges: "faint" },
      { shape: "box", x: 0.0, z: -0.15, w: 1.0, d: 0.35, y: 0.0, h: 1.0, color: "#614d2e", edges: "glow" },
      // 6 padded geometric cushions
      { shape: "loft", x: -0.24, z: 0.15, w: 0.44, d: 0.55, y: 0.04, h: 0.43, tx: -0.24, tz: 0.18, tw: 0.40, td: 0.48, color: "fabric", finish: "fabric", edges: true },
      { shape: "loft", x: 0.24, z: 0.15, w: 0.44, d: 0.55, y: 0.04, h: 0.43, tx: 0.24, tz: 0.18, tw: 0.40, td: 0.48, color: "cushion", finish: "fabric", edges: true },
      { shape: "loft", x: -0.24, z: 0.15, w: 0.44, d: 0.55, y: 0.52, h: 0.43, tx: -0.24, tz: 0.18, tw: 0.40, td: 0.48, color: "cushion", finish: "fabric", edges: true },
      { shape: "loft", x: 0.24, z: 0.15, w: 0.44, d: 0.55, y: 0.52, h: 0.43, tx: 0.24, tz: 0.18, tw: 0.40, td: 0.48, color: "fabric", finish: "fabric", edges: true },
      // Bronze cruciform dividing channels
      { shape: "box", x: 0.0, z: 0.05, w: 0.03, d: 0.50, y: 0.02, h: 0.96, color: "#c5a059", edges: "glow", fix: "w" },
      { shape: "box", x: 0.0, z: 0.05, w: 0.96, d: 0.50, y: 0.48, h: 0.03, color: "#c5a059", edges: "glow", fix: "h" },
      // Concealed perimeter glow
      { shape: "box", x: 0.0, z: -0.05, w: 0.98, d: 0.10, y: 0.98, h: 0.015, color: "#ffeacc", glow: true, edges: "glow", fix: "h" },
      { shape: "box", x: 0.0, z: -0.05, w: 0.98, d: 0.10, y: 0.005, h: 0.015, color: "#ffeacc", glow: true, edges: "glow", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.8 },
      { shape: "line", x1: 0.0, z1: -0.4, x2: 0.0, z2: 0.4 },
      { shape: "line", x1: -0.5, z1: 0.0, x2: 0.5, z2: 0.0 }
    ]
  },

  {
    num: 4,
    id: "sculptural_3d_wall_relief",
    packId: "domolux.sculptural_3d_wall_relief",
    name: {
      en: "Domolux Sculptural 3D Wall Relief",
      de: "Domolux Skulpturales 3D-Wandrelief",
      ar: "نقش جداري نحتي ثلاثي الأبعاد دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Museum-grade dimensional faceted wall installation engineered from cast mineral plaster and champagne gold leaf with angled light-catching geometric facets.",
    size: [2.20, 0.22, 2.20],
    mount: "wall",
    wall_y: 0.30,
    surface: false,
    group: "decor",
    room: ["living", "hall", "dining"],
    tags: ["relief", "sculpture", "art", "plaster", "facets", "luxury", "domolux"],
    parts: [
      { shape: "box", x: 0.0, z: -0.35, w: 0.96, d: 0.25, y: 0.02, h: 0.96, color: "#14151a", edges: "faint" },
      { shape: "box", x: 0.0, z: -0.15, w: 1.0, d: 0.30, y: 0.0, h: 1.0, color: "#22242c", edges: "faint" },
      // 9 angled faceted geometric pyramids (lofts)
      { shape: "loft", x: -0.30, z: 0.15, w: 0.30, d: 0.60, y: 0.05, h: 0.28, tx: -0.28, tz: 0.25, tw: 0.12, td: 0.30, color: "#e3ded7", edges: true },
      { shape: "loft", x: 0.0, z: 0.15, w: 0.28, d: 0.60, y: 0.05, h: 0.28, tx: 0.02, tz: 0.20, tw: 0.10, td: 0.25, color: "#d2c7b8", edges: true },
      { shape: "loft", x: 0.30, z: 0.15, w: 0.30, d: 0.60, y: 0.05, h: 0.28, tx: 0.26, tz: 0.28, tw: 0.12, td: 0.30, color: "#e3ded7", edges: true },
      { shape: "loft", x: -0.30, z: 0.15, w: 0.30, d: 0.60, y: 0.36, h: 0.28, tx: -0.26, tz: 0.22, tw: 0.12, td: 0.28, color: "#c5a059", edges: "glow" },
      { shape: "loft", x: 0.0, z: 0.15, w: 0.28, d: 0.60, y: 0.36, h: 0.28, tx: 0.0, tz: 0.30, tw: 0.14, td: 0.32, color: "#ede9e3", edges: true },
      { shape: "loft", x: 0.30, z: 0.15, w: 0.30, d: 0.60, y: 0.36, h: 0.28, tx: 0.32, tz: 0.24, tw: 0.12, td: 0.28, color: "#d2c7b8", edges: true },
      { shape: "loft", x: -0.30, z: 0.15, w: 0.30, d: 0.60, y: 0.67, h: 0.28, tx: -0.32, tz: 0.26, tw: 0.12, td: 0.30, color: "#d2c7b8", edges: true },
      { shape: "loft", x: 0.0, z: 0.15, w: 0.28, d: 0.60, y: 0.67, h: 0.28, tx: -0.02, tz: 0.22, tw: 0.10, td: 0.25, color: "#e3ded7", edges: true },
      { shape: "loft", x: 0.30, z: 0.15, w: 0.30, d: 0.60, y: 0.67, h: 0.28, tx: 0.28, tz: 0.28, tw: 0.12, td: 0.30, color: "#c5a059", edges: "glow" },
      // Frame
      { shape: "box", x: 0.0, z: 0.25, w: 1.0, d: 0.10, y: 0.0, h: 0.02, color: "#9e8354", edges: "glow", fix: "h" },
      { shape: "box", x: 0.0, z: 0.25, w: 1.0, d: 0.10, y: 0.98, h: 0.02, color: "#9e8354", edges: "glow", fix: "h" },
      { shape: "box", x: -0.49, z: 0.25, w: 0.02, d: 0.10, y: 0.0, h: 1.0, color: "#9e8354", edges: "glow", fix: "w" },
      { shape: "box", x: 0.49, z: 0.25, w: 0.02, d: 0.10, y: 0.0, h: 1.0, color: "#9e8354", edges: "glow", fix: "w" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.8 },
      { shape: "line", x1: -0.4, z1: -0.3, x2: 0.4, z2: 0.3 },
      { shape: "line", x1: -0.4, z1: 0.3, x2: 0.4, z2: -0.3 }
    ]
  },

  {
    num: 5,
    id: "backlit_onyx_feature_wall",
    packId: "domolux.backlit_onyx_feature_wall",
    name: {
      en: "Domolux Backlit Onyx Feature Wall",
      de: "Domolux Hinterleuchtete Onyx-Wand",
      ar: "جدار أونيكس مضاء من الخلف دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Grand architectural feature wall with book-matched translucent honey onyx slabs, integrated LED light matrix, bronze architectural framing, and floating cantilevered hearth ledge.",
    size: [2.50, 0.25, 2.80],
    mount: "wall",
    wall_y: 0.0,
    surface: true,
    group: "wall",
    room: ["living", "hall", "bath", "dining"],
    tags: ["onyx", "backlit", "stone", "light", "luxury", "wall", "domolux"],
    parts: [
      { shape: "box", x: 0.0, z: -0.35, w: 0.98, d: 0.25, y: 0.0, h: 1.0, color: "#111215", edges: "faint" },
      // Diffuser and LED light matrix
      { shape: "box", x: 0.0, z: -0.15, w: 0.92, d: 0.15, y: 0.08, h: 0.88, color: "#fff2d9", glow: true, edges: "glow" },
      // Translucent book-matched onyx slabs (amber / honey mineral)
      { shape: "box", x: -0.23, z: 0.05, w: 0.45, d: 0.20, y: 0.10, h: 0.85, color: "#e8a85a", edges: true },
      { shape: "box", x: 0.23, z: 0.05, w: 0.45, d: 0.20, y: 0.10, h: 0.85, color: "#e8a85a", edges: true },
      // Bronze grid framing
      { shape: "box", x: 0.0, z: 0.15, w: 0.02, d: 0.15, y: 0.08, h: 0.89, color: "#7a623a", edges: "glow", fix: "w" },
      { shape: "box", x: 0.0, z: 0.15, w: 0.96, d: 0.15, y: 0.52, h: 0.02, color: "#7a623a", edges: "glow", fix: "h" },
      { shape: "box", x: -0.48, z: 0.15, w: 0.04, d: 0.25, y: 0.0, h: 1.0, color: "#3d301b", edges: "glow", fix: "w" },
      { shape: "box", x: 0.48, z: 0.15, w: 0.04, d: 0.25, y: 0.0, h: 1.0, color: "#3d301b", edges: "glow", fix: "w" },
      { shape: "box", x: 0.0, z: 0.15, w: 1.0, d: 0.25, y: 0.97, h: 0.03, color: "#3d301b", edges: "glow", fix: "h" },
      // Floating basalt cantilevered hearth ledge
      { shape: "box", x: 0.0, z: 0.35, w: 1.0, d: 0.45, y: 0.02, h: 0.08, color: "#1f2026", finish: "dark", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.38, w: 0.96, d: 0.05, y: 0.01, h: 0.015, color: "#ffc266", glow: true, edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.1, w: 1.0, d: 0.7 },
      { shape: "rect", x: 0.0, z: 0.35, w: 1.0, d: 0.3, fill: true },
      { shape: "line", x1: 0.0, z1: -0.2, x2: 0.0, z2: 0.3 }
    ]
  },

  // -------------------------------------------------------------------------
  // BATCH 02: Products 006–010 (Niches, Columns, Portals & Ceilings)
  // -------------------------------------------------------------------------
  {
    num: 6,
    id: "architectural_display_niches",
    packId: "domolux.architectural_display_niches",
    name: {
      en: "Domolux Architectural Display Niche System",
      de: "Domolux Architektonisches Wandnischen-System",
      ar: "نظام كوات العرض المعمارية دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Built-in architectural triple-tier display niche with dark walnut backing, recessed warm spotlights, polished bronze perimeter frame, and tempered glass display shelves.",
    size: [1.60, 0.38, 2.40],
    mount: "wall",
    wall_y: 0.20,
    surface: true,
    group: "wall",
    room: ["living", "hall", "dining"],
    tags: ["niche", "display", "shelves", "lighting", "recessed", "domolux"],
    parts: [
      // Outer wall casing
      { shape: "box", x: 0.0, z: -0.40, w: 1.0, d: 0.20, y: 0.0, h: 1.0, color: "#1e2025", edges: "faint" },
      // Bronze outer reveal architrave
      { shape: "box", x: -0.47, z: 0.20, w: 0.06, d: 0.60, y: 0.0, h: 1.0, color: "#9e8354", edges: "glow", fix: "w" },
      { shape: "box", x: 0.47, z: 0.20, w: 0.06, d: 0.60, y: 0.0, h: 1.0, color: "#9e8354", edges: "glow", fix: "w" },
      { shape: "box", x: 0.0, z: 0.20, w: 1.0, d: 0.60, y: 0.96, h: 0.04, color: "#9e8354", edges: "glow", fix: "h" },
      { shape: "box", x: 0.0, z: 0.20, w: 1.0, d: 0.60, y: 0.0, h: 0.04, color: "#9e8354", edges: "glow", fix: "h" },
      // Niche internal cavity cavity side walls & back (dark walnut)
      { shape: "box", x: 0.0, z: -0.28, w: 0.88, d: 0.05, y: 0.04, h: 0.92, color: "#2d231c", finish: "wood", edges: "faint" },
      { shape: "box", x: -0.42, z: 0.0, w: 0.04, d: 0.55, y: 0.04, h: 0.92, color: "#241c16", finish: "wood", edges: "faint" },
      { shape: "box", x: 0.42, z: 0.0, w: 0.04, d: 0.55, y: 0.04, h: 0.92, color: "#241c16", finish: "wood", edges: "faint" },
      // 3 Tier Glass Display Shelves
      { shape: "box", x: 0.0, z: 0.02, w: 0.82, d: 0.50, y: 0.28, h: 0.015, color: "glass", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.02, w: 0.82, d: 0.50, y: 0.56, h: 0.015, color: "glass", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.02, w: 0.82, d: 0.50, y: 0.84, h: 0.015, color: "glass", edges: true, fix: "h" },
      // Recessed spotlights at each tier
      { shape: "cyl", x: 0.0, z: -0.05, w: 0.12, d: 0.12, y: 0.94, h: 0.02, color: "#fff0db", glow: true, edges: "glow" },
      { shape: "cyl", x: 0.0, z: -0.05, w: 0.12, d: 0.12, y: 0.82, h: 0.02, color: "#fff0db", glow: true, edges: "glow" },
      { shape: "cyl", x: 0.0, z: -0.05, w: 0.12, d: 0.12, y: 0.54, h: 0.02, color: "#fff0db", glow: true, edges: "glow" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.8 },
      { shape: "rect", x: 0.0, z: -0.05, w: 0.88, d: 0.6, fill: true }
    ]
  },

  {
    num: 7,
    id: "decorative_pilaster",
    packId: "domolux.decorative_pilaster",
    name: {
      en: "Domolux Decorative Architectural Pilaster",
      de: "Domolux Dekorativer Wandpilaster",
      ar: "عامود جداري زخرفي دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Classical-contemporary architectural wall pilaster sculpted from honed Botticino marble with fluted shaft, plinth base, and bronze Corinthian-inspired capital.",
    size: [0.55, 0.28, 3.20],
    mount: "wall",
    wall_y: 0.0,
    surface: false,
    group: "wall",
    room: ["hall", "living", "dining"],
    tags: ["pilaster", "marble", "classical", "column", "wall", "domolux"],
    parts: [
      // Base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.90, y: 0.0, h: 0.08, color: "#d9d2c5", finish: "body", edges: true, fix: "h" },
      { shape: "loft", x: 0.0, z: 0.0, w: 0.95, d: 0.85, y: 0.08, h: 0.05, tx: 0.0, tz: 0.0, tw: 0.85, td: 0.75, color: "#d9d2c5", edges: true },
      // Main shaft backing slab
      { shape: "box", x: 0.0, z: -0.10, w: 0.80, d: 0.60, y: 0.13, h: 0.75, color: "#e4ded4", finish: "body", edges: "faint" },
      // 5 vertical flutes on shaft
      { shape: "box", x: -0.28, z: 0.22, w: 0.08, d: 0.35, y: 0.14, h: 0.73, color: "#d2cbc0", edges: true, fix: "w" },
      { shape: "box", x: -0.14, z: 0.22, w: 0.08, d: 0.35, y: 0.14, h: 0.73, color: "#d2cbc0", edges: true, fix: "w" },
      { shape: "box", x: 0.0, z: 0.22, w: 0.08, d: 0.35, y: 0.14, h: 0.73, color: "#d2cbc0", edges: true, fix: "w" },
      { shape: "box", x: 0.14, z: 0.22, w: 0.08, d: 0.35, y: 0.14, h: 0.73, color: "#d2cbc0", edges: true, fix: "w" },
      { shape: "box", x: 0.28, z: 0.22, w: 0.08, d: 0.35, y: 0.14, h: 0.73, color: "#d2cbc0", edges: true, fix: "w" },
      // Bronze Capital collar
      { shape: "box", x: 0.0, z: 0.05, w: 0.85, d: 0.75, y: 0.88, h: 0.02, color: "#c5a059", edges: "glow", fix: "h" },
      { shape: "loft", x: 0.0, z: 0.05, w: 0.85, d: 0.75, y: 0.90, h: 0.06, tx: 0.0, tz: 0.05, tw: 0.98, td: 0.90, color: "#c5a059", edges: "glow" },
      // Crown abacus
      { shape: "box", x: 0.0, z: 0.05, w: 1.0, d: 0.95, y: 0.96, h: 0.04, color: "#d9d2c5", finish: "body", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.9 },
      { shape: "line", x1: -0.4, z1: 0.3, x2: 0.4, z2: 0.3 }
    ]
  },

  {
    num: 8,
    id: "sculptural_interior_column",
    packId: "domolux.sculptural_interior_column",
    name: {
      en: "Domolux Sculptural Interior Column",
      de: "Domolux Skulpturale Innenraumsäule",
      ar: "عامود داخلي نحتي دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Freestanding monumental architectural structural column crafted from honed Nero Marquina marble with fluted cylinder profile and brushed bronze collar rings.",
    size: [0.70, 0.70, 3.20],
    mount: "floor",
    surface: false,
    group: "wall",
    room: ["hall", "living", "dining"],
    tags: ["column", "marble", "sculptural", "monumental", "domolux"],
    parts: [
      // Base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.95, d: 0.95, y: 0.0, h: 0.04, color: "#16171a", edges: true, fix: "h" },
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.90, d: 0.90, y: 0.04, h: 0.03, color: "#c5a059", edges: "glow", fix: "h" },
      // Main Column Shaft
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.82, d: 0.82, y: 0.07, h: 0.84, color: "#22242a", finish: "dark", edges: true },
      // Bronze center accent band
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.84, d: 0.84, y: 0.48, h: 0.03, color: "#c5a059", edges: "glow", fix: "h" },
      // Upper bronze collar
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.88, d: 0.88, y: 0.91, h: 0.04, color: "#c5a059", edges: "glow", fix: "h" },
      // Crown abacus slab
      { shape: "loft", x: 0.0, z: 0.0, w: 0.85, d: 0.85, y: 0.95, h: 0.03, tx: 0.0, tz: 0.0, tw: 0.98, td: 0.98, color: "#16171a", edges: true },
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.98, h: 0.02, color: "#16171a", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: 0.0, r: 0.45 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.38 }
    ]
  },

  {
    num: 9,
    id: "architectural_archway_portal",
    packId: "domolux.architectural_archway_portal",
    name: {
      en: "Domolux Architectural Archway Portal",
      de: "Domolux Architektonisches Bogenportal",
      ar: "بوابة قوسية معمارية دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Grand transition archway portal featuring deep travertine jambs, sculpted radial arch crown, integrated concealed ambient reveal lighting, and brushed bronze plinth shoes.",
    size: [2.20, 0.45, 3.10],
    mount: "floor",
    surface: false,
    group: "wall",
    room: ["hall", "living", "dining"],
    tags: ["arch", "portal", "entrance", "travertine", "architectural", "domolux"],
    parts: [
      // Left Plinth shoe
      { shape: "box", x: -0.41, z: 0.0, w: 0.18, d: 0.95, y: 0.0, h: 0.05, color: "#c5a059", edges: "glow", fix: "h" },
      // Right Plinth shoe
      { shape: "box", x: 0.41, z: 0.0, w: 0.18, d: 0.95, y: 0.0, h: 0.05, color: "#c5a059", edges: "glow", fix: "h" },
      // Left vertical jamb column
      { shape: "box", x: -0.41, z: 0.0, w: 0.16, d: 0.90, y: 0.05, h: 0.65, color: "#d5cec2", finish: "body", edges: true },
      // Right vertical jamb column
      { shape: "box", x: 0.41, z: 0.0, w: 0.16, d: 0.90, y: 0.05, h: 0.65, color: "#d5cec2", finish: "body", edges: true },
      // Impost blocks
      { shape: "box", x: -0.41, z: 0.0, w: 0.19, d: 0.95, y: 0.70, h: 0.04, color: "#9e8354", edges: "glow", fix: "h" },
      { shape: "box", x: 0.41, z: 0.0, w: 0.19, d: 0.95, y: 0.70, h: 0.04, color: "#9e8354", edges: "glow", fix: "h" },
      // Stepped radial arch segments
      { shape: "box", x: -0.35, z: 0.0, w: 0.16, d: 0.88, y: 0.74, h: 0.10, color: "#d5cec2", finish: "body", edges: true },
      { shape: "box", x: 0.35, z: 0.0, w: 0.16, d: 0.88, y: 0.74, h: 0.10, color: "#d5cec2", finish: "body", edges: true },
      { shape: "box", x: -0.25, z: 0.0, w: 0.16, d: 0.88, y: 0.84, h: 0.08, color: "#d5cec2", finish: "body", edges: true },
      { shape: "box", x: 0.25, z: 0.0, w: 0.16, d: 0.88, y: 0.84, h: 0.08, color: "#d5cec2", finish: "body", edges: true },
      // Keystone crown
      { shape: "loft", x: 0.0, z: 0.0, w: 0.22, d: 0.92, y: 0.90, h: 0.10, tx: 0.0, tz: 0.0, tw: 0.26, td: 0.95, color: "#c5a059", edges: "glow" },
      // Top mantel header
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.92, y: 0.98, h: 0.02, color: "#d5cec2", finish: "body", edges: true, fix: "h" },
      // Ambient inner arch glow strip
      { shape: "box", x: -0.32, z: 0.0, w: 0.02, d: 0.10, y: 0.05, h: 0.65, color: "#ffe0b2", glow: true, edges: "glow" },
      { shape: "box", x: 0.32, z: 0.0, w: 0.02, d: 0.10, y: 0.05, h: 0.65, color: "#ffe0b2", glow: true, edges: "glow" }
    ],
    symbol: [
      { shape: "rect", x: -0.41, z: 0.0, w: 0.18, d: 0.95, fill: true },
      { shape: "rect", x: 0.41, z: 0.0, w: 0.18, d: 0.95, fill: true },
      { shape: "line", x1: -0.32, z1: 0.0, x2: 0.32, z2: 0.0 }
    ]
  },

  {
    num: 10,
    id: "coffered_ceiling_system",
    packId: "domolux.coffered_ceiling_system",
    name: {
      en: "Domolux Coffered Ceiling System",
      de: "Domolux Kassetten-Deckensystem",
      ar: "نظام الأسقف المجوفة دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Architectural coffered ceiling module featuring recessed 4-box coffers in lacquered white oak, stepped plaster moldings, dark bronze beams, and perimeter cove lighting channels.",
    size: [3.20, 3.20, 0.40],
    mount: "ceiling",
    surface: false,
    group: "ceiling",
    room: ["living", "dining", "hall", "library"],
    tags: ["ceiling", "coffered", "molding", "luxury", "cove", "lighting", "domolux"],
    parts: [
      // Top ceiling substrate slab
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.85, h: 0.15, color: "#f8f9fa", finish: "white", edges: "faint" },
      // Cross main structural beam grid
      { shape: "box", x: 0.0, z: 0.0, w: 0.14, d: 1.0, y: 0.0, h: 0.85, color: "#3a2d23", finish: "wood", edges: true },
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.14, y: 0.0, h: 0.85, color: "#3a2d23", finish: "wood", edges: true },
      // Perimeter trim frame
      { shape: "box", x: -0.46, z: 0.0, w: 0.08, d: 1.0, y: 0.0, h: 0.85, color: "#3a2d23", finish: "wood", edges: true },
      { shape: "box", x: 0.46, z: 0.0, w: 0.08, d: 1.0, y: 0.0, h: 0.85, color: "#3a2d23", finish: "wood", edges: true },
      { shape: "box", x: 0.0, z: -0.46, w: 1.0, d: 0.08, y: 0.0, h: 0.85, color: "#3a2d23", finish: "wood", edges: true },
      { shape: "box", x: 0.0, z: 0.46, w: 1.0, d: 0.08, y: 0.0, h: 0.85, color: "#3a2d23", finish: "wood", edges: true },
      // 4 recessed coffer cavities stepped plaster trim (Lofts)
      { shape: "loft", x: -0.24, z: -0.24, w: 0.36, d: 0.36, y: 0.50, h: 0.35, tx: -0.24, tz: -0.24, tw: 0.28, td: 0.28, color: "#eaeaea", edges: "faint" },
      { shape: "loft", x: 0.24, z: -0.24, w: 0.36, d: 0.36, y: 0.50, h: 0.35, tx: 0.24, tz: -0.24, tw: 0.28, td: 0.28, color: "#eaeaea", edges: "faint" },
      { shape: "loft", x: -0.24, z: 0.24, w: 0.36, d: 0.36, y: 0.50, h: 0.35, tx: -0.24, tz: 0.24, tw: 0.28, td: 0.28, color: "#eaeaea", edges: "faint" },
      { shape: "loft", x: 0.24, z: 0.24, w: 0.36, d: 0.36, y: 0.50, h: 0.35, tx: 0.24, tz: 0.24, tw: 0.28, td: 0.28, color: "#eaeaea", edges: "faint" },
      // Bronze center bosses & cove illumination
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.12, d: 0.12, y: 0.0, h: 0.04, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: -0.24, z: -0.24, w: 0.26, d: 0.26, y: 0.82, h: 0.02, color: "#fff2d9", glow: true, edges: "glow" },
      { shape: "box", x: 0.24, z: -0.24, w: 0.26, d: 0.26, y: 0.82, h: 0.02, color: "#fff2d9", glow: true, edges: "glow" },
      { shape: "box", x: -0.24, z: 0.24, w: 0.26, d: 0.26, y: 0.82, h: 0.02, color: "#fff2d9", glow: true, edges: "glow" },
      { shape: "box", x: 0.24, z: 0.24, w: 0.26, d: 0.26, y: 0.82, h: 0.02, color: "#fff2d9", glow: true, edges: "glow" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "line", x1: 0.0, z1: -0.5, x2: 0.0, z2: 0.5 },
      { shape: "line", x1: -0.5, z1: 0.0, x2: 0.5, z2: 0.0 },
      { shape: "rect", x: -0.24, z: -0.24, w: 0.32, d: 0.32 },
      { shape: "rect", x: 0.24, z: -0.24, w: 0.32, d: 0.32 },
      { shape: "rect", x: -0.24, z: 0.24, w: 0.32, d: 0.32 },
      { shape: "rect", x: 0.24, z: 0.24, w: 0.32, d: 0.32 }
    ]
  },

  // -------------------------------------------------------------------------
  // BATCH 03: Products 011–015 (Ceilings, Acoustic Fins & HVAC Diffusers)
  // -------------------------------------------------------------------------
  {
    num: 11,
    id: "suspended_timber_slat_ceiling",
    packId: "domolux.suspended_timber_slat_ceiling",
    name: {
      en: "Domolux Suspended Timber Slat Ceiling",
      de: "Domolux Abgehängte Holzlamellen-Decke",
      ar: "سقف معلق بشرائح خشبية دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Architectural suspended acoustic ceiling with linear American walnut baffles, acoustic backing fleece, and recessed black linear LED lighting tracks.",
    size: [3.00, 2.40, 0.28],
    mount: "ceiling",
    surface: false,
    group: "ceiling",
    room: ["living", "kitchen", "hall", "dining"],
    tags: ["ceiling", "slats", "timber", "acoustic", "suspended", "domolux"],
    parts: [
      // Top acoustic backing panel
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.85, h: 0.15, color: "#16171b", edges: "faint" },
      // Black steel suspension rails
      { shape: "box", x: -0.30, z: 0.0, w: 0.03, d: 0.98, y: 0.70, h: 0.15, color: "#22242a", edges: "faint" },
      { shape: "box", x: 0.30, z: 0.0, w: 0.03, d: 0.98, y: 0.70, h: 0.15, color: "#22242a", edges: "faint" },
      // 10 walnut vertical slats
      { shape: "box", x: -0.45, z: 0.0, w: 0.04, d: 0.96, y: 0.05, h: 0.70, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: -0.35, z: 0.0, w: 0.04, d: 0.96, y: 0.05, h: 0.70, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: -0.25, z: 0.0, w: 0.04, d: 0.96, y: 0.05, h: 0.70, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: -0.15, z: 0.0, w: 0.04, d: 0.96, y: 0.05, h: 0.70, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: -0.05, z: 0.0, w: 0.04, d: 0.96, y: 0.05, h: 0.70, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.05, z: 0.0, w: 0.04, d: 0.96, y: 0.05, h: 0.70, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.15, z: 0.0, w: 0.04, d: 0.96, y: 0.05, h: 0.70, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.25, z: 0.0, w: 0.04, d: 0.96, y: 0.05, h: 0.70, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.35, z: 0.0, w: 0.04, d: 0.96, y: 0.05, h: 0.70, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.45, z: 0.0, w: 0.04, d: 0.96, y: 0.05, h: 0.70, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      // Integrated LED linear lighting channels
      { shape: "box", x: 0.0, z: 0.0, w: 0.03, d: 0.88, y: 0.0, h: 0.05, color: "#fff0db", glow: true, edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "line", x1: -0.45, z1: -0.48, x2: -0.45, z2: 0.48 },
      { shape: "line", x1: -0.25, z1: -0.48, x2: -0.25, z2: 0.48 },
      { shape: "line", x1: 0.0, z1: -0.48, x2: 0.0, z2: 0.48 },
      { shape: "line", x1: 0.25, z1: -0.48, x2: 0.25, z2: 0.48 },
      { shape: "line", x1: 0.45, z1: -0.48, x2: 0.45, z2: 0.48 }
    ]
  },

  {
    num: 12,
    id: "sculptural_ceiling_raft",
    packId: "domolux.sculptural_ceiling_raft",
    name: {
      en: "Domolux Sculptural Gypsum Ceiling Raft",
      de: "Domolux Skulpturales Gips-Deckensegel",
      ar: "شراع سقفي جبسي نحتي دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Floating organic multi-tiered gypsum ceiling raft with knife-edge shadow lines, hidden perimeter cove LED ambient wash, and recessed downlight ports.",
    size: [2.80, 2.00, 0.35],
    mount: "ceiling",
    surface: false,
    group: "ceiling",
    room: ["living", "dining", "bedroom"],
    tags: ["ceiling", "raft", "cove", "floating", "gypsum", "domolux"],
    parts: [
      // Top suspension chassis
      { shape: "box", x: 0.0, z: 0.0, w: 0.70, d: 0.70, y: 0.75, h: 0.25, color: "#1a1b20", edges: "faint" },
      // Ambient warm-white cove LED ring
      { shape: "box", x: 0.0, z: 0.0, w: 0.85, d: 0.85, y: 0.70, h: 0.03, color: "#ffe0b2", glow: true, edges: "glow" },
      // Main lower floating ceiling raft (Knife-edge profile via loft)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.88, d: 0.88, y: 0.25, h: 0.45, tx: 0.0, tz: 0.0, tw: 1.0, td: 1.0, color: "#f8f9fa", finish: "white", edges: true },
      // Secondary dropped center medallion tier
      { shape: "loft", x: 0.0, z: 0.0, w: 0.55, d: 0.55, y: 0.05, h: 0.20, tx: 0.0, tz: 0.0, tw: 0.62, td: 0.62, color: "#eaecee", finish: "white", edges: true },
      // Downlight ports
      { shape: "cyl", x: -0.20, z: -0.20, w: 0.08, d: 0.08, y: 0.0, h: 0.05, color: "#ffecb3", glow: true, edges: "glow" },
      { shape: "cyl", x: 0.20, z: -0.20, w: 0.08, d: 0.08, y: 0.0, h: 0.05, color: "#ffecb3", glow: true, edges: "glow" },
      { shape: "cyl", x: -0.20, z: 0.20, w: 0.08, d: 0.08, y: 0.0, h: 0.05, color: "#ffecb3", glow: true, edges: "glow" },
      { shape: "cyl", x: 0.20, z: 0.20, w: 0.08, d: 0.08, y: 0.0, h: 0.05, color: "#ffecb3", glow: true, edges: "glow" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.6, d: 0.6 }
    ]
  },

  {
    num: 13,
    id: "luminous_stretch_ceiling",
    packId: "domolux.luminous_stretch_ceiling",
    name: {
      en: "Domolux Luminous Stretch Ceiling Panel",
      de: "Domolux Licht-Spanndeckenpaneel",
      ar: "لوحة سقفية مشدودة مضيئة دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Architectural seamless translucent membrane stretch ceiling providing homogeneous glare-free daylight simulation with anodized matte black aluminum edge profile.",
    size: [2.40, 2.40, 0.18],
    mount: "ceiling",
    surface: false,
    group: "ceiling",
    room: ["bath", "hall", "living", "office"],
    tags: ["ceiling", "stretch", "luminous", "light", "minimal", "domolux"],
    parts: [
      // Top housing enclosure
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.20, h: 0.80, color: "#14151a", edges: "faint" },
      // High-output diffuse LED backplane
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.92, y: 0.10, h: 0.10, color: "#fffbf2", glow: true, edges: "glow" },
      // Translucent illuminated stretch fabric membrane
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.94, y: 0.02, h: 0.05, color: "#ffffff", glow: true, edges: "glow" },
      // Perimeter matte black anodized aluminum profile
      { shape: "box", x: -0.485, z: 0.0, w: 0.03, d: 1.0, y: 0.0, h: 0.20, color: "#22252a", edges: true, fix: "w" },
      { shape: "box", x: 0.485, z: 0.0, w: 0.03, d: 1.0, y: 0.0, h: 0.20, color: "#22252a", edges: true, fix: "w" },
      { shape: "box", x: 0.0, z: -0.485, w: 0.97, d: 0.03, y: 0.0, h: 0.20, color: "#22252a", edges: true, fix: "d" },
      { shape: "box", x: 0.0, z: 0.485, w: 0.97, d: 0.03, y: 0.0, h: 0.20, color: "#22252a", edges: true, fix: "d" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.94, d: 0.94, fill: true }
    ]
  },

  {
    num: 14,
    id: "acoustic_ceiling_baffles",
    packId: "domolux.acoustic_ceiling_baffles",
    name: {
      en: "Domolux Architectural Acoustic Ceiling Baffles",
      de: "Domolux Architektonische Akustik-Deckensegel",
      ar: "حواجز سقفية صوتية معمارية دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Suspended rhythmic acoustic baffle installation with felt-clad fins, concealed wire tensioners, and integrated micro-linear LED accents for commercial-grade residential acoustic control.",
    size: [2.80, 1.80, 0.45],
    mount: "ceiling",
    surface: false,
    group: "ceiling",
    room: ["cinema", "living", "office"],
    tags: ["baffles", "acoustic", "ceiling", "felt", "cinema", "domolux"],
    parts: [
      // 2 structural ceiling mounting channels
      { shape: "box", x: -0.35, z: 0.0, w: 0.04, d: 0.95, y: 0.88, h: 0.12, color: "#22252a", edges: "faint" },
      { shape: "box", x: 0.35, z: 0.0, w: 0.04, d: 0.95, y: 0.88, h: 0.12, color: "#22252a", edges: "faint" },
      // 6 hanging acoustic fabric blades
      { shape: "box", x: 0.0, z: -0.40, w: 0.96, d: 0.04, y: 0.05, h: 0.80, color: "#3e434f", finish: "fabric", edges: true, fix: "d" },
      { shape: "box", x: 0.0, z: -0.24, w: 0.96, d: 0.04, y: 0.05, h: 0.80, color: "#4b515f", finish: "fabric", edges: true, fix: "d" },
      { shape: "box", x: 0.0, z: -0.08, w: 0.96, d: 0.04, y: 0.05, h: 0.80, color: "#5a6273", finish: "fabric", edges: true, fix: "d" },
      { shape: "box", x: 0.0, z: 0.08, w: 0.96, d: 0.04, y: 0.05, h: 0.80, color: "#5a6273", finish: "fabric", edges: true, fix: "d" },
      { shape: "box", x: 0.0, z: 0.24, w: 0.96, d: 0.04, y: 0.05, h: 0.80, color: "#4b515f", finish: "fabric", edges: true, fix: "d" },
      { shape: "box", x: 0.0, z: 0.40, w: 0.96, d: 0.04, y: 0.05, h: 0.80, color: "#3e434f", finish: "fabric", edges: true, fix: "d" },
      // Micro-linear bottom brass edge trims
      { shape: "box", x: 0.0, z: -0.08, w: 0.96, d: 0.02, y: 0.0, h: 0.05, color: "#c5a059", edges: "glow", fix: "dh" },
      { shape: "box", x: 0.0, z: 0.08, w: 0.96, d: 0.02, y: 0.0, h: 0.05, color: "#c5a059", edges: "glow", fix: "dh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "line", x1: -0.48, z1: -0.4, x2: 0.48, z2: -0.4 },
      { shape: "line", x1: -0.48, z1: -0.24, x2: 0.48, z2: -0.24 },
      { shape: "line", x1: -0.48, z1: -0.08, x2: 0.48, z2: -0.08 },
      { shape: "line", x1: -0.48, z1: 0.08, x2: 0.48, z2: 0.08 },
      { shape: "line", x1: -0.48, z1: 0.24, x2: 0.48, z2: 0.24 },
      { shape: "line", x1: -0.48, z1: 0.4, x2: 0.48, z2: 0.4 }
    ]
  },

  {
    num: 15,
    id: "architectural_linear_air_diffuser",
    packId: "domolux.architectural_linear_air_diffuser",
    name: {
      en: "Domolux Architectural Linear Air Diffuser",
      de: "Domolux Architektonischer Linearer Luftauslass",
      ar: "موزع هواء خطي معماري دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Discreet architectural HVAC linear slot diffuser designed for flush integration into plasterboard ceilings with satin black directional air deflectors and shadow reveal perimeter.",
    size: [1.80, 0.22, 0.15],
    mount: "ceiling",
    surface: false,
    group: "heating",
    room: ["living", "bedroom", "dining", "hall"],
    tags: ["hvac", "diffuser", "ventilation", "linear", "ceiling", "domolux"],
    parts: [
      // Plenum upper box
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.85, y: 0.25, h: 0.75, color: "#282a30", edges: "faint" },
      // Outer flush mud-in flange
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.15, h: 0.10, color: "#e2e8f0", finish: "white", edges: "faint" },
      // Recessed slot cavity (dark)
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.50, y: 0.0, h: 0.15, color: "#0f1013", edges: "faint" },
      // Twin linear bronze deflector blades
      { shape: "box", x: 0.0, z: -0.12, w: 0.90, d: 0.08, y: 0.02, h: 0.08, color: "#8c7247", edges: true, fix: "dh" },
      { shape: "box", x: 0.0, z: 0.12, w: 0.90, d: 0.08, y: 0.02, h: 0.08, color: "#8c7247", edges: true, fix: "dh" },
      // Center dividing strip
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.04, y: 0.0, h: 0.10, color: "#1a1c22", edges: "faint", fix: "dh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "line", x1: -0.45, z1: -0.12, x2: 0.45, z2: -0.12 },
      { shape: "line", x1: -0.45, z1: 0.12, x2: 0.45, z2: 0.12 }
    ]
  },

  // -------------------------------------------------------------------------
  // BATCH 04: Products 016–020 (Skylights, Inlay Flooring & Stone Platforms)
  // -------------------------------------------------------------------------
  {
    num: 16,
    id: "recessed_roof_skylight",
    packId: "domolux.recessed_roof_skylight",
    name: {
      en: "Domolux Recessed Roof Skylight Lantern",
      de: "Domolux Eingelassene Dach-Lichtkuppel",
      ar: "منور سقفي مدمج دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Architectural ceiling daylight well with double-glazed solar control insulated glass, flared white gypsum light shaft, and concealed LED solar simulation halo.",
    size: [2.20, 1.60, 0.65],
    mount: "ceiling",
    surface: false,
    group: "ceiling",
    room: ["living", "hall", "bath", "kitchen"],
    tags: ["skylight", "roof", "lantern", "daylight", "glass", "domolux"],
    parts: [
      // Outer structural roof curb
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.85, h: 0.15, color: "#2a2d34", edges: "faint" },
      // Weatherproof aluminum curb extrusion
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.94, y: 0.70, h: 0.20, color: "#475569", edges: true },
      // Flared white lightwell splay (Loft)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.75, d: 0.75, y: 0.15, h: 0.60, tx: 0.0, tz: 0.0, tw: 0.95, td: 0.95, color: "#f8fafc", finish: "white", edges: "faint" },
      // Laminated low-E architectural glass pane
      { shape: "box", x: 0.0, z: 0.0, w: 0.76, d: 0.76, y: 0.75, h: 0.03, color: "glass", edges: true },
      // Concealed artificial daylight LED halo
      { shape: "box", x: 0.0, z: 0.0, w: 0.78, d: 0.78, y: 0.14, h: 0.02, color: "#fff7eb", glow: true, edges: "glow" },
      // Flush ceiling finish trim
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.0, h: 0.05, color: "#e2e8f0", finish: "white", edges: true }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.75, d: 0.75, fill: true },
      { shape: "line", x1: -0.5, z1: -0.5, x2: 0.5, z2: 0.5 },
      { shape: "line", x1: 0.5, z1: -0.5, x2: -0.5, z2: 0.5 }
    ]
  },

  {
    num: 17,
    id: "operable_roof_skylight",
    packId: "domolux.operable_roof_skylight",
    name: {
      en: "Domolux Operable Roof Skylight Window",
      de: "Domolux Öffnungsfähiges Dachfenster",
      ar: "نافذة منور سقفي قابلة للفتح دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Motorized operable architectural roof window with concealed electric chain drive actuator, thermal-break bronze frame, rain sensor interface, and insect screen.",
    size: [1.50, 1.20, 0.45],
    mount: "ceiling",
    surface: false,
    group: "ceiling",
    room: ["bedroom", "bath", "hall"],
    tags: ["skylight", "window", "operable", "motorized", "roof", "domolux"],
    parts: [
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.70, h: 0.30, color: "#334155", edges: true },
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.88, y: 0.10, h: 0.65, color: "#f1f5f9", finish: "white", edges: "faint" },
      // Operable sash angled frame
      { shape: "loft", x: 0.0, z: 0.05, w: 0.85, d: 0.85, y: 0.65, h: 0.20, tx: 0.0, tz: 0.08, tw: 0.85, td: 0.85, color: "#7a623a", edges: "glow" },
      { shape: "box", x: 0.0, z: 0.06, w: 0.75, d: 0.75, y: 0.72, h: 0.03, color: "glass", edges: true },
      // Motorized chain actuator box
      { shape: "box", x: 0.0, z: -0.38, w: 0.30, d: 0.08, y: 0.55, h: 0.08, color: "#1e293b", edges: "faint", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "line", x1: -0.4, z1: -0.35, x2: 0.4, z2: -0.35 }
    ]
  },

  {
    num: 18,
    id: "parquet_floor_inlay",
    packId: "domolux.parquet_floor_inlay",
    name: {
      en: "Domolux Parquet Flooring Inlay System",
      de: "Domolux Parkett-Bodenintarsie",
      ar: "نظام ترصيع أرضيات الباركيه دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Artisanal Versailles parquet floor module handcrafted with smoked French oak stiles, chevron walnut ribbons, brass stringer inlays, and satin polyurethane seal.",
    size: [2.50, 2.50, 0.025],
    mount: "floor",
    surface: true,
    group: "floor",
    room: ["living", "dining", "hall", "bedroom"],
    tags: ["parquet", "floor", "wood", "inlay", "versailles", "luxury", "domolux"],
    parts: [
      // Base acoustic backing layer
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.0, h: 0.30, color: "#1c1917", edges: "faint" },
      // Outer frame perimeter border (smoked oak)
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.30, h: 0.70, color: "#443428", finish: "wood", edges: true },
      // Inlay brass perimeter stringer
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.88, y: 0.35, h: 0.65, color: "#c5a059", edges: "glow" },
      // Center geometric diagonal fields (lofts / boxes)
      { shape: "box", x: 0.0, z: 0.0, w: 0.85, d: 0.85, y: 0.40, h: 0.60, color: "#5c4736", finish: "wood", edges: true },
      { shape: "box", x: 0.0, z: 0.0, w: 0.45, d: 0.45, y: 0.45, h: 0.55, color: "#785e49", finish: "wood", rot: 45, edges: true },
      { shape: "box", x: 0.0, z: 0.0, w: 0.20, d: 0.20, y: 0.50, h: 0.50, color: "#c5a059", rot: 45, edges: "glow" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.85, d: 0.85 },
      { shape: "line", x1: -0.4, z1: 0.0, x2: 0.0, z2: 0.4 },
      { shape: "line", x1: 0.0, z1: 0.4, x2: 0.4, z2: 0.0 },
      { shape: "line", x1: 0.4, z1: 0.0, x2: 0.0, z2: -0.4 },
      { shape: "line", x1: 0.0, z1: -0.4, x2: -0.4, z2: 0.0 }
    ]
  },

  {
    num: 19,
    id: "marble_floor_medallion",
    packId: "domolux.marble_floor_medallion",
    name: {
      en: "Domolux Marble Floor Medallion",
      de: "Domolux Marmor-Bodenmedaillon",
      ar: "ميدالية أرضية رخامية دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Palatial waterjet-cut circular marble floor centerpiece featuring concentric rings of Nero Marquina, Calacatta Gold, and polished bronze starburst inlay.",
    size: [2.20, 2.20, 0.025],
    mount: "floor",
    surface: true,
    group: "floor",
    room: ["hall", "living", "dining"],
    tags: ["marble", "medallion", "inlay", "floor", "palatial", "luxury", "domolux"],
    parts: [
      // Base substrate
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.0, h: 0.30, color: "#1c1917", edges: "faint" },
      // Outer square marble border
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.30, h: 0.70, color: "#e2ded9", finish: "body", edges: true },
      // Outer Nero Marquina ring
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.92, d: 0.92, y: 0.35, h: 0.65, color: "#1a1b20", finish: "dark", edges: true },
      // Calacatta Gold ring
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.75, d: 0.75, y: 0.40, h: 0.60, color: "#f0ece1", finish: "body", edges: true },
      // Polished bronze divider ring
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.52, d: 0.52, y: 0.45, h: 0.55, color: "#c5a059", edges: "glow" },
      // Center starburst core medallion
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.48, d: 0.48, y: 0.48, h: 0.52, color: "#24252c", finish: "dark", edges: true },
      { shape: "box", x: 0.0, z: 0.0, w: 0.25, d: 0.25, y: 0.55, h: 0.45, color: "#c5a059", rot: 45, edges: "glow" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.46 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.37 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.25 }
    ]
  },

  {
    num: 20,
    id: "raised_stone_platform",
    packId: "domolux.raised_stone_platform",
    name: {
      en: "Domolux Raised Architectural Stone Platform",
      de: "Domolux Erhöhtes Architektur-Steinpodest",
      ar: "منصة حجرية معمارية مرتفعة دومولوكس"
    },
    collection: "Architectural Interior Systems",
    collectionSlug: "01_Architectural_Interior_Systems",
    category: "Architectural Elements",
    description: "Monolithic raised architectural stone stage in honed silver travertine featuring recessed shadow gap sub-base, concealed perimeter floor wash LED, and cantilevered bullnose lip.",
    size: [3.40, 2.60, 0.24],
    mount: "floor",
    surface: true,
    group: "floor",
    room: ["living", "hall", "bath", "bedroom"],
    tags: ["platform", "stone", "travertine", "stage", "architectural", "domolux"],
    parts: [
      // Recessed plinth sub-base
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.90, y: 0.0, h: 0.25, color: "#141518", edges: "faint" },
      // Perimeter low-glare ambient LED strip
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.92, y: 0.05, h: 0.15, color: "#ffe0b2", glow: true, edges: "glow" },
      // Main stone monolithic body (honed silver travertine)
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.25, h: 0.65, color: "#c8c3b9", finish: "body", edges: true },
      // Cantilevered top slab with bullnose edge
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.85, h: 0.15, color: "#d6d1c8", finish: "body", edges: true, fix: "h" },
      // Bronze accent reveal line around edge
      { shape: "box", x: 0.0, z: 0.0, w: 0.99, d: 0.99, y: 0.82, h: 0.03, color: "#9e8354", edges: "glow", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.92, d: 0.92 }
    ]
  }
];
