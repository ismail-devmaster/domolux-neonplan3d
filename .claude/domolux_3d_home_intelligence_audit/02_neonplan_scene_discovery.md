# 02. NeonPlan 3D Scene Discovery Report

## Executive Summary
This document provides direct technical evidence regarding the discovery, integration mechanisms, and storage of the NeonPlan 3D project representing the user's home in Home Assistant.

---

## 1. NeonPlan 3D Integration Footprint in Home Assistant

The presence and active loading of NeonPlan 3D within the connected Home Assistant instance was verified through multiple distinct technical layers:

### 1.1 Custom Integration Registration
- **Domain:** `neonplan3d` (legacy: `floorplan_3d`)
- **Installed Version:** `4.0.2.2b1-19770059ae`
- **Main Bundle Static Route:** `/neonplan3d_static/neonplan3d.js?v=4.0.2.2b1-19770059ae`
- **Registered Sidebar Panel:**
  - `url_path`: `neonplan3d`
  - `component_name`: `neonplan3d-panel`
  - `title`: `NeonPlan 3D`
  - `icon`: `mdi:floor-plan`
  - `require_admin`: `false`

### 1.2 Lovelace Dashboard Resource Registration
Using `ha_config_list_dashboard_resources`, Resource ID `ba79ba2bd39744e7a97ac3d3e2ec061e` was verified:
```json
{
  "id": "ba79ba2bd39744e7a97ac3d3e2ec061e",
  "url": "/neonplan3d_static/neonplan3d-loader.js?v=4.0.2.2b1-19770059ae",
  "type": "module"
}
```

### 1.3 Dashboard Card & View Discovery
Using `ha_config_get_dashboard(query="neonplan")`, the target project representation was located in dashboard `dashboard-user` (title: `"mainTablet"`):
- **Dashboard URL Path:** `dashboard-user`
- **View Index:** 7 (of 8 views)
- **View Path:** `yourhome`
- **View Title:** `yourHome`
- **View Type:** `panel` (full-width single-card layout)
- **Embedded Card Configuration:**
```json
{
  "type": "custom:neonplan3d-card",
  "template": "lounge"
}
```

---

## 2. Scene Architecture & Data Storage Mechanism

### 2.1 Storage Location
Based on the NeonPlan 3D source code (`custom_components/neonplan3d/storage.py`), building data is managed via Home Assistant's internal `Store` mechanism:
- **Primary Building Store:** `/config/.storage/neonplan3d.building` (`STORAGE_VERSION = 1`, `STORAGE_MINOR_VERSION = 2`)
- **Plans Index Store:** `/config/.storage/neonplan3d.plans`
- **Restore Points & History:** `/config/.storage/neonplan3d.history`
- **Installed Pack Registry:** `/config/.storage/neonplan3d.packs`
- **Background Images:** `/config/.storage/neonplan3d.images`

### 2.2 Scene Loading Mechanism
1. When a client opens `/dashboard-user/yourhome` or the sidebar panel `/neonplan3d`, the browser executes `neonplan3d-loader.js`, which imports `neonplan3d.js`.
2. The custom element `custom:neonplan3d-card` mounts and initializes `BuildingController`.
3. `BuildingController` sends WebSocket request:
   ```json
   { "type": "neonplan3d/building/get", "plan": "main" }
   ```
4. The backend loads the dictionary from `/config/.storage/neonplan3d.building`, runs `complete(building)` to ensure optional fields have defaults, and returns `{ "building": {...}, "revision": N, "plan": "main" }`.
5. The card locates the template configuration:
   `building.card_templates.find(t => t.id === "lounge")` and initializes the 3D WebGL viewport accordingly.

---

## 3. Actual Visibility Status Verdict

| Method | Evidence | Result |
|---|---|---|
| **Lovelace Resources** | `/neonplan3d_static/neonplan3d-loader.js` | Verified |
| **Lovelace Dashboards** | `dashboard-user/yourhome` | Verified |
| **Card Type** | `custom:neonplan3d-card` with `template: "lounge"` | Verified |
| **Live 3D Viewport** | WebGL canvas rendered | Inaccessible via MCP |
| **Scene Mesh / Raw Geometry** | `/config/.storage/neonplan3d.building` | Inaccessible via MCP |

**Visibility Level Assigned: Level V2 (Panel / Dashboard Discovered).**
