# NeonPlan 3D — Native & Default Asset Catalog

**Authority:** Core Engineering & Architecture Audit
**Total Native Asset Definitions:** 92 (81 Furniture & Equipment Types + 11 Architectural Opening Presets)
**Registration Status:** 92 / 92 Registered & Available in Runtime
**Implementation:** Compiled TypeScript (`frontend/src/model.ts`, `frontend/src/viewer/furniture.ts`, `frontend/src/viewer/viewer3d.ts`)

---

## 1. Summary of Native Asset Ecosystem

The native asset library forms the hardcoded procedural foundation of NeonPlan 3D. Every item is synthesized at runtime using Three.js geometry buffers (`GeoBuffer` and `Builder` primitives). Unlike external pack files, native assets require no signature verification because they compile directly into the application bundle.

| Category | Count | Formats | Registration Status |
|---|:---:|---|:---:|
| Architectural Elements | 14 | `procedural_ts` / `opening_preset` | Registered (Active) |
| Bathroom, Spa, and Wellness | 6 | `procedural_ts` / `opening_preset` | Registered (Active) |
| Decorations and Lifestyle Objects | 2 | `procedural_ts` / `opening_preset` | Registered (Active) |
| Electronics and Entertainment | 2 | `procedural_ts` / `opening_preset` | Registered (Active) |
| Furniture | 24 | `procedural_ts` / `opening_preset` | Registered (Active) |
| Kitchen and Household Appliances | 10 | `procedural_ts` / `opening_preset` | Registered (Active) |
| Lighting | 13 | `procedural_ts` / `opening_preset` | Registered (Active) |
| Outdoor, Garden, and Estate Equipment | 2 | `procedural_ts` / `opening_preset` | Registered (Active) |
| Smart Home and Electrical Equipment | 16 | `procedural_ts` / `opening_preset` | Registered (Active) |
| Specialist and Other Assets | 3 | `procedural_ts` / `opening_preset` | Registered (Active) |
| **Total Native Assets** | **92** | — | **100% Available** |

---

## 2. Exhaustive Item-by-Item Native Inventory

### Category: Architectural Elements (14 Items)

| Asset ID | Display Name (EN) | Original Name (DE) | Subcategory | Dimensions (W×D×H) | Variants | Source Reference |
|---|---|---|---|:---:|---|---|
| `stairs` | **Stairs** | *Treppe* | Straight Flight Staircases | 1.00 x 3.20 x 2.75 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `stairs_u` | **Stairs U** | *U-Treppe mit Podest* | U-Return Staircases with Landing | 2.10 x 2.70 x 2.75 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `stairwell` | **Stairwell** | *Bodenöffnung* | Floor Cutouts & Atrium Openings | 1.00 x 2.60 x 0.02 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `opening.door` | **Interior Room Door** | *Innentür* | Doors & Openings | 0.90 x 0.12 x 2.05 m | Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide | `frontend/src/model.ts#L2015-2028` |
| `opening.front` | **Front Entrance Door** | *Haustür* | Doors & Openings | 1.00 x 0.24 x 2.10 m | Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide | `frontend/src/model.ts#L2015-2028` |
| `opening.door_double` | **Double Interior Door** | *Doppeltür* | Doors & Openings | 1.60 x 0.12 x 2.05 m | Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide | `frontend/src/model.ts#L2015-2028` |
| `opening.window` | **Standard Window** | *Fenster* | Windows & Glazing | 1.20 x 0.24 x 1.30 m | Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide | `frontend/src/model.ts#L2015-2028` |
| `opening.window_double` | **Double Casement Window** | *Doppelfenster* | Windows & Glazing | 1.60 x 0.24 x 1.30 m | Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide | `frontend/src/model.ts#L2015-2028` |
| `opening.terrace` | **Terrace / Patio Door** | *Terrassentür* | Doors & Openings | 1.00 x 0.24 x 2.10 m | Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide | `frontend/src/model.ts#L2015-2028` |
| `opening.terrace_double` | **Double Terrace Door** | *Doppelte Terrassentür* | Doors & Openings | 1.80 x 0.24 x 2.10 m | Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide | `frontend/src/model.ts#L2015-2028` |
| `opening.garage` | **Garage Door** | *Garagentor* | Doors & Openings | 2.50 x 0.24 x 2.10 m | Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide | `frontend/src/model.ts#L2015-2028` |
| `opening.glass_wall` | **Fixed Glass Architectural Wall** | *Glaswand* | Windows & Glazing | 2.00 x 0.12 x 2.40 m | Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide | `frontend/src/model.ts#L2015-2028` |
| `opening.terrace_slide` | **Lift-and-Slide Patio Door** | *Hebe-Schiebetür* | Doors & Openings | 2.40 x 0.24 x 2.15 m | Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide | `frontend/src/model.ts#L2015-2028` |
| `opening.window_slide` | **Sliding Window** | *Schiebefenster* | Windows & Glazing | 1.60 x 0.24 x 1.30 m | Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide | `frontend/src/model.ts#L2015-2028` |

#### Detailed Technical Specifications

##### `stairs` — Stairs
- **Asset ID:** `stairs`
- **Display Name:** Stairs (*German:* Treppe)
- **Category / Subcategory:** Architectural Elements / Straight Flight Staircases
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.00 x 3.20 x 2.75 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Stairs/60_stairs_u_front.svg`

##### `stairs_u` — Stairs U
- **Asset ID:** `stairs_u`
- **Display Name:** Stairs U (*German:* U-Treppe mit Podest)
- **Category / Subcategory:** Architectural Elements / U-Return Staircases with Landing
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 2.10 x 2.70 x 2.75 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Stairs/60_stairs_u_front.svg`

##### `stairwell` — Stairwell
- **Asset ID:** `stairwell`
- **Display Name:** Stairwell (*German:* Bodenöffnung)
- **Category / Subcategory:** Architectural Elements / Floor Cutouts & Atrium Openings
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.00 x 2.60 x 0.02 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `Procedural WebGL canvas rendering`

##### `opening.door` — Interior Room Door
- **Asset ID:** `opening.door`
- **Display Name:** Interior Room Door (*German:* Innentür)
- **Category / Subcategory:** Architectural Elements / Doors & Openings
- **Collection:** NeonPlan 3D Architectural Openings
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.90 x 0.12 x 2.05 m
- **Geometry Engine:** Procedural wall-opening extrusion & frame
- **Configurable Variants:** Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide
- **Source Implementation:** `frontend/src/model.ts#L2015-2028`
- **Visual Evidence Preview:** `Procedural 2D canvas SVG plan symbol & 3D wall mesh cut`

