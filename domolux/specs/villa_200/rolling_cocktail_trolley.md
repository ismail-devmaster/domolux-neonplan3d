# Domolux Specification: Domolux Rolling Cocktail Trolley
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Rolling Cocktail Trolley
- **German Name:** Domolux Rollbarer Cocktail-Servierwagen
- **Arabic Name:** عربة كوكتيل فاخرة متحركة دومولوكس
- **Unique Item ID:** `rolling_cocktail_trolley`
- **Unique Pack ID:** `domolux.rolling_cocktail_trolley`
- **Collection:** Exclusive Interior Furnishings, Art and Decor
- **Category:** Living Room
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `true`
- **Target Environments:** `living`, `dining`, `patio`
- **Discovery Tags:** `cocktail`, `bar`, `trolley`, `cart`, `drinks`, `hospitality`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.95 m (95 cm)
- **Bounding Depth ($D$):** 0.55 m (55 cm)
- **Bounding Height ($H$):** 0.85 m (85 cm)
- **Geometric Parts:** 11 native components (Engine limit: 60)
- **Total Triangles:** 352 tris
- **Total Vertices:** 1056 vertices
- **Architectural Edges:** 104 segments
- **Measured Bounding Box:** 0.85m × 0.48m × 1.11m

---

### 3. Design Concept & Architectural Expression
Two-tier mobile hospitality bar cart constructed with satin brass tubular chassis, fluted glass tier shelves, leather-wrapped push handle, and brass-rimmed rubber spoke wheels.

---

### 4. Component Breakdown & Geometry Table (11 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl (z)` | `(-0.38, -0.28)` | `(0.18, 0.04)` | `(0.00, 0.18)` | `#c5a059` | `glow` | Component #1 |
| 2 | `cyl (z)` | `(0.38, -0.28)` | `(0.18, 0.04)` | `(0.00, 0.18)` | `#c5a059` | `glow` | Component #2 |
| 3 | `cyl (z)` | `(-0.38, 0.28)` | `(0.18, 0.04)` | `(0.00, 0.18)` | `#c5a059` | `glow` | Component #3 |
| 4 | `cyl (z)` | `(0.38, 0.28)` | `(0.18, 0.04)` | `(0.00, 0.18)` | `#c5a059` | `glow` | Component #4 |
| 5 | `box` | `(-0.38, 0.00)` | `(0.03, 0.65)` | `(0.18, 0.75)` | `#c5a059` | `glow` | Component #5 |
| 6 | `box` | `(0.38, 0.00)` | `(0.03, 0.65)` | `(0.18, 0.75)` | `#c5a059` | `glow` | Component #6 |
| 7 | `box` | `(0.00, 0.00)` | `(0.82, 0.85)` | `(0.25, 0.02)` | `glass` | `true` | Component #7 |
| 8 | `box` | `(0.00, 0.00)` | `(0.84, 0.87)` | `(0.27, 0.06)` | `#c5a059` | `glow` | Component #8 |
| 9 | `box` | `(0.00, 0.00)` | `(0.82, 0.85)` | `(0.82, 0.02)` | `glass` | `true` | Component #9 |
| 10 | `box` | `(0.00, 0.00)` | `(0.84, 0.87)` | `(0.84, 0.05)` | `#c5a059` | `glow` | Component #10 |
| 11 | `cyl (z)` | `(0.46, 0.00)` | `(0.04, 0.04)` | `(0.86, 0.45)` | `#8a5229` (fabric) | `none` | Component #11 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.84, d: 0.87)
- **Shape 2:** `circle` $(x: -0.38, z: -0.28, r: 0.08)$
- **Shape 3:** `circle` $(x: 0.38, z: -0.28, r: 0.08)$
- **Shape 4:** `circle` $(x: -0.38, z: 0.28, r: 0.08)$
- **Shape 5:** `circle` $(x: 0.38, z: 0.28, r: 0.08)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/rolling_cocktail_trolley.fp3dpack`
