# Domolux Specification: Domolux Grandmaster Inlaid Chess and Strategy Table
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Grandmaster Inlaid Chess and Strategy Table
- **German Name:** Domolux Meister-Schachtisch aus Edelhölzern
- **Arabic Name:** طاولة الشطرنج الاستراتيجية الملكية بالخشب المطعم دومولوكس
- **Unique Item ID:** `luxury_chess_table`
- **Unique Pack ID:** `domolux.luxury_chess_table`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `office`
- **Discovery Tags:** `chess_table`, `board_games`, `marquetry`, `ebony`, `strategy`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.85 m (85 cm)
- **Bounding Depth ($D$):** 0.85 m (85 cm)
- **Bounding Height ($H$):** 0.76 m (76 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 160 tris
- **Total Vertices:** 480 vertices
- **Architectural Edges:** 38 segments
- **Measured Bounding Box:** 0.82m × 0.83m × 0.74m

---

### 3. Design Concept & Architectural Expression
Artisanal game table with marquetry Macassar ebony and bird's eye maple chessboard top, dual velvet-lined piece storage drawers with weighted brass chessmen, and sculptural tripod base.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(0.00, 0.00)` | `(0.16, 0.16)` | `(0.00, 0.84)` | `#c5a059` | `glow` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.76, 0.76)` | `(0.00, 0.08)` | `#362619` (wood) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.96, 0.96)` | `(0.84, 0.12)` | `#22170f` (dark) | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.72, 0.72)` | `(0.96, 0.02)` | `#dfd2b8` | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.68, 0.68)` | `(0.97, 0.01)` | `#2a1810` | `none` | Component #5 |
| 6 | `cyl (z)` | `(0.00, 0.48)` | `(0.03, 0.03)` | `(0.88, 0.03)` | `#c5a059` | `none` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.96)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.72, d: 0.72)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/luxury_chess_table.fp3dpack`
