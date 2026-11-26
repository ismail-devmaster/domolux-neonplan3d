# 07. Existing Home Editing Capability Matrix Report

## Executive Summary
This document provides a rigorous, operation-by-operation evaluation of editing capabilities for the user's existing 3D home. In accordance with safety rules, no modifications were performed on the live home.

---

## 1. Editing Architecture & Data Flow

In NeonPlan 3D, edits follow a defined path:
```
User / API Edit
  └──> BuildingController (in-memory TypeScript data model)
         └──> saveBuilding() (debounced 700ms, sends base_revision)
                └──> WebSocket: "neonplan3d/building/save"
                       └──> voluptuous: BUILDING_SCHEMA(building)
                              └──> _BuildingStore.async_save()
                                     └──> /config/.storage/neonplan3d.building
                                            └──> async_dispatcher_send("neonplan3d_building_updated")
```

---

## 2. Comprehensive Editing Capability Matrix

| Editing Capability | Read Existing | Execute Through Available Tools | Supported by Application | Persisted and Validated | Operational Status |
|---|---|---|---|---|---|
| **Change project metadata** | Yes (via source/schema) | No (blocked by MCP) | Yes (`ws_plans_update`) | Yes (`.plans` store) | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Add a new floor** | Yes | No | Yes (`Floor` schema) | Yes (`.building` store) | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Remove a floor** | Yes | No | Yes (array splice) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Create a room** | Yes | No | Yes (`ROOM_SCHEMA`) | Yes (voluptuous check) | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Rename a room** | Yes | No | Yes (`room.name`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Change room dimensions** | Yes | No | Yes (`room.points`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Create walls** | Yes | No | Yes (`FREE_WALL_SCHEMA`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Move walls** | Yes | No | Yes (update endpoints `a`, `b`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Remove walls** | Yes | No | Yes (array filter) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Create doors** | Yes | No | Yes (`OPENING_SCHEMA`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Move or replace doors** | Yes | No | Yes (`offset`, `style`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Create windows** | Yes | No | Yes (`type: "window"`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Modify windows** | Yes | No | Yes (`sill`, `width`, `height`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Create ceilings** | Yes | No | Yes (`ceiling_height`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Modify flooring** | Yes | No | Yes (`floor_material`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Add furniture** | Yes | No | Yes (`FURNITURE_SCHEMA`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Remove furniture** | Yes | No | Yes (filter by `id`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Move furniture** | Yes | No | Yes (`x`, `z`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Rotate furniture** | Yes | No | Yes (`rotation` in degrees) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Resize/scale furniture** | Yes | No | Yes (`w`, `d`, `h`, `scale`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Change materials & colors** | Yes | No | Yes (`finish.wood/fabric/front`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Duplicate objects** | Yes | No | Yes (clone with new `_ID`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Add appliances** | Yes | No | Yes (appliance types) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Add smart-home representations** | Yes | No | Yes (`PLACEMENT_SCHEMA`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Link 3D objects to HA entities** | Yes | No | Yes (`furniture.entity`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Unlink device associations** | Yes | No | Yes (`entity = null`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Change object visibility** | Yes | No | Yes (`show_if`, `marker`) | Yes | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Save scene changes** | Yes | No | Yes (`saveBuilding`) | Yes (`stale_plan` check) | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |
| **Export complete project** | Yes | No | Yes (`ws_backup_export`) | Yes (`.zip` tarball) | SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION |

---

## 3. Object-Level Editing Intelligence

- **Stable Identifiers:** Every room, opening, free wall, furniture instance, placement pin, and card template possesses a unique string ID conforming to `^[A-Za-z0-9_\-.]+$`.
- **Targeted Manipulation:** Because objects possess stable IDs, individual manipulation (e.g. rotating only a specific table, resizing a single wardrobe, replacing one door) is fully supported by the data model without destabilizing surrounding geometry.
- **Relational Integrity:**
  - Doors and windows reference their host room via `room_id` and edge index `edge`.
  - Splitting a wall updates `wall_splits` on the respective room edge.
  - Linked entities update independently without altering 3D bounding geometry.

---

## 4. Editing Authority Verdict

Can the agent currently modify the user's existing home?

- **Directly through HA MCP:** **NO.** Home Assistant MCP exposes zero tools for modifying NeonPlan 3D scene data or its storage.
- **Through Verified Application APIs:** **YES, technically supported by the software**, but **operationally blocked** because the agent lacks an authenticated WebSocket session to `ws://192.168.100.92:8123/api/websocket`.
- **Through Source Generation:** **YES.** The agent can generate complete, 100% schema-valid JSON buildings and restore backups offline.

**Verdict: SUPPORTED THROUGH THE NEONPLAN 3D APPLICATION (Technically fully supported, but operationally unexecutable against the live production instance without an authenticated WebSocket bridge or file access).**
