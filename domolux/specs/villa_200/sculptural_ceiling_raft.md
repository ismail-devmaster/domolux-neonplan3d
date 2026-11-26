# Domolux Specification: Domolux Sculptural Gypsum Ceiling Raft
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux Sculptural Gypsum Ceiling Raft
- **German Name:** Domolux Skulpturales Gips-Deckensegel
- **Arabic Name:** شراع سقفي جبسي نحتي دومولوكس
- **Unique Item ID:** `sculptural_ceiling_raft`
- **Unique Pack ID:** `domolux.sculptural_ceiling_raft`
- **Collection:** Architectural Interior Systems
- **Category:** Architectural Elements
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `ceiling`
- **Placement Surface:** `false`
- **Target Environments:** `living`, `dining`, `bedroom`
- **Discovery Tags:** `ceiling`, `raft`, `cove`, `floating`, `gypsum`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 2.80 m (280 cm)
- **Bounding Depth ($D$):** 2.00 m (200 cm)
- **Bounding Height ($H$):** 0.35 m (35 cm)
- **Geometric Parts:** 8 native components (Engine limit: 60)
- **Total Triangles:** 272 tris
- **Total Vertices:** 816 vertices
- **Architectural Edges:** 80 segments
- **Measured Bounding Box:** 2.8m × 2m × 0.35m

---

### 3. Design Concept & Architectural Expression
Floating organic multi-tiered gypsum ceiling raft with knife-edge shadow lines, hidden perimeter cove LED ambient wash, and recessed downlight ports.

---

### 4. Component Breakdown & Geometry Table (8 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.70, 0.70)` | `(0.75, 0.25)` | `#1a1b20` | `faint` | Component #1 |
| 2 | `box` | `(0.00, 0.00)` | `(0.85, 0.85)` | `(0.70, 0.03)` | `#ffe0b2` | `glow` [glow] | Component #2 |
| 3 | `loft` | `(0.00, 0.00)` | `(0.88, 0.88)` | `(0.25, 0.45)` | `#f8f9fa` (white) | `true` | Component #3 |
| 4 | `loft` | `(0.00, 0.00)` | `(0.55, 0.55)` | `(0.05, 0.20)` | `#eaecee` (white) | `true` | Component #4 |
| 5 | `cyl` | `(-0.20, -0.20)` | `(0.08, 0.08)` | `(0.00, 0.05)` | `#ffecb3` | `glow` [glow] | Component #5 |
| 6 | `cyl` | `(0.20, -0.20)` | `(0.08, 0.08)` | `(0.00, 0.05)` | `#ffecb3` | `glow` [glow] | Component #6 |
| 7 | `cyl` | `(-0.20, 0.20)` | `(0.08, 0.08)` | `(0.00, 0.05)` | `#ffecb3` | `glow` [glow] | Component #7 |
| 8 | `cyl` | `(0.20, 0.20)` | `(0.08, 0.08)` | `(0.00, 0.05)` | `#ffecb3` | `glow` [glow] | Component #8 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 1.00, d: 1.00)
- **Shape 2:** `rect` $(x: 0.00, z: 0.00, w: 0.60, d: 0.60)

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/sculptural_ceiling_raft.fp3dpack`
