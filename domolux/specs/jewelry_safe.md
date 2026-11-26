# Domolux Specification: Domolux Armored Jewelry Safe

## 1. Overview
- **Item ID:** `jewelry_safe`
- **Pack ID:** `domolux.jewelry_safe`
- **Collection:** Domolux Private Collection 30 — Private Dressing, Storage & Personal Care
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/jewelry_safe.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `storage`
- **Target Rooms:** `bedroom`, `office`
- **Tags:** `safe`, `security`, `jewelry`, `watches`, `armored`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 0.65 m (65 cm)
- **Depth ($D$):** 0.60 m (60 cm)
- **Height ($H$):** 1.25 m (125 cm)
- **Component Count:** 14 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 1.25 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [0.65, 0.60, 1.25]$.

---

## 4. Component Breakdown & Geometry Table (14 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.05)` | `(0.92, 0.86)` | `(0.00, 0.96)` | `#1c1e22` | `true` | `—` | Architectural element #1 |
| 2 | `box` | `(0.00, 0.40)` | `(0.84, 0.08)` | `(0.04, 0.88)` | `#23262c` | `glow` | `—` | Architectural element #2 |
| 3 | `cyl` | `(0.41, 0.40)` | `(0.06, 0.06)` | `(0.72, 0.12)` | `#8c6747` | `false` | `wdh` | Architectural element #3 |
| 4 | `cyl` | `(0.41, 0.40)` | `(0.06, 0.06)` | `(0.16, 0.12)` | `#8c6747` | `false` | `wdh` | Architectural element #4 |
| 5 | `cyl (z)` | `(0.00, 0.45)` | `(0.16, 0.16)` | `(0.44, 0.04)` | `#c5a059` | `false` | `wdh` | Architectural element #5 |
| 6 | `box` | `(0.00, 0.47)` | `(0.32, 0.03)` | `(0.45, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #6 |
| 7 | `box` | `(0.00, 0.47)` | `(0.32, 0.03)` | `(0.45, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #7 |
| 8 | `box` | `(0.00, 0.47)` | `(0.32, 0.03)` | `(0.45, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #8 |
| 9 | `cyl` | `(0.15, 0.48)` | `(0.04, 0.04)` | `(0.44, 0.04)` | `metal` | `false` | `wdh` | Architectural element #9 |
| 10 | `cyl` | `(-0.07, 0.48)` | `(0.04, 0.04)` | `(0.57, 0.04)` | `metal` | `false` | `wdh` | Architectural element #10 |
| 11 | `cyl` | `(-0.07, 0.48)` | `(0.04, 0.04)` | `(0.31, 0.04)` | `metal` | `false` | `wdh` | Architectural element #11 |
| 12 | `box` | `(0.00, 0.45)` | `(0.22, 0.03)` | `(0.68, 0.14)` | `#111215` | `glow` | `wdh` | Architectural element #12 |
| 13 | `box` | `(0.00, 0.47)` | `(0.12, 0.01)` | `(0.74, 0.04)` | `accent` | `false` | `wdh` | Architectural element #13 |
| 14 | `box` | `(0.00, -0.05)` | `(0.94, 0.88)` | `(0.96, 0.04)` | `#8c6747` | `true` | `h` | Architectural element #14 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: -0.05, w: 0.92, d: 0.86)
2. `rect` $(x: 0.00, z: 0.40, w: 0.84, d: 0.08) (filled)
3. `circle` $(x: 0.00, z: 0.45, r: 0.16)$
4. `circle` $(x: 0.41, z: 0.40, r: 0.04)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
