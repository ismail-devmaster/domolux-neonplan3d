# Domolux Specification: Domolux Acoustic Igloo Children's Reading Sanctuary
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Acoustic Igloo Children's Reading Sanctuary
- **German Name:** Domolux Akustische Lese- und Rückzugskapsel
- **Arabic Name:** كبسولة القراءة الصوتية المعزولة للأطفال دومولوكس
- **Unique Item ID:** `childrens_reading_pod`
- **Unique Pack ID:** `domolux.childrens_reading_pod`
- **Collection:** Master Suites, Guest Hospitality and Nursery
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `bedroom`
- **Discovery Tags:** `reading_pod`, `acoustic`, `nursery`, `kids`, `cozy`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.10 m (110 cm)
- **Bounding Depth ($D$):** 1.10 m (110 cm)
- **Bounding Height ($H$):** 1.35 m (135 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 192 tris
- **Total Vertices:** 576 vertices
- **Architectural Edges:** 12 segments
- **Measured Bounding Box:** 1.03m × 1.01m × 1.3m

---

### 3. Design Concept & Architectural Expression
Curvilinear spherical acoustic retreat pod featuring molded felt exterior shell, tufted velvet interior nest, integrated LED constellation reading dome, and oak plinth.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(0.00, 0.00)` | `(0.84, 0.84)` | `(0.00, 0.08)` | `#362619` (wood) | `none` | Component #1 |
| 2 | `loft` | `(0.00, -0.05)` | `(0.94, 0.90)` | `(0.08, 0.88)` | `#3f4652` (fabric) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.38)` | `(0.68, 0.08)` | `(0.16, 0.70)` | `#c2ab87` (wood) | `true` | Component #3 |
| 4 | `cyl` | `(0.00, -0.05)` | `(0.78, 0.78)` | `(0.12, 0.20)` | `#1b4332` (cushion) | `none` | Component #4 |
| 5 | `cyl` | `(0.00, -0.08)` | `(0.35, 0.35)` | `(0.90, 0.02)` | `#ffffff` | `none` [glow] | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `circle` $(x: 0.00, z: -0.05, r: 0.46)$
- **Shape 2:** `line` $(x_1: -0.34, z_1: 0.38, x_2: 0.34, z_2: 0.38)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/childrens_reading_pod.fp3dpack`
