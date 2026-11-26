# Domolux Specification: Domolux Monolithic 10,000L Rainwater Harvesting Cistern
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Monolithic 10,000L Rainwater Harvesting Cistern
- **German Name:** Domolux Unterirdische 10.000L Regenwasser-Zisterne
- **Arabic Name:** خزان تجميع وحصاد مياه الأمطار المعماري عالي السعة دومولوكس
- **Unique Item ID:** `rainwater_harvesting_cistern`
- **Unique Pack ID:** `domolux.rainwater_harvesting_cistern`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `cistern`, `rainwater`, `water_storage`, `sustainability`, `landscape`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.50 m (250 cm)
- **Bounding Depth ($D$):** 2.50 m (250 cm)
- **Bounding Height ($H$):** 2.20 m (220 cm)
- **Geometric Parts:** 4 native components (Engine limit: 60)
- **Total Triangles:** 180 tris
- **Total Vertices:** 540 vertices
- **Architectural Edges:** 32 segments
- **Measured Bounding Box:** 2.4m × 2.4m × 2.2m

---

### 3. Design Concept & Architectural Expression
Heavy reinforced precast concrete rainwater harvesting reservoir with vortex particulate pre-filter, calming inlet, submersible pressure pump, and cast bronze turret access hatch.

---

### 4. Component Breakdown & Geometry Table (4 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(0.00, 0.00)` | `(0.96, 0.96)` | `(0.00, 0.88)` | `#343a40` (dark) | `true` | Component #1 |
| 2 | `loft` | `(0.00, 0.00)` | `(0.96, 0.96)` | `(0.84, 0.12)` | `#2b2f36` | `true` | Component #2 |
| 3 | `cyl` | `(0.00, 0.00)` | `(0.42, 0.42)` | `(0.90, 0.06)` | `#212529` | `none` | Component #3 |
| 4 | `cyl` | `(0.00, 0.00)` | `(0.38, 0.38)` | `(0.96, 0.04)` | `#c5a059` | `glow` | Component #4 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `circle` $(x: 0.00, z: 0.00, r: 0.48)$
- **Shape 2:** `circle` $(x: 0.00, z: 0.00, r: 0.19)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/rainwater_harvesting_cistern.fp3dpack`
