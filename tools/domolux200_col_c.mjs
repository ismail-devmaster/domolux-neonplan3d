// DOMOLUX VILLA 200 — COLLECTION C: EXCLUSIVE INTERIOR FURNISHINGS, ART & DECOR (Products 041–060)
// Batches 09–12

export const COLLECTION_C_PRODUCTS = [
  // -------------------------------------------------------------------------
  // BATCH 09: Products 041–045 (Consoles, Chaises, Ladders & Vitrines)
  // -------------------------------------------------------------------------
  {
    num: 41,
    id: "grand_entry_console",
    packId: "domolux.grand_entry_console",
    name: {
      en: "Domolux Grand Entrance Console",
      de: "Domolux Monumentale Eingangs-Konsole",
      ar: "طاولة كونسول المدخل الفاخرة دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Architectural foyer statement console table with 60mm honed Calacatta marble slab, sculptural dark bronze interlocking arch base, and two soft-closing fluted walnut accessory drawers.",
    size: [2.20, 0.50, 0.88],
    mount: "floor",
    surface: true,
    group: "living",
    room: ["hall", "living", "dining"],
    tags: ["console", "foyer", "marble", "bronze", "walnut", "luxury", "domolux"],
    parts: [
      // Bronze sub-plinth base runners
      { shape: "box", x: -0.35, z: 0.0, w: 0.12, d: 0.85, y: 0.0, h: 0.04, color: "#3d301b", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.35, z: 0.0, w: 0.12, d: 0.85, y: 0.0, h: 0.04, color: "#3d301b", edges: "glow", fix: "wdh" },
      // Sculptural wishbone bronze upright legs
      { shape: "loft", x: -0.35, z: 0.0, w: 0.10, d: 0.70, y: 0.04, h: 0.68, tx: -0.30, tz: 0.0, tw: 0.14, td: 0.75, color: "#c5a059", edges: "glow" },
      { shape: "loft", x: 0.35, z: 0.0, w: 0.10, d: 0.70, y: 0.04, h: 0.68, tx: 0.30, tz: 0.0, tw: 0.14, td: 0.75, color: "#c5a059", edges: "glow" },
      // Horizontal bronze stretcher beam
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.04, d: 0.04, y: 0.25, h: 0.65, axis: "x", color: "#c5a059", fix: "wdh" },
      // Fluted walnut drawer apron carcass
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.85, y: 0.72, h: 0.18, color: "#3a2d23", finish: "wood", edges: true, fix: "h" },
      // Twin fluted drawer fronts with shadow reveals
      { shape: "box", x: -0.22, z: 0.43, w: 0.42, d: 0.04, y: 0.73, h: 0.16, color: "#47382c", finish: "wood", edges: true, fix: "h" },
      { shape: "box", x: 0.22, z: 0.43, w: 0.42, d: 0.04, y: 0.73, h: 0.16, color: "#47382c", finish: "wood", edges: true, fix: "h" },
      // Recessed bronze drawer finger pulls
      { shape: "box", x: -0.22, z: 0.46, w: 0.08, d: 0.02, y: 0.80, h: 0.02, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.22, z: 0.46, w: 0.08, d: 0.02, y: 0.80, h: 0.02, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Monolithic Calacatta marble countertop slab with chamfered edge
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.90, h: 0.10, color: "#e8e5dc", finish: "body", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "line", x1: 0.0, z1: -0.45, x2: 0.0, z2: 0.45 }
    ]
  },

  {
    num: 42,
    id: "sculptural_chaise_longue",
    packId: "domolux.sculptural_chaise_longue",
    name: {
      en: "Domolux Sculptural Chaise Longue",
      de: "Domolux Skulpturale Liege-Chaise",
      ar: "أريكة استرخاء نحتية دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Asymmetrical sculptural relaxation chaise sculpted with continuous ergonomic contours in ivory bouclé, saddle leather headrest bolster, and polished bronze floating ribbon frame.",
    size: [0.85, 1.85, 0.78],
    mount: "floor",
    surface: false,
    group: "living",
    room: ["living", "bedroom", "library"],
    tags: ["chaise", "lounger", "sculptural", "boucle", "leather", "luxury", "domolux"],
    parts: [
      // Bronze sled base ribbon runners
      { shape: "box", x: -0.38, z: 0.0, w: 0.05, d: 0.88, y: 0.0, h: 0.04, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.38, z: 0.0, w: 0.05, d: 0.88, y: 0.0, h: 0.04, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.0, z: -0.42, w: 0.80, d: 0.05, y: 0.0, h: 0.04, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.42, w: 0.80, d: 0.05, y: 0.0, h: 0.04, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Vertical bronze cantilever risers
      { shape: "box", x: -0.38, z: -0.15, w: 0.05, d: 0.20, y: 0.04, h: 0.32, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.38, z: -0.15, w: 0.05, d: 0.20, y: 0.04, h: 0.32, color: "#c5a059", edges: "glow", fix: "wd" },
      // Contoured upholstered chaise body (Lofts for ergonomic profile)
      // Leg rest section (Low)
      { shape: "loft", x: 0.0, z: 0.30, w: 0.85, d: 0.35, y: 0.32, h: 0.16, tx: 0.0, tz: 0.30, tw: 0.80, td: 0.35, color: "cushion", finish: "fabric", edges: true },
      // Center seat depression
      { shape: "loft", x: 0.0, z: 0.0, w: 0.88, d: 0.35, y: 0.28, h: 0.18, tx: 0.0, tz: 0.0, tw: 0.84, td: 0.35, color: "cushion", finish: "fabric", edges: true },
      // Reclining backrest rise (High)
      { shape: "loft", x: 0.0, z: -0.32, w: 0.85, d: 0.35, y: 0.36, h: 0.48, tx: 0.0, tz: -0.36, tw: 0.80, td: 0.30, color: "cushion", finish: "fabric", edges: true },
      // Stitched saddle leather cylindrical neck bolster
      { shape: "cyl", x: 0.0, z: -0.36, w: 0.16, d: 0.70, y: 0.70, h: 0.16, axis: "x", color: "#824c28", finish: "fabric", edges: true, fix: "wdh" },
      // Bolster leather suspension straps
      { shape: "box", x: -0.25, z: -0.36, w: 0.03, d: 0.18, y: 0.65, h: 0.18, color: "#4d2c16", fix: "wdh" },
      { shape: "box", x: 0.25, z: -0.36, w: 0.03, d: 0.18, y: 0.65, h: 0.18, color: "#4d2c16", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.85, d: 1.0 },
      { shape: "circle", x: 0.0, z: -0.36, r: 0.15 }
    ]
  },

  {
    num: 43,
    id: "library_rolling_ladder",
    packId: "domolux.library_rolling_ladder",
    name: {
      en: "Domolux Library Rolling Ladder System",
      de: "Domolux Rollbare Bibliotheksleiter",
      ar: "سلم مكتبة متدحرج دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Full-height custom estate library rolling ladder crafted from solid American walnut with knurled bronze guide rail hooks, bottom silent rubber-tread castors, and brass safety rungs.",
    size: [0.52, 0.45, 3.10],
    mount: "floor",
    surface: false,
    group: "living",
    room: ["library", "living", "office"],
    tags: ["ladder", "library", "rolling", "books", "walnut", "bronze", "domolux"],
    parts: [
      // Left and right angled walnut stringers (Lofts)
      { shape: "loft", x: -0.40, z: 0.0, w: 0.08, d: 0.18, y: 0.04, h: 0.94, tx: -0.40, tz: -0.20, tw: 0.08, td: 0.18, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      { shape: "loft", x: 0.40, z: 0.0, w: 0.08, d: 0.18, y: 0.04, h: 0.94, tx: 0.40, tz: -0.20, tw: 0.08, td: 0.18, color: "#45362a", finish: "wood", edges: true, fix: "w" },
      // 8 Walnut steps with brass non-slip inlays
      { shape: "box", x: 0.0, z: 0.02, w: 0.76, d: 0.22, y: 0.12, h: 0.025, color: "#382c22", finish: "wood", edges: true },
      { shape: "box", x: 0.0, z: 0.0, w: 0.76, d: 0.22, y: 0.24, h: 0.025, color: "#382c22", finish: "wood", edges: true },
      { shape: "box", x: 0.0, z: -0.02, w: 0.76, d: 0.22, y: 0.36, h: 0.025, color: "#382c22", finish: "wood", edges: true },
      { shape: "box", x: 0.0, z: -0.05, w: 0.76, d: 0.22, y: 0.48, h: 0.025, color: "#382c22", finish: "wood", edges: true },
      { shape: "box", x: 0.0, z: -0.08, w: 0.76, d: 0.22, y: 0.60, h: 0.025, color: "#382c22", finish: "wood", edges: true },
      { shape: "box", x: 0.0, z: -0.11, w: 0.76, d: 0.22, y: 0.72, h: 0.025, color: "#382c22", finish: "wood", edges: true },
      { shape: "box", x: 0.0, z: -0.14, w: 0.76, d: 0.22, y: 0.84, h: 0.025, color: "#382c22", finish: "wood", edges: true },
      { shape: "box", x: 0.0, z: -0.17, w: 0.76, d: 0.22, y: 0.94, h: 0.025, color: "#382c22", finish: "wood", edges: true },
      // Bottom rolling castor assemblies
      { shape: "cyl", x: -0.40, z: 0.05, w: 0.08, d: 0.08, y: 0.0, h: 0.04, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.40, z: 0.05, w: 0.08, d: 0.08, y: 0.0, h: 0.04, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Top bronze guide hook bar
      { shape: "cyl", x: 0.0, z: -0.22, w: 0.04, d: 0.04, y: 0.96, h: 0.90, axis: "x", color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.85, d: 0.85 },
      { shape: "line", x1: -0.38, z1: -0.35, x2: 0.38, z2: -0.35 },
      { shape: "line", x1: -0.38, z1: 0.35, x2: 0.38, z2: 0.35 }
    ]
  },

  {
    num: 44,
    id: "museum_display_vitrine",
    packId: "domolux.museum_display_vitrine",
    name: {
      en: "Domolux Museum Display Vitrine",
      de: "Domolux Museums-Präsentationsvitrine",
      ar: "خزانة عرض متحفية فاخرة دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Conservation-grade museum glass display vitrine with anti-reflective UV-filtering laminated glass hood, concealed micro-fiberoptic illumination, and brushed champagne bronze base plinth.",
    size: [0.75, 0.75, 1.45],
    mount: "floor",
    surface: true,
    group: "living",
    room: ["hall", "living", "library"],
    tags: ["vitrine", "display", "museum", "glass", "collectibles", "domolux"],
    parts: [
      // Plinth sub-base with shadow reveal
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.88, y: 0.0, h: 0.03, color: "#141519", fix: "h" },
      // Bronze wrapped plinth pedestal
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.92, y: 0.03, h: 0.52, color: "#7a623a", finish: "dark", edges: "glow", fix: "h" },
      // Inner presentation bed (black velvet)
      { shape: "box", x: 0.0, z: 0.0, w: 0.85, d: 0.85, y: 0.55, h: 0.03, color: "#18191f", edges: "faint", fix: "h" },
      // Micro LED corner fiberoptic spotlights
      { shape: "cyl", x: -0.36, z: -0.36, w: 0.03, d: 0.03, y: 0.58, h: 0.04, color: "#fff5ea", glow: true, edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.36, z: -0.36, w: 0.03, d: 0.03, y: 0.58, h: 0.04, color: "#fff5ea", glow: true, edges: "glow", fix: "wdh" },
      { shape: "cyl", x: -0.36, z: 0.36, w: 0.03, d: 0.03, y: 0.58, h: 0.04, color: "#fff5ea", glow: true, edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.36, z: 0.36, w: 0.03, d: 0.03, y: 0.58, h: 0.04, color: "#fff5ea", glow: true, edges: "glow", fix: "wdh" },
      // Frameless mitred glass bell hood (top and 4 sides)
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.88, y: 0.58, h: 0.40, color: "glass", edges: true },
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.90, y: 0.98, h: 0.02, color: "glass", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.92, d: 0.92 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.85, d: 0.85, fill: true }
    ]
  },

  {
    num: 45,
    id: "illuminated_collectible_column",
    packId: "domolux.illuminated_collectible_column",
    name: {
      en: "Domolux Illuminated Collectible Display Column",
      de: "Domolux Beleuchtete Sammler-Vitrinenstele",
      ar: "عامود عرض مقتنيات مضاء دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Slim vertical architectural vitrine tower designed for horological or trophy collections with 4-level tempered glass shelves, vertical continuous warm LED light strips, and dark bronze frame.",
    size: [0.60, 0.60, 2.10],
    mount: "floor",
    surface: true,
    group: "living",
    room: ["living", "hall", "office"],
    tags: ["column", "vitrine", "collectibles", "watches", "lighting", "domolux"],
    parts: [
      // Weighted base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.95, d: 0.95, y: 0.0, h: 0.06, color: "#1e2229", edges: true, fix: "h" },
      // 4 Corner bronze structural uprights
      { shape: "box", x: -0.42, z: -0.42, w: 0.05, d: 0.05, y: 0.06, h: 0.90, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.42, z: -0.42, w: 0.05, d: 0.05, y: 0.06, h: 0.90, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: -0.42, z: 0.42, w: 0.05, d: 0.05, y: 0.06, h: 0.90, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.42, z: 0.42, w: 0.05, d: 0.05, y: 0.06, h: 0.90, color: "#c5a059", edges: "glow", fix: "wd" },
      // Vertical LED accent light channels inside front uprights
      { shape: "box", x: -0.40, z: 0.39, w: 0.015, d: 0.015, y: 0.08, h: 0.86, color: "#fff2d6", glow: true, edges: "glow", fix: "wd" },
      { shape: "box", x: 0.40, z: 0.39, w: 0.015, d: 0.015, y: 0.08, h: 0.86, color: "#fff2d6", glow: true, edges: "glow", fix: "wd" },
      // 4 Tier glass display shelves
      { shape: "box", x: 0.0, z: 0.0, w: 0.78, d: 0.78, y: 0.28, h: 0.015, color: "glass", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.78, d: 0.78, y: 0.50, h: 0.015, color: "glass", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.78, d: 0.78, y: 0.72, h: 0.015, color: "glass", edges: true, fix: "h" },
      // Glass enclosure body
      { shape: "box", x: 0.0, z: 0.0, w: 0.82, d: 0.82, y: 0.06, h: 0.88, color: "glass", edges: "faint" },
      // Crown cap
      { shape: "box", x: 0.0, z: 0.0, w: 0.95, d: 0.95, y: 0.96, h: 0.04, color: "#1e2229", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.95, d: 0.95 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.35 }
    ]
  },

  // -------------------------------------------------------------------------
  // BATCH 10: Products 046–050 (Art Pedestals, Clocks & Valets)
  // -------------------------------------------------------------------------
  {
    num: 46,
    id: "monumental_art_pedestal",
    packId: "domolux.monumental_art_pedestal",
    name: {
      en: "Domolux Monumental Sculptural Art Pedestal",
      de: "Domolux Monumentales Kunst-Skulpturenpodest",
      ar: "قاعدة عرض منحوتات فنية ضخمة دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Museum sculpture pedestal sculpted from solid Belgian bluestone featuring asymmetrical chamfered geometry, satin bronze reveal collar, and recessed floor-wash illumination.",
    size: [0.65, 0.65, 1.25],
    mount: "floor",
    surface: true,
    group: "decor",
    room: ["hall", "living", "dining"],
    tags: ["pedestal", "sculpture", "art", "stone", "bluestone", "domolux"],
    parts: [
      // Recessed shadow base
      { shape: "box", x: 0.0, z: 0.0, w: 0.85, d: 0.85, y: 0.0, h: 0.04, color: "#141518", fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.88, y: 0.02, h: 0.02, color: "#ffe0b2", glow: true, edges: "glow", fix: "wdh" },
      // Main tapered monolithic stone body (Loft)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.04, h: 0.82, tx: 0.0, tz: 0.0, tw: 0.82, td: 0.82, color: "#25272e", finish: "dark", edges: true },
      // Satin bronze collar band
      { shape: "box", x: 0.0, z: 0.0, w: 0.84, d: 0.84, y: 0.86, h: 0.03, color: "#c5a059", edges: "glow", fix: "h" },
      // Top display slab
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.88, y: 0.89, h: 0.11, color: "#25272e", finish: "dark", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.96 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.84, d: 0.84, fill: true }
    ]
  },

  {
    num: 47,
    id: "three_dimensional_wall_art",
    packId: "domolux.three_dimensional_wall_art",
    name: {
      en: "Domolux Three-Dimensional Wall Artwork",
      de: "Domolux Dreidimensionales Wandkunstwerk",
      ar: "لوحة جدارية ثلاثية الأبعاد دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Curated contemporary sculptural wall installation composed of staggered dark bronze geometric planes, textured linen panels, and brushed brass floating pins.",
    size: [1.80, 0.16, 1.40],
    mount: "wall",
    wall_y: 1.0,
    surface: false,
    group: "decor",
    room: ["living", "hall", "dining", "bedroom"],
    tags: ["art", "wall", "sculptural", "bronze", "brass", "linen", "domolux"],
    parts: [
      // Wall backing mounting frame
      { shape: "box", x: 0.0, z: -0.35, w: 0.92, d: 0.20, y: 0.05, h: 0.90, color: "#181a1f", edges: "faint" },
      // Layer 1: Textured Belgian linen panel (rear-left)
      { shape: "box", x: -0.25, z: -0.15, w: 0.45, d: 0.25, y: 0.15, h: 0.70, color: "fabric", finish: "fabric", edges: true },
      // Layer 2: Smoked oak vertical slab (center-right)
      { shape: "box", x: 0.18, z: 0.0, w: 0.48, d: 0.25, y: 0.08, h: 0.84, color: "#3a2d23", finish: "wood", edges: true },
      // Layer 3: Satin champagne brass overlapping disc / square
      { shape: "loft", x: -0.05, z: 0.20, w: 0.35, d: 0.30, y: 0.28, h: 0.44, tx: 0.0, tz: 0.25, tw: 0.32, td: 0.30, color: "#c5a059", edges: "glow" },
      // Layer 4: Dark bronze accent cantilever rod
      { shape: "cyl", x: 0.0, z: 0.35, w: 0.03, d: 0.03, y: 0.10, h: 0.80, rot: 25, color: "#22252c", edges: "faint" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.92, d: 0.8 },
      { shape: "line", x1: -0.4, z1: -0.2, x2: 0.4, z2: 0.2 }
    ]
  },

  {
    num: 48,
    id: "horological_wall_clock",
    packId: "domolux.horological_wall_clock",
    name: {
      en: "Domolux Designer Horological Wall Clock",
      de: "Domolux Designer Horologische Wanduhr",
      ar: "ساعة حائط فلكية راقية دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Monumental 1.2m minimalist horological statement clock featuring a floating satin champagne brass outer ring, dark walnut open dial, and precision counterweighted hands.",
    size: [1.20, 0.12, 1.20],
    mount: "wall",
    wall_y: 1.20,
    surface: false,
    group: "decor",
    room: ["living", "hall", "dining", "office"],
    tags: ["clock", "horology", "timepiece", "brass", "minimal", "luxury", "domolux"],
    parts: [
      // Wall mounting central hub
      { shape: "cyl", x: 0.0, z: -0.30, w: 0.22, d: 0.22, y: 0.44, h: 0.12, color: "#1f2229", fix: "wdh" },
      // Floating outer bronze dial ring (outer cyl minus inner loft)
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.46, h: 0.08, color: "#c5a059", edges: "glow", fix: "h" },
      // Central walnut medallion disc
      { shape: "cyl", x: 0.0, z: 0.08, w: 0.28, d: 0.28, y: 0.42, h: 0.16, color: "#3a2d23", finish: "wood", edges: true, fix: "wdh" },
      // Center brass cannon pinion spindle
      { shape: "cyl", x: 0.0, z: 0.20, w: 0.06, d: 0.06, y: 0.46, h: 0.08, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Hour hand (points towards 2 o'clock)
      { shape: "box", x: 0.10, z: 0.18, w: 0.28, d: 0.02, y: 0.50, h: 0.015, rot: 30, color: "#181a1f", edges: "faint", fix: "wdh" },
      // Minute hand (long, points towards 10 o'clock)
      { shape: "box", x: -0.15, z: 0.22, w: 0.42, d: 0.015, y: 0.52, h: 0.015, rot: -45, color: "#181a1f", edges: "faint", fix: "wdh" }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: 0.0, r: 0.48 },
      { shape: "line", x1: 0.0, z1: 0.0, x2: 0.15, z2: 0.2 },
      { shape: "line", x1: 0.0, z1: 0.0, x2: -0.2, z2: -0.25 }
    ]
  },

  {
    num: 49,
    id: "designer_umbrella_stand",
    packId: "domolux.designer_umbrella_stand",
    name: {
      en: "Domolux Designer Umbrella Stand",
      de: "Domolux Designer-Schirmständer",
      ar: "حامل مظلات مصمم فاخر دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Sculptural foyer umbrella stand featuring fluted cast bronze outer cage, removable brushed brass drip basin, and heavy Nero Marquina marble stabilizing base.",
    size: [0.38, 0.38, 0.72],
    mount: "floor",
    surface: false,
    group: "decor",
    room: ["hall"],
    tags: ["umbrella", "stand", "foyer", "bronze", "marble", "domolux"],
    parts: [
      // Nero Marquina weighted marble base
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.92, y: 0.0, h: 0.10, color: "#1a1b20", finish: "dark", edges: true, fix: "h" },
      // Brass drip catch pan
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.84, d: 0.84, y: 0.10, h: 0.04, color: "#c5a059", edges: "glow", fix: "h" },
      // Cylindrical fluted cage body (6 vertical rods)
      { shape: "cyl", x: -0.28, z: 0.0, w: 0.04, d: 0.04, y: 0.12, h: 0.84, color: "#7a623a", fix: "wd" },
      { shape: "cyl", x: 0.28, z: 0.0, w: 0.04, d: 0.04, y: 0.12, h: 0.84, color: "#7a623a", fix: "wd" },
      { shape: "cyl", x: -0.14, z: -0.24, w: 0.04, d: 0.04, y: 0.12, h: 0.84, color: "#7a623a", fix: "wd" },
      { shape: "cyl", x: 0.14, z: -0.24, w: 0.04, d: 0.04, y: 0.12, h: 0.84, color: "#7a623a", fix: "wd" },
      { shape: "cyl", x: -0.14, z: 0.24, w: 0.04, d: 0.04, y: 0.12, h: 0.84, color: "#7a623a", fix: "wd" },
      { shape: "cyl", x: 0.14, z: 0.24, w: 0.04, d: 0.04, y: 0.12, h: 0.84, color: "#7a623a", fix: "wd" },
      // Top bronze crown rim
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.88, d: 0.88, y: 0.94, h: 0.06, color: "#c5a059", edges: "glow", fix: "h" }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: 0.0, r: 0.44 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.38 }
    ]
  },

  {
    num: 50,
    id: "gentlemans_valet_stand",
    packId: "domolux.gentlemans_valet_stand",
    name: {
      en: "Domolux Gentleman's Valet Stand",
      de: "Domolux Exklusiver Herrendiener",
      ar: "حامل ملابس وإكسسوارات رجالي فاخر دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Bedroom",
    description: "Handcrafted master dressing valet sculpted in solid American walnut and champagne bronze with contour jacket hanger, trouser rail, velvet-lined watch and cufflink tray, and shoe platform.",
    size: [0.55, 0.46, 1.25],
    mount: "floor",
    surface: true,
    group: "bedroom",
    room: ["bedroom", "closet"],
    tags: ["valet", "dressing", "stand", "walnut", "gentleman", "shoes", "domolux"],
    parts: [
      // Travertine base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.85, d: 0.85, y: 0.0, h: 0.05, color: "#d5cec4", finish: "body", edges: true, fix: "h" },
      // Dual bronze upright posts
      { shape: "cyl", x: -0.22, z: 0.0, w: 0.04, d: 0.04, y: 0.05, h: 0.80, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "cyl", x: 0.22, z: 0.0, w: 0.04, d: 0.04, y: 0.05, h: 0.80, color: "#c5a059", edges: "glow", fix: "wd" },
      // Lower shoe rack shelf
      { shape: "box", x: 0.0, z: 0.0, w: 0.70, d: 0.60, y: 0.12, h: 0.02, color: "#3a2d23", finish: "wood", fix: "h" },
      // Center velvet-lined jewelry and watch valet tray
      { shape: "box", x: 0.0, z: 0.0, w: 0.65, d: 0.45, y: 0.65, h: 0.05, color: "#3a2d23", finish: "wood", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.58, d: 0.38, y: 0.68, h: 0.025, color: "#191a20", fix: "h" },
      // Horizontal leather-wrapped trouser rail
      { shape: "cyl", x: 0.0, z: 0.15, w: 0.03, d: 0.03, y: 0.75, h: 0.75, axis: "x", color: "#8a5229", finish: "fabric", fix: "wd" },
      // Top curved solid walnut jacket shoulder hanger (Loft)
      { shape: "loft", x: 0.0, z: -0.05, w: 0.95, d: 0.20, y: 0.88, h: 0.12, tx: 0.0, tz: -0.08, tw: 0.75, td: 0.16, color: "#3a2d23", finish: "wood", edges: true }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.85, d: 0.85 },
      { shape: "line", x1: -0.45, z1: -0.05, x2: 0.45, z2: -0.05 }
    ]
  },

  // -------------------------------------------------------------------------
  // BATCH 11: Products 051–055 (Luggage Racks, Wine Storage & Luxury Bars)
  // -------------------------------------------------------------------------
  {
    num: 51,
    id: "luxury_luggage_rack",
    packId: "domolux.luxury_luggage_rack",
    name: {
      en: "Domolux Luxury Folding Luggage Rack",
      de: "Domolux Exklusive Kofferablage",
      ar: "حامل حقائب سفر فاخر دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Bedroom",
    description: "Suite luggage bench crafted from satin brass X-frame geometry, hand-stitched cognac bridle leather support straps, and protective walnut wall bumper rail.",
    size: [0.75, 0.55, 0.62],
    mount: "floor",
    surface: true,
    group: "bedroom",
    room: ["bedroom", "guest"],
    tags: ["luggage", "rack", "suitcase", "leather", "brass", "hospitality", "domolux"],
    parts: [
      // Left and right X-frame brass legs
      { shape: "box", x: -0.42, z: 0.0, w: 0.04, d: 0.75, y: 0.0, h: 0.85, rot: 25, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: -0.42, z: 0.0, w: 0.04, d: 0.75, y: 0.0, h: 0.85, rot: -25, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.42, z: 0.0, w: 0.04, d: 0.75, y: 0.0, h: 0.85, rot: 25, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.42, z: 0.0, w: 0.04, d: 0.75, y: 0.0, h: 0.85, rot: -25, color: "#c5a059", edges: "glow", fix: "wd" },
      // Horizontal connecting stretcher rods
      { shape: "cyl", x: 0.0, z: -0.32, w: 0.03, d: 0.03, y: 0.80, h: 0.88, axis: "x", color: "#c5a059", fix: "wd" },
      { shape: "cyl", x: 0.0, z: 0.32, w: 0.03, d: 0.03, y: 0.80, h: 0.88, axis: "x", color: "#c5a059", fix: "wd" },
      // 4 Heavy stitched cognac leather luggage straps
      { shape: "box", x: -0.28, z: 0.0, w: 0.08, d: 0.68, y: 0.78, h: 0.02, color: "#9c572b", finish: "fabric", edges: true, fix: "h" },
      { shape: "box", x: -0.09, z: 0.0, w: 0.08, d: 0.68, y: 0.78, h: 0.02, color: "#9c572b", finish: "fabric", edges: true, fix: "h" },
      { shape: "box", x: 0.09, z: 0.0, w: 0.08, d: 0.68, y: 0.78, h: 0.02, color: "#9c572b", finish: "fabric", edges: true, fix: "h" },
      { shape: "box", x: 0.28, z: 0.0, w: 0.08, d: 0.68, y: 0.78, h: 0.02, color: "#9c572b", finish: "fabric", edges: true, fix: "h" },
      // Rear walnut wall bumper
      { shape: "box", x: 0.0, z: -0.42, w: 0.90, d: 0.05, y: 0.82, h: 0.16, color: "#3a2d23", finish: "wood", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.9, d: 0.85 },
      { shape: "line", x1: -0.4, z1: -0.35, x2: -0.4, z2: 0.35 },
      { shape: "line", x1: 0.4, z1: -0.35, x2: 0.4, z2: 0.35 }
    ]
  },

  {
    num: 52,
    id: "floorstanding_wine_display_rack",
    packId: "domolux.floorstanding_wine_display_rack",
    name: {
      en: "Domolux Floorstanding Wine Display Rack",
      de: "Domolux Freistehendes Wein-Präsentationsregal",
      ar: "رف عرض نبيذ فاخر قائم على الأرض دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Floor-to-ceiling sculptural wine showcase tower featuring smoked oak vertical stiles, angled satin brass bottle cradles with LED label illumination, and Nero Marquina base.",
    size: [0.90, 0.42, 2.40],
    mount: "floor",
    surface: false,
    group: "living",
    room: ["dining", "living", "kitchen"],
    tags: ["wine", "rack", "display", "bottles", "sommelier", "domolux"],
    parts: [
      // Nero Marquina marble weighted base
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.92, y: 0.0, h: 0.06, color: "#1a1b20", finish: "dark", edges: true, fix: "h" },
      // Smoked oak outer twin vertical masts
      { shape: "box", x: -0.42, z: 0.0, w: 0.06, d: 0.80, y: 0.06, h: 0.92, color: "#3a2d23", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.42, z: 0.0, w: 0.06, d: 0.80, y: 0.06, h: 0.92, color: "#3a2d23", finish: "wood", edges: true, fix: "w" },
      // Top ceiling tension crown
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.80, y: 0.96, h: 0.04, color: "#3a2d23", finish: "wood", fix: "h" },
      // 5 Tier angled brass wine cradles
      { shape: "box", x: 0.0, z: 0.0, w: 0.76, d: 0.65, y: 0.20, h: 0.02, rot: 15, color: "#c5a059", edges: "glow", fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.76, d: 0.65, y: 0.36, h: 0.02, rot: 15, color: "#c5a059", edges: "glow", fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.76, d: 0.65, y: 0.52, h: 0.02, rot: 15, color: "#c5a059", edges: "glow", fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.76, d: 0.65, y: 0.68, h: 0.02, rot: 15, color: "#c5a059", edges: "glow", fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.76, d: 0.65, y: 0.84, h: 0.02, rot: 15, color: "#c5a059", edges: "glow", fix: "h" },
      // Wine bottles representations (cylinders on cradles)
      { shape: "cyl", x: -0.22, z: 0.05, w: 0.08, d: 0.08, y: 0.22, h: 0.24, axis: "z", color: "#193322", fix: "wdh" },
      { shape: "cyl", x: 0.22, z: 0.05, w: 0.08, d: 0.08, y: 0.22, h: 0.24, axis: "z", color: "#193322", fix: "wdh" },
      { shape: "cyl", x: -0.22, z: 0.05, w: 0.08, d: 0.08, y: 0.54, h: 0.24, axis: "z", color: "#193322", fix: "wdh" },
      { shape: "cyl", x: 0.22, z: 0.05, w: 0.08, d: 0.08, y: 0.54, h: 0.24, axis: "z", color: "#193322", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.92 },
      { shape: "circle", x: -0.22, z: 0.0, r: 0.1 },
      { shape: "circle", x: 0.22, z: 0.0, r: 0.1 }
    ]
  },

  {
    num: 53,
    id: "private_cigar_humidor",
    packId: "domolux.private_cigar_humidor",
    name: {
      en: "Domolux Private Cigar Humidor Cabinet",
      de: "Domolux Privater Zigarren-Humidorschrank",
      ar: "خزانة ترطيب سجائر خاصة فاخرة دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Electronic climate-regulated cigar humidor credenza lined in untreated Spanish cedar, Macassar ebony exterior veneer, digital micro-climate touch console, and UV-resistant glass door.",
    size: [0.85, 0.65, 1.35],
    mount: "floor",
    surface: true,
    group: "living",
    room: ["living", "office", "library"],
    tags: ["cigar", "humidor", "cedar", "ebony", "sommelier", "luxury", "domolux"],
    parts: [
      // Recessed bronze base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.88, y: 0.0, h: 0.06, color: "#3d301b", edges: "glow", fix: "h" },
      // Macassar ebony main cabinet carcass
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.94, y: 0.06, h: 0.88, color: "#221c16", finish: "dark", edges: true },
      // Spanish cedar interior lining & 3 slotted tray shelves
      { shape: "box", x: 0.0, z: 0.02, w: 0.84, d: 0.78, y: 0.12, h: 0.76, color: "#c48857", finish: "wood", edges: "faint" },
      { shape: "box", x: 0.0, z: 0.02, w: 0.80, d: 0.70, y: 0.32, h: 0.025, color: "#d99b68", finish: "wood", fix: "h" },
      { shape: "box", x: 0.0, z: 0.02, w: 0.80, d: 0.70, y: 0.54, h: 0.025, color: "#d99b68", finish: "wood", fix: "h" },
      { shape: "box", x: 0.0, z: 0.02, w: 0.80, d: 0.70, y: 0.72, h: 0.025, color: "#d99b68", finish: "wood", fix: "h" },
      // UV-protective glass door with bronze frame
      { shape: "box", x: 0.0, z: 0.44, w: 0.88, d: 0.04, y: 0.10, h: 0.80, color: "glass", edges: true },
      { shape: "box", x: -0.42, z: 0.44, w: 0.04, d: 0.05, y: 0.10, h: 0.80, color: "#c5a059", edges: "glow", fix: "wd" },
      // Digital LED hygrometer status display
      { shape: "box", x: 0.0, z: 0.47, w: 0.18, d: 0.015, y: 0.86, h: 0.04, color: "#00e5ff", glow: true, edges: "glow", fix: "wdh" },
      // Bronze vertical latch pull handle
      { shape: "box", x: 0.38, z: 0.48, w: 0.02, d: 0.04, y: 0.45, h: 0.16, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.94 },
      { shape: "rect", x: 0.0, z: 0.02, w: 0.84, d: 0.78, fill: true }
    ]
  },

  {
    num: 54,
    id: "rolling_cocktail_trolley",
    packId: "domolux.rolling_cocktail_trolley",
    name: {
      en: "Domolux Rolling Cocktail Trolley",
      de: "Domolux Rollbarer Cocktail-Servierwagen",
      ar: "عربة كوكتيل فاخرة متحركة دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Two-tier mobile hospitality bar cart constructed with satin brass tubular chassis, fluted glass tier shelves, leather-wrapped push handle, and brass-rimmed rubber spoke wheels.",
    size: [0.95, 0.55, 0.85],
    mount: "floor",
    surface: true,
    group: "living",
    room: ["living", "dining", "patio"],
    tags: ["cocktail", "bar", "trolley", "cart", "drinks", "hospitality", "domolux"],
    parts: [
      // 4 Large spoke wheels
      { shape: "cyl", x: -0.38, z: -0.28, w: 0.18, d: 0.04, y: 0.0, h: 0.18, axis: "z", color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.38, z: -0.28, w: 0.18, d: 0.04, y: 0.0, h: 0.18, axis: "z", color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: -0.38, z: 0.28, w: 0.18, d: 0.04, y: 0.0, h: 0.18, axis: "z", color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.38, z: 0.28, w: 0.18, d: 0.04, y: 0.0, h: 0.18, axis: "z", color: "#c5a059", edges: "glow", fix: "wdh" },
      // Brass tubular perimeter frame
      { shape: "box", x: -0.38, z: 0.0, w: 0.03, d: 0.65, y: 0.18, h: 0.75, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.38, z: 0.0, w: 0.03, d: 0.65, y: 0.18, h: 0.75, color: "#c5a059", edges: "glow", fix: "wd" },
      // Bottom fluted glass shelf with brass gallery rail
      { shape: "box", x: 0.0, z: 0.0, w: 0.82, d: 0.85, y: 0.25, h: 0.02, color: "glass", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.84, d: 0.87, y: 0.27, h: 0.06, color: "#c5a059", edges: "glow", fix: "h" },
      // Top service glass shelf
      { shape: "box", x: 0.0, z: 0.0, w: 0.82, d: 0.85, y: 0.82, h: 0.02, color: "glass", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.84, d: 0.87, y: 0.84, h: 0.05, color: "#c5a059", edges: "glow", fix: "h" },
      // Ergonomic curved leather-wrapped push handle
      { shape: "cyl", x: 0.46, z: 0.0, w: 0.04, d: 0.04, y: 0.86, h: 0.45, axis: "z", color: "#8a5229", finish: "fabric", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.84, d: 0.87 },
      { shape: "circle", x: -0.38, z: -0.28, r: 0.08 },
      { shape: "circle", x: 0.38, z: -0.28, r: 0.08 },
      { shape: "circle", x: -0.38, z: 0.28, r: 0.08 },
      { shape: "circle", x: 0.38, z: 0.28, r: 0.08 }
    ]
  },

  {
    num: 55,
    id: "bespoke_luxury_bar_cabinet",
    packId: "domolux.bespoke_luxury_bar_cabinet",
    name: {
      en: "Domolux Bespoke Luxury Bar Cabinet",
      de: "Domolux Maßgefertigte Luxus-Barschrankwand",
      ar: "خزانة بار فاخرة متكاملة دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Monumental hospitality bar credenza with folding pocket doors, antiqued mirrored back wall, polished brass stemware racks, Calacatta marble mixing station, and wine bottle storage drawers.",
    size: [1.80, 0.65, 1.95],
    mount: "floor",
    surface: true,
    group: "living",
    room: ["living", "dining"],
    tags: ["bar", "cabinet", "cocktail", "marble", "mirrored", "luxury", "domolux"],
    parts: [
      // Base shadow reveal
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.90, y: 0.0, h: 0.05, color: "#16171b", edges: "faint", fix: "h" },
      // Main dark walnut carcass
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.94, y: 0.05, h: 0.92, color: "#3a2d23", finish: "wood", edges: true },
      // Calacatta marble counter mixing deck
      { shape: "box", x: 0.0, z: 0.02, w: 0.90, d: 0.80, y: 0.44, h: 0.05, color: "#e8e5dc", finish: "body", edges: true, fix: "h" },
      // Antiqued mirror rear backdrop
      { shape: "box", x: 0.0, z: -0.38, w: 0.90, d: 0.02, y: 0.50, h: 0.44, color: "#a5b4c4", glow: true, edges: "faint" },
      // Brass stemware hanging racks (upper)
      { shape: "box", x: 0.0, z: 0.0, w: 0.86, d: 0.65, y: 0.90, h: 0.02, color: "#c5a059", edges: "glow", fix: "h" },
      // Middle illuminated glass shelf
      { shape: "box", x: 0.0, z: -0.10, w: 0.88, d: 0.45, y: 0.70, h: 0.015, color: "glass", edges: true, fix: "h" },
      // Lower refrigerated / storage doors with bronze shadow reveals
      { shape: "box", x: -0.23, z: 0.44, w: 0.43, d: 0.04, y: 0.08, h: 0.34, color: "#2d231b", finish: "wood", edges: true },
      { shape: "box", x: 0.23, z: 0.44, w: 0.43, d: 0.04, y: 0.08, h: 0.34, color: "#2d231b", finish: "wood", edges: true },
      // Vertical champagne bronze pull handles
      { shape: "box", x: -0.04, z: 0.48, w: 0.02, d: 0.04, y: 0.16, h: 0.18, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.04, z: 0.48, w: 0.02, d: 0.04, y: 0.16, h: 0.18, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.94 },
      { shape: "line", x1: 0.0, z1: -0.45, x2: 0.0, z2: 0.45 }
    ]
  },

  // -------------------------------------------------------------------------
  // BATCH 12: Products 056–060 (Tea Trolleys, Lecterns, Planters & Gallery Rails)
  // -------------------------------------------------------------------------
  {
    num: 56,
    id: "fine_tea_service_trolley",
    packId: "domolux.fine_tea_service_trolley",
    name: {
      en: "Domolux Fine Tea Service Trolley",
      de: "Domolux Luxuriöser Tee-Servierwagen",
      ar: "عربة تقديم الشاي الراقية دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Specialist hospitality tea cart crafted in steamed beech and satin brass, featuring removable porcelain tray inserts, heated urn induction port, and velvet tea caddy drawers.",
    size: [0.88, 0.52, 0.82],
    mount: "floor",
    surface: true,
    group: "living",
    room: ["living", "dining", "patio"],
    tags: ["tea", "service", "trolley", "hospitality", "cart", "domolux"],
    parts: [
      // 4 brass castor wheels
      { shape: "cyl", x: -0.36, z: -0.20, w: 0.10, d: 0.10, y: 0.0, h: 0.06, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.36, z: -0.20, w: 0.10, d: 0.10, y: 0.0, h: 0.06, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: -0.36, z: 0.20, w: 0.10, d: 0.10, y: 0.0, h: 0.06, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.36, z: 0.20, w: 0.10, d: 0.10, y: 0.0, h: 0.06, color: "#c5a059", fix: "wdh" },
      // Steamed beech wood frame
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.85, y: 0.08, h: 0.78, color: "#a88158", finish: "wood", edges: true },
      // White porcelain tray insert (top deck)
      { shape: "box", x: -0.10, z: 0.0, w: 0.55, d: 0.75, y: 0.84, h: 0.03, color: "#f8f9fa", finish: "white", edges: true, fix: "h" },
      // Induction heating pad for silver kettle
      { shape: "cyl", x: 0.28, z: 0.0, w: 0.28, d: 0.28, y: 0.85, h: 0.02, color: "#1e2229", fix: "wdh" },
      // Brass boundary guardrail
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.88, y: 0.86, h: 0.05, color: "#c5a059", edges: "glow", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.88, d: 0.85 },
      { shape: "circle", x: 0.28, z: 0.0, r: 0.14 }
    ]
  },

  {
    num: 57,
    id: "private_library_lectern",
    packId: "domolux.private_library_lectern",
    name: {
      en: "Domolux Private Library Reading Lectern",
      de: "Domolux Bibliotheks-Lesepult",
      ar: "منصة قراءة مكتبية فاخرة دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Sculptural reading lectern handcrafted in American walnut with 25-degree angled book rest, knurled brass page-holder clips, integrated LED reading wand, and cruciform weighted bronze base.",
    size: [0.65, 0.55, 1.30],
    mount: "floor",
    surface: true,
    group: "living",
    room: ["library", "office", "living"],
    tags: ["lectern", "reading", "library", "book", "walnut", "brass", "domolux"],
    parts: [
      // Weighted bronze cruciform base
      { shape: "box", x: 0.0, z: 0.0, w: 0.80, d: 0.20, y: 0.0, h: 0.05, color: "#3d301b", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.20, d: 0.80, y: 0.0, h: 0.05, color: "#3d301b", edges: "glow", fix: "wdh" },
      // Central walnut fluted column shaft
      { shape: "box", x: 0.0, z: 0.0, w: 0.18, d: 0.18, y: 0.05, h: 0.72, color: "#45362a", finish: "wood", edges: true, fix: "wd" },
      // Brass adjustable collar sleeve
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.22, d: 0.22, y: 0.75, h: 0.06, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Angled document bookrest (Loft)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.85, d: 0.75, y: 0.80, h: 0.18, tx: 0.0, tz: -0.10, tw: 0.85, td: 0.75, color: "#382c22", finish: "wood", edges: true },
      // Brass bottom book lip ledge
      { shape: "box", x: 0.0, z: 0.28, w: 0.85, d: 0.08, y: 0.80, h: 0.05, color: "#c5a059", edges: "glow", fix: "h" },
      // Sleek arching brass LED reading lamp
      { shape: "cyl", x: 0.0, z: -0.32, w: 0.02, d: 0.02, y: 0.95, h: 0.35, color: "#c5a059", fix: "wd" },
      { shape: "box", x: 0.0, z: -0.15, w: 0.25, d: 0.04, y: 0.98, h: 0.02, color: "#fff5ea", glow: true, edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.85, d: 0.75 },
      { shape: "line", x1: -0.4, z1: 0.28, x2: 0.4, z2: 0.28 }
    ]
  },

  {
    num: 58,
    id: "sculptural_indoor_planter",
    packId: "domolux.sculptural_indoor_planter",
    name: {
      en: "Domolux Sculptural Indoor Planter Trough",
      de: "Domolux Skulpturaler Innenraum-Pflanztrog",
      ar: "حوض نباتات داخلي نحتي دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Elongated architectural indoor landscape trough cast in dark basalt composite with satin champagne brass rim collar, self-watering sub-irrigation tank, and lush Ficus lyrata architectural foliage.",
    size: [1.80, 0.55, 1.45],
    mount: "floor",
    surface: false,
    group: "living",
    room: ["living", "hall", "dining"],
    tags: ["planter", "trough", "plants", "botanical", "basalt", "brass", "domolux"],
    parts: [
      // Recessed dark plinth base with shadow reveal
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.85, y: 0.0, h: 0.04, color: "#141518", fix: "h" },
      // Basalt composite tapered vessel trough body (Loft)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.92, d: 0.88, y: 0.04, h: 0.45, tx: 0.0, tz: 0.0, tw: 0.98, td: 0.95, color: "#22252c", finish: "dark", edges: true },
      // Satin champagne brass perimeter rim collar
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.98, y: 0.48, h: 0.03, color: "#c5a059", edges: "glow", fix: "h" },
      // Organic mulch / dark river pebble soil bed
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.88, y: 0.46, h: 0.04, color: "#2d241e", finish: "pot" },
      // 3 Architectural lush botanical specimen plants
      { shape: "cyl", x: -0.28, z: 0.0, w: 0.06, d: 0.06, y: 0.50, h: 0.40, color: "#3d2817", fix: "wd" },
      { shape: "loft", x: -0.28, z: 0.0, w: 0.45, d: 0.45, y: 0.70, h: 0.28, tx: -0.28, tz: 0.0, tw: 0.30, td: 0.30, color: "plant", finish: "plant", edges: true },
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.06, d: 0.06, y: 0.50, h: 0.50, color: "#3d2817", fix: "wd" },
      { shape: "loft", x: 0.0, z: 0.0, w: 0.55, d: 0.55, y: 0.80, h: 0.35, tx: 0.0, tz: 0.0, tw: 0.35, td: 0.35, color: "plant", finish: "plant", edges: true },
      { shape: "cyl", x: 0.28, z: 0.0, w: 0.06, d: 0.06, y: 0.50, h: 0.40, color: "#3d2817", fix: "wd" },
      { shape: "loft", x: 0.28, z: 0.0, w: 0.45, d: 0.45, y: 0.70, h: 0.28, tx: 0.28, tz: 0.0, tw: 0.30, td: 0.30, color: "plant", finish: "plant", edges: true }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.98 },
      { shape: "circle", x: -0.28, z: 0.0, r: 0.2 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.25 },
      { shape: "circle", x: 0.28, z: 0.0, r: 0.2 }
    ]
  },

  {
    num: 59,
    id: "living_green_wall",
    packId: "domolux.living_green_wall",
    name: {
      en: "Domolux Living Green Wall Installation",
      de: "Domolux Vertikale Lebende Pflanzenwand",
      ar: "جدار نباتي حي داخلي دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Vertical indoor living biophilic plant wall module featuring automated hydroponic nutrient irrigation, dark bronze perimeter frame, and spectrum LED plant grow lighting.",
    size: [2.20, 0.28, 2.80],
    mount: "wall",
    wall_y: 0.10,
    surface: false,
    group: "living",
    room: ["living", "hall", "bath", "dining"],
    tags: ["green", "wall", "vertical", "biophilic", "plants", "hydroponic", "domolux"],
    parts: [
      // Waterproof wall backing enclosure
      { shape: "box", x: 0.0, z: -0.35, w: 1.0, d: 0.30, y: 0.0, h: 1.0, color: "#141519", edges: "faint" },
      // Lower recirculating nutrient reservoir tank
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.85, y: 0.0, h: 0.12, color: "#22252c", edges: true, fix: "h" },
      // Dark bronze outer architectural frame
      { shape: "box", x: -0.48, z: 0.0, w: 0.04, d: 0.80, y: 0.0, h: 1.0, color: "#3d301b", edges: "glow", fix: "w" },
      { shape: "box", x: 0.48, z: 0.0, w: 0.04, d: 0.80, y: 0.0, h: 1.0, color: "#3d301b", edges: "glow", fix: "w" },
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.80, y: 0.96, h: 0.04, color: "#3d301b", edges: "glow", fix: "h" },
      // 6 modular dense living plant panels with dimensional foliage relief
      { shape: "loft", x: -0.24, z: 0.12, w: 0.44, d: 0.50, y: 0.14, h: 0.26, tx: -0.24, tz: 0.18, tw: 0.40, td: 0.45, color: "#1f6e2e", finish: "plant", edges: true },
      { shape: "loft", x: 0.24, z: 0.12, w: 0.44, d: 0.50, y: 0.14, h: 0.26, tx: 0.24, tz: 0.18, tw: 0.40, td: 0.45, color: "#278237", finish: "plant", edges: true },
      { shape: "loft", x: -0.24, z: 0.12, w: 0.44, d: 0.50, y: 0.41, h: 0.26, tx: -0.24, tz: 0.18, tw: 0.40, td: 0.45, color: "#278237", finish: "plant", edges: true },
      { shape: "loft", x: 0.24, z: 0.12, w: 0.44, d: 0.50, y: 0.41, h: 0.26, tx: 0.24, tz: 0.18, tw: 0.40, td: 0.45, color: "#1f6e2e", finish: "plant", edges: true },
      { shape: "loft", x: -0.24, z: 0.12, w: 0.44, d: 0.50, y: 0.68, h: 0.26, tx: -0.24, tz: 0.18, tw: 0.40, td: 0.45, color: "#1f6e2e", finish: "plant", edges: true },
      { shape: "loft", x: 0.24, z: 0.12, w: 0.44, d: 0.50, y: 0.68, h: 0.26, tx: 0.24, tz: 0.18, tw: 0.40, td: 0.45, color: "#278237", finish: "plant", edges: true },
      // Top integrated LED grow light canopy bar
      { shape: "box", x: 0.0, z: 0.25, w: 0.94, d: 0.12, y: 0.94, h: 0.03, color: "#ffe0b2", glow: true, edges: "glow", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.8 },
      { shape: "rect", x: 0.0, z: 0.1, w: 0.92, d: 0.6, fill: true }
    ]
  },

  {
    num: 60,
    id: "architectural_gallery_rail",
    packId: "domolux.architectural_gallery_rail",
    name: {
      en: "Domolux Architectural Gallery Picture-Rail System",
      de: "Domolux Architektonisches Galerie-Hängesystem",
      ar: "نظام تعليق لوحات المعارض المعماري دومولوكس"
    },
    collection: "Exclusive Interior Furnishings, Art and Decor",
    collectionSlug: "03_Exclusive_Furnishings_Art",
    category: "Living Room",
    description: "Ceiling-recessed museum picture hanging system with extruded bronze track, twin micro-braided steel suspension cables, and counterbalanced framed fine art canvas.",
    size: [2.00, 0.15, 2.20],
    mount: "wall",
    wall_y: 0.80,
    surface: false,
    group: "decor",
    room: ["hall", "living", "dining"],
    tags: ["gallery", "rail", "art", "hanging", "museum", "canvas", "domolux"],
    parts: [
      // Top ceiling-level recessed bronze track
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.85, y: 0.96, h: 0.04, color: "#c5a059", edges: "glow", fix: "h" },
      // Twin braided steel suspension cables
      { shape: "cyl", x: -0.30, z: 0.05, w: 0.015, d: 0.015, y: 0.35, h: 0.60, color: "metal", fix: "wd" },
      { shape: "cyl", x: 0.30, z: 0.05, w: 0.015, d: 0.015, y: 0.35, h: 0.60, color: "metal", fix: "wd" },
      // Brass hanging cable sliders
      { shape: "box", x: -0.30, z: 0.05, w: 0.03, d: 0.03, y: 0.94, h: 0.03, color: "#c5a059", fix: "wdh" },
      { shape: "box", x: 0.30, z: 0.05, w: 0.03, d: 0.03, y: 0.94, h: 0.03, color: "#c5a059", fix: "wdh" },
      // Fine art framed canvas (floating on cables)
      { shape: "box", x: 0.0, z: 0.10, w: 0.80, d: 0.40, y: 0.15, h: 0.65, color: "#2d231b", finish: "wood", edges: true },
      { shape: "box", x: 0.0, z: 0.12, w: 0.72, d: 0.35, y: 0.18, h: 0.59, color: "#f1ede6", finish: "white", edges: "faint" },
      // Top mounted museum picture spotlight
      { shape: "box", x: 0.0, z: 0.28, w: 0.24, d: 0.06, y: 0.82, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.28, w: 0.22, d: 0.04, y: 0.80, h: 0.02, color: "#fff5ea", glow: true, edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "line", x1: -0.5, z1: 0.0, x2: 0.5, z2: 0.0 },
      { shape: "rect", x: 0.0, z: 0.1, w: 0.8, d: 0.4 }
    ]
  }
];
