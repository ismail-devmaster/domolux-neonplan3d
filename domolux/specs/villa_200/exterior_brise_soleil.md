# Domolux Specification: Domolux Exterior Architectural Brise-Soleil Screen
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Exterior Architectural Brise-Soleil Screen
- **German Name:** Domolux Architektonischer Sonnenschutz-Lamellenraster
- **Arabic Name:** كاسر شمس معمارية خارجية دومولوكس
- **Unique Item ID:** `exterior_brise_soleil`
- **Unique Pack ID:** `domolux.exterior_brise_soleil`
- **Collection:** Doors, Windows, Entrances and Exterior Envelope
- **Category:** Doors & Windows
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 0m)
- **Placement Surface:** `false`
- **Target Environments:** `terrace`, `living`
- **Discovery Tags:** `shading`, `brise-soleil`, `louvers`, `facade`, `solar`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.60 m (260 cm)
- **Bounding Depth ($D$):** 0.45 m (45 cm)
- **Bounding Height ($H$):** 3.20 m (320 cm)
- **Geometric Parts:** 10 native components (Engine limit: 60)
- **Total Triangles:** 120 tris
- **Total Vertices:** 360 vertices
- **Architectural Edges:** 48 segments
- **Measured Bounding Box:** 2.55m × 0.38m × 3.2m

---

### 3. Design Concept & Architectural Expression
Façade architectural solar shading screen composed of motorized aerodynamic extruded aluminum blades finished in champagne bronze with smart solar tracking integration.

---

### 4. Component Breakdown & Geometry Table (10 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(-0.45, 0.00)` | `(0.08, 0.85)` | `(0.00, 1.00)` | `#473824` | `glow` | Component #1 |
| 2 | `box` | `(0.45, 0.00)` | `(0.08, 0.85)` | `(0.00, 1.00)` | `#473824` | `glow` | Component #2 |
| 3 | `loft` | `(0.00, 0.08)` | `(0.90, 0.70)` | `(0.08, 0.03)` | `#c5a059` | `glow` | Component #3 |
| 4 | `loft` | `(0.00, 0.08)` | `(0.90, 0.70)` | `(0.20, 0.03)` | `#c5a059` | `glow` | Component #4 |
| 5 | `loft` | `(0.00, 0.08)` | `(0.90, 0.70)` | `(0.32, 0.03)` | `#c5a059` | `glow` | Component #5 |
| 6 | `loft` | `(0.00, 0.08)` | `(0.90, 0.70)` | `(0.44, 0.03)` | `#c5a059` | `glow` | Component #6 |
| 7 | `loft` | `(0.00, 0.08)` | `(0.90, 0.70)` | `(0.56, 0.03)` | `#c5a059` | `glow` | Component #7 |
| 8 | `loft` | `(0.00, 0.08)` | `(0.90, 0.70)` | `(0.68, 0.03)` | `#c5a059` | `glow` | Component #8 |
| 9 | `loft` | `(0.00, 0.08)` | `(0.90, 0.70)` | `(0.80, 0.03)` | `#c5a059` | `glow` | Component #9 |
| 10 | `loft` | `(0.00, 0.08)` | `(0.90, 0.70)` | `(0.92, 0.03)` | `#c5a059` | `glow` | Component #10 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 0.85)
- **Shape 2:** `line` $(x_1: -0.40, z_1: 0.10, x_2: 0.40, z_2: 0.10)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/exterior_brise_soleil.fp3dpack`
