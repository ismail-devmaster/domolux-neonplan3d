# Domolux Specification: Domolux Luxury Pet Grooming Suite

## 1. Overview
- **Item ID:** `pet_grooming_wash_station`
- **Pack ID:** `domolux.pet_grooming_wash_station`
- **Collection:** Domolux Private Collection 30 — Exclusive Pet Lifestyle
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/pet_grooming_wash_station.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `pets`
- **Target Rooms:** `utility`, `bath`
- **Tags:** `pet`, `grooming`, `bath`, `wash`, `dog`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 1.45 m (145 cm)
- **Depth ($D$):** 0.85 m (85 cm)
- **Height ($H$):** 1.65 m (165 cm)
- **Component Count:** 16 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 5 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 1.65 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [1.45, 0.85, 1.65]$.

---

## 4. Component Breakdown & Geometry Table (16 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.88)` | `(0.00, 0.38)` | `#1c1e22` | `true` | `—` | Architectural element #1 |
| 2 | `box` | `(-0.22, 0.45)` | `(0.42, 0.02)` | `(0.04, 0.32)` | `#252830` | `true` | `—` | Architectural element #2 |
| 3 | `box` | `(0.22, 0.45)` | `(0.42, 0.02)` | `(0.04, 0.32)` | `#252830` | `true` | `—` | Architectural element #3 |
| 4 | `box` | `(-0.04, 0.47)` | `(0.01, 0.01)` | `(0.20, 0.10)` | `#c5a059` | `false` | `wdh` | Architectural element #4 |
| 5 | `box` | `(0.04, 0.47)` | `(0.01, 0.01)` | `(0.20, 0.10)` | `#c5a059` | `false` | `wdh` | Architectural element #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.96, 0.92)` | `(0.38, 0.28)` | `white` | `true` | `—` | Architectural element #6 |
| 7 | `box` | `(0.00, 0.00)` | `(0.84, 0.78)` | `(0.42, 0.23)` | `#e8eff4` | `faint` | `—` | Architectural element #7 |
| 8 | `cyl` | `(0.00, 0.00)` | `(0.08, 0.08)` | `(0.42, 0.01)` | `metal` | `false` | `wdh` | Architectural element #8 |
| 9 | `box` | `(0.32, 0.46)` | `(0.28, 0.06)` | `(0.10, 0.26)` | `#8a5829` | `true` | `wdh` | Architectural element #9 |
| 10 | `box` | `(0.00, -0.45)` | `(0.94, 0.02)` | `(0.66, 0.32)` | `glass` | `glow` | `—` | Architectural element #10 |
| 11 | `box` | `(-0.47, 0.00)` | `(0.02, 0.88)` | `(0.66, 0.32)` | `glass` | `glow` | `—` | Architectural element #11 |
| 12 | `cyl` | `(-0.42, -0.40)` | `(0.04, 0.04)` | `(0.66, 0.34)` | `metal` | `false` | `wd` | Architectural element #12 |
| 13 | `cyl (x)` | `(0.00, -0.40)` | `(0.84, 0.03)` | `(0.97, 0.03)` | `metal` | `glow` | `h` | Architectural element #13 |
| 14 | `cyl` | `(0.00, -0.40)` | `(0.04, 0.04)` | `(0.88, 0.08)` | `#c5a059` | `false` | `wdh` | Architectural element #14 |
| 15 | `cyl` | `(-0.36, -0.38)` | `(0.06, 0.06)` | `(0.68, 0.16)` | `metal` | `false` | `wdh` | Architectural element #15 |
| 16 | `loft` | `(-0.34, -0.32)` | `(0.04, 0.04)` | `(0.58, 0.14)` | `metal` | `false` | `wdh` | Architectural element #16 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.92)
2. `rect` $(x: 0.00, z: 0.00, w: 0.84, d: 0.78) (filled)
3. `circle` $(x: 0.00, z: 0.00, r: 0.05)$
4. `rect` $(x: 0.32, z: 0.46, w: 0.28, d: 0.06)
5. `line` $(x_1: -0.42, z_1: -0.40, x_2: 0.42, z_2: -0.40)$

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
