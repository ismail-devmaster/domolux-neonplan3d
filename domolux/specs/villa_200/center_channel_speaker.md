# Domolux Specification: Domolux Reference Tri-Amplified Center Channel Speaker
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Reference Tri-Amplified Center Channel Speaker
- **German Name:** Domolux 3-Wege Referenz-Center-Lautsprecher
- **Arabic Name:** مكبر صوت مركزي ثلاثي المنافذ للسينما المنزلية دومولوكس
- **Unique Item ID:** `center_channel_speaker`
- **Unique Pack ID:** `domolux.center_channel_speaker`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `surface`
- **Placement Surface:** `true`
- **Target Environments:** `living`, `office`
- **Discovery Tags:** `center_speaker`, `audio`, `cinema`, `hifi`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.85 m (85 cm)
- **Bounding Depth ($D$):** 0.35 m (35 cm)
- **Bounding Height ($H$):** 0.28 m (28 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 236 tris
- **Total Vertices:** 708 vertices
- **Architectural Edges:** 46 segments
- **Measured Bounding Box:** 0.82m × 0.37m × 0.26m

---

### 3. Design Concept & Architectural Expression
Horizontal 3-way reference dialogue loudspeaker featuring dual 8-inch Rohacell bass drivers, a pure beryllium dome tweeter, and curved acoustic enclosure.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `loft` | `(0.00, 0.00)` | `(0.96, 0.92)` | `(0.04, 0.92)` | `#141519` (dark) | `true` | Component #1 |
| 2 | `cyl (z)` | `(-0.32, 0.44)` | `(0.26, 0.26)` | `(0.22, 0.03)` | `#c5a059` | `glow` | Component #2 |
| 3 | `cyl (z)` | `(0.32, 0.44)` | `(0.26, 0.26)` | `(0.22, 0.03)` | `#c5a059` | `glow` | Component #3 |
| 4 | `cyl (z)` | `(0.00, 0.44)` | `(0.20, 0.20)` | `(0.28, 0.03)` | `#3d424d` | `none` | Component #4 |
| 5 | `cyl (z)` | `(0.00, 0.44)` | `(0.10, 0.10)` | `(0.65, 0.03)` | `#d4af37` | `glow` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.92)
- **Shape 2:** `circle` $(x: -0.32, z: 0.44, r: 0.12)$
- **Shape 3:** `circle` $(x: 0.00, z: 0.44, r: 0.09)$
- **Shape 4:** `circle` $(x: 0.32, z: 0.44, r: 0.12)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/center_channel_speaker.fp3dpack`
