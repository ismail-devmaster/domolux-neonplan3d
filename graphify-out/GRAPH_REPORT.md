# Graph Report - neonplan3d  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 10545 nodes · 31872 edges · 255 communities (223 shown, 32 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 1239 edges (avg confidence: 0.85)
- Token cost: 79,135 input · 28,574 output

## Graph Freshness
- Built from commit: `503bcb36`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- 3D Graphics Core
- Floorplan Viewer
- Editor Module
- 3D View UI
- Backdrop & Drag
- Main neonplan3d
- Pack Management
- Camera Wall & Lines
- Core Identifiers
- Add Elements
- Async & Crypto
- Ground & Sun
- Devices & Entities
- Build & Construct
- Build Systems
- Answer & Locate
- Module Signing & HA
- Building Cards
- Floorplan Editor
- Now List
- Furniture & Shapes
- Polygon Operations
- Hole Management
- Ghost Entities
- Pool Management
- Entity Options
- Testing & Utils
- Sentence Files
- Type Shortcuts
- Pipes & Fittings
- Rendering
- License Management
- External Area
- Path & Pipes
- Appliances
- Area & Floor
- Cleanup & Raycast
- Volume & Previews
- Add Fields
- Create & Place
- Roof Sections
- Announce & Setup
- Variables
- Geometry
- Editor Modes
- Furniture Library
- Ground & IP
- Furniture & Tint
- Time Travel
- Surroundings
- Live Log
- Roof & Dormer
- Build Items
- API & Diagnostics
- Energy & Graph
- Solar Fields
- Room Location
- Common Plan
- Furniture Types
- Build & Diagnostics
- Device Options
- Import
- Geometry ops
- Cover & Menu
- Draw & Edit
- Area & Floor Mgmt
- Session & Prefs
- Card Config
- Style & Theme
- Attributes
- Params
- Pack Images
- Time Bar
- Furniture
- Device Powers
- Groups
- Construct
- Pack Validation
- Dormers
- Roof Covers
- Cover
- Lights & Lamps
- Add Devices
- Furniture & Rooms
- Licensing
- Furniture Drag
- Shaders
- Dashboard
- Locate
- Away & Motion
- Review & Support
- Card Views
- Lighting
- Commands
- Geometry & Groups
- Floors & Stairs
- Settings
- Openings
- CI
- Device Management
- Plan Card Rendering
- Building Module Host
- Card Editor
- Event Timeline
- Device Lamp Control
- Room Locating Bluetooth
- Template Editing
- Alert System
- Plan Site Editor
- Director Management
- Control Events
- Voice Module
- Building Controller
- Ask Broker
- Geometry Intersection
- Sun Effects
- Plan Builder
- Math Buffer
- Recorder Locate
- ESP32 Key
- ESP32C3 Key
- ESP32S3 Key
- Time Bar Energy
- Audio Listening
- Demo Data
- Project Setup
- HTTP Server
- Media Processing
- Build Render
- OSM Module
- CI/CD Pipeline
- Opening Detection
- Text Rendering
- Diagnostics System
- Person Presence
- Time Travel
- Style Management
- Device Classification
- Sky Rendering
- Instance Tracking
- Energy Recording
- 3D View
- XR Reorder
- Voice Rendering
- Plan Making
- WebSocket Locating
- Time Travel Rows
- App Render
- Wall Parsing
- Pool Card Management
- Build Config
- Mesh Processing
- Entity Management
- Media Processing
- Room Planning
- Shop Extensions
- Discord Release
- Sheet Rendering
- Component Variables
- Bluetooth Scanners
- Plan Detection
- TypeScript Config
- Teaser Module
- First Floorplan
- Bug Report
- Fun Module
- Render Callbacks
- Car State
- Component Callbacks
- Row Management
- Release Process
- Test Suite
- Key Generation
- Away States
- Param States
- Simple Floor
- HACS Check
- Locating Engine
- Render Pipeline
- User Interaction
- Term Abbreviations
- Component Initialization
- Integration Manifest
- Config Settings
- Attic Roof
- Robot Model
- Issue Labels
- Version Updates
- App Settings
- Flyin Animation
- Shop Check
- Ask Fields
- Architectural Openings
- 2D Furniture
- Room Navigation
- Services Configuration
- Print Management
- Field Rendering
- Floorplan Design
- Architectural Testing
- View Management
- Config Schema
- 3D Fun Packs
- Release Downloader
- Device Management
- Update Lifecycle
- State Variables
- Component Connection
- Test Fixtures
- Tutorial Processing
- Fake Resources
- Property Initialization
- Property Initialization
- Pipeline Management
- Flag Variables
- Roof Rendering
- Entity Picker
- Location Loading
- Firework Effects
- Demo History
- AI States
- Component Updates
- Style Configuration
- Font Registration
- Integration Manifest
- Config Flow
- Component Selectors
- Template Rendering
- Room Tags
- Render Actions
- Repo Configuration
- User Permissions
- Room Selection
- Component Connection
- Project Funding
- Demo Packs
- Furniture Blocks
- Household Fields
- Bin Tag Settings
- Outdoor Room
- Live Director
- Sloping Walls
- Free Wall Slope
- Device Sensors
- Socket Gangs
- Roof End Shapes
- Module Data
- Door Angle
- Fence Gates
- Room Ceiling
- Length Units
- Sun Arc
- Cable Hub

## God Nodes (most connected - your core abstractions)
1. `Fp3dEditor` - 503 edges
2. `FloorplanViewer` - 224 edges
3. `Fp3dView3d` - 211 edges
4. `Building` - 188 edges
5. `HomeAssistant` - 157 edges
6. `pointInPolygon()` - 147 edges
7. `Vec2` - 144 edges
8. `render()` - 127 edges
9. `change()` - 116 edges
10. `constructor()` - 101 edges

## Surprising Connections (you probably didn't know these)
- `read_row()` --indirect_call--> `state()`  [INFERRED]
  custom_components/neonplan3d/timetravel_rows.py → tests/test_locate.py
- `constructor()` --indirect_call--> `Hn()`  [INFERRED]
  custom_components/neonplan3d/frontend/neonplan3d-3d.js → site/import/neonplan-import.js
- `_allocateTargets()` --indirect_call--> `Ze()`  [INFERRED]
  custom_components/neonplan3d/frontend/neonplan3d-3d.js → site/import/neonplan-import.js
- `_allocateTargets()` --indirect_call--> `Hn()`  [INFERRED]
  custom_components/neonplan3d/frontend/neonplan3d-3d.js → site/import/neonplan-import.js
- `test_a_device_without_learning_uses_the_others()` --calls--> `Fingerprints`  [EXTRACTED]
  tests/test_locate.py → custom_components/neonplan3d/locate/engine.py

## Import Cycles
- None detected.

## Communities (255 total, 32 thin omitted)

### Community 0 - "3D Graphics Core"
Cohesion: 0.01
Nodes (218): _0(), $1(), angleTo(), animate(), animateSound(), apply(), applyAxisAngle(), applyEuler() (+210 more)

