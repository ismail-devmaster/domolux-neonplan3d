import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculatePolygonArea,
  calculatePolygonCentroid,
  isPointInPolygon,
  calculateOBBCorners,
  checkOBBCollision,
  checkDoorSwingClearance,
  calculateDistanceToSegment
} from '../src/spatial-engine.js';

test('Spatial Engine - Polygon Area (Shoelace formula)', () => {
  // 5m x 4m rectangle = 20 m2
  const rect = [[0, 0], [5, 0], [5, 4], [0, 4]];
  assert.equal(calculatePolygonArea(rect), 20);

  // Right triangle: base 6m, height 4m = 12 m2
  const tri = [[0, 0], [6, 0], [0, 4]];
  assert.equal(calculatePolygonArea(tri), 12);
});

test('Spatial Engine - Polygon Centroid', () => {
  const rect = [[0, 0], [10, 0], [10, 6], [0, 6]];
  const [cx, cz] = calculatePolygonCentroid(rect);
  assert.equal(cx, 5);
  assert.equal(cz, 3);
});

test('Spatial Engine - Point in Polygon (Ray Casting)', () => {
  const room = [[0, 0], [8, 0], [8, 6], [0, 6]];
  assert.equal(isPointInPolygon([4, 3], room), true);
  assert.equal(isPointInPolygon([0.5, 0.5], room), true);
  assert.equal(isPointInPolygon([9, 3], room), false);
  assert.equal(isPointInPolygon([-1, 3], room), false);
  assert.equal(isPointInPolygon([4, 7], room), false);
});

test('Spatial Engine - OBB Corners calculation', () => {
  // Box at center (5, 5), width 2, depth 4, rotation 0
  const corners0 = calculateOBBCorners(5, 5, 2, 4, 0);
  assert.equal(corners0.length, 4);
  // Corners should be (4, 3), (6, 3), (6, 7), (4, 7)
  assert.deepEqual(corners0, [
    [4, 3],
    [6, 3],
    [6, 7],
    [4, 7]
  ]);

  // Rotated 90 degrees
  const corners90 = calculateOBBCorners(5, 5, 2, 4, 90);
  assert.equal(corners90.length, 4);
  // At 90 deg rotation, w & d flip in world coordinates
  const xs = corners90.map(p => Math.round(p[0]));
  const zs = corners90.map(p => Math.round(p[1]));
  assert.equal(Math.min(...xs), 3);
  assert.equal(Math.max(...xs), 7);
  assert.equal(Math.min(...zs), 4);
  assert.equal(Math.max(...zs), 6);
});

test('Spatial Engine - SAT Collision Detection', () => {
  const boxA = calculateOBBCorners(2, 2, 2, 2, 0); // bounds [1..3, 1..3]
  const boxB = calculateOBBCorners(6, 6, 2, 2, 0); // bounds [5..7, 5..7]
  assert.equal(checkOBBCollision(boxA, boxB), false, 'Non-overlapping boxes must not collide');

  const boxC = calculateOBBCorners(2.5, 2.5, 2, 2, 0); // overlaps boxA
  assert.equal(checkOBBCollision(boxA, boxC), true, 'Overlapping boxes must collide');

  // Rotated diamond overlapping
  const boxD = calculateOBBCorners(3, 2, 2, 2, 45);
  assert.equal(checkOBBCollision(boxA, boxD), true, 'Rotated intersecting box must collide');
});

test('Spatial Engine - Door Swing Clearance', () => {
  // Door hinge at (0, 0), opening along edge towards (1, 0), width 0.9m
  // Inward swing arc
  const hinge = [0, 0];
  const width = 0.9;
  const edgeAngle = 0; // along +X axis
  const swing = 'in'; // swings 90 degrees inward

  // An item placed right in the swing zone (e.g. at [0.4, 0.4])
  assert.equal(checkDoorSwingClearance([0.4, 0.4], hinge, width, edgeAngle, swing), false, 'Obstacle in swing zone must fail clearance');

  // An item safely away (e.g. at [2.0, 2.0])
  assert.equal(checkDoorSwingClearance([2.0, 2.0], hinge, width, edgeAngle, swing), true, 'Obstacle outside swing zone must pass clearance');
});

test('Spatial Engine - Distance to Segment', () => {
  const p1 = [0, 0];
  const p2 = [10, 0];
  assert.equal(calculateDistanceToSegment([5, 3], p1, p2), 3);
  assert.equal(calculateDistanceToSegment([-4, 0], p1, p2), 4);
  assert.equal(calculateDistanceToSegment([12, 0], p1, p2), 2);
});
