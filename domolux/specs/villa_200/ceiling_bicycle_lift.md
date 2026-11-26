# Domolux Specification: Domolux Motorized Architectural Ceiling Bicycle Hoist
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Motorized Architectural Ceiling Bicycle Hoist
- **German Name:** Domolux Motorisierter Decken-Fahrradlift
- **Arabic Name:** رافعة الدراجات السقفية الآلية المعمارية دومولوكس
- **Unique Item ID:** `ceiling_bicycle_lift`
- **Unique Pack ID:** `domolux.ceiling_bicycle_lift`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `ceiling`
- **Placement Surface:** `false`
- **Target Environments:** `storage`
- **Discovery Tags:** `bike_lift`, `bicycle_hoist`, `motorized`, `ceiling`, `garage`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.60 m (60 cm)
- **Bounding Depth ($D$):** 1.80 m (180 cm)
- **Bounding Height ($H$):** 0.40 m (40 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 148 tris
- **Total Vertices:** 444 vertices
- **Architectural Edges:** 24 segments
- **Measured Bounding Box:** 0.5m × 1.69m × 0.34m

---

### 3. Design Concept & Architectural Expression
Ceiling-recessed motorized electric hoist with dual steel aircraft cables, vinyl-coated handlebar/saddle hooks, wireless RF remote, and auto-stop sensors.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.84, 0.94)` | `(0.82, 0.18)` | `#22252c` (dark) | `true` | Component #1 |
| 2 | `cyl` | `(0.00, -0.38)` | `(0.01, 0.01)` | `(0.22, 0.60)` | `metal` | `none` | Component #2 |
| 3 | `cyl` | `(0.00, 0.38)` | `(0.01, 0.01)` | `(0.22, 0.60)` | `metal` | `none` | Component #3 |
| 4 | `box` | `(0.00, -0.38)` | `(0.48, 0.10)` | `(0.15, 0.08)` | `#c5a059` | `glow` | Component #4 |
| 5 | `box` | `(0.00, 0.38)` | `(0.35, 0.10)` | `(0.15, 0.08)` | `#c5a059` | `glow` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.84, d: 0.94)
- **Shape 2:** `circle` $(x: 0.00, z: -0.38, r: 0.12)$
- **Shape 3:** `circle` $(x: 0.00, z: 0.38, r: 0.12)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/ceiling_bicycle_lift.fp3dpack`
