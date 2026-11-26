# Domolux Specification: Domolux Full-Body Massage Chair

## 1. Overview
- **Item ID:** `full_body_massage_chair`
- **Pack ID:** `domolux.full_body_massage_chair`
- **Collection:** Domolux Private Collection 30 — Architectural Wellness & Private Sanctuaries
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/full_body_massage_chair.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `seating`
- **Target Rooms:** `living`, `bedroom`, `hobby`
- **Tags:** `massage`, `wellness`, `zero_gravity`, `recliner`, `relaxation`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 0.90 m (90 cm)
- **Depth ($D$):** 1.55 m (155 cm)
- **Height ($H$):** 1.25 m (125 cm)
- **Component Count:** 16 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 1.25 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [0.90, 1.55, 1.25]$.

---

## 4. Component Breakdown & Geometry Table (16 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(0.00, -0.05)` | `(0.70, 0.70)` | `(0.00, 0.05)` | `#8c6747` | `faint` | `wdh` | Architectural element #1 |
| 2 | `cyl` | `(0.00, -0.05)` | `(0.25, 0.25)` | `(0.05, 0.12)` | `#18191d` | `false` | `wdh` | Architectural element #2 |
| 3 | `loft` | `(0.00, -0.08)` | `(0.92, 0.75)` | `(0.14, 0.76)` | `#dcdde2` | `glow` | `—` | Architectural element #3 |
| 4 | `box` | `(0.00, 0.05)` | `(0.56, 0.52)` | `(0.24, 0.18)` | `#282a30` | `true` | `—` | Architectural element #4 |
| 5 | `loft` | `(0.00, -0.18)` | `(0.54, 0.22)` | `(0.40, 0.32)` | `#282a30` | `true` | `—` | Architectural element #5 |
| 6 | `loft` | `(0.00, -0.28)` | `(0.50, 0.16)` | `(0.70, 0.24)` | `#22242a` | `true` | `—` | Architectural element #6 |
| 7 | `box` | `(0.00, -0.34)` | `(0.38, 0.10)` | `(0.88, 0.10)` | `#1a1b20` | `false` | `wdh` | Architectural element #7 |
| 8 | `loft` | `(-0.36, 0.00)` | `(0.16, 0.65)` | `(0.22, 0.45)` | `#dcdde2` | `true` | `—` | Architectural element #8 |
| 9 | `box` | `(-0.34, 0.00)` | `(0.12, 0.55)` | `(0.42, 0.18)` | `#282a30` | `false` | `—` | Architectural element #9 |
| 10 | `loft` | `(0.36, 0.00)` | `(0.16, 0.65)` | `(0.22, 0.45)` | `#dcdde2` | `true` | `—` | Architectural element #10 |
| 11 | `box` | `(0.34, 0.00)` | `(0.12, 0.55)` | `(0.42, 0.18)` | `#282a30` | `false` | `—` | Architectural element #11 |
| 12 | `box` | `(0.36, 0.18)` | `(0.08, 0.12)` | `(0.58, 0.02)` | `accent` | `false` | `wdh` | Architectural element #12 |
| 13 | `box` | `(0.00, 0.42)` | `(0.52, 0.38)` | `(0.10, 0.28)` | `#dcdde2` | `true` | `wdh` | Architectural element #13 |
| 14 | `box` | `(-0.14, 0.44)` | `(0.16, 0.26)` | `(0.14, 0.20)` | `#18191d` | `false` | `wdh` | Architectural element #14 |
| 15 | `box` | `(0.14, 0.44)` | `(0.16, 0.26)` | `(0.14, 0.20)` | `#18191d` | `false` | `wdh` | Architectural element #15 |
| 16 | `box` | `(0.00, -0.05)` | `(0.94, 0.76)` | `(0.48, 0.02)` | `#c5a059` | `false` | `—` | Architectural element #16 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.92, d: 0.90)
2. `circle` $(x: 0.00, z: -0.05, r: 0.32)$
3. `rect` $(x: 0.00, z: 0.42, w: 0.52, d: 0.38)
4. `line` $(x_1: -0.28, z_1: 0.10, x_2: 0.28, z_2: 0.10)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
