# Domolux Specification: Domolux Folding Panoramic Glass Wall
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Folding Panoramic Glass Wall
- **German Name:** Domolux Faltbare Panorama-Glaswand
- **Arabic Name:** جدار زجاجي بانورامي قابل للطي دومولوكس
- **Unique Item ID:** `folding_panoramic_glass_wall`
- **Unique Pack ID:** `domolux.folding_panoramic_glass_wall`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `dining`, `terrace`
- **Discovery Tags:** `folding`, `bifold`, `glass`, `panoramic`, `patio`, `terrace`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 3.80 m (380 cm)
- **Bounding Depth ($D$):** 0.28 m (28 cm)
- **Bounding Height ($H$):** 3.00 m (300 cm)
- **Geometric Parts:** 15 native components (Engine limit: 60)
- **Total Triangles:** 312 tris
- **Total Vertices:** 936 vertices
- **Architectural Edges:** 64 segments
- **Measured Bounding Box:** 3.8m × 0.25m × 3m

---

### 3. Design Concept & Architectural Expression
4-leaf bifolding panoramic patio glass wall system with slim bronze insulated aluminum thermal-break frames, heavy-duty stainless roller trolleys, and flush weather threshold.

---

### 4. Component Breakdown & Geometry Table (15 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 0.90)` | `(0.00, 0.03)` | `#1e2229` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(1.00, 0.90)` | `(0.97, 0.03)` | `#1e2229` | `none` | Component #2 |
| 3 | `box` | `(-0.49, 0.00)` | `(0.02, 0.90)` | `(0.00, 1.00)` | `#1e2229` | `none` | Component #3 |
| 4 | `box` | `(0.49, 0.00)` | `(0.02, 0.90)` | `(0.00, 1.00)` | `#1e2229` | `none` | Component #4 |
| 5 | `box` | `(-0.36, -0.05)` | `(0.23, 0.30)` | `(0.03, 0.94)` | `#3d301b` | `glow` | Component #5 |
| 6 | `box` | `(-0.36, -0.05)` | `(0.19, 0.08)` | `(0.05, 0.90)` | `glass` | `true` | Component #6 |
| 7 | `box` | `(-0.12, 0.08)` | `(0.23, 0.30)` | `(0.03, 0.94)` | `#3d301b` | `glow` | Component #7 |
| 8 | `box` | `(-0.12, 0.08)` | `(0.19, 0.08)` | `(0.05, 0.90)` | `glass` | `true` | Component #8 |
| 9 | `box` | `(0.12, 0.08)` | `(0.23, 0.30)` | `(0.03, 0.94)` | `#3d301b` | `glow` | Component #9 |
| 10 | `box` | `(0.12, 0.08)` | `(0.19, 0.08)` | `(0.05, 0.90)` | `glass` | `true` | Component #10 |
| 11 | `box` | `(0.36, -0.05)` | `(0.23, 0.30)` | `(0.03, 0.94)` | `#3d301b` | `glow` | Component #11 |
| 12 | `box` | `(0.36, -0.05)` | `(0.19, 0.08)` | `(0.05, 0.90)` | `glass` | `true` | Component #12 |
| 13 | `cyl` | `(-0.24, 0.02)` | `(0.03, 0.03)` | `(0.03, 0.94)` | `metal` | `none` | Component #13 |
| 14 | `cyl` | `(0.00, 0.12)` | `(0.03, 0.03)` | `(0.03, 0.94)` | `metal` | `none` | Component #14 |
| 15 | `cyl` | `(0.24, 0.02)` | `(0.03, 0.03)` | `(0.03, 0.94)` | `metal` | `none` | Component #15 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.90)
- **Shape 2:** `line` $(x_1: -0.48, z_1: -0.10, x_2: -0.24, z_2: 0.10)$
- **Shape 3:** `line` $(x_1: -0.24, z_1: 0.10, x_2: 0.00, z_2: -0.10)$
- **Shape 4:** `line` $(x_1: 0.00, z_1: -0.10, x_2: 0.24, z_2: 0.10)$
- **Shape 5:** `line` $(x_1: 0.24, z_1: 0.10, x_2: 0.48, z_2: -0.10)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/folding_panoramic_glass_wall.fp3dpack`
