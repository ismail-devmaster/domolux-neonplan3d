# Domolux Specification: Domolux Garment Folding and Pressing Workstation
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Garment Folding and Pressing Workstation
- **German Name:** Domolux Professionelle Wäsche-Faltstation
- **Arabic Name:** محطة طي وكي الملابس المتكاملة بوحدات تخزين دومولوكس
- **Unique Item ID:** `laundry_folding_station`
- **Unique Pack ID:** `domolux.laundry_folding_station`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `storage`
- **Discovery Tags:** `folding_station`, `laundry`, `pressing`, `utility`, `storage`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.40 m (140 cm)
- **Bounding Depth ($D$):** 0.65 m (65 cm)
- **Bounding Height ($H$):** 0.92 m (92 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 84 tris
- **Total Vertices:** 252 vertices
- **Architectural Edges:** 48 segments
- **Measured Bounding Box:** 1.37m × 0.62m × 0.92m

---

### 3. Design Concept & Architectural Expression
Counter-height pressing credenza featuring an extendable heated sleeve-board dock, pull-out mesh drying drawers, overhead hanging rail, and solid birch drawers.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.92)` | `(0.00, 0.08)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.02)` | `(0.96, 0.92)` | `(0.08, 0.80)` | `#22252c` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.88, 0.12)` | `#e9ecef` (white) | `true` | Component #3 |
| 4 | `box` | `(-0.24, 0.44)` | `(0.42, 0.03)` | `(0.55, 0.28)` | `#323742` | `true` | Component #4 |
| 5 | `box` | `(-0.24, 0.44)` | `(0.42, 0.03)` | `(0.22, 0.28)` | `#323742` | `true` | Component #5 |
| 6 | `box` | `(0.24, 0.44)` | `(0.42, 0.03)` | `(0.14, 0.68)` | `#282c35` | `true` | Component #6 |
| 7 | `box` | `(-0.24, 0.47)` | `(0.16, 0.02)` | `(0.68, 0.03)` | `#c5a059` | `glow` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `line` $(x_1: 0.00, z_1: -0.46, x_2: 0.00, z_2: 0.46)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/laundry_folding_station.fp3dpack`
