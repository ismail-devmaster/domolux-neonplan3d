# Domolux Specification: Domolux Precision Sous-Vide Cooking Station
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Precision Sous-Vide Cooking Station
- **German Name:** Domolux Präzisions-Sous-Vide-Garstation
- **Arabic Name:** محطة طهي سو-فيد دقيقة دومولوكس
- **Unique Item ID:** `sous_vide_cooking_station`
- **Unique Pack ID:** `domolux.sous_vide_cooking_station`
- **Collection:** Gourmet Kitchens and Specialty Culinary Equipment
- **Category:** Kitchen
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `surface`
- **Placement Surface:** `false`
- **Target Environments:** `kitchen`
- **Discovery Tags:** `sous-vide`, `immersion`, `culinary`, `cooker`, `bath`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.38 m (38 cm)
- **Bounding Depth ($D$):** 0.48 m (48 cm)
- **Bounding Height ($H$):** 0.38 m (38 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 148 tris
- **Total Vertices:** 444 vertices
- **Architectural Edges:** 52 segments
- **Measured Bounding Box:** 0.35m × 0.41m × 0.38m

---

### 3. Design Concept & Architectural Expression
Countertop culinary immersion thermal bath station featuring circulating heating impeller, insulated clear polycarbonate bath with rack dividers, and WiFi touch head.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, -0.05)` | `(0.92, 0.85)` | `(0.00, 0.08)` | `metal` | `true` | Component #1 |
| 2 | `box` | `(0.00, -0.05)` | `(0.88, 0.80)` | `(0.08, 0.55)` | `glass` | `true` | Component #2 |
| 3 | `cyl` | `(0.00, -0.32)` | `(0.16, 0.16)` | `(0.12, 0.85)` | `#1c1d22` | `true` | Component #3 |
| 4 | `cyl` | `(0.00, -0.32)` | `(0.15, 0.15)` | `(0.95, 0.04)` | `#38bdf8` | `glow` [glow] | Component #4 |
| 5 | `box` | `(0.00, -0.05)` | `(0.82, 0.75)` | `(0.48, 0.02)` | `#00e5ff` | `glow` [glow] | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: -0.05, w: 0.88, d: 0.80)
- **Shape 2:** `circle` $(x: 0.00, z: -0.32, r: 0.08)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/sous_vide_cooking_station.fp3dpack`
