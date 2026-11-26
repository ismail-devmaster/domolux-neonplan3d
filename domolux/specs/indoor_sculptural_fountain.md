# Domolux Specification: Domolux Indoor Sculptural Fountain

## 1. Overview
- **Item ID:** `indoor_sculptural_fountain`
- **Pack ID:** `domolux.indoor_sculptural_fountain`
- **Collection:** Domolux Private Collection 30 — Architectural Wellness & Private Sanctuaries
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/indoor_sculptural_fountain.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `deco`
- **Target Rooms:** `hall`, `living`
- **Tags:** `fountain`, `water`, `basalt`, `bronze`, `sculpture`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 1.40 m (140 cm)
- **Depth ($D$):** 0.70 m (70 cm)
- **Height ($H$):** 1.90 m (190 cm)
- **Component Count:** 13 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 1.90 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [1.40, 0.70, 1.90]$.

---

## 4. Component Breakdown & Geometry Table (13 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.12)` | `(0.94, 0.72)` | `(0.00, 0.18)` | `#1c1e22` | `true` | `h` | Architectural element #1 |
| 2 | `box` | `(0.00, 0.12)` | `(0.96, 0.74)` | `(0.18, 0.03)` | `#25282f` | `true` | `h` | Architectural element #2 |
| 3 | `box` | `(0.00, -0.28)` | `(0.78, 0.18)` | `(0.05, 0.92)` | `#1a1c20` | `true` | `—` | Architectural element #3 |
| 4 | `box` | `(0.00, -0.18)` | `(0.68, 0.02)` | `(0.20, 0.74)` | `#22252c` | `faint` | `—` | Architectural element #4 |
| 5 | `box` | `(0.00, -0.22)` | `(0.82, 0.22)` | `(0.94, 0.06)` | `#8c6747` | `glow` | `h` | Architectural element #5 |
| 6 | `box` | `(0.00, -0.12)` | `(0.62, 0.08)` | `(0.94, 0.02)` | `#c5a059` | `false` | `wdh` | Architectural element #6 |
| 7 | `box` | `(0.00, -0.15)` | `(0.60, 0.01)` | `(0.21, 0.73)` | `#1d637d` | `faint` | `—` | Architectural element #7 |
| 8 | `box` | `(0.00, 0.15)` | `(0.82, 0.58)` | `(0.14, 0.01)` | `#174b60` | `faint` | `—` | Architectural element #8 |
| 9 | `box` | `(0.00, 0.15)` | `(0.82, 0.58)` | `(0.06, 0.08)` | `#282a30` | `faint` | `—` | Architectural element #9 |
| 10 | `box` | `(0.00, -0.08)` | `(0.70, 0.04)` | `(0.08, 0.02)` | `#5dade2` | `false` | `wdh` | Architectural element #10 |
| 11 | `cyl` | `(-0.22, 0.18)` | `(0.12, 0.12)` | `(0.10, 0.08)` | `#3a3c42` | `false` | `—` | Architectural element #11 |
| 12 | `cyl` | `(0.25, 0.22)` | `(0.16, 0.16)` | `(0.10, 0.09)` | `#32343a` | `false` | `—` | Architectural element #12 |
| 13 | `cyl` | `(0.08, 0.32)` | `(0.10, 0.10)` | `(0.10, 0.06)` | `#3a3c42` | `false` | `—` | Architectural element #13 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.12, w: 0.96, d: 0.74)
2. `rect` $(x: 0.00, z: -0.28, w: 0.78, d: 0.18) (filled)
3. `rect` $(x: 0.00, z: 0.15, w: 0.82, d: 0.58)
4. `line` $(x_1: -0.31, z_1: -0.12, x_2: 0.31, z_2: -0.12)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
