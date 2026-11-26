# Domolux Specification: Domolux Full-Motion Carbon-Fiber GT Racing Simulator
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Full-Motion Carbon-Fiber GT Racing Simulator
- **German Name:** Domolux Motion-Rennsimulator mit Carbon-Chassis
- **Arabic Name:** جهاز محاكاة سباقات السيارات بالحركة الكاملة وهيكل ألياف الكربون دومولوكس
- **Unique Item ID:** `racing_simulator_cockpit`
- **Unique Pack ID:** `domolux.racing_simulator_cockpit`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `office`
- **Discovery Tags:** `racing_sim`, `simulator`, `cockpit`, `motion`, `motorsport`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.75 m (75 cm)
- **Bounding Depth ($D$):** 1.85 m (185 cm)
- **Bounding Height ($H$):** 1.15 m (115 cm)
- **Geometric Parts:** 9 native components (Engine limit: 60)
- **Total Triangles:** 328 tris
- **Total Vertices:** 984 vertices
- **Architectural Edges:** 46 segments
- **Measured Bounding Box:** 0.66m × 1.87m × 0.84m

---

### 3. Design Concept & Architectural Expression
Professional FIA-licensed dynamic motion chassis featuring 4-axis D-BOX actuators, carbon fiber monocoque frame, Sparco bucket seat, Fanatec direct-drive wheel, and triple-screen curved rig.

---

### 4. Component Breakdown & Geometry Table (9 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.88, 0.96)` | `(0.00, 0.12)` | `#141518` | `true` | Component #1 |
| 2 | `cyl` | `(-0.38, -0.42)` | `(0.12, 0.12)` | `(0.00, 0.20)` | `#c5a059` | `none` | Component #2 |
| 3 | `cyl` | `(0.38, -0.42)` | `(0.12, 0.12)` | `(0.00, 0.20)` | `#c5a059` | `none` | Component #3 |
| 4 | `cyl` | `(-0.38, 0.42)` | `(0.12, 0.12)` | `(0.00, 0.20)` | `#c5a059` | `none` | Component #4 |
| 5 | `cyl` | `(0.38, 0.42)` | `(0.12, 0.12)` | `(0.00, 0.20)` | `#c5a059` | `none` | Component #5 |
| 6 | `box` | `(0.00, -0.22)` | `(0.68, 0.44)` | `(0.18, 0.55)` | `#22252c` (dark) | `true` | Component #6 |
| 7 | `box` | `(0.00, 0.18)` | `(0.32, 0.22)` | `(0.25, 0.45)` | `#1b1d24` | `true` | Component #7 |
| 8 | `cyl (y)` | `(0.00, 0.14)` | `(0.32, 0.32)` | `(0.62, 0.04)` | `#c5a059` | `glow` | Component #8 |
| 9 | `box` | `(0.00, 0.42)` | `(0.45, 0.22)` | `(0.12, 0.24)` | `metal` | `true` | Component #9 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.88, d: 0.96)
- **Shape 2:** `circle` $(x: 0.00, z: 0.14, r: 0.16)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/racing_simulator_cockpit.fp3dpack`
