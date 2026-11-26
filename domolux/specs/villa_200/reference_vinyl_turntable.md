# Domolux Specification: Domolux Reference High-Mass Audiophile Turntable
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Reference High-Mass Audiophile Turntable
- **German Name:** Domolux High-Mass Referenz-Plattenspieler
- **Arabic Name:** مشغل أسطوانات فينيل تناظري مرجعي فائق الدقة دومولوكس
- **Unique Item ID:** `reference_vinyl_turntable`
- **Unique Pack ID:** `domolux.reference_vinyl_turntable`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `surface`
- **Placement Surface:** `true`
- **Target Environments:** `living`, `office`
- **Discovery Tags:** `turntable`, `vinyl`, `analog`, `audiophile`, `hifi`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.50 m (50 cm)
- **Bounding Depth ($D$):** 0.45 m (45 cm)
- **Bounding Height ($H$):** 0.25 m (25 cm)
- **Geometric Parts:** 9 native components (Engine limit: 60)
- **Total Triangles:** 416 tris
- **Total Vertices:** 1248 vertices
- **Architectural Edges:** 50 segments
- **Measured Bounding Box:** 0.47m × 0.41m × 0.26m

---

### 3. Design Concept & Architectural Expression
High-mass reference analog turntable featuring a mirror-polished 60mm solid aerospace aluminum platter, magnetic levitation bearing, 12-inch carbon fiber tonearm, and brass sub-chassis.

---

### 4. Component Breakdown & Geometry Table (9 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(-0.38, 0.30)` | `(0.12, 0.12)` | `(0.00, 0.15)` | `#c5a059` | `none` | Component #1 |
| 2 | `cyl` | `(0.38, 0.30)` | `(0.12, 0.12)` | `(0.00, 0.15)` | `#c5a059` | `none` | Component #2 |
| 3 | `cyl` | `(0.00, -0.38)` | `(0.12, 0.12)` | `(0.00, 0.15)` | `#c5a059` | `none` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.94, 0.92)` | `(0.15, 0.22)` | `#1c1e24` (dark) | `true` | Component #4 |
| 5 | `cyl` | `(-0.15, 0.00)` | `(0.62, 0.62)` | `(0.37, 0.24)` | `metal` | `glow` | Component #5 |
| 6 | `cyl` | `(-0.15, 0.00)` | `(0.58, 0.58)` | `(0.61, 0.03)` | `#000000` | `none` | Component #6 |
| 7 | `cyl` | `(-0.15, 0.00)` | `(0.14, 0.14)` | `(0.64, 0.16)` | `#c5a059` | `glow` | Component #7 |
| 8 | `box` | `(0.32, -0.18)` | `(0.12, 0.12)` | `(0.37, 0.28)` | `#c5a059` | `none` | Component #8 |
| 9 | `cyl (z)` | `(0.24, 0.05)` | `(0.03, 0.03)` | `(0.60, 0.44)` | `#363a42` | `glow` | Component #9 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.94, d: 0.92)
- **Shape 2:** `circle` $(x: -0.15, z: 0.00, r: 0.31)$
- **Shape 3:** `line` $(x_1: 0.32, z_1: -0.18, x_2: 0.15, z_2: 0.22)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/reference_vinyl_turntable.fp3dpack`
