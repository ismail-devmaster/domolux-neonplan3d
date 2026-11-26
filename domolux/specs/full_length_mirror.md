# Domolux Specification: Domolux Sculptural Dressing Mirror

## 1. Overview
- **Item ID:** `full_length_mirror`
- **Pack ID:** `domolux.full_length_mirror`
- **Collection:** Domolux Private Collection 30 — Private Dressing, Storage & Personal Care
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/full_length_mirror.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `deco`
- **Target Rooms:** `bedroom`, `hall`, `bath`
- **Tags:** `mirror`, `dressing`, `bronze`, `marble`, `sculptural`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 0.95 m (95 cm)
- **Depth ($D$):** 0.35 m (35 cm)
- **Height ($H$):** 2.15 m (215 cm)
- **Component Count:** 11 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 2.15 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [0.95, 0.35, 2.15]$.

---

## 4. Component Breakdown & Geometry Table (11 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.92, 0.88)` | `(0.00, 0.07)` | `#18191d` | `true` | `h` | Architectural element #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.82, 0.24)` | `(0.07, 0.04)` | `#c5a059` | `false` | `wdh` | Architectural element #2 |
| 3 | `box` | `(0.00, -0.06)` | `(0.82, 0.04)` | `(0.10, 0.88)` | `#fff2d6` | `glow` | `—` | Architectural element #3 |
| 4 | `box` | `(0.00, -0.03)` | `(0.78, 0.04)` | `(0.10, 0.88)` | `#1c1d22` | `faint` | `—` | Architectural element #4 |
| 5 | `box` | `(0.00, 0.02)` | `(0.80, 0.06)` | `(0.10, 0.03)` | `#c5a059` | `glow` | `h` | Architectural element #5 |
| 6 | `cyl (x)` | `(0.00, 0.02)` | `(0.80, 0.06)` | `(0.88, 0.10)` | `#c5a059` | `glow` | `h` | Architectural element #6 |
| 7 | `box` | `(-0.38, 0.02)` | `(0.04, 0.06)` | `(0.10, 0.82)` | `#c5a059` | `glow` | `wd` | Architectural element #7 |
| 8 | `box` | `(0.38, 0.02)` | `(0.04, 0.06)` | `(0.10, 0.82)` | `#c5a059` | `glow` | `wd` | Architectural element #8 |
| 9 | `box` | `(0.00, 0.04)` | `(0.72, 0.01)` | `(0.13, 0.82)` | `glass` | `faint` | `—` | Architectural element #9 |
| 10 | `loft` | `(-0.35, -0.15)` | `(0.04, 0.30)` | `(0.07, 0.25)` | `#8c6747` | `false` | `wdh` | Architectural element #10 |
| 11 | `loft` | `(0.35, -0.15)` | `(0.04, 0.30)` | `(0.07, 0.25)` | `#8c6747` | `false` | `wdh` | Architectural element #11 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.92, d: 0.88)
2. `line` $(x_1: -0.38, z_1: 0.04, x_2: 0.38, z_2: 0.04)$
3. `line` $(x_1: -0.35, z_1: -0.30, x_2: -0.35, z_2: 0.00)$
4. `line` $(x_1: 0.35, z_1: -0.30, x_2: 0.35, z_2: 0.00)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
