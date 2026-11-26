# Domolux Specification: Domolux Architectural Archway Portal
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Architectural Archway Portal
- **German Name:** Domolux Architektonisches Bogenportal
- **Arabic Name:** بوابة قوسية معمارية دومولوكس
- **Unique Item ID:** `architectural_archway_portal`
- **Unique Pack ID:** `domolux.architectural_archway_portal`
- **Collection:** Architectural Interior Systems
- **Category:** Architectural Elements
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `hall`, `living`, `dining`
- **Discovery Tags:** `arch`, `portal`, `entrance`, `travertine`, `architectural`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.20 m (220 cm)
- **Bounding Depth ($D$):** 0.45 m (45 cm)
- **Bounding Height ($H$):** 3.10 m (310 cm)
- **Geometric Parts:** 14 native components (Engine limit: 60)
- **Total Triangles:** 168 tris
- **Total Vertices:** 504 vertices
- **Architectural Edges:** 108 segments
- **Measured Bounding Box:** 2.22m × 0.43m × 3.1m

---

### 3. Design Concept & Architectural Expression
Grand transition archway portal featuring deep travertine jambs, sculpted radial arch crown, integrated concealed ambient reveal lighting, and brushed bronze plinth shoes.

---

### 4. Component Breakdown & Geometry Table (14 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.41, 0.00)` | `(0.18, 0.95)` | `(0.00, 0.05)` | `#c5a059` | `glow` | Component #1 |
| 2 | `box` | `(0.41, 0.00)` | `(0.18, 0.95)` | `(0.00, 0.05)` | `#c5a059` | `glow` | Component #2 |
| 3 | `box` | `(-0.41, 0.00)` | `(0.16, 0.90)` | `(0.05, 0.65)` | `#d5cec2` (body) | `true` | Component #3 |
| 4 | `box` | `(0.41, 0.00)` | `(0.16, 0.90)` | `(0.05, 0.65)` | `#d5cec2` (body) | `true` | Component #4 |
| 5 | `box` | `(-0.41, 0.00)` | `(0.19, 0.95)` | `(0.70, 0.04)` | `#9e8354` | `glow` | Component #5 |
| 6 | `box` | `(0.41, 0.00)` | `(0.19, 0.95)` | `(0.70, 0.04)` | `#9e8354` | `glow` | Component #6 |
| 7 | `box` | `(-0.35, 0.00)` | `(0.16, 0.88)` | `(0.74, 0.10)` | `#d5cec2` (body) | `true` | Component #7 |
| 8 | `box` | `(0.35, 0.00)` | `(0.16, 0.88)` | `(0.74, 0.10)` | `#d5cec2` (body) | `true` | Component #8 |
| 9 | `box` | `(-0.25, 0.00)` | `(0.16, 0.88)` | `(0.84, 0.08)` | `#d5cec2` (body) | `true` | Component #9 |
| 10 | `box` | `(0.25, 0.00)` | `(0.16, 0.88)` | `(0.84, 0.08)` | `#d5cec2` (body) | `true` | Component #10 |
| 11 | `loft` | `(0.00, 0.00)` | `(0.22, 0.92)` | `(0.90, 0.10)` | `#c5a059` | `glow` | Component #11 |
| 12 | `box` | `(0.00, 0.00)` | `(1.00, 0.92)` | `(0.98, 0.02)` | `#d5cec2` (body) | `true` | Component #12 |
| 13 | `box` | `(-0.32, 0.00)` | `(0.02, 0.10)` | `(0.05, 0.65)` | `#ffe0b2` | `glow` [glow] | Component #13 |
| 14 | `box` | `(0.32, 0.00)` | `(0.02, 0.10)` | `(0.05, 0.65)` | `#ffe0b2` | `glow` [glow] | Component #14 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: -0.41, z: 0.00, w: 0.18, d: 0.95) [filled]
- **Shape 2:** `rect` $(x: 0.41, z: 0.00, w: 0.18, d: 0.95) [filled]
- **Shape 3:** `line` $(x_1: -0.32, z_1: 0.00, x_2: 0.32, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/architectural_archway_portal.fp3dpack`
