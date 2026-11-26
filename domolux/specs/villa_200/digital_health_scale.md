# Domolux Specification: Domolux Biometric Tempered-Glass Smart Scale
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Biometric Tempered-Glass Smart Scale
- **German Name:** Domolux Smarte Glas-Körperanalysewaage
- **Arabic Name:** ميزان الصحة الذكي الزجاجي بمؤشرات قياس متقدمة دومولوكس
- **Unique Item ID:** `digital_health_scale`
- **Unique Pack ID:** `domolux.digital_health_scale`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `scale`, `health`, `smart`, `biometric`, `glass`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.38 m (38 cm)
- **Bounding Depth ($D$):** 0.38 m (38 cm)
- **Bounding Height ($H$):** 0.06 m (6 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 260 tris
- **Total Vertices:** 780 vertices
- **Architectural Edges:** 16 segments
- **Measured Bounding Box:** 0.37m × 0.37m × 0.06m

---

### 3. Design Concept & Architectural Expression
Ultra-thin tempered smoked-glass body composition scale with chamfered satin brass perimeter band, four-point ITO conductive sensor pads, and concealed matrix LED readouts.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(-0.38, -0.38)` | `(0.12, 0.12)` | `(0.00, 0.25)` | `#111215` | `none` | Component #1 |
| 2 | `cyl` | `(0.38, -0.38)` | `(0.12, 0.12)` | `(0.00, 0.25)` | `#111215` | `none` | Component #2 |
| 3 | `cyl` | `(-0.38, 0.38)` | `(0.12, 0.12)` | `(0.00, 0.25)` | `#111215` | `none` | Component #3 |
| 4 | `cyl` | `(0.38, 0.38)` | `(0.12, 0.12)` | `(0.00, 0.25)` | `#111215` | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.25, 0.40)` | `#c5a059` | `glow` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.94, 0.94)` | `(0.65, 0.35)` | `#1a1e24` (glass) | `true` | Component #6 |
| 7 | `box` | `(0.00, -0.28)` | `(0.35, 0.12)` | `(0.98, 0.02)` | `#ffffff` | `none` [glow] | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.96)
- **Shape 2:** `rect` $(x: 0.00, z: -0.28, w: 0.35, d: 0.12)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/digital_health_scale.fp3dpack`
