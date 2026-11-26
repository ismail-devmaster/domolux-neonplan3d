# Domolux Specification: Domolux Arched Architectural Feature Window
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Arched Architectural Feature Window
- **German Name:** Domolux Rundbogen-Architekturfenster
- **Arabic Name:** نافذة معمارية قوسية مميزة دومولوكس
- **Unique Item ID:** `arched_feature_window`
- **Unique Pack ID:** `domolux.arched_feature_window`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 0.4m)
- **Placement Surface:** `false`
- **Target Environments:** `hall`, `living`, `dining`, `bath`
- **Discovery Tags:** `window`, `arched`, `classical`, `radial`, `bronze`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.60 m (160 cm)
- **Bounding Depth ($D$):** 0.22 m (22 cm)
- **Bounding Height ($H$):** 2.60 m (260 cm)
- **Geometric Parts:** 10 native components (Engine limit: 60)
- **Total Triangles:** 120 tris
- **Total Vertices:** 360 vertices
- **Architectural Edges:** 52 segments
- **Measured Bounding Box:** 1.6m × 0.19m × 2.6m

---

### 3. Design Concept & Architectural Expression
Palatial semicircular arched window assembly featuring custom cast bronze frames, sunburst radial glazing bars, and low-E insulated glass.

---

### 4. Component Breakdown & Geometry Table (10 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.46, 0.00)` | `(0.08, 0.85)` | `(0.00, 0.65)` | `#3d301b` | `glow` | Component #1 |
| 2 | `box` | `(0.46, 0.00)` | `(0.08, 0.85)` | `(0.00, 0.65)` | `#3d301b` | `glow` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(1.00, 0.85)` | `(0.00, 0.05)` | `#3d301b` | `glow` | Component #3 |
| 4 | `loft` | `(-0.32, 0.00)` | `(0.20, 0.85)` | `(0.65, 0.28)` | `#3d301b` | `glow` | Component #4 |
| 5 | `loft` | `(0.32, 0.00)` | `(0.20, 0.85)` | `(0.65, 0.28)` | `#3d301b` | `glow` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.30, 0.85)` | `(0.93, 0.07)` | `#3d301b` | `glow` | Component #6 |
| 7 | `box` | `(0.00, 0.00)` | `(0.84, 0.10)` | `(0.05, 0.60)` | `glass` | `true` | Component #7 |
| 8 | `loft` | `(0.00, 0.00)` | `(0.84, 0.10)` | `(0.65, 0.28)` | `glass` | `true` | Component #8 |
| 9 | `box` | `(0.00, 0.00)` | `(0.02, 0.12)` | `(0.05, 0.88)` | `#c5a059` | `none` | Component #9 |
| 10 | `box` | `(0.00, 0.00)` | `(0.84, 0.12)` | `(0.65, 0.02)` | `#c5a059` | `none` | Component #10 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.85)
- **Shape 2:** `line` $(x_1: 0.00, z_1: -0.40, x_2: 0.00, z_2: 0.40)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/arched_feature_window.fp3dpack`
