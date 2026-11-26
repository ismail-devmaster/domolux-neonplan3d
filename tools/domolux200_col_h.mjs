// COLLECTION H — SMART HOME, SECURITY AND RESIDENTIAL INFRASTRUCTURE (Products 141–160)
// Architectural Residential Automation, Power, Network & Estate Security

export const COLLECTION_H_PRODUCTS = [
  {
    num: 141,
    id: "master_smart_home_console",
    packId: "domolux.master_smart_home_console",
    name: {
      en: "Domolux Master Smart-Home Architectural Touch Console",
      de: "Domolux Zentrale Smart-Home-Touchkonsole",
      ar: "لوحة التحكم الذكية المعمارية المركزية للمنزل دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Appliances",
    description: "Architectural wall-flush 15-inch edge-to-edge OLED automation dashboard with brushed champagne brass bezel, climate sensors, and customizable scene presets.",
    size: [0.35, 0.08, 0.25],
    mount: "wall",
    wall_y: 1.45,
    group: "appliances",
    room: ["hallway", "living", "kitchen"],
    tags: ["smart_home", "console", "automation", "touchscreen", "display", "domolux"],
    parts: [
      // Wall sub-chassis flush box
      { shape: "box", x: 0.0, z: -0.42, w: 0.94, d: 0.12, y: 0.04, h: 0.92, color: "#141518", fix: "d" },
      // Brushed champagne brass outer picture frame bezel
      { shape: "box", x: 0.0, z: -0.10, w: 0.98, d: 0.06, y: 0.02, h: 0.96, color: "#c5a059", edges: "glow", fix: "d" },
      // Edge-to-edge optical black glass panel
      { shape: "box", x: 0.0, z: 0.15, w: 0.92, d: 0.04, y: 0.06, h: 0.88, color: "#0c0d10", finish: "dark", edges: true, fix: "d" },
      // High-resolution active OLED user interface screen (Glowing cyan/white UI widgets)
      { shape: "box", x: 0.0, z: 0.22, w: 0.84, d: 0.02, y: 0.12, h: 0.76, color: "#00e5ff", glow: true, edges: true, fix: "d" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.40 },
      { shape: "rect", x: 0.0, z: 0.15, w: 0.84, d: 0.10 }
    ]
  },

  {
    num: 142,
    id: "video_intercom_station",
    packId: "domolux.video_intercom_station",
    name: {
      en: "Domolux Architectural Flush Video Intercom Monitor",
      de: "Domolux Architektonische Video-Sprechanlage",
      ar: "شاشة الاتصال الداخلي بالفيديو المعمارية الفاخرة دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Appliances",
    description: "Wall-mounted indoor communication station featuring an 8-inch portrait touchscreen, pinhole HD camera, micro-perforated acoustic speaker array, and solid brass faceplate.",
    size: [0.22, 0.05, 0.32],
    mount: "wall",
    wall_y: 1.50,
    group: "appliances",
    room: ["hallway", "entryway", "kitchen"],
    tags: ["intercom", "security", "touchscreen", "video_doorbell", "access", "domolux"],
    parts: [
      // Wall mounting box
      { shape: "box", x: 0.0, z: -0.40, w: 0.92, d: 0.12, y: 0.04, h: 0.92, color: "#16171b", fix: "d" },
      // Solid brass faceplate with micro-beveled border
      { shape: "box", x: 0.0, z: -0.10, w: 0.98, d: 0.06, y: 0.02, h: 0.96, color: "#c5a059", edges: "glow", fix: "d" },
      // Upper pinhole wide-angle camera lens
      { shape: "cyl", x: 0.0, z: 0.12, w: 0.08, d: 0.08, y: 0.88, h: 0.02, axis: "z", color: "#111215", fix: "wdh" },
      // Portrait glass touchscreen display
      { shape: "box", x: 0.0, z: 0.12, w: 0.84, d: 0.02, y: 0.22, h: 0.62, color: "#00b4d8", glow: true, edges: true, fix: "d" },
      // Lower perforated speaker/mic grille
      { shape: "box", x: 0.0, z: 0.12, w: 0.60, d: 0.02, y: 0.08, h: 0.08, color: "#22252c", fix: "d" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.30 },
      { shape: "circle", x: 0.0, z: 0.12, r: 0.08 }
    ]
  },

  {
    num: 143,
    id: "smart_video_doorbell",
    packId: "domolux.smart_video_doorbell",
    name: {
      en: "Domolux Monumental Entrance Smart Video Doorbell",
      de: "Domolux Smarte Video-Türklingel aus Bronze",
      ar: "جرس الباب الذكي بالفيديو وكاميرا الرؤية الليلية دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Entryway",
    description: "Slimline exterior entryway station milled from a solid billet of dark oxidized bronze, with 4K HDR optical lens, capacitive backlit touch button, and LED status halo.",
    size: [0.08, 0.04, 0.22],
    mount: "wall",
    wall_y: 1.40,
    group: "entryway",
    room: ["hallway", "outdoor"],
    tags: ["doorbell", "camera", "security", "entryway", "bronze", "domolux"],
    parts: [
      // Wall mounting base plate
      { shape: "box", x: 0.0, z: -0.40, w: 0.90, d: 0.15, y: 0.04, h: 0.92, color: "#1a1c20", fix: "d" },
      // Oxidized bronze carved chassis (Loft profile)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.96, d: 0.70, y: 0.02, h: 0.96, tx: 0.0, tz: -0.05, tw: 0.88, td: 0.65, color: "#2a221b", finish: "dark", edges: true },
      // 4K Optical camera glass lens aperture
      { shape: "cyl", x: 0.0, z: 0.25, w: 0.45, d: 0.45, y: 0.72, h: 0.04, axis: "z", color: "#111215", edges: "glow", fix: "wdh" },
      // Capacitive doorbell call push ring (Warm amber LED halo glow)
      { shape: "cyl", x: 0.0, z: 0.25, w: 0.50, d: 0.50, y: 0.25, h: 0.03, axis: "z", color: "#ffa726", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.70 },
      { shape: "circle", x: 0.0, z: 0.25, r: 0.22 }
    ]
  },

  {
    num: 144,
    id: "biometric_access_terminal",
    packId: "domolux.biometric_access_terminal",
    name: {
      en: "Domolux Biometric Facial and Palm-Vein Access Terminal",
      de: "Domolux Biometrisches Zutrittsterminal",
      ar: "جهاز التحقق البيومتري ببصمة الكف وملامح الوجه دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Entryway",
    description: "High-security access pillar featuring 3D structured-light facial recognition cameras, contactless palm-vein scanner window, tamper alarm, and satin gunmetal finish.",
    size: [0.12, 0.06, 0.28],
    mount: "wall",
    wall_y: 1.35,
    group: "entryway",
    room: ["hallway", "outdoor"],
    tags: ["biometric", "access_control", "security", "palm_vein", "facial_recognition", "domolux"],
    parts: [
      // Chassis wall plate
      { shape: "box", x: 0.0, z: -0.40, w: 0.92, d: 0.15, y: 0.04, h: 0.92, color: "#141518", fix: "d" },
      // Gunmetal anodized structural housing
      { shape: "box", x: 0.0, z: 0.02, w: 0.96, d: 0.72, y: 0.02, h: 0.96, color: "#252830", finish: "dark", edges: true },
      // Upper 3D stereoscopic facial camera bar
      { shape: "box", x: 0.0, z: 0.32, w: 0.84, d: 0.04, y: 0.75, h: 0.18, color: "#00e5ff", glow: true, edges: true, fix: "d" },
      // Mid status authorization LED bar (Emerald green)
      { shape: "box", x: 0.0, z: 0.34, w: 0.78, d: 0.02, y: 0.65, h: 0.04, color: "#00e676", glow: true, fix: "d" },
      // Lower contactless palm-vein optical sensor bay
      { shape: "cyl", x: 0.0, z: 0.30, w: 0.45, d: 0.45, y: 0.22, h: 0.04, axis: "z", color: "#8a2be2", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.72 },
      { shape: "circle", x: 0.0, z: 0.30, r: 0.20 }
    ]
  },

  {
    num: 145,
    id: "concealed_security_camera",
    packId: "domolux.concealed_security_camera",
    name: {
      en: "Domolux Architectural Flush-Mount Micro PTZ Dome Camera",
      de: "Domolux Architektonische Decken-Überwachungskamera",
      ar: "كاميرا المراقبة المعمارية السقفية المخفية بزجاج مدخن دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Lighting",
    description: "Flush ceiling-recessed 4K optical zoom micro-dome camera with optically neutral smoked acrylic half-sphere dome, silent magnetic stepper pan-tilt, and infrared illuminator ring.",
    size: [0.14, 0.14, 0.12],
    mount: "ceiling",
    group: "lighting",
    room: ["hallway", "living", "outdoor"],
    tags: ["camera", "security", "ptz", "cctv", "ceiling", "domolux"],
    parts: [
      // Ceiling flush mounting flange ring (Satin brass)
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.88, h: 0.10, color: "#c5a059", edges: "glow", fix: "h" },
      // Smoked optical acrylic dome lens (Half-sphere loft)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.82, d: 0.82, y: 0.25, h: 0.65, tx: 0.0, tz: 0.0, tw: 0.60, td: 0.60, color: "#141820", finish: "glass", edges: true },
      // Internal micro-PTZ optical camera lens module
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.35, d: 0.35, y: 0.45, h: 0.35, color: "#00e5ff", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: 0.0, r: 0.48 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.18 }
    ]
  },

  {
    num: 146,
    id: "perimeter_security_sensor_bollard",
    packId: "domolux.perimeter_security_sensor_bollard",
    name: {
      en: "Domolux Estate Perimeter Active-Infrared Security Bollard",
      de: "Domolux Perimeter-Sicherheits- und Sensorpoller",
      ar: "عمود أمان واستشعار محيطي للأراضي والحدائق الفاخرة دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Entryway",
    description: "Substantial architectural bronze perimeter bollard concealing multi-beam active infrared intrusion sensors, microwave radar, and discreet pathway wash lighting.",
    size: [0.22, 0.22, 1.05],
    mount: "floor",
    group: "entryway",
    room: ["outdoor", "hallway"],
    tags: ["bollard", "perimeter", "security", "infrared", "radar", "outdoor", "domolux"],
    parts: [
      // Concrete footer anchor flange
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.94, y: 0.0, h: 0.08, color: "#181a1f", fix: "h" },
      // Heavy architectural bronze extruded column shaft
      { shape: "box", x: 0.0, z: 0.0, w: 0.82, d: 0.82, y: 0.08, h: 0.84, color: "#2e251e", finish: "dark", edges: true },
      // Smoked optical polycarbonate sensor window slit (Quad-beam IR)
      { shape: "box", x: 0.0, z: 0.38, w: 0.44, d: 0.06, y: 0.25, h: 0.58, color: "#8b0000", glow: true, fix: "wd" },
      // Top chamfered cap with 360-degree pathway wash LED ring
      { shape: "box", x: 0.0, z: 0.0, w: 0.86, d: 0.86, y: 0.92, h: 0.06, color: "#c5a059", edges: "glow", fix: "h" },
      { shape: "box", x: 0.0, z: 0.0, w: 0.80, d: 0.80, y: 0.88, h: 0.04, color: "#fff3cc", glow: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.94, d: 0.94 },
      { shape: "rect", x: 0.0, z: 0.38, w: 0.44, d: 0.06 }
    ]
  },

  {
    num: 147,
    id: "smart_keypad_lock",
    packId: "domolux.smart_keypad_lock",
    name: {
      en: "Domolux Monumental Deadbolt Smart Keypad Lock",
      de: "Domolux Luxus-Sicherheitsschloss mit Touch-Tastatur",
      ar: "قفل الأمان الذكي للأبواب بلوحة مفاتيح لمسية مشعة دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Entryway",
    description: "Heavy forged brass smart escutcheon with motorized high-torque deadbolt, capacitive anti-peep illuminated pin keypad, Apple HomeKey NFC tap, and concealed mechanical cylinder.",
    size: [0.08, 0.06, 0.30],
    mount: "wall",
    wall_y: 1.05,
    group: "entryway",
    room: ["hallway", "outdoor"],
    tags: ["smart_lock", "keypad", "deadbolt", "security", "brass", "domolux"],
    parts: [
      // Door escutcheon sub-plate
      { shape: "box", x: 0.0, z: -0.40, w: 0.88, d: 0.15, y: 0.04, h: 0.92, color: "#16171b", fix: "d" },
      // Solid brushed brass escutcheon plate
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.65, y: 0.02, h: 0.96, color: "#c5a059", edges: "glow" },
      // Capacitive glass touchscreen keypad window (Illuminated digits)
      { shape: "box", x: 0.0, z: 0.28, w: 0.74, d: 0.04, y: 0.52, h: 0.38, color: "#ffffff", glow: true, edges: true, fix: "d" },
      // Apple HomeKey / NFC tap sensor icon ring
      { shape: "cyl", x: 0.0, z: 0.28, w: 0.25, d: 0.25, y: 0.35, h: 0.03, axis: "z", color: "#00e5ff", glow: true, fix: "wdh" },
      // Concealed mechanical emergency keyway flip-cap
      { shape: "cyl", x: 0.0, z: 0.28, w: 0.18, d: 0.18, y: 0.12, h: 0.03, axis: "z", color: "#8a6d3b", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.65 },
      { shape: "circle", x: 0.0, z: 0.28, r: 0.12 }
    ]
  },

  {
    num: 148,
    id: "automated_access_gate_operator",
    packId: "domolux.automated_access_gate_operator",
    name: {
      en: "Domolux Estate Heavy-Duty Hydraulic Gate Operator Pylon",
      de: "Domolux Hydraulischer Torantrieb-Pylon",
      ar: "محرك البوابات الهيدروليكي فائق القوة للقصور الفاخرة دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Entryway",
    description: "Industrial continuous-duty hydraulic operator column capable of swinging massive 1,200kg bronze gates, with battery backup, soft-close deceleration, and internal diagnostic computer.",
    size: [0.45, 0.35, 0.85],
    mount: "floor",
    group: "entryway",
    room: ["outdoor"],
    tags: ["gate_operator", "hydraulic", "estate", "automation", "security", "domolux"],
    parts: [
      // Cast bronze anchor mounting base
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.94, y: 0.0, h: 0.12, color: "#141518", fix: "h" },
      // Heavy weather-sealed 316-stainless cabinet body
      { shape: "box", x: 0.0, z: -0.02, w: 0.92, d: 0.88, y: 0.12, h: 0.82, color: "#22252c", finish: "dark", edges: true },
      // Hydraulic rotary output pivot drive collar
      { shape: "cyl", x: 0.0, z: 0.15, w: 0.42, d: 0.42, y: 0.88, h: 0.12, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Swing articulating mechanical drive arm
      { shape: "box", x: 0.15, z: 0.32, w: 0.48, d: 0.12, y: 0.92, h: 0.06, color: "metal", edges: true, fix: "h" },
      // Manual emergency key release door
      { shape: "box", x: 0.0, z: 0.42, w: 0.24, d: 0.02, y: 0.45, h: 0.22, color: "#c5a059", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.94 },
      { shape: "circle", x: 0.0, z: 0.15, r: 0.21 }
    ]
  },

  {
    num: 149,
    id: "residential_server_rack",
    packId: "domolux.residential_server_rack",
    name: {
      en: "Domolux Datacenter 42U Acoustic Residential Server Cabinet",
      de: "Domolux 42HE Akustik-Serverschrank",
      ar: "كابينة خوادم وشبكات سكنية فائقة الأداء معزولة صوتياً دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Appliances",
    description: "Soundproof 42U equipment rack with integrated air conditioning exchanger, dual 10Gbps fiber patch panels, managed PoE switches, and glass door with blue telemetry LED wash.",
    size: [0.80, 1.00, 2.05],
    mount: "floor",
    group: "appliances",
    room: ["storage", "office"],
    tags: ["server_rack", "datacenter", "networking", "rack", "infrastructure", "domolux"],
    parts: [
      // Base heavy caster and leveling frame
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.0, h: 0.06, color: "#111215", fix: "h" },
      // Sound-attenuated steel enclosure carcass
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.06, h: 0.92, color: "#1e2129", finish: "dark", edges: true },
      // Tempered glass front door
      { shape: "box", x: 0.0, z: 0.46, w: 0.88, d: 0.04, y: 0.08, h: 0.88, color: "#16202c", finish: "glass", edges: true, fix: "d" },
      // Rack chassis internal components (5 server blades with blue status LEDs)
      { shape: "box", x: 0.0, z: 0.20, w: 0.82, d: 0.50, y: 0.75, h: 0.15, color: "#2d323e", edges: true },
      { shape: "box", x: 0.0, z: 0.42, w: 0.74, d: 0.02, y: 0.80, h: 0.04, color: "#00e5ff", glow: true, fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.20, w: 0.82, d: 0.50, y: 0.55, h: 0.15, color: "#2d323e", edges: true },
      { shape: "box", x: 0.0, z: 0.42, w: 0.74, d: 0.02, y: 0.60, h: 0.04, color: "#00e5ff", glow: true, fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.20, w: 0.82, d: 0.50, y: 0.35, h: 0.15, color: "#2d323e", edges: true },
      { shape: "box", x: 0.0, z: 0.42, w: 0.74, d: 0.02, y: 0.40, h: 0.04, color: "#00e5ff", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.96 },
      { shape: "rect", x: 0.0, z: 0.20, w: 0.82, d: 0.50 }
    ]
  },

  {
    num: 150,
    id: "uninterruptible_power_supply",
    packId: "domolux.uninterruptible_power_supply",
    name: {
      en: "Domolux Industrial Lithium Double-Conversion Online UPS",
      de: "Domolux Industrielle Online-USV-Stromversorgung",
      ar: "نظام إمداد الطاقة غير المنقطعة وحماية الأحمال الحساسة دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Appliances",
    description: "True online double-conversion 20kVA UPS unit with zero transfer time, lithium iron phosphate battery drawers, SNMP network monitoring, and acoustic dampening.",
    size: [0.55, 0.75, 1.25],
    mount: "floor",
    group: "appliances",
    room: ["storage", "office"],
    tags: ["ups", "power", "backup", "battery", "datacenter", "domolux"],
    parts: [
      // Heavy steel base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.94, y: 0.0, h: 0.08, color: "#111215", fix: "h" },
      // Enclosure chassis body
      { shape: "box", x: 0.0, z: -0.02, w: 0.96, d: 0.92, y: 0.08, h: 0.90, color: "#22252c", finish: "dark", edges: true },
      // Front cooling intake louvered grilles
      { shape: "box", x: 0.0, z: 0.44, w: 0.84, d: 0.04, y: 0.12, h: 0.55, color: "#16171b", edges: true, fix: "d" },
      // Touch telemetry diagnostic color screen
      { shape: "box", x: 0.0, z: 0.44, w: 0.60, d: 0.04, y: 0.75, h: 0.16, color: "#00e676", glow: true, edges: true, fix: "d" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.94 },
      { shape: "line", x1: -0.42, z1: 0.44, x2: 0.42, z2: 0.44 }
    ]
  },

  {
    num: 151,
    id: "residential_battery_storage_wall",
    packId: "domolux.residential_battery_storage_wall",
    name: {
      en: "Domolux PowerVault High-Capacity Solar Energy Storage Wall",
      de: "Domolux PowerVault Solarstrom-Wandspeicher",
      ar: "جدار تخزين الطاقة الشمسية الفاخر عالي السعة دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Appliances",
    description: "Slimline architectural wall-mounted 30kWh lithium energy storage system with liquid thermal management, integrated bidirectional inverter, and ambient charge status LED light strip.",
    size: [1.20, 0.22, 1.65],
    mount: "wall",
    wall_y: 0.20,
    group: "appliances",
    room: ["storage", "outdoor"],
    tags: ["battery", "solar", "energy_storage", "powervault", "green_energy", "domolux"],
    parts: [
      // Rear wall mounting bracket
      { shape: "box", x: 0.0, z: -0.40, w: 0.96, d: 0.12, y: 0.02, h: 0.96, color: "#141518", fix: "d" },
      // Matte white monolithic battery pack casing (Loft curved front)
      { shape: "loft", x: 0.0, z: 0.02, w: 0.98, d: 0.72, y: 0.02, h: 0.96, tx: 0.0, tz: -0.05, tw: 0.96, td: 0.68, color: "#f8f9fa", finish: "white", edges: true },
      // Satin champagne bronze top cap and base trim
      { shape: "box", x: 0.0, z: 0.02, w: 0.98, d: 0.74, y: 0.96, h: 0.03, color: "#c5a059", edges: "glow", fix: "h" },
      { shape: "box", x: 0.0, z: 0.02, w: 0.98, d: 0.74, y: 0.0, h: 0.03, color: "#c5a059", edges: "glow", fix: "h" },
      // Vertical pulse LED charge-level light pipe (Emerald green / cyan)
      { shape: "box", x: 0.0, z: 0.38, w: 0.02, d: 0.02, y: 0.15, h: 0.70, color: "#00e676", glow: true, fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.74 },
      { shape: "line", x1: -0.48, z1: 0.38, x2: 0.48, z2: 0.38 }
    ]
  },

  {
    num: 152,
    id: "smart_electrical_panel",
    packId: "domolux.smart_electrical_panel",
    name: {
      en: "Domolux Quantum-Grid Smart Electrical Distribution Panel",
      de: "Domolux Intelligente Stromverteilung & Smart-Panel",
      ar: "لوحة التوزيع الكهربائي الذكية وإدارة الأحمال الرقمية دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Appliances",
    description: "Next-generation energy management distribution panel with 60 remote-controllable smart breakers, real-time circuit power analytics, and bronze lockable flush door.",
    size: [0.65, 0.18, 1.10],
    mount: "wall",
    wall_y: 0.90,
    group: "appliances",
    room: ["storage", "hallway"],
    tags: ["electrical_panel", "smart_breakers", "energy", "distribution", "power", "domolux"],
    parts: [
      // Wall recessed tub carcass
      { shape: "box", x: 0.0, z: -0.38, w: 0.94, d: 0.16, y: 0.02, h: 0.96, color: "#16171b", fix: "d" },
      // Architectural flush door enclosure (Gunmetal finish)
      { shape: "box", x: 0.0, z: 0.10, w: 0.98, d: 0.06, y: 0.0, h: 0.98, color: "#282b33", finish: "dark", edges: true, fix: "d" },
      // Internal dual breaker columns preview (Glass window view)
      { shape: "box", x: -0.22, z: 0.16, w: 0.32, d: 0.02, y: 0.12, h: 0.76, color: "#00e5ff", glow: true, fix: "d" },
      { shape: "box", x: 0.22, z: 0.16, w: 0.32, d: 0.02, y: 0.12, h: 0.76, color: "#00e5ff", glow: true, fix: "d" },
      // Brushed bronze recessed latch handle
      { shape: "box", x: 0.40, z: 0.14, w: 0.04, d: 0.03, y: 0.45, h: 0.12, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.45 },
      { shape: "line", x1: 0.0, z1: -0.22, x2: 0.0, z2: 0.22 }
    ]
  },

  {
    num: 153,
    id: "ev_charging_pedestal",
    packId: "domolux.ev_charging_pedestal",
    name: {
      en: "Domolux 22kW High-Output Architectural EV Fast-Charging Pedestal",
      de: "Domolux 22kW Designer-Ladestation für Elektrofahrzeuge",
      ar: "محطة شحن السيارات الكهربائية السريعة المعمارية دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Entryway",
    description: "Monolithic outdoor EV charging pylon with integrated 22kW Type 2 cable management reel, illuminated RFID authentication dial, and brushed bronze armor.",
    size: [0.38, 0.28, 1.45],
    mount: "floor",
    group: "entryway",
    room: ["outdoor"],
    tags: ["ev_charger", "electric_vehicle", "charging_station", "pedestal", "outdoor", "domolux"],
    parts: [
      // Cast bronze anchor plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.94, y: 0.0, h: 0.08, color: "#141518", fix: "h" },
      // Sculpted vertical pylon shaft (Loft)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.88, d: 0.84, y: 0.08, h: 0.88, tx: 0.0, tz: -0.05, tw: 0.75, td: 0.72, color: "#22252c", finish: "dark", edges: true },
      // Glowing interactive circular RFID / status charging halo (Cyan)
      { shape: "cyl", x: 0.0, z: 0.36, w: 0.42, d: 0.42, y: 0.65, h: 0.03, axis: "z", color: "#00e5ff", glow: true, fix: "wdh" },
      // Recessed Type 2 connector holster socket
      { shape: "cyl", x: 0.0, z: 0.36, w: 0.25, d: 0.25, y: 0.40, h: 0.05, axis: "z", color: "#111215", fix: "wdh" },
      // Top weather shield cap (Brushed bronze)
      { shape: "box", x: 0.0, z: 0.0, w: 0.80, d: 0.78, y: 0.96, h: 0.04, color: "#c5a059", edges: "glow", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.88, d: 0.84 },
      { shape: "circle", x: 0.0, z: 0.36, r: 0.20 }
    ]
  },

  {
    num: 154,
    id: "backup_diesel_generator",
    packId: "domolux.backup_diesel_generator",
    name: {
      en: "Domolux Silent Estate Standby Emergency Power Generator",
      de: "Domolux Schallgedämpftes Notstromaggregat",
      ar: "مولد الكهرباء الاحتياطي فائق الهدوء للقصور والمجمعات الفاخرة دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Appliances",
    description: "Heavy acoustic-damped 65kVA standby emergency generator with critical-grade exhaust silencer, automatic transfer switch interface, and weather-sealed dual service doors.",
    size: [2.20, 1.10, 1.40],
    mount: "floor",
    group: "appliances",
    room: ["outdoor", "storage"],
    tags: ["generator", "backup_power", "emergency", "diesel", "infrastructure", "domolux"],
    parts: [
      // Heavy anti-vibration concrete mounting pad
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.0, h: 0.10, color: "#181a1f", fix: "h" },
      // Soundproofed weather-sealed acoustic canopy enclosure
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.92, y: 0.10, h: 0.86, color: "#2f3542", finish: "dark", edges: true },
      // Left intake ventilation sound attenuator louver
      { shape: "box", x: -0.42, z: 0.0, w: 0.06, d: 0.74, y: 0.25, h: 0.55, color: "#1e2229", fix: "w" },
      // Right exhaust sound attenuator louver
      { shape: "box", x: 0.42, z: 0.0, w: 0.06, d: 0.74, y: 0.25, h: 0.55, color: "#1e2229", fix: "w" },
      // Top stainless exhaust rain-cap pipe
      { shape: "cyl", x: 0.25, z: 0.0, w: 0.14, d: 0.14, y: 0.96, h: 0.04, color: "metal", edges: true, fix: "wdh" },
      // Diagnostic telemetry control panel window
      { shape: "box", x: -0.15, z: 0.46, w: 0.32, d: 0.02, y: 0.52, h: 0.24, color: "#00e5ff", glow: true, fix: "d" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.94, d: 0.92 },
      { shape: "circle", x: 0.25, z: 0.0, r: 0.08 }
    ]
  },

  {
    num: 155,
    id: "water_leak_shutoff_valve",
    packId: "domolux.water_leak_shutoff_valve",
    name: {
      en: "Domolux Smart Motorized Whole-Home Water Security Shutoff",
      de: "Domolux Intelligentes Hauptwasser-Absperrventil",
      ar: "صمام الأمان الذكي للغلق الآلي الفوري لمياه المنزل دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Appliances",
    description: "Ultrasonic whole-home water consumption monitor with automated high-torque motorized brass ball valve shutoff, micro-leak detection, and Zigbee/Thread mesh radio.",
    size: [0.30, 0.22, 0.35],
    mount: "wall",
    wall_y: 0.45,
    group: "appliances",
    room: ["storage", "kitchen"],
    tags: ["water_shutoff", "leak_detection", "smart_valve", "plumbing", "security", "domolux"],
    parts: [
      // Heavy cast solid brass main valve body
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.35, d: 0.35, y: 0.12, h: 0.88, axis: "x", color: "#c5a059", edges: "glow", fix: "wd" },
      // Threaded inlet/outlet pipe couplings
      { shape: "cyl", x: -0.42, z: 0.0, w: 0.28, d: 0.28, y: 0.15, h: 0.15, axis: "x", color: "#8a6d3b", fix: "wdh" },
      { shape: "cyl", x: 0.42, z: 0.0, w: 0.28, d: 0.28, y: 0.15, h: 0.15, axis: "x", color: "#8a6d3b", fix: "wdh" },
      // Upper waterproof electric servo actuator housing (Gunmetal)
      { shape: "box", x: 0.0, z: 0.0, w: 0.72, d: 0.72, y: 0.38, h: 0.58, color: "#252830", finish: "dark", edges: true },
      // Manual emergency override butterfly lever
      { shape: "box", x: 0.0, z: 0.0, w: 0.65, d: 0.15, y: 0.94, h: 0.06, color: "#ff4d4f", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.72, d: 0.72 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.18 }
    ]
  },

  {
    num: 156,
    id: "indoor_air_quality_monitor",
    packId: "domolux.indoor_air_quality_monitor",
    name: {
      en: "Domolux Precision Architectural Air-Quality Environmental Sensor",
      de: "Domolux Architektonischer Raumluft-Sensor",
      ar: "مستشعر جودة الهواء والبيئة الداخلية الذكي دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Appliances",
    description: "Minimalist wall sensor housing laser particulate PM2.5, NDIR CO2, VOC, humidity, and barometric sensors within a milled brass and frosted optical glass disc.",
    size: [0.16, 0.06, 0.16],
    mount: "wall",
    wall_y: 1.45,
    group: "appliances",
    room: ["living", "bedroom", "office"],
    tags: ["air_quality", "sensor", "co2", "environment", "wellness", "domolux"],
    parts: [
      // Wall sub-plate
      { shape: "cyl", x: 0.0, z: -0.40, w: 0.88, d: 0.88, y: 0.05, h: 0.12, axis: "z", color: "#141518", fix: "wdh" },
      // Milled champagne brass perimeter outer ring
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.02, h: 0.35, axis: "z", color: "#c5a059", edges: "glow", fix: "wdh" },
      // Frosted diffusion glass face lens
      { shape: "cyl", x: 0.0, z: 0.22, w: 0.82, d: 0.82, y: 0.08, h: 0.12, axis: "z", color: "#e8ecef", finish: "glass", fix: "wdh" },
      // Ambient halo air quality indicator ring (Healthy Emerald Green)
      { shape: "cyl", x: 0.0, z: 0.24, w: 0.60, d: 0.60, y: 0.18, h: 0.04, axis: "z", color: "#00e676", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: 0.0, r: 0.48 },
      { shape: "circle", x: 0.0, z: 0.24, r: 0.30 }
    ]
  },

  {
    num: 157,
    id: "smart_thermostat_console",
    packId: "domolux.smart_thermostat_console",
    name: {
      en: "Domolux Rotational Glass and Brass Climate Thermostat Dial",
      de: "Domolux Designer-Raumthermostat mit Drehring",
      ar: "منظم الحرارة والمناخ الذكي بحلقة نحاسية وشاشة رقمية دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Appliances",
    description: "Rotational wall climate dial featuring a knurled solid brass rotary outer bezel, high-contrast round AMOLED display, and integrated radar proximity wake-up.",
    size: [0.14, 0.04, 0.14],
    mount: "wall",
    wall_y: 1.45,
    group: "appliances",
    room: ["living", "bedroom", "hallway"],
    tags: ["thermostat", "climate", "hvac", "brass", "rotary", "domolux"],
    parts: [
      // Wall mounting sub-base
      { shape: "cyl", x: 0.0, z: -0.42, w: 0.90, d: 0.90, y: 0.05, h: 0.12, axis: "z", color: "#141518", fix: "wdh" },
      // Knurled precision brass rotary control dial ring
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.02, h: 0.42, axis: "z", color: "#c5a059", edges: "glow", fix: "wdh" },
      // High-contrast circular AMOLED display face
      { shape: "cyl", x: 0.0, z: 0.26, w: 0.76, d: 0.76, y: 0.12, h: 0.05, axis: "z", color: "#000000", finish: "dark", fix: "wdh" },
      // Glowing temperature readout numerals (Crisp white / warm orange setpoint)
      { shape: "cyl", x: 0.0, z: 0.28, w: 0.42, d: 0.42, y: 0.28, h: 0.02, axis: "z", color: "#ff9800", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: 0.0, r: 0.48 },
      { shape: "circle", x: 0.0, z: 0.26, r: 0.38 }
    ]
  },

  {
    num: 158,
    id: "central_vacuum_inlet_valve",
    packId: "domolux.central_vacuum_inlet_valve",
    name: {
      en: "Domolux Architectural Flush Central Vacuum Inlet Port",
      de: "Domolux Architektonische Zentralstaubsauger-Saugdose",
      ar: "منفذ شفط المكنسة المركزية الجداري المعماري الفاخر دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Appliances",
    description: "Low-profile spring-loaded central vacuum suction valve with magnetic soft-close flap, microswitch low-voltage trigger pins, and solid brass faceplate.",
    size: [0.15, 0.06, 0.22],
    mount: "wall",
    wall_y: 0.35,
    group: "appliances",
    room: ["hallway", "living", "bedroom"],
    tags: ["central_vacuum", "suction_inlet", "plumbing", "cleaning", "brass", "domolux"],
    parts: [
      // Wall rough-in box
      { shape: "box", x: 0.0, z: -0.40, w: 0.88, d: 0.14, y: 0.04, h: 0.92, color: "#141518", fix: "d" },
      // Brushed solid brass faceplate
      { shape: "box", x: 0.0, z: -0.05, w: 0.96, d: 0.08, y: 0.02, h: 0.96, color: "#c5a059", edges: "glow", fix: "d" },
      // Spring-loaded magnetic closure flap door
      { shape: "box", x: 0.0, z: 0.22, w: 0.74, d: 0.04, y: 0.15, h: 0.68, color: "#8a6d3b", edges: true, fix: "d" },
      // Low-profile finger lift lip
      { shape: "box", x: 0.0, z: 0.28, w: 0.24, d: 0.04, y: 0.18, h: 0.05, color: "#c5a059", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.40 },
      { shape: "rect", x: 0.0, z: 0.22, w: 0.74, d: 0.10 }
    ]
  },

  {
    num: 159,
    id: "commercial_grade_wifi_ap",
    packId: "domolux.commercial_grade_wifi_ap",
    name: {
      en: "Domolux Ultra-High-Density Wi-Fi 7 Enterprise Ceiling Access Point",
      de: "Domolux High-End Wi-Fi 7 Decken-Access-Point",
      ar: "نقطة الوصول اللاسلكية المعمارية السقفية بتقنية واي فاي 7 دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Appliances",
    description: "Ceiling-mounted tri-band Wi-Fi 7 commercial wireless access point supporting up to 10Gbps aggregate throughput, with multi-color status beacon halo and sleek white dome.",
    size: [0.25, 0.25, 0.06],
    mount: "ceiling",
    group: "appliances",
    room: ["hallway", "living", "office"],
    tags: ["wifi", "access_point", "networking", "wifi7", "ceiling", "domolux"],
    parts: [
      // Ceiling mounting sub-plate
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.90, d: 0.90, y: 0.85, h: 0.15, color: "#141518", fix: "h" },
      // Aerodynamic curvilinear saucer dome shell (Loft)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.10, h: 0.75, tx: 0.0, tz: 0.0, tw: 0.82, td: 0.82, color: "#f8f9fa", finish: "white", edges: true },
      // Micro-thin center status beacon LED ring (Subtle Ice Blue glow)
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.28, d: 0.28, y: 0.05, h: 0.06, color: "#00e5ff", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: 0.0, r: 0.48 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.14 }
    ]
  },

  {
    num: 160,
    id: "lightning_protection_terminal",
    packId: "domolux.lightning_protection_terminal",
    name: {
      en: "Domolux Early-Streamer-Emission Architectural Lightning Protection Terminal",
      de: "Domolux Architektonischer Blitzschutz-Endpol ESE",
      ar: "نظام الحماية المعماري من الصواعق بتقنية التفريغ المسبق دومولوكس"
    },
    collection: "Smart Home, Security and Residential Infrastructure",
    collectionSlug: "08_Smart_Home_Security",
    category: "Appliances",
    description: "Rooftop Early Streamer Emission (ESE) lightning air terminal crafted from solid chrome-plated copper and bronze, featuring high-voltage ion generator fins and grounding collar.",
    size: [0.25, 0.25, 1.20],
    mount: "roof",
    group: "appliances",
    room: ["outdoor"],
    tags: ["lightning_rod", "ese", "protection", "safety", "roof", "domolux"],
    parts: [
      // Roof structural heavy mounting flange
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.88, d: 0.88, y: 0.0, h: 0.08, color: "#141518", fix: "h" },
      // Base heavy copper grounding collar
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.45, d: 0.45, y: 0.08, h: 0.18, color: "#c5a059", edges: "glow", fix: "wd" },
      // Main central chrome-plated discharge shaft
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.12, d: 0.12, y: 0.26, h: 0.58, color: "metal", edges: true, fix: "wd" },
      // ESE active ion generator atmospheric fin ring
      { shape: "loft", x: 0.0, z: 0.0, w: 0.72, d: 0.72, y: 0.62, h: 0.18, tx: 0.0, tz: 0.0, tw: 0.42, td: 0.42, color: "#c5a059", edges: "glow" },
      // Sharp needle discharge air terminal tip
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.04, d: 0.04, y: 0.84, h: 0.16, color: "metal", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: 0.0, r: 0.44 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.18 }
    ]
  }
];
