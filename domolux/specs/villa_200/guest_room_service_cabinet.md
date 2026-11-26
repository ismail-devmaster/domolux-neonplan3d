# Domolux Specification: Domolux Presidential Suite Service and Housekeeping Station
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Presidential Suite Service and Housekeeping Station
- **German Name:** Domolux Gästesuite-Serviceschrank
- **Arabic Name:** دولاب خدمة الغرف والبياضات الفندقي لجناح الضيوف دومولوكس
- **Unique Item ID:** `guest_room_service_cabinet`
- **Unique Pack ID:** `domolux.guest_room_service_cabinet`
- **Collection:** Master Suites, Guest Hospitality and Nursery
- **Category:** Storage
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bedroom`, `hallway`
- **Discovery Tags:** `service_cabinet`, `housekeeping`, `linen`, `hospitality`, `storage`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.80 m (80 cm)
- **Bounding Depth ($D$):** 0.50 m (50 cm)
- **Bounding Height ($H$):** 1.50 m (150 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 160 tris
- **Total Vertices:** 480 vertices
- **Architectural Edges:** 52 segments
- **Measured Bounding Box:** 0.77m × 0.48m × 1.47m

---

### 3. Design Concept & Architectural Expression
Dedicated hospitality staging armoire with ventilated fresh linen bays, discreet laundry return drop chute, breakfast tray staging surface, and acoustic soft-close dampers.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.92)` | `(0.00, 0.06)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.02)` | `(0.96, 0.92)` | `(0.06, 0.92)` | `wood` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.44)` | `(0.90, 0.04)` | `(0.10, 0.45)` | `#252830` | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.10)` | `(0.84, 0.68)` | `(0.58, 0.36)` | `#dbe0e6` (white) | `true` | Component #4 |
| 5 | `cyl` | `(-0.04, 0.48)` | `(0.02, 0.02)` | `(0.20, 0.25)` | `#c5a059` | `glow` | Component #5 |
| 6 | `cyl` | `(0.04, 0.48)` | `(0.02, 0.02)` | `(0.20, 0.25)` | `#c5a059` | `glow` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.92)
- **Shape 2:** `line` $(x_1: -0.45, z_1: 0.00, x_2: 0.45, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/guest_room_service_cabinet.fp3dpack`
