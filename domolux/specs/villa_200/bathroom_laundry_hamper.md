# Domolux Specification: Domolux Dual-Compartment Bathroom Laundry Tower
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Dual-Compartment Bathroom Laundry Tower
- **German Name:** Domolux Doppelkammer-Wäschesammler
- **Arabic Name:** برج تخزين وفرز الغسيل للحمام بخشب الجوز دومولوكس
- **Unique Item ID:** `bathroom_laundry_hamper`
- **Unique Pack ID:** `domolux.bathroom_laundry_hamper`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `hamper`, `laundry`, `storage`, `walnut`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.45 m (45 cm)
- **Bounding Depth ($D$):** 0.45 m (45 cm)
- **Bounding Height ($H$):** 1.20 m (120 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 84 tris
- **Total Vertices:** 252 vertices
- **Architectural Edges:** 40 segments
- **Measured Bounding Box:** 0.44m × 0.43m × 1.2m

---

### 3. Design Concept & Architectural Expression
Vertical fluted walnut bathroom laundry organizer with tilt-out hamper bins, breathable slatted base vents, brushed bronze hardware, and removable canvas linen bags.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.94)` | `(0.00, 0.08)` | `#1c1d22` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.02)` | `(0.96, 0.92)` | `(0.08, 0.90)` | `wood` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.44)` | `(0.88, 0.04)` | `(0.12, 0.42)` | `#28231d` | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.44)` | `(0.88, 0.04)` | `(0.56, 0.40)` | `#28231d` | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.47)` | `(0.22, 0.03)` | `(0.50, 0.03)` | `#c5a059` | `glow` | Component #5 |
| 6 | `box` | `(0.00, 0.47)` | `(0.22, 0.03)` | `(0.92, 0.03)` | `#c5a059` | `glow` | Component #6 |
| 7 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.98, 0.02)` | `#c5a059` | `none` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.94)
- **Shape 2:** `line` $(x_1: -0.44, z_1: 0.00, x_2: 0.44, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/bathroom_laundry_hamper.fp3dpack`
