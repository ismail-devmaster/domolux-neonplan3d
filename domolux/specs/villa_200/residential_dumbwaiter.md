# Domolux Specification: Domolux Bi-Parting Stainless Service Dumbwaiter Lift
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Bi-Parting Stainless Service Dumbwaiter Lift
- **German Name:** Domolux Speisenaufzug & Butler-Lift
- **Arabic Name:** مصعد تقديم الأطعمة والخدمات الخفيفة بين الطوابق دومولوكس
- **Unique Item ID:** `residential_dumbwaiter`
- **Unique Pack ID:** `domolux.residential_dumbwaiter`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 0.6m)
- **Placement Surface:** `false`
- **Target Environments:** `kitchen`, `storage`
- **Discovery Tags:** `dumbwaiter`, `service_lift`, `butler`, `food_lift`, `kitchen`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.75 m (75 cm)
- **Bounding Depth ($D$):** 0.75 m (75 cm)
- **Bounding Height ($H$):** 1.20 m (120 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 60 tris
- **Total Vertices:** 180 vertices
- **Architectural Edges:** 24 segments
- **Measured Bounding Box:** 0.74m × 0.54m × 1.18m

---

### 3. Design Concept & Architectural Expression
Compact architectural dumbwaiter connecting kitchen, wine cellar, and master suite, featuring bi-parting stainless doors, heated tray shelf, and whisper drive.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.35)` | `(0.96, 0.25)` | `(0.02, 0.96)` | `#16171b` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.98, 0.45)` | `(0.00, 0.98)` | `metal` (metal) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.24)` | `(0.86, 0.02)` | `(0.52, 0.42)` | `#cfd8dc` (white) | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.24)` | `(0.86, 0.02)` | `(0.06, 0.42)` | `#cfd8dc` (white) | `true` | Component #4 |
| 5 | `box` | `(0.40, 0.24)` | `(0.06, 0.02)` | `(0.85, 0.08)` | `#00e5ff` | `none` [glow] | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.70)
- **Shape 2:** `line` $(x_1: -0.43, z_1: 0.24, x_2: 0.43, z_2: 0.24)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/residential_dumbwaiter.fp3dpack`
