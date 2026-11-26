// Domolux Asset Catalog & Discovery Service
import fs from 'node:fs/promises';
import path from 'node:path';

export class CatalogService {
  constructor(baseDir = null) {
    this.baseDir = baseDir || path.resolve(process.cwd(), 'domolux/source');
    this.assets = new Map();
    this.initialized = false;
  }

  async initialize() {
    if (this.initialized) return;

    // 1. Index standard collection in domolux/source
    try {
      const files = await fs.readdir(this.baseDir);
      for (const f of files) {
        if (f.endsWith('.json')) {
          await this._loadFile(path.join(this.baseDir, f));
        }
      }
    } catch (e) {
      // directory might vary
    }

    // 2. Index Villa 200 collection
    const villa200Dir = path.join(this.baseDir, 'villa_200');
    try {
      const vFiles = await fs.readdir(villa200Dir);
      for (const f of vFiles) {
        if (f.endsWith('.json')) {
          await this._loadFile(path.join(villa200Dir, f));
        }
      }
    } catch (e) {
      // ignore missing
    }

    // 3. Add standard core furniture primitives
    this._addStandardAssets();

    this.initialized = true;
  }

  async _loadFile(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(content);
      const packId = data.id;
      const items = data.items || [];
      for (const item of items) {
        const itemFullId = `${packId}`;
        const size = item.size || [1.0, 1.0, 1.0];
        
        // Map category
        let category = 'general';
        const group = (item.group || '').toLowerCase();
        const tags = (item.tags || []).map(t => t.toLowerCase());
        const rooms = (item.room || []).map(r => r.toLowerCase());

        if (group.includes('bath') || tags.includes('bath') || tags.includes('spa') || rooms.includes('bath')) {
          category = 'wellness';
        } else if (group.includes('cinema') || group.includes('entertainment') || tags.includes('cinema') || tags.includes('audio')) {
          category = 'entertainment';
        } else if (group.includes('living') || tags.includes('sofa') || tags.includes('chair') || rooms.includes('living')) {
          category = 'living';
        } else if (group.includes('bed') || tags.includes('bed') || rooms.includes('bedroom')) {
          category = 'bedroom';
        } else if (group.includes('kitchen') || tags.includes('kitchen') || tags.includes('dining')) {
          category = 'kitchen';
        } else if (group.includes('office') || tags.includes('desk') || tags.includes('office')) {
          category = 'office';
        } else if (group.includes('outdoor') || tags.includes('outdoor') || tags.includes('garden')) {
          category = 'outdoor';
        } else if (tags.includes('door') || tags.includes('window') || tags.includes('wall') || tags.includes('ceiling') || tags.includes('platform')) {
          category = 'architectural';
        }

        const assetDef = {
          id: itemFullId,
          packId,
          itemId: item.id,
          name: typeof item.name === 'object' ? item.name.en || item.name.de || item.id : item.name || item.id,
          nameArabic: typeof item.name === 'object' ? item.name.ar || null : null,
          description: data.description || '',
          publisher: data.publisher || 'Domolux Studio',
          width: size[0] || 1.0,
          depth: size[1] || 1.0,
          height: size[2] || 1.0,
          mount: item.mount || 'floor',
          category,
          group: item.group || 'furniture',
          rooms: item.room || [],
          tags: item.tags || []
        };

        this.assets.set(itemFullId, assetDef);
        // Also map under clean packId and item.id
        if (!this.assets.has(item.id)) {
          this.assets.set(item.id, assetDef);
        }
      }
    } catch (e) {
      // parse failure
    }
  }

  _addStandardAssets() {
    const standards = [
      { id: 'sofa_3seater', name: 'Standard 3-Seater Sofa', width: 2.2, depth: 0.95, height: 0.85, category: 'living', rooms: ['living'] },
      { id: 'coffee_table', name: 'Contemporary Coffee Table', width: 1.2, depth: 0.7, height: 0.45, category: 'living', rooms: ['living'] },
      { id: 'tv_wall', name: 'Wall-Mounted Smart OLED TV', width: 1.6, depth: 0.1, height: 0.95, category: 'living', rooms: ['living', 'bedroom'] },
      { id: 'dining_table', name: 'Grand Dining Table', width: 2.4, depth: 1.0, height: 0.76, category: 'kitchen', rooms: ['dining', 'kitchen'] },
      { id: 'dining_chair', name: 'Ergonomic Dining Chair', width: 0.55, depth: 0.55, height: 0.9, category: 'kitchen', rooms: ['dining', 'kitchen'] },
      { id: 'bed_king', name: 'Luxury King Bed', width: 2.1, depth: 2.2, height: 1.2, category: 'bedroom', rooms: ['bedroom'] },
      { id: 'nightstand', name: 'Bedside Nightstand', width: 0.55, depth: 0.45, height: 0.5, category: 'bedroom', rooms: ['bedroom'] },
      { id: 'lamp_ceiling', name: 'Architectural Ceiling Lamp', width: 0.6, depth: 0.6, height: 0.4, mount: 'ceiling', category: 'living', rooms: ['all'] },
      { id: 'ac_unit', name: 'Split Air Conditioner Indoor Unit', width: 0.95, depth: 0.25, height: 0.32, mount: 'wall', category: 'climate', rooms: ['all'] }
    ];

    for (const s of standards) {
      if (!this.assets.has(s.id)) {
        this.assets.set(s.id, {
          id: s.id,
          packId: 'standard',
          itemId: s.id,
          name: s.name,
          nameArabic: null,
          description: s.name,
          publisher: 'NeonPlan 3D Standard',
          width: s.width,
          depth: s.depth,
          height: s.height,
          mount: s.mount || 'floor',
          category: s.category,
          group: s.category,
          rooms: s.rooms,
          tags: [s.category, s.id]
        });
      }
    }
  }

  getAsset(id) {
    return this.assets.get(id) || null;
  }

  getTotalCount() {
    return this.assets.size;
  }

  getAllAssets() {
    return Array.from(this.assets.values());
  }

  search(query, limit = 50) {
    if (!query) return this.getAllAssets().slice(0, limit);
    const q = query.toLowerCase();
    const results = [];
    for (const asset of this.assets.values()) {
      const match = asset.id.toLowerCase().includes(q) ||
        asset.name.toLowerCase().includes(q) ||
        (asset.nameArabic && asset.nameArabic.includes(q)) ||
        asset.category.toLowerCase().includes(q) ||
        asset.tags.some(t => t.toLowerCase().includes(q));
      if (match) {
        results.push(asset);
        if (results.length >= limit) break;
      }
    }
    return results;
  }

  filterByCategory(category, limit = 50) {
    const c = category.toLowerCase();
    const results = [];
    for (const asset of this.assets.values()) {
      if (asset.category.toLowerCase() === c || asset.group.toLowerCase() === c) {
        results.push(asset);
        if (results.length >= limit) break;
      }
    }
    return results;
  }

  filterByRoom(roomType, limit = 50) {
    const r = roomType.toLowerCase();
    const results = [];
    for (const asset of this.assets.values()) {
      if (asset.rooms.some(rm => rm.toLowerCase().includes(r)) || asset.category.toLowerCase().includes(r)) {
        results.push(asset);
        if (results.length >= limit) break;
      }
    }
    return results;
  }
}
