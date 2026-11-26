# Domolux Specification: Domolux Monumental Forged Bronze Walled Garden Portal
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Monumental Forged Bronze Walled Garden Portal
- **German Name:** Domolux Monumentales Schmiedebronze-Gartentor
- **Arabic Name:** بوابة الحديقة الملكية المعمارية من البرونز المصقول دومولوكس
- **Unique Item ID:** `monumental_garden_gate`
- **Unique Pack ID:** `domolux.monumental_garden_gate`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `garden_gate`, `bronze`, `portal`, `estate`, `entry`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.80 m (180 cm)
- **Bounding Depth ($D$):** 0.40 m (40 cm)
- **Bounding Height ($H$):** 2.50 m (250 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 104 tris
- **Total Vertices:** 312 vertices
- **Architectural Edges:** 46 segments
- **Measured Bounding Box:** 1.76m × 0.38m × 2.5m

---

### 3. Design Concept & Architectural Expression
Pedestrian garden portal featuring custom-forged bronze geometric grille panels, solid stone framing piers, motorized magnetic shear lock, and concealed pivot hinge.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.40, 0.00)` | `(0.18, 0.92)` | `(0.00, 0.98)` | `#495057` (dark) | `true` | Component #1 |
| 2 | `box` | `(0.40, 0.00)` | `(0.18, 0.92)` | `(0.00, 0.98)` | `#495057` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.92, 0.08)` | `#343a40` | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.60, 0.08)` | `(0.04, 0.86)` | `#c5a059` | `glow` | Component #4 |
| 5 | `cyl` | `(0.22, 0.10)` | `(0.03, 0.03)` | `(0.35, 0.40)` | `#d4af37` | `glow` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: -0.40, z: 0.00, w: 0.18, d: 0.92)
- **Shape 2:** `rect` $(x: 0.40, z: 0.00, w: 0.18, d: 0.92)
- **Shape 3:** `line` $(x_1: -0.31, z_1: 0.00, x_2: 0.31, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/monumental_garden_gate.fp3dpack`
