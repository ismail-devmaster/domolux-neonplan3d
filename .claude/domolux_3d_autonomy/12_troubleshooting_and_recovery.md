# DOMOLUX 3D AUTONOMY — TROUBLESHOOTING & RECOVERY GUIDE
**Document ID:** `12_troubleshooting_and_recovery.md`  
**Date:** 2026-11-26  
**Status:** RUNBOOK & DISASTER RECOVERY

---

## 1. Failure Modes & Resolutions

### 1.1 `stale_plan` Error on Save
- **Cause:** Plan revision in backend incremented while changes were being calculated.
- **Resolution:** Re-read current revision via `neonplan3d/building/get`, reconcile staged changes, and retry with updated `base_revision`.

### 1.2 WebSocket Disconnection
- **Cause:** Network drop or HA Core restart.
- **Resolution:** Client adapter implements automated reconnection with exponential backoff (1s, 2s, 4s, max 30s) and automatic re-authentication.

### 1.3 Schema Validation Error (`extra keys not allowed` or `length invalid`)
- **Cause:** Malformed payload violating `BUILDING_SCHEMA`.
- **Resolution:** Run payload through local schema validator before sending to WebSocket. Check array lengths (`MAX_ROOMS = 200`, `MAX_POINTS = 200`).

---

## 2. Emergency Recovery Runbook

If a test project becomes unresponsive or corrupted:
1. List active plans: `ws_plans_list`
2. Delete corrupted test plan: `ws_plans_delete(plan="test_id")`
3. Production plan `main` is read-only and preserved at all times.
