# Domolux Specification: Domolux Professional Workshop Bicycle Maintenance Stand
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Professional Workshop Bicycle Maintenance Stand
- **German Name:** Domolux Professioneller Fahrrad-Montageständer
- **Arabic Name:** حامل صيانة وإصلاح الدراجات الهوائية الاحترافي دومولوكس
- **Unique Item ID:** `bicycle_repair_stand`
- **Unique Pack ID:** `domolux.bicycle_repair_stand`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `storage`
- **Discovery Tags:** `bike_stand`, `bicycle_repair`, `workshop`, `garage`, `maintenance`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.70 m (70 cm)
- **Bounding Depth ($D$):** 0.70 m (70 cm)
- **Bounding Height ($H$):** 1.55 m (155 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 236 tris
- **Total Vertices:** 708 vertices
- **Architectural Edges:** 42 segments
- **Measured Bounding Box:** 0.64m × 0.63m × 2.02m

---

### 3. Design Concept & Architectural Expression
Floor-anchored high-capacity bicycle service stand with 360-degree rotating micro-adjust clamp, magnetic small-parts tray, and heavy cast iron pedestal base.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(0.00, 0.00)` | `(0.92, 0.92)` | `(0.00, 0.06)` | `#141518` | `none` | Component #1 |
| 2 | `cyl` | `(0.00, 0.00)` | `(0.12, 0.12)` | `(0.06, 0.84)` | `#252830` | `true` | Component #2 |
| 3 | `cyl` | `(0.00, 0.00)` | `(0.45, 0.45)` | `(0.52, 0.04)` | `#c5a059` | `glow` | Component #3 |
| 4 | `cyl (x)` | `(0.18, 0.00)` | `(0.06, 0.06)` | `(0.88, 0.42)` | `#c5a059` | `glow` | Component #4 |
| 5 | `box` | `(0.38, 0.00)` | `(0.12, 0.14)` | `(0.84, 0.12)` | `#ff4d4f` | `none` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `circle` $(x: 0.00, z: 0.00, r: 0.46)$
- **Shape 2:** `line` $(x_1: 0.00, z_1: 0.00, x_2: 0.42, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/bicycle_repair_stand.fp3dpack`
