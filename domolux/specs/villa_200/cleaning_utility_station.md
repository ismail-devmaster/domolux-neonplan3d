# Domolux Specification: Domolux Estate Housekeeping and Cleaning Utility Armoire
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Estate Housekeeping and Cleaning Utility Armoire
- **German Name:** Domolux Hauswirtschafts- & Reinigungsschrank
- **Arabic Name:** دولاب تنظيم أدوات ومعدات النظافة والخدمة المنزلية دومولوكس
- **Unique Item ID:** `cleaning_utility_station`
- **Unique Pack ID:** `domolux.cleaning_utility_station`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Storage
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `storage`
- **Discovery Tags:** `utility_cabinet`, `housekeeping`, `cleaning`, `storage`, `vacuum`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.90 m (90 cm)
- **Bounding Depth ($D$):** 0.50 m (50 cm)
- **Bounding Height ($H$):** 1.80 m (180 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 160 tris
- **Total Vertices:** 480 vertices
- **Architectural Edges:** 52 segments
- **Measured Bounding Box:** 0.86m × 0.48m × 1.76m

---

### 3. Design Concept & Architectural Expression
Organized housekeeping service cabinet featuring dedicated charging bays for cordless stick vacuums, broom clips, lockable chemical shelf, and ventilated base.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.92)` | `(0.00, 0.06)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.02)` | `(0.96, 0.92)` | `(0.06, 0.92)` | `#252830` (dark) | `true` | Component #2 |
| 3 | `box` | `(-0.23, 0.44)` | `(0.44, 0.04)` | `(0.08, 0.88)` | `#363b47` | `true` | Component #3 |
| 4 | `box` | `(0.23, 0.44)` | `(0.44, 0.04)` | `(0.08, 0.88)` | `#363b47` | `true` | Component #4 |
| 5 | `cyl` | `(-0.04, 0.48)` | `(0.02, 0.02)` | `(0.35, 0.35)` | `#c5a059` | `glow` | Component #5 |
| 6 | `cyl` | `(0.04, 0.48)` | `(0.02, 0.02)` | `(0.35, 0.35)` | `#c5a059` | `glow` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.92)
- **Shape 2:** `line` $(x_1: 0.00, z_1: -0.45, x_2: 0.00, z_2: 0.45)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/cleaning_utility_station.fp3dpack`
