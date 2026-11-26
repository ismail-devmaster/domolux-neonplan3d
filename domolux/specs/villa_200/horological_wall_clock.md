# Domolux Specification: Domolux Designer Horological Wall Clock
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Designer Horological Wall Clock
- **German Name:** Domolux Designer Horologische Wanduhr
- **Arabic Name:** ساعة حائط فلكية راقية دومولوكس
- **Unique Item ID:** `horological_wall_clock`
- **Unique Pack ID:** `domolux.horological_wall_clock`
- **Collection:** Exclusive Interior Furnishings, Art and Decor
- **Category:** Living Room
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 1.2m)
- **Placement Surface:** `false`
- **Target Environments:** `living`, `hall`, `dining`, `office`
- **Discovery Tags:** `clock`, `horology`, `timepiece`, `brass`, `minimal`, `luxury`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.20 m (120 cm)
- **Bounding Depth ($D$):** 0.12 m (12 cm)
- **Bounding Height ($H$):** 1.20 m (120 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 248 tris
- **Total Vertices:** 744 vertices
- **Architectural Edges:** 58 segments
- **Measured Bounding Box:** 0.62m × 0.36m × 0.19m

---

### 3. Design Concept & Architectural Expression
Monumental 1.2m minimalist horological statement clock featuring a floating satin champagne brass outer ring, dark walnut open dial, and precision counterweighted hands.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(0.00, -0.30)` | `(0.22, 0.22)` | `(0.44, 0.12)` | `#1f2229` | `none` | Component #1 |
| 2 | `cyl` | `(0.00, 0.00)` | `(0.96, 0.96)` | `(0.46, 0.08)` | `#c5a059` | `glow` | Component #2 |
| 3 | `cyl` | `(0.00, 0.08)` | `(0.28, 0.28)` | `(0.42, 0.16)` | `#3a2d23` (wood) | `true` | Component #3 |
| 4 | `cyl` | `(0.00, 0.20)` | `(0.06, 0.06)` | `(0.46, 0.08)` | `#c5a059` | `glow` | Component #4 |
| 5 | `box` | `(0.10, 0.18)` | `(0.28, 0.02)` | `(0.50, 0.01)` | `#181a1f` | `faint` | Component #5 |
| 6 | `box` | `(-0.15, 0.22)` | `(0.42, 0.01)` | `(0.52, 0.01)` | `#181a1f` | `faint` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `circle` $(x: 0.00, z: 0.00, r: 0.48)$
- **Shape 2:** `line` $(x_1: 0.00, z_1: 0.00, x_2: 0.15, z_2: 0.20)$
- **Shape 3:** `line` $(x_1: 0.00, z_1: 0.00, x_2: -0.20, z_2: -0.25)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/horological_wall_clock.fp3dpack`
