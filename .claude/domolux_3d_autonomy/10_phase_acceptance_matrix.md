# DOMOLUX 3D AUTONOMY — PHASE ACCEPTANCE MATRIX
**Document ID:** `10_phase_acceptance_matrix.md`  
**Date:** 2026-11-26  
**Status:** ACCEPTANCE CRITERIA

---

| Phase | Milestone Name | Mandatory Verification Criteria | Gate Status |
|---|---|---|---|
| **Phase 1** | Live Scene Access | 1. Authenticated connection to HA.<br>2. Full scene snapshot on `main` retrieved.<br>3. Exact room, floor, opening, and furniture inventories verified.<br>4. Reconstructed spatial hierarchy.<br>5. Grounded Arabic architectural description. | PENDING VERIFICATION |
| **Phase 2** | Safe Editing | 1. Isolated clone created via official API.<br>2. Real object-level transform & material mutations applied.<br>3. Real architectural room/wall additions.<br>4. Persisted via `neonplan3d/building/save`.<br>5. Reopened and changes verified intact.<br>6. Zero modification to `main`. | PENDING VERIFICATION |
| **Phase 3** | Autonomous House Building | 1. Created from empty building state.<br>2. 2-floor multi-room architectural geometry constructed.<br>3. Valid polygon closures and door/window attachments.<br>4. Passes `BUILDING_SCHEMA` validation.<br>5. Saved, exported, and reloaded cleanly. | PENDING VERIFICATION |
| **Phase 4** | Intelligent Luxury Furnishing | 1. Discovered catalog across 313 Domolux assets.<br>2. Semantic room-aware furniture placement.<br>3. Collision detection and clearance validation passed.<br>4. Persisted, reloaded, and rendered.<br>5. Full placement manifest produced. | PENDING VERIFICATION |
