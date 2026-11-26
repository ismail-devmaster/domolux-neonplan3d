# Domolux Specification: Domolux Estate Private Single-Lane Bowling Alley Module
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Estate Private Single-Lane Bowling Alley Module
- **German Name:** Domolux Private Bowlingbahn-Sektion
- **Arabic Name:** مسار البولينج الخاص للفيلات الفاخرة بخشب القيقب دومولوكس
- **Unique Item ID:** `private_bowling_lane`
- **Unique Pack ID:** `domolux.private_bowling_lane`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`
- **Discovery Tags:** `bowling`, `bowling_alley`, `games`, `estate`, `luxury`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.80 m (180 cm)
- **Bounding Depth ($D$):** 4.50 m (450 cm)
- **Bounding Height ($H$):** 0.65 m (65 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 228 tris
- **Total Vertices:** 684 vertices
- **Architectural Edges:** 58 segments
- **Measured Bounding Box:** 1.76m × 4.41m × 0.32m

---

### 3. Design Concept & Architectural Expression
Authentic residential bowling installation with synthetic rock-maple approach and lane deck, polyurethane gutters, concealed underground ball return track, and pin deck.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.00, 0.14)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.62, 0.96)` | `(0.14, 0.08)` | `#d4a373` (wood) | `true` | Component #2 |
| 3 | `box` | `(-0.38, 0.00)` | `(0.14, 0.96)` | `(0.12, 0.06)` | `#1a1c22` | `none` | Component #3 |
| 4 | `box` | `(0.38, 0.00)` | `(0.14, 0.96)` | `(0.12, 0.06)` | `#1a1c22` | `none` | Component #4 |
| 5 | `cyl` | `(0.00, -0.42)` | `(0.08, 0.08)` | `(0.22, 0.22)` | `#ffffff` | `true` | Component #5 |
| 6 | `cyl` | `(-0.12, -0.45)` | `(0.08, 0.08)` | `(0.22, 0.22)` | `#ffffff` | `true` | Component #6 |
| 7 | `cyl` | `(0.12, -0.45)` | `(0.08, 0.08)` | `(0.22, 0.22)` | `#ffffff` | `true` | Component #7 |
| 8 | `box` | `(0.38, 0.40)` | `(0.16, 0.16)` | `(0.14, 0.35)` | `#c5a059` | `glow` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.98)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.62, d: 0.96)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/private_bowling_lane.fp3dpack`
