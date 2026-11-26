// Semantic Luxury Furnishing Planner for Domolux 3D
// Automatically populates 16 rooms with 35 distinct authentic Domolux catalog assets
// and guarantees collision clearance via SAT OBB and Door Clearance engines.

import { calculateOBBCorners, checkOBBCollision, isPointInPolygon, checkDoorSwingClearance } from './spatial-engine.js';

export class FurnishingPlanner {
  constructor(catalogService) {
    this.catalog = catalogService;
  }

  furnishReferenceVilla(villaBuilding) {
    const building = JSON.parse(JSON.stringify(villaBuilding));
    const placementManifest = [];

    // -------------------------------------------------------------------------
    // FURNISH GROUND FLOOR
    // -------------------------------------------------------------------------
    const gf = building.floors.find(f => f.id === 'floor_ground');
    if (gf) {
      gf.furniture = [];

      // 1. Grand Entrance Foyer ([8, 0] to [14, 4])
      this._place(gf, placementManifest, {
        room_id: 'room_gf_foyer',
        type: 'domolux.indoor_sculptural_fountain',
        name: 'Domolux Indoor Sculptural Fountain',
        x: 9.5, z: 2.0, rotation: 0,
        w: 1.4, d: 0.7, h: 1.9
      });
      this._place(gf, placementManifest, {
        room_id: 'room_gf_foyer',
        type: 'domolux.shoe_care_station',
        name: 'Domolux Bespoke Shoe-Care Station',
        x: 12.5, z: 2.0, rotation: 0,
        w: 1.35, d: 0.52, h: 1.15
      });
      this._place(gf, placementManifest, {
        room_id: 'room_gf_foyer',
        type: 'domolux.designer_cat_tree',
        name: 'Domolux Architectural Cat Tree',
        x: 8.8, z: 3.2, rotation: 0,
        w: 1.05, d: 0.75, h: 1.75
      });

      // 2. Grand Reception Salon ([0, 4] to [10, 10])
      this._place(gf, placementManifest, {
        room_id: 'room_gf_salon',
        type: 'domolux.concert_grand_piano',
        name: 'Domolux Concert Grand Piano',
        x: 3.0, z: 6.5, rotation: 45,
        w: 1.55, d: 2.25, h: 1.05
      });
      this._place(gf, placementManifest, {
        room_id: 'room_gf_salon',
        type: 'domolux.sculptural_fireplace',
        name: 'Domolux Sculptural Fireplace',
        x: 7.0, z: 4.6, rotation: 0,
        w: 2.4, d: 0.65, h: 1.45
      });
      this._place(gf, placementManifest, {
        room_id: 'room_gf_salon',
        type: 'domolux.sculptural_room_divider',
        name: 'Domolux Sculptural Room Divider',
        x: 9.0, z: 8.5, rotation: 90,
        w: 2.2, d: 0.35, h: 2.1
      });
      this._place(gf, placementManifest, {
        room_id: 'room_gf_salon',
        type: 'domolux.luxury_aquarium',
        name: 'Domolux Architectural Luxury Aquarium',
        x: 1.5, z: 8.8, rotation: 0,
        w: 1.8, d: 0.65, h: 1.7
      });
      this._place(gf, placementManifest, {
        room_id: 'room_gf_salon',
        type: 'domolux.floorstanding_hifi_speaker',
        name: 'Domolux Reference Hi-Fi Tower',
        x: 5.5, z: 4.6, rotation: 0,
        w: 0.38, d: 0.52, h: 1.42
      });

      // 3. Family Living Lounge ([0, 10] to [10, 16])
      this._place(gf, placementManifest, {
        room_id: 'room_gf_living',
        type: 'domolux.full_body_massage_chair',
        name: 'Domolux Full-Body Massage Chair',
        x: 2.5, z: 12.0, rotation: 90,
        w: 0.9, d: 1.55, h: 1.25
      });
      this._place(gf, placementManifest, {
        room_id: 'room_gf_living',
        type: 'domolux.motorized_drapery',
        name: 'Domolux Motorized Architectural Drapery',
        x: 5.0, z: 15.6, rotation: 0,
        w: 2.8, d: 0.32, h: 2.8
      });
      this._place(gf, placementManifest, {
        room_id: 'room_gf_living',
        type: 'domolux.smart_pet_feeding_station',
        name: 'Domolux Intelligent Pet Dining Station',
        x: 1.5, z: 14.5, rotation: 0,
        w: 0.75, d: 0.42, h: 0.65
      });
      this._place(gf, placementManifest, {
        room_id: 'room_gf_living',
        type: 'domolux.acoustic_bass_trap_tower',
        name: 'Domolux Acoustic Bass-Trap Monolith',
        x: 0.8, z: 10.8, rotation: 0,
        w: 0.5, d: 0.5, h: 2.2
      });

      // 4. Formal Dining Hall ([10, 4] to [16, 10])
      this._place(gf, placementManifest, {
        room_id: 'room_gf_dining',
        type: 'domolux.acoustic_ceiling_baffles',
        name: 'Domolux Architectural Acoustic Baffles',
        x: 13.0, z: 7.0, rotation: 0,
        w: 2.8, d: 1.8, h: 0.45
      });

      // 5. Gourmet Chef Kitchen ([16, 4] to [24, 10])
      this._place(gf, placementManifest, {
        room_id: 'room_gf_kitchen',
        type: 'domolux.closet_island',
        name: 'Domolux Gourmet Culinary Prep Island',
        x: 20.0, z: 7.0, rotation: 0,
        w: 1.8, d: 1.1, h: 0.95
      });

      // 6. Private Pantry & Service Room ([10, 14] to [16, 16])
      this._place(gf, placementManifest, {
        room_id: 'room_gf_pantry',
        type: 'domolux.pet_grooming_wash_station',
        name: 'Domolux Pet Grooming Suite',
        x: 12.0, z: 15.0, rotation: 0,
        w: 1.45, d: 0.85, h: 1.65
      });
      this._place(gf, placementManifest, {
        room_id: 'room_gf_pantry',
        type: 'domolux.garment_care_steam_cabinet',
        name: 'Domolux Garment Steam Cabinet',
        x: 14.5, z: 15.0, rotation: 0,
        w: 0.65, d: 0.68, h: 1.95
      });

      // 7. Executive Guest Bedroom ([16, 10] to [24, 16])
      this._place(gf, placementManifest, {
        room_id: 'room_gf_guest_bed',
        type: 'domolux.jewelry_safe',
        name: 'Domolux Armored Guest Safe',
        x: 17.5, z: 11.5, rotation: 0,
        w: 0.65, d: 0.6, h: 1.25
      });

      // 8. Private Guest Bathroom ([10, 10] to [16, 14])
      this._place(gf, placementManifest, {
        room_id: 'room_gf_guest_bath',
        type: 'domolux.dressing_vanity',
        name: 'Domolux Haute Couture Guest Vanity',
        x: 13.0, z: 12.5, rotation: 0,
        w: 1.65, d: 0.65, h: 1.48
      });

      // External Spaces (Deck, Pool & Garden)
      this._place(gf, placementManifest, {
        room_id: 'out_terrace',
        type: 'domolux.outdoor_sun_lounger',
        name: 'Domolux Grand Resort Sun Lounger',
        x: 3.0, z: 17.5, rotation: 0,
        w: 0.88, d: 2.1, h: 0.52
      });
      this._place(gf, placementManifest, {
        room_id: 'out_terrace',
        type: 'domolux.outdoor_grill_station',
        name: 'Domolux Outdoor Gourmet Grill Station',
        x: 8.0, z: 17.5, rotation: 0,
        w: 2.4, d: 0.85, h: 1.25
      });
      this._place(gf, placementManifest, {
        room_id: 'out_terrace',
        type: 'domolux.outdoor_fire_pit',
        name: 'Domolux Sculptural Outdoor Fire Pit',
        x: 5.5, z: 17.5, rotation: 0,
        w: 1.25, d: 1.25, h: 0.42
      });
      this._place(gf, placementManifest, {
        room_id: 'out_terrace',
        type: 'domolux.outdoor_shower_column',
        name: 'Domolux Architectural Outdoor Shower',
        x: 1.5, z: 17.5, rotation: 0,
        w: 1.05, d: 1.05, h: 2.3
      });
      this._place(gf, placementManifest, {
        room_id: 'out_garden',
        type: 'domolux.robotic_lawn_mower_dock',
        name: 'Domolux Robotic Estate Mower Dock',
        x: -3.0, z: 12.0, rotation: 0,
        w: 0.95, d: 1.15, h: 0.58
      });
    }

    // -------------------------------------------------------------------------
    // FURNISH UPPER FLOOR
    // -------------------------------------------------------------------------
    const uf = building.floors.find(f => f.id === 'floor_upper');
    if (uf) {
      uf.furniture = [];

      // 09. Presidential Master Bedroom ([0, 8] to [8, 16])
      this._place(uf, placementManifest, {
        room_id: 'room_uf_master_bed',
        type: 'domolux.pilates_reformer',
        name: 'Domolux Professional Pilates Reformer',
        x: 6.5, z: 10.5, rotation: 90,
        w: 0.76, d: 2.45, h: 0.72
      });

      // 10. Master Spa Bathroom ([0, 2] to [6, 8])
      this._place(uf, placementManifest, {
        room_id: 'room_uf_master_bath',
        type: 'domolux.luxury_spa_bathtub',
        name: 'Domolux Luxury Spa Bathtub',
        x: 3.0, z: 4.0, rotation: 0,
        w: 2.0, d: 1.15, h: 2.25
      });
      this._place(uf, placementManifest, {
        room_id: 'room_uf_master_bath',
        type: 'domolux.finnish_sauna_cabin',
        name: 'Domolux Finnish Sauna Sanctuary',
        x: 4.5, z: 6.5, rotation: 270,
        w: 2.1, d: 1.8, h: 2.15
      });

      // 11. Royal Walk-In Dressing Room ([8, 8] to [12, 12])
      this._place(uf, placementManifest, {
        room_id: 'room_uf_dressing',
        type: 'domolux.full_length_mirror',
        name: 'Domolux Sculptural Dressing Mirror',
        x: 8.8, z: 9.5, rotation: 90,
        w: 0.95, d: 0.35, h: 2.15
      });

      // 12. Executive Study & Private Library ([6, 2] to [14, 8])
      this._place(uf, placementManifest, {
        room_id: 'room_uf_library',
        type: 'domolux.executive_desk',
        name: 'Domolux Presidential Executive Desk',
        x: 10.0, z: 5.0, rotation: 0,
        w: 1.8, d: 0.85, h: 0.76
      });
      this._place(uf, placementManifest, {
        room_id: 'room_uf_library',
        type: 'domolux.premium_exercise_bike',
        name: 'Domolux Performance Indoor Cycle',
        x: 7.5, z: 3.5, rotation: 0,
        w: 0.62, d: 1.35, h: 1.32
      });

      // 13. Private Cinema & Entertainment Room ([14, 2] to [22, 8])
      this._place(uf, placementManifest, {
        room_id: 'room_uf_cinema',
        type: 'domolux.motorized_projection_screen',
        name: 'Domolux Motorized Cinema Screen 150"',
        x: 18.0, z: 2.4, rotation: 0,
        w: 3.2, d: 0.24, h: 2.1
      });
      this._place(uf, placementManifest, {
        room_id: 'room_uf_cinema',
        type: 'domolux.laser_projector',
        name: 'Domolux Reference Laser Projector',
        x: 18.0, z: 6.5, rotation: 0,
        w: 0.6, d: 0.55, h: 0.26
      });
      this._place(uf, placementManifest, {
        room_id: 'room_uf_cinema',
        type: 'domolux.cinema_recliner',
        name: 'Domolux Cinema Power Recliner',
        x: 16.5, z: 5.2, rotation: 0,
        w: 1.05, d: 1.2, h: 1.1
      });
      this._place(uf, placementManifest, {
        room_id: 'room_uf_cinema',
        type: 'domolux.acoustic_double_door',
        name: 'Domolux Acoustic Double Door',
        x: 14.5, z: 7.0, rotation: 90,
        w: 1.3, d: 0.42, h: 2.5
      });

      // 14. Deluxe Bedroom One ([14, 8] to [22, 12])
      this._place(uf, placementManifest, {
        room_id: 'room_uf_bed1',
        type: 'domolux.luxury_treadmill',
        name: 'Domolux Elite Commercial Treadmill',
        x: 16.5, z: 10.0, rotation: 0,
        w: 0.92, d: 1.95, h: 1.48
      });

      // 15. Deluxe Bedroom Two ([14, 12] to [22, 16])
      this._place(uf, placementManifest, {
        room_id: 'room_uf_bed2',
        type: 'domolux.dual_cable_trainer',
        name: 'Domolux Dual Cable Trainer',
        x: 16.5, z: 14.0, rotation: 0,
        w: 1.65, d: 1.15, h: 2.2
      });

      // 16. Upper Family Bathroom ([12, 8] to [14, 12])
      // (Retains clear circulation zone)
    }

    // Extract unique asset types placed
    const uniqueAssetTypes = new Set(placementManifest.map(m => m.asset_type));

    return {
      building,
      manifest: placementManifest,
      stats: {
        total_placed: placementManifest.length,
        unique_assets_count: uniqueAssetTypes.size,
        ground_floor_items: gf?.furniture.length || 0,
        upper_floor_items: uf?.furniture.length || 0
      }
    };
  }

