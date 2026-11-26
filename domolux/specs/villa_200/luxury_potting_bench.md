# Domolux Specification: Domolux Estate Greenhouse Teak and Zinc Potting Bench
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Estate Greenhouse Teak and Zinc Potting Bench
- **German Name:** Domolux Exklusiver Pflanztisch aus Teak & Zink
- **Arabic Name:** طاولة العناية بالنباتات والغرس بخشب التيك والزنك دومولوكس
- **Unique Item ID:** `luxury_potting_bench`
- **Unique Pack ID:** `domolux.luxury_potting_bench`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`, `storage`
- **Discovery Tags:** `potting_bench`, `gardening`, `greenhouse`, `teak`, `plants`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.25 m (125 cm)
- **Bounding Depth ($D$):** 0.65 m (65 cm)
- **Bounding Height ($H$):** 1.45 m (145 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 96 tris
- **Total Vertices:** 288 vertices
- **Architectural Edges:** 16 segments
- **Measured Bounding Box:** 1.23m × 0.61m × 1.39m

---

### 3. Design Concept & Architectural Expression
Weather-resistant greenhouse workstation crafted from solid plantation teak with dry-sink zinc potting basin, upper tool shelf, and soil storage bucket rack.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.42, -0.38)` | `(0.08, 0.08)` | `(0.00, 0.96)` | `#543c2b` (wood) | `none` | Component #1 |
| 2 | `box` | `(0.42, -0.38)` | `(0.08, 0.08)` | `(0.00, 0.96)` | `#543c2b` (wood) | `none` | Component #2 |
| 3 | `box` | `(-0.42, 0.38)` | `(0.08, 0.08)` | `(0.00, 0.58)` | `#543c2b` (wood) | `none` | Component #3 |
| 4 | `box` | `(0.42, 0.38)` | `(0.08, 0.08)` | `(0.00, 0.58)` | `#543c2b` (wood) | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.90, 0.84)` | `(0.12, 0.04)` | `#3d2b1f` (wood) | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.98, 0.94)` | `(0.58, 0.08)` | `#788591` | `true` | Component #6 |
| 7 | `box` | `(0.22, 0.05)` | `(0.42, 0.45)` | `(0.48, 0.10)` | `#495057` | `none` | Component #7 |
| 8 | `box` | `(0.00, -0.38)` | `(0.94, 0.15)` | `(0.82, 0.04)` | `#543c2b` (wood) | `none` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.94)
- **Shape 2:** `rect` $(x: 0.22, z: 0.05, w: 0.42, d: 0.45)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/luxury_potting_bench.fp3dpack`
