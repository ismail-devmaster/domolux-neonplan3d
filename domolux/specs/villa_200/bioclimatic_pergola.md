# Domolux Specification: Domolux Bioclimatic Motorized Architectural Pergola
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Bioclimatic Motorized Architectural Pergola
- **German Name:** Domolux Bioklimatische Lamellenpergola
- **Arabic Name:** مظلة بيرغولا معمارية بيومناخية بشرائح متحركة دومولوكس
- **Unique Item ID:** `bioclimatic_pergola`
- **Unique Pack ID:** `domolux.bioclimatic_pergola`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `pergola`, `bioclimatic`, `outdoor`, `patio`, `shade`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 4.00 m (400 cm)
- **Bounding Depth ($D$):** 3.00 m (300 cm)
- **Bounding Height ($H$):** 2.70 m (270 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 96 tris
- **Total Vertices:** 288 vertices
- **Architectural Edges:** 64 segments
- **Measured Bounding Box:** 4m × 2.94m × 2.7m

---

### 3. Design Concept & Architectural Expression
Architectural motorized aluminum patio pergola with 140-degree pivoting waterproof louvers, concealed internal post downspout drainage, and perimeter dimmable LED glow.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.46, -0.45)` | `(0.08, 0.08)` | `(0.00, 0.94)` | `#22252c` (dark) | `true` | Component #1 |
| 2 | `box` | `(0.46, -0.45)` | `(0.08, 0.08)` | `(0.00, 0.94)` | `#22252c` (dark) | `true` | Component #2 |
| 3 | `box` | `(-0.46, 0.45)` | `(0.08, 0.08)` | `(0.00, 0.94)` | `#22252c` (dark) | `true` | Component #3 |
| 4 | `box` | `(0.46, 0.45)` | `(0.08, 0.08)` | `(0.00, 0.94)` | `#22252c` (dark) | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.92, 0.08)` | `#1a1c22` | `true` | Component #5 |
| 6 | `box` | `(0.00, -0.25)` | `(0.88, 0.12)` | `(0.94, 0.04)` | `#c5a059` | `glow` | Component #6 |
| 7 | `box` | `(0.00, 0.00)` | `(0.88, 0.12)` | `(0.94, 0.04)` | `#c5a059` | `glow` | Component #7 |
| 8 | `box` | `(0.00, 0.25)` | `(0.88, 0.12)` | `(0.94, 0.04)` | `#c5a059` | `glow` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `line` $(x_1: -0.44, z_1: -0.25, x_2: 0.44, z_2: -0.25)$
- **Shape 3:** `line` $(x_1: -0.44, z_1: 0.00, x_2: 0.44, z_2: 0.00)$
- **Shape 4:** `line` $(x_1: -0.44, z_1: 0.25, x_2: 0.44, z_2: 0.25)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/bioclimatic_pergola.fp3dpack`
