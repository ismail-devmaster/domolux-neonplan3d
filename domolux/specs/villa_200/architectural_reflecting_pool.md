# Domolux Specification: Domolux Basalt Mirror Architectural Reflecting Water Basin
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Basalt Mirror Architectural Reflecting Water Basin
- **German Name:** Domolux Architektonisches Spiegel-Wasserbecken
- **Arabic Name:** حوض المياه المعماري العاكس بحجر البازلت الأسود دومولوكس
- **Unique Item ID:** `architectural_reflecting_pool`
- **Unique Pack ID:** `domolux.architectural_reflecting_pool`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `reflecting_pool`, `water_feature`, `fountain`, `mirror_pool`, `landscape`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 3.80 m (380 cm)
- **Bounding Depth ($D$):** 2.20 m (220 cm)
- **Bounding Height ($H$):** 0.40 m (40 cm)
- **Geometric Parts:** 4 native components (Engine limit: 60)
- **Total Triangles:** 48 tris
- **Total Vertices:** 144 vertices
- **Architectural Edges:** 8 segments
- **Measured Bounding Box:** 3.72m × 2.16m × 0.37m

---

### 3. Design Concept & Architectural Expression
Perimeter slot-overflow reflecting pool basin lined with honed Nero Zimbabwe granite, glass-still surface mirror plane, and submerged underwater LED glow reveal.

---

### 4. Component Breakdown & Geometry Table (4 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.00, 0.12)` | `#141518` | `true` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.86, 0.86)` | `(0.04, 0.88)` | `#0c0d10` | `none` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.84, 0.84)` | `(0.84, 0.02)` | `#00b4d8` (glass) | `none` [glow] | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.85, 0.85)` | `(0.82, 0.02)` | `#fff3cc` | `none` [glow] | Component #4 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.98)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.86, d: 0.86)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/architectural_reflecting_pool.fp3dpack`
