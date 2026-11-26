# Domolux Specification: Domolux Pull-Out Pantry Carousel System
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Pull-Out Pantry Carousel System
- **German Name:** Domolux Ausziehbarer Vorratsschrank-Drehkarussell
- **Arabic Name:** نظام دوار سحاب لخزانة المؤن دومولوكس
- **Unique Item ID:** `pull_out_pantry_carousel`
- **Unique Pack ID:** `domolux.pull_out_pantry_carousel`
- **Collection:** Gourmet Kitchens and Specialty Culinary Equipment
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `kitchen`
- **Discovery Tags:** `pantry`, `larder`, `carousel`, `storage`, `pull-out`, `kitchen`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.45 m (45 cm)
- **Bounding Depth ($D$):** 0.60 m (60 cm)
- **Bounding Height ($H$):** 2.15 m (215 cm)
- **Geometric Parts:** 9 native components (Engine limit: 60)
- **Total Triangles:** 196 tris
- **Total Vertices:** 588 vertices
- **Architectural Edges:** 70 segments
- **Measured Bounding Box:** 0.44m × 0.59m × 2.15m

---

### 3. Design Concept & Architectural Expression
Heavy-duty full-extension tall pantry larder with revolving tiered smoked-glass baskets, soft-closing damper slides, solid oak trim, and integrated sensor illumination.

---

### 4. Component Breakdown & Geometry Table (9 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.00, 1.00)` | `#22252c` (dark) | `true` | Component #1 |
| 2 | `box` | `(0.00, 0.48)` | `(0.96, 0.04)` | `(0.02, 0.96)` | `#3a2d23` (wood) | `true` | Component #2 |
| 3 | `cyl` | `(0.00, 0.48)` | `(0.03, 0.03)` | `(0.35, 0.50)` | `#c5a059` | `glow` | Component #3 |
| 4 | `cyl` | `(0.00, 0.00)` | `(0.06, 0.06)` | `(0.06, 0.88)` | `metal` | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.82, 0.78)` | `(0.12, 0.08)` | `glass` | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.82, 0.78)` | `(0.30, 0.08)` | `glass` | `true` | Component #6 |
| 7 | `box` | `(0.00, 0.00)` | `(0.82, 0.78)` | `(0.48, 0.08)` | `glass` | `true` | Component #7 |
| 8 | `box` | `(0.00, 0.00)` | `(0.82, 0.78)` | `(0.66, 0.08)` | `glass` | `true` | Component #8 |
| 9 | `box` | `(0.00, 0.00)` | `(0.82, 0.78)` | `(0.84, 0.08)` | `glass` | `true` | Component #9 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.98)
- **Shape 2:** `circle` $(x: 0.00, z: 0.00, r: 0.35)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/pull_out_pantry_carousel.fp3dpack`
