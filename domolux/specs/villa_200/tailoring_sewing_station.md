# Domolux Specification: Domolux Haute-Couture Tailoring and Sewing Desk
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Haute-Couture Tailoring and Sewing Desk
- **German Name:** Domolux Haute-Couture Nähtisch & Zuschneidestation
- **Arabic Name:** طاولة الخياطة وتفصيل الأزياء الراقية دومولوكس
- **Unique Item ID:** `tailoring_sewing_station`
- **Unique Pack ID:** `domolux.tailoring_sewing_station`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `storage`, `bedroom`
- **Discovery Tags:** `sewing_desk`, `tailoring`, `craft`, `couture`, `utility`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.30 m (130 cm)
- **Bounding Depth ($D$):** 0.65 m (65 cm)
- **Bounding Height ($H$):** 0.78 m (78 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 260 tris
- **Total Vertices:** 780 vertices
- **Architectural Edges:** 16 segments
- **Measured Bounding Box:** 1.27m × 0.62m × 0.78m

---

### 3. Design Concept & Architectural Expression
Bespoke tailoring desk with motorized lift platform for sewing machines, fold-out fabric cutting extension, spool rack drawers, and brass measuring rule inlay.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(-0.42, -0.38)` | `(0.06, 0.06)` | `(0.00, 0.88)` | `#8a6642` (wood) | `none` | Component #1 |
| 2 | `cyl` | `(0.42, -0.38)` | `(0.06, 0.06)` | `(0.00, 0.88)` | `#8a6642` (wood) | `none` | Component #2 |
| 3 | `cyl` | `(-0.42, 0.38)` | `(0.06, 0.06)` | `(0.00, 0.88)` | `#8a6642` (wood) | `none` | Component #3 |
| 4 | `cyl` | `(0.42, 0.38)` | `(0.06, 0.06)` | `(0.00, 0.88)` | `#8a6642` (wood) | `none` | Component #4 |
| 5 | `box` | `(-0.28, 0.00)` | `(0.35, 0.88)` | `(0.25, 0.63)` | `#22252c` (dark) | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.88, 0.12)` | `#e8ded1` (wood) | `true` | Component #6 |
| 7 | `box` | `(0.18, 0.00)` | `(0.42, 0.48)` | `(0.89, 0.02)` | `#252830` | `none` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `rect` $(x: 0.18, z: 0.00, w: 0.42, d: 0.48)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/tailoring_sewing_station.fp3dpack`
