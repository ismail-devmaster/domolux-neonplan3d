# Domolux Specification: Domolux Upholstered Acoustic Wall Panels
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Upholstered Acoustic Wall Panels
- **German Name:** Domolux Gepolsterte Akustik-Wandpaneele
- **Arabic Name:** ألواح حائط صوتية منجدة دومولوكس
- **Unique Item ID:** `upholstered_acoustic_wall_panels`
- **Unique Pack ID:** `domolux.upholstered_acoustic_wall_panels`
- **Collection:** Architectural Interior Systems
- **Category:** Architectural Elements
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 0.2m)
- **Placement Surface:** `false`
- **Target Environments:** `cinema`, `bedroom`, `living`, `office`
- **Discovery Tags:** `acoustic`, `upholstered`, `fabric`, `boucle`, `panels`, `cinema`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.60 m (260 cm)
- **Bounding Depth ($D$):** 0.14 m (14 cm)
- **Bounding Height ($H$):** 2.60 m (260 cm)
- **Geometric Parts:** 10 native components (Engine limit: 60)
- **Total Triangles:** 120 tris
- **Total Vertices:** 360 vertices
- **Architectural Edges:** 64 segments
- **Measured Bounding Box:** 2.6m × 0.13m × 2.6m

---

### 3. Design Concept & Architectural Expression
Geometric modular upholstered acoustic wall system with Italian cashmere and bouclé segment pillows, recessed dark bronze framing, and sound dampening core.

---

### 4. Component Breakdown & Geometry Table (10 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.35)` | `(0.98, 0.25)` | `(0.00, 1.00)` | `#191a20` | `faint` | Component #1 |
| 2 | `box` | `(0.00, -0.15)` | `(1.00, 0.35)` | `(0.00, 1.00)` | `#614d2e` | `glow` | Component #2 |
| 3 | `loft` | `(-0.24, 0.15)` | `(0.44, 0.55)` | `(0.04, 0.43)` | `fabric` (fabric) | `true` | Component #3 |
| 4 | `loft` | `(0.24, 0.15)` | `(0.44, 0.55)` | `(0.04, 0.43)` | `cushion` (fabric) | `true` | Component #4 |
| 5 | `loft` | `(-0.24, 0.15)` | `(0.44, 0.55)` | `(0.52, 0.43)` | `cushion` (fabric) | `true` | Component #5 |
| 6 | `loft` | `(0.24, 0.15)` | `(0.44, 0.55)` | `(0.52, 0.43)` | `fabric` (fabric) | `true` | Component #6 |
| 7 | `box` | `(0.00, 0.05)` | `(0.03, 0.50)` | `(0.02, 0.96)` | `#c5a059` | `glow` | Component #7 |
| 8 | `box` | `(0.00, 0.05)` | `(0.96, 0.50)` | `(0.48, 0.03)` | `#c5a059` | `glow` | Component #8 |
| 9 | `box` | `(0.00, -0.05)` | `(0.98, 0.10)` | `(0.98, 0.01)` | `#ffeacc` | `glow` [glow] | Component #9 |
| 10 | `box` | `(0.00, -0.05)` | `(0.98, 0.10)` | `(0.01, 0.01)` | `#ffeacc` | `glow` [glow] | Component #10 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.80)
- **Shape 2:** `line` $(x_1: 0.00, z_1: -0.40, x_2: 0.00, z_2: 0.40)$
- **Shape 3:** `line` $(x_1: -0.50, z_1: 0.00, x_2: 0.50, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/upholstered_acoustic_wall_panels.fp3dpack`
