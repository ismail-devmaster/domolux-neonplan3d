# Domolux Specification: Domolux Heirloom Curved Oak Nursery Crib
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Heirloom Curved Oak Nursery Crib
- **German Name:** Domolux Exklusives Designer-Kinderbett
- **Arabic Name:** سرير أطفال ملكي فاخر من خشب البلوط المنحني دومولوكس
- **Unique Item ID:** `luxury_nursery_crib`
- **Unique Pack ID:** `domolux.luxury_nursery_crib`
- **Collection:** Master Suites, Guest Hospitality and Nursery
- **Category:** Bedroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bedroom`
- **Discovery Tags:** `crib`, `nursery`, `baby`, `infant`, `oak`, `bedroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.45 m (145 cm)
- **Bounding Depth ($D$):** 0.80 m (80 cm)
- **Bounding Height ($H$):** 0.95 m (95 cm)
- **Geometric Parts:** 9 native components (Engine limit: 60)
- **Total Triangles:** 284 tris
- **Total Vertices:** 852 vertices
- **Architectural Edges:** 24 segments
- **Measured Bounding Box:** 1.36m × 0.76m × 0.93m

---

### 3. Design Concept & Architectural Expression
Heirloom-grade convertible crib handcrafted from solid white oak with softly radiused corners, precision vertical safety spindles, non-toxic organic cotton mattress, and brass feet.

---

### 4. Component Breakdown & Geometry Table (9 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(-0.45, -0.44)` | `(0.07, 0.07)` | `(0.00, 0.98)` | `#8a6642` (wood) | `none` | Component #1 |
| 2 | `cyl` | `(0.45, -0.44)` | `(0.07, 0.07)` | `(0.00, 0.98)` | `#8a6642` (wood) | `none` | Component #2 |
| 3 | `cyl` | `(-0.45, 0.44)` | `(0.07, 0.07)` | `(0.00, 0.98)` | `#8a6642` (wood) | `none` | Component #3 |
| 4 | `cyl` | `(0.45, 0.44)` | `(0.07, 0.07)` | `(0.00, 0.98)` | `#8a6642` (wood) | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.84, 0.82)` | `(0.22, 0.18)` | `#f8f9fa` (cushion) | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.44)` | `(0.90, 0.05)` | `(0.88, 0.08)` | `#8a6642` (wood) | `true` | Component #6 |
| 7 | `box` | `(0.00, -0.44)` | `(0.90, 0.05)` | `(0.88, 0.08)` | `#8a6642` (wood) | `true` | Component #7 |
| 8 | `box` | `(0.00, 0.44)` | `(0.84, 0.02)` | `(0.38, 0.50)` | `#a57d54` | `none` | Component #8 |
| 9 | `box` | `(0.00, -0.44)` | `(0.84, 0.02)` | `(0.38, 0.50)` | `#a57d54` | `none` | Component #9 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.94)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.84, d: 0.82)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/luxury_nursery_crib.fp3dpack`
