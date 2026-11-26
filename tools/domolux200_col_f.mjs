// COLLECTION F — MASTER SUITES, GUEST HOSPITALITY AND NURSERY (Products 101–120)
// Architectural Residential, Master Living & Bespoke Family Environments

export const COLLECTION_F_PRODUCTS = [
  {
    num: 101,
    id: "motorized_murphy_bed",
    packId: "domolux.motorized_murphy_bed",
    name: {
      en: "Domolux Motorized Architectural Wall-Bed System",
      de: "Domolux Motorisiertes Schrankbett-System",
      ar: "نظام سرير الحائط المخفي القابل للطي بمحرك كهربائي دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Bedroom",
    description: "Architectural floor-to-ceiling cabinetry concealing a motorized fold-down queen bed with integrated counterbalanced pivot hinge, LED cove reading lights, and fluted oak front.",
    size: [1.70, 0.60, 2.25],
    mount: "floor",
    group: "bedroom",
    room: ["bedroom"],
    tags: ["murphy_bed", "wall_bed", "motorized", "space_saving", "bedroom", "domolux"],
    parts: [
      // Cabinet carcass frame
      { shape: "box", x: 0.0, z: -0.15, w: 0.98, d: 0.68, y: 0.0, h: 0.98, color: "wood", finish: "dark", edges: true },
      // Recessed bed storage pocket cavity
      { shape: "box", x: 0.0, z: -0.10, w: 0.88, d: 0.54, y: 0.04, h: 0.92, color: "#181a1f" },
      // Folding mattress platform (Half-reclined preview / fold-out posture)
      { shape: "box", x: 0.0, z: 0.18, w: 0.84, d: 0.48, y: 0.05, h: 0.42, color: "#282b33", edges: true },
      // Tufted pocket-spring mattress layer
      { shape: "box", x: 0.0, z: 0.18, w: 0.80, d: 0.44, y: 0.47, h: 0.18, color: "#e8ecef", finish: "fabric", edges: true },
      // Fluted wood face decorative panels (when closed)
      { shape: "box", x: 0.0, z: 0.44, w: 0.94, d: 0.04, y: 0.68, h: 0.28, color: "#422e1d", finish: "wood", edges: true, fix: "d" },
      // Satin bronze fold-out support leg bar
      { shape: "cyl", x: 0.0, z: 0.42, w: 0.04, d: 0.04, y: 0.02, h: 0.78, axis: "x", color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: -0.15, w: 0.98, d: 0.68 },
      { shape: "rect", x: 0.0, z: 0.18, w: 0.84, d: 0.48 }
    ]
  },

  {
    num: 102,
    id: "architectural_headboard_wall",
    packId: "domolux.architectural_headboard_wall",
    name: {
      en: "Domolux Monumental Upholstered Headboard Wall Suite",
      de: "Domolux Monumentale Akustik-Kopfwand mit Nachttischen",
      ar: "جدار اللوح الرأسي المعماري المنجد مع إضاءة محيطية دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Bedroom",
    description: "Full-width master suite headboard installation with vertical fluted boucle acoustic panels, integrated floating nightstands, brushed brass reveals, and concealed ambient LED lighting.",
    size: [3.20, 0.25, 2.40],
    mount: "wall",
    wall_y: 0.0,
    group: "bedroom",
    room: ["bedroom"],
    tags: ["headboard", "wall_panel", "upholstered", "lighting", "bedroom", "domolux"],
    parts: [
      // Sub-frame backing board
      { shape: "box", x: 0.0, z: -0.42, w: 0.98, d: 0.08, y: 0.0, h: 0.98, color: "#1c1d22", fix: "d" },
      // Main central tufted boucle acoustic panel (Cream / sand)
      { shape: "box", x: 0.0, z: -0.15, w: 0.54, d: 0.18, y: 0.0, h: 0.96, color: "#dfd7cb", finish: "fabric", edges: true },
      // Left fluted smoked-oak architectural wing
      { shape: "box", x: -0.38, z: -0.22, w: 0.22, d: 0.12, y: 0.0, h: 0.96, color: "#362619", finish: "wood", edges: true },
      // Right fluted smoked-oak architectural wing
      { shape: "box", x: 0.38, z: -0.22, w: 0.22, d: 0.12, y: 0.0, h: 0.96, color: "#362619", finish: "wood", edges: true },
      // Left floating cantilever nightstand shelf
      { shape: "box", x: -0.38, z: 0.15, w: 0.20, d: 0.38, y: 0.22, h: 0.08, color: "#1a1b1f", edges: true },
      // Right floating cantilever nightstand shelf
      { shape: "box", x: 0.38, z: 0.15, w: 0.20, d: 0.38, y: 0.22, h: 0.08, color: "#1a1b1f", edges: true },
      // Brushed bronze vertical separating reveal trims
      { shape: "box", x: -0.27, z: -0.05, w: 0.015, d: 0.05, y: 0.0, h: 0.98, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.27, z: -0.05, w: 0.015, d: 0.05, y: 0.0, h: 0.98, color: "#c5a059", edges: "glow", fix: "wd" },
      // Upper warm ambient wash LED cove strip
      { shape: "box", x: 0.0, z: -0.36, w: 0.96, d: 0.04, y: 0.97, h: 0.02, color: "#fff3cc", glow: true, fix: "yd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: -0.20, w: 0.98, d: 0.40 },
      { shape: "rect", x: -0.38, z: 0.15, w: 0.20, d: 0.38 },
      { shape: "rect", x: 0.38, z: 0.15, w: 0.20, d: 0.38 }
    ]
  },

  {
    num: 103,
    id: "luxury_hotel_minibar",
    packId: "domolux.luxury_hotel_minibar",
    name: {
      en: "Domolux Presidential Suite Concealed Hospitality Minibar",
      de: "Domolux Luxus-Minibar & Erfrischungsschrank",
      ar: "ميني بار وخزانة ضيافة فندقية فاخرة مدمجة دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Living",
    description: "Bespoke hospitality cabinet featuring a silent absorption mini-fridge behind fluted timber pocket doors, Calacatta marble cocktail counter, and illuminated crystal stemware shelf.",
    size: [0.85, 0.55, 1.25],
    mount: "floor",
    group: "living",
    room: ["living", "bedroom"],
    tags: ["minibar", "hospitality", "bar", "refrigeration", "bedroom", "domolux"],
    parts: [
      // Base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.92, y: 0.0, h: 0.08, color: "#141518", fix: "h" },
      // Walnut cabinet carcass
      { shape: "box", x: 0.0, z: -0.02, w: 0.98, d: 0.92, y: 0.08, h: 0.90, color: "wood", finish: "dark", edges: true },
      // Lower refrigerator compartment (Smoked glass door)
      { shape: "box", x: -0.22, z: 0.44, w: 0.44, d: 0.04, y: 0.12, h: 0.45, color: "#252b33", finish: "glass", edges: true, fix: "d" },
      // Lower snack and drawer door
      { shape: "box", x: 0.24, z: 0.44, w: 0.42, d: 0.04, y: 0.12, h: 0.45, color: "#3a281a", edges: true, fix: "d" },
      // Marble interior serving niche
      { shape: "box", x: 0.0, z: 0.06, w: 0.88, d: 0.72, y: 0.60, h: 0.32, color: "#dbe0e6", finish: "white", edges: true },
      // Illuminated glass stemware shelf
      { shape: "box", x: 0.0, z: 0.06, w: 0.84, d: 0.45, y: 0.82, h: 0.02, color: "#88c0d0", finish: "glass", glow: true, fix: "h" },
      // Champagne brass handles
      { shape: "cyl", x: -0.04, z: 0.48, w: 0.02, d: 0.02, y: 0.22, h: 0.25, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.06, z: 0.48, w: 0.02, d: 0.02, y: 0.22, h: 0.25, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.92 },
      { shape: "line", x1: 0.0, z1: -0.45, x2: 0.0, z2: 0.45 }
    ]
  },

  {
    num: 104,
    id: "guest_refreshment_console",
    packId: "domolux.guest_refreshment_console",
    name: {
      en: "Domolux Executive Suite Refreshment and Coffee Credenza",
      de: "Domolux Gäste-Kaffee- & Erfrischungsanrichte",
      ar: "طاولة تقديم القهوة والضيافة لجناح الضيوف دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Living",
    description: "Low-profile guest hospitality credenza with inset honed marble stone top, pull-out espresso accessory trays, integrated trash chute, and brushed brass legs.",
    size: [1.10, 0.50, 0.95],
    mount: "floor",
    group: "living",
    room: ["living", "bedroom"],
    tags: ["credenza", "coffee_station", "hospitality", "console", "bedroom", "domolux"],
    parts: [
      // Four tapered brass legs
      { shape: "cyl", x: -0.42, z: -0.38, w: 0.05, d: 0.05, y: 0.0, h: 0.25, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.42, z: -0.38, w: 0.05, d: 0.05, y: 0.0, h: 0.25, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: -0.42, z: 0.38, w: 0.05, d: 0.05, y: 0.0, h: 0.25, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.42, z: 0.38, w: 0.05, d: 0.05, y: 0.0, h: 0.25, color: "#c5a059", fix: "wdh" },
      // Main credenza cabinet box (Ebonized ash)
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.92, y: 0.25, h: 0.68, color: "#1c1e22", finish: "dark", edges: true },
      // Honed Fior di Bosco marble countertop surface
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.94, y: 0.93, h: 0.07, color: "#545a66", edges: true, fix: "h" },
      // Dual center drawer fronts
      { shape: "box", x: 0.0, z: 0.46, w: 0.90, d: 0.03, y: 0.60, h: 0.28, color: "#272a32", edges: true, fix: "d" },
      // Brushed brass horizontal edge pulls
      { shape: "box", x: 0.0, z: 0.48, w: 0.35, d: 0.02, y: 0.72, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.94 },
      { shape: "line", x1: -0.45, z1: 0.0, x2: 0.45, z2: 0.0 }
    ]
  },

  {
    num: 105,
    id: "automated_luggage_valet",
    packId: "domolux.automated_luggage_valet",
    name: {
      en: "Domolux Presidential Suite Luggage Valet and Wardrobe Bench",
      de: "Domolux Luxus-Kofferablage & Garderobenbank",
      ar: "منصة حقائب السفر الفندقية المنجدة بالجلد الفاخر دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Bedroom",
    description: "Luggage reception console featuring saddle-leather ribbed suitcase platform slats, integrated garment hanging rail with LED downlight, and dual accessory soft-close drawers.",
    size: [1.20, 0.60, 1.80],
    mount: "floor",
    group: "bedroom",
    room: ["bedroom"],
    tags: ["luggage_valet", "bench", "wardrobe", "leather", "bedroom", "domolux"],
    parts: [
      // Base cabinet plinth with drawers
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.92, y: 0.0, h: 0.24, color: "#22252c", finish: "dark", edges: true },
      // Leather luggage resting bench surface
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.88, y: 0.24, h: 0.08, color: "#8b5a2b", finish: "cushion", edges: true },
      // Protective bronze rub-rails across luggage bed (3 slats)
      { shape: "box", x: -0.28, z: 0.0, w: 0.03, d: 0.78, y: 0.32, h: 0.02, color: "#c5a059", fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.03, d: 0.78, y: 0.32, h: 0.02, color: "#c5a059", fix: "wdh" },
      { shape: "box", x: 0.28, z: 0.0, w: 0.03, d: 0.78, y: 0.32, h: 0.02, color: "#c5a059", fix: "wdh" },
      // Rear vertical architectural frame uprights
      { shape: "box", x: -0.44, z: -0.38, w: 0.05, d: 0.05, y: 0.32, h: 0.66, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.44, z: -0.38, w: 0.05, d: 0.05, y: 0.32, h: 0.66, color: "#c5a059", edges: "glow", fix: "wd" },
      // Upper coat & suit hanging bar
      { shape: "cyl", x: 0.0, z: -0.38, w: 0.04, d: 0.04, y: 0.92, h: 0.88, axis: "x", color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.92 },
      { shape: "line", x1: -0.44, z1: -0.38, x2: 0.44, z2: -0.38 }
    ]
  },

  {
    num: 106,
    id: "motorized_wardrobe_carousel",
    packId: "domolux.motorized_wardrobe_carousel",
    name: {
      en: "Domolux Rotational Motorized Wardrobe Carousel Suite",
      de: "Domolux Motorisiertes Garderoben-Karussell",
      ar: "دولاب الملابس الدوار الآلي بمحرك كهربائي وزجاج مدخن دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Storage",
    description: "Circular architectural dressing room installation with automated bidirectional garment indexing carousel, curved bronze glass enclosure, and capacitive touch foot control.",
    size: [1.40, 1.40, 2.20],
    mount: "floor",
    group: "storage",
    room: ["bedroom", "storage"],
    tags: ["wardrobe", "carousel", "motorized", "closet", "luxury", "domolux"],
    parts: [
      // Base round floor plinth
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.0, h: 0.08, color: "#141518", fix: "h" },
      // Upper circular ceiling crown cap
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.94, h: 0.06, color: "#141518", fix: "h" },
      // Central motorized structural pylon (Brushed bronze)
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.16, d: 0.16, y: 0.08, h: 0.86, color: "#c5a059", edges: "glow", fix: "wd" },
      // Rotating garment hanger ring (Middle)
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.76, d: 0.76, y: 0.65, h: 0.04, color: "#d4af37", fix: "h" },
      // Lower rotating shoe carousel shelf
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.82, d: 0.82, y: 0.18, h: 0.04, color: "#282a30", edges: true, fix: "h" },
      // Curved bronze glass cylindrical enclosure
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.92, d: 0.92, y: 0.08, h: 0.86, color: "#3a2f26", finish: "glass", edges: true }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: 0.0, r: 0.48 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.38 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.08 }
    ]
  },

  {
    num: 107,
    id: "motorized_closet_rail",
    packId: "domolux.motorized_closet_rail",
    name: {
      en: "Domolux Motorized Pull-Down Architectural Wardrobe Lift",
      de: "Domolux Motorisierter Kleiderlift",
      ar: "شماعة الملابس الهيدروليكية المتحركة للملابس العالية دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Storage",
    description: "High-reach motorized pneumatic closet rail with soft-start lowering mechanism, integrated rechargeable lithium actuator, and champagne bronze hanging tube.",
    size: [1.00, 0.35, 0.90],
    mount: "wall",
    wall_y: 1.40,
    group: "storage",
    room: ["bedroom", "storage"],
    tags: ["closet_rail", "wardrobe_lift", "motorized", "storage", "domolux"],
    parts: [
      // Left wall mounting bracket and actuator box
      { shape: "box", x: -0.46, z: -0.25, w: 0.08, d: 0.42, y: 0.30, h: 0.60, color: "#1c1e22", edges: true, fix: "w" },
      // Right wall mounting bracket and actuator box
      { shape: "box", x: 0.46, z: -0.25, w: 0.08, d: 0.42, y: 0.30, h: 0.60, color: "#1c1e22", edges: true, fix: "w" },
      // Left articulated lifting arm
      { shape: "box", x: -0.40, z: 0.05, w: 0.03, d: 0.03, y: 0.15, h: 0.70, color: "#c5a059", edges: "glow", fix: "wd" },
      // Right articulated lifting arm
      { shape: "box", x: 0.40, z: 0.05, w: 0.03, d: 0.03, y: 0.15, h: 0.70, color: "#c5a059", edges: "glow", fix: "wd" },
      // Heavy horizontal hanging rail
      { shape: "cyl", x: 0.0, z: 0.05, w: 0.04, d: 0.04, y: 0.15, h: 0.80, axis: "x", color: "#d4af37", edges: "glow", fix: "wd" },
      // Center ergonomic pull grip handle
      { shape: "cyl", x: 0.0, z: 0.20, w: 0.03, d: 0.03, y: 0.0, h: 0.18, color: "#c5a059", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: -0.10, w: 0.98, d: 0.60 },
      { shape: "line", x1: -0.40, z1: 0.05, x2: 0.40, z2: 0.05 }
    ]
  },

  {
    num: 108,
    id: "luxury_nursery_crib",
    packId: "domolux.luxury_nursery_crib",
    name: {
      en: "Domolux Heirloom Curved Oak Nursery Crib",
      de: "Domolux Exklusives Designer-Kinderbett",
      ar: "سرير أطفال ملكي فاخر من خشب البلوط المنحني دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Bedroom",
    description: "Heirloom-grade convertible crib handcrafted from solid white oak with softly radiused corners, precision vertical safety spindles, non-toxic organic cotton mattress, and brass feet.",
    size: [1.45, 0.80, 0.95],
    mount: "floor",
    group: "bedroom",
    room: ["bedroom"],
    tags: ["crib", "nursery", "baby", "infant", "oak", "bedroom", "domolux"],
    parts: [
      // 4 solid turned oak corner posts with brass ferrules
      { shape: "cyl", x: -0.45, z: -0.44, w: 0.07, d: 0.07, y: 0.0, h: 0.98, color: "#8a6642", finish: "wood", fix: "wd" },
      { shape: "cyl", x: 0.45, z: -0.44, w: 0.07, d: 0.07, y: 0.0, h: 0.98, color: "#8a6642", finish: "wood", fix: "wd" },
      { shape: "cyl", x: -0.45, z: 0.44, w: 0.07, d: 0.07, y: 0.0, h: 0.98, color: "#8a6642", finish: "wood", fix: "wd" },
      { shape: "cyl", x: 0.45, z: 0.44, w: 0.07, d: 0.07, y: 0.0, h: 0.98, color: "#8a6642", finish: "wood", fix: "wd" },
      // Organic hypo-allergenic crib mattress
      { shape: "box", x: 0.0, z: 0.0, w: 0.84, d: 0.82, y: 0.22, h: 0.18, color: "#f8f9fa", finish: "cushion", edges: true },
      // Front railing top beam
      { shape: "box", x: 0.0, z: 0.44, w: 0.90, d: 0.05, y: 0.88, h: 0.08, color: "#8a6642", finish: "wood", edges: true, fix: "d" },
      // Back railing top beam
      { shape: "box", x: 0.0, z: -0.44, w: 0.90, d: 0.05, y: 0.88, h: 0.08, color: "#8a6642", finish: "wood", edges: true, fix: "d" },
      // Spindle array representation (front and back slats)
      { shape: "box", x: 0.0, z: 0.44, w: 0.84, d: 0.02, y: 0.38, h: 0.50, color: "#a57d54", fix: "d" },
      { shape: "box", x: 0.0, z: -0.44, w: 0.84, d: 0.02, y: 0.38, h: 0.50, color: "#a57d54", fix: "d" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.94 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.84, d: 0.82 }
    ]
  },

  {
    num: 109,
    id: "designer_bassinet",
    packId: "domolux.designer_bassinet",
    name: {
      en: "Domolux Cocoon Sculptural Infant Bassinet",
      de: "Domolux Designer-Babywiege Cocoon",
      ar: "مهد أطفال عضوي منحوت بأرجل نحاسية دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Bedroom",
    description: "Freestanding organic cocoon bassinet with steam-bent walnut shell, breathable perforated linen liner, and hand-finished satin brass hairpin cradle stand.",
    size: [0.90, 0.55, 0.85],
    mount: "floor",
    group: "bedroom",
    room: ["bedroom"],
    tags: ["bassinet", "nursery", "infant", "cradle", "brass", "bedroom", "domolux"],
    parts: [
      // Satin brass tripod / cross-leg stand
      { shape: "box", x: 0.0, z: 0.0, w: 0.72, d: 0.65, y: 0.0, h: 0.48, color: "#c5a059", edges: "glow" },
      // Steam-bent walnut cocoon basket (Loft shell)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.94, d: 0.92, y: 0.46, h: 0.52, tx: 0.0, tz: 0.0, tw: 0.88, td: 0.84, color: "#3d2b1f", finish: "wood", edges: true },
      // Interior soft bouclé infant nest lining
      { shape: "box", x: 0.0, z: 0.0, w: 0.82, d: 0.78, y: 0.52, h: 0.42, color: "#f4ede2", finish: "cushion" },
      // Organic oval mattress cushion
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.74, d: 0.74, y: 0.62, h: 0.12, color: "#ffffff", finish: "cushion", fix: "h" }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: 0.0, r: 0.44 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.36 }
    ]
  },

  {
    num: 110,
    id: "nursing_rocking_chair",
    packId: "domolux.nursing_rocking_chair",
    name: {
      en: "Domolux Ergonomic Bouclé Nursing Rocking Lounge",
      de: "Domolux Ergonomischer Still- und Schaukelsessel",
      ar: "كرسي الرضاعة والاسترخاء الهزاز من قماش البوكليه دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Living",
    description: "High-back ergonomic nursing and relaxation glider featuring tactile ivory bouclé upholstery, integrated high-density lumbar support, walnut runners, and brass arm accents.",
    size: [0.85, 0.95, 1.05],
    mount: "floor",
    group: "living",
    room: ["living", "bedroom"],
    tags: ["rocking_chair", "glider", "nursing", "boucle", "nursery", "domolux"],
    parts: [
      // Solid walnut curved rocking runners
      { shape: "box", x: -0.34, z: 0.0, w: 0.06, d: 0.96, y: 0.0, h: 0.08, color: "#362619", finish: "wood", fix: "w" },
      { shape: "box", x: 0.34, z: 0.0, w: 0.06, d: 0.96, y: 0.0, h: 0.08, color: "#362619", finish: "wood", fix: "w" },
      // Brass diagonal support struts
      { shape: "box", x: 0.0, z: 0.0, w: 0.64, d: 0.64, y: 0.08, h: 0.22, color: "#c5a059", edges: "glow" },
      // Thick contoured seat cushion
      { shape: "box", x: 0.0, z: 0.02, w: 0.78, d: 0.68, y: 0.30, h: 0.22, color: "#eae4dc", finish: "cushion", edges: true },
      // Sculpted high wingback rest
      { shape: "box", x: 0.0, z: -0.30, w: 0.74, d: 0.22, y: 0.50, h: 0.50, color: "#eae4dc", finish: "cushion", edges: true },
      // Lumbar ergonomic pillow
      { shape: "box", x: 0.0, z: -0.22, w: 0.54, d: 0.12, y: 0.48, h: 0.18, color: "#d9cab8", finish: "cushion", fix: "d" },
      // Left padded armrest
      { shape: "box", x: -0.38, z: 0.0, w: 0.10, d: 0.62, y: 0.44, h: 0.20, color: "#eae4dc", finish: "cushion", fix: "w" },
      // Right padded armrest
      { shape: "box", x: 0.38, z: 0.0, w: 0.10, d: 0.62, y: 0.44, h: 0.20, color: "#eae4dc", finish: "cushion", fix: "w" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.85, d: 0.95 },
      { shape: "rect", x: 0.0, z: 0.02, w: 0.74, d: 0.60 }
    ]
  },

  {
    num: 111,
    id: "infant_changing_station",
    packId: "domolux.infant_changing_station",
    name: {
      en: "Domolux Architectural Nursery Changing Credenza",
      de: "Domolux Exklusive Wickelkommode",
      ar: "طاولة تغيير وتجهيز الرضع الفاخرة بأدراج تخزين دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Bedroom",
    description: "Master nursery changing dresser with removable solid oak safety gallery rim, waterproof vegan leather changing pad, push-to-open soft-close diaper storage drawers, and brass base.",
    size: [1.05, 0.65, 0.95],
    mount: "floor",
    group: "bedroom",
    room: ["bedroom"],
    tags: ["changing_table", "dresser", "nursery", "baby", "storage", "domolux"],
    parts: [
      // Brushed brass base ring
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.92, y: 0.0, h: 0.10, color: "#c5a059", edges: "glow", fix: "h" },
      // Oak main dresser cabinet body
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.92, y: 0.10, h: 0.75, color: "#252830", finish: "dark", edges: true },
      // Top oak perimeter safety containment gallery rim
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.85, h: 0.14, color: "#453223", finish: "wood", edges: true, fix: "h" },
      // Waterproof quilted vegan leather changing pad
      { shape: "box", x: 0.0, z: 0.0, w: 0.86, d: 0.84, y: 0.86, h: 0.08, color: "#e8ecef", finish: "cushion", edges: true },
      // Three front drawer separation trims
      { shape: "box", x: 0.0, z: 0.47, w: 0.92, d: 0.02, y: 0.35, h: 0.02, color: "#c5a059", fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.47, w: 0.92, d: 0.02, y: 0.60, h: 0.02, color: "#c5a059", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.86, d: 0.84 }
    ]
  },

  {
    num: 112,
    id: "convertible_child_highchair",
    packId: "domolux.convertible_child_highchair",
    name: {
      en: "Domolux Sculptural Convertible Highchair",
      de: "Domolux Mitwachsender Designer-Kinderhochstuhl",
      ar: "كرسي طعام الأطفال المتطور المصنوع من الجوز والنحاس دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Dining",
    description: "Evolutionary child dining highchair constructed from bent walnut ply, sand-cast brass stability spreaders, removable food-grade silicone dining tray, and padded harness.",
    size: [0.55, 0.55, 0.88],
    mount: "floor",
    group: "dining",
    room: ["dining", "kitchen"],
    tags: ["highchair", "child", "dining", "nursery", "walnut", "domolux"],
    parts: [
      // 4 flared solid walnut legs
      { shape: "cyl", x: -0.36, z: -0.36, w: 0.06, d: 0.06, y: 0.0, h: 0.62, color: "#3d2b1f", finish: "wood", fix: "wd" },
      { shape: "cyl", x: 0.36, z: -0.36, w: 0.06, d: 0.06, y: 0.0, h: 0.62, color: "#3d2b1f", finish: "wood", fix: "wd" },
      { shape: "cyl", x: -0.36, z: 0.36, w: 0.06, d: 0.06, y: 0.0, h: 0.62, color: "#3d2b1f", finish: "wood", fix: "wd" },
      { shape: "cyl", x: 0.36, z: 0.36, w: 0.06, d: 0.06, y: 0.0, h: 0.62, color: "#3d2b1f", finish: "wood", fix: "wd" },
      // Adjustable walnut footrest bar
      { shape: "box", x: 0.0, z: 0.28, w: 0.62, d: 0.16, y: 0.28, h: 0.04, color: "#543c2b", finish: "wood", fix: "h" },
      // Sculpted bentwood seat bucket
      { shape: "box", x: 0.0, z: -0.05, w: 0.70, d: 0.68, y: 0.62, h: 0.32, color: "#2d2017", finish: "wood", edges: true },
      // Padded grey linen seat insert cushion
      { shape: "box", x: 0.0, z: -0.05, w: 0.60, d: 0.58, y: 0.64, h: 0.26, color: "#d2cbc4", finish: "cushion" },
      // Removable dining food tray (Matte porcelain white)
      { shape: "box", x: 0.0, z: 0.25, w: 0.74, d: 0.35, y: 0.82, h: 0.05, color: "#f8f9fa", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.88, d: 0.88 },
      { shape: "rect", x: 0.0, z: 0.25, w: 0.74, d: 0.35 }
    ]
  },

  {
    num: 113,
    id: "indoor_climbing_structure",
    packId: "domolux.indoor_climbing_structure",
    name: {
      en: "Domolux Montessori Architectural Play Gym and Climbing Tower",
      de: "Domolux Architektonisches Indoor-Klettergerüst",
      ar: "برج التسلق والألعاب الرياضية الداخلي للأطفال دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Living",
    description: "Indoor architectural activity installation crafted from solid ash and brushed brass rungs, featuring Swedish ladder rungs, climbing rope net, and mezzanine observation deck.",
    size: [1.80, 1.20, 2.10],
    mount: "floor",
    group: "living",
    room: ["living", "bedroom"],
    tags: ["climbing_gym", "play", "montessori", "kids", "activity", "domolux"],
    parts: [
      // 4 heavy solid ash vertical upright structural masts
      { shape: "box", x: -0.44, z: -0.44, w: 0.08, d: 0.08, y: 0.0, h: 0.98, color: "#c2ab87", finish: "wood", fix: "wd" },
      { shape: "box", x: 0.44, z: -0.44, w: 0.08, d: 0.08, y: 0.0, h: 0.98, color: "#c2ab87", finish: "wood", fix: "wd" },
      { shape: "box", x: -0.44, z: 0.44, w: 0.08, d: 0.08, y: 0.0, h: 0.98, color: "#c2ab87", finish: "wood", fix: "wd" },
      { shape: "box", x: 0.44, z: 0.44, w: 0.08, d: 0.08, y: 0.0, h: 0.98, color: "#c2ab87", finish: "wood", fix: "wd" },
      // Elevated intermediate play deck platform
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.94, y: 0.45, h: 0.06, color: "#9c805a", finish: "wood", edges: true, fix: "h" },
      // Left climbing wall rungs (Swedish ladder rungs 5 count)
      { shape: "cyl", x: -0.44, z: 0.0, w: 0.04, d: 0.04, y: 0.15, h: 0.80, axis: "z", color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "cyl", x: -0.44, z: 0.0, w: 0.04, d: 0.04, y: 0.35, h: 0.80, axis: "z", color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "cyl", x: -0.44, z: 0.0, w: 0.04, d: 0.04, y: 0.60, h: 0.80, axis: "z", color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "cyl", x: -0.44, z: 0.0, w: 0.04, d: 0.04, y: 0.80, h: 0.80, axis: "z", color: "#c5a059", edges: "glow", fix: "wd" },
      // Top overhead traverse monkey bar rail
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.05, d: 0.05, y: 0.96, h: 0.92, axis: "x", color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.96 },
      { shape: "line", x1: -0.44, z1: -0.44, x2: 0.44, z2: 0.44 },
      { shape: "line", x1: -0.44, z1: 0.44, x2: 0.44, z2: -0.44 }
    ]
  },

  {
    num: 114,
    id: "childrens_reading_pod",
    packId: "domolux.childrens_reading_pod",
    name: {
      en: "Domolux Acoustic Igloo Children's Reading Sanctuary",
      de: "Domolux Akustische Lese- und Rückzugskapsel",
      ar: "كبسولة القراءة الصوتية المعزولة للأطفال دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Living",
    description: "Curvilinear spherical acoustic retreat pod featuring molded felt exterior shell, tufted velvet interior nest, integrated LED constellation reading dome, and oak plinth.",
    size: [1.10, 1.10, 1.35],
    mount: "floor",
    group: "living",
    room: ["living", "bedroom"],
    tags: ["reading_pod", "acoustic", "nursery", "kids", "cozy", "domolux"],
    parts: [
      // Solid oak circular floor base
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.84, d: 0.84, y: 0.0, h: 0.08, color: "#362619", finish: "wood", fix: "h" },
      // Spherical outer acoustic felt dome (Loft shell)
      { shape: "loft", x: 0.0, z: -0.05, w: 0.94, d: 0.90, y: 0.08, h: 0.88, tx: 0.0, tz: -0.08, tw: 0.75, td: 0.72, color: "#3f4652", finish: "fabric", edges: true },
      // Deep arch opening portal rim (Oak trim)
      { shape: "box", x: 0.0, z: 0.38, w: 0.68, d: 0.08, y: 0.16, h: 0.70, color: "#c2ab87", finish: "wood", edges: true, fix: "d" },
      // Interior velvet floor lounge cushion (Forest emerald green)
      { shape: "cyl", x: 0.0, z: -0.05, w: 0.78, d: 0.78, y: 0.12, h: 0.20, color: "#1b4332", finish: "cushion" },
      // Constellation fiber-optic ceiling starfield disc
      { shape: "cyl", x: 0.0, z: -0.08, w: 0.35, d: 0.35, y: 0.90, h: 0.02, color: "#ffffff", glow: true, fix: "h" }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: -0.05, r: 0.46 },
      { shape: "line", x1: -0.34, z1: 0.38, x2: 0.34, z2: 0.38 }
    ]
  },

  {
    num: 115,
    id: "modular_toy_storage_wall",
    packId: "domolux.modular_toy_storage_wall",
    name: {
      en: "Domolux Curated Architectural Toy and Book Display System",
      de: "Domolux Modulare Spielzeug- & Bücherwand",
      ar: "جدار تخزين وتنظيم الألعاب والكتب المعماري للأطفال دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Storage",
    description: "Architectural wall storage system with rhythmic open oak display cubes, felt-lined rolling toy chests, integrated low reading ledge, and champagne brass hardware.",
    size: [2.00, 0.45, 1.60],
    mount: "floor",
    group: "storage",
    room: ["bedroom", "living"],
    tags: ["toy_storage", "bookcase", "nursery", "modular", "storage", "domolux"],
    parts: [
      // Base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.94, y: 0.0, h: 0.06, color: "#1c1e22", fix: "h" },
      // Low bench carcass unit
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.92, y: 0.06, h: 0.35, color: "#2d313a", edges: true },
      // Three rolling felt toy drawers
      { shape: "box", x: -0.32, z: 0.15, w: 0.28, d: 0.70, y: 0.08, h: 0.30, color: "#7f8c8d", finish: "fabric", edges: true },
      { shape: "box", x: 0.0, z: 0.15, w: 0.28, d: 0.70, y: 0.08, h: 0.30, color: "#7f8c8d", finish: "fabric", edges: true },
      { shape: "box", x: 0.32, z: 0.15, w: 0.28, d: 0.70, y: 0.08, h: 0.30, color: "#7f8c8d", finish: "fabric", edges: true },
      // Upper oak display grid bookcase
      { shape: "box", x: 0.0, z: -0.15, w: 0.96, d: 0.60, y: 0.41, h: 0.57, color: "wood", finish: "wood", edges: true },
      // Brass dividing vertical columns
      { shape: "box", x: -0.16, z: -0.15, w: 0.02, d: 0.60, y: 0.41, h: 0.57, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.16, z: -0.15, w: 0.02, d: 0.60, y: 0.41, h: 0.57, color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.92 },
      { shape: "line", x1: -0.16, z1: -0.45, x2: -0.16, z2: 0.45 },
      { shape: "line", x1: 0.16, z1: -0.45, x2: 0.16, z2: 0.45 }
    ]
  },

  {
    num: 116,
    id: "stroller_docking_station",
    packId: "domolux.stroller_docking_station",
    name: {
      en: "Domolux Estate Entrance Stroller Valet and Charging Port",
      de: "Domolux Kinderwagen-Dockingstation mit Ladestation",
      ar: "محطة شحن وركن عربات الأطفال للمداخل الفاخرة دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Entryway",
    description: "Dedicated entryway stroller parking alcove with inductive battery charging pad for e-strollers, overhead UV sterilizing halo, fluted oak wall panel, and bronze canopy hook.",
    size: [0.85, 0.70, 1.10],
    mount: "floor",
    group: "storage",
    room: ["hallway", "storage"],
    tags: ["stroller", "entryway", "charging", "nursery", "valet", "domolux"],
    parts: [
      // Heavy rubberized floor parking base with wheel alignment guides
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.94, y: 0.0, h: 0.06, color: "#181a1f", edges: true, fix: "h" },
      // Inductive wireless charging target ring
      { shape: "cyl", x: 0.0, z: 0.15, w: 0.38, d: 0.38, y: 0.06, h: 0.01, color: "#00e5ff", glow: true, fix: "wdh" },
      // Rear fluted oak wall backboard
      { shape: "box", x: 0.0, z: -0.42, w: 0.94, d: 0.08, y: 0.06, h: 0.92, color: "#3d2b1f", finish: "wood", edges: true, fix: "d" },
      // Upper helmet & diaper bag accessory shelf
      { shape: "box", x: 0.0, z: -0.22, w: 0.88, d: 0.38, y: 0.90, h: 0.04, color: "#1c1e22", fix: "h" },
      // Brushed bronze garment & canopy hanger hooks
      { shape: "cyl", x: -0.25, z: -0.34, w: 0.03, d: 0.03, y: 0.76, h: 0.12, axis: "z", color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.25, z: -0.34, w: 0.03, d: 0.03, y: 0.76, h: 0.12, axis: "z", color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.94, d: 0.94 },
      { shape: "circle", x: 0.0, z: 0.15, r: 0.19 }
    ]
  },

  {
    num: 117,
    id: "nursery_ceiling_mobile",
    packId: "domolux.nursery_ceiling_mobile",
    name: {
      en: "Domolux Celestial Brass and Timber Kinetic Ceiling Mobile",
      de: "Domolux Kinetisches Hänge-Mobile aus Messing & Holz",
      ar: "مجسم سقف معلق متحرك من النحاس وخشب الجوز لغرف المواليد دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Lighting",
    description: "Suspended kinetic Calder-inspired celestial mobile with hand-balanced counterweight wire arms, solid turned walnut orbs, and satin brass lunar crescents.",
    size: [0.70, 0.70, 0.80],
    mount: "ceiling",
    group: "lighting",
    room: ["bedroom"],
    tags: ["mobile", "kinetic", "nursery", "decor", "ceiling", "domolux"],
    parts: [
      // Ceiling rose mounting canopy
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.18, d: 0.18, y: 0.94, h: 0.06, color: "#c5a059", fix: "wdh" },
      // Vertical suspension braided wire
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.02, d: 0.02, y: 0.55, h: 0.40, color: "metal", fix: "wd" },
      // Top primary horizontal balance arm
      { shape: "cyl", x: 0.05, z: 0.0, w: 0.02, d: 0.02, y: 0.55, h: 0.75, axis: "x", color: "#c5a059", edges: "glow", fix: "wd" },
      // Left secondary balance arm
      { shape: "cyl", x: -0.28, z: 0.08, w: 0.015, d: 0.015, y: 0.32, h: 0.45, axis: "z", color: "#c5a059", fix: "wd" },
      // Right counterweight solid turned walnut sphere
      { shape: "cyl", x: 0.38, z: -0.05, w: 0.18, d: 0.18, y: 0.44, h: 0.18, color: "#3a281a", finish: "wood", fix: "wdh" },
      // Lower hanging satin brass crescent moon
      { shape: "box", x: -0.28, z: 0.28, w: 0.16, d: 0.02, y: 0.15, h: 0.20, color: "#d4af37", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: 0.0, r: 0.35 },
      { shape: "line", x1: -0.35, z1: 0.0, x2: 0.35, z2: 0.0 }
    ]
  },

  {
    num: 118,
    id: "childrens_playhouse_loft",
    packId: "domolux.childrens_playhouse_loft",
    name: {
      en: "Domolux Scandinavian Timber Playhouse and Mezzanine Loft",
      de: "Domolux Indoor-Spielhaus & Hochebene",
      ar: "كوخ ألعاب خشبي فاخر بطابقين مع درج مدمج دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Living",
    description: "Indoor architectural play structure featuring a pitched timber play cabin, upper sleeping mezzanine, arched entrance doorway, structural rung steps, and internal LED starry cove.",
    size: [2.00, 1.50, 2.20],
    mount: "floor",
    group: "living",
    room: ["living", "bedroom"],
    tags: ["playhouse", "loft", "mezzanine", "nursery", "kids", "domolux"],
    parts: [
      // Base floor platform
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.0, h: 0.06, color: "#22252c", fix: "h" },
      // Main timber playhouse walls (White-washed solid birch)
      { shape: "box", x: 0.10, z: 0.0, w: 0.76, d: 0.94, y: 0.06, h: 0.65, color: "#e3ded7", finish: "wood", edges: true },
      // Front arched entrance cut-out opening
      { shape: "box", x: 0.10, z: 0.46, w: 0.35, d: 0.04, y: 0.06, h: 0.52, color: "#16171b", fix: "d" },
      // Upper mezzanine observation floor & railing
      { shape: "box", x: 0.10, z: 0.0, w: 0.78, d: 0.96, y: 0.71, h: 0.22, color: "#bfa382", finish: "wood", edges: true },
      // Left side step access ladder tower
      { shape: "box", x: -0.38, z: 0.0, w: 0.20, d: 0.88, y: 0.06, h: 0.65, color: "#8a6a4b", finish: "wood", edges: true },
      // Sloped pitched roof overhang (Upper right)
      { shape: "loft", x: 0.10, z: 0.0, w: 0.82, d: 0.98, y: 0.93, h: 0.07, tx: 0.10, tz: 0.0, tw: 0.70, td: 0.98, color: "#4a3525", edges: true }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.98 },
      { shape: "rect", x: 0.10, z: 0.0, w: 0.76, d: 0.94 },
      { shape: "rect", x: -0.38, z: 0.0, w: 0.20, d: 0.88 }
    ]
  },

  {
    num: 119,
    id: "guest_room_service_cabinet",
    packId: "domolux.guest_room_service_cabinet",
    name: {
      en: "Domolux Presidential Suite Service and Housekeeping Station",
      de: "Domolux Gästesuite-Serviceschrank",
      ar: "دولاب خدمة الغرف والبياضات الفندقي لجناح الضيوف دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Storage",
    description: "Dedicated hospitality staging armoire with ventilated fresh linen bays, discreet laundry return drop chute, breakfast tray staging surface, and acoustic soft-close dampers.",
    size: [0.80, 0.50, 1.50],
    mount: "floor",
    group: "storage",
    room: ["bedroom", "hallway"],
    tags: ["service_cabinet", "housekeeping", "linen", "hospitality", "storage", "domolux"],
    parts: [
      // Base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.92, y: 0.0, h: 0.06, color: "#141518", fix: "h" },
      // Dark fluted oak armoire carcass
      { shape: "box", x: 0.0, z: -0.02, w: 0.96, d: 0.92, y: 0.06, h: 0.92, color: "wood", finish: "dark", edges: true },
      // Lower double doors
      { shape: "box", x: 0.0, z: 0.44, w: 0.90, d: 0.04, y: 0.10, h: 0.45, color: "#252830", edges: true, fix: "d" },
      // Upper service staging open niche
      { shape: "box", x: 0.0, z: 0.10, w: 0.84, d: 0.68, y: 0.58, h: 0.36, color: "#dbe0e6", finish: "white", edges: true },
      // Brushed bronze vertical grab handles
      { shape: "cyl", x: -0.04, z: 0.48, w: 0.02, d: 0.02, y: 0.20, h: 0.25, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.04, z: 0.48, w: 0.02, d: 0.02, y: 0.20, h: 0.25, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.92 },
      { shape: "line", x1: -0.45, z1: 0.0, x2: 0.45, z2: 0.0 }
    ]
  },

  {
    num: 120,
    id: "luxury_unpacking_station",
    packId: "domolux.luxury_unpacking_station",
    name: {
      en: "Domolux Master Dressing Room Luggage Unpacking Credenza",
      de: "Domolux Koffer-Auspackstation mit Ankleidebank",
      ar: "منصة تفريغ وترتيب حقائب السفر الملكية المزدوجة دومولوكس"
    },
    collection: "Master Suites, Guest Hospitality and Nursery",
    collectionSlug: "06_Master_Suites_Hospitality",
    category: "Bedroom",
    description: "Multi-functional luggage unpacking and wardrobe staging island featuring dual quilted leather luggage platforms, fold-out garment flaps, solid bronze edging, and accessory drawers.",
    size: [1.50, 0.60, 0.85],
    mount: "floor",
    group: "bedroom",
    room: ["bedroom", "storage"],
    tags: ["unpacking_station", "luggage", "wardrobe", "bench", "dressing_room", "domolux"],
    parts: [
      // Brushed brass architectural base frame
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.94, y: 0.0, h: 0.12, color: "#c5a059", edges: "glow", fix: "h" },
      // Center drawer credenza cabinet
      { shape: "box", x: 0.0, z: 0.0, w: 0.42, d: 0.90, y: 0.12, h: 0.78, color: "#22252c", finish: "dark", edges: true },
      // Left low luggage resting wing (Saddle leather tufted top)
      { shape: "box", x: -0.35, z: 0.0, w: 0.26, d: 0.88, y: 0.12, h: 0.45, color: "#8b5a2b", finish: "cushion", edges: true },
      // Right low luggage resting wing (Saddle leather tufted top)
      { shape: "box", x: 0.35, z: 0.0, w: 0.26, d: 0.88, y: 0.12, h: 0.45, color: "#8b5a2b", finish: "cushion", edges: true },
      // Upper marble sorting tray top on center unit
      { shape: "box", x: 0.0, z: 0.0, w: 0.44, d: 0.92, y: 0.90, h: 0.08, color: "#dbe0e6", edges: true, fix: "h" },
      // Center drawer brushed brass pull bars
      { shape: "box", x: 0.0, z: 0.47, w: 0.22, d: 0.02, y: 0.40, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.47, w: 0.22, d: 0.02, y: 0.70, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.92 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.42, d: 0.90 }
    ]
  }
];
