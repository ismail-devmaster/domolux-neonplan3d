# Domolux Specification: Domolux Compact Steam Oven
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Compact Steam Oven
- **German Name:** Domolux Kompakt-Dampfbackofen
- **Arabic Name:** فرن بخاري مدمج فاخر دومولوكس
- **Unique Item ID:** `compact_steam_oven`
- **Unique Pack ID:** `domolux.compact_steam_oven`
- **Collection:** Gourmet Kitchens and Specialty Culinary Equipment
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `surface`
- **Placement Surface:** `true`
- **Target Environments:** `kitchen`
- **Discovery Tags:** `steam`, `oven`, `sous-vide`, `culinary`, `kitchen`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.60 m (60 cm)
- **Bounding Depth ($D$):** 0.55 m (55 cm)
- **Bounding Height ($H$):** 0.45 m (45 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 116 tris
- **Total Vertices:** 348 vertices
- **Architectural Edges:** 54 segments
- **Measured Bounding Box:** 0.6m × 0.55m × 0.62m

---

### 3. Design Concept & Architectural Expression
Precision culinary sous-vide steam oven with external boiler generation, motor-lifted fascia revealing motorized water cartridge, and sous-vide cooking programs.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.00, 1.00)` | `#1c1d22` | `true` | Component #1 |
| 2 | `box` | `(0.00, 0.48)` | `(0.98, 0.03)` | `(0.00, 0.75)` | `#111215` | `true` | Component #2 |
| 3 | `box` | `(0.00, 0.48)` | `(0.68, 0.01)` | `(0.10, 0.55)` | `glass` | `true` | Component #3 |
| 4 | `box` | `(0.00, 0.48)` | `(0.98, 0.03)` | `(0.78, 0.20)` | `#25272e` | `glow` | Component #4 |
| 5 | `box` | `(0.00, 0.48)` | `(0.45, 0.01)` | `(0.82, 0.12)` | `#00e5ff` | `glow` [glow] | Component #5 |
| 6 | `cyl (x)` | `(0.00, 0.48)` | `(0.03, 0.03)` | `(0.66, 0.72)` | `#c5a059` | `glow` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
- **Shape 2:** `rect` $(x: 0.00, z: 0.48, w: 0.68, d: 0.04)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/compact_steam_oven.fp3dpack`
