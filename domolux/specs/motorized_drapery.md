# Domolux Specification: Domolux Motorized Architectural Drapery

## 1. Overview
- **Item ID:** `motorized_drapery`
- **Pack ID:** `domolux.motorized_drapery`
- **Collection:** Domolux Private Collection 30 — Private Dressing, Storage & Personal Care
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/motorized_drapery.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `ceiling` (Mount Height $Y$: 2.8 m)
- **Group:** `deco`
- **Target Rooms:** `living`, `bedroom`
- **Tags:** `curtain`, `drapery`, `motorized`, `linen`, `blackout`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 2.80 m (280 cm)
- **Depth ($D$):** 0.32 m (32 cm)
- **Height ($H$):** 2.80 m (280 cm)
- **Component Count:** 19 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 2.80 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [2.80, 0.32, 2.80]$.

---

## 4. Component Breakdown & Geometry Table (19 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 0.85)` | `(0.96, 0.04)` | `#8c6747` | `true` | `h` | Architectural element #1 |
| 2 | `box` | `(-0.46, 0.10)` | `(0.06, 0.60)` | `(0.88, 0.08)` | `#18191d` | `faint` | `wdh` | Architectural element #2 |
| 3 | `box` | `(-0.49, 0.00)` | `(0.01, 0.85)` | `(0.96, 0.04)` | `#c5a059` | `false` | `wdh` | Architectural element #3 |
| 4 | `box` | `(0.49, 0.00)` | `(0.01, 0.85)` | `(0.96, 0.04)` | `#c5a059` | `false` | `wdh` | Architectural element #4 |
| 5 | `box` | `(0.00, -0.22)` | `(0.96, 0.04)` | `(0.01, 0.95)` | `#eceae5` | `faint` | `—` | Architectural element #5 |
| 6 | `loft` | `(-0.42, 0.16)` | `(0.08, 0.22)` | `(0.01, 0.95)` | `#d6d0c6` | `faint` | `—` | Architectural element #6 |
| 7 | `loft` | `(-0.34, 0.06)` | `(0.08, 0.22)` | `(0.01, 0.95)` | `#cdc6ba` | `faint` | `—` | Architectural element #7 |
| 8 | `loft` | `(-0.26, 0.16)` | `(0.08, 0.22)` | `(0.01, 0.95)` | `#d6d0c6` | `faint` | `—` | Architectural element #8 |
| 9 | `loft` | `(-0.18, 0.06)` | `(0.08, 0.22)` | `(0.01, 0.95)` | `#cdc6ba` | `faint` | `—` | Architectural element #9 |
| 10 | `loft` | `(-0.10, 0.16)` | `(0.08, 0.22)` | `(0.01, 0.95)` | `#d6d0c6` | `faint` | `—` | Architectural element #10 |
| 11 | `loft` | `(-0.02, 0.06)` | `(0.08, 0.22)` | `(0.01, 0.95)` | `#cdc6ba` | `faint` | `—` | Architectural element #11 |
| 12 | `loft` | `(0.06, 0.16)` | `(0.08, 0.22)` | `(0.01, 0.95)` | `#d6d0c6` | `faint` | `—` | Architectural element #12 |
| 13 | `loft` | `(0.14, 0.06)` | `(0.08, 0.22)` | `(0.01, 0.95)` | `#cdc6ba` | `faint` | `—` | Architectural element #13 |
| 14 | `loft` | `(0.22, 0.16)` | `(0.08, 0.22)` | `(0.01, 0.95)` | `#d6d0c6` | `faint` | `—` | Architectural element #14 |
| 15 | `loft` | `(0.30, 0.06)` | `(0.08, 0.22)` | `(0.01, 0.95)` | `#cdc6ba` | `faint` | `—` | Architectural element #15 |
| 16 | `loft` | `(0.38, 0.16)` | `(0.08, 0.22)` | `(0.01, 0.95)` | `#d6d0c6` | `faint` | `—` | Architectural element #16 |
| 17 | `loft` | `(0.45, 0.06)` | `(0.08, 0.22)` | `(0.01, 0.95)` | `#cdc6ba` | `faint` | `—` | Architectural element #17 |
| 18 | `box` | `(0.00, 0.12)` | `(0.96, 0.24)` | `(0.00, 0.01)` | `#8c6747` | `faint` | `h` | Architectural element #18 |
| 19 | `cyl` | `(0.44, 0.22)` | `(0.01, 0.01)` | `(0.40, 0.45)` | `#c5a059` | `false` | `wdh` | Architectural element #19 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.85)
2. `line` $(x_1: -0.48, z_1: -0.22, x_2: 0.48, z_2: -0.22)$
3. `line` $(x_1: -0.48, z_1: 0.12, x_2: 0.48, z_2: 0.12)$
4. `circle` $(x: -0.46, z: 0.10, r: 0.08)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
