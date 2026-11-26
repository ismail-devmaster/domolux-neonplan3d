# Domolux Specification: Domolux Recessed Architectural Fold-Out Ironing Cabinet
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Recessed Architectural Fold-Out Ironing Cabinet
- **German Name:** Domolux Wandeinbau-Bügelzentrum
- **Arabic Name:** مركز الكي الجداري المخفي المدمج بلوح دوار دومولوكس
- **Unique Item ID:** `concealed_ironing_center`
- **Unique Pack ID:** `domolux.concealed_ironing_center`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 0.6m)
- **Placement Surface:** `false`
- **Target Environments:** `storage`, `bedroom`
- **Discovery Tags:** `ironing_board`, `ironing_cabinet`, `concealed`, `utility`, `laundry`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.45 m (45 cm)
- **Bounding Depth ($D$):** 0.16 m (16 cm)
- **Bounding Height ($H$):** 1.25 m (125 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 60 tris
- **Total Vertices:** 180 vertices
- **Architectural Edges:** 32 segments
- **Measured Bounding Box:** 0.43m × 0.16m × 1.23m

---

### 3. Design Concept & Architectural Expression
Recessed in-wall ironing center with 180-degree swivel board, integrated steam-iron heat rest, electrical timer outlet, and full-length mirrored door face.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.42)` | `(0.92, 0.14)` | `(0.02, 0.96)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.05)` | `(0.96, 0.08)` | `(0.00, 0.98)` | `#c5a059` | `glow` | Component #2 |
| 3 | `box` | `(0.00, 0.15)` | `(0.92, 0.04)` | `(0.02, 0.96)` | `#a8c0d8` (glass) | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.35)` | `(0.72, 0.35)` | `(0.45, 0.06)` | `#e8ecef` (cushion) | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.22)` | `(0.45, 0.14)` | `(0.75, 0.04)` | `metal` | `true` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.45)
- **Shape 2:** `rect` $(x: 0.00, z: 0.35, w: 0.72, d: 0.35)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/concealed_ironing_center.fp3dpack`
