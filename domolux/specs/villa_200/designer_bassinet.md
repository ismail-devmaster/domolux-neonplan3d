# Domolux Specification: Domolux Cocoon Sculptural Infant Bassinet
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Cocoon Sculptural Infant Bassinet
- **German Name:** Domolux Designer-Babywiege Cocoon
- **Arabic Name:** مهد أطفال عضوي منحوت بأرجل نحاسية دومولوكس
- **Unique Item ID:** `designer_bassinet`
- **Unique Pack ID:** `domolux.designer_bassinet`
- **Collection:** Master Suites, Guest Hospitality and Nursery
- **Category:** Bedroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bedroom`
- **Discovery Tags:** `bassinet`, `nursery`, `infant`, `cradle`, `brass`, `bedroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.90 m (90 cm)
- **Bounding Depth ($D$):** 0.55 m (55 cm)
- **Bounding Height ($H$):** 0.85 m (85 cm)
- **Geometric Parts:** 4 native components (Engine limit: 60)
- **Total Triangles:** 92 tris
- **Total Vertices:** 276 vertices
- **Architectural Edges:** 12 segments
- **Measured Bounding Box:** 0.85m × 0.51m × 0.83m

---

### 3. Design Concept & Architectural Expression
Freestanding organic cocoon bassinet with steam-bent walnut shell, breathable perforated linen liner, and hand-finished satin brass hairpin cradle stand.

---

### 4. Component Breakdown & Geometry Table (4 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.72, 0.65)` | `(0.00, 0.48)` | `#c5a059` | `glow` | Component #1 |
| 2 | `loft` | `(0.00, 0.00)` | `(0.94, 0.92)` | `(0.46, 0.52)` | `#3d2b1f` (wood) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.82, 0.78)` | `(0.52, 0.42)` | `#f4ede2` (cushion) | `none` | Component #3 |
| 4 | `cyl` | `(0.00, 0.00)` | `(0.74, 0.74)` | `(0.62, 0.12)` | `#ffffff` (cushion) | `none` | Component #4 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `circle` $(x: 0.00, z: 0.00, r: 0.44)$
- **Shape 2:** `circle` $(x: 0.00, z: 0.00, r: 0.36)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/designer_bassinet.fp3dpack`
