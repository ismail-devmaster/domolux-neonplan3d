# Domolux Specification: Domolux Arched Architectural Interior Door
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Arched Architectural Interior Door
- **German Name:** Domolux Gewölbte Innentür
- **Arabic Name:** باب داخلي قوسي دومولوكس
- **Unique Item ID:** `arched_interior_door`
- **Unique Pack ID:** `domolux.arched_interior_door`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `hall`, `living`, `bedroom`, `dining`
- **Discovery Tags:** `door`, `arched`, `wood`, `classical`, `interior`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.25 m (125 cm)
- **Bounding Depth ($D$):** 0.22 m (22 cm)
- **Bounding Height ($H$):** 2.80 m (280 cm)
- **Geometric Parts:** 9 native components (Engine limit: 60)
- **Total Triangles:** 152 tris
- **Total Vertices:** 456 vertices
- **Architectural Edges:** 52 segments
- **Measured Bounding Box:** 1.25m × 0.19m × 2.8m

---

### 3. Design Concept & Architectural Expression
Curved semicircular arched interior doorway with fluted dark oak stiles, custom brass hinges, arch transom panel, and satin brass lever set.

---

### 4. Component Breakdown & Geometry Table (9 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.46, 0.00)` | `(0.08, 0.85)` | `(0.00, 0.75)` | `#45362b` (wood) | `true` | Component #1 |
| 2 | `box` | `(0.46, 0.00)` | `(0.08, 0.85)` | `(0.00, 0.75)` | `#45362b` (wood) | `true` | Component #2 |
| 3 | `loft` | `(-0.32, 0.00)` | `(0.20, 0.85)` | `(0.75, 0.20)` | `#45362b` (wood) | `true` | Component #3 |
| 4 | `loft` | `(0.32, 0.00)` | `(0.20, 0.85)` | `(0.75, 0.20)` | `#45362b` (wood) | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.36, 0.85)` | `(0.94, 0.06)` | `#45362b` (wood) | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.82, 0.35)` | `(0.02, 0.73)` | `#382c22` (wood) | `true` | Component #6 |
| 7 | `loft` | `(0.00, 0.00)` | `(0.82, 0.35)` | `(0.75, 0.18)` | `#382c22` (wood) | `true` | Component #7 |
| 8 | `box` | `(0.32, 0.10)` | `(0.04, 0.12)` | `(0.40, 0.12)` | `#c5a059` | `glow` | Component #8 |
| 9 | `cyl (x)` | `(0.32, 0.16)` | `(0.03, 0.12)` | `(0.46, 0.02)` | `#c5a059` | `none` | Component #9 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.85)
- **Shape 2:** `line` $(x_1: -0.41, z_1: -0.17, x_2: 0.41, z_2: 0.17)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/arched_interior_door.fp3dpack`
