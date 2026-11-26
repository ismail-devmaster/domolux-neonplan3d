# Domolux Specification: Domolux Estate Architectural Bicycle and Equipment Pavilion
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Estate Architectural Bicycle and Equipment Pavilion
- **German Name:** Domolux Architektonischer Fahrrad- und Geräteunterstand
- **Arabic Name:** مظلة وموقف الدراجات الهوائية والمعدات الرياضية الفاخرة دومولوكس
- **Unique Item ID:** `outdoor_bicycle_shelter`
- **Unique Pack ID:** `domolux.outdoor_bicycle_shelter`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `bike_shelter`, `bicycle`, `ebike`, `pavilion`, `outdoor`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 3.20 m (320 cm)
- **Bounding Depth ($D$):** 1.80 m (180 cm)
- **Bounding Height ($H$):** 2.30 m (230 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 96 tris
- **Total Vertices:** 288 vertices
- **Architectural Edges:** 44 segments
- **Measured Bounding Box:** 3.14m × 1.91m × 2.3m

---

### 3. Design Concept & Architectural Expression
Curated open-air bicycle shelter with cantilevered bronze zinc roof, integrated inductive charging docks for 4 e-bikes, solid oak wheel chocks, and linear downlight bar.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.00, 0.08)` | `#22252c` | `true` | Component #1 |
| 2 | `box` | `(-0.42, -0.42)` | `(0.08, 0.08)` | `(0.08, 0.88)` | `#16171b` (dark) | `none` | Component #2 |
| 3 | `box` | `(0.42, -0.42)` | `(0.08, 0.08)` | `(0.08, 0.88)` | `#16171b` (dark) | `none` | Component #3 |
| 4 | `loft` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.92, 0.08)` | `#2b221d` (dark) | `true` | Component #4 |
| 5 | `box` | `(-0.32, 0.05)` | `(0.04, 0.65)` | `(0.08, 0.50)` | `#c5a059` | `glow` | Component #5 |
| 6 | `box` | `(-0.10, 0.05)` | `(0.04, 0.65)` | `(0.08, 0.50)` | `#c5a059` | `glow` | Component #6 |
| 7 | `box` | `(0.10, 0.05)` | `(0.04, 0.65)` | `(0.08, 0.50)` | `#c5a059` | `glow` | Component #7 |
| 8 | `box` | `(0.32, 0.05)` | `(0.04, 0.65)` | `(0.08, 0.50)` | `#c5a059` | `glow` | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `line` $(x_1: -0.32, z_1: -0.28, x_2: -0.32, z_2: 0.38)$
- **Shape 3:** `line` $(x_1: -0.10, z_1: -0.28, x_2: -0.10, z_2: 0.38)$
- **Shape 4:** `line` $(x_1: 0.10, z_1: -0.28, x_2: 0.10, z_2: 0.38)$
- **Shape 5:** `line` $(x_1: 0.32, z_1: -0.28, x_2: 0.32, z_2: 0.38)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/outdoor_bicycle_shelter.fp3dpack`
