# Domolux Specification: Domolux Secure Architectural Pedestrian Estate Gate
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Secure Architectural Pedestrian Estate Gate
- **German Name:** Domolux Architektonisches Fußgängertor mit Gegensprechpfeiler
- **Arabic Name:** بوابة المشاة المعمارية الفاخرة بعمود الاتصال الذكي دومولوكس
- **Unique Item ID:** `pedestrian_entrance_gate`
- **Unique Pack ID:** `domolux.pedestrian_entrance_gate`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `pedestrian_gate`, `security`, `estate`, `bronze`, `entry`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.50 m (150 cm)
- **Bounding Depth ($D$):** 0.35 m (35 cm)
- **Bounding Height ($H$):** 2.30 m (230 cm)
- **Geometric Parts:** 4 native components (Engine limit: 60)
- **Total Triangles:** 92 tris
- **Total Vertices:** 276 vertices
- **Architectural Edges:** 24 segments
- **Measured Bounding Box:** 1.47m × 0.32m × 2.25m

---

### 3. Design Concept & Architectural Expression
Pedestrian entrance portal integrated into estate boundary wall, featuring fluted bronze security panel, motorized fail-secure lock, and stone pier intercom integration.

---

### 4. Component Breakdown & Geometry Table (4 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.42, 0.00)` | `(0.14, 0.92)` | `(0.00, 0.98)` | `#343a40` (dark) | `true` | Component #1 |
| 2 | `box` | `(0.42, 0.00)` | `(0.14, 0.92)` | `(0.00, 0.98)` | `#343a40` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.68, 0.08)` | `(0.04, 0.90)` | `#c5a059` | `glow` | Component #3 |
| 4 | `cyl` | `(0.28, 0.08)` | `(0.03, 0.03)` | `(0.20, 0.60)` | `#d4af37` | `none` | Component #4 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: -0.42, z: 0.00, w: 0.14, d: 0.92)
- **Shape 2:** `rect` $(x: 0.42, z: 0.00, w: 0.14, d: 0.92)
- **Shape 3:** `line` $(x_1: -0.35, z_1: 0.00, x_2: 0.35, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/pedestrian_entrance_gate.fp3dpack`
