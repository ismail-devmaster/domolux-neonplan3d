# Domolux Specification: Domolux Smart Motorized Whole-Home Water Security Shutoff
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Smart Motorized Whole-Home Water Security Shutoff
- **German Name:** Domolux Intelligentes Hauptwasser-Absperrventil
- **Arabic Name:** صمام الأمان الذكي للغلق الآلي الفوري لمياه المنزل دومولوكس
- **Unique Item ID:** `water_leak_shutoff_valve`
- **Unique Pack ID:** `domolux.water_leak_shutoff_valve`
- **Collection:** Smart Home, Security and Residential Infrastructure
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 0.45m)
- **Placement Surface:** `false`
- **Target Environments:** `storage`, `kitchen`
- **Discovery Tags:** `water_shutoff`, `leak_detection`, `smart_valve`, `plumbing`, `security`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.30 m (30 cm)
- **Bounding Depth ($D$):** 0.22 m (22 cm)
- **Bounding Height ($H$):** 0.35 m (35 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 192 tris
- **Total Vertices:** 576 vertices
- **Architectural Edges:** 22 segments
- **Measured Bounding Box:** 0.31m × 0.16m × 0.31m

---

### 3. Design Concept & Architectural Expression
Ultrasonic whole-home water consumption monitor with automated high-torque motorized brass ball valve shutoff, micro-leak detection, and Zigbee/Thread mesh radio.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl (x)` | `(0.00, 0.00)` | `(0.35, 0.35)` | `(0.12, 0.88)` | `#c5a059` | `glow` | Component #1 |
| 2 | `cyl (x)` | `(-0.42, 0.00)` | `(0.28, 0.28)` | `(0.15, 0.15)` | `#8a6d3b` | `none` | Component #2 |
| 3 | `cyl (x)` | `(0.42, 0.00)` | `(0.28, 0.28)` | `(0.15, 0.15)` | `#8a6d3b` | `none` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.72, 0.72)` | `(0.38, 0.58)` | `#252830` (dark) | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.65, 0.15)` | `(0.94, 0.06)` | `#ff4d4f` | `none` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.72, d: 0.72)
- **Shape 2:** `circle` $(x: 0.00, z: 0.00, r: 0.18)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/water_leak_shutoff_valve.fp3dpack`
