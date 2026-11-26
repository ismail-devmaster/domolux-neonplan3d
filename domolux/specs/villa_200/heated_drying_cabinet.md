# Domolux Specification: Domolux Professional Heat-Pump Garment Drying Armoire
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Professional Heat-Pump Garment Drying Armoire
- **German Name:** Domolux Professioneller Wärmepumpen-Trockenschrank
- **Arabic Name:** دولاب تجفيف الملابس الحراري المتطور بمضخة حرارية دومولوكس
- **Unique Item ID:** `heated_drying_cabinet`
- **Unique Pack ID:** `domolux.heated_drying_cabinet`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `storage`
- **Discovery Tags:** `drying_cabinet`, `garment_care`, `heat_pump`, `appliances`, `laundry`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.60 m (60 cm)
- **Bounding Depth ($D$):** 0.65 m (65 cm)
- **Bounding Height ($H$):** 1.85 m (185 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 104 tris
- **Total Vertices:** 312 vertices
- **Architectural Edges:** 30 segments
- **Measured Bounding Box:** 0.58m × 0.64m × 1.81m

---

### 3. Design Concept & Architectural Expression
Gentle heat-pump clothes drying cabinet for delicate silks and outerwear, featuring three levels of pull-out drying racks, shoe blowers, and digital touch door.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.94)` | `(0.00, 0.06)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.02)` | `(0.96, 0.94)` | `(0.06, 0.92)` | `#22252c` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.46)` | `(0.92, 0.04)` | `(0.08, 0.88)` | `#1b2028` (glass) | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.48)` | `(0.42, 0.01)` | `(0.82, 0.08)` | `#00e5ff` | `none` [glow] | Component #4 |
| 5 | `cyl` | `(0.38, 0.48)` | `(0.03, 0.03)` | `(0.25, 0.50)` | `#c5a059` | `glow` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.94)
- **Shape 2:** `line` $(x_1: -0.46, z_1: 0.46, x_2: 0.46, z_2: 0.46)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/heated_drying_cabinet.fp3dpack`