### Community 1 - "Floorplan Viewer"
Cohesion: 0.03
Nodes (17): StyleDef, StartView, Theme, OrbitView, screenRect(), PipeTube, PoolPiece, buildSolarLive() (+9 more)

### Community 2 - "Editor Module"
Cohesion: 0.02
Nodes (156): _$AC(), addInitializer(), _$AE(), _$AK(), _$AS(), askPreviews(), attributeChangedCallback(), bc() (+148 more)

### Community 3 - "3D View UI"
Cohesion: 0.03
Nodes (48): alertText(), chime(), formatPower(), Fp3dView3d, ownButtonOn(), roofWindowState(), roomAt(), waterHeaterText() (+40 more)

### Community 4 - "Backdrop & Drag"
Cohesion: 0.02
Nodes (153): Backdrop, backdropCss(), backdropImage(), ANY_ENTITY(), ARROWS, CLASSIC_BG, CLASSIC_PALETTE, distToSegment() (+145 more)

### Community 5 - "Main neonplan3d"
Cohesion: 0.02
Nodes (119): intersectLine(), addInitializer(), _$AK(), al(), alertCounts(), alertsElsewhere(), attributeChangedCallback(), _$AU() (+111 more)

### Community 6 - "Pack Management"
Cohesion: 0.02
Nodes (46): _announce_new_packs(), async_activate(), async_fetch_catalog(), async_fetch_pack(), async_fetch_previews(), async_install(), async_instance_fingerprint(), async_refresh() (+38 more)

### Community 7 - "Camera Wall & Lines"
Cohesion: 0.02
Nodes (108): alertColor(), wallLayout(), linesField(), LinesLabels, DETECT_ICONS, heardAnnouncements, HoloCard, markerHeight() (+100 more)

### Community 8 - "Core Identifiers"
Cohesion: 0.03
Nodes (118): _2(), a1(), A2(), AE(), au(), b_(), bh(), C2() (+110 more)

### Community 9 - "Add Elements"
Cohesion: 0.03
Nodes (149): addDormer(), addDraftPoint(), addEnergyDevice(), addFreeWall(), addFurniture(), addHole(), addIntoGap(), addOnWall() (+141 more)

### Community 10 - "Async & Crypto"
Cohesion: 0.03
Nodes (34): async_ensure_card_resource(), async_remove_card_resource(), async_schedule_card_resource(), _started(), _is_ours(), loader_source(), remove_loader(), _resources() (+26 more)

### Community 11 - "Ground & Sun"
Cohesion: 0.02
Nodes (107): GROUND, groundFloor(), SunPath, SunPoint, sunPosition(), BERLIN, STAGE, THEMES (+99 more)

### Community 12 - "Devices & Entities"
Cohesion: 0.03
Nodes (118): apOnline(), areaEntities(), autoPlace(), AwningState, awningStates(), BINARY_CLASSES, CAR_ROLE_PATTERNS, CarEntities (+110 more)

### Community 13 - "Build & Construct"
Cohesion: 0.04
Nodes (112): buildHalos(), buildScreens(), buildSun(), cA(), cb(), computeLineDistances(), constructor(), ap() (+104 more)

### Community 14 - "Build Systems"
Cohesion: 0.03
Nodes (128): applyHighlight(), applyHouseLines(), applyTargets(), applyTierFlags(), arcFrame(), Bm(), buildFlows(), buildGlow() (+120 more)

### Community 15 - "Answer & Locate"
Cohesion: 0.04
Nodes (44): _admin(), async_answer(), async_locate(), _away(), Located, _match(), _norm(), _person_name() (+36 more)

### Community 16 - "Module Signing & HA"
Cohesion: 0.06
Nodes (55): module_sha(), parts_of(), empty_building(), screens_of(), complete(), async_register_commands(), _data(), _license_call() (+47 more)

### Community 17 - "Building Cards"
Cohesion: 0.05
Nodes (65): MAIN_PLAN, HeatMode, PreviewCard, readPreviewPref(), readScreen(), SCREENS, ScreenSize, PickerOption (+57 more)

### Community 18 - "Floorplan Editor"
Cohesion: 0.04
Nodes (11): fetchImage(), Snapshot, Fp3dEditor, onVeil(), FlowSegment, furnitureName(), Floor, labelPoint() (+3 more)

### Community 19 - "Now List"
Cohesion: 0.04
Nodes (49): Fp3dNowList, ICON, NowLabels, NowMode, STOP_ICON, Fp3dPhoneNav, NavGroup, NavLabels (+41 more)

### Community 20 - "Furniture & Shapes"
Cohesion: 0.06
Nodes (94): BinShape, householdCountry(), MailboxShape, packMovingPart(), AC_Y, acUnit(), barStool(), BASE (+86 more)

### Community 21 - "Polygon Operations"
Cohesion: 0.05
Nodes (76): area(), clipConvex(), intrusion(), isConvex(), netRoomArea(), opts, closeGaps(), Edge (+68 more)

### Community 22 - "Hole Management"
Cohesion: 0.05
Nodes (77): area(), cross(), distToSegment(), holeInRoom(), insetHole(), mergeHoles(), onSegment(), overlaps() (+69 more)

### Community 23 - "Ghost Entities"
Cohesion: 0.04
Nodes (54): buildGhost(), GhostContext, GhostController, lathe(), startGhost(), fly(), angleTo(), Animal (+46 more)

### Community 24 - "Pool Management"
Cohesion: 0.05
Nodes (15): onWallXZ(), RunCtx, RunDraft, simplifyStroke(), snapStroke(), onWall(), P3, toWall() (+7 more)

### Community 25 - "Entity Options"
Cohesion: 0.05
Nodes (96): af(), ao(), Ba(), bh(), Bi(), Bl(), br(), de() (+88 more)

### Community 26 - "Testing & Utils"
Cohesion: 0.04
Nodes (58): setup(), fakeHass(), crc32(), makeZip(), emptyBuilding(), newFloor(), setTerrain(), adventCandles() (+50 more)

### Community 27 - "Sentence Files"
Cohesion: 0.05
Nodes (56): area_device(), _old_files(), _only_our_sentences(), _ours(), _path(), remove_sentences(), sentences_of(), sentences_yaml() (+48 more)

### Community 28 - "Type Shortcuts"
Cohesion: 0.04
Nodes (72): bd(), m(), Dg(), Ff(), fg(), gd(), gg(), H2() (+64 more)

### Community 29 - "Pipes & Fittings"
Cohesion: 0.05
Nodes (94): addFitting(), addPipe(), alongAxis(), answerAsk(), askWallPics(), be(), Bt(), cardConnect() (+86 more)

### Community 30 - "Rendering"
Cohesion: 0.04
Nodes (93): getVertexPosition(), act(), actLabel(), allowed(), as(), ask(), askFor(), at() (+85 more)

### Community 31 - "License Management"
Cohesion: 0.06
Nodes (51): activateLicense(), approveModule(), CatalogPack, getLicense(), importPack(), installPack(), LicenseStatus, markOffersSeen() (+43 more)

