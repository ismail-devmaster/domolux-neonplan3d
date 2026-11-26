# Domolux Specification: Domolux Contour-Engineered Architectural Putting Green
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Contour-Engineered Architectural Putting Green
- **German Name:** Domolux Architektonisches Indoor-Putting-Green
- **Arabic Name:** مسار تدريب الجولف الداخلي المعماري بالعشب الطبي دومولوكس
- **Unique Item ID:** `indoor_putting_green`
- **Unique Pack ID:** `domolux.indoor_putting_green`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `office`
- **Discovery Tags:** `putting_green`, `golf`, `turf`, `sports`, `games`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 3.20 m (320 cm)
- **Bounding Depth ($D$):** 1.40 m (140 cm)
- **Bounding Height ($H$):** 0.15 m (15 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 192 tris
- **Total Vertices:** 576 vertices
- **Architectural Edges:** 58 segments
- **Measured Bounding Box:** 3.14m × 1.34m × 0.02m

---

### 3. Design Concept & Architectural Expression
Custom contoured residential putting green featuring adjustable break underlayment, PGA Stimpmeter 11 turf, three precision solid brass cup liners, and fluted oak border surround.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.96)` | `(0.00, 0.12)` | `#362619` (wood) | `true` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.94, 0.90)` | `(0.06, 0.06)` | `#2d6a4f` | `true` | Component #2 |
| 3 | `cyl` | `(-0.36, -0.15)` | `(0.10, 0.10)` | `(0.06, 0.08)` | `#c5a059` | `glow` | Component #3 |
| 4 | `cyl` | `(-0.10, 0.18)` | `(0.10, 0.10)` | `(0.06, 0.08)` | `#c5a059` | `glow` | Component #4 |
| 5 | `cyl` | `(0.36, -0.10)` | `(0.10, 0.10)` | `(0.06, 0.08)` | `#c5a059` | `glow` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.96)
- **Shape 2:** `circle` $(x: -0.36, z: -0.15, r: 0.05)$
- **Shape 3:** `circle` $(x: -0.10, z: 0.18, r: 0.05)$
- **Shape 4:** `circle` $(x: 0.36, z: -0.10, r: 0.05)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/indoor_putting_green.fp3dpack`
