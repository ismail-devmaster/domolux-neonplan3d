# Domolux Specification: Domolux Silent Estate Standby Emergency Power Generator
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Silent Estate Standby Emergency Power Generator
- **German Name:** Domolux Schallgedämpftes Notstromaggregat
- **Arabic Name:** مولد الكهرباء الاحتياطي فائق الهدوء للقصور والمجمعات الفاخرة دومولوكس
- **Unique Item ID:** `backup_diesel_generator`
- **Unique Pack ID:** `domolux.backup_diesel_generator`
- **Collection:** Smart Home, Security and Residential Infrastructure
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`, `storage`
- **Discovery Tags:** `generator`, `backup_power`, `emergency`, `diesel`, `infrastructure`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.20 m (220 cm)
- **Bounding Depth ($D$):** 1.10 m (110 cm)
- **Bounding Height ($H$):** 1.40 m (140 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 116 tris
- **Total Vertices:** 348 vertices
- **Architectural Edges:** 22 segments
- **Measured Bounding Box:** 2.16m × 1.08m × 1.4m

---

### 3. Design Concept & Architectural Expression
Heavy acoustic-damped 65kVA standby emergency generator with critical-grade exhaust silencer, automatic transfer switch interface, and weather-sealed dual service doors.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.00, 0.10)` | `#181a1f` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.94, 0.92)` | `(0.10, 0.86)` | `#2f3542` (dark) | `true` | Component #2 |
| 3 | `box` | `(-0.42, 0.00)` | `(0.06, 0.74)` | `(0.25, 0.55)` | `#1e2229` | `none` | Component #3 |
| 4 | `box` | `(0.42, 0.00)` | `(0.06, 0.74)` | `(0.25, 0.55)` | `#1e2229` | `none` | Component #4 |
| 5 | `cyl` | `(0.25, 0.00)` | `(0.14, 0.14)` | `(0.96, 0.04)` | `metal` | `true` | Component #5 |
| 6 | `box` | `(-0.15, 0.46)` | `(0.32, 0.02)` | `(0.52, 0.24)` | `#00e5ff` | `none` [glow] | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.94, d: 0.92)
- **Shape 2:** `circle` $(x: 0.25, z: 0.00, r: 0.08)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/backup_diesel_generator.fp3dpack`
