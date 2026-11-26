# Domolux Specification: Domolux Concealed Pocket Sliding Door
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Concealed Pocket Sliding Door
- **German Name:** Domolux In Der Wand Laufende Schiebetür
- **Arabic Name:** باب منزلق داخل الجدار دومولوكس
- **Unique Item ID:** `pocket_sliding_door`
- **Unique Pack ID:** `domolux.pocket_sliding_door`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bedroom`, `bath`, `closet`, `living`
- **Discovery Tags:** `pocket`, `sliding`, `door`, `concealed`, `space-saving`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.20 m (220 cm)
- **Bounding Depth ($D$):** 0.25 m (25 cm)
- **Bounding Height ($H$):** 2.60 m (260 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 116 tris
- **Total Vertices:** 348 vertices
- **Architectural Edges:** 54 segments
- **Measured Bounding Box:** 2.2m × 0.21m × 2.6m

---

### 3. Design Concept & Architectural Expression
In-wall architectural pocket sliding door cassette system with smoked oak door leaf, concealed top hanger tracks, flush jamb casing, and edge finger ring pull.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.26, 0.35)` | `(0.48, 0.15)` | `(0.00, 1.00)` | `#e2e8f0` (white) | `faint` | Component #1 |
| 2 | `box` | `(-0.26, -0.35)` | `(0.48, 0.15)` | `(0.00, 1.00)` | `#e2e8f0` (white) | `faint` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(1.00, 0.70)` | `(0.96, 0.04)` | `#334155` | `true` | Component #3 |
| 4 | `box` | `(0.47, 0.00)` | `(0.05, 0.85)` | `(0.00, 1.00)` | `#3d301b` (wood) | `true` | Component #4 |
| 5 | `box` | `(0.18, 0.00)` | `(0.52, 0.35)` | `(0.02, 0.93)` | `#382c22` (wood) | `true` | Component #5 |
| 6 | `cyl (z)` | `(0.42, 0.00)` | `(0.04, 0.04)` | `(0.45, 0.06)` | `#c5a059` | `glow` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: -0.26, z: 0.00, w: 0.48, d: 0.85)
- **Shape 2:** `rect` $(x: 0.18, z: 0.00, w: 0.52, d: 0.35) [filled]

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/pocket_sliding_door.fp3dpack`
