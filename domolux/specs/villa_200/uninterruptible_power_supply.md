# Domolux Specification: Domolux Industrial Lithium Double-Conversion Online UPS
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Industrial Lithium Double-Conversion Online UPS
- **German Name:** Domolux Industrielle Online-USV-Stromversorgung
- **Arabic Name:** نظام إمداد الطاقة غير المنقطعة وحماية الأحمال الحساسة دومولوكس
- **Unique Item ID:** `uninterruptible_power_supply`
- **Unique Pack ID:** `domolux.uninterruptible_power_supply`
- **Collection:** Smart Home, Security and Residential Infrastructure
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `storage`, `office`
- **Discovery Tags:** `ups`, `power`, `backup`, `battery`, `datacenter`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.55 m (55 cm)
- **Bounding Depth ($D$):** 0.75 m (75 cm)
- **Bounding Height ($H$):** 1.25 m (125 cm)
- **Geometric Parts:** 4 native components (Engine limit: 60)
- **Total Triangles:** 48 tris
- **Total Vertices:** 144 vertices
- **Architectural Edges:** 24 segments
- **Measured Bounding Box:** 0.53m × 0.71m × 1.23m

---

### 3. Design Concept & Architectural Expression
True online double-conversion 20kVA UPS unit with zero transfer time, lithium iron phosphate battery drawers, SNMP network monitoring, and acoustic dampening.

---

### 4. Component Breakdown & Geometry Table (4 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.94)` | `(0.00, 0.08)` | `#111215` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.02)` | `(0.96, 0.92)` | `(0.08, 0.90)` | `#22252c` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.44)` | `(0.84, 0.04)` | `(0.12, 0.55)` | `#16171b` | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.44)` | `(0.60, 0.04)` | `(0.75, 0.16)` | `#00e676` | `true` [glow] | Component #4 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.94)
- **Shape 2:** `line` $(x_1: -0.42, z_1: 0.44, x_2: 0.42, z_2: 0.44)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/uninterruptible_power_supply.fp3dpack`
