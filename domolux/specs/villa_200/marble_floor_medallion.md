# Domolux Specification: Domolux Marble Floor Medallion
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Marble Floor Medallion
- **German Name:** Domolux Marmor-Bodenmedaillon
- **Arabic Name:** ميدالية أرضية رخامية دومولوكس
- **Unique Item ID:** `marble_floor_medallion`
- **Unique Pack ID:** `domolux.marble_floor_medallion`
- **Collection:** Architectural Interior Systems
- **Category:** Architectural Elements
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `true`
- **Target Environments:** `hall`, `living`, `dining`
- **Discovery Tags:** `marble`, `medallion`, `inlay`, `floor`, `palatial`, `luxury`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.20 m (220 cm)
- **Bounding Depth ($D$):** 2.20 m (220 cm)
- **Bounding Height ($H$):** 0.03 m (3 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 260 tris
- **Total Vertices:** 780 vertices
- **Architectural Edges:** 80 segments
- **Measured Bounding Box:** 2.2m × 2.2m × 0.03m

---

### 3. Design Concept & Architectural Expression
Palatial waterjet-cut circular marble floor centerpiece featuring concentric rings of Nero Marquina, Calacatta Gold, and polished bronze starburst inlay.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.00, 0.30)` | `#1c1917` | `faint` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.30, 0.70)` | `#e2ded9` (body) | `true` | Component #2 |
| 3 | `cyl` | `(0.00, 0.00)` | `(0.92, 0.92)` | `(0.35, 0.65)` | `#1a1b20` (dark) | `true` | Component #3 |
| 4 | `cyl` | `(0.00, 0.00)` | `(0.75, 0.75)` | `(0.40, 0.60)` | `#f0ece1` (body) | `true` | Component #4 |
| 5 | `cyl` | `(0.00, 0.00)` | `(0.52, 0.52)` | `(0.45, 0.55)` | `#c5a059` | `glow` | Component #5 |
| 6 | `cyl` | `(0.00, 0.00)` | `(0.48, 0.48)` | `(0.48, 0.52)` | `#24252c` (dark) | `true` | Component #6 |
| 7 | `box` | `(0.00, 0.00)` | `(0.25, 0.25)` | `(0.55, 0.45)` | `#c5a059` | `glow` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
- **Shape 2:** `circle` $(x: 0.00, z: 0.00, r: 0.46)$
- **Shape 3:** `circle` $(x: 0.00, z: 0.00, r: 0.37)$
- **Shape 4:** `circle` $(x: 0.00, z: 0.00, r: 0.25)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/marble_floor_medallion.fp3dpack`
