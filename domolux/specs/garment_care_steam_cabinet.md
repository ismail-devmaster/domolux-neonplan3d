# Domolux Specification: Domolux Garment-Care Steam Cabinet

## 1. Overview
- **Item ID:** `garment_care_steam_cabinet`
- **Pack ID:** `domolux.garment_care_steam_cabinet`
- **Collection:** Domolux Private Collection 30 — Private Dressing, Storage & Personal Care
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/garment_care_steam_cabinet.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `appliance`
- **Target Rooms:** `bedroom`, `utility`
- **Tags:** `steam`, `closet`, `garment`, `care`, `appliance`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 0.65 m (65 cm)
- **Depth ($D$):** 0.68 m (68 cm)
- **Height ($H$):** 1.95 m (195 cm)
- **Component Count:** 13 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 1.95 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [0.65, 0.68, 1.95]$.

---

## 4. Component Breakdown & Geometry Table (13 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.04)` | `(0.94, 0.88)` | `(0.00, 0.98)` | `#23272e` | `true` | `—` | Architectural element #1 |
| 2 | `box` | `(0.00, 0.42)` | `(0.92, 0.04)` | `(0.02, 0.96)` | `glass` | `glow` | `—` | Architectural element #2 |
| 3 | `box` | `(-0.40, 0.46)` | `(0.03, 0.03)` | `(0.25, 0.55)` | `#8c6747` | `faint` | `wdh` | Architectural element #3 |
| 4 | `box` | `(-0.40, 0.44)` | `(0.03, 0.02)` | `(0.78, 0.02)` | `#c5a059` | `false` | `wdh` | Architectural element #4 |
| 5 | `box` | `(-0.40, 0.44)` | `(0.03, 0.02)` | `(0.25, 0.02)` | `#c5a059` | `false` | `wdh` | Architectural element #5 |
| 6 | `box` | `(0.00, 0.43)` | `(0.60, 0.01)` | `(0.88, 0.08)` | `#0e1014` | `false` | `wdh` | Architectural element #6 |
| 7 | `cyl (x)` | `(0.00, -0.04)` | `(0.76, 0.03)` | `(0.82, 0.03)` | `metal` | `false` | `wdh` | Architectural element #7 |
| 8 | `loft` | `(-0.22, -0.04)` | `(0.16, 0.04)` | `(0.74, 0.08)` | `#8c6747` | `false` | `wdh` | Architectural element #8 |
| 9 | `loft` | `(0.00, -0.04)` | `(0.16, 0.04)` | `(0.74, 0.08)` | `#8c6747` | `false` | `wdh` | Architectural element #9 |
| 10 | `loft` | `(0.22, -0.04)` | `(0.16, 0.04)` | `(0.74, 0.08)` | `#8c6747` | `false` | `wdh` | Architectural element #10 |
| 11 | `box` | `(0.38, 0.00)` | `(0.04, 0.60)` | `(0.20, 0.55)` | `#1c1e22` | `faint` | `—` | Architectural element #11 |
| 12 | `box` | `(0.00, -0.04)` | `(0.84, 0.74)` | `(0.04, 0.12)` | `#18191d` | `faint` | `—` | Architectural element #12 |
| 13 | `box` | `(0.00, 0.00)` | `(0.50, 0.30)` | `(0.16, 0.01)` | `metal` | `glow` | `wdh` | Architectural element #13 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: -0.04, w: 0.94, d: 0.88)
2. `line` $(x_1: -0.46, z_1: 0.42, x_2: 0.46, z_2: 0.42)$
3. `line` $(x_1: -0.40, z_1: 0.46, x_2: -0.40, z_2: 0.42)$
4. `circle` $(x: 0.00, z: 0.00, r: 0.14)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