##### `opening.front` — Front Entrance Door
- **Asset ID:** `opening.front`
- **Display Name:** Front Entrance Door (*German:* Haustür)
- **Category / Subcategory:** Architectural Elements / Doors & Openings
- **Collection:** NeonPlan 3D Architectural Openings
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.00 x 0.24 x 2.10 m
- **Geometry Engine:** Procedural wall-opening extrusion & frame
- **Configurable Variants:** Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide
- **Source Implementation:** `frontend/src/model.ts#L2015-2028`
- **Visual Evidence Preview:** `Procedural 2D canvas SVG plan symbol & 3D wall mesh cut`

##### `opening.door_double` — Double Interior Door
- **Asset ID:** `opening.door_double`
- **Display Name:** Double Interior Door (*German:* Doppeltür)
- **Category / Subcategory:** Architectural Elements / Doors & Openings
- **Collection:** NeonPlan 3D Architectural Openings
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.60 x 0.12 x 2.05 m
- **Geometry Engine:** Procedural wall-opening extrusion & frame
- **Configurable Variants:** Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide
- **Source Implementation:** `frontend/src/model.ts#L2015-2028`
- **Visual Evidence Preview:** `Procedural 2D canvas SVG plan symbol & 3D wall mesh cut`

##### `opening.window` — Standard Window
- **Asset ID:** `opening.window`
- **Display Name:** Standard Window (*German:* Fenster)
- **Category / Subcategory:** Architectural Elements / Windows & Glazing
- **Collection:** NeonPlan 3D Architectural Openings
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.20 x 0.24 x 1.30 m
- **Geometry Engine:** Procedural wall-opening extrusion & frame
- **Configurable Variants:** Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide
- **Source Implementation:** `frontend/src/model.ts#L2015-2028`
- **Visual Evidence Preview:** `Procedural 2D canvas SVG plan symbol & 3D wall mesh cut`

##### `opening.window_double` — Double Casement Window
- **Asset ID:** `opening.window_double`
- **Display Name:** Double Casement Window (*German:* Doppelfenster)
- **Category / Subcategory:** Architectural Elements / Windows & Glazing
- **Collection:** NeonPlan 3D Architectural Openings
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.60 x 0.24 x 1.30 m
- **Geometry Engine:** Procedural wall-opening extrusion & frame
- **Configurable Variants:** Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide
- **Source Implementation:** `frontend/src/model.ts#L2015-2028`
- **Visual Evidence Preview:** `Procedural 2D canvas SVG plan symbol & 3D wall mesh cut`

##### `opening.terrace` — Terrace / Patio Door
- **Asset ID:** `opening.terrace`
- **Display Name:** Terrace / Patio Door (*German:* Terrassentür)
- **Category / Subcategory:** Architectural Elements / Doors & Openings
- **Collection:** NeonPlan 3D Architectural Openings
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.00 x 0.24 x 2.10 m
- **Geometry Engine:** Procedural wall-opening extrusion & frame
- **Configurable Variants:** Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide
- **Source Implementation:** `frontend/src/model.ts#L2015-2028`
- **Visual Evidence Preview:** `Procedural 2D canvas SVG plan symbol & 3D wall mesh cut`

##### `opening.terrace_double` — Double Terrace Door
- **Asset ID:** `opening.terrace_double`
- **Display Name:** Double Terrace Door (*German:* Doppelte Terrassentür)
- **Category / Subcategory:** Architectural Elements / Doors & Openings
- **Collection:** NeonPlan 3D Architectural Openings
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.80 x 0.24 x 2.10 m
- **Geometry Engine:** Procedural wall-opening extrusion & frame
- **Configurable Variants:** Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide
- **Source Implementation:** `frontend/src/model.ts#L2015-2028`
- **Visual Evidence Preview:** `Procedural 2D canvas SVG plan symbol & 3D wall mesh cut`

##### `opening.garage` — Garage Door
- **Asset ID:** `opening.garage`
- **Display Name:** Garage Door (*German:* Garagentor)
- **Category / Subcategory:** Architectural Elements / Doors & Openings
- **Collection:** NeonPlan 3D Architectural Openings
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 2.50 x 0.24 x 2.10 m
- **Geometry Engine:** Procedural wall-opening extrusion & frame
- **Configurable Variants:** Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide
- **Source Implementation:** `frontend/src/model.ts#L2015-2028`
- **Visual Evidence Preview:** `Procedural 2D canvas SVG plan symbol & 3D wall mesh cut`

##### `opening.glass_wall` — Fixed Glass Architectural Wall
- **Asset ID:** `opening.glass_wall`
- **Display Name:** Fixed Glass Architectural Wall (*German:* Glaswand)
- **Category / Subcategory:** Architectural Elements / Windows & Glazing
- **Collection:** NeonPlan 3D Architectural Openings
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 2.00 x 0.12 x 2.40 m
- **Geometry Engine:** Procedural wall-opening extrusion & frame
- **Configurable Variants:** Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide
- **Source Implementation:** `frontend/src/model.ts#L2015-2028`
- **Visual Evidence Preview:** `Procedural 2D canvas SVG plan symbol & 3D wall mesh cut`

##### `opening.terrace_slide` — Lift-and-Slide Patio Door
- **Asset ID:** `opening.terrace_slide`
- **Display Name:** Lift-and-Slide Patio Door (*German:* Hebe-Schiebetür)
- **Category / Subcategory:** Architectural Elements / Doors & Openings
- **Collection:** NeonPlan 3D Architectural Openings
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 2.40 x 0.24 x 2.15 m
- **Geometry Engine:** Procedural wall-opening extrusion & frame
- **Configurable Variants:** Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide
- **Source Implementation:** `frontend/src/model.ts#L2015-2028`
- **Visual Evidence Preview:** `Procedural 2D canvas SVG plan symbol & 3D wall mesh cut`

##### `opening.window_slide` — Sliding Window
- **Asset ID:** `opening.window_slide`
- **Display Name:** Sliding Window (*German:* Schiebefenster)
- **Category / Subcategory:** Architectural Elements / Windows & Glazing
- **Collection:** NeonPlan 3D Architectural Openings
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.60 x 0.24 x 1.30 m
- **Geometry Engine:** Procedural wall-opening extrusion & frame
- **Configurable Variants:** Door styles: interior, front, front_glass, sidelight, sidelights, glass, sliding, passage; Window styles: standard, bars, glass_wall, slide
- **Source Implementation:** `frontend/src/model.ts#L2015-2028`
- **Visual Evidence Preview:** `Procedural 2D canvas SVG plan symbol & 3D wall mesh cut`

