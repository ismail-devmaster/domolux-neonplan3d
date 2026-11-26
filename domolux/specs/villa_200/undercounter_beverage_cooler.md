# Domolux Specification: Domolux Undercounter Luxury Beverage Cooler
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Undercounter Luxury Beverage Cooler
- **German Name:** Domolux Unterbau-Getränkekühlschrank
- **Arabic Name:** مبرد مشروبات فاخر تحت الكاونتر دومولوكس
- **Unique Item ID:** `undercounter_beverage_cooler`
- **Unique Pack ID:** `domolux.undercounter_beverage_cooler`
- **Collection:** Gourmet Kitchens and Specialty Culinary Equipment
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `true`
- **Target Environments:** `kitchen`, `living`
- **Discovery Tags:** `cooler`, `beverage`, `drinks`, `undercounter`, `appliance`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.60 m (60 cm)
- **Bounding Depth ($D$):** 0.60 m (60 cm)
- **Bounding Height ($H$):** 0.85 m (85 cm)
- **Geometric Parts:** 9 native components (Engine limit: 60)
- **Total Triangles:** 152 tris
- **Total Vertices:** 456 vertices
- **Architectural Edges:** 56 segments
- **Measured Bounding Box:** 0.59m × 0.58m × 0.83m

---

### 3. Design Concept & Architectural Expression
Built-under hospitality beverage center with double-glazed glass door, adjustable metal shelves for cans and champagne, toe-kick ventilation, and blue LED illumination.

---

### 4. Component Breakdown & Geometry Table (9 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.05)` | `(0.98, 0.85)` | `(0.00, 0.12)` | `#141519` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.12, 0.86)` | `#22252c` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.05)` | `(0.84, 0.78)` | `(0.30, 0.02)` | `metal` | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.05)` | `(0.84, 0.78)` | `(0.50, 0.02)` | `metal` | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.05)` | `(0.84, 0.78)` | `(0.70, 0.02)` | `metal` | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.46)` | `(0.96, 0.05)` | `(0.13, 0.84)` | `metal` | `true` | Component #6 |
| 7 | `box` | `(0.00, 0.46)` | `(0.78, 0.03)` | `(0.20, 0.70)` | `glass` | `true` | Component #7 |
| 8 | `box` | `(0.00, 0.35)` | `(0.78, 0.02)` | `(0.88, 0.02)` | `#00e5ff` | `glow` [glow] | Component #8 |
| 9 | `cyl` | `(0.42, 0.48)` | `(0.03, 0.03)` | `(0.35, 0.40)` | `metal` | `none` | Component #9 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `line` $(x_1: -0.45, z_1: 0.46, x_2: 0.45, z_2: 0.46)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/undercounter_beverage_cooler.fp3dpack`
