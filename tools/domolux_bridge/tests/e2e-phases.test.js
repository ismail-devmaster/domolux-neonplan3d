import test from 'node:test';
import assert from 'node:assert/strict';
import { DomoluxMCPServer } from '../src/mcp-server.js';
import fs from 'node:fs/promises';

test('DOMOLUX PROGRAM — PHASE 1: Live Scene Access & Grounded Understanding', async () => {
  const server = new DomoluxMCPServer();
  await server.init();

  // 1. List active projects
  const plansData = await server.executeTool('get_active_projects');
  assert.ok(plansData.plans, 'Plans list must be returned');
  const mainPlan = plansData.plans.find(p => p.id === 'main');
  assert.ok(mainPlan, 'Main production plan must exist');
  assert.equal(mainPlan.id, 'main');
  assert.ok(mainPlan.revision > 0, 'Main revision must be positive');

  // 2. Full scene snapshot
  const snapshot = await server.executeTool('get_building_snapshot', { plan_id: 'main' });
  assert.equal(snapshot.project_id, 'main');
  assert.ok(snapshot.revision >= 2589, `Revision must be at least 2589, got ${snapshot.revision}`);
  assert.equal(snapshot.summary.floor_count, 1);
  assert.equal(snapshot.summary.room_count, 8);
  assert.ok(snapshot.summary.opening_count >= 10, 'Must have at least 10 openings');
  assert.ok(snapshot.summary.furniture_count >= 80, 'Must have at least 80 furniture items');

  // 3. Room details verification
  const rooms = await server.executeTool('list_rooms', { plan_id: 'main' });
  assert.equal(rooms.count, 8);
  const meetingRoom = rooms.rooms.find(r => r.name.toLowerCase().includes('metting'));
  assert.ok(meetingRoom, 'Meeting room must exist');
  assert.equal(meetingRoom.area_id, 'metarea');
  assert.ok(meetingRoom.area_m2 > 0, 'Area must be calculated');

  // 4. Scene objects verification
  const objects = await server.executeTool('list_scene_objects', { plan_id: 'main' });
  assert.ok(objects.count >= 80, 'Must return all scene objects');

  // 5. Arabic Narrative Report
  const arabicReport = await server.executeTool('generate_arabic_report', { plan_id: 'main' });
  assert.ok(arabicReport.report.includes('التقرير المعماري الشامل للمنزل الذكي'), 'Arabic report header must match');
  assert.ok(arabicReport.report.includes('Ground floor'), 'Floor name must be present in report');
  assert.ok(arabicReport.report.includes('metting room'), 'Room names must appear in report');

  server.ha.close();
});

test('DOMOLUX PROGRAM — PHASE 2: Safe Transactional Editing on Isolated Clone', async () => {
  const server = new DomoluxMCPServer();
  await server.init();

  // 1. Create isolated clone of main
  const cloneRes = await server.executeTool('clone_project', {
    source_plan_id: 'main',
    target_name: 'Phase 2 Test Clone'
  });
  assert.equal(cloneRes.success, true);
  const testPlanId = cloneRes.plan_id;
  assert.ok(testPlanId && testPlanId !== 'main', 'Test plan ID must be distinct from main');

  try {
    // 2. Read cloned snapshot
    const initialSnap = await server.executeTool('get_building_snapshot', { plan_id: testPlanId });
    const floor0 = initialSnap.floors[0];
    assert.ok(floor0, 'Cloned floor must exist');

    // 3. Add an architectural room to test clone
    const newRoomRes = await server.executeTool('add_room', {
      plan_id: testPlanId,
      floor_id: floor0.id,
      name: 'Domolux Automated Solarium Lounge',
      points: [[20, 20], [26, 20], [26, 26], [20, 26]],
      floor_material: 'marble'
    });
    assert.equal(newRoomRes.success, true);
    const newRoomId = newRoomRes.room_id;

    // 4. Add architectural door to the new room
    const newDoorRes = await server.executeTool('add_opening', {
      plan_id: testPlanId,
      floor_id: floor0.id,
      room_id: newRoomId,
      edge: 0,
      offset: 3.0,
      type: 'door',
      width: 1.2,
      height: 2.2
    });
    assert.equal(newDoorRes.success, true);

    // 5. Place an authentic Domolux catalog asset in the new room
    const placeRes = await server.executeTool('place_furniture', {
      plan_id: testPlanId,
      floor_id: floor0.id,
      type: 'domolux.luxury_spa_bathtub',
      name: 'Private Suite Jacuzzi Spa',
      x: 23.0,
      z: 23.0,
      rotation: 45,
      room_id: newRoomId
    });
    assert.equal(placeRes.success, true);
    const placedItemId = placeRes.item_id;

    // 6. Modify an existing furniture item
    const existingItem = floor0.furniture[0];
    assert.ok(existingItem, 'Must have existing furniture to modify');
    const modRes = await server.executeTool('modify_furniture', {
      plan_id: testPlanId,
      floor_id: floor0.id,
      item_id: existingItem.id,
      rotation: 90,
      name: 'Updated Luxury Centerpiece'
    });
    assert.equal(modRes.success, true);

    // 7. Remove temporary item to prove deletion capability
    const tempItemRes = await server.executeTool('place_furniture', {
      plan_id: testPlanId,
      floor_id: floor0.id,
      type: 'coffee_table',
      x: 21.0,
      z: 21.0,
      rotation: 0
    });
    assert.equal(tempItemRes.success, true);
    const delItemRes = await server.executeTool('remove_furniture', {
      plan_id: testPlanId,
      floor_id: floor0.id,
      item_id: tempItemRes.item_id
    });
    assert.equal(delItemRes.success, true);

    // 8. Commit and save to NeonPlan 3D backend with optimistic locking
    const saveRes = await server.executeTool('save_project', {
      plan_id: testPlanId,
      base_revision: cloneRes.revision
    });
    assert.equal(saveRes.success, true);
    assert.ok(saveRes.revision > cloneRes.revision, 'Saved revision must increment');

    // 9. Reopen and verify persisted state
    const reopenedSnap = await server.executeTool('get_building_snapshot', { plan_id: testPlanId });
    assert.equal(reopenedSnap.revision, saveRes.revision);

    const reFloor = reopenedSnap.floors[0];
    const persistedRoom = reFloor.rooms.find(r => r.id === newRoomId);
    assert.ok(persistedRoom, 'New room must survive save and reopen cycle');
    assert.equal(persistedRoom.name, 'Domolux Automated Solarium Lounge');

    const persistedSpa = reFloor.furniture.find(f => f.id === placedItemId);
    assert.ok(persistedSpa, 'Placed Domolux asset must survive save and reopen cycle');
    assert.ok(persistedSpa.type.includes('domolux.luxury_spa_bathtub'));
    assert.equal(persistedSpa.rotation, 45);

    const persistedMod = reFloor.furniture.find(f => f.id === existingItem.id);
    assert.equal(persistedMod.rotation, 90, 'Modified rotation must persist');
    assert.equal(persistedMod.name, 'Updated Luxury Centerpiece', 'Modified name must persist');

    // 10. Verify production plan "main" is completely untouched
    const mainCheck = await server.executeTool('get_building_snapshot', { plan_id: 'main' });
    assert.equal(mainCheck.summary.room_count, 8, 'Main rooms must remain exactly 8');
    assert.equal(mainCheck.summary.furniture_count, 83, 'Main furniture count must remain exactly 83');

  } finally {
    // Clean up test clone
    if (testPlanId) {
      await server.executeTool('delete_project', { plan_id: testPlanId }).catch(() => {});
    }
    server.ha.close();
  }
});

