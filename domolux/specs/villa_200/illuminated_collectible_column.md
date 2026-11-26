# Domolux Specification: Domolux Illuminated Collectible Display Column
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Illuminated Collectible Display Column
- **German Name:** Domolux Beleuchtete Sammler-Vitrinenstele
- **Arabic Name:** عامود عرض مقتنيات مضاء دومولوكس
- **Unique Item ID:** `illuminated_collectible_column`
- **Unique Pack ID:** `domolux.illuminated_collectible_column`
- **Collection:** Exclusive Interior Furnishings, Art and Decor
- **Category:** Living Room
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `true`
- **Target Environments:** `living`, `hall`, `office`
- **Discovery Tags:** `column`, `vitrine`, `collectibles`, `watches`, `lighting`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.60 m (60 cm)
- **Bounding Depth ($D$):** 0.60 m (60 cm)
- **Bounding Height ($H$):** 2.10 m (210 cm)
- **Geometric Parts:** 12 native components (Engine limit: 60)
- **Total Triangles:** 144 tris
- **Total Vertices:** 432 vertices
- **Architectural Edges:** 96 segments
- **Measured Bounding Box:** 0.57m × 0.57m × 2.1m

---

### 3. Design Concept & Architectural Expression
Slim vertical architectural vitrine tower designed for horological or trophy collections with 4-level tempered glass shelves, vertical continuous warm LED light strips, and dark bronze frame.

---

### 4. Component Breakdown & Geometry Table (12 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.95, 0.95)` | `(0.00, 0.06)` | `#1e2229` | `true` | Component #1 |
| 2 | `box` | `(-0.42, -0.42)` | `(0.05, 0.05)` | `(0.06, 0.90)` | `#c5a059` | `glow` | Component #2 |
| 3 | `box` | `(0.42, -0.42)` | `(0.05, 0.05)` | `(0.06, 0.90)` | `#c5a059` | `glow` | Component #3 |
| 4 | `box` | `(-0.42, 0.42)` | `(0.05, 0.05)` | `(0.06, 0.90)` | `#c5a059` | `glow` | Component #4 |
| 5 | `box` | `(0.42, 0.42)` | `(0.05, 0.05)` | `(0.06, 0.90)` | `#c5a059` | `glow` | Component #5 |
| 6 | `box` | `(-0.40, 0.39)` | `(0.01, 0.01)` | `(0.08, 0.86)` | `#fff2d6` | `glow` [glow] | Component #6 |
| 7 | `box` | `(0.40, 0.39)` | `(0.01, 0.01)` | `(0.08, 0.86)` | `#fff2d6` | `glow` [glow] | Component #7 |
| 8 | `box` | `(0.00, 0.00)` | `(0.78, 0.78)` | `(0.28, 0.01)` | `glass` | `true` | Component #8 |
| 9 | `box` | `(0.00, 0.00)` | `(0.78, 0.78)` | `(0.50, 0.01)` | `glass` | `true` | Component #9 |
| 10 | `box` | `(0.00, 0.00)` | `(0.78, 0.78)` | `(0.72, 0.01)` | `glass` | `true` | Component #10 |
| 11 | `box` | `(0.00, 0.00)` | `(0.82, 0.82)` | `(0.06, 0.88)` | `glass` | `faint` | Component #11 |
| 12 | `box` | `(0.00, 0.00)` | `(0.95, 0.95)` | `(0.96, 0.04)` | `#1e2229` | `true` | Component #12 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.95, d: 0.95)
- **Shape 2:** `circle` $(x: 0.00, z: 0.00, r: 0.35)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/illuminated_collectible_column.fp3dpack`