### Community 32 - "External Area"
Cohesion: 0.03
Nodes (70): BACK, blur(), C_BACK, C_BACK_NEAR, C_DRIVE, C_FRONT, C_FRONT_NEAR, C_HOUSE (+62 more)

### Community 33 - "Path & Pipes"
Cohesion: 0.06
Nodes (57): pathLengthOf(), cornerPoint(), dist3(), nearestOnPath(), NodeAt, pathLength(), PIPE_HEIGHT, pipePath() (+49 more)

### Community 34 - "Appliances"
Cohesion: 0.05
Nodes (71): addDays(), applianceIdle(), ApplianceKind, BIN_SHAPES, BIN_SIZE, binColors(), BinDue, binGlows() (+63 more)

### Community 35 - "Area & Floor"
Cohesion: 0.04
Nodes (78): addAreaRooms(), addFloor(), applyBgLevel(), applyBgMap(), applyBgRuler(), applyPackage(), area(), C() (+70 more)

### Community 36 - "Cleanup & Raycast"
Cohesion: 0.05
Nodes (76): _cleanup(), closestPointToPoint(), Np(), raycast(), al(), Ap(), at(), _$AU() (+68 more)

### Community 37 - "Volume & Previews"
Cohesion: 0.06
Nodes (54): volumeMeter(), PACK, vertices(), Previews, BIND_KINDS, BindKind, bindValue(), hasLiveParts() (+46 more)

### Community 38 - "Add Fields"
Cohesion: 0.06
Nodes (3): storeImage(), Placement, uid()

### Community 39 - "Create & Place"
Cohesion: 0.04
Nodes (72): _a(), Ad(), Am(), bgHandles(), Bo(), closeDiagInvite(), create(), daysLeft() (+64 more)

### Community 40 - "Roof Sections"
Cohesion: 0.08
Nodes (65): polygonArea(), areaOf(), clipHalf(), clipUV(), coversIn(), crossAsWing(), cutHole(), cutUnder() (+57 more)

### Community 41 - "Announce & Setup"
Cohesion: 0.06
Nodes (29): async_announce(), async_setup_announce(), handle(), async_unload_announce(), _inside(), is_quiet(), _mods(), module_ready() (+21 more)

### Community 42 - "Variables"
Cohesion: 0.06
Nodes (69): ab(), ai(), al(), B1(), ba(), Bf(), bT(), C0() (+61 more)

### Community 43 - "Geometry"
Cohesion: 0.05
Nodes (70): box(), bw(), bx(), CT(), cx(), cyl(), dd(), ef() (+62 more)

### Community 44 - "Editor Modes"
Cohesion: 0.07
Nodes (10): MarkerMode, DeviceClass, directorOnHere(), loadEditor(), loadTimeTravel(), screenName(), voiceOnHere(), Floorplan3dPanel (+2 more)

### Community 45 - "Furniture Library"
Cohesion: 0.06
Nodes (41): FurnitureLibrary, load(), save(), Translate, HintKey, BASIC, basicTypes(), buildIndex() (+33 more)

### Community 46 - "Ground & IP"
Cohesion: 0.05
Nodes (67): ip(), Ug(), addGroundField(), addRoofWindow(), addSolarField(), addWallField(), _$AI(), _$AR() (+59 more)

### Community 47 - "Furniture & Tint"
Cohesion: 0.05
Nodes (64): _$AC(), applyTint(), batteryText(), carText(), Cc(), dayOf(), Do(), _$E_() (+56 more)

### Community 48 - "Time Travel"
Cohesion: 0.04
Nodes (30): _$AK(), attributeChangedCallback(), compact(), coverPos(), disconnectedCallback(), dn(), en(), eo() (+22 more)

### Community 49 - "Surroundings"
Cohesion: 0.08
Nodes (52): centroid(), SurroundArea, SurroundBuilding, Surroundings, SurroundWay, mainDirection(), mainRooms(), outerEdges() (+44 more)

### Community 50 - "Live Log"
Cohesion: 0.06
Nodes (40): start(), ATTR_KEEP, carState(), coarsen(), COARSER, LiveLog, LiveRow, liveValue() (+32 more)

### Community 51 - "Roof & Dormer"
Cohesion: 0.04
Nodes (45): ATTIC, blur(), CARPORT, CROSS, DORMER, dragCorner(), dragPlan(), edEl() (+37 more)

### Community 52 - "Build Items"
Cohesion: 0.07
Nodes (63): ag(), As(), Bg(), bS(), bu(), buildFridges(), cS(), cw() (+55 more)

### Community 53 - "API & Diagnostics"
Cohesion: 0.06
Nodes (43): answerAsk(), Ask, BackupFile, createPlan(), deleteDiagnostics(), deletePlan(), DiagnosticsStatus, fetchBackup() (+35 more)

### Community 54 - "Energy & Graph"
Cohesion: 0.07
Nodes (59): absolutePolyline(), addNode(), attach(), attachDevice(), bridgeGaps(), buildGraph(), ccwRoom(), DevicePos (+51 more)

### Community 55 - "Solar Fields"
Cohesion: 0.08
Nodes (48): fieldStart(), SolarField, bestFace(), center(), clampField(), cross(), faceAt(), faceCompass() (+40 more)

### Community 56 - "Room Location"
Cohesion: 0.05
Nodes (32): LocateRoom, locateRooms(), AppTransmitter, appTransmitters(), Config, CS, DA, DE (+24 more)

### Community 57 - "Common Plan"
Cohesion: 0.05
Nodes (40): FAST, fastMode(), helpers(), PLAN, PLAN_WIDTH, PTS, ROOMS, tap() (+32 more)

### Community 58 - "Furniture Types"
Cohesion: 0.06
Nodes (45): hasScreen(), isMediaFurniture(), vacuumCleaning(), BUILTIN, FINISH_ROLES, FINISH_SWATCHES, finishHex(), FinishRole (+37 more)

### Community 59 - "Build & Diagnostics"
Cohesion: 0.06
Nodes (17): build_payload(), clean_client(), clean_error(), DiagnosticsError, DiagnosticsReporter, _tick(), _empty_state(), _label() (+9 more)

### Community 60 - "Device Options"
Cohesion: 0.11
Nodes (6): binaryish(), numberish(), shopUrl(), canLift(), Furniture, splitAliases()

### Community 61 - "Import"
Cohesion: 0.08
Nodes (56): ae(), an(), Be(), bn(), ce(), cn(), ct(), De() (+48 more)

### Community 62 - "Geometry ops"
Cohesion: 0.05
Nodes (56): add(), applyMatrix4(), attach(), center(), Ci(), Co(), computeBoundingBox(), computeBoundingSphere() (+48 more)

### Community 63 - "Cover & Menu"
Cohesion: 0.12
Nodes (9): coverPositionable(), Fp3dQuickMenu, kelvinCss(), lightAbilities(), Fp3dRoomPanel, icon(), slatTilt(), stateText() (+1 more)

