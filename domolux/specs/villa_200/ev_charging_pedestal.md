# Domolux Specification: Domolux 22kW High-Output Architectural EV Fast-Charging Pedestal
## Ultimate Luxury Villa Ecosystem 200 — Technical Asset File

### 1. Identity & Classification
- **English Name:** Domolux 22kW High-Output Architectural EV Fast-Charging Pedestal
- **German Name:** Domolux 22kW Designer-Ladestation für Elektrofahrzeuge
- **Arabic Name:** محطة شحن السيارات الكهربائية السريعة المعمارية دومولوكس
- **Unique Item ID:** `ev_charging_pedestal`
- **Unique Pack ID:** `domolux.ev_charging_pedestal`
- **Collection:** Smart Home, Security and Residential Infrastructure
- **Category:** Entryway
- **Publisher:** Domolux Studio
- **Publisher Key ID:** `d08c59237e4f`
- **Mount Classification:** `floor`
- **Placement Surface:** `false`
- **Target Environments:** `outdoor`
- **Discovery Tags:** `ev_charger`, `electric_vehicle`, `charging_station`, `pedestal`, `outdoor`, `domolux`

---

### 2. Physical & Dimensional Engineering
- **Bounding Width ($W$):** 0.38 m (38 cm)
- **Bounding Depth ($D$):** 0.28 m (28 cm)
- **Bounding Height ($H$):** 1.45 m (145 cm)
- **Geometric Parts:** 5 native components (Engine limit: 60)
- **Total Triangles:** 148 tris
- **Total Vertices:** 444 vertices
- **Architectural Edges:** 12 segments
- **Measured Bounding Box:** 0.36m × 0.29m × 1.45m

---

### 3. Design Concept & Architectural Expression
Monolithic outdoor EV charging pylon with integrated 22kW Type 2 cable management reel, illuminated RFID authentication dial, and brushed bronze armor.

---

### 4. Component Breakdown & Geometry Table (5 Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Span ($w, d$) | Height ($y, h$) | Finish / Role / Hex | Accents / Edges | Real-World Function |
|---|---|---|---|---|---|---|---|
| 1 | `box` | `(0.00, 0.00)` | `(0.94, 0.94)` | `(0.00, 0.08)` | `#141518` | `none` | Component #1 |
| 2 | `loft` | `(0.00, 0.00)` | `(0.88, 0.84)` | `(0.08, 0.88)` | `#22252c` (dark) | `true` | Component #2 |
| 3 | `cyl (z)` | `(0.00, 0.36)` | `(0.42, 0.42)` | `(0.65, 0.03)` | `#00e5ff` | `none` [glow] | Component #3 |
| 4 | `cyl (z)` | `(0.00, 0.36)` | `(0.25, 0.25)` | `(0.40, 0.05)` | `#111215` | `none` | Component #4 |
| 5 | `box` | `(0.00, 0.00)` | `(0.80, 0.78)` | `(0.96, 0.04)` | `#c5a059` | `glow` | Component #5 |

---

### 5. 2D Architectural CAD Plan Symbol
- **Shape 1:** `rect` $(x: 0.00, z: 0.00, w: 0.88, d: 0.84)
- **Shape 2:** `circle` $(x: 0.00, z: 0.36, r: 0.20)$

---

### 6. Cryptographic Signature & Verification
- **Package Status:** Signed & Independently Verified
- **Signature Algorithm:** Ed25519 (Raw 32-byte public key)
- **Canonical Payload Encoding:** UTF-8 sorted key JSON
- **Package Distribution Path:** `domolux/dist/villa_200/ev_charging_pedestal.fp3dpack`
