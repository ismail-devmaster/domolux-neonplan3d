# Domolux Specification: Domolux Sculptural Architectural Heated Towel Rail
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Sculptural Architectural Heated Towel Rail
- **German Name:** Domolux Architektonischer Handtuchwärmer
- **Arabic Name:** مدفأة مناشف معمارية مسخنة دومولوكس
- **Unique Item ID:** `heated_towel_rail`
- **Unique Pack ID:** `domolux.heated_towel_rail`
- **Collection:** Complete Bathroom, Spa and Personal Wellness
- **Category:** Bathroom
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 0.8m)
- **Placement Surface:** `false`
- **Target Environments:** `bathroom`
- **Discovery Tags:** `towel_rail`, `radiator`, `heating`, `bronze`, `bathroom`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.60 m (60 cm)
- **Bounding Depth ($D$):** 0.12 m (12 cm)
- **Bounding Height ($H$):** 1.20 m (120 cm)
- **Geometric Parts:** 12 native components (Engine limit: 60)
- **Total Triangles:** 408 tris
- **Total Vertices:** 1224 vertices
- **Architectural Edges:** 16 segments
- **Measured Bounding Box:** 0.55m × 0.03m × 2.06m

---

### 3. Design Concept & Architectural Expression
Vertical architectural hydronic and electric dry-element towel radiator with brushed bronze square-profile vertical headers and horizontal cross-tubes.

---

### 4. Component Breakdown & Geometry Table (12 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.42, -0.42)` | `(0.08, 0.14)` | `(0.15, 0.08)` | `#1c1d22` | `none` | Component #1 |
| 2 | `box` | `(0.42, -0.42)` | `(0.08, 0.14)` | `(0.15, 0.08)` | `#1c1d22` | `none` | Component #2 |
| 3 | `box` | `(-0.42, -0.42)` | `(0.08, 0.14)` | `(0.85, 0.08)` | `#1c1d22` | `none` | Component #3 |
| 4 | `box` | `(0.42, -0.42)` | `(0.08, 0.14)` | `(0.85, 0.08)` | `#1c1d22` | `none` | Component #4 |
| 5 | `box` | `(-0.42, -0.28)` | `(0.08, 0.08)` | `(0.02, 0.96)` | `#c5a059` | `glow` | Component #5 |
| 6 | `box` | `(0.42, -0.28)` | `(0.08, 0.08)` | `(0.02, 0.96)` | `#c5a059` | `glow` | Component #6 |
| 7 | `cyl (x)` | `(0.00, -0.28)` | `(0.05, 0.05)` | `(0.16, 0.80)` | `#d4af37` | `none` | Component #7 |
| 8 | `cyl (x)` | `(0.00, -0.28)` | `(0.05, 0.05)` | `(0.32, 0.80)` | `#d4af37` | `none` | Component #8 |
| 9 | `cyl (x)` | `(0.00, -0.28)` | `(0.05, 0.05)` | `(0.48, 0.80)` | `#d4af37` | `none` | Component #9 |
| 10 | `cyl (x)` | `(0.00, -0.28)` | `(0.05, 0.05)` | `(0.64, 0.80)` | `#d4af37` | `none` | Component #10 |
| 11 | `cyl (x)` | `(0.00, -0.28)` | `(0.05, 0.05)` | `(0.80, 0.80)` | `#d4af37` | `none` | Component #11 |
| 12 | `cyl (x)` | `(0.00, -0.28)` | `(0.05, 0.05)` | `(0.94, 0.80)` | `#d4af37` | `none` | Component #12 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: -0.28, w: 0.92, d: 0.12)
- **Shape 2:** `line` $(x_1: -0.42, z_1: -0.28, x_2: 0.42, z_2: -0.28)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/heated_towel_rail.fp3dpack`
