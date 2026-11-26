# Domolux Specification: Domolux Parquet Flooring Inlay System
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Parquet Flooring Inlay System
- **German Name:** Domolux Parkett-Bodenintarsie
- **Arabic Name:** نظام ترصيع أرضيات الباركيه دومولوكس
- **Unique Item ID:** `parquet_floor_inlay`
- **Unique Pack ID:** `domolux.parquet_floor_inlay`
- **Collection:** Architectural Interior Systems
- **Category:** Architectural Elements
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `true`
- **Target Environments:** `living`, `dining`, `hall`, `bedroom`
- **Discovery Tags:** `parquet`, `floor`, `wood`, `inlay`, `versailles`, `luxury`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.50 m (250 cm)
- **Bounding Depth ($D$):** 2.50 m (250 cm)
- **Bounding Height ($H$):** 0.03 m (3 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 72 tris
- **Total Vertices:** 216 vertices
- **Architectural Edges:** 48 segments
- **Measured Bounding Box:** 2.5m × 2.5m × 0.03m

---

### 3. Design Concept & Architectural Expression
Artisanal Versailles parquet floor module handcrafted with smoked French oak stiles, chevron walnut ribbons, brass stringer inlays, and satin polyurethane seal.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.00, 0.30)` | `#1c1917` | `faint` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.30, 0.70)` | `#443428` (wood) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.88, 0.88)` | `(0.35, 0.65)` | `#c5a059` | `glow` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.85, 0.85)` | `(0.40, 0.60)` | `#5c4736` (wood) | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.45, 0.45)` | `(0.45, 0.55)` | `#785e49` (wood) | `true` | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(0.20, 0.20)` | `(0.50, 0.50)` | `#c5a059` | `glow` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.85, d: 0.85)
- **Shape 3:** `line` $(x_1: -0.40, z_1: 0.00, x_2: 0.00, z_2: 0.40)$
- **Shape 4:** `line` $(x_1: 0.00, z_1: 0.40, x_2: 0.40, z_2: 0.00)$
- **Shape 5:** `line` $(x_1: 0.40, z_1: 0.00, x_2: 0.00, z_2: -0.40)$
- **Shape 6:** `line` $(x_1: 0.00, z_1: -0.40, x_2: -0.40, z_2: 0.00)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/parquet_floor_inlay.fp3dpack`