### Community 64 - "Draw & Edit"
Cohesion: 0.05
Nodes (55): ol(), _$AE(), Cb(), cl(), dc(), discardDraft(), dl(), draw() (+47 more)

### Community 65 - "Area & Floor Mgmt"
Cohesion: 0.07
Nodes (3): FreeWall, furnitureSize(), HassFloor

### Community 66 - "Session & Prefs"
Cohesion: 0.08
Nodes (9): pref(), Session, startTimeTravel(), Playback, statRows(), Range, Speed, setZone() (+1 more)

### Community 67 - "Card Config"
Cohesion: 0.10
Nodes (19): CARD_CONTROLS, CARD_OWN, CardConfig, CardControl, cardTemplate(), ClockPos, editWorking(), effectiveConfig() (+11 more)

### Community 68 - "Style & Theme"
Cohesion: 0.06
Nodes (52): cp(), dn(), effectiveStyle(), effectiveTheme(), fl(), fr(), handleSentence(), Hs() (+44 more)

### Community 69 - "Attributes"
Cohesion: 0.05
Nodes (51): getInterpolatedAttribute(), ap(), applyConfig(), armClean(), armIdle(), C(), connectedCallback(), createRenderRoot() (+43 more)

### Community 70 - "Params"
Cohesion: 0.07
Nodes (51): ad(), Be(), cd(), cm(), dm(), dt(), es(), _$Eu() (+43 more)

### Community 71 - "Pack Images"
Cohesion: 0.05
Nodes (36): args, candidates, outAt, root, server, sources, TYPES, puppeteer-core@^25.12.0 (+28 more)

### Community 72 - "Time Bar"
Cohesion: 0.10
Nodes (6): Fp3dTimeBar, icon(), CATEGORY, Cluster, clusterEvents(), zoneOption()

### Community 73 - "Furniture"
Cohesion: 0.06
Nodes (23): attic(), blur(), cellar(), clickEl(), edEl(), floorOf(), glidePane(), ground() (+15 more)

### Community 74 - "Device Powers"
Cohesion: 0.06
Nodes (45): sp(), xb(), ao(), cardsOn(), ci(), Cn(), devicePowers(), di() (+37 more)

### Community 75 - "Groups"
Cohesion: 0.07
Nodes (45): aa(), applySwipe(), bi(), bn(), Bo(), Bt(), bu(), cg() (+37 more)

### Community 76 - "Construct"
Cohesion: 0.07
Nodes (45): an(), apply(), Cn(), constructor(), ct(), derive(), edge(), ensureLoaded() (+37 more)

### Community 77 - "Pack Validation"
Cohesion: 0.06
Nodes (22): canonical(), PackError, _unknown_value(), validate_payload(), verify_pack(), _key(), _sign(), test_a_module_pack_needs_no_furniture_and_its_code_is_served_apart() (+14 more)

### Community 78 - "Dormers"
Cohesion: 0.06
Nodes (29): blur(), dragCorner(), edEl(), GAR, GARAGE, h, HOUSE, HWR (+21 more)

### Community 79 - "Roof Covers"
Cohesion: 0.08
Nodes (40): LocalCover, Q, flatFace(), roofFaces(), roofFootprint(), roofWindowRoom(), roofWindowsOver(), windowCorners() (+32 more)

### Community 80 - "Cover"
Cohesion: 0.09
Nodes (30): COVER_RUN_MS, coverPosition(), powerPoints(), sampled(), HOLD_MS, lastFinite(), quantise(), quantStep() (+22 more)

### Community 81 - "Lights & Lamps"
Cohesion: 0.07
Nodes (43): af(), Ag(), ceilingAt(), conditioned(), Ec(), setScreen(), hc(), id() (+35 more)

### Community 83 - "Furniture & Rooms"
Cohesion: 0.10
Nodes (8): patchItem(), isPlaceable(), otherAreaEntities(), WallSource, iconPath(), bounds(), isLamp(), Room

### Community 84 - "Licensing"
Cohesion: 0.10
Nodes (29): ms_np_all_offers(), ms_np_bind_instance(), ms_np_coupon_for_order(), ms_np_coupon_html(), ms_np_ensure_coupon(), ms_np_ensure_license(), ms_np_find_license(), ms_np_guest_orders() (+21 more)

### Community 85 - "Furniture Drag"
Cohesion: 0.08
Nodes (42): aa(), activeFloors(), BE(), dragFurniture(), dropFurniture(), elsewhere(), floorPoint(), furnitureAt() (+34 more)

### Community 86 - "Shaders"
Cohesion: 0.06
Nodes (38): _allocateTargets(), _applyGGXFilter(), _applyPMREM(), B0(), b2(), _blur(), _blurPass(), Br() (+30 more)

### Community 87 - "Dashboard"
Cohesion: 0.08
Nodes (26): BAD, BASE, camNow(), ease(), inCard(), KIND, KUECHE, live() (+18 more)

### Community 88 - "Locate"
Cohesion: 0.07
Nodes (19): addInitializer(), _$AE(), _$AK(), attributeChangedCallback(), constructor(), createProperty(), disconnectedCallback(), _$E_() (+11 more)

### Community 89 - "Away & Motion"
Cohesion: 0.10
Nodes (29): changes(), findEvents(), IMPORTANT, machineDone(), spans(), areaOf(), domainOf(), lampSwitches() (+21 more)

### Community 90 - "Review & Support"
Cohesion: 0.08
Nodes (38): approveReview(), bd(), bu(), Cd(), checkSupporter(), deletePack(), di(), dn() (+30 more)

### Community 91 - "Card Views"
Cohesion: 0.09
Nodes (6): cardStartView(), screenUpright(), Floorplan3dCard, inSectionsGrid(), savedWalls(), haNavigate()

### Community 92 - "Lighting"
Cohesion: 0.10
Nodes (29): Blocker, boxOf(), buildLightSurface(), cacheOf(), caches, centroid(), characteristic(), contribution() (+21 more)

### Community 93 - "Commands"
Cohesion: 0.12
Nodes (29): FILLER, findPlace(), hasWord(), HERE, langOf(), normalize(), Place, RoomAlias (+21 more)

### Community 94 - "Geometry & Groups"
Cohesion: 0.08
Nodes (37): addGroup(), ch(), clampPoint(), computeTangents(), A(), computeVertexNormals(), copy(), distanceSqToPoint() (+29 more)

### Community 95 - "Floors & Stairs"
Cohesion: 0.09
Nodes (21): attic(), cellar(), dialogOk(), editorOpen(), fakeDialog(), fill(), finalFloors(), floorOf() (+13 more)

### Community 96 - "Settings"
Cohesion: 0.07
Nodes (20): camFull(), camOf(), dialogOk(), DL, ease(), fakeDialog(), flyTo(), glide() (+12 more)

### Community 97 - "Openings"
Cohesion: 0.11
Nodes (31): blindInside(), boardsOf(), box(), buildOpeningParts(), CLOSED, flatPanel(), lightCover(), OP (+23 more)

