# Domolux Specification: Domolux Whisper-Acoustic Architectural Hand Dryer
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Whisper-Acoustic Architectural Hand Dryer
- **German Name:** Domolux Geräuscharmer Designer-Händetrockner
- **Arabic Name:** مجفف اليدين المعماري فائق الهدوء دومولوكس
- **Unique Item ID:** `designer_hand_dryer`
- **Unique Pack ID:** `domolux.designer_hand_dryer`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 1.05m)
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `hand_dryer`, `acoustic`, `hygiene`, `commercial`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.28 m (28 cm)
- **Bounding Depth ($D$):** 0.20 m (20 cm)
- **Bounding Height ($H$):** 0.48 m (48 cm)
- **Geometric Parts:** 4 native components (Engine limit: 60)
- **Total Triangles:** 92 tris
- **Total Vertices:** 276 vertices
- **Architectural Edges:** 12 segments
- **Measured Bounding Box:** 0.26m × 0.18m × 0.44m

---

### 3. Design Concept & Architectural Expression
Curvilinear wall-mounted acoustic high-speed hand dryer crafted with an anodized gunmetal shell, precision laser-cut linear airflow nozzle, and HEPA H14 internal filtration.

---

### 4. Component Breakdown & Geometry Table (4 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.44)` | `(0.88, 0.10)` | `(0.06, 0.88)` | `#1c1e22` | `none` | Component #1 |
| 2 | `loft` | `(0.00, 0.00)` | `(0.92, 0.82)` | `(0.06, 0.86)` | `#2e323b` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.15)` | `(0.72, 0.08)` | `(0.02, 0.06)` | `#c5a059` | `glow` | Component #3 |
| 4 | `cyl` | `(0.00, 0.22)` | `(0.08, 0.08)` | `(0.06, 0.02)` | `#00e5ff` | `none` [glow] | Component #4 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.92, d: 0.82)
- **Shape 2:** `line` $(x_1: -0.36, z_1: 0.15, x_2: 0.36, z_2: 0.15)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/designer_hand_dryer.fp3dpack`
