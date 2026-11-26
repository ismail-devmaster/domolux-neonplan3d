# Domolux Specification: Domolux Motorized Architectural Ceiling Laundry Airer
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Motorized Architectural Ceiling Laundry Airer
- **German Name:** Domolux Motorisierter Decken-Wäscheständer
- **Arabic Name:** منشر الغسيل المعماري السقفي الآلي القابل للنزول دومولوكس
- **Unique Item ID:** `retractable_ceiling_drying_system`
- **Unique Pack ID:** `domolux.retractable_ceiling_drying_system`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `ceiling`
- **Placement Surface:** `false`
- **Target Environments:** `storage`
- **Discovery Tags:** `ceiling_airer`, `drying_rack`, `laundry`, `motorized`, `ceiling`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.50 m (150 cm)
- **Bounding Depth ($D$):** 0.60 m (60 cm)
- **Bounding Height ($H$):** 0.35 m (35 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 272 tris
- **Total Vertices:** 816 vertices
- **Architectural Edges:** 64 segments
- **Measured Bounding Box:** 1.44m × 0.56m × 0.32m

---

### 3. Design Concept & Architectural Expression
Ceiling-recessed motorized clothes drying rack featuring twin scissor lifts, 15m of anodized aluminum drying rods, warm air blowers, and LED downlight panel.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.96, 0.94)` | `(0.85, 0.15)` | `#22252c` (dark) | `true` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.55, 0.45)` | `(0.84, 0.02)` | `#fff3cc` | `none` [glow] | Component #2 |
| 3 | `box` | `(-0.38, 0.00)` | `(0.04, 0.65)` | `(0.25, 0.60)` | `metal` | `none` | Component #3 |
| 4 | `box` | `(0.38, 0.00)` | `(0.04, 0.65)` | `(0.25, 0.60)` | `metal` | `none` | Component #4 |
| 5 | `cyl (x)` | `(0.00, -0.25)` | `(0.03, 0.03)` | `(0.20, 0.92)` | `#c5a059` | `glow` | Component #5 |
| 6 | `cyl (x)` | `(0.00, -0.08)` | `(0.03, 0.03)` | `(0.20, 0.92)` | `#c5a059` | `glow` | Component #6 |
| 7 | `cyl (x)` | `(0.00, 0.08)` | `(0.03, 0.03)` | `(0.20, 0.92)` | `#c5a059` | `glow` | Component #7 |
| 8 | `cyl (x)` | `(0.00, 0.25)` | `(0.03, 0.03)` | `(0.20, 0.92)` | `#c5a059` | `glow` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.94)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.55, d: 0.45)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/retractable_ceiling_drying_system.fp3dpack`
