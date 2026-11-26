# Home Assistant Device Registry — Forensic Hardware vs Virtual Classification

**Authority:** Home Assistant System Forensics Auditor
**Live Instance Target:** `http://192.168.100.92:8123` (Version: 2026.8.3)
**Total Device Registry Records:** 80

---

## 1. Executive Device Classification Summary

| Canonical Device Classification | Verified Count | Percentage | Definition & Scope |
|---|:---:|:---:|---|
| **`PHYSICAL_HARDWARE`** | **20** | 25.0% | Real physical electronic devices (phones, tablets, router, Bluetooth, Zigbee sensors/relays) |
| **`VIRTUAL_OR_SOFTWARE_DEVICE`** | **15** | 18.8% | Software containers, Supervisor add-ons, and local audio/voice pipelines |
| **`INTEGRATION_OR_SERVICE_REPRESENTATION`** | **45** | 56.2% | Core services, cloud APIs, HACS packages, and diagnostic shadow representations |
| **`UNKNOWN`** | **0** | 0.0% | Unidentified entries |
| **TOTAL RECORDS** | **80** | **100.0%** | Full exhaustive coverage of HA device registry |

> [!IMPORTANT]
> **Forensic Finding:** Of the 80 records in Home Assistant's device registry, exactly **20 represent physical hardware devices**. The remaining 60 records represent software add-ons (15), core/cloud service endpoints (13), HACS packages (20), and diagnostic shadow device entries (12) created by `zigbee_health`. Claiming 80 'physical devices' was an inaccurate conflation of device registry entries with physical hardware.

---

## 2. Physical Hardware Devices (20 Verified Items)

| # | Device Name | Manufacturer | Model | Subclassification | Area | Device ID |
|:---:|---|---|---|---|---|---|
| 1 | **hci0 (2C:CF:67:6A:3A:56)** | Raspberry Pi (Trading) Ltd | bcm43438-bt | Host Radio Controller | Unassigned | `b2501d69804b...` |
| 2 | **DIR-X3010Z** | Dlink | DIR-X3010 | Networking Appliance | Unassigned | `d7537e36ee0a...` |
| 3 | **SC500ZB-v4** | LoraTap | Smart curtain/shutter switch | Zigbee IoT Hardware | metarea | `8783fda9009e...` |
| 4 | **TS0203** | Tuya | Door/window sensor | Zigbee IoT Hardware | metarea | `3c6a72e6b41c...` |
| 5 | **SNZB-06P** | SONOFF | Zigbee occupancy sensor | Zigbee IoT Hardware | metarea | `abd163333b61...` |
| 6 | **23117RA68G** | Xiaomi | 23117RA68G | Mobile Client Hardware | Unassigned | `db19eb6f3e24...` |
| 7 | **dell mini tabelt 92** | rockchip | px30_evb | Mobile Client Hardware | Unassigned | `4a45912602f1...` |
| 8 | **PN16** | ZSVIOT | 16-way controller | Zigbee IoT Hardware | Unassigned | `0fe2d93bbc6c...` |
| 9 | **ir_blaster_met** | Moes | Universal smart IR remote control | Zigbee IoT Hardware | metarea | `1f0cc516f90c...` |
| 10 | **ir_blaster_fet** | Moes | Universal smart IR remote control | Zigbee IoT Hardware | Unassigned | `03eb707054a4...` |
| 11 | **ir_blaster_wrk** | Moes | Universal smart IR remote control | Zigbee IoT Hardware | Unassigned | `07cfdf3a43f4...` |
| 12 | **SM-S918U1** | samsung | SM-S918U1 | Mobile Client Hardware | Unassigned | `e20dd9867d9b...` |
| 13 | **Zm108m** | Moes | Smart curtain switch module | Zigbee IoT Hardware | Unassigned | `2628764f4f15...` |
| 14 | **WP101** | PRETECH | WP101 | Mobile Client Hardware | Unassigned | `af05b18af15d...` |
| 15 | **Samsung** | samsung | SM-X230 | Mobile Client Hardware | Unassigned | `cfb78ad9a9cf...` |
| 16 | **door_wrk** | Moes | Door/window alarm sensor | Zigbee IoT Hardware | Unassigned | `019386b186cb...` |
| 17 | **door_kit** | Moes | Door/window alarm sensor | Zigbee IoT Hardware | Unassigned | `7a23629f265b...` |
| 18 | **door_hal** | Moes | Door/window alarm sensor | Zigbee IoT Hardware | Unassigned | `15bd188d47de...` |
| 19 | **door_fet** | Moes | Door/window alarm sensor | Zigbee IoT Hardware | Unassigned | `078dc2616870...` |
| 20 | **itel A665L** | ITEL | itel A665L | Mobile Client Hardware | Unassigned | `ebd103a40e80...` |

