# Domolux Specification: Domolux Roller-Cabinet Precision Tool Chest
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Roller-Cabinet Precision Tool Chest
- **German Name:** Domolux Rollbarer Präzisions-Werkzeugwagen
- **Arabic Name:** عربة وصندوق أدوات الورشة الدقيقة المتنقل دومولوكس
- **Unique Item ID:** `precision_tool_chest`
- **Unique Pack ID:** `domolux.precision_tool_chest`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Storage
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `storage`
- **Discovery Tags:** `tool_chest`, `toolbox`, `workshop`, `garage`, `storage`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.85 m (85 cm)
- **Bounding Depth ($D$):** 0.55 m (55 cm)
- **Bounding Height ($H$):** 1.10 m (110 cm)
- **Geometric Parts:** 11 native components (Engine limit: 60)
- **Total Triangles:** 308 tris
- **Total Vertices:** 924 vertices
- **Architectural Edges:** 56 segments
- **Measured Bounding Box:** 0.82m × 0.52m × 1.1m

---

### 3. Design Concept & Architectural Expression
Professional rolling tool cabinet with 12 full-extension ball-bearing drawers, high-density EVA foam custom tool cutouts, stainless push handle, and central barrel lock.

---

### 4. Component Breakdown & Geometry Table (11 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(-0.38, -0.38)` | `(0.12, 0.12)` | `(0.00, 0.12)` | `#111215` | `none` | Component #1 |
| 2 | `cyl` | `(0.38, -0.38)` | `(0.12, 0.12)` | `(0.00, 0.12)` | `#111215` | `none` | Component #2 |
| 3 | `cyl` | `(-0.38, 0.38)` | `(0.12, 0.12)` | `(0.00, 0.12)` | `#111215` | `none` | Component #3 |
| 4 | `cyl` | `(0.38, 0.38)` | `(0.12, 0.12)` | `(0.00, 0.12)` | `#111215` | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.94, 0.92)` | `(0.12, 0.82)` | `#252830` (dark) | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.96, 0.94)` | `(0.94, 0.06)` | `#8a6642` (wood) | `true` | Component #6 |
| 7 | `box` | `(0.00, 0.44)` | `(0.86, 0.03)` | `(0.20, 0.03)` | `#c5a059` | `glow` | Component #7 |
| 8 | `box` | `(0.00, 0.44)` | `(0.86, 0.03)` | `(0.35, 0.03)` | `#c5a059` | `glow` | Component #8 |
| 9 | `box` | `(0.00, 0.44)` | `(0.86, 0.03)` | `(0.50, 0.03)` | `#c5a059` | `glow` | Component #9 |
| 10 | `box` | `(0.00, 0.44)` | `(0.86, 0.03)` | `(0.65, 0.03)` | `#c5a059` | `glow` | Component #10 |
| 11 | `box` | `(0.00, 0.44)` | `(0.86, 0.03)` | `(0.80, 0.03)` | `#c5a059` | `glow` | Component #11 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.94)
- **Shape 2:** `line` $(x_1: -0.43, z_1: 0.44, x_2: 0.43, z_2: 0.44)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/precision_tool_chest.fp3dpack`
