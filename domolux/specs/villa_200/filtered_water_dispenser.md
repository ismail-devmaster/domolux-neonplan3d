# Domolux Specification: Domolux Boiling and Chilled Water Dispensing Tower
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Boiling and Chilled Water Dispensing Tower
- **German Name:** Domolux Multifunktions-Wassersäule
- **Arabic Name:** برج توزيع مياه مغلية ومثلجة ومكربنة دومولوكس
- **Unique Item ID:** `filtered_water_dispenser`
- **Unique Pack ID:** `domolux.filtered_water_dispenser`
- **Collection:** Gourmet Kitchens and Specialty Culinary Equipment
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `surface`
- **Placement Surface:** `false`
- **Target Environments:** `kitchen`
- **Discovery Tags:** `water`, `dispenser`, `tap`, `boiling`, `sparkling`, `kitchen`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.18 m (18 cm)
- **Bounding Depth ($D$):** 0.24 m (24 cm)
- **Bounding Height ($H$):** 0.45 m (45 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 236 tris
- **Total Vertices:** 708 vertices
- **Architectural Edges:** 50 segments
- **Measured Bounding Box:** 0.1m × 0.16m × 0.41m

---

### 3. Design Concept & Architectural Expression
Countertop architectural hydro-tap dispensing instant 100°C boiling water, chilled still, and sparkling water via sub-counter filtration chiller tank with illuminated touch ring.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(0.00, -0.15)` | `(0.55, 0.55)` | `(0.00, 0.04)` | `#c5a059` | `glow` | Component #1 |
| 2 | `cyl` | `(0.00, -0.15)` | `(0.28, 0.28)` | `(0.04, 0.70)` | `#c5a059` | `glow` | Component #2 |
| 3 | `box` | `(0.00, 0.05)` | `(0.22, 0.55)` | `(0.74, 0.12)` | `#c5a059` | `glow` | Component #3 |
| 4 | `cyl` | `(0.00, 0.25)` | `(0.15, 0.15)` | `(0.65, 0.09)` | `metal` | `none` | Component #4 |
| 5 | `cyl` | `(0.00, -0.15)` | `(0.32, 0.32)` | `(0.86, 0.04)` | `#00e5ff` | `glow` [glow] | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `circle` $(x: 0.00, z: -0.15, r: 0.28)$
- **Shape 2:** `line` $(x_1: 0.00, z_1: -0.15, x_2: 0.00, z_2: 0.25)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/filtered_water_dispenser.fp3dpack`
