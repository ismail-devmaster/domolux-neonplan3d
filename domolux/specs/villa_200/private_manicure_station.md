# Domolux Specification: Domolux Bespoke Nail Grooming and Manicure Desk
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Bespoke Nail Grooming and Manicure Desk
- **German Name:** Domolux Luxus-Manikürtisch mit Absaugung
- **Arabic Name:** طاولة المانيكير والعناية بالأظافر الرخامية الفاخرة دومولوكس
- **Unique Item ID:** `private_manicure_station`
- **Unique Pack ID:** `domolux.private_manicure_station`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `manicure`, `salon`, `marble`, `beauty`, `wellness`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.20 m (120 cm)
- **Bounding Depth ($D$):** 0.60 m (60 cm)
- **Bounding Height ($H$):** 0.78 m (78 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 216 tris
- **Total Vertices:** 648 vertices
- **Architectural Edges:** 24 segments
- **Measured Bounding Box:** 1.18m × 0.58m × 0.99m

---

### 3. Design Concept & Architectural Expression
Architectural beauty desk featuring a honed Fior di Bosco marble worktop, flush-mounted downdraft dust vacuum extractor, ergonomic client wrist cushion, and fluted brass pedestal drawers.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.34, 0.00)` | `(0.28, 0.88)` | `(0.00, 0.72)` | `#23262d` (dark) | `true` | Component #1 |
| 2 | `box` | `(-0.38, 0.00)` | `(0.08, 0.88)` | `(0.00, 0.72)` | `#c5a059` | `glow` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.72, 0.08)` | `#50545b` | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.26, 0.26)` | `(0.80, 0.02)` | `metal` | `none` | Component #4 |
| 5 | `cyl (x)` | `(0.00, -0.22)` | `(0.08, 0.08)` | `(0.82, 0.45)` | `#d9cab8` (cushion) | `none` | Component #5 |
| 6 | `cyl` | `(-0.32, -0.30)` | `(0.04, 0.04)` | `(0.80, 0.16)` | `#c5a059` | `none` | Component #6 |
| 7 | `cyl (x)` | `(-0.20, -0.15)` | `(0.03, 0.03)` | `(0.94, 0.25)` | `#fff9e6` | `none` [glow] | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.26, d: 0.26)
- **Shape 3:** `rect` $(x: 0.34, z: 0.00, w: 0.28, d: 0.88)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/private_manicure_station.fp3dpack`
