# Third-Party, Bundled Demo & Discrepancy Forensic Audit

**Authority:** Senior Software Forensics Engineer
**Target Environment:** NeonPlan 3D Ecosystem

---

## 1. Discovered Third-Party Assets

A thorough scan of all repository manifests, bundles, and source directories identified 5 distinct catalog items authored by publisher **Mastershort** (the original creator of NeonPlan 3D). These items are embedded as pre-packaged in-memory demo packs in `preview/demo-packs.js` for standalone web preview demonstrations:

| Asset ID | Display Name (EN) | Original (DE) | Collection | Format | Category | Status |
|---|---|---|---|---|---|:---:|
| `pack:mastershort.garden:tree_oak` | **Oak Tree** | *Eiche* | Mastershort Demo Bundle — mastershort.garden | `fp3dpack_bundled_demo` | Decorations and Lifestyle Objects | Installed but unregistered |
| `pack:mastershort.garden:tree_birch` | **Birch Tree** | *Birke* | Mastershort Demo Bundle — mastershort.garden | `fp3dpack_bundled_demo` | Decorations and Lifestyle Objects | Installed but unregistered |
| `pack:mastershort.garden:tree_fruit` | **Fruit Tree** | *Obstbaum* | Mastershort Demo Bundle — mastershort.garden | `fp3dpack_bundled_demo` | Decorations and Lifestyle Objects | Installed but unregistered |
| `pack:mastershort.garden:shrub` | **Garden Shrub** | *Strauch* | Mastershort Demo Bundle — mastershort.garden | `fp3dpack_bundled_demo` | Decorations and Lifestyle Objects | Installed but unregistered |
| `pack:mastershort.vehicles:van` | **Family Van** | *Familien-Van* | Mastershort Demo Bundle — mastershort.vehicles | `fp3dpack_bundled_demo` | Specialist and Other Assets | Installed but unregistered |

### Technical Details of Bundled Demo Assets

#### `pack:mastershort.garden:tree_oak` — Oak Tree
- **Asset ID:** `pack:mastershort.garden:tree_oak`
- **Display Name:** Oak Tree (*German:* Eiche)
- **Publisher:** Mastershort
- **Category / Subcategory:** Decorations and Lifestyle Objects / Trees & Botanical Landscaping
- **Dimensions:** 5.00 x 5.00 x 7.00 m
- **Source Location:** `preview/demo-packs.js`
- **Availability:** Available exclusively in browser preview demo mode; not registered in production Home Assistant storage.
- **Signature Status:** Unsigned (Bundled JSON demo objects)

#### `pack:mastershort.garden:tree_birch` — Birch Tree
- **Asset ID:** `pack:mastershort.garden:tree_birch`
- **Display Name:** Birch Tree (*German:* Birke)
- **Publisher:** Mastershort
- **Category / Subcategory:** Decorations and Lifestyle Objects / Trees & Botanical Landscaping
- **Dimensions:** 3.20 x 3.20 x 7.50 m
- **Source Location:** `preview/demo-packs.js`
- **Availability:** Available exclusively in browser preview demo mode; not registered in production Home Assistant storage.
- **Signature Status:** Unsigned (Bundled JSON demo objects)

#### `pack:mastershort.garden:tree_fruit` — Fruit Tree
- **Asset ID:** `pack:mastershort.garden:tree_fruit`
- **Display Name:** Fruit Tree (*German:* Obstbaum)
- **Publisher:** Mastershort
- **Category / Subcategory:** Decorations and Lifestyle Objects / Trees & Botanical Landscaping
- **Dimensions:** 3.20 x 3.20 x 3.60 m
- **Source Location:** `preview/demo-packs.js`
- **Availability:** Available exclusively in browser preview demo mode; not registered in production Home Assistant storage.
- **Signature Status:** Unsigned (Bundled JSON demo objects)

#### `pack:mastershort.garden:shrub` — Garden Shrub
- **Asset ID:** `pack:mastershort.garden:shrub`
- **Display Name:** Garden Shrub (*German:* Strauch)
- **Publisher:** Mastershort
- **Category / Subcategory:** Decorations and Lifestyle Objects / Shrubs & Garden Flora
- **Dimensions:** 1.30 x 1.30 x 1.20 m
- **Source Location:** `preview/demo-packs.js`
- **Availability:** Available exclusively in browser preview demo mode; not registered in production Home Assistant storage.
- **Signature Status:** Unsigned (Bundled JSON demo objects)

#### `pack:mastershort.vehicles:van` — Family Van
- **Asset ID:** `pack:mastershort.vehicles:van`
- **Display Name:** Family Van (*German:* Familien-Van)
- **Publisher:** Mastershort
- **Category / Subcategory:** Specialist and Other Assets / Passenger Vehicles
- **Dimensions:** 2.00 x 4.80 x 1.90 m
- **Source Location:** `preview/demo-packs.js`
- **Availability:** Available exclusively in browser preview demo mode; not registered in production Home Assistant storage.
- **Signature Status:** Unsigned (Bundled JSON demo objects)

---

## 2. Unclassified Assets & Provenance Resolution

**Zero unclassified assets exist in this installation.**

Through exhaustive AST parsing, cryptographic verification, and git history inspection, 100% of discovered assets have been conclusively classified into their respective provenance groups:
- **Native NeonPlan 3D Core:** 92 assets (81 furniture types + 11 opening presets) originating from the open-source NeonPlan 3D repository (`Mastershort/neonplan3d`).
- **Domolux Studio:** 232 assets (2 foundation + 30 Collection 30 + 200 Villa 200) all signed with public key `d08c59237e4f`.
- **Mastershort Demo Bundles:** 5 assets bundled in `preview/demo-packs.js`.

---

## 3. Discrepancy & Historical Count Reconciliation

### The '313 Assets' Historical Claim Explained

In earlier reports and tool descriptions (e.g. `tools/domolux_bridge/src/mcp-server.js` and `.claude/domolux_3d_autonomy/00_architecture_discovery.md`), the catalog was stated to contain **313 assets**.

Our forensic audit has uncovered the exact mathematical origin of this figure:

$$\text{Total Catalog Claim (313)} = \text{Native Core Components (81)} + \text{Earlier Domolux Dist Files (32)} + \text{Domolux Villa 200 (200)}$$

$$\mathbf{81 + 32 + 200 = 313}$$

The historical documentation inadvertently conflated the **81 native base components** with Domolux products, labeling the combined sum of 313 as 'Domolux luxury assets'.

The factual breakdown is:
- **Actual Domolux Studio Assets:** **232 unique products** (32 earlier + 200 Villa 200)
- **Actual Native Base Components:** **81 procedural furniture items** + **11 architectural openings** = **92 native items**
- **Actual Third-Party Demo Items:** **5 items**
- **Total Verified Unique Asset Definitions:** **329 assets**
