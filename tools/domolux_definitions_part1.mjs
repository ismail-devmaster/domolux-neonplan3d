// Complete Definitions for Domolux Private Collection 30
// 30 Unique Luxury Products across 6 Collections

export const DOMOLUX_COLLECTION_30 = [
  // =========================================================================
  // COLLECTION A — PRIVATE ENTERTAINMENT AND EXCLUSIVE RESIDENCE (1-6)
  // =========================================================================
  {
    num: 1,
    id: "sculptural_fireplace",
    packId: "domolux.sculptural_fireplace",
    name: {
      en: "Domolux Sculptural Fireplace",
      de: "Domolux Skulpturaler Kamin",
      ar: "مدفأة دومولوكس المعمارية النحتية"
    },
    collection: "Private Entertainment & Exclusive Residence",
    description: "Monumental architectural fireplace with deep recessed panoramic fire chamber, honed travertine surround, floating hearth, and ambient under-hearth illumination.",
    size: [2.40, 0.65, 1.45],
    mount: "floor",
    surface: true,
    group: "heating",
    room: ["living", "hall"],
    tags: ["fireplace", "travertine", "luxury", "flame", "architectural", "domolux"],
    parts: [
      // 1. Floating sub-plinth with shadow gap
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.90, y: 0.0, h: 0.04, color: "#1a1a1f", edges: "faint", fix: "h" },
      // 2. Ambient under-hearth glow strip
      { shape: "box", x: 0.0, z: 0.40, w: 0.92, d: 0.06, y: 0.01, h: 0.02, color: "#ffb366", glow: true, edges: "glow", fix: "wdh" },
      // 3. Monolithic floating hearth slab (travertine)
      { shape: "box", x: 0.0, z: 0.05, w: 1.0, d: 0.95, y: 0.04, h: 0.08, color: "#d8cfc4", finish: "body", edges: true, fix: "h" },
      // 4. Main travertine lower surround base
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.88, y: 0.12, h: 0.12, color: "#d8cfc4", finish: "body", edges: "faint" },
      // 5. Firebox bottom bed (dark refractory basalt)
      { shape: "box", x: 0.0, z: 0.0, w: 0.72, d: 0.65, y: 0.24, h: 0.03, color: "#1c1d22", edges: "faint" },
      // 6. Firebox rear wall (black fluted refractory ceramic)
      { shape: "box", x: 0.0, z: -0.28, w: 0.72, d: 0.08, y: 0.27, h: 0.50, color: "#18191d", edges: "faint" },
      // 7. Firebox left side wall
      { shape: "box", x: -0.34, z: 0.0, w: 0.06, d: 0.60, y: 0.27, h: 0.50, color: "#1c1d22", edges: "faint" },
      // 8. Firebox right side wall
      { shape: "box", x: 0.34, z: 0.0, w: 0.06, d: 0.60, y: 0.27, h: 0.50, color: "#1c1d22", edges: "faint" },
      // 9. Firebox ceiling / baffle plate
      { shape: "box", x: 0.0, z: 0.0, w: 0.72, d: 0.65, y: 0.77, h: 0.04, color: "#18191d", edges: "faint" },
      // 10. Travertine left monumental column
      { shape: "box", x: -0.41, z: 0.02, w: 0.16, d: 0.84, y: 0.24, h: 0.57, color: "#d8cfc4", finish: "body", edges: true },
      // 11. Travertine right monumental column
      { shape: "box", x: 0.41, z: 0.02, w: 0.16, d: 0.84, y: 0.24, h: 0.57, color: "#d8cfc4", finish: "body", edges: true },
      // 12. Travertine header mantel beam
      { shape: "box", x: 0.0, z: 0.02, w: 0.98, d: 0.86, y: 0.81, h: 0.15, color: "#d8cfc4", finish: "body", edges: true, fix: "h" },
      // 13. Top architectural chimney breast crown slab
      { shape: "box", x: 0.0, z: -0.05, w: 0.92, d: 0.75, y: 0.96, h: 0.04, color: "#c8beaf", finish: "body", edges: true, fix: "h" },
      // 14. Linear burner stainless steel tray
      { shape: "box", x: 0.0, z: -0.05, w: 0.58, d: 0.22, y: 0.27, h: 0.02, color: "metal", edges: "faint", fix: "wdh" },
      // 15. Bio-ethanol / gas burner flame ribbon bed
      { shape: "box", x: 0.0, z: -0.05, w: 0.52, d: 0.08, y: 0.29, h: 0.02, color: "#e67e22", glow: true, edges: "glow", fix: "wdh" },
      // 16. Sculptural flame core volume
      { shape: "loft", x: 0.0, z: -0.05, w: 0.48, d: 0.06, y: 0.31, h: 0.18, tx: 0.0, tz: -0.05, tw: 0.40, td: 0.02, color: "#f39c12", glow: true },
      // 17. Tempered glass protective front draft shield
      { shape: "box", x: 0.0, z: 0.22, w: 0.66, d: 0.015, y: 0.27, h: 0.14, color: "glass", edges: "faint", fix: "dh" },
      // 18. Glass mounting clamps (left)
      { shape: "box", x: -0.30, z: 0.22, w: 0.03, d: 0.03, y: 0.27, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" },
      // 19. Glass mounting clamps (right)
      { shape: "box", x: 0.30, z: 0.22, w: 0.03, d: 0.03, y: 0.27, h: 0.03, color: "#c5a059", edges: "glow", fix: "wdh" },
      // 20. Brushed champagne brass recessed shadow reveal trim
      { shape: "box", x: 0.0, z: 0.32, w: 0.68, d: 0.02, y: 0.23, h: 0.01, color: "#c5a059", edges: "glow", fix: "h" },
      // 21. Upper ventilation air reveal grille
      { shape: "box", x: 0.0, z: 0.38, w: 0.80, d: 0.02, y: 0.94, h: 0.02, color: "#18191d", edges: "faint", fix: "wdh" },
      // 22. Firebox inner chamfer reveal (left)
      { shape: "loft", x: -0.33, z: 0.22, w: 0.04, d: 0.10, y: 0.27, h: 0.50, tx: -0.35, tz: 0.22, tw: 0.02, td: 0.10, color: "#25272e" },
      // 23. Firebox inner chamfer reveal (right)
      { shape: "loft", x: 0.33, z: 0.22, w: 0.04, d: 0.10, y: 0.27, h: 0.50, tx: 0.35, tz: 0.22, tw: 0.02, td: 0.10, color: "#25272e" },
      // 24. Decorative refractory log / ceramic stone accent left
      { shape: "cyl", x: -0.16, z: -0.04, w: 0.06, d: 0.18, y: 0.28, h: 0.05, axis: "x", color: "#3a3530", rot: 15 },
      // 25. Decorative refractory log / ceramic stone accent right
      { shape: "cyl", x: 0.16, z: -0.04, w: 0.06, d: 0.18, y: 0.28, h: 0.05, axis: "x", color: "#3a3530", rot: -12 }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.05, w: 1.0, d: 0.95 },
      { shape: "rect", x: 0.0, z: 0.0, w: 0.68, d: 0.60, fill: true },
      { shape: "line", x1: -0.33, z1: 0.22, x2: 0.33, z2: 0.22 },
      { shape: "line", x1: -0.26, z1: -0.05, x2: 0.26, z2: -0.05 }
    ]
  },

  {
    num: 2,
    id: "concert_grand_piano",
    packId: "domolux.concert_grand_piano",
    name: {
      en: "Domolux Concert Grand Piano",
      de: "Domolux Konzertflügel",
      ar: "بيانو الحفلات الكبير دومولوكس"
    },
    collection: "Private Entertainment & Exclusive Residence",
    description: "Full-size architectural concert grand piano in obsidian lacquer with cast gold soundboard frame, precision pedal lyre, and matching bench.",
    size: [1.55, 2.25, 1.05],
    mount: "floor",
    surface: false,
    group: "media",
    room: ["living"],
    tags: ["piano", "music", "grand", "instrument", "luxury", "domolux"],
    parts: [
      // 1. Piano main belly / rim straight side (left spine)
      { shape: "box", x: -0.42, z: -0.15, w: 0.12, d: 0.68, y: 0.42, h: 0.32, color: "#111215", edges: true },
      // 2. Piano front body / keybed frame
      { shape: "box", x: 0.0, z: 0.22, w: 0.96, d: 0.16, y: 0.38, h: 0.36, color: "#111215", edges: true },
      // 3. Piano soundboard bed bottom base
      { shape: "box", x: -0.08, z: -0.15, w: 0.72, d: 0.64, y: 0.42, h: 0.06, color: "#111215", edges: "faint" },
      // 4. Curved rear rim (approximated with faceted lofts)
      { shape: "loft", x: 0.18, z: -0.05, w: 0.45, d: 0.50, y: 0.42, h: 0.32, tx: 0.08, tz: -0.36, tw: 0.35, td: 0.25, color: "#111215", edges: true },
      // 5. Piano tail curve (rear curve cap)
      { shape: "cyl", x: -0.15, z: -0.42, w: 0.38, d: 0.16, y: 0.42, h: 0.32, color: "#111215", edges: true },
      // 6. Spruce wooden soundboard interior
      { shape: "box", x: -0.10, z: -0.15, w: 0.65, d: 0.60, y: 0.48, h: 0.02, color: "#d2ab7a", finish: "wood", edges: "faint" },
      // 7. Cast iron gilded harp frame plate
      { shape: "box", x: -0.12, z: -0.16, w: 0.58, d: 0.54, y: 0.50, h: 0.04, color: "#c89e4b", edges: "glow" },
      // 8. Harp structural strut 1
      { shape: "box", x: -0.18, z: -0.15, w: 0.04, d: 0.55, y: 0.54, h: 0.03, color: "#c89e4b", rot: 12 },
      // 9. Harp structural strut 2
      { shape: "box", x: 0.05, z: -0.18, w: 0.04, d: 0.45, y: 0.54, h: 0.03, color: "#c89e4b", rot: -18 },
      // 10. Open Piano Lid (angled upper wing)
      { shape: "loft", x: -0.02, z: -0.15, w: 0.85, d: 0.68, y: 0.74, h: 0.24, tx: 0.12, tz: -0.15, tw: 0.75, td: 0.65, color: "#111215", edges: true },
      // 11. Brass lid prop stick
      { shape: "cyl", x: 0.22, z: -0.05, w: 0.02, d: 0.02, y: 0.52, h: 0.36, color: "#c5a059", rot: 25 },
      // 12. Keyboard white bed base
      { shape: "box", x: 0.0, z: 0.26, w: 0.84, d: 0.09, y: 0.42, h: 0.04, color: "white", edges: true, fix: "wdh" },
      // 13. Black keys row
      { shape: "box", x: 0.0, z: 0.25, w: 0.80, d: 0.05, y: 0.46, h: 0.02, color: "dark", edges: "faint", fix: "wdh" },
      // 14. Music stand desk
      { shape: "loft", x: 0.0, z: 0.12, w: 0.60, d: 0.04, y: 0.74, h: 0.16, tx: 0.0, tz: 0.08, tw: 0.60, td: 0.02, color: "#111215", edges: true },
      // 15. Music stand brass sheet holder rail
      { shape: "box", x: 0.0, z: 0.14, w: 0.62, d: 0.02, y: 0.73, h: 0.02, color: "#c5a059", fix: "wdh" },
      // 16. Front left heavy leg
      { shape: "cyl", x: -0.42, z: 0.20, w: 0.10, d: 0.10, y: 0.0, h: 0.42, color: "#111215", edges: "faint", fix: "wd" },
      // 17. Front left brass spade caster
      { shape: "cyl", x: -0.42, z: 0.20, w: 0.06, d: 0.06, y: 0.0, h: 0.05, color: "#c5a059", fix: "wdh" },
      // 18. Front right heavy leg
      { shape: "cyl", x: 0.42, z: 0.20, w: 0.10, d: 0.10, y: 0.0, h: 0.42, color: "#111215", edges: "faint", fix: "wd" },
      // 19. Front right brass spade caster
      { shape: "cyl", x: 0.42, z: 0.20, w: 0.06, d: 0.06, y: 0.0, h: 0.05, color: "#c5a059", fix: "wdh" },
      // 20. Rear tail leg
      { shape: "cyl", x: -0.15, z: -0.42, w: 0.10, d: 0.10, y: 0.0, h: 0.42, color: "#111215", edges: "faint", fix: "wd" },
      // 21. Rear brass spade caster
      { shape: "cyl", x: -0.15, z: -0.42, w: 0.06, d: 0.06, y: 0.0, h: 0.05, color: "#c5a059", fix: "wdh" },
      // 22. Pedal lyre vertical post (center)
      { shape: "box", x: 0.0, z: 0.05, w: 0.14, d: 0.04, y: 0.10, h: 0.32, color: "#111215" },
      // 23. Pedal lyre bottom brass box
      { shape: "box", x: 0.0, z: 0.05, w: 0.18, d: 0.08, y: 0.06, h: 0.04, color: "#c5a059" },
      // 24. 3 Brass pedals
      { shape: "box", x: 0.0, z: 0.09, w: 0.12, d: 0.06, y: 0.07, h: 0.02, color: "#c5a059", glow: true },
      // 25. Piano bench seat (tufted leather)
      { shape: "box", x: 0.0, z: 0.42, w: 0.55, d: 0.14, y: 0.20, h: 0.08, color: "#18191d", edges: true, fix: "wdh" },
      // 26. Piano bench wooden frame
      { shape: "box", x: 0.0, z: 0.42, w: 0.53, d: 0.12, y: 0.16, h: 0.04, color: "#111215", fix: "wdh" },
      // 27. Piano bench legs (4)
      { shape: "box", x: -0.22, z: 0.38, w: 0.04, d: 0.04, y: 0.0, h: 0.16, color: "#111215", fix: "wdh" },
      { shape: "box", x: 0.22, z: 0.38, w: 0.04, d: 0.04, y: 0.0, h: 0.16, color: "#111215", fix: "wdh" },
      { shape: "box", x: -0.22, z: 0.46, w: 0.04, d: 0.04, y: 0.0, h: 0.16, color: "#111215", fix: "wdh" },
      { shape: "box", x: 0.22, z: 0.46, w: 0.04, d: 0.04, y: 0.0, h: 0.16, color: "#111215", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.22, w: 0.96, d: 0.16 },
      { shape: "rect", x: 0.0, z: 0.26, w: 0.84, d: 0.09, fill: true },
      { shape: "line", x1: -0.48, z1: 0.22, x2: -0.48, z2: -0.40 },
      { shape: "circle", x: -0.15, z: -0.42, r: 0.15 },
      { shape: "line", x1: -0.15, z1: -0.42, x2: 0.48, z2: 0.15 },
      { shape: "rect", x: 0.0, z: 0.42, w: 0.55, d: 0.14 }
    ]
  },

  {
    num: 3,
    id: "cinema_recliner",
    packId: "domolux.cinema_recliner",
    name: {
      en: "Domolux Cinema Power Recliner",
      de: "Domolux Heimkino-Powersessel",
      ar: "كرسي السينما المنزلية الفاخر دومولوكس"
    },
    collection: "Private Entertainment & Exclusive Residence",
    description: "First-class private cinema motorized power recliner in full-grain cognac leather, dual champagne cupholders, integrated controls, and articulated legrest.",
    size: [1.05, 1.20, 1.10],
    mount: "floor",
    surface: false,
    group: "seating",
    room: ["living", "hobby"],
    tags: ["cinema", "recliner", "leather", "theater", "seating", "domolux"],
    parts: [
      // 1. Heavy circular bronze swivel pedestal base
      { shape: "cyl", x: 0.0, z: -0.05, w: 0.65, d: 0.65, y: 0.0, h: 0.05, color: "#8c6747", edges: "faint", fix: "wdh" },
      // 2. Central motorized mechanism column
      { shape: "cyl", x: 0.0, z: -0.05, w: 0.22, d: 0.22, y: 0.05, h: 0.15, color: "#1c1d22", edges: "faint", fix: "wdh" },
      // 3. Ergonomic structural subframe
      { shape: "box", x: 0.0, z: -0.02, w: 0.88, d: 0.70, y: 0.18, h: 0.10, color: "#18191d", edges: "faint" },
      // 4. Deep channeled seat cushion
      { shape: "box", x: 0.0, z: 0.02, w: 0.62, d: 0.58, y: 0.28, h: 0.18, color: "#6b4028", finish: "fabric", edges: true },
      // 5. Lumbar support lower back cushion
      { shape: "loft", x: 0.0, z: -0.22, w: 0.60, d: 0.22, y: 0.44, h: 0.24, tx: 0.0, tz: -0.26, tw: 0.58, td: 0.18, color: "#6b4028", finish: "fabric", edges: true },
      // 6. Upper backrest cushion
      { shape: "loft", x: 0.0, z: -0.28, w: 0.58, d: 0.18, y: 0.68, h: 0.22, tx: 0.0, tz: -0.32, tw: 0.54, td: 0.14, color: "#6b4028", finish: "fabric", edges: true },
      // 7. Articulated pillow headrest
      { shape: "box", x: 0.0, z: -0.34, w: 0.46, d: 0.14, y: 0.90, h: 0.10, color: "#54321f", finish: "fabric", edges: true, fix: "wdh" },
      // 8. Headrest metallic support stems
      { shape: "cyl", x: -0.15, z: -0.34, w: 0.02, d: 0.02, y: 0.86, h: 0.06, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.15, z: -0.34, w: 0.02, d: 0.02, y: 0.86, h: 0.06, color: "#c5a059", fix: "wdh" },
      // 9. Left armrest wide carcass
      { shape: "box", x: -0.38, z: 0.02, w: 0.18, d: 0.72, y: 0.22, h: 0.38, color: "#18191d", edges: "faint" },
      // 10. Left armrest leather top pad
      { shape: "box", x: -0.38, z: 0.02, w: 0.18, d: 0.72, y: 0.60, h: 0.06, color: "#6b4028", finish: "fabric", edges: true },
      // 11. Right armrest wide carcass
      { shape: "box", x: 0.38, z: 0.02, w: 0.18, d: 0.72, y: 0.22, h: 0.38, color: "#18191d", edges: "faint" },
      // 12. Right armrest leather top pad
      { shape: "box", x: 0.38, z: 0.02, w: 0.18, d: 0.72, y: 0.60, h: 0.06, color: "#6b4028", finish: "fabric", edges: true },
      // 13. Left champagne cupholder bezel
      { shape: "cyl", x: -0.38, z: 0.25, w: 0.09, d: 0.09, y: 0.65, h: 0.015, color: "#c5a059", glow: true, fix: "wdh" },
      // 14. Left cupholder recess
      { shape: "cyl", x: -0.38, z: 0.25, w: 0.07, d: 0.07, y: 0.62, h: 0.04, color: "#111215", fix: "wdh" },
      // 15. Right champagne cupholder bezel
      { shape: "cyl", x: 0.38, z: 0.25, w: 0.09, d: 0.09, y: 0.65, h: 0.015, color: "#c5a059", glow: true, fix: "wdh" },
      // 16. Right cupholder recess
      { shape: "cyl", x: 0.38, z: 0.25, w: 0.07, d: 0.07, y: 0.62, h: 0.04, color: "#111215", fix: "wdh" },
      // 17. Right inner arm power control dial panel
      { shape: "box", x: 0.28, z: 0.10, w: 0.015, d: 0.10, y: 0.52, h: 0.04, color: "#c5a059", glow: true, fix: "wdh" },
      // 18. Articulated lower calf extension cushion
      { shape: "box", x: 0.0, z: 0.35, w: 0.58, d: 0.14, y: 0.22, h: 0.16, color: "#6b4028", finish: "fabric", edges: true },
      // 19. Articulated footrest flip pad
      { shape: "box", x: 0.0, z: 0.44, w: 0.54, d: 0.10, y: 0.16, h: 0.08, color: "#54321f", finish: "fabric", edges: true, fix: "wdh" },
      // 20. Rear back shell aerodynamic shroud
      { shape: "loft", x: 0.0, z: -0.35, w: 0.64, d: 0.12, y: 0.38, h: 0.58, tx: 0.0, tz: -0.38, tw: 0.58, td: 0.08, color: "#18191d", edges: "faint" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.94, d: 0.92 },
      { shape: "circle", x: 0.0, z: -0.05, r: 0.30 },
      { shape: "circle", x: -0.38, z: 0.25, r: 0.045 },
      { shape: "circle", x: 0.38, z: 0.25, r: 0.045 },
      { shape: "line", x1: -0.28, z1: 0.30, x2: 0.28, z2: 0.30 }
    ]
  },

  {
    num: 4,
    id: "laser_projector",
    packId: "domolux.laser_projector",
    name: {
      en: "Domolux Reference Laser Projector",
      de: "Domolux Referenz-Laserprojektor",
      ar: "جهاز العرض الليزري المرجعي دومولوكس"
    },
    collection: "Private Entertainment & Exclusive Residence",
    description: "Ceiling-mounted ultra-high-definition laser optical cinema appliance with multi-element glass lens, titanium housing, and precision exhaust architecture.",
    size: [0.60, 0.55, 0.26],
    mount: "ceiling",
    wall_y: 2.45,
    surface: false,
    group: "media",
    room: ["living", "hobby"],
    tags: ["projector", "laser", "cinema", "optics", "4k", "domolux"],
    parts: [
      // 1. Ceiling mounting anchor plate
      { shape: "box", x: 0.0, z: 0.0, w: 0.40, d: 0.40, y: 0.94, h: 0.06, color: "#18191d", edges: "faint", fix: "wdh" },
      // 2. Heavy-duty ceiling drop column
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.10, d: 0.10, y: 0.78, h: 0.16, color: "metal", edges: "faint", fix: "wdh" },
      // 3. Ball-mount gimbal adjustment collar
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.14, d: 0.14, y: 0.72, h: 0.06, color: "#c5a059", glow: true, fix: "wdh" },
      // 4. Main chassis body (titanium gray aluminum)
      { shape: "box", x: 0.0, z: 0.0, w: 0.92, d: 0.88, y: 0.12, h: 0.60, color: "#242830", edges: true },
      // 5. Front sculpted fascia bezel
      { shape: "box", x: 0.0, z: 0.44, w: 0.88, d: 0.05, y: 0.14, h: 0.56, color: "#1a1c22", edges: "glow" },
      // 6. Recessed optical lens chamber cavity
      { shape: "cyl", x: 0.0, z: 0.42, w: 0.36, d: 0.36, y: 0.22, h: 0.40, axis: "z", color: "#111215", fix: "wdh" },
      // 7. Champagne metallic outer lens barrel
      { shape: "cyl", x: 0.0, z: 0.44, w: 0.32, d: 0.32, y: 0.24, h: 0.36, axis: "z", color: "#c5a059", glow: true, fix: "wdh" },
      // 8. Iris / focus knurled adjustment ring
      { shape: "cyl", x: 0.0, z: 0.45, w: 0.28, d: 0.28, y: 0.26, h: 0.32, axis: "z", color: "#18191d", fix: "wdh" },
      // 9. Multi-coated optical glass front element
      { shape: "cyl", x: 0.0, z: 0.46, w: 0.24, d: 0.24, y: 0.28, h: 0.28, axis: "z", color: "glass", glow: true, fix: "wdh" },
      // 10. Left side airflow intake cooling louvers
      { shape: "box", x: -0.45, z: 0.0, w: 0.02, d: 0.65, y: 0.20, h: 0.40, color: "#111215", edges: "faint" },
      // 11. Right side thermal exhaust cooling louvers
      { shape: "box", x: 0.45, z: 0.0, w: 0.02, d: 0.65, y: 0.20, h: 0.40, color: "#111215", edges: "faint" },
      // 12. Top discreet touch control strip
      { shape: "box", x: 0.0, z: -0.15, w: 0.30, d: 0.06, y: 0.72, h: 0.015, color: "#0e1014", edges: "glow", fix: "wdh" },
      // 13. Rear connector bay recess (HDMI / Fiber / Power)
      { shape: "box", x: 0.0, z: -0.43, w: 0.60, d: 0.04, y: 0.20, h: 0.25, color: "#111215", fix: "wdh" },
      // 14. Status indicator micro-LED laser line
      { shape: "box", x: 0.0, z: 0.46, w: 0.50, d: 0.01, y: 0.66, h: 0.01, color: "accent", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.92, d: 0.88 },
      { shape: "circle", x: 0.0, z: 0.44, r: 0.16 },
      { shape: "line", x1: -0.45, z1: -0.30, x2: -0.45, z2: 0.30 },
      { shape: "line", x1: 0.45, z1: -0.30, x2: 0.45, z2: 0.30 }
    ]
  },

  {
    num: 5,
    id: "motorized_projection_screen",
    packId: "domolux.motorized_projection_screen",
    name: {
      en: "Domolux Motorized Cinema Screen",
      de: "Domolux Motorisierte Projektionsleinwand",
      ar: "شاشة العرض السينمائية الآلية دومولوكس"
    },
    collection: "Private Entertainment & Exclusive Residence",
    description: "Architectural ceiling-recessed motorized projection screen with acoustic 16:9 tensioned canvas and weighted bronze drop bar.",
    size: [3.20, 0.24, 2.10],
    mount: "ceiling",
    wall_y: 2.65,
    surface: false,
    group: "media",
    room: ["living", "hobby"],
    tags: ["screen", "projection", "cinema", "motorized", "display", "domolux"],
    parts: [
      // 1. Recessed ceiling cassette housing (architectural white)
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 1.0, y: 0.92, h: 0.08, color: "white", edges: true, fix: "h" },
      // 2. Cassette bottom motorized reveal trapdoor slit
      { shape: "box", x: 0.0, z: 0.0, w: 0.95, d: 0.40, y: 0.91, h: 0.01, color: "#18191d", fix: "h" },
      // 3. Cassette left end cap (satin champagne)
      { shape: "box", x: -0.49, z: 0.0, w: 0.02, d: 0.96, y: 0.92, h: 0.08, color: "#c5a059", edges: "glow", fix: "wdh" },
      // 4. Cassette right end cap (satin champagne)
      { shape: "box", x: 0.49, z: 0.0, w: 0.02, d: 0.96, y: 0.92, h: 0.08, color: "#c5a059", edges: "glow", fix: "wdh" },
      // 5. Upper black drop leader border
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.04, y: 0.78, h: 0.13, color: "#0e1014", edges: "faint" },
      // 6. Acoustically transparent matte white screen canvas (active viewing area)
      { shape: "box", x: 0.0, z: 0.0, w: 0.86, d: 0.03, y: 0.08, h: 0.70, color: "#f8f9fa", edges: "glow" },
      // 7. Left black velvet masking border
      { shape: "box", x: -0.44, z: 0.0, w: 0.03, d: 0.035, y: 0.08, h: 0.70, color: "#0e1014", edges: "faint" },
      // 8. Right black velvet masking border
      { shape: "box", x: 0.44, z: 0.0, w: 0.03, d: 0.035, y: 0.08, h: 0.70, color: "#0e1014", edges: "faint" },
      // 9. Lower black velvet masking border
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.035, y: 0.05, h: 0.03, color: "#0e1014", edges: "faint" },
      // 10. Heavy extruded aluminum bottom tensioning drop bar
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.93, d: 0.16, y: 0.0, h: 0.05, axis: "x", color: "metal", edges: true, fix: "h" },
      // 11. Drop bar left decorative champagne collar
      { shape: "cyl", x: -0.46, z: 0.0, w: 0.02, d: 0.18, y: 0.0, h: 0.05, axis: "x", color: "#c5a059", glow: true, fix: "wdh" },
      // 12. Drop bar right decorative champagne collar
      { shape: "cyl", x: 0.46, z: 0.0, w: 0.02, d: 0.18, y: 0.0, h: 0.05, axis: "x", color: "#c5a059", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 1.0 },
      { shape: "line", x1: -0.45, z1: 0.0, x2: 0.45, z2: 0.0 },
      { shape: "circle", x: -0.48, z: 0.0, r: 0.08 },
      { shape: "circle", x: 0.48, z: 0.0, r: 0.08 }
    ]
  },

  {
    num: 6,
    id: "floorstanding_hifi_speaker",
    packId: "domolux.floorstanding_hifi_speaker",
    name: {
      en: "Domolux Reference Hi-Fi Tower Speaker",
      de: "Domolux Referenz-Standlautsprecher",
      ar: "مكبر الصوت البرجي عالي الدقة دومولوكس"
    },
    collection: "Private Entertainment & Exclusive Residence",
    description: "High-end acoustic floorstanding loudspeaker tower in smoked oak veneer with brushed bronze baffle, carbon woofers, and acoustic decoupling plinth.",
    size: [0.38, 0.52, 1.42],
    mount: "floor",
    surface: false,
    group: "media",
    room: ["living", "office"],
    tags: ["speaker", "hifi", "audio", "tower", "acoustic", "domolux"],
    parts: [
      // 1. Heavy milled bronze isolation plinth
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.94, y: 0.0, h: 0.035, color: "#8c6747", edges: "glow", fix: "h" },
      // 2. 4 Precision conical isolation spikes
      { shape: "cyl", x: -0.38, z: 0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.02, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.38, z: 0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.02, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: -0.38, z: -0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.02, color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.38, z: -0.38, w: 0.08, d: 0.08, y: 0.0, h: 0.02, color: "#c5a059", fix: "wdh" },
      // 3. Acoustic decoupling gap spacer
      { shape: "box", x: 0.0, z: 0.0, w: 0.80, d: 0.80, y: 0.035, h: 0.02, color: "#111215", fix: "h" },
      // 4. Main acoustic cabinet body (smoked oak veneer)
      { shape: "loft", x: 0.0, z: -0.04, w: 0.86, d: 0.88, y: 0.055, h: 0.94, tx: 0.0, tz: -0.06, tw: 0.78, td: 0.80, color: "#2d241e", finish: "wood", edges: true },
      // 5. Front sculpted acoustic baffle panel (brushed bronze)
      { shape: "box", x: 0.0, z: 0.40, w: 0.82, d: 0.08, y: 0.07, h: 0.91, color: "#8c6747", edges: "glow" },
      // 6. High-frequency beryllium dome tweeter in waveguide
      { shape: "cyl", x: 0.0, z: 0.43, w: 0.28, d: 0.28, y: 0.85, h: 0.08, axis: "z", color: "#1a1a1f", fix: "wdh" },
      // 7. Tweeter center dome (gold titanium)
      { shape: "cyl", x: 0.0, z: 0.45, w: 0.10, d: 0.10, y: 0.865, h: 0.04, axis: "z", color: "#c5a059", glow: true, fix: "wdh" },
      // 8. Midrange driver outer machined ring
      { shape: "cyl", x: 0.0, z: 0.43, w: 0.46, d: 0.46, y: 0.64, h: 0.15, axis: "z", color: "#c5a059", fix: "wdh" },
      // 9. Midrange woven composite cone
      { shape: "cyl", x: 0.0, z: 0.44, w: 0.38, d: 0.38, y: 0.65, h: 0.12, axis: "z", color: "#22242a", fix: "wdh" },
      // 10. Midrange solid aluminum phase plug
      { shape: "cyl", x: 0.0, z: 0.46, w: 0.08, d: 0.08, y: 0.68, h: 0.06, axis: "z", color: "metal", fix: "wdh" },
      // 11. Upper bass woofer outer machined ring
      { shape: "cyl", x: 0.0, z: 0.43, w: 0.58, d: 0.58, y: 0.38, h: 0.18, axis: "z", color: "#c5a059", fix: "wdh" },
      // 12. Upper bass woofer carbon-sandwich cone
      { shape: "cyl", x: 0.0, z: 0.44, w: 0.50, d: 0.50, y: 0.39, h: 0.15, axis: "z", color: "#1a1c22", fix: "wdh" },
      // 13. Lower bass woofer outer machined ring
      { shape: "cyl", x: 0.0, z: 0.43, w: 0.58, d: 0.58, y: 0.14, h: 0.18, axis: "z", color: "#c5a059", fix: "wdh" },
      // 14. Lower bass woofer carbon-sandwich cone
      { shape: "cyl", x: 0.0, z: 0.44, w: 0.50, d: 0.50, y: 0.15, h: 0.15, axis: "z", color: "#1a1c22", fix: "wdh" },
      // 15. Rear flared bass reflex port
      { shape: "cyl", x: 0.0, z: -0.44, w: 0.28, d: 0.28, y: 0.25, h: 0.08, axis: "z", color: "#111215", fix: "wdh" },
      // 16. Rear bi-wiring gold terminal binding post plate
      { shape: "box", x: 0.0, z: -0.45, w: 0.36, d: 0.04, y: 0.08, h: 0.12, color: "#111215", fix: "wdh" },
      // 17. 4 Gold-plated terminal binding posts
      { shape: "cyl", x: -0.08, z: -0.47, w: 0.04, d: 0.04, y: 0.11, h: 0.03, axis: "z", color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.08, z: -0.47, w: 0.04, d: 0.04, y: 0.11, h: 0.03, axis: "z", color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: -0.08, z: -0.47, w: 0.04, d: 0.04, y: 0.16, h: 0.03, axis: "z", color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.08, z: -0.47, w: 0.04, d: 0.04, y: 0.16, h: 0.03, axis: "z", color: "#c5a059", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.94, d: 0.94 },
      { shape: "circle", x: 0.0, z: 0.38, r: 0.24 },
      { shape: "circle", x: 0.0, z: 0.38, r: 0.15 },
      { shape: "circle", x: 0.0, z: 0.38, r: 0.06 },
      { shape: "circle", x: 0.0, z: -0.40, r: 0.10 }
    ]
  }
];