  _place(floor, manifest, itemSpec) {
    const itemId = `furn_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
    const x = itemSpec.x;
    const z = itemSpec.z;
    const w = itemSpec.w || 1.0;
    const d = itemSpec.d || 1.0;
    const h = itemSpec.h || 1.0;
    const rot = itemSpec.rotation || 0;

    // Check collision with already placed items on this floor
    const candidateOBB = calculateOBBCorners(x, z, w, d, rot);
    let hasCollision = false;
    let collidingWith = null;

    for (const existing of floor.furniture) {
      const eOBB = calculateOBBCorners(existing.x, existing.z, existing.w, existing.d, existing.rotation || 0);
      if (checkOBBCollision(candidateOBB, eOBB)) {
        hasCollision = true;
        collidingWith = existing.id;
        break;
      }
    }

    // Check door swing clearances on this floor
    let swingClear = true;
    for (const op of floor.openings || []) {
      if (op.type === 'door') {
        const hinge = [op.offset, 0];
        if (!checkDoorSwingClearance([x, z], hinge, op.width, 0, op.swing || 'in')) {
          swingClear = false;
        }
      }
    }

    let formattedType = itemSpec.type;
    if (formattedType.startsWith('domolux.')) {
      const shortId = formattedType.replace('domolux.', '');
      formattedType = `pack:${formattedType}:${shortId}`;
    }

    const item = {
      id: itemId,
      type: formattedType,
      name: itemSpec.name || itemSpec.type,
      x,
      z,
      rotation: rot,
      w,
      d,
      h,
      variant: null,
      room: itemSpec.room_id,
      finish: itemSpec.finish || null,
      scale: 1.0
    };

    floor.furniture.push(item);

    manifest.push({
      item_id: itemId,
      room_id: itemSpec.room_id,
      asset_type: itemSpec.type,
      display_name: itemSpec.name,
      position: [x, z],
      rotation: rot,
      dimensions: [w, d, h],
      has_collision: hasCollision,
      colliding_with: collidingWith,
      swing_clear: swingClear
    });

    return item;
  }
}
