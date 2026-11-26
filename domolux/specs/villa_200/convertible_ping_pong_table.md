# Domolux Specification: Domolux Minimalist Executive Table Tennis and Conference Table
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Minimalist Executive Table Tennis and Conference Table
- **German Name:** Domolux Designer-Tischtennistisch & Konferenztisch
- **Arabic Name:** طاولة تنس الطاولة والاجتماعات الفاخرة القابلة للتحول دومولوكس
- **Unique Item ID:** `convertible_ping_pong_table`
- **Unique Pack ID:** `domolux.convertible_ping_pong_table`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `office`
- **Discovery Tags:** `table_tennis`, `ping_pong`, `games`, `conference`, `luxury`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.74 m (274 cm)
- **Bounding Depth ($D$):** 1.52 m (152 cm)
- **Bounding Height ($H$):** 0.76 m (76 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 84 tris
- **Total Vertices:** 252 vertices
- **Architectural Edges:** 24 segments
- **Measured Bounding Box:** 2.69m × 1.49m × 0.87m

---

### 3. Design Concept & Architectural Expression
Multi-functional tournament table-tennis table that transforms into an executive conference table, featuring a matte black Fenix top, perforated brushed brass net, and solid walnut legs.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.40, -0.38)` | `(0.08, 0.08)` | `(0.00, 0.90)` | `#362619` (wood) | `none` | Component #1 |
| 2 | `box` | `(0.40, -0.38)` | `(0.08, 0.08)` | `(0.00, 0.90)` | `#362619` (wood) | `none` | Component #2 |
| 3 | `box` | `(-0.40, 0.38)` | `(0.08, 0.08)` | `(0.00, 0.90)` | `#362619` (wood) | `none` | Component #3 |
| 4 | `box` | `(0.40, 0.38)` | `(0.08, 0.08)` | `(0.00, 0.90)` | `#362619` (wood) | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.90, 0.06)` | `#141518` | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.98, 0.01)` | `(0.96, 0.01)` | `#c5a059` | `glow` | Component #6 |
| 7 | `box` | `(0.00, 0.00)` | `(0.02, 0.98)` | `(0.96, 0.18)` | `#c5a059` | `glow` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `line` $(x_1: 0.00, z_1: -0.48, x_2: 0.00, z_2: 0.48)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/convertible_ping_pong_table.fp3dpack`
