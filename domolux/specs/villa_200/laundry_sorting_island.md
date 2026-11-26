# Domolux Specification: Domolux Estate Laundry Sorting and Folding Island
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Estate Laundry Sorting and Folding Island
- **German Name:** Domolux Wäsche-Sortier- & Faltinsel
- **Arabic Name:** جزيرة فرز وترتيب الغسيل المعمارية الفاخرة دومولوكس
- **Unique Item ID:** `laundry_sorting_island`
- **Unique Pack ID:** `domolux.laundry_sorting_island`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `storage`, `kitchen`
- **Discovery Tags:** `laundry`, `sorting_island`, `hampers`, `utility`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.60 m (160 cm)
- **Bounding Depth ($D$):** 0.90 m (90 cm)
- **Bounding Height ($H$):** 0.90 m (90 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 84 tris
- **Total Vertices:** 252 vertices
- **Architectural Edges:** 56 segments
- **Measured Bounding Box:** 1.57m × 0.86m × 0.9m

---

### 3. Design Concept & Architectural Expression
Central laundry room island with seamless engineered Caesarstone top, four tilt-out canvas sorting hampers, concealed detergent drawers, and brushed brass toe-kick.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.88)` | `(0.00, 0.10)` | `#c5a059` | `glow` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.96, 0.92)` | `(0.10, 0.78)` | `#252830` (dark) | `true` | Component #2 |
| 3 | `box` | `(-0.25, 0.44)` | `(0.42, 0.04)` | `(0.14, 0.70)` | `#363a45` | `true` | Component #3 |
| 4 | `box` | `(0.25, 0.44)` | `(0.42, 0.04)` | `(0.14, 0.70)` | `#363a45` | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.88, 0.12)` | `#f1f3f5` (white) | `true` | Component #5 |
| 6 | `box` | `(-0.25, 0.47)` | `(0.18, 0.02)` | `(0.78, 0.03)` | `#c5a059` | `glow` | Component #6 |
| 7 | `box` | `(0.25, 0.47)` | `(0.18, 0.02)` | `(0.78, 0.03)` | `#c5a059` | `glow` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `line` $(x_1: 0.00, z_1: -0.46, x_2: 0.00, z_2: 0.46)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/laundry_sorting_island.fp3dpack`
