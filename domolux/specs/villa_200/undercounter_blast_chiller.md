# Domolux Specification: Domolux Undercounter Blast Chiller
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Undercounter Blast Chiller
- **German Name:** Domolux Unterbau-Schockkühler
- **Arabic Name:** مبرد صدمات سريع تحت الكاونتر دومولوكس
- **Unique Item ID:** `undercounter_blast_chiller`
- **Unique Pack ID:** `domolux.undercounter_blast_chiller`
- **Collection:** Gourmet Kitchens and Specialty Culinary Equipment
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `true`
- **Target Environments:** `kitchen`
- **Discovery Tags:** `chiller`, `blast`, `freezer`, `culinary`, `appliance`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.60 m (60 cm)
- **Bounding Depth ($D$):** 0.62 m (62 cm)
- **Bounding Height ($H$):** 0.85 m (85 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 104 tris
- **Total Vertices:** 312 vertices
- **Architectural Edges:** 38 segments
- **Measured Bounding Box:** 0.59m × 0.6m × 0.83m

---

### 3. Design Concept & Architectural Expression
Culinary blast chiller and shock freezer with core food temperature probe, forced cross-flow evaporation fans, touch screen cycles, and insulated stainless door.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.96, 0.85)` | `(0.00, 0.12)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.12, 0.86)` | `#22252c` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.46)` | `(0.96, 0.05)` | `(0.13, 0.84)` | `metal` (front) | `true` | Component #3 |
| 4 | `cyl` | `(0.38, 0.48)` | `(0.03, 0.03)` | `(0.35, 0.40)` | `#c5a059` | `glow` | Component #4 |
| 5 | `box` | `(0.00, 0.48)` | `(0.52, 0.01)` | `(0.85, 0.06)` | `#00e5ff` | `glow` [glow] | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `line` $(x_1: -0.45, z_1: 0.46, x_2: 0.45, z_2: 0.46)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/undercounter_blast_chiller.fp3dpack`
