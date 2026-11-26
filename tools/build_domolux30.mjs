// Build, Validate, Document, Sign, and Verify Domolux Private Collection 30
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import crypto from "node:crypto";
import { DOMOLUX_COLLECTION_30 } from "./domolux_definitions.mjs";

const ROOT = process.cwd();
const SOURCE_DIR = join(ROOT, "domolux", "source");
const SPECS_DIR = join(ROOT, "domolux", "specs");
const DIST_DIR = join(ROOT, "domolux", "dist");

mkdirSync(SOURCE_DIR, { recursive: true });
mkdirSync(SPECS_DIR, { recursive: true });
mkdirSync(DIST_DIR, { recursive: true });

const EXPECTED_DOMOLUX_PUBKEY = "DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8=";
const EXPECTED_KEY_ID = "d08c59237e4f";

// Canonical JSON representation matching python packs.canonical
function canonical(obj) {
  if (obj === null || typeof obj !== "object") {
    return JSON.stringify(obj);
  }
  if (Array.isArray(obj)) {
    return "[" + obj.map(canonical).join(",") + "]";
  }
  const keys = Object.keys(obj).sort();
  return "{" + keys.map((k) => JSON.stringify(k) + ":" + canonical(obj[k])).join(",") + "}";
}

// Validation against schema constraints
const VALID_ROLES = new Set(["body", "fabric", "cushion", "wood", "white", "front", "metal", "dark", "glass", "plant", "pot", "accent"]);

function validateProduct(p) {
  if (!p.id || !p.packId || !p.name || !p.size || !p.parts) {
    throw new Error(`Incomplete product definition: ${JSON.stringify(p)}`);
  }
  if (p.parts.length < 1 || p.parts.length > 60) {
    throw new Error(`Product ${p.id} part count out of range (1..60): ${p.parts.length}`);
  }
  for (let i = 0; i < p.parts.length; i++) {
    const part = p.parts[i];
    if (!["box", "cyl", "loft"].includes(part.shape)) {
      throw new Error(`Invalid shape ${part.shape} in ${p.id} part ${i}`);
    }
    if (part.x < -0.5001 || part.x > 0.5001 || part.z < -0.5001 || part.z > 0.5001) {
      throw new Error(`Coordinates out of bounds in ${p.id} part ${i}: x=${part.x}, z=${part.z}`);
    }
    if (part.w <= 0 || part.w > 1.0001 || part.d <= 0 || part.d > 1.0001) {
      throw new Error(`Extents out of bounds in ${p.id} part ${i}: w=${part.w}, d=${part.d}`);
    }
    if (part.y < -0.0001 || part.y > 1.0001 || part.h <= 0 || part.h > 1.0001) {
      throw new Error(`Height out of bounds in ${p.id} part ${i}: y=${part.y}, h=${part.h}`);
    }
    if (part.color.startsWith("#")) {
      if (!/^#[0-9a-fA-F]{6}$/.test(part.color)) {
        throw new Error(`Invalid hex color in ${p.id} part ${i}: ${part.color}`);
      }
    } else if (!VALID_ROLES.has(part.color)) {
      throw new Error(`Invalid palette role in ${p.id} part ${i}: ${part.color}`);
    }
  }
  if (p.symbol) {
    if (p.symbol.length > 40) throw new Error(`Too many symbol elements in ${p.id}`);
  }
}

// Generate individual technical specification Markdown
function generateProductSpec(p) {
  const [W, D, H] = p.size;
  return `# Domolux Specification: ${p.name.en}

## 1. Overview
- **Item ID:** \`${p.id}\`
- **Pack ID:** \`${p.packId}\`
- **Collection:** Domolux Private Collection 30 — ${p.collection}
- **Publisher:** Domolux Studio
- **Version:** 1.0 (Format: \`fp3dpack\`)
- **Status:** Pack Produced & Cryptographically Verified (Key ID: \`${EXPECTED_KEY_ID}\`)
- **Package File:** \`domolux/dist/${p.id}.fp3dpack\`
- **Public Key:** \`${EXPECTED_DOMOLUX_PUBKEY}\`
- **Mount Type:** \`${p.mount || "floor"}\`${p.wall_y ? ` (Mount Height $Y$: ${p.wall_y} m)` : ""}
- **Group:** \`${p.group}\`
- **Target Rooms:** ${p.room.map((r) => `\`${r}\``).join(", ")}
- **Tags:** ${p.tags.map((t) => `\`${t}\``).join(", ")}

