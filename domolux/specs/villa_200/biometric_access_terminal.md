# Domolux Specification: Domolux Biometric Facial and Palm-Vein Access Terminal
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Biometric Facial and Palm-Vein Access Terminal
- **German Name:** Domolux Biometrisches Zutrittsterminal
- **Arabic Name:** جهاز التحقق البيومتري ببصمة الكف وملامح الوجه دومولوكس
- **Unique Item ID:** `biometric_access_terminal`
- **Unique Pack ID:** `domolux.biometric_access_terminal`
- **Collection:** Smart Home, Security and Residential Infrastructure
- **Category:** Entryway
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 1.35m)
- **Placement Surface:** `false`
- **Target Environments:** `hallway`, `outdoor`
- **Discovery Tags:** `biometric`, `access_control`, `security`, `palm_vein`, `facial_recognition`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.12 m (12 cm)
- **Bounding Depth ($D$):** 0.06 m (6 cm)
- **Bounding Height ($H$):** 0.28 m (28 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 104 tris
- **Total Vertices:** 312 vertices
- **Architectural Edges:** 16 segments
- **Measured Bounding Box:** 0.12m × 0.06m × 0.27m

---

### 3. Design Concept & Architectural Expression
High-security access pillar featuring 3D structured-light facial recognition cameras, contactless palm-vein scanner window, tamper alarm, and satin gunmetal finish.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.40)` | `(0.92, 0.15)` | `(0.04, 0.92)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.02)` | `(0.96, 0.72)` | `(0.02, 0.96)` | `#252830` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.32)` | `(0.84, 0.04)` | `(0.75, 0.18)` | `#00e5ff` | `true` [glow] | Component #3 |
| 4 | `box` | `(0.00, 0.34)` | `(0.78, 0.02)` | `(0.65, 0.04)` | `#00e676` | `none` [glow] | Component #4 |
| 5 | `cyl (z)` | `(0.00, 0.30)` | `(0.45, 0.45)` | `(0.22, 0.04)` | `#8a2be2` | `none` [glow] | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.72)
- **Shape 2:** `circle` $(x: 0.00, z: 0.30, r: 0.20)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/biometric_access_terminal.fp3dpack`
