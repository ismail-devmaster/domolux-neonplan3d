# Domolux Specification: Domolux Full-Spectrum Infrared Wellness Cabin
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Full-Spectrum Infrared Wellness Cabin
- **German Name:** Domolux Vollspektrum-Infrarotkabine
- **Arabic Name:** مقصورة العلاج بالأشعة تحت الحمراء بالخشب الطبيعي دومولوكس
- **Unique Item ID:** `infrared_therapy_cabin`
- **Unique Pack ID:** `domolux.infrared_therapy_cabin`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `infrared`, `sauna`, `cabin`, `wellness`, `cedar`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.50 m (150 cm)
- **Bounding Depth ($D$):** 1.30 m (130 cm)
- **Bounding Height ($H$):** 2.10 m (210 cm)
- **Geometric Parts:** 10 native components (Engine limit: 60)
- **Total Triangles:** 164 tris
- **Total Vertices:** 492 vertices
- **Architectural Edges:** 70 segments
- **Measured Bounding Box:** 1.5m × 1.31m × 2.1m

---

### 3. Design Concept & Architectural Expression
Private wellness retreat crafted from Canadian red cedar with full-spectrum carbon/ceramic heating panels, chromotherapy LED ceiling, and frameless bronze glass entrance.

---

### 4. Component Breakdown & Geometry Table (10 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.00, 0.06)` | `#2b1e15` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.47)` | `(0.98, 0.06)` | `(0.06, 0.92)` | `#8c5835` (wood) | `true` | Component #2 |
| 3 | `box` | `(-0.47, 0.00)` | `(0.06, 0.98)` | `(0.06, 0.92)` | `#8c5835` (wood) | `true` | Component #3 |
| 4 | `box` | `(0.47, 0.00)` | `(0.06, 0.98)` | `(0.06, 0.92)` | `#8c5835` (wood) | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.96, 0.04)` | `#6e4327` | `none` | Component #5 |
| 6 | `box` | `(0.00, -0.22)` | `(0.88, 0.44)` | `(0.06, 0.24)` | `#b07d58` (wood) | `true` | Component #6 |
| 7 | `box` | `(-0.22, -0.43)` | `(0.28, 0.02)` | `(0.36, 0.48)` | `#8b0000` | `true` [glow] | Component #7 |
| 8 | `box` | `(0.22, -0.43)` | `(0.28, 0.02)` | `(0.36, 0.48)` | `#8b0000` | `true` [glow] | Component #8 |
| 9 | `box` | `(0.00, 0.47)` | `(0.88, 0.02)` | `(0.06, 0.90)` | `#3a2f26` (glass) | `true` | Component #9 |
| 10 | `cyl` | `(0.35, 0.49)` | `(0.03, 0.03)` | `(0.35, 0.40)` | `#c5a059` | `glow` | Component #10 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.98)
- **Shape 2:** `rect` $(x: 0.00, z: -0.22, w: 0.88, d: 0.44)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/infrared_therapy_cabin.fp3dpack`
