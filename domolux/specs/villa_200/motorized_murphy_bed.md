# Domolux Specification: Domolux Motorized Architectural Wall-Bed System
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Motorized Architectural Wall-Bed System
- **German Name:** Domolux Motorisiertes Schrankbett-System
- **Arabic Name:** نظام سرير الحائط المخفي القابل للطي بمحرك كهربائي دومولوكس
- **Unique Item ID:** `motorized_murphy_bed`
- **Unique Pack ID:** `domolux.motorized_murphy_bed`
- **Collection:** Master Suites, Guest Hospitality and Nursery
- **Category:** Bedroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bedroom`
- **Discovery Tags:** `murphy_bed`, `wall_bed`, `motorized`, `space_saving`, `bedroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.70 m (170 cm)
- **Bounding Depth ($D$):** 0.60 m (60 cm)
- **Bounding Height ($H$):** 2.25 m (225 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 116 tris
- **Total Vertices:** 348 vertices
- **Architectural Edges:** 46 segments
- **Measured Bounding Box:** 1.67m × 0.57m × 2.21m

---

### 3. Design Concept & Architectural Expression
Architectural floor-to-ceiling cabinetry concealing a motorized fold-down queen bed with integrated counterbalanced pivot hinge, LED cove reading lights, and fluted oak front.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.15)` | `(0.98, 0.68)` | `(0.00, 0.98)` | `wood` (dark) | `true` | Component #1 |
| 2 | `box` | `(0.00, -0.10)` | `(0.88, 0.54)` | `(0.04, 0.92)` | `#181a1f` | `none` | Component #2 |
| 3 | `box` | `(0.00, 0.18)` | `(0.84, 0.48)` | `(0.05, 0.42)` | `#282b33` | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.18)` | `(0.80, 0.44)` | `(0.47, 0.18)` | `#e8ecef` (fabric) | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.44)` | `(0.94, 0.04)` | `(0.68, 0.28)` | `#422e1d` (wood) | `true` | Component #5 |
| 6 | `cyl (x)` | `(0.00, 0.42)` | `(0.04, 0.04)` | `(0.02, 0.78)` | `#c5a059` | `glow` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: -0.15, w: 0.98, d: 0.68)
- **Shape 2:** `rect` $(x: 0.00, z: 0.18, w: 0.84, d: 0.48)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/motorized_murphy_bed.fp3dpack`
