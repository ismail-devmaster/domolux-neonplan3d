# Domolux Specification: Domolux Bespoke Shoe-Care Station

## 1. Overview
- **Item ID:** `shoe_care_station`
- **Pack ID:** `domolux.shoe_care_station`
- **Collection:** Domolux Private Collection 30 — Private Dressing, Storage & Personal Care
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/shoe_care_station.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `storage`
- **Target Rooms:** `hall`, `bedroom`
- **Tags:** `shoes`, `care`, `bench`, `polishing`, `leather`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 1.35 m (135 cm)
- **Depth ($D$):** 0.52 m (52 cm)
- **Height ($H$):** 1.15 m (115 cm)
- **Component Count:** 12 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 5 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 1.15 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [1.35, 0.52, 1.15]$.

---

## 4. Component Breakdown & Geometry Table (12 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.22, 0.00)` | `(0.50, 0.90)` | `(0.00, 0.96)` | `#2d241e` | `true` | `—` | Architectural element #1 |
| 2 | `box` | `(-0.22, 0.00)` | `(0.52, 0.92)` | `(0.96, 0.04)` | `#d8cfc4` | `true` | `h` | Architectural element #2 |
| 3 | `box` | `(-0.22, 0.46)` | `(0.46, 0.02)` | `(0.80, 0.14)` | `#2d241e` | `true` | `—` | Architectural element #3 |
| 4 | `box` | `(-0.22, 0.47)` | `(0.18, 0.01)` | `(0.86, 0.01)` | `#c5a059` | `false` | `wdh` | Architectural element #4 |
| 5 | `box` | `(-0.22, 0.10)` | `(0.44, 0.70)` | `(0.12, 0.58)` | `#18191d` | `faint` | `—` | Architectural element #5 |
| 6 | `cyl (x)` | `(-0.32, 0.15)` | `(0.14, 0.14)` | `(0.22, 0.22)` | `#363840` | `false` | `wdh` | Architectural element #6 |
| 7 | `cyl (x)` | `(-0.12, 0.15)` | `(0.14, 0.14)` | `(0.22, 0.22)` | `#614838` | `false` | `wdh` | Architectural element #7 |
| 8 | `cyl` | `(-0.22, 0.38)` | `(0.06, 0.06)` | `(0.08, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #8 |
| 9 | `box` | `(0.28, 0.00)` | `(0.44, 0.88)` | `(0.00, 0.38)` | `#2d241e` | `true` | `—` | Architectural element #9 |
| 10 | `box` | `(0.28, 0.00)` | `(0.44, 0.88)` | `(0.38, 0.08)` | `#6b4028` | `true` | `h` | Architectural element #10 |
| 11 | `box` | `(0.28, 0.00)` | `(0.42, 0.82)` | `(0.10, 0.03)` | `#8c6747` | `faint` | `—` | Architectural element #11 |
| 12 | `box` | `(0.28, 0.42)` | `(0.42, 0.02)` | `(0.13, 0.04)` | `#c5a059` | `false` | `wdh` | Architectural element #12 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: -0.22, z: 0.00, w: 0.52, d: 0.92)
2. `rect` $(x: 0.28, z: 0.00, w: 0.44, d: 0.88)
3. `circle` $(x: -0.32, z: 0.15, r: 0.07)$
4. `circle` $(x: -0.12, z: 0.15, r: 0.07)$
5. `line` $(x_1: 0.06, z_1: 0.42, x_2: 0.49, z_2: 0.42)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
