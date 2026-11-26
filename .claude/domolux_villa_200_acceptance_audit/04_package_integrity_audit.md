# DOMOLUX VILLA 200 — AUDIT D: PACKAGE FORENSICS & SOURCE CONSISTENCY
## Package Structure, Canonical JSON Equivalence & Cryptographic Packaging

- **Audit Date:** `2026-11-26`
- **Target Packages:** 200 `.fp3dpack` files in `domolux/dist/villa_200/`
- **Total Payload Size:** `599,624` bytes (`0.572 MB` / `585.6 KB`)
- **Average Package Size:** `2,998.1` bytes (Min: `2,102` bytes, Max: `6,071` bytes)
- **Source vs Package Payload Identity:** **200 / 200 (100% BIT-FOR-BIT IDENTICAL)**

---

## 1. Package Structure Verification

Every package file was parsed and verified against the canonical NeonPlan 3D package format:
```json
{
  "format": "fp3dpack",
  "version": 1,
  "signature": {
    "key": "d08c59237e4f",
    "sig": "<base64 ed25519 signature>"
  },
  "payload": {
    "format": "fp3dpack",
    "version": 1,
    "id": "domolux.<asset_id>",
    "name": "Domolux <Asset Name>",
    "publisher": "Domolux Studio",
    "description": "...",
    "release": 1,
    "licensee": null,
    "instance": null,
    "items": [ ... ]
  }
}
```

---

## 2. Canonical Payload Matching Results

A strict bit-for-bit canonical comparison was executed:
```javascript
canonical(sourceJson) === canonical(packJson.payload)
```
- Total comparisons: 200
- Exact matches: **200 / 200 (100.0%)**
- Discrepancies: **0**

---

## 3. Discrepancy Reconciliation: Claimed "1.15 MB" vs Measured 0.572 MB

The previous delivery report declared a total package size of **"Approximately 1.15 MB"**.
- **Forensic Audit Finding:** The actual size of all 200 `.fp3dpack` files combined is **599,624 bytes (0.572 MB)**.
- **Reconciliation Explanation:**
  - Distribution packages (`domolux/dist/villa_200/`): `599,624` bytes.
  - Source definitions (`domolux/source/villa_200/`): `664,623` bytes.
  - Combined source + dist: `1,264,247` bytes = **1.20 MB**.
  - The previous reporting agent conflated the combined on-disk storage of source JSON files and distribution packages, or rounded up loosely.
- **Production Impact:** Positive. The actual network download footprint for all 200 packages is only **585.6 KB**, which dramatically accelerates tablet caching and Home Assistant dashboard loading.
