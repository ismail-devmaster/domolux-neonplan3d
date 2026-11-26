# DOMOLUX 3D AUTONOMY — SYSTEM ARCHITECTURE DESIGN
**Document ID:** `01_system_architecture.md`  
**Date:** 2026-11-26  
**Status:** APPROVED ARCHITECTURAL SPECIFICATION

---

## 1. Architectural Alternatives Evaluation

In accordance with Executive Mandate Section 3.2, three structural options were evaluated against empirical evidence:

### Option A — Extend Existing Home Assistant MCP Server (`ha_mcp_tools`)
- **Mechanism:** Modify Python files inside `/config/custom_components/ha_mcp_tools/` on the live Home Assistant OS host.
- **Evaluation:** 
  - Violates the mandatory executive boundary: *"Explicit approval is still required before deploying new functionality into the live Home Assistant installation."*
  - Mixing specialized 3D architectural geometry and spatial collision algorithms with the general home-assistant MCP server introduces high regression risks to live smart home operations.
  - **Verdict:** REJECTED.

### Option B — Dedicated Domolux 3D MCP Server (Selected Architecture)
- **Mechanism:** Standalone, high-performance MCP server implemented in Node.js/TypeScript running locally on the Antigravity host, registering directly into `~/.gemini/config/mcp_config.json`.
- **Evaluation:**
  - Complete isolation from production HA code; zero modification to `/config/custom_components/`.
  - Communicates directly with official NeonPlan 3D backend over authenticated WebSocket (`ws://192.168.100.92:8123/api/websocket`).
  - Implements strict, typed 3D scene operations, spatial reasoning, collision detection, and autonomous building algorithms locally without burdening the Home Assistant host.
  - Honors all security boundaries: Read-only live scene inspection, isolated test project mutation, atomic persistence, and explicit revision fencing.
  - Retains the existing `home-assistant` MCP server for general entity reads and services.
  - **Verdict:** SELECTED (Meets all criteria with lowest risk and highest architectural clarity).

### Option C — Hybrid Protocol Gateway
- **Mechanism:** A proxy translating HA-MCP calls into WebSocket messages while wrapping raw endpoints.
- **Evaluation:** Creates an unnecessary indirection layer and violates the mandate against arbitrary WebSocket forwarding.
- **Verdict:** REJECTED.

---

## 2. Selected Architecture: Domolux 3D MCP Bridge

```mermaid
flowchart TD
    subgraph Antigravity["Antigravity AI Agent Environment"]
        Agent["Antigravity Agent (Claude / Reasoning)"]
        Bridge["Domolux 3D MCP Server\n(Stdio Transport)"]
        Spatial["Spatial Intelligence & Collision Engine"]
        Planner["Architectural Planning & Furnishing Engine"]
    end

    subgraph Config["Local Configuration"]
        MCPConfig["~/.gemini/config/mcp_config.json"]
    end

    subgraph HA["Home Assistant Host (192.168.100.92)"]
        CoreWS["Home Assistant Core WebSocket API\n(:8123/api/websocket)"]
        NPBackend["NeonPlan 3D Integration Backend\n(custom_components/neonplan3d)"]
        HAMCP["HA-MCP Server (:9584)"]
        Stores["Protected Stores:\nneonplan3d.building\nneonplan3d.building.<plan_id>"]
    end

    Agent <-->|MCP Tools Protocol| Bridge
    MCPConfig -.->|Registers Stdio Server| Bridge
    Bridge --> Spatial
    Bridge --> Planner
    Bridge <==>|Authenticated WS Protocol\n(neonplan3d/* commands)| CoreWS
    CoreWS <--> NPBackend
    NPBackend <--> Stores
    Agent -.->|Entity State Inspection| HAMCP
```

---

## 3. Component Breakdown

1. **MCP Transport & Server Adapter (`src/mcp/`):**
   - Implements Model Context Protocol (v2024-11-05 / standard Stdio transport).
   - Exposes strictly typed tool schemas with JSON Schema validation.
   - Enforces permission gating: `read_only`, `test_mutation`, `production_mutation`.

2. **NeonPlan 3D Client Adapter (`src/client/`):**
   - Manages asynchronous WebSocket connection to `ws://192.168.100.92:8123/api/websocket`.
   - Handles JWT authentication using existing authorized credentials.
   - Wraps official WebSocket commands:
     - `neonplan3d/building/get`
     - `neonplan3d/building/save`
     - `neonplan3d/plans/list`, `create`, `update`, `delete`, `restore`
     - `neonplan3d/packs/list`, `import`
     - `neonplan3d/history/snapshot`, `restore`
   - Incorporates automated heartbeat, exponential backoff reconnect, and timeout handling.

3. **Spatial Intelligence & Geometry Engine (`src/spatial/`):**
   - Computes polygon boundaries, areas, and perimeters.
   - Point-in-polygon and polygon containment tests.
   - Oriented Bounding Box (OBB) and Axis-Aligned Bounding Box (AABB) intersection testing.
   - Door swing clearance and circulation path validation (configurable 90–110cm clearance).
   - Wall-object proximity and architectural boundary enforcement.

4. **Procedural Architecture Engine (`src/architecture/`):**
   - Synthesizes multi-floor residential buildings from empty project state.
   - Enforces room topology, wall closure, partition placement, and structural consistency.
   - Places door and window openings with sill, swing, and leaf parameters conforming to `OPENING_SCHEMA`.

5. **Luxury Furnishing Engine (`src/furnishing/`):**
   - Indexes and searches the 313 Domolux assets.
   - Selects furniture matching semantic room functions.
   - Solves optimal positioning, rotation, and alignment.
   - Performs broad-phase and narrow-phase collision avoidance.

6. **Persistence & Concurrency Manager (`src/persistence/`):**
   - Implements optimistic concurrency with `base_revision`.
   - Manages isolated plan lifecycle (`domolux_autonomy_validation_villa`, test clones).
   - Preserves audit trails, change previews, and dry-run execution.