### Community 98 - "CI"
Cohesion: 0.07
Nodes (35): run, defaults, runs-on, steps, if, runs-on, steps, runs-on (+27 more)

### Community 99 - "Device Management"
Cohesion: 0.09
Nodes (35): B(), back(), deleteDevice(), deleteFurniture(), ea(), editDevice(), editFurniture(), followLink() (+27 more)

### Community 100 - "Plan Card Rendering"
Cohesion: 0.14
Nodes (5): Floorplan3dCardEditor, labOn(), languageCode(), languageReady(), loadLanguage()

### Community 102 - "Card Editor"
Cohesion: 0.07
Nodes (11): _$AE(), _$AK(), attributeChangedCallback(), constructor(), disconnectedCallback(), _$E_(), _$Ev(), firstUpdated() (+3 more)

### Community 103 - "Event Timeline"
Cohesion: 0.11
Nodes (25): Role, MAX_BYTES, SessionState, EventInput, MINOR, RANK, timeline(), TTEvent (+17 more)

### Community 104 - "Device Lamp Control"
Cohesion: 0.07
Nodes (15): cam(), clickFakeOk(), ease(), editorOpen(), glide(), h, moveToText(), N (+7 more)

### Community 105 - "Room Locating Bluetooth"
Cohesion: 0.09
Nodes (7): distance(), Estimate, evidence(), Fingerprints, nearest_scores(), RoomTracker, quality()

### Community 106 - "Template Editing"
Cohesion: 0.09
Nodes (33): Zu(), aa(), add(), Bn(), Bs(), changed(), deleteTemplate(), du() (+25 more)

### Community 107 - "Alert System"
Cohesion: 0.11
Nodes (23): Alert, alertEntities(), AlertKind, AlertSources, CLASS_KIND, findAlerts(), RAIN_STATES, UNAVAILABLE_AFTER (+15 more)

### Community 108 - "Plan Site Editor"
Cohesion: 0.12
Nodes (13): PlanEntry, PlanSite, Fp3dPlanPicker, Fp3dSiteEditor, roofSectionsFromRooms(), composeSite(), placeFloor(), placePoint() (+5 more)

### Community 109 - "Director Management"
Cohesion: 0.09
Nodes (22): ACTIVE, COOLDOWN, DEAD, Director, directorAny(), DirectorSettings, doorbellCamera(), doorbellEntities() (+14 more)

### Community 110 - "Control Events"
Cohesion: 0.14
Nodes (5): clamp(), ControlEvents, ease(), OrbitControls, stale()

### Community 111 - "Voice Module"
Cohesion: 0.08
Nodes (13): _$AK(), attributeChangedCallback(), bt(), disconnectedCallback(), getUpdateComplete(), He(), it(), le() (+5 more)

### Community 112 - "Building Controller"
Cohesion: 0.12
Nodes (14): isStalePlan(), listPacks(), listPlans(), subscribePlans(), BuildingController, choosePlan(), compareVersions(), Draft (+6 more)

### Community 113 - "Ask Broker"
Cohesion: 0.09
Nodes (7): AskBroker, AskIntentHandler, async_converse_here(), async_remove_sentences(), async_setup_voice(), located_names(), VoiceSettings

### Community 114 - "Geometry Intersection"
Cohesion: 0.09
Nodes (30): intersectSphere(), recast(), closeModulePopup(), Cs(), Cu(), De(), Ds(), du() (+22 more)

### Community 115 - "Sun Effects"
Cohesion: 0.12
Nodes (16): ArcInput, canvas(), dayColor(), geometry(), glowTexture(), letterTexture(), SunFx, sunTexture() (+8 more)

### Community 116 - "Plan Builder"
Cohesion: 0.18
Nodes (24): suggestedThickness(), buildPlan(), centroidOf(), clamp(), KNOWN, median(), r3(), RawRoom (+16 more)

### Community 117 - "Math Buffer"
Cohesion: 0.12
Nodes (27): $a(), c_(), conjugate(), e_(), n(), en(), f_(), fromBufferAttribute() (+19 more)

### Community 118 - "Recorder Locate"
Cohesion: 0.16
Nodes (4): get_recorder(), _irk_ciphers(), LocateRecorder, ws_locate_rec()

### Community 119 - "ESP32 Key"
Cohesion: 0.07
Nodes (27): api, file, ref, url, captive_portal, esp32, board, framework (+19 more)

### Community 120 - "ESP32C3 Key"
Cohesion: 0.07
Nodes (27): api, file, ref, url, captive_portal, esp32, board, framework (+19 more)

### Community 121 - "ESP32S3 Key"
Cohesion: 0.07
Nodes (27): api, file, ref, url, captive_portal, esp32, board, framework (+19 more)

### Community 122 - "Time Bar Energy"
Cohesion: 0.15
Nodes (22): AWAY_COLOR, COLOR, ICONS, Sheet, energyEvents(), EnergyInput, EventKind, groupByHour() (+14 more)

### Community 123 - "Audio Listening"
Cohesion: 0.13
Nodes (15): audioContext(), Conversed, findPipeline(), findSpeaking(), listenOnce(), listPipelines(), openMicrophone(), Pipeline (+7 more)

### Community 124 - "Demo Data"
Cohesion: 0.08
Nodes (19): at(), CAMERA_STILL, COVER, DEMO_AREAS, DEMO_BUILDING, DEMO_ENTITIES, DEMO_FLOORS, DEMO_PACK (+11 more)

### Community 125 - "Project Setup"
Cohesion: 0.09
Nodes (26): dependencies, lit@^3.3.3, three@^0.186.1, devDependencies, esbuild@^0.28.2, @fontsource-variable/bricolage-grotesque@^5.3.0, @fontsource-variable/figtree@^5.3.0, @types/node@^26.6.3 (+18 more)

### Community 126 - "HTTP Server"
Cohesion: 0.16
Nodes (13): access_token(), apply(), blocks(), call(), client(), ensure_playlist(), list_videos(), login() (+5 more)

### Community 127 - "Media Processing"
Cohesion: 0.21
Nodes (17): api_key(), cmd_lines(), cmd_mux(), cmd_quota(), cmd_samples(), cmd_track(), cmd_voices(), line_file() (+9 more)

### Community 128 - "Build Render"
Cohesion: 0.10
Nodes (26): Bb(), blocked(), buildRing(), clear(), clearArc(), dispose(), disposeRetired(), drop() (+18 more)

### Community 129 - "OSM Module"
Cohesion: 0.16
Nodes (24): A(), an(), B(), constructor(), D(), dn(), fn(), G() (+16 more)

### Community 130 - "CI/CD Pipeline"
Cohesion: 0.08
Nodes (25): concurrency, cancel-in-progress, group, environment, runs-on, steps, name, url (+17 more)

### Community 131 - "Opening Detection"
Cohesion: 0.11
Nodes (25): Ct(), fm(), hm(), j(), ji(), Ka(), Ki(), Kl() (+17 more)

