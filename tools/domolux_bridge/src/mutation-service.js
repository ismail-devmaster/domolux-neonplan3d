// Safe Transactional Mutation Service for Domolux 3D
import { calculateOBBCorners, checkOBBCollision, isPointInPolygon } from './spatial-engine.js';

export class MutationService {
  constructor(haClient, catalogService = null) {
    this.ha = haClient;
    this.catalog = catalogService;
    // In-memory staged buildings per plan: planId -> { building, baseRevision }
    this.staged = new Map();
  }

  _checkPlanMutable(planId) {
    if (planId === 'main') {
      const err = new Error('Permission Denied: Modifying the production plan "main" is strictly forbidden.');
      err.code = 'PRODUCTION_PLAN_PROTECTED';
      throw err;
    }
  }

  async loadOrStage(planId) {
    if (this.staged.has(planId)) {
      return this.staged.get(planId);
    }
    const snap = await this.ha.getBuilding(planId);
    const state = {
      building: JSON.parse(JSON.stringify(snap.building || {})),
      baseRevision: snap.revision ?? 0
    };
    this.staged.set(planId, state);
    return state;
  }

  async cloneProject(sourcePlanId = 'main', targetName = 'Domolux Cloned Project') {
    const res = await this.ha.createPlan(targetName, { copyOf: sourcePlanId });
    const targetPlanId = res.plan;
    // Verify target plan is readable
    const snap = await this.ha.getBuilding(targetPlanId);
    this.staged.set(targetPlanId, {
      building: JSON.parse(JSON.stringify(snap.building || {})),
      baseRevision: snap.revision ?? 1
    });
    return {
      success: true,
      plan_id: targetPlanId,
      revision: snap.revision ?? 1
    };
  }

  async createEmptyProject(name = 'New Domolux Project') {
    const emptyBuilding = {
      version: 1,
      floors: [],
      settings: { wall_exterior: 0.24, wall_interior: 0.12, grid: 0.05 },
      energy: {},
      presence: []
    };
    const res = await this.ha.createPlan(name, { building: emptyBuilding });
    const planId = res.plan;
    const snap = await this.ha.getBuilding(planId);
    this.staged.set(planId, {
      building: JSON.parse(JSON.stringify(snap.building || emptyBuilding)),
      baseRevision: snap.revision ?? 1
    });
    return {
      success: true,
      plan_id: planId,
      revision: snap.revision ?? 1
    };
  }

  async addFloor(planId, { name, elevation = 0, height = 2.8, id = null }) {
    this._checkPlanMutable(planId);
    const state = await this.loadOrStage(planId);
    const floors = state.building.floors || (state.building.floors = []);
    const floorId = id || `floor_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;

    const newFloor = {
      id: floorId,
      name,
      elevation: Number(elevation),
      height: Number(height),
      cut_height: 1.5,
      background: null,
      placements: [],
      outdoor: [],
      ha_floor: null,
      rooms: [],
      openings: [],
      furniture: [],
      walls: []
    };

    floors.push(newFloor);
    return { success: true, floor_id: floorId };
  }

  async addRoom(planId, floorId, { name, points, floor_material = 'wood', area_id = null, id = null, wall_colors = null }) {
    this._checkPlanMutable(planId);
    const state = await this.loadOrStage(planId);
    const floor = (state.building.floors || []).find(f => f.id === floorId);
    if (!floor) throw new Error(`Floor not found: ${floorId}`);

    const roomId = id || `room_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
    const newRoom = {
      id: roomId,
      name,
      points,
      floor_material,
      area_id: area_id || null,
      wall_colors: wall_colors || null
    };

    floor.rooms = floor.rooms || [];
    floor.rooms.push(newRoom);
    return { success: true, room_id: roomId };
  }

