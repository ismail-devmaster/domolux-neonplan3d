// COLLECTION I — PRIVATE ESTATE, OUTDOOR ARCHITECTURE AND LANDSCAPE (Products 161–180)
// Architectural Landscape, Pavilions, Pools & Outdoor Living

export const COLLECTION_I_PRODUCTS = [
  {
    num: 161,
    id: "bioclimatic_pergola",
    packId: "domolux.bioclimatic_pergola",
    name: {
      en: "Domolux Bioclimatic Motorized Architectural Pergola",
      de: "Domolux Bioklimatische Lamellenpergola",
      ar: "مظلة بيرغولا معمارية بيومناخية بشرائح متحركة دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Architectural motorized aluminum patio pergola with 140-degree pivoting waterproof louvers, concealed internal post downspout drainage, and perimeter dimmable LED glow.",
    size: [4.00, 3.00, 2.70],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["pergola", "bioclimatic", "outdoor", "patio", "shade", "domolux"],
    parts: [
      // 4 heavy extruded aluminum posts with hidden foot anchors
      { shape: "box", x: -0.46, z: -0.45, w: 0.08, d: 0.08, y: 0.0, h: 0.94, color: "#22252c", finish: "dark", edges: true, fix: "wd" },
      { shape: "box", x: 0.46, z: -0.45, w: 0.08, d: 0.08, y: 0.0, h: 0.94, color: "#22252c", finish: "dark", edges: true, fix: "wd" },
      { shape: "box", x: -0.46, z: 0.45, w: 0.08, d: 0.08, y: 0.0, h: 0.94, color: "#22252c", finish: "dark", edges: true, fix: "wd" },
      { shape: "box", x: 0.46, z: 0.45, w: 0.08, d: 0.08, y: 0.0, h: 0.94, color: "#22252c", finish: "dark", edges: true, fix: "wd" },
      // Perimeter gutter support beam ring
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.92, h: 0.08, color: "#1a1c22", edges: true, fix: "h" },
      // Motorized rotating louver array (Champagne bronze slats)
      { shape: "box", x: 0.0, z: -0.25, w: 0.88, d: 0.12, y: 0.94, h: 0.04, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.12, y: 0.94, h: 0.04, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.25, w: 0.88, d: 0.12, y: 0.94, h: 0.04, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "line", x1: -0.44, z1: -0.25, x2: 0.44, z2: -0.25 },
      { shape: "line", x1: -0.44, z1: 0.0, x2: 0.44, z2: 0.0 },
      { shape: "line", x1: -0.44, z1: 0.25, x2: 0.44, z2: 0.25 }
    ]
  },

  {
    num: 162,
    id: "architectural_garden_pavilion",
    packId: "domolux.architectural_garden_pavilion",
    name: {
      en: "Domolux Modernist Cantilevered Garden Pavilion",
      de: "Domolux Moderner Gartenpavillon mit Kragdach",
      ar: "جناح الحديقة المعماري الحديث بسقف ناتئ دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Standalone architectural garden pavilion with cantilevered charred-timber canopy, honed Roman travertine floor slab, bronze glass rear windbreak, and recessed ceiling spots.",
    size: [4.50, 3.50, 2.90],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["pavilion", "garden", "architecture", "patio", "outdoor", "domolux"],
    parts: [
      // Honed Roman travertine elevated terrace slab
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.0, h: 0.08, color: "#d8c7b5", finish: "white", edges: true, fix: "h" },
      // Rear structural feature wall (Charred Yakisugi timber)
      { shape: "box", x: 0.0, z: -0.45, w: 0.94, d: 0.08, y: 0.08, h: 0.86, color: "#1b1816", finish: "wood", edges: true, fix: "d" },
      // Left rear structural steel column
      { shape: "box", x: -0.44, z: 0.38, w: 0.08, d: 0.08, y: 0.08, h: 0.86, color: "#22252c", finish: "dark", edges: true, fix: "wd" },
      // Dramatic cantilevered sloped canopy roof (Loft)
      { shape: "loft", x: 0.0, z: 0.02, w: 0.98, d: 0.96, y: 0.92, h: 0.08, tx: 0.0, tz: 0.06, tw: 0.98, td: 0.96, color: "#2b221d", finish: "dark", edges: true },
      // Underside warm wood soffit with recessed LED spotlights
      { shape: "box", x: 0.0, z: 0.02, w: 0.92, d: 0.90, y: 0.91, h: 0.02, color: "#8a5d3b", finish: "wood", fix: "h" },
      // Smoked bronze glass lateral privacy wind-screen
      { shape: "box", x: 0.45, z: -0.15, w: 0.02, d: 0.55, y: 0.08, h: 0.84, color: "#3a2f26", finish: "glass", fix: "w" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.98 },
      { shape: "rect", x: 0.0, z: -0.45, w: 0.94, d: 0.08 }
    ]
  },

  {
    num: 163,
    id: "private_outdoor_cabana",
    packId: "domolux.private_outdoor_cabana",
    name: {
      en: "Domolux Poolside Sanctuary Luxury Daybed Cabana",
      de: "Domolux Exklusive Outdoor-Lounge-Cabana",
      ar: "كابانا الاسترخاء الفاخرة بجانب المسبح بستائر ومقاعد سريرية دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Private poolside daybed retreat featuring solid plantation teak posts, marine-grade Sunbrella curtains, oversized waterproof daybed mattress, and slatted roof shade.",
    size: [2.20, 2.20, 2.30],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["cabana", "daybed", "poolside", "teak", "sunbrella", "outdoor", "domolux"],
    parts: [
      // 4 heavy plantation teak corner posts
      { shape: "box", x: -0.44, z: -0.44, w: 0.08, d: 0.08, y: 0.0, h: 0.96, color: "#543c2b", finish: "wood", edges: true, fix: "wd" },
      { shape: "box", x: 0.44, z: -0.44, w: 0.08, d: 0.08, y: 0.0, h: 0.96, color: "#543c2b", finish: "wood", edges: true, fix: "wd" },
      { shape: "box", x: -0.44, z: 0.44, w: 0.08, d: 0.08, y: 0.0, h: 0.96, color: "#543c2b", finish: "wood", edges: true, fix: "wd" },
      { shape: "box", x: 0.44, z: 0.44, w: 0.08, d: 0.08, y: 0.0, h: 0.96, color: "#543c2b", finish: "wood", edges: true, fix: "wd" },
      // Elevated teak daybed platform frame
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.92, y: 0.12, h: 0.12, color: "#3d2b1f", finish: "wood", edges: true },
      // Oversized luxury outdoor daybed mattress (Sand Sunbrella fabric)
      { shape: "box", x: 0.0, z: 0.0, w: 0.86, d: 0.86, y: 0.24, h: 0.22, color: "#dfd7cb", finish: "cushion", edges: true },
      // 2 large bolster pillows
      { shape: "cyl", x: 0.0, z: -0.32, w: 0.20, d: 0.20, y: 0.44, h: 0.82, axis: "x", color: "#cbbba7", finish: "cushion", fix: "wd" },
      // Slatted overhead teak sun-trellis
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.94, h: 0.06, color: "#543c2b", finish: "wood", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.96 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.86, d: 0.86 }
    ]
  },

  {
    num: 164,
    id: "living_green_facade",
    packId: "domolux.living_green_facade",
    name: {
      en: "Domolux Architectural Living Biophilic Façade System",
      de: "Domolux Architektonische Grüne Fassadenwand",
      ar: "واجهة معمارية بيئية حية مكسوة بالنباتات الطبيعية دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Modular exterior vertical living wall with integrated automated micro-drip fertigation, root-barrier sub-chassis, and diverse evergreen foliage plantings.",
    size: [2.40, 0.35, 3.00],
    mount: "wall",
    wall_y: 0.0,
    group: "outdoor",
    room: ["outdoor"],
    tags: ["green_wall", "living_facade", "biophilic", "plants", "landscape", "domolux"],
    parts: [
      // Structural stainless backing frame
      { shape: "box", x: 0.0, z: -0.40, w: 0.98, d: 0.12, y: 0.0, h: 0.98, color: "#1c1e22", edges: true, fix: "d" },
      // Lower drainage and water catchment trough
      { shape: "box", x: 0.0, z: -0.05, w: 0.98, d: 0.65, y: 0.0, h: 0.12, color: "#252830", finish: "dark", edges: true, fix: "h" },
      // Dense evergreen biophilic plant foliage mesh (Multi-tier green blocks)
      { shape: "box", x: 0.0, z: 0.08, w: 0.94, d: 0.45, y: 0.12, h: 0.84, color: "#2d6a4f", edges: true },
      // Foreground contrasting leaf textures (Fern / chartreuse highlights)
      { shape: "box", x: -0.22, z: 0.22, w: 0.42, d: 0.22, y: 0.35, h: 0.45, color: "#40916c", fix: "wd" },
      { shape: "box", x: 0.25, z: 0.22, w: 0.38, d: 0.22, y: 0.20, h: 0.55, color: "#52b788", fix: "wd" },
      // Top bronze architectural capping coping
      { shape: "box", x: 0.0, z: -0.10, w: 0.98, d: 0.68, y: 0.96, h: 0.04, color: "#c5a059", edges: "glow", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.80 },
      { shape: "line", x1: -0.48, z1: -0.40, x2: 0.48, z2: -0.40 }
    ]
  },

  {
    num: 165,
    id: "sculptural_raised_planter",
    packId: "domolux.sculptural_raised_planter",
    name: {
      en: "Domolux Monumental Monolithic Stone Garden Planter",
      de: "Domolux Monumentaler Naturstein-Pflanzkübel",
      ar: "حوض زراعة نباتات حجري ضخم ومرتفع للحدائق دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Architectural raised garden planter carved from Pietra di Cardoso stone with mitered waterfall corners, recessed root-aeration cavity, and bronze base reveal.",
    size: [1.80, 0.90, 0.75],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["planter", "stone", "landscape", "garden", "monolithic", "domolux"],
    parts: [
      // Recessed bronze base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.90, y: 0.0, h: 0.08, color: "#c5a059", edges: "glow", fix: "h" },
      // Main Cardoso stone thick-walled container body
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.08, h: 0.88, color: "#495057", finish: "dark", edges: true },
      // Open soil cavity
      { shape: "box", x: 0.0, z: 0.0, w: 0.84, d: 0.80, y: 0.16, h: 0.80, color: "#221914" },
      // Top soil bed level
      { shape: "box", x: 0.0, z: 0.0, w: 0.82, d: 0.78, y: 0.72, h: 0.04, color: "#36271c", fix: "h" },
      // Architectural specimen boxwood cloud topiary
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.74, d: 0.70, y: 0.76, h: 0.22, color: "#2d6a4f", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.84, d: 0.80 }
    ]
  },

  {
    num: 166,
    id: "linear_architectural_planter",
    packId: "domolux.linear_architectural_planter",
    name: {
      en: "Domolux Low-Profile Linear Architectural Planter Trough",
      de: "Domolux Linearer Architektonischer Pflanztrog",
      ar: "حوض زراعة خطي طويل وممتد للأسوار والتراسات دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Elongated architectural planter crafted from anthracite basalt composite with internal thermal insulation, sub-irrigation reservoir, and architectural grasses.",
    size: [2.50, 0.45, 0.55],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["planter", "trough", "linear", "landscape", "balcony", "domolux"],
    parts: [
      // Base runner feet
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.88, y: 0.0, h: 0.05, color: "#141518", fix: "h" },
      // Anthracite composite trough body
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.94, y: 0.05, h: 0.80, color: "#2b2f38", finish: "dark", edges: true },
      // Internal open soil bed
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.78, y: 0.12, h: 0.72, color: "#271d17" },
      // Architectural Karl Foerster feather reed grasses
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.60, y: 0.72, h: 0.26, color: "#52796f", edges: true }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.94 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.92, d: 0.78 }
    ]
  },

  {
    num: 167,
    id: "architectural_garden_trellis",
    packId: "domolux.architectural_garden_trellis",
    name: {
      en: "Domolux Bronze and Cable Architectural Espalier Trellis",
      de: "Domolux Architektonisches Rankgitter aus Bronze & Stahlseilen",
      ar: "تعريشة تسلق النباتات المعمارية من النحاس وكابلات الفولاذ دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Freestanding estate garden screen featuring marine-grade 316 stainless tensioned cables, dark bronze extruded frame, and architectural star jasmine climbers.",
    size: [1.60, 0.18, 2.40],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["trellis", "espalier", "garden", "climber", "bronze", "domolux"],
    parts: [
      // Heavy bronze foundation base plate
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.92, y: 0.0, h: 0.06, color: "#1a1c20", fix: "h" },
      // Left vertical post (Dark bronze)
      { shape: "box", x: -0.44, z: 0.0, w: 0.08, d: 0.35, y: 0.06, h: 0.92, color: "#c5a059", edges: "glow", fix: "wd" },
      // Right vertical post (Dark bronze)
      { shape: "box", x: 0.44, z: 0.0, w: 0.08, d: 0.35, y: 0.06, h: 0.92, color: "#c5a059", edges: "glow", fix: "wd" },
      // Top horizontal lintel beam
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.35, y: 0.94, h: 0.05, color: "#c5a059", edges: "glow", fix: "h" },
      // Wire rope grid array (Cross cables)
      { shape: "box", x: 0.0, z: 0.0, w: 0.82, d: 0.02, y: 0.15, h: 0.78, color: "metal", edges: true, fix: "d" },
      // Jasmine climbing vine foliage patches
      { shape: "box", x: -0.20, z: 0.04, w: 0.35, d: 0.15, y: 0.25, h: 0.55, color: "#2d6a4f", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.92 },
      { shape: "line", x1: -0.44, z1: 0.0, x2: 0.44, z2: 0.0 }
    ]
  },

  {
    num: 168,
    id: "monumental_garden_gate",
    packId: "domolux.monumental_garden_gate",
    name: {
      en: "Domolux Monumental Forged Bronze Walled Garden Portal",
      de: "Domolux Monumentales Schmiedebronze-Gartentor",
      ar: "بوابة الحديقة الملكية المعمارية من البرونز المصقول دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Pedestrian garden portal featuring custom-forged bronze geometric grille panels, solid stone framing piers, motorized magnetic shear lock, and concealed pivot hinge.",
    size: [1.80, 0.40, 2.50],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["garden_gate", "bronze", "portal", "estate", "entry", "domolux"],
    parts: [
      // Left stone masonry pillar
      { shape: "box", x: -0.40, z: 0.0, w: 0.18, d: 0.92, y: 0.0, h: 0.98, color: "#495057", finish: "dark", edges: true, fix: "w" },
      // Right stone masonry pillar
      { shape: "box", x: 0.40, z: 0.0, w: 0.18, d: 0.92, y: 0.0, h: 0.98, color: "#495057", finish: "dark", edges: true, fix: "w" },
      // Top stone architrave header
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.92, h: 0.08, color: "#343a40", edges: true, fix: "h" },
      // Forged bronze hinged swinging gate leaf
      { shape: "box", x: 0.0, z: 0.0, w: 0.60, d: 0.08, y: 0.04, h: 0.86, color: "#c5a059", edges: "glow", fix: "d" },
      // Long sculptural bronze pull handle
      { shape: "cyl", x: 0.22, z: 0.10, w: 0.03, d: 0.03, y: 0.35, h: 0.40, color: "#d4af37", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: -0.40, z: 0.0, w: 0.18, d: 0.92 },
      { shape: "rect", x: 0.40, z: 0.0, w: 0.18, d: 0.92 },
      { shape: "line", x1: -0.31, z1: 0.0, x2: 0.31, z2: 0.0 }
    ]
  },

  {
    num: 169,
    id: "motorized_driveway_gate",
    packId: "domolux.motorized_driveway_gate",
    name: {
      en: "Domolux Monumental Estate Motorized Dual-Leaf Driveway Gates",
      de: "Domolux Monumentales Automatisches Zufahrtstor",
      ar: "بوابة المداخل والقصور الرئيسية الآلية المزدوجة دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Twin-leaf cantilevered estate entrance gates constructed from architectural bronze vertical slats, reinforced structural steel frames, and underground hydraulic operators.",
    size: [5.50, 0.50, 2.40],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["driveway_gate", "motorized", "estate_gate", "bronze", "security", "domolux"],
    parts: [
      // Left monumental stone entrance pylon
      { shape: "box", x: -0.45, z: 0.0, w: 0.10, d: 0.94, y: 0.0, h: 0.98, color: "#2b2f38", finish: "dark", edges: true, fix: "w" },
      // Right monumental stone entrance pylon
      { shape: "box", x: 0.45, z: 0.0, w: 0.10, d: 0.94, y: 0.0, h: 0.98, color: "#2b2f38", finish: "dark", edges: true, fix: "w" },
      // Left swinging gate wing (Architectural vertical bronze louvers)
      { shape: "box", x: -0.20, z: 0.0, w: 0.38, d: 0.10, y: 0.06, h: 0.88, color: "#c5a059", edges: "glow", fix: "d" },
      // Right swinging gate wing (Architectural vertical bronze louvers)
      { shape: "box", x: 0.20, z: 0.0, w: 0.38, d: 0.10, y: 0.06, h: 0.88, color: "#c5a059", edges: "glow", fix: "d" },
      // Center magnetic locking drop-pin latch
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.04, d: 0.04, y: 0.02, h: 0.92, color: "#ffffff", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: -0.45, z: 0.0, w: 0.10, d: 0.94 },
      { shape: "rect", x: 0.45, z: 0.0, w: 0.10, d: 0.94 },
      { shape: "line", x1: -0.40, z1: 0.0, x2: 0.40, z2: 0.0 }
    ]
  },

  {
    num: 170,
    id: "pedestrian_entrance_gate",
    packId: "domolux.pedestrian_entrance_gate",
    name: {
      en: "Domolux Secure Architectural Pedestrian Estate Gate",
      de: "Domolux Architektonisches Fußgängertor mit Gegensprechpfeiler",
      ar: "بوابة المشاة المعمارية الفاخرة بعمود الاتصال الذكي دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Pedestrian entrance portal integrated into estate boundary wall, featuring fluted bronze security panel, motorized fail-secure lock, and stone pier intercom integration.",
    size: [1.50, 0.35, 2.30],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["pedestrian_gate", "security", "estate", "bronze", "entry", "domolux"],
    parts: [
      // Left stone boundary pier
      { shape: "box", x: -0.42, z: 0.0, w: 0.14, d: 0.92, y: 0.0, h: 0.98, color: "#343a40", finish: "dark", edges: true, fix: "w" },
      // Right stone boundary pier with intercom housing
      { shape: "box", x: 0.42, z: 0.0, w: 0.14, d: 0.92, y: 0.0, h: 0.98, color: "#343a40", finish: "dark", edges: true, fix: "w" },
      // Gate leaf door frame and louver infill
      { shape: "box", x: 0.0, z: 0.0, w: 0.68, d: 0.08, y: 0.04, h: 0.90, color: "#c5a059", edges: "glow", fix: "d" },
      // Full-height vertical architectural bronze pull bar
      { shape: "cyl", x: 0.28, z: 0.08, w: 0.03, d: 0.03, y: 0.20, h: 0.60, color: "#d4af37", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: -0.42, z: 0.0, w: 0.14, d: 0.92 },
      { shape: "rect", x: 0.42, z: 0.0, w: 0.14, d: 0.92 },
      { shape: "line", x1: -0.35, z1: 0.0, x2: 0.35, z2: 0.0 }
    ]
  },

  {
    num: 171,
    id: "sculptural_garden_bridge",
    packId: "domolux.sculptural_garden_bridge",
    name: {
      en: "Domolux Arched Teak and Glass Landscape Footbridge",
      de: "Domolux Architektonische Garten-Bogenbrücke",
      ar: "جسر المشاة والحدائق المقوس بخشب التيك والزجاج دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Gently arched residential landscape bridge spanning garden streams or koi ponds, constructed from curved teak deck planks, bronze structural stringers, and glass balustrades.",
    size: [3.50, 1.20, 1.10],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["garden_bridge", "footbridge", "teak", "landscape", "pond", "domolux"],
    parts: [
      // Left arched bronze support beam
      { shape: "box", x: 0.0, z: -0.44, w: 0.98, d: 0.06, y: 0.0, h: 0.30, color: "#c5a059", edges: "glow", fix: "d" },
      // Right arched bronze support beam
      { shape: "box", x: 0.0, z: 0.44, w: 0.98, d: 0.06, y: 0.0, h: 0.30, color: "#c5a059", edges: "glow", fix: "d" },
      // Curved plantation teak walking deck
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.82, y: 0.22, h: 0.08, color: "#543c2b", finish: "wood", edges: true },
      // Left frameless structural glass balustrade
      { shape: "box", x: 0.0, z: -0.42, w: 0.94, d: 0.02, y: 0.30, h: 0.65, color: "#88c0d0", finish: "glass", fix: "d" },
      // Right frameless structural glass balustrade
      { shape: "box", x: 0.0, z: 0.42, w: 0.94, d: 0.02, y: 0.30, h: 0.65, color: "#88c0d0", finish: "glass", fix: "d" },
      // Teak handrail caps
      { shape: "cyl", x: 0.0, z: -0.42, w: 0.04, d: 0.04, y: 0.95, h: 0.96, axis: "x", color: "#3d2b1f", fix: "wd" },
      { shape: "cyl", x: 0.0, z: 0.42, w: 0.04, d: 0.04, y: 0.95, h: 0.96, axis: "x", color: "#3d2b1f", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.88 },
      { shape: "line", x1: -0.48, z1: -0.42, x2: 0.48, z2: -0.42 },
      { shape: "line", x1: -0.48, z1: 0.42, x2: 0.48, z2: 0.42 }
    ]
  },

  {
    num: 172,
    id: "architectural_reflecting_pool",
    packId: "domolux.architectural_reflecting_pool",
    name: {
      en: "Domolux Basalt Mirror Architectural Reflecting Water Basin",
      de: "Domolux Architektonisches Spiegel-Wasserbecken",
      ar: "حوض المياه المعماري العاكس بحجر البازلت الأسود دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Perimeter slot-overflow reflecting pool basin lined with honed Nero Zimbabwe granite, glass-still surface mirror plane, and submerged underwater LED glow reveal.",
    size: [3.80, 2.20, 0.40],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["reflecting_pool", "water_feature", "fountain", "mirror_pool", "landscape", "domolux"],
    parts: [
      // Outer perimeter granite coping rim
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.0, h: 0.12, color: "#141518", edges: true, fix: "h" },
      // Recessed stone basin cavity
      { shape: "box", x: 0.0, z: 0.0, w: 0.86, d: 0.86, y: 0.04, h: 0.88, color: "#0c0d10" },
      // Crystal glass mirror still-water plane
      { shape: "box", x: 0.0, z: 0.0, w: 0.84, d: 0.84, y: 0.84, h: 0.02, color: "#00b4d8", finish: "glass", glow: true, fix: "h" },
      // Concealed underwater perimeter glow strip
      { shape: "box", x: 0.0, z: 0.0, w: 0.85, d: 0.85, y: 0.82, h: 0.02, color: "#fff3cc", glow: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.98 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.86, d: 0.86 }
    ]
  },

  {
    num: 173,
    id: "infinity_edge_pool",
    packId: "domolux.infinity_edge_pool",
    name: {
      en: "Domolux Monumental Infinity-Edge Architectural Swimming Pool",
      de: "Domolux Monumentaler Infinity-Pool mit Überlaufkante",
      ar: "مسبح الحافة اللانهائية المعماري الملكي بحوض الفائض دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Complete luxury residential pool basin with vanishing infinity spillway weir, submerged LED lighting, ceramic mosaic tile lining, and balance catchment trough.",
    size: [8.00, 4.00, 1.60],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["swimming_pool", "infinity_pool", "water", "luxury", "outdoor", "domolux"],
    parts: [
      // Concrete outer foundation basin shell
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.0, h: 0.96, color: "#1e2229", edges: true },
      // Deep water pool interior cavity
      { shape: "box", x: 0.0, z: -0.04, w: 0.92, d: 0.84, y: 0.08, h: 0.90, color: "#0077b6" },
      // Water body top volume (Turquoise / Azure glowing liquid)
      { shape: "box", x: 0.0, z: -0.04, w: 0.90, d: 0.82, y: 0.86, h: 0.04, color: "#48cae4", finish: "glass", glow: true, fix: "h" },
      // Vanishing edge spillway weir wall (Front side)
      { shape: "box", x: 0.0, z: 0.40, w: 0.92, d: 0.04, y: 0.70, h: 0.18, color: "#ffffff", edges: "glow", fix: "d" },
      // Lower catchment overflow surge trough
      { shape: "box", x: 0.0, z: 0.46, w: 0.96, d: 0.08, y: 0.20, h: 0.50, color: "#0077b6", edges: true, fix: "d" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.98 },
      { shape: "rect", x: 0.0, z: -0.04, w: 0.90, d: 0.82 },
      { shape: "line", x1: -0.46, z1: 0.40, x2: 0.46, z2: 0.40 }
    ]
  },

  {
    num: 174,
    id: "pool_beach_entry_shelf",
    packId: "domolux.pool_beach_entry_shelf",
    name: {
      en: "Domolux Baja Beach-Entry Shallow Sun Shelf Platform",
      de: "Domolux Flachwasser-Baja-Shelf & Sonnenplattform",
      ar: "منصة التشميس والشاطئ المائي الضحل لحوض السباحة دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Shallow resort-style pool tanning ledge designed for in-water chaise loungers, featuring 20cm water depth, integrated umbrella sleeve, and non-slip quartz aggregate.",
    size: [3.50, 2.50, 0.45],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["baja_shelf", "pool", "tanning_ledge", "sun_shelf", "outdoor", "domolux"],
    parts: [
      // Pool basin shell wall rim
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.0, h: 0.88, color: "#1e2229", edges: true },
      // Submerged shallow Baja sun deck
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.90, y: 0.42, h: 0.25, color: "#e8ecef", finish: "white", edges: true },
      // Ultra-clear shallow water sheet (20cm depth)
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.88, y: 0.68, h: 0.04, color: "#90e0ef", finish: "glass", glow: true, fix: "h" },
      // Solid brass umbrella sleeve socket
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.08, d: 0.08, y: 0.65, h: 0.08, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.98 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.06 }
    ]
  },

  {
    num: 175,
    id: "swim_up_bar_island",
    packId: "domolux.swim_up_bar_island",
    name: {
      en: "Domolux Resort Luxury Swim-Up Pool Bar and Submerged Stools",
      de: "Domolux Swim-up-Poolbar mit Unterwassersitzen",
      ar: "بار المسبح المائي مع مقاعد غاطسة رخامية دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Curvilinear swim-up bar island with honed quartzite overhang counter, four submerged in-pool ceramic barstools, dry-side bartender work-niche, and cocktail speed-rail.",
    size: [3.20, 1.80, 1.15],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["swim_up_bar", "pool_bar", "outdoor_bar", "submerged", "luxury", "domolux"],
    parts: [
      // Concrete underwater island base
      { shape: "box", x: 0.0, z: -0.15, w: 0.96, d: 0.65, y: 0.0, h: 0.85, color: "#2b2f38", edges: true },
      // Honed Sea Pearl Quartzite bar countertop
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.94, y: 0.85, h: 0.12, color: "#e9ecef", finish: "white", edges: true, fix: "h" },
      // Dry-side service sink and beverage well
      { shape: "box", x: 0.0, z: -0.25, w: 0.75, d: 0.32, y: 0.86, h: 0.04, color: "metal", fix: "h" },
      // 4 submerged ceramic in-pool barstool pillars (Front edge)
      { shape: "cyl", x: -0.36, z: 0.38, w: 0.16, d: 0.16, y: 0.0, h: 0.55, color: "#d8c7b5", fix: "wd" },
      { shape: "cyl", x: -0.12, z: 0.38, w: 0.16, d: 0.16, y: 0.0, h: 0.55, color: "#d8c7b5", fix: "wd" },
      { shape: "cyl", x: 0.12, z: 0.38, w: 0.16, d: 0.16, y: 0.0, h: 0.55, color: "#d8c7b5", fix: "wd" },
      { shape: "cyl", x: 0.36, z: 0.38, w: 0.16, d: 0.16, y: 0.0, h: 0.55, color: "#d8c7b5", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.94 },
      { shape: "circle", x: -0.36, z: 0.38, r: 0.10 },
      { shape: "circle", x: -0.12, z: 0.38, r: 0.10 },
      { shape: "circle", x: 0.12, z: 0.38, r: 0.10 },
      { shape: "circle", x: 0.36, z: 0.38, r: 0.10 }
    ]
  },

  {
    num: 176,
    id: "poolside_changing_cabana",
    packId: "domolux.poolside_changing_cabana",
    name: {
      en: "Domolux Estate Private Poolside Changing Pavilion",
      de: "Domolux Pool-Umkleidepavillon mit Außendusche",
      ar: "مقصورة تبديل الملابس والاستحمام الخارجية الفاخرة دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Fully enclosed teak changing cube with louvered ventilation panels, integrated bench seating, towel warmer nook, frosted glass skylight, and outdoor shower hookup.",
    size: [1.80, 1.80, 2.40],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["changing_cabana", "poolside", "teak", "changing_room", "outdoor", "domolux"],
    parts: [
      // Teak duckboard floor platform
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.0, h: 0.08, color: "#3d2b1f", finish: "wood", fix: "h" },
      // Louvered teak rear wall
      { shape: "box", x: 0.0, z: -0.46, w: 0.96, d: 0.06, y: 0.08, h: 0.90, color: "#543c2b", finish: "wood", edges: true, fix: "d" },
      // Louvered teak left wall
      { shape: "box", x: -0.46, z: 0.0, w: 0.06, d: 0.96, y: 0.08, h: 0.90, color: "#543c2b", finish: "wood", edges: true, fix: "w" },
      // Louvered teak right wall
      { shape: "box", x: 0.46, z: 0.0, w: 0.06, d: 0.96, y: 0.08, h: 0.90, color: "#543c2b", finish: "wood", edges: true, fix: "w" },
      // Front partial louver screen and entry door opening
      { shape: "box", x: -0.28, z: 0.46, w: 0.40, d: 0.04, y: 0.08, h: 0.90, color: "#543c2b", finish: "wood", edges: true, fix: "d" },
      // Internal slatted teak dressing bench
      { shape: "box", x: 0.0, z: -0.28, w: 0.82, d: 0.32, y: 0.08, h: 0.22, color: "#6a4e37", finish: "wood", edges: true },
      // Top weather roof with frosted skylight panel
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.96, h: 0.04, color: "#1c1e24", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.98 },
      { shape: "rect", x: 0.0, z: -0.28, w: 0.82, d: 0.32 }
    ]
  },

  {
    num: 177,
    id: "retractable_pool_cover",
    packId: "domolux.retractable_pool_cover",
    name: {
      en: "Domolux Motorized Architectural In-Ground Pool Safety Cover",
      de: "Domolux Unterflur-Sicherheits-Poolabdeckung",
      ar: "غطاء حوض السباحة المعماري الآلي المنزلق في الأرضية دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Concealed in-ground automated swimming pool cover housing rigid polycarbonate solar heating slats, heavy stainless winding tube, and flush titanium terrace hatch.",
    size: [4.20, 0.80, 0.95],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["pool_cover", "retractable", "safety", "pool", "motorized", "domolux"],
    parts: [
      // Sub-terrace pit casing tub
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.0, h: 0.92, color: "#141518", edges: true },
      // Stainless winding drive drum shaft
      { shape: "cyl", x: 0.0, z: -0.05, w: 0.45, d: 0.45, y: 0.25, h: 0.92, axis: "x", color: "metal", edges: true, fix: "wd" },
      // Rolled polycarbonate solar slat bundle
      { shape: "cyl", x: 0.0, z: -0.05, w: 0.65, d: 0.65, y: 0.20, h: 0.88, axis: "x", color: "#1e3a47", fix: "wd" },
      // Flush terrace titanium access cover hatch (Mitered stone insert lid)
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.94, h: 0.06, color: "#495057", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "circle", x: 0.0, z: -0.05, r: 0.25 }
    ]
  },

  {
    num: 178,
    id: "irrigation_distribution_manifold",
    packId: "domolux.irrigation_distribution_manifold",
    name: {
      en: "Domolux Smart Multi-Zone Landscape Irrigation Manifold",
      de: "Domolux Intelligente Gartenbewässerungs-Verteilerstation",
      ar: "وحدة توزيع وصمامات الري الذكية متعددة المناطق للحدائق دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Architectural weatherproof enclosure housing 12 solenoid irrigation valves, flow sensors, master pressure regulator, backflow preventer, and smart Wi-Fi cloud controller.",
    size: [0.90, 0.45, 0.70],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["irrigation", "sprinkler", "manifold", "valves", "garden", "domolux"],
    parts: [
      // Heavy underground polymer valve vault box
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.94, y: 0.0, h: 0.88, color: "#1c2024", finish: "dark", edges: true },
      // Brass main inlet header manifold pipe
      { shape: "cyl", x: 0.0, z: -0.25, w: 0.12, d: 0.12, y: 0.35, h: 0.88, axis: "x", color: "#c5a059", edges: "glow", fix: "wd" },
      // 4 electric solenoid distribution valves (Brass & black caps)
      { shape: "cyl", x: -0.32, z: 0.10, w: 0.12, d: 0.12, y: 0.35, h: 0.25, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: -0.10, z: 0.10, w: 0.12, d: 0.12, y: 0.35, h: 0.25, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.10, z: 0.10, w: 0.12, d: 0.12, y: 0.35, h: 0.25, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.32, z: 0.10, w: 0.12, d: 0.12, y: 0.35, h: 0.25, color: "#c5a059", fix: "wdh" },
      // Flush green landscape access lid
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.92, h: 0.08, color: "#2d6a4f", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "circle", x: 0.0, z: 0.10, r: 0.22 }
    ]
  },

  {
    num: 179,
    id: "rainwater_harvesting_cistern",
    packId: "domolux.rainwater_harvesting_cistern",
    name: {
      en: "Domolux Monolithic 10,000L Rainwater Harvesting Cistern",
      de: "Domolux Unterirdische 10.000L Regenwasser-Zisterne",
      ar: "خزان تجميع وحصاد مياه الأمطار المعماري عالي السعة دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Heavy reinforced precast concrete rainwater harvesting reservoir with vortex particulate pre-filter, calming inlet, submersible pressure pump, and cast bronze turret access hatch.",
    size: [2.50, 2.50, 2.20],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["cistern", "rainwater", "water_storage", "sustainability", "landscape", "domolux"],
    parts: [
      // Massive monolithic cylindrical tank body
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.0, h: 0.88, color: "#343a40", finish: "dark", edges: true },
      // Top tank dome cap
      { shape: "loft", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.84, h: 0.12, tx: 0.0, tz: 0.0, tw: 0.55, td: 0.55, color: "#2b2f36", edges: true },
      // Turret inspection neck
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.42, d: 0.42, y: 0.90, h: 0.06, color: "#212529", fix: "wdh" },
      // Cast bronze pedestrian access manhole cover
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.38, d: 0.38, y: 0.96, h: 0.04, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: 0.0, r: 0.48 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.19 }
    ]
  },

  {
    num: 180,
    id: "outdoor_bicycle_shelter",
    packId: "domolux.outdoor_bicycle_shelter",
    name: {
      en: "Domolux Estate Architectural Bicycle and Equipment Pavilion",
      de: "Domolux Architektonischer Fahrrad- und Geräteunterstand",
      ar: "مظلة وموقف الدراجات الهوائية والمعدات الرياضية الفاخرة دومولوكس"
    },
    collection: "Private Estate, Outdoor Architecture and Landscape",
    collectionSlug: "09_Outdoor_Architecture",
    category: "Outdoor",
    description: "Curated open-air bicycle shelter with cantilevered bronze zinc roof, integrated inductive charging docks for 4 e-bikes, solid oak wheel chocks, and linear downlight bar.",
    size: [3.20, 1.80, 2.30],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["bike_shelter", "bicycle", "ebike", "pavilion", "outdoor", "domolux"],
    parts: [
      // Cast concrete base pad with wheel tire slots
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.0, h: 0.08, color: "#22252c", edges: true, fix: "h" },
      // Rear vertical steel structural stanchions
      { shape: "box", x: -0.42, z: -0.42, w: 0.08, d: 0.08, y: 0.08, h: 0.88, color: "#16171b", finish: "dark", fix: "wd" },
      { shape: "box", x: 0.42, z: -0.42, w: 0.08, d: 0.08, y: 0.08, h: 0.88, color: "#16171b", finish: "dark", fix: "wd" },
      // Slanted architectural cantilevered roof canopy (Loft)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.92, h: 0.08, tx: 0.0, tz: 0.08, tw: 0.98, td: 0.98, color: "#2b221d", finish: "dark", edges: true },
      // 4 heavy brushed brass bicycle locking hoops
      { shape: "box", x: -0.32, z: 0.05, w: 0.04, d: 0.65, y: 0.08, h: 0.50, color: "#c5a059", edges: "glow", fix: "w" },
      { shape: "box", x: -0.10, z: 0.05, w: 0.04, d: 0.65, y: 0.08, h: 0.50, color: "#c5a059", edges: "glow", fix: "w" },
      { shape: "box", x: 0.10, z: 0.05, w: 0.04, d: 0.65, y: 0.08, h: 0.50, color: "#c5a059", edges: "glow", fix: "w" },
      { shape: "box", x: 0.32, z: 0.05, w: 0.04, d: 0.65, y: 0.08, h: 0.50, color: "#c5a059", edges: "glow", fix: "w" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "line", x1: -0.32, z1: -0.28, x2: -0.32, z2: 0.38 },
      { shape: "line", x1: -0.10, z1: -0.28, x2: -0.10, z2: 0.38 },
      { shape: "line", x1: 0.10, z1: -0.28, x2: 0.10, z2: 0.38 },
      { shape: "line", x1: 0.32, z1: -0.28, x2: 0.32, z2: 0.38 }
    ]
  }
];
