// Prototype Test Script for Domolux Villa 200
import { writeFileSync, readFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import crypto from "node:crypto";

const ROOT = process.cwd();
const KEY_PATH = "/home/ismabeast/.neonplan3d/keys/domolux-signing-key.pem";
const EXPECTED_KEY_ID = "d08c59237e4f";
const EXPECTED_DOMOLUX_PUBKEY = "DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=";

mkdirSync(join(ROOT, "domolux", "source", "villa_200"), { recursive: true });
mkdirSync(join(ROOT, "domolux", "specs", "villa_200"), { recursive: true });
mkdirSync(join(ROOT, "domolux", "dist", "villa_200"), { recursive: true });
mkdirSync(join(ROOT, ".claude", "inspection_screenshots", "Domolux_Villa_200", "01_Architectural_Interior_Systems"), { recursive: true });

function canonical(obj) {
  if (obj === null || typeof obj !== "object") return JSON.stringify(obj);
  if (Array.isArray(obj)) return "[" + obj.map(canonical).join(",") + "]";
  const keys = Object.keys(obj).sort();
  return "{" + keys.map((k) => JSON.stringify(k) + ":" + canonical(obj[k])).join(",") + "}";
}

// Load signing key
const pem = readFileSync(KEY_PATH, "utf8");
const privKey = crypto.createPrivateKey(pem);
const pubKey = crypto.createPublicKey(privKey);
const spkiDer = pubKey.export({ type: "spki", format: "der" });
const rawPub = spkiDer.subarray(12);
const derivedKeyId = crypto.createHash("sha256").update(rawPub).digest("hex").slice(0, 12);
const derivedPubB64 = rawPub.toString("base64");

if (derivedKeyId !== EXPECTED_KEY_ID || derivedPubB64 !== EXPECTED_DOMOLUX_PUBKEY) {
  throw new Error(`Key mismatch: derived ${derivedKeyId}, expected ${EXPECTED_KEY_ID}`);
}

console.log("Verified Signing Key:", derivedKeyId, "(Domolux Studio)");

// Prototype: Product 001
const p001 = {
  num: 1,
  id: "architectural_wall_cladding",
  packId: "domolux.architectural_wall_cladding",
  name: {
    en: "Domolux Architectural Wall Cladding System",
    de: "Domolux Architektur-Wandverkleidungssystem",
    ar: "نظام دومولوكس لتكسية الجدران المعمارية"
  },
  collection: "Architectural Interior Systems",
  collectionSlug: "01_Architectural_Interior_Systems",
  category: "Architectural Elements",
  description: "Monumental modular architectural wall paneling system featuring fluted smoked oak stiles, honed Calacatta marble central reveal, recessed satin bronze shadow gaps, and integrated vertical ambient LED illumination.",
  size: [2.80, 0.12, 2.80],
  mount: "wall",
  wall_y: 0.0,
  surface: false,
  group: "wall",
  room: ["living", "hall", "dining", "bedroom"],
  tags: ["wall", "cladding", "wood", "marble", "bronze", "architectural", "domolux"],
  parts: [
    // 1. Recessed dark sub-plinth / shadow gap base
    { shape: "box", x: 0.0, z: -0.25, w: 0.98, d: 0.40, y: 0.0, h: 0.025, color: "#121316", edges: "faint", fix: "h" },
    // 2. Travertine / marble central feature vertical panel
    { shape: "box", x: 0.0, z: -0.05, w: 0.36, d: 0.70, y: 0.025, h: 0.95, color: "#dcd6cc", finish: "body", edges: true },
    // 3. Left smoked oak backing panel
    { shape: "box", x: -0.32, z: -0.15, w: 0.32, d: 0.60, y: 0.025, h: 0.95, color: "#2c241e", finish: "wood", edges: "faint" },
    // 4. Right smoked oak backing panel
    { shape: "box", x: 0.32, z: -0.15, w: 0.32, d: 0.60, y: 0.025, h: 0.95, color: "#2c241e", finish: "wood", edges: "faint" },
    // 5. Left outer satin bronze architectural frame stile
    { shape: "box", x: -0.49, z: 0.0, w: 0.02, d: 0.85, y: 0.025, h: 0.95, color: "#9e8354", edges: "glow", fix: "wd" },
    // 6. Right outer satin bronze architectural frame stile
    { shape: "box", x: 0.49, z: 0.0, w: 0.02, d: 0.85, y: 0.025, h: 0.95, color: "#9e8354", edges: "glow", fix: "wd" },
    // 7. Left marble-wood dividing bronze reveal
    { shape: "box", x: -0.18, z: 0.02, w: 0.015, d: 0.88, y: 0.025, h: 0.95, color: "#c5a059", edges: "glow", fix: "wd" },
    // 8. Right marble-wood dividing bronze reveal
    { shape: "box", x: 0.18, z: 0.02, w: 0.015, d: 0.88, y: 0.025, h: 0.95, color: "#c5a059", edges: "glow", fix: "wd" },
    // 9. Left LED ambient channel (warm white backlight)
    { shape: "box", x: -0.19, z: 0.05, w: 0.01, d: 0.15, y: 0.04, h: 0.92, color: "#ffe0b2", glow: true, edges: "glow", fix: "wd" },
    // 10. Right LED ambient channel (warm white backlight)
    { shape: "box", x: 0.19, z: 0.05, w: 0.01, d: 0.15, y: 0.04, h: 0.92, color: "#ffe0b2", glow: true, edges: "glow", fix: "wd" },
    // 11-14: Smoked oak vertical architectural fins (left side)
    { shape: "box", x: -0.44, z: 0.08, w: 0.04, d: 0.50, y: 0.025, h: 0.95, color: "#3d322a", finish: "wood", edges: true, fix: "w" },
    { shape: "box", x: -0.38, z: 0.08, w: 0.04, d: 0.50, y: 0.025, h: 0.95, color: "#3d322a", finish: "wood", edges: true, fix: "w" },
    { shape: "box", x: -0.30, z: 0.08, w: 0.04, d: 0.50, y: 0.025, h: 0.95, color: "#3d322a", finish: "wood", edges: true, fix: "w" },
    { shape: "box", x: -0.24, z: 0.08, w: 0.04, d: 0.50, y: 0.025, h: 0.95, color: "#3d322a", finish: "wood", edges: true, fix: "w" },
    // 15-18: Smoked oak vertical architectural fins (right side)
    { shape: "box", x: 0.24, z: 0.08, w: 0.04, d: 0.50, y: 0.025, h: 0.95, color: "#3d322a", finish: "wood", edges: true, fix: "w" },
    { shape: "box", x: 0.30, z: 0.08, w: 0.04, d: 0.50, y: 0.025, h: 0.95, color: "#3d322a", finish: "wood", edges: true, fix: "w" },
    { shape: "box", x: 0.38, z: 0.08, w: 0.04, d: 0.50, y: 0.025, h: 0.95, color: "#3d322a", finish: "wood", edges: true, fix: "w" },
    { shape: "box", x: 0.44, z: 0.08, w: 0.04, d: 0.50, y: 0.025, h: 0.95, color: "#3d322a", finish: "wood", edges: true, fix: "w" },
    // 19. Top architectural frieze / shadow return
    { shape: "box", x: 0.0, z: -0.10, w: 1.0, d: 0.65, y: 0.975, h: 0.025, color: "#1f1d1b", edges: "faint", fix: "h" },
    // 20. Top bronze crowning band
    { shape: "box", x: 0.0, z: 0.02, w: 0.98, d: 0.88, y: 0.97, h: 0.015, color: "#9e8354", edges: "glow", fix: "h" }
  ],
  symbol: [
    { shape: "rect", x: 0.0, z: 0.0, w: 1.0, d: 0.85 },
    { shape: "line", x1: -0.49, z1: -0.42, x2: 0.49, z2: -0.42 },
    { shape: "line", x1: -0.18, z1: 0.42, x2: -0.18, z2: -0.42 },
    { shape: "line", x1: 0.18, z1: 0.42, x2: 0.18, z2: -0.42 }
  ]
};

// 1. Write Source JSON
const payload = {
  format: "fp3dpack",
  version: 1,
  id: p001.packId,
  name: p001.name.en,
  publisher: "Domolux Studio",
  description: p001.description,
  release: 1,
  licensee: null,
  instance: null,
  items: [
    {
      id: p001.id,
      name: p001.name,
      size: p001.size,
      mount: p001.mount,
      wall_y: p001.wall_y,
      surface: p001.surface,
      group: p001.group,
      room: p001.room,
      tags: p001.tags,
      parts: p001.parts,
      symbol: p001.symbol
    }
  ]
};

const srcFile = join(ROOT, "domolux", "source", "villa_200", `${p001.id}.json`);
writeFileSync(srcFile, JSON.stringify(payload, null, 2), "utf8");
console.log("[1] Source written:", srcFile);

// 2. Sign
const canonBytes = Buffer.from(canonical(payload), "utf8");
const sigBytes = crypto.sign(null, canonBytes, privKey);
const signedPack = {
  payload,
  signature: {
    key: derivedKeyId,
    sig: sigBytes.toString("base64")
  }
};
const distFile = join(ROOT, "domolux", "dist", "villa_200", `${p001.id}.fp3dpack`);
writeFileSync(distFile, JSON.stringify(signedPack, null, 1), "utf8");
console.log("[2] Signed pack written:", distFile);

// 3. Verify
const verValid = crypto.verify(null, canonBytes, pubKey, sigBytes);
if (!verValid) throw new Error("Signature verification failed!");
console.log("[3] Signature verified: PASS");

// 4. Tamper Test
const tampered = JSON.parse(JSON.stringify(payload));
tampered.description += " [tampered]";
const tamperedCanon = Buffer.from(canonical(tampered), "utf8");
const tamperPass = !crypto.verify(null, tamperedCanon, pubKey, sigBytes);
if (!tamperPass) throw new Error("Tamper test failed!");
console.log("[4] Tamper resistance: PASS");

console.log("\n=== PROTOTYPE PIPELINE FULLY VALIDATED ===");
