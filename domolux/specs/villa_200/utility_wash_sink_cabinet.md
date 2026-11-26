# Domolux Specification: Domolux Deep Composite Service and Pet-Wash Basin Cabinet
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Deep Composite Service and Pet-Wash Basin Cabinet
- **German Name:** Domolux Multifunktionales Ausgussbecken mit Unterschrank
- **Arabic Name:** حوض الغسيل الخدمي العميق مع صنبور شاور مرن دومولوكس
- **Unique Item ID:** `utility_wash_sink_cabinet`
- **Unique Pack ID:** `domolux.utility_wash_sink_cabinet`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `storage`, `kitchen`
- **Discovery Tags:** `utility_sink`, `wash_basin`, `laundry`, `pet_wash`, `service`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.80 m (80 cm)
- **Bounding Depth ($D$):** 0.65 m (65 cm)
- **Bounding Height ($H$):** 0.90 m (90 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 104 tris
- **Total Vertices:** 312 vertices
- **Architectural Edges:** 30 segments
- **Measured Bounding Box:** 0.78m × 0.62m × 0.9m

---

### 3. Design Concept & Architectural Expression
Deep granite-composite utility tub cabinet with splashback protection, commercial pull-down spring-coil pre-rinse faucet, and waterproof under-sink storage.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.88)` | `(0.00, 0.12)` | `#16171b` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.96, 0.92)` | `(0.12, 0.65)` | `#272a33` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.77, 0.23)` | `#495057` | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.05)` | `(0.84, 0.72)` | `(0.35, 0.62)` | `#1f2228` | `none` | Component #4 |
| 5 | `cyl` | `(0.00, -0.38)` | `(0.06, 0.06)` | `(0.82, 0.18)` | `#c5a059` | `glow` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `rect` $(x: 0.00, z: 0.05, w: 0.84, d: 0.72)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/utility_wash_sink_cabinet.fp3dpack`
