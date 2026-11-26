# Domolux Specification: Domolux Library Rolling Ladder System
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Library Rolling Ladder System
- **German Name:** Domolux Rollbare Bibliotheksleiter
- **Arabic Name:** سلم مكتبة متدحرج دومولوكس
- **Unique Item ID:** `library_rolling_ladder`
- **Unique Pack ID:** `domolux.library_rolling_ladder`
- **Collection:** Exclusive Interior Furnishings, Art and Decor
- **Category:** Living Room
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `library`, `living`, `office`
- **Discovery Tags:** `ladder`, `library`, `rolling`, `books`, `walnut`, `bronze`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.52 m (52 cm)
- **Bounding Depth ($D$):** 0.45 m (45 cm)
- **Bounding Height ($H$):** 3.10 m (310 cm)
- **Geometric Parts:** 13 native components (Engine limit: 60)
- **Total Triangles:** 288 tris
- **Total Vertices:** 864 vertices
- **Architectural Edges:** 114 segments
- **Measured Bounding Box:** 0.46m × 0.19m × 5.77m

---

### 3. Design Concept & Architectural Expression
Full-height custom estate library rolling ladder crafted from solid American walnut with knurled bronze guide rail hooks, bottom silent rubber-tread castors, and brass safety rungs.

---

### 4. Component Breakdown & Geometry Table (13 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `loft` | `(-0.40, 0.00)` | `(0.08, 0.18)` | `(0.04, 0.94)` | `#45362a` (wood) | `true` | Component #1 |
| 2 | `loft` | `(0.40, 0.00)` | `(0.08, 0.18)` | `(0.04, 0.94)` | `#45362a` (wood) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.02)` | `(0.76, 0.22)` | `(0.12, 0.03)` | `#382c22` (wood) | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.76, 0.22)` | `(0.24, 0.03)` | `#382c22` (wood) | `true` | Component #4 |
| 5 | `box` | `(0.00, -0.02)` | `(0.76, 0.22)` | `(0.36, 0.03)` | `#382c22` (wood) | `true` | Component #5 |
| 6 | `box` | `(0.00, -0.05)` | `(0.76, 0.22)` | `(0.48, 0.03)` | `#382c22` (wood) | `true` | Component #6 |
| 7 | `box` | `(0.00, -0.08)` | `(0.76, 0.22)` | `(0.60, 0.03)` | `#382c22` (wood) | `true` | Component #7 |
| 8 | `box` | `(0.00, -0.11)` | `(0.76, 0.22)` | `(0.72, 0.03)` | `#382c22` (wood) | `true` | Component #8 |
| 9 | `box` | `(0.00, -0.14)` | `(0.76, 0.22)` | `(0.84, 0.03)` | `#382c22` (wood) | `true` | Component #9 |
| 10 | `box` | `(0.00, -0.17)` | `(0.76, 0.22)` | `(0.94, 0.03)` | `#382c22` (wood) | `true` | Component #10 |
| 11 | `cyl` | `(-0.40, 0.05)` | `(0.08, 0.08)` | `(0.00, 0.04)` | `#c5a059` | `glow` | Component #11 |
| 12 | `cyl` | `(0.40, 0.05)` | `(0.08, 0.08)` | `(0.00, 0.04)` | `#c5a059` | `glow` | Component #12 |
| 13 | `cyl (x)` | `(0.00, -0.22)` | `(0.04, 0.04)` | `(0.96, 0.90)` | `#c5a059` | `glow` | Component #13 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.85, d: 0.85)
- **Shape 2:** `line` $(x_1: -0.38, z_1: -0.35, x_2: 0.38, z_2: -0.35)$
- **Shape 3:** `line` $(x_1: -0.38, z_1: 0.35, x_2: 0.38, z_2: 0.35)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/library_rolling_ladder.fp3dpack`
