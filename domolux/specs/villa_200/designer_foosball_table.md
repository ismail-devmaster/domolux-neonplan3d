# Domolux Specification: Domolux Glass and Anodized Alloy Designer Foosball Table
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Glass and Anodized Alloy Designer Foosball Table
- **German Name:** Domolux Designer-Tischkicker aus Glas & Metall
- **Arabic Name:** طاولة كرة قدم الطاولة الفاخرة بالزجاج والألمنيوم المصقول دومولوكس
- **Unique Item ID:** `designer_foosball_table`
- **Unique Pack ID:** `domolux.designer_foosball_table`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`
- **Discovery Tags:** `foosball`, `table_football`, `games`, `glass`, `luxury`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.50 m (150 cm)
- **Bounding Depth ($D$):** 0.95 m (95 cm)
- **Bounding Height ($H$):** 0.90 m (90 cm)
- **Geometric Parts:** 10 native components (Engine limit: 60)
- **Total Triangles:** 296 tris
- **Total Vertices:** 888 vertices
- **Architectural Edges:** 48 segments
- **Measured Bounding Box:** 1.44m × 0.84m × 1.62m

---

### 3. Design Concept & Architectural Expression
Contemporary foosball table with extra-clear tempered glass playing pitch, CNC-machined aerospace aluminum players, chrome rods with timber grips, and smoked glass side aprons.

---

### 4. Component Breakdown & Geometry Table (10 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.42, -0.40)` | `(0.06, 0.08)` | `(0.00, 0.70)` | `#c5a059` | `glow` | Component #1 |
| 2 | `box` | `(0.42, -0.40)` | `(0.06, 0.08)` | `(0.00, 0.70)` | `#c5a059` | `glow` | Component #2 |
| 3 | `box` | `(-0.42, 0.40)` | `(0.06, 0.08)` | `(0.00, 0.70)` | `#c5a059` | `glow` | Component #3 |
| 4 | `box` | `(0.42, 0.40)` | `(0.06, 0.08)` | `(0.00, 0.70)` | `#c5a059` | `glow` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.96, 0.86)` | `(0.65, 0.28)` | `#2e3b4e` (glass) | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.88, 0.78)` | `(0.66, 0.02)` | `#e8ecef` (glass) | `true` | Component #6 |
| 7 | `cyl (z)` | `(0.00, -0.25)` | `(0.02, 0.02)` | `(0.82, 0.98)` | `metal` | `none` | Component #7 |
| 8 | `cyl (z)` | `(0.00, -0.08)` | `(0.02, 0.02)` | `(0.82, 0.98)` | `metal` | `none` | Component #8 |
| 9 | `cyl (z)` | `(0.00, 0.08)` | `(0.02, 0.02)` | `(0.82, 0.98)` | `metal` | `none` | Component #9 |
| 10 | `cyl (z)` | `(0.00, 0.25)` | `(0.02, 0.02)` | `(0.82, 0.98)` | `metal` | `none` | Component #10 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.86)
- **Shape 2:** `line` $(x_1: 0.00, z_1: -0.43, x_2: 0.00, z_2: 0.43)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/designer_foosball_table.fp3dpack`
