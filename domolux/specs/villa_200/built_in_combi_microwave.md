# Domolux Specification: Domolux Built-In Combi Microwave Oven
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Built-In Combi Microwave Oven
- **German Name:** Domolux Integrierte Kompakt-Mikrowelle
- **Arabic Name:** فرن ميكروويف مدمج متعدد الوظائف دومولوكس
- **Unique Item ID:** `built_in_combi_microwave`
- **Unique Pack ID:** `domolux.built_in_combi_microwave`
- **Collection:** Gourmet Kitchens and Specialty Culinary Equipment
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `surface`
- **Placement Surface:** `true`
- **Target Environments:** `kitchen`
- **Discovery Tags:** `microwave`, `oven`, `combi`, `built-in`, `kitchen`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.60 m (60 cm)
- **Bounding Depth ($D$):** 0.55 m (55 cm)
- **Bounding Height ($H$):** 0.45 m (45 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 104 tris
- **Total Vertices:** 312 vertices
- **Architectural Edges:** 46 segments
- **Measured Bounding Box:** 0.6m × 0.55m × 0.6m

---

### 3. Design Concept & Architectural Expression
45cm architectural compact combination microwave and convection oven with black obsidian glass facade, full-color touch display, and motor drop-down door.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.00, 1.00)` | `#1c1d22` | `true` | Component #1 |
| 2 | `box` | `(0.00, 0.48)` | `(0.98, 0.03)` | `(0.00, 0.98)` | `#111215` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.48)` | `(0.65, 0.01)` | `(0.08, 0.55)` | `glass` | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.48)` | `(0.48, 0.01)` | `(0.75, 0.16)` | `#38bdf8` | `glow` [glow] | Component #4 |
| 5 | `cyl (x)` | `(0.00, 0.48)` | `(0.03, 0.03)` | `(0.62, 0.72)` | `#c5a059` | `glow` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
- **Shape 2:** `rect` $(x: 0.00, z: 0.48, w: 0.65, d: 0.04) [filled]

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/built_in_combi_microwave.fp3dpack`
