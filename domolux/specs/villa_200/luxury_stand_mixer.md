# Domolux Specification: Domolux Luxury Stand Mixer
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Luxury Stand Mixer
- **German Name:** Domolux Luxus-Küchenmaschine
- **Arabic Name:** عجانة كهربائية فاخرة دومولوكس
- **Unique Item ID:** `luxury_stand_mixer`
- **Unique Pack ID:** `domolux.luxury_stand_mixer`
- **Collection:** Gourmet Kitchens and Specialty Culinary Equipment
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `surface`
- **Placement Surface:** `false`
- **Target Environments:** `kitchen`
- **Discovery Tags:** `mixer`, `baking`, `culinary`, `appliance`, `countertop`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.38 m (38 cm)
- **Bounding Depth ($D$):** 0.42 m (42 cm)
- **Bounding Height ($H$):** 0.45 m (45 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 104 tris
- **Total Vertices:** 312 vertices
- **Architectural Edges:** 34 segments
- **Measured Bounding Box:** 0.31m × 0.4m × 0.42m

---

### 3. Design Concept & Architectural Expression
Countertop die-cast aluminum stand mixer finished in dark anthracite enamel with mirror-polished stainless steel bowl, planetary gearing head, and brass speed lever.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.82, 0.88)` | `(0.00, 0.10)` | `#1c1d22` | `true` | Component #1 |
| 2 | `loft` | `(0.00, 0.18)` | `(0.52, 0.52)` | `(0.10, 0.48)` | `metal` | `true` | Component #2 |
| 3 | `loft` | `(0.00, -0.22)` | `(0.45, 0.40)` | `(0.10, 0.45)` | `#25272e` (dark) | `true` | Component #3 |
| 4 | `loft` | `(0.00, 0.00)` | `(0.38, 0.80)` | `(0.55, 0.38)` | `#25272e` (dark) | `true` | Component #4 |
| 5 | `cyl (x)` | `(0.20, -0.15)` | `(0.05, 0.05)` | `(0.68, 0.04)` | `#c5a059` | `glow` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.82, d: 0.88)
- **Shape 2:** `circle` $(x: 0.00, z: 0.18, r: 0.32)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/luxury_stand_mixer.fp3dpack`
