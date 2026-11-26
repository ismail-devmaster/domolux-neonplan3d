# Domolux Specification: Domolux Early-Streamer-Emission Architectural Lightning Protection Terminal
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Early-Streamer-Emission Architectural Lightning Protection Terminal
- **German Name:** Domolux Architektonischer Blitzschutz-Endpol ESE
- **Arabic Name:** نظام الحماية المعماري من الصواعق بتقنية التفريغ المسبق دومولوكس
- **Unique Item ID:** `lightning_protection_terminal`
- **Unique Pack ID:** `domolux.lightning_protection_terminal`
- **Collection:** Smart Home, Security and Residential Infrastructure
- **Category:** Appliances
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `roof`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `lightning_rod`, `ese`, `protection`, `safety`, `roof`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.25 m (25 cm)
- **Bounding Depth ($D$):** 0.25 m (25 cm)
- **Bounding Height ($H$):** 1.20 m (120 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 236 tris
- **Total Vertices:** 708 vertices
- **Architectural Edges:** 46 segments
- **Measured Bounding Box:** 0.22m × 0.21m × 1.2m

---

### 3. Design Concept & Architectural Expression
Rooftop Early Streamer Emission (ESE) lightning air terminal crafted from solid chrome-plated copper and bronze, featuring high-voltage ion generator fins and grounding collar.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(0.00, 0.00)` | `(0.88, 0.88)` | `(0.00, 0.08)` | `#141518` | `none` | Component #1 |
| 2 | `cyl` | `(0.00, 0.00)` | `(0.45, 0.45)` | `(0.08, 0.18)` | `#c5a059` | `glow` | Component #2 |
| 3 | `cyl` | `(0.00, 0.00)` | `(0.12, 0.12)` | `(0.26, 0.58)` | `metal` | `true` | Component #3 |
| 4 | `loft` | `(0.00, 0.00)` | `(0.72, 0.72)` | `(0.62, 0.18)` | `#c5a059` | `glow` | Component #4 |
| 5 | `cyl` | `(0.00, 0.00)` | `(0.04, 0.04)` | `(0.84, 0.16)` | `metal` | `glow` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `circle` $(x: 0.00, z: 0.00, r: 0.44)$
- **Shape 2:** `circle` $(x: 0.00, z: 0.00, r: 0.18)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/lightning_protection_terminal.fp3dpack`
