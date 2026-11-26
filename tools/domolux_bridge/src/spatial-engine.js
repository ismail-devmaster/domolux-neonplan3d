// Spatial Intelligence & Collision Engine for Domolux 3D
// Coordinate system: X (right), Z (downward/forward on floor plane), Y (height/elevation)

/**
 * Calculates polygon area using the Shoelace formula.
 * @param {Array<[number, number]>} points 
 * @returns {number} Area in square metres
 */
export function calculatePolygonArea(points) {
  if (!points || points.length < 3) return 0;
  let area = 0;
  for (let i = 0; i < points.length; i++) {
    const j = (i + 1) % points.length;
    area += points[i][0] * points[j][1];
    area -= points[j][0] * points[i][1];
  }
  return Math.abs(area) / 2;
}

/**
 * Calculates the centroid [cx, cz] of a polygon.
 * @param {Array<[number, number]>} points 
 * @returns {[number, number]}
 */
export function calculatePolygonCentroid(points) {
  if (!points || points.length === 0) return [0, 0];
  let cx = 0;
  let cz = 0;
  let signedArea = 0;

  for (let i = 0; i < points.length; i++) {
    const j = (i + 1) % points.length;
    const a = points[i][0] * points[j][1] - points[j][0] * points[i][1];
    signedArea += a;
    cx += (points[i][0] + points[j][0]) * a;
    cz += (points[i][1] + points[j][1]) * a;
  }

  signedArea *= 0.5;
  if (Math.abs(signedArea) < 1e-9) {
    // Fallback: arithmetic mean
    const sum = points.reduce((acc, p) => [acc[0] + p[0], acc[1] + p[1]], [0, 0]);
    return [sum[0] / points.length, sum[1] / points.length];
  }

  cx /= 6 * signedArea;
  cz /= 6 * signedArea;
  return [cx, cz];
}

/**
 * Determines whether point [px, pz] lies strictly inside the given 2D polygon.
 * @param {[number, number]} p 
 * @param {Array<[number, number]>} polygon 
 * @returns {boolean}
 */
export function isPointInPolygon(p, polygon) {
  if (!polygon || polygon.length < 3) return false;
  let inside = false;
  const [px, pz] = p;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, zi] = polygon[i];
    const [xj, zj] = polygon[j];

    const intersect = ((zi > pz) !== (zj > pz)) &&
      (px < ((xj - xi) * (pz - zi)) / (zj - zi) + xi);

    if (intersect) inside = !inside;
  }
  return inside;
}

/**
 * Computes the 4 corners of an Oriented Bounding Box (OBB) on the (X, Z) plane.
 * @param {number} x Center X
 * @param {number} z Center Z
 * @param {number} w Width (local X dimension)
 * @param {number} d Depth (local Z dimension)
 * @param {number} rot Yaw rotation in degrees (clockwise)
 * @returns {Array<[number, number]>} 4 corners in cyclic order
 */
export function calculateOBBCorners(x, z, w, d, rot = 0) {
  const rad = (rot * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);

  const hw = w / 2;
  const hd = d / 2;

  // Local corners relative to center
  const localOffsets = [
    [-hw, -hd],
    [hw, -hd],
    [hw, hd],
    [-hw, hd]
  ];

  return localOffsets.map(([dx, dz]) => {
    const rx = dx * cos - dz * sin;
    const rz = dx * sin + dz * cos;
    return [
      Math.round((x + rx) * 1000) / 1000,
      Math.round((z + rz) * 1000) / 1000
    ];
  });
}

/**
 * Checks 2D intersection of two convex polygons using Separating Axis Theorem (SAT).
 * @param {Array<[number, number]>} polyA 
 * @param {Array<[number, number]>} polyB 
 * @returns {boolean} True if polygons intersect/overlap
 */
export function checkOBBCollision(polyA, polyB) {
  const polygons = [polyA, polyB];

  for (let p = 0; p < polygons.length; p++) {
    const current = polygons[p];
    for (let i = 0; i < current.length; i++) {
      const next = (i + 1) % current.length;
      const edge = [current[next][0] - current[i][0], current[next][1] - current[i][1]];
      // Perpendicular normal axis
      const axis = [-edge[1], edge[0]];
      const len = Math.hypot(axis[0], axis[1]);
      if (len < 1e-9) continue;
      const normAxis = [axis[0] / len, axis[1] / len];

      // Project polyA onto normAxis
      let minA = Infinity, maxA = -Infinity;
      for (const pt of polyA) {
        const dot = pt[0] * normAxis[0] + pt[1] * normAxis[1];
        if (dot < minA) minA = dot;
        if (dot > maxA) maxA = dot;
      }

      // Project polyB onto normAxis
      let minB = Infinity, maxB = -Infinity;
      for (const pt of polyB) {
        const dot = pt[0] * normAxis[0] + pt[1] * normAxis[1];
        if (dot < minB) minB = dot;
        if (dot > maxB) maxB = dot;
      }

      // Check separation with small epsilon tolerance
      if (maxA < minB + 1e-4 || maxB < minA + 1e-4) {
        return false; // Separating axis found: NO collision
      }
    }
  }

  return true; // No separating axis found: COLLISION
}

/**
 * Checks if a point [ox, oz] is within the operational door swing zone.
 * @param {[number, number]} obstaclePt 
 * @param {[number, number]} hingePt 
 * @param {number} doorWidth 
 * @param {number} edgeAngle Angle of the wall edge (degrees)
 * @param {'in'|'out'} swingDirection 
 * @returns {boolean} True if clear (no collision with swing arc), False if blocked
 */
export function checkDoorSwingClearance(obstaclePt, hingePt, doorWidth, edgeAngle = 0, swingDirection = 'in') {
  const dx = obstaclePt[0] - hingePt[0];
  const dz = obstaclePt[1] - hingePt[1];
  const dist = Math.hypot(dx, dz);

  // If outside swing radius + clearance margin (10 cm), it's safe
  if (dist > doorWidth + 0.1) return true;
  if (dist < 1e-4) return false;

  // Compute angle between obstacle and wall
  const angleRad = Math.atan2(dz, dx);
  const angleDeg = (angleRad * 180) / Math.PI;
  let diff = angleDeg - edgeAngle;
  while (diff < -180) diff += 360;
  while (diff > 180) diff -= 360;

  // Door swings 0 to 90 deg either side
  if (swingDirection === 'in') {
    if (diff >= -5 && diff <= 95) return false;
  } else {
    if (diff <= 5 && diff >= -95) return false;
  }

  return true;
}

/**
 * Calculates perpendicular distance from point p to segment [p1, p2].
 * @param {[number, number]} p 
 * @param {[number, number]} p1 
 * @param {[number, number]} p2 
 * @returns {number}
 */
export function calculateDistanceToSegment(p, p1, p2) {
  const [x, z] = p;
  const [x1, z1] = p1;
  const [x2, z2] = p2;

  const dx = x2 - x1;
  const dz = z2 - z1;
  const lenSq = dx * dx + dz * dz;

  if (lenSq < 1e-9) {
    return Math.hypot(x - x1, z - z1);
  }

  // Projection parameter t
  let t = ((x - x1) * dx + (z - z1) * dz) / lenSq;
  t = Math.max(0, Math.min(1, t));

  const projX = x1 + t * dx;
  const projZ = z1 + t * dz;

  return Math.hypot(x - projX, z - projZ);
}