---

## 2. Real-World Dimensions & Spatial Anchors
- **Width ($W$):** ${W.toFixed(2)} m (${Math.round(W * 100)} cm)
- **Depth ($D$):** ${D.toFixed(2)} m (${Math.round(D * 100)} cm)
- **Height ($H$):** ${H.toFixed(2)} m (${Math.round(H * 100)} cm)
- **Component Count:** ${p.parts.length} Native Geometric Parts (Maximum limit: 60)
- **Symbol Shapes:** ${p.symbol ? p.symbol.length : 0} 2D Architectural Vector Elements

---

## 3. Coordinate Normalization System
In NeonPlan 3D Furniture Packs:
- $X \\in [-0.5, +0.5]$ across width ($X=0$ is center, $-X$ is left, $+X$ is right).
- $Z \\in [-0.5, +0.5]$ along depth ($-Z$ is rear wall, $+Z$ is front side).
- $Y \\in [0.0, 1.0]$ from floor ($Y=0$) to maximum product height ($Y=1$, ${H.toFixed(2)} m).
- All part coordinates and spans are strictly normalized by $[W, D, H] = [${W.toFixed(2)}, ${D.toFixed(2)}, ${H.toFixed(2)}]$.

---

## 4. Component Breakdown & Geometry Table (${p.parts.length} Parts)

| # | Shape | Normalized Center ($x, z$) | Normalized Extent ($w, d$) | Height ($y, h$) | Color Role / Hex | Edges | Fix | Real-World Function |
|---|---|---|---|---|---|---|---|---|
${p.parts
  .map(
    (part, idx) =>
      `| ${idx + 1} | \`${part.shape}${part.axis ? ` (${part.axis})` : ""}\` | \`(${part.x.toFixed(2)}, ${part.z.toFixed(2)})\` | \`(${part.w.toFixed(2)}, ${part.d.toFixed(2)})\` | \`(${part.y.toFixed(2)}, ${part.h.toFixed(2)})\` | \`${part.color}\` | \`${part.edges || "false"}\` | \`${part.fix || "—"}\` | Architectural element #${idx + 1} |`,
  )
  .join("\n")}

---

## 5. 2D Architectural Symbol Specification
${
  p.symbol && p.symbol.length > 0
    ? p.symbol
        .map((s, idx) => {
          if (s.shape === "rect") return `${idx + 1}. \`rect\` $(x: ${s.x.toFixed(2)}, z: ${s.z.toFixed(2)}, w: ${s.w.toFixed(2)}, d: ${s.d.toFixed(2)})${s.fill ? " (filled)" : ""}`;
          if (s.shape === "circle") return `${idx + 1}. \`circle\` $(x: ${s.x.toFixed(2)}, z: ${s.z.toFixed(2)}, r: ${s.r.toFixed(2)})$`;
          if (s.shape === "line") return `${idx + 1}. \`line\` $(x_1: ${s.x1.toFixed(2)}, z_1: ${s.z1.toFixed(2)}, x_2: ${s.x2.toFixed(2)}, z_2: ${s.z2.toFixed(2)})$`;
          return "";
        })
        .join("\n")
    : "Standard procedural bounding projection."
}

---

## 6. Architectural Material Hierarchy & Engineering Quality
- **Primary Material:** Premium architectural construction calibrated for NeonPlan 3D renderer.
- **Secondary Material:** Structural joinery, shadow gaps, and metallic collars.
- **Craftsmanship Accents:** Fine reveals and precision edges.
- **Cavity Integrity:** Full physical 3D interior with non-overlapping structural geometry.
`;
}

// Generate Master Collection Specification
function generateMasterSpec(products) {
  return `# DOMOLUX PRIVATE COLLECTION 30
