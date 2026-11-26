# Domolux Specification: Domolux Motorized Cinema Screen

## 1. Overview
- **Item ID:** `motorized_projection_screen`
- **Pack ID:** `domolux.motorized_projection_screen`
- **Collection:** Domolux Private Collection 30 — Private Entertainment & Exclusive Residence
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/motorized_projection_screen.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `ceiling` (Mount Height $Y$: 2.65 m)
- **Group:** `media`
- **Target Rooms:** `living`, `hobby`
- **Tags:** `screen`, `projection`, `cinema`, `motorized`, `display`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 3.20 m (320 cm)
- **Depth ($D$):** 0.24 m (24 cm)
- **Height ($H$):** 2.10 m (210 cm)
- **Component Count:** 12 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 2.10 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [3.20, 0.24, 2.10]$.

---

## 4. Component Breakdown & Geometry Table (12 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.92, 0.08)` | `white` | `true` | `h` | Architectural element #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.95, 0.40)` | `(0.91, 0.01)` | `#18191d` | `false` | `h` | Architectural element #2 |
| 3 | `box` | `(-0.49, 0.00)` | `(0.02, 0.96)` | `(0.92, 0.08)` | `#c5a059` | `glow` | `wdh` | Architectural element #3 |
| 4 | `box` | `(0.49, 0.00)` | `(0.02, 0.96)` | `(0.92, 0.08)` | `#c5a059` | `glow` | `wdh` | Architectural element #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.90, 0.04)` | `(0.78, 0.13)` | `#0e1014` | `faint` | `—` | Architectural element #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.86, 0.03)` | `(0.08, 0.70)` | `#f8f9fa` | `glow` | `—` | Architectural element #6 |
| 7 | `box` | `(-0.44, 0.00)` | `(0.03, 0.04)` | `(0.08, 0.70)` | `#0e1014` | `faint` | `—` | Architectural element #7 |
| 8 | `box` | `(0.44, 0.00)` | `(0.03, 0.04)` | `(0.08, 0.70)` | `#0e1014` | `faint` | `—` | Architectural element #8 |
| 9 | `box` | `(0.00, 0.00)` | `(0.90, 0.04)` | `(0.05, 0.03)` | `#0e1014` | `faint` | `—` | Architectural element #9 |
| 10 | `cyl (x)` | `(0.00, 0.00)` | `(0.93, 0.16)` | `(0.00, 0.05)` | `metal` | `true` | `h` | Architectural element #10 |
| 11 | `cyl (x)` | `(-0.46, 0.00)` | `(0.02, 0.18)` | `(0.00, 0.05)` | `#c5a059` | `false` | `wdh` | Architectural element #11 |
| 12 | `cyl (x)` | `(0.46, 0.00)` | `(0.02, 0.18)` | `(0.00, 0.05)` | `#c5a059` | `false` | `wdh` | Architectural element #12 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
2. `line` $(x_1: -0.45, z_1: 0.00, x_2: 0.45, z_2: 0.00)$
3. `circle` $(x: -0.48, z: 0.00, r: 0.08)$
4. `circle` $(x: 0.48, z: 0.00, r: 0.08)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
