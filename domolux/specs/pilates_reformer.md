# Domolux Specification: Domolux Professional Pilates Reformer

## 1. Overview
- **Item ID:** `pilates_reformer`
- **Pack ID:** `domolux.pilates_reformer`
- **Collection:** Domolux Private Collection 30 — Private Fitness & Performance Wellness
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/pilates_reformer.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `sport`
- **Target Rooms:** `hobby`, `bedroom`
- **Tags:** `pilates`, `reformer`, `fitness`, `gym`, `walnut`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 0.76 m (76 cm)
- **Depth ($D$):** 2.45 m (245 cm)
- **Height ($H$):** 0.72 m (72 cm)
- **Component Count:** 23 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 5 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 0.72 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [0.76, 2.45, 0.72]$.

---

## 4. Component Breakdown & Geometry Table (23 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.44, 0.00)` | `(0.08, 0.96)` | `(0.12, 0.22)` | `#36261b` | `true` | `wd` | Architectural element #1 |
| 2 | `box` | `(0.44, 0.00)` | `(0.08, 0.96)` | `(0.12, 0.22)` | `#36261b` | `true` | `wd` | Architectural element #2 |
| 3 | `box` | `(0.00, 0.46)` | `(0.96, 0.08)` | `(0.12, 0.22)` | `#36261b` | `true` | `d` | Architectural element #3 |
| 4 | `box` | `(0.00, -0.46)` | `(0.96, 0.08)` | `(0.12, 0.22)` | `#36261b` | `true` | `d` | Architectural element #4 |
| 5 | `cyl` | `(-0.42, 0.44)` | `(0.10, 0.10)` | `(0.00, 0.14)` | `#2d241e` | `false` | `wdh` | Architectural element #5 |
| 6 | `cyl` | `(0.42, 0.44)` | `(0.10, 0.10)` | `(0.00, 0.14)` | `#2d241e` | `false` | `wdh` | Architectural element #6 |
| 7 | `cyl` | `(-0.42, -0.44)` | `(0.10, 0.10)` | `(0.00, 0.14)` | `#2d241e` | `false` | `wdh` | Architectural element #7 |
| 8 | `cyl` | `(0.42, -0.44)` | `(0.10, 0.10)` | `(0.00, 0.14)` | `#2d241e` | `false` | `wdh` | Architectural element #8 |
| 9 | `box` | `(-0.36, 0.00)` | `(0.06, 0.88)` | `(0.32, 0.04)` | `metal` | `faint` | `—` | Architectural element #9 |
| 10 | `box` | `(0.36, 0.00)` | `(0.06, 0.88)` | `(0.32, 0.04)` | `metal` | `faint` | `—` | Architectural element #10 |
| 11 | `box` | `(0.00, -0.05)` | `(0.70, 0.44)` | `(0.36, 0.08)` | `#18191d` | `true` | `—` | Architectural element #11 |
| 12 | `box` | `(0.00, -0.22)` | `(0.30, 0.14)` | `(0.42, 0.06)` | `#18191d` | `false` | `wdh` | Architectural element #12 |
| 13 | `box` | `(-0.22, -0.20)` | `(0.14, 0.10)` | `(0.42, 0.16)` | `#18191d` | `false` | `wdh` | Architectural element #13 |
| 14 | `box` | `(0.22, -0.20)` | `(0.14, 0.10)` | `(0.42, 0.16)` | `#18191d` | `false` | `wdh` | Architectural element #14 |
| 15 | `cyl (x)` | `(0.00, 0.42)` | `(0.86, 0.05)` | `(0.70, 0.05)` | `metal` | `glow` | `h` | Architectural element #15 |
| 16 | `loft` | `(-0.42, 0.36)` | `(0.04, 0.14)` | `(0.24, 0.48)` | `#8c6747` | `false` | `wd` | Architectural element #16 |
| 17 | `loft` | `(0.42, 0.36)` | `(0.04, 0.14)` | `(0.24, 0.48)` | `#8c6747` | `false` | `wd` | Architectural element #17 |
| 18 | `cyl (x)` | `(0.00, 0.42)` | `(0.50, 0.07)` | `(0.69, 0.07)` | `#18191d` | `false` | `h` | Architectural element #18 |
| 19 | `cyl` | `(-0.32, -0.45)` | `(0.04, 0.04)` | `(0.32, 0.45)` | `#c5a059` | `false` | `wdh` | Architectural element #19 |
| 20 | `cyl` | `(0.32, -0.45)` | `(0.04, 0.04)` | `(0.32, 0.45)` | `#c5a059` | `false` | `wdh` | Architectural element #20 |
| 21 | `cyl` | `(-0.32, -0.45)` | `(0.06, 0.06)` | `(0.76, 0.04)` | `metal` | `false` | `wdh` | Architectural element #21 |
| 22 | `cyl` | `(0.32, -0.45)` | `(0.06, 0.06)` | `(0.76, 0.04)` | `metal` | `false` | `wdh` | Architectural element #22 |
| 23 | `box` | `(0.00, 0.22)` | `(0.45, 0.08)` | `(0.28, 0.03)` | `metal` | `false` | `wdh` | Architectural element #23 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.96)
2. `rect` $(x: 0.00, z: -0.05, w: 0.70, d: 0.44) (filled)
3. `line` $(x_1: -0.42, z_1: 0.42, x_2: 0.42, z_2: 0.42)$
4. `circle` $(x: -0.32, z: -0.45, r: 0.04)$
5. `circle` $(x: 0.32, z: -0.45, r: 0.04)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
