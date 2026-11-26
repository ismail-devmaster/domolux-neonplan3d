# Domolux Specification: Domolux Monumental Glass Conservatory and Winter Garden Pavilion
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Monumental Glass Conservatory and Winter Garden Pavilion
- **German Name:** Domolux Monumentale Orangerie & Glas-Wintergarten
- **Arabic Name:** قصر النباتات الشتوي والكونسرفتوار الزجاجي المعماري الفاخر دومولوكس
- **Unique Item ID:** `private_conservatory_greenhouse`
- **Unique Pack ID:** `domolux.private_conservatory_greenhouse`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `conservatory`, `greenhouse`, `orangerie`, `glass_pavilion`, `winter_garden`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 3.50 m (350 cm)
- **Bounding Depth ($D$):** 2.40 m (240 cm)
- **Bounding Height ($H$):** 2.80 m (280 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 128 tris
- **Total Vertices:** 384 vertices
- **Architectural Edges:** 58 segments
- **Measured Bounding Box:** 3.43m × 2.35m × 2.74m

---

### 3. Design Concept & Architectural Expression
Monumental Victorian-inspired private villa conservatory featuring blackened steel architectural glazing, vaulted arched glass roof, automated ridge vent windows, and central exotic planter island.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.00, 0.22)` | `#495057` (dark) | `true` | Component #1 |
| 2 | `box` | `(-0.47, 0.00)` | `(0.04, 0.94)` | `(0.22, 0.58)` | `#88c0d0` (glass) | `true` | Component #2 |
| 3 | `box` | `(0.47, 0.00)` | `(0.04, 0.94)` | `(0.22, 0.58)` | `#88c0d0` (glass) | `true` | Component #3 |
| 4 | `box` | `(0.00, -0.47)` | `(0.94, 0.04)` | `(0.22, 0.58)` | `#88c0d0` (glass) | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.47)` | `(0.94, 0.04)` | `(0.22, 0.58)` | `#88c0d0` (glass) | `true` | Component #5 |
| 6 | `loft` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.80, 0.18)` | `#3a4a58` (glass) | `true` | Component #6 |
| 7 | `cyl` | `(0.00, 0.00)` | `(0.45, 0.45)` | `(0.22, 0.45)` | `#2d6a4f` | `true` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.98)
- **Shape 2:** `circle` $(x: 0.00, z: 0.00, r: 0.22)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/private_conservatory_greenhouse.fp3dpack`
