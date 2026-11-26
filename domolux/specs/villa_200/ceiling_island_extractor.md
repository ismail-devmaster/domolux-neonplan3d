# Domolux Specification: Domolux Ceiling-Mounted Island Extraction Hood
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Ceiling-Mounted Island Extraction Hood
- **German Name:** Domolux Deckenhängende Kücheninsel-Dunstabzugshaube
- **Arabic Name:** شفاط مطبخ جزيرة معلق بالسقف دومولوكس
- **Unique Item ID:** `ceiling_island_extractor`
- **Unique Pack ID:** `domolux.ceiling_island_extractor`
- **Collection:** Gourmet Kitchens and Specialty Culinary Equipment
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `ceiling`
- **Placement Surface:** `false`
- **Target Environments:** `kitchen`
- **Discovery Tags:** `extractor`, `hood`, `island`, `kitchen`, `ventilation`, `bronze`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.40 m (140 cm)
- **Bounding Depth ($D$):** 0.65 m (65 cm)
- **Bounding Height ($H$):** 0.85 m (85 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 84 tris
- **Total Vertices:** 252 vertices
- **Architectural Edges:** 44 segments
- **Measured Bounding Box:** 1.4m × 0.64m × 0.85m

---

### 3. Design Concept & Architectural Expression
Suspended architectural island range hood with brushed champagne bronze shell, perimeter aspiration baffle filters, integrated warm LED cooktop floodlights, and silent motor.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.50, 0.50)` | `(0.95, 0.05)` | `#1e2229` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.45, 0.45)` | `(0.35, 0.60)` | `#3d301b` (dark) | `glow` | Component #2 |
| 3 | `loft` | `(0.00, 0.00)` | `(0.50, 0.50)` | `(0.12, 0.24)` | `#c5a059` | `glow` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(1.00, 0.98)` | `(0.02, 0.10)` | `#c5a059` | `glow` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.88, 0.84)` | `(0.00, 0.03)` | `metal` | `true` | Component #5 |
| 6 | `box` | `(-0.32, 0.00)` | `(0.15, 0.60)` | `(0.01, 0.01)` | `#fff5ea` | `glow` [glow] | Component #6 |
| 7 | `box` | `(0.32, 0.00)` | `(0.15, 0.60)` | `(0.01, 0.01)` | `#fff5ea` | `glow` [glow] | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.98)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.88, d: 0.84) [filled]

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/ceiling_island_extractor.fp3dpack`
