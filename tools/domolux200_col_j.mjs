// COLLECTION J — LAUNDRY, SERVICE ROOMS, WORKSHOPS AND SPECIALIST SYSTEMS (Products 181–200)
// Estate Infrastructure, Professional Service Suites & Architectural Conservatories

export const COLLECTION_J_PRODUCTS = [
  {
    num: 181,
    id: "laundry_sorting_island",
    packId: "domolux.laundry_sorting_island",
    name: {
      en: "Domolux Estate Laundry Sorting and Folding Island",
      de: "Domolux Wäsche-Sortier- & Faltinsel",
      ar: "جزيرة فرز وترتيب الغسيل المعمارية الفاخرة دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Appliances",
    description: "Central laundry room island with seamless engineered Caesarstone top, four tilt-out canvas sorting hampers, concealed detergent drawers, and brushed brass toe-kick.",
    size: [1.60, 0.90, 0.90],
    mount: "floor",
    group: "appliances",
    room: ["storage", "kitchen"],
    tags: ["laundry", "sorting_island", "hampers", "utility", "domolux"],
    parts: [
      // Recessed brass toe-kick base
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.88, y: 0.0, h: 0.10, color: "#c5a059", edges: "glow", fix: "h" },
      // Main cabinetry carcass (Gunmetal grey)
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.92, y: 0.10, h: 0.78, color: "#252830", finish: "dark", edges: true },
      // 4 tilt-out hamper drawer doors (2 front, 2 back)
      { shape: "box", x: -0.25, z: 0.44, w: 0.42, d: 0.04, y: 0.14, h: 0.70, color: "#363a45", edges: true, fix: "d" },
      { shape: "box", x: 0.25, z: 0.44, w: 0.42, d: 0.04, y: 0.14, h: 0.70, color: "#363a45", edges: true, fix: "d" },
      // Seamless Caesarstone quartz worktop surface
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.88, h: 0.12, color: "#f1f3f5", finish: "white", edges: true, fix: "h" },
      // Brushed brass hardware bar pulls
      { shape: "box", x: -0.25, z: 0.47, w: 0.18, d: 0.02, y: 0.78, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.25, z: 0.47, w: 0.18, d: 0.02, y: 0.78, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "line", x1: 0.0, z1: -0.46, x2: 0.0, z2: 0.46 }
    ]
  },

  {
    num: 182,
    id: "laundry_folding_station",
    packId: "domolux.laundry_folding_station",
    name: {
      en: "Domolux Garment Folding and Pressing Workstation",
      de: "Domolux Professionelle Wäsche-Faltstation",
      ar: "محطة طي وكي الملابس المتكاملة بوحدات تخزين دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Appliances",
    description: "Counter-height pressing credenza featuring an extendable heated sleeve-board dock, pull-out mesh drying drawers, overhead hanging rail, and solid birch drawers.",
    size: [1.40, 0.65, 0.92],
    mount: "floor",
    group: "appliances",
    room: ["storage"],
    tags: ["folding_station", "laundry", "pressing", "utility", "storage", "domolux"],
    parts: [
      // Base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.92, y: 0.0, h: 0.08, color: "#141518", fix: "h" },
      // Main service cabinet carcass
      { shape: "box", x: 0.0, z: -0.02, w: 0.96, d: 0.92, y: 0.08, h: 0.80, color: "#22252c", finish: "dark", edges: true },
      // Antibacterial composite quartz folding countertop
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.88, h: 0.12, color: "#e9ecef", finish: "white", edges: true, fix: "h" },
      // Three front utility storage drawers
      { shape: "box", x: -0.24, z: 0.44, w: 0.42, d: 0.03, y: 0.55, h: 0.28, color: "#323742", edges: true, fix: "d" },
      { shape: "box", x: -0.24, z: 0.44, w: 0.42, d: 0.03, y: 0.22, h: 0.28, color: "#323742", edges: true, fix: "d" },
      // Right mesh laundry basket drying stack
      { shape: "box", x: 0.24, z: 0.44, w: 0.42, d: 0.03, y: 0.14, h: 0.68, color: "#282c35", edges: true, fix: "d" },
      // Brushed brass drawer pulls
      { shape: "box", x: -0.24, z: 0.47, w: 0.16, d: 0.02, y: 0.68, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "line", x1: 0.0, z1: -0.46, x2: 0.0, z2: 0.46 }
    ]
  },

  {
    num: 183,
    id: "concealed_ironing_center",
    packId: "domolux.concealed_ironing_center",
    name: {
      en: "Domolux Recessed Architectural Fold-Out Ironing Cabinet",
      de: "Domolux Wandeinbau-Bügelzentrum",
      ar: "مركز الكي الجداري المخفي المدمج بلوح دوار دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Appliances",
    description: "Recessed in-wall ironing center with 180-degree swivel board, integrated steam-iron heat rest, electrical timer outlet, and full-length mirrored door face.",
    size: [0.45, 0.16, 1.25],
    mount: "wall",
    wall_y: 0.60,
    group: "appliances",
    room: ["storage", "bedroom"],
    tags: ["ironing_board", "ironing_cabinet", "concealed", "utility", "laundry", "domolux"],
    parts: [
      // Wall recessed chassis tub
      { shape: "box", x: 0.0, z: -0.42, w: 0.92, d: 0.14, y: 0.02, h: 0.96, color: "#141518", fix: "d" },
      // Cabinet perimeter frame (Satin brass)
      { shape: "box", x: 0.0, z: -0.05, w: 0.96, d: 0.08, y: 0.0, h: 0.98, color: "#c5a059", edges: "glow", fix: "d" },
      // Full-height mirrored front door
      { shape: "box", x: 0.0, z: 0.15, w: 0.92, d: 0.04, y: 0.02, h: 0.96, color: "#a8c0d8", finish: "glass", edges: true, fix: "d" },
      // Fold-out padded ironing board platform (Projecting forward preview)
      { shape: "box", x: 0.0, z: 0.35, w: 0.72, d: 0.35, y: 0.45, h: 0.06, color: "#e8ecef", finish: "cushion", edges: true },
      // Metal heat-resistant iron rest plate
      { shape: "box", x: 0.0, z: 0.22, w: 0.45, d: 0.14, y: 0.75, h: 0.04, color: "metal", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.45 },
      { shape: "rect", x: 0.0, z: 0.35, w: 0.72, d: 0.35 }
    ]
  },

  {
    num: 184,
    id: "heated_drying_cabinet",
    packId: "domolux.heated_drying_cabinet",
    name: {
      en: "Domolux Professional Heat-Pump Garment Drying Armoire",
      de: "Domolux Professioneller Wärmepumpen-Trockenschrank",
      ar: "دولاب تجفيف الملابس الحراري المتطور بمضخة حرارية دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Appliances",
    description: "Gentle heat-pump clothes drying cabinet for delicate silks and outerwear, featuring three levels of pull-out drying racks, shoe blowers, and digital touch door.",
    size: [0.60, 0.65, 1.85],
    mount: "floor",
    group: "appliances",
    room: ["storage"],
    tags: ["drying_cabinet", "garment_care", "heat_pump", "appliances", "laundry", "domolux"],
    parts: [
      // Base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.94, y: 0.0, h: 0.06, color: "#141518", fix: "h" },
      // Main insulated cabinet carcass (Gunmetal)
      { shape: "box", x: 0.0, z: -0.02, w: 0.96, d: 0.94, y: 0.06, h: 0.92, color: "#22252c", finish: "dark", edges: true },
      // Smoked glass door with integrated touch controls
      { shape: "box", x: 0.0, z: 0.46, w: 0.92, d: 0.04, y: 0.08, h: 0.88, color: "#1b2028", finish: "glass", edges: true, fix: "d" },
      // OLED status display and program selector
      { shape: "box", x: 0.0, z: 0.48, w: 0.42, d: 0.01, y: 0.82, h: 0.08, color: "#00e5ff", glow: true, fix: "wdh" },
      // Full-length vertical champagne brass door handle
      { shape: "cyl", x: 0.38, z: 0.48, w: 0.03, d: 0.03, y: 0.25, h: 0.50, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.94 },
      { shape: "line", x1: -0.46, z1: 0.46, x2: 0.46, z2: 0.46 }
    ]
  },

  {
    num: 185,
    id: "retractable_ceiling_drying_system",
    packId: "domolux.retractable_ceiling_drying_system",
    name: {
      en: "Domolux Motorized Architectural Ceiling Laundry Airer",
      de: "Domolux Motorisierter Decken-Wäscheständer",
      ar: "منشر الغسيل المعماري السقفي الآلي القابل للنزول دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Appliances",
    description: "Ceiling-recessed motorized clothes drying rack featuring twin scissor lifts, 15m of anodized aluminum drying rods, warm air blowers, and LED downlight panel.",
    size: [1.50, 0.60, 0.35],
    mount: "ceiling",
    group: "appliances",
    room: ["storage"],
    tags: ["ceiling_airer", "drying_rack", "laundry", "motorized", "ceiling", "domolux"],
    parts: [
      // Ceiling flush mounting canopy housing
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.94, y: 0.85, h: 0.15, color: "#22252c", finish: "dark", edges: true, fix: "h" },
      // Central high-output diffuse LED task illumination panel
      { shape: "box", x: 0.0, z: 0.0, w: 0.55, d: 0.45, y: 0.84, h: 0.02, color: "#fff3cc", glow: true, fix: "h" },
      // Left stainless scissor-lift linkage
      { shape: "box", x: -0.38, z: 0.0, w: 0.04, d: 0.65, y: 0.25, h: 0.60, color: "metal", fix: "wd" },
      // Right stainless scissor-lift linkage
      { shape: "box", x: 0.38, z: 0.0, w: 0.04, d: 0.65, y: 0.25, h: 0.60, color: "metal", fix: "wd" },
      // Lower lowered horizontal drying rod platform (4 champagne bronze tubes)
      { shape: "cyl", x: 0.0, z: -0.25, w: 0.03, d: 0.03, y: 0.20, h: 0.92, axis: "x", color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "cyl", x: 0.0, z: -0.08, w: 0.03, d: 0.03, y: 0.20, h: 0.92, axis: "x", color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "cyl", x: 0.0, z: 0.08, w: 0.03, d: 0.03, y: 0.20, h: 0.92, axis: "x", color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "cyl", x: 0.0, z: 0.25, w: 0.03, d: 0.03, y: 0.20, h: 0.92, axis: "x", color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.94 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.55, d: 0.45 }
    ]
  },

  {
    num: 186,
    id: "laundry_linen_chute",
    packId: "domolux.laundry_linen_chute",
    name: {
      en: "Domolux Mirror-Polished Stainless Laundry Linen Chute Door",
      de: "Domolux Wandeinbau-Wäscheabwurfklappe",
      ar: "باب ومجرى إلقاء الغسيل الجداري المعماري من الستانلس ستيل دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Appliances",
    description: "Fire-rated wall-intake laundry chute door crafted from heavy 304 brushed stainless steel with acoustic self-latching magnetic seal and brass handle.",
    size: [0.45, 0.25, 0.95],
    mount: "wall",
    wall_y: 0.70,
    group: "appliances",
    room: ["storage", "hallway", "bathroom"],
    tags: ["linen_chute", "laundry_drop", "fire_rated", "stainless", "utility", "domolux"],
    parts: [
      // Wall rough-in intake throat sleeve
      { shape: "box", x: 0.0, z: -0.38, w: 0.90, d: 0.22, y: 0.05, h: 0.90, color: "#141518", fix: "d" },
      // Architectural faceplate frame with mitered bevel
      { shape: "box", x: 0.0, z: -0.05, w: 0.96, d: 0.08, y: 0.02, h: 0.96, color: "metal", finish: "metal", edges: true, fix: "d" },
      // Down-swinging spring-damped chute door
      { shape: "box", x: 0.0, z: 0.20, w: 0.78, d: 0.04, y: 0.12, h: 0.76, color: "#cfd8dc", finish: "white", edges: true, fix: "d" },
      // Brushed champagne brass T-handle lock
      { shape: "cyl", x: 0.0, z: 0.26, w: 0.04, d: 0.04, y: 0.75, h: 0.15, axis: "x", color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.50 },
      { shape: "line", x1: -0.39, z1: 0.20, x2: 0.39, z2: 0.20 }
    ]
  },

  {
    num: 187,
    id: "cleaning_utility_station",
    packId: "domolux.cleaning_utility_station",
    name: {
      en: "Domolux Estate Housekeeping and Cleaning Utility Armoire",
      de: "Domolux Hauswirtschafts- & Reinigungsschrank",
      ar: "دولاب تنظيم أدوات ومعدات النظافة والخدمة المنزلية دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Storage",
    description: "Organized housekeeping service cabinet featuring dedicated charging bays for cordless stick vacuums, broom clips, lockable chemical shelf, and ventilated base.",
    size: [0.90, 0.50, 1.80],
    mount: "floor",
    group: "storage",
    room: ["storage"],
    tags: ["utility_cabinet", "housekeeping", "cleaning", "storage", "vacuum", "domolux"],
    parts: [
      // Base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.92, y: 0.0, h: 0.06, color: "#141518", fix: "h" },
      // Heavy anthracite steel cabinet carcass
      { shape: "box", x: 0.0, z: -0.02, w: 0.96, d: 0.92, y: 0.06, h: 0.92, color: "#252830", finish: "dark", edges: true },
      // Double louvered ventilated doors
      { shape: "box", x: -0.23, z: 0.44, w: 0.44, d: 0.04, y: 0.08, h: 0.88, color: "#363b47", edges: true, fix: "d" },
      { shape: "box", x: 0.23, z: 0.44, w: 0.44, d: 0.04, y: 0.08, h: 0.88, color: "#363b47", edges: true, fix: "d" },
      // Brushed brass vertical handle pair
      { shape: "cyl", x: -0.04, z: 0.48, w: 0.02, d: 0.02, y: 0.35, h: 0.35, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "cyl", x: 0.04, z: 0.48, w: 0.02, d: 0.02, y: 0.35, h: 0.35, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.92 },
      { shape: "line", x1: 0.0, z1: -0.45, x2: 0.0, z2: 0.45 }
    ]
  },

  {
    num: 188,
    id: "utility_wash_sink_cabinet",
    packId: "domolux.utility_wash_sink_cabinet",
    name: {
      en: "Domolux Deep Composite Service and Pet-Wash Basin Cabinet",
      de: "Domolux Multifunktionales Ausgussbecken mit Unterschrank",
      ar: "حوض الغسيل الخدمي العميق مع صنبور شاور مرن دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Kitchen",
    description: "Deep granite-composite utility tub cabinet with splashback protection, commercial pull-down spring-coil pre-rinse faucet, and waterproof under-sink storage.",
    size: [0.80, 0.65, 0.90],
    mount: "floor",
    group: "kitchen",
    room: ["storage", "kitchen"],
    tags: ["utility_sink", "wash_basin", "laundry", "pet_wash", "service", "domolux"],
    parts: [
      // Base toe-kick plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.88, y: 0.0, h: 0.12, color: "#16171b", fix: "h" },
      // Waterproof PVC composite cabinet base
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.92, y: 0.12, h: 0.65, color: "#272a33", finish: "dark", edges: true },
      // Deep molded granite-composite sink rim
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.77, h: 0.23, color: "#495057", edges: true, fix: "h" },
      // Open deep sink basin cavity
      { shape: "box", x: 0.0, z: 0.05, w: 0.84, d: 0.72, y: 0.35, h: 0.62, color: "#1f2228" },
      // High-arch commercial pre-rinse spring faucet
      { shape: "cyl", x: 0.0, z: -0.38, w: 0.06, d: 0.06, y: 0.82, h: 0.18, color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "rect", x: 0.0, z: 0.05, w: 0.84, d: 0.72 }
    ]
  },

  {
    num: 189,
    id: "professional_home_workbench",
    packId: "domolux.professional_home_workbench",
    name: {
      en: "Domolux Heavy-Duty Professional Workshop Workbench",
      de: "Domolux Professionelle Werkbank mit Buchenholzplatte",
      ar: "طاولة ورشة العمل الاحترافية بسطح خشب الزان ومنجلة دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Living",
    description: "Solid steamed-beech butcher-block workbench with heavy-gauge welded steel frame, integrated quick-release bench vise, and modular tool-holding drawers.",
    size: [1.80, 0.75, 0.95],
    mount: "floor",
    group: "living",
    room: ["storage"],
    tags: ["workbench", "workshop", "tools", "beechwood", "garage", "domolux"],
    parts: [
      // 4 heavy square steel structural legs with leveling pads
      { shape: "box", x: -0.42, z: -0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.84, color: "#1a1c22", fix: "wd" },
      { shape: "box", x: 0.42, z: -0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.84, color: "#1a1c22", fix: "wd" },
      { shape: "box", x: -0.42, z: 0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.84, color: "#1a1c22", fix: "wd" },
      { shape: "box", x: 0.42, z: 0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.84, color: "#1a1c22", fix: "wd" },
      // Lower steel shelf stretcher
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.82, y: 0.15, h: 0.04, color: "#252830", edges: true, fix: "h" },
      // Solid steamed-beech 80mm worktop slab
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.84, h: 0.16, color: "#bfa382", finish: "wood", edges: true, fix: "h" },
      // Heavy cast-iron quick-release woodworking front vise
      { shape: "box", x: -0.35, z: 0.46, w: 0.25, d: 0.08, y: 0.84, h: 0.14, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "rect", x: -0.35, z: 0.46, w: 0.25, d: 0.08 }
    ]
  },

  {
    num: 190,
    id: "precision_tool_chest",
    packId: "domolux.precision_tool_chest",
    name: {
      en: "Domolux Roller-Cabinet Precision Tool Chest",
      de: "Domolux Rollbarer Präzisions-Werkzeugwagen",
      ar: "عربة وصندوق أدوات الورشة الدقيقة المتنقل دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Storage",
    description: "Professional rolling tool cabinet with 12 full-extension ball-bearing drawers, high-density EVA foam custom tool cutouts, stainless push handle, and central barrel lock.",
    size: [0.85, 0.55, 1.10],
    mount: "floor",
    group: "storage",
    room: ["storage"],
    tags: ["tool_chest", "toolbox", "workshop", "garage", "storage", "domolux"],
    parts: [
      // 4 heavy lockable industrial swivel casters
      { shape: "cyl", x: -0.38, z: -0.38, w: 0.12, d: 0.12, y: 0.0, h: 0.12, color: "#111215", fix: "wdh" },
      { shape: "cyl", x: 0.38, z: -0.38, w: 0.12, d: 0.12, y: 0.0, h: 0.12, color: "#111215", fix: "wdh" },
      { shape: "cyl", x: -0.38, z: 0.38, w: 0.12, d: 0.12, y: 0.0, h: 0.12, color: "#111215", fix: "wdh" },
      { shape: "cyl", x: 0.38, z: 0.38, w: 0.12, d: 0.12, y: 0.0, h: 0.12, color: "#111215", fix: "wdh" },
      // Heavy double-wall steel body (Gunmetal powder coat)
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.92, y: 0.12, h: 0.82, color: "#252830", finish: "dark", edges: true },
      // Solid hardwood top work mat
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.94, y: 0.94, h: 0.06, color: "#8a6642", finish: "wood", edges: true, fix: "h" },
      // Drawer array front horizontal aluminum pulls (5 tiers)
      { shape: "box", x: 0.0, z: 0.44, w: 0.86, d: 0.03, y: 0.20, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.44, w: 0.86, d: 0.03, y: 0.35, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.44, w: 0.86, d: 0.03, y: 0.50, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.44, w: 0.86, d: 0.03, y: 0.65, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.44, w: 0.86, d: 0.03, y: 0.80, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.94 },
      { shape: "line", x1: -0.43, z1: 0.44, x2: 0.43, z2: 0.44 }
    ]
  },

  {
    num: 191,
    id: "modular_workshop_wall",
    packId: "domolux.modular_workshop_wall",
    name: {
      en: "Domolux Precision Architectural Slatwall Workshop Organizer",
      de: "Domolux Modulare Werkstatt-Lamellenwand",
      ar: "جدار تنظيم الورشة المعماري بالألواح الألمنيوم المشقوقة دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Storage",
    description: "Extruded heavy-duty anodized aluminum slatwall panel system with heavy tool hooks, magnetic socket holders, precision bit trays, and overhead LED task canopy.",
    size: [2.00, 0.20, 1.60],
    mount: "wall",
    wall_y: 0.60,
    group: "storage",
    room: ["storage"],
    tags: ["slatwall", "tool_organizer", "workshop", "garage", "storage", "domolux"],
    parts: [
      // Wall mounting chassis frame
      { shape: "box", x: 0.0, z: -0.42, w: 0.98, d: 0.12, y: 0.0, h: 0.98, color: "#16171b", fix: "d" },
      // Horizontal extruded aluminum slatwall panels (Grooved texture)
      { shape: "box", x: 0.0, z: 0.05, w: 0.98, d: 0.72, y: 0.0, h: 0.94, color: "metal", finish: "metal", edges: true },
      // Array of modular tool holder brackets (Satin bronze)
      { shape: "box", x: -0.30, z: 0.38, w: 0.32, d: 0.15, y: 0.55, h: 0.12, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.25, z: 0.38, w: 0.38, d: 0.15, y: 0.30, h: 0.18, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Overhead LED illumination canopy hood
      { shape: "box", x: 0.0, z: 0.15, w: 0.98, d: 0.85, y: 0.94, h: 0.06, color: "#22252c", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.80 },
      { shape: "line", x1: -0.48, z1: 0.0, x2: 0.48, z2: 0.0 }
    ]
  },

  {
    num: 192,
    id: "tailoring_sewing_station",
    packId: "domolux.tailoring_sewing_station",
    name: {
      en: "Domolux Haute-Couture Tailoring and Sewing Desk",
      de: "Domolux Haute-Couture Nähtisch & Zuschneidestation",
      ar: "طاولة الخياطة وتفصيل الأزياء الراقية دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Living",
    description: "Bespoke tailoring desk with motorized lift platform for sewing machines, fold-out fabric cutting extension, spool rack drawers, and brass measuring rule inlay.",
    size: [1.30, 0.65, 0.78],
    mount: "floor",
    group: "living",
    room: ["storage", "bedroom"],
    tags: ["sewing_desk", "tailoring", "craft", "couture", "utility", "domolux"],
    parts: [
      // 4 turned oak legs with brass ferrules
      { shape: "cyl", x: -0.42, z: -0.38, w: 0.06, d: 0.06, y: 0.0, h: 0.88, color: "#8a6642", finish: "wood", fix: "wd" },
      { shape: "cyl", x: 0.42, z: -0.38, w: 0.06, d: 0.06, y: 0.0, h: 0.88, color: "#8a6642", finish: "wood", fix: "wd" },
      { shape: "cyl", x: -0.42, z: 0.38, w: 0.06, d: 0.06, y: 0.0, h: 0.88, color: "#8a6642", finish: "wood", fix: "wd" },
      { shape: "cyl", x: 0.42, z: 0.38, w: 0.06, d: 0.06, y: 0.0, h: 0.88, color: "#8a6642", finish: "wood", fix: "wd" },
      // Desk body with thread drawer chest (Left pedestal)
      { shape: "box", x: -0.28, z: 0.0, w: 0.35, d: 0.88, y: 0.25, h: 0.63, color: "#22252c", finish: "dark", edges: true },
      // Smooth solid maple fabric handling worktop
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.88, h: 0.12, color: "#e8ded1", finish: "wood", edges: true, fix: "h" },
      // Motorized sewing machine drop-well platform (Center)
      { shape: "box", x: 0.18, z: 0.0, w: 0.42, d: 0.48, y: 0.89, h: 0.02, color: "#252830", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "rect", x: 0.18, z: 0.0, w: 0.42, d: 0.48 }
    ]
  },

  {
    num: 193,
    id: "private_art_studio_table",
    packId: "domolux.private_art_studio_table",
    name: {
      en: "Domolux Master Artist Tilting Drafting and Painting Table",
      de: "Domolux Künstler-Zeichentisch mit neigbarer Platte",
      ar: "طاولة الرسم والهندسة الفنية القابلة للإمالة دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Living",
    description: "Architectural artist easel table with continuous counterbalanced tilting tabletop (0 to 60 degrees), cast-iron antique cog adjustment gears, and brush trough.",
    size: [1.60, 0.95, 0.85],
    mount: "floor",
    group: "living",
    room: ["living", "office"],
    tags: ["drafting_table", "art_studio", "easel", "painting", "artist", "domolux"],
    parts: [
      // Cast-iron A-frame trestle base
      { shape: "box", x: -0.38, z: 0.0, w: 0.08, d: 0.88, y: 0.0, h: 0.75, color: "#1c1e24", finish: "dark", fix: "w" },
      { shape: "box", x: 0.38, z: 0.0, w: 0.08, d: 0.88, y: 0.0, h: 0.75, color: "#1c1e24", finish: "dark", fix: "w" },
      // Central stretcher beam and bronze cog gears
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.08, d: 0.08, y: 0.45, h: 0.78, axis: "x", color: "#c5a059", edges: "glow", fix: "wd" },
      // Heavy solid white-oak tilting drafting drawing top
      { shape: "box", x: 0.0, z: -0.05, w: 0.98, d: 0.92, y: 0.75, h: 0.12, color: "#c2ab87", finish: "wood", edges: true },
      // Lower bronze pencil and brush retaining lip
      { shape: "box", x: 0.0, z: 0.42, w: 0.96, d: 0.06, y: 0.78, h: 0.08, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.95 },
      { shape: "line", x1: -0.48, z1: 0.42, x2: 0.48, z2: 0.42 }
    ]
  },

  {
    num: 194,
    id: "luxury_potting_bench",
    packId: "domolux.luxury_potting_bench",
    name: {
      en: "Domolux Estate Greenhouse Teak and Zinc Potting Bench",
      de: "Domolux Exklusiver Pflanztisch aus Teak & Zink",
      ar: "طاولة العناية بالنباتات والغرس بخشب التيك والزنك دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Outdoor",
    description: "Weather-resistant greenhouse workstation crafted from solid plantation teak with dry-sink zinc potting basin, upper tool shelf, and soil storage bucket rack.",
    size: [1.25, 0.65, 1.45],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor", "storage"],
    tags: ["potting_bench", "gardening", "greenhouse", "teak", "plants", "domolux"],
    parts: [
      // 4 heavy teak structural posts
      { shape: "box", x: -0.42, z: -0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.96, color: "#543c2b", finish: "wood", fix: "wd" },
      { shape: "box", x: 0.42, z: -0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.96, color: "#543c2b", finish: "wood", fix: "wd" },
      { shape: "box", x: -0.42, z: 0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.58, color: "#543c2b", finish: "wood", fix: "wd" },
      { shape: "box", x: 0.42, z: 0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.58, color: "#543c2b", finish: "wood", fix: "wd" },
      // Lower slatted pot storage shelf
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.84, y: 0.12, h: 0.04, color: "#3d2b1f", finish: "wood", edges: true, fix: "h" },
      // Solid weathered zinc metal potting worktop
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.94, y: 0.58, h: 0.08, color: "#788591", edges: true, fix: "h" },
      // Recessed soil mixing basin well
      { shape: "box", x: 0.22, z: 0.05, w: 0.42, d: 0.45, y: 0.48, h: 0.10, color: "#495057" },
      // Upper backboard with tool hanging hooks and narrow spice/seed shelf
      { shape: "box", x: 0.0, z: -0.38, w: 0.94, d: 0.15, y: 0.82, h: 0.04, color: "#543c2b", finish: "wood", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.94 },
      { shape: "rect", x: 0.22, z: 0.05, w: 0.42, d: 0.45 }
    ]
  },

  {
    num: 195,
    id: "bicycle_repair_stand",
    packId: "domolux.bicycle_repair_stand",
    name: {
      en: "Domolux Professional Workshop Bicycle Maintenance Stand",
      de: "Domolux Professioneller Fahrrad-Montageständer",
      ar: "حامل صيانة وإصلاح الدراجات الهوائية الاحترافي دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Appliances",
    description: "Floor-anchored high-capacity bicycle service stand with 360-degree rotating micro-adjust clamp, magnetic small-parts tray, and heavy cast iron pedestal base.",
    size: [0.70, 0.70, 1.55],
    mount: "floor",
    group: "appliances",
    room: ["storage"],
    tags: ["bike_stand", "bicycle_repair", "workshop", "garage", "maintenance", "domolux"],
    parts: [
      // Heavy cast-iron circular floor anchor plate
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.92, d: 0.92, y: 0.0, h: 0.06, color: "#141518", fix: "h" },
      // Main vertical steel upright column
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.12, d: 0.12, y: 0.06, h: 0.84, color: "#252830", edges: true, fix: "wd" },
      // Magnetic tool and small parts tray
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.45, d: 0.45, y: 0.52, h: 0.04, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Cantilever clamp arm (Brushed bronze)
      { shape: "cyl", x: 0.18, z: 0.0, w: 0.06, d: 0.06, y: 0.88, h: 0.42, axis: "x", color: "#c5a059", edges: "glow", fix: "wd" },
      // 360-degree rotating padded bike frame jaw clamp
      { shape: "box", x: 0.38, z: 0.0, w: 0.12, d: 0.14, y: 0.84, h: 0.12, color: "#ff4d4f", fix: "wdh" }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: 0.0, r: 0.46 },
      { shape: "line", x1: 0.0, z1: 0.0, x2: 0.42, z2: 0.0 }
    ]
  },

  {
    num: 196,
    id: "ceiling_bicycle_lift",
    packId: "domolux.ceiling_bicycle_lift",
    name: {
      en: "Domolux Motorized Architectural Ceiling Bicycle Hoist",
      de: "Domolux Motorisierter Decken-Fahrradlift",
      ar: "رافعة الدراجات السقفية الآلية المعمارية دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Appliances",
    description: "Ceiling-recessed motorized electric hoist with dual steel aircraft cables, vinyl-coated handlebar/saddle hooks, wireless RF remote, and auto-stop sensors.",
    size: [0.60, 1.80, 0.40],
    mount: "ceiling",
    group: "appliances",
    room: ["storage"],
    tags: ["bike_lift", "bicycle_hoist", "motorized", "ceiling", "garage", "domolux"],
    parts: [
      // Ceiling motor and cable spool housing
      { shape: "box", x: 0.0, z: 0.0, w: 0.84, d: 0.94, y: 0.82, h: 0.18, color: "#22252c", finish: "dark", edges: true, fix: "h" },
      // Dual high-tensile braided steel aircraft lift cables
      { shape: "cyl", x: 0.0, z: -0.38, w: 0.015, d: 0.015, y: 0.22, h: 0.60, color: "metal", fix: "wd" },
      { shape: "cyl", x: 0.0, z: 0.38, w: 0.015, d: 0.015, y: 0.22, h: 0.60, color: "metal", fix: "wd" },
      // Front handlebar padded lift hook assembly (Satin brass)
      { shape: "box", x: 0.0, z: -0.38, w: 0.48, d: 0.10, y: 0.15, h: 0.08, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Rear saddle padded lift hook assembly (Satin brass)
      { shape: "box", x: 0.0, z: 0.38, w: 0.35, d: 0.10, y: 0.15, h: 0.08, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.84, d: 0.94 },
      { shape: "circle", x: 0.0, z: -0.38, r: 0.12 },
      { shape: "circle", x: 0.0, z: 0.38, r: 0.12 }
    ]
  },

  {
    num: 197,
    id: "residential_elevator_cabin",
    packId: "domolux.residential_elevator_cabin",
    name: {
      en: "Domolux Monumental Glass and Bronze Private Villa Elevator",
      de: "Domolux Monumentale Luxus-Aufzugskabine",
      ar: "مقصورة المصعد البانورامي المعماري بالزجاج والبرونز المصقول دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Appliances",
    description: "Panoramic luxury residential lift cabin featuring curved laminated safety glass, satin champagne bronze wall stanchions, Fior di Bosco marble floor, and luminous ceiling.",
    size: [1.50, 1.50, 2.30],
    mount: "floor",
    group: "appliances",
    room: ["hallway", "living"],
    tags: ["elevator", "lift", "panoramic", "bronze", "glass", "luxury", "domolux"],
    parts: [
      // Fior di Bosco book-matched marble floor slab
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.0, h: 0.06, color: "#495057", edges: true, fix: "h" },
      // Rear bronze architectural wall panel
      { shape: "box", x: 0.0, z: -0.47, w: 0.96, d: 0.04, y: 0.06, h: 0.90, color: "#c5a059", edges: "glow", fix: "d" },
      // Left panoramic laminated safety glass wall
      { shape: "box", x: -0.47, z: 0.0, w: 0.02, d: 0.96, y: 0.06, h: 0.90, color: "#88c0d0", finish: "glass", fix: "w" },
      // Right panoramic laminated safety glass wall
      { shape: "box", x: 0.47, z: 0.0, w: 0.02, d: 0.96, y: 0.06, h: 0.90, color: "#88c0d0", finish: "glass", fix: "w" },
      // Front automatic center-opening glass doors
      { shape: "box", x: -0.24, z: 0.47, w: 0.46, d: 0.02, y: 0.06, h: 0.90, color: "#88c0d0", finish: "glass", fix: "d" },
      { shape: "box", x: 0.24, z: 0.47, w: 0.46, d: 0.02, y: 0.06, h: 0.90, color: "#88c0d0", finish: "glass", fix: "d" },
      // Luminous stretch LED ceiling panel (Diffuse natural sunlight wash)
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.96, h: 0.04, color: "#ffffff", glow: true, fix: "h" },
      // Vertical bronze car operating panel (COP) with touch glass buttons
      { shape: "box", x: 0.42, z: 0.20, w: 0.04, d: 0.20, y: 0.35, h: 0.50, color: "#141518", edges: true, fix: "w" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.98 },
      { shape: "line", x1: -0.47, z1: -0.47, x2: 0.47, z2: -0.47 }
    ]
  },

  {
    num: 198,
    id: "residential_dumbwaiter",
    packId: "domolux.residential_dumbwaiter",
    name: {
      en: "Domolux Bi-Parting Stainless Service Dumbwaiter Lift",
      de: "Domolux Speisenaufzug & Butler-Lift",
      ar: "مصعد تقديم الأطعمة والخدمات الخفيفة بين الطوابق دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Kitchen",
    description: "Compact architectural dumbwaiter connecting kitchen, wine cellar, and master suite, featuring bi-parting stainless doors, heated tray shelf, and whisper drive.",
    size: [0.75, 0.75, 1.20],
    mount: "wall",
    wall_y: 0.60,
    group: "kitchen",
    room: ["kitchen", "storage"],
    tags: ["dumbwaiter", "service_lift", "butler", "food_lift", "kitchen", "domolux"],
    parts: [
      // Wall recessed structural hoistway shaft frame
      { shape: "box", x: 0.0, z: -0.35, w: 0.96, d: 0.25, y: 0.02, h: 0.96, color: "#16171b", fix: "d" },
      // Architectural stainless faceplate surround
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.45, y: 0.0, h: 0.98, color: "metal", finish: "metal", edges: true },
      // Upper vertical bi-parting sliding door
      { shape: "box", x: 0.0, z: 0.24, w: 0.86, d: 0.02, y: 0.52, h: 0.42, color: "#cfd8dc", finish: "white", edges: true, fix: "d" },
      // Lower vertical bi-parting sliding door
      { shape: "box", x: 0.0, z: 0.24, w: 0.86, d: 0.02, y: 0.06, h: 0.42, color: "#cfd8dc", finish: "white", edges: true, fix: "d" },
      // Brushed bronze call button and status indicator display
      { shape: "box", x: 0.40, z: 0.24, w: 0.06, d: 0.02, y: 0.85, h: 0.08, color: "#00e5ff", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.70 },
      { shape: "line", x1: -0.43, z1: 0.24, x2: 0.43, z2: 0.24 }
    ]
  },

  {
    num: 199,
    id: "indoor_hydroponic_growing_cabinet",
    packId: "domolux.indoor_hydroponic_growing_cabinet",
    name: {
      en: "Domolux Smart Automated Indoor Hydroponic Cultivation Armoire",
      de: "Domolux Intelligenter Hydrokultur-Kräuterschrank",
      ar: "خزانة الزراعة المائية الذكية للأعشاب والخضروات العضوية دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Kitchen",
    description: "Multi-tiered closed-loop hydroponic growing cabinet for culinary microgreens and herbs, featuring tuned Samsung horticultural LEDs, carbon odor filters, and smart app dosing.",
    size: [0.95, 0.60, 1.90],
    mount: "floor",
    group: "kitchen",
    room: ["kitchen", "storage"],
    tags: ["hydroponics", "growing_cabinet", "herbs", "microgreens", "indoor_garden", "domolux"],
    parts: [
      // Base water reservoir and pump compartment
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.94, y: 0.0, h: 0.18, color: "#181a20", finish: "dark", edges: true, fix: "h" },
      // Outer fluted timber and glass carcass
      { shape: "box", x: 0.0, z: -0.02, w: 0.98, d: 0.94, y: 0.18, h: 0.80, color: "#252830", finish: "dark", edges: true },
      // Lower growing tray with vibrant basil / microgreens
      { shape: "box", x: 0.0, z: 0.08, w: 0.88, d: 0.72, y: 0.22, h: 0.12, color: "#2d6a4f", edges: true },
      // Mid growing tray with microgreens
      { shape: "box", x: 0.0, z: 0.08, w: 0.88, d: 0.72, y: 0.48, h: 0.12, color: "#40916c", edges: true },
      // Top growing tray with microgreens
      { shape: "box", x: 0.0, z: 0.08, w: 0.88, d: 0.72, y: 0.74, h: 0.12, color: "#52b788", edges: true },
      // Horticultural full-spectrum purple/pink LED grow bars (3 tiers)
      { shape: "box", x: 0.0, z: 0.08, w: 0.82, d: 0.50, y: 0.44, h: 0.02, color: "#ff007f", glow: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.08, w: 0.82, d: 0.50, y: 0.70, h: 0.02, color: "#ff007f", glow: true, fix: "h" },
      { shape: "box", x: 0.0, z: 0.08, w: 0.82, d: 0.50, y: 0.94, h: 0.02, color: "#ff007f", glow: true, fix: "h" },
      // Frameless double glass doors
      { shape: "box", x: 0.0, z: 0.46, w: 0.92, d: 0.02, y: 0.18, h: 0.80, color: "#88c0d0", finish: "glass", edges: true, fix: "d" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.94 },
      { shape: "line", x1: -0.46, z1: 0.46, x2: 0.46, z2: 0.46 }
    ]
  },

  {
    num: 200,
    id: "private_conservatory_greenhouse",
    packId: "domolux.private_conservatory_greenhouse",
    name: {
      en: "Domolux Monumental Glass Conservatory and Winter Garden Pavilion",
      de: "Domolux Monumentale Orangerie & Glas-Wintergarten",
      ar: "قصر النباتات الشتوي والكونسرفتوار الزجاجي المعماري الفاخر دومولوكس"
    },
    collection: "Laundry, Service Rooms, Workshops and Specialist Systems",
    collectionSlug: "10_Service_Rooms_Workshops",
    category: "Outdoor",
    description: "Monumental Victorian-inspired private villa conservatory featuring blackened steel architectural glazing, vaulted arched glass roof, automated ridge vent windows, and central exotic planter island.",
    size: [3.50, 2.40, 2.80],
    mount: "floor",
    group: "outdoor",
    room: ["outdoor"],
    tags: ["conservatory", "greenhouse", "orangerie", "glass_pavilion", "winter_garden", "domolux"],
    parts: [
      // Monumental brick/stone perimeter foundation stem wall
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.0, h: 0.22, color: "#495057", finish: "dark", edges: true, fix: "h" },
      // Left blackened-steel mullioned glass wall
      { shape: "box", x: -0.47, z: 0.0, w: 0.04, d: 0.94, y: 0.22, h: 0.58, color: "#88c0d0", finish: "glass", edges: true, fix: "w" },
      // Right blackened-steel mullioned glass wall
      { shape: "box", x: 0.47, z: 0.0, w: 0.04, d: 0.94, y: 0.22, h: 0.58, color: "#88c0d0", finish: "glass", edges: true, fix: "w" },
      // Rear blackened-steel mullioned glass wall
      { shape: "box", x: 0.0, z: -0.47, w: 0.94, d: 0.04, y: 0.22, h: 0.58, color: "#88c0d0", finish: "glass", edges: true, fix: "d" },
      // Front arched French entrance doorway
      { shape: "box", x: 0.0, z: 0.47, w: 0.94, d: 0.04, y: 0.22, h: 0.58, color: "#88c0d0", finish: "glass", edges: true, fix: "d" },
      // Pitched vaulted structural glass roof (Loft)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.80, h: 0.18, tx: 0.0, tz: 0.0, tw: 0.50, td: 0.98, color: "#3a4a58", finish: "glass", edges: true },
      // Central botanical palm and exotic specimen planter
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.45, d: 0.45, y: 0.22, h: 0.45, color: "#2d6a4f", edges: true, fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.98 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.22 }
    ]
  }
];
