# Domolux Specification: Domolux Architectural Nursery Changing Credenza
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Architectural Nursery Changing Credenza
- **German Name:** Domolux Exklusive Wickelkommode
- **Arabic Name:** طاولة تغيير وتجهيز الرضع الفاخرة بأدراج تخزين دومولوكس
- **Unique Item ID:** `infant_changing_station`
- **Unique Pack ID:** `domolux.infant_changing_station`
- **Collection:** Master Suites, Guest Hospitality and Nursery
- **Category:** Bedroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bedroom`
- **Discovery Tags:** `changing_table`, `dresser`, `nursery`, `baby`, `storage`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.05 m (105 cm)
- **Bounding Depth ($D$):** 0.65 m (65 cm)
- **Bounding Height ($H$):** 0.95 m (95 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 72 tris
- **Total Vertices:** 216 vertices
- **Architectural Edges:** 32 segments
- **Measured Bounding Box:** 1.03m × 0.62m × 0.94m

---

### 3. Design Concept & Architectural Expression
Master nursery changing dresser with removable solid oak safety gallery rim, waterproof vegan leather changing pad, push-to-open soft-close diaper storage drawers, and brass base.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.92)` | `(0.00, 0.10)` | `#c5a059` | `glow` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.96, 0.92)` | `(0.10, 0.75)` | `#252830` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.85, 0.14)` | `#453223` (wood) | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.86, 0.84)` | `(0.86, 0.08)` | `#e8ecef` (cushion) | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.47)` | `(0.92, 0.02)` | `(0.35, 0.02)` | `#c5a059` | `none` | Component #5 |
| 6 | `box` | `(0.00, 0.47)` | `(0.92, 0.02)` | `(0.60, 0.02)` | `#c5a059` | `none` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.86, d: 0.84)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/infant_changing_station.fp3dpack`
