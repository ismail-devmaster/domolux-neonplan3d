# Domolux Specification: Domolux Monumental Entrance Smart Video Doorbell
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Monumental Entrance Smart Video Doorbell
- **German Name:** Domolux Smarte Video-Türklingel aus Bronze
- **Arabic Name:** جرس الباب الذكي بالفيديو وكاميرا الرؤية الليلية دومولوكس
- **Unique Item ID:** `smart_video_doorbell`
- **Unique Pack ID:** `domolux.smart_video_doorbell`
- **Collection:** Smart Home, Security and Residential Infrastructure
- **Category:** Entryway
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 1.4m)
- **Placement Surface:** `false`
- **Target Environments:** `hallway`, `outdoor`
- **Discovery Tags:** `doorbell`, `camera`, `security`, `entryway`, `bronze`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.08 m (8 cm)
- **Bounding Depth ($D$):** 0.04 m (4 cm)
- **Bounding Height ($H$):** 0.22 m (22 cm)
- **Geometric Parts:** 4 native components (Engine limit: 60)
- **Total Triangles:** 136 tris
- **Total Vertices:** 408 vertices
- **Architectural Edges:** 18 segments
- **Measured Bounding Box:** 0.08m × 0.04m × 0.21m

---

### 3. Design Concept & Architectural Expression
Slimline exterior entryway station milled from a solid billet of dark oxidized bronze, with 4K HDR optical lens, capacitive backlit touch button, and LED status halo.

---

### 4. Component Breakdown & Geometry Table (4 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.40)` | `(0.90, 0.15)` | `(0.04, 0.92)` | `#1a1c20` | `none` | Component #1 |
| 2 | `loft` | `(0.00, 0.00)` | `(0.96, 0.70)` | `(0.02, 0.96)` | `#2a221b` (dark) | `true` | Component #2 |
| 3 | `cyl (z)` | `(0.00, 0.25)` | `(0.45, 0.45)` | `(0.72, 0.04)` | `#111215` | `glow` | Component #3 |
| 4 | `cyl (z)` | `(0.00, 0.25)` | `(0.50, 0.50)` | `(0.25, 0.03)` | `#ffa726` | `none` [glow] | Component #4 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.70)
- **Shape 2:** `circle` $(x: 0.00, z: 0.25, r: 0.22)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/smart_video_doorbell.fp3dpack`
