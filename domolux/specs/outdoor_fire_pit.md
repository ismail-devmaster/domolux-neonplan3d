# Domolux Specification: Domolux Sculptural Outdoor Fire Pit

## 1. Overview
- **Item ID:** `outdoor_fire_pit`
- **Pack ID:** `domolux.outdoor_fire_pit`
- **Collection:** Domolux Private Collection 30 — Private Estate & Outdoor Living
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/outdoor_fire_pit.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `outdoor`
- **Target Rooms:** `garden`
- **Tags:** `firepit`, `terrace`, `outdoor`, `travertine`, `flame`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 1.25 m (125 cm)
- **Depth ($D$):** 1.25 m (125 cm)
- **Height ($H$):** 0.42 m (42 cm)
- **Component Count:** 13 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 0.42 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [1.25, 1.25, 0.42]$.

---

## 4. Component Breakdown & Geometry Table (13 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.90, 0.90)` | `(0.00, 0.08)` | `#18191d` | `faint` | `h` | Architectural element #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.08, 0.58)` | `#d8cfc4` | `true` | `h` | Architectural element #2 |
| 3 | `cyl` | `(0.00, 0.00)` | `(0.62, 0.62)` | `(0.54, 0.14)` | `#18191d` | `false` | `wdh` | Architectural element #3 |
| 4 | `cyl` | `(0.00, 0.00)` | `(0.58, 0.58)` | `(0.55, 0.04)` | `metal` | `false` | `wdh` | Architectural element #4 |
| 5 | `cyl` | `(0.00, 0.00)` | `(0.54, 0.54)` | `(0.58, 0.06)` | `#252528` | `faint` | `wdh` | Architectural element #5 |
| 6 | `cyl` | `(0.00, 0.00)` | `(0.36, 0.36)` | `(0.64, 0.02)` | `metal` | `false` | `wdh` | Architectural element #6 |
| 7 | `loft` | `(0.00, 0.00)` | `(0.28, 0.28)` | `(0.66, 0.24)` | `#e67e22` | `false` | `wdh` | Architectural element #7 |
| 8 | `loft` | `(0.00, 0.00)` | `(0.16, 0.16)` | `(0.74, 0.18)` | `#f39c12` | `false` | `wdh` | Architectural element #8 |
| 9 | `cyl` | `(0.00, 0.00)` | `(0.62, 0.62)` | `(0.66, 0.32)` | `glass` | `glow` | `wdh` | Architectural element #9 |
| 10 | `box` | `(-0.30, 0.00)` | `(0.03, 0.03)` | `(0.66, 0.04)` | `metal` | `false` | `wdh` | Architectural element #10 |
| 11 | `box` | `(0.30, 0.00)` | `(0.03, 0.03)` | `(0.66, 0.04)` | `metal` | `false` | `wdh` | Architectural element #11 |
| 12 | `box` | `(0.00, -0.30)` | `(0.03, 0.03)` | `(0.66, 0.04)` | `metal` | `false` | `wdh` | Architectural element #12 |
| 13 | `box` | `(0.00, 0.30)` | `(0.03, 0.03)` | `(0.66, 0.04)` | `metal` | `false` | `wdh` | Architectural element #13 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.98)
2. `circle` $(x: 0.00, z: 0.00, r: 0.31)$
3. `circle` $(x: 0.00, z: 0.00, r: 0.27)$
4. `circle` $(x: 0.00, z: 0.00, r: 0.18)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
