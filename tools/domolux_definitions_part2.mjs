// Collection B: Products 7 to 13

export const DOMOLUX_COLLECTION_PART2 = [
  // =========================================================================
  // COLLECTION B — PRIVATE DRESSING, STORAGE AND PERSONAL CARE (7-13)
  // =========================================================================
  {
    num: 7,
    id: "motorized_drapery",
    packId: "domolux.motorized_drapery",
    name: {
      en: "Domolux Motorized Architectural Drapery",
      de: "Domolux Motorisierte Architektur-Vorhänge",
      ar: "ستائر دومولوكس المعمارية الآلية"
    },
    collection: "Private Dressing, Storage & Personal Care",
    description: "Floor-to-ceiling motorized dual-track curtain system with Belgian blackout linen in sculpted S-folds and sheer acoustic under-layer.",
    size: [2.80, 0.32, 2.80],
    mount: "ceiling",
    wall_y: 2.80,
    surface: false,
    group: "deco",
    room: ["living", "bedroom"],
    tags: ["curtain", "drapery", "motorized", "linen", "blackout", "domolux"],
    parts: [
      // 1. Recessed dual-track architectural ceiling extrusion (bronze finish)
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.85, y: 0.96, h: 0.04, color: "#8c6747", edges: true, fix: "h" },
      // 2. Motor housing module (left end)
      { shape: "box", x: -0.46, z: 0.10, w: 0.06, d: 0.60, y: 0.88, h: 0.08, color: "#18191d", edges: "faint", fix: "wdh" },
      // 3. Left end track stop cap
      { shape: "box", x: -0.495, z: 0.0, w: 0.01, d: 0.85, y: 0.96, h: 0.04, color: "#c5a059", fix: "wdh" },
      // 4. Right end track stop cap
      { shape: "box", x: 0.495, z: 0.0, w: 0.01, d: 0.85, y: 0.96, h: 0.04, color: "#c5a059", fix: "wdh" },
      // 5. Rear sheer acoustic fabric panel (translucent voile plane)
      { shape: "box", x: 0.0, z: -0.22, w: 0.96, d: 0.04, y: 0.01, h: 0.95, color: "#eceae5", finish: "fabric", edges: "faint" },
      // 6-17: Rhythmic S-fold tailored Belgian linen front blackout drapery (faceted wave columns)
      { shape: "loft", x: -0.42, z: 0.16, w: 0.08, d: 0.22, y: 0.01, h: 0.95, tx: -0.42, tz: 0.22, tw: 0.07, td: 0.20, color: "#d6d0c6", finish: "fabric", edges: "faint" },
      { shape: "loft", x: -0.34, z: 0.06, w: 0.08, d: 0.22, y: 0.01, h: 0.95, tx: -0.34, tz: 0.08, tw: 0.07, td: 0.20, color: "#cdc6ba", finish: "fabric", edges: "faint" },
      { shape: "loft", x: -0.26, z: 0.16, w: 0.08, d: 0.22, y: 0.01, h: 0.95, tx: -0.26, tz: 0.22, tw: 0.07, td: 0.20, color: "#d6d0c6", finish: "fabric", edges: "faint" },
      { shape: "loft", x: -0.18, z: 0.06, w: 0.08, d: 0.22, y: 0.01, h: 0.95, tx: -0.18, tz: 0.08, tw: 0.07, td: 0.20, color: "#cdc6ba", finish: "fabric", edges: "faint" },
      { shape: "loft", x: -0.10, z: 0.16, w: 0.08, d: 0.22, y: 0.01, h: 0.95, tx: -0.10, tz: 0.22, tw: 0.07, td: 0.20, color: "#d6d0c6", finish: "fabric", edges: "faint" },
      { shape: "loft", x: -0.02, z: 0.06, w: 0.08, d: 0.22, y: 0.01, h: 0.95, tx: -0.02, tz: 0.08, tw: 0.07, td: 0.20, color: "#cdc6ba", finish: "fabric", edges: "faint" },
      { shape: "loft", x: 0.06, z: 0.16, w: 0.08, d: 0.22, y: 0.01, h: 0.95, tx: 0.06, tz: 0.22, tw: 0.07, td: 0.20, color: "#d6d0c6", finish: "fabric", edges: "faint" },
      { shape: "loft", x: 0.14, z: 0.06, w: 0.08, d: 0.22, y: 0.01, h: 0.95, tx: 0.14, tz: 0.08, tw: 0.07, td: 0.20, color: "#cdc6ba", finish: "fabric", edges: "faint" },
      { shape: "loft", x: 0.22, z: 0.16, w: 0.08, d: 0.22, y: 0.01, h: 0.95, tx: 0.22, tz: 0.22, tw: 0.07, td: 0.20, color: "#d6d0c6", finish: "fabric", edges: "faint" },
      { shape: "loft", x: 0.30, z: 0.06, w: 0.08, d: 0.22, y: 0.01, h: 0.95, tx: 0.30, tz: 0.08, tw: 0.07, td: 0.20, color: "#cdc6ba", finish: "fabric", edges: "faint" },
      { shape: "loft", x: 0.38, z: 0.16, w: 0.08, d: 0.22, y: 0.01, h: 0.95, tx: 0.38, tz: 0.22, tw: 0.07, td: 0.20, color: "#d6d0c6", finish: "fabric", edges: "faint" },
      { shape: "loft", x: 0.45, z: 0.06, w: 0.08, d: 0.22, y: 0.01, h: 0.95, tx: 0.45, tz: 0.08, tw: 0.07, td: 0.20, color: "#cdc6ba", finish: "fabric", edges: "faint" },
      // 18. Weighted bottom hem tape bar
      { shape: "box", x: 0.0, z: 0.12, w: 0.96, d: 0.24, y: 0.0, h: 0.01, color: "#8c6747", edges: "faint", fix: "h" },
      // 19. Bronze baton wand pull handle
      { shape: "cyl", x: 0.44, z: 0.22, w: 0.015, d: 0.015, y: 0.40, h: 0.45, color: "#c5a059", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.85 },
      { shape: "line", x1: -0.48, z1: -0.22, x2: 0.48, z2: -0.22 },
      { shape: "line", x1: -0.48, z1: 0.12, x2: 0.48, z2: 0.12 },
      { shape: "circle", x: -0.46, z: 0.10, r: 0.08 }
    ]
  },

  {
    num: 8,
    id: "full_length_mirror",
    packId: "domolux.full_length_mirror",
    name: {
      en: "Domolux Sculptural Dressing Mirror",
      de: "Domolux Skulpturaler Ankleidespiegel",
      ar: "مرآة دومولوكس المعمارية الكاملة"
    },
    collection: "Private Dressing, Storage & Personal Care",
    description: "Iconic organic full-length dressing mirror with champagne bronze frame, integrated ambient backlighting, and heavy honed Nero Marquina marble plinth.",
    size: [0.95, 0.35, 2.15],
    mount: "floor",
    surface: false,
    group: "deco",
    room: ["bedroom", "hall", "bath"],
    tags: ["mirror", "dressing", "bronze", "marble", "sculptural", "domolux"],
    parts: [
      // 1. Honed Nero Marquina marble anchor plinth base
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.88, y: 0.0, h: 0.07, color: "#18191d", edges: true, fix: "h" },
      // 2. Base brass clamping shoe channel
      { shape: "box", x: 0.0, z: 0.0, w: 0.82, d: 0.24, y: 0.07, h: 0.035, color: "#c5a059", glow: true, fix: "wdh" },
      // 3. Ambient LED backlighting halo diffuser plane
      { shape: "box", x: 0.0, z: -0.06, w: 0.82, d: 0.04, y: 0.10, h: 0.88, color: "#fff2d6", glow: true, edges: "glow" },
      // 4. Rear structural stiffener backplate
      { shape: "box", x: 0.0, z: -0.03, w: 0.78, d: 0.04, y: 0.10, h: 0.88, color: "#1c1d22", edges: "faint" },
      // 5. Champagne bronze outer sculptural frame (bottom rail)
      { shape: "box", x: 0.0, z: 0.02, w: 0.80, d: 0.06, y: 0.10, h: 0.03, color: "#c5a059", edges: "glow", fix: "h" },
      // 6. Champagne bronze outer sculptural frame (top curved cap)
      { shape: "cyl", x: 0.0, z: 0.02, w: 0.80, d: 0.06, y: 0.88, h: 0.10, axis: "x", color: "#c5a059", edges: "glow", fix: "h" },
      // 7. Champagne bronze left frame upright
      { shape: "box", x: -0.38, z: 0.02, w: 0.04, d: 0.06, y: 0.10, h: 0.82, color: "#c5a059", edges: "glow", fix: "wd" },
      // 8. Champagne bronze right frame upright
      { shape: "box", x: 0.38, z: 0.02, w: 0.04, d: 0.06, y: 0.10, h: 0.82, color: "#c5a059", edges: "glow", fix: "wd" },
      // 9. Silvered high-definition mirror glass surface (active reflection)
      { shape: "box", x: 0.0, z: 0.04, w: 0.72, d: 0.015, y: 0.13, h: 0.82, color: "glass", edges: "faint" },
      // 10. Left floor stabilizer bracket strut
      { shape: "loft", x: -0.35, z: -0.15, w: 0.04, d: 0.30, y: 0.07, h: 0.25, tx: -0.35, tz: -0.02, tw: 0.03, td: 0.04, color: "#8c6747", fix: "wdh" },
      // 11. Right floor stabilizer bracket strut
      { shape: "loft", x: 0.35, z: -0.15, w: 0.04, d: 0.30, y: 0.07, h: 0.25, tx: 0.35, tz: -0.02, tw: 0.03, td: 0.04, color: "#8c6747", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.92, d: 0.88 },
      { shape: "line", x1: -0.38, z1: 0.04, x2: 0.38, z2: 0.04 },
      { shape: "line", x1: -0.35, z1: -0.30, x2: -0.35, z2: 0.0 },
      { shape: "line", x1: 0.35, z1: -0.30, x2: 0.35, z2: 0.0 }
    ]
  },

  {
    num: 9,
    id: "dressing_vanity",
    packId: "domolux.dressing_vanity",
    name: {
      en: "Domolux Haute Couture Dressing Vanity",
      de: "Domolux Frisiertisch Haute Couture",
      ar: "طاولة التزيين الراقية دومولوكس"
    },
    collection: "Private Dressing, Storage & Personal Care",
    description: "Exclusive master dressing table in European walnut with honed Calacatta marble countertop, saddle-leather insert, illuminated vanity mirror, and bouclé stool.",
    size: [1.65, 0.65, 1.48],
    mount: "floor",
    surface: true,
    group: "storage",
    room: ["bedroom", "bath"],
    tags: ["vanity", "dressing", "table", "mirror", "luxury", "domolux"],
    parts: [
      // 1. Slender bronze tapered stiletto legs (4)
      { shape: "cyl", x: -0.44, z: 0.38, w: 0.04, d: 0.04, y: 0.0, h: 0.50, color: "#8c6747", fix: "wdh" },
      { shape: "cyl", x: 0.44, z: 0.38, w: 0.04, d: 0.04, y: 0.0, h: 0.50, color: "#8c6747", fix: "wdh" },
      { shape: "cyl", x: -0.44, z: -0.38, w: 0.04, d: 0.04, y: 0.0, h: 0.50, color: "#8c6747", fix: "wdh" },
      { shape: "cyl", x: 0.44, z: -0.38, w: 0.04, d: 0.04, y: 0.0, h: 0.50, color: "#8c6747", fix: "wdh" },
      // 2. Bronze cross-stretcher reinforcement
      { shape: "box", x: 0.0, z: -0.38, w: 0.88, d: 0.02, y: 0.15, h: 0.02, color: "#8c6747", fix: "h" },
      // 3. Floating walnut drawer credenza body
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.88, y: 0.50, h: 0.12, color: "#36261b", finish: "wood", edges: true },
      // 4. Honed Calacatta marble countertop slab
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.92, y: 0.62, h: 0.03, color: "white", finish: "body", edges: true, fix: "h" },
      // 5. Saddle leather writing pad central insert
      { shape: "box", x: 0.0, z: 0.02, w: 0.48, d: 0.68, y: 0.65, h: 0.005, color: "#7a482b", finish: "fabric", edges: "faint" },
      // 6. Left jewelry drawer face
      { shape: "box", x: -0.30, z: 0.445, w: 0.28, d: 0.02, y: 0.51, h: 0.10, color: "#36261b", finish: "wood", edges: true, fix: "wdh" },
      // 7. Left drawer brushed champagne handle
      { shape: "box", x: -0.30, z: 0.46, w: 0.12, d: 0.015, y: 0.55, h: 0.015, color: "#c5a059", glow: true, fix: "wdh" },
      // 8. Right jewelry drawer face
      { shape: "box", x: 0.30, z: 0.445, w: 0.28, d: 0.02, y: 0.51, h: 0.10, color: "#36261b", finish: "wood", edges: true, fix: "wdh" },
      // 9. Right drawer brushed champagne handle
      { shape: "box", x: 0.30, z: 0.46, w: 0.12, d: 0.015, y: 0.55, h: 0.015, color: "#c5a059", glow: true, fix: "wdh" },
      // 10. Center drawer face
      { shape: "box", x: 0.0, z: 0.445, w: 0.28, d: 0.02, y: 0.51, h: 0.10, color: "#36261b", finish: "wood", edges: true, fix: "wdh" },
      // 11. Center drawer handle
      { shape: "box", x: 0.0, z: 0.46, w: 0.12, d: 0.015, y: 0.55, h: 0.015, color: "#c5a059", glow: true, fix: "wdh" },
      // 12. Architectural arched vanity mirror frame (bronze)
      { shape: "box", x: 0.0, z: -0.34, w: 0.52, d: 0.04, y: 0.65, h: 0.34, color: "#8c6747", edges: "glow", fix: "wd" },
      // 13. Vanity mirror glass
      { shape: "box", x: 0.0, z: -0.31, w: 0.48, d: 0.015, y: 0.67, h: 0.30, color: "glass", edges: "faint", fix: "wd" },
      // 14. Integrated mirror perimeter LED halo ring
      { shape: "box", x: 0.0, z: -0.30, w: 0.50, d: 0.01, y: 0.66, h: 0.32, color: "#fff5e6", glow: true, fix: "wd" },
      // 15. Matching cylindrical bouclé vanity stool
      { shape: "cyl", x: 0.0, z: 0.28, w: 0.26, d: 0.26, y: 0.0, h: 0.32, color: "#dedbd2", finish: "fabric", edges: true, fix: "wdh" },
      // 16. Vanity stool brass collar base ring
      { shape: "cyl", x: 0.0, z: 0.28, w: 0.265, d: 0.265, y: 0.0, h: 0.04, color: "#c5a059", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: -0.10, w: 0.96, d: 0.72 },
      { shape: "rect", x: 0.0, z: -0.10, w: 0.48, d: 0.52 },
      { shape: "line", x1: -0.26, z1: -0.34, x2: 0.26, z2: -0.34 },
      { shape: "circle", x: 0.0, z: 0.28, r: 0.13 }
    ]
  },

  {
    num: 10,
    id: "closet_island",
    packId: "domolux.closet_island",
    name: {
      en: "Domolux Walk-In Closet Island",
      de: "Domolux Ankleidezimmer-Insel",
      ar: "جزيرة خزانة الملابس الفاخرة دومولوكس"
    },
    collection: "Private Dressing, Storage & Personal Care",
    description: "Freestanding luxury dressing room centerpiece island with smoked glass jewelry vitrine, velvet organizer compartments, and double-sided accessory drawers.",
    size: [1.80, 1.10, 0.95],
    mount: "floor",
    surface: true,
    group: "storage",
    room: ["bedroom"],
    tags: ["closet", "island", "wardrobe", "jewelry", "storage", "domolux"],
    parts: [
      // 1. Recessed dark architectural sub-plinth with shadow gap
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.88, y: 0.0, h: 0.06, color: "#18191d", edges: "faint", fix: "h" },
      // 2. Plinth ambient perimeter LED glow
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.86, y: 0.01, h: 0.02, color: "#fff0db", glow: true, fix: "h" },
      // 3. Main smoked oak carcass (central core)
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.92, y: 0.06, h: 0.76, color: "#2d241e", finish: "wood", edges: true },
      // 4. Front drawer row 1 (upper accessories)
      { shape: "box", x: -0.24, z: 0.465, w: 0.44, d: 0.02, y: 0.58, h: 0.20, color: "#2d241e", finish: "wood", edges: true },
      { shape: "box", x: 0.24, z: 0.465, w: 0.44, d: 0.02, y: 0.58, h: 0.20, color: "#2d241e", finish: "wood", edges: true },
      // 5. Front drawer row 2 (middle garments)
      { shape: "box", x: -0.24, z: 0.465, w: 0.44, d: 0.02, y: 0.34, h: 0.22, color: "#2d241e", finish: "wood", edges: true },
      { shape: "box", x: 0.24, z: 0.465, w: 0.44, d: 0.02, y: 0.34, h: 0.22, color: "#2d241e", finish: "wood", edges: true },
      // 6. Front drawer row 3 (bottom deep)
      { shape: "box", x: -0.24, z: 0.465, w: 0.44, d: 0.02, y: 0.08, h: 0.24, color: "#2d241e", finish: "wood", edges: true },
      { shape: "box", x: 0.24, z: 0.465, w: 0.44, d: 0.02, y: 0.08, h: 0.24, color: "#2d241e", finish: "wood", edges: true },
      // 7. Brushed champagne edge pulls (front drawers)
      { shape: "box", x: -0.24, z: 0.475, w: 0.18, d: 0.015, y: 0.75, h: 0.015, color: "#c5a059", glow: true, fix: "wdh" },
      { shape: "box", x: 0.24, z: 0.475, w: 0.18, d: 0.015, y: 0.75, h: 0.015, color: "#c5a059", glow: true, fix: "wdh" },
      { shape: "box", x: -0.24, z: 0.475, w: 0.18, d: 0.015, y: 0.53, h: 0.015, color: "#c5a059", glow: true, fix: "wdh" },
      { shape: "box", x: 0.24, z: 0.475, w: 0.18, d: 0.015, y: 0.53, h: 0.015, color: "#c5a059", glow: true, fix: "wdh" },
      { shape: "box", x: -0.24, z: 0.475, w: 0.18, d: 0.015, y: 0.29, h: 0.015, color: "#c5a059", glow: true, fix: "wdh" },
      { shape: "box", x: 0.24, z: 0.475, w: 0.18, d: 0.015, y: 0.29, h: 0.015, color: "#c5a059", glow: true, fix: "wdh" },
      // 8. Rear mirrored drawer faces (double-sided functionality)
      { shape: "box", x: 0.0, z: -0.465, w: 0.92, d: 0.02, y: 0.08, h: 0.70, color: "#2d241e", finish: "wood", edges: true },
      // 9. Top vitrine jewelry showcase cavity (sunken presentation bed)
      { shape: "box", x: 0.0, z: 0.0, w: 0.88, d: 0.84, y: 0.82, h: 0.06, color: "#1e3d2f", edges: "faint" },
      // 10. Velvet jewelry organizer grid dividers (longitudinal)
      { shape: "box", x: -0.15, z: 0.0, w: 0.015, d: 0.80, y: 0.83, h: 0.04, color: "#c5a059", fix: "wdh" },
      { shape: "box", x: 0.15, z: 0.0, w: 0.015, d: 0.80, y: 0.83, h: 0.04, color: "#c5a059", fix: "wdh" },
      // 11. Velvet watch display pillows (4 pods)
      { shape: "box", x: -0.30, z: -0.20, w: 0.12, d: 0.16, y: 0.84, h: 0.03, color: "#dedbd2", finish: "fabric", fix: "wdh" },
      { shape: "box", x: -0.30, z: 0.20, w: 0.12, d: 0.16, y: 0.84, h: 0.03, color: "#dedbd2", finish: "fabric", fix: "wdh" },
      { shape: "box", x: 0.30, z: -0.20, w: 0.12, d: 0.16, y: 0.84, h: 0.03, color: "#dedbd2", finish: "fabric", fix: "wdh" },
      { shape: "box", x: 0.30, z: 0.20, w: 0.12, d: 0.16, y: 0.84, h: 0.03, color: "#dedbd2", finish: "fabric", fix: "wdh" },
      // 12. Champagne bronze vitrine frame rim
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.94, y: 0.88, h: 0.04, color: "#c5a059", edges: "glow", fix: "h" },
      // 13. Flush tempered ultra-clear display glass top
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.86, y: 0.92, h: 0.015, color: "glass", edges: "faint", fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.94 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.90, d: 0.86, fill: true },
      { shape: "line", x1: -0.44, z1: 0.0, x2: 0.44, z2: 0.0 },
      { shape: "line", x1: 0.0, z1: -0.42, x2: 0.0, z2: 0.42 }
    ]
  },

  {
    num: 11,
    id: "jewelry_safe",
    packId: "domolux.jewelry_safe",
    name: {
      en: "Domolux Armored Jewelry Safe",
      de: "Domolux Gepanzerter Schmucktresor",
      ar: "خزنة المجوهرات المصفحة دومولوكس"
    },
    collection: "Private Dressing, Storage & Personal Care",
    description: "High-security architectural armored valuables safe with multi-point bronze vault wheel, biometric authentication, and automated rotating watch winders.",
    size: [0.65, 0.60, 1.25],
    mount: "floor",
    surface: true,
    group: "storage",
    room: ["bedroom", "office"],
    tags: ["safe", "security", "jewelry", "watches", "armored", "domolux"],
    parts: [
      // 1. Armored carbon-anthracite safe body shell
      { shape: "box", x: 0.0, z: -0.05, w: 0.92, d: 0.86, y: 0.0, h: 0.96, color: "#1c1e22", edges: true },
      // 2. Heavy reinforced safe door
      { shape: "box", x: 0.0, z: 0.40, w: 0.84, d: 0.08, y: 0.04, h: 0.88, color: "#23262c", edges: "glow" },
      // 3. Vault door heavy barrel hinge top
      { shape: "cyl", x: 0.41, z: 0.40, w: 0.06, d: 0.06, y: 0.72, h: 0.12, color: "#8c6747", fix: "wdh" },
      // 4. Vault door heavy barrel hinge bottom
      { shape: "cyl", x: 0.41, z: 0.40, w: 0.06, d: 0.06, y: 0.16, h: 0.12, color: "#8c6747", fix: "wdh" },
      // 5. Central vault handle boss hub
      { shape: "cyl", x: 0.0, z: 0.45, w: 0.16, d: 0.16, y: 0.44, h: 0.04, axis: "z", color: "#c5a059", fix: "wdh" },
      // 6. 3-Spoke precision machined bronze vault wheel
      { shape: "box", x: 0.0, z: 0.475, w: 0.32, d: 0.03, y: 0.45, h: 0.03, color: "#c5a059", glow: true, rot: 0, fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.475, w: 0.32, d: 0.03, y: 0.45, h: 0.03, color: "#c5a059", glow: true, rot: 60, fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.475, w: 0.32, d: 0.03, y: 0.45, h: 0.03, color: "#c5a059", glow: true, rot: 120, fix: "wdh" },
      // 7. Spoke knurled chrome handles (3)
      { shape: "cyl", x: 0.15, z: 0.48, w: 0.04, d: 0.04, y: 0.44, h: 0.04, color: "metal", fix: "wdh" },
      { shape: "cyl", x: -0.075, z: 0.48, w: 0.04, d: 0.04, y: 0.57, h: 0.04, color: "metal", fix: "wdh" },
      { shape: "cyl", x: -0.075, z: 0.48, w: 0.04, d: 0.04, y: 0.31, h: 0.04, color: "metal", fix: "wdh" },
      // 8. Biometric fingerprint / digital PIN keypad bezel
      { shape: "box", x: 0.0, z: 0.45, w: 0.22, d: 0.025, y: 0.68, h: 0.14, color: "#111215", edges: "glow", fix: "wdh" },
      // 9. Status OLED scanner indicator
      { shape: "box", x: 0.0, z: 0.465, w: 0.12, d: 0.01, y: 0.74, h: 0.04, color: "accent", glow: true, fix: "wdh" },
      // 10. Brushed bronze architectural top perimeter cap
      { shape: "box", x: 0.0, z: -0.05, w: 0.94, d: 0.88, y: 0.96, h: 0.04, color: "#8c6747", edges: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: -0.05, w: 0.92, d: 0.86 },
      { shape: "rect", x: 0.0, z: 0.40, w: 0.84, d: 0.08, fill: true },
      { shape: "circle", x: 0.0, z: 0.45, r: 0.16 },
      { shape: "circle", x: 0.41, z: 0.40, r: 0.04 }
    ]
  },

  {
    num: 12,
    id: "shoe_care_station",
    packId: "domolux.shoe_care_station",
    name: {
      en: "Domolux Bespoke Shoe-Care Station",
      de: "Domolux Schuhpflege-Station",
      ar: "محطة العناية بالأحذية الفاخرة دومولوكس"
    },
    collection: "Private Dressing, Storage & Personal Care",
    description: "Integrated entrance grooming station with upholstered cognac leather bench, angled footwear showcase shelves, electric rotary polishing buffer, and valet drawer.",
    size: [1.35, 0.52, 1.15],
    mount: "floor",
    surface: true,
    group: "storage",
    room: ["hall", "bedroom"],
    tags: ["shoes", "care", "bench", "polishing", "leather", "domolux"],
    parts: [
      // 1. Structural smoked walnut cabinet carcass (left storage section)
      { shape: "box", x: -0.22, z: 0.0, w: 0.50, d: 0.90, y: 0.0, h: 0.96, color: "#2d241e", finish: "wood", edges: true },
      // 2. Travertine top valet surface slab
      { shape: "box", x: -0.22, z: 0.0, w: 0.52, d: 0.92, y: 0.96, h: 0.04, color: "#d8cfc4", edges: true, fix: "h" },
      // 3. Top care accessories drawer
      { shape: "box", x: -0.22, z: 0.46, w: 0.46, d: 0.02, y: 0.80, h: 0.14, color: "#2d241e", finish: "wood", edges: true },
      // 4. Drawer champagne bar handle
      { shape: "box", x: -0.22, z: 0.475, w: 0.18, d: 0.015, y: 0.86, h: 0.015, color: "#c5a059", glow: true, fix: "wdh" },
      // 5. Electric shoe buffer station recess (lower cabinet)
      { shape: "box", x: -0.22, z: 0.10, w: 0.44, d: 0.70, y: 0.12, h: 0.58, color: "#18191d", edges: "faint" },
      // 6. Dual electric rotary buffing wheels (wool buffer left)
      { shape: "cyl", x: -0.32, z: 0.15, w: 0.14, d: 0.14, y: 0.22, h: 0.22, axis: "x", color: "#363840", fix: "wdh" },
      // 7. Dual electric rotary buffing wheels (wool buffer right)
      { shape: "cyl", x: -0.12, z: 0.15, w: 0.14, d: 0.14, y: 0.22, h: 0.22, axis: "x", color: "#614838", fix: "wdh" },
      // 8. Buffer motor foot-tap starter button
      { shape: "cyl", x: -0.22, z: 0.38, w: 0.06, d: 0.06, y: 0.08, h: 0.03, color: "#c5a059", glow: true, fix: "wdh" },
      // 9. Right seating bench structural base
      { shape: "box", x: 0.28, z: 0.0, w: 0.44, d: 0.88, y: 0.0, h: 0.38, color: "#2d241e", finish: "wood", edges: true },
      // 10. Upholstered cognac leather bench seat cushion
      { shape: "box", x: 0.28, z: 0.0, w: 0.44, d: 0.88, y: 0.38, h: 0.08, color: "#6b4028", finish: "fabric", edges: true, fix: "h" },
      // 11. Right shoe display lower slatted tier
      { shape: "box", x: 0.28, z: 0.0, w: 0.42, d: 0.82, y: 0.10, h: 0.03, color: "#8c6747", edges: "faint" },
      // 12. Footwear retaining brass guard rails
      { shape: "box", x: 0.28, z: 0.42, w: 0.42, d: 0.02, y: 0.13, h: 0.04, color: "#c5a059", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: -0.22, z: 0.0, w: 0.52, d: 0.92 },
      { shape: "rect", x: 0.28, z: 0.0, w: 0.44, d: 0.88 },
      { shape: "circle", x: -0.32, z: 0.15, r: 0.07 },
      { shape: "circle", x: -0.12, z: 0.15, r: 0.07 },
      { shape: "line", x1: 0.06, z1: 0.42, x2: 0.49, z2: 0.42 }
    ]
  },

  {
    num: 13,
    id: "garment_care_steam_cabinet",
    packId: "domolux.garment_care_steam_cabinet",
    name: {
      en: "Domolux Garment-Care Steam Cabinet",
      de: "Domolux Dampf-Kleiderpflegeschrank",
      ar: "خزانة العناية بالملابس بالبخار دومولوكس"
    },
    collection: "Private Dressing, Storage & Personal Care",
    description: "Smart architectural clothing refreshing appliance with full-height smoked glass door, moving suit hanger rail, pants press, and steam generator.",
    size: [0.65, 0.68, 1.95],
    mount: "floor",
    surface: false,
    group: "appliance",
    room: ["bedroom", "utility"],
    tags: ["steam", "closet", "garment", "care", "appliance", "domolux"],
    parts: [
      // 1. Dark titanium metallic main appliance cabinet
      { shape: "box", x: 0.0, z: -0.04, w: 0.94, d: 0.88, y: 0.0, h: 0.98, color: "#23272e", edges: true },
      // 2. Full-height tinted smoked glass door
      { shape: "box", x: 0.0, z: 0.42, w: 0.92, d: 0.04, y: 0.02, h: 0.96, color: "glass", edges: "glow" },
      // 3. Full-length brushed dark bronze vertical handle bar
      { shape: "box", x: -0.40, z: 0.46, w: 0.03, d: 0.03, y: 0.25, h: 0.55, color: "#8c6747", edges: "faint", fix: "wdh" },
      // 4. Handle upper anchor standoff
      { shape: "box", x: -0.40, z: 0.44, w: 0.03, d: 0.02, y: 0.78, h: 0.02, color: "#c5a059", fix: "wdh" },
      // 5. Handle lower anchor standoff
      { shape: "box", x: -0.40, z: 0.44, w: 0.03, d: 0.02, y: 0.25, h: 0.02, color: "#c5a059", fix: "wdh" },
      // 6. Top LED digital touch control display glass strip
      { shape: "box", x: 0.0, z: 0.43, w: 0.60, d: 0.01, y: 0.88, h: 0.08, color: "#0e1014", glow: true, fix: "wdh" },
      // 7. Interior stainless garment hanging rail
      { shape: "cyl", x: 0.0, z: -0.04, w: 0.76, d: 0.03, y: 0.82, h: 0.03, axis: "x", color: "metal", fix: "wdh" },
      // 8. 3 Tailored suit hanger representations
      { shape: "loft", x: -0.22, z: -0.04, w: 0.16, d: 0.04, y: 0.74, h: 0.08, tx: -0.22, tz: -0.04, tw: 0.04, td: 0.04, color: "#8c6747", fix: "wdh" },
      { shape: "loft", x: 0.0, z: -0.04, w: 0.16, d: 0.04, y: 0.74, h: 0.08, tx: 0.0, tz: -0.04, tw: 0.04, td: 0.04, color: "#8c6747", fix: "wdh" },
      { shape: "loft", x: 0.22, z: -0.04, w: 0.16, d: 0.04, y: 0.74, h: 0.08, tx: 0.22, tz: -0.04, tw: 0.04, td: 0.04, color: "#8c6747", fix: "wdh" },
      // 9. Interior trousers crease press door module
      { shape: "box", x: 0.38, z: 0.0, w: 0.04, d: 0.60, y: 0.20, h: 0.55, color: "#1c1e22", edges: "faint" },
      // 10. Lower steam generator boiler chamber
      { shape: "box", x: 0.0, z: -0.04, w: 0.84, d: 0.74, y: 0.04, h: 0.12, color: "#18191d", edges: "faint" },
      // 11. Steam diffuser outlet perforated grille
      { shape: "box", x: 0.0, z: 0.0, w: 0.50, d: 0.30, y: 0.16, h: 0.015, color: "metal", edges: "glow", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: -0.04, w: 0.94, d: 0.88 },
      { shape: "line", x1: -0.46, z1: 0.42, x2: 0.46, z2: 0.42 },
      { shape: "line", x1: -0.40, z1: 0.46, x2: -0.40, z2: 0.42 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.14 }
    ]
  }
];