### Category: Bathroom, Spa, and Wellness (6 Items)

| Asset ID | Display Name (EN) | Original Name (DE) | Subcategory | Dimensions (W×D×H) | Variants | Source Reference |
|---|---|---|---|:---:|---|---|
| `bathtub` | **Bathtub** | *Badewanne* | Bathtubs | 1.70 x 0.75 x 0.58 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `shower` | **Shower** | *Dusche* | Shower Enclosures | 0.90 x 0.90 x 2.00 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `wc` | **Wc** | *WC* | Toilets & Commodes | 0.38 x 0.60 x 0.80 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `washbasin` | **Washbasin** | *Waschtisch* | Bathroom Vanities & Sinks | 0.60 x 0.46 x 0.85 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `washer` | **Washer** | *Waschmaschine* | Washing Machines | 0.60 x 0.60 x 0.85 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `dryer` | **Dryer** | *Trockner* | Clothes Dryers | 0.60 x 0.60 x 0.85 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |

#### Detailed Technical Specifications

##### `bathtub` — Bathtub
- **Asset ID:** `bathtub`
- **Display Name:** Bathtub (*German:* Badewanne)
- **Category / Subcategory:** Bathroom, Spa, and Wellness / Bathtubs
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.70 x 0.75 x 0.58 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Bathroom___Laundry/49_bathtub_3quarter.svg`

##### `shower` — Shower
- **Asset ID:** `shower`
- **Display Name:** Shower (*German:* Dusche)
- **Category / Subcategory:** Bathroom, Spa, and Wellness / Shower Enclosures
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.90 x 0.90 x 2.00 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Bathroom___Laundry/50_shower_front.svg`

##### `wc` — Wc
- **Asset ID:** `wc`
- **Display Name:** Wc (*German:* WC)
- **Category / Subcategory:** Bathroom, Spa, and Wellness / Toilets & Commodes
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.38 x 0.60 x 0.80 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Bathroom___Laundry/51_wc_top.svg`

##### `washbasin` — Washbasin
- **Asset ID:** `washbasin`
- **Display Name:** Washbasin (*German:* Waschtisch)
- **Category / Subcategory:** Bathroom, Spa, and Wellness / Bathroom Vanities & Sinks
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.60 x 0.46 x 0.85 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Bathroom___Laundry/52_washbasin_3quarter.svg`

##### `washer` — Washer
- **Asset ID:** `washer`
- **Display Name:** Washer (*German:* Waschmaschine)
- **Category / Subcategory:** Bathroom, Spa, and Wellness / Washing Machines
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.60 x 0.60 x 0.85 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Bathroom___Laundry/53_washer_front.svg`

##### `dryer` — Dryer
- **Asset ID:** `dryer`
- **Display Name:** Dryer (*German:* Trockner)
- **Category / Subcategory:** Bathroom, Spa, and Wellness / Clothes Dryers
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.60 x 0.60 x 0.85 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Bathroom___Laundry/54_dryer_top.svg`

### Category: Decorations and Lifestyle Objects (2 Items)

| Asset ID | Display Name (EN) | Original Name (DE) | Subcategory | Dimensions (W×D×H) | Variants | Source Reference |
|---|---|---|---|:---:|---|---|
| `plant` | **Plant** | *Pflanze* | Potted Indoor Botanical Specimens | 0.45 x 0.45 x 1.10 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `rug` | **Rug** | *Teppich* | Area Rugs & Carpets | 2.00 x 1.40 x 0.01 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |

#### Detailed Technical Specifications

##### `plant` — Plant
- **Asset ID:** `plant`
- **Display Name:** Plant (*German:* Pflanze)
- **Category / Subcategory:** Decorations and Lifestyle Objects / Potted Indoor Botanical Specimens
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.45 x 0.45 x 1.10 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Living_Room/26_plant_front.svg`

##### `rug` — Rug
- **Asset ID:** `rug`
- **Display Name:** Rug (*German:* Teppich)
- **Category / Subcategory:** Decorations and Lifestyle Objects / Area Rugs & Carpets
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 2.00 x 1.40 x 0.01 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Living_Room/27_rug_front.svg`

### Category: Electronics and Entertainment (2 Items)

| Asset ID | Display Name (EN) | Original Name (DE) | Subcategory | Dimensions (W×D×H) | Variants | Source Reference |
|---|---|---|---|:---:|---|---|
| `tv_wall` | **Tv Wall** | *Fernseher (Wand)* | Wall-Mounted Flat Displays | 1.30 x 0.08 x 0.75 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `neon_sign` | **Neon Sign** | *Neon-Schild* | Illuminated Neon Signage | 0.90 x 0.03 x 0.32 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |

#### Detailed Technical Specifications

##### `tv_wall` — Tv Wall
- **Asset ID:** `tv_wall`
- **Display Name:** Tv Wall (*German:* Fernseher (Wand))
- **Category / Subcategory:** Electronics and Entertainment / Wall-Mounted Flat Displays
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.30 x 0.08 x 0.75 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Living_Room/23_tv_wall_3quarter.svg`

##### `neon_sign` — Neon Sign
- **Asset ID:** `neon_sign`
- **Display Name:** Neon Sign (*German:* Neon-Schild)
- **Category / Subcategory:** Electronics and Entertainment / Illuminated Neon Signage
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.90 x 0.03 x 0.32 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Electrical___Network/80_neon_sign_top.svg`

### Category: Furniture (24 Items)

