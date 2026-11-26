# Domolux Specification: Domolux Scandinavian Timber Playhouse and Mezzanine Loft
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Scandinavian Timber Playhouse and Mezzanine Loft
- **German Name:** Domolux Indoor-Spielhaus & Hochebene
- **Arabic Name:** كوخ ألعاب خشبي فاخر بطابقين مع درج مدمج دومولوكس
- **Unique Item ID:** `childrens_playhouse_loft`
- **Unique Pack ID:** `domolux.childrens_playhouse_loft`
- **Collection:** Master Suites, Guest Hospitality and Nursery
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `bedroom`
- **Discovery Tags:** `playhouse`, `loft`, `mezzanine`, `nursery`, `kids`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.00 m (200 cm)
- **Bounding Depth ($D$):** 1.50 m (150 cm)
- **Bounding Height ($H$):** 2.20 m (220 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 72 tris
- **Total Vertices:** 216 vertices
- **Architectural Edges:** 28 segments
- **Measured Bounding Box:** 2m × 1.47m × 2.2m

---

### 3. Design Concept & Architectural Expression
Indoor architectural play structure featuring a pitched timber play cabin, upper sleeping mezzanine, arched entrance doorway, structural rung steps, and internal LED starry cove.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.00, 0.06)` | `#22252c` | `none` | Component #1 |
| 2 | `box` | `(0.10, 0.00)` | `(0.76, 0.94)` | `(0.06, 0.65)` | `#e3ded7` (wood) | `true` | Component #2 |
| 3 | `box` | `(0.10, 0.46)` | `(0.35, 0.04)` | `(0.06, 0.52)` | `#16171b` | `none` | Component #3 |
| 4 | `box` | `(0.10, 0.00)` | `(0.78, 0.96)` | `(0.71, 0.22)` | `#bfa382` (wood) | `true` | Component #4 |
| 5 | `box` | `(-0.38, 0.00)` | `(0.20, 0.88)` | `(0.06, 0.65)` | `#8a6a4b` (wood) | `true` | Component #5 |
| 6 | `loft` | `(0.10, 0.00)` | `(0.82, 0.98)` | `(0.93, 0.07)` | `#4a3525` | `true` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.98)
- **Shape 2:** `rect` $(x: 0.10, z: 0.00, w: 0.76, d: 0.94)
- **Shape 3:** `rect` $(x: -0.38, z: 0.00, w: 0.20, d: 0.88)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/childrens_playhouse_loft.fp3dpack`
