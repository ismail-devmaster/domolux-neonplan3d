# Domolux Specification: Domolux Freestanding Architectural Towel Valet
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Freestanding Architectural Towel Valet
- **German Name:** Domolux Freistehender Handtuch-Valet
- **Arabic Name:** حامل مناشف فندقي مستقل بقاعدة رخامية دومولوكس
- **Unique Item ID:** `bathroom_towel_valet`
- **Unique Pack ID:** `domolux.bathroom_towel_valet`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `valet`, `towel_stand`, `marble`, `bronze`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.50 m (50 cm)
- **Bounding Depth ($D$):** 0.40 m (40 cm)
- **Bounding Height ($H$):** 1.10 m (110 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 204 tris
- **Total Vertices:** 612 vertices
- **Architectural Edges:** 24 segments
- **Measured Bounding Box:** 0.44m × 0.31m × 1.79m

---

### 3. Design Concept & Architectural Expression
Freestanding multi-tiered towel stand featuring a heavy Nero Marquina marble slab base, satin champagne bronze upright frame, and staggered cantilevered hanging arms.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.88, 0.78)` | `(0.00, 0.05)` | `#141518` | `true` | Component #1 |
| 2 | `box` | `(-0.22, 0.00)` | `(0.06, 0.06)` | `(0.05, 0.92)` | `#c5a059` | `glow` | Component #2 |
| 3 | `box` | `(0.22, 0.00)` | `(0.06, 0.06)` | `(0.05, 0.75)` | `#c5a059` | `glow` | Component #3 |
| 4 | `cyl (x)` | `(0.10, 0.18)` | `(0.04, 0.04)` | `(0.70, 0.65)` | `#d4af37` | `none` | Component #4 |
| 5 | `cyl (x)` | `(-0.05, 0.00)` | `(0.04, 0.04)` | `(0.85, 0.70)` | `#d4af37` | `none` | Component #5 |
| 6 | `cyl (x)` | `(-0.10, -0.18)` | `(0.04, 0.04)` | `(0.98, 0.65)` | `#d4af37` | `none` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.88, d: 0.78)
- **Shape 2:** `line` $(x_1: -0.40, z_1: -0.18, x_2: 0.25, z_2: -0.18)$
- **Shape 3:** `line` $(x_1: -0.25, z_1: 0.18, x_2: 0.40, z_2: 0.18)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/bathroom_towel_valet.fp3dpack`
