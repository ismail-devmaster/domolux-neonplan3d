# Domolux Specification: Domolux Precision Architectural Air-Quality Environmental Sensor
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Precision Architectural Air-Quality Environmental Sensor
- **German Name:** Domolux Architektonischer Raumluft-Sensor
- **Arabic Name:** مستشعر جودة الهواء والبيئة الداخلية الذكي دومولوكس
- **Unique Item ID:** `indoor_air_quality_monitor`
- **Unique Pack ID:** `domolux.indoor_air_quality_monitor`
- **Collection:** Smart Home, Security and Residential Infrastructure
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 1.45m)
- **Placement Surface:** `false`
- **Target Environments:** `living`, `bedroom`, `office`
- **Discovery Tags:** `air_quality`, `sensor`, `co2`, `environment`, `wellness`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.16 m (16 cm)
- **Bounding Depth ($D$):** 0.06 m (6 cm)
- **Bounding Height ($H$):** 0.16 m (16 cm)
- **Geometric Parts:** 4 native components (Engine limit: 60)
- **Total Triangles:** 224 tris
- **Total Vertices:** 672 vertices
- **Architectural Edges:** 14 segments
- **Measured Bounding Box:** 0.06m × 0.09m × 0.06m

---

### 3. Design Concept & Architectural Expression
Minimalist wall sensor housing laser particulate PM2.5, NDIR CO2, VOC, humidity, and barometric sensors within a milled brass and frosted optical glass disc.

---

### 4. Component Breakdown & Geometry Table (4 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl (z)` | `(0.00, -0.40)` | `(0.88, 0.88)` | `(0.05, 0.12)` | `#141518` | `none` | Component #1 |
| 2 | `cyl (z)` | `(0.00, 0.00)` | `(0.96, 0.96)` | `(0.02, 0.35)` | `#c5a059` | `glow` | Component #2 |
| 3 | `cyl (z)` | `(0.00, 0.22)` | `(0.82, 0.82)` | `(0.08, 0.12)` | `#e8ecef` (glass) | `none` | Component #3 |
| 4 | `cyl (z)` | `(0.00, 0.24)` | `(0.60, 0.60)` | `(0.18, 0.04)` | `#00e676` | `none` [glow] | Component #4 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `circle` $(x: 0.00, z: 0.00, r: 0.48)$
- **Shape 2:** `circle` $(x: 0.00, z: 0.24, r: 0.30)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/indoor_air_quality_monitor.fp3dpack`
