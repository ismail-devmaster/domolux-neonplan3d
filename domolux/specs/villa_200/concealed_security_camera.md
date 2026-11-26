# Domolux Specification: Domolux Architectural Flush-Mount Micro PTZ Dome Camera
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Architectural Flush-Mount Micro PTZ Dome Camera
- **German Name:** Domolux Architektonische Decken-Überwachungskamera
- **Arabic Name:** كاميرا المراقبة المعمارية السقفية المخفية بزجاج مدخن دومولوكس
- **Unique Item ID:** `concealed_security_camera`
- **Unique Pack ID:** `domolux.concealed_security_camera`
- **Collection:** Smart Home, Security and Residential Infrastructure
- **Category:** Lighting
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `ceiling`
- **Placement Surface:** `false`
- **Target Environments:** `hallway`, `living`, `outdoor`
- **Discovery Tags:** `camera`, `security`, `ptz`, `cctv`, `ceiling`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.14 m (14 cm)
- **Bounding Depth ($D$):** 0.14 m (14 cm)
- **Bounding Height ($H$):** 0.12 m (12 cm)
- **Geometric Parts:** 3 native components (Engine limit: 60)
- **Total Triangles:** 124 tris
- **Total Vertices:** 372 vertices
- **Architectural Edges:** 18 segments
- **Measured Bounding Box:** 0.13m × 0.13m × 0.09m

---

### 3. Design Concept & Architectural Expression
Flush ceiling-recessed 4K optical zoom micro-dome camera with optically neutral smoked acrylic half-sphere dome, silent magnetic stepper pan-tilt, and infrared illuminator ring.

---

### 4. Component Breakdown & Geometry Table (3 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `cyl` | `(0.00, 0.00)` | `(0.96, 0.96)` | `(0.88, 0.10)` | `#c5a059` | `glow` | Component #1 |
| 2 | `loft` | `(0.00, 0.00)` | `(0.82, 0.82)` | `(0.25, 0.65)` | `#141820` (glass) | `true` | Component #2 |
| 3 | `cyl` | `(0.00, 0.00)` | `(0.35, 0.35)` | `(0.45, 0.35)` | `#00e5ff` | `none` [glow] | Component #3 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `circle` $(x: 0.00, z: 0.00, r: 0.48)$
- **Shape 2:** `circle` $(x: 0.00, z: 0.00, r: 0.18)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/concealed_security_camera.fp3dpack`
