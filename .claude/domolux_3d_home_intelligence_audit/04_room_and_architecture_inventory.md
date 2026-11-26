# 04. Room and Architecture Inventory Report

## Executive Summary
This document provides the architectural and spatial breakdown of the user's home as established through direct evidence in the connected Home Assistant system and NeonPlan 3D configuration.

---

## 1. Verified Room Inventory

Through inspection of the user's primary tablet dashboard (`dashboard-user`, URL path: `dashboard-user`), 6 dedicated functional rooms were verified. Each room possesses its own dedicated Lovelace view, entity mappings, and Domolux custom card UI:

| Room Identifier | Functional Title | View Path | Primary Environmental & Control Entities |
|---|---|---|---|
| **fethi** | Master Bedroom (Fethi) | `/fethi` | AC climate (`ac_fet`), door contact `door_fet_contact`, lighting relay `pn16_l7`, occupancy `0xf4b3b1fffe495048` |
| **salle_de_bain** | Bathroom | `/salle_de_bain` | Lighting relays `pn16_l1` through `l6`, occupancy `0xf4b3b1fffe495048` |
| **meeting** | Meeting / Living / Media | `/meeting` | Motorized shade `cover.yellow_switch` / `cover.digital`, AC climate `ac_met`, TV controls `input_boolean.tv_power`, door contact `0xa4c138997d10233c`, lighting `pn16_l1`-`l6` |
| **working** | Workspace / Office | `/working` | AC climate `ac_wrk`, door contact `door_wrk_contact`, lighting `pn16_l1`-`l6`, occupancy `0xf4b3b1fffe495048` |
| **hallway** | Central Hallway / Circulation | `/hallway` | Motorized curtain `cover.zm108m`, door contact `door_hal_contact`, lighting `pn16_l1`-`l6` |
| **kitchen** | Kitchen | `/kitchen` | Door contact `door_kit_contact`, lighting `pn16_l1`-`l6`, occupancy `0xf4b3b1fffe495048` |

In addition, View 7 (`yourhome`) serves as the central 3D panel host (`custom:neonplan3d-card`, template: `"lounge"`).

---

## 2. Core Area Registry vs. 3D Architectural Rooms

A critical architectural distinction exists between Home Assistant's Core Area Registry and NeonPlan 3D's spatial model:

1. **Home Assistant Core Area Registry (`ha_list_floors_areas`):**
   - Registered Areas: 4 (`living_room`, `kitchen`, `bedroom`, `metarea`).
   - Registered Floors: 0.
   - Most physical devices are currently clustered under area `metarea` (28 entities), while `living_room`, `kitchen`, and `bedroom` contain 0 directly assigned core entities.

2. **NeonPlan 3D Spatial Model (`frontend/src/model.ts` & `custom_components/neonplan3d/schema.py`):**
   - Rooms are first-class polygon geometry entities (`points: [[x, z], ...]`).
   - Each room in NeonPlan 3D optionally maps to a Home Assistant `area_id` (`vol.Required("area_id"): vol.Any(None, str)`).
   - NeonPlan 3D maintains its own floor levels (`Floor` schema) with elevation, ceiling height, and floor-to-floor cut planes, independent of HA's Core floor registry.

---

## 3. Architectural Geometry Schema Breakdown

Based on verified application source code, NeonPlan 3D represents architectural structure via the following schemas:

### 3.1 Room Polygons (`ROOM_SCHEMA`)
- `id`: Unique identifier (string).
- `name`: Human-readable room name (e.g., `"Fethi"`, `"Meeting"`).
- `points`: Ordered list of 2D coordinates `[[x0, z0], [x1, z1], ...]`, where $x$ represents horizontal width and $z$ represents depth in metres.
- `floor_material`: Material texture name (`wood`, `tiles`, `carpet`, `stone`, `concrete`).
- `wall_splits`: Subdivisions along edges for variable wall heights or partial walls.
- `wall_heights`: Edge-specific wall heights ($0 = \text{opening/no wall}$, full height otherwise).
- `ceiling_height`: Specific ceiling elevation (metres).
- `wall_thickness`: Edge-specific wall thicknesses (metres).

### 3.2 Openings (`OPENING_SCHEMA`)
- `id`, `room_id`, `edge` (index into room points), `offset` (metres from vertex).
- `type`: `"door"` | `"window"` | `"garage"`.
- `width`, `height`, `sill` (elevation from floor level; 0 for doors).
- `hinge`: `"left"` | `"right"`, `leaves`: `1` | `2`, `swing`: `"in"` | `"out"`.
- `style`: `"interior"`, `"front"`, `"front_glass"`, `"sidelight"`, `"glass"`, `"sliding"`, `"passage"`.
- Associated entities: `cover`, `contact`, `tilt`, `lock`.

### 3.3 Free-Standing Walls (`FREE_WALL_SCHEMA`)
- `id`, `a: [x, z]`, `b: [x, z]`, `thickness`, `height`, `slope`, `color`.

### 3.4 Roofs (`ROOF_SCHEMA`)
- `type`: `"none"` | `"flat"` | `"gable"` | `"custom"`.
- Multi-section definitions (`ROOF_SECTION_SCHEMA`): `gable`, `hip`, `halfhip`, `pyramid`, `mansard`, `pent`, `parapet`.

---

## 4. Grounded Architectural Assessment

- **Number of Floors:** 1 primary floor verified in Home Assistant dashboards.
- **Number of Rooms:** 6 verified functional rooms (`fethi`, `salle_de_bain`, `meeting`, `working`, `hallway`, `kitchen`).
- **Geometric Coordinates Status:** Exact metric coordinates (`points`, `wall_splits`, `offsets`) are stored in `/config/.storage/neonplan3d.building`. Because the "HA-MCP File & YAML Tools" subentry is not configured, and HA MCP does not provide a WebSocket passthrough, the raw polygon coordinates remain encapsulated in Home Assistant's internal store.
