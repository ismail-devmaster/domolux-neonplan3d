// Collection D: Products 19 to 22

export const DOMOLUX_COLLECTION_PART4 = [
  // =========================================================================
  // COLLECTION D — PRIVATE FITNESS AND PERFORMANCE WELLNESS (19-22)
  // =========================================================================
  {
    num: 19,
    id: "pilates_reformer",
    packId: "domolux.pilates_reformer",
    name: {
      en: "Domolux Professional Pilates Reformer",
      de: "Domolux Professioneller Pilates-Reformer",
      ar: "جهاز البيلاتس ريفورمر الاحترافي دومولوكس"
    },
    collection: "Private Fitness & Performance Wellness",
    description: "Precision luxury Pilates machine with solid American walnut frame, extruded anodized aluminum rails, leather carriage, and nickel-plated springs.",
    size: [0.76, 2.45, 0.72],
    mount: "floor",
    surface: false,
    group: "sport",
    room: ["hobby", "bedroom"],
    tags: ["pilates", "reformer", "fitness", "gym", "walnut", "domolux"],
    parts: [
      // 1. Solid American walnut left outer frame rail
      { shape: "box", x: -0.44, z: 0.0, w: 0.08, d: 0.96, y: 0.12, h: 0.22, color: "#36261b", finish: "wood", edges: true, fix: "wd" },
      // 2. Solid American walnut right outer frame rail
      { shape: "box", x: 0.44, z: 0.0, w: 0.08, d: 0.96, y: 0.12, h: 0.22, color: "#36261b", finish: "wood", edges: true, fix: "wd" },
      // 3. Front footbar cross-member frame
      { shape: "box", x: 0.0, z: 0.46, w: 0.96, d: 0.08, y: 0.12, h: 0.22, color: "#36261b", finish: "wood", edges: true, fix: "d" },
      // 4. Rear pulley tower cross-member frame
      { shape: "box", x: 0.0, z: -0.46, w: 0.96, d: 0.08, y: 0.12, h: 0.22, color: "#36261b", finish: "wood", edges: true, fix: "d" },
      // 5. Four heavy structural turned legs
      { shape: "cyl", x: -0.42, z: 0.44, w: 0.10, d: 0.10, y: 0.0, h: 0.14, color: "#2d241e", fix: "wdh" },
      { shape: "cyl", x: 0.42, z: 0.44, w: 0.10, d: 0.10, y: 0.0, h: 0.14, color: "#2d241e", fix: "wdh" },
      { shape: "cyl", x: -0.42, z: -0.44, w: 0.10, d: 0.10, y: 0.0, h: 0.14, color: "#2d241e", fix: "wdh" },
      { shape: "cyl", x: 0.42, z: -0.44, w: 0.10, d: 0.10, y: 0.0, h: 0.14, color: "#2d241e", fix: "wdh" },
      // 6. Extruded anodized aluminum glide track (left)
      { shape: "box", x: -0.36, z: 0.0, w: 0.06, d: 0.88, y: 0.32, h: 0.04, color: "metal", edges: "faint" },
      // 7. Extruded anodized aluminum glide track (right)
      { shape: "box", x: 0.36, z: 0.0, w: 0.06, d: 0.88, y: 0.32, h: 0.04, color: "metal", edges: "faint" },
      // 8. Sliding carriage platform (upholstered black leather)
      { shape: "box", x: 0.0, z: -0.05, w: 0.70, d: 0.44, y: 0.36, h: 0.08, color: "#18191d", finish: "fabric", edges: true },
      // 9. Padded adjustable headrest
      { shape: "box", x: 0.0, z: -0.22, w: 0.30, d: 0.14, y: 0.42, h: 0.06, color: "#18191d", finish: "fabric", fix: "wdh" },
      // 10. Dual upholstered shoulder rest blocks
      { shape: "box", x: -0.22, z: -0.20, w: 0.14, d: 0.10, y: 0.42, h: 0.16, color: "#18191d", finish: "fabric", fix: "wdh" },
      { shape: "box", x: 0.22, z: -0.20, w: 0.14, d: 0.10, y: 0.42, h: 0.16, color: "#18191d", finish: "fabric", fix: "wdh" },
      // 11. Multi-position locking tubular steel footbar
      { shape: "cyl", x: 0.0, z: 0.42, w: 0.86, d: 0.05, y: 0.70, h: 0.05, axis: "x", color: "metal", edges: "glow", fix: "h" },
      // 12. Footbar left swing support arm
      { shape: "loft", x: -0.42, z: 0.36, w: 0.04, d: 0.14, y: 0.24, h: 0.48, tx: -0.42, tz: 0.42, tw: 0.03, td: 0.04, color: "#8c6747", fix: "wd" },
      // 13. Footbar right swing support arm
      { shape: "loft", x: 0.42, z: 0.36, w: 0.04, d: 0.14, y: 0.24, h: 0.48, tx: 0.42, tz: 0.42, tw: 0.03, td: 0.04, color: "#8c6747", fix: "wd" },
      // 14. Footbar cushioned padded center wrap
      { shape: "cyl", x: 0.0, z: 0.42, w: 0.50, d: 0.07, y: 0.69, h: 0.07, axis: "x", color: "#18191d", fix: "h" },
      // 15. Rear pulley riser posts (left)
      { shape: "cyl", x: -0.32, z: -0.45, w: 0.04, d: 0.04, y: 0.32, h: 0.45, color: "#c5a059", fix: "wdh" },
      // 16. Rear pulley riser posts (right)
      { shape: "cyl", x: 0.32, z: -0.45, w: 0.04, d: 0.04, y: 0.32, h: 0.45, color: "#c5a059", fix: "wdh" },
      // 17. Swivel pulleys at top of risers
      { shape: "cyl", x: -0.32, z: -0.45, w: 0.06, d: 0.06, y: 0.76, h: 0.04, color: "metal", fix: "wdh" },
      { shape: "cyl", x: 0.32, z: -0.45, w: 0.06, d: 0.06, y: 0.76, h: 0.04, color: "metal", fix: "wdh" },
      // 18. Spring tension gear bar (5 nickel-plated springs representation)
      { shape: "box", x: 0.0, z: 0.22, w: 0.45, d: 0.08, y: 0.28, h: 0.03, color: "metal", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.96 },
      { shape: "rect", x: 0.0, z: -0.05, w: 0.70, d: 0.44, fill: true },
      { shape: "line", x1: -0.42, z1: 0.42, x2: 0.42, z2: 0.42 },
      { shape: "circle", x: -0.32, z: -0.45, r: 0.04 },
      { shape: "circle", x: 0.32, z: -0.45, r: 0.04 }
    ]
  },

  {
    num: 20,
    id: "luxury_treadmill",
    packId: "domolux.luxury_treadmill",
    name: {
      en: "Domolux Elite Commercial Treadmill",
      de: "Domolux Elite-Laufband",
      ar: "جهاز المشي الرياضي الفاخر دومولوكس"
    },
    collection: "Private Fitness & Performance Wellness",
    description: "Architectural commercial-grade treadmill with cast aluminum deck, dark bronze upright pillars, curved HD touchscreen console, and shock-cushioned running belt.",
    size: [0.92, 1.95, 1.48],
    mount: "floor",
    surface: false,
    group: "sport",
    room: ["hobby"],
    tags: ["treadmill", "running", "fitness", "gym", "cardio", "domolux"],
    parts: [
      // 1. Cast aluminum structural lower base chassis
      { shape: "box", x: 0.0, z: -0.05, w: 0.94, d: 0.88, y: 0.0, h: 0.12, color: "#1c1e22", edges: true },
      // 2. High-grip textured multi-ply running belt
      { shape: "box", x: 0.0, z: -0.05, w: 0.62, d: 0.84, y: 0.09, h: 0.035, color: "#111215", edges: "faint" },
      // 3. Left non-slip safety side footrail (extruded aluminum)
      { shape: "box", x: -0.38, z: -0.05, w: 0.12, d: 0.86, y: 0.09, h: 0.04, color: "#30343f", edges: "faint" },
      // 4. Right non-slip safety side footrail
      { shape: "box", x: 0.38, z: -0.05, w: 0.12, d: 0.86, y: 0.09, h: 0.04, color: "#30343f", edges: "faint" },
      // 5. Front motor shroud aerodynamic hood
      { shape: "loft", x: 0.0, z: 0.38, w: 0.90, d: 0.18, y: 0.06, h: 0.22, tx: 0.0, tz: 0.36, tw: 0.82, td: 0.14, color: "#18191d", edges: "glow" },
      // 6. Rear belt roller casing
      { shape: "cyl", x: 0.0, z: -0.47, w: 0.64, d: 0.06, y: 0.07, h: 0.06, axis: "x", color: "metal", fix: "wdh" },
      // 7. Left upright structural pillar (matte dark bronze)
      { shape: "loft", x: -0.42, z: 0.28, w: 0.08, d: 0.12, y: 0.12, h: 0.78, tx: -0.38, tz: 0.34, tw: 0.07, td: 0.10, color: "#8c6747", edges: true, fix: "wd" },
      // 8. Right upright structural pillar
      { shape: "loft", x: 0.42, z: 0.28, w: 0.08, d: 0.12, y: 0.12, h: 0.78, tx: 0.38, tz: 0.34, tw: 0.07, td: 0.10, color: "#8c6747", edges: true, fix: "wd" },
      // 9. Left horizontal cantilevered handrail
      { shape: "box", x: -0.38, z: 0.12, w: 0.06, d: 0.45, y: 0.86, h: 0.05, color: "#18191d", fix: "wd" },
      // 10. Right horizontal cantilevered handrail
      { shape: "box", x: 0.38, z: 0.12, w: 0.06, d: 0.45, y: 0.86, h: 0.05, color: "#18191d", fix: "wd" },
      // 11. Front horizontal cross-grip bar with heart-rate sensors
      { shape: "cyl", x: 0.0, z: 0.32, w: 0.74, d: 0.05, y: 0.85, h: 0.05, axis: "x", color: "metal", fix: "h" },
      // 12. Central safety emergency stop key pod
      { shape: "box", x: 0.0, z: 0.34, w: 0.14, d: 0.06, y: 0.87, h: 0.03, color: "#e74c3c", glow: true, fix: "wdh" },
      // 13. Wide curved panoramic HD touchscreen console
      { shape: "loft", x: 0.0, z: 0.38, w: 0.78, d: 0.06, y: 0.90, h: 0.10, tx: 0.0, tz: 0.41, tw: 0.78, td: 0.04, color: "#0e1014", edges: "glow", fix: "h" },
      // 14. Screen display active surface
      { shape: "box", x: 0.0, z: 0.39, w: 0.72, d: 0.02, y: 0.91, h: 0.08, color: "accent", glow: true, fix: "h" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: -0.05, w: 0.94, d: 0.88 },
      { shape: "rect", x: 0.0, z: -0.05, w: 0.62, d: 0.84, fill: true },
      { shape: "rect", x: 0.0, z: 0.38, w: 0.78, d: 0.10 },
      { shape: "line", x1: -0.38, z1: 0.34, x2: -0.38, z2: -0.10 },
      { shape: "line", x1: 0.38, z1: 0.34, x2: 0.38, z2: -0.10 }
    ]
  },

  {
    num: 21,
    id: "premium_exercise_bike",
    packId: "domolux.premium_exercise_bike",
    name: {
      en: "Domolux Performance Indoor Cycle",
      de: "Domolux Performance Indoor-Cycle",
      ar: "دراجة التمارين الرياضية الفاخرة دومولوكس"
    },
    collection: "Private Fitness & Performance Wellness",
    description: "Sculptural indoor training bike with perimeter-weighted magnetic flywheel, midnight navy aero frame, tri-grip handlebars, and HD performance console.",
    size: [0.62, 1.35, 1.32],
    mount: "floor",
    surface: false,
    group: "sport",
    room: ["hobby"],
    tags: ["bike", "cycling", "fitness", "indoor", "cardio", "domolux"],
    parts: [
      // 1. Heavy tubular floor stabilizer (front foot)
      { shape: "cyl", x: 0.0, z: 0.42, w: 0.88, d: 0.08, y: 0.0, h: 0.08, axis: "x", color: "#1c1e22", edges: "faint", fix: "wdh" },
      // 2. Heavy tubular floor stabilizer (rear foot)
      { shape: "cyl", x: 0.0, z: -0.42, w: 0.88, d: 0.08, y: 0.0, h: 0.08, axis: "x", color: "#1c1e22", edges: "faint", fix: "wdh" },
      // 3. Central bottom longitudinal frame spine
      { shape: "box", x: 0.0, z: 0.0, w: 0.12, d: 0.84, y: 0.04, h: 0.08, color: "#182236", edges: true },
      // 4. Perimeter-weighted magnetic flywheel disc
      { shape: "cyl", x: 0.0, z: 0.28, w: 0.10, d: 0.36, y: 0.16, h: 0.36, axis: "x", color: "#8c6747", edges: "glow", fix: "wdh" },
      // 5. Flywheel machined aluminum outer rim
      { shape: "cyl", x: 0.0, z: 0.28, w: 0.11, d: 0.38, y: 0.17, h: 0.34, axis: "x", color: "metal", fix: "wdh" },
      // 6. Sculptural boxed V-frame front fork upright
      { shape: "loft", x: 0.0, z: 0.16, w: 0.14, d: 0.16, y: 0.12, h: 0.65, tx: 0.0, tz: 0.22, tw: 0.12, td: 0.12, color: "#182236", edges: true },
      // 7. Sculptural boxed V-frame rear seatpost tube
      { shape: "loft", x: 0.0, z: -0.12, w: 0.14, d: 0.16, y: 0.12, h: 0.58, tx: 0.0, tz: -0.20, tw: 0.12, td: 0.12, color: "#182236", edges: true },
      // 8. Crankset bottom bracket hub
      { shape: "cyl", x: 0.0, z: -0.05, w: 0.28, d: 0.12, y: 0.18, h: 0.12, axis: "x", color: "metal", fix: "wdh" },
      // 9. Left crank arm and SPD pedal
      { shape: "box", x: -0.16, z: -0.05, w: 0.03, d: 0.18, y: 0.14, h: 0.04, color: "metal", rot: 45, fix: "wdh" },
      { shape: "box", x: -0.22, z: -0.12, w: 0.10, d: 0.08, y: 0.10, h: 0.03, color: "#111215", fix: "wdh" },
      // 10. Right crank arm and SPD pedal
      { shape: "box", x: 0.16, z: -0.05, w: 0.03, d: 0.18, y: 0.24, h: 0.04, color: "metal", rot: -135, fix: "wdh" },
      { shape: "box", x: 0.22, z: 0.02, w: 0.10, d: 0.08, y: 0.28, h: 0.03, color: "#111215", fix: "wdh" },
      // 11. Chrome micro-adjustable seatpost sleeve
      { shape: "cyl", x: 0.0, z: -0.22, w: 0.06, d: 0.06, y: 0.68, h: 0.15, color: "metal", fix: "wdh" },
      // 12. Ergonomic racing saddle
      { shape: "loft", x: 0.0, z: -0.24, w: 0.28, d: 0.32, y: 0.83, h: 0.07, tx: 0.0, tz: -0.18, tw: 0.12, td: 0.24, color: "#111215", finish: "fabric", edges: true, fix: "wdh" },
      // 13. Chrome micro-adjustable handlebar stem
      { shape: "cyl", x: 0.0, z: 0.24, w: 0.06, d: 0.06, y: 0.75, h: 0.14, color: "metal", fix: "wdh" },
      // 14. Aerodynamic tri-grip multi-position handlebars
      { shape: "cyl", x: 0.0, z: 0.26, w: 0.72, d: 0.04, y: 0.88, h: 0.04, axis: "x", color: "#18191d", edges: "faint", fix: "h" },
      // 15. Forward aero drops / forearm rest pads
      { shape: "box", x: -0.14, z: 0.28, w: 0.10, d: 0.14, y: 0.89, h: 0.025, color: "#111215", fix: "wdh" },
      { shape: "box", x: 0.14, z: 0.28, w: 0.10, d: 0.14, y: 0.89, h: 0.025, color: "#111215", fix: "wdh" },
      // 16. Integrated digital tablet/performance console
      { shape: "box", x: 0.0, z: 0.32, w: 0.38, d: 0.04, y: 0.92, h: 0.08, color: "accent", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "line", x1: 0.0, z1: -0.42, x2: 0.0, z2: 0.42 },
      { shape: "line", x1: -0.44, z1: 0.42, x2: 0.44, z2: 0.42 },
      { shape: "line", x1: -0.44, z1: -0.42, x2: 0.44, z2: -0.42 },
      { shape: "circle", x: 0.0, z: 0.28, r: 0.18 },
      { shape: "circle", x: 0.0, z: -0.22, r: 0.12 }
    ]
  },

  {
    num: 22,
    id: "dual_cable_trainer",
    packId: "domolux.dual_cable_trainer",
    name: {
      en: "Domolux Dual Cable Functional Trainer",
      de: "Domolux Dual-Kabelzugstation",
      ar: "محطة الكابلات الوظيفية المزدوجة دومولوكس"
    },
    collection: "Private Fitness & Performance Wellness",
    description: "Architectural private gym functional trainer with dual independent weight stacks, height-adjustable trolley carriages, and multi-grip chin-up bar.",
    size: [1.65, 1.15, 2.20],
    mount: "floor",
    surface: false,
    group: "sport",
    room: ["hobby"],
    tags: ["gym", "cables", "trainer", "fitness", "weights", "domolux"],
    parts: [
      // 1. Heavy structural base outriggers (left)
      { shape: "box", x: -0.40, z: 0.0, w: 0.12, d: 0.88, y: 0.0, h: 0.06, color: "#1c1e22", edges: "faint", fix: "wd" },
      // 2. Heavy structural base outriggers (right)
      { shape: "box", x: 0.40, z: 0.0, w: 0.12, d: 0.88, y: 0.0, h: 0.06, color: "#1c1e22", edges: "faint", fix: "wd" },
      // 3. Central rear ground stabilizer crossbeam
      { shape: "box", x: 0.0, z: -0.38, w: 0.72, d: 0.08, y: 0.0, h: 0.06, color: "#1c1e22", fix: "h" },
      // 4. Left weight stack column tower enclosure
      { shape: "box", x: -0.40, z: -0.25, w: 0.22, d: 0.32, y: 0.06, h: 0.88, color: "#18191d", edges: true },
      // 5. Left smoked acrylic weight stack inspection window
      { shape: "box", x: -0.40, z: -0.08, w: 0.16, d: 0.02, y: 0.15, h: 0.74, color: "glass", edges: "glow" },
      // 6. Right weight stack column tower enclosure
      { shape: "box", x: 0.40, z: -0.25, w: 0.22, d: 0.32, y: 0.06, h: 0.88, color: "#18191d", edges: true },
      // 7. Right smoked acrylic weight stack inspection window
      { shape: "box", x: 0.40, z: -0.08, w: 0.16, d: 0.02, y: 0.15, h: 0.74, color: "glass", edges: "glow" },
      // 8. Left vertical chrome dual guide rails
      { shape: "cyl", x: -0.44, z: 0.18, w: 0.03, d: 0.03, y: 0.06, h: 0.88, color: "metal", fix: "wd" },
      { shape: "cyl", x: -0.36, z: 0.18, w: 0.03, d: 0.03, y: 0.06, h: 0.88, color: "metal", fix: "wd" },
      // 9. Left height-adjustable pulley carriage trolley
      { shape: "box", x: -0.40, z: 0.18, w: 0.14, d: 0.10, y: 0.52, h: 0.08, color: "#c5a059", glow: true, fix: "wdh" },
      // 10. Left swivel pulley housing & D-handle
      { shape: "cyl", x: -0.40, z: 0.24, w: 0.06, d: 0.06, y: 0.53, h: 0.06, axis: "x", color: "metal", fix: "wdh" },
      // 11. Right vertical chrome dual guide rails
      { shape: "cyl", x: 0.44, z: 0.18, w: 0.03, d: 0.03, y: 0.06, h: 0.88, color: "metal", fix: "wd" },
      { shape: "cyl", x: 0.36, z: 0.18, w: 0.03, d: 0.03, y: 0.06, h: 0.88, color: "metal", fix: "wd" },
      // 12. Right height-adjustable pulley carriage trolley
      { shape: "box", x: 0.40, z: 0.18, w: 0.14, d: 0.10, y: 0.52, h: 0.08, color: "#c5a059", glow: true, fix: "wdh" },
      // 13. Right swivel pulley housing & D-handle
      { shape: "cyl", x: 0.40, z: 0.24, w: 0.06, d: 0.06, y: 0.53, h: 0.06, axis: "x", color: "metal", fix: "wdh" },
      // 14. Top bridge header arch beam
      { shape: "box", x: 0.0, z: -0.25, w: 0.72, d: 0.12, y: 0.94, h: 0.06, color: "#1c1e22", edges: true, fix: "h" },
      // 15. Overhead multi-grip chin-up/pull-up bar assembly
      { shape: "cyl", x: 0.0, z: 0.05, w: 0.86, d: 0.04, y: 0.95, h: 0.04, axis: "x", color: "metal", edges: "glow", fix: "h" },
      // 16. Pull-up angled neutral grip handles
      { shape: "cyl", x: -0.18, z: 0.12, w: 0.03, d: 0.16, y: 0.94, h: 0.03, axis: "z", color: "#18191d", rot: 15, fix: "wdh" },
      { shape: "cyl", x: 0.18, z: 0.12, w: 0.03, d: 0.16, y: 0.94, h: 0.03, axis: "z", color: "#18191d", rot: -15, fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: -0.40, z: -0.25, w: 0.22, d: 0.32 },
      { shape: "rect", x: 0.40, z: -0.25, w: 0.22, d: 0.32 },
      { shape: "rect", x: -0.40, z: 0.0, w: 0.12, d: 0.88 },
      { shape: "rect", x: 0.40, z: 0.0, w: 0.12, d: 0.88 },
      { shape: "line", x1: -0.40, z1: 0.05, x2: 0.40, z2: 0.05 }
    ]
  }
];
