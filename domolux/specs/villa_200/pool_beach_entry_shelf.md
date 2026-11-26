# Domolux Specification: Domolux Baja Beach-Entry Shallow Sun Shelf Platform
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Baja Beach-Entry Shallow Sun Shelf Platform
- **German Name:** Domolux Flachwasser-Baja-Shelf & Sonnenplattform
- **Arabic Name:** منصة التشميس والشاطئ المائي الضحل لحوض السباحة دومولوكس
- **Unique Item ID:** `pool_beach_entry_shelf`
- **Unique Pack ID:** `domolux.pool_beach_entry_shelf`
- **Collection:** Private Estate, Outdoor Architecture and Landscape
- **Category:** Outdoor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `baja_shelf`, `pool`, `tanning_ledge`, `sun_shelf`, `outdoor`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 3.50 m (350 cm)
- **Bounding Depth ($D$):** 2.50 m (250 cm)
- **Bounding Height ($H$):** 0.45 m (45 cm)
- **Geometric Parts:** 4 native components (Engine limit: 60)
- **Total Triangles:** 92 tris
- **Total Vertices:** 276 vertices
- **Architectural Edges:** 30 segments
- **Measured Bounding Box:** 3.43m × 2.45m × 0.4m

---

### 3. Design Concept & Architectural Expression
Shallow resort-style pool tanning ledge designed for in-water chaise loungers, featuring 20cm water depth, integrated umbrella sleeve, and non-slip quartz aggregate.

---

### 4. Component Breakdown & Geometry Table (4 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.98, 0.98)` | `(0.00, 0.88)` | `#1e2229` | `true` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.90, 0.90)` | `(0.42, 0.25)` | `#e8ecef` (white) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.88, 0.88)` | `(0.68, 0.04)` | `#90e0ef` (glass) | `none` [glow] | Component #3 |
| 4 | `cyl` | `(0.00, 0.00)` | `(0.08, 0.08)` | `(0.65, 0.08)` | `#c5a059` | `glow` | Component #4 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.98, d: 0.98)
- **Shape 2:** `circle` $(x: 0.00, z: 0.00, r: 0.06)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/pool_beach_entry_shelf.fp3dpack`
