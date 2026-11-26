# Domolux Specification: Domolux Monumental Monolithic Stone Garden Planter
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Monumental Monolithic Stone Garden Planter
- **German Name:** Domolux Monumentaler Naturstein-Pflanzkübel
- **Arabic Name:** حوض زراعة نباتات حجري ضخم ومرتفع للحدائق دومولوكس
- **Unique Item ID:** `sculptural_raised_planter`
- **Unique Pack ID:** `domolux.sculptural_raised_planter`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `planter`, `stone`, `landscape`, `garden`, `monolithic`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.80 m (180 cm)
- **Bounding Depth ($D$):** 0.90 m (90 cm)
- **Bounding Height ($H$):** 0.75 m (75 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 104 tris
- **Total Vertices:** 312 vertices
- **Architectural Edges:** 16 segments
- **Measured Bounding Box:** 1.76m × 0.86m × 0.74m

---

### 3. Design Concept & Architectural Expression
Architectural raised garden planter carved from Pietra di Cardoso stone with mitered waterfall corners, recessed root-aeration cavity, and bronze base reveal.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.92, 0.90)` | `(0.00, 0.08)` | `#c5a059` | `glow` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.08, 0.88)` | `#495057` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.84, 0.80)` | `(0.16, 0.80)` | `#221914` | `none` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.82, 0.78)` | `(0.72, 0.04)` | `#36271c` | `none` | Component #4 |
| 5 | `cyl` | `(0.00, 0.00)` | `(0.74, 0.70)` | `(0.76, 0.22)` | `#2d6a4f` | `none` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.84, d: 0.80)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/sculptural_raised_planter.fp3dpack`
