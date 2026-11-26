# Domolux Specification: Domolux Floor-to-Ceiling Picture Window
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Floor-to-Ceiling Picture Window
- **German Name:** Domolux Raumhohes Panorama-Festfenster
- **Arabic Name:** نافذة بانورامية ثابتة ممتدة من الأرض إلى السقف دومولوكس
- **Unique Item ID:** `floor_to_ceiling_picture_window`
- **Unique Pack ID:** `domolux.floor_to_ceiling_picture_window`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `dining`, `bedroom`, `hall`
- **Discovery Tags:** `window`, `fixed`, `picture`, `panoramic`, `glazing`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.80 m (280 cm)
- **Bounding Depth ($D$):** 0.22 m (22 cm)
- **Bounding Height ($H$):** 3.20 m (320 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 72 tris
- **Total Vertices:** 216 vertices
- **Architectural Edges:** 16 segments
- **Measured Bounding Box:** 2.8m × 0.2m × 3.2m

---

### 3. Design Concept & Architectural Expression
Monumental triple-glazed floor-to-ceiling fixed picture window with concealed sub-floor structural glazing channel, low-iron solar control glass, and satin bronze internal sill trim.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 0.90)` | `(0.00, 0.03)` | `#1e2229` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(1.00, 0.90)` | `(0.97, 0.03)` | `#1e2229` | `none` | Component #2 |
| 3 | `box` | `(-0.48, 0.00)` | `(0.03, 0.90)` | `(0.00, 1.00)` | `#1e2229` | `none` | Component #3 |
| 4 | `box` | `(0.48, 0.00)` | `(0.03, 0.90)` | `(0.00, 1.00)` | `#1e2229` | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.95, 0.12)` | `(0.03, 0.94)` | `glass` | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.25)` | `(1.00, 0.40)` | `(0.00, 0.04)` | `#7a623a` | `glow` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.90)
- **Shape 2:** `line` $(x_1: -0.48, z_1: 0.00, x_2: 0.48, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/floor_to_ceiling_picture_window.fp3dpack`