### Community 132 - "Text Rendering"
Cohesion: 0.16
Nodes (25): awayText(), clockText(), eventText(), Jt(), k(), le(), markClick(), markDown() (+17 more)

### Community 133 - "Diagnostics System"
Cohesion: 0.15
Nodes (23): browserOf(), clientAggregate(), DIAGNOSTICS_EVENT, diagnosticsActive(), ErrorEntry, errors, gpuTier(), initDiagnostics() (+15 more)

### Community 134 - "Person Presence"
Cohesion: 0.15
Nodes (23): edgeDistance(), innerPoint(), initials(), isAway(), locatedPersons(), norm(), OUTSIDE, PERSON_COLORS (+15 more)

### Community 135 - "Time Travel"
Cohesion: 0.14
Nodes (6): car_trackers(), collect(), private_entities(), private_trackers(), _states(), ws_timetravel_history()

### Community 136 - "Style Management"
Cohesion: 0.16
Nodes (18): allStyles(), BY_ID, clockMinutes(), custom, NATURAL, newStyleId(), norm(), Phase (+10 more)

### Community 137 - "Device Classification"
Cohesion: 0.15
Nodes (18): deviceAreaId(), applianceOf(), appliancePower(), AREA_DOMAINS, domainOf(), eventRoles(), EXCLUDED, exteriorDoor() (+10 more)

### Community 138 - "Sky Rendering"
Cohesion: 0.18
Nodes (14): clamp01(), cloudBanks(), CLOUDS, css(), dayLight(), mixC(), moonPhase(), RGB (+6 more)

### Community 139 - "Instance Tracking"
Cohesion: 0.14
Nodes (11): _Instance, _msg(), _setup(), test_history_answer(), fake_states(), fake_stats(), test_history_car_trackers(), test_history_checks_the_window_and_the_recorder() (+3 more)

### Community 140 - "Energy Recording"
Cohesion: 0.10
Nodes (19): A, B, C, caption(), captions, D, E, executablePath (+11 more)

### Community 141 - "3D View"
Cohesion: 0.11
Nodes (10): cam(), camNow(), clickLive(), ease(), glide(), live(), moveToText(), N (+2 more)

### Community 142 - "XR Reorder"
Cohesion: 0.12
Nodes (22): reorder(), setFromXRController(), detectionPins(), direct(), directorDue(), directorSettings(), directorShow(), ga() (+14 more)

### Community 143 - "Voice Rendering"
Cohesion: 0.14
Nodes (15): roomPanelEntities(), micProbeDone(), setScreenName(), setVoiceArea(), setVoiceHere(), setVoicePipeline(), voiceArea(), moduleHelp() (+7 more)

### Community 144 - "Plan Making"
Cohesion: 0.19
Nodes (16): dim_h(), dim_v(), door(), F(), frac(), gap(), gap_h(), gap_v() (+8 more)

### Community 145 - "WebSocket Locating"
Cohesion: 0.30
Nodes (10): _service(), ws_locate_ask(), ws_locate_calibrate(), ws_locate_config(), ws_locate_configure(), ws_locate_nearby(), ws_locate_quality(), ws_locate_subscribe() (+2 more)

### Community 146 - "Time Travel Rows"
Cohesion: 0.16
Nodes (12): bucket(), car_refs(), domain_of(), _number(), oldest_data(), quantise(), read_row(), _ref() (+4 more)

### Community 147 - "App Render"
Cohesion: 0.22
Nodes (20): count(), DE, download(), EN, esc(), fill(), load(), optionsHtml() (+12 more)

### Community 148 - "Wall Parsing"
Cohesion: 0.18
Nodes (17): RawWall, cm(), num(), openingKind(), readSh3d(), wallPieces(), decode(), ENTITIES (+9 more)

### Community 149 - "Pool Card Management"
Cohesion: 0.17
Nodes (20): cardDisconnect(), deletePoolDevice(), deletePoolPort(), jointLabel(), openCard(), partPorts(), partStatus(), poolEnds() (+12 more)

### Community 150 - "Build Config"
Cohesion: 0.10
Nodes (14): BUDGET, cardEditorConfig, common, FONTS, funConfig, importConfig, langHash, LANGS (+6 more)

### Community 151 - "Mesh Processing"
Cohesion: 0.17
Nodes (18): dropSmallParts(), findLevels(), Gltf, ident(), linesNear(), M4, mergeCollinear(), mul() (+10 more)

### Community 152 - "Entity Management"
Cohesion: 0.13
Nodes (3): async_setup_entry(), sync(), LocateSensor

### Community 153 - "Media Processing"
Cohesion: 0.14
Nodes (5): draw(), flask_icon(), font(), main(), rewind_icon()

### Community 154 - "Room Planning"
Cohesion: 0.13
Nodes (16): RawFloor, RawFurniture, ROOMPLAN_TYPES, RULES, isRoomPlan(), LABELS, matrix(), readRoomPlan() (+8 more)

### Community 155 - "Shop Extensions"
Cohesion: 0.13
Nodes (8): cam(), ease(), live(), mix(), N, pointAt(), SAMPLER, textAt()

### Community 156 - "Discord Release"
Cohesion: 0.11
Nodes (18): BODY, NAME, TAG, URL, WEBHOOK, jobs, post, name (+10 more)

### Community 157 - "Sheet Rendering"
Cohesion: 0.14
Nodes (18): _$AI(), _$AR(), currentSheet(), j(), k(), O(), qs(), renderCentral() (+10 more)

### Community 158 - "Component Variables"
Cohesion: 0.21
Nodes (18): _$AI(), _$AR(), Bt(), _$ET(), F(), Ht(), it(), j() (+10 more)

### Community 159 - "Bluetooth Scanners"
Cohesion: 0.18
Nodes (7): _device_area(), device_area_id(), _lower(), _neighbour_macs(), _scanner_device(), scanner_list(), _stamps()

### Community 160 - "Plan Detection"
Cohesion: 0.20
Nodes (16): RawPlan, Warning, Kind, ReadOptions, ReadResult, DxfLayer, DxfRead, entities() (+8 more)

### Community 161 - "TypeScript Config"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+9 more)

### Community 162 - "Teaser Module"
Cohesion: 0.14
Nodes (11): cam(), clean(), ease(), live(), mix(), N, nthBox(), PLAN (+3 more)

### Community 163 - "First Floorplan"
Cohesion: 0.13
Nodes (11): A, B, back(), C, D, E, link(), N (+3 more)

### Community 164 - "Bug Report"
Cohesion: 0.11
Nodes (17): description, label, multiple, options, placeholder, value, body, attributes (+9 more)

### Community 165 - "Fun Module"
Cohesion: 0.23
Nodes (16): be(), ce(), de(), ee(), fe(), ge(), he(), ie() (+8 more)

### Community 166 - "Render Callbacks"
Cohesion: 0.17
Nodes (17): call(), connectedCallback(), createRenderRoot(), enableUpdating(), guessRoom(), Je(), load(), render() (+9 more)

