// DOMOLUX VILLA 200 — COLLECTION B: DOORS, WINDOWS, ENTRANCES & EXTERIOR ENVELOPE (Products 021–040)
// Batches 05–08

export const COLLECTION_B_PRODUCTS = [
  // -------------------------------------------------------------------------
  // BATCH 05: Products 021–025 (Monumental Entrance & Interior Doors)
  // -------------------------------------------------------------------------
  {
    num: 21,
    id: "grand_pivot_entrance_door",
    packId: "domolux.grand_pivot_entrance_door",
    name: {
      en: "Domolux Grand Pivot Entrance Door",
      de: "Domolux Monumentale Pivot-Eingangstür",
      ar: "باب مدخل محوري كبير دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "Monumental oversized entrance pivot door featuring carbon-core smoked oak cladding, thermal-break bronze jambs, concealed heavy-duty bottom pivot hinge, and full-height bronze pull handle.",
    size: [1.80, 0.28, 3.20],
    mount: "floor",
    surface: false,
    group: "door",
    room: ["hall", "living"],
    tags: ["door", "pivot", "entrance", "oak", "bronze", "luxury", "domolux"],
    parts: [
      // Bronze outer structural frame jambs
      { shape: "box", x: -0.47, z: 0.0, w: 0.06, d: 0.90, y: 0.0, h: 1.0, color: "#3d301b", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.47, z: 0.0, w: 0.06, d: 0.90, y: 0.0, h: 1.0, color: "#3d301b", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.90, y: 0.96, h: 0.04, color: "#3d301b", edges: "glow", fix: "hd" },
      // Recessed floor pivot box & stainless threshold
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.92, y: 0.0, h: 0.02, color: "metal", edges: "faint", fix: "hd" },
      // Main pivot door leaf (smoked oak with metallic core)
      { shape: "box", x: 0.03, z: 0.05, w: 0.88, d: 0.45, y: 0.025, h: 0.93, color: "#382c22", finish: "wood", edges: true },
      // Horizontal shadow reveals
      { shape: "box", x: 0.03, z: 0.17, w: 0.87, d: 0.02, y: 0.33, h: 0.01, color: "#191512", fix: "h" },
      { shape: "box", x: 0.03, z: 0.17, w: 0.87, d: 0.02, y: 0.66, h: 0.01, color: "#191512", fix: "h" },
      // Pivot bearing axis hardware representation (at x = -0.32)
      { shape: "cyl", x: -0.32, z: 0.05, w: 0.06, d: 0.06, y: 0.0, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: -0.32, z: 0.05, w: 0.06, d: 0.06, y: 0.95, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Full-height satin bronze vertical pull handle (front & back)
      { shape: "box", x: 0.35, z: 0.22, w: 0.03, d: 0.08, y: 0.15, h: 0.70, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.35, z: -0.12, w: 0.03, d: 0.08, y: 0.15, h: 0.70, color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.9 },
      { shape: "rect", x: 0.03, z: 0.05, w: 0.88, d: 0.45, fill: true },
      { shape: "circle", x: -0.32, z: 0.05, r: 0.08 }
    ]
  },

  {
    num: 22,
    id: "double_leaf_entrance_door",
    packId: "domolux.double_leaf_entrance_door",
    name: {
      en: "Domolux Bespoke Double-Leaf Entrance Door",
      de: "Domolux Zweiflügelige Portal-Eingangstür",
      ar: "باب مدخل مزدوج الأجنحة دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "Symmetrical double-leaf architectural portal with dark walnut cassette panels, bronze moldings, twin full-height bronze pull stiles, and multipoint lock mortise.",
    size: [2.40, 0.24, 3.00],
    mount: "floor",
    surface: false,
    group: "door",
    room: ["hall", "living"],
    tags: ["door", "double", "entrance", "walnut", "bronze", "domolux"],
    parts: [
      // Frame
      { shape: "box", x: -0.48, z: 0.0, w: 0.04, d: 0.90, y: 0.0, h: 1.0, color: "#3d301b", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.48, z: 0.0, w: 0.04, d: 0.90, y: 0.0, h: 1.0, color: "#3d301b", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.90, y: 0.96, h: 0.04, color: "#3d301b", edges: "glow", fix: "hd" },
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.92, y: 0.0, h: 0.02, color: "metal", edges: "faint", fix: "hd" },
      // Left Door Leaf
      { shape: "box", x: -0.235, z: 0.0, w: 0.45, d: 0.40, y: 0.025, h: 0.93, color: "#382c22", finish: "wood", edges: true },
      // Right Door Leaf
      { shape: "box", x: 0.235, z: 0.0, w: 0.45, d: 0.40, y: 0.025, h: 0.93, color: "#382c22", finish: "wood", edges: true },
      // Left leaf decorative cassette moldings
      { shape: "loft", x: -0.235, z: 0.12, w: 0.35, d: 0.10, y: 0.10, h: 0.35, tx: -0.235, tz: 0.14, tw: 0.28, td: 0.10, color: "#47382c", edges: true },
      { shape: "loft", x: -0.235, z: 0.12, w: 0.35, d: 0.10, y: 0.55, h: 0.35, tx: -0.235, tz: 0.14, tw: 0.28, td: 0.10, color: "#47382c", edges: true },
      // Right leaf decorative cassette moldings
      { shape: "loft", x: 0.235, z: 0.12, w: 0.35, d: 0.10, y: 0.10, h: 0.35, tx: 0.235, tz: 0.14, tw: 0.28, td: 0.10, color: "#47382c", edges: true },
      { shape: "loft", x: 0.235, z: 0.12, w: 0.35, d: 0.10, y: 0.55, h: 0.35, tx: 0.235, tz: 0.14, tw: 0.28, td: 0.10, color: "#47382c", edges: true },
      // Center Meeting Stile Astrogal Reveal
      { shape: "box", x: 0.0, z: 0.12, w: 0.02, d: 0.15, y: 0.025, h: 0.93, color: "#c5a059", edges: "glow", fix: "wd" },
      // Twin vertical pull handles
      { shape: "box", x: -0.06, z: 0.18, w: 0.025, d: 0.08, y: 0.25, h: 0.50, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.06, z: 0.18, w: 0.025, d: 0.08, y: 0.25, h: 0.50, color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.9 },
      { shape: "rect", x: -0.235, z: 0.0, w: 0.45, d: 0.4 },
      { shape: "rect", x: 0.235, z: 0.0, w: 0.45, d: 0.4 },
      { shape: "line", x1: 0.0, z1: -0.2, x2: 0.0, z2: 0.2 }
    ]
  },

  {
    num: 23,
    id: "concealed_flush_door",
    packId: "domolux.concealed_flush_door",
    name: {
      en: "Domolux Concealed Flush Interior Door",
      de: "Domolux Wandbündige Tapetentür",
      ar: "باب داخلي متساوٍ ومخفي دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "Minimalist frameless architectural flush door integrated perfectly planar into partition walls with concealed magnetic latch, 3D adjustable concealed hinges, and magnetic recessed handle.",
    size: [1.10, 0.15, 2.60],
    mount: "floor",
    surface: false,
    group: "door",
    room: ["hall", "bedroom", "living", "bath"],
    tags: ["door", "flush", "concealed", "minimal", "interior", "domolux"],
    parts: [
      // Concealed aluminum sub-frame reveals
      { shape: "box", x: -0.49, z: 0.0, w: 0.02, d: 0.95, y: 0.0, h: 1.0, color: "#1e2229", edges: "faint", fix: "wd" },
      { shape: "box", x: 0.49, z: 0.0, w: 0.02, d: 0.95, y: 0.0, h: 1.0, color: "#1e2229", edges: "faint", fix: "wd" },
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.95, y: 0.98, h: 0.02, color: "#1e2229", edges: "faint", fix: "hd" },
      // Flush door leaf (lacquered matte white/body)
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.45, y: 0.01, h: 0.97, color: "#f3f4f6", finish: "front", edges: true },
      // Concealed 3D hinge pockets (left stile)
      { shape: "box", x: -0.47, z: 0.0, w: 0.02, d: 0.20, y: 0.20, h: 0.08, color: "metal", fix: "wdh" },
      { shape: "box", x: -0.47, z: 0.0, w: 0.02, d: 0.20, y: 0.80, h: 0.08, color: "metal", fix: "wdh" },
      // Flush magnetic architectural lever handle
      { shape: "box", x: 0.38, z: 0.14, w: 0.03, d: 0.10, y: 0.48, h: 0.02, color: "#181a1f", edges: "faint", fix: "wdh" },
      { shape: "box", x: 0.38, z: 0.20, w: 0.12, d: 0.04, y: 0.48, h: 0.02, color: "#181a1f", edges: "faint", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.45 },
      { shape: "line", x1: -0.48, z1: -0.22, x2: 0.48, z2: 0.22 }
    ]
  },

  {
    num: 24,
    id: "arched_interior_door",
    packId: "domolux.arched_interior_door",
    name: {
      en: "Domolux Arched Architectural Interior Door",
      de: "Domolux Gewölbte Innentür",
      ar: "باب داخلي قوسي دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "Curved semicircular arched interior doorway with fluted dark oak stiles, custom brass hinges, arch transom panel, and satin brass lever set.",
    size: [1.25, 0.22, 2.80],
    mount: "floor",
    surface: false,
    group: "door",
    room: ["hall", "living", "bedroom", "dining"],
    tags: ["door", "arched", "wood", "classical", "interior", "domolux"],
    parts: [
      // Frame jambs
      { shape: "box", x: -0.46, z: 0.0, w: 0.08, d: 0.85, y: 0.0, h: 0.75, color: "#45362b", finish: "wood", edges: true, fix: "w" },
      { shape: "box", x: 0.46, z: 0.0, w: 0.08, d: 0.85, y: 0.0, h: 0.75, color: "#45362b", finish: "wood", edges: true, fix: "w" },
      // Semicircular arched frame upper segments (Lofts)
      { shape: "loft", x: -0.32, z: 0.0, w: 0.20, d: 0.85, y: 0.75, h: 0.20, tx: -0.20, tz: 0.0, tw: 0.18, td: 0.85, color: "#45362b", finish: "wood", edges: true },
      { shape: "loft", x: 0.32, z: 0.0, w: 0.20, d: 0.85, y: 0.75, h: 0.20, tx: 0.20, tz: 0.0, tw: 0.18, td: 0.85, color: "#45362b", finish: "wood", edges: true },
      { shape: "box", x: 0.0, z: 0.0, w: 0.36, d: 0.85, y: 0.94, h: 0.06, color: "#45362b", finish: "wood", edges: true, fix: "h" },
      // Door leaf body
      { shape: "box", x: 0.0, z: 0.0, w: 0.82, d: 0.35, y: 0.02, h: 0.73, color: "#382c22", finish: "wood", edges: true },
      // Upper arched door leaf segment
      { shape: "loft", x: 0.0, z: 0.0, w: 0.82, d: 0.35, y: 0.75, h: 0.18, tx: 0.0, tz: 0.0, tw: 0.60, td: 0.35, color: "#382c22", finish: "wood", edges: true },
      // Brass lever handle & escutcheon
      { shape: "box", x: 0.32, z: 0.10, w: 0.04, d: 0.12, y: 0.40, h: 0.12, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.32, z: 0.16, w: 0.03, d: 0.12, y: 0.46, h: 0.02, axis: "x", color: "#c5a059", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.85 },
      { shape: "line", x1: -0.41, z1: -0.17, x2: 0.41, z2: 0.17 }
    ]
  },

  {
    num: 25,
    id: "glass_pivot_door",
    packId: "domolux.glass_pivot_door",
    name: {
      en: "Domolux Premium Glass Pivot Door",
      de: "Domolux Glas-Pivot-Innentür",
      ar: "باب زجاجي محوري دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "Full-height smoked architectural safety glass pivot door with ultra-slim dark bronze anodized frame, hydraulic self-closing floor pivot, and vertical bronze pull stile.",
    size: [1.40, 0.18, 3.00],
    mount: "floor",
    surface: false,
    group: "door",
    room: ["living", "office", "hall", "bath"],
    tags: ["door", "glass", "pivot", "smoked", "bronze", "minimal", "domolux"],
    parts: [
      // Slim perimeter frame jambs
      { shape: "box", x: -0.485, z: 0.0, w: 0.03, d: 0.80, y: 0.0, h: 1.0, color: "#2d251d", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.485, z: 0.0, w: 0.03, d: 0.80, y: 0.0, h: 1.0, color: "#2d251d", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.80, y: 0.98, h: 0.02, color: "#2d251d", edges: "glow", fix: "hd" },
      // Glass leaf slim bronze perimeter profile
      { shape: "box", x: 0.02, z: 0.0, w: 0.92, d: 0.25, y: 0.015, h: 0.965, color: "#7a623a", edges: "glow" },
      // 12mm Low-iron smoked tempered glass panel
      { shape: "box", x: 0.02, z: 0.0, w: 0.88, d: 0.08, y: 0.03, h: 0.935, color: "glass", edges: true },
      // Pivot axis hardware
      { shape: "cyl", x: -0.28, z: 0.0, w: 0.05, d: 0.05, y: 0.0, h: 0.025, color: "metal", fix: "wdh" },
      { shape: "cyl", x: -0.28, z: 0.0, w: 0.05, d: 0.05, y: 0.975, h: 0.025, color: "metal", fix: "wdh" },
      // Full height architectural tubular pull bar
      { shape: "cyl", x: 0.35, z: 0.08, w: 0.03, d: 0.03, y: 0.15, h: 0.70, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "cyl", x: 0.35, z: -0.08, w: 0.03, d: 0.03, y: 0.15, h: 0.70, color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.8 },
      { shape: "line", x1: 0.02, z1: -0.1, x2: 0.02, z2: 0.1 },
      { shape: "circle", x: -0.28, z: 0.0, r: 0.06 }
    ]
  },

  // -------------------------------------------------------------------------
  // BATCH 06: Products 026–030 (Sliding, Folding & Specialized Doors)
  // -------------------------------------------------------------------------
  {
    num: 26,
    id: "frameless_sliding_glass_door",
    packId: "domolux.frameless_sliding_glass_door",
    name: {
      en: "Domolux Frameless Panoramic Sliding Glass Door",
      de: "Domolux Rahmenlose Panorama-Glasschiebetür",
      ar: "باب زجاجي منزلق بانورامي بدون إطار دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "Architectural floor-to-ceiling panoramic sliding glass door with zero-threshold recessed bottom track, concealed soft-closing damper, and flush integrated edge pull.",
    size: [2.60, 0.20, 3.10],
    mount: "floor",
    surface: false,
    group: "door",
    room: ["living", "terrace", "bedroom", "dining"],
    tags: ["sliding", "glass", "panoramic", "frameless", "terrace", "domolux"],
    parts: [
      // Recessed bottom floor track
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.90, y: 0.0, h: 0.02, color: "#1f2228", edges: "faint", fix: "h" },
      // Recessed ceiling suspension track
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.90, y: 0.97, h: 0.03, color: "#1f2228", edges: "faint", fix: "h" },
      // Fixed Glass Pane (Rear track, right side)
      { shape: "box", x: 0.24, z: -0.15, w: 0.48, d: 0.08, y: 0.02, h: 0.95, color: "glass", edges: true },
      { shape: "box", x: 0.24, z: -0.15, w: 0.50, d: 0.15, y: 0.015, h: 0.02, color: "#3d301b", fix: "h" },
      // Sliding Glass Leaf (Front track, left side)
      { shape: "box", x: -0.24, z: 0.15, w: 0.49, d: 0.08, y: 0.025, h: 0.94, color: "glass", edges: true },
      { shape: "box", x: -0.24, z: 0.15, w: 0.50, d: 0.15, y: 0.015, h: 0.02, color: "#3d301b", fix: "h" },
      { shape: "box", x: -0.24, z: 0.15, w: 0.50, d: 0.15, y: 0.965, h: 0.02, color: "#3d301b", fix: "h" },
      // Interlocking weather seals & vertical handle
      { shape: "box", x: 0.0, z: 0.0, w: 0.03, d: 0.35, y: 0.02, h: 0.95, color: "#1a1c22", edges: "faint", fix: "wd" },
      { shape: "box", x: -0.46, z: 0.22, w: 0.02, d: 0.06, y: 0.30, h: 0.40, color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.9 },
      { shape: "line", x1: -0.48, z1: 0.15, x2: 0.01, z2: 0.15 },
      { shape: "line", x1: 0.0, z1: -0.15, x2: 0.48, z2: -0.15 }
    ]
  },

  {
    num: 27,
    id: "pocket_sliding_door",
    packId: "domolux.pocket_sliding_door",
    name: {
      en: "Domolux Concealed Pocket Sliding Door",
      de: "Domolux In Der Wand Laufende Schiebetür",
      ar: "باب منزلق داخل الجدار دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "In-wall architectural pocket sliding door cassette system with smoked oak door leaf, concealed top hanger tracks, flush jamb casing, and edge finger ring pull.",
    size: [2.20, 0.25, 2.60],
    mount: "floor",
    surface: false,
    group: "door",
    room: ["bedroom", "bath", "closet", "living"],
    tags: ["pocket", "sliding", "door", "concealed", "space-saving", "domolux"],
    parts: [
      // Wall cavity pocket pocket frame (left half)
      { shape: "box", x: -0.26, z: 0.35, w: 0.48, d: 0.15, y: 0.0, h: 1.0, color: "#e2e8f0", finish: "white", edges: "faint" },
      { shape: "box", x: -0.26, z: -0.35, w: 0.48, d: 0.15, y: 0.0, h: 1.0, color: "#e2e8f0", finish: "white", edges: "faint" },
      // Top header structural cassette track
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.70, y: 0.96, h: 0.04, color: "#334155", edges: true, fix: "h" },
      // Right strike jamb
      { shape: "box", x: 0.47, z: 0.0, w: 0.05, d: 0.85, y: 0.0, h: 1.0, color: "#3d301b", finish: "wood", edges: true, fix: "w" },
      // Sliding Door Leaf (partially open/extending into room)
      { shape: "box", x: 0.18, z: 0.0, w: 0.52, d: 0.35, y: 0.02, h: 0.93, color: "#382c22", finish: "wood", edges: true },
      // Recessed edge ring pull
      { shape: "cyl", x: 0.42, z: 0.0, w: 0.04, d: 0.04, y: 0.45, h: 0.06, axis: "z", color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: -0.26, z: 0.0, w: 0.48, d: 0.85 },
      { shape: "rect", x: 0.18, z: 0.0, w: 0.52, d: 0.35, fill: true }
    ]
  },

  {
    num: 28,
    id: "folding_panoramic_glass_wall",
    packId: "domolux.folding_panoramic_glass_wall",
    name: {
      en: "Domolux Folding Panoramic Glass Wall",
      de: "Domolux Faltbare Panorama-Glaswand",
      ar: "جدار زجاجي بانورامي قابل للطي دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "4-leaf bifolding panoramic patio glass wall system with slim bronze insulated aluminum thermal-break frames, heavy-duty stainless roller trolleys, and flush weather threshold.",
    size: [3.80, 0.28, 3.00],
    mount: "floor",
    surface: false,
    group: "door",
    room: ["living", "dining", "terrace"],
    tags: ["folding", "bifold", "glass", "panoramic", "patio", "terrace", "domolux"],
    parts: [
      // Outer structural frame
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.90, y: 0.0, h: 0.025, color: "#1e2229", fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.90, y: 0.975, h: 0.025, color: "#1e2229", fix: "h" },
      { shape: "box", x: -0.49, z: 0.0, w: 0.02, d: 0.90, y: 0.0, h: 1.0, color: "#1e2229", fix: "w" },
      { shape: "box", x: 0.49, z: 0.0, w: 0.02, d: 0.90, y: 0.0, h: 1.0, color: "#1e2229", fix: "w" },
      // 4 Folding Door Panels in folded concertina rhythm
      { shape: "box", x: -0.36, z: -0.05, w: 0.23, d: 0.30, y: 0.03, h: 0.94, color: "#3d301b", edges: "glow" },
      { shape: "box", x: -0.36, z: -0.05, w: 0.19, d: 0.08, y: 0.05, h: 0.90, color: "glass", edges: true },

      { shape: "box", x: -0.12, z: 0.08, w: 0.23, d: 0.30, y: 0.03, h: 0.94, color: "#3d301b", edges: "glow" },
      { shape: "box", x: -0.12, z: 0.08, w: 0.19, d: 0.08, y: 0.05, h: 0.90, color: "glass", edges: true },

      { shape: "box", x: 0.12, z: 0.08, w: 0.23, d: 0.30, y: 0.03, h: 0.94, color: "#3d301b", edges: "glow" },
      { shape: "box", x: 0.12, z: 0.08, w: 0.19, d: 0.08, y: 0.05, h: 0.90, color: "glass", edges: true },

      { shape: "box", x: 0.36, z: -0.05, w: 0.23, d: 0.30, y: 0.03, h: 0.94, color: "#3d301b", edges: "glow" },
      { shape: "box", x: 0.36, z: -0.05, w: 0.19, d: 0.08, y: 0.05, h: 0.90, color: "glass", edges: true },

      // Bifold stainless hinge pillars
      { shape: "cyl", x: -0.24, z: 0.02, w: 0.03, d: 0.03, y: 0.03, h: 0.94, color: "metal", fix: "wd" },
      { shape: "cyl", x: 0.0, z: 0.12, w: 0.03, d: 0.03, y: 0.03, h: 0.94, color: "metal", fix: "wd" },
      { shape: "cyl", x: 0.24, z: 0.02, w: 0.03, d: 0.03, y: 0.03, h: 0.94, color: "metal", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.9 },
      { shape: "line", x1: -0.48, z1: -0.1, x2: -0.24, z2: 0.1 },
      { shape: "line", x1: -0.24, z1: 0.1, x2: 0.0, z2: -0.1 },
      { shape: "line", x1: 0.0, z1: -0.1, x2: 0.24, z2: 0.1 },
      { shape: "line", x1: 0.24, z1: 0.1, x2: 0.48, z2: -0.1 }
    ]
  },

  {
    num: 29,
    id: "steel_framed_french_doors",
    packId: "domolux.steel_framed_french_doors",
    name: {
      en: "Domolux Steel-Framed French Doors",
      de: "Domolux Stahlprofil-Flügeltüren",
      ar: "أبواب فرنسية بإطار فولاذي دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "Industrial-bourgeois double French doors with ultra-slender hot-rolled black steel profiles, true divided-light multi-pane glazing, and blackened brass cremone bolt locking system.",
    size: [2.00, 0.16, 2.70],
    mount: "floor",
    surface: false,
    group: "door",
    room: ["living", "dining", "office", "patio"],
    tags: ["french", "steel", "doors", "industrial", "divided-light", "domolux"],
    parts: [
      // Outer frame
      { shape: "box", x: -0.48, z: 0.0, w: 0.04, d: 0.85, y: 0.0, h: 1.0, color: "#141517", edges: true, fix: "w" },
      { shape: "box", x: 0.48, z: 0.0, w: 0.04, d: 0.85, y: 0.0, h: 1.0, color: "#141517", edges: true, fix: "w" },
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.85, y: 0.97, h: 0.03, color: "#141517", edges: true, fix: "h" },
      // Left leaf frame & glass
      { shape: "box", x: -0.24, z: 0.0, w: 0.45, d: 0.40, y: 0.02, h: 0.94, color: "#1a1b1f", edges: true },
      { shape: "box", x: -0.24, z: 0.0, w: 0.41, d: 0.10, y: 0.04, h: 0.90, color: "glass", edges: true },
      // Right leaf frame & glass
      { shape: "box", x: 0.24, z: 0.0, w: 0.45, d: 0.40, y: 0.02, h: 0.94, color: "#1a1b1f", edges: true },
      { shape: "box", x: 0.24, z: 0.0, w: 0.41, d: 0.10, y: 0.04, h: 0.90, color: "glass", edges: true },
      // Horizontal true-divided glazing steel muntins
      { shape: "box", x: -0.24, z: 0.0, w: 0.41, d: 0.15, y: 0.26, h: 0.015, color: "#141517", fix: "h" },
      { shape: "box", x: -0.24, z: 0.0, w: 0.41, d: 0.15, y: 0.48, h: 0.015, color: "#141517", fix: "h" },
      { shape: "box", x: -0.24, z: 0.0, w: 0.41, d: 0.15, y: 0.70, h: 0.015, color: "#141517", fix: "h" },
      { shape: "box", x: 0.24, z: 0.0, w: 0.41, d: 0.15, y: 0.26, h: 0.015, color: "#141517", fix: "h" },
      { shape: "box", x: 0.24, z: 0.0, w: 0.41, d: 0.15, y: 0.48, h: 0.015, color: "#141517", fix: "h" },
      { shape: "box", x: 0.24, z: 0.0, w: 0.41, d: 0.15, y: 0.70, h: 0.015, color: "#141517", fix: "h" },
      // Cremone bolt vertical rod and handle
      { shape: "cyl", x: -0.02, z: 0.10, w: 0.02, d: 0.02, y: 0.05, h: 0.88, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: -0.02, z: 0.14, w: 0.04, d: 0.06, y: 0.46, h: 0.06, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.85 },
      { shape: "line", x1: -0.24, z1: 0.0, x2: 0.24, z2: 0.0 }
    ]
  },

  {
    num: 30,
    id: "acoustic_double_door",
    packId: "domolux.acoustic_double_door",
    name: {
      en: "Domolux Acoustic Double Entrance Door",
      de: "Domolux Akustische Schallschutz-Doppeltür",
      ar: "باب صوتي مزدوج عازل للضوضاء دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "High-performance studio-grade sound isolating acoustic double door system (55dB rated) featuring dense composite core, drop-down automatic acoustic perimeter seals, and sound lock air cavity.",
    size: [1.30, 0.42, 2.50],
    mount: "floor",
    surface: false,
    group: "door",
    room: ["cinema", "office", "bedroom"],
    tags: ["acoustic", "soundproof", "door", "cinema", "studio", "domolux"],
    parts: [
      // Deep sound lock structural jamb frame
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.0, h: 1.0, color: "#22252c", edges: true },
      { shape: "box", x: 0.0, z: 0.0, w: 0.86, d: 0.90, y: 0.03, h: 0.94, color: "#141518", edges: "faint" },
      // Outer acoustic leaf
      { shape: "box", x: 0.0, z: -0.32, w: 0.84, d: 0.22, y: 0.04, h: 0.92, color: "#362b22", finish: "wood", edges: true },
      // Inner acoustic leaf with quilted acoustic absorption panel
      { shape: "box", x: 0.0, z: 0.32, w: 0.84, d: 0.22, y: 0.04, h: 0.92, color: "#362b22", finish: "wood", edges: true },
      { shape: "box", x: 0.0, z: 0.42, w: 0.72, d: 0.05, y: 0.10, h: 0.80, color: "fabric", finish: "fabric", edges: true },
      // Heavy architectural compression handles
      { shape: "box", x: 0.32, z: 0.46, w: 0.04, d: 0.08, y: 0.45, h: 0.12, color: "metal", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.32, z: -0.46, w: 0.04, d: 0.08, y: 0.45, h: 0.12, color: "metal", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "line", x1: -0.42, z1: -0.32, x2: 0.42, z2: -0.32 },
      { shape: "line", x1: -0.42, z1: 0.32, x2: 0.42, z2: 0.32 }
    ]
  },

  // -------------------------------------------------------------------------
  // BATCH 07: Products 031–035 (Security Doors, Windows & Glazing)
  // -------------------------------------------------------------------------
  {
    num: 31,
    id: "armored_smart_entrance_door",
    packId: "domolux.armored_smart_entrance_door",
    name: {
      en: "Domolux Armored Smart Entrance Door",
      de: "Domolux Gepanzerte Smart-Eingangstür",
      ar: "باب مدخل ذكي مصفح دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "Ballistic and forced-entry armored residential entrance door featuring titanium reinforcement, biometrics recognition reader, motor deadbolts, and natural travertine stone outer paneling.",
    size: [1.60, 0.32, 2.80],
    mount: "floor",
    surface: false,
    group: "door",
    room: ["hall"],
    tags: ["armored", "security", "smart", "biometric", "door", "entrance", "domolux"],
    parts: [
      // Armored steel frame casing
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.0, h: 1.0, color: "#16171b", edges: true },
      // Heavy armored door slab
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.60, y: 0.02, h: 0.96, color: "#22252c", edges: true },
      // Travertine stone facing exterior panel
      { shape: "box", x: 0.0, z: 0.28, w: 0.84, d: 0.12, y: 0.04, h: 0.92, color: "#d2cbbf", finish: "body", edges: true },
      // Vertical bronze shadow accent with integrated biometrics panel
      { shape: "box", x: 0.28, z: 0.34, w: 0.08, d: 0.04, y: 0.04, h: 0.92, color: "#9e8354", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.28, z: 0.37, w: 0.04, d: 0.02, y: 0.50, h: 0.08, color: "#00e676", glow: true, edges: "glow", fix: "wdh" },
      // Motorized deadbolt pin representation
      { shape: "cyl", x: 0.44, z: 0.0, w: 0.04, d: 0.04, y: 0.30, h: 0.06, axis: "x", color: "metal", fix: "wdh" },
      { shape: "cyl", x: 0.44, z: 0.0, w: 0.04, d: 0.04, y: 0.70, h: 0.06, axis: "x", color: "metal", fix: "wdh" },
      // Interior dark walnut cladding
      { shape: "box", x: 0.0, z: -0.28, w: 0.84, d: 0.10, y: 0.04, h: 0.92, color: "#2d231b", finish: "wood", edges: true }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.88, d: 0.6, fill: true },
      { shape: "circle", x: 0.28, z: 0.34, r: 0.06 }
    ]
  },

  {
    num: 32,
    id: "floor_to_ceiling_picture_window",
    packId: "domolux.floor_to_ceiling_picture_window",
    name: {
      en: "Domolux Floor-to-Ceiling Picture Window",
      de: "Domolux Raumhohes Panorama-Festfenster",
      ar: "نافذة بانورامية ثابتة ممتدة من الأرض إلى السقف دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "Monumental triple-glazed floor-to-ceiling fixed picture window with concealed sub-floor structural glazing channel, low-iron solar control glass, and satin bronze internal sill trim.",
    size: [2.80, 0.22, 3.20],
    mount: "floor",
    surface: false,
    group: "window",
    room: ["living", "dining", "bedroom", "hall"],
    tags: ["window", "fixed", "picture", "panoramic", "glazing", "domolux"],
    parts: [
      // Perimeter concealed frame
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.90, y: 0.0, h: 0.03, color: "#1e2229", fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.90, y: 0.97, h: 0.03, color: "#1e2229", fix: "h" },
      { shape: "box", x: -0.485, z: 0.0, w: 0.03, d: 0.90, y: 0.0, h: 1.0, color: "#1e2229", fix: "w" },
      { shape: "box", x: 0.485, z: 0.0, w: 0.03, d: 0.90, y: 0.0, h: 1.0, color: "#1e2229", fix: "w" },
      // Large format structural glass pane
      { shape: "box", x: 0.0, z: 0.0, w: 0.95, d: 0.12, y: 0.03, h: 0.94, color: "glass", edges: true },
      // Satin bronze architectural interior sill
      { shape: "box", x: 0.0, z: 0.25, w: 1.0, d: 0.40, y: 0.0, h: 0.04, color: "#7a623a", edges: "glow", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.9 },
      { shape: "line", x1: -0.48, z1: 0.0, x2: 0.48, z2: 0.0 }
    ]
  },

  {
    num: 33,
    id: "panoramic_corner_glazing",
    packId: "domolux.panoramic_corner_glazing",
    name: {
      en: "Domolux Panoramic Corner Glazing System",
      de: "Domolux Panorama-Glaserker-Eckverglasung",
      ar: "نظام زجاج ركني بانورامي دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "Architectural frameless glass-to-glass structural corner window system offering completely unobstructed 90-degree corner vistas with stepped silicone seal.",
    size: [2.20, 2.20, 3.00],
    mount: "floor",
    surface: false,
    group: "window",
    room: ["living", "bedroom", "dining"],
    tags: ["corner", "glazing", "window", "panoramic", "frameless", "domolux"],
    parts: [
      // Top and bottom L-shaped structural framing profiles
      { shape: "box", x: 0.0, z: -0.45, w: 1.0, d: 0.10, y: 0.0, h: 0.04, color: "#22252c", fix: "h" },
      { shape: "box", x: -0.45, z: 0.0, w: 0.10, d: 1.0, y: 0.0, h: 0.04, color: "#22252c", fix: "h" },
      { shape: "box", x: 0.0, z: -0.45, w: 1.0, d: 0.10, y: 0.96, h: 0.04, color: "#22252c", fix: "h" },
      { shape: "box", x: -0.45, z: 0.0, w: 0.10, d: 1.0, y: 0.96, h: 0.04, color: "#22252c", fix: "h" },
      // Plane A Glass (Rear X-axis pane)
      { shape: "box", x: 0.02, z: -0.45, w: 0.94, d: 0.08, y: 0.04, h: 0.92, color: "glass", edges: true },
      // Plane B Glass (Left Z-axis pane)
      { shape: "box", x: -0.45, z: 0.02, w: 0.08, d: 0.94, y: 0.04, h: 0.92, color: "glass", edges: true },
      // Frameless glass-to-glass corner junction joint
      { shape: "box", x: -0.45, z: -0.45, w: 0.04, d: 0.04, y: 0.04, h: 0.92, color: "#00e5ff", glow: true, edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "line", x1: -0.45, z1: 0.5, x2: -0.45, z2: -0.45 },
      { shape: "line", x1: -0.45, z1: -0.45, x2: 0.5, z2: -0.45 }
    ]
  },

  {
    num: 34,
    id: "motorized_louver_window",
    packId: "domolux.motorized_louver_window",
    name: {
      en: "Domolux Motorized Architectural Louver Window",
      de: "Domolux Motorisiertes Lamellenfenster",
      ar: "نافذة شرائح ليد معمارية بمحرك دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "High-spec natural ventilation window with motorized glass louvers, insulated bronze frame, concealed electric actuator, and weather-resistant edge seals.",
    size: [1.20, 0.22, 2.20],
    mount: "wall",
    wall_y: 0.40,
    surface: false,
    group: "window",
    room: ["bath", "living", "kitchen"],
    tags: ["louver", "ventilation", "window", "motorized", "glass", "domolux"],
    parts: [
      // Frame
      { shape: "box", x: -0.46, z: 0.0, w: 0.08, d: 0.85, y: 0.0, h: 1.0, color: "#3d301b", edges: "glow", fix: "w" },
      { shape: "box", x: 0.46, z: 0.0, w: 0.08, d: 0.85, y: 0.0, h: 1.0, color: "#3d301b", edges: "glow", fix: "w" },
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.85, y: 0.0, h: 0.05, color: "#3d301b", edges: "glow", fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.85, y: 0.95, h: 0.05, color: "#3d301b", edges: "glow", fix: "h" },
      // 5 Angled Motorized Glass Louver Blades
      { shape: "loft", x: 0.0, z: 0.0, w: 0.84, d: 0.50, y: 0.10, h: 0.14, tx: 0.0, tz: 0.15, tw: 0.84, td: 0.50, color: "glass", edges: true },
      { shape: "loft", x: 0.0, z: 0.0, w: 0.84, d: 0.50, y: 0.26, h: 0.14, tx: 0.0, tz: 0.15, tw: 0.84, td: 0.50, color: "glass", edges: true },
      { shape: "loft", x: 0.0, z: 0.0, w: 0.84, d: 0.50, y: 0.42, h: 0.14, tx: 0.0, tz: 0.15, tw: 0.84, td: 0.50, color: "glass", edges: true },
      { shape: "loft", x: 0.0, z: 0.0, w: 0.84, d: 0.50, y: 0.58, h: 0.14, tx: 0.0, tz: 0.15, tw: 0.84, td: 0.50, color: "glass", edges: true },
      { shape: "loft", x: 0.0, z: 0.0, w: 0.84, d: 0.50, y: 0.74, h: 0.14, tx: 0.0, tz: 0.15, tw: 0.84, td: 0.50, color: "glass", edges: true },
      // Actuator transmission bar
      { shape: "cyl", x: -0.40, z: 0.10, w: 0.02, d: 0.02, y: 0.10, h: 0.80, color: "metal", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.85 },
      { shape: "line", x1: -0.4, z1: 0.2, x2: 0.4, z2: 0.2 },
      { shape: "line", x1: -0.4, z1: 0.0, x2: 0.4, z2: 0.0 },
      { shape: "line", x1: -0.4, z1: -0.2, x2: 0.4, z2: -0.2 }
    ]
  },

  {
    num: 35,
    id: "arched_feature_window",
    packId: "domolux.arched_feature_window",
    name: {
      en: "Domolux Arched Architectural Feature Window",
      de: "Domolux Rundbogen-Architekturfenster",
      ar: "نافذة معمارية قوسية مميزة دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "Palatial semicircular arched window assembly featuring custom cast bronze frames, sunburst radial glazing bars, and low-E insulated glass.",
    size: [1.60, 0.22, 2.60],
    mount: "wall",
    wall_y: 0.40,
    surface: false,
    group: "window",
    room: ["hall", "living", "dining", "bath"],
    tags: ["window", "arched", "classical", "radial", "bronze", "domolux"],
    parts: [
      // Lower rectangular frame jambs
      { shape: "box", x: -0.46, z: 0.0, w: 0.08, d: 0.85, y: 0.0, h: 0.65, color: "#3d301b", edges: "glow", fix: "w" },
      { shape: "box", x: 0.46, z: 0.0, w: 0.08, d: 0.85, y: 0.0, h: 0.65, color: "#3d301b", edges: "glow", fix: "w" },
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.85, y: 0.0, h: 0.05, color: "#3d301b", edges: "glow", fix: "h" },
      // Arch frame top segments (Lofts)
      { shape: "loft", x: -0.32, z: 0.0, w: 0.20, d: 0.85, y: 0.65, h: 0.28, tx: -0.15, tz: 0.0, tw: 0.16, td: 0.85, color: "#3d301b", edges: "glow" },
      { shape: "loft", x: 0.32, z: 0.0, w: 0.20, d: 0.85, y: 0.65, h: 0.28, tx: 0.15, tz: 0.0, tw: 0.16, td: 0.85, color: "#3d301b", edges: "glow" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.30, d: 0.85, y: 0.93, h: 0.07, color: "#3d301b", edges: "glow", fix: "h" },
      // Glazing pane (rect + arch)
      { shape: "box", x: 0.0, z: 0.0, w: 0.84, d: 0.10, y: 0.05, h: 0.60, color: "glass", edges: true },
      { shape: "loft", x: 0.0, z: 0.0, w: 0.84, d: 0.10, y: 0.65, h: 0.28, tx: 0.0, tz: 0.0, tw: 0.45, td: 0.10, color: "glass", edges: true },
      // Sunburst radial bronze muntin bars
      { shape: "box", x: 0.0, z: 0.0, w: 0.02, d: 0.12, y: 0.05, h: 0.88, color: "#c5a059", fix: "w" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.84, d: 0.12, y: 0.65, h: 0.02, color: "#c5a059", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.85 },
      { shape: "line", x1: 0.0, z1: -0.4, x2: 0.0, z2: 0.4 }
    ]
  },

  // -------------------------------------------------------------------------
  // BATCH 08: Products 036–040 (Bay Windows, Facade Shading & Canopies)
  // -------------------------------------------------------------------------
  {
    num: 36,
    id: "bay_window_assembly",
    packId: "domolux.bay_window_assembly",
    name: {
      en: "Domolux Architectural Bay Window Assembly",
      de: "Domolux Architektonischer Erkerfenster-Vorbausatz",
      ar: "مجموعة نافذة خليجية معمارية بارزة دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "Projecting three-sided cantilevered architectural bay window assembly with integrated upholstered daybed bench, dark bronze mullions, and panoramic insulated glass.",
    size: [2.60, 1.20, 2.60],
    mount: "floor",
    surface: true,
    group: "window",
    room: ["living", "bedroom", "library"],
    tags: ["bay", "window", "bench", "daybed", "cantilever", "domolux"],
    parts: [
      // Base structural support plinth & built-in daybed bench
      { shape: "box", x: 0.0, z: 0.0, w: 0.95, d: 0.90, y: 0.0, h: 0.20, color: "#382c22", finish: "wood", edges: true },
      { shape: "box", x: 0.0, z: 0.05, w: 0.92, d: 0.85, y: 0.20, h: 0.08, color: "cushion", finish: "fabric", edges: true },
      // Center front glass pane & bronze mullions
      { shape: "box", x: 0.0, z: 0.45, w: 0.60, d: 0.08, y: 0.28, h: 0.68, color: "glass", edges: true },
      { shape: "box", x: -0.30, z: 0.45, w: 0.05, d: 0.15, y: 0.28, h: 0.68, color: "#2d241c", edges: true },
      { shape: "box", x: 0.30, z: 0.45, w: 0.05, d: 0.15, y: 0.28, h: 0.68, color: "#2d241c", edges: true },
      // Left angled wing glass pane
      { shape: "loft", x: -0.42, z: 0.15, w: 0.24, d: 0.50, y: 0.28, h: 0.68, tx: -0.42, tz: 0.15, tw: 0.24, td: 0.50, color: "glass", edges: true },
      // Right angled wing glass pane
      { shape: "loft", x: 0.42, z: 0.15, w: 0.24, d: 0.50, y: 0.28, h: 0.68, tx: 0.42, tz: 0.15, tw: 0.24, td: 0.50, color: "glass", edges: true },
      // Top soffit / roof crown
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.95, y: 0.96, h: 0.04, color: "#22252c", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.95, d: 0.9 },
      { shape: "line", x1: -0.48, z1: -0.4, x2: -0.3, z2: 0.45 },
      { shape: "line", x1: -0.3, z1: 0.45, x2: 0.3, z2: 0.45 },
      { shape: "line", x1: 0.3, z1: 0.45, x2: 0.48, z2: -0.4 }
    ]
  },

  {
    num: 37,
    id: "clerestory_glazing_band",
    packId: "domolux.clerestory_glazing_band",
    name: {
      en: "Domolux Clerestory Ribbon Glazing Band",
      de: "Domolux Oberlicht-Fensterband",
      ar: "شريط نوافذ إضاءة علوي معماري دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "High-level horizontal ribbon clerestory window band designed for discreet natural lighting below ceiling planes with acoustic thermal-break frame.",
    size: [3.40, 0.18, 0.60],
    mount: "wall",
    wall_y: 2.20,
    surface: false,
    group: "window",
    room: ["living", "hall", "bath", "kitchen"],
    tags: ["clerestory", "ribbon", "window", "high-level", "daylight", "domolux"],
    parts: [
      // Frame perimeter
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.85, y: 0.0, h: 0.08, color: "#22252c", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.85, y: 0.92, h: 0.08, color: "#22252c", edges: true, fix: "h" },
      { shape: "box", x: -0.49, z: 0.0, w: 0.02, d: 0.85, y: 0.0, h: 1.0, color: "#22252c", edges: true, fix: "w" },
      { shape: "box", x: 0.49, z: 0.0, w: 0.02, d: 0.85, y: 0.0, h: 1.0, color: "#22252c", edges: true, fix: "w" },
      // Intermediate vertical mullions (4 bays)
      { shape: "box", x: -0.25, z: 0.0, w: 0.025, d: 0.70, y: 0.08, h: 0.84, color: "#22252c", edges: true, fix: "w" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.025, d: 0.70, y: 0.08, h: 0.84, color: "#22252c", edges: true, fix: "w" },
      { shape: "box", x: 0.25, z: 0.0, w: 0.025, d: 0.70, y: 0.08, h: 0.84, color: "#22252c", edges: true, fix: "w" },
      // 4 insulated glass panes
      { shape: "box", x: -0.37, z: 0.0, w: 0.22, d: 0.10, y: 0.10, h: 0.80, color: "glass", edges: true },
      { shape: "box", x: -0.125, z: 0.0, w: 0.22, d: 0.10, y: 0.10, h: 0.80, color: "glass", edges: true },
      { shape: "box", x: 0.125, z: 0.0, w: 0.22, d: 0.10, y: 0.10, h: 0.80, color: "glass", edges: true },
      { shape: "box", x: 0.37, z: 0.0, w: 0.22, d: 0.10, y: 0.10, h: 0.80, color: "glass", edges: true }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.85 },
      { shape: "line", x1: -0.48, z1: 0.0, x2: 0.48, z2: 0.0 }
    ]
  },

  {
    num: 38,
    id: "exterior_brise_soleil",
    packId: "domolux.exterior_brise_soleil",
    name: {
      en: "Domolux Exterior Architectural Brise-Soleil Screen",
      de: "Domolux Architektonischer Sonnenschutz-Lamellenraster",
      ar: "كاسر شمس معمارية خارجية دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "Façade architectural solar shading screen composed of motorized aerodynamic extruded aluminum blades finished in champagne bronze with smart solar tracking integration.",
    size: [2.60, 0.45, 3.20],
    mount: "wall",
    wall_y: 0.0,
    surface: false,
    group: "outdoor",
    room: ["terrace", "living"],
    tags: ["shading", "brise-soleil", "louvers", "facade", "solar", "domolux"],
    parts: [
      // Twin vertical structural bronze mullion struts
      { shape: "box", x: -0.45, z: 0.0, w: 0.08, d: 0.85, y: 0.0, h: 1.0, color: "#473824", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.45, z: 0.0, w: 0.08, d: 0.85, y: 0.0, h: 1.0, color: "#473824", edges: "glow", fix: "wd" },
      // 8 horizontal aerodynamic louver fins
      { shape: "loft", x: 0.0, z: 0.08, w: 0.90, d: 0.70, y: 0.08, h: 0.03, tx: 0.0, tz: 0.18, tw: 0.90, td: 0.50, color: "#c5a059", edges: "glow", fix: "h" },
      { shape: "loft", x: 0.0, z: 0.08, w: 0.90, d: 0.70, y: 0.20, h: 0.03, tx: 0.0, tz: 0.18, tw: 0.90, td: 0.50, color: "#c5a059", edges: "glow", fix: "h" },
      { shape: "loft", x: 0.0, z: 0.08, w: 0.90, d: 0.70, y: 0.32, h: 0.03, tx: 0.0, tz: 0.18, tw: 0.90, td: 0.50, color: "#c5a059", edges: "glow", fix: "h" },
      { shape: "loft", x: 0.0, z: 0.08, w: 0.90, d: 0.70, y: 0.44, h: 0.03, tx: 0.0, tz: 0.18, tw: 0.90, td: 0.50, color: "#c5a059", edges: "glow", fix: "h" },
      { shape: "loft", x: 0.0, z: 0.08, w: 0.90, d: 0.70, y: 0.56, h: 0.03, tx: 0.0, tz: 0.18, tw: 0.90, td: 0.50, color: "#c5a059", edges: "glow", fix: "h" },
      { shape: "loft", x: 0.0, z: 0.08, w: 0.90, d: 0.70, y: 0.68, h: 0.03, tx: 0.0, tz: 0.18, tw: 0.90, td: 0.50, color: "#c5a059", edges: "glow", fix: "h" },
      { shape: "loft", x: 0.0, z: 0.08, w: 0.90, d: 0.70, y: 0.80, h: 0.03, tx: 0.0, tz: 0.18, tw: 0.90, td: 0.50, color: "#c5a059", edges: "glow", fix: "h" },
      { shape: "loft", x: 0.0, z: 0.08, w: 0.90, d: 0.70, y: 0.92, h: 0.03, tx: 0.0, tz: 0.18, tw: 0.90, td: 0.50, color: "#c5a059", edges: "glow", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.85 },
      { shape: "line", x1: -0.4, z1: 0.1, x2: 0.4, z2: 0.1 }
    ]
  },

  {
    num: 39,
    id: "exterior_roller_shutter",
    packId: "domolux.exterior_roller_shutter",
    name: {
      en: "Domolux Motorized Exterior Roller Shutter",
      de: "Domolux Motorisierter Sicherheits-Rollladen",
      ar: "شيش حصيرة خارجي آلي دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "Insulated extruded aluminum security roller shutter with flush-mounted exterior box, polyurethane foam core slats, anti-lift locks, and silent electric tubular motor.",
    size: [2.00, 0.28, 2.60],
    mount: "wall",
    wall_y: 0.0,
    surface: false,
    group: "outdoor",
    room: ["living", "bedroom"],
    tags: ["shutter", "roller", "security", "storm", "motorized", "domolux"],
    parts: [
      // Upper roller shutter cassette box
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.90, y: 0.85, h: 0.15, color: "#1f2228", edges: true, fix: "h" },
      // Side guide rails
      { shape: "box", x: -0.47, z: 0.0, w: 0.06, d: 0.60, y: 0.0, h: 0.85, color: "#1f2228", edges: true, fix: "w" },
      { shape: "box", x: 0.47, z: 0.0, w: 0.06, d: 0.60, y: 0.0, h: 0.85, color: "#1f2228", edges: true, fix: "w" },
      // Slat curtain (extruded anthracite slats)
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.25, y: 0.02, h: 0.83, color: "#333842", edges: "faint" },
      // Bottom reinforced terminal rail with rubber seal
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.35, y: 0.0, h: 0.04, color: "#111215", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.9 },
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.4, fill: true }
    ]
  },

  {
    num: 40,
    id: "structural_glass_roof_canopy",
    packId: "domolux.structural_glass_roof_canopy",
    name: {
      en: "Domolux Structural Glass Roof Canopy",
      de: "Domolux Ganzglas-Vordach mit Edelstahl-Zugstangen",
      ar: "مظلة سقفية زجاجية معمارية دومولوكس"
    },
    collection: "Doors, Windows, Entrances and Exterior Envelope",
    collectionSlug: "02_Doors_Windows_Entrances",
    category: "Doors & Windows",
    description: "Cantilevered structural entrance canopy constructed with laminated tempered glass, marine-grade 316 stainless steel tension tie rods, and integral drainage drip edge.",
    size: [2.60, 1.60, 0.95],
    mount: "wall",
    wall_y: 2.40,
    surface: false,
    group: "outdoor",
    room: ["hall", "terrace"],
    tags: ["canopy", "glass", "entrance", "cantilever", "stainless", "domolux"],
    parts: [
      // Wall mounting stainless anchor plate
      { shape: "box", x: 0.0, z: -0.45, w: 0.98, d: 0.08, y: 0.10, h: 0.08, color: "metal", edges: true, fix: "wdh" },
      // Laminated safety glass canopy slope pane (Loft for 5-degree fall)
      { shape: "loft", x: 0.0, z: 0.05, w: 0.96, d: 0.90, y: 0.08, h: 0.04, tx: 0.0, tz: 0.05, tw: 0.96, td: 0.90, color: "glass", edges: true },
      // Stainless tension rods (Left and right)
      { shape: "cyl", x: -0.40, z: -0.15, w: 0.03, d: 0.03, y: 0.12, h: 0.85, rot: 35, color: "metal", fix: "wd" },
      { shape: "cyl", x: 0.40, z: -0.15, w: 0.03, d: 0.03, y: 0.12, h: 0.85, rot: -35, color: "metal", fix: "wd" },
      // Upper wall tie rod mounting bosses
      { shape: "cyl", x: -0.40, z: -0.45, w: 0.06, d: 0.06, y: 0.90, h: 0.08, axis: "z", color: "metal", fix: "wdh" },
      { shape: "cyl", x: 0.40, z: -0.45, w: 0.06, d: 0.06, y: 0.90, h: 0.08, axis: "z", color: "metal", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.05, w: 0.96, d: 0.9 },
      { shape: "line", x1: -0.4, z1: -0.45, x2: -0.4, z2: 0.45 },
      { shape: "line", x1: 0.4, z1: -0.45, x2: 0.4, z2: 0.45 }
    ]
  }
];
