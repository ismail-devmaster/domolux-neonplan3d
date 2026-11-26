# Domolux Specification: Domolux Frameless Panoramic Sliding Glass Door
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Frameless Panoramic Sliding Glass Door
- **German Name:** Domolux Rahmenlose Panorama-Glasschiebetür
- **Arabic Name:** باب زجاجي منزلق بانورامي بدون إطار دومولوكس
- **Unique Item ID:** `frameless_sliding_glass_door`
- **Unique Pack ID:** `domolux.frameless_sliding_glass_door`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `terrace`, `bedroom`, `dining`
- **Discovery Tags:** `sliding`, `glass`, `panoramic`, `frameless`, `terrace`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.60 m (260 cm)
- **Bounding Depth ($D$):** 0.20 m (20 cm)
- **Bounding Height ($H$):** 3.10 m (310 cm)
- **Geometric Parts:** 9 native components (Engine limit: 60)
- **Total Triangles:** 108 tris
- **Total Vertices:** 324 vertices
- **Architectural Edges:** 48 segments
- **Measured Bounding Box:** 2.6m × 0.18m × 3.1m

---

### 3. Design Concept & Architectural Expression
Architectural floor-to-ceiling panoramic sliding glass door with zero-threshold recessed bottom track, concealed soft-closing damper, and flush integrated edge pull.

---

### 4. Component Breakdown & Geometry Table (9 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 0.90)` | `(0.00, 0.02)` | `#1f2228` | `faint` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(1.00, 0.90)` | `(0.97, 0.03)` | `#1f2228` | `faint` | Component #2 |
| 3 | `box` | `(0.24, -0.15)` | `(0.48, 0.08)` | `(0.02, 0.95)` | `glass` | `true` | Component #3 |
| 4 | `box` | `(0.24, -0.15)` | `(0.50, 0.15)` | `(0.01, 0.02)` | `#3d301b` | `none` | Component #4 |
| 5 | `box` | `(-0.24, 0.15)` | `(0.49, 0.08)` | `(0.03, 0.94)` | `glass` | `true` | Component #5 |
| 6 | `box` | `(-0.24, 0.15)` | `(0.50, 0.15)` | `(0.01, 0.02)` | `#3d301b` | `none` | Component #6 |
| 7 | `box` | `(-0.24, 0.15)` | `(0.50, 0.15)` | `(0.96, 0.02)` | `#3d301b` | `none` | Component #7 |
| 8 | `box` | `(0.00, 0.00)` | `(0.03, 0.35)` | `(0.02, 0.95)` | `#1a1c22` | `faint` | Component #8 |
| 9 | `box` | `(-0.46, 0.22)` | `(0.02, 0.06)` | `(0.30, 0.40)` | `#c5a059` | `glow` | Component #9 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.90)
- **Shape 2:** `line` $(x_1: -0.48, z_1: 0.15, x_2: 0.01, z_2: 0.15)$
- **Shape 3:** `line` $(x_1: 0.00, z_1: -0.15, x_2: 0.48, z_2: -0.15)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/frameless_sliding_glass_door.fp3dpack`
