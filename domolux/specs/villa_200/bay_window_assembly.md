# Domolux Specification: Domolux Architectural Bay Window Assembly
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Architectural Bay Window Assembly
- **German Name:** Domolux Architektonischer Erkerfenster-Vorbausatz
- **Arabic Name:** مجموعة نافذة خليجية معمارية بارزة دومولوكس
- **Unique Item ID:** `bay_window_assembly`
- **Unique Pack ID:** `domolux.bay_window_assembly`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `true`
- **Target Environments:** `living`, `bedroom`, `library`
- **Discovery Tags:** `bay`, `window`, `bench`, `daybed`, `cantilever`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.60 m (260 cm)
- **Bounding Depth ($D$):** 1.20 m (120 cm)
- **Bounding Height ($H$):** 2.60 m (260 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 96 tris
- **Total Vertices:** 288 vertices
- **Architectural Edges:** 56 segments
- **Measured Bounding Box:** 2.81m × 1.2m × 2.6m

---

### 3. Design Concept & Architectural Expression
Projecting three-sided cantilevered architectural bay window assembly with integrated upholstered daybed bench, dark bronze mullions, and panoramic insulated glass.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.95, 0.90)` | `(0.00, 0.20)` | `#382c22` (wood) | `true` | Component #1 |
| 2 | `box` | `(0.00, 0.05)` | `(0.92, 0.85)` | `(0.20, 0.08)` | `cushion` (fabric) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.45)` | `(0.60, 0.08)` | `(0.28, 0.68)` | `glass` | `true` | Component #3 |
| 4 | `box` | `(-0.30, 0.45)` | `(0.05, 0.15)` | `(0.28, 0.68)` | `#2d241c` | `true` | Component #4 |
| 5 | `box` | `(0.30, 0.45)` | `(0.05, 0.15)` | `(0.28, 0.68)` | `#2d241c` | `true` | Component #5 |
| 6 | `loft` | `(-0.42, 0.15)` | `(0.24, 0.50)` | `(0.28, 0.68)` | `glass` | `true` | Component #6 |
| 7 | `loft` | `(0.42, 0.15)` | `(0.24, 0.50)` | `(0.28, 0.68)` | `glass` | `true` | Component #7 |
| 8 | `box` | `(0.00, 0.00)` | `(1.00, 0.95)` | `(0.96, 0.04)` | `#22252c` | `true` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.95, d: 0.90)
- **Shape 2:** `line` $(x_1: -0.48, z_1: -0.40, x_2: -0.30, z_2: 0.45)$
- **Shape 3:** `line` $(x_1: -0.30, z_1: 0.45, x_2: 0.30, z_2: 0.45)$
- **Shape 4:** `line` $(x_1: 0.30, z_1: 0.45, x_2: 0.48, z_2: -0.40)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/bay_window_assembly.fp3dpack`
