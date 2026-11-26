# Domolux Specification: Domolux Professional Hydraulic Massage Therapy Bed
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Professional Hydraulic Massage Therapy Bed
- **German Name:** Domolux Professionelle Spa-Massageliege
- **Arabic Name:** طاولة التدليك والعلاج الطبيعي الهيدروليكية الفاخرة دومولوكس
- **Unique Item ID:** `massage_therapy_table`
- **Unique Pack ID:** `domolux.massage_therapy_table`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `massage`, `spa`, `therapy_bed`, `wellness`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.80 m (80 cm)
- **Bounding Depth ($D$):** 2.10 m (210 cm)
- **Bounding Height ($H$):** 0.75 m (75 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 160 tris
- **Total Vertices:** 480 vertices
- **Architectural Edges:** 20 segments
- **Measured Bounding Box:** 0.78m × 2.1m × 0.69m

---

### 3. Design Concept & Architectural Expression
Ultra-luxury electric spa massage couch featuring a heated multi-density memory foam mattress, sculpted face cradle, solid smoked-oak base enclosure, and silent dual actuators.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.72, 0.78)` | `(0.00, 0.10)` | `#2b201a` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.55, 0.65)` | `(0.10, 0.52)` | `#c5a059` | `glow` | Component #2 |
| 3 | `box` | `(0.00, -0.04)` | `(0.94, 0.88)` | `(0.62, 0.08)` | `#1c1e22` | `true` | Component #3 |
| 4 | `loft` | `(0.00, -0.04)` | `(0.96, 0.88)` | `(0.70, 0.22)` | `#d9cab8` (cushion) | `true` | Component #4 |
| 5 | `cyl` | `(0.00, 0.44)` | `(0.38, 0.38)` | `(0.72, 0.12)` | `#cfbfab` (cushion) | `none` | Component #5 |
| 6 | `cyl` | `(0.00, 0.44)` | `(0.14, 0.14)` | `(0.72, 0.13)` | `#1a1a1a` | `none` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: -0.04, w: 0.96, d: 0.88)
- **Shape 2:** `circle` $(x: 0.00, z: 0.44, r: 0.19)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/massage_therapy_table.fp3dpack`
