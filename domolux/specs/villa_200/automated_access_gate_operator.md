# Domolux Specification: Domolux Estate Heavy-Duty Hydraulic Gate Operator Pylon
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Estate Heavy-Duty Hydraulic Gate Operator Pylon
- **German Name:** Domolux Hydraulischer Torantrieb-Pylon
- **Arabic Name:** محرك البوابات الهيدروليكي فائق القوة للقصور الفاخرة دومولوكس
- **Unique Item ID:** `automated_access_gate_operator`
- **Unique Pack ID:** `domolux.automated_access_gate_operator`
- **Collection:** Smart Home, Security and Residential Infrastructure
- **Category:** Entryway
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `gate_operator`, `hydraulic`, `estate`, `automation`, `security`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.45 m (45 cm)
- **Bounding Depth ($D$):** 0.35 m (35 cm)
- **Bounding Height ($H$):** 0.85 m (85 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 104 tris
- **Total Vertices:** 312 vertices
- **Architectural Edges:** 30 segments
- **Measured Bounding Box:** 0.43m × 0.33m × 0.85m

---

### 3. Design Concept & Architectural Expression
Industrial continuous-duty hydraulic operator column capable of swinging massive 1,200kg bronze gates, with battery backup, soft-close deceleration, and internal diagnostic computer.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.96, 0.94)` | `(0.00, 0.12)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.02)` | `(0.92, 0.88)` | `(0.12, 0.82)` | `#22252c` (dark) | `true` | Component #2 |
| 3 | `cyl` | `(0.00, 0.15)` | `(0.42, 0.42)` | `(0.88, 0.12)` | `#c5a059` | `glow` | Component #3 |
| 4 | `box` | `(0.15, 0.32)` | `(0.48, 0.12)` | `(0.92, 0.06)` | `metal` | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.42)` | `(0.24, 0.02)` | `(0.45, 0.22)` | `#c5a059` | `none` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.94)
- **Shape 2:** `circle` $(x: 0.00, z: 0.15, r: 0.21)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/automated_access_gate_operator.fp3dpack`
