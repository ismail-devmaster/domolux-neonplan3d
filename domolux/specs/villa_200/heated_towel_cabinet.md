# Domolux Specification: Domolux Thermal Linen and Towel Warming Cabinet
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Thermal Linen and Towel Warming Cabinet
- **German Name:** Domolux Beheizbarer Handtuchwärmeschrank
- **Arabic Name:** خزانة تدفئة المناشف والبياضات الفاخرة دومولوكس
- **Unique Item ID:** `heated_towel_cabinet`
- **Unique Pack ID:** `domolux.heated_towel_cabinet`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `towel_warmer`, `sanitizer`, `linen`, `spa`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.55 m (55 cm)
- **Bounding Depth ($D$):** 0.45 m (45 cm)
- **Bounding Height ($H$):** 0.85 m (85 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 184 tris
- **Total Vertices:** 552 vertices
- **Architectural Edges:** 30 segments
- **Measured Bounding Box:** 0.54m × 0.44m × 1.34m

---

### 3. Design Concept & Architectural Expression
Freestanding or under-vanity heated spa cabinet with UV sterilization, insulated brushed metal carcass, fluted smoked-glass door, and interior wire racks.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.96, 0.92)` | `(0.00, 0.06)` | `#181a1f` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.02)` | `(0.98, 0.92)` | `(0.06, 0.92)` | `#2d3037` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.05)` | `(0.86, 0.76)` | `(0.12, 0.80)` | `#1c1e24` | `none` | Component #3 |
| 4 | `box` | `(0.00, 0.05)` | `(0.84, 0.74)` | `(0.42, 0.02)` | `metal` | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.05)` | `(0.84, 0.74)` | `(0.68, 0.02)` | `metal` | `none` | Component #5 |
| 6 | `cyl (x)` | `(0.00, -0.28)` | `(0.04, 0.04)` | `(0.88, 0.70)` | `#8a2be2` | `none` [glow] | Component #6 |
| 7 | `box` | `(0.00, 0.44)` | `(0.94, 0.04)` | `(0.08, 0.88)` | `#3a3429` (glass) | `true` | Component #7 |
| 8 | `cyl` | `(0.40, 0.48)` | `(0.03, 0.03)` | `(0.35, 0.40)` | `#c5a059` | `glow` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.94)
- **Shape 2:** `line` $(x_1: -0.45, z_1: 0.44, x_2: 0.45, z_2: 0.44)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/heated_towel_cabinet.fp3dpack`