### Community 167 - "Car State"
Cohesion: 0.17
Nodes (10): car_state(), has_feature(), has_time_travel(), location_like(), reduce_attributes(), test_a_car_tracker_says_home_or_away_only(), test_attributes_are_kept_from_the_list_and_rounded(), test_car_trackers_come_from_the_parking_spots() (+2 more)

### Community 168 - "Component Callbacks"
Cohesion: 0.14
Nodes (16): _$AE(), C(), connectedCallback(), createRenderRoot(), _$EM(), enableUpdating(), _$EP(), _$ET() (+8 more)

### Community 169 - "Row Management"
Cohesion: 0.20
Nodes (10): cap_rows(), columnar(), dedupe(), entity_rows(), _key(), row_value(), _state(), test_entity_rows_start_at_the_window() (+2 more)

### Community 170 - "Release Process"
Cohesion: 0.12
Nodes (15): GH_TOKEN, jobs, zip, name, permissions, contents, types, env (+7 more)

### Community 171 - "Test Suite"
Cohesion: 0.12
Nodes (4): test_ceiling_fan_keeps_its_fan(), test_live_director_triggers_and_live_picture(), test_plant_cards_in_floor_views_are_off_by_default(), test_pool_depth_rim_and_port_depth()

### Community 172 - "Key Generation"
Cohesion: 0.27
Nodes (7): canonical(), keygen(), main(), _raw_public(), seed(), sign(), verify()

### Community 173 - "Away States"
Cohesion: 0.14
Nodes (15): ao(), away(), awayOffer(), be(), F(), In(), ir(), motion() (+7 more)

### Community 174 - "Param States"
Cohesion: 0.13
Nodes (15): Br(), $e(), lt(), Mr(), nr(), on(), P(), $r() (+7 more)

### Community 175 - "Simple Floor"
Cohesion: 0.25
Nodes (13): ext(), readFile(), furnitureType(), isSimple(), KNOWN, n(), pt(), readSimple() (+5 more)

### Community 176 - "HACS Check"
Cohesion: 0.13
Nodes (14): jobs, probe, name, runs-on, steps, timeout-minutes, cron, run (+6 more)

### Community 177 - "Locating Engine"
Cohesion: 0.29
Nodes (9): calibrated(), reading(), test_a_quiet_device_keeps_its_last_room(), test_a_room_not_learned_yet_comes_from_its_scanner(), test_finds_the_hall_without_a_scanner_of_its_own(), test_presence_sensor_moves_to_a_plausible_room_at_once(), test_room_changes_arrive_within_seconds_and_do_not_flicker(), test_unheard_device_is_away() (+1 more)

### Community 178 - "Render Pipeline"
Cohesion: 0.18
Nodes (14): p(), render(), renderControls(), renderFeatures(), renderKiosk(), renderPlace(), renderPlan(), renderPurpose() (+6 more)

### Community 179 - "User Interaction"
Cohesion: 0.18
Nodes (14): agoText(), duration(), onDown(), onMove(), onTick(), onUp(), placeHead(), render() (+6 more)

### Community 180 - "Term Abbreviations"
Cohesion: 0.19
Nodes (14): bn(), ce(), daySummary(), de(), Fr(), Gn(), kn(), oo() (+6 more)

### Community 181 - "Component Initialization"
Cohesion: 0.20
Nodes (14): addInitializer(), _$AI(), _$AR(), createProperty(), _$Ei(), _$Eu(), finalize(), finalizeStyles() (+6 more)

### Community 182 - "Integration Manifest"
Cohesion: 0.14
Nodes (13): after_dependencies, codeowners, config_flow, dependencies, documentation, domain, integration_type, iot_class (+5 more)

### Community 183 - "Config Settings"
Cohesion: 0.14
Nodes (14): minutes, screens, example, required, selector, max, min, unit_of_measurement (+6 more)

### Community 184 - "Attic Roof"
Cohesion: 0.23
Nodes (9): building, section, activeSections(), dormerRise(), headroomLines(), ROOF_THICK, roofUnderAt(), sectionAbove() (+1 more)

### Community 185 - "Robot Model"
Cohesion: 0.22
Nodes (9): circlePath(), crossesOutline(), ROBOT_SPEED, ROBOT_TURN, RobotInfo, RobotMode, RobotMotion, stepRobot() (+1 more)

### Community 186 - "Issue Labels"
Cohesion: 0.14
Nodes (13): types, jobs, label, runs-on, steps, name, permissions, issues (+5 more)

### Community 187 - "Version Updates"
Cohesion: 0.19
Nodes (13): C(), _$EM(), _$EP(), _$ET(), Fe(), performUpdate(), requestUpdate(), scheduleUpdate() (+5 more)

### Community 188 - "App Settings"
Cohesion: 0.15
Nodes (13): ignore_quiet, on_screens, speak, default, required, selector, default, required (+5 more)

### Community 189 - "Flyin Animation"
Cohesion: 0.23
Nodes (4): ease(), FLYIN, Fp3dFlyin, globePoint()

### Community 190 - "Shop Check"
Cohesion: 0.15
Nodes (12): jobs, probe, name, runs-on, steps, timeout-minutes, cron, name (+4 more)

### Community 191 - "Ask Fields"
Cohesion: 0.18
Nodes (12): ask, fields, screen, text, example, required, selector, text (+4 more)

### Community 192 - "Architectural Openings"
Cohesion: 0.35
Nodes (3): Opening, OpeningPreset, OpeningInfo

### Community 193 - "2D Furniture"
Cohesion: 0.42
Nodes (11): circle(), cornerSeating(), ellipse(), fronts(), furnitureSymbol(), line(), packSymbol(), Part (+3 more)

### Community 194 - "Room Navigation"
Cohesion: 0.27
Nodes (11): bind(), getValue(), _getValue_unbound(), goTo(), goToRoom(), kick(), move(), reportRoom() (+3 more)

### Community 195 - "Services Configuration"
Cohesion: 0.18
Nodes (10): plan, templates, example, required, selector, reload_screens, fields, example (+2 more)

### Community 196 - "Print Management"
Cohesion: 0.29
Nodes (6): unseenOffers(), markPrintSeen(), openPrint(), PRINT_URL, printDot(), printSeen()

### Community 198 - "Floorplan Design"
Cohesion: 0.18
Nodes (10): RawOpening, FArea, FDesign, FFloor, FItem, FWall, isFloorplanner(), P (+2 more)

### Community 199 - "Architectural Testing"
Cohesion: 0.18
Nodes (6): test_card_templates_keep_the_card_options(), test_free_wall_keeps_its_colour(), test_inverted_contact_and_plant_card_offsets(), test_roof_section_keeps_its_overhang_per_side(), test_roof_section_keeps_its_turn(), test_surroundings_from_the_map_are_kept_and_checked()

### Community 201 - "Config Schema"
Cohesion: 0.20
Nodes (10): announce, fields, floor, message, example, required, selector, example (+2 more)

