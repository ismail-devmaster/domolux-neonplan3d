// Comprehensive Import Validation Suite for Domolux Private Collection 30
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import crypto from "node:crypto";
import { DOMOLUX_COLLECTION_30 } from "./domolux_definitions.mjs";

const ROOT = process.cwd();
const DIST_DIR = join(ROOT, "domolux", "dist");
const SOURCE_DIR = join(ROOT, "domolux", "source");
const SPECS_DIR = join(ROOT, "domolux", "specs");

const EXPECTED_KEY_ID = "d08c59237e4f";
const EXPECTED_PUBKEY = "DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=";

// Ed25519 public key setup
const pubDer = Buffer.concat([
  Buffer.from("302a300506032b6570032100", "hex"),
  Buffer.from(EXPECTED_PUBKEY, "base64"),
]);
const pubKey = crypto.createPublicKey({ key: pubDer, format: "der", type: "spki" });

function canonical(obj) {
  if (obj === null || typeof obj !== "object") return JSON.stringify(obj);
  if (Array.isArray(obj)) return "[" + obj.map(canonical).join(",") + "]";
  const keys = Object.keys(obj).sort();
  return "{" + keys.map((k) => JSON.stringify(k) + ":" + canonical(obj[k])).join(",") + "}";
}

console.log("=== EXECUTING DOMOLUX COLLECTION 30 IMPORT VALIDATION SUITE ===");

const allPackIds = new Set();
const allItemIds = new Set();
let passedPacks = 0;
let passedTamper = 0;
let passedSecrets = 0;

for (const p of DOMOLUX_COLLECTION_30) {
  const packFile = join(DIST_DIR, `${p.id}.fp3dpack`);
  const sourceFile = join(SOURCE_DIR, `${p.id}.json`);
  const specFile = join(SPECS_DIR, `${p.id}.md`);

  if (!existsSync(packFile)) throw new Error(`Missing pack file: ${packFile}`);
  if (!existsSync(sourceFile)) throw new Error(`Missing source file: ${sourceFile}`);
  if (!existsSync(specFile)) throw new Error(`Missing spec file: ${specFile}`);

  const rawPackText = readFileSync(packFile, "utf8");
  if (rawPackText.length > 1_000_000) throw new Error(`Pack ${p.id} exceeds max pack size!`);

  const packData = JSON.parse(rawPackText);
  const payload = packData.payload;
  const signature = packData.signature;

  // 1. Format and version
  if (payload.format !== "fp3dpack" || payload.version !== 1) {
    throw new Error(`Invalid format or version in ${p.id}`);
  }

  // 2. Publisher identity
  if (payload.publisher !== "Domolux Studio") throw new Error(`Invalid publisher in ${p.id}`);
  if (signature.key !== EXPECTED_KEY_ID) throw new Error(`Invalid signature key in ${p.id}`);

  // 3. Unique IDs
  if (allPackIds.has(payload.id)) throw new Error(`Duplicate pack ID: ${payload.id}`);
  allPackIds.add(payload.id);

  if (payload.items.length !== 1) throw new Error(`Expected exactly 1 item in pack ${p.id}`);
  const item = payload.items[0];
  if (allItemIds.has(item.id)) throw new Error(`Duplicate item ID: ${item.id}`);
  allItemIds.add(item.id);

  // 4. Names
  if (!item.name.en || !item.name.de || !item.name.ar) {
    throw new Error(`Missing multilingual names in ${p.id}`);
  }

  // 5. Dimensions
  const [w, d, h] = item.size;
  if (!Number.isFinite(w) || !Number.isFinite(d) || !Number.isFinite(h) || w <= 0 || d <= 0 || h <= 0) {
    throw new Error(`Invalid dimensions in ${p.id}`);
  }

  // 6. Geometry parts
  if (item.parts.length < 1 || item.parts.length > 60) {
    throw new Error(`Invalid part count in ${p.id}: ${item.parts.length}`);
  }

  // 7. Signature verification
  const canonBytes = Buffer.from(canonical(payload), "utf8");
  const sigBytes = Buffer.from(signature.sig, "base64");
  const valid = crypto.verify(null, canonBytes, pubKey, sigBytes);
  if (!valid) throw new Error(`Signature verification FAILED for ${p.id}`);
  passedPacks++;

  // 8. Tamper resistance
  const tampered = JSON.parse(JSON.stringify(payload));
  tampered.release = 2;
  const tamperedCanon = Buffer.from(canonical(tampered), "utf8");
  const tamperValid = crypto.verify(null, tamperedCanon, pubKey, sigBytes);
  if (tamperValid) throw new Error(`Tamper resistance test FAILED for ${p.id}`);
  passedTamper++;

  // 9. Absence of private key material
  const forbidden = ["PRIVATE KEY", "BEGIN EC", "BEGIN RSA", "BEGIN OPENSSH", "BEGIN ED25519"];
  for (const f of [rawPackText, readFileSync(sourceFile, "utf8"), readFileSync(specFile, "utf8")]) {
    for (const marker of forbidden) {
      if (f.includes(marker)) throw new Error(`Secret detected in deliverable for ${p.id}!`);
    }
  }
  passedSecrets++;

  console.log(`[PASS] Pack #${p.num.toString().padStart(2, "0")} ${p.id.padEnd(28)} -> Validated, Signed, Tamper-Proof`);
}

// Check existing assets intact
for (const existingId of ["desk_executive", "luxury_spa_bathtub"]) {
  const existingPack = join(DIST_DIR, `${existingId}.fp3dpack`);
  if (!existsSync(existingPack)) throw new Error(`Existing pack missing: ${existingPack}`);
  const raw = JSON.parse(readFileSync(existingPack, "utf8"));
  const canonBytes = Buffer.from(canonical(raw.payload), "utf8");
  const sigBytes = Buffer.from(raw.signature.sig, "base64");
  const valid = crypto.verify(null, canonBytes, pubKey, sigBytes);
  if (!valid) throw new Error(`Existing pack signature corrupted: ${existingId}`);
  console.log(`[PASS] Existing Asset: ${existingId} intact and verified`);
}

console.log("\n=== IMPORT VALIDATION SUMMARY ===");
console.log(`Total New Packs Validated: ${passedPacks}/30 (100%)`);
console.log(`Total Tamper Tests Passed: ${passedTamper}/30 (100%)`);
console.log(`Total Secret Isolation Checks Passed: ${passedSecrets}/30 (100%)`);
console.log(`Existing Domolux Assets Intact: 2/2 (100%)`);
console.log("All 30 Domolux packages are verified and ready for Home Assistant import!");