| Asset ID | Display Name (EN) | Original Name (DE) | Subcategory | Dimensions (W×D×H) | Variants | Source Reference |
|---|---|---|---|:---:|---|---|
| `sofa` | **Sofa** | *Sofa* | Sofas & Couches | 2.20 x 0.90 x 0.82 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `sofa_l` | **Sofa L** | *Ecksofa (L-Form)* | Sectional Sofas | 2.60 x 1.80 x 0.82 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `sofa_u` | **Sofa U** | *Wohnlandschaft (U-Form)* | Sectional Sofas | 3.00 x 2.20 x 0.82 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `armchair` | **Armchair** | *Sessel* | Lounge Chairs | 0.85 x 0.85 x 0.80 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `stool` | **Stool** | *Hocker* | Stools & Ottomans | 0.55 x 0.55 x 0.42 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `coffee_table` | **Coffee Table** | *Couchtisch* | Coffee & Accent Tables | 1.10 x 0.60 x 0.42 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `tv_board` | **Tv Board** | *TV-Board* | Media Consoles | 1.80 x 0.42 x 0.50 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `sideboard` | **Sideboard** | *Sideboard* | Credenzas & Sideboards | 1.60 x 0.45 x 0.80 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `shelf` | **Shelf** | *Regal* | Bookcases & Shelving | 0.90 x 0.35 x 1.90 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `table` | **Table** | *Tisch* | Dining Tables | 1.60 x 0.90 x 0.75 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `table_round` | **Table Round** | *Runder Tisch* | Dining Tables | 1.10 x 1.10 x 0.75 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `chair` | **Chair** | *Stuhl* | Dining Chairs | 0.46 x 0.50 x 0.90 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `bench` | **Bench** | *Sitzbank* | Benches & Seating | 1.40 x 0.45 x 0.85 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `corner_bench` | **Corner Bench** | *Eckbank* | Dining Benches | 2.00 x 1.60 x 0.90 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `bar_stool` | **Bar Stool** | *Barhocker* | Bar & Counter Stools | 0.42 x 0.42 x 0.75 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `bed` | **Bed** | *Bett* | Beds & Headboards | 1.60 x 2.05 x 0.90 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `bunk_bed` | **Bunk Bed** | *Etagenbett* | Bunk Beds | 1.00 x 2.05 x 1.65 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `nightstand` | **Nightstand** | *Nachttisch* | Bedside Tables | 0.45 x 0.40 x 0.50 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `wardrobe` | **Wardrobe** | *Schrank* | Wardrobes & Armoires | 1.80 x 0.60 x 2.10 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `dresser` | **Dresser** | *Kommode* | Dressers & Chests | 1.00 x 0.50 x 0.90 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `desk` | **Desk** | *Schreibtisch* | Desks & Workstations | 1.40 x 0.70 x 0.75 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `office_chair` | **Office Chair** | *Bürostuhl* | Ergonomic Task Chairs | 0.65 x 0.65 x 1.10 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `tall_cabinet` | **Tall Cabinet** | *Hochschrank* | Tall Storage Cabinets | 0.60 x 0.60 x 2.10 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `coat_rack` | **Coat Rack** | *Garderobe* | Entryway Coat Racks | 1.00 x 0.35 x 1.90 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |

#### Detailed Technical Specifications

##### `sofa` — Sofa
- **Asset ID:** `sofa`
- **Display Name:** Sofa (*German:* Sofa)
- **Category / Subcategory:** Furniture / Sofas & Couches
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 2.20 x 0.90 x 0.82 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Living_Room/17_sofa_l_top.svg`

##### `sofa_l` — Sofa L
- **Asset ID:** `sofa_l`
- **Display Name:** Sofa L (*German:* Ecksofa (L-Form))
- **Category / Subcategory:** Furniture / Sectional Sofas
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 2.60 x 1.80 x 0.82 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Living_Room/17_sofa_l_top.svg`

##### `sofa_u` — Sofa U
- **Asset ID:** `sofa_u`
- **Display Name:** Sofa U (*German:* Wohnlandschaft (U-Form))
- **Category / Subcategory:** Furniture / Sectional Sofas
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 3.00 x 2.20 x 0.82 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Living_Room/18_sofa_u_3quarter.svg`

##### `armchair` — Armchair
- **Asset ID:** `armchair`
- **Display Name:** Armchair (*German:* Sessel)
- **Category / Subcategory:** Furniture / Lounge Chairs
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.85 x 0.85 x 0.80 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Living_Room/19_armchair_front.svg`

##### `stool` — Stool
- **Asset ID:** `stool`
- **Display Name:** Stool (*German:* Hocker)
- **Category / Subcategory:** Furniture / Stools & Ottomans
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.55 x 0.55 x 0.42 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Dining/33_bar_stool_front.svg`

##### `coffee_table` — Coffee Table
- **Asset ID:** `coffee_table`
- **Display Name:** Coffee Table (*German:* Couchtisch)
- **Category / Subcategory:** Furniture / Coffee & Accent Tables
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.10 x 0.60 x 0.42 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Living_Room/21_coffee_table_top.svg`

##### `tv_board` — Tv Board
- **Asset ID:** `tv_board`
- **Display Name:** Tv Board (*German:* TV-Board)
- **Category / Subcategory:** Furniture / Media Consoles
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.80 x 0.42 x 0.50 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Living_Room/22_tv_board_front.svg`

##### `sideboard` — Sideboard
- **Asset ID:** `sideboard`
- **Display Name:** Sideboard (*German:* Sideboard)
- **Category / Subcategory:** Furniture / Credenzas & Sideboards
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.60 x 0.45 x 0.80 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Living_Room/24_sideboard_3quarter.svg`

##### `shelf` — Shelf
- **Asset ID:** `shelf`
- **Display Name:** Shelf (*German:* Regal)
- **Category / Subcategory:** Furniture / Bookcases & Shelving
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.90 x 0.35 x 1.90 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Living_Room/25_shelf_3quarter.svg`

##### `table` — Table
- **Asset ID:** `table`
- **Display Name:** Table (*German:* Tisch)
- **Category / Subcategory:** Furniture / Dining Tables
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.60 x 0.90 x 0.75 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Dining/28_table_front.svg`

##### `table_round` — Table Round
- **Asset ID:** `table_round`
- **Display Name:** Table Round (*German:* Runder Tisch)
- **Category / Subcategory:** Furniture / Dining Tables
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.10 x 1.10 x 0.75 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Dining/29_table_round_top.svg`

##### `chair` — Chair
- **Asset ID:** `chair`
- **Display Name:** Chair (*German:* Stuhl)
- **Category / Subcategory:** Furniture / Dining Chairs
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.46 x 0.50 x 0.90 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Dining/30_chair_top.svg`

##### `bench` — Bench
- **Asset ID:** `bench`
- **Display Name:** Bench (*German:* Sitzbank)
- **Category / Subcategory:** Furniture / Benches & Seating
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.40 x 0.45 x 0.85 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Dining/32_corner_bench_3quarter.svg`

##### `corner_bench` — Corner Bench
- **Asset ID:** `corner_bench`
- **Display Name:** Corner Bench (*German:* Eckbank)
- **Category / Subcategory:** Furniture / Dining Benches
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 2.00 x 1.60 x 0.90 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Dining/32_corner_bench_3quarter.svg`

##### `bar_stool` — Bar Stool
- **Asset ID:** `bar_stool`
- **Display Name:** Bar Stool (*German:* Barhocker)
- **Category / Subcategory:** Furniture / Bar & Counter Stools
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.42 x 0.42 x 0.75 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Dining/33_bar_stool_front.svg`

##### `bed` — Bed
- **Asset ID:** `bed`
- **Display Name:** Bed (*German:* Bett)
- **Category / Subcategory:** Furniture / Beds & Headboards
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.60 x 2.05 x 0.90 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Bedroom/45_bunk_bed_3quarter.svg`

