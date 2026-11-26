# Domolux Specification: Domolux Suspended Timber Slat Ceiling
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Suspended Timber Slat Ceiling
- **German Name:** Domolux Abgehängte Holzlamellen-Decke
- **Arabic Name:** سقف معلق بشرائح خشبية دومولوكس
- **Unique Item ID:** `suspended_timber_slat_ceiling`
- **Unique Pack ID:** `domolux.suspended_timber_slat_ceiling`
- **Collection:** Architectural Interior Systems
- **Category:** Architectural Elements
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `ceiling`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `kitchen`, `hall`, `dining`
- **Discovery Tags:** `ceiling`, `slats`, `timber`, `acoustic`, `suspended`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 3.00 m (300 cm)
- **Bounding Depth ($D$):** 2.40 m (240 cm)
- **Bounding Height ($H$):** 0.28 m (28 cm)
- **Geometric Parts:** 14 native components (Engine limit: 60)
- **Total Triangles:** 168 tris
- **Total Vertices:** 504 vertices
- **Architectural Edges:** 112 segments
- **Measured Bounding Box:** 3m × 2.4m × 0.28m

---

### 3. Design Concept & Architectural Expression
Architectural suspended acoustic ceiling with linear American walnut baffles, acoustic backing fleece, and recessed black linear LED lighting tracks.

---

### 4. Component Breakdown & Geometry Table (14 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.85, 0.15)` | `#16171b` | `faint` | Component #1 |
| 2 | `box` | `(-0.30, 0.00)` | `(0.03, 0.98)` | `(0.70, 0.15)` | `#22242a` | `faint` | Component #2 |
| 3 | `box` | `(0.30, 0.00)` | `(0.03, 0.98)` | `(0.70, 0.15)` | `#22242a` | `faint` | Component #3 |
| 4 | `box` | `(-0.45, 0.00)` | `(0.04, 0.96)` | `(0.05, 0.70)` | `#45362a` (wood) | `true` | Component #4 |
| 5 | `box` | `(-0.35, 0.00)` | `(0.04, 0.96)` | `(0.05, 0.70)` | `#45362a` (wood) | `true` | Component #5 |
| 6 | `box` | `(-0.25, 0.00)` | `(0.04, 0.96)` | `(0.05, 0.70)` | `#45362a` (wood) | `true` | Component #6 |
| 7 | `box` | `(-0.15, 0.00)` | `(0.04, 0.96)` | `(0.05, 0.70)` | `#45362a` (wood) | `true` | Component #7 |
| 8 | `box` | `(-0.05, 0.00)` | `(0.04, 0.96)` | `(0.05, 0.70)` | `#45362a` (wood) | `true` | Component #8 |
| 9 | `box` | `(0.05, 0.00)` | `(0.04, 0.96)` | `(0.05, 0.70)` | `#45362a` (wood) | `true` | Component #9 |
| 10 | `box` | `(0.15, 0.00)` | `(0.04, 0.96)` | `(0.05, 0.70)` | `#45362a` (wood) | `true` | Component #10 |
| 11 | `box` | `(0.25, 0.00)` | `(0.04, 0.96)` | `(0.05, 0.70)` | `#45362a` (wood) | `true` | Component #11 |
| 12 | `box` | `(0.35, 0.00)` | `(0.04, 0.96)` | `(0.05, 0.70)` | `#45362a` (wood) | `true` | Component #12 |
| 13 | `box` | `(0.45, 0.00)` | `(0.04, 0.96)` | `(0.05, 0.70)` | `#45362a` (wood) | `true` | Component #13 |
| 14 | `box` | `(0.00, 0.00)` | `(0.03, 0.88)` | `(0.00, 0.05)` | `#fff0db` | `glow` [glow] | Component #14 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
- **Shape 2:** `line` $(x_1: -0.45, z_1: -0.48, x_2: -0.45, z_2: 0.48)$
- **Shape 3:** `line` $(x_1: -0.25, z_1: -0.48, x_2: -0.25, z_2: 0.48)$
- **Shape 4:** `line` $(x_1: 0.00, z_1: -0.48, x_2: 0.00, z_2: 0.48)$
- **Shape 5:** `line` $(x_1: 0.25, z_1: -0.48, x_2: 0.25, z_2: 0.48)$
- **Shape 6:** `line` $(x_1: 0.45, z_1: -0.48, x_2: 0.45, z_2: 0.48)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/suspended_timber_slat_ceiling.fp3dpack`
