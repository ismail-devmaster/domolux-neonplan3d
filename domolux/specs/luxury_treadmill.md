# Domolux Specification: Domolux Elite Commercial Treadmill

## 1. Overview
- **Item ID:** `luxury_treadmill`
- **Pack ID:** `domolux.luxury_treadmill`
- **Collection:** Domolux Private Collection 30 — Private Fitness & Performance Wellness
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/luxury_treadmill.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `sport`
- **Target Rooms:** `hobby`
- **Tags:** `treadmill`, `running`, `fitness`, `gym`, `cardio`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 0.92 m (92 cm)
- **Depth ($D$):** 1.95 m (195 cm)
- **Height ($H$):** 1.48 m (148 cm)
- **Component Count:** 14 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 5 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 1.48 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [0.92, 1.95, 1.48]$.

---

## 4. Component Breakdown & Geometry Table (14 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.05)` | `(0.94, 0.88)` | `(0.00, 0.12)` | `#1c1e22` | `true` | `—` | Architectural element #1 |
| 2 | `box` | `(0.00, -0.05)` | `(0.62, 0.84)` | `(0.09, 0.04)` | `#111215` | `faint` | `—` | Architectural element #2 |
| 3 | `box` | `(-0.38, -0.05)` | `(0.12, 0.86)` | `(0.09, 0.04)` | `#30343f` | `faint` | `—` | Architectural element #3 |
| 4 | `box` | `(0.38, -0.05)` | `(0.12, 0.86)` | `(0.09, 0.04)` | `#30343f` | `faint` | `—` | Architectural element #4 |
| 5 | `loft` | `(0.00, 0.38)` | `(0.90, 0.18)` | `(0.06, 0.22)` | `#18191d` | `glow` | `—` | Architectural element #5 |
| 6 | `cyl (x)` | `(0.00, -0.47)` | `(0.64, 0.06)` | `(0.07, 0.06)` | `metal` | `false` | `wdh` | Architectural element #6 |
| 7 | `loft` | `(-0.42, 0.28)` | `(0.08, 0.12)` | `(0.12, 0.78)` | `#8c6747` | `true` | `wd` | Architectural element #7 |
| 8 | `loft` | `(0.42, 0.28)` | `(0.08, 0.12)` | `(0.12, 0.78)` | `#8c6747` | `true` | `wd` | Architectural element #8 |
| 9 | `box` | `(-0.38, 0.12)` | `(0.06, 0.45)` | `(0.86, 0.05)` | `#18191d` | `false` | `wd` | Architectural element #9 |
| 10 | `box` | `(0.38, 0.12)` | `(0.06, 0.45)` | `(0.86, 0.05)` | `#18191d` | `false` | `wd` | Architectural element #10 |
| 11 | `cyl (x)` | `(0.00, 0.32)` | `(0.74, 0.05)` | `(0.85, 0.05)` | `metal` | `false` | `h` | Architectural element #11 |
| 12 | `box` | `(0.00, 0.34)` | `(0.14, 0.06)` | `(0.87, 0.03)` | `#e74c3c` | `false` | `wdh` | Architectural element #12 |
| 13 | `loft` | `(0.00, 0.38)` | `(0.78, 0.06)` | `(0.90, 0.10)` | `#0e1014` | `glow` | `h` | Architectural element #13 |
| 14 | `box` | `(0.00, 0.39)` | `(0.72, 0.02)` | `(0.91, 0.08)` | `accent` | `false` | `h` | Architectural element #14 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: -0.05, w: 0.94, d: 0.88)
2. `rect` $(x: 0.00, z: -0.05, w: 0.62, d: 0.84) (filled)
3. `rect` $(x: 0.00, z: 0.38, w: 0.78, d: 0.10)
4. `line` $(x_1: -0.38, z_1: 0.34, x_2: -0.38, z_2: -0.10)$
5. `line` $(x_1: 0.38, z_1: 0.34, x_2: 0.38, z_2: -0.10)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
