# Domolux Specification: Domolux PGA-Grade High-Definition Golf Simulator Enclosure
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux PGA-Grade High-Definition Golf Simulator Enclosure
- **German Name:** Domolux PGA-Golfsimulator mit Prallwand & Kunstrasen
- **Arabic Name:** مقصورة محاكاة رياضة الجولف التفاعلية المتكاملة دومولوكس
- **Unique Item ID:** `immersive_golf_simulator`
- **Unique Pack ID:** `domolux.immersive_golf_simulator`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`
- **Discovery Tags:** `golf_sim`, `golf`, `simulator`, `sports`, `entertainment`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 3.60 m (360 cm)
- **Bounding Depth ($D$):** 2.50 m (250 cm)
- **Bounding Height ($H$):** 2.80 m (280 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 84 tris
- **Total Vertices:** 252 vertices
- **Architectural Edges:** 40 segments
- **Measured Bounding Box:** 3.56m × 2.45m × 2.8m

---

### 3. Design Concept & Architectural Expression
Complete room-scale golf simulation suite featuring heavy acoustic ballistic baffles, tensioned HD impact projection screen, multi-surface fairway hitting turf, and dual high-speed tracking cameras.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.00, 0.06)` | `#1e222a` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.08)` | `(0.92, 0.82)` | `(0.06, 0.02)` | `#2d6a4f` | `true` | Component #2 |
| 3 | `box` | `(-0.47, -0.05)` | `(0.05, 0.88)` | `(0.06, 0.94)` | `#16171b` (dark) | `true` | Component #3 |
| 4 | `box` | `(0.47, -0.05)` | `(0.05, 0.88)` | `(0.06, 0.94)` | `#16171b` (dark) | `true` | Component #4 |
| 5 | `box` | `(0.00, -0.47)` | `(0.92, 0.04)` | `(0.06, 0.92)` | `#f8f9fa` | `true` [glow] | Component #5 |
| 6 | `box` | `(0.00, -0.05)` | `(0.96, 0.88)` | `(0.96, 0.04)` | `#16171b` | `none` | Component #6 |
| 7 | `box` | `(0.00, 0.15)` | `(0.35, 0.12)` | `(0.94, 0.04)` | `#c5a059` | `glow` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.98)
- **Shape 2:** `rect` $(x: 0.00, z: 0.08, w: 0.92, d: 0.82)
- **Shape 3:** `line` $(x_1: -0.46, z_1: -0.47, x_2: 0.46, z_2: -0.47)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/immersive_golf_simulator.fp3dpack`
