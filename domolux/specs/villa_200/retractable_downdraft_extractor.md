# Domolux Specification: Domolux Retractable Countertop Downdraft Extractor
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Retractable Countertop Downdraft Extractor
- **German Name:** Domolux Versenkbarer Tisch-Dunstabzug
- **Arabic Name:** شفاط مدمج هابط في الكاونتر وقابل للسحب دومولوكس
- **Unique Item ID:** `retractable_downdraft_extractor`
- **Unique Pack ID:** `domolux.retractable_downdraft_extractor`
- **Collection:** Gourmet Kitchens and Specialty Culinary Equipment
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `surface`
- **Placement Surface:** `true`
- **Target Environments:** `kitchen`
- **Discovery Tags:** `downdraft`, `extractor`, `countertop`, `motorized`, `kitchen`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.90 m (90 cm)
- **Bounding Depth ($D$):** 0.15 m (15 cm)
- **Bounding Height ($H$):** 0.75 m (75 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 60 tris
- **Total Vertices:** 180 vertices
- **Architectural Edges:** 32 segments
- **Measured Bounding Box:** 0.9m × 0.15m × 0.75m

---

### 3. Design Concept & Architectural Expression
Motorized flush-countertop downdraft ventilation unit rising 40cm above island worktops with perimeter extraction slot, glass touch control slider, and dimmable LED strip.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.96, 0.92)` | `(0.00, 0.55)` | `#1c1d22` | `faint` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.54, 0.02)` | `#111215` | `none` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.94, 0.40)` | `(0.56, 0.44)` | `#25272e` | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.18)` | `(0.88, 0.04)` | `(0.65, 0.28)` | `metal` | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.15)` | `(0.90, 0.03)` | `(0.98, 0.01)` | `#fff5ea` | `glow` [glow] | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
- **Shape 2:** `line` $(x_1: -0.45, z_1: 0.00, x_2: 0.45, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/retractable_downdraft_extractor.fp3dpack`
