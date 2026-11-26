# Domolux Specification: Domolux Architectural Outdoor Shower

## 1. Overview
- **Item ID:** `outdoor_shower_column`
- **Pack ID:** `domolux.outdoor_shower_column`
- **Collection:** Domolux Private Collection 30 — Private Estate & Outdoor Living
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/outdoor_shower_column.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `outdoor`
- **Target Rooms:** `garden`
- **Tags:** `shower`, `outdoor`, `pool`, `stainless`, `teak`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 1.05 m (105 cm)
- **Depth ($D$):** 1.05 m (105 cm)
- **Height ($H$):** 2.30 m (230 cm)
- **Component Count:** 12 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 2.30 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [1.05, 1.05, 2.30]$.

---

## 4. Component Breakdown & Geometry Table (12 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.94)` | `(0.00, 0.04)` | `#8a5829` | `true` | `h` | Architectural element #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.00, 0.04)` | `metal` | `glow` | `h` | Architectural element #2 |
| 3 | `box` | `(0.00, -0.36)` | `(0.18, 0.14)` | `(0.04, 0.92)` | `metal` | `true` | `wd` | Architectural element #3 |
| 4 | `box` | `(0.00, -0.36)` | `(0.26, 0.22)` | `(0.04, 0.02)` | `metal` | `false` | `wdh` | Architectural element #4 |
| 5 | `box` | `(0.00, -0.12)` | `(0.08, 0.44)` | `(0.94, 0.05)` | `metal` | `false` | `w` | Architectural element #5 |
| 6 | `box` | `(0.00, 0.08)` | `(0.38, 0.38)` | `(0.92, 0.02)` | `metal` | `glow` | `wdh` | Architectural element #6 |
| 7 | `box` | `(0.00, 0.08)` | `(0.34, 0.34)` | `(0.92, 0.01)` | `#111215` | `false` | `wdh` | Architectural element #7 |
| 8 | `cyl (z)` | `(0.00, -0.28)` | `(0.07, 0.07)` | `(0.48, 0.04)` | `#c5a059` | `false` | `wdh` | Architectural element #8 |
| 9 | `cyl (z)` | `(0.00, -0.28)` | `(0.06, 0.06)` | `(0.54, 0.04)` | `#c5a059` | `false` | `wdh` | Architectural element #9 |
| 10 | `cyl` | `(0.14, -0.34)` | `(0.03, 0.03)` | `(0.44, 0.18)` | `metal` | `false` | `wdh` | Architectural element #10 |
| 11 | `loft` | `(0.12, -0.32)` | `(0.04, 0.04)` | `(0.32, 0.14)` | `metal` | `false` | `wdh` | Architectural element #11 |
| 12 | `box` | `(0.00, -0.44)` | `(0.32, 0.10)` | `(0.65, 0.02)` | `#8a5829` | `false` | `wdh` | Architectural element #12 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.98)
2. `rect` $(x: 0.00, z: -0.36, w: 0.18, d: 0.14) (filled)
3. `rect` $(x: 0.00, z: 0.08, w: 0.38, d: 0.38)
4. `line` $(x_1: 0.00, z_1: -0.36, x_2: 0.00, z_2: 0.08)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
