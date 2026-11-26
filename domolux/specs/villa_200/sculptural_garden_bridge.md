# Domolux Specification: Domolux Arched Teak and Glass Landscape Footbridge
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Arched Teak and Glass Landscape Footbridge
- **German Name:** Domolux Architektonische Garten-Bogenbrücke
- **Arabic Name:** جسر المشاة والحدائق المقوس بخشب التيك والزجاج دومولوكس
- **Unique Item ID:** `sculptural_garden_bridge`
- **Unique Pack ID:** `domolux.sculptural_garden_bridge`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `garden_bridge`, `footbridge`, `teak`, `landscape`, `pond`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 3.50 m (350 cm)
- **Bounding Depth ($D$):** 1.20 m (120 cm)
- **Bounding Height ($H$):** 1.10 m (110 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 172 tris
- **Total Vertices:** 516 vertices
- **Architectural Edges:** 24 segments
- **Measured Bounding Box:** 3.43m × 1.13m × 2.1m

---

### 3. Design Concept & Architectural Expression
Gently arched residential landscape bridge spanning garden streams or koi ponds, constructed from curved teak deck planks, bronze structural stringers, and glass balustrades.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.44)` | `(0.98, 0.06)` | `(0.00, 0.30)` | `#c5a059` | `glow` | Component #1 |
| 2 | `box` | `(0.00, 0.44)` | `(0.98, 0.06)` | `(0.00, 0.30)` | `#c5a059` | `glow` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.96, 0.82)` | `(0.22, 0.08)` | `#543c2b` (wood) | `true` | Component #3 |
| 4 | `box` | `(0.00, -0.42)` | `(0.94, 0.02)` | `(0.30, 0.65)` | `#88c0d0` (glass) | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.42)` | `(0.94, 0.02)` | `(0.30, 0.65)` | `#88c0d0` (glass) | `none` | Component #5 |
| 6 | `cyl (x)` | `(0.00, -0.42)` | `(0.04, 0.04)` | `(0.95, 0.96)` | `#3d2b1f` | `none` | Component #6 |
| 7 | `cyl (x)` | `(0.00, 0.42)` | `(0.04, 0.04)` | `(0.95, 0.96)` | `#3d2b1f` | `none` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.88)
- **Shape 2:** `line` $(x_1: -0.48, z_1: -0.42, x_2: 0.48, z_2: -0.42)$
- **Shape 3:** `line` $(x_1: -0.48, z_1: 0.42, x_2: 0.48, z_2: 0.42)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/sculptural_garden_bridge.fp3dpack`
