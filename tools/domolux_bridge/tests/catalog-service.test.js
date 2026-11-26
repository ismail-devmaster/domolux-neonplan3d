import test from 'node:test';
import assert from 'node:assert/strict';
import { CatalogService } from '../src/catalog-service.js';

test('Catalog Service - Asset Indexing & Total Inventory', async () => {
  const catalog = new CatalogService();
  await catalog.initialize();

  const total = catalog.getTotalCount();
  assert.ok(total >= 200, `Catalog must index at least 200 luxury products, got ${total}`);

  const item = catalog.getAsset('domolux.luxury_spa_bathtub');
  assert.ok(item, 'domolux.luxury_spa_bathtub must exist in catalog');
  assert.equal(item.category, 'wellness');
  assert.ok(item.width > 0, 'Width must be defined');
  assert.ok(item.depth > 0, 'Depth must be defined');
  assert.ok(item.height > 0, 'Height must be defined');
});

test('Catalog Service - Semantic Search', async () => {
  const catalog = new CatalogService();
  await catalog.initialize();

  const pianoResults = catalog.search('piano');
  assert.ok(pianoResults.length > 0, 'Must find grand piano');
  assert.ok(pianoResults.some(p => p.id.includes('piano')));

  const bathResults = catalog.search('bath');
  assert.ok(bathResults.length > 0, 'Must find bathtubs or bath products');

  const cinemaResults = catalog.filterByCategory('entertainment');
  assert.ok(cinemaResults.length > 0, 'Must find entertainment/cinema products');
});
