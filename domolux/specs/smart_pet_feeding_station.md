# Domolux Specification: Domolux Intelligent Pet Dining Station

## 1. Overview
- **Item ID:** `smart_pet_feeding_station`
- **Pack ID:** `domolux.smart_pet_feeding_station`
- **Collection:** Domolux Private Collection 30 — Exclusive Pet Lifestyle
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/smart_pet_feeding_station.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `pets`
- **Target Rooms:** `kitchen`, `utility`
- **Tags:** `pet`, `feeder`, `dining`, `smart`, `walnut`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 0.75 m (75 cm)
- **Depth ($D$):** 0.42 m (42 cm)
- **Height ($H$):** 0.65 m (65 cm)
- **Component Count:** 12 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 0.65 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [0.75, 0.42, 0.65]$.

---

## 4. Component Breakdown & Geometry Table (12 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.92, 0.88)` | `(0.00, 0.06)` | `#18191d` | `faint` | `h` | Architectural element #1 |
| 2 | `box` | `(0.00, -0.20)` | `(0.92, 0.50)` | `(0.06, 0.88)` | `#36261b` | `true` | `—` | Architectural element #2 |
| 3 | `loft` | `(0.00, -0.20)` | `(0.88, 0.46)` | `(0.94, 0.06)` | `glass` | `glow` | `h` | Architectural element #3 |
| 4 | `cyl (x)` | `(0.00, -0.42)` | `(0.84, 0.03)` | `(0.95, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #4 |
| 5 | `box` | `(0.00, 0.22)` | `(0.92, 0.45)` | `(0.06, 0.22)` | `#8c6747` | `glow` | `—` | Architectural element #5 |
| 6 | `cyl` | `(-0.24, 0.22)` | `(0.36, 0.36)` | `(0.26, 0.08)` | `#18191d` | `false` | `wdh` | Architectural element #6 |
| 7 | `cyl` | `(-0.24, 0.22)` | `(0.34, 0.34)` | `(0.27, 0.07)` | `white` | `true` | `wdh` | Architectural element #7 |
| 8 | `cyl` | `(0.24, 0.22)` | `(0.36, 0.36)` | `(0.26, 0.08)` | `#18191d` | `false` | `wdh` | Architectural element #8 |
| 9 | `cyl` | `(0.24, 0.22)` | `(0.34, 0.34)` | `(0.27, 0.07)` | `white` | `true` | `wdh` | Architectural element #9 |
| 10 | `cyl` | `(0.24, 0.22)` | `(0.30, 0.30)` | `(0.31, 0.01)` | `#1d637d` | `false` | `wdh` | Architectural element #10 |
| 11 | `box` | `(-0.24, 0.03)` | `(0.16, 0.08)` | `(0.36, 0.12)` | `metal` | `faint` | `wdh` | Architectural element #11 |
| 12 | `box` | `(0.00, 0.03)` | `(0.24, 0.02)` | `(0.65, 0.08)` | `accent` | `false` | `wdh` | Architectural element #12 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.92, d: 0.88)
2. `rect` $(x: 0.00, z: -0.20, w: 0.92, d: 0.50) (filled)
3. `circle` $(x: -0.24, z: 0.22, r: 0.17)$
4. `circle` $(x: 0.24, z: 0.22, r: 0.17)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
