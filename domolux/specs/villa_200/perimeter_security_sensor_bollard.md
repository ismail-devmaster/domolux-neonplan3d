# Domolux Specification: Domolux Estate Perimeter Active-Infrared Security Bollard
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Estate Perimeter Active-Infrared Security Bollard
- **German Name:** Domolux Perimeter-Sicherheits- und Sensorpoller
- **Arabic Name:** عمود أمان واستشعار محيطي للأراضي والحدائق الفاخرة دومولوكس
- **Unique Item ID:** `perimeter_security_sensor_bollard`
- **Unique Pack ID:** `domolux.perimeter_security_sensor_bollard`
- **Collection:** Smart Home, Security and Residential Infrastructure
- **Category:** Entryway
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`, `hallway`
- **Discovery Tags:** `bollard`, `perimeter`, `security`, `infrared`, `radar`, `outdoor`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.22 m (22 cm)
- **Bounding Depth ($D$):** 0.22 m (22 cm)
- **Bounding Height ($H$):** 1.05 m (105 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 60 tris
- **Total Vertices:** 180 vertices
- **Architectural Edges:** 16 segments
- **Measured Bounding Box:** 0.21m × 0.21m × 1.03m

---

### 3. Design Concept & Architectural Expression
Substantial architectural bronze perimeter bollard concealing multi-beam active infrared intrusion sensors, microwave radar, and discreet pathway wash lighting.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.94)` | `(0.00, 0.08)` | `#181a1f` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.82, 0.82)` | `(0.08, 0.84)` | `#2e251e` (dark) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.38)` | `(0.44, 0.06)` | `(0.25, 0.58)` | `#8b0000` | `none` [glow] | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.86, 0.86)` | `(0.92, 0.06)` | `#c5a059` | `glow` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.80, 0.80)` | `(0.88, 0.04)` | `#fff3cc` | `none` [glow] | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.94, d: 0.94)
- **Shape 2:** `rect` $(x: 0.00, z: 0.38, w: 0.44, d: 0.06)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/perimeter_security_sensor_bollard.fp3dpack`
