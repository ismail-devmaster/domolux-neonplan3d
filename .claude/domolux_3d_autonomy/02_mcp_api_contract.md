# DOMOLUX 3D AUTONOMY — MCP API CONTRACT
**Document ID:** `02_mcp_api_contract.md`  
**Date:** 2026-11-26  
**Status:** SPECIFICATION & SCHEMA DEFINITIONS

---

## 1. Tool Categories & Authorization Tiers

The Domolux 3D MCP Bridge provides typed tools partitioned into four authorization tiers:

1. `READ_ONLY`: Safe for execution on any project, including live production (`main`).
2. `TEST_MUTATION`: Authorized for isolated test projects (IDs starting with `test_`, `domolux_`, or cloned plans).
3. `PROD_MUTATION`: Gated by explicit user authorization requirement; blocked by default.
4. `SPATIAL_CALC`: Pure deterministic geometric calculations (no remote side-effects).

---

## 2. Tool Specifications

### 2.1 Scene Inspection Tools (Read-Only)

#### `get_active_projects`
- **Description:** Lists all available floor plans, revision numbers, room counts, and trash status.
- **Parameters:** None.
- **Returns:** `{ plans: PlanEntry[], trash: PlanEntry[], locate_plan: string }`

#### `get_building_snapshot`
- **Description:** Retrieves the complete authoritative building structure for a specified plan.
- **Parameters:**
  - `plan_id` (string, optional, default `"main"`): Plan identifier.
- **Returns:** `{ building: Building, revision: number, plan: string, version: string, summary: { floors: number, rooms: number, furniture: number, openings: number } }`

#### `list_floors`
- **Description:** Returns all floors in the building with their elevation, height, and metadata.
- **Parameters:** `plan_id` (string, optional)
- **Returns:** `{ floors: FloorSummary[] }`

#### `list_rooms`
- **Description:** Enumerates semantic rooms on a floor or entire building with geometric properties.
- **Parameters:**
  - `plan_id` (string, optional)
  - `floor_id` (string, optional)
- **Returns:** `{ rooms: RoomDetail[] }`

#### `get_room_details`
- **Description:** Retrieves detailed polygon vertices, area, perimeter, wall attributes, and connected openings for a room.
- **Parameters:**
  - `plan_id` (string, optional)
  - `room_id` (string, required)
- **Returns:** `{ room: RoomDetail, openings: Opening[], furniture: FurnitureItem[] }`

#### `list_scene_objects`
- **Description:** Lists furniture, appliances, lighting, and architectural assets in a room or floor.
- **Parameters:**
  - `plan_id` (string, optional)
  - `floor_id` (string, optional)
  - `room_id` (string, optional)
- **Returns:** `{ objects: FurnitureItem[], count: number }`

#### `get_asset_catalog`
- **Description:** Searches the Domolux and standard 3D asset catalog with semantic filters.
- **Parameters:**
  - `query` (string, optional): Text search query.
  - `category` (string, optional): E.g., `living`, `kitchen`, `bath`, `bedroom`, `wellness`, `outdoor`, `architectural`.
  - `room_suitability` (string, optional): Filter by room type.
  - `max_results` (number, optional, default `50`)
- **Returns:** `{ assets: AssetDefinition[], total: number }`

---

### 2.2 Scene Mutation Tools (Test-Project Authorized)

#### `clone_project`
- **Description:** Creates an isolated copy of a floor plan with a new unique test ID.
- **Parameters:**
  - `source_plan_id` (string, default `"main"`): Source plan to copy.
  - `target_name` (string, required): Display name for the cloned plan.
- **Returns:** `{ success: boolean, plan_id: string, revision: number }`

#### `create_empty_project`
- **Description:** Initializes a genuinely empty project with specified name and metric units.
- **Parameters:**
  - `name` (string, required): Project name.
  - `plan_id` (string, optional): Desired plan ID (must conform to `^[a-z0-9_]{1,32}$`).
- **Returns:** `{ success: boolean, plan_id: string, revision: number }`

