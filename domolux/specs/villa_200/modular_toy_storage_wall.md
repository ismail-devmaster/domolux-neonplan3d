# Domolux Specification: Domolux Curated Architectural Toy and Book Display System
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Curated Architectural Toy and Book Display System
- **German Name:** Domolux Modulare Spielzeug- & Bücherwand
- **Arabic Name:** جدار تخزين وتنظيم الألعاب والكتب المعماري للأطفال دومولوكس
- **Unique Item ID:** `modular_toy_storage_wall`
- **Unique Pack ID:** `domolux.modular_toy_storage_wall`
- **Collection:** Master Suites, Guest Hospitality and Nursery
- **Category:** Storage
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bedroom`, `living`
- **Discovery Tags:** `toy_storage`, `bookcase`, `nursery`, `modular`, `storage`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.00 m (200 cm)
- **Bounding Depth ($D$):** 0.45 m (45 cm)
- **Bounding Height ($H$):** 1.60 m (160 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 96 tris
- **Total Vertices:** 288 vertices
- **Architectural Edges:** 56 segments
- **Measured Bounding Box:** 1.96m × 0.44m × 1.57m

---

### 3. Design Concept & Architectural Expression
Architectural wall storage system with rhythmic open oak display cubes, felt-lined rolling toy chests, integrated low reading ledge, and champagne brass hardware.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.94)` | `(0.00, 0.06)` | `#1c1e22` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.96, 0.92)` | `(0.06, 0.35)` | `#2d313a` | `true` | Component #2 |
| 3 | `box` | `(-0.32, 0.15)` | `(0.28, 0.70)` | `(0.08, 0.30)` | `#7f8c8d` (fabric) | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.15)` | `(0.28, 0.70)` | `(0.08, 0.30)` | `#7f8c8d` (fabric) | `true` | Component #4 |
| 5 | `box` | `(0.32, 0.15)` | `(0.28, 0.70)` | `(0.08, 0.30)` | `#7f8c8d` (fabric) | `true` | Component #5 |
| 6 | `box` | `(0.00, -0.15)` | `(0.96, 0.60)` | `(0.41, 0.57)` | `wood` (wood) | `true` | Component #6 |
| 7 | `box` | `(-0.16, -0.15)` | `(0.02, 0.60)` | `(0.41, 0.57)` | `#c5a059` | `glow` | Component #7 |
| 8 | `box` | `(0.16, -0.15)` | `(0.02, 0.60)` | `(0.41, 0.57)` | `#c5a059` | `glow` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.92)
- **Shape 2:** `line` $(x_1: -0.16, z_1: -0.45, x_2: -0.16, z_2: 0.45)$
- **Shape 3:** `line` $(x_1: 0.16, z_1: -0.45, x_2: 0.16, z_2: 0.45)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/modular_toy_storage_wall.fp3dpack`
