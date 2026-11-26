# Domolux Specification: Domolux Sculptural Indoor Planter Trough
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Sculptural Indoor Planter Trough
- **German Name:** Domolux Skulpturaler Innenraum-Pflanztrog
- **Arabic Name:** حوض نباتات داخلي نحتي دومولوكس
- **Unique Item ID:** `sculptural_indoor_planter`
- **Unique Pack ID:** `domolux.sculptural_indoor_planter`
- **Collection:** Exclusive Interior Furnishings, Art and Decor
- **Category:** Living Room
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `hall`, `dining`
- **Discovery Tags:** `planter`, `trough`, `plants`, `botanical`, `basalt`, `brass`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.80 m (180 cm)
- **Bounding Depth ($D$):** 0.55 m (55 cm)
- **Bounding Height ($H$):** 1.45 m (145 cm)
- **Geometric Parts:** 10 native components (Engine limit: 60)
- **Total Triangles:** 252 tris
- **Total Vertices:** 756 vertices
- **Architectural Edges:** 24 segments
- **Measured Bounding Box:** 1.82m × 0.54m × 1.67m

---

### 3. Design Concept & Architectural Expression
Elongated architectural indoor landscape trough cast in dark basalt composite with satin champagne brass rim collar, self-watering sub-irrigation tank, and lush Ficus lyrata architectural foliage.

---

### 4. Component Breakdown & Geometry Table (10 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.90, 0.85)` | `(0.00, 0.04)` | `#141518` | `none` | Component #1 |
| 2 | `loft` | `(0.00, 0.00)` | `(0.92, 0.88)` | `(0.04, 0.45)` | `#22252c` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(1.00, 0.98)` | `(0.48, 0.03)` | `#c5a059` | `glow` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.92, 0.88)` | `(0.46, 0.04)` | `#2d241e` (pot) | `none` | Component #4 |
| 5 | `cyl` | `(-0.28, 0.00)` | `(0.06, 0.06)` | `(0.50, 0.40)` | `#3d2817` | `none` | Component #5 |
| 6 | `loft` | `(-0.28, 0.00)` | `(0.45, 0.45)` | `(0.70, 0.28)` | `plant` (plant) | `true` | Component #6 |
| 7 | `cyl` | `(0.00, 0.00)` | `(0.06, 0.06)` | `(0.50, 0.50)` | `#3d2817` | `none` | Component #7 |
| 8 | `loft` | `(0.00, 0.00)` | `(0.55, 0.55)` | `(0.80, 0.35)` | `plant` (plant) | `true` | Component #8 |
| 9 | `cyl` | `(0.28, 0.00)` | `(0.06, 0.06)` | `(0.50, 0.40)` | `#3d2817` | `none` | Component #9 |
| 10 | `loft` | `(0.28, 0.00)` | `(0.45, 0.45)` | `(0.70, 0.28)` | `plant` (plant) | `true` | Component #10 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.98)
- **Shape 2:** `circle` $(x: -0.28, z: 0.00, r: 0.20)$
- **Shape 3:** `circle` $(x: 0.00, z: 0.00, r: 0.25)$
- **Shape 4:** `circle` $(x: 0.28, z: 0.00, r: 0.20)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/sculptural_indoor_planter.fp3dpack`
