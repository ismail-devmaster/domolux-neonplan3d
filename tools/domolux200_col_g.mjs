// COLLECTION G — PRIVATE MEDIA, LIBRARY AND GAME ROOMS (Products 121–140)
// High-Fidelity Audio, Private Cinema & Bespoke Residential Entertainment

export const COLLECTION_G_PRODUCTS = [
  {
    num: 121,
    id: "av_equipment_cabinet",
    packId: "domolux.av_equipment_cabinet",
    name: {
      en: "Domolux Reference Acoustically Ventilated AV Credenza",
      de: "Domolux High-End HiFi- & Medienkonsole",
      ar: "خزانة التجهيزات السمعية والبصرية عالية الأداء دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "Low-profile audiophile credenza featuring acoustic fabric speaker bays, infrared-pass smoked glass component doors, ultra-quiet cross-flow cooling fans, and vibration-isolated feet.",
    size: [1.80, 0.60, 0.85],
    mount: "floor",
    group: "living",
    room: ["living", "office"],
    tags: ["av_cabinet", "credenza", "hifi", "media", "cinema", "domolux"],
    parts: [
      // 4 heavy vibration-damped conical brass feet
      { shape: "cyl", x: -0.42, z: -0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.10, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.42, z: -0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.10, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: -0.42, z: 0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.10, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.42, z: 0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.10, color: "#c5a059", fix: "wdh" },
      // Heavy ebonized oak outer cabinet body
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.92, y: 0.10, h: 0.84, color: "#16171b", finish: "dark", edges: true },
      // Center acoustic cloth speaker compartment door
      { shape: "box", x: 0.0, z: 0.44, w: 0.34, d: 0.04, y: 0.14, h: 0.74, color: "#2d323b", finish: "fabric", edges: true, fix: "d" },
      // Left smoked-glass component door
      { shape: "box", x: -0.32, z: 0.44, w: 0.28, d: 0.04, y: 0.14, h: 0.74, color: "#1e2229", finish: "glass", edges: true, fix: "d" },
      // Right smoked-glass component door
      { shape: "box", x: 0.32, z: 0.44, w: 0.28, d: 0.04, y: 0.14, h: 0.74, color: "#1e2229", finish: "glass", edges: true, fix: "d" },
      // Top surface perimeter cable pass reveal
      { shape: "box", x: 0.0, z: -0.35, w: 0.40, d: 0.08, y: 0.94, h: 0.02, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.92 },
      { shape: "line", x1: -0.17, z1: -0.45, x2: -0.17, z2: 0.45 },
      { shape: "line", x1: 0.17, z1: -0.45, x2: 0.17, z2: 0.45 }
    ]
  },

  {
    num: 122,
    id: "reference_subwoofer",
    packId: "domolux.reference_subwoofer",
    name: {
      en: "Domolux Master Reference 15-Inch Cinema Subwoofer",
      de: "Domolux High-End Aktiv-Subwoofer",
      ar: "مضخم صوت جهوري مرجعي بقوة فائقة للسينما الخاصة دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "Sealed acoustic suspension reference subwoofer featuring a piano-gloss black lacquer cabinet, woven carbon fiber 15-inch driver cone, anodized aluminum trim ring, and isolation spikes.",
    size: [0.55, 0.65, 0.60],
    mount: "floor",
    group: "living",
    room: ["living", "office"],
    tags: ["subwoofer", "audio", "cinema", "speaker", "bass", "domolux"],
    parts: [
      // 4 heavy isolation spikes
      { shape: "cyl", x: -0.40, z: -0.40, w: 0.10, d: 0.10, y: 0.0, h: 0.08, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.40, z: -0.40, w: 0.10, d: 0.10, y: 0.0, h: 0.08, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: -0.40, z: 0.40, w: 0.10, d: 0.10, y: 0.0, h: 0.08, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.40, z: 0.40, w: 0.10, d: 0.10, y: 0.0, h: 0.08, color: "#c5a059", fix: "wdh" },
      // Piano-gloss lacquer MDF enclosure body
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.94, y: 0.08, h: 0.88, color: "#0d0e11", finish: "dark", edges: true },
      // Outer brushed aluminum driver bezel ring
      { shape: "cyl", x: 0.0, z: 0.46, w: 0.74, d: 0.74, y: 0.22, h: 0.04, axis: "z", color: "#c5a059", edges: "glow", fix: "wd" },
      // Carbon fiber concave woofer cone
      { shape: "cyl", x: 0.0, z: 0.44, w: 0.62, d: 0.62, y: 0.24, h: 0.04, axis: "z", color: "#25272e", fix: "wd" },
      // Inverted center dust cap
      { shape: "cyl", x: 0.0, z: 0.45, w: 0.22, d: 0.22, y: 0.38, h: 0.03, axis: "z", color: "#141518", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.94, d: 0.94 },
      { shape: "circle", x: 0.0, z: 0.44, r: 0.32 }
    ]
  },

  {
    num: 123,
    id: "center_channel_speaker",
    packId: "domolux.center_channel_speaker",
    name: {
      en: "Domolux Reference Tri-Amplified Center Channel Speaker",
      de: "Domolux 3-Wege Referenz-Center-Lautsprecher",
      ar: "مكبر صوت مركزي ثلاثي المنافذ للسينما المنزلية دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "Horizontal 3-way reference dialogue loudspeaker featuring dual 8-inch Rohacell bass drivers, a pure beryllium dome tweeter, and curved acoustic enclosure.",
    size: [0.85, 0.35, 0.28],
    mount: "surface",
    surface: true,
    group: "living",
    room: ["living", "office"],
    tags: ["center_speaker", "audio", "cinema", "hifi", "domolux"],
    parts: [
      // Curved acoustic baffle enclosure (Loft)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.96, d: 0.92, y: 0.04, h: 0.92, tx: 0.0, tz: -0.06, tw: 0.92, td: 0.84, color: "#141519", finish: "dark", edges: true },
      // Left bass woofer driver
      { shape: "cyl", x: -0.32, z: 0.44, w: 0.26, d: 0.26, y: 0.22, h: 0.03, axis: "z", color: "#c5a059", edges: "glow", fix: "wdh" },
      // Right bass woofer driver
      { shape: "cyl", x: 0.32, z: 0.44, w: 0.26, d: 0.26, y: 0.22, h: 0.03, axis: "z", color: "#c5a059", edges: "glow", fix: "wdh" },
      // Center midrange driver
      { shape: "cyl", x: 0.0, z: 0.44, w: 0.20, d: 0.20, y: 0.28, h: 0.03, axis: "z", color: "#3d424d", fix: "wdh" },
      // Pure beryllium dome tweeter (Top center)
      { shape: "cyl", x: 0.0, z: 0.44, w: 0.10, d: 0.10, y: 0.65, h: 0.03, axis: "z", color: "#d4af37", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.92 },
      { shape: "circle", x: -0.32, z: 0.44, r: 0.12 },
      { shape: "circle", x: 0.0, z: 0.44, r: 0.09 },
      { shape: "circle", x: 0.32, z: 0.44, r: 0.12 }
    ]
  },

  {
    num: 124,
    id: "surround_speaker_system",
    packId: "domolux.surround_speaker_system",
    name: {
      en: "Domolux Architectural Dipole Surround Column Loudspeaker",
      de: "Domolux Architektonischer Surround-Säulenlautsprecher",
      ar: "مكبر صوت محيطي عمودي بنظام التشتيت ثنائي القطب دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "Slender architectural surround sound monolith with dual-sided dipole ribbon tweeters, extruded bronze spine, and heavy weighted basalt base.",
    size: [0.35, 0.25, 0.95],
    mount: "floor",
    group: "living",
    room: ["living", "office"],
    tags: ["surround_speaker", "audio", "cinema", "column", "domolux"],
    parts: [
      // Basalt stone floor anchor base
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.92, y: 0.0, h: 0.08, color: "#181a1f", edges: true, fix: "h" },
      // Extruded bronze structural spine
      { shape: "box", x: 0.0, z: -0.25, w: 0.32, d: 0.28, y: 0.08, h: 0.88, color: "#c5a059", edges: "glow", fix: "wd" },
      // Acoustic enclosure column (Front)
      { shape: "box", x: 0.0, z: 0.10, w: 0.84, d: 0.52, y: 0.08, h: 0.86, color: "#22252c", finish: "dark", edges: true },
      // Acoustic cloth face grill (Satin black)
      { shape: "box", x: 0.0, z: 0.36, w: 0.78, d: 0.04, y: 0.12, h: 0.80, color: "#2d323b", finish: "fabric", fix: "d" },
      // Upper bronze cap plate
      { shape: "box", x: 0.0, z: 0.0, w: 0.86, d: 0.78, y: 0.94, h: 0.03, color: "#c5a059", edges: "glow", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.92, d: 0.92 },
      { shape: "circle", x: 0.0, z: 0.10, r: 0.22 }
    ]
  },

  {
    num: 125,
    id: "reference_vinyl_turntable",
    packId: "domolux.reference_vinyl_turntable",
    name: {
      en: "Domolux Reference High-Mass Audiophile Turntable",
      de: "Domolux High-Mass Referenz-Plattenspieler",
      ar: "مشغل أسطوانات فينيل تناظري مرجعي فائق الدقة دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "High-mass reference analog turntable featuring a mirror-polished 60mm solid aerospace aluminum platter, magnetic levitation bearing, 12-inch carbon fiber tonearm, and brass sub-chassis.",
    size: [0.50, 0.45, 0.25],
    mount: "surface",
    surface: true,
    group: "living",
    room: ["living", "office"],
    tags: ["turntable", "vinyl", "analog", "audiophile", "hifi", "domolux"],
    parts: [
      // 3 magnetic isolation feet
      { shape: "cyl", x: -0.38, z: 0.30, w: 0.12, d: 0.12, y: 0.0, h: 0.15, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.38, z: 0.30, w: 0.12, d: 0.12, y: 0.0, h: 0.15, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.0, z: -0.38, w: 0.12, d: 0.12, y: 0.0, h: 0.15, color: "#c5a059", fix: "wdh" },
      // Solid CNC-machined aerospace alloy plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.92, y: 0.15, h: 0.22, color: "#1c1e24", finish: "dark", edges: true },
      // Massive 60mm aluminum turntable platter
      { shape: "cyl", x: -0.15, z: 0.0, w: 0.62, d: 0.62, y: 0.37, h: 0.24, color: "metal", edges: "glow", fix: "h" },
      // Vinyl record disc on platter
      { shape: "cyl", x: -0.15, z: 0.0, w: 0.58, d: 0.58, y: 0.61, h: 0.03, color: "#000000", fix: "h" },
      // Record center brass stabilizer weight
      { shape: "cyl", x: -0.15, z: 0.0, w: 0.14, d: 0.14, y: 0.64, h: 0.16, color: "#c5a059", edges: "glow", fix: "wdh" },
      // 12-inch carbon fiber tonearm assembly
      { shape: "box", x: 0.32, z: -0.18, w: 0.12, d: 0.12, y: 0.37, h: 0.28, color: "#c5a059", fix: "wd" },
      { shape: "cyl", x: 0.24, z: 0.05, w: 0.03, d: 0.03, y: 0.60, h: 0.44, axis: "z", color: "#363a42", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.94, d: 0.92 },
      { shape: "circle", x: -0.15, z: 0.0, r: 0.31 },
      { shape: "line", x1: 0.32, z1: -0.18, x2: 0.15, z2: 0.22 }
    ]
  },

  {
    num: 126,
    id: "vinyl_archive_cabinet",
    packId: "domolux.vinyl_archive_cabinet",
    name: {
      en: "Domolux Collector's Audiophile Vinyl Record Archive",
      de: "Domolux Architektonisches Schallplatten-Archiv",
      ar: "دولاب أرشفة وحفظ أسطوانات الفينيل الموسيقية دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Storage",
    description: "Precision-engineered walnut vinyl library storing up to 800 LPs across vertical bays with flip-forward browsing bins, integrated warm LED shelf wash, and brass dividing rods.",
    size: [1.20, 0.45, 1.40],
    mount: "floor",
    group: "storage",
    room: ["living", "office"],
    tags: ["vinyl_storage", "lp_archive", "audio", "shelving", "walnut", "domolux"],
    parts: [
      // Base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.94, y: 0.0, h: 0.06, color: "#141518", fix: "h" },
      // Solid American walnut outer carcass
      { shape: "box", x: 0.0, z: -0.02, w: 0.98, d: 0.92, y: 0.06, h: 0.92, color: "wood", finish: "dark", edges: true },
      // Central vertical dividing partition
      { shape: "box", x: 0.0, z: 0.04, w: 0.04, d: 0.82, y: 0.08, h: 0.88, color: "#2d1f14", fix: "w" },
      // Lower record storage bay
      { shape: "box", x: 0.0, z: 0.05, w: 0.90, d: 0.80, y: 0.08, h: 0.40, color: "#111215" },
      // Upper record storage bay
      { shape: "box", x: 0.0, z: 0.05, w: 0.90, d: 0.80, y: 0.52, h: 0.40, color: "#111215" },
      // Mid-shelf horizontal separator
      { shape: "box", x: 0.0, z: 0.04, w: 0.92, d: 0.84, y: 0.48, h: 0.04, color: "#3d2b1f", finish: "wood", fix: "h" },
      // Brushed brass vertical record divider rods (Front)
      { shape: "cyl", x: -0.24, z: 0.42, w: 0.02, d: 0.02, y: 0.08, h: 0.40, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "cyl", x: 0.24, z: 0.42, w: 0.02, d: 0.02, y: 0.08, h: 0.40, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "cyl", x: -0.24, z: 0.42, w: 0.02, d: 0.02, y: 0.52, h: 0.40, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "cyl", x: 0.24, z: 0.42, w: 0.02, d: 0.02, y: 0.52, h: 0.40, color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.92 },
      { shape: "line", x1: 0.0, z1: -0.45, x2: 0.0, z2: 0.45 }
    ]
  },

  {
    num: 127,
    id: "multiroom_audio_distribution_console",
    packId: "domolux.multiroom_audio_distribution_console",
    name: {
      en: "Domolux Multi-Zone Audiophile Distribution Rack",
      de: "Domolux Multiroom-Audio-Verteilerrack",
      ar: "برج التوزيع الصوتي الذكي متعدد المناطق دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "Floorstanding 19-inch equipment tower housing multi-zone matrix digital amplifiers, Dante audio network streamers, touch diagnostic LCD screen, and perforated ventilation panels.",
    size: [0.60, 0.50, 1.60],
    mount: "floor",
    group: "living",
    room: ["living", "office", "storage"],
    tags: ["audio_rack", "multiroom", "amplifier", "dante", "av", "domolux"],
    parts: [
      // Base caster / foot platform
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.94, y: 0.0, h: 0.06, color: "#111215", fix: "h" },
      // Heavy structural extruded steel frame
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.92, y: 0.06, h: 0.92, color: "#1f2229", finish: "dark", edges: true },
      // Smoked acrylic front glass door
      { shape: "box", x: 0.0, z: 0.44, w: 0.88, d: 0.03, y: 0.08, h: 0.88, color: "#161c24", finish: "glass", edges: true, fix: "d" },
      // Rack unit 1: Master Audio Matrix Processor with OLED
      { shape: "box", x: 0.0, z: 0.35, w: 0.82, d: 0.15, y: 0.78, h: 0.10, color: "#2b2f38", edges: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.43, w: 0.35, d: 0.02, y: 0.81, h: 0.04, color: "#00e5ff", glow: true, fix: "wdh" },
      // Rack unit 2: Multi-Zone Power Amplifier 1 (Blue meter bars)
      { shape: "box", x: 0.0, z: 0.35, w: 0.82, d: 0.15, y: 0.62, h: 0.12, color: "#252830", edges: true, fix: "h" },
      // Rack unit 3: Multi-Zone Power Amplifier 2
      { shape: "box", x: 0.0, z: 0.35, w: 0.82, d: 0.15, y: 0.46, h: 0.12, color: "#252830", edges: true, fix: "h" },
      // Rack unit 4: High-Current Pure Power Conditioner
      { shape: "box", x: 0.0, z: 0.35, w: 0.82, d: 0.15, y: 0.30, h: 0.12, color: "#252830", edges: true, fix: "h" },
      // Rack unit 5: Network Audio Streamers
      { shape: "box", x: 0.0, z: 0.35, w: 0.82, d: 0.15, y: 0.14, h: 0.12, color: "#252830", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.94 },
      { shape: "rect", x: 0.0, z: 0.35, w: 0.82, d: 0.20 }
    ]
  },

  {
    num: 128,
    id: "sculptural_acoustic_diffuser",
    packId: "domolux.sculptural_acoustic_diffuser",
    name: {
      en: "Domolux Quadratic Residue Sculptural Acoustic Wall Diffuser",
      de: "Domolux Architektonischer Akustik-Diffusor QRD",
      ar: "لوح التشتيت الصوتي المعماري ثلاثي الأبعاد دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Decor",
    description: "Mathematically sequenced 2D QRD quadratic residue acoustic sound diffuser constructed from solid American walnut and champagne brass wells for precise flutter-echo elimination.",
    size: [0.60, 0.15, 1.20],
    mount: "wall",
    wall_y: 1.0,
    group: "decor",
    room: ["living", "office"],
    tags: ["acoustic_diffuser", "qrd", "soundproofing", "walnut", "wall_art", "domolux"],
    parts: [
      // Wall mounting chassis backplate
      { shape: "box", x: 0.0, z: -0.42, w: 0.96, d: 0.08, y: 0.02, h: 0.96, color: "#181a1f", fix: "d" },
      // Perimeter walnut outer frame box
      { shape: "box", x: 0.0, z: -0.05, w: 0.98, d: 0.74, y: 0.0, h: 0.98, color: "#362619", finish: "wood", edges: true },
      // Diffuser well blocks of varying heights (Mathematical algorithmic relief)
      { shape: "box", x: -0.32, z: 0.10, w: 0.18, d: 0.45, y: 0.08, h: 0.84, color: "#543c2b", finish: "wood", edges: true },
      { shape: "box", x: -0.12, z: 0.22, w: 0.18, d: 0.65, y: 0.08, h: 0.84, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.12, z: -0.05, w: 0.18, d: 0.30, y: 0.08, h: 0.84, color: "#6a4e37", finish: "wood", edges: true },
      { shape: "box", x: 0.32, z: 0.18, w: 0.18, d: 0.55, y: 0.08, h: 0.84, color: "#543c2b", finish: "wood", edges: true }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.88 },
      { shape: "line", x1: -0.22, z1: -0.44, x2: -0.22, z2: 0.44 },
      { shape: "line", x1: 0.0, z1: -0.44, x2: 0.0, z2: 0.44 },
      { shape: "line", x1: 0.22, z1: -0.44, x2: 0.22, z2: 0.44 }
    ]
  },

  {
    num: 129,
    id: "acoustic_bass_trap_tower",
    packId: "domolux.acoustic_bass_trap_tower",
    name: {
      en: "Domolux Corner Architectural Acoustic Bass-Trap Monolith",
      de: "Domolux Eck-Basstrap Akustiksäule",
      ar: "عمود مصيدة الترددات المنخفضة الزاوي لعزل الصوت دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Decor",
    description: "Floor-to-ceiling corner-fit membrane bass absorber tower with high-density acoustic core, tailored charcoal fabric face, and brushed bronze corner revelation trims.",
    size: [0.50, 0.50, 2.20],
    mount: "floor",
    group: "decor",
    room: ["living", "office"],
    tags: ["bass_trap", "acoustic", "cinema", "corner", "soundproofing", "domolux"],
    parts: [
      // Triangular corner base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.94, y: 0.0, h: 0.06, color: "#141518", fix: "h" },
      // Corner structural absorption body
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.92, y: 0.06, h: 0.90, color: "#23262d", finish: "fabric", edges: true },
      // Top ceiling cap plate
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.94, y: 0.96, h: 0.04, color: "#141518", fix: "h" },
      // Vertical champagne brass accent corner trims
      { shape: "box", x: -0.44, z: 0.44, w: 0.03, d: 0.03, y: 0.06, h: 0.90, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.44, z: 0.44, w: 0.03, d: 0.03, y: 0.06, h: 0.90, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.0, z: 0.46, w: 0.03, d: 0.03, y: 0.06, h: 0.90, color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.94, d: 0.94 },
      { shape: "line", x1: -0.44, z1: 0.44, x2: 0.44, z2: 0.44 }
    ]
  },

  {
    num: 130,
    id: "luxury_billiards_table",
    packId: "domolux.luxury_billiards_table",
    name: {
      en: "Domolux Grand Tournament Slate Billiards Table",
      de: "Domolux Luxus-Turnier-Billardtisch",
      ar: "طاولة البلياردو والسنوكر الملكية بقاعدة خشب الجوز وقماش الحرير دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "9-foot professional tournament pool table crafted from three-piece Italian slate, solid fluted walnut pedestal legs, Simonis tournament wool felt, and hand-stitched leather drop pockets.",
    size: [2.80, 1.55, 0.85],
    mount: "floor",
    group: "living",
    room: ["living"],
    tags: ["billiards", "pool_table", "games", "walnut", "luxury", "domolux"],
    parts: [
      // 4 massive fluted walnut pedestal legs with brass bases
      { shape: "box", x: -0.38, z: -0.36, w: 0.14, d: 0.14, y: 0.0, h: 0.68, color: "#362619", finish: "wood", edges: true, fix: "wd" },
      { shape: "box", x: 0.38, z: -0.36, w: 0.14, d: 0.14, y: 0.0, h: 0.68, color: "#362619", finish: "wood", edges: true, fix: "wd" },
      { shape: "box", x: -0.38, z: 0.36, w: 0.14, d: 0.14, y: 0.0, h: 0.68, color: "#362619", finish: "wood", edges: true, fix: "wd" },
      { shape: "box", x: 0.38, z: 0.36, w: 0.14, d: 0.14, y: 0.0, h: 0.68, color: "#362619", finish: "wood", edges: true, fix: "wd" },
      // Heavy structural support under-apron chassis
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.88, y: 0.62, h: 0.14, color: "#22170f", edges: true },
      // Italian slate bed playing surface (Charcoal / Petroleum felt)
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.82, y: 0.76, h: 0.06, color: "#1e3a47", finish: "fabric", edges: true },
      // Perimeter walnut cushion bumper rails
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.94, y: 0.82, h: 0.12, color: "#422e1d", finish: "wood", edges: true, fix: "h" },
      // 6 recessed leather drop pockets and brass pocket caps
      { shape: "cyl", x: -0.46, z: -0.44, w: 0.08, d: 0.08, y: 0.82, h: 0.14, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.46, z: -0.44, w: 0.08, d: 0.08, y: 0.82, h: 0.14, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: -0.46, z: 0.44, w: 0.08, d: 0.08, y: 0.82, h: 0.14, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.46, z: 0.44, w: 0.08, d: 0.08, y: 0.82, h: 0.14, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.0, z: -0.45, w: 0.07, d: 0.07, y: 0.82, h: 0.14, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.0, z: 0.45, w: 0.07, d: 0.07, y: 0.82, h: 0.14, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.94 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.88, d: 0.82 }
    ]
  },

  {
    num: 131,
    id: "designer_foosball_table",
    packId: "domolux.designer_foosball_table",
    name: {
      en: "Domolux Glass and Anodized Alloy Designer Foosball Table",
      de: "Domolux Designer-Tischkicker aus Glas & Metall",
      ar: "طاولة كرة قدم الطاولة الفاخرة بالزجاج والألمنيوم المصقول دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "Contemporary foosball table with extra-clear tempered glass playing pitch, CNC-machined aerospace aluminum players, chrome rods with timber grips, and smoked glass side aprons.",
    size: [1.50, 0.95, 0.90],
    mount: "floor",
    group: "living",
    room: ["living"],
    tags: ["foosball", "table_football", "games", "glass", "luxury", "domolux"],
    parts: [
      // 4 angled architectural leg blades
      { shape: "box", x: -0.42, z: -0.40, w: 0.06, d: 0.08, y: 0.0, h: 0.70, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.42, z: -0.40, w: 0.06, d: 0.08, y: 0.0, h: 0.70, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: -0.42, z: 0.40, w: 0.06, d: 0.08, y: 0.0, h: 0.70, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.42, z: 0.40, w: 0.06, d: 0.08, y: 0.0, h: 0.70, color: "#c5a059", edges: "glow", fix: "wd" },
      // Tempered glass perimeter apron box
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.86, y: 0.65, h: 0.28, color: "#2e3b4e", finish: "glass", edges: true },
      // Pure float glass playing pitch floor
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.78, y: 0.66, h: 0.02, color: "#e8ecef", finish: "glass", edges: true, fix: "h" },
      // Horizontal chrome player rods (4 pairs represented by traverse cylinders)
      { shape: "cyl", x: 0.0, z: -0.25, w: 0.02, d: 0.02, y: 0.82, h: 0.98, axis: "z", color: "metal", fix: "wd" },
      { shape: "cyl", x: 0.0, z: -0.08, w: 0.02, d: 0.02, y: 0.82, h: 0.98, axis: "z", color: "metal", fix: "wd" },
      { shape: "cyl", x: 0.0, z: 0.08, w: 0.02, d: 0.02, y: 0.82, h: 0.98, axis: "z", color: "metal", fix: "wd" },
      { shape: "cyl", x: 0.0, z: 0.25, w: 0.02, d: 0.02, y: 0.82, h: 0.98, axis: "z", color: "metal", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.86 },
      { shape: "line", x1: 0.0, z1: -0.43, x2: 0.0, z2: 0.43 }
    ]
  },

  {
    num: 132,
    id: "convertible_ping_pong_table",
    packId: "domolux.convertible_ping_pong_table",
    name: {
      en: "Domolux Minimalist Executive Table Tennis and Conference Table",
      de: "Domolux Designer-Tischtennistisch & Konferenztisch",
      ar: "طاولة تنس الطاولة والاجتماعات الفاخرة القابلة للتحول دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "Multi-functional tournament table-tennis table that transforms into an executive conference table, featuring a matte black Fenix top, perforated brushed brass net, and solid walnut legs.",
    size: [2.74, 1.52, 0.76],
    mount: "floor",
    group: "living",
    room: ["living", "office"],
    tags: ["table_tennis", "ping_pong", "games", "conference", "luxury", "domolux"],
    parts: [
      // 4 solid walnut trestle legs with brass shoes
      { shape: "box", x: -0.40, z: -0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.90, color: "#362619", finish: "wood", fix: "wd" },
      { shape: "box", x: 0.40, z: -0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.90, color: "#362619", finish: "wood", fix: "wd" },
      { shape: "box", x: -0.40, z: 0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.90, color: "#362619", finish: "wood", fix: "wd" },
      { shape: "box", x: 0.40, z: 0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.90, color: "#362619", finish: "wood", fix: "wd" },
      // Matte black anti-fingerprint Fenix playing top
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.90, h: 0.06, color: "#141518", edges: true, fix: "h" },
      // Center dividing court line (Brushed brass inlay)
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.015, y: 0.96, h: 0.01, color: "#c5a059", edges: "glow", fix: "d" },
      // Perforated architectural brushed brass net
      { shape: "box", x: 0.0, z: 0.0, w: 0.02, d: 0.98, y: 0.96, h: 0.18, color: "#c5a059", edges: "glow", fix: "w" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "line", x1: 0.0, z1: -0.48, x2: 0.0, z2: 0.48 }
    ]
  },

  {
    num: 133,
    id: "private_poker_table",
    packId: "domolux.private_poker_table",
    name: {
      en: "Domolux High-Stakes Oval Casino Poker Table",
      de: "Domolux Luxus-Pokertisch mit Leder-Armauflage",
      ar: "طاولة البوكر والألعاب الخاصة البيضاوية بالجلد الطبيعي دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "Casino-grade 10-player oval gaming table with padded full-grain Italian leather armrest rail, waterproof micro-suede suited cloth, integrated brass cupholders, and fluted oak twin pedestals.",
    size: [2.20, 1.15, 0.78],
    mount: "floor",
    group: "living",
    room: ["living"],
    tags: ["poker_table", "casino", "games", "leather", "luxury", "domolux"],
    parts: [
      // Left fluted oak pedestal base
      { shape: "cyl", x: -0.28, z: 0.0, w: 0.35, d: 0.35, y: 0.0, h: 0.82, color: "#362619", finish: "wood", fix: "wd" },
      // Right fluted oak pedestal base
      { shape: "cyl", x: 0.28, z: 0.0, w: 0.35, d: 0.35, y: 0.0, h: 0.82, color: "#362619", finish: "wood", fix: "wd" },
      // Under-table structural connecting stretcher beam
      { shape: "box", x: 0.0, z: 0.0, w: 0.55, d: 0.12, y: 0.25, h: 0.08, color: "#c5a059", edges: "glow", fix: "dh" },
      // Main oval gaming bed table structure
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.90, y: 0.82, h: 0.06, color: "#181a1f", edges: true, fix: "h" },
      // Suited green micro-suede playing speed-felt
      { shape: "box", x: 0.0, z: 0.0, w: 0.84, d: 0.78, y: 0.88, h: 0.02, color: "#1b4332", finish: "fabric", edges: true, fix: "h" },
      // Padded perimeter black leather armrest bumper ring
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.88, h: 0.12, color: "#1c1e22", finish: "cushion", edges: true, fix: "h" },
      // Brass chip tray and dealer position recess
      { shape: "box", x: 0.0, z: -0.36, w: 0.25, d: 0.10, y: 0.90, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.84, d: 0.78 }
    ]
  },

  {
    num: 134,
    id: "luxury_chess_table",
    packId: "domolux.luxury_chess_table",
    name: {
      en: "Domolux Grandmaster Inlaid Chess and Strategy Table",
      de: "Domolux Meister-Schachtisch aus Edelhölzern",
      ar: "طاولة الشطرنج الاستراتيجية الملكية بالخشب المطعم دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "Artisanal game table with marquetry Macassar ebony and bird's eye maple chessboard top, dual velvet-lined piece storage drawers with weighted brass chessmen, and sculptural tripod base.",
    size: [0.85, 0.85, 0.76],
    mount: "floor",
    group: "living",
    room: ["living", "office"],
    tags: ["chess_table", "board_games", "marquetry", "ebony", "strategy", "domolux"],
    parts: [
      // Central pedestal shaft with bronze tripod feet
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.16, d: 0.16, y: 0.0, h: 0.84, color: "#c5a059", edges: "glow", fix: "wd" },
      // 3 tripod floor spreading feet
      { shape: "box", x: 0.0, z: 0.0, w: 0.76, d: 0.76, y: 0.0, h: 0.08, color: "#362619", finish: "wood", edges: true, fix: "h" },
      // Main table top carcass containing piece drawers
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.84, h: 0.12, color: "#22170f", finish: "dark", edges: true, fix: "h" },
      // Ebony & Maple inlaid 64-square chessboard playing field
      { shape: "box", x: 0.0, z: 0.0, w: 0.72, d: 0.72, y: 0.96, h: 0.02, color: "#dfd2b8", edges: true, fix: "h" },
      // Dark squares grid pattern representation
      { shape: "box", x: 0.0, z: 0.0, w: 0.68, d: 0.68, y: 0.97, h: 0.01, color: "#2a1810", fix: "h" },
      // Satin bronze drawer pull knobs
      { shape: "cyl", x: 0.0, z: 0.48, w: 0.03, d: 0.03, y: 0.88, h: 0.03, axis: "z", color: "#c5a059", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.96 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.72, d: 0.72 }
    ]
  },

  {
    num: 135,
    id: "bespoke_arcade_cabinet",
    packId: "domolux.bespoke_arcade_cabinet",
    name: {
      en: "Domolux Nostalgia Bespoke Luxury Retro Arcade Cabinet",
      de: "Domolux Exklusiver Retro-Spielautomat Arcade",
      ar: "جهاز ألعاب الآركيد الكلاسيكي الفاخر بهيكل الخشب المصقول دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "Custom upright arcade machine constructed with piano-black lacquered sides, walnut front fascia, 28-inch curved CRT-filter OLED display, Sanwa arcade buttons, and backlit marquee.",
    size: [0.75, 0.85, 1.75],
    mount: "floor",
    group: "living",
    room: ["living"],
    tags: ["arcade", "retro_gaming", "cabinet", "games", "entertainment", "domolux"],
    parts: [
      // Base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.92, y: 0.0, h: 0.08, color: "#141518", fix: "h" },
      // Lower cabinet body (Piano gloss black)
      { shape: "box", x: 0.0, z: -0.05, w: 0.94, d: 0.88, y: 0.08, h: 0.52, color: "#1a1c22", finish: "dark", edges: true },
      // Angled control deck with dual joysticks & 12 buttons
      { shape: "box", x: 0.0, z: 0.28, w: 0.96, d: 0.38, y: 0.56, h: 0.12, color: "#282a30", edges: true },
      // Left and right brass joysticks
      { shape: "cyl", x: -0.25, z: 0.28, w: 0.04, d: 0.04, y: 0.68, h: 0.10, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.15, z: 0.28, w: 0.04, d: 0.04, y: 0.68, h: 0.10, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Recessed 28-inch curved OLED arcade screen
      { shape: "box", x: 0.0, z: 0.02, w: 0.84, d: 0.12, y: 0.68, h: 0.22, color: "#00e5ff", glow: true, edges: true },
      // Top illuminated glass arcade marquee banner
      { shape: "box", x: 0.0, z: 0.22, w: 0.92, d: 0.18, y: 0.90, h: 0.08, color: "#fff3cc", glow: true, edges: true }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.94, d: 0.88 },
      { shape: "rect", x: 0.0, z: 0.28, w: 0.96, d: 0.38 }
    ]
  },

  {
    num: 136,
    id: "racing_simulator_cockpit",
    packId: "domolux.racing_simulator_cockpit",
    name: {
      en: "Domolux Full-Motion Carbon-Fiber GT Racing Simulator",
      de: "Domolux Motion-Rennsimulator mit Carbon-Chassis",
      ar: "جهاز محاكاة سباقات السيارات بالحركة الكاملة وهيكل ألياف الكربون دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "Professional FIA-licensed dynamic motion chassis featuring 4-axis D-BOX actuators, carbon fiber monocoque frame, Sparco bucket seat, Fanatec direct-drive wheel, and triple-screen curved rig.",
    size: [0.75, 1.85, 1.15],
    mount: "floor",
    group: "living",
    room: ["living", "office"],
    tags: ["racing_sim", "simulator", "cockpit", "motion", "motorsport", "domolux"],
    parts: [
      // Motion platform chassis frame
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.96, y: 0.0, h: 0.12, color: "#141518", edges: true, fix: "h" },
      // 4 D-BOX electric motion actuators (Cylinders at corners)
      { shape: "cyl", x: -0.38, z: -0.42, w: 0.12, d: 0.12, y: 0.0, h: 0.20, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.38, z: -0.42, w: 0.12, d: 0.12, y: 0.0, h: 0.20, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: -0.38, z: 0.42, w: 0.12, d: 0.12, y: 0.0, h: 0.20, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.38, z: 0.42, w: 0.12, d: 0.12, y: 0.0, h: 0.20, color: "#c5a059", fix: "wdh" },
      // Carbon fiber bucket racing seat (Sparco style)
      { shape: "box", x: 0.0, z: -0.22, w: 0.68, d: 0.44, y: 0.18, h: 0.55, color: "#22252c", finish: "dark", edges: true },
      // Direct-drive steering wheelbase column
      { shape: "box", x: 0.0, z: 0.18, w: 0.32, d: 0.22, y: 0.25, h: 0.45, color: "#1b1d24", edges: true },
      // Quick-release formula steering wheel with shift lights
      { shape: "cyl", x: 0.0, z: 0.14, w: 0.32, d: 0.32, y: 0.62, h: 0.04, axis: "y", color: "#c5a059", edges: "glow", fix: "wdh" },
      // Inverted hydraulic load-cell pedal box (Front)
      { shape: "box", x: 0.0, z: 0.42, w: 0.45, d: 0.22, y: 0.12, h: 0.24, color: "metal", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.88, d: 0.96 },
      { shape: "circle", x: 0.0, z: 0.14, r: 0.16 }
    ]
  },

  {
    num: 137,
    id: "flight_simulator_cockpit",
    packId: "domolux.flight_simulator_cockpit",
    name: {
      en: "Domolux Aviator Executive Glass-Cockpit Flight Simulator",
      de: "Domolux Professioneller Flugsimulator mit Glascockpit",
      ar: "جهاز محاكاة الطيران التنفيذي بشاشات الملاحة الرقمية دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "Private pilot simulation cockpit featuring twin force-feedback flight yokes, dual throttle quadrant, Garmin G1000 glass avionics screens, and ergonomic sheepskin pilot seats.",
    size: [0.95, 1.65, 1.25],
    mount: "floor",
    group: "living",
    room: ["living", "office"],
    tags: ["flight_sim", "aviation", "simulator", "cockpit", "cockpit_rig", "domolux"],
    parts: [
      // Cockpit floor structural tub platform
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.0, h: 0.12, color: "#15171d", edges: true, fix: "h" },
      // Ergonomic high-back sheepskin pilot chair
      { shape: "box", x: 0.0, z: -0.22, w: 0.65, d: 0.45, y: 0.12, h: 0.65, color: "#ded9d2", finish: "cushion", edges: true },
      // Front avionics instrument glare shield dashboard
      { shape: "box", x: 0.0, z: 0.32, w: 0.92, d: 0.35, y: 0.22, h: 0.62, color: "#22252c", finish: "dark", edges: true },
      // Garmin G1000 Primary Flight Display (Cyan artificial horizon)
      { shape: "box", x: -0.22, z: 0.36, w: 0.32, d: 0.02, y: 0.55, h: 0.22, color: "#00b4d8", glow: true, edges: true, fix: "d" },
      // Garmin G1000 Multi-Function Display (Navigation map)
      { shape: "box", x: 0.22, z: 0.36, w: 0.32, d: 0.02, y: 0.55, h: 0.22, color: "#2ec4b6", glow: true, edges: true, fix: "d" },
      // Aviator control yoke column and dual horn grips
      { shape: "cyl", x: 0.0, z: 0.15, w: 0.05, d: 0.05, y: 0.45, h: 0.25, color: "#111215", fix: "wd" },
      { shape: "box", x: 0.0, z: 0.10, w: 0.35, d: 0.04, y: 0.62, h: 0.12, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.96 },
      { shape: "rect", x: 0.0, z: 0.32, w: 0.92, d: 0.35 }
    ]
  },

  {
    num: 138,
    id: "immersive_golf_simulator",
    packId: "domolux.immersive_golf_simulator",
    name: {
      en: "Domolux PGA-Grade High-Definition Golf Simulator Enclosure",
      de: "Domolux PGA-Golfsimulator mit Prallwand & Kunstrasen",
      ar: "مقصورة محاكاة رياضة الجولف التفاعلية المتكاملة دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "Complete room-scale golf simulation suite featuring heavy acoustic ballistic baffles, tensioned HD impact projection screen, multi-surface fairway hitting turf, and dual high-speed tracking cameras.",
    size: [3.60, 2.50, 2.80],
    mount: "floor",
    group: "living",
    room: ["living"],
    tags: ["golf_sim", "golf", "simulator", "sports", "entertainment", "domolux"],
    parts: [
      // Turf hitting floor platform
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.0, h: 0.06, color: "#1e222a", fix: "h" },
      // Lush synthetic fairway hitting turf
      { shape: "box", x: 0.0, z: 0.08, w: 0.92, d: 0.82, y: 0.06, h: 0.02, color: "#2d6a4f", edges: true, fix: "h" },
      // Left acoustic wall enclosure padding
      { shape: "box", x: -0.47, z: -0.05, w: 0.05, d: 0.88, y: 0.06, h: 0.94, color: "#16171b", finish: "dark", edges: true, fix: "w" },
      // Right acoustic wall enclosure padding
      { shape: "box", x: 0.47, z: -0.05, w: 0.05, d: 0.88, y: 0.06, h: 0.94, color: "#16171b", finish: "dark", edges: true, fix: "w" },
      // Ballistic tensioned projection impact screen (Rear)
      { shape: "box", x: 0.0, z: -0.47, w: 0.92, d: 0.04, y: 0.06, h: 0.92, color: "#f8f9fa", glow: true, edges: true, fix: "d" },
      // Ceiling acoustic canopy baffle
      { shape: "box", x: 0.0, z: -0.05, w: 0.96, d: 0.88, y: 0.96, h: 0.04, color: "#16171b", fix: "h" },
      // Overhead optical launch monitor sensor pod
      { shape: "box", x: 0.0, z: 0.15, w: 0.35, d: 0.12, y: 0.94, h: 0.04, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.98 },
      { shape: "rect", x: 0.0, z: 0.08, w: 0.92, d: 0.82 },
      { shape: "line", x1: -0.46, z1: -0.47, x2: 0.46, z2: -0.47 }
    ]
  },

  {
    num: 139,
    id: "private_bowling_lane",
    packId: "domolux.private_bowling_lane",
    name: {
      en: "Domolux Estate Private Single-Lane Bowling Alley Module",
      de: "Domolux Private Bowlingbahn-Sektion",
      ar: "مسار البولينج الخاص للفيلات الفاخرة بخشب القيقب دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "Authentic residential bowling installation with synthetic rock-maple approach and lane deck, polyurethane gutters, concealed underground ball return track, and pin deck.",
    size: [1.80, 4.50, 0.65],
    mount: "floor",
    group: "living",
    room: ["living"],
    tags: ["bowling", "bowling_alley", "games", "estate", "luxury", "domolux"],
    parts: [
      // Base structural foundation trench
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.0, h: 0.14, color: "#141518", fix: "h" },
      // Central synthetic maple polished lane deck
      { shape: "box", x: 0.0, z: 0.0, w: 0.62, d: 0.96, y: 0.14, h: 0.08, color: "#d4a373", finish: "wood", edges: true },
      // Left ball gutter channel (Recessed dark)
      { shape: "box", x: -0.38, z: 0.0, w: 0.14, d: 0.96, y: 0.12, h: 0.06, color: "#1a1c22", fix: "w" },
      // Right ball gutter channel (Recessed dark)
      { shape: "box", x: 0.38, z: 0.0, w: 0.14, d: 0.96, y: 0.12, h: 0.06, color: "#1a1c22", fix: "w" },
      // 10 bowling pin cluster representation at far end
      { shape: "cyl", x: 0.0, z: -0.42, w: 0.08, d: 0.08, y: 0.22, h: 0.22, color: "#ffffff", edges: true, fix: "wdh" },
      { shape: "cyl", x: -0.12, z: -0.45, w: 0.08, d: 0.08, y: 0.22, h: 0.22, color: "#ffffff", edges: true, fix: "wdh" },
      { shape: "cyl", x: 0.12, z: -0.45, w: 0.08, d: 0.08, y: 0.22, h: 0.22, color: "#ffffff", edges: true, fix: "wdh" },
      // Ball return terminal hood (Near end)
      { shape: "box", x: 0.38, z: 0.40, w: 0.16, d: 0.16, y: 0.14, h: 0.35, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.98 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.62, d: 0.96 }
    ]
  },

  {
    num: 140,
    id: "indoor_putting_green",
    packId: "domolux.indoor_putting_green",
    name: {
      en: "Domolux Contour-Engineered Architectural Putting Green",
      de: "Domolux Architektonisches Indoor-Putting-Green",
      ar: "مسار تدريب الجولف الداخلي المعماري بالعشب الطبي دومولوكس"
    },
    collection: "Private Media, Library and Game Rooms",
    collectionSlug: "07_Private_Media_Games",
    category: "Living",
    description: "Custom contoured residential putting green featuring adjustable break underlayment, PGA Stimpmeter 11 turf, three precision solid brass cup liners, and fluted oak border surround.",
    size: [3.20, 1.40, 0.15],
    mount: "floor",
    group: "living",
    room: ["living", "office"],
    tags: ["putting_green", "golf", "turf", "sports", "games", "domolux"],
    parts: [
      // Fluted solid walnut perimeter frame rim
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.0, h: 0.12, color: "#362619", finish: "wood", edges: true, fix: "h" },
      // High-speed Stimpmeter 11 putting turf
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.90, y: 0.06, h: 0.06, color: "#2d6a4f", edges: true, fix: "h" },
      // Brass target hole cup 1 (Far left)
      { shape: "cyl", x: -0.36, z: -0.15, w: 0.10, d: 0.10, y: 0.06, h: 0.08, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Brass target hole cup 2 (Center)
      { shape: "cyl", x: -0.10, z: 0.18, w: 0.10, d: 0.10, y: 0.06, h: 0.08, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Brass target hole cup 3 (Far right)
      { shape: "cyl", x: 0.36, z: -0.10, w: 0.10, d: 0.10, y: 0.06, h: 0.08, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "circle", x: -0.36, z: -0.15, r: 0.05 },
      { shape: "circle", x: -0.10, z: 0.18, r: 0.05 },
      { shape: "circle", x: 0.36, z: -0.10, r: 0.05 }
    ]
  }
];
