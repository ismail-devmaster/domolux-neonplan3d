# DOMOLUX VILLA 200 — REPOSITORY BASELINE REPORT

**Specification Reference:** Section 1.3 & Section 14.1  
**Generated At:** 2026-11-26T01:43:49.488Z  
**Repository Working Directory:** `/home/ismabeast/Desktop/ponglearn/neonplan3d`

---

## 1. Git State & Working Tree
- **Current Git Branch:** `main`
- **Current Commit Hash:** `0ba8021bf93b7c5dccbf24b0005beab615f65c5e`
- **Working Tree Cleanliness:** All tracked core files remain strictly unmodified.
- **Tracked Modifications:** None (`0` modified tracked files).
- **Staged Changes:** None.
- **Untracked Directories:**
  - `domolux/dist/villa_200/`
  - `domolux/source/villa_200/`
  - `domolux/specs/villa_200/`
  - `.claude/`
  - `tools/` (new tooling scripts)

---

## 2. Existing Asset Counts Prior to Assignment
- **Built-in System Assets:** 81 native furniture/architectural items defined in `frontend/src/viewer/furniture.ts`
- **Pre-existing Domolux Packages:** 32 signed packages in `domolux/dist/`
  - Original 2 items: `desk_executive.fp3dpack`, `luxury_spa_bathtub.fp3dpack`
  - Domolux Private Collection 30: 30 items (#01 to #30)
- **Pre-existing Domolux Sources:** 32 source JSON definitions in `domolux/source/`
- **Pre-existing Domolux Specs:** 33 specifications in `domolux/specs/`

---

## 3. Directory Conventions & Protected Boundaries
- **Source Files:** `domolux/source/villa_200/<id>.json`
- **Production Packages:** `domolux/dist/villa_200/<id>.fp3dpack`
- **Technical Specs:** `domolux/specs/villa_200/<id>.md`
- **Visual Inspection SVGs:** `.claude/inspection_screenshots/Domolux_Villa_200/<collection>/<num>_<id>_<angle>.svg`
- **Protected Core Files (Never Modified):**
  - `frontend/src/viewer/furniture.ts`
  - `frontend/src/viewer/viewer3d.ts`
  - `frontend/src/components/furniture2d.ts`
  - `custom_components/neonplan3d/packs.py`
  - `custom_components/neonplan3d/manifest.json`

---

## 4. Signing & Verification Infrastructure
- **Authorized Publisher Identity:** `Domolux Studio`
- **Publisher Key ID:** `d08c59237e4f`
- **Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=`
- **Signing Key Path (External, Secure):** `/home/ismabeast/.neonplan3d/keys/domolux-signing-key.pem`
- **Cryptography Engine:** Native Node.js `node:crypto` Ed25519 canonical JSON signer & verifier matching official `tools/fp3dpack.py` bit-for-bit.
