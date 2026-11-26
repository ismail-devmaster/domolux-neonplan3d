# Domolux Specification: Domolux Cinema Power Recliner

## 1. Overview
- **Item ID:** `cinema_recliner`
- **Pack ID:** `domolux.cinema_recliner`
- **Collection:** Domolux Private Collection 30 — Private Entertainment & Exclusive Residence
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/cinema_recliner.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `seating`
- **Target Rooms:** `living`, `hobby`
- **Tags:** `cinema`, `recliner`, `leather`, `theater`, `seating`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 1.05 m (105 cm)
- **Depth ($D$):** 1.20 m (120 cm)
- **Height ($H$):** 1.10 m (110 cm)
- **Component Count:** 21 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 5 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 1.10 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [1.05, 1.20, 1.10]$.

---

## 4. Component Breakdown & Geometry Table (21 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(0.00, -0.05)` | `(0.65, 0.65)` | `(0.00, 0.05)` | `#8c6747` | `faint` | `wdh` | Architectural element #1 |
| 2 | `cyl` | `(0.00, -0.05)` | `(0.22, 0.22)` | `(0.05, 0.15)` | `#1c1d22` | `faint` | `wdh` | Architectural element #2 |
| 3 | `box` | `(0.00, -0.02)` | `(0.88, 0.70)` | `(0.18, 0.10)` | `#18191d` | `faint` | `—` | Architectural element #3 |
| 4 | `box` | `(0.00, 0.02)` | `(0.62, 0.58)` | `(0.28, 0.18)` | `#6b4028` | `true` | `—` | Architectural element #4 |
| 5 | `loft` | `(0.00, -0.22)` | `(0.60, 0.22)` | `(0.44, 0.24)` | `#6b4028` | `true` | `—` | Architectural element #5 |
| 6 | `loft` | `(0.00, -0.28)` | `(0.58, 0.18)` | `(0.68, 0.22)` | `#6b4028` | `true` | `—` | Architectural element #6 |
| 7 | `box` | `(0.00, -0.34)` | `(0.46, 0.14)` | `(0.90, 0.10)` | `#54321f` | `true` | `wdh` | Architectural element #7 |
| 8 | `cyl` | `(-0.15, -0.34)` | `(0.02, 0.02)` | `(0.86, 0.06)` | `#c5a059` | `false` | `wdh` | Architectural element #8 |
| 9 | `cyl` | `(0.15, -0.34)` | `(0.02, 0.02)` | `(0.86, 0.06)` | `#c5a059` | `false` | `wdh` | Architectural element #9 |
| 10 | `box` | `(-0.38, 0.02)` | `(0.18, 0.72)` | `(0.22, 0.38)` | `#18191d` | `faint` | `—` | Architectural element #10 |
| 11 | `box` | `(-0.38, 0.02)` | `(0.18, 0.72)` | `(0.60, 0.06)` | `#6b4028` | `true` | `—` | Architectural element #11 |
| 12 | `box` | `(0.38, 0.02)` | `(0.18, 0.72)` | `(0.22, 0.38)` | `#18191d` | `faint` | `—` | Architectural element #12 |
| 13 | `box` | `(0.38, 0.02)` | `(0.18, 0.72)` | `(0.60, 0.06)` | `#6b4028` | `true` | `—` | Architectural element #13 |
| 14 | `cyl` | `(-0.38, 0.25)` | `(0.09, 0.09)` | `(0.65, 0.01)` | `#c5a059` | `false` | `wdh` | Architectural element #14 |
| 15 | `cyl` | `(-0.38, 0.25)` | `(0.07, 0.07)` | `(0.62, 0.04)` | `#111215` | `false` | `wdh` | Architectural element #15 |
| 16 | `cyl` | `(0.38, 0.25)` | `(0.09, 0.09)` | `(0.65, 0.01)` | `#c5a059` | `false` | `wdh` | Architectural element #16 |
| 17 | `cyl` | `(0.38, 0.25)` | `(0.07, 0.07)` | `(0.62, 0.04)` | `#111215` | `false` | `wdh` | Architectural element #17 |
| 18 | `box` | `(0.28, 0.10)` | `(0.01, 0.10)` | `(0.52, 0.04)` | `#c5a059` | `false` | `wdh` | Architectural element #18 |
| 19 | `box` | `(0.00, 0.35)` | `(0.58, 0.14)` | `(0.22, 0.16)` | `#6b4028` | `true` | `—` | Architectural element #19 |
| 20 | `box` | `(0.00, 0.44)` | `(0.54, 0.10)` | `(0.16, 0.08)` | `#54321f` | `true` | `wdh` | Architectural element #20 |
| 21 | `loft` | `(0.00, -0.35)` | `(0.64, 0.12)` | `(0.38, 0.58)` | `#18191d` | `faint` | `—` | Architectural element #21 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.94, d: 0.92)
2. `circle` $(x: 0.00, z: -0.05, r: 0.30)$
3. `circle` $(x: -0.38, z: 0.25, r: 0.04)$
4. `circle` $(x: 0.38, z: 0.25, r: 0.04)$
5. `line` $(x_1: -0.28, z_1: 0.30, x_2: 0.28, z_2: 0.30)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
