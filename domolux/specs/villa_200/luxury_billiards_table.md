# Domolux Specification: Domolux Grand Tournament Slate Billiards Table
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Grand Tournament Slate Billiards Table
- **German Name:** Domolux Luxus-Turnier-Billardtisch
- **Arabic Name:** طاولة البلياردو والسنوكر الملكية بقاعدة خشب الجوز وقماش الحرير دومولوكس
- **Unique Item ID:** `luxury_billiards_table`
- **Unique Pack ID:** `domolux.luxury_billiards_table`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`
- **Discovery Tags:** `billiards`, `pool_table`, `games`, `walnut`, `luxury`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.80 m (280 cm)
- **Bounding Depth ($D$):** 1.55 m (155 cm)
- **Bounding Height ($H$):** 0.85 m (85 cm)
- **Geometric Parts:** 13 native components (Engine limit: 60)
- **Total Triangles:** 420 tris
- **Total Vertices:** 1260 vertices
- **Architectural Edges:** 140 segments
- **Measured Bounding Box:** 2.74m × 1.5m × 0.82m

---

### 3. Design Concept & Architectural Expression
9-foot professional tournament pool table crafted from three-piece Italian slate, solid fluted walnut pedestal legs, Simonis tournament wool felt, and hand-stitched leather drop pockets.

---

### 4. Component Breakdown & Geometry Table (13 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.38, -0.36)` | `(0.14, 0.14)` | `(0.00, 0.68)` | `#362619` (wood) | `true` | Component #1 |
| 2 | `box` | `(0.38, -0.36)` | `(0.14, 0.14)` | `(0.00, 0.68)` | `#362619` (wood) | `true` | Component #2 |
| 3 | `box` | `(-0.38, 0.36)` | `(0.14, 0.14)` | `(0.00, 0.68)` | `#362619` (wood) | `true` | Component #3 |
| 4 | `box` | `(0.38, 0.36)` | `(0.14, 0.14)` | `(0.00, 0.68)` | `#362619` (wood) | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.92, 0.88)` | `(0.62, 0.14)` | `#22170f` | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.88, 0.82)` | `(0.76, 0.06)` | `#1e3a47` (fabric) | `true` | Component #6 |
| 7 | `box` | `(0.00, 0.00)` | `(0.98, 0.94)` | `(0.82, 0.12)` | `#422e1d` (wood) | `true` | Component #7 |
| 8 | `cyl` | `(-0.46, -0.44)` | `(0.08, 0.08)` | `(0.82, 0.14)` | `#c5a059` | `glow` | Component #8 |
| 9 | `cyl` | `(0.46, -0.44)` | `(0.08, 0.08)` | `(0.82, 0.14)` | `#c5a059` | `glow` | Component #9 |
| 10 | `cyl` | `(-0.46, 0.44)` | `(0.08, 0.08)` | `(0.82, 0.14)` | `#c5a059` | `glow` | Component #10 |
| 11 | `cyl` | `(0.46, 0.44)` | `(0.08, 0.08)` | `(0.82, 0.14)` | `#c5a059` | `glow` | Component #11 |
| 12 | `cyl` | `(0.00, -0.45)` | `(0.07, 0.07)` | `(0.82, 0.14)` | `#c5a059` | `glow` | Component #12 |
| 13 | `cyl` | `(0.00, 0.45)` | `(0.07, 0.07)` | `(0.82, 0.14)` | `#c5a059` | `glow` | Component #13 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.94)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.88, d: 0.82)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/luxury_billiards_table.fp3dpack`
