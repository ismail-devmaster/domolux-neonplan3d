# Domolux Specification: Domolux Motorized Pull-Down Architectural Wardrobe Lift
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Motorized Pull-Down Architectural Wardrobe Lift
- **German Name:** Domolux Motorisierter Kleiderlift
- **Arabic Name:** شماعة الملابس الهيدروليكية المتحركة للملابس العالية دومولوكس
- **Unique Item ID:** `motorized_closet_rail`
- **Unique Pack ID:** `domolux.motorized_closet_rail`
- **Collection:** Master Suites, Guest Hospitality and Nursery
- **Category:** Storage
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 1.4m)
- **Placement Surface:** `false`
- **Target Environments:** `bedroom`, `storage`
- **Discovery Tags:** `closet_rail`, `wardrobe_lift`, `motorized`, `storage`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 1.00 m (100 cm)
- **Bounding Depth ($D$):** 0.35 m (35 cm)
- **Bounding Height ($H$):** 0.90 m (90 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 160 tris
- **Total Vertices:** 480 vertices
- **Architectural Edges:** 46 segments
- **Measured Bounding Box:** 1m × 0.24m × 0.86m

---

### 3. Design Concept & Architectural Expression
High-reach motorized pneumatic closet rail with soft-start lowering mechanism, integrated rechargeable lithium actuator, and champagne bronze hanging tube.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.46, -0.25)` | `(0.08, 0.42)` | `(0.30, 0.60)` | `#1c1e22` | `true` | Component #1 |
| 2 | `box` | `(0.46, -0.25)` | `(0.08, 0.42)` | `(0.30, 0.60)` | `#1c1e22` | `true` | Component #2 |
| 3 | `box` | `(-0.40, 0.05)` | `(0.03, 0.03)` | `(0.15, 0.70)` | `#c5a059` | `glow` | Component #3 |
| 4 | `box` | `(0.40, 0.05)` | `(0.03, 0.03)` | `(0.15, 0.70)` | `#c5a059` | `glow` | Component #4 |
| 5 | `cyl (x)` | `(0.00, 0.05)` | `(0.04, 0.04)` | `(0.15, 0.80)` | `#d4af37` | `glow` | Component #5 |
| 6 | `cyl` | `(0.00, 0.20)` | `(0.03, 0.03)` | `(0.00, 0.18)` | `#c5a059` | `none` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: -0.10, w: 0.98, d: 0.60)
- **Shape 2:** `line` $(x_1: -0.40, z_1: 0.05, x_2: 0.40, z_2: 0.05)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/motorized_closet_rail.fp3dpack`
