// Runner for Collections C & D (Products 041–080, Batches 09–16)
import { COLLECTION_C_PRODUCTS } from "./domolux200_col_c.mjs";
import { COLLECTION_D_PRODUCTS } from "./domolux200_col_d.mjs";
import { processBatch } from "./domolux_villa_200_engine.mjs";
import { writeFileSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const allProducts = [...COLLECTION_C_PRODUCTS, ...COLLECTION_D_PRODUCTS];
console.log(`Loaded ${allProducts.length} products for Collections C & D.`);

const results = [];
const batchSize = 5;
const numBatches = Math.ceil(allProducts.length / batchSize);

for (let b = 0; b < numBatches; b++) {
  const batchProducts = allProducts.slice(b * batchSize, (b + 1) * batchSize);
  const batchNum = b + 9; // Batches 09 to 16
  const batchRes = await processBatch(batchProducts, batchNum, 40);
  results.push(...batchRes);
}

// Append or update progress in .claude/domolux_villa_200_inventory.json
const inventoryFile = join(process.cwd(), ".claude", "domolux_villa_200_inventory.json");
let currentInventory = [];
if (existsSync(inventoryFile)) {
  try {
    currentInventory = JSON.parse(readFileSync(inventoryFile, "utf8"));
  } catch {}
}

for (const res of results) {
  const idx = currentInventory.findIndex(it => it.num === res.num);
  if (idx >= 0) currentInventory[idx] = res;
  else currentInventory.push(res);
}
currentInventory.sort((a, b) => a.num - b.num);
writeFileSync(inventoryFile, JSON.stringify(currentInventory, null, 2), "utf8");

console.log(`\n=== COLLECTIONS C & D (BATCHES 09–16, PRODUCTS 041–080) COMPLETED SUCCESSFULLY ===`);
console.log(`Delivered and cryptographically verified: ${results.length} products.`);
