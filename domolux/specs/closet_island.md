# Domolux Specification: Domolux Walk-In Closet Island

## 1. Overview
- **Item ID:** `closet_island`
- **Pack ID:** `domolux.closet_island`
- **Collection:** Domolux Private Collection 30 — Private Dressing, Storage & Personal Care
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/closet_island.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `storage`
- **Target Rooms:** `bedroom`
- **Tags:** `closet`, `island`, `wardrobe`, `jewelry`, `storage`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 1.80 m (180 cm)
- **Depth ($D$):** 1.10 m (110 cm)
- **Height ($H$):** 0.95 m (95 cm)
- **Component Count:** 25 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 0.95 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [1.80, 1.10, 0.95]$.

---

## 4. Component Breakdown & Geometry Table (25 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.92, 0.88)` | `(0.00, 0.06)` | `#18191d` | `faint` | `h` | Architectural element #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.90, 0.86)` | `(0.01, 0.02)` | `#fff0db` | `false` | `h` | Architectural element #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.96, 0.92)` | `(0.06, 0.76)` | `#2d241e` | `true` | `—` | Architectural element #3 |
| 4 | `box` | `(-0.24, 0.47)` | `(0.44, 0.02)` | `(0.58, 0.20)` | `#2d241e` | `true` | `—` | Architectural element #4 |
| 5 | `box` | `(0.24, 0.47)` | `(0.44, 0.02)` | `(0.58, 0.20)` | `#2d241e` | `true` | `—` | Architectural element #5 |
| 6 | `box` | `(-0.24, 0.47)` | `(0.44, 0.02)` | `(0.34, 0.22)` | `#2d241e` | `true` | `—` | Architectural element #6 |
| 7 | `box` | `(0.24, 0.47)` | `(0.44, 0.02)` | `(0.34, 0.22)` | `#2d241e` | `true` | `—` | Architectural element #7 |
| 8 | `box` | `(-0.24, 0.47)` | `(0.44, 0.02)` | `(0.08, 0.24)` | `#2d241e` | `true` | `—` | Architectural element #8 |
| 9 | `box` | `(0.24, 0.47)` | `(0.44, 0.02)` | `(0.08, 0.24)` | `#2d241e` | `true` | `—` | Architectural element #9 |
| 10 | `box` | `(-0.24, 0.47)` | `(0.18, 0.01)` | `(0.75, 0.01)` | `#c5a059` | `false` | `wdh` | Architectural element #10 |
| 11 | `box` | `(0.24, 0.47)` | `(0.18, 0.01)` | `(0.75, 0.01)` | `#c5a059` | `false` | `wdh` | Architectural element #11 |
| 12 | `box` | `(-0.24, 0.47)` | `(0.18, 0.01)` | `(0.53, 0.01)` | `#c5a059` | `false` | `wdh` | Architectural element #12 |
| 13 | `box` | `(0.24, 0.47)` | `(0.18, 0.01)` | `(0.53, 0.01)` | `#c5a059` | `false` | `wdh` | Architectural element #13 |
| 14 | `box` | `(-0.24, 0.47)` | `(0.18, 0.01)` | `(0.29, 0.01)` | `#c5a059` | `false` | `wdh` | Architectural element #14 |
| 15 | `box` | `(0.24, 0.47)` | `(0.18, 0.01)` | `(0.29, 0.01)` | `#c5a059` | `false` | `wdh` | Architectural element #15 |
| 16 | `box` | `(0.00, -0.47)` | `(0.92, 0.02)` | `(0.08, 0.70)` | `#2d241e` | `true` | `—` | Architectural element #16 |
| 17 | `box` | `(0.00, 0.00)` | `(0.88, 0.84)` | `(0.82, 0.06)` | `#1e3d2f` | `faint` | `—` | Architectural element #17 |
| 18 | `box` | `(-0.15, 0.00)` | `(0.01, 0.80)` | `(0.83, 0.04)` | `#c5a059` | `false` | `wdh` | Architectural element #18 |
| 19 | `box` | `(0.15, 0.00)` | `(0.01, 0.80)` | `(0.83, 0.04)` | `#c5a059` | `false` | `wdh` | Architectural element #19 |
| 20 | `box` | `(-0.30, -0.20)` | `(0.12, 0.16)` | `(0.84, 0.03)` | `#dedbd2` | `false` | `wdh` | Architectural element #20 |
| 21 | `box` | `(-0.30, 0.20)` | `(0.12, 0.16)` | `(0.84, 0.03)` | `#dedbd2` | `false` | `wdh` | Architectural element #21 |
| 22 | `box` | `(0.30, -0.20)` | `(0.12, 0.16)` | `(0.84, 0.03)` | `#dedbd2` | `false` | `wdh` | Architectural element #22 |
| 23 | `box` | `(0.30, 0.20)` | `(0.12, 0.16)` | `(0.84, 0.03)` | `#dedbd2` | `false` | `wdh` | Architectural element #23 |
| 24 | `box` | `(0.00, 0.00)` | `(0.98, 0.94)` | `(0.88, 0.04)` | `#c5a059` | `glow` | `h` | Architectural element #24 |
| 25 | `box` | `(0.00, 0.00)` | `(0.90, 0.86)` | `(0.92, 0.01)` | `glass` | `faint` | `h` | Architectural element #25 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.94)
2. `rect` $(x: 0.00, z: 0.00, w: 0.90, d: 0.86) (filled)
3. `line` $(x_1: -0.44, z_1: 0.00, x_2: 0.44, z_2: 0.00)$
4. `line` $(x_1: 0.00, z_1: -0.42, x_2: 0.00, z_2: 0.42)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
