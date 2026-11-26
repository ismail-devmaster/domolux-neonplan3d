# Domolux Specification: Domolux Steel-Framed French Doors
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Steel-Framed French Doors
- **German Name:** Domolux Stahlprofil-Flügeltüren
- **Arabic Name:** أبواب فرنسية بإطار فولاذي دومولوكس
- **Unique Item ID:** `steel_framed_french_doors`
- **Unique Pack ID:** `domolux.steel_framed_french_doors`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `dining`, `office`, `patio`
- **Discovery Tags:** `french`, `steel`, `doors`, `industrial`, `divided-light`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.00 m (200 cm)
- **Bounding Depth ($D$):** 0.16 m (16 cm)
- **Bounding Height ($H$):** 2.70 m (270 cm)
- **Geometric Parts:** 15 native components (Engine limit: 60)
- **Total Triangles:** 224 tris
- **Total Vertices:** 672 vertices
- **Architectural Edges:** 78 segments
- **Measured Bounding Box:** 2m × 0.14m × 2.7m

---

### 3. Design Concept & Architectural Expression
Industrial-bourgeois double French doors with ultra-slender hot-rolled black steel profiles, true divided-light multi-pane glazing, and blackened brass cremone bolt locking system.

---

### 4. Component Breakdown & Geometry Table (15 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.48, 0.00)` | `(0.04, 0.85)` | `(0.00, 1.00)` | `#141517` | `true` | Component #1 |
| 2 | `box` | `(0.48, 0.00)` | `(0.04, 0.85)` | `(0.00, 1.00)` | `#141517` | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(1.00, 0.85)` | `(0.97, 0.03)` | `#141517` | `true` | Component #3 |
| 4 | `box` | `(-0.24, 0.00)` | `(0.45, 0.40)` | `(0.02, 0.94)` | `#1a1b1f` | `true` | Component #4 |
| 5 | `box` | `(-0.24, 0.00)` | `(0.41, 0.10)` | `(0.04, 0.90)` | `glass` | `true` | Component #5 |
| 6 | `box` | `(0.24, 0.00)` | `(0.45, 0.40)` | `(0.02, 0.94)` | `#1a1b1f` | `true` | Component #6 |
| 7 | `box` | `(0.24, 0.00)` | `(0.41, 0.10)` | `(0.04, 0.90)` | `glass` | `true` | Component #7 |
| 8 | `box` | `(-0.24, 0.00)` | `(0.41, 0.15)` | `(0.26, 0.01)` | `#141517` | `none` | Component #8 |
| 9 | `box` | `(-0.24, 0.00)` | `(0.41, 0.15)` | `(0.48, 0.01)` | `#141517` | `none` | Component #9 |
| 10 | `box` | `(-0.24, 0.00)` | `(0.41, 0.15)` | `(0.70, 0.01)` | `#141517` | `none` | Component #10 |
| 11 | `box` | `(0.24, 0.00)` | `(0.41, 0.15)` | `(0.26, 0.01)` | `#141517` | `none` | Component #11 |
| 12 | `box` | `(0.24, 0.00)` | `(0.41, 0.15)` | `(0.48, 0.01)` | `#141517` | `none` | Component #12 |
| 13 | `box` | `(0.24, 0.00)` | `(0.41, 0.15)` | `(0.70, 0.01)` | `#141517` | `none` | Component #13 |
| 14 | `cyl` | `(-0.02, 0.10)` | `(0.02, 0.02)` | `(0.05, 0.88)` | `#c5a059` | `glow` | Component #14 |
| 15 | `box` | `(-0.02, 0.14)` | `(0.04, 0.06)` | `(0.46, 0.06)` | `#c5a059` | `glow` | Component #15 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.85)
- **Shape 2:** `line` $(x_1: -0.24, z_1: 0.00, x_2: 0.24, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/steel_framed_french_doors.fp3dpack`
