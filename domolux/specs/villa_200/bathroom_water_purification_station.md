# Domolux Specification: Domolux Mineralizing Bathroom Water Purification Column
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Mineralizing Bathroom Water Purification Column
- **German Name:** Domolux Bad-Wasseraufbereitungs- und Spendersäule
- **Arabic Name:** محطة تنقية وإعادة تمعدن مياه الشرب للحمام دومولوكس
- **Unique Item ID:** `bathroom_water_purification_station`
- **Unique Pack ID:** `domolux.bathroom_water_purification_station`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `water_station`, `purification`, `filtration`, `wellness`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.42 m (42 cm)
- **Bounding Depth ($D$):** 0.45 m (45 cm)
- **Bounding Height ($H$):** 1.15 m (115 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 160 tris
- **Total Vertices:** 480 vertices
- **Architectural Edges:** 30 segments
- **Measured Bounding Box:** 0.39m × 0.43m × 1.1m

---

### 3. Design Concept & Architectural Expression
Architectural floorstanding drinking water mineralizing station with reverse-osmosis filtration column, illuminated mouthwash glass cradle, and touchless chilled tap.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.92, 0.92)` | `(0.00, 0.06)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.05)` | `(0.94, 0.88)` | `(0.06, 0.90)` | `#22252c` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.15)` | `(0.72, 0.45)` | `(0.52, 0.38)` | `#111215` | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.15)` | `(0.68, 0.42)` | `(0.52, 0.03)` | `metal` | `none` | Component #4 |
| 5 | `cyl` | `(0.00, 0.02)` | `(0.05, 0.05)` | `(0.80, 0.16)` | `#c5a059` | `glow` | Component #5 |
| 6 | `cyl` | `(0.00, 0.15)` | `(0.18, 0.18)` | `(0.89, 0.02)` | `#00e5ff` | `none` [glow] | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: -0.05, w: 0.94, d: 0.88)
- **Shape 2:** `circle` $(x: 0.00, z: 0.15, r: 0.20)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/bathroom_water_purification_station.fp3dpack`
