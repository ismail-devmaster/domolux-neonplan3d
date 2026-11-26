# Domolux Specification: Domolux Resort Luxury Swim-Up Pool Bar and Submerged Stools
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Resort Luxury Swim-Up Pool Bar and Submerged Stools
- **German Name:** Domolux Swim-up-Poolbar mit Unterwassersitzen
- **Arabic Name:** بار المسبح المائي مع مقاعد غاطسة رخامية دومولوكس
- **Unique Item ID:** `swim_up_bar_island`
- **Unique Pack ID:** `domolux.swim_up_bar_island`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `swim_up_bar`, `pool_bar`, `outdoor_bar`, `submerged`, `luxury`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 3.20 m (320 cm)
- **Bounding Depth ($D$):** 1.80 m (180 cm)
- **Bounding Height ($H$):** 1.15 m (115 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 260 tris
- **Total Vertices:** 780 vertices
- **Architectural Edges:** 16 segments
- **Measured Bounding Box:** 3.14m × 1.7m × 1.12m

---

### 3. Design Concept & Architectural Expression
Curvilinear swim-up bar island with honed quartzite overhang counter, four submerged in-pool ceramic barstools, dry-side bartender work-niche, and cocktail speed-rail.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.15)` | `(0.96, 0.65)` | `(0.00, 0.85)` | `#2b2f38` | `true` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.98, 0.94)` | `(0.85, 0.12)` | `#e9ecef` (white) | `true` | Component #2 |
| 3 | `box` | `(0.00, -0.25)` | `(0.75, 0.32)` | `(0.86, 0.04)` | `metal` | `none` | Component #3 |
| 4 | `cyl` | `(-0.36, 0.38)` | `(0.16, 0.16)` | `(0.00, 0.55)` | `#d8c7b5` | `none` | Component #4 |
| 5 | `cyl` | `(-0.12, 0.38)` | `(0.16, 0.16)` | `(0.00, 0.55)` | `#d8c7b5` | `none` | Component #5 |
| 6 | `cyl` | `(0.12, 0.38)` | `(0.16, 0.16)` | `(0.00, 0.55)` | `#d8c7b5` | `none` | Component #6 |
| 7 | `cyl` | `(0.36, 0.38)` | `(0.16, 0.16)` | `(0.00, 0.55)` | `#d8c7b5` | `none` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.94)
- **Shape 2:** `circle` $(x: -0.36, z: 0.38, r: 0.10)$
- **Shape 3:** `circle` $(x: -0.12, z: 0.38, r: 0.10)$
- **Shape 4:** `circle` $(x: 0.12, z: 0.38, r: 0.10)$
- **Shape 5:** `circle` $(x: 0.36, z: 0.38, r: 0.10)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/swim_up_bar_island.fp3dpack`
