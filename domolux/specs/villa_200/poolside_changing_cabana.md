# Domolux Specification: Domolux Estate Private Poolside Changing Pavilion
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Estate Private Poolside Changing Pavilion
- **German Name:** Domolux Pool-Umkleidepavillon mit Außendusche
- **Arabic Name:** مقصورة تبديل الملابس والاستحمام الخارجية الفاخرة دومولوكس
- **Unique Item ID:** `poolside_changing_cabana`
- **Unique Pack ID:** `domolux.poolside_changing_cabana`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `changing_cabana`, `poolside`, `teak`, `changing_room`, `outdoor`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.80 m (180 cm)
- **Bounding Depth ($D$):** 1.80 m (180 cm)
- **Bounding Height ($H$):** 2.40 m (240 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 84 tris
- **Total Vertices:** 252 vertices
- **Architectural Edges:** 40 segments
- **Measured Bounding Box:** 1.76m × 1.76m × 2.4m

---

### 3. Design Concept & Architectural Expression
Fully enclosed teak changing cube with louvered ventilation panels, integrated bench seating, towel warmer nook, frosted glass skylight, and outdoor shower hookup.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.00, 0.08)` | `#3d2b1f` (wood) | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.46)` | `(0.96, 0.06)` | `(0.08, 0.90)` | `#543c2b` (wood) | `true` | Component #2 |
| 3 | `box` | `(-0.46, 0.00)` | `(0.06, 0.96)` | `(0.08, 0.90)` | `#543c2b` (wood) | `true` | Component #3 |
| 4 | `box` | `(0.46, 0.00)` | `(0.06, 0.96)` | `(0.08, 0.90)` | `#543c2b` (wood) | `true` | Component #4 |
| 5 | `box` | `(-0.28, 0.46)` | `(0.40, 0.04)` | `(0.08, 0.90)` | `#543c2b` (wood) | `true` | Component #5 |
| 6 | `box` | `(0.00, -0.28)` | `(0.82, 0.32)` | `(0.08, 0.22)` | `#6a4e37` (wood) | `true` | Component #6 |
| 7 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.96, 0.04)` | `#1c1e24` | `none` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.98)
- **Shape 2:** `rect` $(x: 0.00, z: -0.28, w: 0.82, d: 0.32)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/poolside_changing_cabana.fp3dpack`
