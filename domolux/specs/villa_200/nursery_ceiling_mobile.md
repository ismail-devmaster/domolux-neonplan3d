# Domolux Specification: Domolux Celestial Brass and Timber Kinetic Ceiling Mobile
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Celestial Brass and Timber Kinetic Ceiling Mobile
- **German Name:** Domolux Kinetisches Hänge-Mobile aus Messing & Holz
- **Arabic Name:** مجسم سقف معلق متحرك من النحاس وخشب الجوز لغرف المواليد دومولوكس
- **Unique Item ID:** `nursery_ceiling_mobile`
- **Unique Pack ID:** `domolux.nursery_ceiling_mobile`
- **Collection:** Master Suites, Guest Hospitality and Nursery
- **Category:** Lighting
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `ceiling`
- **Placement Surface:** `false`
- **Target Environments:** `bedroom`
- **Discovery Tags:** `mobile`, `kinetic`, `nursery`, `decor`, `ceiling`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.70 m (70 cm)
- **Bounding Depth ($D$):** 0.70 m (70 cm)
- **Bounding Height ($H$):** 0.80 m (80 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 292 tris
- **Total Vertices:** 876 vertices
- **Architectural Edges:** 22 segments
- **Measured Bounding Box:** 0.58m × 0.3m × 0.92m

---

### 3. Design Concept & Architectural Expression
Suspended kinetic Calder-inspired celestial mobile with hand-balanced counterweight wire arms, solid turned walnut orbs, and satin brass lunar crescents.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(0.00, 0.00)` | `(0.18, 0.18)` | `(0.94, 0.06)` | `#c5a059` | `none` | Component #1 |
| 2 | `cyl` | `(0.00, 0.00)` | `(0.02, 0.02)` | `(0.55, 0.40)` | `metal` | `none` | Component #2 |
| 3 | `cyl (x)` | `(0.05, 0.00)` | `(0.02, 0.02)` | `(0.55, 0.75)` | `#c5a059` | `glow` | Component #3 |
| 4 | `cyl (z)` | `(-0.28, 0.08)` | `(0.01, 0.01)` | `(0.32, 0.45)` | `#c5a059` | `none` | Component #4 |
| 5 | `cyl` | `(0.38, -0.05)` | `(0.18, 0.18)` | `(0.44, 0.18)` | `#3a281a` (wood) | `none` | Component #5 |
| 6 | `box` | `(-0.28, 0.28)` | `(0.16, 0.02)` | `(0.15, 0.20)` | `#d4af37` | `glow` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `circle` $(x: 0.00, z: 0.00, r: 0.35)$
- **Shape 2:** `line` $(x_1: -0.35, z_1: 0.00, x_2: 0.35, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/nursery_ceiling_mobile.fp3dpack`
