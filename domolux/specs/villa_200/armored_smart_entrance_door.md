# Domolux Specification: Domolux Armored Smart Entrance Door
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Armored Smart Entrance Door
- **German Name:** Domolux Gepanzerte Smart-Eingangstür
- **Arabic Name:** باب مدخل ذكي مصفح دومولوكس
- **Unique Item ID:** `armored_smart_entrance_door`
- **Unique Pack ID:** `domolux.armored_smart_entrance_door`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `hall`
- **Discovery Tags:** `armored`, `security`, `smart`, `biometric`, `door`, `entrance`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.60 m (160 cm)
- **Bounding Depth ($D$):** 0.32 m (32 cm)
- **Bounding Height ($H$):** 2.80 m (280 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 184 tris
- **Total Vertices:** 552 vertices
- **Architectural Edges:** 48 segments
- **Measured Bounding Box:** 1.6m × 0.32m × 2.8m

---

### 3. Design Concept & Architectural Expression
Ballistic and forced-entry armored residential entrance door featuring titanium reinforcement, biometrics recognition reader, motor deadbolts, and natural travertine stone outer paneling.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.00, 1.00)` | `#16171b` | `true` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.88, 0.60)` | `(0.02, 0.96)` | `#22252c` | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.28)` | `(0.84, 0.12)` | `(0.04, 0.92)` | `#d2cbbf` (body) | `true` | Component #3 |
| 4 | `box` | `(0.28, 0.34)` | `(0.08, 0.04)` | `(0.04, 0.92)` | `#9e8354` | `glow` | Component #4 |
| 5 | `box` | `(0.28, 0.37)` | `(0.04, 0.02)` | `(0.50, 0.08)` | `#00e676` | `glow` [glow] | Component #5 |
| 6 | `cyl (x)` | `(0.44, 0.00)` | `(0.04, 0.04)` | `(0.30, 0.06)` | `metal` | `none` | Component #6 |
| 7 | `cyl (x)` | `(0.44, 0.00)` | `(0.04, 0.04)` | `(0.70, 0.06)` | `metal` | `none` | Component #7 |
| 8 | `box` | `(0.00, -0.28)` | `(0.84, 0.10)` | `(0.04, 0.92)` | `#2d231b` (wood) | `true` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.88, d: 0.60) [filled]
- **Shape 3:** `circle` $(x: 0.28, z: 0.34, r: 0.06)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/armored_smart_entrance_door.fp3dpack`
