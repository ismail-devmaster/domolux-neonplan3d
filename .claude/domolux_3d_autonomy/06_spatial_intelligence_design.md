# DOMOLUX 3D AUTONOMY — SPATIAL INTELLIGENCE & COLLISION ENGINE
**Document ID:** `06_spatial_intelligence_design.md`  
**Date:** 2026-11-26  
**Status:** MATHEMATICAL & ALGORITHMIC SPECIFICATION

---

## 1. Geometric Foundations

All horizontal coordinates operate in metric units on the $(X, Z)$ plane:
- Point: $p = (x, z) \in \mathbb{R}^2$
- Segment: $s = (p_1, p_2)$
- Room Polygon: $P = (v_0, v_1, \dots, v_{n-1})$ where $v_i \in \mathbb{R}^2$

---

## 2. Algorithmic Modules

### 2.1 Polygon Containment (Ray Casting Algorithm)
Determines whether an object coordinate $(x, z)$ lies strictly inside room polygon $P$:
```typescript
function isPointInPolygon(p: [number, number], polygon: [number, number][]): boolean {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0], zi = polygon[i][1];
    const xj = polygon[j][0], zj = polygon[j][1];
    const intersect = ((zi > p[1]) !== (zj > p[1])) &&
      (p[0] < ((xj - xi) * (p[1] - zi)) / (zj - zi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}
```

### 2.2 Oriented Bounding Box (OBB) & Separating Axis Theorem (SAT)
Each furniture item with center $(x, z)$, width $w$, depth $d$, and yaw rotation $\theta$ forms an OBB defined by 4 rotated corners:
$$\begin{pmatrix} x' \\ z' \end{pmatrix} = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} \begin{pmatrix} \pm w/2 \\ \pm d/2 \end{pmatrix} + \begin{pmatrix} x \\ z \end{pmatrix}$$

Intersection between two OBBs is resolved via the Separating Axis Theorem across the 4 candidate normal axes. If a separating projection axis exists with no interval overlap, the objects do not collide.

### 2.3 Opening Clearance & Door Swing Zones
For a door opening on edge $e$ with width $W$ and swing direction, a radial sector $S(p_{hinge}, W, \theta_{start}, \theta_{end})$ represents the operational swing zone.
No rigid furniture item may intersect $S$ unless explicitly classified as a wall trim or low threshold.

### 2.4 Circulation Path Clearances
- Primary circulation target: 90 cm – 110 cm clearance corridor between major furniture groupings and room entry points.
- Secondary clearance: minimum 60 cm between chairs and adjoining walls.