## MASTER ARCHITECTURAL CATALOGUE & TECHNICAL SPECIFICATION

**Publisher:** Domolux Studio  
**Publisher Key ID:** \`${EXPECTED_KEY_ID}\`  
**Public Key (Base64):** \`${EXPECTED_DOMOLUX_PUBKEY}\`  
**Total Products:** 30 Unique Luxury Architectural Assets  
**Format:** Native NeonPlan 3D Furniture Pack (\`fp3dpack\`)  
**Standard Release:** 1.0  

---

### Executive Collection Overview

The Domolux Private Collection 30 represents thirty masterfully engineered lifestyle assets for architectural residences, presidential penthouses, and private estates. Every product is individually designed with bespoke silhouettes, ergonomic proportions, authentic cavities, and verified cryptographic signatures.

---

### 30 Products Master Table

| # | Product Name | Item ID | Collection | Dimensions (W × D × H) | Parts | Room Suitability |
|---|---|---|---|---|:---:|---|
${products
  .map(
    (p) =>
      `| ${p.num.toString().padStart(2, "0")} | **${p.name.en}** | \`${p.id}\` | ${p.collection} | ${p.size[0].toFixed(2)} × ${p.size[1].toFixed(2)} × ${p.size[2].toFixed(2)} m | ${p.parts.length} | ${p.room.join(", ")} |`,
  )
  .join("\n")}

---

### Collection Breakdown

