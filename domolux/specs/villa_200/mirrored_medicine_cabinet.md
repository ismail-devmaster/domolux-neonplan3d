# Domolux Specification: Domolux Recessed Tri-View Mirrored Cabinet
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Recessed Tri-View Mirrored Cabinet
- **German Name:** Domolux 3-teiliger LED-Spiegelschrank
- **Arabic Name:** خزانة أدوية ومستحضرات جدارية ثلاثية المرايا بإضاءة محيطية دومولوكس
- **Unique Item ID:** `mirrored_medicine_cabinet`
- **Unique Pack ID:** `domolux.mirrored_medicine_cabinet`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 1.2m)
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `medicine_cabinet`, `mirror`, `storage`, `lighting`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.90 m (90 cm)
- **Bounding Depth ($D$):** 0.16 m (16 cm)
- **Bounding Height ($H$):** 0.80 m (80 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 72 tris
- **Total Vertices:** 216 vertices
- **Architectural Edges:** 40 segments
- **Measured Bounding Box:** 0.88m × 0.11m × 0.78m

---

### 3. Design Concept & Architectural Expression
Tri-view recessed wall cabinet with bevelled optical float mirror faces, internal integrated electric toothbrush charging docks, and perimeter halo ambient illumination.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.38)` | `(0.96, 0.20)` | `(0.04, 0.92)` | `#1e2025` | `true` | Component #1 |
| 2 | `box` | `(0.00, -0.26)` | `(0.98, 0.04)` | `(0.02, 0.96)` | `#fff3cc` | `none` [glow] | Component #2 |
| 3 | `box` | `(0.00, 0.15)` | `(0.48, 0.04)` | `(0.02, 0.96)` | `#a8c0d8` (glass) | `true` | Component #3 |
| 4 | `box` | `(-0.36, 0.15)` | `(0.22, 0.04)` | `(0.02, 0.96)` | `#a8c0d8` (glass) | `true` | Component #4 |
| 5 | `box` | `(0.36, 0.15)` | `(0.22, 0.04)` | `(0.02, 0.96)` | `#a8c0d8` (glass) | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.15)` | `(0.98, 0.06)` | `(0.00, 0.02)` | `#c5a059` | `glow` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.60)
- **Shape 2:** `line` $(x_1: -0.25, z_1: 0.15, x_2: -0.25, z_2: -0.38)$
- **Shape 3:** `line` $(x_1: 0.25, z_1: 0.15, x_2: 0.25, z_2: -0.38)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/mirrored_medicine_cabinet.fp3dpack`
