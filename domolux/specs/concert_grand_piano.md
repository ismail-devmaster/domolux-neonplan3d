# Domolux Specification: Domolux Concert Grand Piano

## 1. Overview
- **Item ID:** `concert_grand_piano`
- **Pack ID:** `domolux.concert_grand_piano`
- **Collection:** Domolux Private Collection 30 — Private Entertainment & Exclusive Residence
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/concert_grand_piano.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `media`
- **Target Rooms:** `living`
- **Tags:** `piano`, `music`, `grand`, `instrument`, `luxury`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 1.55 m (155 cm)
- **Depth ($D$):** 2.25 m (225 cm)
- **Height ($H$):** 1.05 m (105 cm)
- **Component Count:** 30 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 6 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 1.05 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [1.55, 2.25, 1.05]$.

---

## 4. Component Breakdown & Geometry Table (30 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.42, -0.15)` | `(0.12, 0.68)` | `(0.42, 0.32)` | `#111215` | `true` | `—` | Architectural element #1 |
| 2 | `box` | `(0.00, 0.22)` | `(0.96, 0.16)` | `(0.38, 0.36)` | `#111215` | `true` | `—` | Architectural element #2 |
| 3 | `box` | `(-0.08, -0.15)` | `(0.72, 0.64)` | `(0.42, 0.06)` | `#111215` | `faint` | `—` | Architectural element #3 |
| 4 | `loft` | `(0.18, -0.05)` | `(0.45, 0.50)` | `(0.42, 0.32)` | `#111215` | `true` | `—` | Architectural element #4 |
| 5 | `cyl` | `(-0.15, -0.42)` | `(0.38, 0.16)` | `(0.42, 0.32)` | `#111215` | `true` | `—` | Architectural element #5 |
| 6 | `box` | `(-0.10, -0.15)` | `(0.65, 0.60)` | `(0.48, 0.02)` | `#d2ab7a` | `faint` | `—` | Architectural element #6 |
| 7 | `box` | `(-0.12, -0.16)` | `(0.58, 0.54)` | `(0.50, 0.04)` | `#c89e4b` | `glow` | `—` | Architectural element #7 |
| 8 | `box` | `(-0.18, -0.15)` | `(0.04, 0.55)` | `(0.54, 0.03)` | `#c89e4b` | `false` | `—` | Architectural element #8 |
| 9 | `box` | `(0.05, -0.18)` | `(0.04, 0.45)` | `(0.54, 0.03)` | `#c89e4b` | `false` | `—` | Architectural element #9 |
| 10 | `loft` | `(-0.02, -0.15)` | `(0.85, 0.68)` | `(0.74, 0.24)` | `#111215` | `true` | `—` | Architectural element #10 |
| 11 | `cyl` | `(0.22, -0.05)` | `(0.02, 0.02)` | `(0.52, 0.36)` | `#c5a059` | `false` | `—` | Architectural element #11 |
| 12 | `box` | `(0.00, 0.26)` | `(0.84, 0.09)` | `(0.42, 0.04)` | `white` | `true` | `wdh` | Architectural element #12 |
| 13 | `box` | `(0.00, 0.25)` | `(0.80, 0.05)` | `(0.46, 0.02)` | `dark` | `faint` | `wdh` | Architectural element #13 |
| 14 | `loft` | `(0.00, 0.12)` | `(0.60, 0.04)` | `(0.74, 0.16)` | `#111215` | `true` | `—` | Architectural element #14 |
| 15 | `box` | `(0.00, 0.14)` | `(0.62, 0.02)` | `(0.73, 0.02)` | `#c5a059` | `false` | `wdh` | Architectural element #15 |
| 16 | `cyl` | `(-0.42, 0.20)` | `(0.10, 0.10)` | `(0.00, 0.42)` | `#111215` | `faint` | `wd` | Architectural element #16 |
| 17 | `cyl` | `(-0.42, 0.20)` | `(0.06, 0.06)` | `(0.00, 0.05)` | `#c5a059` | `false` | `wdh` | Architectural element #17 |
| 18 | `cyl` | `(0.42, 0.20)` | `(0.10, 0.10)` | `(0.00, 0.42)` | `#111215` | `faint` | `wd` | Architectural element #18 |
| 19 | `cyl` | `(0.42, 0.20)` | `(0.06, 0.06)` | `(0.00, 0.05)` | `#c5a059` | `false` | `wdh` | Architectural element #19 |
| 20 | `cyl` | `(-0.15, -0.42)` | `(0.10, 0.10)` | `(0.00, 0.42)` | `#111215` | `faint` | `wd` | Architectural element #20 |
| 21 | `cyl` | `(-0.15, -0.42)` | `(0.06, 0.06)` | `(0.00, 0.05)` | `#c5a059` | `false` | `wdh` | Architectural element #21 |
| 22 | `box` | `(0.00, 0.05)` | `(0.14, 0.04)` | `(0.10, 0.32)` | `#111215` | `false` | `—` | Architectural element #22 |
| 23 | `box` | `(0.00, 0.05)` | `(0.18, 0.08)` | `(0.06, 0.04)` | `#c5a059` | `false` | `—` | Architectural element #23 |
| 24 | `box` | `(0.00, 0.09)` | `(0.12, 0.06)` | `(0.07, 0.02)` | `#c5a059` | `false` | `—` | Architectural element #24 |
| 25 | `box` | `(0.00, 0.42)` | `(0.55, 0.14)` | `(0.20, 0.08)` | `#18191d` | `true` | `wdh` | Architectural element #25 |
| 26 | `box` | `(0.00, 0.42)` | `(0.53, 0.12)` | `(0.16, 0.04)` | `#111215` | `false` | `wdh` | Architectural element #26 |
| 27 | `box` | `(-0.22, 0.38)` | `(0.04, 0.04)` | `(0.00, 0.16)` | `#111215` | `false` | `wdh` | Architectural element #27 |
| 28 | `box` | `(0.22, 0.38)` | `(0.04, 0.04)` | `(0.00, 0.16)` | `#111215` | `false` | `wdh` | Architectural element #28 |
| 29 | `box` | `(-0.22, 0.46)` | `(0.04, 0.04)` | `(0.00, 0.16)` | `#111215` | `false` | `wdh` | Architectural element #29 |
| 30 | `box` | `(0.22, 0.46)` | `(0.04, 0.04)` | `(0.00, 0.16)` | `#111215` | `false` | `wdh` | Architectural element #30 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.22, w: 0.96, d: 0.16)
2. `rect` $(x: 0.00, z: 0.26, w: 0.84, d: 0.09) (filled)
3. `line` $(x_1: -0.48, z_1: 0.22, x_2: -0.48, z_2: -0.40)$
4. `circle` $(x: -0.15, z: -0.42, r: 0.15)$
5. `line` $(x_1: -0.15, z_1: -0.42, x_2: 0.48, z_2: 0.15)$
6. `rect` $(x: 0.00, z: 0.42, w: 0.55, d: 0.14)

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
