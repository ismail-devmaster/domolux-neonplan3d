# Domolux Specification: Domolux Motorized Architectural In-Ground Pool Safety Cover
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Motorized Architectural In-Ground Pool Safety Cover
- **German Name:** Domolux Unterflur-Sicherheits-Poolabdeckung
- **Arabic Name:** غطاء حوض السباحة المعماري الآلي المنزلق في الأرضية دومولوكس
- **Unique Item ID:** `retractable_pool_cover`
- **Unique Pack ID:** `domolux.retractable_pool_cover`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `pool_cover`, `retractable`, `safety`, `pool`, `motorized`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 4.20 m (420 cm)
- **Bounding Depth ($D$):** 0.80 m (80 cm)
- **Bounding Height ($H$):** 0.95 m (95 cm)
- **Geometric Parts:** 4 native components (Engine limit: 60)
- **Total Triangles:** 136 tris
- **Total Vertices:** 408 vertices
- **Architectural Edges:** 30 segments
- **Measured Bounding Box:** 4.12m × 0.77m × 1.11m

---

### 3. Design Concept & Architectural Expression
Concealed in-ground automated swimming pool cover housing rigid polycarbonate solar heating slats, heavy stainless winding tube, and flush titanium terrace hatch.

---

### 4. Component Breakdown & Geometry Table (4 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.00, 0.92)` | `#141518` | `true` | Component #1 |
| 2 | `cyl (x)` | `(0.00, -0.05)` | `(0.45, 0.45)` | `(0.25, 0.92)` | `metal` | `true` | Component #2 |
| 3 | `cyl (x)` | `(0.00, -0.05)` | `(0.65, 0.65)` | `(0.20, 0.88)` | `#1e3a47` | `none` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.94, 0.06)` | `#495057` | `true` | Component #4 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `circle` $(x: 0.00, z: -0.05, r: 0.25)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/retractable_pool_cover.fp3dpack`
