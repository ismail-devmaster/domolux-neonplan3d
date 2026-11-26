# Domolux Specification: Domolux Rotational Glass and Brass Climate Thermostat Dial
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Rotational Glass and Brass Climate Thermostat Dial
- **German Name:** Domolux Designer-Raumthermostat mit Drehring
- **Arabic Name:** منظم الحرارة والمناخ الذكي بحلقة نحاسية وشاشة رقمية دومولوكس
- **Unique Item ID:** `smart_thermostat_console`
- **Unique Pack ID:** `domolux.smart_thermostat_console`
- **Collection:** Smart Home, Security and Residential Infrastructure
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 1.45m)
- **Placement Surface:** `false`
- **Target Environments:** `living`, `bedroom`, `hallway`
- **Discovery Tags:** `thermostat`, `climate`, `hvac`, `brass`, `rotary`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.14 m (14 cm)
- **Bounding Depth ($D$):** 0.04 m (4 cm)
- **Bounding Height ($H$):** 0.14 m (14 cm)
- **Geometric Parts:** 4 native components (Engine limit: 60)
- **Total Triangles:** 224 tris
- **Total Vertices:** 672 vertices
- **Architectural Edges:** 14 segments
- **Measured Bounding Box:** 0.04m × 0.06m × 0.06m

---

### 3. Design Concept & Architectural Expression
Rotational wall climate dial featuring a knurled solid brass rotary outer bezel, high-contrast round AMOLED display, and integrated radar proximity wake-up.

---

### 4. Component Breakdown & Geometry Table (4 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl (z)` | `(0.00, -0.42)` | `(0.90, 0.90)` | `(0.05, 0.12)` | `#141518` | `none` | Component #1 |
| 2 | `cyl (z)` | `(0.00, 0.00)` | `(0.96, 0.96)` | `(0.02, 0.42)` | `#c5a059` | `glow` | Component #2 |
| 3 | `cyl (z)` | `(0.00, 0.26)` | `(0.76, 0.76)` | `(0.12, 0.05)` | `#000000` (dark) | `none` | Component #3 |
| 4 | `cyl (z)` | `(0.00, 0.28)` | `(0.42, 0.42)` | `(0.28, 0.02)` | `#ff9800` | `none` [glow] | Component #4 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `circle` $(x: 0.00, z: 0.00, r: 0.48)$
- **Shape 2:** `circle` $(x: 0.00, z: 0.26, r: 0.38)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/smart_thermostat_console.fp3dpack`
