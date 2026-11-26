// Scene Intelligence & Snapshot Service for Domolux 3D
import { calculatePolygonArea, calculatePolygonCentroid, isPointInPolygon } from './spatial-engine.js';

export class SceneService {
  constructor(haClient, catalogService = null) {
    this.ha = haClient;
    this.catalog = catalogService;
  }

  async getSceneSnapshot(planId = 'main') {
    const raw = await this.ha.getBuilding(planId);
    const building = raw.building || {};
    const revision = raw.revision ?? 0;
    const version = raw.version || 'unknown';
    const plan = raw.plan || planId;

    const floors = building.floors || [];
    let totalRooms = 0;
    let totalFurniture = 0;
    let totalOpenings = 0;

    const parsedFloors = floors.map((f, fIdx) => {
      const rooms = f.rooms || [];
      const openings = f.openings || [];
      const furniture = f.furniture || [];

      totalRooms += rooms.length;
      totalFurniture += furniture.length;
      totalOpenings += openings.length;

      const parsedRooms = rooms.map(r => {
        const area = calculatePolygonArea(r.points || []);
        const centroid = calculatePolygonCentroid(r.points || []);

        // Find connected openings
        const roomOpenings = openings.filter(o => o.room_id === r.id);

        // Find contained furniture
        const roomFurniture = furniture.filter(item => {
          if (item.room === r.id) return true;
          // Fallback to geometric point-in-polygon
          return isPointInPolygon([item.x, item.z], r.points || []);
        });

        return {
          id: r.id,
          name: r.name,
          aliases: r.aliases || [],
          area_id: r.area_id || null,
          floor_material: r.floor_material || 'wood',
          area_m2: Math.round(area * 100) / 100,
          centroid: [Math.round(centroid[0] * 100) / 100, Math.round(centroid[1] * 100) / 100],
          points: r.points || [],
          wall_thickness: r.wall_thickness || null,
          wall_colors: r.wall_colors || null,
          ceiling_height: r.ceiling_height || f.height || 2.5,
          openings_count: roomOpenings.length,
          furniture_count: roomFurniture.length,
          openings: roomOpenings,
          furniture: roomFurniture
        };
      });

      return {
        id: f.id,
        name: f.name || `Floor ${fIdx}`,
        elevation: f.elevation || 0,
        height: f.height || 2.5,
        ha_floor: f.ha_floor || null,
        rooms_count: rooms.length,
        furniture_count: furniture.length,
        openings_count: openings.length,
        rooms: parsedRooms,
        openings,
        furniture
      };
    });

    // Extract device associations
    const deviceAssociations = [];
    for (const f of parsedFloors) {
      for (const item of f.furniture) {
        if (item.entity || item.power) {
          deviceAssociations.push({
            furniture_id: item.id,
            furniture_name: item.name || item.type,
            floor_id: f.id,
            entity_id: item.entity || null,
            power_sensor: item.power || null,
            position: [item.x, item.z]
          });
        }
      }
      for (const op of f.openings) {
        if (op.contact || op.cover || op.lock) {
          deviceAssociations.push({
            opening_id: op.id,
            type: op.type,
            floor_id: f.id,
            contact: op.contact || null,
            cover: op.cover || null,
            lock: op.lock || null
          });
        }
      }
    }

    return {
      project_id: plan,
      revision,
      version,
      summary: {
        floor_count: parsedFloors.length,
        room_count: totalRooms,
        furniture_count: totalFurniture,
        opening_count: totalOpenings,
        device_associations_count: deviceAssociations.length
      },
      floors: parsedFloors,
      device_associations: deviceAssociations
    };
  }

  generateArabicDescription(snapshot) {
    const s = snapshot.summary;
    let ar = `### التقرير المعماري الشامل للمنزل الذكي (Domolux 3D)\n\n`;
    ar += `**معرّف المشروع:** \`${snapshot.project_id}\`  \n`;
    ar += `**إصدار المخطط (Revision):** \`${snapshot.revision}\`  \n`;
    ar += `**إصدار بيئة NeonPlan 3D:** \`${snapshot.version}\`  \n\n`;

    ar += `#### 1. الإحصاءات المعمارية والهيكلية الكلية:\n`;
    ar += `- **عدد الطوابق:** ${s.floor_count} طابق.\n`;
    ar += `- **إجمالي الغرف والمساحات المحددة:** ${s.room_count} غرف وظيفية.\n`;
    ar += `- **إجمالي الأبواب والنوافذ:** ${s.opening_count} فتحة معمارية.\n`;
    ar += `- **إجمالي قطع الأثاث والأجهزة المصنفة:** ${s.furniture_count} قطعة أثاث وجهاز.\n`;
    ar += `- **ارتباطات الأجهزة الذكية الصريحة بـ Home Assistant:** ${s.device_associations_count} جهاز متصل.\n\n`;

    ar += `#### 2. التفاصيل الوظيفية لكل طابق وغرفة:\n`;
    for (const f of snapshot.floors) {
      ar += `##### الطابق: "${f.name}" (الارتفاع: ${f.height}م، منسوب الارتفاع: ${f.elevation}م)\n`;
      ar += `يضم هذا الطابق ${f.rooms.length} غرف رئيسية:\n`;

      for (const r of f.rooms) {
        ar += `- **${r.name}:** مساحتها التقديرية **${r.area_m2} م²** (نوع الأرضية: ${r.floor_material}، إحداثيات المركز: X=${r.centroid[0]}م, Z=${r.centroid[1]}م).\n`;
        ar += `  - عدد الفتحات (أبواب/نوافذ): ${r.openings_count}.\n`;
        ar += `  - عدد قطع الأثاث والتجهيزات: ${r.furniture_count} قطعة.\n`;
        if (r.area_id) {
          ar += `  - المنطقة المقترنة في Home Assistant: \`${r.area_id}\`.\n`;
        }
      }
      ar += `\n`;
    }

    ar += `#### 3. التجهيزات والأجهزة الذكية المربوطة:\n`;
    if (snapshot.device_associations.length > 0) {
      for (const dev of snapshot.device_associations.slice(0, 10)) {
        if (dev.furniture_id) {
          ar += `- عنصر الأثاث \`${dev.furniture_id}\` (${dev.furniture_name}) مرتبط بالكيان: \`${dev.entity_id || dev.power_sensor}\`.\n`;
        } else if (dev.opening_id) {
          ar += `- فتحة معمارية \`${dev.opening_id}\` (${dev.type}) مرتبطة بالحساس: \`${dev.contact || dev.cover || dev.lock}\`.\n`;
        }
      }
      if (snapshot.device_associations.length > 10) {
        ar += `... بالإضافة إلى ${snapshot.device_associations.length - 10} أجهزة أخرى مرتبطة في المشهد.\n`;
      }
    } else {
      ar += `لا توجد ارتباطات صريحة مباشرة في هذا المخطط.\n`;
    }

    return ar;
  }
}
