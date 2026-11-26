# Domolux Specification: Domolux Structural Glass Roof Canopy
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Structural Glass Roof Canopy
- **German Name:** Domolux Ganzglas-Vordach mit Edelstahl-Zugstangen
- **Arabic Name:** مظلة سقفية زجاجية معمارية دومولوكس
- **Unique Item ID:** `structural_glass_roof_canopy`
- **Unique Pack ID:** `domolux.structural_glass_roof_canopy`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 2.4m)
- **Placement Surface:** `false`
- **Target Environments:** `hall`, `terrace`
- **Discovery Tags:** `canopy`, `glass`, `entrance`, `cantilever`, `stainless`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.60 m (260 cm)
- **Bounding Depth ($D$):** 1.60 m (160 cm)
- **Bounding Height ($H$):** 0.95 m (95 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 248 tris
- **Total Vertices:** 744 vertices
- **Architectural Edges:** 12 segments
- **Measured Bounding Box:** 2.55m × 1.58m × 0.86m

---

### 3. Design Concept & Architectural Expression
Cantilevered structural entrance canopy constructed with laminated tempered glass, marine-grade 316 stainless steel tension tie rods, and integral drainage drip edge.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.45)` | `(0.98, 0.08)` | `(0.10, 0.08)` | `metal` | `true` | Component #1 |
| 2 | `loft` | `(0.00, 0.05)` | `(0.96, 0.90)` | `(0.08, 0.04)` | `glass` | `true` | Component #2 |
| 3 | `cyl` | `(-0.40, -0.15)` | `(0.03, 0.03)` | `(0.12, 0.85)` | `metal` | `none` | Component #3 |
| 4 | `cyl` | `(0.40, -0.15)` | `(0.03, 0.03)` | `(0.12, 0.85)` | `metal` | `none` | Component #4 |
| 5 | `cyl (z)` | `(-0.40, -0.45)` | `(0.06, 0.06)` | `(0.90, 0.08)` | `metal` | `none` | Component #5 |
| 6 | `cyl (z)` | `(0.40, -0.45)` | `(0.06, 0.06)` | `(0.90, 0.08)` | `metal` | `none` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.05, w: 0.96, d: 0.90)
- **Shape 2:** `line` $(x_1: -0.40, z_1: -0.45, x_2: -0.40, z_2: 0.45)$
- **Shape 3:** `line` $(x_1: 0.40, z_1: -0.45, x_2: 0.40, z_2: 0.45)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/structural_glass_roof_canopy.fp3dpack`
