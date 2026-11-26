# Domolux Specification: Domolux Bronze and Cable Architectural Espalier Trellis
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Bronze and Cable Architectural Espalier Trellis
- **German Name:** Domolux Architektonisches Rankgitter aus Bronze & Stahlseilen
- **Arabic Name:** تعريشة تسلق النباتات المعمارية من النحاس وكابلات الفولاذ دومولوكس
- **Unique Item ID:** `architectural_garden_trellis`
- **Unique Pack ID:** `domolux.architectural_garden_trellis`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `trellis`, `espalier`, `garden`, `climber`, `bronze`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.60 m (160 cm)
- **Bounding Depth ($D$):** 0.18 m (18 cm)
- **Bounding Height ($H$):** 2.40 m (240 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 72 tris
- **Total Vertices:** 216 vertices
- **Architectural Edges:** 32 segments
- **Measured Bounding Box:** 1.54m × 0.17m × 2.38m

---

### 3. Design Concept & Architectural Expression
Freestanding estate garden screen featuring marine-grade 316 stainless tensioned cables, dark bronze extruded frame, and architectural star jasmine climbers.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.96, 0.92)` | `(0.00, 0.06)` | `#1a1c20` | `none` | Component #1 |
| 2 | `box` | `(-0.44, 0.00)` | `(0.08, 0.35)` | `(0.06, 0.92)` | `#c5a059` | `glow` | Component #2 |
| 3 | `box` | `(0.44, 0.00)` | `(0.08, 0.35)` | `(0.06, 0.92)` | `#c5a059` | `glow` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.96, 0.35)` | `(0.94, 0.05)` | `#c5a059` | `glow` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.82, 0.02)` | `(0.15, 0.78)` | `metal` | `true` | Component #5 |
| 6 | `box` | `(-0.20, 0.04)` | `(0.35, 0.15)` | `(0.25, 0.55)` | `#2d6a4f` | `none` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.92)
- **Shape 2:** `line` $(x_1: -0.44, z_1: 0.00, x_2: 0.44, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/architectural_garden_trellis.fp3dpack`
