# Domolux Specification: Domolux Recessed Backlit Stone Shower Niche
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Recessed Backlit Stone Shower Niche
- **German Name:** Domolux Beleuchtete Dusch-Wandnische
- **Arabic Name:** نيش جداري مدمج لشاور الاستحمام مع إضاءة محيطية دومولوكس
- **Unique Item ID:** `architectural_shower_niche`
- **Unique Pack ID:** `domolux.architectural_shower_niche`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 1.1m)
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `shower_niche`, `storage`, `lighting`, `marble`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.40 m (40 cm)
- **Bounding Depth ($D$):** 0.15 m (15 cm)
- **Bounding Height ($H$):** 0.70 m (70 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 96 tris
- **Total Vertices:** 288 vertices
- **Architectural Edges:** 24 segments
- **Measured Bounding Box:** 0.39m × 0.12m × 0.67m

---

### 3. Design Concept & Architectural Expression
Waterproof recessed shower storage module featuring a mitered Fior di Bosco marble reveal, tempered glass floating tier, and IP68 concealed LED backlight channel.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.44)` | `(0.98, 0.08)` | `(0.02, 0.96)` | `#363a42` | `true` | Component #1 |
| 2 | `box` | `(0.00, -0.30)` | `(0.84, 0.04)` | `(0.06, 0.88)` | `#545a66` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.04)` | `(0.84, 0.72)` | `(0.06, 0.04)` | `#3e424c` | `none` | Component #3 |
| 4 | `box` | `(0.00, 0.04)` | `(0.84, 0.72)` | `(0.90, 0.04)` | `#3e424c` | `none` | Component #4 |
| 5 | `box` | `(-0.40, 0.04)` | `(0.04, 0.72)` | `(0.10, 0.80)` | `#3e424c` | `none` | Component #5 |
| 6 | `box` | `(0.40, 0.04)` | `(0.04, 0.72)` | `(0.10, 0.80)` | `#3e424c` | `none` | Component #6 |
| 7 | `box` | `(0.00, -0.26)` | `(0.82, 0.02)` | `(0.88, 0.02)` | `#fff3cc` | `none` [glow] | Component #7 |
| 8 | `box` | `(0.00, 0.04)` | `(0.82, 0.68)` | `(0.48, 0.02)` | `#3a3429` (glass) | `true` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.04, w: 0.84, d: 0.76)
- **Shape 2:** `line` $(x_1: -0.40, z_1: 0.04, x_2: 0.40, z_2: 0.04)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/architectural_shower_niche.fp3dpack`