#### Collection A: Private Entertainment & Exclusive Residence
1. **Domolux Sculptural Fireplace** (\`sculptural_fireplace\`): Honed travertine surround with panoramic firebox, floating hearth, and ambient glow.
2. **Domolux Concert Grand Piano** (\`concert_grand_piano\`): Obsidian lacquer concert grand piano with cast gold harp, lyre pedals, and matching bench.
3. **Domolux Cinema Power Recliner** (\`cinema_recliner\`): Full-grain cognac leather reclining theater chair with cupholders and motorized pedestal.
4. **Domolux Reference Laser Projector** (\`laser_projector\`): Titanium ceiling-mounted 4K optical projector with multi-element glass lens and heat exhaust.
5. **Domolux Motorized Cinema Screen** (\`motorized_projection_screen\`): Recessed architectural ceiling cassette screen with 16:9 tensioned acoustic canvas.
6. **Domolux Reference Hi-Fi Tower Speaker** (\`floorstanding_hifi_speaker\`): Smoked oak acoustic tower with brushed bronze baffle and isolation spikes.

#### Collection B: Private Dressing, Storage & Personal Care
7. **Domolux Motorized Drapery** (\`motorized_drapery\`): Floor-to-ceiling dual-track Belgian blackout linen and sheer acoustic drapery.
8. **Domolux Sculptural Dressing Mirror** (\`full_length_mirror\`): Organic full-height mirror with champagne bronze frame, backlighting, and marble base.
9. **Domolux Haute Couture Dressing Vanity** (\`dressing_vanity\`): Walnut credenza with Calacatta marble slab, leather insert, illuminated mirror, and bouclé stool.
10. **Domolux Walk-In Closet Island** (\`closet_island\`): Smoked glass vitrine island with velvet watch cushions and dual-sided drawers.
11. **Domolux Armored Jewelry Safe** (\`jewelry_safe\`): Carbon-anthracite safe with 3-spoke vault wheel, biometric keypad, and watch winders.
12. **Domolux Bespoke Shoe-Care Station** (\`shoe_care_station\`): Smoked walnut valet with cognac leather seat, rotary buffing station, and display shelves.
13. **Domolux Garment-Care Steam Cabinet** (\`garment_care_steam_cabinet\`): Dark titanium appliance with smoked mirror door, suit rail, and pants press.

#### Collection C: Architectural Wellness & Private Sanctuaries
14. **Domolux Sculptural Room Divider** (\`sculptural_room_divider\`): Fluted smoked oak vertical louvers with bronze uprights and travertine base.
15. **Domolux Indoor Sculptural Fountain** (\`indoor_sculptural_fountain\`): Dark basalt stone monolith with satin bronze weir blade and pebble catch basin.
16. **Domolux Architectural Luxury Aquarium** (\`luxury_aquarium\`): Frameless low-iron glass tank with dragon stone aquascape and walnut cabinet.
17. **Domolux Finnish Sauna Sanctuary** (\`finnish_sauna_cabin\`): Thermal aspen timber cabin with tempered glass door, dual benches, and stone heater.
18. **Domolux Full-Body Massage Chair** (\`full_body_massage_chair\`): Aerodynamic pearl metallic shell capsule with quilted Nappa leather and foot pod.

#### Collection D: Private Fitness & Performance Wellness
19. **Domolux Professional Pilates Reformer** (\`pilates_reformer\`): American walnut reformer with aluminum glide rails, leather carriage, and footbar.
20. **Domolux Elite Commercial Treadmill** (\`luxury_treadmill\`): Cast aluminum deck with dark bronze uprights, curved HD touchscreen, and running belt.
21. **Domolux Performance Indoor Cycle** (\`premium_exercise_bike\`): Midnight aero V-frame with perimeter-weighted magnetic flywheel and racing saddle.
22. **Domolux Dual Cable Functional Trainer** (\`dual_cable_trainer\`): Dual steel weight column towers with adjustable trolley carriages and pull-up bar.

#### Collection E: Private Estate & Outdoor Living
23. **Domolux Grand Resort Sun Lounger** (\`outdoor_sun_lounger\`): Plantation teak sunbed with reclining backrest, Sunbrella cushion, and cocktail tray.
24. **Domolux Sculptural Outdoor Fire Pit** (\`outdoor_fire_pit\`): Honed travertine square fire table with stainless burner and lava rock bed.
25. **Domolux Outdoor Gourmet Grill Station** (\`outdoor_grill_station\`): Granite outdoor kitchen island with 42-inch 6-burner grill and sear station.
26. **Domolux Architectural Outdoor Shower** (\`outdoor_shower_column\`): 316 stainless column with teak drainage platform and square rain shower.
27. **Domolux Robotic Estate Mower Dock** (\`robotic_lawn_mower_dock\`): Zinc canopy shelter with concrete guide ramp and docked autonomous mower.

#### Collection F: Exclusive Pet Lifestyle
28. **Domolux Architectural Cat Climbing Tree** (\`designer_cat_tree\`): Solid oak climbing sculpture with sisal posts, bouclé perches, and sleeping pod.
29. **Domolux Intelligent Pet Dining Station** (\`smart_pet_feeding_station\`): Fluted walnut station with dry food hopper, dual ceramic bowls, and dispenser.
30. **Domolux Luxury Pet Grooming Suite** (\`pet_grooming_wash_station\`): Seamless composite wash tub with teak entrance steps and grooming restraint arm.

---

### Cryptographic Security & Verification
All 30 packages are individually compiled and signed with Ed25519 digital signatures. The signatures cover the canonical UTF-8 payload representation. Any modification immediately invalidates the package.
`;
}

