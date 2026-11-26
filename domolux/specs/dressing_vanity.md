# Domolux Specification: Domolux Haute Couture Dressing Vanity

## 1. Overview
- **Item ID:** `dressing_vanity`
- **Pack ID:** `domolux.dressing_vanity`
- **Collection:** Domolux Private Collection 30 — Private Dressing, Storage & Personal Care
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/dressing_vanity.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `storage`
- **Target Rooms:** `bedroom`, `bath`
- **Tags:** `vanity`, `dressing`, `table`, `mirror`, `luxury`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 1.65 m (165 cm)
- **Depth ($D$):** 0.65 m (65 cm)
- **Height ($H$):** 1.48 m (148 cm)
- **Component Count:** 19 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 1.48 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [1.65, 0.65, 1.48]$.

---

## 4. Component Breakdown & Geometry Table (19 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(-0.44, 0.38)` | `(0.04, 0.04)` | `(0.00, 0.50)` | `#8c6747` | `false` | `wdh` | Architectural element #1 |
| 2 | `cyl` | `(0.44, 0.38)` | `(0.04, 0.04)` | `(0.00, 0.50)` | `#8c6747` | `false` | `wdh` | Architectural element #2 |
| 3 | `cyl` | `(-0.44, -0.38)` | `(0.04, 0.04)` | `(0.00, 0.50)` | `#8c6747` | `false` | `wdh` | Architectural element #3 |
| 4 | `cyl` | `(0.44, -0.38)` | `(0.04, 0.04)` | `(0.00, 0.50)` | `#8c6747` | `false` | `wdh` | Architectural element #4 |
| 5 | `box` | `(0.00, -0.38)` | `(0.88, 0.02)` | `(0.15, 0.02)` | `#8c6747` | `false` | `h` | Architectural element #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.94, 0.88)` | `(0.50, 0.12)` | `#36261b` | `true` | `—` | Architectural element #6 |
| 7 | `box` | `(0.00, 0.00)` | `(0.96, 0.92)` | `(0.62, 0.03)` | `white` | `true` | `h` | Architectural element #7 |
| 8 | `box` | `(0.00, 0.02)` | `(0.48, 0.68)` | `(0.65, 0.01)` | `#7a482b` | `faint` | `—` | Architectural element #8 |
| 9 | `box` | `(-0.30, 0.45)` | `(0.28, 0.02)` | `(0.51, 0.10)` | `#36261b` | `true` | `wdh` | Architectural element #9 |
| 10 | `box` | `(-0.30, 0.46)` | `(0.12, 0.01)` | `(0.55, 0.01)` | `#c5a059` | `false` | `wdh` | Architectural element #10 |
| 11 | `box` | `(0.30, 0.45)` | `(0.28, 0.02)` | `(0.51, 0.10)` | `#36261b` | `true` | `wdh` | Architectural element #11 |
| 12 | `box` | `(0.30, 0.46)` | `(0.12, 0.01)` | `(0.55, 0.01)` | `#c5a059` | `false` | `wdh` | Architectural element #12 |
| 13 | `box` | `(0.00, 0.45)` | `(0.28, 0.02)` | `(0.51, 0.10)` | `#36261b` | `true` | `wdh` | Architectural element #13 |
| 14 | `box` | `(0.00, 0.46)` | `(0.12, 0.01)` | `(0.55, 0.01)` | `#c5a059` | `false` | `wdh` | Architectural element #14 |
| 15 | `box` | `(0.00, -0.34)` | `(0.52, 0.04)` | `(0.65, 0.34)` | `#8c6747` | `glow` | `wd` | Architectural element #15 |
| 16 | `box` | `(0.00, -0.31)` | `(0.48, 0.01)` | `(0.67, 0.30)` | `glass` | `faint` | `wd` | Architectural element #16 |
| 17 | `box` | `(0.00, -0.30)` | `(0.50, 0.01)` | `(0.66, 0.32)` | `#fff5e6` | `false` | `wd` | Architectural element #17 |
| 18 | `cyl` | `(0.00, 0.28)` | `(0.26, 0.26)` | `(0.00, 0.32)` | `#dedbd2` | `true` | `wdh` | Architectural element #18 |
| 19 | `cyl` | `(0.00, 0.28)` | `(0.27, 0.27)` | `(0.00, 0.04)` | `#c5a059` | `false` | `wdh` | Architectural element #19 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: -0.10, w: 0.96, d: 0.72)
2. `rect` $(x: 0.00, z: -0.10, w: 0.48, d: 0.52)
3. `line` $(x_1: -0.26, z_1: -0.34, x_2: 0.26, z_2: -0.34)$
4. `circle` $(x: 0.00, z: 0.28, r: 0.13)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
