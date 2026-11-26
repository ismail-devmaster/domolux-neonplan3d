# Domolux Specification: Domolux Heavy-Duty Professional Workshop Workbench
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Heavy-Duty Professional Workshop Workbench
- **German Name:** Domolux Professionelle Werkbank mit Buchenholzplatte
- **Arabic Name:** طاولة ورشة العمل الاحترافية بسطح خشب الزان ومنجلة دومولوكس
- **Unique Item ID:** `professional_home_workbench`
- **Unique Pack ID:** `domolux.professional_home_workbench`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `storage`
- **Discovery Tags:** `workbench`, `workshop`, `tools`, `beechwood`, `garage`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.80 m (180 cm)
- **Bounding Depth ($D$):** 0.75 m (75 cm)
- **Bounding Height ($H$):** 0.95 m (95 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 84 tris
- **Total Vertices:** 252 vertices
- **Architectural Edges:** 24 segments
- **Measured Bounding Box:** 1.76m × 0.74m × 0.95m

---

### 3. Design Concept & Architectural Expression
Solid steamed-beech butcher-block workbench with heavy-gauge welded steel frame, integrated quick-release bench vise, and modular tool-holding drawers.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.42, -0.38)` | `(0.08, 0.08)` | `(0.00, 0.84)` | `#1a1c22` | `none` | Component #1 |
| 2 | `box` | `(0.42, -0.38)` | `(0.08, 0.08)` | `(0.00, 0.84)` | `#1a1c22` | `none` | Component #2 |
| 3 | `box` | `(-0.42, 0.38)` | `(0.08, 0.08)` | `(0.00, 0.84)` | `#1a1c22` | `none` | Component #3 |
| 4 | `box` | `(0.42, 0.38)` | `(0.08, 0.08)` | `(0.00, 0.84)` | `#1a1c22` | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.90, 0.82)` | `(0.15, 0.04)` | `#252830` | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.84, 0.16)` | `#bfa382` (wood) | `true` | Component #6 |
| 7 | `box` | `(-0.35, 0.46)` | `(0.25, 0.08)` | `(0.84, 0.14)` | `#c5a059` | `glow` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `rect` $(x: -0.35, z: 0.46, w: 0.25, d: 0.08)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/professional_home_workbench.fp3dpack`