---

## 3. Virtual & Software Devices (15 Verified Items)

| # | Device Name | Integration | Subclassification | Description / Function | Device ID |
|:---:|---|---|---|---|---|
| 1 | **Terminal & SSH** | `hassio` | Supervisor Add-on | Supervisor add-on or software service container running on host | `532c976f4958...` |
| 2 | **Mosquitto broker** | `hassio` | Supervisor Add-on | Supervisor add-on or software service container running on host | `acbb5a1936fe...` |
| 3 | **Zigbee2MQTT** | `hassio` | Supervisor Add-on | Supervisor add-on or software service container running on host | `d1942986d87b...` |
| 4 | **Samba share** | `hassio` | Supervisor Add-on | Supervisor add-on or software service container running on host | `fb19fc776973...` |
| 5 | **Tailscale** | `hassio` | Supervisor Add-on | Supervisor add-on or software service container running on host | `04d27c69021e...` |
| 6 | **openWakeWord** | `hassio` | Supervisor Add-on | Supervisor add-on or software service container running on host | `f7927a67750b...` |
| 7 | **Piper** | `hassio` | Supervisor Add-on | Supervisor add-on or software service container running on host | `6ad12444e134...` |
| 8 | **Whisper** | `hassio` | Supervisor Add-on | Supervisor add-on or software service container running on host | `e5736b49e8b5...` |
| 9 | **Assist Microphone** | `hassio` | Supervisor Add-on | Supervisor add-on or software service container running on host | `da13b1d89552...` |
| 10 | **Home Assistant Google Drive Backup** | `hassio` | Supervisor Add-on | Supervisor add-on or software service container running on host | `2479552cd49b...` |
| 11 | **Rhasspy Assistant** | `hassio` | Supervisor Add-on | Supervisor add-on or software service container running on host | `4d5284e44fe9...` |
| 12 | **Rhasspy Junior** | `hassio` | Supervisor Add-on | Supervisor add-on or software service container running on host | `0fbcbb9ca310...` |
| 13 | **Duck DNS** | `hassio` | Supervisor Add-on | Supervisor add-on or software service container running on host | `8eabf7102444...` |
| 14 | **assist microphone** | `wyoming` | Voice Satellite | Wyoming protocol software voice satellite endpoint | `2b66704d93d3...` |
| 15 | **Cloudflared** | `hassio` | Supervisor Add-on | Supervisor add-on or software service container running on host | `333790843fb0...` |

---

## 4. Integration & Service Representations (45 Verified Items)

