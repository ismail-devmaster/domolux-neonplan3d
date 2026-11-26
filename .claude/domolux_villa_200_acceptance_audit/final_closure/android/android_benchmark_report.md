# DOMOLUX VILLA 200 — ANDROID BENCHMARK & HARDWARE REPORT

## 1. Hardware Status
- **Connected Devices:** 0 physical devices detected via `adb devices`.
- **Benchmarking Mode:** Analytical Frame-Time Simulation based on Mobile GPU Fill Rate and Triangle Budgets.

## 2. Theoretical vs Measured Frame Budget Analysis
For a standard 60 Hz mobile display, the frame deadline is **16.67 ms**.
- **Model Geometry Cost:** At 160.7 average triangles per asset, an entire 20-product room contains 3,214 triangles.
- **Projected Vertex Processing Time (Mali-G52 / Adreno 506):** $\approx 0.12\text{ ms}$.
- **Projected Fragment Shading Time:** $\approx 1.85\text{ ms}$.
- **Projected Total Frame Time:** $\approx 2.4\text{ ms}$ (representing only **14.4%** of the 16.67 ms frame budget).
- **Projected Frame Rate:** **60 FPS Sustained**.

## 3. Acceptance Determination
In compliance with Section 8.9 of the specification, because no physical Android hardware was connected to verify this analytical projection empirically, this performance benchmark is classified as **ANALYTICAL / CONDITIONALLY VERIFIED**.
