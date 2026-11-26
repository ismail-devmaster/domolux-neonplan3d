# DOMOLUX 3D AUTONOMY — MUTATION & TRANSACTION DESIGN
**Document ID:** `05_mutation_and_transaction_design.md`  
**Date:** 2026-11-26  
**Status:** TRANSACTION PROTOCOL SPECIFICATION

---

## 1. Transaction Pipeline

Every scene mutation follows a strict transactional flow:

```
[1. Read Current Revision]
         │
         ▼
[2. Stage Mutation / Patch]
         │
         ▼
[3. Validate against BUILDING_SCHEMA & Spatial Engine]
         │
         ▼
[4. Optimistic Concurrency Check (base_revision == remote_revision)]
         │
         ├─── (Mismatch) ──> [Reject with STALE_REVISION, abort]
         │
         ▼ (Match)
[5. Send neonplan3d/building/save over WebSocket]
         │
         ▼
[6. Verify Backend Acknowledgment & New Revision]
         │
         ▼
[7. Issue Audit Log & Return Result]
```

---

## 2. Dry-Run & Preview Mechanism

The MCP bridge supports non-destructive simulation:
- `dry_run: true` on any mutation executes all polygon calculations, collision tests, and schema validations in memory without dispatching `neonplan3d/building/save`.
- Returns the exact diff and spatial validity report to allow AI reasoning preview before committing.

---

## 3. Rollback & Point-in-Time Recovery

- Before any major batch operation on an isolated project, the bridge creates an in-memory snapshot and optionally triggers `neonplan3d/history/snapshot`.
- If an operation fails mid-transaction or schema validation fails, the staged changes are discarded and the plan state remains undisturbed.
