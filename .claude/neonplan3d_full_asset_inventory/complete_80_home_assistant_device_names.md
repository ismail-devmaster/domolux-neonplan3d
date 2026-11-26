# Home Assistant Complete Device Name Registry — Exhaustive Extraction

**Authority:** Senior Asset Librarian & Home Assistant System Forensics Auditor  
**Scope:** Literal extraction of all 80 registered devices from the live Home Assistant instance  
**Live Target Instance:** `http://192.168.100.92:8123` (Version: 2026.8.3)  
**Total Registered Devices:** 80  
**Source Files:** `home_assistant_device_classification.md`, `home_assistant_physical_devices.md`  

---

## 1. Physical Hardware Devices (`PHYSICAL_HARDWARE` — 20 Records)

Real physical electronic appliances, radios, sensors, switches, tablets, and smartphones connected via Bluetooth, Zigbee, Ethernet, Wi-Fi, or Mobile App.

| # | Exact Device Name | Manufacturer | Model | Integration | Assigned Area | Device Classification |
|:---:|---|---|---|---|---|:---:|
| 1 | **hci0 (2C:CF:67:6A:3A:56)** | ** Raspberry Pi (Trading) Ltd | bcm43438-bt | `** `unknown` | ** Unassigned | `PHYSICAL_HARDWARE` |
| 2 | **DIR-X3010Z** | ** Dlink | DIR-X3010 | `** `upnp_serial_number` | ** Unassigned | `PHYSICAL_HARDWARE` |
| 3 | **SC500ZB-v4** | ** LoraTap | Smart curtain/shutter switch | `** `zigbee2mqtt` | ** metarea | `PHYSICAL_HARDWARE` |
| 4 | **TS0203** | ** Tuya | Door/window sensor | `** `zigbee2mqtt` | ** metarea | `PHYSICAL_HARDWARE` |
| 5 | **SNZB-06P** | ** SONOFF | Zigbee occupancy sensor | `** `zigbee2mqtt` | ** metarea | `PHYSICAL_HARDWARE` |
| 6 | **23117RA68G** | ** Xiaomi | 23117RA68G | `** `mobile_app` | ** Unassigned | `PHYSICAL_HARDWARE` |
| 7 | **dell mini tabelt 92** | ** rockchip | px30_evb | `** `mobile_app` | ** Unassigned | `PHYSICAL_HARDWARE` |
| 8 | **PN16** | ** ZSVIOT | 16-way controller | `** `zigbee2mqtt` | ** Unassigned | `PHYSICAL_HARDWARE` |
| 9 | **ir_blaster_met** | ** Moes | Universal smart IR remote control | `** `zigbee2mqtt` | ** metarea | `PHYSICAL_HARDWARE` |
| 10 | **ir_blaster_fet** | ** Moes | Universal smart IR remote control | `** `zigbee2mqtt` | ** Unassigned | `PHYSICAL_HARDWARE` |
| 11 | **ir_blaster_wrk** | ** Moes | Universal smart IR remote control | `** `zigbee2mqtt` | ** Unassigned | `PHYSICAL_HARDWARE` |
| 12 | **SM-S918U1** | ** samsung | SM-S918U1 | `** `mobile_app` | ** Unassigned | `PHYSICAL_HARDWARE` |
| 13 | **Zm108m** | ** Moes | Smart curtain switch module | `** `zigbee2mqtt` | ** Unassigned | `PHYSICAL_HARDWARE` |
| 14 | **WP101** | ** PRETECH | WP101 | `** `mobile_app` | ** Unassigned | `PHYSICAL_HARDWARE` |
| 15 | **Samsung** | ** samsung | SM-X230 | `** `mobile_app` | ** Unassigned | `PHYSICAL_HARDWARE` |
| 16 | **door_wrk** | ** Moes | Door/window alarm sensor | `** `zigbee2mqtt` | ** Unassigned | `PHYSICAL_HARDWARE` |
| 17 | **door_kit** | ** Moes | Door/window alarm sensor | `** `zigbee2mqtt` | ** Unassigned | `PHYSICAL_HARDWARE` |
| 18 | **door_hal** | ** Moes | Door/window alarm sensor | `** `zigbee2mqtt` | ** Unassigned | `PHYSICAL_HARDWARE` |
| 19 | **door_fet** | ** Moes | Door/window alarm sensor | `** `zigbee2mqtt` | ** Unassigned | `PHYSICAL_HARDWARE` |
| 20 | **itel A665L** | ** ITEL | itel A665L | `** `mobile_app` | ** Unassigned | `PHYSICAL_HARDWARE` |