##### `bunk_bed` — Bunk Bed
- **Asset ID:** `bunk_bed`
- **Display Name:** Bunk Bed (*German:* Etagenbett)
- **Category / Subcategory:** Furniture / Bunk Beds
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.00 x 2.05 x 1.65 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Bedroom/45_bunk_bed_3quarter.svg`

##### `nightstand` — Nightstand
- **Asset ID:** `nightstand`
- **Display Name:** Nightstand (*German:* Nachttisch)
- **Category / Subcategory:** Furniture / Bedside Tables
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.45 x 0.40 x 0.50 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Bedroom/46_nightstand_3quarter.svg`

##### `wardrobe` — Wardrobe
- **Asset ID:** `wardrobe`
- **Display Name:** Wardrobe (*German:* Schrank)
- **Category / Subcategory:** Furniture / Wardrobes & Armoires
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.80 x 0.60 x 2.10 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Bedroom/47_wardrobe_top.svg`

##### `dresser` — Dresser
- **Asset ID:** `dresser`
- **Display Name:** Dresser (*German:* Kommode)
- **Category / Subcategory:** Furniture / Dressers & Chests
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.00 x 0.50 x 0.90 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Bedroom/48_dresser_front.svg`

##### `desk` — Desk
- **Asset ID:** `desk`
- **Display Name:** Desk (*German:* Schreibtisch)
- **Category / Subcategory:** Furniture / Desks & Workstations
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.40 x 0.70 x 0.75 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Home_Office/55_desk_front.svg`

##### `office_chair` — Office Chair
- **Asset ID:** `office_chair`
- **Display Name:** Office Chair (*German:* Bürostuhl)
- **Category / Subcategory:** Furniture / Ergonomic Task Chairs
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.65 x 0.65 x 1.10 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Home_Office/56_office_chair_top.svg`

##### `tall_cabinet` — Tall Cabinet
- **Asset ID:** `tall_cabinet`
- **Display Name:** Tall Cabinet (*German:* Hochschrank)
- **Category / Subcategory:** Furniture / Tall Storage Cabinets
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.60 x 0.60 x 2.10 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Home_Office/57_tall_cabinet_3quarter.svg`

##### `coat_rack` — Coat Rack
- **Asset ID:** `coat_rack`
- **Display Name:** Coat Rack (*German:* Garderobe)
- **Category / Subcategory:** Furniture / Entryway Coat Racks
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.00 x 0.35 x 1.90 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Home_Office/58_coat_rack_top.svg`

### Category: Kitchen and Household Appliances (10 Items)

| Asset ID | Display Name (EN) | Original Name (DE) | Subcategory | Dimensions (W×D×H) | Variants | Source Reference |
|---|---|---|---|:---:|---|---|
| `kitchen` | **Kitchen** | *Küchenzeile* | Modular Kitchen Counters | 2.40 x 0.62 x 0.92 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `kitchen_wall` | **Kitchen Wall** | *Oberschrank* | Upper Kitchen Wall Cabinets | 0.80 x 0.35 x 0.70 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `kitchen_tall` | **Kitchen Tall** | *Hochschrank mit Backofen* | Tall Pantry & Oven Cabinets | 0.60 x 0.62 x 2.10 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `island` | **Island** | *Kochinsel* | Freestanding Kitchen Islands | 1.80 x 0.90 x 0.92 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `worktop` | **Worktop** | *Arbeitsplatte* | Solid Surface Countertops | 1.20 x 0.62 x 0.91 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `sink` | **Sink** | *Spüle* | Kitchen Sinks & Basins | 0.90 x 0.62 x 0.92 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `stove` | **Stove** | *Herd* | Ranges & Cooktops | 0.60 x 0.62 x 0.92 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `dishwasher` | **Dishwasher** | *Spülmaschine* | Built-In Dishwashers | 0.60 x 0.62 x 0.92 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `fridge` | **Fridge** | *Kühlschrank* | Refrigerators | 0.60 x 0.65 x 1.80 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `fridge_smart` | **Fridge Smart** | *Smart-Kühlschrank (Side-by-Side)* | Smart Multi-Door Refrigerators | 0.91 x 0.73 x 1.78 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |

#### Detailed Technical Specifications

##### `kitchen` — Kitchen
- **Asset ID:** `kitchen`
- **Display Name:** Kitchen (*German:* Küchenzeile)
- **Category / Subcategory:** Kitchen and Household Appliances / Modular Kitchen Counters
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 2.40 x 0.62 x 0.92 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Kitchen/35_kitchen_wall_3quarter.svg`

##### `kitchen_wall` — Kitchen Wall
- **Asset ID:** `kitchen_wall`
- **Display Name:** Kitchen Wall (*German:* Oberschrank)
- **Category / Subcategory:** Kitchen and Household Appliances / Upper Kitchen Wall Cabinets
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.80 x 0.35 x 0.70 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Kitchen/35_kitchen_wall_3quarter.svg`

##### `kitchen_tall` — Kitchen Tall
- **Asset ID:** `kitchen_tall`
- **Display Name:** Kitchen Tall (*German:* Hochschrank mit Backofen)
- **Category / Subcategory:** Kitchen and Household Appliances / Tall Pantry & Oven Cabinets
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.60 x 0.62 x 2.10 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Kitchen/36_kitchen_tall_top.svg`

##### `island` — Island
- **Asset ID:** `island`
- **Display Name:** Island (*German:* Kochinsel)
- **Category / Subcategory:** Kitchen and Household Appliances / Freestanding Kitchen Islands
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.80 x 0.90 x 0.92 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Domolux_Collection_30/10_closet_island_top.svg`

##### `worktop` — Worktop
- **Asset ID:** `worktop`
- **Display Name:** Worktop (*German:* Arbeitsplatte)
- **Category / Subcategory:** Kitchen and Household Appliances / Solid Surface Countertops
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.20 x 0.62 x 0.91 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Kitchen/38_worktop_3quarter.svg`

##### `sink` — Sink
- **Asset ID:** `sink`
- **Display Name:** Sink (*German:* Spüle)
- **Category / Subcategory:** Kitchen and Household Appliances / Kitchen Sinks & Basins
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.90 x 0.62 x 0.92 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Kitchen/39_sink_3quarter.svg`

