# DOMOLUX 3D AUTONOMY — SCENE DATA MODEL SPECIFICATION
**Document ID:** `04_scene_data_model.md`  
**Date:** 2026-11-26  
**Status:** CANONICAL SPECIFICATION

---

## 1. Top-Level Building Schema

Conforms strictly to `custom_components/neonplan3d/schema.py` (`BUILDING_SCHEMA`) and `frontend/src/model.ts`:

```typescript
interface Building {
  version: 1;
  floors: Floor[];
  settings: BuildingSettings;
  energy?: EnergySettings;
  presence?: PresenceSensor[];
  card_templates?: CardTemplate[];
}
```

### 1.1 Building Settings
- `wall_exterior` (number, metres, default `0.24`)
- `wall_interior` (number, metres, default `0.12`)
- `grid` (number, metres, default `0.05`)

---

## 2. Floor Specification

```typescript
interface Floor {
  id: string;              // e.g. "floor_ground"
  name: string;            // e.g. "Ground floor"
  elevation: number;       // Elevation above datum (m), e.g. 0.0, 3.2
  height: number;          // Floor ceiling height (m), e.g. 2.8, 3.0
  ha_floor: string | null; // Home Assistant floor registry linkage
  rooms: Room[];
  openings: Opening[];
  furniture: FurnitureItem[];
  walls?: FreeWall[];
}
```

---

## 3. Room Specification

Rooms are planar polygonal boundaries defined in the $(X, Z)$ coordinate system:

```typescript
interface Room {
  id: string;               // e.g. "room_living"
  name: string;             // e.g. "Grand Living Lounge"
  points: [number, number][]; // Min 3 vertices in cyclic order (CCW or CW)
  floor_material: string;   // e.g. "wood", "marble", "tile", "carpet"
  area_id: string | null;   // HA area link
  wall_heights?: (number | null)[];
  wall_thickness?: (number | null)[];
  wall_colors?: (string | null)[];
  ceiling_height?: number | null;
}
```

### Polygon Coordinate Properties
- Planar coordinates: $X$ = horizontal right, $Z$ = horizontal downward/forward.
- Area calculation via Shoelace Formula:
  $$A = \frac{1}{2} \left| \sum_{i=0}^{n-1} (x_i z_{i+1} - x_{i+1} z_i) \right|$$
- Orientation: Positive area corresponds to counter-clockwise vertex ordering.

---

## 4. Opening Specification (Doors, Windows, Passages)

Openings are attached to room polygon edges:

```typescript
interface Opening {
  id: string;              // e.g. "opening_main_door"
  room_id: string;         // Room whose edge contains the opening
  edge: number;            // Index of start vertex: points[edge] -> points[edge + 1]
  offset: number;          // Metres from edge start vertex to opening center
  type: "door" | "window" | "garage";
  width: number;           // Width in metres (e.g. 0.9m for standard door, 2.4m for slider)
  height: number;          // Height in metres (e.g. 2.1m)
  sill: number;            // Sill height above floor (0 for doors, 0.8m for windows)
  hinge: "left" | "right"; // Sash hinge side
  leaves: 1 | 2;           // Single or double leaf
  swing: "in" | "out";     // Swing direction relative to room
  cover?: string | null;   // HA cover entity
  contact?: string | null; // HA binary_sensor entity
  lock?: string | null;    // HA lock entity
}
```

---

## 5. Furniture & Asset Instance Specification

```typescript
interface FurnitureItem {
  id: string;              // e.g. "furniture_sofa_01"
  type: string;            // Asset catalog identifier, e.g. "domolux.sculptural_chaise_longue"
  x: number;               // Ground plane X coordinate (m)
  z: number;               // Ground plane Z coordinate (m)
  y?: number | null;       // Elevation above floor surface (m)
  rotation: number;        // Yaw rotation in degrees (0 - 360)
  w?: number;              // Bounding box width (m)
  d?: number;              // Bounding box depth (m)
  h?: number;              // Bounding box height (m)
  scale?: number;          // Uniform scale multiplier (default 1.0)
  variant?: string | null; // Asset model variant
  name?: string | null;    // Custom display name
  finish?: {               // Material overrides
    wood?: string | null;
    fabric?: string | null;
    front?: string | null;
    body?: string | null;
  } | null;
  entity?: string | null;  // Linked HA entity
  power?: string | null;   // Linked power sensor
}
```
