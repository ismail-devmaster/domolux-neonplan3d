# Domolux Specification: Domolux Ergonomic Bouclé Nursing Rocking Lounge
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Ergonomic Bouclé Nursing Rocking Lounge
- **German Name:** Domolux Ergonomischer Still- und Schaukelsessel
- **Arabic Name:** كرسي الرضاعة والاسترخاء الهزاز من قماش البوكليه دومولوكس
- **Unique Item ID:** `nursing_rocking_chair`
- **Unique Pack ID:** `domolux.nursing_rocking_chair`
- **Collection:** Master Suites, Guest Hospitality and Nursery
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `bedroom`
- **Discovery Tags:** `rocking_chair`, `glider`, `nursing`, `boucle`, `nursery`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.85 m (85 cm)
- **Bounding Depth ($D$):** 0.95 m (95 cm)
- **Bounding Height ($H$):** 1.05 m (105 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 96 tris
- **Total Vertices:** 288 vertices
- **Architectural Edges:** 24 segments
- **Measured Bounding Box:** 0.73m × 0.91m × 1.05m

---

### 3. Design Concept & Architectural Expression
High-back ergonomic nursing and relaxation glider featuring tactile ivory bouclé upholstery, integrated high-density lumbar support, walnut runners, and brass arm accents.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.34, 0.00)` | `(0.06, 0.96)` | `(0.00, 0.08)` | `#362619` (wood) | `none` | Component #1 |
| 2 | `box` | `(0.34, 0.00)` | `(0.06, 0.96)` | `(0.00, 0.08)` | `#362619` (wood) | `none` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.64, 0.64)` | `(0.08, 0.22)` | `#c5a059` | `glow` | Component #3 |
| 4 | `box` | `(0.00, 0.02)` | `(0.78, 0.68)` | `(0.30, 0.22)` | `#eae4dc` (cushion) | `true` | Component #4 |
| 5 | `box` | `(0.00, -0.30)` | `(0.74, 0.22)` | `(0.50, 0.50)` | `#eae4dc` (cushion) | `true` | Component #5 |
| 6 | `box` | `(0.00, -0.22)` | `(0.54, 0.12)` | `(0.48, 0.18)` | `#d9cab8` (cushion) | `none` | Component #6 |
| 7 | `box` | `(-0.38, 0.00)` | `(0.10, 0.62)` | `(0.44, 0.20)` | `#eae4dc` (cushion) | `none` | Component #7 |
| 8 | `box` | `(0.38, 0.00)` | `(0.10, 0.62)` | `(0.44, 0.20)` | `#eae4dc` (cushion) | `none` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.85, d: 0.95)
- **Shape 2:** `rect` $(x: 0.00, z: 0.02, w: 0.74, d: 0.60)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/nursing_rocking_chair.fp3dpack`