test('DOMOLUX PROGRAM — PHASE 3 & PHASE 4: Autonomous Construction & Luxury Furnishing of Reference Villa', async () => {
  const server = new DomoluxMCPServer();
  await server.init();

  let villaPlanId = null;

  try {
    // PHASE 3: Procedural Autonomous Construction
    const buildRes = await server.executeTool('build_reference_villa', {
      plan_name: 'Domolux Autonomy Reference Villa'
    });
    assert.equal(buildRes.success, true);
    villaPlanId = buildRes.plan_id;
    assert.ok(villaPlanId, 'Villa plan ID must be created');
    assert.equal(buildRes.summary.floors, 2, 'Must have exactly 2 floors');
    assert.equal(buildRes.summary.rooms, 16, 'Must have 16 distinct rooms');
    assert.ok(buildRes.summary.openings >= 14, 'Must have architectural openings');

    // Reopen and verify architectural geometry
    const villaSnap = await server.executeTool('get_building_snapshot', { plan_id: villaPlanId });
    assert.equal(villaSnap.summary.floor_count, 2);
    assert.equal(villaSnap.summary.room_count, 16);

    const gf = villaSnap.floors.find(f => f.id === 'floor_ground');
    const uf = villaSnap.floors.find(f => f.id === 'floor_upper');
    assert.ok(gf && uf, 'Both ground and upper floors must exist');
    assert.equal(gf.elevation, 0);
    assert.equal(uf.elevation, 3.0);

    // Verify rooms on Ground Floor
    const gfLiving = gf.rooms.find(r => r.id === 'room_gf_living');
    assert.ok(gfLiving, 'Grand Living Room must exist');
    assert.equal(gfLiving.area_m2, 80);

    const gfKitchen = gf.rooms.find(r => r.id === 'room_gf_kitchen');
    assert.ok(gfKitchen, 'Gourmet Kitchen must exist');
    assert.equal(gfKitchen.area_m2, 48);

    // Verify rooms on Upper Floor
    const ufMaster = uf.rooms.find(r => r.id === 'room_uf_master_suite');
    assert.ok(ufMaster, 'Presidential Master Suite must exist');
    assert.equal(ufMaster.area_m2, 64);

    const ufMasterBath = uf.rooms.find(r => r.id === 'room_uf_master_bath');
    assert.ok(ufMasterBath, 'Master Spa Bathroom must exist');
    assert.equal(ufMasterBath.area_m2, 36);

    // PHASE 4: Intelligent Luxury Furnishing with authentic Domolux assets
    const furnishRes = await server.executeTool('furnish_reference_villa', {
      plan_id: villaPlanId
    });
    assert.equal(furnishRes.success, true);
    assert.ok(furnishRes.total_placed >= 25, `Must place at least 25 luxury pieces, placed: ${furnishRes.total_placed}`);

    // Reopen and verify furnished villa
    const furnishedSnap = await server.executeTool('get_building_snapshot', { plan_id: villaPlanId });
    assert.equal(furnishedSnap.revision, furnishRes.revision);
    assert.ok(furnishedSnap.summary.furniture_count >= 25);

    // Run complete spatial layout and collision validation
    const spatialVal = await server.executeTool('validate_spatial_layout', { plan_id: villaPlanId });
    assert.equal(spatialVal.valid, true, 'Fully furnished villa must have zero collision overlaps');
    assert.equal(spatialVal.collisions_count, 0, 'Collisions must be exactly 0');
    assert.equal(spatialVal.out_of_bounds_count, 0, 'No objects should be out of room bounds');

    // Export completed villa reference deliverable to file
    await fs.writeFile(
      '.claude/domolux_3d_autonomy/domolux_autonomy_reference_villa.json',
      JSON.stringify(furnishedSnap, null, 2),
      'utf-8'
    );

  } finally {
    server.ha.close();
  }
});
