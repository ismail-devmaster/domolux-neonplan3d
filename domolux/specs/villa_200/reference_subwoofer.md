# Domolux Specification: Domolux Master Reference 15-Inch Cinema Subwoofer
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Master Reference 15-Inch Cinema Subwoofer
- **German Name:** Domolux High-End Aktiv-Subwoofer
- **Arabic Name:** مضخم صوت جهوري مرجعي بقوة فائقة للسينما الخاصة دومولوكس
- **Unique Item ID:** `reference_subwoofer`
- **Unique Pack ID:** `domolux.reference_subwoofer`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `office`
- **Discovery Tags:** `subwoofer`, `audio`, `cinema`, `speaker`, `bass`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.55 m (55 cm)
- **Bounding Depth ($D$):** 0.65 m (65 cm)
- **Bounding Height ($H$):** 0.60 m (60 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 404 tris
- **Total Vertices:** 1212 vertices
- **Architectural Edges:** 22 segments
- **Measured Bounding Box:** 0.52m × 0.8m × 0.58m

---

### 3. Design Concept & Architectural Expression
Sealed acoustic suspension reference subwoofer featuring a piano-gloss black lacquer cabinet, woven carbon fiber 15-inch driver cone, anodized aluminum trim ring, and isolation spikes.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(-0.40, -0.40)` | `(0.10, 0.10)` | `(0.00, 0.08)` | `#c5a059` | `none` | Component #1 |
| 2 | `cyl` | `(0.40, -0.40)` | `(0.10, 0.10)` | `(0.00, 0.08)` | `#c5a059` | `none` | Component #2 |
| 3 | `cyl` | `(-0.40, 0.40)` | `(0.10, 0.10)` | `(0.00, 0.08)` | `#c5a059` | `none` | Component #3 |
| 4 | `cyl` | `(0.40, 0.40)` | `(0.10, 0.10)` | `(0.00, 0.08)` | `#c5a059` | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.94, 0.94)` | `(0.08, 0.88)` | `#0d0e11` (dark) | `true` | Component #5 |
| 6 | `cyl (z)` | `(0.00, 0.46)` | `(0.74, 0.74)` | `(0.22, 0.04)` | `#c5a059` | `glow` | Component #6 |
| 7 | `cyl (z)` | `(0.00, 0.44)` | `(0.62, 0.62)` | `(0.24, 0.04)` | `#25272e` | `none` | Component #7 |
| 8 | `cyl (z)` | `(0.00, 0.45)` | `(0.22, 0.22)` | `(0.38, 0.03)` | `#141518` | `none` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.94, d: 0.94)
- **Shape 2:** `circle` $(x: 0.00, z: 0.44, r: 0.32)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/reference_subwoofer.fp3dpack`
