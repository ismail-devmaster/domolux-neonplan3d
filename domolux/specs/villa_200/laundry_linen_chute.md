# Domolux Specification: Domolux Mirror-Polished Stainless Laundry Linen Chute Door
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Mirror-Polished Stainless Laundry Linen Chute Door
- **German Name:** Domolux Wandeinbau-Wäscheabwurfklappe
- **Arabic Name:** باب ومجرى إلقاء الغسيل الجداري المعماري من الستانلس ستيل دومولوكس
- **Unique Item ID:** `laundry_linen_chute`
- **Unique Pack ID:** `domolux.laundry_linen_chute`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 0.7m)
- **Placement Surface:** `false`
- **Target Environments:** `storage`, `hallway`, `bathroom`
- **Discovery Tags:** `linen_chute`, `laundry_drop`, `fire_rated`, `stainless`, `utility`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.45 m (45 cm)
- **Bounding Depth ($D$):** 0.25 m (25 cm)
- **Bounding Height ($H$):** 0.95 m (95 cm)
- **Geometric Parts:** 4 native components (Engine limit: 60)
- **Total Triangles:** 92 tris
- **Total Vertices:** 276 vertices
- **Architectural Edges:** 30 segments
- **Measured Bounding Box:** 0.43m × 0.19m × 0.91m

---

### 3. Design Concept & Architectural Expression
Fire-rated wall-intake laundry chute door crafted from heavy 304 brushed stainless steel with acoustic self-latching magnetic seal and brass handle.

---

### 4. Component Breakdown & Geometry Table (4 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.38)` | `(0.90, 0.22)` | `(0.05, 0.90)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.05)` | `(0.96, 0.08)` | `(0.02, 0.96)` | `metal` (metal) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.20)` | `(0.78, 0.04)` | `(0.12, 0.76)` | `#cfd8dc` (white) | `true` | Component #3 |
| 4 | `cyl (x)` | `(0.00, 0.26)` | `(0.04, 0.04)` | `(0.75, 0.15)` | `#c5a059` | `glow` | Component #4 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.50)
- **Shape 2:** `line` $(x_1: -0.39, z_1: 0.20, x_2: 0.39, z_2: 0.20)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/laundry_linen_chute.fp3dpack`