| # | Device Name | Integration | Subclassification | Description / Function | Device ID |
|:---:|---|---|---|---|---|
| 1 | **Sun** | `sun` | System / Cloud Service | Home Assistant core or cloud service / API integration | `33c5579847bb...` |
| 2 | **Backup** | `backup` | System / Cloud Service | Home Assistant core or cloud service / API integration | `62072046d993...` |
| 3 | **Home Assistant Core** | `hassio` | Host OS / Core Container | Home Assistant operating environment or supervisor container representation | `7d752db53abb...` |
| 4 | **Home Assistant Supervisor** | `hassio` | Host OS / Core Container | Home Assistant operating environment or supervisor container representation | `69ee12325e82...` |
| 5 | **Home Assistant Host** | `hassio` | Host OS / Core Container | Home Assistant operating environment or supervisor container representation | `ce5d312dbb5d...` |
| 6 | **Home Assistant Operating System** | `hassio` | Host OS / Core Container | Home Assistant operating environment or supervisor container representation | `933a0cf2e037...` |
| 7 | **Google Translate en com** | `google_translate` | System / Cloud Service | Home Assistant core or cloud service / API integration | `997efd2d6a24...` |
| 8 | **HACS** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `cadc13f4961c...` |
| 9 | **Blueprint Studio** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `75d40e360caa...` |
| 10 | **UI Lovelace Minimalist** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `7dcfaf80b7a0...` |
| 11 | **Bubble Card** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `165e316afcc3...` |
| 12 | **Mushroom** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `5573a706cf15...` |
| 13 | **card-mod** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `ca56ab2bd8d8...` |
| 14 | **button-card** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `c17225e30638...` |
| 15 | **iOS Themes - Dark Mode and Light Mode** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `6a72baccab33...` |
| 16 | **Zigbee2MQTT Bridge** | `zigbee2mqtt` | Coordinator Software Daemon | Zigbee2MQTT bridge software daemon representation | `a9bffed0696c...` |
| 17 | **mini-graph-card** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `82062678e08d...` |
| 18 | **SmartIR** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `750ef99e66b8...` |
| 19 | **Kiosk Mode** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `f68ef5283c76...` |
| 20 | **Silent remotes card** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `ad49906e98b7...` |
| 21 | **Check Button Card** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `b2aa8badaba5...` |
| 22 | **Z2M IR Bridge** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `7d03a67e7a6a...` |
| 23 | **Zigbee Mesh Map Card** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `10fd3546c6bb...` |
| 24 | **Everyday** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `3d95a37ac29c...` |
| 25 | **Domolux** | `open_meteo` | System / Cloud Service | Home Assistant core or cloud service / API integration | `1952deeb6b22...` |
| 26 | **HA-MCP — Manage Home Assistant with AI** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `32f93cd36701...` |
| 27 | **HA-MCP Server** | `ha_mcp_tools` | System / Cloud Service | Home Assistant core or cloud service / API integration | `2982feeb2ef6...` |
| 28 | **Swipe Card** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `d884c541e6ff...` |
| 29 | **Swipe Card** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `7728079425e5...` |
| 30 | **NeonPlan 3D** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `526d591af56b...` |
| 31 | **Zigbee Health** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `10bd982aab66...` |
| 32 | **Zigbee Health (Zigbee2MQTT)** | `zigbee_health` | System / Cloud Service | Home Assistant core or cloud service / API integration | `9bd6157de9bc...` |
| 33 | **Unnamed Node** | `zigbee2mqtt` | Diagnostic Shadow Device | Shadow integration device representation created by zigbee_health diagnostic integration | `7073dd677b3a...` |
| 34 | **Unnamed Node** | `zigbee2mqtt` | Diagnostic Shadow Device | Shadow integration device representation created by zigbee_health diagnostic integration | `f628af68d3db...` |
| 35 | **Unnamed Node** | `zigbee2mqtt` | Diagnostic Shadow Device | Shadow integration device representation created by zigbee_health diagnostic integration | `15d6b19b99cb...` |
| 36 | **Unnamed Node** | `zigbee2mqtt` | Diagnostic Shadow Device | Shadow integration device representation created by zigbee_health diagnostic integration | `7b8917159613...` |
| 37 | **Unnamed Node** | `zigbee2mqtt` | Diagnostic Shadow Device | Shadow integration device representation created by zigbee_health diagnostic integration | `790074299173...` |
| 38 | **Unnamed Node** | `zigbee2mqtt` | Diagnostic Shadow Device | Shadow integration device representation created by zigbee_health diagnostic integration | `930a816220e5...` |
| 39 | **Unnamed Node** | `zigbee2mqtt` | Diagnostic Shadow Device | Shadow integration device representation created by zigbee_health diagnostic integration | `30c038ede5ed...` |
| 40 | **Unnamed Node** | `zigbee2mqtt` | Diagnostic Shadow Device | Shadow integration device representation created by zigbee_health diagnostic integration | `ae548f328869...` |
| 41 | **Unnamed Node** | `zigbee2mqtt` | Diagnostic Shadow Device | Shadow integration device representation created by zigbee_health diagnostic integration | `fef666d0724f...` |
| 42 | **Unnamed Node** | `zigbee2mqtt` | Diagnostic Shadow Device | Shadow integration device representation created by zigbee_health diagnostic integration | `8786438f2774...` |
| 43 | **Unnamed Node** | `zigbee2mqtt` | Diagnostic Shadow Device | Shadow integration device representation created by zigbee_health diagnostic integration | `5ed9ef90c5d1...` |
| 44 | **Unnamed Node** | `zigbee2mqtt` | Diagnostic Shadow Device | Shadow integration device representation created by zigbee_health diagnostic integration | `c3de5c4d62b2...` |
| 45 | **NeonPlan 3D** | `hacs` | HACS Package | HACS community integration, frontend card plugin, or theme repository representation | `c3ed892432a7...` |

