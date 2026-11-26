# DOMOLUX 3D AUTONOMY — TEST STRATEGY & TDD MATRIX
**Document ID:** `08_test_strategy.md`  
**Date:** 2026-11-26  
**Status:** TEST SPECIFICATION

---

## 1. Testing Philosophy & TDD Cycle

Following Superpowers `test-driven-development`, every functional feature follows:
1. **RED:** Write unit test testing the contract, run test, verify expected failure.
2. **GREEN:** Write minimal clean implementation satisfying the test, verify passage.
3. **REFACTOR:** Optimize geometry / clean types without breaking passing tests.

---

## 2. Test Suite Hierarchy

1. **Unit Tests (`tests/unit/`):**
   - Spatial math: Point-in-polygon, OBB calculation, SAT collision detection, clearance calculation.
   - Catalog indexer: Filtering, search, dimension fallback.
   - Schema validator: `BUILDING_SCHEMA` conformance check.
2. **Integration Tests (`tests/integration/`):**
   - WebSocket client authentication and message serialization.
   - Snapshot parser: Hierarchy construction, entity association extraction.
   - Transaction manager: Stale revision rejection, optimistic lock.
3. **Live Acceptance Tests (`tests/e2e/`):**
   - Live scene snapshot retrieval on `main`.
   - Creation of test clone, modification, persistence, reopen, and deletion.
   - Procedural construction of reference villa from empty project.
   - Furnishing reference villa, spatial validation, save and reload verification.
