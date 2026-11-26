# Domolux Specification: Domolux Bespoke Luxury Bar Cabinet
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Bespoke Luxury Bar Cabinet
- **German Name:** Domolux Maßgefertigte Luxus-Barschrankwand
- **Arabic Name:** خزانة بار فاخرة متكاملة دومولوكس
- **Unique Item ID:** `bespoke_luxury_bar_cabinet`
- **Unique Pack ID:** `domolux.bespoke_luxury_bar_cabinet`
- **Collection:** Exclusive Interior Furnishings, Art and Decor
- **Category:** Living Room
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `true`
- **Target Environments:** `living`, `dining`
- **Discovery Tags:** `bar`, `cabinet`, `cocktail`, `marble`, `mirrored`, `luxury`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.80 m (180 cm)
- **Bounding Depth ($D$):** 0.65 m (65 cm)
- **Bounding Height ($H$):** 1.95 m (195 cm)
- **Geometric Parts:** 10 native components (Engine limit: 60)
- **Total Triangles:** 120 tris
- **Total Vertices:** 360 vertices
- **Architectural Edges:** 80 segments
- **Measured Bounding Box:** 1.76m × 0.63m × 1.89m

---

### 3. Design Concept & Architectural Expression
Monumental hospitality bar credenza with folding pocket doors, antiqued mirrored back wall, polished brass stemware racks, Calacatta marble mixing station, and wine bottle storage drawers.

---

### 4. Component Breakdown & Geometry Table (10 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.90)` | `(0.00, 0.05)` | `#16171b` | `faint` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.98, 0.94)` | `(0.05, 0.92)` | `#3a2d23` (wood) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.02)` | `(0.90, 0.80)` | `(0.44, 0.05)` | `#e8e5dc` (body) | `true` | Component #3 |
| 4 | `box` | `(0.00, -0.38)` | `(0.90, 0.02)` | `(0.50, 0.44)` | `#a5b4c4` | `faint` [glow] | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.86, 0.65)` | `(0.90, 0.02)` | `#c5a059` | `glow` | Component #5 |
| 6 | `box` | `(0.00, -0.10)` | `(0.88, 0.45)` | `(0.70, 0.01)` | `glass` | `true` | Component #6 |
| 7 | `box` | `(-0.23, 0.44)` | `(0.43, 0.04)` | `(0.08, 0.34)` | `#2d231b` (wood) | `true` | Component #7 |
| 8 | `box` | `(0.23, 0.44)` | `(0.43, 0.04)` | `(0.08, 0.34)` | `#2d231b` (wood) | `true` | Component #8 |
| 9 | `box` | `(-0.04, 0.48)` | `(0.02, 0.04)` | `(0.16, 0.18)` | `#c5a059` | `glow` | Component #9 |
| 10 | `box` | `(0.04, 0.48)` | `(0.02, 0.04)` | `(0.16, 0.18)` | `#c5a059` | `glow` | Component #10 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.94)
- **Shape 2:** `line` $(x_1: 0.00, z_1: -0.45, x_2: 0.00, z_2: 0.45)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/bespoke_luxury_bar_cabinet.fp3dpack`
