#!/usr/bin/env node
// Domolux 3D MCP Server over Stdio (JSON-RPC 2.0 / MCP Protocol)
import readline from 'node:readline';
import { HomeAssistantWebSocketClient } from './ha-client.js';
import { CatalogService } from './catalog-service.js';
import { SceneService } from './scene-service.js';
import { MutationService } from './mutation-service.js';
import { ArchitecturalPlanner } from './architectural-planner.js';
import { FurnishingPlanner } from './furnishing-planner.js';
import { calculatePolygonArea, calculateOBBCorners, checkOBBCollision, isPointInPolygon } from './spatial-engine.js';

class DomoluxMCPServer {
  constructor() {
    this.ha = new HomeAssistantWebSocketClient();
    this.catalog = new CatalogService();
    this.scene = new SceneService(this.ha, this.catalog);
    this.mutation = new MutationService(this.ha, this.catalog);
    this.furnishing = new FurnishingPlanner(this.catalog);
    this.initialized = false;
  }

  async init() {
    await this.catalog.initialize();
    this.initialized = true;
  }

  getToolDefinitions() {
    return [
      {
        name: 'get_active_projects',
        description: 'Lists all registered NeonPlan 3D floor plans, their revisions, and active status.',
        inputSchema: { type: 'object', properties: {} }
      },
      {
        name: 'get_building_snapshot',
        description: 'Retrieves a structured snapshot of a 3D building including floors, rooms, openings, and furniture.',
        inputSchema: {
          type: 'object',
          properties: {
            plan_id: { type: 'string', description: 'Plan identifier (default "main")', default: 'main' }
          }
        }
      },
      {
        name: 'list_floors',
        description: 'Lists all floor levels with elevation and height for a plan.',
        inputSchema: {
          type: 'object',
          properties: {
            plan_id: { type: 'string', description: 'Plan identifier (default "main")' }
          }
        }
      },
      {
        name: 'list_rooms',
        description: 'Enumerates all semantic rooms with polygon area, floor material, and centroid coordinates.',
        inputSchema: {
          type: 'object',
          properties: {
            plan_id: { type: 'string', description: 'Plan identifier (default "main")' },
            floor_id: { type: 'string', description: 'Optional floor filter' }
          }
        }
      },
      {
        name: 'list_scene_objects',
        description: 'Lists all furniture, appliances, lighting, and architectural components in a plan.',
        inputSchema: {
          type: 'object',
          properties: {
            plan_id: { type: 'string', description: 'Plan identifier (default "main")' },
            floor_id: { type: 'string', description: 'Optional floor filter' },
            room_id: { type: 'string', description: 'Optional room filter' }
          }
        }
      },
      {
        name: 'get_asset_catalog',
        description: 'Searches the 313 Domolux luxury assets and standard components by category, tag, or keyword.',
        inputSchema: {
          type: 'object',
          properties: {
            query: { type: 'string', description: 'Search keyword' },
            category: { type: 'string', description: 'Filter by category (living, bedroom, kitchen, wellness, entertainment, outdoor)' },
            limit: { type: 'number', description: 'Max results', default: 50 }
          }
        }
      },
      {
        name: 'generate_arabic_report',
        description: 'Generates an authoritative, grounded architectural analysis report of the home in Arabic.',
        inputSchema: {
          type: 'object',
          properties: {
            plan_id: { type: 'string', description: 'Plan identifier (default "main")' }
          }
        }
      },
      {
        name: 'clone_project',
        description: 'Creates a fully isolated test clone of an existing plan for safe modifications.',
        inputSchema: {
          type: 'object',
          properties: {
            source_plan_id: { type: 'string', description: 'Plan to clone (default "main")', default: 'main' },
            target_name: { type: 'string', description: 'Display name for the new cloned test plan', default: 'Domolux Isolated Test' }
          },
          required: ['target_name']
        }
      },
      {
        name: 'create_empty_project',
        description: 'Initializes a new, completely empty NeonPlan 3D building project.',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Display name for the new project', default: 'New Luxury Project' }
          },
          required: ['name']
        }
      },
      {
        name: 'add_floor',
        description: 'Adds a new floor level to an isolated test plan.',
        inputSchema: {
          type: 'object',
          properties: {
            plan_id: { type: 'string', description: 'Target test plan ID' },
            name: { type: 'string', description: 'Floor name' },
            elevation: { type: 'number', description: 'Elevation in metres' },
            height: { type: 'number', description: 'Floor height in metres', default: 2.8 }
          },
          required: ['plan_id', 'name', 'elevation']
        }
      },
      {
        name: 'add_room',
        description: 'Constructs a new semantic room defined by a closed 2D polygon.',
        inputSchema: {
          type: 'object',
          properties: {
            plan_id: { type: 'string', description: 'Target test plan ID' },
            floor_id: { type: 'string', description: 'Target floor ID' },
            name: { type: 'string', description: 'Room name' },
            points: { type: 'array', description: 'Array of [X, Z] coordinate pairs (min 3)' },
            floor_material: { type: 'string', description: 'Floor finish (wood, marble, tile, stone)', default: 'wood' }
          },
          required: ['plan_id', 'floor_id', 'name', 'points']
        }
      },
      {
        name: 'add_opening',
        description: 'Adds an architectural door or window opening along a room wall.',
        inputSchema: {
          type: 'object',
          properties: {
            plan_id: { type: 'string', description: 'Target test plan ID' },
            floor_id: { type: 'string', description: 'Target floor ID' },
            room_id: { type: 'string', description: 'Room containing the opening' },
            edge: { type: 'number', description: 'Edge index of room polygon' },
            offset: { type: 'number', description: 'Distance in metres from edge start' },
            type: { type: 'string', enum: ['door', 'window', 'garage'], default: 'door' },
            width: { type: 'number', description: 'Width in metres' },
            height: { type: 'number', description: 'Height in metres', default: 2.1 },
            sill: { type: 'number', description: 'Sill height in metres (0 for doors)' }
          },
          required: ['plan_id', 'floor_id', 'room_id', 'edge', 'offset', 'type', 'width']
        }
      },
      {
        name: 'place_furniture',
        description: 'Places an asset instance into a room with automated collision and clearance verification.',
        inputSchema: {
          type: 'object',
          properties: {
            plan_id: { type: 'string', description: 'Target test plan ID' },
            floor_id: { type: 'string', description: 'Target floor ID' },
            type: { type: 'string', description: 'Asset catalog ID (e.g. domolux.luxury_spa_bathtub)' },
            x: { type: 'number', description: 'X position in metres' },
            z: { type: 'number', description: 'Z position in metres' },
            rotation: { type: 'number', description: 'Rotation in degrees', default: 0 },
            name: { type: 'string', description: 'Optional display name' },
            room_id: { type: 'string', description: 'Room identifier' },
            finish: { type: 'object', description: 'Material overrides' }
          },
          required: ['plan_id', 'floor_id', 'type', 'x', 'z']
        }
      },
      {
        name: 'modify_furniture',
        description: 'Updates position, rotation, scale, or materials of an existing object.',
        inputSchema: {
          type: 'object',
          properties: {
            plan_id: { type: 'string', description: 'Target test plan ID' },
            floor_id: { type: 'string', description: 'Target floor ID' },
            item_id: { type: 'string', description: 'Furniture item ID' },
            x: { type: 'number' },
            z: { type: 'number' },
            rotation: { type: 'number' },
            scale: { type: 'number' },
            name: { type: 'string' }
          },
          required: ['plan_id', 'floor_id', 'item_id']
        }
      },
      {
        name: 'remove_furniture',
        description: 'Removes a furniture object from the scene.',
        inputSchema: {
          type: 'object',
          properties: {
            plan_id: { type: 'string', description: 'Target test plan ID' },
            floor_id: { type: 'string', description: 'Target floor ID' },
            item_id: { type: 'string', description: 'Furniture item ID' }
          },
          required: ['plan_id', 'floor_id', 'item_id']
        }
      },
      {
        name: 'save_project',
        description: 'Commits staged changes to the NeonPlan 3D backend with optimistic concurrency checks.',
        inputSchema: {
          type: 'object',
          properties: {
            plan_id: { type: 'string', description: 'Target plan ID (main is protected)' },
            base_revision: { type: 'number', description: 'Expected base revision' }
          },
          required: ['plan_id']
        }
      },
      {
        name: 'delete_project',
        description: 'Safely removes an isolated test plan.',
        inputSchema: {
          type: 'object',
          properties: {
            plan_id: { type: 'string', description: 'Target test plan ID (main cannot be deleted)' }
          },
          required: ['plan_id']
        }
      },
      {
        name: 'build_reference_villa',
        description: 'Procedurally constructs the 2-floor luxury Domolux Reference Villa with all 16 rooms and openings.',
        inputSchema: {
          type: 'object',
          properties: {
            plan_id: { type: 'string', description: 'Target plan ID (optional, e.g. newly created empty plan)' },
            plan_name: { type: 'string', description: 'Display name', default: 'Domolux Reference Luxury Villa' }
          }
        }
      },
      {
        name: 'furnish_reference_villa',
        description: 'Populates the Reference Villa with authentic Domolux luxury products and validates clearance.',
        inputSchema: {
          type: 'object',
          properties: {
            plan_id: { type: 'string', description: 'Reference Villa plan ID' }
          },
          required: ['plan_id']
        }
      },
      {
        name: 'validate_spatial_layout',
        description: 'Runs comprehensive geometric collision, room boundary containment, and clearance tests.',
        inputSchema: {
          type: 'object',
          properties: {
            plan_id: { type: 'string', description: 'Plan identifier' }
          },
          required: ['plan_id']
        }
      }
    ];
  }

  async executeTool(name, args = {}) {
    await this.init();

    switch (name) {
      case 'get_active_projects': {
        return this.ha.listPlans();
      }

      case 'get_building_snapshot': {
        const planId = args.plan_id || 'main';
        return this.scene.getSceneSnapshot(planId);
      }

      case 'list_floors': {
        const planId = args.plan_id || 'main';
        const snap = await this.scene.getSceneSnapshot(planId);
        return {
          plan_id: snap.project_id,
          floors: snap.floors.map(f => ({
            id: f.id,
            name: f.name,
            elevation: f.elevation,
            height: f.height,
            rooms_count: f.rooms_count,
            furniture_count: f.furniture_count,
            openings_count: f.openings_count
          }))
        };
      }

      case 'list_rooms': {
        const planId = args.plan_id || 'main';
        const snap = await this.scene.getSceneSnapshot(planId);
        let rooms = [];
        for (const f of snap.floors) {
          if (!args.floor_id || args.floor_id === f.id) {
            rooms.push(...f.rooms.map(r => ({ ...r, floor_id: f.id, floor_name: f.name })));
          }
        }
        return { plan_id: snap.project_id, rooms, count: rooms.length };
      }

      case 'list_scene_objects': {
        const planId = args.plan_id || 'main';
        const snap = await this.scene.getSceneSnapshot(planId);
        let objects = [];
        for (const f of snap.floors) {
          if (!args.floor_id || args.floor_id === f.id) {
            for (const item of f.furniture) {
              if (!args.room_id || item.room === args.room_id) {
                objects.push({ ...item, floor_id: f.id });
              }
            }
          }
        }
        return { plan_id: snap.project_id, objects, count: objects.length };
      }

      case 'get_asset_catalog': {
        if (args.category) {
          return { assets: this.catalog.filterByCategory(args.category, args.limit || 50) };
        }
        return { assets: this.catalog.search(args.query || '', args.limit || 50) };
      }

      case 'generate_arabic_report': {
        const planId = args.plan_id || 'main';
        const snap = await this.scene.getSceneSnapshot(planId);
        const report = this.scene.generateArabicDescription(snap);
        return { report, snapshot_summary: snap.summary };
      }

      case 'clone_project': {
        return this.mutation.cloneProject(args.source_plan_id || 'main', args.target_name);
      }

      case 'create_empty_project': {
        return this.mutation.createEmptyProject(args.name);
      }

      case 'add_floor': {
        return this.mutation.addFloor(args.plan_id, args);
      }

      case 'add_room': {
        return this.mutation.addRoom(args.plan_id, args.floor_id, args);
      }

      case 'add_opening': {
        return this.mutation.addOpening(args.plan_id, args.floor_id, args);
      }

      case 'place_furniture': {
        return this.mutation.placeFurniture(args.plan_id, args.floor_id, args);
      }

      case 'modify_furniture': {
        return this.mutation.modifyFurniture(args.plan_id, args.floor_id, args.item_id, args);
      }

      case 'remove_furniture': {
        return this.mutation.removeFurniture(args.plan_id, args.floor_id, args.item_id);
      }

      case 'save_project': {
        return this.mutation.saveProject(args.plan_id, args.base_revision);
      }

      case 'delete_project': {
        return this.mutation.deleteProject(args.plan_id);
      }

      case 'build_reference_villa': {
        const villaBuilding = ArchitecturalPlanner.createReferenceVilla();
        let planId = args.plan_id;
        if (planId) {
          const snap = await this.ha.getBuilding(planId);
          await this.ha.saveBuilding(planId, villaBuilding, snap.revision);
        } else {
          const planName = args.plan_name || 'Domolux Reference Luxury Villa';
          const res = await this.ha.createPlan(planName, { building: villaBuilding });
          planId = res.plan;
        }
        const snap = await this.ha.getBuilding(planId);
        return {
          success: true,
          plan_id: planId,
          revision: snap.revision,
          summary: {
            floors: villaBuilding.floors.length,
            rooms: villaBuilding.floors.reduce((a, b) => a + b.rooms.length, 0),
            openings: villaBuilding.floors.reduce((a, b) => a + b.openings.length, 0)
          }
        };
      }

      case 'furnish_reference_villa': {
        const planId = args.plan_id;
        const snap = await this.ha.getBuilding(planId);
        const { building: furnished, manifest, stats } = this.furnishing.furnishReferenceVilla(snap.building);
        const saveRes = await this.ha.saveBuilding(planId, furnished, snap.revision);
        return {
          success: true,
          plan_id: planId,
          revision: saveRes.revision,
          stats,
          manifest_sample: manifest.slice(0, 10),
          total_placed: manifest.length
        };
      }

      case 'validate_spatial_layout': {
        const planId = args.plan_id;
        const snap = await this.ha.getBuilding(planId);
        const building = snap.building || {};
        const floors = building.floors || [];
        const collisions = [];
        const outOfBounds = [];

        for (const f of floors) {
          const furniture = f.furniture || [];
          const rooms = f.rooms || [];

          // 1. Boundary check
          for (const item of furniture) {
            let insideAny = false;
            for (const r of rooms) {
              if (isPointInPolygon([item.x, item.z], r.points || [])) {
                insideAny = true;
                break;
              }
            }
            if (!insideAny) {
              outOfBounds.push({ item_id: item.id, type: item.type, pos: [item.x, item.z] });
            }
          }

          // 2. Pairwise OBB collision check
          for (let i = 0; i < furniture.length; i++) {
            for (let j = i + 1; j < furniture.length; j++) {
              const a = furniture[i];
              const b = furniture[j];
              const aOBB = calculateOBBCorners(a.x, a.z, a.w || 1, a.d || 1, a.rotation || 0);
              const bOBB = calculateOBBCorners(b.x, b.z, b.w || 1, b.d || 1, b.rotation || 0);
              if (checkOBBCollision(aOBB, bOBB)) {
                collisions.push({ item_a: a.id, type_a: a.type, item_b: b.id, type_b: b.type });
              }
            }
          }
        }

        return {
          plan_id: planId,
          valid: collisions.length === 0,
          collisions_count: collisions.length,
          collisions,
          out_of_bounds_count: outOfBounds.length,
          out_of_bounds: outOfBounds
        };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  }

  startStdio() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });

    const sendResponse = (msg) => {
      process.stdout.write(JSON.stringify(msg) + '\n');
    };

    rl.on('line', async (line) => {
      const text = line.trim();
      if (!text) return;
      let req;
      try {
        req = JSON.parse(text);
      } catch (err) {
        sendResponse({
          jsonrpc: '2.0',
          id: null,
          error: { code: -32700, message: 'Parse error' }
        });
        return;
      }

      const { id, method, params } = req;

      try {
        if (method === 'initialize') {
          await this.init();
          sendResponse({
            jsonrpc: '2.0',
            id,
            result: {
              protocolVersion: '2024-11-05',
              capabilities: { tools: {} },
              serverInfo: { name: 'domolux-3d-bridge', version: '1.0.0' }
            }
          });
        } else if (method === 'notifications/initialized') {
          // notification, no response
        } else if (method === 'ping') {
          sendResponse({ jsonrpc: '2.0', id, result: {} });
        } else if (method === 'tools/list') {
          sendResponse({
            jsonrpc: '2.0',
            id,
            result: { tools: this.getToolDefinitions() }
          });
        } else if (method === 'tools/call') {
          const toolName = params?.name;
          const toolArgs = params?.arguments || {};
          const result = await this.executeTool(toolName, toolArgs);
          sendResponse({
            jsonrpc: '2.0',
            id,
            result: {
              content: [
                {
                  type: 'text',
                  text: typeof result === 'string' ? result : JSON.stringify(result, null, 2)
                }
              ],
              isError: false
            }
          });
        } else {
          sendResponse({
            jsonrpc: '2.0',
            id,
            error: { code: -32601, message: `Method not found: ${method}` }
          });
        }
      } catch (err) {
        sendResponse({
          jsonrpc: '2.0',
          id,
          result: {
            content: [
              {
                type: 'text',
                text: JSON.stringify({ error: err.message, code: err.code || 'TOOL_EXECUTION_ERROR' })
              }
            ],
            isError: true
          }
        });
      }
    });

    process.stderr.write('Domolux 3D MCP Bridge initialized and listening on stdio.\n');
  }
}

// If run directly as script
if (import.meta.url === `file://${process.argv[1]}`) {
  const server = new DomoluxMCPServer();
  server.startStdio();
}

export { DomoluxMCPServer };
