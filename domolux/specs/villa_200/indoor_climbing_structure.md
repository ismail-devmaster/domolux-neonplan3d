# Domolux Specification: Domolux Montessori Architectural Play Gym and Climbing Tower
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Montessori Architectural Play Gym and Climbing Tower
- **German Name:** Domolux Architektonisches Indoor-Klettergerüst
- **Arabic Name:** برج التسلق والألعاب الرياضية الداخلي للأطفال دومولوكس
- **Unique Item ID:** `indoor_climbing_structure`
- **Unique Pack ID:** `domolux.indoor_climbing_structure`
- **Collection:** Master Suites, Guest Hospitality and Nursery
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `bedroom`
- **Discovery Tags:** `climbing_gym`, `play`, `montessori`, `kids`, `activity`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.80 m (180 cm)
- **Bounding Depth ($D$):** 1.20 m (120 cm)
- **Bounding Height ($H$):** 2.10 m (210 cm)
- **Geometric Parts:** 10 native components (Engine limit: 60)
- **Total Triangles:** 340 tris
- **Total Vertices:** 1020 vertices
- **Architectural Edges:** 78 segments
- **Measured Bounding Box:** 1.73m × 1.15m × 3.95m

---

### 3. Design Concept & Architectural Expression
Indoor architectural activity installation crafted from solid ash and brushed brass rungs, featuring Swedish ladder rungs, climbing rope net, and mezzanine observation deck.

---

### 4. Component Breakdown & Geometry Table (10 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.44, -0.44)` | `(0.08, 0.08)` | `(0.00, 0.98)` | `#c2ab87` (wood) | `none` | Component #1 |
| 2 | `box` | `(0.44, -0.44)` | `(0.08, 0.08)` | `(0.00, 0.98)` | `#c2ab87` (wood) | `none` | Component #2 |
| 3 | `box` | `(-0.44, 0.44)` | `(0.08, 0.08)` | `(0.00, 0.98)` | `#c2ab87` (wood) | `none` | Component #3 |
| 4 | `box` | `(0.44, 0.44)` | `(0.08, 0.08)` | `(0.00, 0.98)` | `#c2ab87` (wood) | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.94, 0.94)` | `(0.45, 0.06)` | `#9c805a` (wood) | `true` | Component #5 |
| 6 | `cyl (z)` | `(-0.44, 0.00)` | `(0.04, 0.04)` | `(0.15, 0.80)` | `#c5a059` | `glow` | Component #6 |
| 7 | `cyl (z)` | `(-0.44, 0.00)` | `(0.04, 0.04)` | `(0.35, 0.80)` | `#c5a059` | `glow` | Component #7 |
| 8 | `cyl (z)` | `(-0.44, 0.00)` | `(0.04, 0.04)` | `(0.60, 0.80)` | `#c5a059` | `glow` | Component #8 |
| 9 | `cyl (z)` | `(-0.44, 0.00)` | `(0.04, 0.04)` | `(0.80, 0.80)` | `#c5a059` | `glow` | Component #9 |
| 10 | `cyl (x)` | `(0.00, 0.00)` | `(0.05, 0.05)` | `(0.96, 0.92)` | `#c5a059` | `glow` | Component #10 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.96)
- **Shape 2:** `line` $(x_1: -0.44, z_1: -0.44, x_2: 0.44, z_2: 0.44)$
- **Shape 3:** `line` $(x_1: -0.44, z_1: 0.44, x_2: 0.44, z_2: -0.44)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/indoor_climbing_structure.fp3dpack`