  async addOpening(planId, floorId, openingData) {
    this._checkPlanMutable(planId);
    const state = await this.loadOrStage(planId);
    const floor = (state.building.floors || []).find(f => f.id === floorId);
    if (!floor) throw new Error(`Floor not found: ${floorId}`);

    const openingId = openingData.id || `opening_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
    const newOpening = {
      id: openingId,
      room_id: openingData.room_id,
      edge: Number(openingData.edge || 0),
      offset: Number(openingData.offset || 1.0),
      type: openingData.type || 'door',
      width: Number(openingData.width || 0.9),
      height: Number(openingData.height || 2.05),
      sill: Number(openingData.sill ?? (openingData.type === 'window' ? 0.8 : 0)),
      hinge: openingData.hinge || 'left',
      leaves: openingData.leaves || 1,
      swing: openingData.swing || 'in',
      wall: openingData.wall || null,
      contact: openingData.contact || null,
      cover: openingData.cover || null,
      lock: openingData.lock || null
    };

    floor.openings = floor.openings || [];
    floor.openings.push(newOpening);
    return { success: true, opening_id: openingId };
  }

  async placeFurniture(planId, floorId, itemData) {
    this._checkPlanMutable(planId);
    const state = await this.loadOrStage(planId);
    const floor = (state.building.floors || []).find(f => f.id === floorId);
    if (!floor) throw new Error(`Floor not found: ${floorId}`);

    // Lookup dimensions from catalog if available
    let width = itemData.w || 1.0;
    let depth = itemData.d || 1.0;
    let height = itemData.h || 1.0;

    if (this.catalog) {
      const asset = this.catalog.getAsset(itemData.type);
      if (asset) {
        width = asset.width;
        depth = asset.depth;
        height = asset.height;
      }
    }

    const scale = itemData.scale || 1.0;
    const effW = width * scale;
    const effD = depth * scale;
    const effH = height * scale;
    const x = Number(itemData.x);
    const z = Number(itemData.z);
    const rot = Number(itemData.rotation || 0);

    // Compute OBB corners
    const candidateOBB = calculateOBBCorners(x, z, effW, effD, rot);

    // Collision check against existing items
    const collisions = [];
    for (const existing of floor.furniture || []) {
      const eW = (existing.w || 1.0) * (existing.scale || 1.0);
      const eD = (existing.d || 1.0) * (existing.scale || 1.0);
      const eOBB = calculateOBBCorners(existing.x, existing.z, eW, eD, existing.rotation || 0);
      if (checkOBBCollision(candidateOBB, eOBB)) {
        collisions.push(existing.id);
      }
    }

    const itemId = itemData.id || `furniture_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
    let formattedType = itemData.type;
    if (formattedType.startsWith('domolux.') && !formattedType.startsWith('pack:')) {
      const shortId = formattedType.replace('domolux.', '');
      formattedType = `pack:${formattedType}:${shortId}`;
    }

    const newItem = {
      id: itemId,
      type: formattedType,
      x,
      z,
      rotation: rot,
      w: effW,
      d: effD,
      h: effH,
      scale,
      variant: itemData.variant || null,
      name: itemData.name || null,
      room: itemData.room_id || undefined,
      finish: itemData.finish || null,
      entity: itemData.entity || null,
      power: itemData.power || null
    };

    floor.furniture = floor.furniture || [];
    floor.furniture.push(newItem);

    return {
      success: true,
      item_id: itemId,
      validation: {
        collisions_count: collisions.length,
        colliding_with: collisions,
        is_clear: collisions.length === 0
      }
    };
  }

  async modifyFurniture(planId, floorId, itemId, updates) {
    this._checkPlanMutable(planId);
    const state = await this.loadOrStage(planId);
    const floor = (state.building.floors || []).find(f => f.id === floorId);
    if (!floor) throw new Error(`Floor not found: ${floorId}`);

    const item = (floor.furniture || []).find(it => it.id === itemId);
    if (!item) throw new Error(`Item not found: ${itemId}`);

    if (updates.x !== undefined) item.x = Number(updates.x);
    if (updates.z !== undefined) item.z = Number(updates.z);
    if (updates.rotation !== undefined) item.rotation = Number(updates.rotation);
    if (updates.scale !== undefined) item.scale = Number(updates.scale);
    if (updates.finish !== undefined) item.finish = updates.finish;
    if (updates.entity !== undefined) item.entity = updates.entity;
    if (updates.name !== undefined) item.name = updates.name;

    return { success: true, item_id: itemId };
  }

  async removeFurniture(planId, floorId, itemId) {
    this._checkPlanMutable(planId);
    const state = await this.loadOrStage(planId);
    const floor = (state.building.floors || []).find(f => f.id === floorId);
    if (!floor) throw new Error(`Floor not found: ${floorId}`);

    const idx = (floor.furniture || []).findIndex(it => it.id === itemId);
    if (idx === -1) throw new Error(`Item not found: ${itemId}`);

    floor.furniture.splice(idx, 1);
    return { success: true, item_id: itemId };
  }

  async saveProject(planId, baseRevision = undefined) {
    this._checkPlanMutable(planId);
    const state = this.staged.get(planId);
    if (!state) throw new Error(`No staged changes for plan: ${planId}`);

    const rev = baseRevision !== undefined ? baseRevision : state.baseRevision;
    const res = await this.ha.saveBuilding(planId, state.building, rev);
    state.baseRevision = res.revision;
    return { success: true, revision: res.revision };
  }

  async deleteProject(planId) {
    this._checkPlanMutable(planId);
    this.staged.delete(planId);
    return this.ha.deletePlan(planId);
  }
}
