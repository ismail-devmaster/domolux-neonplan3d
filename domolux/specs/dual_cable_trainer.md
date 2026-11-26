# Domolux Specification: Domolux Dual Cable Functional Trainer

## 1. Overview
- **Item ID:** `dual_cable_trainer`
- **Pack ID:** `domolux.dual_cable_trainer`
- **Collection:** Domolux Private Collection 30 — Private Fitness & Performance Wellness
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/dual_cable_trainer.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `sport`
- **Target Rooms:** `hobby`
- **Tags:** `gym`, `cables`, `trainer`, `fitness`, `weights`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 1.65 m (165 cm)
- **Depth ($D$):** 1.15 m (115 cm)
- **Height ($H$):** 2.20 m (220 cm)
- **Component Count:** 19 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 5 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 2.20 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [1.65, 1.15, 2.20]$.

---

## 4. Component Breakdown & Geometry Table (19 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.40, 0.00)` | `(0.12, 0.88)` | `(0.00, 0.06)` | `#1c1e22` | `faint` | `wd` | Architectural element #1 |
| 2 | `box` | `(0.40, 0.00)` | `(0.12, 0.88)` | `(0.00, 0.06)` | `#1c1e22` | `faint` | `wd` | Architectural element #2 |
| 3 | `box` | `(0.00, -0.38)` | `(0.72, 0.08)` | `(0.00, 0.06)` | `#1c1e22` | `false` | `h` | Architectural element #3 |
| 4 | `box` | `(-0.40, -0.25)` | `(0.22, 0.32)` | `(0.06, 0.88)` | `#18191d` | `true` | `—` | Architectural element #4 |
| 5 | `box` | `(-0.40, -0.08)` | `(0.16, 0.02)` | `(0.15, 0.74)` | `glass` | `glow` | `—` | Architectural element #5 |
| 6 | `box` | `(0.40, -0.25)` | `(0.22, 0.32)` | `(0.06, 0.88)` | `#18191d` | `true` | `—` | Architectural element #6 |
| 7 | `box` | `(0.40, -0.08)` | `(0.16, 0.02)` | `(0.15, 0.74)` | `glass` | `glow` | `—` | Architectural element #7 |
| 8 | `cyl` | `(-0.44, 0.18)` | `(0.03, 0.03)` | `(0.06, 0.88)` | `metal` | `false` | `wd` | Architectural element #8 |
| 9 | `cyl` | `(-0.36, 0.18)` | `(0.03, 0.03)` | `(0.06, 0.88)` | `metal` | `false` | `wd` | Architectural element #9 |
| 10 | `box` | `(-0.40, 0.18)` | `(0.14, 0.10)` | `(0.52, 0.08)` | `#c5a059` | `false` | `wdh` | Architectural element #10 |
| 11 | `cyl (x)` | `(-0.40, 0.24)` | `(0.06, 0.06)` | `(0.53, 0.06)` | `metal` | `false` | `wdh` | Architectural element #11 |
| 12 | `cyl` | `(0.44, 0.18)` | `(0.03, 0.03)` | `(0.06, 0.88)` | `metal` | `false` | `wd` | Architectural element #12 |
| 13 | `cyl` | `(0.36, 0.18)` | `(0.03, 0.03)` | `(0.06, 0.88)` | `metal` | `false` | `wd` | Architectural element #13 |
| 14 | `box` | `(0.40, 0.18)` | `(0.14, 0.10)` | `(0.52, 0.08)` | `#c5a059` | `false` | `wdh` | Architectural element #14 |
| 15 | `cyl (x)` | `(0.40, 0.24)` | `(0.06, 0.06)` | `(0.53, 0.06)` | `metal` | `false` | `wdh` | Architectural element #15 |
| 16 | `box` | `(0.00, -0.25)` | `(0.72, 0.12)` | `(0.94, 0.06)` | `#1c1e22` | `true` | `h` | Architectural element #16 |
| 17 | `cyl (x)` | `(0.00, 0.05)` | `(0.86, 0.04)` | `(0.95, 0.04)` | `metal` | `glow` | `h` | Architectural element #17 |
| 18 | `cyl (z)` | `(-0.18, 0.12)` | `(0.03, 0.16)` | `(0.94, 0.03)` | `#18191d` | `false` | `wdh` | Architectural element #18 |
| 19 | `cyl (z)` | `(0.18, 0.12)` | `(0.03, 0.16)` | `(0.94, 0.03)` | `#18191d` | `false` | `wdh` | Architectural element #19 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: -0.40, z: -0.25, w: 0.22, d: 0.32)
2. `rect` $(x: 0.40, z: -0.25, w: 0.22, d: 0.32)
3. `rect` $(x: -0.40, z: 0.00, w: 0.12, d: 0.88)
4. `rect` $(x: 0.40, z: 0.00, w: 0.12, d: 0.88)
5. `line` $(x_1: -0.40, z_1: 0.05, x_2: 0.40, z_2: 0.05)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
