# Domolux Specification: Domolux Architectural Wall-Hung Ceramic Bidet
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Architectural Wall-Hung Ceramic Bidet
- **German Name:** Domolux Wandhängendes Designer-Bidet
- **Arabic Name:** شطاف حمام جداري معلق من السيراميك الفاخر دومولوكس
- **Unique Item ID:** `wall_hung_bidet`
- **Unique Pack ID:** `domolux.wall_hung_bidet`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 0.15m)
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `bidet`, `porcelain`, `wellness`, `hygiene`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.38 m (38 cm)
- **Bounding Depth ($D$):** 0.56 m (56 cm)
- **Bounding Height ($H$):** 0.40 m (40 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 160 tris
- **Total Vertices:** 480 vertices
- **Architectural Edges:** 42 segments
- **Measured Bounding Box:** 0.35m × 0.48m × 0.38m

---

### 3. Design Concept & Architectural Expression
Sculpted minimalist wall-hung vitrified porcelain bidet with concealed carrier frame integration, ergonomic contoured bowl cavity, and precision brushed bronze single-lever mixer.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.46)` | `(0.82, 0.08)` | `(0.05, 0.90)` | `#22252c` | `true` | Component #1 |
| 2 | `loft` | `(0.00, -0.05)` | `(0.92, 0.82)` | `(0.15, 0.85)` | `#f8f9fa` (white) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.05)` | `(0.68, 0.56)` | `(0.45, 0.52)` | `#e2e6ea` (white) | `true` | Component #3 |
| 4 | `cyl` | `(0.00, 0.12)` | `(0.16, 0.16)` | `(0.46, 0.02)` | `#c5a059` | `none` | Component #4 |
| 5 | `cyl` | `(0.00, -0.32)` | `(0.08, 0.08)` | `(0.82, 0.12)` | `#c5a059` | `glow` | Component #5 |
| 6 | `box` | `(0.00, -0.25)` | `(0.06, 0.12)` | `(0.94, 0.04)` | `#c5a059` | `glow` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: -0.05, w: 0.92, d: 0.82)
- **Shape 2:** `circle` $(x: 0.00, z: 0.05, r: 0.28)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/wall_hung_bidet.fp3dpack`