##### `stove` — Stove
- **Asset ID:** `stove`
- **Display Name:** Stove (*German:* Herd)
- **Category / Subcategory:** Kitchen and Household Appliances / Ranges & Cooktops
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.60 x 0.62 x 0.92 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Kitchen/40_stove_3quarter.svg`

##### `dishwasher` — Dishwasher
- **Asset ID:** `dishwasher`
- **Display Name:** Dishwasher (*German:* Spülmaschine)
- **Category / Subcategory:** Kitchen and Household Appliances / Built-In Dishwashers
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.60 x 0.62 x 0.92 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Kitchen/41_dishwasher_front.svg`

##### `fridge` — Fridge
- **Asset ID:** `fridge`
- **Display Name:** Fridge (*German:* Kühlschrank)
- **Category / Subcategory:** Kitchen and Household Appliances / Refrigerators
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.60 x 0.65 x 1.80 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Kitchen/42_fridge_3quarter.svg`

##### `fridge_smart` — Fridge Smart
- **Asset ID:** `fridge_smart`
- **Display Name:** Fridge Smart (*German:* Smart-Kühlschrank (Side-by-Side))
- **Category / Subcategory:** Kitchen and Household Appliances / Smart Multi-Door Refrigerators
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.91 x 0.73 x 1.78 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Kitchen/43_fridge_smart_top.svg`

### Category: Lighting (13 Items)

| Asset ID | Display Name (EN) | Original Name (DE) | Subcategory | Dimensions (W×D×H) | Variants | Source Reference |
|---|---|---|---|:---:|---|---|
| `lamp_ceiling` | **Lamp Ceiling** | *Deckenleuchte* | Ceiling Lights | 0.40 x 0.40 x 0.08 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `lamp_downlight` | **Lamp Downlight** | *Einbauspot* | Recessed Downlights | 0.10 x 0.10 x 0.02 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `lamp_spot` | **Lamp Spot** | *Aufbau-Spot* | Directional Spotlights | 0.10 x 0.10 x 0.14 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `lamp_panel` | **Lamp Panel** | *LED-Panel* | LED Surface Panels | 0.60 x 0.60 x 0.03 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `lamp_pendant` | **Lamp Pendant** | *Pendelleuchte* | Pendant Lights | 0.40 x 0.40 x 0.80 m | globe, cone, drum | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `lamp_floor` | **Lamp Floor** | *Stehlampe* | Floor Lamps | 0.40 x 0.40 x 1.70 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `lamp_table` | **Lamp Table** | *Tischlampe* | Table Lamps | 0.28 x 0.28 x 0.45 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `lamp_wall` | **Lamp Wall** | *Wandleuchte* | Wall Sconces | 0.22 x 0.12 x 0.20 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `led_strip` | **Led Strip** | *LED-Streifen* | Architectural LED Strips | 2.00 x 0.04 x 0.03 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `lamp_uplight` | **Lamp Uplight** | *Deckenfluter* | Floor Uplights | 0.35 x 0.35 x 1.80 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `lamp_bollard` | **Lamp Bollard** | *Wegleuchte* | Pathway Bollards | 0.16 x 0.16 x 0.80 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `lamp_garden` | **Lamp Garden** | *Garten-Spot* | Garden Spotlights | 0.12 x 0.12 x 0.30 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `lamp_fan` | **Lamp Fan** | *Deckenventilator mit Licht* | Ceiling Fan Lights | 1.30 x 1.30 x 0.45 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |

#### Detailed Technical Specifications

##### `lamp_ceiling` — Lamp Ceiling
- **Asset ID:** `lamp_ceiling`
- **Display Name:** Lamp Ceiling (*German:* Deckenleuchte)
- **Category / Subcategory:** Lighting / Ceiling Lights
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.40 x 0.40 x 0.08 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Lighting/01_lamp_ceiling_3quarter.svg`

##### `lamp_downlight` — Lamp Downlight
- **Asset ID:** `lamp_downlight`
- **Display Name:** Lamp Downlight (*German:* Einbauspot)
- **Category / Subcategory:** Lighting / Recessed Downlights
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.10 x 0.10 x 0.02 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Lighting/02_lamp_downlight_front.svg`

##### `lamp_spot` — Lamp Spot
- **Asset ID:** `lamp_spot`
- **Display Name:** Lamp Spot (*German:* Aufbau-Spot)
- **Category / Subcategory:** Lighting / Directional Spotlights
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.10 x 0.10 x 0.14 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Lighting/03_lamp_spot_3quarter.svg`

##### `lamp_panel` — Lamp Panel
- **Asset ID:** `lamp_panel`
- **Display Name:** Lamp Panel (*German:* LED-Panel)
- **Category / Subcategory:** Lighting / LED Surface Panels
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.60 x 0.60 x 0.03 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Lighting/04_lamp_panel_top.svg`

##### `lamp_pendant` — Lamp Pendant
- **Asset ID:** `lamp_pendant`
- **Display Name:** Lamp Pendant (*German:* Pendelleuchte)
- **Category / Subcategory:** Lighting / Pendant Lights
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.40 x 0.40 x 0.80 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** globe, cone, drum
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Lighting/05_lamp_pendant_front.svg`

##### `lamp_floor` — Lamp Floor
- **Asset ID:** `lamp_floor`
- **Display Name:** Lamp Floor (*German:* Stehlampe)
- **Category / Subcategory:** Lighting / Floor Lamps
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.40 x 0.40 x 1.70 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Lighting/06_lamp_floor_front.svg`

##### `lamp_table` — Lamp Table
- **Asset ID:** `lamp_table`
- **Display Name:** Lamp Table (*German:* Tischlampe)
- **Category / Subcategory:** Lighting / Table Lamps
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.28 x 0.28 x 0.45 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Lighting/07_lamp_table_top.svg`

##### `lamp_wall` — Lamp Wall
- **Asset ID:** `lamp_wall`
- **Display Name:** Lamp Wall (*German:* Wandleuchte)
- **Category / Subcategory:** Lighting / Wall Sconces
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.22 x 0.12 x 0.20 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Lighting/08_lamp_wall_front.svg`

##### `led_strip` — Led Strip
- **Asset ID:** `led_strip`
- **Display Name:** Led Strip (*German:* LED-Streifen)
- **Category / Subcategory:** Lighting / Architectural LED Strips
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 2.00 x 0.04 x 0.03 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Lighting/09_led_strip_front.svg`

##### `lamp_uplight` — Lamp Uplight
- **Asset ID:** `lamp_uplight`
- **Display Name:** Lamp Uplight (*German:* Deckenfluter)
- **Category / Subcategory:** Lighting / Floor Uplights
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.35 x 0.35 x 1.80 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Lighting/10_lamp_uplight_3quarter.svg`

