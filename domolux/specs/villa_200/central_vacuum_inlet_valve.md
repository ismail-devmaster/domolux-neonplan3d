# Domolux Specification: Domolux Architectural Flush Central Vacuum Inlet Port
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Architectural Flush Central Vacuum Inlet Port
- **German Name:** Domolux Architektonische Zentralstaubsauger-Saugdose
- **Arabic Name:** منفذ شفط المكنسة المركزية الجداري المعماري الفاخر دومولوكس
- **Unique Item ID:** `central_vacuum_inlet_valve`
- **Unique Pack ID:** `domolux.central_vacuum_inlet_valve`
- **Collection:** Smart Home, Security and Residential Infrastructure
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 0.35m)
- **Placement Surface:** `false`
- **Target Environments:** `hallway`, `living`, `bedroom`
- **Discovery Tags:** `central_vacuum`, `suction_inlet`, `plumbing`, `cleaning`, `brass`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.15 m (15 cm)
- **Bounding Depth ($D$):** 0.06 m (6 cm)
- **Bounding Height ($H$):** 0.22 m (22 cm)
- **Geometric Parts:** 4 native components (Engine limit: 60)
- **Total Triangles:** 48 tris
- **Total Vertices:** 144 vertices
- **Architectural Edges:** 16 segments
- **Measured Bounding Box:** 0.14m × 0.05m × 0.21m

---

### 3. Design Concept & Architectural Expression
Low-profile spring-loaded central vacuum suction valve with magnetic soft-close flap, microswitch low-voltage trigger pins, and solid brass faceplate.

---

### 4. Component Breakdown & Geometry Table (4 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.40)` | `(0.88, 0.14)` | `(0.04, 0.92)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, -0.05)` | `(0.96, 0.08)` | `(0.02, 0.96)` | `#c5a059` | `glow` | Component #2 |
| 3 | `box` | `(0.00, 0.22)` | `(0.74, 0.04)` | `(0.15, 0.68)` | `#8a6d3b` | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.28)` | `(0.24, 0.04)` | `(0.18, 0.05)` | `#c5a059` | `none` | Component #4 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.40)
- **Shape 2:** `rect` $(x: 0.00, z: 0.22, w: 0.74, d: 0.10)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/central_vacuum_inlet_valve.fp3dpack`
