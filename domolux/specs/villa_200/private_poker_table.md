# Domolux Specification: Domolux High-Stakes Oval Casino Poker Table
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux High-Stakes Oval Casino Poker Table
- **German Name:** Domolux Luxus-Pokertisch mit Leder-Armauflage
- **Arabic Name:** طاولة البوكر والألعاب الخاصة البيضاوية بالجلد الطبيعي دومولوكس
- **Unique Item ID:** `private_poker_table`
- **Unique Pack ID:** `domolux.private_poker_table`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`
- **Discovery Tags:** `poker_table`, `casino`, `games`, `leather`, `luxury`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.20 m (220 cm)
- **Bounding Depth ($D$):** 1.15 m (115 cm)
- **Bounding Height ($H$):** 0.78 m (78 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 172 tris
- **Total Vertices:** 516 vertices
- **Architectural Edges:** 40 segments
- **Measured Bounding Box:** 2.16m × 1.1m × 0.78m

---

### 3. Design Concept & Architectural Expression
Casino-grade 10-player oval gaming table with padded full-grain Italian leather armrest rail, waterproof micro-suede suited cloth, integrated brass cupholders, and fluted oak twin pedestals.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(-0.28, 0.00)` | `(0.35, 0.35)` | `(0.00, 0.82)` | `#362619` (wood) | `none` | Component #1 |
| 2 | `cyl` | `(0.28, 0.00)` | `(0.35, 0.35)` | `(0.00, 0.82)` | `#362619` (wood) | `none` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.55, 0.12)` | `(0.25, 0.08)` | `#c5a059` | `glow` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.94, 0.90)` | `(0.82, 0.06)` | `#181a1f` | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.84, 0.78)` | `(0.88, 0.02)` | `#1b4332` (fabric) | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.88, 0.12)` | `#1c1e22` (cushion) | `true` | Component #6 |
| 7 | `box` | `(0.00, -0.36)` | `(0.25, 0.10)` | `(0.90, 0.03)` | `#c5a059` | `glow` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.84, d: 0.78)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/private_poker_table.fp3dpack`
