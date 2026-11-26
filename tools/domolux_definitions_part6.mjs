// Collection F: Products 28 to 30

export const DOMOLUX_COLLECTION_PART6 = [
  // =========================================================================
  // COLLECTION F — EXCLUSIVE PET LIFESTYLE (28-30)
  // =========================================================================
  {
    num: 28,
    id: "designer_cat_tree",
    packId: "domolux.designer_cat_tree",
    name: {
      en: "Domolux Architectural Cat Climbing Tree",
      de: "Domolux Architektonischer Katzenbaum",
      ar: "شجرة تسلق القطط المعمارية دومولوكس"
    },
    collection: "Exclusive Pet Lifestyle",
    description: "Architectural vertical feline climbing sculpture with natural oak pillars, braided sisal rope, warm ivory bouclé perches, and geometric sleeping pod.",
    size: [1.05, 0.75, 1.75],
    mount: "floor",
    surface: false,
    group: "pets",
    room: ["living", "hall"],
    tags: ["cat", "pet", "climbing", "tree", "boucle", "domolux"],
    parts: [
      // 1. Honed travertine heavy stabilizer base plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.92, y: 0.0, h: 0.05, color: "#d8cfc4", edges: true, fix: "h" },
      // 2. Base brass collar fittings (left)
      { shape: "cyl", x: -0.25, z: 0.0, w: 0.16, d: 0.16, y: 0.05, h: 0.03, color: "#c5a059", glow: true, fix: "wdh" },
      // 3. Base brass collar fittings (right)
      { shape: "cyl", x: 0.25, z: 0.0, w: 0.16, d: 0.16, y: 0.05, h: 0.03, color: "#c5a059", glow: true, fix: "wdh" },
      // 4. Main left vertical solid oak post wrapped in braided sisal rope
      { shape: "cyl", x: -0.25, z: 0.0, w: 0.14, d: 0.14, y: 0.08, h: 0.88, color: "#b89d78", edges: "faint", fix: "wd" },
      // 5. Main right vertical solid oak post
      { shape: "cyl", x: 0.25, z: 0.0, w: 0.14, d: 0.14, y: 0.08, h: 0.55, color: "#9c6838", finish: "wood", fix: "wd" },
      // 6. Stepped lower perch platform (ivory bouclé)
      { shape: "cyl", x: 0.25, z: 0.08, w: 0.45, d: 0.45, y: 0.28, h: 0.04, color: "#dedbd2", finish: "fabric", edges: true, fix: "wdh" },
      // 7. Middle perch platform (left)
      { shape: "cyl", x: -0.22, z: 0.10, w: 0.45, d: 0.45, y: 0.52, h: 0.04, color: "#dedbd2", finish: "fabric", edges: true, fix: "wdh" },
      // 8. Geometric enclosed cubic resting pod (natural oak)
      { shape: "box", x: 0.22, z: 0.0, w: 0.48, d: 0.52, y: 0.62, h: 0.24, color: "#9c6838", finish: "wood", edges: true, fix: "wdh" },
      // 9. Resting pod circular portal entry opening
      { shape: "cyl", x: 0.22, z: 0.27, w: 0.26, d: 0.02, y: 0.68, h: 0.12, axis: "z", color: "#18191d", fix: "wdh" },
      // 10. Resting pod inner cushion pad
      { shape: "box", x: 0.22, z: 0.0, w: 0.42, d: 0.46, y: 0.63, h: 0.04, color: "#dedbd2", finish: "fabric", fix: "wdh" },
      // 11. Upper crown observation lookout bed perch
      { shape: "cyl", x: -0.25, z: 0.0, w: 0.50, d: 0.50, y: 0.94, h: 0.06, color: "#dedbd2", finish: "fabric", edges: "glow", fix: "wdh" },
      // 12. Crown bed raised rim bolster
      { shape: "cyl", x: -0.25, z: 0.0, w: 0.48, d: 0.48, y: 0.96, h: 0.04, color: "#cdc8bd", finish: "fabric", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.94, d: 0.92 },
      { shape: "circle", x: -0.25, z: 0.0, r: 0.25 },
      { shape: "circle", x: 0.25, z: 0.08, r: 0.22 },
      { shape: "rect", x: 0.22, z: 0.0, w: 0.48, d: 0.52 }
    ]
  },

  {
    num: 29,
    id: "smart_pet_feeding_station",
    packId: "domolux.smart_pet_feeding_station",
    name: {
      en: "Domolux Intelligent Pet Dining Station",
      de: "Domolux Intelligente Haustier-Futterstation",
      ar: "محطة إطعام الحيوانات الأليفة الذكية دومولوكس"
    },
    collection: "Exclusive Pet Lifestyle",
    description: "Integrated pet dining installation with fluted walnut cabinet, dry food storage hopper, dual elevated ceramic bowls, and automatic portion dispenser.",
    size: [0.75, 0.42, 0.65],
    mount: "floor",
    surface: true,
    group: "pets",
    room: ["kitchen", "utility"],
    tags: ["pet", "feeder", "dining", "smart", "walnut", "domolux"],
    parts: [
      // 1. Recessed dark architectural sub-plinth base
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.88, y: 0.0, h: 0.06, color: "#18191d", edges: "faint", fix: "h" },
      // 2. Fluted American walnut rear storage hopper cabinet
      { shape: "box", x: 0.0, z: -0.20, w: 0.92, d: 0.50, y: 0.06, h: 0.88, color: "#36261b", finish: "wood", edges: true },
      // 3. Top sloped tempered glass refilling hopper lid
      { shape: "loft", x: 0.0, z: -0.20, w: 0.88, d: 0.46, y: 0.94, h: 0.06, tx: 0.0, tz: -0.22, tw: 0.84, td: 0.42, color: "glass", edges: "glow", fix: "h" },
      // 4. Lid brushed champagne hinge bar
      { shape: "cyl", x: 0.0, z: -0.42, w: 0.84, d: 0.03, y: 0.95, h: 0.03, axis: "x", color: "#c5a059", fix: "wdh" },
      // 5. Forward elevated dining platform (champagne bronze)
      { shape: "box", x: 0.0, z: 0.22, w: 0.92, d: 0.45, y: 0.06, h: 0.22, color: "#8c6747", edges: "glow" },
      // 6. Food bowl recessed well (left)
      { shape: "cyl", x: -0.24, z: 0.22, w: 0.36, d: 0.36, y: 0.26, h: 0.08, color: "#18191d", fix: "wdh" },
      // 7. Left elevated white glazed ceramic food bowl
      { shape: "cyl", x: -0.24, z: 0.22, w: 0.34, d: 0.34, y: 0.27, h: 0.07, color: "white", edges: true, fix: "wdh" },
      // 8. Water bowl recessed well (right)
      { shape: "cyl", x: 0.24, z: 0.22, w: 0.36, d: 0.36, y: 0.26, h: 0.08, color: "#18191d", fix: "wdh" },
      // 9. Right elevated white glazed ceramic water bowl
      { shape: "cyl", x: 0.24, z: 0.22, w: 0.34, d: 0.34, y: 0.27, h: 0.07, color: "white", edges: true, fix: "wdh" },
      // 10. Water surface plane inside right bowl
      { shape: "cyl", x: 0.24, z: 0.22, w: 0.30, d: 0.30, y: 0.31, h: 0.015, color: "#1d637d", glow: true, fix: "wdh" },
      // 11. Automatic food portion dispensing chute
      { shape: "box", x: -0.24, z: 0.03, w: 0.16, d: 0.08, y: 0.36, h: 0.12, color: "metal", edges: "faint", fix: "wdh" },
      // 12. Discreet capacitive touch digital control strip
      { shape: "box", x: 0.0, z: 0.03, w: 0.24, d: 0.02, y: 0.65, h: 0.08, color: "accent", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.92, d: 0.88 },
      { shape: "rect", x: 0.0, z: -0.20, w: 0.92, d: 0.50, fill: true },
      { shape: "circle", x: -0.24, z: 0.22, r: 0.17 },
      { shape: "circle", x: 0.24, z: 0.22, r: 0.17 }
    ]
  },

  {
    num: 30,
    id: "pet_grooming_wash_station",
    packId: "domolux.pet_grooming_wash_station",
    name: {
      en: "Domolux Luxury Pet Grooming Suite",
      de: "Domolux Luxus-Haustier-Pflegetisch",
      ar: "جناح العناية بالحيوانات الأليفة الفاخر دومولوكس"
    },
    collection: "Exclusive Pet Lifestyle",
    description: "Private pet washing station with elevated seamless composite tub, retractable teak steps, glass splash guards, grooming arm, and flexible spray shower.",
    size: [1.45, 0.85, 1.65],
    mount: "floor",
    surface: false,
    group: "pets",
    room: ["utility", "bath"],
    tags: ["pet", "grooming", "bath", "wash", "dog", "domolux"],
    parts: [
      // 1. Lower waterproof cabinetry storage base
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.88, y: 0.0, h: 0.38, color: "#1c1e22", edges: true },
      // 2. Lower double storage doors for shampoos and towels
      { shape: "box", x: -0.22, z: 0.45, w: 0.42, d: 0.02, y: 0.04, h: 0.32, color: "#252830", edges: true },
      { shape: "box", x: 0.22, z: 0.45, w: 0.42, d: 0.02, y: 0.04, h: 0.32, color: "#252830", edges: true },
      // 3. Champagne bronze door pulls
      { shape: "box", x: -0.04, z: 0.465, w: 0.015, d: 0.015, y: 0.20, h: 0.10, color: "#c5a059", glow: true, fix: "wdh" },
      { shape: "box", x: 0.04, z: 0.465, w: 0.015, d: 0.015, y: 0.20, h: 0.10, color: "#c5a059", glow: true, fix: "wdh" },
      // 4. Elevated seamless white mineral composite wash tub
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.92, y: 0.38, h: 0.28, color: "white", finish: "body", edges: true },
      // 5. Deep sunken bathing basin cavity
      { shape: "box", x: 0.0, z: 0.0, w: 0.84, d: 0.78, y: 0.42, h: 0.23, color: "#e8eff4", edges: "faint" },
      // 6. Stainless basin bottom pop-up drain
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.08, d: 0.08, y: 0.425, h: 0.01, color: "metal", fix: "wdh" },
      // 7. Retractable teak doggy entrance steps (front slide-out ramp)
      { shape: "box", x: 0.32, z: 0.46, w: 0.28, d: 0.06, y: 0.10, h: 0.26, color: "#8a5829", finish: "wood", edges: true, fix: "wdh" },
      // 8. Rear tempered glass splash guard panel
      { shape: "box", x: 0.0, z: -0.45, w: 0.94, d: 0.02, y: 0.66, h: 0.32, color: "glass", edges: "glow" },
      // 9. Left glass splash guard panel
      { shape: "box", x: -0.47, z: 0.0, w: 0.02, d: 0.88, y: 0.66, h: 0.32, color: "glass", edges: "glow" },
      // 10. Stainless grooming restraint overhead H-arm vertical column
      { shape: "cyl", x: -0.42, z: -0.40, w: 0.04, d: 0.04, y: 0.66, h: 0.34, color: "metal", fix: "wd" },
      // 11. Grooming horizontal cross-arm
      { shape: "cyl", x: 0.0, z: -0.40, w: 0.84, d: 0.03, y: 0.97, h: 0.03, axis: "x", color: "metal", edges: "glow", fix: "h" },
      // 12. Quick-release restraint collar loop clamp
      { shape: "cyl", x: 0.0, z: -0.40, w: 0.04, d: 0.04, y: 0.88, h: 0.08, color: "#c5a059", fix: "wdh" },
      // 13. Professional thermostatic mixer faucet with high-pressure spray wand
      { shape: "cyl", x: -0.36, z: -0.38, w: 0.06, d: 0.06, y: 0.68, h: 0.16, color: "metal", fix: "wdh" },
      // 14. Flexible spray shower hose loop
      { shape: "loft", x: -0.34, z: -0.32, w: 0.04, d: 0.04, y: 0.58, h: 0.14, tx: -0.25, tz: -0.28, tw: 0.03, td: 0.03, color: "metal", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.92 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.84, d: 0.78, fill: true },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.05 },
      { shape: "rect", x: 0.32, z: 0.46, w: 0.28, d: 0.06 },
      { shape: "line", x1: -0.42, z1: -0.40, x2: 0.42, z2: -0.40 }
    ]
  }
];