### Community 203 - "Release Downloader"
Cohesion: 0.33
Nodes (3): fetch(), latest_tag(), main()

### Community 204 - "Device Management"
Cohesion: 0.31
Nodes (9): addDevice(), keyHelpers(), manualLink(), notifySelect(), personSelect(), Qt(), renderDevices(), renderKeyHelper() (+1 more)

### Community 205 - "Update Lifecycle"
Cohesion: 0.28
Nodes (9): C(), _$EM(), _$EP(), performUpdate(), requestUpdate(), scheduleUpdate(), shouldUpdate(), update() (+1 more)

### Community 206 - "State Variables"
Cohesion: 0.25
Nodes (9): _$AI(), _$AR(), At(), he(), j(), O(), T(), Xn() (+1 more)

### Community 207 - "Component Connection"
Cohesion: 0.25
Nodes (9): connectedCallback(), createRenderRoot(), _$EM(), enableUpdating(), _$ET(), performUpdate(), shouldUpdate(), update() (+1 more)

### Community 209 - "Tutorial Processing"
Cohesion: 0.31
Nodes (4): main(), report(), clock(), subtitles()

### Community 211 - "Property Initialization"
Cohesion: 0.29
Nodes (8): addInitializer(), createProperty(), _$Ei(), _$Eu(), finalize(), finalizeStyles(), getPropertyDescriptor(), observedAttributes()

### Community 212 - "Property Initialization"
Cohesion: 0.29
Nodes (8): addInitializer(), createProperty(), _$Ei(), _$Eu(), finalize(), finalizeStyles(), getPropertyDescriptor(), observedAttributes()

### Community 213 - "Pipeline Management"
Cohesion: 0.25
Nodes (8): add(), _$AE(), allow(), De(), findPipeline(), firstUpdated(), me(), updated()

### Community 214 - "Flag Variables"
Cohesion: 0.32
Nodes (8): b(), gt(), ht(), Ie(), Mt(), pe(), pt(), z()

### Community 217 - "Location Loading"
Cohesion: 0.39
Nodes (6): loadLocate(), clock(), esc(), mountLocateLab(), RecStatus, Source

### Community 218 - "Firework Effects"
Cohesion: 0.32
Nodes (3): COLOURS, Firework, dotTexture()

### Community 219 - "Demo History"
Cohesion: 0.46
Nodes (7): at(), buildEvents(), demoHistory(), hourOf(), midnight(), numeric(), rng()

### Community 220 - "AI States"
Cohesion: 0.43
Nodes (7): A(), _$AI(), _$AR(), j(), k(), O(), T()

### Community 221 - "Component Updates"
Cohesion: 0.29
Nodes (7): C(), constructor(), _$E_(), _$EP(), _$Ev(), requestUpdate(), scheduleUpdate()

### Community 222 - "Style Configuration"
Cohesion: 0.29
Nodes (7): style, custom_value, options, select, example, required, selector

### Community 223 - "Font Registration"
Cohesion: 0.38
Nodes (4): base, font(), registerFonts(), version

### Community 224 - "Integration Manifest"
Cohesion: 0.29
Nodes (6): builds, home_assistant_domain, name, new_install_improv_wait_time, new_install_prompt_erase, version

### Community 226 - "Component Selectors"
Cohesion: 0.33
Nodes (6): ce(), De(), He(), Le(), Re(), styleSelect()

### Community 227 - "Template Rendering"
Cohesion: 0.40
Nodes (6): emit(), ownOptions(), pickTemplate(), renderTemplate(), se(), templateOptions()

### Community 228 - "Room Tags"
Cohesion: 0.33
Nodes (6): le(), ot(), rooms(), Ye(), ze(), zt()

### Community 229 - "Render Actions"
Cohesion: 0.33
Nodes (6): close(), ft(), ge(), p(), render(), talk()

### Community 230 - "Repo Configuration"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 232 - "Room Selection"
Cohesion: 0.50
Nodes (4): rooms, example, required, selector

### Community 233 - "Component Connection"
Cohesion: 0.67
Nodes (3): connectedCallback(), createRenderRoot(), enableUpdating()

## Knowledge Gaps
- **32 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Fp3dEditor` connect `Floorplan Editor` to `Floorplan Viewer`, `3D View UI`, `Backdrop & Drag`, `Voice Rendering`, `Building Cards`, `Ghost Entities`, `Pool Management`, `Room Planning`, `License Management`, `Path & Pipes`, `Volume & Previews`, `Add Fields`, `Roof Sections`, `Editor Modes`, `Furniture Library`, `Surroundings`, `API & Diagnostics`, `Solar Fields`, `Furniture Types`, `Device Options`, `Architectural Openings`, `Area & Floor Mgmt`, `Field Rendering`, `Add Devices`, `Furniture & Rooms`, `Roof Rendering`, `Plan Card Rendering`, `Alert System`, `Plan Site Editor`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Should `3D Graphics Core` be split into smaller, more focused modules?**
  _Cohesion score 0.007009776793949456 - nodes in this community are weakly interconnected._
- **Why does `Building` connect `Building Cards` to `Floorplan Viewer`, `3D View UI`, `Backdrop & Drag`, `Person Presence`, `Camera Wall & Lines`, `Device Classification`, `Ground & Sun`, `Devices & Entities`, `Voice Rendering`, `Floorplan Editor`, `Now List`, `App Render`, `Polygon Operations`, `Ghost Entities`, `Pool Management`, `Testing & Utils`, `License Management`, `Plan Detection`, `Path & Pipes`, `Appliances`, `Volume & Previews`, `Add Fields`, `Roof Sections`, `Editor Modes`, `Simple Floor`, `Surroundings`, `API & Diagnostics`, `Energy & Graph`, `Solar Fields`, `Attic Roof`, `Room Location`, `Furniture Types`, `Device Options`, `Cover & Menu`, `Area & Floor Mgmt`, `Card Config`, `3D Fun Packs`, `Roof Covers`, `Add Devices`, `Location Loading`, `Away & Motion`, `Card Views`, `Commands`, `Plan Card Rendering`, `Building Module Host`, `Alert System`, `Plan Site Editor`, `Building Controller`, `Sun Effects`, `Plan Builder`, `Audio Listening`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Should `Floorplan Viewer` be split into smaller, more focused modules?**
  _Cohesion score 0.026405890905679845 - nodes in this community are weakly interconnected._
- **Why does `FloorplanViewer` connect `Floorplan Viewer` to `3D View UI`, `Volume & Previews`, `Camera Wall & Lines`, `Sky Rendering`, `Ground & Sun`, `Control Events`, `Roof Covers`, `Building Cards`, `Surroundings`, `Sun Effects`, `Hole Management`, `Robot Model`, `Firework Effects`, `Lighting`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Should `Editor Module` be split into smaller, more focused modules?**
  _Cohesion score 0.01688187470109995 - nodes in this community are weakly interconnected._
- **Should `3D View UI` be split into smaller, more focused modules?**
  _Cohesion score 0.031044776119402984 - nodes in this community are weakly interconnected._