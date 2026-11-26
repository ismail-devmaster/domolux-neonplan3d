# 05. Furniture Inventory Report

## Executive Summary
This document establishes the inventory of furniture and assets present in the user's 3D residence and differentiates placed scene objects from the broader Domolux asset catalog.

---

## 1. Asset Catalog Verification

The Domolux ecosystem assets available in the local repository were inventoried and verified:

- **Built-in Core Assets (`frontend/src/library-index.ts`):** 81 baseline procedural/standard assets (sofas, tables, beds, lamps, kitchen modules, sanitary appliances, radiators).
- **Domolux Private Collection 30 (`domolux/dist/`):** 32 curated luxury packs (`.fp3dpack`) including cinema recliner, massage chair, wine cabinet, sculptural fireplace, laser projector, executive desk.
- **Domolux Villa 200 Collection (`domolux/dist/villa_200/`):** 200 specialized architectural and interior luxury packs (`.fp3dpack`) spanning bioclimatic pergolas, hammam rooms, flush doors, bowling lanes, golf putting greens, flight simulator cockpits, and master smart-home consoles.
- **Total Ecosystem Asset Catalog:** **313 assets.**

> [!IMPORTANT]
> **Strict Anti-Hallucination Directive:**
> The existence of 313 assets in the catalog does **not** indicate that all 313 items are placed inside the user's home. Catalog items and placed scene instances must never be conflated.

---

## 2. Placed Furniture in the Actual 3D Home

### 2.1 Persistence Architecture
Placed furniture items are stored as instances conforming to `FURNITURE_SCHEMA` inside `/config/.storage/neonplan3d.building`:
```python
FURNITURE_SCHEMA = vol.Schema({
    vol.Required("id"): _ID,
    vol.Required("type"): vol.All(str, vol.Length(max=96)),
    vol.Required("x"): _COORD,
    vol.Required("z"): _COORD,
    vol.Required("rotation"): vol.Coerce(float),
    vol.Required("w"): _LENGTH,
    vol.Required("d"): _LENGTH,
    vol.Required("h"): _LENGTH,
    vol.Required("variant"): vol.Any(None, vol.All(str, vol.Length(max=32))),
    vol.Optional("name"): vol.Any(None, vol.All(str, vol.Length(max=60))),
    vol.Optional("entity"): _ENTITY_REF,
    vol.Optional("power"): _ENTITY_REF,
    vol.Optional("finish"): FINISH_SCHEMA,
    vol.Optional("binds"): dict,
})
```

### 2.2 Inspection Findings Through Configured MCP Connection
- **Pure 3D Decorative Furniture:** Static, non-electric furniture instances (such as standard sofas, dining tables, rugs, and decorative chairs that do not bind to Home Assistant entities) exist exclusively within the 3D scene file `/config/.storage/neonplan3d.building`.
- **Access Status via HA MCP:** Because the Home Assistant MCP tools do not expose WebSocket endpoints (`neonplan3d/building/get`) and do not provide direct file-reading capabilities for `.storage`, the precise coordinates ($x, z$), dimensions ($w, d, h$), rotation angles, and asset IDs of purely decorative 3D furniture cannot be extracted through MCP alone.
- **Electric & Interactive Furniture (Correlated Instances):** Placed furniture pieces that bind to Home Assistant entities or contain integrated controls were successfully verified through active dashboard bindings:
  - **Samsung Media / TV Console Unit:** Bound to `input_boolean.tv_power`, `input_boolean.tv_playing`, and TV control scripts in the `meeting` room view.
  - **Motorized Drapery & Shading Fixtures:** Bound to `cover.yellow_switch` (meeting room curtain) and `cover.zm108m` (hallway shade).
  - **Multi-zone Climate Units (ACs):** Bound to `input_boolean.ac_fet_power`, `input_boolean.ac_met_power`, `input_boolean.ac_wrk_power`.
  - **Relay-controlled Lighting Fixtures:** Bound to `switch.pn16_l1` through `switch.pn16_l7`.

---

## 3. Inventory Classification Summary

| Asset Category | Catalog Count | Placed Instances Verified | Access Method |
|---|---|---|---|
| **Domolux Villa 200 Packs** | 200 | Geometry in `.storage` | Local repo verified; live instances encapsulated in HA storage |
| **Domolux Private Collection** | 32 | Geometry in `.storage` | Local repo verified; live instances encapsulated in HA storage |
| **Standard Core Assets** | 81 | Geometry in `.storage` | Local repo verified; live instances encapsulated in HA storage |
| **Smart-linked Furniture Units** | N/A | 7 major units verified | Verified via dashboard card entities & triggers |
| **Static 3D Furniture Instances** | N/A | Unverified coordinates | Encapsulated in `/config/.storage/neonplan3d.building` |
