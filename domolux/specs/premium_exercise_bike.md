# Domolux Specification: Domolux Performance Indoor Cycle

## 1. Overview
- **Item ID:** `premium_exercise_bike`
- **Pack ID:** `domolux.premium_exercise_bike`
- **Collection:** Domolux Private Collection 30 — Private Fitness & Performance Wellness
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/premium_exercise_bike.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `sport`
- **Target Rooms:** `hobby`
- **Tags:** `bike`, `cycling`, `fitness`, `indoor`, `cardio`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 0.62 m (62 cm)
- **Depth ($D$):** 1.35 m (135 cm)
- **Height ($H$):** 1.32 m (132 cm)
- **Component Count:** 19 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 5 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 1.32 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [0.62, 1.35, 1.32]$.

---

## 4. Component Breakdown & Geometry Table (19 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `cyl (x)` | `(0.00, 0.42)` | `(0.88, 0.08)` | `(0.00, 0.08)` | `#1c1e22` | `faint` | `wdh` | Architectural element #1 |
| 2 | `cyl (x)` | `(0.00, -0.42)` | `(0.88, 0.08)` | `(0.00, 0.08)` | `#1c1e22` | `faint` | `wdh` | Architectural element #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.12, 0.84)` | `(0.04, 0.08)` | `#182236` | `true` | `—` | Architectural element #3 |
| 4 | `cyl (x)` | `(0.00, 0.28)` | `(0.10, 0.36)` | `(0.16, 0.36)` | `#8c6747` | `glow` | `wdh` | Architectural element #4 |
| 5 | `cyl (x)` | `(0.00, 0.28)` | `(0.11, 0.38)` | `(0.17, 0.34)` | `metal` | `false` | `wdh` | Architectural element #5 |
| 6 | `loft` | `(0.00, 0.16)` | `(0.14, 0.16)` | `(0.12, 0.65)` | `#182236` | `true` | `—` | Architectural element #6 |
| 7 | `loft` | `(0.00, -0.12)` | `(0.14, 0.16)` | `(0.12, 0.58)` | `#182236` | `true` | `—` | Architectural element #7 |
| 8 | `cyl (x)` | `(0.00, -0.05)` | `(0.28, 0.12)` | `(0.18, 0.12)` | `metal` | `false` | `wdh` | Architectural element #8 |
| 9 | `box` | `(-0.16, -0.05)` | `(0.03, 0.18)` | `(0.14, 0.04)` | `metal` | `false` | `wdh` | Architectural element #9 |
| 10 | `box` | `(-0.22, -0.12)` | `(0.10, 0.08)` | `(0.10, 0.03)` | `#111215` | `false` | `wdh` | Architectural element #10 |
| 11 | `box` | `(0.16, -0.05)` | `(0.03, 0.18)` | `(0.24, 0.04)` | `metal` | `false` | `wdh` | Architectural element #11 |
| 12 | `box` | `(0.22, 0.02)` | `(0.10, 0.08)` | `(0.28, 0.03)` | `#111215` | `false` | `wdh` | Architectural element #12 |
| 13 | `cyl` | `(0.00, -0.22)` | `(0.06, 0.06)` | `(0.68, 0.15)` | `metal` | `false` | `wdh` | Architectural element #13 |
| 14 | `loft` | `(0.00, -0.24)` | `(0.28, 0.32)` | `(0.83, 0.07)` | `#111215` | `true` | `wdh` | Architectural element #14 |
| 15 | `cyl` | `(0.00, 0.24)` | `(0.06, 0.06)` | `(0.75, 0.14)` | `metal` | `false` | `wdh` | Architectural element #15 |
| 16 | `cyl (x)` | `(0.00, 0.26)` | `(0.72, 0.04)` | `(0.88, 0.04)` | `#18191d` | `faint` | `h` | Architectural element #16 |
| 17 | `box` | `(-0.14, 0.28)` | `(0.10, 0.14)` | `(0.89, 0.03)` | `#111215` | `false` | `wdh` | Architectural element #17 |
| 18 | `box` | `(0.14, 0.28)` | `(0.10, 0.14)` | `(0.89, 0.03)` | `#111215` | `false` | `wdh` | Architectural element #18 |
| 19 | `box` | `(0.00, 0.32)` | `(0.38, 0.04)` | `(0.92, 0.08)` | `accent` | `false` | `wdh` | Architectural element #19 |

---

## 5. 2D Architectural Symbol Specification
1. `line` $(x_1: 0.00, z_1: -0.42, x_2: 0.00, z_2: 0.42)$
2. `line` $(x_1: -0.44, z_1: 0.42, x_2: 0.44, z_2: 0.42)$
3. `line` $(x_1: -0.44, z_1: -0.42, x_2: 0.44, z_2: -0.42)$
4. `circle` $(x: 0.00, z: 0.28, r: 0.18)$
5. `circle` $(x: 0.00, z: -0.22, r: 0.12)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
