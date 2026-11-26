# Domolux Specification: Domolux Nostalgia Bespoke Luxury Retro Arcade Cabinet
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Nostalgia Bespoke Luxury Retro Arcade Cabinet
- **German Name:** Domolux Exklusiver Retro-Spielautomat Arcade
- **Arabic Name:** جهاز ألعاب الآركيد الكلاسيكي الفاخر بهيكل الخشب المصقول دومولوكس
- **Unique Item ID:** `bespoke_arcade_cabinet`
- **Unique Pack ID:** `domolux.bespoke_arcade_cabinet`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`
- **Discovery Tags:** `arcade`, `retro_gaming`, `cabinet`, `games`, `entertainment`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.75 m (75 cm)
- **Bounding Depth ($D$):** 0.85 m (85 cm)
- **Bounding Height ($H$):** 1.75 m (175 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 172 tris
- **Total Vertices:** 516 vertices
- **Architectural Edges:** 60 segments
- **Measured Bounding Box:** 0.72m × 0.82m × 1.72m

---

### 3. Design Concept & Architectural Expression
Custom upright arcade machine constructed with piano-black lacquered sides, walnut front fascia, 28-inch curved CRT-filter OLED display, Sanwa arcade buttons, and backlit marquee.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.92, 0.92)` | `(0.00, 0.08)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.05)` | `(0.94, 0.88)` | `(0.08, 0.52)` | `#1a1c22` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.28)` | `(0.96, 0.38)` | `(0.56, 0.12)` | `#282a30` | `true` | Component #3 |
| 4 | `cyl` | `(-0.25, 0.28)` | `(0.04, 0.04)` | `(0.68, 0.10)` | `#c5a059` | `glow` | Component #4 |
| 5 | `cyl` | `(0.15, 0.28)` | `(0.04, 0.04)` | `(0.68, 0.10)` | `#c5a059` | `glow` | Component #5 |
| 6 | `box` | `(0.00, 0.02)` | `(0.84, 0.12)` | `(0.68, 0.22)` | `#00e5ff` | `true` [glow] | Component #6 |
| 7 | `box` | `(0.00, 0.22)` | `(0.92, 0.18)` | `(0.90, 0.08)` | `#fff3cc` | `true` [glow] | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.94, d: 0.88)
- **Shape 2:** `rect` $(x: 0.00, z: 0.28, w: 0.96, d: 0.38)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/bespoke_arcade_cabinet.fp3dpack`