##### `lamp_bollard` — Lamp Bollard
- **Asset ID:** `lamp_bollard`
- **Display Name:** Lamp Bollard (*German:* Wegleuchte)
- **Category / Subcategory:** Lighting / Pathway Bollards
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.16 x 0.16 x 0.80 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Lighting/11_lamp_bollard_front.svg`

##### `lamp_garden` — Lamp Garden
- **Asset ID:** `lamp_garden`
- **Display Name:** Lamp Garden (*German:* Garten-Spot)
- **Category / Subcategory:** Lighting / Garden Spotlights
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.12 x 0.12 x 0.30 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Lighting/12_lamp_garden_top.svg`

##### `lamp_fan` — Lamp Fan
- **Asset ID:** `lamp_fan`
- **Display Name:** Lamp Fan (*German:* Deckenventilator mit Licht)
- **Category / Subcategory:** Lighting / Ceiling Fan Lights
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.30 x 1.30 x 0.45 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Lighting/13_lamp_fan_3quarter.svg`

### Category: Outdoor, Garden, and Estate Equipment (2 Items)

| Asset ID | Display Name (EN) | Original Name (DE) | Subcategory | Dimensions (W×D×H) | Variants | Source Reference |
|---|---|---|---|:---:|---|---|
| `parking` | **Parking** | *Stellplatz* | Vehicle Parking Stalls | 2.60 x 5.20 x 0.02 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `awning` | **Awning** | *Markise* | Motorized Retractable Awnings | 3.00 x 2.50 x 0.22 m | arm, drop | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |

#### Detailed Technical Specifications

##### `parking` — Parking
- **Asset ID:** `parking`
- **Display Name:** Parking (*German:* Stellplatz)
- **Category / Subcategory:** Outdoor, Garden, and Estate Equipment / Vehicle Parking Stalls
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 2.60 x 5.20 x 0.02 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Outdoor/72_parking_front.svg`

##### `awning` — Awning
- **Asset ID:** `awning`
- **Display Name:** Awning (*German:* Markise)
- **Category / Subcategory:** Outdoor, Garden, and Estate Equipment / Motorized Retractable Awnings
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 3.00 x 2.50 x 0.22 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** arm, drop
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Outdoor/73_awning_3quarter.svg`

### Category: Smart Home and Electrical Equipment (16 Items)

| Asset ID | Display Name (EN) | Original Name (DE) | Subcategory | Dimensions (W×D×H) | Variants | Source Reference |
|---|---|---|---|:---:|---|---|
| `radiator` | **Radiator** | *Heizkörper* | Hydronic Radiators | 1.00 x 0.10 x 0.60 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `ac_unit` | **Ac Unit** | *Klimagerät (Wand)* | Split Air Conditioner Units | 0.85 x 0.22 x 0.30 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `inverter` | **Inverter** | *Wechselrichter* | Solar Inverters | 0.50 x 0.20 x 0.65 m | standard, slim, hybrid | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `home_battery` | **Home Battery** | *Stromspeicher* | Battery Storage Systems | 0.60 x 0.25 x 1.10 m | floor_standing, wall, cube | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `wallbox` | **Wallbox** | *Wallbox* | EV Charging Wallboxes | 0.30 x 0.15 x 0.42 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `meter` | **Meter** | *Stromzähler* | Electrical Subpanels & Meters | 0.55 x 0.21 x 1.10 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `grid_point` | **Grid Point** | *Netzanschluss* | Utility Grid Connection Cabinets | 0.40 x 0.22 x 0.60 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `pool_pump` | **Pool Pump** | *Filterpumpe* | Pool Circulation Pumps | 0.70 x 0.32 x 0.40 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `pool_filter` | **Pool Filter** | *Sandfilter* | Pool Sand & Cartridge Filters | 0.60 x 0.60 x 1.00 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `pool_heat_pump` | **Pool Heat Pump** | *Wärmepumpe* | Pool Inverter Heat Pumps | 1.00 x 0.45 x 0.75 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `pool_dosing` | **Pool Dosing** | *Dosieranlage* | Pool Chemical Dosing Systems | 0.40 x 0.20 x 0.50 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `pool_valve` | **Pool Valve** | *Kugelhahn* | Motorized Pool Ball Valves | 0.16 x 0.10 x 0.14 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `wall_switch` | **Wall Switch** | *Lichtschalter* | Architectural Wall Switches | 0.09 x 0.01 x 0.09 m | gangs_1_to_4 | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `wall_socket` | **Wall Socket** | *Steckdose* | Architectural Power Outlets | 0.09 x 0.01 x 0.09 m | indoor, outdoor, gangs_1_to_4 | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `wifi_ap` | **Wifi Ap** | *WLAN-Access-Point* | Wireless Access Points | 0.20 x 0.20 x 0.04 m | ceiling, wall | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `water_heater` | **Water Heater** | *Warmwasserspeicher* | Domestic Hot Water Tanks | 0.56 x 0.56 x 1.50 m | floor_standing, wall | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |

#### Detailed Technical Specifications

##### `radiator` — Radiator
- **Asset ID:** `radiator`
- **Display Name:** Radiator (*German:* Heizkörper)
- **Category / Subcategory:** Smart Home and Electrical Equipment / Hydronic Radiators
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.00 x 0.10 x 0.60 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Heating___AC/14_radiator_3quarter.svg`

##### `ac_unit` — Ac Unit
- **Asset ID:** `ac_unit`
- **Display Name:** Ac Unit (*German:* Klimagerät (Wand))
- **Category / Subcategory:** Smart Home and Electrical Equipment / Split Air Conditioner Units
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.85 x 0.22 x 0.30 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Heating___AC/15_ac_unit_front.svg`

##### `inverter` — Inverter
- **Asset ID:** `inverter`
- **Display Name:** Inverter (*German:* Wechselrichter)
- **Category / Subcategory:** Smart Home and Electrical Equipment / Solar Inverters
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.50 x 0.20 x 0.65 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** standard, slim, hybrid
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Smart_Home___Energy/62_inverter_top.svg`

##### `home_battery` — Home Battery
- **Asset ID:** `home_battery`
- **Display Name:** Home Battery (*German:* Stromspeicher)
- **Category / Subcategory:** Smart Home and Electrical Equipment / Battery Storage Systems
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.60 x 0.25 x 1.10 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** floor_standing, wall, cube
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Smart_Home___Energy/63_home_battery_3quarter.svg`

##### `wallbox` — Wallbox
- **Asset ID:** `wallbox`
- **Display Name:** Wallbox (*German:* Wallbox)
- **Category / Subcategory:** Smart Home and Electrical Equipment / EV Charging Wallboxes
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.30 x 0.15 x 0.42 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Smart_Home___Energy/64_wallbox_top.svg`

