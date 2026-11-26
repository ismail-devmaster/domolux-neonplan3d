# Domolux Specification: Domolux Motorized Exterior Roller Shutter
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Motorized Exterior Roller Shutter
- **German Name:** Domolux Motorisierter Sicherheits-Rollladen
- **Arabic Name:** شيش حصيرة خارجي آلي دومولوكس
- **Unique Item ID:** `exterior_roller_shutter`
- **Unique Pack ID:** `domolux.exterior_roller_shutter`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 0m)
- **Placement Surface:** `false`
- **Target Environments:** `living`, `bedroom`
- **Discovery Tags:** `shutter`, `roller`, `security`, `storm`, `motorized`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.00 m (200 cm)
- **Bounding Depth ($D$):** 0.28 m (28 cm)
- **Bounding Height ($H$):** 2.60 m (260 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 60 tris
- **Total Vertices:** 180 vertices
- **Architectural Edges:** 40 segments
- **Measured Bounding Box:** 2m × 0.25m × 2.6m

---

### 3. Design Concept & Architectural Expression
Insulated extruded aluminum security roller shutter with flush-mounted exterior box, polyurethane foam core slats, anti-lift locks, and silent electric tubular motor.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 0.90)` | `(0.85, 0.15)` | `#1f2228` | `true` | Component #1 |
| 2 | `box` | `(-0.47, 0.00)` | `(0.06, 0.60)` | `(0.00, 0.85)` | `#1f2228` | `true` | Component #2 |
| 3 | `box` | `(0.47, 0.00)` | `(0.06, 0.60)` | `(0.00, 0.85)` | `#1f2228` | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.88, 0.25)` | `(0.02, 0.83)` | `#333842` | `faint` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.88, 0.35)` | `(0.00, 0.04)` | `#111215` | `true` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.90)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.40) [filled]

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/exterior_roller_shutter.fp3dpack`
