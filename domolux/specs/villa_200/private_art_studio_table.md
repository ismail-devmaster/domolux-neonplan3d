# Domolux Specification: Domolux Master Artist Tilting Drafting and Painting Table
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Master Artist Tilting Drafting and Painting Table
- **German Name:** Domolux Künstler-Zeichentisch mit neigbarer Platte
- **Arabic Name:** طاولة الرسم والهندسة الفنية القابلة للإمالة دومولوكس
- **Unique Item ID:** `private_art_studio_table`
- **Unique Pack ID:** `domolux.private_art_studio_table`
- **Collection:** Laundry, Service Rooms, Workshops and Specialist Systems
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `office`
- **Discovery Tags:** `drafting_table`, `art_studio`, `easel`, `painting`, `artist`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.60 m (160 cm)
- **Bounding Depth ($D$):** 0.95 m (95 cm)
- **Bounding Height ($H$):** 0.85 m (85 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 104 tris
- **Total Vertices:** 312 vertices
- **Architectural Edges:** 30 segments
- **Measured Bounding Box:** 1.57m × 0.91m × 1.05m

---

### 3. Design Concept & Architectural Expression
Architectural artist easel table with continuous counterbalanced tilting tabletop (0 to 60 degrees), cast-iron antique cog adjustment gears, and brush trough.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.38, 0.00)` | `(0.08, 0.88)` | `(0.00, 0.75)` | `#1c1e24` (dark) | `none` | Component #1 |
| 2 | `box` | `(0.38, 0.00)` | `(0.08, 0.88)` | `(0.00, 0.75)` | `#1c1e24` (dark) | `none` | Component #2 |
| 3 | `cyl (x)` | `(0.00, 0.00)` | `(0.08, 0.08)` | `(0.45, 0.78)` | `#c5a059` | `glow` | Component #3 |
| 4 | `box` | `(0.00, -0.05)` | `(0.98, 0.92)` | `(0.75, 0.12)` | `#c2ab87` (wood) | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.42)` | `(0.96, 0.06)` | `(0.78, 0.08)` | `#c5a059` | `glow` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.95)
- **Shape 2:** `line` $(x_1: -0.48, z_1: 0.42, x_2: 0.48, z_2: 0.42)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/private_art_studio_table.fp3dpack`
