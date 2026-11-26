# Domolux Specification: Domolux Architectural Cat Climbing Tree

## 1. Overview
- **Item ID:** `designer_cat_tree`
- **Pack ID:** `domolux.designer_cat_tree`
- **Collection:** Domolux Private Collection 30 — Exclusive Pet Lifestyle
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: `fp3dpack`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: `d08c59237e4f`)
- **Package File:** `domolux/dist/designer_cat_tree.fp3dpack`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Mount Type:** `floor`
- **Group:** `pets`
- **Target Rooms:** `living`, `hall`
- **Tags:** `cat`, `pet`, `climbing`, `tree`, `boucle`, `domolux`

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** 1.05 m (105 cm)
- **Depth ($D$):** 0.75 m (75 cm)
- **Height ($H$):** 1.75 m (175 cm)
- **Component Count:** 12 Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** 4 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, 1.75 m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [1.05, 0.75, 1.75]$.

---

## 4. Component Breakdown & Geometry Table (12 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.92)` | `(0.00, 0.05)` | `#d8cfc4` | `true` | `h` | Architectural element #1 |
| 2 | `cyl` | `(-0.25, 0.00)` | `(0.16, 0.16)` | `(0.05, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #2 |
| 3 | `cyl` | `(0.25, 0.00)` | `(0.16, 0.16)` | `(0.05, 0.03)` | `#c5a059` | `false` | `wdh` | Architectural element #3 |
| 4 | `cyl` | `(-0.25, 0.00)` | `(0.14, 0.14)` | `(0.08, 0.88)` | `#b89d78` | `faint` | `wd` | Architectural element #4 |
| 5 | `cyl` | `(0.25, 0.00)` | `(0.14, 0.14)` | `(0.08, 0.55)` | `#9c6838` | `false` | `wd` | Architectural element #5 |
| 6 | `cyl` | `(0.25, 0.08)` | `(0.45, 0.45)` | `(0.28, 0.04)` | `#dedbd2` | `true` | `wdh` | Architectural element #6 |
| 7 | `cyl` | `(-0.22, 0.10)` | `(0.45, 0.45)` | `(0.52, 0.04)` | `#dedbd2` | `true` | `wdh` | Architectural element #7 |
| 8 | `box` | `(0.22, 0.00)` | `(0.48, 0.52)` | `(0.62, 0.24)` | `#9c6838` | `true` | `wdh` | Architectural element #8 |
| 9 | `cyl (z)` | `(0.22, 0.27)` | `(0.26, 0.02)` | `(0.68, 0.12)` | `#18191d` | `false` | `wdh` | Architectural element #9 |
| 10 | `box` | `(0.22, 0.00)` | `(0.42, 0.46)` | `(0.63, 0.04)` | `#dedbd2` | `false` | `wdh` | Architectural element #10 |
| 11 | `cyl` | `(-0.25, 0.00)` | `(0.50, 0.50)` | `(0.94, 0.06)` | `#dedbd2` | `glow` | `wdh` | Architectural element #11 |
| 12 | `cyl` | `(-0.25, 0.00)` | `(0.48, 0.48)` | `(0.96, 0.04)` | `#cdc8bd` | `false` | `wdh` | Architectural element #12 |

---

## 5. 2D Architectural Symbol Specification
1. `rect` $(x: 0.00, z: 0.00, w: 0.94, d: 0.92)
2. `circle` $(x: -0.25, z: 0.00, r: 0.25)$
3. `circle` $(x: 0.25, z: 0.08, r: 0.22)$
4. `rect` $(x: 0.22, z: 0.00, w: 0.48, d: 0.52)

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