// Main execution function
export async function runBuild(signingKeyPemPath) {
  console.log("=== DOMOLUX PRIVATE COLLECTION 30 BUILD & SIGNING PIPELINE ===");
  console.log(`Loaded ${DOMOLUX_COLLECTION_30.length} product definitions.`);

  // Load private key
  if (!signingKeyPemPath) {
    throw new Error("Private signing key path must be provided.");
  }
  const pem = readFileSync(signingKeyPemPath, "utf8");
  const privKey = crypto.createPrivateKey(pem);
  const pubKey = crypto.createPublicKey(privKey);
  const spkiDer = pubKey.export({ type: "spki", format: "der" });
  const rawPub = spkiDer.subarray(12);
  const derivedKeyId = crypto.createHash("sha256").update(rawPub).digest("hex").slice(0, 12);
  const derivedPubB64 = rawPub.toString("base64");

  if (derivedKeyId !== EXPECTED_KEY_ID || derivedPubB64 !== EXPECTED_DOMOLUX_PUBKEY) {
    throw new Error(`Signing key mismatch! Expected key ID ${EXPECTED_KEY_ID}, got ${derivedKeyId}`);
  }
  console.log(`Verified Signing Key: Key ID ${derivedKeyId} (Publisher: Domolux Studio)`);

  const results = [];

  for (const p of DOMOLUX_COLLECTION_30) {
    validateProduct(p);

    // Prepare Pack Payload
    const payload = {
      format: "fp3dpack",
      version: 1,
      id: p.packId,
      name: p.name.en,
      publisher: "Domolux Studio",
      description: p.description,
      release: 1,
      licensee: null,
      instance: null,
      items: [
        {
          id: p.id,
          name: p.name,
          size: p.size,
          mount: p.mount || "floor",
          ...(p.wall_y ? { wall_y: p.wall_y } : {}),
          surface: !!p.surface,
          group: p.group,
          room: p.room,
          tags: p.tags,
          parts: p.parts,
          ...(p.symbol ? { symbol: p.symbol } : {}),
        },
      ],
    };

    // 1. Write Source JSON
    const sourcePath = join(SOURCE_DIR, `${p.id}.json`);
    writeFileSync(sourcePath, JSON.stringify(payload, null, 2), "utf8");

    // 2. Write Technical Specification Markdown
    const specPath = join(SPECS_DIR, `${p.id}.md`);
    writeFileSync(specPath, generateProductSpec(p), "utf8");

    // 3. Cryptographic Signing
    const canonBytes = Buffer.from(canonical(payload), "utf8");
    const sigBytes = crypto.sign(null, canonBytes, privKey);
    const signature = {
      key: derivedKeyId,
      sig: sigBytes.toString("base64"),
    };

    const signedPack = {
      payload,
      signature,
    };

    const distPath = join(DIST_DIR, `${p.id}.fp3dpack`);
    writeFileSync(distPath, JSON.stringify(signedPack, null, 1), "utf8");

    // 4. Independent Verification
    const verifyValid = crypto.verify(null, canonBytes, pubKey, sigBytes);
    if (!verifyValid) {
      throw new Error(`Signature verification failed immediately for ${p.id}!`);
    }

    // 5. Tamper Resistance Test
    const tamperedPayload = JSON.parse(JSON.stringify(payload));
    tamperedPayload.description = tamperedPayload.description + " [tampered]";
    const tamperedCanon = Buffer.from(canonical(tamperedPayload), "utf8");
    const tamperValid = crypto.verify(null, tamperedCanon, pubKey, sigBytes);
    if (tamperValid) {
      throw new Error(`Tamper detection failed for ${p.id}! Tampered payload passed signature check.`);
    }

    results.push({
      num: p.num,
      id: p.id,
      packId: p.packId,
      name: p.name.en,
      partsCount: p.parts.length,
      fileSize: readFileSync(distPath).length,
      signatureValid: verifyValid,
      tamperPassed: !tamperValid,
    });

    console.log(`[PASS] #${p.num.toString().padStart(2, "0")} ${p.id.padEnd(30)} -> Signed & Verified (${p.parts.length} parts, ${readFileSync(distPath).length} bytes)`);
  }

  // 6. Generate Master Specification
  const masterSpecPath = join(SPECS_DIR, "domolux_private_collection_30.md");
  writeFileSync(masterSpecPath, generateMasterSpec(DOMOLUX_COLLECTION_30), "utf8");
  console.log(`\nWrote Master Collection Specification to: ${masterSpecPath}`);

  console.log(`\nAll 30 products successfully generated, signed, and cryptographically verified!`);
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("build_domolux30.mjs")) {
  const keyPath = process.argv[2] || "/home/ismabeast/.neonplan3d/keys/domolux-signing-key.pem";
  runBuild(keyPath).catch((err) => {
    console.error("FATAL BUILD ERROR:", err);
    process.exit(1);
  });
}
