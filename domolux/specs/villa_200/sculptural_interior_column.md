# Domolux Specification: Domolux Sculptural Interior Column
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Sculptural Interior Column
- **German Name:** Domolux Skulpturale Innenraumsäule
- **Arabic Name:** عامود داخلي نحتي دومولوكس
- **Unique Item ID:** `sculptural_interior_column`
- **Unique Pack ID:** `domolux.sculptural_interior_column`
- **Collection:** Architectural Interior Systems
- **Category:** Architectural Elements
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `hall`, `living`, `dining`
- **Discovery Tags:** `column`, `marble`, `sculptural`, `monumental`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.70 m (70 cm)
- **Bounding Depth ($D$):** 0.70 m (70 cm)
- **Bounding Height ($H$):** 3.20 m (320 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 260 tris
- **Total Vertices:** 780 vertices
- **Architectural Edges:** 76 segments
- **Measured Bounding Box:** 0.7m × 0.7m × 3.2m

---

### 3. Design Concept & Architectural Expression
Freestanding monumental architectural structural column crafted from honed Nero Marquina marble with fluted cylinder profile and brushed bronze collar rings.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.95, 0.95)` | `(0.00, 0.04)` | `#16171a` | `true` | Component #1 |
| 2 | `cyl` | `(0.00, 0.00)` | `(0.90, 0.90)` | `(0.04, 0.03)` | `#c5a059` | `glow` | Component #2 |
| 3 | `cyl` | `(0.00, 0.00)` | `(0.82, 0.82)` | `(0.07, 0.84)` | `#22242a` (dark) | `true` | Component #3 |
| 4 | `cyl` | `(0.00, 0.00)` | `(0.84, 0.84)` | `(0.48, 0.03)` | `#c5a059` | `glow` | Component #4 |
| 5 | `cyl` | `(0.00, 0.00)` | `(0.88, 0.88)` | `(0.91, 0.04)` | `#c5a059` | `glow` | Component #5 |
| 6 | `loft` | `(0.00, 0.00)` | `(0.85, 0.85)` | `(0.95, 0.03)` | `#16171a` | `true` | Component #6 |
| 7 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.98, 0.02)` | `#16171a` | `true` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `circle` $(x: 0.00, z: 0.00, r: 0.45)$
- **Shape 2:** `circle` $(x: 0.00, z: 0.00, r: 0.38)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/sculptural_interior_column.fp3dpack`
