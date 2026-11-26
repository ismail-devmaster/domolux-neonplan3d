# Domolux Specification: Domolux Aviator Executive Glass-Cockpit Flight Simulator
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Aviator Executive Glass-Cockpit Flight Simulator
- **German Name:** Domolux Professioneller Flugsimulator mit Glascockpit
- **Arabic Name:** جهاز محاكاة الطيران التنفيذي بشاشات الملاحة الرقمية دومولوكس
- **Unique Item ID:** `flight_simulator_cockpit`
- **Unique Pack ID:** `domolux.flight_simulator_cockpit`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `office`
- **Discovery Tags:** `flight_sim`, `aviation`, `simulator`, `cockpit`, `cockpit_rig`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.95 m (95 cm)
- **Bounding Depth ($D$):** 1.65 m (165 cm)
- **Bounding Height ($H$):** 1.25 m (125 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 128 tris
- **Total Vertices:** 384 vertices
- **Architectural Edges:** 48 segments
- **Measured Bounding Box:** 0.91m × 1.61m × 1.05m

---

### 3. Design Concept & Architectural Expression
Private pilot simulation cockpit featuring twin force-feedback flight yokes, dual throttle quadrant, Garmin G1000 glass avionics screens, and ergonomic sheepskin pilot seats.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.96, 0.96)` | `(0.00, 0.12)` | `#15171d` | `true` | Component #1 |
| 2 | `box` | `(0.00, -0.22)` | `(0.65, 0.45)` | `(0.12, 0.65)` | `#ded9d2` (cushion) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.32)` | `(0.92, 0.35)` | `(0.22, 0.62)` | `#22252c` (dark) | `true` | Component #3 |
| 4 | `box` | `(-0.22, 0.36)` | `(0.32, 0.02)` | `(0.55, 0.22)` | `#00b4d8` | `true` [glow] | Component #4 |
| 5 | `box` | `(0.22, 0.36)` | `(0.32, 0.02)` | `(0.55, 0.22)` | `#2ec4b6` | `true` [glow] | Component #5 |
| 6 | `cyl` | `(0.00, 0.15)` | `(0.05, 0.05)` | `(0.45, 0.25)` | `#111215` | `none` | Component #6 |
| 7 | `box` | `(0.00, 0.10)` | `(0.35, 0.04)` | `(0.62, 0.12)` | `#c5a059` | `glow` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.96)
- **Shape 2:** `rect` $(x: 0.00, z: 0.32, w: 0.92, d: 0.35)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/flight_simulator_cockpit.fp3dpack`
