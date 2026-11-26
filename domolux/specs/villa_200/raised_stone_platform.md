# Domolux Specification: Domolux Raised Architectural Stone Platform
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Raised Architectural Stone Platform
- **German Name:** Domolux Erhöhtes Architektur-Steinpodest
- **Arabic Name:** منصة حجرية معمارية مرتفعة دومولوكس
- **Unique Item ID:** `raised_stone_platform`
- **Unique Pack ID:** `domolux.raised_stone_platform`
- **Collection:** Architectural Interior Systems
- **Category:** Architectural Elements
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `true`
- **Target Environments:** `living`, `hall`, `bath`, `bedroom`
- **Discovery Tags:** `platform`, `stone`, `travertine`, `stage`, `architectural`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 3.40 m (340 cm)
- **Bounding Depth ($D$):** 2.60 m (260 cm)
- **Bounding Height ($H$):** 0.24 m (24 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 60 tris
- **Total Vertices:** 180 vertices
- **Architectural Edges:** 40 segments
- **Measured Bounding Box:** 3.4m × 2.6m × 0.24m

---

### 3. Design Concept & Architectural Expression
Monolithic raised architectural stone stage in honed silver travertine featuring recessed shadow gap sub-base, concealed perimeter floor wash LED, and cantilevered bullnose lip.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.90, 0.90)` | `(0.00, 0.25)` | `#141518` | `faint` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.92, 0.92)` | `(0.05, 0.15)` | `#ffe0b2` | `glow` [glow] | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.25, 0.65)` | `#c8c3b9` (body) | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.85, 0.15)` | `#d6d1c8` (body) | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.99, 0.99)` | `(0.82, 0.03)` | `#9e8354` | `glow` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.92, d: 0.92)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/raised_stone_platform.fp3dpack`