##### `meter` — Meter
- **Asset ID:** `meter`
- **Display Name:** Meter (*German:* Stromzähler)
- **Category / Subcategory:** Smart Home and Electrical Equipment / Electrical Subpanels & Meters
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.55 x 0.21 x 1.10 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Smart_Home___Energy/65_meter_front.svg`

##### `grid_point` — Grid Point
- **Asset ID:** `grid_point`
- **Display Name:** Grid Point (*German:* Netzanschluss)
- **Category / Subcategory:** Smart Home and Electrical Equipment / Utility Grid Connection Cabinets
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.40 x 0.22 x 0.60 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Smart_Home___Energy/66_grid_point_3quarter.svg`

##### `pool_pump` — Pool Pump
- **Asset ID:** `pool_pump`
- **Display Name:** Pool Pump (*German:* Filterpumpe)
- **Category / Subcategory:** Smart Home and Electrical Equipment / Pool Circulation Pumps
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.70 x 0.32 x 0.40 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Smart_Home___Energy/67_pool_pump_3quarter.svg`

##### `pool_filter` — Pool Filter
- **Asset ID:** `pool_filter`
- **Display Name:** Pool Filter (*German:* Sandfilter)
- **Category / Subcategory:** Smart Home and Electrical Equipment / Pool Sand & Cartridge Filters
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.60 x 0.60 x 1.00 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Smart_Home___Energy/68_pool_filter_3quarter.svg`

##### `pool_heat_pump` — Pool Heat Pump
- **Asset ID:** `pool_heat_pump`
- **Display Name:** Pool Heat Pump (*German:* Wärmepumpe)
- **Category / Subcategory:** Smart Home and Electrical Equipment / Pool Inverter Heat Pumps
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 1.00 x 0.45 x 0.75 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Smart_Home___Energy/69_pool_heat_pump_top.svg`

##### `pool_dosing` — Pool Dosing
- **Asset ID:** `pool_dosing`
- **Display Name:** Pool Dosing (*German:* Dosieranlage)
- **Category / Subcategory:** Smart Home and Electrical Equipment / Pool Chemical Dosing Systems
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.40 x 0.20 x 0.50 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Smart_Home___Energy/70_pool_dosing_front.svg`

##### `pool_valve` — Pool Valve
- **Asset ID:** `pool_valve`
- **Display Name:** Pool Valve (*German:* Kugelhahn)
- **Category / Subcategory:** Smart Home and Electrical Equipment / Motorized Pool Ball Valves
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.16 x 0.10 x 0.14 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Smart_Home___Energy/71_pool_valve_top.svg`

##### `wall_switch` — Wall Switch
- **Asset ID:** `wall_switch`
- **Display Name:** Wall Switch (*German:* Lichtschalter)
- **Category / Subcategory:** Smart Home and Electrical Equipment / Architectural Wall Switches
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.09 x 0.01 x 0.09 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** gangs_1_to_4
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Electrical___Network/76_wall_switch_3quarter.svg`

##### `wall_socket` — Wall Socket
- **Asset ID:** `wall_socket`
- **Display Name:** Wall Socket (*German:* Steckdose)
- **Category / Subcategory:** Smart Home and Electrical Equipment / Architectural Power Outlets
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.09 x 0.01 x 0.09 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** indoor, outdoor, gangs_1_to_4
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Electrical___Network/77_wall_socket_top.svg`

##### `wifi_ap` — Wifi Ap
- **Asset ID:** `wifi_ap`
- **Display Name:** Wifi Ap (*German:* WLAN-Access-Point)
- **Category / Subcategory:** Smart Home and Electrical Equipment / Wireless Access Points
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.20 x 0.20 x 0.04 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** ceiling, wall
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Electrical___Network/78_wifi_ap_3quarter.svg`

##### `water_heater` — Water Heater
- **Asset ID:** `water_heater`
- **Display Name:** Water Heater (*German:* Warmwasserspeicher)
- **Category / Subcategory:** Smart Home and Electrical Equipment / Domestic Hot Water Tanks
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.56 x 0.56 x 1.50 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** floor_standing, wall
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Electrical___Network/79_water_heater_front.svg`

### Category: Specialist and Other Assets (3 Items)

| Asset ID | Display Name (EN) | Original Name (DE) | Subcategory | Dimensions (W×D×H) | Variants | Source Reference |
|---|---|---|---|:---:|---|---|
| `robot_vacuum` | **Robot Vacuum** | *Saugroboter* | Autonomous Robotic Vacuums | 0.36 x 0.50 x 0.10 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `waste_bin` | **Waste Bin** | *Mülltonne* | Curbside Waste & Recycling Bins | 0.58 x 0.73 x 1.07 m | Single configuration | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |
| `mailbox` | **Mailbox** | *Briefkasten* | Residential Wall & Pillar Mailboxes | 0.38 x 0.14 x 0.34 m | wall, bank, pole, pillar, parcel | `frontend/src/model.ts, frontend/src/viewer/furniture.ts` |

#### Detailed Technical Specifications

##### `robot_vacuum` — Robot Vacuum
- **Asset ID:** `robot_vacuum`
- **Display Name:** Robot Vacuum (*German:* Saugroboter)
- **Category / Subcategory:** Specialist and Other Assets / Autonomous Robotic Vacuums
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.36 x 0.50 x 0.10 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Smart_Home___Energy/61_robot_vacuum_3quarter.svg`

##### `waste_bin` — Waste Bin
- **Asset ID:** `waste_bin`
- **Display Name:** Waste Bin (*German:* Mülltonne)
- **Category / Subcategory:** Specialist and Other Assets / Curbside Waste & Recycling Bins
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.58 x 0.73 x 1.07 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** Single configuration
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Outdoor/74_waste_bin_front.svg`

##### `mailbox` — Mailbox
- **Asset ID:** `mailbox`
- **Display Name:** Mailbox (*German:* Briefkasten)
- **Category / Subcategory:** Specialist and Other Assets / Residential Wall & Pillar Mailboxes
- **Collection:** NeonPlan 3D Built-in Core Library
- **Registration & Availability:** Registered (Confirmed available)
- **Dimensions:** 0.38 x 0.14 x 0.34 m
- **Geometry Engine:** Procedural WebGL GeoBuffer geometry
- **Configurable Variants:** wall, bank, pole, pillar, parcel
- **Source Implementation:** `frontend/src/model.ts, frontend/src/viewer/furniture.ts`
- **Visual Evidence Preview:** `.claude/inspection_screenshots/Outdoor/75_mailbox_top.svg`

