# Domolux Specification: Domolux Fine Tea Service Trolley
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Fine Tea Service Trolley
- **German Name:** Domolux Luxuriöser Tee-Servierwagen
- **Arabic Name:** عربة تقديم الشاي الراقية دومولوكس
- **Unique Item ID:** `fine_tea_service_trolley`
- **Unique Pack ID:** `domolux.fine_tea_service_trolley`
- **Collection:** Exclusive Interior Furnishings, Art and Decor
- **Category:** Living Room
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `true`
- **Target Environments:** `living`, `dining`, `patio`
- **Discovery Tags:** `tea`, `service`, `trolley`, `hospitality`, `cart`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.88 m (88 cm)
- **Bounding Depth ($D$):** 0.52 m (52 cm)
- **Bounding Height ($H$):** 0.82 m (82 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 316 tris
- **Total Vertices:** 948 vertices
- **Architectural Edges:** 24 segments
- **Measured Bounding Box:** 0.79m × 0.46m × 0.75m

---

### 3. Design Concept & Architectural Expression
Specialist hospitality tea cart crafted in steamed beech and satin brass, featuring removable porcelain tray inserts, heated urn induction port, and velvet tea caddy drawers.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(-0.36, -0.20)` | `(0.10, 0.10)` | `(0.00, 0.06)` | `#c5a059` | `none` | Component #1 |
| 2 | `cyl` | `(0.36, -0.20)` | `(0.10, 0.10)` | `(0.00, 0.06)` | `#c5a059` | `none` | Component #2 |
| 3 | `cyl` | `(-0.36, 0.20)` | `(0.10, 0.10)` | `(0.00, 0.06)` | `#c5a059` | `none` | Component #3 |
| 4 | `cyl` | `(0.36, 0.20)` | `(0.10, 0.10)` | `(0.00, 0.06)` | `#c5a059` | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.88, 0.85)` | `(0.08, 0.78)` | `#a88158` (wood) | `true` | Component #5 |
| 6 | `box` | `(-0.10, 0.00)` | `(0.55, 0.75)` | `(0.84, 0.03)` | `#f8f9fa` (white) | `true` | Component #6 |
| 7 | `cyl` | `(0.28, 0.00)` | `(0.28, 0.28)` | `(0.85, 0.02)` | `#1e2229` | `none` | Component #7 |
| 8 | `box` | `(0.00, 0.00)` | `(0.90, 0.88)` | `(0.86, 0.05)` | `#c5a059` | `glow` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.88, d: 0.85)
- **Shape 2:** `circle` $(x: 0.28, z: 0.00, r: 0.14)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/fine_tea_service_trolley.fp3dpack`
