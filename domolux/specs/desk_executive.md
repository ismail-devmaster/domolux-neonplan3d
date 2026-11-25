# Domolux Premium Modern Executive Desk Specification

## 1. Overview
- **Item ID:** `desk_executive`
- **Pack ID:** `domolux.executive_desk`
- **Collection:** Domolux Luxury Office Collection
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/desk_executive.fp3dpack` (6,196 bytes)
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 1.80 m (180 cm)
- **Depth ($D$):** 0.85 m (85 cm)
- **Height ($H$):** 0.76 m (76 cm)
- **Desktop Slab Thickness:** 0.04 m (4 cm)
- **Floating Gap (Subframe):** 0.015 m (1.5 cm)
- **Drawer Pedestal Carcass:** 0.44 m wide × 0.73 m deep × 0.655 m high (mounted on right side `+X`)
- **Modesty Panel:** 1.20 m wide × 0.02 m thick × 0.38 m high (visitor side `-Z`)
- **Modesty Support Rail:** 1.24 m wide × 0.02 m thick × 0.04 m high (continuous horizontal metal support rail)
- **Left O-Frame:** 0.05 m × 0.05 m (5 × 5 cm) square steel profile throughout (front upright, rear upright, bottom runner, top mounting beam, 0.73 m deep)
- **Cable Management Grommet:** 0.16 m × 0.06 m (16 × 6 cm) brushed metal bezel with 0.13 m × 0.03 m dark recessed insert, positioned at rear-left corner (10 cm from left edge, 7.5 cm from rear edge)

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across desk width (Left to Right, $0$ is center).
- $Z \in [-0.5, +0.5]$ along desk depth ($-Z$ is visitor/modesty side, $+Z$ is user/drawer side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum desk height ($Y=1$).
- Extents ($w, d, h$) are spans normalized by $W, D, H$.

---

## 4. Component Breakdown & Geometry Table (21 Parts)

| # | Part Identifier | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `desktop_main` | `box` | `(0.0, 0.0)` | `(1.0, 1.0)` | `(0.9474, 0.0526)` | `"wood"` | `true` | `h` | Main walnut desktop slab (180 × 85 × 4 cm) |
| 2 | `sub_frame_shadow` | `box` | `(0.0, 0.0)` | `(0.9778, 0.9529)` | `(0.9276, 0.0198)` | `"dark"` | `"faint"` | `h` | Recessed shadow gap subframe creating floating look (176 × 81 × 1.5 cm) |
| 3 | `cable_grommet_bezel` | `box` | `(-0.4, -0.3765)` | `(0.0889, 0.0706)` | `(0.9947, 0.0053)` | `"metal"` | `"glow"` | `wdh` | Brushed metal cable grommet bezel (16 × 6 × 0.4 cm) |
| 4 | `cable_grommet_insert` | `box` | `(-0.4, -0.3765)` | `(0.0722, 0.0353)` | `(0.9961, 0.0039)` | `"dark"` | `false` | `wdh` | Recessed dark cable opening interior (13 × 3 × 0.3 cm) |
| 5 | `pedestal_body` | `box` | `(0.3611, 0.0329)` | `(0.2444, 0.8588)` | `(0.0658, 0.8618)` | `"dark"` | `"faint"` | `wd` | Right side drawer pedestal carcass (44 × 73 × 65.5 cm) |
| 6 | `pedestal_base_front` | `box` | `(0.3611, 0.4329)` | `(0.2444, 0.0588)` | `(0.0, 0.0658)` | `"metal"` | `"faint"` | `wdh` | Pedestal floor runner front (44 × 5 × 5 cm) |
| 7 | `pedestal_base_rear` | `box` | `(0.3611, -0.3671)` | `(0.2444, 0.0588)` | `(0.0, 0.0658)` | `"metal"` | `"faint"` | `wdh` | Pedestal floor runner rear (44 × 5 × 5 cm) |
| 8 | `drawer_front_top` | `box` | `(0.3611, 0.4712)` | `(0.2278, 0.0176)` | `(0.7039, 0.2105)` | `"wood"` | `true` | `wd` | Top stationery drawer face (41 × 1.5 × 16 cm) |
| 9 | `drawer_front_mid` | `box` | `(0.3611, 0.4712)` | `(0.2278, 0.0176)` | `(0.4276, 0.2632)` | `"wood"` | `true` | `wd` | Middle document drawer face (41 × 1.5 × 20 cm) |
| 10 | `drawer_front_bot` | `box` | `(0.3611, 0.4712)` | `(0.2278, 0.0176)` | `(0.0855, 0.3289)` | `"wood"` | `true` | `wd` | Deep filing drawer face (41 × 1.5 × 25 cm) |
| 11 | `drawer_handle_top` | `box` | `(0.3611, 0.4871)` | `(0.0889, 0.0141)` | `(0.8000, 0.0184)` | `"metal"` | `"glow"` | `wdh` | Brushed steel horizontal handle top (16 × 1.2 × 1.4 cm) |
| 12 | `drawer_handle_mid` | `box` | `(0.3611, 0.4871)` | `(0.0889, 0.0141)` | `(0.5500, 0.0184)` | `"metal"` | `"glow"` | `wdh` | Brushed steel horizontal handle middle (16 × 1.2 × 1.4 cm) |
| 13 | `drawer_handle_bot` | `box` | `(0.3611, 0.4871)` | `(0.0889, 0.0141)` | `(0.2408, 0.0184)` | `"metal"` | `"glow"` | `wdh` | Brushed steel horizontal handle bottom (16 × 1.2 × 1.4 cm) |
| 14 | `leg_left_front` | `box` | `(-0.4639, 0.4000)` | `(0.0278, 0.0588)` | `(0.0658, 0.7961)` | `"metal"` | `"faint"` | `wd` | Left O-frame vertical upright front (5 × 5 × 60.5 cm) |
| 15 | `leg_left_rear` | `box` | `(-0.4639, -0.4000)` | `(0.0278, 0.0588)` | `(0.0658, 0.7961)` | `"metal"` | `"faint"` | `wd` | Left O-frame vertical upright rear (5 × 5 × 60.5 cm) |
| 16 | `leg_left_bot_runner` | `box` | `(-0.4639, 0.0)` | `(0.0278, 0.8588)` | `(0.0, 0.0658)` | `"metal"` | `"faint"` | `wd` | Left O-frame bottom floor runner (5 × 73 × 5 cm) |
| 17 | `leg_left_top_beam` | `box` | `(-0.4639, 0.0)` | `(0.0278, 0.8588)` | `(0.8618, 0.0658)` | `"metal"` | `"faint"` | `wd` | Left O-frame top desktop mounting beam (5 × 73 × 5 cm) |
| 18 | `frame_cross_beam_rear` | `box` | `(-0.1056, -0.4000)` | `(0.6889, 0.0471)` | `(0.8750, 0.0526)` | `"metal"` | `"faint"` | `h` | Rear structural crossbeam under desktop (124 × 4 × 4 cm) |
| 19 | `frame_cross_beam_front` | `box` | `(-0.1056, 0.3294)` | `(0.6889, 0.0471)` | `(0.8750, 0.0526)` | `"metal"` | `"faint"` | `h` | Front structural crossbeam under desktop (124 × 4 × 4 cm) |
| 20 | `modesty_panel` | `box` | `(-0.1056, -0.3529)` | `(0.6667, 0.0235)` | `(0.4276, 0.5000)` | `"wood"` | `true` | `dh` | Visitor-facing privacy modesty panel (120 × 2 × 38 cm) |
| 21 | `modesty_support_rail` | `box` | `(-0.1056, -0.3294)` | `(0.6889, 0.0235)` | `(0.8750, 0.0526)` | `"metal"` | `"faint"` | `dh` | Continuous horizontal metal support rail (124 × 2 × 4 cm) |

---

## 5. 2D Symbol Specification (6 Shapes)
1. `rect` $(x: 0.0, z: 0.0, w: 1.0, d: 1.0)$ — Overall desktop perimeter.
2. `rect` $(x: 0.3611, z: 0.0329, w: 0.2444, d: 0.8588)$ — Drawer pedestal top-down footprint.
3. `line` $(x_1: 0.2389, z_1: 0.4712, x_2: 0.4833, z_2: 0.4712)$ — Pedestal drawer face division.
4. `line` $(x_1: -0.4389, z_1: -0.3529, x_2: 0.2278, z_2: -0.3529)$ — Modesty panel line.
5. `rect` $(x: -0.4639, z: 0.0, w: 0.0278, d: 0.8588)$ — Left O-frame top-down footprint.
6. `rect` $(x: -0.4, z: -0.3765, w: 0.0889, d: 0.0706)$ — Cable grommet top-down outline (16 × 6 cm).

---

## 6. Schema and Behavioral Properties
- `surface: true`: Allows laptops, computer monitors, desk lamps, and desktop items to rest directly on top of the desk ($Y=0.76$ m) rather than on the floor.
- `finish: "wood"`: The desktop, drawer fronts, and modesty panel follow the user's custom wood finish in homely themes.
- `fix`: Key structural elements preserve their real-world dimensions upon resizing:
  - `wdh` for handles, grommets, and base runners.
  - `wd` for legs, top beam, bottom runner, and pedestal carcass/drawers.
  - `dh` for modesty panel and modesty support rail (preserves thickness and height, while width stretches proportionally with desk width).
  - `h` for desktop slab thickness and structural crossbeams.
