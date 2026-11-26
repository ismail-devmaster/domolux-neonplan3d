# Domolux Specification: Domolux Grand Resort Sun Lounger

## 1. Overview
- **Item ID:** `outdoor_sun_lounger`
- **Pack ID:** `domolux.outdoor_sun_lounger`
- **Collection:** Domolux Private Collection 30 — Private Estate & Outdoor Living
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/outdoor_sun_lounger.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `outdoor`
- **Target Rooms:** `garden`
- **Tags:** `lounger`, `sunbed`, `pool`, `teak`, `outdoor`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 0.88 m (88 cm)
- **Depth ($D$):** 2.10 m (210 cm)
- **Height ($H$):** 0.52 m (52 cm)
- **Component Count:** 14 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 0.52 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [0.88, 2.10, 0.52]$.

---

## 4. Component Breakdown & Geometry Table (14 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.44, 0.00)` | `(0.08, 0.96)` | `(0.12, 0.16)` | `#8a5829` | `true` | `wd` | Architectural element #1 |
| 2 | `box` | `(0.44, 0.00)` | `(0.08, 0.96)` | `(0.12, 0.16)` | `#8a5829` | `true` | `wd` | Architectural element #2 |
| 3 | `box` | `(0.00, 0.46)` | `(0.96, 0.08)` | `(0.12, 0.16)` | `#8a5829` | `true` | `d` | Architectural element #3 |
| 4 | `box` | `(0.00, -0.46)` | `(0.96, 0.08)` | `(0.12, 0.16)` | `#8a5829` | `true` | `d` | Architectural element #4 |
| 5 | `box` | `(-0.42, 0.42)` | `(0.08, 0.08)` | `(0.00, 0.12)` | `#6e441d` | `false` | `wdh` | Architectural element #5 |
| 6 | `box` | `(0.42, 0.42)` | `(0.08, 0.08)` | `(0.00, 0.12)` | `#6e441d` | `false` | `wdh` | Architectural element #6 |
| 7 | `cyl (x)` | `(-0.44, -0.40)` | `(0.06, 0.22)` | `(0.00, 0.22)` | `#1c1d22` | `false` | `wdh` | Architectural element #7 |
| 8 | `cyl (x)` | `(0.44, -0.40)` | `(0.06, 0.22)` | `(0.00, 0.22)` | `#1c1d22` | `false` | `wdh` | Architectural element #8 |
| 9 | `box` | `(0.00, 0.15)` | `(0.84, 0.58)` | `(0.24, 0.04)` | `#9c6838` | `faint` | `—` | Architectural element #9 |
| 10 | `loft` | `(0.00, -0.25)` | `(0.84, 0.38)` | `(0.26, 0.22)` | `#9c6838` | `true` | `—` | Architectural element #10 |
| 11 | `box` | `(0.00, 0.15)` | `(0.82, 0.58)` | `(0.28, 0.18)` | `#ded8ce` | `true` | `—` | Architectural element #11 |
| 12 | `loft` | `(0.00, -0.25)` | `(0.82, 0.38)` | `(0.30, 0.38)` | `#ded8ce` | `true` | `—` | Architectural element #12 |
| 13 | `cyl (x)` | `(0.00, -0.36)` | `(0.76, 0.14)` | `(0.72, 0.14)` | `#8c6747` | `true` | `h` | Architectural element #13 |
| 14 | `box` | `(0.46, 0.00)` | `(0.22, 0.28)` | `(0.16, 0.03)` | `#9c6838` | `false` | `wdh` | Architectural element #14 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.96)
2. `rect` $(x: 0.00, z: 0.15, w: 0.82, d: 0.58) (filled)
3. `line` $(x_1: -0.41, z_1: -0.14, x_2: 0.41, z_2: -0.14)$
4. `circle` $(x: 0.00, z: -0.36, r: 0.08)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
