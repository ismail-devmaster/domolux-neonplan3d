# Domolux Specification: Domolux Corner Architectural Acoustic Bass-Trap Monolith
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Corner Architectural Acoustic Bass-Trap Monolith
- **German Name:** Domolux Eck-Basstrap Akustiksäule
- **Arabic Name:** عمود مصيدة الترددات المنخفضة الزاوي لعزل الصوت دومولوكس
- **Unique Item ID:** `acoustic_bass_trap_tower`
- **Unique Pack ID:** `domolux.acoustic_bass_trap_tower`
- **Collection:** Private Media, Library and Game Rooms
- **Category:** Decor
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `office`
- **Discovery Tags:** `bass_trap`, `acoustic`, `cinema`, `corner`, `soundproofing`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.50 m (50 cm)
- **Bounding Depth ($D$):** 0.50 m (50 cm)
- **Bounding Height ($H$):** 2.20 m (220 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 72 tris
- **Total Vertices:** 216 vertices
- **Architectural Edges:** 32 segments
- **Measured Bounding Box:** 0.47m × 0.47m × 2.2m

---

### 3. Design Concept & Architectural Expression
Floor-to-ceiling corner-fit membrane bass absorber tower with high-density acoustic core, tailored charcoal fabric face, and brushed bronze corner revelation trims.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.94)` | `(0.00, 0.06)` | `#141518` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.92, 0.92)` | `(0.06, 0.90)` | `#23262d` (fabric) | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.00)` | `(0.94, 0.94)` | `(0.96, 0.04)` | `#141518` | `none` | Component #3 |
| 4 | `box` | `(-0.44, 0.44)` | `(0.03, 0.03)` | `(0.06, 0.90)` | `#c5a059` | `glow` | Component #4 |
| 5 | `box` | `(0.44, 0.44)` | `(0.03, 0.03)` | `(0.06, 0.90)` | `#c5a059` | `glow` | Component #5 |
| 6 | `box` | `(0.00, 0.46)` | `(0.03, 0.03)` | `(0.06, 0.90)` | `#c5a059` | `glow` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.94, d: 0.94)
- **Shape 2:** `line` $(x_1: -0.44, z_1: 0.44, x_2: 0.44, z_2: 0.44)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/acoustic_bass_trap_tower.fp3dpack`
