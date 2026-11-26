// Collection E: Products 23 to 27

export const DOMOLUX_COLLECTION_PART5 = [
  // =========================================================================
  // COLLECTION E — PRIVATE ESTATE AND OUTDOOR LIVING (23-27)
  // =========================================================================
  {
    num: 23,
    id: "outdoor_sun_lounger",
    packId: "domolux.outdoor_sun_lounger",
    name: {
      en: "Domolux Grand Resort Sun Lounger",
      de: "Domolux Luxus-Resort Sonnenliege",
      ar: "سرير الاستجمام الشمسي الفاخر دومولوكس"
    },
    collection: "Private Estate & Outdoor Living",
    description: "Architectural pool sunbed crafted from solid plantation teak with multi-position reclining backrest, Sunbrella sand cushion, and pull-out cocktail tray.",
    size: [0.88, 2.10, 0.52],
    mount: "floor",
    surface: false,
    group: "outdoor",
    room: ["garden"],
    tags: ["lounger", "sunbed", "pool", "teak", "outdoor", "domolux"],
    parts: [
      // 1. Solid plantation teak main outer chassis rails (left)
      { shape: "box", x: -0.44, z: 0.0, w: 0.08, d: 0.96, y: 0.12, h: 0.16, color: "#8a5829", finish: "wood", edges: true, fix: "wd" },
      // 2. Solid plantation teak main outer chassis rails (right)
      { shape: "box", x: 0.44, z: 0.0, w: 0.08, d: 0.96, y: 0.12, h: 0.16, color: "#8a5829", finish: "wood", edges: true, fix: "wd" },
      // 3. Front frame cross-tie
      { shape: "box", x: 0.0, z: 0.46, w: 0.96, d: 0.08, y: 0.12, h: 0.16, color: "#8a5829", finish: "wood", edges: true, fix: "d" },
      // 4. Rear frame cross-tie
      { shape: "box", x: 0.0, z: -0.46, w: 0.96, d: 0.08, y: 0.12, h: 0.16, color: "#8a5829", finish: "wood", edges: true, fix: "d" },
      // 5. Front square legs (2)
      { shape: "box", x: -0.42, z: 0.42, w: 0.08, d: 0.08, y: 0.0, h: 0.12, color: "#6e441d", fix: "wdh" },
      { shape: "box", x: 0.42, z: 0.42, w: 0.08, d: 0.08, y: 0.0, h: 0.12, color: "#6e441d", fix: "wdh" },
      // 6. Rear rubber-tread wheels (2)
      { shape: "cyl", x: -0.44, z: -0.40, w: 0.06, d: 0.22, y: 0.0, h: 0.22, axis: "x", color: "#1c1d22", fix: "wdh" },
      { shape: "cyl", x: 0.44, z: -0.40, w: 0.06, d: 0.22, y: 0.0, h: 0.22, axis: "x", color: "#1c1d22", fix: "wdh" },
      // 7. Plantation teak slatted base deck (fixed lower body)
      { shape: "box", x: 0.0, z: 0.15, w: 0.84, d: 0.58, y: 0.24, h: 0.04, color: "#9c6838", finish: "wood", edges: "faint" },
      // 8. Reclining backrest articulated teak frame (angled)
      { shape: "loft", x: 0.0, z: -0.25, w: 0.84, d: 0.38, y: 0.26, h: 0.22, tx: 0.0, tz: -0.32, tw: 0.84, td: 0.34, color: "#9c6838", finish: "wood", edges: true },
      // 9. Sunbrella quick-dry lower mattress cushion
      { shape: "box", x: 0.0, z: 0.15, w: 0.82, d: 0.58, y: 0.28, h: 0.18, color: "#ded8ce", finish: "fabric", edges: true },
      // 10. Sunbrella quick-dry upper inclined back cushion
      { shape: "loft", x: 0.0, z: -0.25, w: 0.82, d: 0.38, y: 0.30, h: 0.38, tx: 0.0, tz: -0.32, tw: 0.82, td: 0.34, color: "#ded8ce", finish: "fabric", edges: true },
      // 11. Cylindrical neck roll bolster pillow
      { shape: "cyl", x: 0.0, z: -0.36, w: 0.76, d: 0.14, y: 0.72, h: 0.14, axis: "x", color: "#8c6747", finish: "fabric", edges: true, fix: "h" },
      // 12. Sliding pull-out teak cocktail drink tray (right side)
      { shape: "box", x: 0.46, z: 0.0, w: 0.22, d: 0.28, y: 0.16, h: 0.03, color: "#9c6838", finish: "wood", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.96 },
      { shape: "rect", x: 0.0, z: 0.15, w: 0.82, d: 0.58, fill: true },
      { shape: "line", x1: -0.41, z1: -0.14, x2: 0.41, z2: -0.14 },
      { shape: "circle", x: 0.0, z: -0.36, r: 0.08 }
    ]
  },

  {
    num: 24,
    id: "outdoor_fire_pit",
    packId: "domolux.outdoor_fire_pit",
    name: {
      en: "Domolux Sculptural Outdoor Fire Pit",
      de: "Domolux Skulpturale Outdoor-Feuerstelle",
      ar: "موقد النار الخارجي المعماري دومولوكس"
    },
    collection: "Private Estate & Outdoor Living",
    description: "Low-slung architectural travertine square fire table with recessed stainless steel burner pan, black lava rocks, and circular glass wind shield.",
    size: [1.25, 1.25, 0.42],
    mount: "floor",
    surface: true,
    group: "outdoor",
    room: ["garden"],
    tags: ["firepit", "terrace", "outdoor", "travertine", "flame", "domolux"],
    parts: [
      // 1. Recessed dark sub-base plinth with shadow reveal
      { shape: "box", x: 0.0, z: 0.0, w: 0.90, d: 0.90, y: 0.0, h: 0.08, color: "#18191d", edges: "faint", fix: "h" },
      // 2. Monolithic honed travertine square table body
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.08, h: 0.58, color: "#d8cfc4", finish: "body", edges: true, fix: "h" },
      // 3. Recessed circular burner well cavity
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.62, d: 0.62, y: 0.54, h: 0.14, color: "#18191d", fix: "wdh" },
      // 4. Heavy stainless steel burner pan
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.58, d: 0.58, y: 0.55, h: 0.04, color: "metal", fix: "wdh" },
      // 5. Black basalt lava rock and fire glass media bed
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.54, d: 0.54, y: 0.58, h: 0.06, color: "#252528", edges: "faint", fix: "wdh" },
      // 6. Stainless circular double-ring burner assembly
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.36, d: 0.36, y: 0.64, h: 0.02, color: "metal", fix: "wdh" },
      // 7. Ambient flame core glow
      { shape: "loft", x: 0.0, z: 0.0, w: 0.28, d: 0.28, y: 0.66, h: 0.24, tx: 0.0, tz: 0.0, tw: 0.12, td: 0.12, color: "#e67e22", glow: true, fix: "wdh" },
      // 8. Flame center high-intensity yellow tip
      { shape: "loft", x: 0.0, z: 0.0, w: 0.16, d: 0.16, y: 0.74, h: 0.18, tx: 0.0, tz: 0.0, tw: 0.04, td: 0.04, color: "#f39c12", glow: true, fix: "wdh" },
      // 9. Circular tempered glass wind screen
      { shape: "cyl", x: 0.0, z: 0.0, w: 0.62, d: 0.62, y: 0.66, h: 0.32, color: "glass", edges: "glow", fix: "wdh" },
      // 10. Stainless wind screen mounting brackets (4)
      { shape: "box", x: -0.30, z: 0.0, w: 0.03, d: 0.03, y: 0.66, h: 0.04, color: "metal", fix: "wdh" },
      { shape: "box", x: 0.30, z: 0.0, w: 0.03, d: 0.03, y: 0.66, h: 0.04, color: "metal", fix: "wdh" },
      { shape: "box", x: 0.0, z: -0.30, w: 0.03, d: 0.03, y: 0.66, h: 0.04, color: "metal", fix: "wdh" },
      { shape: "box", x: 0.0, z: 0.30, w: 0.03, d: 0.03, y: 0.66, h: 0.04, color: "metal", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.98 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.31 },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.27, fill: true },
      { shape: "circle", x: 0.0, z: 0.0, r: 0.18 }
    ]
  },

  {
    num: 25,
    id: "outdoor_grill_station",
    packId: "domolux.outdoor_grill_station",
    name: {
      en: "Domolux Outdoor Gourmet Grill Station",
      de: "Domolux Outdoor-Gourmet-Grillstation",
      ar: "محطة الشواء الخارجية الفاخرة دومولوكس"
    },
    collection: "Private Estate & Outdoor Living",
    description: "Freestanding outdoor gourmet kitchen island with honed black granite countertop, 42-inch 6-burner stainless steel grill, side sear station, and marine storage.",
    size: [2.40, 0.85, 1.25],
    mount: "floor",
    surface: true,
    group: "outdoor",
    room: ["garden"],
    tags: ["grill", "bbq", "kitchen", "outdoor", "granite", "domolux"],
    parts: [
      // 1. Recessed dark stainless architectural toe-kick base
      { shape: "box", x: 0.0, z: 0.0, w: 0.95, d: 0.88, y: 0.0, h: 0.08, color: "#18191d", edges: "faint", fix: "h" },
      // 2. Weather-resistant marine grade cabinet carcass
      { shape: "box", x: 0.0, z: 0.0, w: 0.96, d: 0.92, y: 0.08, h: 0.58, color: "#2d3038", edges: true },
      // 3. Absolute black honed granite monolithic countertop slab
      { shape: "box", x: 0.0, z: 0.0, w: 1.0, d: 0.96, y: 0.66, h: 0.06, color: "#1c1e22", finish: "body", edges: true, fix: "h" },
      // 4. Commercial 42-inch 6-burner stainless steel built-in grill unit
      { shape: "box", x: -0.15, z: 0.02, w: 0.52, d: 0.74, y: 0.72, h: 0.12, color: "metal", edges: "glow" },
      // 5. Stainless counterbalanced roll-top roasting hood
      { shape: "cyl", x: -0.15, z: 0.02, w: 0.52, d: 0.60, y: 0.78, h: 0.18, axis: "x", color: "metal", edges: "glow" },
      // 6. Grill hood heavy tubular handle
      { shape: "cyl", x: -0.15, z: 0.32, w: 0.44, d: 0.04, y: 0.82, h: 0.04, axis: "x", color: "#c5a059", glow: true, fix: "h" },
      // 7. Hood temperature analog dial gauge
      { shape: "cyl", x: -0.15, z: 0.22, w: 0.07, d: 0.07, y: 0.92, h: 0.03, axis: "z", color: "#111215", fix: "wdh" },
      // 8. 6 Heavy-duty rotary burner control knobs
      { shape: "cyl", x: -0.35, z: 0.42, w: 0.04, d: 0.04, y: 0.75, h: 0.025, axis: "z", color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: -0.27, z: 0.42, w: 0.04, d: 0.04, y: 0.75, h: 0.025, axis: "z", color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: -0.19, z: 0.42, w: 0.04, d: 0.04, y: 0.75, h: 0.025, axis: "z", color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: -0.11, z: 0.42, w: 0.04, d: 0.04, y: 0.75, h: 0.025, axis: "z", color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: -0.03, z: 0.42, w: 0.04, d: 0.04, y: 0.75, h: 0.025, axis: "z", color: "#c5a059", fix: "wdh" },
      { shape: "cyl", x: 0.05, z: 0.42, w: 0.04, d: 0.04, y: 0.75, h: 0.025, axis: "z", color: "#c5a059", fix: "wdh" },
      // 9. Infrared high-heat side sear burner station (right side)
      { shape: "box", x: 0.32, z: 0.04, w: 0.25, d: 0.52, y: 0.72, h: 0.04, color: "metal", edges: "faint" },
      // 10. Sear burner cast-iron cooking grid
      { shape: "box", x: 0.32, z: 0.04, w: 0.22, d: 0.48, y: 0.75, h: 0.02, color: "#111215", fix: "wdh" },
      // 11. Sear burner control knob
      { shape: "cyl", x: 0.32, z: 0.42, w: 0.04, d: 0.04, y: 0.75, h: 0.025, axis: "z", color: "#c5a059", fix: "wdh" },
      // 12. Marine-grade double access doors under grill
      { shape: "box", x: -0.26, z: 0.47, w: 0.24, d: 0.02, y: 0.12, h: 0.52, color: "#363a45", edges: true },
      { shape: "box", x: -0.02, z: 0.47, w: 0.24, d: 0.02, y: 0.12, h: 0.52, color: "#363a45", edges: true },
      // 13. Three soft-close drawers under sear station
      { shape: "box", x: 0.32, z: 0.47, w: 0.26, d: 0.02, y: 0.48, h: 0.16, color: "#363a45", edges: true },
      { shape: "box", x: 0.32, z: 0.47, w: 0.26, d: 0.02, y: 0.30, h: 0.16, color: "#363a45", edges: true },
      { shape: "box", x: 0.32, z: 0.47, w: 0.26, d: 0.02, y: 0.12, h: 0.16, color: "#363a45", edges: true },
      // 14. Door and drawer tubular handles
      { shape: "cyl", x: -0.16, z: 0.485, w: 0.015, d: 0.015, y: 0.32, h: 0.20, color: "metal", fix: "wdh" },
      { shape: "cyl", x: -0.12, z: 0.485, w: 0.015, d: 0.015, y: 0.32, h: 0.20, color: "metal", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.96 },
      { shape: "rect", x: -0.15, z: 0.02, w: 0.52, d: 0.74, fill: true },
      { shape: "rect", x: 0.32, z: 0.04, w: 0.25, d: 0.52 },
      { shape: "line", x1: -0.37, z1: 0.32, x2: 0.07, z2: 0.32 }
    ]
  },

  {
    num: 26,
    id: "outdoor_shower_column",
    packId: "domolux.outdoor_shower_column",
    name: {
      en: "Domolux Architectural Outdoor Shower",
      de: "Domolux Architektonische Außendusche",
      ar: "دش الاستحمام الخارجي المعماري دومولوكس"
    },
    collection: "Private Estate & Outdoor Living",
    description: "Freestanding marine-grade 316 brushed stainless steel outdoor shower column with teak duckboard drainage tray, oversized rain head, and foot rinse.",
    size: [1.05, 1.05, 2.30],
    mount: "floor",
    surface: false,
    group: "outdoor",
    room: ["garden"],
    tags: ["shower", "outdoor", "pool", "stainless", "teak", "domolux"],
    parts: [
      // 1. Natural teak slatted duckboard drainage tray
      { shape: "box", x: 0.0, z: 0.0, w: 0.94, d: 0.94, y: 0.0, h: 0.04, color: "#8a5829", finish: "wood", edges: true, fix: "h" },
      // 2. Drainage tray stainless steel perimeter coping frame
      { shape: "box", x: 0.0, z: 0.0, w: 0.98, d: 0.98, y: 0.0, h: 0.045, color: "metal", edges: "glow", fix: "h" },
      // 3. Marine-grade 316 brushed stainless vertical pillar column
      { shape: "box", x: 0.0, z: -0.36, w: 0.18, d: 0.14, y: 0.04, h: 0.92, color: "metal", edges: true, fix: "wd" },
      // 4. Heavy floor mounting flange collar
      { shape: "box", x: 0.0, z: -0.36, w: 0.26, d: 0.22, y: 0.04, h: 0.02, color: "metal", fix: "wdh" },
      // 5. Overhead cantilevered forward shower arm
      { shape: "box", x: 0.0, z: -0.12, w: 0.08, d: 0.44, y: 0.94, h: 0.05, color: "metal", fix: "w" },
      // 6. Oversized 40cm square rainfall showerhead
      { shape: "box", x: 0.0, z: 0.08, w: 0.38, d: 0.38, y: 0.92, h: 0.02, color: "metal", edges: "glow", fix: "wdh" },
      // 7. Showerhead silicone water spray nozzles plane
      { shape: "box", x: 0.0, z: 0.08, w: 0.34, d: 0.34, y: 0.915, h: 0.005, color: "#111215", fix: "wdh" },
      // 8. Thermostatic mixer rotary temperature dial
      { shape: "cyl", x: 0.0, z: -0.28, w: 0.07, d: 0.07, y: 0.48, h: 0.04, axis: "z", color: "#c5a059", glow: true, fix: "wdh" },
      // 9. Flow / diverter control lever
      { shape: "cyl", x: 0.0, z: -0.28, w: 0.06, d: 0.06, y: 0.54, h: 0.04, axis: "z", color: "#c5a059", glow: true, fix: "wdh" },
      // 10. Handheld baton rinse wand and dock cradle
      { shape: "cyl", x: 0.14, z: -0.34, w: 0.03, d: 0.03, y: 0.44, h: 0.18, color: "metal", fix: "wdh" },
      // 11. Stainless flexible rinse hose loop
      { shape: "loft", x: 0.12, z: -0.32, w: 0.04, d: 0.04, y: 0.32, h: 0.14, tx: 0.04, tz: -0.32, tw: 0.03, td: 0.03, color: "metal", fix: "wdh" },
      // 12. Integrated teak slatted towel shelf (rear)
      { shape: "box", x: 0.0, z: -0.44, w: 0.32, d: 0.10, y: 0.65, h: 0.02, color: "#8a5829", finish: "wood", fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.98, d: 0.98 },
      { shape: "rect", x: 0.0, z: -0.36, w: 0.18, d: 0.14, fill: true },
      { shape: "rect", x: 0.0, z: 0.08, w: 0.38, d: 0.38 },
      { shape: "line", x1: 0.0, z1: -0.36, x2: 0.0, z2: 0.08 }
    ]
  },

  {
    num: 27,
    id: "robotic_lawn_mower_dock",
    packId: "domolux.robotic_lawn_mower_dock",
    name: {
      en: "Domolux Robotic Estate Mower Dock",
      de: "Domolux Mähroboter-Dockingstation",
      ar: "محطة روبوت قص العشب دومولوكس"
    },
    collection: "Private Estate & Outdoor Living",
    description: "Architectural outdoor autonomous mower shelter with cantilevered zinc sloped roof, timber ceiling, guide ramp, and rugged estate robotic mower.",
    size: [0.95, 1.15, 0.58],
    mount: "floor",
    surface: false,
    group: "outdoor",
    room: ["garden"],
    tags: ["mower", "robot", "garden", "dock", "automation", "domolux"],
    parts: [
      // 1. Concrete textured base drive-in ramp
      { shape: "loft", x: 0.0, z: 0.0, w: 0.92, d: 0.94, y: 0.0, h: 0.06, tx: 0.0, tz: -0.05, tw: 0.92, td: 0.84, color: "#6e727a", edges: "faint", fix: "h" },
      // 2. Left wheel guide curb
      { shape: "box", x: -0.38, z: 0.0, w: 0.06, d: 0.88, y: 0.04, h: 0.04, color: "#1c1e22", fix: "wdh" },
      // 3. Right wheel guide curb
      { shape: "box", x: 0.38, z: 0.0, w: 0.06, d: 0.88, y: 0.04, h: 0.04, color: "#1c1e22", fix: "wdh" },
      // 4. Rear charging contact tower terminal
      { shape: "box", x: 0.0, z: -0.40, w: 0.55, d: 0.16, y: 0.06, h: 0.45, color: "#252830", edges: true, fix: "wd" },
      // 5. Dual spring-loaded copper charging contact pins
      { shape: "cyl", x: -0.14, z: -0.31, w: 0.04, d: 0.04, y: 0.18, h: 0.08, axis: "z", color: "#c5a059", glow: true, fix: "wdh" },
      { shape: "cyl", x: 0.14, z: -0.31, w: 0.04, d: 0.04, y: 0.18, h: 0.08, axis: "z", color: "#c5a059", glow: true, fix: "wdh" },
      // 6. Dock shelter cantilevered dark zinc sloped canopy roof
      { shape: "loft", x: 0.0, z: -0.06, w: 0.96, d: 0.86, y: 0.48, h: 0.48, tx: 0.0, tz: 0.02, tw: 0.96, td: 0.86, color: "#23262d", edges: "glow", fix: "w" },
      // 7. Roof natural larch timber underside lining
      { shape: "box", x: 0.0, z: -0.06, w: 0.92, d: 0.82, y: 0.48, h: 0.02, color: "#9c6838", finish: "wood" },
      // 8. Docked autonomous robotic estate mower chassis
      { shape: "loft", x: 0.0, z: -0.08, w: 0.58, d: 0.62, y: 0.06, h: 0.22, tx: 0.0, tz: -0.12, tw: 0.48, td: 0.52, color: "#181a20", edges: true, fix: "wdh" },
      // 9. Mower rugged rear all-terrain drive wheels
      { shape: "cyl", x: -0.30, z: -0.22, w: 0.08, d: 0.18, y: 0.04, h: 0.18, axis: "x", color: "#111215", fix: "wdh" },
      { shape: "cyl", x: 0.30, z: -0.22, w: 0.08, d: 0.18, y: 0.04, h: 0.18, axis: "x", color: "#111215", fix: "wdh" },
      // 10. Mower front omni-directional caster wheels
      { shape: "cyl", x: -0.18, z: 0.15, w: 0.05, d: 0.10, y: 0.03, h: 0.10, axis: "x", color: "#111215", fix: "wdh" },
      { shape: "cyl", x: 0.18, z: 0.15, w: 0.05, d: 0.10, y: 0.03, h: 0.10, axis: "x", color: "#111215", fix: "wdh" },
      // 11. Mower top emergency stop button & display lid
      { shape: "box", x: 0.0, z: -0.15, w: 0.22, d: 0.14, y: 0.27, h: 0.025, color: "#e74c3c", glow: true, fix: "wdh" },
      // 12. Mower front RTK-GPS navigation sensor dome
      { shape: "cyl", x: 0.0, z: 0.05, w: 0.12, d: 0.12, y: 0.26, h: 0.04, color: "#c5a059", glow: true, fix: "wdh" }
    ],
    symbol: [
      { shape: "rect", x: 0.0, z: 0.0, w: 0.96, d: 0.94 },
      { shape: "rect", x: 0.0, z: -0.40, w: 0.55, d: 0.16 },
      { shape: "rect", x: 0.0, z: -0.08, w: 0.58, d: 0.62, fill: true },
      { shape: "circle", x: 0.0, z: 0.05, r: 0.06 }
    ]
  }
];
