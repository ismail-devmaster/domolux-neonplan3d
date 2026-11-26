# 09. Architectural Autonomy Scorecard Report

## Executive Summary
This scorecard establishes an evidence-based measurement of autonomous capabilities within the actual Domolux × NeonPlan 3D ecosystem through the currently configured Home Assistant MCP connection and local tool environment.

---

## 1. Weighted Capability Scorecard

| Capability Domain | Weight | Score Awarded | Evidence-Based Justification |
|---|---:|---:|---|
| **1. Home Assistant MCP connectivity & inspection** | 10 | **9** | Live, authenticated connection to Home Assistant OS 18.4 (Core 2026.8.3, 599 entities, 70 tools). 1 point deducted because optional "HA-MCP File & YAML Tools" subentry is not configured. |
| **2. Actual 3D scene visibility** | 15 | **4** | Level V2 confirmed (discovered panel `neonplan3d`, resource `neonplan3d-loader.js`, view `yourhome`, card `custom:neonplan3d-card`, template `"lounge"`). Levels V3–V7 failed (HA dashboard screenshot engine is disabled, browser auth wall). |
| **3. Room and architectural understanding** | 15 | **8** | Identified all 6 functional rooms (`fethi`, `salle_de_bain`, `meeting`, `working`, `hallway`, `kitchen`) through Lovelace dashboard structure and entity groupings. Full schema understood from source. Exact 3D polygon vertices remain encapsulated in `/config/.storage/neonplan3d.building`. |
| **4. Furniture and device identification** | 10 | **5** | Verified live smart-home physical devices, motor curtains, ACs, relays, and TV bindings across all rooms. Placed decorative furniture lacking HA entity bindings cannot be listed without WebSocket access. |
| **5. Object-level editing capability** | 15 | **5** | Application data model and schema support full object-level mutations with stable IDs (`saveBuilding`). However, HA MCP has zero 3D editing tools, and live production edits are operationally blocked. |
| **6. Project creation and architectural construction** | 15 | **10** | Fully capable of algorithmically generating complete, 100% schema-valid NeonPlan 3D projects from zero (floors, room polygons, walls, doors, windows, roofs). Direct automated injection into live HA instance requires WebSocket or storage access. |
| **7. Autonomous furniture & appliance placement** | 10 | **7** | Full catalog of 313 assets verified in repository (81 core + 32 Private Collection + 200 Villa 200). Placement logic, wall alignment, and zoning algorithms ready. Live runtime pack verification on HA server is unverified via MCP. |
| **8. Spatial reasoning & collision prevention** | 5 | **4** | Point-in-polygon containment, AABB/OBB overlap prevention, and door-swing arc clearance mathematically implementable. |
| **9. Saving, importing, and project persistence** | 5 | **3** | Project persistence schema, debouncing, and backup format (`.zip`) verified. Direct live persistence via HA MCP is unsupported. |
| **Total** | **100** | **55** | **Intermediate Architectural Intelligence & Source Autonomy** |

---

## 2. Performance Bracket Classification

- **85 – 100:** Full Autonomous Architect (End-to-end live creation, inspection, and persistent execution).
- **70 – 84:** High Autonomy with Minor Supervised Steps.
- **50 – 69:** **Intermediate Architectural Intelligence & Source Autonomy (Current Status: 55/100).**
  - *Characteristics:* Deep architectural schema mastery, verified local asset libraries, complete programmatic project generation capabilities, but constrained at the live production boundary by MCP protocol limitations (no WebSocket/file bridge).
- **30 – 49:** Limited Inspection & Fragmented Capabilities.
- **0 – 29:** Unverified or Disconnected System.
