# Domolux Specification: Domolux Operable Roof Skylight Window
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Operable Roof Skylight Window
- **German Name:** Domolux Öffnungsfähiges Dachfenster
- **Arabic Name:** نافذة منور سقفي قابلة للفتح دومولوكس
- **Unique Item ID:** `operable_roof_skylight`
- **Unique Pack ID:** `domolux.operable_roof_skylight`
- **Collection:** Architectural Interior Systems
- **Category:** Architectural Elements
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `ceiling`
- **Placement Surface:** `false`
- **Target Environments:** `bedroom`, `bath`, `hall`
- **Discovery Tags:** `skylight`, `window`, `operable`, `motorized`, `roof`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.50 m (150 cm)
- **Bounding Depth ($D$):** 1.20 m (120 cm)
- **Bounding Height ($H$):** 0.45 m (45 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 60 tris
- **Total Vertices:** 180 vertices
- **Architectural Edges:** 36 segments
- **Measured Bounding Box:** 1.5m × 1.21m × 0.41m

---

### 3. Design Concept & Architectural Expression
Motorized operable architectural roof window with concealed electric chain drive actuator, thermal-break bronze frame, rain sensor interface, and insect screen.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.70, 0.30)` | `#334155` | `true` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.88, 0.88)` | `(0.10, 0.65)` | `#f1f5f9` (white) | `faint` | Component #2 |
| 3 | `loft` | `(0.00, 0.05)` | `(0.85, 0.85)` | `(0.65, 0.20)` | `#7a623a` | `glow` | Component #3 |
| 4 | `box` | `(0.00, 0.06)` | `(0.75, 0.75)` | `(0.72, 0.03)` | `glass` | `true` | Component #4 |
| 5 | `box` | `(0.00, -0.38)` | `(0.30, 0.08)` | `(0.55, 0.08)` | `#1e293b` | `faint` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
- **Shape 2:** `line` $(x_1: -0.40, z_1: -0.35, x_2: 0.40, z_2: -0.35)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/operable_roof_skylight.fp3dpack`
