# Domolux Specification: Domolux Integrated Luxury Espresso Machine
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Integrated Luxury Espresso Machine
- **German Name:** Domolux Integrierter Einbau-Espressovollautomat
- **Arabic Name:** ماكينة قهوة إسبريسو مدمجة فاخرة دومولوكس
- **Unique Item ID:** `integrated_espresso_machine`
- **Unique Pack ID:** `domolux.integrated_espresso_machine`
- **Collection:** Gourmet Kitchens and Specialty Culinary Equipment
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `surface`
- **Placement Surface:** `true`
- **Target Environments:** `kitchen`
- **Discovery Tags:** `espresso`, `coffee`, `integrated`, `culinary`, `appliance`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.60 m (60 cm)
- **Bounding Depth ($D$):** 0.55 m (55 cm)
- **Bounding Height ($H$):** 0.45 m (45 cm)
- **Geometric Parts:** 10 native components (Engine limit: 60)
- **Total Triangles:** 340 tris
- **Total Vertices:** 1020 vertices
- **Architectural Edges:** 96 segments
- **Measured Bounding Box:** 0.6m × 0.57m × 0.45m

---

### 3. Design Concept & Architectural Expression
Commercial-grade built-in dual boiler espresso machine featuring brushed black titanium finish, dual dispensing spouts, TFT touch display, cup warming stage, and bean hopper access.

---

### 4. Component Breakdown & Geometry Table (10 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.00, 1.00)` | `#1c1d22` | `true` | Component #1 |
| 2 | `box` | `(0.00, 0.46)` | `(0.98, 0.06)` | `(0.00, 0.98)` | `#25272e` | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.32)` | `(0.70, 0.32)` | `(0.12, 0.52)` | `#141518` | `faint` | Component #3 |
| 4 | `box` | `(0.00, 0.36)` | `(0.68, 0.28)` | `(0.10, 0.03)` | `metal` | `true` | Component #4 |
| 5 | `cyl` | `(-0.06, 0.35)` | `(0.03, 0.03)` | `(0.42, 0.14)` | `#c5a059` | `glow` | Component #5 |
| 6 | `cyl` | `(0.06, 0.35)` | `(0.03, 0.03)` | `(0.42, 0.14)` | `#c5a059` | `glow` | Component #6 |
| 7 | `cyl` | `(-0.25, 0.35)` | `(0.02, 0.02)` | `(0.22, 0.30)` | `metal` | `none` | Component #7 |
| 8 | `box` | `(0.00, 0.48)` | `(0.52, 0.02)` | `(0.72, 0.20)` | `#0ea5e9` | `glow` [glow] | Component #8 |
| 9 | `cyl (z)` | `(-0.34, 0.49)` | `(0.08, 0.08)` | `(0.76, 0.03)` | `#c5a059` | `glow` | Component #9 |
| 10 | `cyl (z)` | `(0.34, 0.49)` | `(0.08, 0.08)` | `(0.76, 0.03)` | `#c5a059` | `glow` | Component #10 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
- **Shape 2:** `rect` $(x: 0.00, z: 0.32, w: 0.70, d: 0.32) [filled]
- **Shape 3:** `circle` $(x: -0.06, z: 0.35, r: 0.04)$
- **Shape 4:** `circle` $(x: 0.06, z: 0.35, r: 0.04)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/integrated_espresso_machine.fp3dpack`
