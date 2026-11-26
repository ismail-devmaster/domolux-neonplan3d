# Domolux Specification: Domolux Collector's Audiophile Vinyl Record Archive
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Collector's Audiophile Vinyl Record Archive
- **German Name:** Domolux Architektonisches Schallplatten-Archiv
- **Arabic Name:** دولاب أرشفة وحفظ أسطوانات الفينيل الموسيقية دومولوكس
- **Unique Item ID:** `vinyl_archive_cabinet`
- **Unique Pack ID:** `domolux.vinyl_archive_cabinet`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Storage
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `office`
- **Discovery Tags:** `vinyl_storage`, `lp_archive`, `audio`, `shelving`, `walnut`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.20 m (120 cm)
- **Bounding Depth ($D$):** 0.45 m (45 cm)
- **Bounding Height ($H$):** 1.40 m (140 cm)
- **Geometric Parts:** 10 native components (Engine limit: 60)
- **Total Triangles:** 296 tris
- **Total Vertices:** 888 vertices
- **Architectural Edges:** 64 segments
- **Measured Bounding Box:** 1.18m × 0.43m × 1.37m

---

### 3. Design Concept & Architectural Expression
Precision-engineered walnut vinyl library storing up to 800 LPs across vertical bays with flip-forward browsing bins, integrated warm LED shelf wash, and brass dividing rods.

---

### 4. Component Breakdown & Geometry Table (10 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.96, 0.94)` | `(0.00, 0.06)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.02)` | `(0.98, 0.92)` | `(0.06, 0.92)` | `wood` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.04)` | `(0.04, 0.82)` | `(0.08, 0.88)` | `#2d1f14` | `none` | Component #3 |
| 4 | `box` | `(0.00, 0.05)` | `(0.90, 0.80)` | `(0.08, 0.40)` | `#111215` | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.05)` | `(0.90, 0.80)` | `(0.52, 0.40)` | `#111215` | `none` | Component #5 |
| 6 | `box` | `(0.00, 0.04)` | `(0.92, 0.84)` | `(0.48, 0.04)` | `#3d2b1f` (wood) | `none` | Component #6 |
| 7 | `cyl` | `(-0.24, 0.42)` | `(0.02, 0.02)` | `(0.08, 0.40)` | `#c5a059` | `glow` | Component #7 |
| 8 | `cyl` | `(0.24, 0.42)` | `(0.02, 0.02)` | `(0.08, 0.40)` | `#c5a059` | `glow` | Component #8 |
| 9 | `cyl` | `(-0.24, 0.42)` | `(0.02, 0.02)` | `(0.52, 0.40)` | `#c5a059` | `glow` | Component #9 |
| 10 | `cyl` | `(0.24, 0.42)` | `(0.02, 0.02)` | `(0.52, 0.40)` | `#c5a059` | `glow` | Component #10 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.92)
- **Shape 2:** `line` $(x_1: 0.00, z_1: -0.45, x_2: 0.00, z_2: 0.45)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/vinyl_archive_cabinet.fp3dpack`
