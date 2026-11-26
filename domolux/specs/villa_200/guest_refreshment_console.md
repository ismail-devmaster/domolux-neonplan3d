# Domolux Specification: Domolux Executive Suite Refreshment and Coffee Credenza
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Executive Suite Refreshment and Coffee Credenza
- **German Name:** Domolux Gäste-Kaffee- & Erfrischungsanrichte
- **Arabic Name:** طاولة تقديم القهوة والضيافة لجناح الضيوف دومولوكس
- **Unique Item ID:** `guest_refreshment_console`
- **Unique Pack ID:** `domolux.guest_refreshment_console`
- **Collection:** Master Suites, Guest Hospitality and Nursery
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `bedroom`
- **Discovery Tags:** `credenza`, `coffee_station`, `hospitality`, `console`, `bedroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.10 m (110 cm)
- **Bounding Depth ($D$):** 0.50 m (50 cm)
- **Bounding Height ($H$):** 0.95 m (95 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 272 tris
- **Total Vertices:** 816 vertices
- **Architectural Edges:** 32 segments
- **Measured Bounding Box:** 1.08m × 0.48m × 0.95m

---

### 3. Design Concept & Architectural Expression
Low-profile guest hospitality credenza with inset honed marble stone top, pull-out espresso accessory trays, integrated trash chute, and brushed brass legs.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(-0.42, -0.38)` | `(0.05, 0.05)` | `(0.00, 0.25)` | `#c5a059` | `none` | Component #1 |
| 2 | `cyl` | `(0.42, -0.38)` | `(0.05, 0.05)` | `(0.00, 0.25)` | `#c5a059` | `none` | Component #2 |
| 3 | `cyl` | `(-0.42, 0.38)` | `(0.05, 0.05)` | `(0.00, 0.25)` | `#c5a059` | `none` | Component #3 |
| 4 | `cyl` | `(0.42, 0.38)` | `(0.05, 0.05)` | `(0.00, 0.25)` | `#c5a059` | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.96, 0.92)` | `(0.25, 0.68)` | `#1c1e22` (dark) | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.98, 0.94)` | `(0.93, 0.07)` | `#545a66` | `true` | Component #6 |
| 7 | `box` | `(0.00, 0.46)` | `(0.90, 0.03)` | `(0.60, 0.28)` | `#272a32` | `true` | Component #7 |
| 8 | `box` | `(0.00, 0.48)` | `(0.35, 0.02)` | `(0.72, 0.03)` | `#c5a059` | `glow` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.94)
- **Shape 2:** `line` $(x_1: -0.45, z_1: 0.00, x_2: 0.45, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/guest_refreshment_console.fp3dpack`
