# Domolux Specification: Domolux Concealed Flush Interior Door
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Concealed Flush Interior Door
- **German Name:** Domolux Wandbündige Tapetentür
- **Arabic Name:** باب داخلي متساوٍ ومخفي دومولوكس
- **Unique Item ID:** `concealed_flush_door`
- **Unique Pack ID:** `domolux.concealed_flush_door`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `hall`, `bedroom`, `living`, `bath`
- **Discovery Tags:** `door`, `flush`, `concealed`, `minimal`, `interior`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.10 m (110 cm)
- **Bounding Depth ($D$):** 0.15 m (15 cm)
- **Bounding Height ($H$):** 2.60 m (260 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 96 tris
- **Total Vertices:** 288 vertices
- **Architectural Edges:** 48 segments
- **Measured Bounding Box:** 1.1m × 0.14m × 2.6m

---

### 3. Design Concept & Architectural Expression
Minimalist frameless architectural flush door integrated perfectly planar into partition walls with concealed magnetic latch, 3D adjustable concealed hinges, and magnetic recessed handle.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.49, 0.00)` | `(0.02, 0.95)` | `(0.00, 1.00)` | `#1e2229` | `faint` | Component #1 |
| 2 | `box` | `(0.49, 0.00)` | `(0.02, 0.95)` | `(0.00, 1.00)` | `#1e2229` | `faint` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(1.00, 0.95)` | `(0.98, 0.02)` | `#1e2229` | `faint` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.96, 0.45)` | `(0.01, 0.97)` | `#f3f4f6` (front) | `true` | Component #4 |
| 5 | `box` | `(-0.47, 0.00)` | `(0.02, 0.20)` | `(0.20, 0.08)` | `metal` | `none` | Component #5 |
| 6 | `box` | `(-0.47, 0.00)` | `(0.02, 0.20)` | `(0.80, 0.08)` | `metal` | `none` | Component #6 |
| 7 | `box` | `(0.38, 0.14)` | `(0.03, 0.10)` | `(0.48, 0.02)` | `#181a1f` | `faint` | Component #7 |
| 8 | `box` | `(0.38, 0.20)` | `(0.12, 0.04)` | `(0.48, 0.02)` | `#181a1f` | `faint` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.45)
- **Shape 2:** `line` $(x_1: -0.48, z_1: -0.22, x_2: 0.48, z_2: 0.22)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/concealed_flush_door.fp3dpack`
