# Domolux Specification: Domolux Modular Architectural Wine Cellar Racking
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Modular Architectural Wine Cellar Racking
- **German Name:** Domolux Modulares Weinkeller-Regalsystem
- **Arabic Name:** نظام رفوف قبو النبيذ المعماري دومولوكس
- **Unique Item ID:** `modular_wine_cellar_racking`
- **Unique Pack ID:** `domolux.modular_wine_cellar_racking`
- **Collection:** Gourmet Kitchens and Specialty Culinary Equipment
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `true`
- **Target Environments:** `dining`, `kitchen`, `hall`
- **Discovery Tags:** `cellar`, `wine`, `racking`, `oak`, `diamond`, `sommelier`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.20 m (220 cm)
- **Bounding Depth ($D$):** 0.45 m (45 cm)
- **Bounding Height ($H$):** 2.50 m (250 cm)
- **Geometric Parts:** 10 native components (Engine limit: 60)
- **Total Triangles:** 120 tris
- **Total Vertices:** 360 vertices
- **Architectural Edges:** 56 segments
- **Measured Bounding Box:** 2.2m × 0.46m × 2.45m

---

### 3. Design Concept & Architectural Expression
Architectural cellar racking installation with modular diamond storage bins, individual bottle presentation racks in French oak, and recessed LED accent lighting.

---

### 4. Component Breakdown & Geometry Table (10 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.92)` | `(0.00, 0.04)` | `#16171b` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(1.00, 0.98)` | `(0.04, 0.94)` | `#3a2d23` (wood) | `true` | Component #2 |
| 3 | `box` | `(-0.25, 0.00)` | `(0.45, 0.85)` | `(0.06, 0.42)` | `#2d231b` (wood) | `true` | Component #3 |
| 4 | `box` | `(0.25, 0.00)` | `(0.45, 0.85)` | `(0.06, 0.42)` | `#2d231b` (wood) | `true` | Component #4 |
| 5 | `box` | `(-0.25, 0.00)` | `(0.03, 0.82)` | `(0.08, 0.38)` | `#47382c` (wood) | `none` | Component #5 |
| 6 | `box` | `(0.25, 0.00)` | `(0.03, 0.82)` | `(0.08, 0.38)` | `#47382c` (wood) | `none` | Component #6 |
| 7 | `box` | `(0.00, 0.05)` | `(0.96, 0.95)` | `(0.48, 0.04)` | `#c5a059` | `glow` | Component #7 |
| 8 | `box` | `(-0.25, 0.00)` | `(0.44, 0.85)` | `(0.54, 0.40)` | `#2d231b` (wood) | `true` | Component #8 |
| 9 | `box` | `(0.25, 0.00)` | `(0.44, 0.85)` | `(0.54, 0.40)` | `#2d231b` (wood) | `true` | Component #9 |
| 10 | `box` | `(0.00, 0.35)` | `(0.96, 0.04)` | `(0.95, 0.02)` | `#ffe0b2` | `glow` [glow] | Component #10 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.98)
- **Shape 2:** `line` $(x_1: -0.45, z_1: 0.00, x_2: 0.45, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/modular_wine_cellar_racking.fp3dpack`