---

## 2. Virtual & Software Devices (`VIRTUAL_OR_SOFTWARE_DEVICE` — 15 Records)

Software containers, Supervisor add-ons, background daemons, and Wyoming voice satellite audio endpoints.

| # | Exact Device Name | Manufacturer | Model | Integration | Assigned Area | Device Classification |
|:---:|---|---|---|---|---|:---:|
| 1 | **Terminal & SSH** | ** Official apps | Home Assistant App | `** `hassio` | ** Unassigned | `VIRTUAL_OR_SOFTWARE_DEVICE` |
| 2 | **Mosquitto broker** | ** Official apps | Home Assistant App | `** `hassio` | ** Unassigned | `VIRTUAL_OR_SOFTWARE_DEVICE` |
| 3 | **Zigbee2MQTT** | ** Home Assistant App: Zigbee2MQTT | Home Assistant App | `** `hassio` | ** Unassigned | `VIRTUAL_OR_SOFTWARE_DEVICE` |
| 4 | **Samba share** | ** Official apps | Home Assistant App | `** `hassio` | ** Unassigned | `VIRTUAL_OR_SOFTWARE_DEVICE` |
| 5 | **Tailscale** | ** Home Assistant Community Apps | Home Assistant App | `** `hassio` | ** Unassigned | `VIRTUAL_OR_SOFTWARE_DEVICE` |
| 6 | **openWakeWord** | ** Official apps | Home Assistant App | `** `hassio` | ** Unassigned | `VIRTUAL_OR_SOFTWARE_DEVICE` |
| 7 | **Piper** | ** Official apps | Home Assistant App | `** `hassio` | ** Unassigned | `VIRTUAL_OR_SOFTWARE_DEVICE` |
| 8 | **Whisper** | ** Official apps | Home Assistant App | `** `hassio` | ** Unassigned | `VIRTUAL_OR_SOFTWARE_DEVICE` |
| 9 | **Assist Microphone** | ** Official apps | Home Assistant App | `** `hassio` | ** Unassigned | `VIRTUAL_OR_SOFTWARE_DEVICE` |
| 10 | **Home Assistant Google Drive Backup** | ** Home Assistant Google Drive Backup Repository | Home Assistant App | `** `hassio` | ** Unassigned | `VIRTUAL_OR_SOFTWARE_DEVICE` |
| 11 | **Rhasspy Assistant** | ** Rhasspy Hass.IO Add-Ons | Home Assistant App | `** `hassio` | ** Unassigned | `VIRTUAL_OR_SOFTWARE_DEVICE` |
| 12 | **Rhasspy Junior** | ** Rhasspy Hass.IO Add-Ons | Home Assistant App | `** `hassio` | ** Unassigned | `VIRTUAL_OR_SOFTWARE_DEVICE` |
| 13 | **Duck DNS** | ** Official apps | Home Assistant App | `** `hassio` | ** Unassigned | `VIRTUAL_OR_SOFTWARE_DEVICE` |
| 14 | **assist microphone** | ** Unknown | Unknown | `** `wyoming` | ** Unassigned | `VIRTUAL_OR_SOFTWARE_DEVICE` |
| 15 | **Cloudflared** | ** Unofficial Home Assistant Apps (Add-ons) | Home Assistant App | `** `hassio` | ** Unassigned | `VIRTUAL_OR_SOFTWARE_DEVICE` |

---

## 3. Integration & Service Representations (`INTEGRATION_OR_SERVICE_REPRESENTATION` — 45 Records)

Core system service endpoints, cloud weather APIs, HACS packages (cards, themes, integrations), coordinator software entities, and diagnostic shadow devices.

| # | Exact Device Name | Manufacturer | Model | Integration | Assigned Area | Device Classification |
|:---:|---|---|---|---|---|:---:|
| 1 | **Sun** | ** Unknown | Unknown | `** `sun` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 2 | **Backup** | ** Home Assistant | Home Assistant Backup | `** `backup` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 3 | **Home Assistant Core** | ** Home Assistant | Home Assistant Core | `** `hassio` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 4 | **Home Assistant Supervisor** | ** Home Assistant | Home Assistant Supervisor | `** `hassio` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 5 | **Home Assistant Host** | ** Home Assistant | Home Assistant Host | `** `hassio` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 6 | **Home Assistant Operating System** | ** Home Assistant | Home Assistant Operating System | `** `hassio` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 7 | **Google Translate en com** | ** Google | Google Translate TTS | `** `google_translate` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 8 | **HACS** | ** hacs.xyz | Unknown | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 9 | **Blueprint Studio** | ** ha-china, soulripper13 | integration | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 10 | **UI Lovelace Minimalist** | ** stokkie90, wilbiev | integration | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 11 | **Bubble Card** | ** Clooos | plugin | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 12 | **Mushroom** | ** piitaya | plugin | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 13 | **card-mod** | ** thomasloven | plugin | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 14 | **button-card** | ** custom-cards | plugin | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 15 | **iOS Themes - Dark Mode and Light Mode** | ** basnijholt | theme | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 16 | **Zigbee2MQTT Bridge** | ** Zigbee2MQTT | Bridge | `** `zigbee2mqtt` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 17 | **mini-graph-card** | ** kalkih | plugin | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 18 | **SmartIR** | ** smartHomeHub | integration | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 19 | **Kiosk Mode** | ** NemesisRE | plugin | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 20 | **Silent remotes card** | ** silentbil | plugin | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 21 | **Check Button Card** | ** custom-cards | plugin | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 22 | **Z2M IR Bridge** | ** tomer2526 | integration | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 23 | **Zigbee Mesh Map Card** | ** lubomir-moric | plugin | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 24 | **Everyday** | ** f17mkx | theme | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 25 | **Domolux** | ** Open-Meteo | Unknown | `** `open_meteo` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 26 | **HA-MCP — Manage Home Assistant with AI** | ** homeassistant-ai | integration | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 27 | **HA-MCP Server** | ** homeassistant-ai | ha-mcp (in-process server) | `** `ha_mcp_tools` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 28 | **Swipe Card** | ** bramkragten | plugin | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 29 | **Swipe Card** | ** keshavdv | plugin | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 30 | **NeonPlan 3D** | ** Mastershort | integration | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 31 | **Zigbee Health** | ** Mastershort | integration | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 32 | **Zigbee Health (Zigbee2MQTT)** | ** Zigbee Health | Zigbee2MQTT | `** `zigbee_health` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 33 | **Unnamed Device** | ** Unknown | Unknown | `** `zigbee2mqtt` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 34 | **Unnamed Device** | ** Unknown | Unknown | `** `zigbee2mqtt` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 35 | **Unnamed Device** | ** Unknown | Unknown | `** `zigbee2mqtt` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 36 | **Unnamed Device** | ** Unknown | Unknown | `** `zigbee2mqtt` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 37 | **Unnamed Device** | ** Unknown | Unknown | `** `zigbee2mqtt` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 38 | **Unnamed Device** | ** Unknown | Unknown | `** `zigbee2mqtt` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 39 | **Unnamed Device** | ** Unknown | Unknown | `** `zigbee2mqtt` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 40 | **Unnamed Device** | ** Unknown | Unknown | `** `zigbee2mqtt` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 41 | **Unnamed Device** | ** Unknown | Unknown | `** `zigbee2mqtt` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 42 | **Unnamed Device** | ** Unknown | Unknown | `** `zigbee2mqtt` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 43 | **Unnamed Device** | ** Unknown | Unknown | `** `zigbee2mqtt` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 44 | **Unnamed Device** | ** Unknown | Unknown | `** `zigbee2mqtt` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |
| 45 | **NeonPlan 3D** | ** Mastershort | integration | `** `hacs` | ** Unassigned | `INTEGRATION_OR_SERVICE_REPRESENTATION` |

