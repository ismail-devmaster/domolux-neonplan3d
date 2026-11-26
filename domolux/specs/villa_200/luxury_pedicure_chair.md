# Domolux Specification: Domolux Throne Luxury Pedicure and Foot-Spa Lounge
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Throne Luxury Pedicure and Foot-Spa Lounge
- **German Name:** Domolux Luxus-Pediküre-Sessel mit Whirlpoolbecken
- **Arabic Name:** كرسي العناية بالقدمين والباديكير الفاخر دومولوكس
- **Unique Item ID:** `luxury_pedicure_chair`
- **Unique Pack ID:** `domolux.luxury_pedicure_chair`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `pedicure`, `spa`, `throne`, `foot_bath`, `wellness`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.85 m (85 cm)
- **Bounding Depth ($D$):** 1.35 m (135 cm)
- **Bounding Height ($H$):** 1.30 m (130 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 140 tris
- **Total Vertices:** 420 vertices
- **Architectural Edges:** 48 segments
- **Measured Bounding Box:** 0.82m × 1.32m × 1.27m

---

### 3. Design Concept & Architectural Expression
Full-service salon spa throne with diamond-quilted leather massage armchair, integrated pipeless jet foot whirlpool basin, and pivoting manicure trays.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.96)` | `(0.00, 0.14)` | `#1a1c22` | `true` | Component #1 |
| 2 | `box` | `(0.00, 0.28)` | `(0.82, 0.44)` | `(0.14, 0.24)` | `#f8f9fa` (white) | `true` | Component #2 |
| 3 | `cyl` | `(0.00, 0.28)` | `(0.58, 0.58)` | `(0.20, 0.18)` | `#00b4d8` | `none` [glow] | Component #3 |
| 4 | `box` | `(0.00, 0.28)` | `(0.32, 0.16)` | `(0.40, 0.06)` | `#2b221d` | `none` | Component #4 |
| 5 | `box` | `(0.00, -0.16)` | `(0.84, 0.55)` | `(0.16, 0.26)` | `#cbbba7` (cushion) | `true` | Component #5 |
| 6 | `box` | `(0.00, -0.38)` | `(0.84, 0.18)` | `(0.42, 0.56)` | `#cbbba7` (cushion) | `true` | Component #6 |
| 7 | `box` | `(-0.42, -0.16)` | `(0.12, 0.60)` | `(0.34, 0.22)` | `#22252c` | `true` | Component #7 |
| 8 | `box` | `(0.42, -0.16)` | `(0.12, 0.60)` | `(0.34, 0.22)` | `#22252c` | `true` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.94, d: 0.96)
- **Shape 2:** `circle` $(x: 0.00, z: 0.28, r: 0.26)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/luxury_pedicure_chair.fp3dpack`
