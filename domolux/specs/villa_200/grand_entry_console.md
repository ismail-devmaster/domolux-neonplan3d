# Domolux Specification: Domolux Grand Entrance Console
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Grand Entrance Console
- **German Name:** Domolux Monumentale Eingangs-Konsole
- **Arabic Name:** طاولة كونسول المدخل الفاخرة دومولوكس
- **Unique Item ID:** `grand_entry_console`
- **Unique Pack ID:** `domolux.grand_entry_console`
- **Collection:** Exclusive Interior Furnishings, Art and Decor
- **Category:** Living Room
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `true`
- **Target Environments:** `hall`, `living`, `dining`
- **Discovery Tags:** `console`, `foyer`, `marble`, `bronze`, `walnut`, `luxury`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.20 m (220 cm)
- **Bounding Depth ($D$):** 0.50 m (50 cm)
- **Bounding Height ($H$):** 0.88 m (88 cm)
- **Geometric Parts:** 11 native components (Engine limit: 60)
- **Total Triangles:** 176 tris
- **Total Vertices:** 528 vertices
- **Architectural Edges:** 72 segments
- **Measured Bounding Box:** 2.2m × 0.5m × 0.88m

---

### 3. Design Concept & Architectural Expression
Architectural foyer statement console table with 60mm honed Calacatta marble slab, sculptural dark bronze interlocking arch base, and two soft-closing fluted walnut accessory drawers.

---

### 4. Component Breakdown & Geometry Table (11 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.35, 0.00)` | `(0.12, 0.85)` | `(0.00, 0.04)` | `#3d301b` | `glow` | Component #1 |
| 2 | `box` | `(0.35, 0.00)` | `(0.12, 0.85)` | `(0.00, 0.04)` | `#3d301b` | `glow` | Component #2 |
| 3 | `loft` | `(-0.35, 0.00)` | `(0.10, 0.70)` | `(0.04, 0.68)` | `#c5a059` | `glow` | Component #3 |
| 4 | `loft` | `(0.35, 0.00)` | `(0.10, 0.70)` | `(0.04, 0.68)` | `#c5a059` | `glow` | Component #4 |
| 5 | `cyl (x)` | `(0.00, 0.00)` | `(0.04, 0.04)` | `(0.25, 0.65)` | `#c5a059` | `none` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.90, 0.85)` | `(0.72, 0.18)` | `#3a2d23` (wood) | `true` | Component #6 |
| 7 | `box` | `(-0.22, 0.43)` | `(0.42, 0.04)` | `(0.73, 0.16)` | `#47382c` (wood) | `true` | Component #7 |
| 8 | `box` | `(0.22, 0.43)` | `(0.42, 0.04)` | `(0.73, 0.16)` | `#47382c` (wood) | `true` | Component #8 |
| 9 | `box` | `(-0.22, 0.46)` | `(0.08, 0.02)` | `(0.80, 0.02)` | `#c5a059` | `glow` | Component #9 |
| 10 | `box` | `(0.22, 0.46)` | `(0.08, 0.02)` | `(0.80, 0.02)` | `#c5a059` | `glow` | Component #10 |
| 11 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.90, 0.10)` | `#e8e5dc` (body) | `true` | Component #11 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
- **Shape 2:** `line` $(x_1: 0.00, z_1: -0.45, x_2: 0.00, z_2: 0.45)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/grand_entry_console.fp3dpack`
