# Domolux Specification: Domolux Decorative Architectural Pilaster
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Decorative Architectural Pilaster
- **German Name:** Domolux Dekorativer Wandpilaster
- **Arabic Name:** عامود جداري زخرفي دومولوكس
- **Unique Item ID:** `decorative_pilaster`
- **Unique Pack ID:** `domolux.decorative_pilaster`
- **Collection:** Architectural Interior Systems
- **Category:** Architectural Elements
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 0m)
- **Placement Surface:** `false`
- **Target Environments:** `hall`, `living`, `dining`
- **Discovery Tags:** `pilaster`, `marble`, `classical`, `column`, `wall`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.55 m (55 cm)
- **Bounding Depth ($D$):** 0.28 m (28 cm)
- **Bounding Height ($H$):** 3.20 m (320 cm)
- **Geometric Parts:** 11 native components (Engine limit: 60)
- **Total Triangles:** 132 tris
- **Total Vertices:** 396 vertices
- **Architectural Edges:** 80 segments
- **Measured Bounding Box:** 0.55m × 0.27m × 3.2m

---

### 3. Design Concept & Architectural Expression
Classical-contemporary architectural wall pilaster sculpted from honed Botticino marble with fluted shaft, plinth base, and bronze Corinthian-inspired capital.

---

### 4. Component Breakdown & Geometry Table (11 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 0.90)` | `(0.00, 0.08)` | `#d9d2c5` (body) | `true` | Component #1 |
| 2 | `loft` | `(0.00, 0.00)` | `(0.95, 0.85)` | `(0.08, 0.05)` | `#d9d2c5` | `true` | Component #2 |
| 3 | `box` | `(0.00, -0.10)` | `(0.80, 0.60)` | `(0.13, 0.75)` | `#e4ded4` (body) | `faint` | Component #3 |
| 4 | `box` | `(-0.28, 0.22)` | `(0.08, 0.35)` | `(0.14, 0.73)` | `#d2cbc0` | `true` | Component #4 |
| 5 | `box` | `(-0.14, 0.22)` | `(0.08, 0.35)` | `(0.14, 0.73)` | `#d2cbc0` | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.22)` | `(0.08, 0.35)` | `(0.14, 0.73)` | `#d2cbc0` | `true` | Component #6 |
| 7 | `box` | `(0.14, 0.22)` | `(0.08, 0.35)` | `(0.14, 0.73)` | `#d2cbc0` | `true` | Component #7 |
| 8 | `box` | `(0.28, 0.22)` | `(0.08, 0.35)` | `(0.14, 0.73)` | `#d2cbc0` | `true` | Component #8 |
| 9 | `box` | `(0.00, 0.05)` | `(0.85, 0.75)` | `(0.88, 0.02)` | `#c5a059` | `glow` | Component #9 |
| 10 | `loft` | `(0.00, 0.05)` | `(0.85, 0.75)` | `(0.90, 0.06)` | `#c5a059` | `glow` | Component #10 |
| 11 | `box` | `(0.00, 0.05)` | `(1.00, 0.95)` | `(0.96, 0.04)` | `#d9d2c5` (body) | `true` | Component #11 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.90)
- **Shape 2:** `line` $(x_1: -0.40, z_1: 0.30, x_2: 0.40, z_2: 0.30)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/decorative_pilaster.fp3dpack`
