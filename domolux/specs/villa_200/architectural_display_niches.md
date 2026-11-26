# Domolux Specification: Domolux Architectural Display Niche System
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Architectural Display Niche System
- **German Name:** Domolux Architektonisches Wandnischen-System
- **Arabic Name:** نظام كوات العرض المعمارية دومولوكس
- **Unique Item ID:** `architectural_display_niches`
- **Unique Pack ID:** `domolux.architectural_display_niches`
- **Collection:** Architectural Interior Systems
- **Category:** Architectural Elements
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 0.2m)
- **Placement Surface:** `true`
- **Target Environments:** `living`, `hall`, `dining`
- **Discovery Tags:** `niche`, `display`, `shelves`, `lighting`, `recessed`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.60 m (160 cm)
- **Bounding Depth ($D$):** 0.38 m (38 cm)
- **Bounding Height ($H$):** 2.40 m (240 cm)
- **Geometric Parts:** 14 native components (Engine limit: 60)
- **Total Triangles:** 300 tris
- **Total Vertices:** 900 vertices
- **Architectural Edges:** 130 segments
- **Measured Bounding Box:** 1.6m × 0.38m × 2.4m

---

### 3. Design Concept & Architectural Expression
Built-in architectural triple-tier display niche with dark walnut backing, recessed warm spotlights, polished bronze perimeter frame, and tempered glass display shelves.

---

### 4. Component Breakdown & Geometry Table (14 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.40)` | `(1.00, 0.20)` | `(0.00, 1.00)` | `#1e2025` | `faint` | Component #1 |
| 2 | `box` | `(-0.47, 0.20)` | `(0.06, 0.60)` | `(0.00, 1.00)` | `#9e8354` | `glow` | Component #2 |
| 3 | `box` | `(0.47, 0.20)` | `(0.06, 0.60)` | `(0.00, 1.00)` | `#9e8354` | `glow` | Component #3 |
| 4 | `box` | `(0.00, 0.20)` | `(1.00, 0.60)` | `(0.96, 0.04)` | `#9e8354` | `glow` | Component #4 |
| 5 | `box` | `(0.00, 0.20)` | `(1.00, 0.60)` | `(0.00, 0.04)` | `#9e8354` | `glow` | Component #5 |
| 6 | `box` | `(0.00, -0.28)` | `(0.88, 0.05)` | `(0.04, 0.92)` | `#2d231c` (wood) | `faint` | Component #6 |
| 7 | `box` | `(-0.42, 0.00)` | `(0.04, 0.55)` | `(0.04, 0.92)` | `#241c16` (wood) | `faint` | Component #7 |
| 8 | `box` | `(0.42, 0.00)` | `(0.04, 0.55)` | `(0.04, 0.92)` | `#241c16` (wood) | `faint` | Component #8 |
| 9 | `box` | `(0.00, 0.02)` | `(0.82, 0.50)` | `(0.28, 0.01)` | `glass` | `true` | Component #9 |
| 10 | `box` | `(0.00, 0.02)` | `(0.82, 0.50)` | `(0.56, 0.01)` | `glass` | `true` | Component #10 |
| 11 | `box` | `(0.00, 0.02)` | `(0.82, 0.50)` | `(0.84, 0.01)` | `glass` | `true` | Component #11 |
| 12 | `cyl` | `(0.00, -0.05)` | `(0.12, 0.12)` | `(0.94, 0.02)` | `#fff0db` | `glow` [glow] | Component #12 |
| 13 | `cyl` | `(0.00, -0.05)` | `(0.12, 0.12)` | `(0.82, 0.02)` | `#fff0db` | `glow` [glow] | Component #13 |
| 14 | `cyl` | `(0.00, -0.05)` | `(0.12, 0.12)` | `(0.54, 0.02)` | `#fff0db` | `glow` [glow] | Component #14 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.80)
- **Shape 2:** `rect` $(x: 0.00, z: -0.05, w: 0.88, d: 0.60) [filled]

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/architectural_display_niches.fp3dpack`
