# Domolux Specification: Domolux Monumental Deadbolt Smart Keypad Lock
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Monumental Deadbolt Smart Keypad Lock
- **German Name:** Domolux Luxus-Sicherheitsschloss mit Touch-Tastatur
- **Arabic Name:** قفل الأمان الذكي للأبواب بلوحة مفاتيح لمسية مشعة دومولوكس
- **Unique Item ID:** `smart_keypad_lock`
- **Unique Pack ID:** `domolux.smart_keypad_lock`
- **Collection:** Smart Home, Security and Residential Infrastructure
- **Category:** Entryway
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `wall` (wall_y: 1.05m)
- **Placement Surface:** `false`
- **Target Environments:** `hallway`, `outdoor`
- **Discovery Tags:** `smart_lock`, `keypad`, `deadbolt`, `security`, `brass`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.08 m (8 cm)
- **Bounding Depth ($D$):** 0.06 m (6 cm)
- **Bounding Height ($H$):** 0.30 m (30 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 148 tris
- **Total Vertices:** 444 vertices
- **Architectural Edges:** 16 segments
- **Measured Bounding Box:** 0.08m × 0.05m × 0.29m

---

### 3. Design Concept & Architectural Expression
Heavy forged brass smart escutcheon with motorized high-torque deadbolt, capacitive anti-peep illuminated pin keypad, Apple HomeKey NFC tap, and concealed mechanical cylinder.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.40)` | `(0.88, 0.15)` | `(0.04, 0.92)` | `#16171b` | `none` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.96, 0.65)` | `(0.02, 0.96)` | `#c5a059` | `glow` | Component #2 |
| 3 | `box` | `(0.00, 0.28)` | `(0.74, 0.04)` | `(0.52, 0.38)` | `#ffffff` | `true` [glow] | Component #3 |
| 4 | `cyl (z)` | `(0.00, 0.28)` | `(0.25, 0.25)` | `(0.35, 0.03)` | `#00e5ff` | `none` [glow] | Component #4 |
| 5 | `cyl (z)` | `(0.00, 0.28)` | `(0.18, 0.18)` | `(0.12, 0.03)` | `#8a6d3b` | `none` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.96, d: 0.65)
- **Shape 2:** `circle` $(x: 0.00, z: 0.28, r: 0.12)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/smart_keypad_lock.fp3dpack`
