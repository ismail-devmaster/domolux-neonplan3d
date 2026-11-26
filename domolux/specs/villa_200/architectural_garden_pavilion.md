# Domolux Specification: Domolux Modernist Cantilevered Garden Pavilion
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Modernist Cantilevered Garden Pavilion
- **German Name:** Domolux Moderner Gartenpavillon mit Kragdach
- **Arabic Name:** جناح الحديقة المعماري الحديث بسقف ناتئ دومولوكس
- **Unique Item ID:** `architectural_garden_pavilion`
- **Unique Pack ID:** `domolux.architectural_garden_pavilion`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `pavilion`, `garden`, `architecture`, `patio`, `outdoor`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 4.50 m (450 cm)
- **Bounding Depth ($D$):** 3.50 m (350 cm)
- **Bounding Height ($H$):** 2.90 m (290 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 72 tris
- **Total Vertices:** 216 vertices
- **Architectural Edges:** 28 segments
- **Measured Bounding Box:** 4.41m × 3.6m × 2.9m

---

### 3. Design Concept & Architectural Expression
Standalone architectural garden pavilion with cantilevered charred-timber canopy, honed Roman travertine floor slab, bronze glass rear windbreak, and recessed ceiling spots.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.00, 0.08)` | `#d8c7b5` (white) | `true` | Component #1 |
| 2 | `box` | `(0.00, -0.45)` | `(0.94, 0.08)` | `(0.08, 0.86)` | `#1b1816` (wood) | `true` | Component #2 |
| 3 | `box` | `(-0.44, 0.38)` | `(0.08, 0.08)` | `(0.08, 0.86)` | `#22252c` (dark) | `true` | Component #3 |
| 4 | `loft` | `(0.00, 0.02)` | `(0.98, 0.96)` | `(0.92, 0.08)` | `#2b221d` (dark) | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.02)` | `(0.92, 0.90)` | `(0.91, 0.02)` | `#8a5d3b` (wood) | `none` | Component #5 |
| 6 | `box` | `(0.45, -0.15)` | `(0.02, 0.55)` | `(0.08, 0.84)` | `#3a2f26` (glass) | `none` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.98)
- **Shape 2:** `rect` $(x: 0.00, z: -0.45, w: 0.94, d: 0.08)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/architectural_garden_pavilion.fp3dpack`
