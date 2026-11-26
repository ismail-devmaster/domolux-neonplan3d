# Domolux Specification: Domolux Articulated Vanity Grooming Mirror
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Articulated Vanity Grooming Mirror
- **German Name:** Domolux Ausziehbarer Kosmetikspiegel
- **Arabic Name:** مرآة حلاقة وتجميل جدارية مكبرة ومتحركة دومولوكس
- **Unique Item ID:** `magnifying_grooming_mirror`
- **Unique Pack ID:** `domolux.magnifying_grooming_mirror`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 1.3m)
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `mirror`, `grooming`, `magnifying`, `lighting`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.30 m (30 cm)
- **Bounding Depth ($D$):** 0.35 m (35 cm)
- **Bounding Height ($H$):** 0.35 m (35 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 248 tris
- **Total Vertices:** 744 vertices
- **Architectural Edges:** 16 segments
- **Measured Bounding Box:** 0.23m × 0.43m × 0.22m

---

### 3. Design Concept & Architectural Expression
Wall-mounted precision double-jointed articulated grooming mirror with dual-sided 1x/10x optical surfaces, capacitive touch dimmer, and continuous ring CRI98 light halo.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl (z)` | `(0.00, -0.46)` | `(0.32, 0.32)` | `(0.34, 0.06)` | `#c5a059` | `none` | Component #1 |
| 2 | `box` | `(-0.15, -0.22)` | `(0.04, 0.35)` | `(0.47, 0.06)` | `#c5a059` | `glow` | Component #2 |
| 3 | `box` | `(0.05, 0.05)` | `(0.04, 0.30)` | `(0.47, 0.06)` | `#c5a059` | `glow` | Component #3 |
| 4 | `cyl` | `(0.15, 0.22)` | `(0.06, 0.06)` | `(0.25, 0.50)` | `#c5a059` | `none` | Component #4 |
| 5 | `cyl (y)` | `(0.15, 0.32)` | `(0.78, 0.78)` | `(0.11, 0.05)` | `#fff3cc` | `none` [glow] | Component #5 |
| 6 | `cyl (y)` | `(0.15, 0.32)` | `(0.68, 0.68)` | `(0.12, 0.04)` | `#a8c0d8` (glass) | `none` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `circle` $(x: 0.15, z: 0.32, r: 0.35)$
- **Shape 2:** `line` $(x_1: 0.00, z_1: -0.46, x_2: 0.15, z_2: 0.22)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/magnifying_grooming_mirror.fp3dpack`
