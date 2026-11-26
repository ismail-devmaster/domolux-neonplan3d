# DOMOLUX VILLA 200 — FINAL CLOSURE BASELINE & ENVIRONMENT
## Initial Preservation Baseline, Git State & Master Discrepancy Register

- **Repository Root:** `/home/ismabeast/Desktop/ponglearn/neonplan3d`
- **Git Commit:** `0ba8021bf93b7c5dccbf24b0005beab615f65c5e`
- **Git Branch:** `main`
- **Operating System:** `Linux 6.19.14+kali-amd64 x86_64`
- **Node.js Runtime:** `v22.23.2`
- **Python Runtime:** `Python 3.14.7`
- **Audit Execution Date:** `2026-11-26`

---

## 1. Protected Core File Hashes

| Core File | SHA-256 Checksum | Preservation Status |
|---|---|:---:|
| `custom_components/neonplan3d/packs.py` | `af731d05fed1830d538ae0652daa71dad9447c0716218fd7e1c4e11470d34f2b` | PROTECTED |
| `frontend/src/viewer/furniture.ts` | `5a4ac946dc175030f33d08b8aececa794042a4b50563c42ffaea633f06497ba8` | PROTECTED |
| `frontend/src/viewer/viewer3d.ts` | `ed1017dd586ebe90acb8f28824c87a93068ca297d12c56a0800415cab13a46e3` | PROTECTED |
| `frontend/src/components/furniture2d.ts` | `caaed55a684a2284828078ffa0842c3d20693d078cdbac854c7a3b06a3595fc9` | PROTECTED |
| `custom_components/neonplan3d/manifest.json` | `f828b437780af0d0862d3709631b036eb4858d15d0b6a49185e67c286e53a6da` | PROTECTED |

---

## 2. Master Discrepancy Register (D01 – D15)

| ID | Investigation Target | Previous Delivery Claim | Latest Forensic Audit Result | Final Investigation Objective |
|---|---|---:|---:|---|
| **D01** | Total Package Size | ~1.15 MB | 599.6 KB (reported as 0.572 MB) | Reconcile bytes, decimal KB/MB, and binary KiB/MiB |
| **D02** | Total Triangle Count | 33,520 | 32,148 | Reconcile exact mesh generation vs draft estimation |
| **D03** | Average Triangles / Product | 167.6 | 160.7 | Compute exact mean and median per asset |
| **D04** | Parts Distribution | 1,491 total | 1,070 boxes + 324 cylinders + 97 lofts | Verify source vs runtime primitive classification |
| **D05** | Package / Source Consistency | "100% byte-for-byte" | 200/200 canonical match | Distinguish package envelope from canonical payload |
| **D06** | Signature Verification Time | < 0.2 ms | 0.35 ms / package | Multi-run warm/cold benchmark across 200 packages |
| **D07** | Aggregate Signature Time | Not specified | 70.7 ms | Measure total batch load latency |
| **D08** | Quality Methodology | 8 criteria (100 pts) | 10 criteria claimed | Reconcile rubric structures and scoring frameworks |
| **D09** | Average Quality Score | 94.7 / 100 | 94.7 / 100 | Recalculate mean, median, min, max across all assets |
| **D10** | Tamper Testing Scope | 200 / 200 | 600 / 600 (3 classes x 200) | Verify 3 independent vectors + negative edge tests |
| **D11** | Originality Analysis Scope | 42,500 comparisons | 42,500 comparisons | Verify 22,600 cross + 19,900 intra pair coverage |
| **D12** | Arched Product Identity | `monumental_arched_interior_portal` | `arched_interior_door` | Resolve prompt hypothesis vs canonical asset ID |
| **D13** | Visual Preview Format | "WebGL Renders" | Shaded 3D Vector SVGs | Explicitly classify SVG vector math vs canvas capture |
| **D14** | Android Tablet Performance | "60 FPS" | Theoretical projection | Test physical hardware if attached; document limits |
| **D15** | Actual WebGL Coverage | Not fully established | Three.js geometry valid | Document headless sandbox display server limitation |
