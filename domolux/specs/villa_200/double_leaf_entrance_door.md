# Domolux Specification: Domolux Bespoke Double-Leaf Entrance Door
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Bespoke Double-Leaf Entrance Door
- **German Name:** Domolux Zweiflügelige Portal-Eingangstür
- **Arabic Name:** باب مدخل مزدوج الأجنحة دومولوكس
- **Unique Item ID:** `double_leaf_entrance_door`
- **Unique Pack ID:** `domolux.double_leaf_entrance_door`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `hall`, `living`
- **Discovery Tags:** `door`, `double`, `entrance`, `walnut`, `bronze`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.40 m (240 cm)
- **Bounding Depth ($D$):** 0.24 m (24 cm)
- **Bounding Height ($H$):** 3.00 m (300 cm)
- **Geometric Parts:** 13 native components (Engine limit: 60)
- **Total Triangles:** 156 tris
- **Total Vertices:** 468 vertices
- **Architectural Edges:** 88 segments
- **Measured Bounding Box:** 2.4m × 0.22m × 3m

---

### 3. Design Concept & Architectural Expression
Symmetrical double-leaf architectural portal with dark walnut cassette panels, bronze moldings, twin full-height bronze pull stiles, and multipoint lock mortise.

---

### 4. Component Breakdown & Geometry Table (13 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.48, 0.00)` | `(0.04, 0.90)` | `(0.00, 1.00)` | `#3d301b` | `glow` | Component #1 |
| 2 | `box` | `(0.48, 0.00)` | `(0.04, 0.90)` | `(0.00, 1.00)` | `#3d301b` | `glow` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(1.00, 0.90)` | `(0.96, 0.04)` | `#3d301b` | `glow` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(1.00, 0.92)` | `(0.00, 0.02)` | `metal` | `faint` | Component #4 |
| 5 | `box` | `(-0.23, 0.00)` | `(0.45, 0.40)` | `(0.03, 0.93)` | `#382c22` (wood) | `true` | Component #5 |
| 6 | `box` | `(0.23, 0.00)` | `(0.45, 0.40)` | `(0.03, 0.93)` | `#382c22` (wood) | `true` | Component #6 |
| 7 | `loft` | `(-0.23, 0.12)` | `(0.35, 0.10)` | `(0.10, 0.35)` | `#47382c` | `true` | Component #7 |
| 8 | `loft` | `(-0.23, 0.12)` | `(0.35, 0.10)` | `(0.55, 0.35)` | `#47382c` | `true` | Component #8 |
| 9 | `loft` | `(0.23, 0.12)` | `(0.35, 0.10)` | `(0.10, 0.35)` | `#47382c` | `true` | Component #9 |
| 10 | `loft` | `(0.23, 0.12)` | `(0.35, 0.10)` | `(0.55, 0.35)` | `#47382c` | `true` | Component #10 |
| 11 | `box` | `(0.00, 0.12)` | `(0.02, 0.15)` | `(0.03, 0.93)` | `#c5a059` | `glow` | Component #11 |
| 12 | `box` | `(-0.06, 0.18)` | `(0.03, 0.08)` | `(0.25, 0.50)` | `#c5a059` | `glow` | Component #12 |
| 13 | `box` | `(0.06, 0.18)` | `(0.03, 0.08)` | `(0.25, 0.50)` | `#c5a059` | `glow` | Component #13 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.90)
- **Shape 2:** `rect` $(x: -0.23, z: 0.00, w: 0.45, d: 0.40)
- **Shape 3:** `rect` $(x: 0.23, z: 0.00, w: 0.45, d: 0.40)
- **Shape 4:** `line` $(x_1: 0.00, z_1: -0.20, x_2: 0.00, z_2: 0.20)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/double_leaf_entrance_door.fp3dpack`
