# Domolux Specification: Domolux Acoustic Double Entrance Door
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Acoustic Double Entrance Door
- **German Name:** Domolux Akustische Schallschutz-Doppeltür
- **Arabic Name:** باب صوتي مزدوج عازل للضوضاء دومولوكس
- **Unique Item ID:** `acoustic_double_door`
- **Unique Pack ID:** `domolux.acoustic_double_door`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `cinema`, `office`, `bedroom`
- **Discovery Tags:** `acoustic`, `soundproof`, `door`, `cinema`, `studio`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.30 m (130 cm)
- **Bounding Depth ($D$):** 0.42 m (42 cm)
- **Bounding Height ($H$):** 2.50 m (250 cm)
- **Geometric Parts:** 7 native components (Engine limit: 60)
- **Total Triangles:** 84 tris
- **Total Vertices:** 252 vertices
- **Architectural Edges:** 56 segments
- **Measured Bounding Box:** 1.3m × 0.42m × 2.5m

---

### 3. Design Concept & Architectural Expression
High-performance studio-grade sound isolating acoustic double door system (55dB rated) featuring dense composite core, drop-down automatic acoustic perimeter seals, and sound lock air cavity.

---

### 4. Component Breakdown & Geometry Table (7 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.00, 1.00)` | `#22252c` | `true` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.86, 0.90)` | `(0.03, 0.94)` | `#141518` | `faint` | Component #2 |
| 3 | `box` | `(0.00, -0.32)` | `(0.84, 0.22)` | `(0.04, 0.92)` | `#362b22` (wood) | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.32)` | `(0.84, 0.22)` | `(0.04, 0.92)` | `#362b22` (wood) | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.42)` | `(0.72, 0.05)` | `(0.10, 0.80)` | `fabric` (fabric) | `true` | Component #5 |
| 6 | `box` | `(0.32, 0.46)` | `(0.04, 0.08)` | `(0.45, 0.12)` | `metal` | `glow` | Component #6 |
| 7 | `box` | `(0.32, -0.46)` | `(0.04, 0.08)` | `(0.45, 0.12)` | `metal` | `glow` | Component #7 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
- **Shape 2:** `line` $(x_1: -0.42, z_1: -0.32, x_2: 0.42, z_2: -0.32)$
- **Shape 3:** `line` $(x_1: -0.42, z_1: 0.32, x_2: 0.42, z_2: 0.32)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/acoustic_double_door.fp3dpack`
