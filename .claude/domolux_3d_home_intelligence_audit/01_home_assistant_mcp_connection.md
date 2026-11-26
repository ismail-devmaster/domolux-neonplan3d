# 01. Home Assistant MCP Connection Report

## Executive Summary
This document provides direct technical evidence regarding the connection to the user's live Home Assistant environment via the pre-configured Home Assistant MCP server. All investigations were conducted in strict read-only mode in accordance with operational safety boundaries.

---

## 1. Connection Status & Environment Identity

- **Connection Status:** Operational & Active (Green).
- **Client Protocol Version:** 2026-07-28
- **Client Info:** `antigravity-client` v1.0.0
- **Target Installation:** Home Assistant OS
- **Core Version:** `core-2026.8.3`
- **Supervisor Version:** `supervisor-2026.11.0`
- **Host OS:** Home Assistant OS 18.4 (Linux 6.18.58-haos, arch: x86_64)
- **Host Platform:** `generic-x86-64`
- **Location Name:** `Domolux`
- **Timezone:** `Africa/Algiers`
- **Local Network Address:** `192.168.100.92`
- **MCP Server Architecture:** In-process HA-MCP integration running inside Home Assistant OS on port `9584`, communicating over authenticated webhook/SSE transport.

---

## 2. MCP Tools Inventory & Capabilities

The Home Assistant MCP integration exposes **70 registered tools**. A functional categorization of tools relevant to this spatial intelligence and 3D architectural audit is summarized below:

| Tool Group | Tools Available | Audit Relevance |
|---|---|---|
| **System Overview & Health** | `ha_get_overview`, `ha_get_system_health`, `ha_get_operation_status` | Primary health, entity counts, domain breakdown, network endpoints |
| **Entity & State Discovery** | `ha_get_entity`, `ha_get_state`, `ha_search`, `ha_eval_template` | Live entity state inspection, Jinja templating, entity exposure |
| **Spatial & Area Structure** | `ha_list_floors_areas`, `ha_get_zone` | Home Assistant Floor and Area registries |
| **Dashboard & Lovelace** | `ha_config_get_dashboard`, `ha_config_list_dashboard_resources`, `ha_config_set_dashboard` (write prohibited) | Lovelace cards, views, custom modules, panel configurations |
| **Custom Integrations & HACS** | `ha_get_integration`, `ha_get_hacs_info`, `ha_manage_hacs` | Installed custom integrations, frontend plugins |
| **System Diagnostics & Logs** | `ha_get_logs` | HA Core system logs, supervisor logs, component debug |
| **Backup & Revision Control** | `ha_manage_backup` | Full system snapshot listing and per-edit YAML backup history |

---

## 3. Read-Access Inspection Results

### 3.1 Entity and Domain Metrics
- **Total Entities Registered:** 599
- **Total Domains:** 28
- **Total Services Registered:** 337
- **Key Entity Domains:**
  - `script`: 249 entities (climate controls, media presets, mode helpers)
  - `sensor`: 95 entities (Zigbee diagnostics, voltages, door battery, IR codes)
  - `automation`: 53 entities (Domolux voice scenes, mode night auto, lighting)
  - `update`: 39 entities
  - `switch`: 29 entities (PN16 relay channels L1-L16, Zigbee2MQTT join, camera/assist mutes)
  - `input_boolean`: 26 entities (AC power, eco, turbo, TV power, Domolux dark mode)
  - `binary_sensor`: 24 entities (door contact sensors: `door_fet`, `door_kit`, `door_wrk`, `door_hal`, occupancy `0xf4b3b1fffe495048`)
  - `select`: 15 entities
  - `input_number`: 14 entities (AC target temperatures, shade open limits)
  - `cover`: 2 entities (`meetingrideaux`, `hallwayrideaux`)

### 3.2 Area and Floor Registries
- **Floors Registered in Core:** 0
- **Areas Registered in Core:** 4
  - `living_room` ("Living Room", icon: `mdi:sofa`)
  - `kitchen` ("Kitchen", icon: `mdi:stove`)
  - `bedroom` ("Bedroom", icon: `mdi:bed`)
  - `metarea` ("metarea", 28 entities assigned)

---

## 4. Permission Limitations & Missing Capabilities

1. **No Direct WebSocket Passthrough:**
   Home Assistant MCP does not expose arbitrary WebSocket commands (`call_ws` or `ws_send`). The custom websocket endpoints registered by NeonPlan 3D (`neonplan3d/building/get`, `neonplan3d/plans/list`, `neonplan3d/packs/list`) cannot be queried through standard MCP tool invocations.

2. **Missing "HA-MCP File & YAML Tools" Subentry:**
   When querying `ha_manage_backup(scope="edits", action="list")`, Home Assistant returned the following diagnostic warning:
   > *"The optional 'HA-MCP File & YAML Tools' entry is not set up in Home Assistant, so the file and YAML tools are unavailable."*
   Consequently, direct read/write access to `/config/.storage/neonplan3d.building` is disabled across MCP.

3. **Dashboard Screenshot Beta Engine Disabled:**
   Invoking `ha_config_get_dashboard(include_screenshot=True)` on the NeonPlan 3D panel returned:
   > *"Screenshot requested but dashboard screenshot mode is disabled. Enable the 'dashboard screenshot' beta feature to use it."*
   Visual frame rendering through MCP is therefore unavailable.
