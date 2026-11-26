# Domolux Specification: Domolux Recessed Roof Skylight Lantern
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Recessed Roof Skylight Lantern
- **German Name:** Domolux Eingelassene Dach-Lichtkuppel
- **Arabic Name:** منور سقفي مدمج دومولوكس
- **Unique Item ID:** `recessed_roof_skylight`
- **Unique Pack ID:** `domolux.recessed_roof_skylight`
- **Collection:** Architectural Interior Systems
- **Category:** Architectural Elements
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `ceiling`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `hall`, `bath`, `kitchen`
- **Discovery Tags:** `skylight`, `roof`, `lantern`, `daylight`, `glass`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.20 m (220 cm)
- **Bounding Depth ($D$):** 1.60 m (160 cm)
- **Bounding Height ($H$):** 0.65 m (65 cm)
- **Geometric Parts:** 6 native components (Engine limit: 60)
- **Total Triangles:** 72 tris
- **Total Vertices:** 216 vertices
- **Architectural Edges:** 44 segments
- **Measured Bounding Box:** 2.2m × 1.6m × 0.65m

---

### 3. Design Concept & Architectural Expression
Architectural ceiling daylight well with double-glazed solar control insulated glass, flared white gypsum light shaft, and concealed LED solar simulation halo.

---

### 4. Component Breakdown & Geometry Table (6 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.85, 0.15)` | `#2a2d34` | `faint` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.94, 0.94)` | `(0.70, 0.20)` | `#475569` | `true` | Component #2 |
| 3 | `loft` | `(0.00, 0.00)` | `(0.75, 0.75)` | `(0.15, 0.60)` | `#f8fafc` (white) | `faint` | Component #3 |
| 4 | `box` | `(0.00, 0.00)` | `(0.76, 0.76)` | `(0.75, 0.03)` | `glass` | `true` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.78, 0.78)` | `(0.14, 0.02)` | `#fff7eb` | `glow` [glow] | Component #5 |
| 6 | `box` | `(0.00, 0.00)` | `(1.00, 1.00)` | `(0.00, 0.05)` | `#e2e8f0` (white) | `true` | Component #6 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.75, d: 0.75) [filled]
- **Shape 3:** `line` $(x_1: -0.50, z_1: -0.50, x_2: 0.50, z_2: 0.50)$
- **Shape 4:** `line` $(x_1: 0.50, z_1: -0.50, x_2: -0.50, z_2: 0.50)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/recessed_roof_skylight.fp3dpack`
