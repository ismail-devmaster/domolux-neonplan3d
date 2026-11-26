# Domolux Specification: Domolux Climate-Controlled Wine Cabinet
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Climate-Controlled Wine Cabinet
- **German Name:** Domolux Dreizonen-Weinklimaschrank
- **Arabic Name:** خزانة تبريد نبيذ متعددة المناخات دومولوكس
- **Unique Item ID:** `climate_controlled_wine_cabinet`
- **Unique Pack ID:** `domolux.climate_controlled_wine_cabinet`
- **Collection:** Gourmet Kitchens and Specialty Culinary Equipment
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `kitchen`, `dining`
- **Discovery Tags:** `wine`, `cooler`, `refrigerator`, `sommelier`, `appliance`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.65 m (65 cm)
- **Bounding Depth ($D$):** 0.72 m (72 cm)
- **Bounding Height ($H$):** 2.15 m (215 cm)
- **Geometric Parts:** 13 native components (Engine limit: 60)
- **Total Triangles:** 200 tris
- **Total Vertices:** 600 vertices
- **Architectural Edges:** 54 segments
- **Measured Bounding Box:** 0.64m × 0.72m × 2.11m

---

### 3. Design Concept & Architectural Expression
Triple-temperature-zone preservation wine column with capacity for 120 bottles, low-vibration inverter compressor, natural beech glide shelves, and UV-absorbing smoked glass door.

---

### 4. Component Breakdown & Geometry Table (13 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.95)` | `(0.00, 0.05)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.05, 0.93)` | `#1e2229` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.05)` | `(0.84, 0.80)` | `(0.15, 0.02)` | `#a88158` (wood) | `none` | Component #3 |
| 4 | `box` | `(0.00, 0.05)` | `(0.84, 0.80)` | `(0.28, 0.02)` | `#a88158` (wood) | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.05)` | `(0.84, 0.80)` | `(0.42, 0.02)` | `#a88158` (wood) | `none` | Component #5 |
| 6 | `box` | `(0.00, 0.05)` | `(0.84, 0.80)` | `(0.56, 0.02)` | `#a88158` (wood) | `none` | Component #6 |
| 7 | `box` | `(0.00, 0.05)` | `(0.84, 0.80)` | `(0.70, 0.02)` | `#a88158` (wood) | `none` | Component #7 |
| 8 | `box` | `(0.00, 0.05)` | `(0.84, 0.80)` | `(0.84, 0.02)` | `#a88158` (wood) | `none` | Component #8 |
| 9 | `box` | `(-0.42, 0.25)` | `(0.02, 0.02)` | `(0.08, 0.88)` | `#ffe0b2` | `glow` [glow] | Component #9 |
| 10 | `box` | `(0.42, 0.25)` | `(0.02, 0.02)` | `(0.08, 0.88)` | `#ffe0b2` | `glow` [glow] | Component #10 |
| 11 | `box` | `(0.00, 0.48)` | `(0.96, 0.04)` | `(0.06, 0.92)` | `glass` | `true` | Component #11 |
| 12 | `box` | `(-0.46, 0.48)` | `(0.04, 0.05)` | `(0.06, 0.92)` | `#c5a059` | `glow` | Component #12 |
| 13 | `cyl` | `(0.42, 0.48)` | `(0.03, 0.03)` | `(0.20, 0.60)` | `#c5a059` | `glow` | Component #13 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.98)
- **Shape 2:** `line` $(x_1: -0.45, z_1: 0.48, x_2: 0.45, z_2: 0.48)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/climate_controlled_wine_cabinet.fp3dpack`
