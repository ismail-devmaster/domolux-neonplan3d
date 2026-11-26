# Domolux Specification: Domolux Reference Laser Projector

## 1. Overview
- **Item ID:** `laser_projector`
- **Pack ID:** `domolux.laser_projector`
- **Collection:** Domolux Private Collection 30 — Private Entertainment & Exclusive Residence
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/laser_projector.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `ceiling` (Mount Height $Y$: 2.45 m)
- **Group:** `media`
- **Target Rooms:** `living`, `hobby`
- **Tags:** `projector`, `laser`, `cinema`, `optics`, `4k`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 0.60 m (60 cm)
- **Depth ($D$):** 0.55 m (55 cm)
- **Height ($H$):** 0.26 m (26 cm)
- **Component Count:** 14 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 0.26 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [0.60, 0.55, 0.26]$.

---

## 4. Component Breakdown & Geometry Table (14 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.40, 0.40)` | `(0.94, 0.06)` | `#18191d` | `faint` | `wdh` | Architectural element #1 |
| 2 | `cyl` | `(0.00, 0.00)` | `(0.10, 0.10)` | `(0.78, 0.16)` | `metal` | `faint` | `wdh` | Architectural element #2 |
| 3 | `cyl` | `(0.00, 0.00)` | `(0.14, 0.14)` | `(0.72, 0.06)` | `#c5a059` | `false` | `wdh` | Architectural element #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.92, 0.88)` | `(0.12, 0.60)` | `#242830` | `true` | `—` | Architectural element #4 |
| 5 | `box` | `(0.00, 0.44)` | `(0.88, 0.05)` | `(0.14, 0.56)` | `#1a1c22` | `glow` | `—` | Architectural element #5 |
| 6 | `cyl (z)` | `(0.00, 0.42)` | `(0.36, 0.36)` | `(0.22, 0.40)` | `#111215` | `false` | `wdh` | Architectural element #6 |
| 7 | `cyl (z)` | `(0.00, 0.44)` | `(0.32, 0.32)` | `(0.24, 0.36)` | `#c5a059` | `false` | `wdh` | Architectural element #7 |
| 8 | `cyl (z)` | `(0.00, 0.45)` | `(0.28, 0.28)` | `(0.26, 0.32)` | `#18191d` | `false` | `wdh` | Architectural element #8 |
| 9 | `cyl (z)` | `(0.00, 0.46)` | `(0.24, 0.24)` | `(0.28, 0.28)` | `glass` | `false` | `wdh` | Architectural element #9 |
| 10 | `box` | `(-0.45, 0.00)` | `(0.02, 0.65)` | `(0.20, 0.40)` | `#111215` | `faint` | `—` | Architectural element #10 |
| 11 | `box` | `(0.45, 0.00)` | `(0.02, 0.65)` | `(0.20, 0.40)` | `#111215` | `faint` | `—` | Architectural element #11 |
| 12 | `box` | `(0.00, -0.15)` | `(0.30, 0.06)` | `(0.72, 0.01)` | `#0e1014` | `glow` | `wdh` | Architectural element #12 |
| 13 | `box` | `(0.00, -0.43)` | `(0.60, 0.04)` | `(0.20, 0.25)` | `#111215` | `false` | `wdh` | Architectural element #13 |
| 14 | `box` | `(0.00, 0.46)` | `(0.50, 0.01)` | `(0.66, 0.01)` | `accent` | `false` | `wdh` | Architectural element #14 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.92, d: 0.88)
2. `circle` $(x: 0.00, z: 0.44, r: 0.16)$
3. `line` $(x_1: -0.45, z_1: -0.30, x_2: -0.45, z_2: 0.30)$
4. `line` $(x_1: 0.45, z_1: -0.30, x_2: 0.45, z_2: 0.30)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
