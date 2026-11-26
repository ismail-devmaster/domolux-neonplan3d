# Domolux Specification: Domolux Low-Profile Linear Architectural Planter Trough
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Low-Profile Linear Architectural Planter Trough
- **German Name:** Domolux Linearer Architektonischer Pflanztrog
- **Arabic Name:** حوض زراعة خطي طويل وممتد للأسوار والتراسات دومولوكس
- **Unique Item ID:** `linear_architectural_planter`
- **Unique Pack ID:** `domolux.linear_architectural_planter`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `planter`, `trough`, `linear`, `landscape`, `balcony`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.50 m (250 cm)
- **Bounding Depth ($D$):** 0.45 m (45 cm)
- **Bounding Height ($H$):** 0.55 m (55 cm)
- **Geometric Parts:** 4 native components (Engine limit: 60)
- **Total Triangles:** 48 tris
- **Total Vertices:** 144 vertices
- **Architectural Edges:** 16 segments
- **Measured Bounding Box:** 2.45m × 0.42m × 0.54m

---

### 3. Design Concept & Architectural Expression
Elongated architectural planter crafted from anthracite basalt composite with internal thermal insulation, sub-irrigation reservoir, and architectural grasses.

---

### 4. Component Breakdown & Geometry Table (4 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.96, 0.88)` | `(0.00, 0.05)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.98, 0.94)` | `(0.05, 0.80)` | `#2b2f38` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.92, 0.78)` | `(0.12, 0.72)` | `#271d17` | `none` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.88, 0.60)` | `(0.72, 0.26)` | `#52796f` | `true` | Component #4 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.94)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.92, d: 0.78)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/linear_architectural_planter.fp3dpack`
