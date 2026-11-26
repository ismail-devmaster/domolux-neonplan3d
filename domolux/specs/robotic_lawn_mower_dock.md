# Domolux Specification: Domolux Robotic Estate Mower Dock

## 1. Overview
- **Item ID:** `robotic_lawn_mower_dock`
- **Pack ID:** `domolux.robotic_lawn_mower_dock`
- **Collection:** Domolux Private Collection 30 — Private Estate & Outdoor Living
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/robotic_lawn_mower_dock.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `outdoor`
- **Target Rooms:** `garden`
- **Tags:** `mower`, `robot`, `garden`, `dock`, `automation`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 0.95 m (95 cm)
- **Depth ($D$):** 1.15 m (115 cm)
- **Height ($H$):** 0.58 m (58 cm)
- **Component Count:** 15 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 0.58 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [0.95, 1.15, 0.58]$.

---

## 4. Component Breakdown & Geometry Table (15 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `loft` | `(0.00, 0.00)` | `(0.92, 0.94)` | `(0.00, 0.06)` | `#6e727a` | `faint` | `h` | Architectural element #1 |
| 2 | `box` | `(-0.38, 0.00)` | `(0.06, 0.88)` | `(0.04, 0.04)` | `#1c1e22` | `false` | `wdh` | Architectural element #2 |
| 3 | `box` | `(0.38, 0.00)` | `(0.06, 0.88)` | `(0.04, 0.04)` | `#1c1e22` | `false` | `wdh` | Architectural element #3 |
| 4 | `box` | `(0.00, -0.40)` | `(0.55, 0.16)` | `(0.06, 0.45)` | `#252830` | `true` | `wd` | Architectural element #4 |
| 5 | `cyl (z)` | `(-0.14, -0.31)` | `(0.04, 0.04)` | `(0.18, 0.08)` | `#c5a059` | `false` | `wdh` | Architectural element #5 |
| 6 | `cyl (z)` | `(0.14, -0.31)` | `(0.04, 0.04)` | `(0.18, 0.08)` | `#c5a059` | `false` | `wdh` | Architectural element #6 |
| 7 | `loft` | `(0.00, -0.06)` | `(0.96, 0.86)` | `(0.48, 0.48)` | `#23262d` | `glow` | `w` | Architectural element #7 |
| 8 | `box` | `(0.00, -0.06)` | `(0.92, 0.82)` | `(0.48, 0.02)` | `#9c6838` | `false` | `—` | Architectural element #8 |
| 9 | `loft` | `(0.00, -0.08)` | `(0.58, 0.62)` | `(0.06, 0.22)` | `#181a20` | `true` | `wdh` | Architectural element #9 |
| 10 | `cyl (x)` | `(-0.30, -0.22)` | `(0.08, 0.18)` | `(0.04, 0.18)` | `#111215` | `false` | `wdh` | Architectural element #10 |
| 11 | `cyl (x)` | `(0.30, -0.22)` | `(0.08, 0.18)` | `(0.04, 0.18)` | `#111215` | `false` | `wdh` | Architectural element #11 |
| 12 | `cyl (x)` | `(-0.18, 0.15)` | `(0.05, 0.10)` | `(0.03, 0.10)` | `#111215` | `false` | `wdh` | Architectural element #12 |
| 13 | `cyl (x)` | `(0.18, 0.15)` | `(0.05, 0.10)` | `(0.03, 0.10)` | `#111215` | `false` | `wdh` | Architectural element #13 |
| 14 | `box` | `(0.00, -0.15)` | `(0.22, 0.14)` | `(0.27, 0.03)` | `#e74c3c` | `false` | `wdh` | Architectural element #14 |
| 15 | `cyl` | `(0.00, 0.05)` | `(0.12, 0.12)` | `(0.26, 0.04)` | `#c5a059` | `false` | `wdh` | Architectural element #15 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.94)
2. `rect` $(x: 0.00, z: -0.40, w: 0.55, d: 0.16)
3. `rect` $(x: 0.00, z: -0.08, w: 0.58, d: 0.62) (filled)
4. `circle` $(x: 0.00, z: 0.05, r: 0.06)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
