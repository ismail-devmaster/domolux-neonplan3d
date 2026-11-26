# Domolux Specification: Domolux Precision On-Demand Coffee Grinder
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Precision On-Demand Coffee Grinder
- **German Name:** Domolux Präzisions-Kaffeemühle
- **Arabic Name:** مطحنة قهوة دقيقة عند الطلب دومولوكس
- **Unique Item ID:** `precision_coffee_grinder`
- **Unique Pack ID:** `domolux.precision_coffee_grinder`
- **Collection:** Gourmet Kitchens and Specialty Culinary Equipment
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `surface`
- **Placement Surface:** `false`
- **Target Environments:** `kitchen`
- **Discovery Tags:** `grinder`, `coffee`, `espresso`, `burrs`, `countertop`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.22 m (22 cm)
- **Bounding Depth ($D$):** 0.32 m (32 cm)
- **Bounding Height ($H$):** 0.52 m (52 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 172 tris
- **Total Vertices:** 516 vertices
- **Architectural Edges:** 60 segments
- **Measured Bounding Box:** 0.2m × 0.31m × 0.52m

---

### 3. Design Concept & Architectural Expression
Countertop commercial espresso bean grinder featuring stepless micrometric burr adjustment, smoked glass bean hopper with walnut lid, and hands-free portafilter cradle.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.92, 0.92)` | `(0.00, 0.12)` | `#1c1d22` | `true` | Component #1 |
| 2 | `box` | `(0.00, 0.38)` | `(0.40, 0.25)` | `(0.14, 0.05)` | `metal` | `glow` | Component #2 |
| 3 | `loft` | `(0.00, -0.05)` | `(0.75, 0.75)` | `(0.12, 0.52)` | `#25272e` (dark) | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.28)` | `(0.42, 0.02)` | `(0.38, 0.14)` | `#38bdf8` | `glow` [glow] | Component #4 |
| 5 | `cyl` | `(0.00, -0.05)` | `(0.68, 0.68)` | `(0.64, 0.06)` | `#c5a059` | `glow` | Component #5 |
| 6 | `loft` | `(0.00, -0.05)` | `(0.40, 0.40)` | `(0.70, 0.24)` | `glass` | `true` | Component #6 |
| 7 | `cyl` | `(0.00, -0.05)` | `(0.78, 0.78)` | `(0.94, 0.06)` | `#45362a` (wood) | `true` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.92, d: 0.92)
- **Shape 2:** `circle` $(x: 0.00, z: -0.05, r: 0.38)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/precision_coffee_grinder.fp3dpack`
