# DOMOLUX VILLA 200 — ANDROID PHYSICAL DEVICE TEST GUIDE
## Standardized Quality Assurance Protocol for Home Assistant Wall Tablets

### 1. Target Hardware Specifications
- **Target Category:** Wall-Mounted Android Touch Tablets (e.g., Amazon Fire HD 10, Samsung Galaxy Tab A9, Lenovo Tab M10, Raspberry Pi 4 + Touch Display).
- **Target App / Browser:** Home Assistant Companion App (Android System WebView) or Chrome/Firefox.
- **Minimum OS:** Android 10.0+ (API Level 29+).

---

### 2. Benchmark Scenarios & Procedure

| Scenario | Room / Composition | Product Count | Triangle Budget | Expected FPS | Pass Threshold |
|---|---|---:|---:|---:|:---:|
| **Scenario 1: Single Asset** | Inspection turntable | 1 asset | ~160 tris | 60 FPS | $\ge 58$ FPS |
| **Scenario 2: Small Room** | Powder Room / Entry Foyer | 5 assets | ~800 tris | 60 FPS | $\ge 55$ FPS |
| **Scenario 3: Standard Room** | Master Suite / Kitchen | 20 assets | ~3,200 tris | 60 FPS | $\ge 50$ FPS |
| **Scenario 4: Large Villa Wing** | Grand Salon + Dining | 50 assets | ~8,000 tris | 60 FPS | $\ge 45$ FPS |
| **Scenario 5: Full Stress Test** | Entire Villa Floorplan | 100 assets | ~16,000 tris | 45–60 FPS | $\ge 30$ FPS |

---

### 3. Step-by-Step Execution Protocol
1. Open Home Assistant with NeonPlan 3D card loaded.
2. Enable the built-in diagnostic overlay:
   `localStorage.setItem('neonplan3d.lab', '1');`
3. Load the designated test scenario floorplan.
4. Orbit the camera continuously for 60 seconds using touch gestures.
5. Record:
   - Average FPS
   - 1% low frame time (P99 latency)
   - Device thermal state (subjective or via CPU-Z)
6. Export the JSON diagnostic log and append to this audit package.