#### `add_floor`
- **Description:** Adds a new structural floor level to an isolated project.
- **Parameters:**
  - `plan_id` (string, required)
  - `name` (string, required): E.g., `"Ground Floor"`, `"First Floor"`.
  - `elevation` (number, required): Height above ground in metres.
  - `height` (number, required): Ceiling height in metres (default 2.8m).
- **Returns:** `{ success: boolean, floor_id: string }`

#### `add_room`
- **Description:** Constructs a semantic room defined by a closed 2D polygon of points.
- **Parameters:**
  - `plan_id` (string, required)
  - `floor_id` (string, required)
  - `name` (string, required)
  - `points` (array of `[x, z]`, required, min 3 points)
  - `floor_material` (string, default `"wood"`)
  - `area_id` (string, optional, default null)
- **Returns:** `{ success: boolean, room_id: string, area_m2: number }`

#### `add_opening`
- **Description:** Adds a door, window, or architectural passage to a room wall.
- **Parameters:**
  - `plan_id` (string, required)
  - `floor_id` (string, required)
  - `room_id` (string, required)
  - `edge` (number, required): Edge index on room polygon.
  - `offset` (number, required): Distance in metres from edge start.
  - `type` (enum: `"door"`, `"window"`, `"garage"`)
  - `width` (number, required)
  - `height` (number, required)
  - `sill` (number, default 0 for doors, 0.8 for windows)
  - `hinge` (enum: `"left"`, `"right"`, default `"left"`)
  - `swing` (enum: `"in"`, `"out"`, default `"in"`)
- **Returns:** `{ success: boolean, opening_id: string }`

#### `place_furniture`
- **Description:** Places an asset instance into a room with collision and clearance validation.
- **Parameters:**
  - `plan_id` (string, required)
  - `floor_id` (string, required)
  - `room_id` (string, required)
  - `type` (string, required): Asset type ID (e.g., `domolux.luxury_spa_bathtub` or standard `sofa_3seater`).
  - `x` (number, required)
  - `z` (number, required)
  - `rotation` (number, default 0): Orientation in degrees.
  - `scale` (number, default 1.0)
  - `finish` (object, optional): Material overrides `{ wood, fabric, front, body }`.
  - `entity_id` (string, optional): Home Assistant entity link.
- **Returns:** `{ success: boolean, item_id: string, validation: ValidationReport }`

#### `modify_furniture`
- **Description:** Modifies transform, materials, or entity binding of an existing placed object.
- **Parameters:**
  - `plan_id` (string, required)
  - `floor_id` (string, required)
  - `item_id` (string, required)
  - `x` (number, optional)
  - `z` (number, optional)
  - `rotation` (number, optional)
  - `scale` (number, optional)
  - `finish` (object, optional)
  - `entity_id` (string, optional)
- **Returns:** `{ success: boolean, item_id: string, validation: ValidationReport }`

#### `remove_furniture`
- **Description:** Deletes a furniture instance from the scene.
- **Parameters:**
  - `plan_id` (string, required)
  - `floor_id` (string, required)
  - `item_id` (string, required)
- **Returns:** `{ success: boolean, item_id: string }`

#### `save_project`
- **Description:** Persists the project to NeonPlan 3D backend with revision protection.
- **Parameters:**
  - `plan_id` (string, required)
  - `base_revision` (number, required): Expected current revision to prevent race conditions.
- **Returns:** `{ success: boolean, revision: number }`

#### `delete_project`
- **Description:** Moves an isolated test plan to trash.
- **Parameters:**
  - `plan_id` (string, required)
- **Returns:** `{ success: boolean }`

---

### 2.3 Spatial Intelligence Tools (Deterministic Calculations)

#### `validate_spatial_layout`
- **Description:** Computes complete collision detection, clearance paths, door swings, and room boundary containment.
- **Parameters:**
  - `plan_id` (string, required)
  - `floor_id` (string, optional)
- **Returns:** `{ valid: boolean, collisions: CollisionReport[], clearances: ClearanceReport[], warnings: string[] }`
