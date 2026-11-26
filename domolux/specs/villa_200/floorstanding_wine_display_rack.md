# Domolux Specification: Domolux Floorstanding Wine Display Rack
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Floorstanding Wine Display Rack
- **German Name:** Domolux Freistehendes Wein-Präsentationsregal
- **Arabic Name:** رف عرض نبيذ فاخر قائم على الأرض دومولوكس
- **Unique Item ID:** `floorstanding_wine_display_rack`
- **Unique Pack ID:** `domolux.floorstanding_wine_display_rack`
- **Collection:** Exclusive Interior Furnishings, Art and Decor
- **Category:** Living Room
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `dining`, `living`, `kitchen`
- **Discovery Tags:** `wine`, `rack`, `display`, `bottles`, `sommelier`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.90 m (90 cm)
- **Bounding Depth ($D$):** 0.42 m (42 cm)
- **Bounding Height ($H$):** 2.40 m (240 cm)
- **Geometric Parts:** 13 native components (Engine limit: 60)
- **Total Triangles:** 332 tris
- **Total Vertices:** 996 vertices
- **Architectural Edges:** 64 segments
- **Measured Bounding Box:** 0.86m × 0.44m × 2.4m

---

### 3. Design Concept & Architectural Expression
Floor-to-ceiling sculptural wine showcase tower featuring smoked oak vertical stiles, angled satin brass bottle cradles with LED label illumination, and Nero Marquina base.

---

### 4. Component Breakdown & Geometry Table (13 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.96, 0.92)` | `(0.00, 0.06)` | `#1a1b20` (dark) | `true` | Component #1 |
| 2 | `box` | `(-0.42, 0.00)` | `(0.06, 0.80)` | `(0.06, 0.92)` | `#3a2d23` (wood) | `true` | Component #2 |
| 3 | `box` | `(0.42, 0.00)` | `(0.06, 0.80)` | `(0.06, 0.92)` | `#3a2d23` (wood) | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.96, 0.80)` | `(0.96, 0.04)` | `#3a2d23` (wood) | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.76, 0.65)` | `(0.20, 0.02)` | `#c5a059` | `glow` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.76, 0.65)` | `(0.36, 0.02)` | `#c5a059` | `glow` | Component #6 |
| 7 | `box` | `(0.00, 0.00)` | `(0.76, 0.65)` | `(0.52, 0.02)` | `#c5a059` | `glow` | Component #7 |
| 8 | `box` | `(0.00, 0.00)` | `(0.76, 0.65)` | `(0.68, 0.02)` | `#c5a059` | `glow` | Component #8 |
| 9 | `box` | `(0.00, 0.00)` | `(0.76, 0.65)` | `(0.84, 0.02)` | `#c5a059` | `glow` | Component #9 |
| 10 | `cyl (z)` | `(-0.22, 0.05)` | `(0.08, 0.08)` | `(0.22, 0.24)` | `#193322` | `none` | Component #10 |
| 11 | `cyl (z)` | `(0.22, 0.05)` | `(0.08, 0.08)` | `(0.22, 0.24)` | `#193322` | `none` | Component #11 |
| 12 | `cyl (z)` | `(-0.22, 0.05)` | `(0.08, 0.08)` | `(0.54, 0.24)` | `#193322` | `none` | Component #12 |
| 13 | `cyl (z)` | `(0.22, 0.05)` | `(0.08, 0.08)` | `(0.54, 0.24)` | `#193322` | `none` | Component #13 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.92)
- **Shape 2:** `circle` $(x: -0.22, z: 0.00, r: 0.10)$
- **Shape 3:** `circle` $(x: 0.22, z: 0.00, r: 0.10)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/floorstanding_wine_display_rack.fp3dpack`
