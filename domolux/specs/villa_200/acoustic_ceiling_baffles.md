# Domolux Specification: Domolux Architectural Acoustic Ceiling Baffles
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Architectural Acoustic Ceiling Baffles
- **German Name:** Domolux Architektonische Akustik-Deckensegel
- **Arabic Name:** حواجز سقفية صوتية معمارية دومولوكس
- **Unique Item ID:** `acoustic_ceiling_baffles`
- **Unique Pack ID:** `domolux.acoustic_ceiling_baffles`
- **Collection:** Architectural Interior Systems
- **Category:** Architectural Elements
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `ceiling`
- **Placement Surface:** `false`
- **Target Environments:** `cinema`, `living`, `office`
- **Discovery Tags:** `baffles`, `acoustic`, `ceiling`, `felt`, `cinema`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.80 m (280 cm)
- **Bounding Depth ($D$):** 1.80 m (180 cm)
- **Bounding Height ($H$):** 0.45 m (45 cm)
- **Geometric Parts:** 10 native components (Engine limit: 60)
- **Total Triangles:** 120 tris
- **Total Vertices:** 360 vertices
- **Architectural Edges:** 80 segments
- **Measured Bounding Box:** 2.69m × 1.71m × 0.45m

---

### 3. Design Concept & Architectural Expression
Suspended rhythmic acoustic baffle installation with felt-clad fins, concealed wire tensioners, and integrated micro-linear LED accents for commercial-grade residential acoustic control.

---

### 4. Component Breakdown & Geometry Table (10 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.35, 0.00)` | `(0.04, 0.95)` | `(0.88, 0.12)` | `#22252a` | `faint` | Component #1 |
| 2 | `box` | `(0.35, 0.00)` | `(0.04, 0.95)` | `(0.88, 0.12)` | `#22252a` | `faint` | Component #2 |
| 3 | `box` | `(0.00, -0.40)` | `(0.96, 0.04)` | `(0.05, 0.80)` | `#3e434f` (fabric) | `true` | Component #3 |
| 4 | `box` | `(0.00, -0.24)` | `(0.96, 0.04)` | `(0.05, 0.80)` | `#4b515f` (fabric) | `true` | Component #4 |
| 5 | `box` | `(0.00, -0.08)` | `(0.96, 0.04)` | `(0.05, 0.80)` | `#5a6273` (fabric) | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.08)` | `(0.96, 0.04)` | `(0.05, 0.80)` | `#5a6273` (fabric) | `true` | Component #6 |
| 7 | `box` | `(0.00, 0.24)` | `(0.96, 0.04)` | `(0.05, 0.80)` | `#4b515f` (fabric) | `true` | Component #7 |
| 8 | `box` | `(0.00, 0.40)` | `(0.96, 0.04)` | `(0.05, 0.80)` | `#3e434f` (fabric) | `true` | Component #8 |
| 9 | `box` | `(0.00, -0.08)` | `(0.96, 0.02)` | `(0.00, 0.05)` | `#c5a059` | `glow` | Component #9 |
| 10 | `box` | `(0.00, 0.08)` | `(0.96, 0.02)` | `(0.00, 0.05)` | `#c5a059` | `glow` | Component #10 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
- **Shape 2:** `line` $(x_1: -0.48, z_1: -0.40, x_2: 0.48, z_2: -0.40)$
- **Shape 3:** `line` $(x_1: -0.48, z_1: -0.24, x_2: 0.48, z_2: -0.24)$
- **Shape 4:** `line` $(x_1: -0.48, z_1: -0.08, x_2: 0.48, z_2: -0.08)$
- **Shape 5:** `line` $(x_1: -0.48, z_1: 0.08, x_2: 0.48, z_2: 0.08)$
- **Shape 6:** `line` $(x_1: -0.48, z_1: 0.24, x_2: 0.48, z_2: 0.24)$
- **Shape 7:** `line` $(x_1: -0.48, z_1: 0.40, x_2: 0.48, z_2: 0.40)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/acoustic_ceiling_baffles.fp3dpack`
