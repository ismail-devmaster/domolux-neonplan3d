# Domolux Specification: Domolux Private Library Reading Lectern
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Private Library Reading Lectern
- **German Name:** Domolux Bibliotheks-Lesepult
- **Arabic Name:** منصة قراءة مكتبية فاخرة دومولوكس
- **Unique Item ID:** `private_library_lectern`
- **Unique Pack ID:** `domolux.private_library_lectern`
- **Collection:** Exclusive Interior Furnishings, Art and Decor
- **Category:** Living Room
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `true`
- **Target Environments:** `library`, `office`, `living`
- **Discovery Tags:** `lectern`, `reading`, `library`, `book`, `walnut`, `brass`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.65 m (65 cm)
- **Bounding Depth ($D$):** 0.55 m (55 cm)
- **Bounding Height ($H$):** 1.30 m (130 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 184 tris
- **Total Vertices:** 552 vertices
- **Architectural Edges:** 58 segments
- **Measured Bounding Box:** 0.55m × 0.48m × 1.69m

---

### 3. Design Concept & Architectural Expression
Sculptural reading lectern handcrafted in American walnut with 25-degree angled book rest, knurled brass page-holder clips, integrated LED reading wand, and cruciform weighted bronze base.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.80, 0.20)` | `(0.00, 0.05)` | `#3d301b` | `glow` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.20, 0.80)` | `(0.00, 0.05)` | `#3d301b` | `glow` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.18, 0.18)` | `(0.05, 0.72)` | `#45362a` (wood) | `true` | Component #3 |
| 4 | `cyl` | `(0.00, 0.00)` | `(0.22, 0.22)` | `(0.75, 0.06)` | `#c5a059` | `glow` | Component #4 |
| 5 | `loft` | `(0.00, 0.00)` | `(0.85, 0.75)` | `(0.80, 0.18)` | `#382c22` (wood) | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.28)` | `(0.85, 0.08)` | `(0.80, 0.05)` | `#c5a059` | `glow` | Component #6 |
| 7 | `cyl` | `(0.00, -0.32)` | `(0.02, 0.02)` | `(0.95, 0.35)` | `#c5a059` | `none` | Component #7 |
| 8 | `box` | `(0.00, -0.15)` | `(0.25, 0.04)` | `(0.98, 0.02)` | `#fff5ea` | `glow` [glow] | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.85, d: 0.75)
- **Shape 2:** `line` $(x_1: -0.40, z_1: 0.28, x_2: 0.40, z_2: 0.28)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/private_library_lectern.fp3dpack`
