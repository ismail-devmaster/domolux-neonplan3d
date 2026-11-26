# Domolux Specification: Domolux Precision Digital Steam Generator Module
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Precision Digital Steam Generator Module
- **German Name:** Domolux Digitaler Dampfbadgenerator
- **Arabic Name:** وحدة توليد البخار الرقمية لغرف الاستحمام الفاخرة دومولوكس
- **Unique Item ID:** `steam_shower_generator`
- **Unique Pack ID:** `domolux.steam_shower_generator`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 0.4m)
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `steam`, `generator`, `spa`, `wellness`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.50 m (50 cm)
- **Bounding Depth ($D$):** 0.25 m (25 cm)
- **Bounding Height ($H$):** 0.45 m (45 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 160 tris
- **Total Vertices:** 480 vertices
- **Architectural Edges:** 8 segments
- **Measured Bounding Box:** 0.47m × 0.23m × 0.45m

---

### 3. Design Concept & Architectural Expression
Compact high-output stainless steel residential steam generator with dual heating tanks, auto-flush system, acoustic silencer exhaust, and aromatherapy oil injection port.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.45)` | `(0.94, 0.08)` | `(0.05, 0.90)` | `#1a1c20` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.02)` | `(0.92, 0.82)` | `(0.06, 0.88)` | `metal` (metal) | `true` | Component #2 |
| 3 | `box` | `(-0.22, 0.40)` | `(0.38, 0.02)` | `(0.30, 0.45)` | `#22252c` | `none` | Component #3 |
| 4 | `box` | `(0.25, 0.40)` | `(0.28, 0.02)` | `(0.55, 0.20)` | `#00e5ff` | `none` [glow] | Component #4 |
| 5 | `cyl` | `(-0.30, 0.00)` | `(0.08, 0.08)` | `(0.94, 0.12)` | `#c5a059` | `none` | Component #5 |
| 6 | `cyl` | `(0.25, 0.00)` | `(0.12, 0.12)` | `(0.94, 0.10)` | `metal` | `none` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: -0.02, w: 0.92, d: 0.82)
- **Shape 2:** `circle` $(x: 0.25, z: 0.00, r: 0.10)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/steam_shower_generator.fp3dpack`
