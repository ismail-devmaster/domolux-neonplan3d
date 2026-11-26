# Domolux Specification: Domolux Smart Automated Indoor Hydroponic Cultivation Armoire
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Smart Automated Indoor Hydroponic Cultivation Armoire
- **German Name:** Domolux Intelligenter Hydrokultur-Kräuterschrank
- **Arabic Name:** خزانة الزراعة المائية الذكية للأعشاب والخضروات العضوية دومولوكس
- **Unique Item ID:** `indoor_hydroponic_growing_cabinet`
- **Unique Pack ID:** `domolux.indoor_hydroponic_growing_cabinet`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `kitchen`, `storage`
- **Discovery Tags:** `hydroponics`, `growing_cabinet`, `herbs`, `microgreens`, `indoor_garden`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.95 m (95 cm)
- **Bounding Depth ($D$):** 0.60 m (60 cm)
- **Bounding Height ($H$):** 1.90 m (190 cm)
- **Geometric Parts:** 9 native components (Engine limit: 60)
- **Total Triangles:** 108 tris
- **Total Vertices:** 324 vertices
- **Architectural Edges:** 48 segments
- **Measured Bounding Box:** 0.93m × 0.58m × 1.86m

---

### 3. Design Concept & Architectural Expression
Multi-tiered closed-loop hydroponic growing cabinet for culinary microgreens and herbs, featuring tuned Samsung horticultural LEDs, carbon odor filters, and smart app dosing.

---

### 4. Component Breakdown & Geometry Table (9 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.96, 0.94)` | `(0.00, 0.18)` | `#181a20` (dark) | `true` | Component #1 |
| 2 | `box` | `(0.00, -0.02)` | `(0.98, 0.94)` | `(0.18, 0.80)` | `#252830` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.08)` | `(0.88, 0.72)` | `(0.22, 0.12)` | `#2d6a4f` | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.08)` | `(0.88, 0.72)` | `(0.48, 0.12)` | `#40916c` | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.08)` | `(0.88, 0.72)` | `(0.74, 0.12)` | `#52b788` | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.08)` | `(0.82, 0.50)` | `(0.44, 0.02)` | `#ff007f` | `none` [glow] | Component #6 |
| 7 | `box` | `(0.00, 0.08)` | `(0.82, 0.50)` | `(0.70, 0.02)` | `#ff007f` | `none` [glow] | Component #7 |
| 8 | `box` | `(0.00, 0.08)` | `(0.82, 0.50)` | `(0.94, 0.02)` | `#ff007f` | `none` [glow] | Component #8 |
| 9 | `box` | `(0.00, 0.46)` | `(0.92, 0.02)` | `(0.18, 0.80)` | `#88c0d0` (glass) | `true` | Component #9 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.94)
- **Shape 2:** `line` $(x_1: -0.46, z_1: 0.46, x_2: 0.46, z_2: 0.46)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/indoor_hydroponic_growing_cabinet.fp3dpack`
