# Domolux Specification: Domolux Estate Entrance Stroller Valet and Charging Port
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Estate Entrance Stroller Valet and Charging Port
- **German Name:** Domolux Kinderwagen-Dockingstation mit Ladestation
- **Arabic Name:** محطة شحن وركن عربات الأطفال للمداخل الفاخرة دومولوكس
- **Unique Item ID:** `stroller_docking_station`
- **Unique Pack ID:** `domolux.stroller_docking_station`
- **Collection:** Master Suites, Guest Hospitality and Nursery
- **Category:** Entryway
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `hallway`, `storage`
- **Discovery Tags:** `stroller`, `entryway`, `charging`, `nursery`, `valet`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.85 m (85 cm)
- **Bounding Depth ($D$):** 0.70 m (70 cm)
- **Bounding Height ($H$):** 1.10 m (110 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 204 tris
- **Total Vertices:** 612 vertices
- **Architectural Edges:** 44 segments
- **Measured Bounding Box:** 0.8m × 0.66m × 1.08m

---

### 3. Design Concept & Architectural Expression
Dedicated entryway stroller parking alcove with inductive battery charging pad for e-strollers, overhead UV sterilizing halo, fluted oak wall panel, and bronze canopy hook.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.94)` | `(0.00, 0.06)` | `#181a1f` | `true` | Component #1 |
| 2 | `cyl` | `(0.00, 0.15)` | `(0.38, 0.38)` | `(0.06, 0.01)` | `#00e5ff` | `none` [glow] | Component #2 |
| 3 | `box` | `(0.00, -0.42)` | `(0.94, 0.08)` | `(0.06, 0.92)` | `#3d2b1f` (wood) | `true` | Component #3 |
| 4 | `box` | `(0.00, -0.22)` | `(0.88, 0.38)` | `(0.90, 0.04)` | `#1c1e22` | `none` | Component #4 |
| 5 | `cyl (z)` | `(-0.25, -0.34)` | `(0.03, 0.03)` | `(0.76, 0.12)` | `#c5a059` | `glow` | Component #5 |
| 6 | `cyl (z)` | `(0.25, -0.34)` | `(0.03, 0.03)` | `(0.76, 0.12)` | `#c5a059` | `glow` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.94, d: 0.94)
- **Shape 2:** `circle` $(x: 0.00, z: 0.15, r: 0.19)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/stroller_docking_station.fp3dpack`
