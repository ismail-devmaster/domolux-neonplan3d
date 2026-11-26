# Domolux Specification: Domolux Architectural Dipole Surround Column Loudspeaker
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Architectural Dipole Surround Column Loudspeaker
- **German Name:** Domolux Architektonischer Surround-Säulenlautsprecher
- **Arabic Name:** مكبر صوت محيطي عمودي بنظام التشتيت ثنائي القطب دومولوكس
- **Unique Item ID:** `surround_speaker_system`
- **Unique Pack ID:** `domolux.surround_speaker_system`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Living
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `office`
- **Discovery Tags:** `surround_speaker`, `audio`, `cinema`, `column`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.35 m (35 cm)
- **Bounding Depth ($D$):** 0.25 m (25 cm)
- **Bounding Height ($H$):** 0.95 m (95 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 60 tris
- **Total Vertices:** 180 vertices
- **Architectural Edges:** 32 segments
- **Measured Bounding Box:** 0.32m × 0.23m × 0.92m

---

### 3. Design Concept & Architectural Expression
Slender architectural surround sound monolith with dual-sided dipole ribbon tweeters, extruded bronze spine, and heavy weighted basalt base.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.92, 0.92)` | `(0.00, 0.08)` | `#181a1f` | `true` | Component #1 |
| 2 | `box` | `(0.00, -0.25)` | `(0.32, 0.28)` | `(0.08, 0.88)` | `#c5a059` | `glow` | Component #2 |
| 3 | `box` | `(0.00, 0.10)` | `(0.84, 0.52)` | `(0.08, 0.86)` | `#22252c` (dark) | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.36)` | `(0.78, 0.04)` | `(0.12, 0.80)` | `#2d323b` (fabric) | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.86, 0.78)` | `(0.94, 0.03)` | `#c5a059` | `glow` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.92, d: 0.92)
- **Shape 2:** `circle` $(x: 0.00, z: 0.10, r: 0.22)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/surround_speaker_system.fp3dpack`
