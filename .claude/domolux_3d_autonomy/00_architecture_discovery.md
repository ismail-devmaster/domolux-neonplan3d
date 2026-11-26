# DOMOLUX 3D AUTONOMY — ARCHITECTURE DISCOVERY REPORT
**Document ID:** `00_architecture_discovery.md`  
**Date:** 2026-11-26  
**Status:** COMPLETE & EMPIRICALLY VERIFIED  
**Target:** NeonPlan 3D 4.0.2.2b1 on Home Assistant OS (Core 2026.8.3, Supervisor 2026.11.0)

---

## 1. Executive Summary & Verification Methodology

A comprehensive empirical investigation was conducted on the running Home Assistant environment (host `192.168.100.92`), its integration surface, and the local repository (`/home/ismabeast/Desktop/ponglearn/neonplan3d`). 

All prior investigative leads were tested against the live running systems. No assumptions were accepted without independent live verification.

---

## 2. Empirical Verification Findings

### 2.1 Home Assistant Core & Environment
- **Host IP:** `192.168.100.92`
- **Core Version:** `core-2026.8.3` (running on Home Assistant OS 18.4, Linux kernel 6.18.58-haos, arch x86_64)
- **HA Ports Verified:**
  - `8123/tcp`: Home Assistant HTTP & WebSocket API (`/api/`, `/api/websocket`)
  - `9584/tcp`: HA-MCP Server endpoint (`/private_sJ3_VIjqNtGue0BK2F7Ahw`)
  - `2222/tcp`: Home Assistant Core SSH Container (`core_ssh`, authorized key for `ismabeast@kali`)

### 2.2 NeonPlan 3D Integration Architecture
- **Integration State:** `loaded` (entry_id: `01M86J0QAPN9D1BVJ9N16EF1XV`)
- **Version:** `4.0.2.2b1` (confirmed via WebSocket `version: "4.0.2.2b1"`)
- **WebSocket Protocol:**
  - Registered Commands in `custom_components/neonplan3d/websocket.py`:
    - `neonplan3d/building/get`: Retrieves building snapshot, revision, plan ID, integration version.
    - `neonplan3d/building/save`: Atomically saves building conforming to `BUILDING_SCHEMA` with optimistic concurrency check (`base_revision`).
    - `neonplan3d/building/subscribe`: Real-time revision dispatcher.
    - `neonplan3d/plans/list`: Retrieves all active floor plans, trash list, and active location plan.
    - `neonplan3d/plans/create`: Creates a new isolated plan from scratch (`building`) or cloned (`copy_of`).
    - `neonplan3d/plans/update`: Modifies plan metadata (name, icon, property site coordinates).
    - `neonplan3d/plans/delete`: Moves plan to trash (safe rollback).
    - `neonplan3d/plans/restore`: Restores plan from trash.
    - `neonplan3d/packs/list`: Enumerates all imported asset packages.
    - `neonplan3d/packs/import`: Imports `.fp3dpack` packages with SHA-256 signature verification.
    - `neonplan3d/history/list`, `snapshot`, `restore`: Integrated point-in-time recovery.
    - `neonplan3d/backup/export`, `import`: Full multi-plan project packaging.

### 2.3 Live Home Scene Snapshot (Production Instance)
A live probe of the main plan (`id: "main"`) confirmed:
- **Active Project ID:** `main`
- **Current Revision:** `2589`
- **Floors:** 1 (`floor_jhi339ey`: "Ground floor", height: 2.5m, elevation: 0m)
- **Semantic Rooms (8):**
  1. `room_xtqh68ky`: "metting room" (area_id: `metarea`, floor_material: `wood`, points: 5)
  2. `room_l8eb4249`: "fethi room" (area_id: null, floor_material: `wood`, points: 5)
  3. `room_x1imhc3n`: "hallway" (area_id: null, floor_material: `wood`, points: 11)
  4. `room_x302p2u4`: "bed room" (area_id: null, floor_material: `wood`, points: 4)
  5. `room_g85ebnty`: "bath room " (area_id: null, floor_material: `wood`, points: 4)
  6. `room_8xyhdtqp`: "bath room 2" (area_id: null, floor_material: `wood`, points: 4)
  7. `room_04jkxwkl`: "kitchen" (area_id: null, floor_material: `wood`, points: 4)
  8. `room_r6p4p7wk`: "working space" (area_id: null, floor_material: `wood`, points: 4)
- **Openings (11):**
  - Doors: 9 (standard interior swing doors, width 0.9m, height 2.05m, sill 0m)
  - Windows: 2 (width 4.0m, height 1.5m, sill 0.8m)
- **Furniture & Objects (83):**
  - Includes meeting tables, ergonomic chairs, executive storage, wall TVs, split AC units, ceiling lamps, sensors.
- **Coordinate Conventions:**
  - Metric units (metres).
  - Ground horizontal plane is defined by $(X, Z)$, where $+X$ extends to the right and $+Z$ extends downward/forward in the 2D plan.
  - Vertical elevation and height are defined along the $Y$ axis ($0$ = floor surface, $+Y$ upwards).
  - Object rotations are measured in degrees.

### 2.4 Domolux Asset Inventory Verification
- **Live Imported Packs:** 104 packs active in Home Assistant.
- **Physical Repository Assets:**
  - Standard base components: 81
  - Earlier Domolux private collection: 32 `.fp3dpack` in `domolux/dist/`
  - Domolux Villa 200 catalog: 200 `.fp3dpack` in `domolux/dist/villa_200/` and 200 `.json` in `domolux/source/villa_200/`
  - Total Verified Asset Ecosystem: **313 unique logical products**.

### 2.5 Security and Protection Boundary Verification
- The production plan `main` contains live production settings and entities.
- Direct tampering with `main` is strictly prohibited by user authorization instructions.
- Live testing of `neonplan3d/plans/create` with `copy_of: "main"` proved that Home Assistant creates an entirely isolated storage store (`neonplan3d.building.<plan_id>`) with its own independent revision counter, leaving `main` completely untouched.
- Clean deletion via `neonplan3d/plans/delete` safely manages the test lifecycle.
