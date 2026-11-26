# Domolux Specification: Domolux Reference Acoustically Ventilated AV Credenza
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Reference Acoustically Ventilated AV Credenza
- **German Name:** Domolux High-End HiFi- & Medienkonsole
- **Arabic Name:** خزانة التجهيزات السمعية والبصرية عالية الأداء دومولوكس
- **Unique Item ID:** `av_equipment_cabinet`
- **Unique Pack ID:** `domolux.av_equipment_cabinet`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `office`
- **Discovery Tags:** `av_cabinet`, `credenza`, `hifi`, `media`, `cinema`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.80 m (180 cm)
- **Bounding Depth ($D$):** 0.60 m (60 cm)
- **Bounding Height ($H$):** 0.85 m (85 cm)
- **Geometric Parts:** 9 native components (Engine limit: 60)
- **Total Triangles:** 284 tris
- **Total Vertices:** 852 vertices
- **Architectural Edges:** 40 segments
- **Measured Bounding Box:** 1.76m × 0.55m × 0.82m

---

### 3. Design Concept & Architectural Expression
Low-profile audiophile credenza featuring acoustic fabric speaker bays, infrared-pass smoked glass component doors, ultra-quiet cross-flow cooling fans, and vibration-isolated feet.

---

### 4. Component Breakdown & Geometry Table (9 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(-0.42, -0.38)` | `(0.08, 0.08)` | `(0.00, 0.10)` | `#c5a059` | `none` | Component #1 |
| 2 | `cyl` | `(0.42, -0.38)` | `(0.08, 0.08)` | `(0.00, 0.10)` | `#c5a059` | `none` | Component #2 |
| 3 | `cyl` | `(-0.42, 0.38)` | `(0.08, 0.08)` | `(0.00, 0.10)` | `#c5a059` | `none` | Component #3 |
| 4 | `cyl` | `(0.42, 0.38)` | `(0.08, 0.08)` | `(0.00, 0.10)` | `#c5a059` | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.98, 0.92)` | `(0.10, 0.84)` | `#16171b` (dark) | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.44)` | `(0.34, 0.04)` | `(0.14, 0.74)` | `#2d323b` (fabric) | `true` | Component #6 |
| 7 | `box` | `(-0.32, 0.44)` | `(0.28, 0.04)` | `(0.14, 0.74)` | `#1e2229` (glass) | `true` | Component #7 |
| 8 | `box` | `(0.32, 0.44)` | `(0.28, 0.04)` | `(0.14, 0.74)` | `#1e2229` (glass) | `true` | Component #8 |
| 9 | `box` | `(0.00, -0.35)` | `(0.40, 0.08)` | `(0.94, 0.02)` | `#c5a059` | `glow` | Component #9 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.92)
- **Shape 2:** `line` $(x_1: -0.17, z_1: -0.45, x_2: -0.17, z_2: 0.45)$
- **Shape 3:** `line` $(x_1: 0.17, z_1: -0.45, x_2: 0.17, z_2: 0.45)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/av_equipment_cabinet.fp3dpack`
