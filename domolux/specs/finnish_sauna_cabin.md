# Domolux Specification: Domolux Finnish Sauna Sanctuary

## 1. Overview
- **Item ID:** `finnish_sauna_cabin`
- **Pack ID:** `domolux.finnish_sauna_cabin`
- **Collection:** Domolux Private Collection 30 — Architectural Wellness & Private Sanctuaries
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/finnish_sauna_cabin.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `bath`
- **Target Rooms:** `bath`, `hobby`
- **Tags:** `sauna`, `spa`, `wellness`, `timber`, `aspen`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 2.10 m (210 cm)
- **Depth ($D$):** 1.80 m (180 cm)
- **Height ($H$):** 2.15 m (215 cm)
- **Component Count:** 16 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 5 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 2.15 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [2.10, 1.80, 2.15]$.

---

## 4. Component Breakdown & Geometry Table (16 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.00, 0.04)` | `#bfa17a` | `false` | `h` | Architectural element #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.96, 0.04)` | `#a88a64` | `true` | `h` | Architectural element #2 |
| 3 | `box` | `(0.00, -0.46)` | `(0.98, 0.08)` | `(0.04, 0.92)` | `#c4a781` | `faint` | `—` | Architectural element #3 |
| 4 | `box` | `(-0.46, 0.00)` | `(0.08, 0.96)` | `(0.04, 0.92)` | `#c4a781` | `faint` | `—` | Architectural element #4 |
| 5 | `box` | `(0.46, 0.00)` | `(0.08, 0.96)` | `(0.04, 0.92)` | `#c4a781` | `faint` | `—` | Architectural element #5 |
| 6 | `box` | `(-0.32, 0.46)` | `(0.20, 0.02)` | `(0.04, 0.92)` | `glass` | `glow` | `—` | Architectural element #6 |
| 7 | `box` | `(0.06, 0.46)` | `(0.54, 0.02)` | `(0.04, 0.92)` | `glass` | `glow` | `—` | Architectural element #7 |
| 8 | `box` | `(-0.16, 0.49)` | `(0.03, 0.03)` | `(0.35, 0.40)` | `#7a5a3a` | `false` | `wdh` | Architectural element #8 |
| 9 | `box` | `(0.00, -0.24)` | `(0.84, 0.34)` | `(0.45, 0.06)` | `#dfcbb1` | `true` | `—` | Architectural element #9 |
| 10 | `box` | `(0.00, -0.41)` | `(0.84, 0.03)` | `(0.58, 0.14)` | `#dfcbb1` | `faint` | `—` | Architectural element #10 |
| 11 | `box` | `(0.00, -0.40)` | `(0.82, 0.01)` | `(0.56, 0.02)` | `#ffb84d` | `false` | `—` | Architectural element #11 |
| 12 | `box` | `(0.04, 0.08)` | `(0.76, 0.30)` | `(0.22, 0.06)` | `#dfcbb1` | `true` | `—` | Architectural element #12 |
| 13 | `box` | `(0.04, 0.22)` | `(0.76, 0.02)` | `(0.04, 0.18)` | `#c4a781` | `false` | `—` | Architectural element #13 |
| 14 | `cyl` | `(-0.34, 0.24)` | `(0.20, 0.20)` | `(0.04, 0.45)` | `metal` | `glow` | `wdh` | Architectural element #14 |
| 15 | `cyl` | `(-0.34, 0.24)` | `(0.18, 0.18)` | `(0.48, 0.08)` | `#2d2f33` | `false` | `wdh` | Architectural element #15 |
| 16 | `box` | `(-0.34, 0.24)` | `(0.26, 0.26)` | `(0.38, 0.03)` | `#7a5a3a` | `false` | `wdh` | Architectural element #16 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
2. `rect` $(x: 0.00, z: -0.24, w: 0.84, d: 0.34) (filled)
3. `rect` $(x: 0.04, z: 0.08, w: 0.76, d: 0.30)
4. `circle` $(x: -0.34, z: 0.24, r: 0.10)$
5. `line` $(x_1: -0.21, z_1: 0.46, x_2: 0.33, z_2: 0.46)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
