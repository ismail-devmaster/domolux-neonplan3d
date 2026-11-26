# Domolux Specification: Domolux Poolside Sanctuary Luxury Daybed Cabana
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Poolside Sanctuary Luxury Daybed Cabana
- **German Name:** Domolux Exklusive Outdoor-Lounge-Cabana
- **Arabic Name:** كابانا الاسترخاء الفاخرة بجانب المسبح بستائر ومقاعد سريرية دومولوكس
- **Unique Item ID:** `private_outdoor_cabana`
- **Unique Pack ID:** `domolux.private_outdoor_cabana`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `cabana`, `daybed`, `poolside`, `teak`, `sunbrella`, `outdoor`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.20 m (220 cm)
- **Bounding Depth ($D$):** 2.20 m (220 cm)
- **Bounding Height ($H$):** 2.30 m (230 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 140 tris
- **Total Vertices:** 420 vertices
- **Architectural Edges:** 56 segments
- **Measured Bounding Box:** 2.11m × 2.11m × 2.9m

---

### 3. Design Concept & Architectural Expression
Private poolside daybed retreat featuring solid plantation teak posts, marine-grade Sunbrella curtains, oversized waterproof daybed mattress, and slatted roof shade.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.44, -0.44)` | `(0.08, 0.08)` | `(0.00, 0.96)` | `#543c2b` (wood) | `true` | Component #1 |
| 2 | `box` | `(0.44, -0.44)` | `(0.08, 0.08)` | `(0.00, 0.96)` | `#543c2b` (wood) | `true` | Component #2 |
| 3 | `box` | `(-0.44, 0.44)` | `(0.08, 0.08)` | `(0.00, 0.96)` | `#543c2b` (wood) | `true` | Component #3 |
| 4 | `box` | `(0.44, 0.44)` | `(0.08, 0.08)` | `(0.00, 0.96)` | `#543c2b` (wood) | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.92, 0.92)` | `(0.12, 0.12)` | `#3d2b1f` (wood) | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.86, 0.86)` | `(0.24, 0.22)` | `#dfd7cb` (cushion) | `true` | Component #6 |
| 7 | `cyl (x)` | `(0.00, -0.32)` | `(0.20, 0.20)` | `(0.44, 0.82)` | `#cbbba7` (cushion) | `none` | Component #7 |
| 8 | `box` | `(0.00, 0.00)` | `(0.96, 0.96)` | `(0.94, 0.06)` | `#543c2b` (wood) | `true` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.96)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.86, d: 0.86)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/private_outdoor_cabana.fp3dpack`
