# Domolux Specification: Domolux Fluted Travertine Aromatherapy Pedestal
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Fluted Travertine Aromatherapy Pedestal
- **German Name:** Domolux Flötierte Aroma-Diffusor-Säule
- **Arabic Name:** عمود المباخر والعطور الفاخرة من حجر الترافرتين دومولوكس
- **Unique Item ID:** `bathroom_aroma_pedestal`
- **Unique Pack ID:** `domolux.bathroom_aroma_pedestal`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `aromatherapy`, `diffuser`, `pedestal`, `travertine`, `spa`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.32 m (32 cm)
- **Bounding Depth ($D$):** 0.32 m (32 cm)
- **Bounding Height ($H$):** 0.95 m (95 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 192 tris
- **Total Vertices:** 576 vertices
- **Architectural Edges:** 32 segments
- **Measured Bounding Box:** 0.29m × 0.29m × 1.03m

---

### 3. Design Concept & Architectural Expression
Monolithic fluted Roman travertine pedestal with integrated ultrasonic cold-mist essential oil nebulizer, brushed bronze vapor bowl, and warm ambient floor wash.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.92, 0.92)` | `(0.00, 0.06)` | `#1f1d19` | `none` | Component #1 |
| 2 | `loft` | `(0.00, 0.00)` | `(0.84, 0.84)` | `(0.06, 0.78)` | `#d8c7b5` (wood) | `true` | Component #2 |
| 3 | `cyl` | `(0.00, 0.00)` | `(0.82, 0.82)` | `(0.84, 0.04)` | `#c5a059` | `glow` | Component #3 |
| 4 | `cyl` | `(0.00, 0.00)` | `(0.72, 0.72)` | `(0.88, 0.08)` | `#2a221b` | `true` | Component #4 |
| 5 | `cyl` | `(0.00, 0.00)` | `(0.22, 0.22)` | `(0.96, 0.12)` | `#e8f4f8` | `none` [glow] | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `circle` $(x: 0.00, z: 0.00, r: 0.42)$
- **Shape 2:** `circle` $(x: 0.00, z: 0.00, r: 0.24)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/bathroom_aroma_pedestal.fp3dpack`
