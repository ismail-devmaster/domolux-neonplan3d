# Domolux Specification: Domolux Titanium Hydrotherapy Cold-Plunge Bath
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Titanium Hydrotherapy Cold-Plunge Bath
- **German Name:** Domolux Eisbad & Kaltwasser-Tauchbecken
- **Arabic Name:** حوض الغمر بالماء البارد والجليد الصحي دومولوكس
- **Unique Item ID:** `luxury_cold_plunge`
- **Unique Pack ID:** `domolux.luxury_cold_plunge`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `cold_plunge`, `ice_bath`, `recovery`, `spa`, `wellness`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.80 m (180 cm)
- **Bounding Depth ($D$):** 1.00 m (100 cm)
- **Bounding Height ($H$):** 0.90 m (90 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 84 tris
- **Total Vertices:** 252 vertices
- **Architectural Edges:** 40 segments
- **Measured Bounding Box:** 1.84m × 1.01m × 0.9m

---

### 3. Design Concept & Architectural Expression
Architectural cryogenic recovery plunge bath with thermal insulated marine-grade oak exterior cladding, electropolished 316-titanium tank, ozone sanitation, and teak step.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.96, 0.94)` | `(0.00, 0.08)` | `#151619` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.08, 0.84)` | `#3d2b1f` (wood) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.90, 0.88)` | `(0.92, 0.08)` | `metal` | `glow` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.80, 0.76)` | `(0.12, 0.80)` | `#0d3b66` | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.78, 0.74)` | `(0.82, 0.02)` | `#00b4d8` (glass) | `none` [glow] | Component #5 |
| 6 | `box` | `(-0.42, 0.44)` | `(0.22, 0.18)` | `(0.00, 0.22)` | `#543d2b` | `true` | Component #6 |
| 7 | `box` | `(-0.42, 0.44)` | `(0.18, 0.14)` | `(0.22, 0.22)` | `#6a4e37` | `true` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.80, d: 0.76)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/luxury_cold_plunge.fp3dpack`
