# Domolux Specification: Domolux Premium Glass Pivot Door
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Premium Glass Pivot Door
- **German Name:** Domolux Glas-Pivot-Innentür
- **Arabic Name:** باب زجاجي محوري دومولوكس
- **Unique Item ID:** `glass_pivot_door`
- **Unique Pack ID:** `domolux.glass_pivot_door`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `office`, `hall`, `bath`
- **Discovery Tags:** `door`, `glass`, `pivot`, `smoked`, `bronze`, `minimal`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.40 m (140 cm)
- **Bounding Depth ($D$):** 0.18 m (18 cm)
- **Bounding Height ($H$):** 3.00 m (300 cm)
- **Geometric Parts:** 9 native components (Engine limit: 60)
- **Total Triangles:** 284 tris
- **Total Vertices:** 852 vertices
- **Architectural Edges:** 68 segments
- **Measured Bounding Box:** 1.4m × 0.14m × 3m

---

### 3. Design Concept & Architectural Expression
Full-height smoked architectural safety glass pivot door with ultra-slim dark bronze anodized frame, hydraulic self-closing floor pivot, and vertical bronze pull stile.

---

### 4. Component Breakdown & Geometry Table (9 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.48, 0.00)` | `(0.03, 0.80)` | `(0.00, 1.00)` | `#2d251d` | `glow` | Component #1 |
| 2 | `box` | `(0.48, 0.00)` | `(0.03, 0.80)` | `(0.00, 1.00)` | `#2d251d` | `glow` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(1.00, 0.80)` | `(0.98, 0.02)` | `#2d251d` | `glow` | Component #3 |
| 4 | `box` | `(0.02, 0.00)` | `(0.92, 0.25)` | `(0.01, 0.96)` | `#7a623a` | `glow` | Component #4 |
| 5 | `box` | `(0.02, 0.00)` | `(0.88, 0.08)` | `(0.03, 0.94)` | `glass` | `true` | Component #5 |
| 6 | `cyl` | `(-0.28, 0.00)` | `(0.05, 0.05)` | `(0.00, 0.03)` | `metal` | `none` | Component #6 |
| 7 | `cyl` | `(-0.28, 0.00)` | `(0.05, 0.05)` | `(0.97, 0.03)` | `metal` | `none` | Component #7 |
| 8 | `cyl` | `(0.35, 0.08)` | `(0.03, 0.03)` | `(0.15, 0.70)` | `#c5a059` | `glow` | Component #8 |
| 9 | `cyl` | `(0.35, -0.08)` | `(0.03, 0.03)` | `(0.15, 0.70)` | `#c5a059` | `glow` | Component #9 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.80)
- **Shape 2:** `line` $(x_1: 0.02, z_1: -0.10, x_2: 0.02, z_2: 0.10)$
- **Shape 3:** `circle` $(x: -0.28, z: 0.00, r: 0.06)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/glass_pivot_door.fp3dpack`
