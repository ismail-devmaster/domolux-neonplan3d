# Domolux NeonPlan 3D — Beta Release Publication Report
## Redesign Luxury Furniture Release: Version 4.0.2.2b1 (Tag: v4.0.2.2b1)

**Date & Time:** November 26, 2026, 00:27 CET  
**Release Engineer:** Senior Release Engineer & Integration Maintainer  
**Local Repository:** `/home/ismabeast/Desktop/ponglearn/neonplan3d`  
**Target Remote:** `domolux` (`https://github.com/domolux/neonplan3d.git`)  
**Existing Remote:** `origin` (`git@github.com:ismail-devmaster/domolux-neonplan3d.git`)  
**Proposed Beta Version:** `4.0.2.2b1`  
**Proposed Git Tag:** `v4.0.2.2b1`  
**Release Type:** Pre-release / Beta  
**Final Result Status:** **`PUBLICATION BLOCKED`**

---

## 1. Executive Summary & Blocker Declaration

In accordance with Section 3, Section 10, and Section 14 of the Release Specification:
> *"If the target repository does not exist, or its identity cannot be verified, stop publication and report the blocker. Never create or publish to an alternative repository. Never push to origin."*

During Phase One pre-publication inspection and network remote verification:
1. Target repository `https://github.com/domolux/neonplan3d` was queried via GitHub REST API and SSH Git protocol.
2. Result: **`HTTP/2 404 Not Found`** and **`ERROR: Repository not found.`**
3. The GitHub organization `domolux` currently possesses only one public repository (`domolux/loxbridge`). The requested destination repository `domolux/neonplan3d` has not yet been created on GitHub or access has not been granted.
4. Upstream remote `origin` (`ismail-devmaster/domolux-neonplan3d`) exists and hosts stable release `v4.0.2.1`. However, pushing to `origin` was explicitly forbidden by the safety guidelines.
5. In compliance with strict safety directives, publication was immediately halted at Phase Eight to protect repository integrity.
6. All local release preparation, versioning, frontend rebuilding, full regression validation, packaging of `neonplan3d.zip`, release committing (`2781d5d0`), and local tag creation (`v4.0.2.2b1`) were executed and verified with 100% success.

---

## 2. Release Metadata & Commit Details

- **Target Repository:** `https://github.com/domolux/neonplan3d` (Status: Non-existent / 404)
- **Active Git Branch:** `main`
- **Release Commit Hash:** `2781d5d0df79865608157af23f3b641e7d200f88`
- **Release Commit Message:** `Release NeonPlan 3D 4.0.2.2b1 — Domolux Luxury Furniture`
- **Git Tag:** `v4.0.2.2b1` (Annotated tag pointing to `2781d5d0`)
- **Integration Version:** `4.0.2.2b1`
- **Pre-Release Classification:** Beta / Pre-release (AwesomeVersion & packaging.version validated: `4.0.2.2b1 > 4.0.2.1` = True, `is_prerelease` = True)

---

## 3. Build & Test Validation Matrix

All mandatory pre-release test suites were executed locally against the release tree:

| Test / Verification Suite | Command | Exit Code | Result |
|---|---|:---:|:---:|
| **Domolux CI Guardrail** | `python3 tools/domolux_guard.py` | 0 | **PASS** (4 keys verified, Domolux key `d08c59237e4f` intact, manifest `4.0.2.2b1` verified) |
| **TypeScript Strict Compilation** | `npm run typecheck` (`tsc --noEmit`) | 0 | **PASS** (0 compiler errors) |
| **Furniture Unit Tests** | `node --test src/viewer/furniture.test.ts` | 0 | **PASS** (21 / 21 tests passed) |
| **Core Model Test Suite** | `node --test "src/**/*.test.ts"` | 0 | **PASS** (731 / 731 tests passed) |
| **Production Bundler** | `node build.mjs` | 0 | **PASS** (All 10 bundles compiled within budget) |
| **Secret Scanning** | Embedded in `domolux_guard.py` | 0 | **PASS** (0 private keys / 0 PEM markers detected) |
| **Domolux Asset Protection** | `domolux/source/` & `domolux/dist/` | 0 | **PASS** (Signed packs intact; signing key `/home/ismabeast/.neonplan3d/keys/domolux-signing-key.pem` untouched) |

### Production Bundle Size & SHA256 Hashes
- `neonplan3d-3d.js`: **944.9 KB** (budget 950 KB)  
  *SHA256:* `fe7d0bb9f02d8c1671cc5cfdeea662b0844d0802563732447c582ba7e07adc92`
- `neonplan3d.js`: **779.9 KB** (budget 870 KB)  
  *SHA256:* `19770059aefd00873e0d355ec2a44faca7c538d17b7a15e18a9eb799d7a262bd`
- `neonplan3d-editor.js`: **1,154.5 KB** (budget 1,160 KB)  
  *SHA256:* `ad56995cbf12627fa4d5bc9a14578b75f7c9ce1d6747348a8434291335b8c99b`

---

## 4. HACS Asset Packaging (`neonplan3d.zip`)

The release archive was generated directly from `custom_components/neonplan3d/` following `.github/workflows/release.yml`:

- **Archive File:** `neonplan3d.zip`
- **File Size:** **2,453,303 bytes (2.4 MB)**
- **SHA256 Checksum:** `ad2267a580d9115e70e01498ffa17acdd9f627aa11407ec9844e8dcd4fec3928`
- **ZIP Compression Integrity:** **PASSED** (`unzip -t` reports 0 errors across all 79 entries)
- **Root Directory Structure:** **VERIFIED CORRECT** (Direct root format containing `manifest.json`, `__init__.py`, `config_flow.py`, `packs.py`, `frontend/`, `translations/`; no wrapping directory).
- **Embedded Manifest Version:** `4.0.2.2b1`
- **Cleanliness:** Zero `.claude/`, `.git/`, test scripts, `.pem` or private keys included.

---

## 5. Git Operations Accounting

- **Configured Remotes:**
  - `domolux`: `https://github.com/domolux/neonplan3d.git` (Added per Section 3; probe returns HTTP 404)
  - `origin`: `git@github.com:ismail-devmaster/domolux-neonplan3d.git` (Preserved untouched)
- **Local Branch:** `main` (Advanced by commit `2781d5d0`)
- **Local Tag:** `v4.0.2.2b1` (Points to `2781d5d0`)
- **Remote Pushes:** **0 PUSHES EXECUTED**
- **Protection Compliance:**
  - `origin` was **NOT** modified or pushed to.
  - No force-push was attempted.
  - Stable release `v4.0.2.1` remains completely intact and undisturbed.

---

## 6. How to Unblock Publication

To complete publication once authorized:

1. **Option A (Create `domolux/neonplan3d` on GitHub):**
   - Create repository `https://github.com/domolux/neonplan3d` under organization `domolux`.
   - Grant write access to user `ismail-devmaster`.
   - Run:
     ```bash
     git push domolux main
     git push domolux v4.0.2.2b1
     # Create GitHub Pre-Release v4.0.2.2b1 and attach neonplan3d.zip
     ```
2. **Option B (Authorize Publication to `origin`):**
   - If the intention was to publish the beta under `ismail-devmaster/domolux-neonplan3d`:
   - The user must explicitly approve pushing to `origin`.
   - Once approved, push `main` and `v4.0.2.2b1` to `origin` and attach `neonplan3d.zip` to the GitHub Pre-release.
