# Domolux Specification: Domolux Grand Pivot Entrance Door
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Grand Pivot Entrance Door
- **German Name:** Domolux Monumentale Pivot-Eingangstür
- **Arabic Name:** باب مدخل محوري كبير دومولوكس
- **Unique Item ID:** `grand_pivot_entrance_door`
- **Unique Pack ID:** `domolux.grand_pivot_entrance_door`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `hall`, `living`
- **Discovery Tags:** `door`, `pivot`, `entrance`, `oak`, `bronze`, `luxury`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.80 m (180 cm)
- **Bounding Depth ($D$):** 0.28 m (28 cm)
- **Bounding Height ($H$):** 3.20 m (320 cm)
- **Geometric Parts:** 11 native components (Engine limit: 60)
- **Total Triangles:** 220 tris
- **Total Vertices:** 660 vertices
- **Architectural Edges:** 84 segments
- **Measured Bounding Box:** 1.8m × 0.26m × 3.2m

---

### 3. Design Concept & Architectural Expression
Monumental oversized entrance pivot door featuring carbon-core smoked oak cladding, thermal-break bronze jambs, concealed heavy-duty bottom pivot hinge, and full-height bronze pull handle.

---

### 4. Component Breakdown & Geometry Table (11 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.47, 0.00)` | `(0.06, 0.90)` | `(0.00, 1.00)` | `#3d301b` | `glow` | Component #1 |
| 2 | `box` | `(0.47, 0.00)` | `(0.06, 0.90)` | `(0.00, 1.00)` | `#3d301b` | `glow` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(1.00, 0.90)` | `(0.96, 0.04)` | `#3d301b` | `glow` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(1.00, 0.92)` | `(0.00, 0.02)` | `metal` | `faint` | Component #4 |
| 5 | `box` | `(0.03, 0.05)` | `(0.88, 0.45)` | `(0.03, 0.93)` | `#382c22` (wood) | `true` | Component #5 |
| 6 | `box` | `(0.03, 0.17)` | `(0.87, 0.02)` | `(0.33, 0.01)` | `#191512` | `none` | Component #6 |
| 7 | `box` | `(0.03, 0.17)` | `(0.87, 0.02)` | `(0.66, 0.01)` | `#191512` | `none` | Component #7 |
| 8 | `cyl` | `(-0.32, 0.05)` | `(0.06, 0.06)` | `(0.00, 0.03)` | `#c5a059` | `glow` | Component #8 |
| 9 | `cyl` | `(-0.32, 0.05)` | `(0.06, 0.06)` | `(0.95, 0.03)` | `#c5a059` | `glow` | Component #9 |
| 10 | `box` | `(0.35, 0.22)` | `(0.03, 0.08)` | `(0.15, 0.70)` | `#c5a059` | `glow` | Component #10 |
| 11 | `box` | `(0.35, -0.12)` | `(0.03, 0.08)` | `(0.15, 0.70)` | `#c5a059` | `glow` | Component #11 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.90)
- **Shape 2:** `rect` $(x: 0.03, z: 0.05, w: 0.88, d: 0.45) [filled]
- **Shape 3:** `circle` $(x: -0.32, z: 0.05, r: 0.08)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/grand_pivot_entrance_door.fp3dpack`
