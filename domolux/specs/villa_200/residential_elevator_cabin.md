# Domolux Specification: Domolux Monumental Glass and Bronze Private Villa Elevator
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Monumental Glass and Bronze Private Villa Elevator
- **German Name:** Domolux Monumentale Luxus-Aufzugskabine
- **Arabic Name:** مقصورة المصعد البانورامي المعماري بالزجاج والبرونز المصقول دومولوكس
- **Unique Item ID:** `residential_elevator_cabin`
- **Unique Pack ID:** `domolux.residential_elevator_cabin`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `hallway`, `living`
- **Discovery Tags:** `elevator`, `lift`, `panoramic`, `bronze`, `glass`, `luxury`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.50 m (150 cm)
- **Bounding Depth ($D$):** 1.50 m (150 cm)
- **Bounding Height ($H$):** 2.30 m (230 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 96 tris
- **Total Vertices:** 288 vertices
- **Architectural Edges:** 24 segments
- **Measured Bounding Box:** 1.47m × 1.47m × 2.3m

---

### 3. Design Concept & Architectural Expression
Panoramic luxury residential lift cabin featuring curved laminated safety glass, satin champagne bronze wall stanchions, Fior di Bosco marble floor, and luminous ceiling.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.00, 0.06)` | `#495057` | `true` | Component #1 |
| 2 | `box` | `(0.00, -0.47)` | `(0.96, 0.04)` | `(0.06, 0.90)` | `#c5a059` | `glow` | Component #2 |
| 3 | `box` | `(-0.47, 0.00)` | `(0.02, 0.96)` | `(0.06, 0.90)` | `#88c0d0` (glass) | `none` | Component #3 |
| 4 | `box` | `(0.47, 0.00)` | `(0.02, 0.96)` | `(0.06, 0.90)` | `#88c0d0` (glass) | `none` | Component #4 |
| 5 | `box` | `(-0.24, 0.47)` | `(0.46, 0.02)` | `(0.06, 0.90)` | `#88c0d0` (glass) | `none` | Component #5 |
| 6 | `box` | `(0.24, 0.47)` | `(0.46, 0.02)` | `(0.06, 0.90)` | `#88c0d0` (glass) | `none` | Component #6 |
| 7 | `box` | `(0.00, 0.00)` | `(0.96, 0.96)` | `(0.96, 0.04)` | `#ffffff` | `none` [glow] | Component #7 |
| 8 | `box` | `(0.42, 0.20)` | `(0.04, 0.20)` | `(0.35, 0.50)` | `#141518` | `true` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.98)
- **Shape 2:** `line` $(x_1: -0.47, z_1: -0.47, x_2: 0.47, z_2: -0.47)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/residential_elevator_cabin.fp3dpack`
