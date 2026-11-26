# Domolux Specification: Domolux Freestanding Sculptural Foot Hydromassage Basin
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Freestanding Sculptural Foot Hydromassage Basin
- **German Name:** Domolux Freistehendes Fuß-Whirlpoolbecken
- **Arabic Name:** حوض المساج المائي للأقدام بتصميم دائري فاخر دومولوكس
- **Unique Item ID:** `luxury_foot_spa`
- **Unique Pack ID:** `domolux.luxury_foot_spa`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `foot_spa`, `hydromassage`, `wellness`, `relaxation`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.60 m (60 cm)
- **Bounding Depth ($D$):** 0.65 m (65 cm)
- **Bounding Height ($H$):** 0.45 m (45 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 236 tris
- **Total Vertices:** 708 vertices
- **Architectural Edges:** 28 segments
- **Measured Bounding Box:** 0.56m × 0.55m × 0.51m

---

### 3. Design Concept & Architectural Expression
Compact freestanding hydrotherapy foot basin crafted from composite stone with thermo-circulating whirlpool bubblers, brass deck filler, and underwater chromotherapy lighting.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(0.00, 0.00)` | `(0.82, 0.82)` | `(0.00, 0.08)` | `#1a1c20` | `none` | Component #1 |
| 2 | `cyl` | `(0.00, 0.00)` | `(0.94, 0.94)` | `(0.08, 0.88)` | `#2c2f36` (dark) | `true` | Component #2 |
| 3 | `cyl` | `(0.00, 0.04)` | `(0.74, 0.74)` | `(0.20, 0.76)` | `#00b4d8` | `none` [glow] | Component #3 |
| 4 | `box` | `(0.00, 0.04)` | `(0.45, 0.38)` | `(0.21, 0.03)` | `#141518` | `none` | Component #4 |
| 5 | `cyl` | `(0.00, -0.38)` | `(0.06, 0.06)` | `(0.92, 0.22)` | `#c5a059` | `glow` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `circle` $(x: 0.00, z: 0.00, r: 0.46)$
- **Shape 2:** `circle` $(x: 0.00, z: 0.04, r: 0.35)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/luxury_foot_spa.fp3dpack`
