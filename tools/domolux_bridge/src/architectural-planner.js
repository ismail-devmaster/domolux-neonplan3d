// Procedural Architectural Generator for Domolux Reference Luxury Villa
// Generates fully structured 2-floor luxury residence conforming strictly to BUILDING_SCHEMA
// Exactly 16 semantic interior rooms (8 ground + 8 upper) plus exterior pool, terrace & garden.

export class ArchitecturalPlanner {
  static createReferenceVilla() {
    const building = {
      version: 1,
      settings: {
        wall_exterior: 0.25,
        wall_interior: 0.12,
        grid: 0.05
      },
      energy: {},
      presence: [],
      floors: []
    };

    // -------------------------------------------------------------------------
    // GROUND FLOOR — 8 Semantic Interior Rooms + Exterior Pool & Garden
    // -------------------------------------------------------------------------
    const groundFloor = {
      id: 'floor_ground',
      name: 'Ground Floor — Luxury Living & Reception',
      elevation: 0,
      height: 3.0,
      cut_height: 1.5,
      background: null,
      placements: [],
      outdoor: [
        {
          id: 'out_terrace',
          name: 'Poolside Deck & Sun Lounge',
          type: 'terrace',
          points: [[0, 16], [10, 16], [10, 24], [0, 24]]
        },
        {
          id: 'out_pool',
          name: 'Luxury Heated Swimming Pool',
          type: 'pool',
          depth: 1.8,
          points: [[1, 18], [9, 18], [9, 23], [1, 23]]
        },
        {
          id: 'out_garden',
          name: 'Landscaped Tropical Garden',
          type: 'lawn',
          points: [[-6, 0], [0, 0], [0, 24], [-6, 24]]
        }
      ],
      walls: [],
      ha_floor: null,
      rooms: [
        // 01 — Grand Entrance Foyer
        {
          id: 'room_gf_foyer',
          name: 'Grand Entrance Foyer',
          floor_material: 'marble',
          area_id: null,
          points: [[8, 0], [14, 0], [14, 4], [8, 4]],
          wall_thickness: [0.25, 0.12, 0.12, 0.12]
        },
        // 02 — Grand Reception Salon
        {
          id: 'room_gf_salon',
          name: 'Grand Reception Salon',
          floor_material: 'marble',
          area_id: null,
          points: [[0, 4], [10, 4], [10, 10], [0, 10]],
          wall_thickness: [0.25, 0.12, 0.12, 0.25]
        },
        // 03 — Family Living Lounge
        {
          id: 'room_gf_living',
          name: 'Family Living Lounge',
          floor_material: 'wood',
          area_id: null,
          points: [[0, 10], [10, 10], [10, 16], [0, 16]],
          wall_thickness: [0.12, 0.12, 0.25, 0.25]
        },
        // 04 — Formal Dining Hall
        {
          id: 'room_gf_dining',
          name: 'Formal Dining Hall',
          floor_material: 'marble',
          area_id: null,
          points: [[10, 4], [16, 4], [16, 10], [10, 10]],
          wall_thickness: [0.12, 0.12, 0.12, 0.12]
        },
        // 05 — Gourmet Chef Kitchen
        {
          id: 'room_gf_kitchen',
          name: 'Gourmet Chef Kitchen',
          floor_material: 'tile',
          area_id: null,
          points: [[16, 4], [24, 4], [24, 10], [16, 10]],
          wall_thickness: [0.25, 0.25, 0.12, 0.12]
        },
        // 06 — Private Pantry & Service Room
        {
          id: 'room_gf_pantry',
          name: 'Private Pantry & Service Room',
          floor_material: 'tile',
          area_id: null,
          points: [[10, 14], [16, 14], [16, 16], [10, 16]],
          wall_thickness: [0.12, 0.12, 0.25, 0.12]
        },
        // 07 — Executive Guest Bedroom
        {
          id: 'room_gf_guest_bed',
          name: 'Executive Guest Bedroom',
          floor_material: 'wood',
          area_id: null,
          points: [[16, 10], [24, 10], [24, 16], [16, 16]],
          wall_thickness: [0.12, 0.25, 0.25, 0.12]
        },
        // 08 — Private Guest Bathroom
        {
          id: 'room_gf_guest_bath',
          name: 'Private Guest Bathroom',
          floor_material: 'marble',
          area_id: null,
          points: [[10, 10], [16, 10], [16, 14], [10, 14]],
          wall_thickness: [0.12, 0.12, 0.12, 0.12]
        }
      ],
      openings: [
        // Grand Front Entrance Door (Foyer edge 0: [8, 0] -> [14, 0])
        {
          id: 'opening_gf_main_door',
          room_id: 'room_gf_foyer',
          edge: 0,
          offset: 3.0,
          type: 'door',
          width: 1.6,
          height: 2.4,
          sill: 0,
          hinge: 'left',
          leaves: 2,
          swing: 'in'
        },
        // Door Foyer -> Salon
        {
          id: 'opening_gf_foyer_salon',
          room_id: 'room_gf_foyer',
          edge: 3,
          offset: 2.0,
          type: 'door',
          width: 1.2,
          height: 2.2,
          sill: 0,
          hinge: 'left',
          leaves: 1,
          swing: 'in'
        },
        // Door Foyer -> Dining
        {
          id: 'opening_gf_foyer_dining',
          room_id: 'room_gf_foyer',
          edge: 1,
          offset: 2.0,
          type: 'door',
          width: 1.2,
          height: 2.2,
          sill: 0,
          hinge: 'right',
          leaves: 1,
          swing: 'in'
        },
        // Door Salon -> Living
        {
          id: 'opening_gf_salon_living',
          room_id: 'room_gf_salon',
          edge: 2,
          offset: 5.0,
          type: 'door',
          width: 2.0,
          height: 2.4,
          sill: 0,
          hinge: 'left',
          leaves: 2,
          swing: 'in'
        },
        // Sliding Terrace Glass Door (Living edge 2: [10, 16] -> [0, 16])
        {
          id: 'opening_gf_living_terrace',
          room_id: 'room_gf_living',
          edge: 2,
          offset: 5.0,
          type: 'door',
          width: 3.0,
          height: 2.6,
          sill: 0,
          hinge: 'left',
          leaves: 2,
          swing: 'out'
        },
        // Door Dining -> Kitchen
        {
          id: 'opening_gf_dining_kitchen',
          room_id: 'room_gf_dining',
          edge: 1,
          offset: 3.0,
          type: 'door',
          width: 1.4,
          height: 2.2,
          sill: 0,
          hinge: 'left',
          leaves: 1,
          swing: 'in'
        },
        // Door Kitchen -> Pantry
        {
          id: 'opening_gf_kitchen_pantry',
          room_id: 'room_gf_pantry',
          edge: 1,
          offset: 1.0,
          type: 'door',
          width: 0.9,
          height: 2.1,
          sill: 0,
          hinge: 'left',
          leaves: 1,
          swing: 'in'
        },
        // Guest Bedroom Door
        {
          id: 'opening_gf_guest_door',
          room_id: 'room_gf_guest_bed',
          edge: 0,
          offset: 2.0,
          type: 'door',
          width: 0.9,
          height: 2.1,
          sill: 0,
          hinge: 'left',
          leaves: 1,
          swing: 'in'
        },
        // Guest Bathroom Door
        {
          id: 'opening_gf_guest_bath_door',
          room_id: 'room_gf_guest_bath',
          edge: 0,
          offset: 2.0,
          type: 'door',
          width: 0.85,
          height: 2.1,
          sill: 0,
          hinge: 'left',
          leaves: 1,
          swing: 'in'
        }
      ],
      furniture: []
    };

    // -------------------------------------------------------------------------
    // UPPER FLOOR — 8 Semantic Interior Rooms
    // -------------------------------------------------------------------------
    const upperFloor = {
      id: 'floor_upper',
      name: 'Upper Floor — Private Suites & Sky Lounge',
      elevation: 3.0,
      height: 3.0,
      cut_height: 1.5,
      background: null,
      placements: [],
      outdoor: [],
      walls: [],
      ha_floor: null,
      rooms: [
        // 09 — Presidential Master Bedroom
        {
          id: 'room_uf_master_bed',
          name: 'Presidential Master Bedroom',
          floor_material: 'wood',
          area_id: null,
          points: [[0, 8], [8, 8], [8, 16], [0, 16]],
          wall_thickness: [0.12, 0.12, 0.25, 0.25]
        },
        // 10 — Master Spa Bathroom
        {
          id: 'room_uf_master_bath',
          name: 'Master Spa Bathroom',
          floor_material: 'marble',
          area_id: null,
          points: [[0, 2], [6, 2], [6, 8], [0, 8]],
          wall_thickness: [0.25, 0.12, 0.12, 0.25]
        },
        // 11 — Royal Walk-In Dressing Room
        {
          id: 'room_uf_dressing',
          name: 'Royal Walk-In Dressing Room',
          floor_material: 'wood',
          area_id: null,
          points: [[8, 8], [12, 8], [12, 12], [8, 12]],
          wall_thickness: [0.12, 0.12, 0.12, 0.12]
        },
        // 12 — Executive Study & Private Library
        {
          id: 'room_uf_library',
          name: 'Executive Study & Private Library',
          floor_material: 'wood',
          area_id: null,
          points: [[6, 2], [14, 2], [14, 8], [6, 8]],
          wall_thickness: [0.12, 0.12, 0.12, 0.12]
        },
        // 13 — Private Cinema & Entertainment Room
        {
          id: 'room_uf_cinema',
          name: 'Private Cinema & Entertainment Room',
          floor_material: 'wood',
          area_id: null,
          points: [[14, 2], [22, 2], [22, 8], [14, 8]],
          wall_thickness: [0.25, 0.25, 0.12, 0.12]
        },
        // 14 — Deluxe Bedroom One
        {
          id: 'room_uf_bed1',
          name: 'Deluxe Bedroom One',
          floor_material: 'wood',
          area_id: null,
          points: [[14, 8], [22, 8], [22, 12], [14, 12]],
          wall_thickness: [0.12, 0.25, 0.12, 0.12]
        },
        // 15 — Deluxe Bedroom Two
        {
          id: 'room_uf_bed2',
          name: 'Deluxe Bedroom Two',
          floor_material: 'wood',
          area_id: null,
          points: [[14, 12], [22, 12], [22, 16], [14, 16]],
          wall_thickness: [0.12, 0.25, 0.25, 0.12]
        },
        // 16 — Upper Family Bathroom
        {
          id: 'room_uf_family_bath',
          name: 'Upper Family Bathroom',
          floor_material: 'tile',
          area_id: null,
          points: [[12, 8], [14, 8], [14, 12], [12, 12]],
          wall_thickness: [0.12, 0.12, 0.12, 0.12]
        }
      ],
      openings: [
        // Master Suite Door
        {
          id: 'opening_uf_master_door',
          room_id: 'room_uf_master_bed',
          edge: 0,
          offset: 4.0,
          type: 'door',
          width: 1.0,
          height: 2.1,
          sill: 0,
          hinge: 'left',
          leaves: 1,
          swing: 'in'
        },
        // Master Spa Door
        {
          id: 'opening_uf_master_bath_door',
          room_id: 'room_uf_master_bath',
          edge: 2,
          offset: 3.0,
          type: 'door',
          width: 0.9,
          height: 2.1,
          sill: 0,
          hinge: 'right',
          leaves: 1,
          swing: 'in'
        },
        // Master Dressing Door
        {
          id: 'opening_uf_dressing_door',
          room_id: 'room_uf_dressing',
          edge: 3,
          offset: 2.0,
          type: 'door',
          width: 0.9,
          height: 2.1,
          sill: 0,
          hinge: 'left',
          leaves: 1,
          swing: 'in'
        },
        // Cinema Door
        {
          id: 'opening_uf_cinema_door',
          room_id: 'room_uf_cinema',
          edge: 3,
          offset: 3.0,
          type: 'door',
          width: 1.2,
          height: 2.2,
          sill: 0,
          hinge: 'left',
          leaves: 1,
          swing: 'in'
        },
        // Deluxe Bedroom 1 Door
        {
          id: 'opening_uf_bed1_door',
          room_id: 'room_uf_bed1',
          edge: 3,
          offset: 2.0,
          type: 'door',
          width: 0.9,
          height: 2.1,
          sill: 0,
          hinge: 'left',
          leaves: 1,
          swing: 'in'
        },
        // Deluxe Bedroom 2 Door
        {
          id: 'opening_uf_bed2_door',
          room_id: 'room_uf_bed2',
          edge: 3,
          offset: 2.0,
          type: 'door',
          width: 0.9,
          height: 2.1,
          sill: 0,
          hinge: 'left',
          leaves: 1,
          swing: 'in'
        }
      ],
      furniture: []
    };

    building.floors = [groundFloor, upperFloor];
    return building;
  }
}
