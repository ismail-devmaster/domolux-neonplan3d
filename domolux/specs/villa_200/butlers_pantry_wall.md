# Domolux Specification: Domolux Butler's Pantry Storage Wall
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Butler's Pantry Storage Wall
- **German Name:** Domolux Butler's Pantry Vorrats- und Servicewand
- **Arabic Name:** جدار خزانة خدمة وخادم المطبخ دومولوكس
- **Unique Item ID:** `butlers_pantry_wall`
- **Unique Pack ID:** `domolux.butlers_pantry_wall`
- **Collection:** Gourmet Kitchens and Specialty Culinary Equipment
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `true`
- **Target Environments:** `kitchen`
- **Discovery Tags:** `butler`, `pantry`, `storage`, `cabinet`, `quartzite`, `kitchen`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.60 m (260 cm)
- **Bounding Depth ($D$):** 0.70 m (70 cm)
- **Bounding Height ($H$):** 2.60 m (260 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 96 tris
- **Total Vertices:** 288 vertices
- **Architectural Edges:** 48 segments
- **Measured Bounding Box:** 2.6m × 0.69m × 2.6m

---

### 3. Design Concept & Architectural Expression
Floor-to-ceiling back-kitchen hospitality staging wall with pocket cabinet doors, integrated microwave and coffee niches, honed quartzite prep counter, and LED glass cabinets.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.92)` | `(0.00, 0.04)` | `#16171b` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.98, 0.95)` | `(0.04, 0.36)` | `#2d241c` (wood) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.02)` | `(1.00, 0.98)` | `(0.40, 0.05)` | `#e4dfd5` (body) | `true` | Component #3 |
| 4 | `box` | `(0.00, -0.38)` | `(0.96, 0.04)` | `(0.45, 0.35)` | `#cfc8bc` (body) | `none` | Component #4 |
| 5 | `box` | `(0.00, -0.15)` | `(0.96, 0.55)` | `(0.80, 0.20)` | `#2d241c` (wood) | `true` | Component #5 |
| 6 | `box` | `(-0.24, 0.12)` | `(0.44, 0.03)` | `(0.81, 0.18)` | `glass` | `true` | Component #6 |
| 7 | `box` | `(0.24, 0.12)` | `(0.44, 0.03)` | `(0.81, 0.18)` | `glass` | `true` | Component #7 |
| 8 | `box` | `(0.00, -0.05)` | `(0.94, 0.04)` | `(0.79, 0.01)` | `#fff5ea` | `glow` [glow] | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.98)
- **Shape 2:** `line` $(x_1: -0.48, z_1: 0.00, x_2: 0.48, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/butlers_pantry_wall.fp3dpack`
