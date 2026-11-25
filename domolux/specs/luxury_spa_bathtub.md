# Domolux Luxury Spa Bathtub Specification

## 1. Overview
- **Item ID:** `luxury_spa_bathtub`
- **Pack ID:** `domolux.luxury_spa_bathtub`
- **Collection:** Domolux Luxury Bath Collection
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`, Revision: Visual Quality Repair)
- **Category:** Bathroom (`group: bath`, `room: ["bath"]`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/luxury_spa_bathtub.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Overall Bounding Box:** 2.00 m wide ($W$) × 1.15 m deep ($D$) × 2.25 m high ($H$, includes overhead rainfall shower)
- **Bathtub Outer Shell:** 1.84 m wide × 0.94 m deep × 0.62 m high, sculptural flared freestanding silhouette
- **Deeply Recessed Basin Cavity:** 1.52 m wide × 0.66 m deep × 0.50 m interior depth (open from rim down to floor)
- **Sunken Water Surface:** Sits at 0.40 m height (22 cm BELOW the top rim), leaving a clearly visible deep bathing well
- **Ergonomic Reclined Backrest:** Smooth 35° ceramic incline extending from basin floor up out of the water to the headrest rim
- **Ambient Floating Base Plinth:** 1.72 m wide × 0.83 m deep × 0.03 m high recessed plinth with soft glow under-lighting
- **Frameless Glass Shield:** 0.76 m wide × 1.40 m tall × 0.01 m thick (mounted along front-left rim, leaving bath opening visible)
- **Overhead Shower System:** Rigid cylindrical riser column rising to 2.15 m, supporting a 48 cm forward-reaching arm and 32 cm diameter rainfall disc centered over the bathing area
- **Architectural Waterfall Faucet:** 16 cm wide × 18 cm projection cascade spout delivering water ribbon into basin
- **Hydromassage System:** 6 lateral circular jets (3 front, 3 rear) + 1 integrated lumbar massage cluster

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left/shower side, $+X$ is right/headrest side).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front room side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum height ($Y=1$, 2.25 m).
- All part coordinates and spans are strictly normalized by $W=2.00, D=1.15, H=2.25$.

---

## 4. Component Breakdown & Geometry Table (44 Parts)

| # | Part Identifier | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `plinth_ambient_glow` | `box` | `(0.0, 0.04)` | `(0.8600, 0.7200)` | `(0.0, 0.0133)` | `"#d0e8ff"` | `"glow"` | `h` | Floating ambient base illumination plinth (172 × 83 × 3 cm) |
| 2 | `tub_base_floor` | `box` | `(0.0, 0.04)` | `(0.9000, 0.7600)` | `(0.0133, 0.0400)` | `"white"` | `"faint"` | — | Structural ceramic sub-floor of the bathtub (180 × 87 × 9 cm) |
| 3 | `basin_floor_surface` | `box` | `(0.0, 0.04)` | `(0.7600, 0.5739)` | `(0.0533, 0.0044)` | `"white"` | `"faint"` | — | Finished interior floor of the recessed basin (152 × 66 cm) |
| 4 | `drain_plug` | `cyl` | `(0.0, 0.04)` | `(0.0450, 0.0450)` | `(0.0578, 0.0044)` | `"#c5a059"` | `"faint"` | `wdh` | Circular champagne-gold pop-up basin floor drain |
| 5 | `water_surface_plane` | `box` | `(-0.0300, 0.04)` | `(0.6800, 0.5400)` | `(0.1689, 0.0089)` | `"#2a6f8f"` | `"faint"` | — | Sunken aquamarine water surface sitting 22 cm below rim |
| 6 | `backrest_recline_slope` | `loft` | `(0.3200, 0.04)` | `(0.0800, 0.5400)` | `(0.0533, 0.2089)` | `"white"` | `"faint"` | — | Ergonomic 35° reclined backrest slope rising out of the water |
| 7 | `wall_front` | `loft` | `(0.0, 0.3800)` | `(0.7000, 0.0900)` | `(0.0533, 0.2089)` | `"white"` | `"faint"` | — | Front flared outer bathtub wall sloping gracefully outward |
| 8 | `wall_rear` | `loft` | `(0.0, -0.3000)` | `(0.7000, 0.0900)` | `(0.0533, 0.2089)` | `"white"` | `"faint"` | — | Rear flared outer bathtub wall sloping gracefully outward |
| 9 | `wall_left_end` | `loft` | `(-0.4200, 0.04)` | `(0.0800, 0.5000)` | `(0.0533, 0.2089)` | `"white"` | `"faint"` | — | Left end outer wall at the shower/foot end of the tub |
| 10 | `wall_right_end` | `loft` | `(0.4200, 0.04)` | `(0.0800, 0.5000)` | `(0.0533, 0.2089)` | `"white"` | `"faint"` | — | Right end outer shell behind the reclined headrest |
| 11 | `corner_front_left` | `loft` | `(-0.3700, 0.3200)` | `(0.1200, 0.1200)` | `(0.0533, 0.2089)` | `"white"` | `"faint"` | — | Sculptural curved front-left corner wall transition |
| 12 | `corner_front_right` | `loft` | `(0.3700, 0.3200)` | `(0.1200, 0.1200)` | `(0.0533, 0.2089)` | `"white"` | `"faint"` | — | Sculptural curved front-right corner wall transition |
| 13 | `corner_rear_left` | `loft` | `(-0.3700, -0.2400)` | `(0.1200, 0.1200)` | `(0.0533, 0.2089)` | `"white"` | `"faint"` | — | Sculptural curved rear-left corner wall transition |
| 14 | `corner_rear_right` | `loft` | `(0.3700, -0.2400)` | `(0.1200, 0.1200)` | `(0.0533, 0.2089)` | `"white"` | `"faint"` | — | Sculptural curved rear-right corner wall transition |
| 15 | `rim_front` | `box` | `(0.0, 0.3950)` | `(0.7400, 0.0900)` | `(0.2622, 0.0133)` | `"white"` | `true` | `h` | Polished front upper ceramic rim cap (148 × 10 × 3 cm) |
| 16 | `rim_rear` | `box` | `(0.0, -0.3150)` | `(0.7400, 0.0900)` | `(0.2622, 0.0133)` | `"white"` | `true` | `h` | Polished rear upper ceramic rim cap (148 × 10 × 3 cm) |
| 17 | `rim_left` | `box` | `(-0.4350, 0.04)` | `(0.0800, 0.5400)` | `(0.2622, 0.0133)` | `"white"` | `true` | `h` | Polished left upper ceramic rim cap (16 × 62 × 3 cm) |
| 18 | `rim_right` | `box` | `(0.4350, 0.04)` | `(0.0800, 0.5400)` | `(0.2622, 0.0133)` | `"white"` | `true` | `h` | Polished right upper ceramic rim cap behind headrest |
| 19 | `headrest_cushion` | `box` | `(0.4000, 0.04)` | `(0.0900, 0.2800)` | `(0.2756, 0.0267)` | `"dark"` | `"faint"` | `wdh` | Ergonomic dark neck/head support cushion (18 × 32 × 6 cm) |
| 20 | `headrest_brackets` | `box` | `(0.4000, 0.04)` | `(0.0700, 0.3000)` | `(0.2756, 0.0089)` | `"#c5a059"` | `"glow"` | `wdh` | Brushed champagne-gold metallic mounting brackets |
| 21 | `overflow_slot` | `box` | `(-0.3900, 0.04)` | `(0.0060, 0.0800)` | `(0.2200, 0.0133)` | `"#c5a059"` | `"glow"` | `wdh` | Linear champagne-gold overflow slot on inner wall |
| 22 | `jet_front_1` | `cyl (z)` | `(-0.2200, 0.3300)` | `(0.0260, 0.0150)` | `(0.1200, 0.0260)` | `"#c5a059"` | `"faint"` | `wdh` | Forward-left hydromassage jet nozzle on inner wall |
| 23 | `jet_front_2` | `cyl (z)` | `(0.0, 0.3300)` | `(0.0260, 0.0150)` | `(0.1200, 0.0260)` | `"#c5a059"` | `"faint"` | `wdh` | Forward-center hydromassage jet nozzle on inner wall |
| 24 | `jet_front_3` | `cyl (z)` | `(0.2200, 0.3300)` | `(0.0260, 0.0150)` | `(0.1200, 0.0260)` | `"#c5a059"` | `"faint"` | `wdh` | Forward-right hydromassage jet nozzle on inner wall |
| 25 | `jet_rear_1` | `cyl (z)` | `(-0.2200, -0.2500)` | `(0.0260, 0.0150)` | `(0.1200, 0.0260)` | `"#c5a059"` | `"faint"` | `wdh` | Rear-left hydromassage jet nozzle on inner wall |
| 26 | `jet_rear_2` | `cyl (z)` | `(0.0, -0.2500)` | `(0.0260, 0.0150)` | `(0.1200, 0.0260)` | `"#c5a059"` | `"faint"` | `wdh` | Rear-center hydromassage jet nozzle on inner wall |
| 27 | `jet_rear_3` | `cyl (z)` | `(0.2200, -0.2500)` | `(0.0260, 0.0150)` | `(0.1200, 0.0260)` | `"#c5a059"` | `"faint"` | `wdh` | Rear-right hydromassage jet nozzle on inner wall |
| 28 | `waterfall_faucet_body` | `box` | `(-0.3200, -0.3200)` | `(0.0800, 0.0800)` | `(0.2756, 0.0267)` | `"#c5a059"` | `true` | `wdh` | Substantial champagne-gold waterfall faucet body |
| 29 | `waterfall_faucet_spout` | `box` | `(-0.3200, -0.2500)` | `(0.0700, 0.0600)` | `(0.2844, 0.0089)` | `"#c5a059"` | `"glow"` | `wdh` | Projecting cascade delivery shelf pouring into open basin |
| 30 | `mixer_panel_backplate` | `box` | `(-0.3200, -0.4500)` | `(0.0700, 0.0174)` | `(0.3556, 0.1600)` | `"dark"` | `"glow"` | `wdh` | Matte black architectural thermostatic mixer faceplate |
| 31 | `mixer_trim_plate` | `box` | `(-0.3200, -0.4400)` | `(0.0600, 0.0050)` | `(0.3600, 0.1500)` | `"#c5a059"` | `"faint"` | `wdh` | Brushed champagne-gold metallic trim bezel |
| 32 | `control_dial_temp` | `cyl (z)` | `(-0.3200, -0.4300)` | `(0.0250, 0.0174)` | `(0.4450, 0.0222)` | `"#c5a059"` | `"glow"` | `wdh` | Rotary thermostatic temperature control knob |
| 33 | `control_dial_mode` | `cyl (z)` | `(-0.3200, -0.4300)` | `(0.0250, 0.0174)` | `(0.3850, 0.0222)` | `"#c5a059"` | `"glow"` | `wdh` | Rotary diverter mode selector dial |
| 34 | `shower_riser_rail` | `cyl` | `(-0.3200, -0.4400)` | `(0.0150, 0.0261)` | `(0.4000, 0.5556)` | `"#c5a059"` | `"faint"` | `wd` | Vertical cylindrical shower column rising to 2.15 m |
| 35 | `shower_wall_mount_top` | `box` | `(-0.3200, -0.4650)` | `(0.0250, 0.0350)` | `(0.9200, 0.0200)` | `"#c5a059"` | `"glow"` | `wdh` | Top wall anchor bracket for shower column |
| 36 | `shower_arm_horizontal` | `cyl (z)` | `(-0.3200, -0.2000)` | `(0.0150, 0.4800)` | `(0.9556, 0.0133)` | `"#c5a059"` | `"faint"` | `wdh` | Horizontal overhead arm extending forward 48 cm |
| 37 | `shower_head_rainfall` | `cyl` | `(-0.3200, 0.0400)` | `(0.1600, 0.2783)` | `(0.9467, 0.0089)` | `"#c5a059"` | `"glow"` | `wdh` | 32 cm diameter ultra-slim luxury rainfall shower head |
| 38 | `hand_shower_slider` | `box` | `(-0.2950, -0.4400)` | `(0.0250, 0.0261)` | `(0.5800, 0.0267)` | `"#c5a059"` | `"glow"` | `wdh` | Height-adjustable locking slider cradle on riser rail |
| 39 | `hand_shower_wand` | `cyl` | `(-0.2750, -0.4200)` | `(0.0140, 0.0243)` | `(0.5778, 0.0978)` | `"#c5a059"` | `"glow"` | `wdh` | Sleek cylindrical handheld shower wand (22 cm long) |
| 40 | `hose_outlet_elbow` | `cyl (z)` | `(-0.3200, -0.4450)` | `(0.0200, 0.0200)` | `(0.3300, 0.0150)` | `"#c5a059"` | `"faint"` | `wdh` | Wall supply elbow fitting |
| 41 | `flexible_shower_hose` | `loft` | `(-0.2950, -0.4300)` | `(0.0250, 0.0250)` | `(0.2600, 0.1200)` | `"#888888"` | `"faint"` | `wdh` | Flexible metallic hose drape connecting outlet to wand |
| 42 | `glass_screen_main` | `box` | `(-0.2400, 0.3950)` | `(0.3800, 0.0087)` | `(0.2756, 0.6222)` | `"glass"` | `"faint"` | `dh` | Frameless architectural glass shield (76 × 140 cm) |
| 43 | `glass_clamp_bottom` | `box` | `(-0.2400, 0.3950)` | `(0.0300, 0.0261)` | `(0.2756, 0.0178)` | `"#c5a059"` | `"glow"` | `wdh` | Heavy-duty champagne-gold glass bottom clamping shoe |
| 44 | `glass_stabilizer_bar` | `cyl (z)` | `(-0.0500, -0.0400)` | `(0.0125, 0.7600)` | `(0.8800, 0.0111)` | `"#c5a059"` | `"faint"` | `wdh` | Tubular wall-to-glass structural bracing stabilizer bar |

---

## 5. 2D Symbol Specification (10 Shapes)
1. `rect` $(x: 0.0, z: 0.04, w: 0.9200, d: 0.8000)$ — Bathtub outer perimeter contour.
2. `rect` $(x: 0.0, z: 0.04, w: 0.7600, d: 0.5739)$ — Deeply recessed inner basin opening.
3. `circle` $(x: 0.0, z: 0.04, r: 0.0225)$ — Pop-up bottom drain outlet.
4. `rect` $(x: 0.4000, z: 0.04, w: 0.0900, d: 0.2800)$ — Headrest cushion outline.
5. `line` $(x_1: 0.3200, z_1: -0.2300, x_2: 0.3200, z_2: 0.3100)$ — Reclined backrest base boundary.
6. `line` $(x_1: -0.4300, z_1: 0.3950, x_2: -0.0500, z_2: 0.3950)$ — Glass shower screen line.
7. `rect` $(x: -0.3200, z: -0.2850, w: 0.0700, d: 0.1300)$ — Waterfall faucet projecting over rim.
8. `rect` $(x: -0.3200, z: 0.0400, w: 0.1600, d: 0.2783)$ — Overhead rainfall shower head projection.
9. `line` $(x_1: -0.3200, z_1: -0.4400, x_2: -0.3200, z_2: 0.0400)$ — Shower arm axis.
10. `rect` $(x: -0.3200, z: -0.4500, w: 0.0700, d: 0.0174)$ — Wall mixer backplate footprint.

---

## 6. Schema and Behavioral Properties
- `group: "bath"`, `room: ["bath"]`: Positioned in the Bathroom collection.
- `fix` constraints guarantee graceful resizing in NeonPlan 3D without distorting precision fittings:
  - `wdh` on all fixtures, controls, jets, drains, and headrest.
  - `wd` on vertical shower columns.
  - `dh` on glass shower screen.
  - `h` on bathtub top rim and base plinth.
