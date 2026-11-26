# Domolux Specification: Domolux Architectural Gallery Picture-Rail System
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Architectural Gallery Picture-Rail System
- **German Name:** Domolux Architektonisches Galerie-Hängesystem
- **Arabic Name:** نظام تعليق لوحات المعارض المعماري دومولوكس
- **Unique Item ID:** `architectural_gallery_rail`
- **Unique Pack ID:** `domolux.architectural_gallery_rail`
- **Collection:** Exclusive Interior Furnishings, Art and Decor
- **Category:** Living Room
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 0.8m)
- **Placement Surface:** `false`
- **Target Environments:** `hall`, `living`, `dining`
- **Discovery Tags:** `gallery`, `rail`, `art`, `hanging`, `museum`, `canvas`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.00 m (200 cm)
- **Bounding Depth ($D$):** 0.15 m (15 cm)
- **Bounding Height ($H$):** 2.20 m (220 cm)
- **Geometric Parts:** 9 native components (Engine limit: 60)
- **Total Triangles:** 196 tris
- **Total Vertices:** 588 vertices
- **Architectural Edges:** 40 segments
- **Measured Bounding Box:** 2m × 0.13m × 1.87m

---

### 3. Design Concept & Architectural Expression
Ceiling-recessed museum picture hanging system with extruded bronze track, twin micro-braided steel suspension cables, and counterbalanced framed fine art canvas.

---

### 4. Component Breakdown & Geometry Table (9 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 0.85)` | `(0.96, 0.04)` | `#c5a059` | `glow` | Component #1 |
| 2 | `cyl` | `(-0.30, 0.05)` | `(0.01, 0.01)` | `(0.35, 0.60)` | `metal` | `none` | Component #2 |
| 3 | `cyl` | `(0.30, 0.05)` | `(0.01, 0.01)` | `(0.35, 0.60)` | `metal` | `none` | Component #3 |
| 4 | `box` | `(-0.30, 0.05)` | `(0.03, 0.03)` | `(0.94, 0.03)` | `#c5a059` | `none` | Component #4 |
| 5 | `box` | `(0.30, 0.05)` | `(0.03, 0.03)` | `(0.94, 0.03)` | `#c5a059` | `none` | Component #5 |
| 6 | `box` | `(0.00, 0.10)` | `(0.80, 0.40)` | `(0.15, 0.65)` | `#2d231b` (wood) | `true` | Component #6 |
| 7 | `box` | `(0.00, 0.12)` | `(0.72, 0.35)` | `(0.18, 0.59)` | `#f1ede6` (white) | `faint` | Component #7 |
| 8 | `box` | `(0.00, 0.28)` | `(0.24, 0.06)` | `(0.82, 0.03)` | `#c5a059` | `glow` | Component #8 |
| 9 | `box` | `(0.00, 0.28)` | `(0.22, 0.04)` | `(0.80, 0.02)` | `#fff5ea` | `glow` [glow] | Component #9 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `line` $(x_1: -0.50, z_1: 0.00, x_2: 0.50, z_2: 0.00)$
- **Shape 2:** `rect` $(x: 0.00, z: 0.10, w: 0.80, d: 0.40)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/architectural_gallery_rail.fp3dpack`
