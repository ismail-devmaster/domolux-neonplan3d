# Domolux Specification: Domolux Monumental Estate Motorized Dual-Leaf Driveway Gates
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Monumental Estate Motorized Dual-Leaf Driveway Gates
- **German Name:** Domolux Monumentales Automatisches Zufahrtstor
- **Arabic Name:** بوابة المداخل والقصور الرئيسية الآلية المزدوجة دومولوكس
- **Unique Item ID:** `motorized_driveway_gate`
- **Unique Pack ID:** `domolux.motorized_driveway_gate`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `driveway_gate`, `motorized`, `estate_gate`, `bronze`, `security`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 5.50 m (550 cm)
- **Bounding Depth ($D$):** 0.50 m (50 cm)
- **Bounding Height ($H$):** 2.40 m (240 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 104 tris
- **Total Vertices:** 312 vertices
- **Architectural Edges:** 46 segments
- **Measured Bounding Box:** 5.5m × 0.47m × 2.35m

---

### 3. Design Concept & Architectural Expression
Twin-leaf cantilevered estate entrance gates constructed from architectural bronze vertical slats, reinforced structural steel frames, and underground hydraulic operators.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.45, 0.00)` | `(0.10, 0.94)` | `(0.00, 0.98)` | `#2b2f38` (dark) | `true` | Component #1 |
| 2 | `box` | `(0.45, 0.00)` | `(0.10, 0.94)` | `(0.00, 0.98)` | `#2b2f38` (dark) | `true` | Component #2 |
| 3 | `box` | `(-0.20, 0.00)` | `(0.38, 0.10)` | `(0.06, 0.88)` | `#c5a059` | `glow` | Component #3 |
| 4 | `box` | `(0.20, 0.00)` | `(0.38, 0.10)` | `(0.06, 0.88)` | `#c5a059` | `glow` | Component #4 |
| 5 | `cyl` | `(0.00, 0.00)` | `(0.04, 0.04)` | `(0.02, 0.92)` | `#ffffff` | `glow` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: -0.45, z: 0.00, w: 0.10, d: 0.94)
- **Shape 2:** `rect` $(x: 0.45, z: 0.00, w: 0.10, d: 0.94)
- **Shape 3:** `line` $(x_1: -0.40, z_1: 0.00, x_2: 0.40, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/motorized_driveway_gate.fp3dpack`
