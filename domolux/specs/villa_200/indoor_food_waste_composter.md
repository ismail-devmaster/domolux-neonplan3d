# Domolux Specification: Domolux Indoor Food-Waste Dehydrating Composter
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Indoor Food-Waste Dehydrating Composter
- **German Name:** Domolux Elektrischer Küchenabfall-Komposter
- **Arabic Name:** جهاز تجفيف وتحويل مخلفات الطعام المنزلي دومولوكس
- **Unique Item ID:** `indoor_food_waste_composter`
- **Unique Pack ID:** `domolux.indoor_food_waste_composter`
- **Collection:** Gourmet Kitchens and Specialty Culinary Equipment
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `surface`
- **Placement Surface:** `true`
- **Target Environments:** `kitchen`
- **Discovery Tags:** `composter`, `waste`, `organic`, `sustainability`, `kitchen`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.35 m (35 cm)
- **Bounding Depth ($D$):** 0.45 m (45 cm)
- **Bounding Height ($H$):** 0.42 m (42 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 104 tris
- **Total Vertices:** 312 vertices
- **Architectural Edges:** 42 segments
- **Measured Bounding Box:** 0.32m × 0.41m × 0.42m

---

### 3. Design Concept & Architectural Expression
Countertop or undercounter electric culinary waste dehydrator and compost transformer with activated carbon odor scrubbing, cast aluminum processing chamber, and touch controls.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.92, 0.92)` | `(0.00, 0.15)` | `#1c1d22` | `true` | Component #1 |
| 2 | `loft` | `(0.00, 0.00)` | `(0.88, 0.88)` | `(0.15, 0.65)` | `#25272e` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.86, 0.86)` | `(0.80, 0.15)` | `#16171b` | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.38)` | `(0.18, 0.06)` | `(0.84, 0.05)` | `#c5a059` | `glow` | Component #4 |
| 5 | `cyl` | `(0.00, 0.00)` | `(0.42, 0.42)` | `(0.96, 0.03)` | `#00e676` | `glow` [glow] | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.92, d: 0.92)
- **Shape 2:** `circle` $(x: 0.00, z: 0.00, r: 0.22)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/indoor_food_waste_composter.fp3dpack`
