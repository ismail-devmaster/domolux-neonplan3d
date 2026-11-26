# Domolux Specification: Domolux Designer Umbrella Stand
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Designer Umbrella Stand
- **German Name:** Domolux Designer-Schirmständer
- **Arabic Name:** حامل مظلات مصمم فاخر دومولوكس
- **Unique Item ID:** `designer_umbrella_stand`
- **Unique Pack ID:** `domolux.designer_umbrella_stand`
- **Collection:** Exclusive Interior Furnishings, Art and Decor
- **Category:** Living Room
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `hall`
- **Discovery Tags:** `umbrella`, `stand`, `foyer`, `bronze`, `marble`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.38 m (38 cm)
- **Bounding Depth ($D$):** 0.38 m (38 cm)
- **Bounding Height ($H$):** 0.72 m (72 cm)
- **Geometric Parts:** 9 native components (Engine limit: 60)
- **Total Triangles:** 460 tris
- **Total Vertices:** 1380 vertices
- **Architectural Edges:** 36 segments
- **Measured Bounding Box:** 0.35m × 0.35m × 0.72m

---

### 3. Design Concept & Architectural Expression
Sculptural foyer umbrella stand featuring fluted cast bronze outer cage, removable brushed brass drip basin, and heavy Nero Marquina marble stabilizing base.

---

### 4. Component Breakdown & Geometry Table (9 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.92, 0.92)` | `(0.00, 0.10)` | `#1a1b20` (dark) | `true` | Component #1 |
| 2 | `cyl` | `(0.00, 0.00)` | `(0.84, 0.84)` | `(0.10, 0.04)` | `#c5a059` | `glow` | Component #2 |
| 3 | `cyl` | `(-0.28, 0.00)` | `(0.04, 0.04)` | `(0.12, 0.84)` | `#7a623a` | `none` | Component #3 |
| 4 | `cyl` | `(0.28, 0.00)` | `(0.04, 0.04)` | `(0.12, 0.84)` | `#7a623a` | `none` | Component #4 |
| 5 | `cyl` | `(-0.14, -0.24)` | `(0.04, 0.04)` | `(0.12, 0.84)` | `#7a623a` | `none` | Component #5 |
| 6 | `cyl` | `(0.14, -0.24)` | `(0.04, 0.04)` | `(0.12, 0.84)` | `#7a623a` | `none` | Component #6 |
| 7 | `cyl` | `(-0.14, 0.24)` | `(0.04, 0.04)` | `(0.12, 0.84)` | `#7a623a` | `none` | Component #7 |
| 8 | `cyl` | `(0.14, 0.24)` | `(0.04, 0.04)` | `(0.12, 0.84)` | `#7a623a` | `none` | Component #8 |
| 9 | `cyl` | `(0.00, 0.00)` | `(0.88, 0.88)` | `(0.94, 0.06)` | `#c5a059` | `glow` | Component #9 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `circle` $(x: 0.00, z: 0.00, r: 0.44)$
- **Shape 2:** `circle` $(x: 0.00, z: 0.00, r: 0.38)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/designer_umbrella_stand.fp3dpack`
