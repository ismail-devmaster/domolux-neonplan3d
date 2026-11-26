# DOMOLUX 3D AUTONOMY — DETAILED IMPLEMENTATION PLAN
**Document ID:** `09_implementation_plan.md`  
**Date:** 2026-11-26  
**Status:** ACTIVE IMPLEMENTATION PLAN

---

## 1. Task Breakdown & Ownership

### Phase 1: Live Scene Access & Bridge Infrastructure
- **Task 1.1:** Setup bridge workspace in `tools/domolux_bridge/` with TypeScript/Node.js ESM harness.
- **Task 1.2:** Build WebSocket HA client with authenticated JWT protocol and NeonPlan 3D command bindings.
- **Task 1.3:** Implement Scene Snapshot Service extracting floors, rooms, openings, furniture, and entity links.
- **Task 1.4:** Expose MCP Tools: `get_active_projects`, `get_building_snapshot`, `list_rooms`, `list_scene_objects`, `get_asset_catalog`.
- **Task 1.5:** Run live acceptance on production plan `main` and generate grounded scene inventory.

### Phase 2: Safe Isolated Editing
- **Task 2.1:** Implement Plan Cloner & Lifecycle Service using `neonplan3d/plans/create` with `copy_of`.
- **Task 2.2:** Build Transactional Mutation Manager with optimistic concurrency (`base_revision`).
- **Task 2.3:** Implement typed editing tools: `add_room`, `add_opening`, `place_furniture`, `modify_furniture`, `remove_furniture`, `save_project`.
- **Task 2.4:** Execute controlled editing sequence on isolated clone, verify save-and-reopen cycle, and delete test plan.

### Phase 3: Autonomous House Building
- **Task 3.1:** Implement Empty Project Initializer conforming to `empty_building()`.
- **Task 3.2:** Build Procedural Architectural Generator for 2-floor luxury villa (`domolux_autonomy_validation_villa`).
- **Task 3.3:** Construct exterior shell, interior partitions, doors, windows, and terraces.
- **Task 3.4:** Validate geometry against `BUILDING_SCHEMA`, persist via WebSocket, and verify reopening.

### Phase 4: Intelligent Luxury Furnishing
- **Task 4.1:** Build Spatial Collision & Clearance Engine (SAT OBB, ray casting, door swing clearance).
- **Task 4.2:** Build Luxury Furnishing Planner mapping 313 Domolux assets to room functions.
- **Task 4.3:** Furnish all rooms of `domolux_autonomy_validation_villa`, run collision detection, save and reload.
- **Task 4.4:** Generate final placement manifest, 3D render preview verification, and Arabic acceptance report.
