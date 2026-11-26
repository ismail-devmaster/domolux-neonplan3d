# Forensic Audit of Package Signatures, Hashes & Provenance Boundaries

**Authority:** Cryptographic Security & Asset Forensics Auditor
**Target Publisher:** Domolux Studio (`d08c59237e4f`)
**Public Key:** `DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=` (RFC 8032 Ed25519)
**Packages Audited:** 232 packages (232 valid)

---

## 1. Precise Terminology & Provenance Boundary Definitions

In accordance with strict forensic discipline, we establish clear distinctions between cryptographic assertions and historical provenance:

1. **Cryptographic Signature Validity:** Proves that the canonical payload of the package matches the signature signed by the private key corresponding to `d08c59237e4f`. Result: **100% VALID (232/232)**.
2. **Package Integrity:** Proves that package file bytes on disk have not suffered bit rot, truncation, or unauthorized alteration. Verified via SHA-256 byte hashes and payload tamper tests. Result: **100% VERIFIED**.
3. **Verified Publisher-Key Association:** Confirms that public key `d08c59237e4f` is officially registered in `custom_components/neonplan3d/packs.py` under the name `'Domolux Studio'` as an authorized vendor key. Result: **CONFIRMED**.
4. **Provenance Evidence vs Historical Authorship:** Cryptographic validation guarantees that Domolux Studio published and sealed these packages. However, it does not cryptographically prove the physical identity of human 3D modelers or a complete legal chain-of-title prior to key signing. Those claims rest on repository commit history (`tools/build_domolux30.mjs`, `tools/domolux200_*.mjs`), not solely on the Ed25519 signature.
5. **Runtime Functionality vs Signature:** A cryptographically valid package is not automatically active or functional in scenes. 128 of the 232 valid packages remain unimported in Home Assistant runtime storage.

---

## 2. Cryptographic Verification Methodology

Each package was evaluated against the following strict algorithmic pipeline:
- **Canonical Byte Serialization:** UTF-8 encoded JSON with sorted keys, zero indentation, and strict separators (`,` and `:`).
- **Ed25519 Signature Check:** Executed via `crypto.verify(null, canonBytes, pubKey, sigBytes)`.
- **Active Tamper Resistance:** A synthetic mutation (`_tamper: 1`) was injected into each payload and re-verified. 100% of tampered payloads were immediately rejected.
- **File & Payload Hashing:** Full SHA-256 digests recorded for both the package file on disk and the canonical payload.

---

## 3. Cryptographic Package Ledger (Sample 20 of 232)

| Pack ID | Package File Path | File Size | Package SHA-256 (First 16 Hex) | Payload SHA-256 (First 16 Hex) | Signature Status | Tamper Test |
|---|---|:---:|---|---|:---:|:---:|
| `domolux.cinema_recliner` | `domolux/dist/cinema_recliner.fp3dpack` | 6029 B | `7753374e9494b32e...` | `b1eb300c04ad28f9...` | **PASS** | **PASS** |
| `domolux.closet_island` | `domolux/dist/closet_island.fp3dpack` | 6611 B | `c3ef598ed5274ed7...` | `9c10e25d3490d2cb...` | **PASS** | **PASS** |
| `domolux.concert_grand_piano` | `domolux/dist/concert_grand_piano.fp3dpack` | 7517 B | `26d5a3230b0df7c6...` | `639be2566fe9039d...` | **PASS** | **PASS** |
| `domolux.designer_cat_tree` | `domolux/dist/designer_cat_tree.fp3dpack` | 4050 B | `bb6a966a36505544...` | `02ddf5502a07b27b...` | **PASS** | **PASS** |
| `domolux.executive_desk` | `domolux/dist/desk_executive.fp3dpack` | 6211 B | `c07cad8755649ade...` | `cae66430916aad52...` | **PASS** | **PASS** |
| `domolux.dressing_vanity` | `domolux/dist/dressing_vanity.fp3dpack` | 5400 B | `c6b0ac5709f14d43...` | `6a0d0f3efce9ef9b...` | **PASS** | **PASS** |
| `domolux.dual_cable_trainer` | `domolux/dist/dual_cable_trainer.fp3dpack` | 5356 B | `3661c0bdf7eb36b2...` | `bdd6477b4de4e03e...` | **PASS** | **PASS** |
| `domolux.finnish_sauna_cabin` | `domolux/dist/finnish_sauna_cabin.fp3dpack` | 4874 B | `7d470fa19c3f41bd...` | `160cc6e8335b8961...` | **PASS** | **PASS** |
| `domolux.floorstanding_hifi_speaker` | `domolux/dist/floorstanding_hifi_speaker.fp3dpack` | 6172 B | `04bae6d548f8a486...` | `4fcd1cbba4b30062...` | **PASS** | **PASS** |
| `domolux.full_body_massage_chair` | `domolux/dist/full_body_massage_chair.fp3dpack` | 5023 B | `be47cf64a8bb0042...` | `e38475c3ce2c5167...` | **PASS** | **PASS** |
| `domolux.full_length_mirror` | `domolux/dist/full_length_mirror.fp3dpack` | 3879 B | `297fd5a877748319...` | `dd169c8b7672861a...` | **PASS** | **PASS** |
| `domolux.garment_care_steam_cabinet` | `domolux/dist/garment_care_steam_cabinet.fp3dpack` | 4239 B | `8cc90961d8864f45...` | `5fe42edda564a036...` | **PASS** | **PASS** |
| `domolux.indoor_sculptural_fountain` | `domolux/dist/indoor_sculptural_fountain.fp3dpack` | 4032 B | `58fa9fa4226cd1cd...` | `9818a6d9479ca152...` | **PASS** | **PASS** |
| `domolux.jewelry_safe` | `domolux/dist/jewelry_safe.fp3dpack` | 4247 B | `acde7df13667974f...` | `95f367d818cb8e71...` | **PASS** | **PASS** |
| `domolux.laser_projector` | `domolux/dist/laser_projector.fp3dpack` | 4291 B | `575df459b8c0530e...` | `e0d34b663109c8b1...` | **PASS** | **PASS** |
| `domolux.luxury_aquarium` | `domolux/dist/luxury_aquarium.fp3dpack` | 5129 B | `1d0e112f7e1fad2f...` | `befe70517733188e...` | **PASS** | **PASS** |
| `domolux.luxury_spa_bathtub` | `domolux/dist/luxury_spa_bathtub.fp3dpack` | 16544 B | `f018296198064544...` | `5f36e1fa3d89ec8e...` | **PASS** | **PASS** |
| `domolux.luxury_treadmill` | `domolux/dist/luxury_treadmill.fp3dpack` | 4639 B | `13d69d0eb7b538d2...` | `ee3614f17af1ead9...` | **PASS** | **PASS** |
| `domolux.motorized_drapery` | `domolux/dist/motorized_drapery.fp3dpack` | 6378 B | `2fa3d069e4f5c718...` | `c9aa9ace367dda08...` | **PASS** | **PASS** |
| `domolux.motorized_projection_screen` | `domolux/dist/motorized_projection_screen.fp3dpack` | 3859 B | `ab746b45fae7a438...` | `56ebec7f48f79863...` | **PASS** | **PASS** |

> [!NOTE]
> The complete SHA-256 hashes and signature values for all 232 packages are archived in machine-readable JSON format at [`.claude/neonplan3d_full_asset_inventory/signature_verification_ledger.json`](file:///home/ismabeast/Desktop/ponglearn/neonplan3d/.claude/neonplan3d_full_asset_inventory/signature_verification_ledger.json).
