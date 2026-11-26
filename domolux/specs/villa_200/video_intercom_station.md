# Domolux Specification: Domolux Architectural Flush Video Intercom Monitor
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Architectural Flush Video Intercom Monitor
- **German Name:** Domolux Architektonische Video-Sprechanlage
- **Arabic Name:** شاشة الاتصال الداخلي بالفيديو المعمارية الفاخرة دومولوكس
- **Unique Item ID:** `video_intercom_station`
- **Unique Pack ID:** `domolux.video_intercom_station`
- **Collection:** Smart Home, Security and Residential Infrastructure
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 1.5m)
- **Placement Surface:** `false`
- **Target Environments:** `hallway`, `entryway`, `kitchen`
- **Discovery Tags:** `intercom`, `security`, `touchscreen`, `video_doorbell`, `access`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.22 m (22 cm)
- **Bounding Depth ($D$):** 0.05 m (5 cm)
- **Bounding Height ($H$):** 0.32 m (32 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 104 tris
- **Total Vertices:** 312 vertices
- **Architectural Edges:** 16 segments
- **Measured Bounding Box:** 0.22m × 0.03m × 0.31m

---

### 3. Design Concept & Architectural Expression
Wall-mounted indoor communication station featuring an 8-inch portrait touchscreen, pinhole HD camera, micro-perforated acoustic speaker array, and solid brass faceplate.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.40)` | `(0.92, 0.12)` | `(0.04, 0.92)` | `#16171b` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.10)` | `(0.98, 0.06)` | `(0.02, 0.96)` | `#c5a059` | `glow` | Component #2 |
| 3 | `cyl (z)` | `(0.00, 0.12)` | `(0.08, 0.08)` | `(0.88, 0.02)` | `#111215` | `none` | Component #3 |
| 4 | `box` | `(0.00, 0.12)` | `(0.84, 0.02)` | `(0.22, 0.62)` | `#00b4d8` | `true` [glow] | Component #4 |
| 5 | `box` | `(0.00, 0.12)` | `(0.60, 0.02)` | `(0.08, 0.08)` | `#22252c` | `none` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.30)
- **Shape 2:** `circle` $(x: 0.00, z: 0.12, r: 0.08)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/video_intercom_station.fp3dpack`
