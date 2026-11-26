# Domolux Specification: Domolux Sculptural Room Divider

## 1. Overview
- **Item ID:** `sculptural_room_divider`
- **Pack ID:** `domolux.sculptural_room_divider`
- **Collection:** Domolux Private Collection 30 — Architectural Wellness & Private Sanctuaries
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/sculptural_room_divider.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `deco`
- **Target Rooms:** `living`, `bedroom`, `hall`
- **Tags:** `divider`, `screen`, `partition`, `travertine`, `oak`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 2.20 m (220 cm)
- **Depth ($D$):** 0.35 m (35 cm)
- **Height ($H$):** 2.10 m (210 cm)
- **Component Count:** 16 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 2.10 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [2.20, 0.35, 2.10]$.

---

## 4. Component Breakdown & Geometry Table (16 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.96, 0.90)` | `(0.00, 0.05)` | `#d8cfc4` | `true` | `h` | Architectural element #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.92, 0.30)` | `(0.05, 0.02)` | `#c5a059` | `false` | `wdh` | Architectural element #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.92, 0.25)` | `(0.96, 0.04)` | `#8c6747` | `true` | `h` | Architectural element #3 |
| 4 | `cyl` | `(-0.44, 0.00)` | `(0.04, 0.04)` | `(0.06, 0.90)` | `#c5a059` | `false` | `wd` | Architectural element #4 |
| 5 | `cyl` | `(-0.22, 0.00)` | `(0.04, 0.04)` | `(0.06, 0.90)` | `#c5a059` | `false` | `wd` | Architectural element #5 |
| 6 | `cyl` | `(0.00, 0.00)` | `(0.04, 0.04)` | `(0.06, 0.90)` | `#c5a059` | `false` | `wd` | Architectural element #6 |
| 7 | `cyl` | `(0.22, 0.00)` | `(0.04, 0.04)` | `(0.06, 0.90)` | `#c5a059` | `false` | `wd` | Architectural element #7 |
| 8 | `cyl` | `(0.44, 0.00)` | `(0.04, 0.04)` | `(0.06, 0.90)` | `#c5a059` | `false` | `wd` | Architectural element #8 |
| 9 | `box` | `(-0.38, 0.02)` | `(0.06, 0.45)` | `(0.08, 0.86)` | `#2d241e` | `true` | `—` | Architectural element #9 |
| 10 | `box` | `(-0.31, -0.02)` | `(0.06, 0.45)` | `(0.08, 0.86)` | `#362b24` | `true` | `—` | Architectural element #10 |
| 11 | `box` | `(-0.16, 0.03)` | `(0.06, 0.45)` | `(0.08, 0.86)` | `#2d241e` | `true` | `—` | Architectural element #11 |
| 12 | `box` | `(-0.09, -0.03)` | `(0.06, 0.45)` | `(0.08, 0.86)` | `#362b24` | `true` | `—` | Architectural element #12 |
| 13 | `box` | `(0.06, 0.02)` | `(0.06, 0.45)` | `(0.08, 0.86)` | `#2d241e` | `true` | `—` | Architectural element #13 |
| 14 | `box` | `(0.13, -0.02)` | `(0.06, 0.45)` | `(0.08, 0.86)` | `#362b24` | `true` | `—` | Architectural element #14 |
| 15 | `box` | `(0.28, 0.03)` | `(0.06, 0.45)` | `(0.08, 0.86)` | `#2d241e` | `true` | `—` | Architectural element #15 |
| 16 | `box` | `(0.35, -0.03)` | `(0.06, 0.45)` | `(0.08, 0.86)` | `#362b24` | `true` | `—` | Architectural element #16 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.90)
2. `line` $(x_1: -0.45, z_1: 0.00, x_2: 0.45, z_2: 0.00)$
3. `circle` $(x: -0.44, z: 0.00, r: 0.05)$
4. `circle` $(x: 0.44, z: 0.00, r: 0.05)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
