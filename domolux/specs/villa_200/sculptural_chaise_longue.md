# Domolux Specification: Domolux Sculptural Chaise Longue
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Sculptural Chaise Longue
- **German Name:** Domolux Skulpturale Liege-Chaise
- **Arabic Name:** أريكة استرخاء نحتية دومولوكس
- **Unique Item ID:** `sculptural_chaise_longue`
- **Unique Pack ID:** `domolux.sculptural_chaise_longue`
- **Collection:** Exclusive Interior Furnishings, Art and Decor
- **Category:** Living Room
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `bedroom`, `library`
- **Discovery Tags:** `chaise`, `lounger`, `sculptural`, `boucle`, `leather`, `luxury`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.85 m (85 cm)
- **Bounding Depth ($D$):** 1.85 m (185 cm)
- **Bounding Height ($H$):** 0.78 m (78 cm)
- **Geometric Parts:** 12 native components (Engine limit: 60)
- **Total Triangles:** 188 tris
- **Total Vertices:** 564 vertices
- **Architectural Edges:** 74 segments
- **Measured Bounding Box:** 0.75m × 1.82m × 0.67m

---

### 3. Design Concept & Architectural Expression
Asymmetrical sculptural relaxation chaise sculpted with continuous ergonomic contours in ivory bouclé, saddle leather headrest bolster, and polished bronze floating ribbon frame.

---

### 4. Component Breakdown & Geometry Table (12 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.38, 0.00)` | `(0.05, 0.88)` | `(0.00, 0.04)` | `#c5a059` | `glow` | Component #1 |
| 2 | `box` | `(0.38, 0.00)` | `(0.05, 0.88)` | `(0.00, 0.04)` | `#c5a059` | `glow` | Component #2 |
| 3 | `box` | `(0.00, -0.42)` | `(0.80, 0.05)` | `(0.00, 0.04)` | `#c5a059` | `glow` | Component #3 |
| 4 | `box` | `(0.00, 0.42)` | `(0.80, 0.05)` | `(0.00, 0.04)` | `#c5a059` | `glow` | Component #4 |
| 5 | `box` | `(-0.38, -0.15)` | `(0.05, 0.20)` | `(0.04, 0.32)` | `#c5a059` | `glow` | Component #5 |
| 6 | `box` | `(0.38, -0.15)` | `(0.05, 0.20)` | `(0.04, 0.32)` | `#c5a059` | `glow` | Component #6 |
| 7 | `loft` | `(0.00, 0.30)` | `(0.85, 0.35)` | `(0.32, 0.16)` | `cushion` (fabric) | `true` | Component #7 |
| 8 | `loft` | `(0.00, 0.00)` | `(0.88, 0.35)` | `(0.28, 0.18)` | `cushion` (fabric) | `true` | Component #8 |
| 9 | `loft` | `(0.00, -0.32)` | `(0.85, 0.35)` | `(0.36, 0.48)` | `cushion` (fabric) | `true` | Component #9 |
| 10 | `cyl (x)` | `(0.00, -0.36)` | `(0.16, 0.70)` | `(0.70, 0.16)` | `#824c28` (fabric) | `true` | Component #10 |
| 11 | `box` | `(-0.25, -0.36)` | `(0.03, 0.18)` | `(0.65, 0.18)` | `#4d2c16` | `none` | Component #11 |
| 12 | `box` | `(0.25, -0.36)` | `(0.03, 0.18)` | `(0.65, 0.18)` | `#4d2c16` | `none` | Component #12 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.85, d: 1.00)
- **Shape 2:** `circle` $(x: 0.00, z: -0.36, r: 0.15)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/sculptural_chaise_longue.fp3dpack`
