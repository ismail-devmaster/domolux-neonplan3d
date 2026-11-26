# Domolux Specification: Domolux Outdoor Gourmet Grill Station

## 1. Overview
- **Item ID:** `outdoor_grill_station`
- **Pack ID:** `domolux.outdoor_grill_station`
- **Collection:** Domolux Private Collection 30 — Private Estate & Outdoor Living
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/outdoor_grill_station.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `outdoor`
- **Target Rooms:** `garden`
- **Tags:** `grill`, `bbq`, `kitchen`, `outdoor`, `granite`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 2.40 m (240 cm)
- **Depth ($D$):** 0.85 m (85 cm)
- **Height ($H$):** 1.25 m (125 cm)
- **Component Count:** 23 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 1.25 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [2.40, 0.85, 1.25]$.

---

## 4. Component Breakdown & Geometry Table (23 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.95, 0.88)` | `(0.00, 0.08)` | `#18191d` | `faint` | `h` | Architectural element #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.96, 0.92)` | `(0.08, 0.58)` | `#2d3038` | `true` | `—` | Architectural element #2 |
| 3 | `box` | `(0.00, 0.00)` | `(1.00, 0.96)` | `(0.66, 0.06)` | `#1c1e22` | `true` | `h` | Architectural element #3 |
| 4 | `box` | `(-0.15, 0.02)` | `(0.52, 0.74)` | `(0.72, 0.12)` | `metal` | `glow` | `—` | Architectural element #4 |
| 5 | `cyl (x)` | `(-0.15, 0.02)` | `(0.52, 0.60)` | `(0.78, 0.18)` | `metal` | `glow` | `—` | Architectural element #5 |
| 6 | `cyl (x)` | `(-0.15, 0.32)` | `(0.44, 0.04)` | `(0.82, 0.04)` | `#c5a059` | `false` | `h` | Architectural element #6 |
| 7 | `cyl (z)` | `(-0.15, 0.22)` | `(0.07, 0.07)` | `(0.92, 0.03)` | `#111215` | `false` | `wdh` | Architectural element #7 |
| 8 | `cyl (z)` | `(-0.35, 0.42)` | `(0.04, 0.04)` | `(0.75, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #8 |
| 9 | `cyl (z)` | `(-0.27, 0.42)` | `(0.04, 0.04)` | `(0.75, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #9 |
| 10 | `cyl (z)` | `(-0.19, 0.42)` | `(0.04, 0.04)` | `(0.75, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #10 |
| 11 | `cyl (z)` | `(-0.11, 0.42)` | `(0.04, 0.04)` | `(0.75, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #11 |
| 12 | `cyl (z)` | `(-0.03, 0.42)` | `(0.04, 0.04)` | `(0.75, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #12 |
| 13 | `cyl (z)` | `(0.05, 0.42)` | `(0.04, 0.04)` | `(0.75, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #13 |
| 14 | `box` | `(0.32, 0.04)` | `(0.25, 0.52)` | `(0.72, 0.04)` | `metal` | `faint` | `—` | Architectural element #14 |
| 15 | `box` | `(0.32, 0.04)` | `(0.22, 0.48)` | `(0.75, 0.02)` | `#111215` | `false` | `wdh` | Architectural element #15 |
| 16 | `cyl (z)` | `(0.32, 0.42)` | `(0.04, 0.04)` | `(0.75, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #16 |
| 17 | `box` | `(-0.26, 0.47)` | `(0.24, 0.02)` | `(0.12, 0.52)` | `#363a45` | `true` | `—` | Architectural element #17 |
| 18 | `box` | `(-0.02, 0.47)` | `(0.24, 0.02)` | `(0.12, 0.52)` | `#363a45` | `true` | `—` | Architectural element #18 |
| 19 | `box` | `(0.32, 0.47)` | `(0.26, 0.02)` | `(0.48, 0.16)` | `#363a45` | `true` | `—` | Architectural element #19 |
| 20 | `box` | `(0.32, 0.47)` | `(0.26, 0.02)` | `(0.30, 0.16)` | `#363a45` | `true` | `—` | Architectural element #20 |
| 21 | `box` | `(0.32, 0.47)` | `(0.26, 0.02)` | `(0.12, 0.16)` | `#363a45` | `true` | `—` | Architectural element #21 |
| 22 | `cyl` | `(-0.16, 0.48)` | `(0.01, 0.01)` | `(0.32, 0.20)` | `metal` | `false` | `wdh` | Architectural element #22 |
| 23 | `cyl` | `(-0.12, 0.48)` | `(0.01, 0.01)` | `(0.32, 0.20)` | `metal` | `false` | `wdh` | Architectural element #23 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.96)
2. `rect` $(x: -0.15, z: 0.02, w: 0.52, d: 0.74) (filled)
3. `rect` $(x: 0.32, z: 0.04, w: 0.25, d: 0.52)
4. `line` $(x_1: -0.37, z_1: 0.32, x_2: 0.07, z_2: 0.32)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
