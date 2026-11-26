# Domolux Specification: Domolux Architectural Linear Air Diffuser
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Architectural Linear Air Diffuser
- **German Name:** Domolux Architektonischer Linearer Luftauslass
- **Arabic Name:** موزع هواء خطي معماري دومولوكس
- **Unique Item ID:** `architectural_linear_air_diffuser`
- **Unique Pack ID:** `domolux.architectural_linear_air_diffuser`
- **Collection:** Architectural Interior Systems
- **Category:** Architectural Elements
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `ceiling`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `bedroom`, `dining`, `hall`
- **Discovery Tags:** `hvac`, `diffuser`, `ventilation`, `linear`, `ceiling`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.80 m (180 cm)
- **Bounding Depth ($D$):** 0.22 m (22 cm)
- **Bounding Height ($H$):** 0.15 m (15 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 72 tris
- **Total Vertices:** 216 vertices
- **Architectural Edges:** 48 segments
- **Measured Bounding Box:** 1.8m × 0.22m × 0.15m

---

### 3. Design Concept & Architectural Expression
Discreet architectural HVAC linear slot diffuser designed for flush integration into plasterboard ceilings with satin black directional air deflectors and shadow reveal perimeter.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.85)` | `(0.25, 0.75)` | `#282a30` | `faint` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.15, 0.10)` | `#e2e8f0` (white) | `faint` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.92, 0.50)` | `(0.00, 0.15)` | `#0f1013` | `faint` | Component #3 |
| 4 | `box` | `(0.00, -0.12)` | `(0.90, 0.08)` | `(0.02, 0.08)` | `#8c7247` | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.12)` | `(0.90, 0.08)` | `(0.02, 0.08)` | `#8c7247` | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.92, 0.04)` | `(0.00, 0.10)` | `#1a1c22` | `faint` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
- **Shape 2:** `line` $(x_1: -0.45, z_1: -0.12, x_2: 0.45, z_2: -0.12)$
- **Shape 3:** `line` $(x_1: -0.45, z_1: 0.12, x_2: 0.45, z_2: 0.12)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/architectural_linear_air_diffuser.fp3dpack`
