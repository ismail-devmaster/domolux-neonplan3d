# Domolux Specification: Domolux Monumental Heated Marble Hammam Sanctuary
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Monumental Heated Marble Hammam Sanctuary
- **German Name:** Domolux Beheiztes Marmor-Dampfbad Hammam
- **Arabic Name:** جناح الحمام التركي الفاخر بالرخام المسخن دومولوكس
- **Unique Item ID:** `private_hammam_room`
- **Unique Pack ID:** `domolux.private_hammam_room`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `hammam`, `steam_room`, `marble`, `spa`, `wellness`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.20 m (220 cm)
- **Bounding Depth ($D$):** 1.80 m (180 cm)
- **Bounding Height ($H$):** 2.40 m (240 cm)
- **Geometric Parts:** 11 native components (Engine limit: 60)
- **Total Triangles:** 176 tris
- **Total Vertices:** 528 vertices
- **Architectural Edges:** 70 segments
- **Measured Bounding Box:** 2.18m × 1.77m × 2.4m

---

### 3. Design Concept & Architectural Expression
Complete walk-in private spa chamber with heated ergonomic Calacatta marble slab benches, vaulted ceiling profile, recessed perimeter vapor glow, and brass steam plinth.

---

### 4. Component Breakdown & Geometry Table (11 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.00, 0.06)` | `#1e2025` | `true` | Component #1 |
| 2 | `box` | `(-0.34, 0.00)` | `(0.28, 0.94)` | `(0.06, 0.22)` | `#e8ecef` (white) | `true` | Component #2 |
| 3 | `box` | `(0.34, 0.00)` | `(0.28, 0.94)` | `(0.06, 0.22)` | `#e8ecef` (white) | `true` | Component #3 |
| 4 | `box` | `(0.00, -0.34)` | `(0.94, 0.28)` | `(0.06, 0.24)` | `#e8ecef` (white) | `true` | Component #4 |
| 5 | `box` | `(0.00, -0.47)` | `(0.98, 0.05)` | `(0.06, 0.94)` | `#dbe0e6` | `true` | Component #5 |
| 6 | `box` | `(-0.47, 0.00)` | `(0.05, 0.98)` | `(0.06, 0.94)` | `#dbe0e6` | `true` | Component #6 |
| 7 | `box` | `(0.47, 0.00)` | `(0.05, 0.98)` | `(0.06, 0.94)` | `#dbe0e6` | `true` | Component #7 |
| 8 | `box` | `(-0.28, 0.47)` | `(0.40, 0.02)` | `(0.06, 0.94)` | `#88c0d0` (glass) | `none` | Component #8 |
| 9 | `box` | `(0.28, 0.47)` | `(0.40, 0.02)` | `(0.06, 0.94)` | `#88c0d0` (glass) | `none` | Component #9 |
| 10 | `cyl` | `(0.00, 0.08)` | `(0.22, 0.22)` | `(0.06, 0.18)` | `#c5a059` | `glow` | Component #10 |
| 11 | `box` | `(0.00, 0.00)` | `(0.96, 0.96)` | `(0.96, 0.04)` | `#f8f9fa` | `none` [glow] | Component #11 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.98)
- **Shape 2:** `rect` $(x: -0.34, z: 0.00, w: 0.28, d: 0.94)
- **Shape 3:** `rect` $(x: 0.34, z: 0.00, w: 0.28, d: 0.94)
- **Shape 4:** `circle` $(x: 0.00, z: 0.08, r: 0.15)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/private_hammam_room.fp3dpack`
