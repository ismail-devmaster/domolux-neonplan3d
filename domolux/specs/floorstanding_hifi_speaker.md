# Domolux Specification: Domolux Reference Hi-Fi Tower Speaker

## 1. Overview
- **Item ID:** `floorstanding_hifi_speaker`
- **Pack ID:** `domolux.floorstanding_hifi_speaker`
- **Collection:** Domolux Private Collection 30 — Private Entertainment & Exclusive Residence
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/floorstanding_hifi_speaker.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `media`
- **Target Rooms:** `living`, `office`
- **Tags:** `speaker`, `hifi`, `audio`, `tower`, `acoustic`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 0.38 m (38 cm)
- **Depth ($D$):** 0.52 m (52 cm)
- **Height ($H$):** 1.42 m (142 cm)
- **Component Count:** 23 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 5 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 1.42 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [0.38, 0.52, 1.42]$.

---

## 4. Component Breakdown & Geometry Table (23 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.94)` | `(0.00, 0.04)` | `#8c6747` | `glow` | `h` | Architectural element #1 |
| 2 | `cyl` | `(-0.38, 0.38)` | `(0.08, 0.08)` | `(0.00, 0.02)` | `#c5a059` | `false` | `wdh` | Architectural element #2 |
| 3 | `cyl` | `(0.38, 0.38)` | `(0.08, 0.08)` | `(0.00, 0.02)` | `#c5a059` | `false` | `wdh` | Architectural element #3 |
| 4 | `cyl` | `(-0.38, -0.38)` | `(0.08, 0.08)` | `(0.00, 0.02)` | `#c5a059` | `false` | `wdh` | Architectural element #4 |
| 5 | `cyl` | `(0.38, -0.38)` | `(0.08, 0.08)` | `(0.00, 0.02)` | `#c5a059` | `false` | `wdh` | Architectural element #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.80, 0.80)` | `(0.04, 0.02)` | `#111215` | `false` | `h` | Architectural element #6 |
| 7 | `loft` | `(0.00, -0.04)` | `(0.86, 0.88)` | `(0.06, 0.94)` | `#2d241e` | `true` | `—` | Architectural element #7 |
| 8 | `box` | `(0.00, 0.40)` | `(0.82, 0.08)` | `(0.07, 0.91)` | `#8c6747` | `glow` | `—` | Architectural element #8 |
| 9 | `cyl (z)` | `(0.00, 0.43)` | `(0.28, 0.28)` | `(0.85, 0.08)` | `#1a1a1f` | `false` | `wdh` | Architectural element #9 |
| 10 | `cyl (z)` | `(0.00, 0.45)` | `(0.10, 0.10)` | `(0.86, 0.04)` | `#c5a059` | `false` | `wdh` | Architectural element #10 |
| 11 | `cyl (z)` | `(0.00, 0.43)` | `(0.46, 0.46)` | `(0.64, 0.15)` | `#c5a059` | `false` | `wdh` | Architectural element #11 |
| 12 | `cyl (z)` | `(0.00, 0.44)` | `(0.38, 0.38)` | `(0.65, 0.12)` | `#22242a` | `false` | `wdh` | Architectural element #12 |
| 13 | `cyl (z)` | `(0.00, 0.46)` | `(0.08, 0.08)` | `(0.68, 0.06)` | `metal` | `false` | `wdh` | Architectural element #13 |
| 14 | `cyl (z)` | `(0.00, 0.43)` | `(0.58, 0.58)` | `(0.38, 0.18)` | `#c5a059` | `false` | `wdh` | Architectural element #14 |
| 15 | `cyl (z)` | `(0.00, 0.44)` | `(0.50, 0.50)` | `(0.39, 0.15)` | `#1a1c22` | `false` | `wdh` | Architectural element #15 |
| 16 | `cyl (z)` | `(0.00, 0.43)` | `(0.58, 0.58)` | `(0.14, 0.18)` | `#c5a059` | `false` | `wdh` | Architectural element #16 |
| 17 | `cyl (z)` | `(0.00, 0.44)` | `(0.50, 0.50)` | `(0.15, 0.15)` | `#1a1c22` | `false` | `wdh` | Architectural element #17 |
| 18 | `cyl (z)` | `(0.00, -0.44)` | `(0.28, 0.28)` | `(0.25, 0.08)` | `#111215` | `false` | `wdh` | Architectural element #18 |
| 19 | `box` | `(0.00, -0.45)` | `(0.36, 0.04)` | `(0.08, 0.12)` | `#111215` | `false` | `wdh` | Architectural element #19 |
| 20 | `cyl (z)` | `(-0.08, -0.47)` | `(0.04, 0.04)` | `(0.11, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #20 |
| 21 | `cyl (z)` | `(0.08, -0.47)` | `(0.04, 0.04)` | `(0.11, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #21 |
| 22 | `cyl (z)` | `(-0.08, -0.47)` | `(0.04, 0.04)` | `(0.16, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #22 |
| 23 | `cyl (z)` | `(0.08, -0.47)` | `(0.04, 0.04)` | `(0.16, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #23 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.94, d: 0.94)
2. `circle` $(x: 0.00, z: 0.38, r: 0.24)$
3. `circle` $(x: 0.00, z: 0.38, r: 0.15)$
4. `circle` $(x: 0.00, z: 0.38, r: 0.06)$
5. `circle` $(x: 0.00, z: -0.40, r: 0.10)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
