# Domolux Specification: Domolux Sculptural Fireplace

## 1. Overview
- **Item ID:** `sculptural_fireplace`
- **Pack ID:** `domolux.sculptural_fireplace`
- **Collection:** Domolux Private Collection 30 — Private Entertainment & Exclusive Residence
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/sculptural_fireplace.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `heating`
- **Target Rooms:** `living`, `hall`
- **Tags:** `fireplace`, `travertine`, `luxury`, `flame`, `architectural`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 2.40 m (240 cm)
- **Depth ($D$):** 0.65 m (65 cm)
- **Height ($H$):** 1.45 m (145 cm)
- **Component Count:** 25 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 1.45 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [2.40, 0.65, 1.45]$.

---

## 4. Component Breakdown & Geometry Table (25 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.90)` | `(0.00, 0.04)` | `#1a1a1f` | `faint` | `h` | Architectural element #1 |
| 2 | `box` | `(0.00, 0.40)` | `(0.92, 0.06)` | `(0.01, 0.02)` | `#ffb366` | `glow` | `wdh` | Architectural element #2 |
| 3 | `box` | `(0.00, 0.05)` | `(1.00, 0.95)` | `(0.04, 0.08)` | `#d8cfc4` | `true` | `h` | Architectural element #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.92, 0.88)` | `(0.12, 0.12)` | `#d8cfc4` | `faint` | `—` | Architectural element #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.72, 0.65)` | `(0.24, 0.03)` | `#1c1d22` | `faint` | `—` | Architectural element #5 |
| 6 | `box` | `(0.00, -0.28)` | `(0.72, 0.08)` | `(0.27, 0.50)` | `#18191d` | `faint` | `—` | Architectural element #6 |
| 7 | `box` | `(-0.34, 0.00)` | `(0.06, 0.60)` | `(0.27, 0.50)` | `#1c1d22` | `faint` | `—` | Architectural element #7 |
| 8 | `box` | `(0.34, 0.00)` | `(0.06, 0.60)` | `(0.27, 0.50)` | `#1c1d22` | `faint` | `—` | Architectural element #8 |
| 9 | `box` | `(0.00, 0.00)` | `(0.72, 0.65)` | `(0.77, 0.04)` | `#18191d` | `faint` | `—` | Architectural element #9 |
| 10 | `box` | `(-0.41, 0.02)` | `(0.16, 0.84)` | `(0.24, 0.57)` | `#d8cfc4` | `true` | `—` | Architectural element #10 |
| 11 | `box` | `(0.41, 0.02)` | `(0.16, 0.84)` | `(0.24, 0.57)` | `#d8cfc4` | `true` | `—` | Architectural element #11 |
| 12 | `box` | `(0.00, 0.02)` | `(0.98, 0.86)` | `(0.81, 0.15)` | `#d8cfc4` | `true` | `h` | Architectural element #12 |
| 13 | `box` | `(0.00, -0.05)` | `(0.92, 0.75)` | `(0.96, 0.04)` | `#c8beaf` | `true` | `h` | Architectural element #13 |
| 14 | `box` | `(0.00, -0.05)` | `(0.58, 0.22)` | `(0.27, 0.02)` | `metal` | `faint` | `wdh` | Architectural element #14 |
| 15 | `box` | `(0.00, -0.05)` | `(0.52, 0.08)` | `(0.29, 0.02)` | `#e67e22` | `glow` | `wdh` | Architectural element #15 |
| 16 | `loft` | `(0.00, -0.05)` | `(0.48, 0.06)` | `(0.31, 0.18)` | `#f39c12` | `false` | `—` | Architectural element #16 |
| 17 | `box` | `(0.00, 0.22)` | `(0.66, 0.01)` | `(0.27, 0.14)` | `glass` | `faint` | `dh` | Architectural element #17 |
| 18 | `box` | `(-0.30, 0.22)` | `(0.03, 0.03)` | `(0.27, 0.03)` | `#c5a059` | `glow` | `wdh` | Architectural element #18 |
| 19 | `box` | `(0.30, 0.22)` | `(0.03, 0.03)` | `(0.27, 0.03)` | `#c5a059` | `glow` | `wdh` | Architectural element #19 |
| 20 | `box` | `(0.00, 0.32)` | `(0.68, 0.02)` | `(0.23, 0.01)` | `#c5a059` | `glow` | `h` | Architectural element #20 |
| 21 | `box` | `(0.00, 0.38)` | `(0.80, 0.02)` | `(0.94, 0.02)` | `#18191d` | `faint` | `wdh` | Architectural element #21 |
| 22 | `loft` | `(-0.33, 0.22)` | `(0.04, 0.10)` | `(0.27, 0.50)` | `#25272e` | `false` | `—` | Architectural element #22 |
| 23 | `loft` | `(0.33, 0.22)` | `(0.04, 0.10)` | `(0.27, 0.50)` | `#25272e` | `false` | `—` | Architectural element #23 |
| 24 | `cyl (x)` | `(-0.16, -0.04)` | `(0.06, 0.18)` | `(0.28, 0.05)` | `#3a3530` | `false` | `—` | Architectural element #24 |
| 25 | `cyl (x)` | `(0.16, -0.04)` | `(0.06, 0.18)` | `(0.28, 0.05)` | `#3a3530` | `false` | `—` | Architectural element #25 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.05, w: 1.00, d: 0.95)
2. `rect` $(x: 0.00, z: 0.00, w: 0.68, d: 0.60) (filled)
3. `line` $(x_1: -0.33, z_1: 0.22, x_2: 0.33, z_2: 0.22)$
4. `line` $(x_1: -0.26, z_1: -0.05, x_2: 0.26, z_2: -0.05)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
