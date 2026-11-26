# DOMOLUX 3D AUTONOMY — SECURITY & PERMISSION MODEL
**Document ID:** `03_security_model.md`  
**Date:** 2026-11-26  
**Status:** ENFORCED SECURITY POLICY

---

## 1. Production Protection Directive

Under Executive Mandate Sections 2.3 and 14:
- The production plan (`id: "main"`) represents the user's real home.
- The Domolux 3D MCP Bridge enforces strict read-only access on plan `"main"`.
- Any mutation request (`save_project`, `modify_furniture`, `remove_furniture`, `add_room`, `add_opening`) targeting plan `"main"` will be categorically rejected with error code `PRODUCTION_PLAN_PROTECTED` unless an explicit, signed authorization bypass flag is set.
- All Phase Two, Phase Three, and Phase Four operations occur exclusively in isolated project spaces:
  - Phase 2: Cloned test plan `test_clone_<timestamp>`
  - Phase 3 & 4: Dedicated reference villa `domolux_villa_validation`

---

## 2. Security Boundaries & Authorization Tiers

```
┌────────────────────────────────────────────────────────┐
│                   ANTIGRAVITY AGENT                    │
└───────────────────────────┬────────────────────────────┘
                            │
              ┌─────────────▼─────────────┐
              │  Domolux 3D MCP Gatekeeper │
              └─────────────┬─────────────┘
                            │
     ┌──────────────────────┼──────────────────────┐
     │                      │                      │
[READ_ONLY]          [TEST_MUTATION]        [PROD_MUTATION]
(Any plan ID)        (plan_id != "main")    (Explicit bypass required)
Allowed:             Allowed:               BLOCKED BY DEFAULT:
- get_snapshot       - place_furniture      - save to "main"
- list_rooms         - modify_furniture     - modify "main"
- list_furniture     - add_room             - delete "main"
- catalog search     - add_opening          
                     - save_project
```

---

## 3. Concurrency & Optimistic Revision Locking

- Every mutation must track `base_revision`.
- Before applying changes to the backend, the bridge verifies that `base_revision == current_plan_revision`.
- If another client or background task modified the plan concurrently, the bridge rejects the save with `STALE_REVISION_ERROR` and returns the new revision for reconciliation.

---

## 4. Separation from Physical Device Control

- A 3D object representation with an `entity` or `entity_id` field (e.g. `switch.pn16_l1` or `climate.living_room_ac`) is strictly metadata for visualization within NeonPlan 3D.
- Mutating a 3D object position, rotation, scale, or material override MUST NOT invoke any Home Assistant service (`light.turn_on`, `climate.set_temperature`, `cover.open_cover`).
- Physical device commands are handled strictly through the separate `home-assistant` MCP server, requiring independent human authorization.

---

## 5. Credential Isolation & Redaction

- Authentication tokens and signing secrets are managed in environment variables or secure local files.
- The MCP server automatically redacts sensitive tokens, keys, passwords, and private IP traces from all returned tool results and error logs.
