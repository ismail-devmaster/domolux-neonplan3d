# DOMOLUX VILLA 200 — AUDIT BASELINE AND ENVIRONMENT
## Forensic Technical Acceptance & Independent Verification Environment

- **Repository Root:** `/home/ismabeast/Desktop/ponglearn/neonplan3d`
- **Git Commit:** `0ba8021bf93b7c5dccbf24b0005beab615f65c5e`
- **Audit Execution Date:** `2026-11-26`
- **Execution Mode:** Strict Read-Only Forensic Verification
- **Target Collection:** Domolux Ultimate Luxury Villa Ecosystem (200 Original Assets)

---

## 1. System & Runtime Environment

| Parameter | Observed Baseline | Compliance Status |
|---|---|---|
| **Operating System** | `Linux 6.19.14+kali-amd64 x86_64` | Standard Linux Sandbox |
| **Node.js Runtime** | `v22.23.2` (v22 LTS class) | COMPLIANT (Native Ed25519 & ESM) |
| **Python Runtime** | `Python 3.14.7` | COMPLIANT |
| **Three.js Revision** | Three.js r186 (located in `frontend/node_modules/three`) | COMPLIANT |
| **Git Working Tree Status** | Zero tracked file modifications (`git status --porcelain` clean on tracked files) | COMPLIANT (Zero-Interference) |

---

## 2. Cryptographic Authority Verification

| Cryptographic Key Item | Canonical Expected Value | Registered Repository Value | Status |
|---|---|---|---|
| **Publisher Identity** | `Domolux Studio` | `Domolux Studio` in `packs.py` | **MATCH** |
| **Key ID** | `d08c59237e4f` | `d08c59237e4f` | **MATCH** |
| **Public Key (Base64)** | `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=` | Line 36 of `custom_components/neonplan3d/packs.py` | **MATCH** |
| **Audit Key Policy** | Public Key Verification Only (No Private Key Access) | Strict Sandboxed Reading | **VERIFIED** |

---

## 3. Core Engine Hash Baseline

| Component File | Canonical Relative Path | SHA-256 Checksum |
|---|---|---|
| **Python Package Engine** | `custom_components/neonplan3d/packs.py` | `af731d05fed1830d538ae0652daa71dad9447c0716218fd7e1c4e11470d34f2b` |
| **Frontend Furniture Engine** | `frontend/src/viewer/furniture.ts` | `5a4ac946dc175030f33d08b8aececa794042a4b50563c42ffaea633f06497ba8` |
| **3D Viewport Engine** | `frontend/src/viewer/viewer3d.ts` | `ed1017dd586ebe90acb8f28824c87a93068ca297d12c56a0800415cab13a46e3` |
| **2D Floorplan Engine** | `frontend/src/components/furniture2d.ts` | `caaed55a684a2284828078ffa0842c3d20693d078cdbac854c7a3b06a3595fc9` |
| **Home Assistant Manifest** | `custom_components/neonplan3d/manifest.json` | `f828b437780af0d0862d3709631b036eb4858d15d0b6a49185e67c286e53a6da` |

---

## 4. Inventory Baseline Reconciliation (The 112 vs 113 Question)

Historical records in prior sessions referenced both "112" and "113" pre-existing assets. Forensic inspection resolves this discrepancy:

1. **Built-in Catalog Items:** `82` items are cataloged in `.claude/furniture_validation_data.json` and supported in `furniture.ts` (81 standard production items + 1 base item).
2. **Pre-existing Historical Domolux Distribution Packages:** `32` `.fp3dpack` files exist in `domolux/dist/` (consisting of 2 initial prototypes `desk_executive` and `luxury_spa_bathtub`, plus 30 assets from the Domolux Private Collection).
3. **Reconciliation:**
   - When counting built-in production furniture (81) + all historical dist packages (32) = **113 pre-existing items**.
   - When counting built-in catalog entries (82) + 30 Private Collection items (excluding the 2 earlier prototypes) = **112 items**.
   - Current actual repository state: **113 historical items actively preserved**.
   - Total catalog size after Domolux Villa 200 delivery: **113 historical + 200 Villa = 313 total items**.

---

## 5. Audit Boundary Declaration

The audit strictly enforces:
- **No modification** to production source files (`domolux/source/villa_200/`).
- **No modification** to production package files (`domolux/dist/villa_200/`).
- **No modification** to production specification files (`domolux/specs/villa_200/`).
- **No regeneration, re-signing, or cosmetic alteration**.
- All audit evidence, manifests, matrices, and reports written exclusively to `.claude/domolux_villa_200_acceptance_audit/` and temporary scratch files in `/tmp/domolux_villa_200_acceptance_audit/`.
