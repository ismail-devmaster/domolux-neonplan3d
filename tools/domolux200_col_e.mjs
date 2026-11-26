// COLLECTION E — COMPLETE BATHROOM, SPA AND PERSONAL WELLNESS (Products 081–100)
// Architectural, Ultra-Luxury & Hydrotherapy Form Factors

export const COLLECTION_E_PRODUCTS = [
  {
    num: 81,
    id: "wall_hung_bidet",
    packId: "domolux.wall_hung_bidet",
    name: {
      en: "Domolux Architectural Wall-Hung Ceramic Bidet",
      de: "Domolux Wandhängendes Designer-Bidet",
      ar: "شطاف حمام جداري معلق من السيراميك الفاخر دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Sculpted minimalist wall-hung vitrified porcelain bidet with concealed carrier frame integration, ergonomic contoured bowl cavity, and precision brushed bronze single-lever mixer.",
    size: [0.38, 0.56, 0.40],
    mount: "wall",
    wall_y: 0.15,
    group: "bathroom",
    room: ["bathroom"],
    tags: ["bidet", "porcelain", "wellness", "hygiene", "bathroom", "domolux"],
    parts: [
      // Wall mounting sub-flange
      { shape: "box", x: 0.0, z: -0.46, w: 0.82, d: 0.08, y: 0.05, h: 0.90, color: "#22252c", edges: true, fix: "d" },
      // Vitrified porcelain bowl body (Loft tapered down)
      { shape: "loft", x: 0.0, z: -0.05, w: 0.92, d: 0.82, y: 0.15, h: 0.85, tx: 0.0, tz: -0.08, tw: 0.72, td: 0.65, color: "#f8f9fa", finish: "white", edges: true },
      // Internal sculpted cavity (Darker recessed basin interior)
      { shape: "box", x: 0.0, z: 0.05, w: 0.68, d: 0.56, y: 0.45, h: 0.52, color: "#e2e6ea", finish: "white", edges: true },
      // Ceramic bottom drain plug
      { shape: "cyl", x: 0.0, z: 0.12, w: 0.16, d: 0.16, y: 0.46, h: 0.02, color: "#c5a059", fix: "wdh" },
      // Brushed bronze mixer tap pillar
      { shape: "cyl", x: 0.0, z: -0.32, w: 0.08, d: 0.08, y: 0.82, h: 0.12, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Aerator nozzle spout
      { shape: "box", x: 0.0, z: -0.25, w: 0.06, d: 0.12, y: 0.94, h: 0.04, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: -0.05, w: 0.92, d: 0.82 },
      { shape: "circle", x: 0.0, z: 0.05, r: 0.28 }
    ]
  },

  {
    num: 82,
    id: "heated_towel_rail",
    packId: "domolux.heated_towel_rail",
    name: {
      en: "Domolux Sculptural Architectural Heated Towel Rail",
      de: "Domolux Architektonischer Handtuchwärmer",
      ar: "مدفأة مناشف معمارية مسخنة دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Vertical architectural hydronic and electric dry-element towel radiator with brushed bronze square-profile vertical headers and horizontal cross-tubes.",
    size: [0.60, 0.12, 1.20],
    mount: "wall",
    wall_y: 0.80,
    group: "bathroom",
    room: ["bathroom"],
    tags: ["towel_rail", "radiator", "heating", "bronze", "bathroom", "domolux"],
    parts: [
      // Wall mounting standoffs
      { shape: "box", x: -0.42, z: -0.42, w: 0.08, d: 0.14, y: 0.15, h: 0.08, color: "#1c1d22", fix: "wdh" },
      { shape: "box", x: 0.42, z: -0.42, w: 0.08, d: 0.14, y: 0.15, h: 0.08, color: "#1c1d22", fix: "wdh" },
      { shape: "box", x: -0.42, z: -0.42, w: 0.08, d: 0.14, y: 0.85, h: 0.08, color: "#1c1d22", fix: "wdh" },
      { shape: "box", x: 0.42, z: -0.42, w: 0.08, d: 0.14, y: 0.85, h: 0.08, color: "#1c1d22", fix: "wdh" },
      // Left vertical riser rail
      { shape: "box", x: -0.42, z: -0.28, w: 0.08, d: 0.08, y: 0.02, h: 0.96, color: "#c5a059", edges: "glow", fix: "wd" },
      // Right vertical riser rail
      { shape: "box", x: 0.42, z: -0.28, w: 0.08, d: 0.08, y: 0.02, h: 0.96, color: "#c5a059", edges: "glow", fix: "wd" },
      // Horizontal warming rungs (6 tubes)
      { shape: "cyl", x: 0.0, z: -0.28, w: 0.05, d: 0.05, y: 0.16, h: 0.80, axis: "x", color: "#d4af37", fix: "wd" },
      { shape: "cyl", x: 0.0, z: -0.28, w: 0.05, d: 0.05, y: 0.32, h: 0.80, axis: "x", color: "#d4af37", fix: "wd" },
      { shape: "cyl", x: 0.0, z: -0.28, w: 0.05, d: 0.05, y: 0.48, h: 0.80, axis: "x", color: "#d4af37", fix: "wd" },
      { shape: "cyl", x: 0.0, z: -0.28, w: 0.05, d: 0.05, y: 0.64, h: 0.80, axis: "x", color: "#d4af37", fix: "wd" },
      { shape: "cyl", x: 0.0, z: -0.28, w: 0.05, d: 0.05, y: 0.80, h: 0.80, axis: "x", color: "#d4af37", fix: "wd" },
      { shape: "cyl", x: 0.0, z: -0.28, w: 0.05, d: 0.05, y: 0.94, h: 0.80, axis: "x", color: "#d4af37", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: -0.28, w: 0.92, d: 0.12 },
      { shape: "line", x1: -0.42, z1: -0.28, x2: 0.42, z2: -0.28 }
    ]
  },

  {
    num: 83,
    id: "heated_towel_cabinet",
    packId: "domolux.heated_towel_cabinet",
    name: {
      en: "Domolux Thermal Linen and Towel Warming Cabinet",
      de: "Domolux Beheizbarer Handtuchwärmeschrank",
      ar: "خزانة تدفئة المناشف والبياضات الفاخرة دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Freestanding or under-vanity heated spa cabinet with UV sterilization, insulated brushed metal carcass, fluted smoked-glass door, and interior wire racks.",
    size: [0.55, 0.45, 0.85],
    mount: "floor",
    group: "bathroom",
    room: ["bathroom"],
    tags: ["towel_warmer", "sanitizer", "linen", "spa", "bathroom", "domolux"],
    parts: [
      // Base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.92, y: 0.0, h: 0.06, color: "#181a1f", fix: "h" },
      // Insulated stainless chassis body
      { shape: "box", x: 0.0, z: -0.02, w: 0.98, d: 0.92, y: 0.06, h: 0.92, color: "#2d3037", finish: "dark", edges: true },
      // Recessed interior cavity
      { shape: "box", x: 0.0, z: 0.05, w: 0.86, d: 0.76, y: 0.12, h: 0.80, color: "#1c1e24" },
      // Internal wire basket shelves
      { shape: "box", x: 0.0, z: 0.05, w: 0.84, d: 0.74, y: 0.42, h: 0.02, color: "metal", fix: "h" },
      { shape: "box", x: 0.0, z: 0.05, w: 0.84, d: 0.74, y: 0.68, h: 0.02, color: "metal", fix: "h" },
      // UV sanitize germicidal emitter tube
      { shape: "cyl", x: 0.0, z: -0.28, w: 0.04, d: 0.04, y: 0.88, h: 0.70, axis: "x", color: "#8a2be2", glow: true, fix: "wd" },
      // Fluted bronze glass door
      { shape: "box", x: 0.0, z: 0.44, w: 0.94, d: 0.04, y: 0.08, h: 0.88, color: "#3a3429", finish: "glass", edges: true, fix: "d" },
      // Door vertical grip handle
      { shape: "cyl", x: 0.40, z: 0.48, w: 0.03, d: 0.03, y: 0.35, h: 0.40, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.94 },
      { shape: "line", x1: -0.45, z1: 0.44, x2: 0.45, z2: 0.44 }
    ]
  },

  {
    num: 84,
    id: "mirrored_medicine_cabinet",
    packId: "domolux.mirrored_medicine_cabinet",
    name: {
      en: "Domolux Recessed Tri-View Mirrored Cabinet",
      de: "Domolux 3-teiliger LED-Spiegelschrank",
      ar: "خزانة أدوية ومستحضرات جدارية ثلاثية المرايا بإضاءة محيطية دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Tri-view recessed wall cabinet with bevelled optical float mirror faces, internal integrated electric toothbrush charging docks, and perimeter halo ambient illumination.",
    size: [0.90, 0.16, 0.80],
    mount: "wall",
    wall_y: 1.20,
    group: "bathroom",
    room: ["bathroom"],
    tags: ["medicine_cabinet", "mirror", "storage", "lighting", "bathroom", "domolux"],
    parts: [
      // Wall sub-frame carcass
      { shape: "box", x: 0.0, z: -0.38, w: 0.96, d: 0.20, y: 0.04, h: 0.92, color: "#1e2025", edges: true, fix: "d" },
      // Perimeter diffuse LED backlight halo
      { shape: "box", x: 0.0, z: -0.26, w: 0.98, d: 0.04, y: 0.02, h: 0.96, color: "#fff3cc", glow: true, fix: "d" },
      // Main center mirror door
      { shape: "box", x: 0.0, z: 0.15, w: 0.48, d: 0.04, y: 0.02, h: 0.96, color: "#a8c0d8", finish: "glass", edges: true, fix: "d" },
      // Left angled wing mirror
      { shape: "box", x: -0.36, z: 0.15, w: 0.22, d: 0.04, y: 0.02, h: 0.96, color: "#a8c0d8", finish: "glass", edges: true, fix: "d" },
      // Right angled wing mirror
      { shape: "box", x: 0.36, z: 0.15, w: 0.22, d: 0.04, y: 0.02, h: 0.96, color: "#a8c0d8", finish: "glass", edges: true, fix: "d" },
      // Lower shelf edge reveal (Brushed bronze)
      { shape: "box", x: 0.0, z: 0.15, w: 0.98, d: 0.06, y: 0.0, h: 0.02, color: "#c5a059", edges: "glow", fix: "yh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.60 },
      { shape: "line", x1: -0.25, z1: 0.15, x2: -0.25, z2: -0.38 },
      { shape: "line", x1: 0.25, z1: 0.15, x2: 0.25, z2: -0.38 }
    ]
  },

  {
    num: 85,
    id: "bathroom_towel_valet",
    packId: "domolux.bathroom_towel_valet",
    name: {
      en: "Domolux Freestanding Architectural Towel Valet",
      de: "Domolux Freistehender Handtuch-Valet",
      ar: "حامل مناشف فندقي مستقل بقاعدة رخامية دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Freestanding multi-tiered towel stand featuring a heavy Nero Marquina marble slab base, satin champagne bronze upright frame, and staggered cantilevered hanging arms.",
    size: [0.50, 0.40, 1.10],
    mount: "floor",
    group: "bathroom",
    room: ["bathroom"],
    tags: ["valet", "towel_stand", "marble", "bronze", "bathroom", "domolux"],
    parts: [
      // Weighted Marquina marble base
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.78, y: 0.0, h: 0.05, color: "#141518", edges: true, fix: "h" },
      // Vertical central twin pillars
      { shape: "box", x: -0.22, z: 0.0, w: 0.06, d: 0.06, y: 0.05, h: 0.92, color: "#c5a059", edges: "glow", fix: "wd" },
      { shape: "box", x: 0.22, z: 0.0, w: 0.06, d: 0.06, y: 0.05, h: 0.75, color: "#c5a059", edges: "glow", fix: "wd" },
      // Lower hanging arm
      { shape: "cyl", x: 0.10, z: 0.18, w: 0.04, d: 0.04, y: 0.70, h: 0.65, axis: "x", color: "#d4af37", fix: "wd" },
      // Mid hanging arm
      { shape: "cyl", x: -0.05, z: 0.0, w: 0.04, d: 0.04, y: 0.85, h: 0.70, axis: "x", color: "#d4af37", fix: "wd" },
      // Top hanging arm
      { shape: "cyl", x: -0.10, z: -0.18, w: 0.04, d: 0.04, y: 0.98, h: 0.65, axis: "x", color: "#d4af37", fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.88, d: 0.78 },
      { shape: "line", x1: -0.40, z1: -0.18, x2: 0.25, z2: -0.18 },
      { shape: "line", x1: -0.25, z1: 0.18, x2: 0.40, z2: 0.18 }
    ]
  },

  {
    num: 86,
    id: "bathroom_laundry_hamper",
    packId: "domolux.bathroom_laundry_hamper",
    name: {
      en: "Domolux Dual-Compartment Bathroom Laundry Tower",
      de: "Domolux Doppelkammer-Wäschesammler",
      ar: "برج تخزين وفرز الغسيل للحمام بخشب الجوز دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Vertical fluted walnut bathroom laundry organizer with tilt-out hamper bins, breathable slatted base vents, brushed bronze hardware, and removable canvas linen bags.",
    size: [0.45, 0.45, 1.20],
    mount: "floor",
    group: "bathroom",
    room: ["bathroom"],
    tags: ["hamper", "laundry", "storage", "walnut", "bathroom", "domolux"],
    parts: [
      // Base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.94, y: 0.0, h: 0.08, color: "#1c1d22", fix: "h" },
      // Fluted walnut cabinet tower
      { shape: "box", x: 0.0, z: -0.02, w: 0.96, d: 0.92, y: 0.08, h: 0.90, color: "wood", finish: "dark", edges: true },
      // Lower tilt-out hamper door
      { shape: "box", x: 0.0, z: 0.44, w: 0.88, d: 0.04, y: 0.12, h: 0.42, color: "#28231d", edges: true, fix: "d" },
      // Upper tilt-out hamper door
      { shape: "box", x: 0.0, z: 0.44, w: 0.88, d: 0.04, y: 0.56, h: 0.40, color: "#28231d", edges: true, fix: "d" },
      // Brushed bronze hardware pulls
      { shape: "box", x: 0.0, z: 0.47, w: 0.22, d: 0.03, y: 0.50, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.47, w: 0.22, d: 0.03, y: 0.92, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Top solid surface tray rim
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.98, h: 0.02, color: "#c5a059", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.94 },
      { shape: "line", x1: -0.44, z1: 0.0, x2: 0.44, z2: 0.0 }
    ]
  },

  {
    num: 87,
    id: "magnifying_grooming_mirror",
    packId: "domolux.magnifying_grooming_mirror",
    name: {
      en: "Domolux Articulated Vanity Grooming Mirror",
      de: "Domolux Ausziehbarer Kosmetikspiegel",
      ar: "مرآة حلاقة وتجميل جدارية مكبرة ومتحركة دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Wall-mounted precision double-jointed articulated grooming mirror with dual-sided 1x/10x optical surfaces, capacitive touch dimmer, and continuous ring CRI98 light halo.",
    size: [0.30, 0.35, 0.35],
    mount: "wall",
    wall_y: 1.30,
    group: "bathroom",
    room: ["bathroom"],
    tags: ["mirror", "grooming", "magnifying", "lighting", "bathroom", "domolux"],
    parts: [
      // Wall mounting plate
      { shape: "cyl", x: 0.0, z: -0.46, w: 0.32, d: 0.32, y: 0.34, h: 0.06, axis: "z", color: "#c5a059", fix: "wdh" },
      // Primary articulated scissor arm
      { shape: "box", x: -0.15, z: -0.22, w: 0.04, d: 0.35, y: 0.47, h: 0.06, color: "#c5a059", edges: "glow", fix: "wh" },
      // Secondary swivel elbow arm
      { shape: "box", x: 0.05, z: 0.05, w: 0.04, d: 0.30, y: 0.47, h: 0.06, color: "#c5a059", edges: "glow", fix: "wh" },
      // Swivel fork yoke
      { shape: "cyl", x: 0.15, z: 0.22, w: 0.06, d: 0.06, y: 0.25, h: 0.50, color: "#c5a059", fix: "wd" },
      // Outer illuminated ring bezel
      { shape: "cyl", x: 0.15, z: 0.32, w: 0.78, d: 0.78, y: 0.11, h: 0.05, axis: "y", color: "#fff3cc", glow: true, fix: "h" },
      // Mirror lens glass
      { shape: "cyl", x: 0.15, z: 0.32, w: 0.68, d: 0.68, y: 0.12, h: 0.04, axis: "y", color: "#a8c0d8", finish: "glass", fix: "h" }
    ],
    symbol: [
      { shape: "circle", x: 0.15, z: 0.32, r: 0.35 },
      { shape: "line", x1: 0.0, z1: -0.46, x2: 0.15, z2: 0.22 }
    ]
  },

  {
    num: 88,
    id: "steam_shower_generator",
    packId: "domolux.steam_shower_generator",
    name: {
      en: "Domolux Precision Digital Steam Generator Module",
      de: "Domolux Digitaler Dampfbadgenerator",
      ar: "وحدة توليد البخار الرقمية لغرف الاستحمام الفاخرة دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Compact high-output stainless steel residential steam generator with dual heating tanks, auto-flush system, acoustic silencer exhaust, and aromatherapy oil injection port.",
    size: [0.50, 0.25, 0.45],
    mount: "wall",
    wall_y: 0.40,
    group: "bathroom",
    room: ["bathroom"],
    tags: ["steam", "generator", "spa", "wellness", "bathroom", "domolux"],
    parts: [
      // Chassis rear wall bracket
      { shape: "box", x: 0.0, z: -0.45, w: 0.94, d: 0.08, y: 0.05, h: 0.90, color: "#1a1c20", fix: "d" },
      // Brushed stainless steel enclosure
      { shape: "box", x: 0.0, z: -0.02, w: 0.92, d: 0.82, y: 0.06, h: 0.88, color: "metal", finish: "metal", edges: true },
      // Louvered cooling ventilation grilles
      { shape: "box", x: -0.22, z: 0.40, w: 0.38, d: 0.02, y: 0.30, h: 0.45, color: "#22252c", fix: "d" },
      // Diagnostic OLED control window
      { shape: "box", x: 0.25, z: 0.40, w: 0.28, d: 0.02, y: 0.55, h: 0.20, color: "#00e5ff", glow: true, fix: "d" },
      // Brass pressure-relief safety valve
      { shape: "cyl", x: -0.30, z: 0.0, w: 0.08, d: 0.08, y: 0.94, h: 0.12, color: "#c5a059", fix: "wdh" },
      // Stainless steam output coupling
      { shape: "cyl", x: 0.25, z: 0.0, w: 0.12, d: 0.12, y: 0.94, h: 0.10, color: "metal", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: -0.02, w: 0.92, d: 0.82 },
      { shape: "circle", x: 0.25, z: 0.0, r: 0.10 }
    ]
  },

  {
    num: 89,
    id: "private_hammam_room",
    packId: "domolux.private_hammam_room",
    name: {
      en: "Domolux Monumental Heated Marble Hammam Sanctuary",
      de: "Domolux Beheiztes Marmor-Dampfbad Hammam",
      ar: "جناح الحمام التركي الفاخر بالرخام المسخن دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Complete walk-in private spa chamber with heated ergonomic Calacatta marble slab benches, vaulted ceiling profile, recessed perimeter vapor glow, and brass steam plinth.",
    size: [2.20, 1.80, 2.40],
    mount: "floor",
    group: "bathroom",
    room: ["bathroom"],
    tags: ["hammam", "steam_room", "marble", "spa", "wellness", "bathroom", "domolux"],
    parts: [
      // Waterproof perimeter stone base
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.0, h: 0.06, color: "#1e2025", edges: true, fix: "h" },
      // Left heated stone bench
      { shape: "box", x: -0.34, z: 0.0, w: 0.28, d: 0.94, y: 0.06, h: 0.22, color: "#e8ecef", finish: "white", edges: true },
      // Right heated stone bench
      { shape: "box", x: 0.34, z: 0.0, w: 0.28, d: 0.94, y: 0.06, h: 0.22, color: "#e8ecef", finish: "white", edges: true },
      // Rear massage slab / master stone bench
      { shape: "box", x: 0.0, z: -0.34, w: 0.94, d: 0.28, y: 0.06, h: 0.24, color: "#e8ecef", finish: "white", edges: true },
      // Rear wall stone panel cladding
      { shape: "box", x: 0.0, z: -0.47, w: 0.98, d: 0.05, y: 0.06, h: 0.94, color: "#dbe0e6", edges: true, fix: "d" },
      // Left side wall cladding
      { shape: "box", x: -0.47, z: 0.0, w: 0.05, d: 0.98, y: 0.06, h: 0.94, color: "#dbe0e6", edges: true, fix: "w" },
      // Right side wall cladding
      { shape: "box", x: 0.47, z: 0.0, w: 0.05, d: 0.98, y: 0.06, h: 0.94, color: "#dbe0e6", edges: true, fix: "w" },
      // Frameless glass front partition
      { shape: "box", x: -0.28, z: 0.47, w: 0.40, d: 0.02, y: 0.06, h: 0.94, color: "#88c0d0", finish: "glass", fix: "d" },
      { shape: "box", x: 0.28, z: 0.47, w: 0.40, d: 0.02, y: 0.06, h: 0.94, color: "#88c0d0", finish: "glass", fix: "d" },
      // Center steam dispersal basin (Solid cast bronze)
      { shape: "cyl", x: 0.0, z: 0.08, w: 0.22, d: 0.22, y: 0.06, h: 0.18, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Ceiling arch cove with ambient starfield LED
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.96, y: 0.96, h: 0.04, color: "#f8f9fa", glow: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.98 },
      { shape: "rect", x: -0.34, z: 0.0, w: 0.28, d: 0.94 },
      { shape: "rect", x: 0.34, z: 0.0, w: 0.28, d: 0.94 },
      { shape: "circle", x: 0.0, z: 0.08, r: 0.15 }
    ]
  },

  {
    num: 90,
    id: "luxury_cold_plunge",
    packId: "domolux.luxury_cold_plunge",
    name: {
      en: "Domolux Titanium Hydrotherapy Cold-Plunge Bath",
      de: "Domolux Eisbad & Kaltwasser-Tauchbecken",
      ar: "حوض الغمر بالماء البارد والجليد الصحي دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Architectural cryogenic recovery plunge bath with thermal insulated marine-grade oak exterior cladding, electropolished 316-titanium tank, ozone sanitation, and teak step.",
    size: [1.80, 1.00, 0.90],
    mount: "floor",
    group: "bathroom",
    room: ["bathroom"],
    tags: ["cold_plunge", "ice_bath", "recovery", "spa", "wellness", "bathroom", "domolux"],
    parts: [
      // Structural support base
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.94, y: 0.0, h: 0.08, color: "#151619", fix: "h" },
      // Thermal exterior slatted teak wrap
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.08, h: 0.84, color: "#3d2b1f", finish: "wood", edges: true },
      // Titanium inner tub rim
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.88, y: 0.92, h: 0.08, color: "metal", edges: "glow", fix: "h" },
      // Open deep water basin cavity
      { shape: "box", x: 0.0, z: 0.0, w: 0.80, d: 0.76, y: 0.12, h: 0.80, color: "#0d3b66", edges: true },
      // Chilled water surface layer
      { shape: "box", x: 0.0, z: 0.0, w: 0.78, d: 0.74, y: 0.82, h: 0.02, color: "#00b4d8", finish: "glass", glow: true },
      // Dual step entry platform (Left side)
      { shape: "box", x: -0.42, z: 0.44, w: 0.22, d: 0.18, y: 0.0, h: 0.22, color: "#543d2b", edges: true, fix: "wdh" },
      { shape: "box", x: -0.42, z: 0.44, w: 0.18, d: 0.14, y: 0.22, h: 0.22, color: "#6a4e37", edges: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.80, d: 0.76 }
    ]
  },

  {
    num: 91,
    id: "infrared_therapy_cabin",
    packId: "domolux.infrared_therapy_cabin",
    name: {
      en: "Domolux Full-Spectrum Infrared Wellness Cabin",
      de: "Domolux Vollspektrum-Infrarotkabine",
      ar: "مقصورة العلاج بالأشعة تحت الحمراء بالخشب الطبيعي دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Private wellness retreat crafted from Canadian red cedar with full-spectrum carbon/ceramic heating panels, chromotherapy LED ceiling, and frameless bronze glass entrance.",
    size: [1.50, 1.30, 2.10],
    mount: "floor",
    group: "bathroom",
    room: ["bathroom"],
    tags: ["infrared", "sauna", "cabin", "wellness", "cedar", "bathroom", "domolux"],
    parts: [
      // Base floor pan
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.0, h: 0.06, color: "#2b1e15", fix: "h" },
      // Cedar back wall
      { shape: "box", x: 0.0, z: -0.47, w: 0.98, d: 0.06, y: 0.06, h: 0.92, color: "#8c5835", finish: "wood", edges: true, fix: "d" },
      // Cedar left wall
      { shape: "box", x: -0.47, z: 0.0, w: 0.06, d: 0.98, y: 0.06, h: 0.92, color: "#8c5835", finish: "wood", edges: true, fix: "w" },
      // Cedar right wall
      { shape: "box", x: 0.47, z: 0.0, w: 0.06, d: 0.98, y: 0.06, h: 0.92, color: "#8c5835", finish: "wood", edges: true, fix: "w" },
      // Cedar roof cap
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.96, h: 0.04, color: "#6e4327", fix: "h" },
      // Ergonomic slatted seating bench
      { shape: "box", x: 0.0, z: -0.22, w: 0.88, d: 0.44, y: 0.06, h: 0.24, color: "#b07d58", finish: "wood", edges: true },
      // Infrared carbon back heaters (Dual panels emitting dark ruby glow)
      { shape: "box", x: -0.22, z: -0.43, w: 0.28, d: 0.02, y: 0.36, h: 0.48, color: "#8b0000", glow: true, edges: true, fix: "d" },
      { shape: "box", x: 0.22, z: -0.43, w: 0.28, d: 0.02, y: 0.36, h: 0.48, color: "#8b0000", glow: true, edges: true, fix: "d" },
      // Front bronze frameless glass door
      { shape: "box", x: 0.0, z: 0.47, w: 0.88, d: 0.02, y: 0.06, h: 0.90, color: "#3a2f26", finish: "glass", edges: true, fix: "d" },
      // Bronze vertical pull handle
      { shape: "cyl", x: 0.35, z: 0.49, w: 0.03, d: 0.03, y: 0.35, h: 0.40, color: "#c5a059", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.98 },
      { shape: "rect", x: 0.0, z: -0.22, w: 0.88, d: 0.44 }
    ]
  },

  {
    num: 92,
    id: "massage_therapy_table",
    packId: "domolux.massage_therapy_table",
    name: {
      en: "Domolux Professional Hydraulic Massage Therapy Bed",
      de: "Domolux Professionelle Spa-Massageliege",
      ar: "طاولة التدليك والعلاج الطبيعي الهيدروليكية الفاخرة دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Ultra-luxury electric spa massage couch featuring a heated multi-density memory foam mattress, sculpted face cradle, solid smoked-oak base enclosure, and silent dual actuators.",
    size: [0.80, 2.10, 0.75],
    mount: "floor",
    group: "bathroom",
    room: ["bathroom"],
    tags: ["massage", "spa", "therapy_bed", "wellness", "bathroom", "domolux"],
    parts: [
      // Solid oak pedestal plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.72, d: 0.78, y: 0.0, h: 0.10, color: "#2b201a", fix: "h" },
      // Central hydraulic lifting column (brushed bronze casing)
      { shape: "box", x: 0.0, z: 0.0, w: 0.55, d: 0.65, y: 0.10, h: 0.52, color: "#c5a059", edges: "glow" },
      // Mattress structural sub-frame
      { shape: "box", x: 0.0, z: -0.04, w: 0.94, d: 0.88, y: 0.62, h: 0.08, color: "#1c1e22", edges: true, fix: "h" },
      // Master upholstered leather mattress (Warm sand / cream)
      { shape: "loft", x: 0.0, z: -0.04, w: 0.96, d: 0.88, y: 0.70, h: 0.22, tx: 0.0, tz: -0.04, tw: 0.98, td: 0.90, color: "#d9cab8", finish: "cushion", edges: true },
      // Contoured articulated face cradle cushion
      { shape: "cyl", x: 0.0, z: 0.44, w: 0.38, d: 0.38, y: 0.72, h: 0.12, color: "#cfbfab", finish: "cushion", fix: "h" },
      // Open face breathing slot
      { shape: "cyl", x: 0.0, z: 0.44, w: 0.14, d: 0.14, y: 0.72, h: 0.13, color: "#1a1a1a", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: -0.04, w: 0.96, d: 0.88 },
      { shape: "circle", x: 0.0, z: 0.44, r: 0.19 }
    ]
  },

  {
    num: 93,
    id: "luxury_pedicure_chair",
    packId: "domolux.luxury_pedicure_chair",
    name: {
      en: "Domolux Throne Luxury Pedicure and Foot-Spa Lounge",
      de: "Domolux Luxus-Pediküre-Sessel mit Whirlpoolbecken",
      ar: "كرسي العناية بالقدمين والباديكير الفاخر دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Full-service salon spa throne with diamond-quilted leather massage armchair, integrated pipeless jet foot whirlpool basin, and pivoting manicure trays.",
    size: [0.85, 1.35, 1.30],
    mount: "floor",
    group: "bathroom",
    room: ["bathroom"],
    tags: ["pedicure", "spa", "throne", "foot_bath", "wellness", "bathroom", "domolux"],
    parts: [
      // Solid acrylic resin plinth base
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.96, y: 0.0, h: 0.14, color: "#1a1c22", edges: true, fix: "h" },
      // Front foot spa ceramic basin platform
      { shape: "box", x: 0.0, z: 0.28, w: 0.82, d: 0.44, y: 0.14, h: 0.24, color: "#f8f9fa", finish: "white", edges: true },
      // Internal foot bath basin cavity
      { shape: "cyl", x: 0.0, z: 0.28, w: 0.58, d: 0.58, y: 0.20, h: 0.18, color: "#00b4d8", glow: true, fix: "wd" },
      // Adjustable padded footrest
      { shape: "box", x: 0.0, z: 0.28, w: 0.32, d: 0.16, y: 0.40, h: 0.06, color: "#2b221d", fix: "wdh" },
      // Rear armchair seat cushion
      { shape: "box", x: 0.0, z: -0.16, w: 0.84, d: 0.55, y: 0.16, h: 0.26, color: "#cbbba7", finish: "cushion", edges: true },
      // High diamond-tufted backrest
      { shape: "box", x: 0.0, z: -0.38, w: 0.84, d: 0.18, y: 0.42, h: 0.56, color: "#cbbba7", finish: "cushion", edges: true },
      // Left padded armrest
      { shape: "box", x: -0.42, z: -0.16, w: 0.12, d: 0.60, y: 0.34, h: 0.22, color: "#22252c", edges: true, fix: "w" },
      // Right padded armrest
      { shape: "box", x: 0.42, z: -0.16, w: 0.12, d: 0.60, y: 0.34, h: 0.22, color: "#22252c", edges: true, fix: "w" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.94, d: 0.96 },
      { shape: "circle", x: 0.0, z: 0.28, r: 0.26 }
    ]
  },

  {
    num: 94,
    id: "private_manicure_station",
    packId: "domolux.private_manicure_station",
    name: {
      en: "Domolux Bespoke Nail Grooming and Manicure Desk",
      de: "Domolux Luxus-Manikürtisch mit Absaugung",
      ar: "طاولة المانيكير والعناية بالأظافر الرخامية الفاخرة دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Architectural beauty desk featuring a honed Fior di Bosco marble worktop, flush-mounted downdraft dust vacuum extractor, ergonomic client wrist cushion, and fluted brass pedestal drawers.",
    size: [1.20, 0.60, 0.78],
    mount: "floor",
    group: "bathroom",
    room: ["bathroom"],
    tags: ["manicure", "salon", "marble", "beauty", "wellness", "bathroom", "domolux"],
    parts: [
      // Right drawer pedestal
      { shape: "box", x: 0.34, z: 0.0, w: 0.28, d: 0.88, y: 0.0, h: 0.72, color: "#23262d", finish: "dark", edges: true },
      // Left sculptural bronze leg hoop
      { shape: "box", x: -0.38, z: 0.0, w: 0.08, d: 0.88, y: 0.0, h: 0.72, color: "#c5a059", edges: "glow", fix: "w" },
      // Fior di Bosco marble main tabletop
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.96, y: 0.72, h: 0.08, color: "#50545b", edges: true, fix: "h" },
      // Flush downdraft dust extraction mesh
      { shape: "box", x: 0.0, z: 0.0, w: 0.26, d: 0.26, y: 0.80, h: 0.02, color: "metal", fix: "wdh" },
      // Ergonomic soft leather wrist support bar
      { shape: "cyl", x: 0.0, z: -0.22, w: 0.08, d: 0.08, y: 0.82, h: 0.45, axis: "x", color: "#d9cab8", finish: "cushion", fix: "wd" },
      // Articulated LED shadowless task lamp
      { shape: "cyl", x: -0.32, z: -0.30, w: 0.04, d: 0.04, y: 0.80, h: 0.16, color: "#c5a059", fix: "wd" },
      { shape: "cyl", x: -0.20, z: -0.15, w: 0.03, d: 0.03, y: 0.94, h: 0.25, axis: "x", color: "#fff9e6", glow: true, fix: "wd" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.96 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.26, d: 0.26 },
      { shape: "rect", x: 0.34, z: 0.0, w: 0.28, d: 0.88 }
    ]
  },

  {
    num: 95,
    id: "luxury_foot_spa",
    packId: "domolux.luxury_foot_spa",
    name: {
      en: "Domolux Freestanding Sculptural Foot Hydromassage Basin",
      de: "Domolux Freistehendes Fuß-Whirlpoolbecken",
      ar: "حوض المساج المائي للأقدام بتصميم دائري فاخر دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Compact freestanding hydrotherapy foot basin crafted from composite stone with thermo-circulating whirlpool bubblers, brass deck filler, and underwater chromotherapy lighting.",
    size: [0.60, 0.65, 0.45],
    mount: "floor",
    group: "bathroom",
    room: ["bathroom"],
    tags: ["foot_spa", "hydromassage", "wellness", "relaxation", "bathroom", "domolux"],
    parts: [
      // Lower plinth ring
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.82, d: 0.82, y: 0.0, h: 0.08, color: "#1a1c20", fix: "h" },
      // Main rounded stone exterior body
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.94, d: 0.94, y: 0.08, h: 0.88, color: "#2c2f36", finish: "dark", edges: true },
      // Internal sculpted footwell cavity
      { shape: "cyl", x: 0.0, z: 0.04, w: 0.74, d: 0.74, y: 0.20, h: 0.76, color: "#00b4d8", glow: true },
      // Acupressure footbed textured pad
      { shape: "box", x: 0.0, z: 0.04, w: 0.45, d: 0.38, y: 0.21, h: 0.03, color: "#141518", fix: "h" },
      // Brushed bronze deck-mounted gooseneck tap
      { shape: "cyl", x: 0.0, z: -0.38, w: 0.06, d: 0.06, y: 0.92, h: 0.22, color: "#c5a059", edges: "glow", fix: "wd" }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: 0.0, r: 0.46 },
      { shape: "circle", x: 0.0, z: 0.04, r: 0.35 }
    ]
  },

  {
    num: 96,
    id: "architectural_shower_niche",
    packId: "domolux.architectural_shower_niche",
    name: {
      en: "Domolux Recessed Backlit Stone Shower Niche",
      de: "Domolux Beleuchtete Dusch-Wandnische",
      ar: "نيش جداري مدمج لشاور الاستحمام مع إضاءة محيطية دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Waterproof recessed shower storage module featuring a mitered Fior di Bosco marble reveal, tempered glass floating tier, and IP68 concealed LED backlight channel.",
    size: [0.40, 0.15, 0.70],
    mount: "wall",
    wall_y: 1.10,
    group: "bathroom",
    room: ["bathroom"],
    tags: ["shower_niche", "storage", "lighting", "marble", "bathroom", "domolux"],
    parts: [
      // Outer mitered stone perimeter trim
      { shape: "box", x: 0.0, z: 0.44, w: 0.98, d: 0.08, y: 0.02, h: 0.96, color: "#363a42", edges: true, fix: "d" },
      // Deep recessed back wall cavity
      { shape: "box", x: 0.0, z: -0.30, w: 0.84, d: 0.04, y: 0.06, h: 0.88, color: "#545a66", finish: "dark", edges: true, fix: "d" },
      // Cavity top, bottom, and side lining
      { shape: "box", x: 0.0, z: 0.04, w: 0.84, d: 0.72, y: 0.06, h: 0.04, color: "#3e424c", fix: "h" },
      { shape: "box", x: 0.0, z: 0.04, w: 0.84, d: 0.72, y: 0.90, h: 0.04, color: "#3e424c", fix: "h" },
      { shape: "box", x: -0.40, z: 0.04, w: 0.04, d: 0.72, y: 0.10, h: 0.80, color: "#3e424c", fix: "w" },
      { shape: "box", x: 0.40, z: 0.04, w: 0.04, d: 0.72, y: 0.10, h: 0.80, color: "#3e424c", fix: "w" },
      // Concealed LED diffuse halo perimeter strip
      { shape: "box", x: 0.0, z: -0.26, w: 0.82, d: 0.02, y: 0.88, h: 0.02, color: "#fff3cc", glow: true, fix: "yd" },
      // Floating tempered bronze glass shelf
      { shape: "box", x: 0.0, z: 0.04, w: 0.82, d: 0.68, y: 0.48, h: 0.02, color: "#3a3429", finish: "glass", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.04, w: 0.84, d: 0.76 },
      { shape: "line", x1: -0.40, z1: 0.04, x2: 0.40, z2: 0.04 }
    ]
  },

  {
    num: 97,
    id: "bathroom_aroma_pedestal",
    packId: "domolux.bathroom_aroma_pedestal",
    name: {
      en: "Domolux Fluted Travertine Aromatherapy Pedestal",
      de: "Domolux Flötierte Aroma-Diffusor-Säule",
      ar: "عمود المباخر والعطور الفاخرة من حجر الترافرتين دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Monolithic fluted Roman travertine pedestal with integrated ultrasonic cold-mist essential oil nebulizer, brushed bronze vapor bowl, and warm ambient floor wash.",
    size: [0.32, 0.32, 0.95],
    mount: "floor",
    group: "bathroom",
    room: ["bathroom"],
    tags: ["aromatherapy", "diffuser", "pedestal", "travertine", "spa", "bathroom", "domolux"],
    parts: [
      // Base square foot
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.92, y: 0.0, h: 0.06, color: "#1f1d19", fix: "h" },
      // Fluted travertine stone columnar shaft (Loft)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.84, d: 0.84, y: 0.06, h: 0.78, tx: 0.0, tz: 0.0, tw: 0.78, td: 0.78, color: "#d8c7b5", finish: "wood", edges: true },
      // Upper bronze accent collar
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.82, d: 0.82, y: 0.84, h: 0.04, color: "#c5a059", edges: "glow", fix: "h" },
      // Ultrasonic cold-vapor diffuser basin (Cast dark bronze)
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.72, d: 0.72, y: 0.88, h: 0.08, color: "#2a221b", edges: true, fix: "h" },
      // Fine vapor mist plume
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.22, d: 0.22, y: 0.96, h: 0.12, color: "#e8f4f8", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "circle", x: 0.0, z: 0.0, r: 0.42 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.24 }
    ]
  },

  {
    num: 98,
    id: "digital_health_scale",
    packId: "domolux.digital_health_scale",
    name: {
      en: "Domolux Biometric Tempered-Glass Smart Scale",
      de: "Domolux Smarte Glas-Körperanalysewaage",
      ar: "ميزان الصحة الذكي الزجاجي بمؤشرات قياس متقدمة دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Ultra-thin tempered smoked-glass body composition scale with chamfered satin brass perimeter band, four-point ITO conductive sensor pads, and concealed matrix LED readouts.",
    size: [0.38, 0.38, 0.06],
    mount: "floor",
    group: "bathroom",
    room: ["bathroom"],
    tags: ["scale", "health", "smart", "biometric", "glass", "bathroom", "domolux"],
    parts: [
      // Rubber floor isolation feet (4 corners)
      { shape: "cyl", x: -0.38, z: -0.38, w: 0.12, d: 0.12, y: 0.0, h: 0.25, color: "#111215", fix: "wdh" },
      { shape: "cyl", x: 0.38, z: -0.38, w: 0.12, d: 0.12, y: 0.0, h: 0.25, color: "#111215", fix: "wdh" },
      { shape: "cyl", x: -0.38, z: 0.38, w: 0.12, d: 0.12, y: 0.0, h: 0.25, color: "#111215", fix: "wdh" },
      { shape: "cyl", x: 0.38, z: 0.38, w: 0.12, d: 0.12, y: 0.0, h: 0.25, color: "#111215", fix: "wdh" },
      // Brushed satin brass perimeter chassis ring
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.25, h: 0.40, color: "#c5a059", edges: "glow", fix: "h" },
      // Tempered smoked-glass upper platform
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.94, y: 0.65, h: 0.35, color: "#1a1e24", finish: "glass", edges: true, fix: "h" },
      // Invisible dot-matrix white LED readout display
      { shape: "box", x: 0.0, z: -0.28, w: 0.35, d: 0.12, y: 0.98, h: 0.02, color: "#ffffff", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.96 },
      { shape: "rect", x: 0.0, z: -0.28, w: 0.35, d: 0.12 }
    ]
  },

  {
    num: 99,
    id: "designer_hand_dryer",
    packId: "domolux.designer_hand_dryer",
    name: {
      en: "Domolux Whisper-Acoustic Architectural Hand Dryer",
      de: "Domolux Geräuscharmer Designer-Händetrockner",
      ar: "مجفف اليدين المعماري فائق الهدوء دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Curvilinear wall-mounted acoustic high-speed hand dryer crafted with an anodized gunmetal shell, precision laser-cut linear airflow nozzle, and HEPA H14 internal filtration.",
    size: [0.28, 0.20, 0.48],
    mount: "wall",
    wall_y: 1.05,
    group: "bathroom",
    room: ["bathroom"],
    tags: ["hand_dryer", "acoustic", "hygiene", "commercial", "bathroom", "domolux"],
    parts: [
      // Wall mounting chassis backplate
      { shape: "box", x: 0.0, z: -0.44, w: 0.88, d: 0.10, y: 0.06, h: 0.88, color: "#1c1e22", fix: "d" },
      // Aerodynamic main casing shell (Loft)
      { shape: "loft", x: 0.0, z: 0.0, w: 0.92, d: 0.82, y: 0.06, h: 0.86, tx: 0.0, tz: -0.06, tw: 0.78, td: 0.65, color: "#2e323b", finish: "dark", edges: true },
      // Linear downward high-velocity air nozzle (Satin brass)
      { shape: "box", x: 0.0, z: 0.15, w: 0.72, d: 0.08, y: 0.02, h: 0.06, color: "#c5a059", edges: "glow", fix: "wdh" },
      // Optical infrared sensor window
      { shape: "cyl", x: 0.0, z: 0.22, w: 0.08, d: 0.08, y: 0.06, h: 0.02, color: "#00e5ff", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.92, d: 0.82 },
      { shape: "line", x1: -0.36, z1: 0.15, x2: 0.36, z2: 0.15 }
    ]
  },

  {
    num: 100,
    id: "bathroom_water_purification_station",
    packId: "domolux.bathroom_water_purification_station",
    name: {
      en: "Domolux Mineralizing Bathroom Water Purification Column",
      de: "Domolux Bad-Wasseraufbereitungs- und Spendersäule",
      ar: "محطة تنقية وإعادة تمعدن مياه الشرب للحمام دومولوكس"
    },
    collection: "Complete Bathroom, Spa and Personal Wellness",
    collectionSlug: "05_Complete_Bathroom_Spa",
    category: "Bathroom",
    description: "Architectural floorstanding drinking water mineralizing station with reverse-osmosis filtration column, illuminated mouthwash glass cradle, and touchless chilled tap.",
    size: [0.42, 0.45, 1.15],
    mount: "floor",
    group: "bathroom",
    room: ["bathroom"],
    tags: ["water_station", "purification", "filtration", "wellness", "bathroom", "domolux"],
    parts: [
      // Base foundation plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.92, y: 0.0, h: 0.06, color: "#141518", fix: "h" },
      // Main brushed gunmetal cabinet column
      { shape: "box", x: 0.0, z: -0.05, w: 0.94, d: 0.88, y: 0.06, h: 0.90, color: "#22252c", finish: "dark", edges: true },
      // Recessed glass filling alcove niche
      { shape: "box", x: 0.0, z: 0.15, w: 0.72, d: 0.45, y: 0.52, h: 0.38, color: "#111215", edges: true },
      // Removable stainless drip drainage grate
      { shape: "box", x: 0.0, z: 0.15, w: 0.68, d: 0.42, y: 0.52, h: 0.03, color: "metal", fix: "h" },
      // Brushed bronze swan-neck dispenser tap
      { shape: "cyl", x: 0.0, z: 0.02, w: 0.05, d: 0.05, y: 0.80, h: 0.16, color: "#c5a059", edges: "glow", fix: "wd" },
      // Alcove overhead diffuse LED downlight
      { shape: "cyl", x: 0.0, z: 0.15, w: 0.18, d: 0.18, y: 0.89, h: 0.02, color: "#00e5ff", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: -0.05, w: 0.94, d: 0.88 },
      { shape: "circle", x: 0.0, z: 0.15, r: 0.20 }
    ]
  }
];
