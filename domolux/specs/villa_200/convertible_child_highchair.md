# Domolux Specification: Domolux Sculptural Convertible Highchair
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Sculptural Convertible Highchair
- **German Name:** Domolux Mitwachsender Designer-Kinderhochstuhl
- **Arabic Name:** كرسي طعام الأطفال المتطور المصنوع من الجوز والنحاس دومولوكس
- **Unique Item ID:** `convertible_child_highchair`
- **Unique Pack ID:** `domolux.convertible_child_highchair`
- **Collection:** Master Suites, Guest Hospitality and Nursery
- **Category:** Dining
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `dining`, `kitchen`
- **Discovery Tags:** `highchair`, `child`, `dining`, `nursery`, `walnut`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.55 m (55 cm)
- **Bounding Depth ($D$):** 0.55 m (55 cm)
- **Bounding Height ($H$):** 0.88 m (88 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 272 tris
- **Total Vertices:** 816 vertices
- **Architectural Edges:** 16 segments
- **Measured Bounding Box:** 0.43m × 0.45m × 0.83m

---

### 3. Design Concept & Architectural Expression
Evolutionary child dining highchair constructed from bent walnut ply, sand-cast brass stability spreaders, removable food-grade silicone dining tray, and padded harness.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(-0.36, -0.36)` | `(0.06, 0.06)` | `(0.00, 0.62)` | `#3d2b1f` (wood) | `none` | Component #1 |
| 2 | `cyl` | `(0.36, -0.36)` | `(0.06, 0.06)` | `(0.00, 0.62)` | `#3d2b1f` (wood) | `none` | Component #2 |
| 3 | `cyl` | `(-0.36, 0.36)` | `(0.06, 0.06)` | `(0.00, 0.62)` | `#3d2b1f` (wood) | `none` | Component #3 |
| 4 | `cyl` | `(0.36, 0.36)` | `(0.06, 0.06)` | `(0.00, 0.62)` | `#3d2b1f` (wood) | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.28)` | `(0.62, 0.16)` | `(0.28, 0.04)` | `#543c2b` (wood) | `none` | Component #5 |
| 6 | `box` | `(0.00, -0.05)` | `(0.70, 0.68)` | `(0.62, 0.32)` | `#2d2017` (wood) | `true` | Component #6 |
| 7 | `box` | `(0.00, -0.05)` | `(0.60, 0.58)` | `(0.64, 0.26)` | `#d2cbc4` (cushion) | `none` | Component #7 |
| 8 | `box` | `(0.00, 0.25)` | `(0.74, 0.35)` | `(0.82, 0.05)` | `#f8f9fa` | `true` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.88, d: 0.88)
- **Shape 2:** `rect` $(x: 0.00, z: 0.25, w: 0.74, d: 0.35)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/convertible_child_highchair.fp3dpack`
