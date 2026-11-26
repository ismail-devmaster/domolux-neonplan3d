# Domolux Specification: Domolux Architectural Luxury Aquarium

## 1. Overview
- **Item ID:** `luxury_aquarium`
- **Pack ID:** `domolux.luxury_aquarium`
- **Collection:** Domolux Private Collection 30 — Architectural Wellness & Private Sanctuaries
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/luxury_aquarium.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `deco`
- **Target Rooms:** `living`, `dining`, `office`
- **Tags:** `aquarium`, `water`, `fish`, `glass`, `luxury`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 1.80 m (180 cm)
- **Depth ($D$):** 0.65 m (65 cm)
- **Height ($H$):** 1.70 m (170 cm)
- **Component Count:** 18 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 1.70 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [1.80, 0.65, 1.70]$.

---

## 4. Component Breakdown & Geometry Table (18 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.96, 0.92)` | `(0.00, 0.44)` | `#2d241e` | `true` | `—` | Architectural element #1 |
| 2 | `box` | `(-0.23, 0.47)` | `(0.45, 0.02)` | `(0.04, 0.38)` | `#2d241e` | `true` | `—` | Architectural element #2 |
| 3 | `box` | `(0.23, 0.47)` | `(0.45, 0.02)` | `(0.04, 0.38)` | `#2d241e` | `true` | `—` | Architectural element #3 |
| 4 | `box` | `(-0.04, 0.48)` | `(0.01, 0.01)` | `(0.22, 0.12)` | `#c5a059` | `false` | `wdh` | Architectural element #4 |
| 5 | `box` | `(0.04, 0.48)` | `(0.01, 0.01)` | `(0.22, 0.12)` | `#c5a059` | `false` | `wdh` | Architectural element #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.94, 0.90)` | `(0.44, 0.01)` | `#111215` | `false` | `h` | Architectural element #6 |
| 7 | `box` | `(0.00, 0.44)` | `(0.94, 0.02)` | `(0.45, 0.42)` | `glass` | `glow` | `—` | Architectural element #7 |
| 8 | `box` | `(0.00, -0.44)` | `(0.94, 0.02)` | `(0.45, 0.42)` | `#1c2b36` | `faint` | `—` | Architectural element #8 |
| 9 | `box` | `(-0.46, 0.00)` | `(0.02, 0.88)` | `(0.45, 0.42)` | `glass` | `glow` | `—` | Architectural element #9 |
| 10 | `box` | `(0.46, 0.00)` | `(0.02, 0.88)` | `(0.45, 0.42)` | `glass` | `glow` | `—` | Architectural element #10 |
| 11 | `box` | `(0.00, 0.00)` | `(0.90, 0.84)` | `(0.46, 0.38)` | `#1c5a75` | `faint` | `—` | Architectural element #11 |
| 12 | `box` | `(0.00, 0.00)` | `(0.90, 0.84)` | `(0.45, 0.05)` | `#d9d0be` | `faint` | `—` | Architectural element #12 |
| 13 | `loft` | `(-0.10, 0.00)` | `(0.28, 0.40)` | `(0.50, 0.24)` | `#524436` | `faint` | `—` | Architectural element #13 |
| 14 | `loft` | `(0.18, -0.10)` | `(0.22, 0.30)` | `(0.50, 0.18)` | `#483b2e` | `faint` | `—` | Architectural element #14 |
| 15 | `cyl` | `(0.25, 0.15)` | `(0.18, 0.18)` | `(0.50, 0.16)` | `#246b38` | `false` | `—` | Architectural element #15 |
| 16 | `box` | `(0.00, 0.00)` | `(0.90, 0.40)` | `(0.92, 0.03)` | `#18191d` | `glow` | `wdh` | Architectural element #16 |
| 17 | `box` | `(-0.42, 0.00)` | `(0.02, 0.30)` | `(0.87, 0.09)` | `#c5a059` | `false` | `wdh` | Architectural element #17 |
| 18 | `box` | `(0.42, 0.00)` | `(0.02, 0.30)` | `(0.87, 0.09)` | `#c5a059` | `false` | `wdh` | Architectural element #18 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.92)
2. `rect` $(x: 0.00, z: 0.00, w: 0.90, d: 0.84) (filled)
3. `circle` $(x: -0.10, z: 0.00, r: 0.14)$
4. `circle` $(x: 0.18, z: -0.10, r: 0.10)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
