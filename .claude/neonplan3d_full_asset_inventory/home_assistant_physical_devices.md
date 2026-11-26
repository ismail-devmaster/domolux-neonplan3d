# Live Home Assistant Physical & Logical Device Inventory

**Authority:** Home Assistant System Forensics Auditor
**Target Instance:** `http://192.168.100.92:8123` (Location: Domolux, Version: 2026.8.3)
**Total Registered Devices:** 80
**Inspection Method:** MCP Tool `ha_get_device` with `detail_level='full'`

> [!IMPORTANT]
> This section catalogues real, physical and integrated devices currently registered in the live Home Assistant instance. These real devices are strictly distinguished from the 3D virtual catalog assets representing them.

---

## 1. Device Breakdown by Integration

| Integration Type | Device Count |
|---|:---:|
| `zigbee2mqtt` | 25 |
| `hacs` | 22 |
| `hassio` | 18 |
| `mobile_app` | 6 |
| `sun` | 1 |
| `unknown` | 1 |
| `backup` | 1 |
| `google_translate` | 1 |
| `upnp_serial_number` | 1 |
| `open_meteo` | 1 |
| `wyoming` | 1 |
| `ha_mcp_tools` | 1 |
| `zigbee_health` | 1 |
| **Total Devices** | **80** |

---

## 2. Exhaustive Device Registry

| # | Device Name | Manufacturer | Model | Integration | Area | Entities Count | Device ID |
|:---:|---|---|---|---|---|:---:|---|
| 1 | **Sun** | Unknown | Unknown | `sun` | Unassigned | 9 | `33c5579847bbaf6e5122221503b92a4a` |
| 2 | **hci0 (2C:CF:67:6A:3A:56)** | Raspberry Pi (Trading) Ltd | bcm43438-bt | `unknown` | Unassigned | 0 | `b2501d69804b488b36822b942c69f9ad` |
| 3 | **Backup** | Home Assistant | Home Assistant Backup | `backup` | Unassigned | 5 | `62072046d993a6626388d376c3f30c60` |
| 4 | **Home Assistant Core** | Home Assistant | Home Assistant Core | `hassio` | Unassigned | 3 | `7d752db53abbc77e2cc38d586078586b` |
| 5 | **Home Assistant Supervisor** | Home Assistant | Home Assistant Supervisor | `hassio` | Unassigned | 3 | `69ee12325e82c5e2a7ab7ee21dfeac72` |
| 6 | **Home Assistant Host** | Home Assistant | Home Assistant Host | `hassio` | Unassigned | 5 | `ce5d312dbb5d33dcb08709b10e32ed70` |
| 7 | **Home Assistant Operating System** | Home Assistant | Home Assistant Operating System | `hassio` | Unassigned | 3 | `933a0cf2e037862637869a304e7f5505` |
| 8 | **Google Translate en com** | Google | Google Translate TTS | `google_translate` | Unassigned | 1 | `997efd2d6a24995d119770c57562b9c2` |
| 9 | **Terminal & SSH** | Official apps | Home Assistant App | `hassio` | Unassigned | 7 | `532c976f4958859fa028951626f0857f` |
| 10 | **HACS** | hacs.xyz | Unknown | `hacs` | Unassigned | 2 | `cadc13f4961c2a801aace85bd80ffb58` |
| 11 | **Blueprint Studio** | ha-china, soulripper13 | integration | `hacs` | Unassigned | 2 | `75d40e360caa04e97fbc2f4d5db905b3` |
| 12 | **DIR-X3010Z** | Dlink | DIR-X3010 | `upnp_serial_number` | Unassigned | 17 | `d7537e36ee0a7ce6445afd2d47b5c858` |
| 13 | **UI Lovelace Minimalist** | stokkie90, wilbiev | integration | `hacs` | Unassigned | 2 | `7dcfaf80b7a0f98635b3ad3f4bcde8f5` |
| 14 | **Bubble Card** | Clooos | plugin | `hacs` | Unassigned | 2 | `165e316afcc37a393297a608e619716e` |
| 15 | **Mushroom** | piitaya | plugin | `hacs` | Unassigned | 2 | `5573a706cf15bcf8a32f347c19092ffe` |
| 16 | **Mosquitto broker** | Official apps | Home Assistant App | `hassio` | Unassigned | 7 | `acbb5a1936fefe36c19a159bf8b3703c` |
| 17 | **card-mod** | thomasloven | plugin | `hacs` | Unassigned | 2 | `ca56ab2bd8d8e1b7f918192cc71c56ec` |
| 18 | **button-card** | custom-cards | plugin | `hacs` | Unassigned | 2 | `c17225e306380700ff468bea1329d254` |
| 19 | **iOS Themes - Dark Mode and Light Mode** | basnijholt | theme | `hacs` | Unassigned | 2 | `6a72baccab338d2a4fc64dea4f469544` |
| 20 | **Zigbee2MQTT Bridge** | Zigbee2MQTT | Bridge | `zigbee2mqtt` | Unassigned | 8 | `a9bffed0696c9936d459c637fa2ababc` |
| 21 | **Zigbee2MQTT** | Home Assistant App: Zigbee2MQTT | Home Assistant App | `hassio` | Unassigned | 7 | `d1942986d87b6abb9c5e846c7fffe348` |
| 22 | **SC500ZB-v4** | LoraTap | Smart curtain/shutter switch | `zigbee2mqtt` | metarea | 10 | `8783fda9009e4fc5c9699a46661b3252` |
| 23 | **TS0203** | Tuya | Door/window sensor | `zigbee2mqtt` | metarea | 6 | `3c6a72e6b41cfc906eb21e906dc0ba33` |
| 24 | **SNZB-06P** | SONOFF | Zigbee occupancy sensor | `zigbee2mqtt` | metarea | 6 | `abd163333b61e68aad27a1be82d7133e` |
| 25 | **23117RA68G** | Xiaomi | 23117RA68G | `mobile_app` | Unassigned | 133 | `db19eb6f3e2480d5e56fe0473992f358` |
| 26 | **mini-graph-card** | kalkih | plugin | `hacs` | Unassigned | 2 | `82062678e08df1c4f4f6d1e1bc28d98d` |
| 27 | **Samba share** | Official apps | Home Assistant App | `hassio` | Unassigned | 7 | `fb19fc776973fd1e36dac460a3625b4d` |
| 28 | **Tailscale** | Home Assistant Community Apps | Home Assistant App | `hassio` | Unassigned | 7 | `04d27c69021efceb8fda2f9921a6a7cf` |
| 29 | **SmartIR** | smartHomeHub | integration | `hacs` | Unassigned | 2 | `750ef99e66b80d7e4af4d399089cdc2a` |
| 30 | **openWakeWord** | Official apps | Home Assistant App | `hassio` | Unassigned | 7 | `f7927a67750b80f2992af60870c1cfc9` |
| 31 | **Piper** | Official apps | Home Assistant App | `hassio` | Unassigned | 7 | `6ad12444e134bf01b388d11d1ef7dd44` |
| 32 | **Whisper** | Official apps | Home Assistant App | `hassio` | Unassigned | 7 | `e5736b49e8b56c1653e50e0b635e6d18` |
| 33 | **Assist Microphone** | Official apps | Home Assistant App | `hassio` | Unassigned | 7 | `da13b1d89552e53055ef016a8e1ce4a6` |
| 34 | **Kiosk Mode** | NemesisRE | plugin | `hacs` | Unassigned | 2 | `f68ef5283c76b4c7e67f31fb31f84385` |
| 35 | **Silent remotes card** | silentbil | plugin | `hacs` | Unassigned | 2 | `ad49906e98b754eb730bb44a49ec43e5` |
| 36 | **Check Button Card** | custom-cards | plugin | `hacs` | Unassigned | 2 | `b2aa8badaba5c97ea1a2258a290ed1cf` |
| 37 | **Home Assistant Google Drive Backup** | Home Assistant Google Drive Backup Repository | Home Assistant App | `hassio` | Unassigned | 7 | `2479552cd49bb997b9ea3462be7ff59c` |
| 38 | **Z2M IR Bridge** | tomer2526 | integration | `hacs` | Unassigned | 2 | `7d03a67e7a6a578e9e6456b20e481b7d` |
| 39 | **Zigbee Mesh Map Card** | lubomir-moric | plugin | `hacs` | Unassigned | 2 | `10fd3546c6bb0f0b74807ab72c519f64` |
| 40 | **Everyday** | f17mkx | theme | `hacs` | Unassigned | 2 | `3d95a37ac29cb050e2c578d4ca565a0b` |
| 41 | **Rhasspy Assistant** | Rhasspy Hass.IO Add-Ons | Home Assistant App | `hassio` | Unassigned | 7 | `4d5284e44fe913831d48e1de5b69e140` |
| 42 | **Rhasspy Junior** | Rhasspy Hass.IO Add-Ons | Home Assistant App | `hassio` | Unassigned | 7 | `0fbcbb9ca31013b0dfff6595de9a2227` |
| 43 | **dell mini tabelt 92** | rockchip | px30_evb | `mobile_app` | Unassigned | 74 | `4a45912602f110a66f160ddc47e9d0f3` |
| 44 | **PN16** | ZSVIOT | 16-way controller | `zigbee2mqtt` | Unassigned | 24 | `0fe2d93bbc6ccf5725a8e738227e88a1` |
| 45 | **Domolux** | Open-Meteo | Unknown | `open_meteo` | Unassigned | 1 | `1952deeb6b224ec0880e6ea118c3768e` |
| 46 | **ir_blaster_met** | Moes | Universal smart IR remote control | `zigbee2mqtt` | metarea | 8 | `1f0cc516f90c11a115bc16bb7e59f6dc` |
| 47 | **Duck DNS** | Official apps | Home Assistant App | `hassio` | Unassigned | 7 | `8eabf710244429915b09942dc5c6b620` |
| 48 | **assist microphone** | Unknown | Unknown | `wyoming` | Unassigned | 8 | `2b66704d93d3e34369fe3530e36d11f2` |
| 49 | **Cloudflared** | Unofficial Home Assistant Apps (Add-ons) | Home Assistant App | `hassio` | Unassigned | 7 | `333790843fb0d21102d51b1308b5a0de` |
| 50 | **HA-MCP — Manage Home Assistant with AI** | homeassistant-ai | integration | `hacs` | Unassigned | 2 | `32f93cd36701cbe9081cce8a69aa9ef7` |
| 51 | **HA-MCP Server** | homeassistant-ai | ha-mcp (in-process server) | `ha_mcp_tools` | Unassigned | 1 | `2982feeb2ef6bdf54a049a26a0dd49a5` |
| 52 | **ir_blaster_fet** | Moes | Universal smart IR remote control | `zigbee2mqtt` | Unassigned | 8 | `03eb707054a468660586c332a2107048` |
| 53 | **ir_blaster_wrk** | Moes | Universal smart IR remote control | `zigbee2mqtt` | Unassigned | 8 | `07cfdf3a43f47a040b31c5dd1853b9ad` |
| 54 | **SM-S918U1** | samsung | SM-S918U1 | `mobile_app` | Unassigned | 134 | `e20dd9867d9bcda711216fce9aefdd58` |
| 55 | **Zm108m** | Moes | Smart curtain switch module | `zigbee2mqtt` | Unassigned | 9 | `2628764f4f159b65f981d917b82b71d8` |
| 56 | **WP101** | PRETECH | WP101 | `mobile_app` | Unassigned | 120 | `af05b18af15d718736190d8accbfcfe5` |
| 57 | **Samsung** | samsung | SM-X230 | `mobile_app` | Unassigned | 114 | `cfb78ad9a9cf137e0b31f202b58a0bfa` |
| 58 | **Swipe Card** | bramkragten | plugin | `hacs` | Unassigned | 2 | `d884c541e6ffc38ae89fa3e1939ccc4a` |
| 59 | **Swipe Card** | keshavdv | plugin | `hacs` | Unassigned | 2 | `7728079425e550f9ed7bd4e69db51220` |
| 60 | **door_wrk** | Moes | Door/window alarm sensor | `zigbee2mqtt` | Unassigned | 6 | `019386b186cb3ff0b26cd3083356af7a` |
| 61 | **door_kit** | Moes | Door/window alarm sensor | `zigbee2mqtt` | Unassigned | 6 | `7a23629f265b7dc4e7dd3bed250b03c4` |
| 62 | **door_hal** | Moes | Door/window alarm sensor | `zigbee2mqtt` | Unassigned | 6 | `15bd188d47de1e421088cc5b8febaa25` |
| 63 | **door_fet** | Moes | Door/window alarm sensor | `zigbee2mqtt` | Unassigned | 6 | `078dc26168701d963baed3f0f089ebce` |
| 64 | **itel A665L** | ITEL | itel A665L | `mobile_app` | Unassigned | 103 | `ebd103a40e80d354bd9ae43827d8ca0f` |
| 65 | **NeonPlan 3D** | Mastershort | integration | `hacs` | Unassigned | 2 | `526d591af56bf6fdc17d0e2c1115f530` |
| 66 | **Zigbee Health** | Mastershort | integration | `hacs` | Unassigned | 2 | `10bd982aab661a62ae89b9c07c9ea80d` |
| 67 | **Zigbee Health (Zigbee2MQTT)** | Zigbee Health | Zigbee2MQTT | `zigbee_health` | Unassigned | 18 | `9bd6157de9bcbe16938eecd607959fb3` |
| 68 | **Unnamed Device** | Unknown | Unknown | `zigbee2mqtt` | Unassigned | 5 | `7073dd677b3a7ac05b0f5f39052616d7` |
| 69 | **Unnamed Device** | Unknown | Unknown | `zigbee2mqtt` | Unassigned | 5 | `f628af68d3db51b317d358f0a9b1210e` |
| 70 | **Unnamed Device** | Unknown | Unknown | `zigbee2mqtt` | Unassigned | 3 | `15d6b19b99cb6e01f9285e5d24013466` |
| 71 | **Unnamed Device** | Unknown | Unknown | `zigbee2mqtt` | Unassigned | 3 | `7b891715961393e2f25b6df35536e488` |
| 72 | **Unnamed Device** | Unknown | Unknown | `zigbee2mqtt` | Unassigned | 5 | `790074299173314bdee99a6675be01a4` |
| 73 | **Unnamed Device** | Unknown | Unknown | `zigbee2mqtt` | Unassigned | 5 | `930a816220e59ac1f080bc0388c6f46b` |
| 74 | **Unnamed Device** | Unknown | Unknown | `zigbee2mqtt` | Unassigned | 5 | `30c038ede5edf9b989c8f2d13b9799b4` |
| 75 | **Unnamed Device** | Unknown | Unknown | `zigbee2mqtt` | Unassigned | 5 | `ae548f32886919651ed61fb87748e63c` |
| 76 | **Unnamed Device** | Unknown | Unknown | `zigbee2mqtt` | Unassigned | 5 | `fef666d0724f6fbf00f46f16c48b5fb7` |
| 77 | **Unnamed Device** | Unknown | Unknown | `zigbee2mqtt` | Unassigned | 3 | `8786438f2774f7f62abebf2f953288f9` |
| 78 | **Unnamed Device** | Unknown | Unknown | `zigbee2mqtt` | Unassigned | 5 | `5ed9ef90c5d1634e2fcc0c9e3617ab77` |
| 79 | **Unnamed Device** | Unknown | Unknown | `zigbee2mqtt` | Unassigned | 3 | `c3de5c4d62b2214957c22b47394a75ab` |
| 80 | **NeonPlan 3D** | Mastershort | integration | `hacs` | Unassigned | 2 | `c3ed892432a793f689a60731e082c997` |

### Detailed Device Entity Associations

#### 1. Sun (`33c5579847bbaf6e5122221503b92a4a`)
- **Manufacturer / Model:** Unknown / Unknown
- **Integration:** `sun`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (9):**
  - `binary_sensor.sun_solar_rising`: Solar rising (platform: sun)
  - `sensor.sun_next_dawn`: Next dawn (platform: sun)
  - `sensor.sun_next_dusk`: Next dusk (platform: sun)
  - `sensor.sun_next_midnight`: Next midnight (platform: sun)
  - `sensor.sun_next_noon`: Next noon (platform: sun)
  - `sensor.sun_next_rising`: Next rising (platform: sun)
  - `sensor.sun_next_setting`: Next setting (platform: sun)
  - `sensor.sun_solar_elevation`: Solar elevation (platform: sun)
  - `sensor.sun_solar_azimuth`: Solar azimuth (platform: sun)

#### 2. hci0 (2C:CF:67:6A:3A:56) (`b2501d69804b488b36822b942c69f9ad`)
- **Manufacturer / Model:** Raspberry Pi (Trading) Ltd / bcm43438-bt
- **Integration:** `unknown`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** homeassistant
- **Related Entities (0):**
  - *No entities exposed*

#### 3. Backup (`62072046d993a6626388d376c3f30c60`)
- **Manufacturer / Model:** Home Assistant / Home Assistant Backup
- **Integration:** `backup`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 2026.8.3
- **Related Entities (5):**
  - `event.backup_automatic_backup`: Automatic backup (platform: backup)
  - `sensor.backup_backup_manager_state`: Backup Manager state (platform: backup)
  - `sensor.backup_next_scheduled_automatic_backup`: Next scheduled automatic backup (platform: backup)
  - `sensor.backup_last_successful_automatic_backup`: Last successful automatic backup (platform: backup)
  - `sensor.backup_last_attempted_automatic_backup`: Last attempted automatic backup (platform: backup)

#### 4. Home Assistant Core (`7d752db53abbc77e2cc38d586078586b`)
- **Manufacturer / Model:** Home Assistant / Home Assistant Core
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 2026.8.3
- **Related Entities (3):**
  - `sensor.home_assistant_core_cpu_percent`: CPU percent (platform: hassio)
  - `sensor.home_assistant_core_memory_percent`: Memory percent (platform: hassio)
  - `update.home_assistant_core_update`: Update (platform: hassio)

#### 5. Home Assistant Supervisor (`69ee12325e82c5e2a7ab7ee21dfeac72`)
- **Manufacturer / Model:** Home Assistant / Home Assistant Supervisor
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 2026.11.0
- **Related Entities (3):**
  - `sensor.home_assistant_supervisor_cpu_percent`: CPU percent (platform: hassio)
  - `sensor.home_assistant_supervisor_memory_percent`: Memory percent (platform: hassio)
  - `update.home_assistant_supervisor_update`: Update (platform: hassio)

#### 6. Home Assistant Host (`ce5d312dbb5d33dcb08709b10e32ed70`)
- **Manufacturer / Model:** Home Assistant / Home Assistant Host
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (5):**
  - `sensor.home_assistant_host_os_agent_version`: OS Agent version (platform: hassio)
  - `sensor.home_assistant_host_apparmor_version`: AppArmor version (platform: hassio)
  - `sensor.home_assistant_host_disk_total`: Disk total (platform: hassio)
  - `sensor.home_assistant_host_disk_used`: Disk used (platform: hassio)
  - `sensor.home_assistant_host_disk_free`: Disk free (platform: hassio)

#### 7. Home Assistant Operating System (`933a0cf2e037862637869a304e7f5505`)
- **Manufacturer / Model:** Home Assistant / Home Assistant Operating System
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 18.4
- **Related Entities (3):**
  - `sensor.home_assistant_operating_system_version`: Version (platform: hassio)
  - `sensor.home_assistant_operating_system_newest_version`: Newest version (platform: hassio)
  - `update.home_assistant_operating_system_update`: Update (platform: hassio)

#### 8. Google Translate en com (`997efd2d6a24995d119770c57562b9c2`)
- **Manufacturer / Model:** Google / Google Translate TTS
- **Integration:** `google_translate`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (1):**
  - `tts.google_translate_en_com`:  (platform: google_translate)

#### 9. Terminal & SSH (`532c976f4958859fa028951626f0857f`)
- **Manufacturer / Model:** Official apps / Home Assistant App
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 10.6.0
- **Related Entities (7):**
  - `binary_sensor.terminal_ssh_running`: Running (platform: hassio)
  - `sensor.terminal_ssh_version`: Version (platform: hassio)
  - `sensor.terminal_ssh_newest_version`: Newest version (platform: hassio)
  - `sensor.terminal_ssh_cpu_percent`: CPU percent (platform: hassio)
  - `sensor.terminal_ssh_memory_percent`: Memory percent (platform: hassio)
  - `switch.terminal_ssh`: None (platform: hassio)
  - `update.terminal_ssh_update`: Update (platform: hassio)

#### 10. HACS (`cadc13f4961c2a801aace85bd80ffb58`)
- **Manufacturer / Model:** hacs.xyz / Unknown
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 2.0.5
- **Related Entities (2):**
  - `update.hacs_update`: Update (platform: hacs)
  - `switch.hacs_pre_release`: Pre-release (platform: hacs)

#### 11. Blueprint Studio (`75d40e360caa04e97fbc2f4d5db905b3`)
- **Manufacturer / Model:** ha-china, soulripper13 / integration
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.blueprint_studio_update`: Update (platform: hacs)
  - `switch.blueprint_studio_pre_release`: Pre-release (platform: hacs)

#### 12. DIR-X3010Z (`d7537e36ee0a7ce6445afd2d47b5c858`)
- **Manufacturer / Model:** Dlink / DIR-X3010
- **Integration:** `upnp_serial_number`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (17):**
  - `binary_sensor.dir_x3010z_wan_status`: WAN status (platform: upnp)
  - `sensor.dir_x3010z_data_received`: Data received (platform: upnp)
  - `sensor.dir_x3010z_data_sent`: Data sent (platform: upnp)
  - `sensor.dir_x3010z_packets_received`: Packets received (platform: upnp)
  - `sensor.dir_x3010z_packets_sent`: Packets sent (platform: upnp)
  - `sensor.dir_x3010z_uptime`: Uptime (platform: upnp)
  - `sensor.dir_x3010z_wan_status`: WAN status (platform: upnp)
  - `sensor.dir_x3010z_download_speed`: Download speed (platform: upnp)
  - `sensor.dir_x3010z_upload_speed`: Upload speed (platform: upnp)
  - `sensor.dir_x3010z_packet_download_speed`: Packet download speed (platform: upnp)
  - `sensor.dir_x3010z_packet_upload_speed`: Packet upload speed (platform: upnp)
  - `sensor.dir_x3010z_external_ip`: External IP (platform: upnp)
  - `sensor.dir_x3010z_number_of_port_mapping_entries_ipv4`: Number of port mapping entries (IPv4) (platform: upnp)
  - `sensor.dir_x3010z_download_speed_no_rollover_handling`: Download speed (no rollover handling) (platform: upnp)
  - `sensor.dir_x3010z_upload_speed_no_rollover_handling`: Upload speed (no rollover handling) (platform: upnp)
  - `sensor.dir_x3010z_packet_download_speed_no_rollover_handling`: Packet download speed (no rollover handling) (platform: upnp)
  - `sensor.dir_x3010z_packet_upload_speed_no_rollover_handling`: Packet upload speed (no rollover handling) (platform: upnp)

#### 13. UI Lovelace Minimalist (`7dcfaf80b7a0f98635b3ad3f4bcde8f5`)
- **Manufacturer / Model:** stokkie90, wilbiev / integration
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.ui_lovelace_minimalist_update`: Update (platform: hacs)
  - `switch.ui_lovelace_minimalist_pre_release`: Pre-release (platform: hacs)

#### 14. Bubble Card (`165e316afcc37a393297a608e619716e`)
- **Manufacturer / Model:** Clooos / plugin
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.bubble_card_update`: Update (platform: hacs)
  - `switch.bubble_card_pre_release`: Pre-release (platform: hacs)

#### 15. Mushroom (`5573a706cf15bcf8a32f347c19092ffe`)
- **Manufacturer / Model:** piitaya / plugin
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.mushroom_update`: Update (platform: hacs)
  - `switch.mushroom_pre_release`: Pre-release (platform: hacs)

#### 16. Mosquitto broker (`acbb5a1936fefe36c19a159bf8b3703c`)
- **Manufacturer / Model:** Official apps / Home Assistant App
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 7.1.3
- **Related Entities (7):**
  - `binary_sensor.mosquitto_broker_running`: Running (platform: hassio)
  - `sensor.mosquitto_broker_version`: Version (platform: hassio)
  - `sensor.mosquitto_broker_newest_version`: Newest version (platform: hassio)
  - `sensor.mosquitto_broker_cpu_percent`: CPU percent (platform: hassio)
  - `sensor.mosquitto_broker_memory_percent`: Memory percent (platform: hassio)
  - `switch.mosquitto_broker`: None (platform: hassio)
  - `update.mosquitto_broker_update`: Update (platform: hassio)

#### 17. card-mod (`ca56ab2bd8d8e1b7f918192cc71c56ec`)
- **Manufacturer / Model:** thomasloven / plugin
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.card_mod_update`: Update (platform: hacs)
  - `switch.card_mod_pre_release`: Pre-release (platform: hacs)

#### 18. button-card (`c17225e306380700ff468bea1329d254`)
- **Manufacturer / Model:** custom-cards / plugin
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.button_card_update`: Update (platform: hacs)
  - `switch.button_card_pre_release`: Pre-release (platform: hacs)

#### 19. iOS Themes - Dark Mode and Light Mode (`6a72baccab338d2a4fc64dea4f469544`)
- **Manufacturer / Model:** basnijholt / theme
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.ios_themes_dark_mode_and_light_mode_update`: Update (platform: hacs)
  - `switch.ios_themes_dark_mode_and_light_mode_pre_release`: Pre-release (platform: hacs)

#### 20. Zigbee2MQTT Bridge (`a9bffed0696c9936d459c637fa2ababc`)
- **Manufacturer / Model:** Zigbee2MQTT / Bridge
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 2.14.3
- **Related Entities (8):**
  - `binary_sensor.zigbee2mqtt_bridge_connection_state`: Connection state (platform: mqtt)
  - `binary_sensor.zigbee2mqtt_bridge_restart_required`: Restart required (platform: mqtt)
  - `button.zigbee2mqtt_bridge_restart`: Restart (platform: mqtt)
  - `select.zigbee2mqtt_bridge_log_level`: Log level (platform: mqtt)
  - `sensor.zigbee2mqtt_bridge_version`: Version (platform: mqtt)
  - `sensor.zigbee2mqtt_bridge_coordinator_version`: Coordinator version (platform: mqtt)
  - `sensor.zigbee2mqtt_bridge_network_map`: Network map (platform: mqtt)
  - `switch.zigbee2mqtt_bridge_permit_join`: Permit join (platform: mqtt)

#### 21. Zigbee2MQTT (`d1942986d87b6abb9c5e846c7fffe348`)
- **Manufacturer / Model:** Home Assistant App: Zigbee2MQTT / Home Assistant App
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 2.14.3-1
- **Related Entities (7):**
  - `binary_sensor.zigbee2mqtt_running`: Running (platform: hassio)
  - `sensor.zigbee2mqtt_version`: Version (platform: hassio)
  - `sensor.zigbee2mqtt_newest_version`: Newest version (platform: hassio)
  - `sensor.zigbee2mqtt_cpu_percent`: CPU percent (platform: hassio)
  - `sensor.zigbee2mqtt_memory_percent`: Memory percent (platform: hassio)
  - `switch.zigbee2mqtt`: None (platform: hassio)
  - `update.zigbee2mqtt_update`: Update (platform: hassio)

#### 22. SC500ZB-v4 (`8783fda9009e4fc5c9699a46661b3252`)
- **Manufacturer / Model:** LoraTap / Smart curtain/shutter switch
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** metarea
- **Firmware / Software Version:** Zigbee2MQTT 2.14.3
- **Related Entities (10):**
  - `cover.yellow_switch`: meetingrideaux (platform: mqtt)
  - `sensor.yellow_switch_moving`: Moving (platform: mqtt)
  - `switch.yellow_switch_motor_reversal`: Motor reversal (platform: mqtt)
  - `switch.yellow_switch_calibration_to_open`: Calibration to open (platform: mqtt)
  - `switch.yellow_switch_calibration_to_close`: Calibration to close (platform: mqtt)
  - `number.yellow_switch_calibration_time_to_open`: Calibration time to open (platform: mqtt)
  - `number.yellow_switch_calibration_time_to_close`: Calibration time to close (platform: mqtt)
  - `select.yellow_switch_switch_type_curtain`: Switch type curtain (platform: mqtt)
  - `sensor.0xa4c1380caa0578c0_linkquality`: Linkquality (platform: mqtt)
  - `select.yellow_switch_switch_type`: Switch type (platform: mqtt)

#### 23. TS0203 (`3c6a72e6b41cfc906eb21e906dc0ba33`)
- **Manufacturer / Model:** Tuya / Door/window sensor
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** metarea
- **Firmware / Software Version:** Zigbee2MQTT 2.14.3
- **Related Entities (6):**
  - `binary_sensor.0xa4c138997d10233c_contact`: None (platform: mqtt)
  - `sensor.0xa4c138997d10233c_battery`: Battery (platform: mqtt)
  - `sensor.0xa4c138997d10233c_voltage`: Voltage (platform: mqtt)
  - `binary_sensor.0xa4c138997d10233c_tamper`: Tamper (platform: mqtt)
  - `binary_sensor.0xa4c138997d10233c_battery_low`: Battery (platform: mqtt)
  - `sensor.0xa4c138997d10233c_linkquality`: Linkquality (platform: mqtt)

#### 24. SNZB-06P (`abd163333b61e68aad27a1be82d7133e`)
- **Manufacturer / Model:** SONOFF / Zigbee occupancy sensor
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** metarea
- **Firmware / Software Version:** 1.0.6
- **Related Entities (6):**
  - `binary_sensor.0xf4b3b1fffe495048_occupancy`: Occupancy (platform: mqtt)
  - `number.0xf4b3b1fffe495048_occupancy_timeout`: Occupancy timeout (platform: mqtt)
  - `select.0xf4b3b1fffe495048_occupancy_sensitivity`: Occupancy sensitivity (platform: mqtt)
  - `sensor.0xf4b3b1fffe495048_illumination`: Illumination (platform: mqtt)
  - `sensor.0xf4b3b1fffe495048_linkquality`: Linkquality (platform: mqtt)
  - `update.0xf4b3b1fffe495048`: None (platform: mqtt)

#### 25. 23117RA68G (`db19eb6f3e2480d5e56fe0473992f358`)
- **Manufacturer / Model:** Xiaomi / 23117RA68G
- **Integration:** `mobile_app`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 36
- **Related Entities (133):**
  - `device_tracker.23117ra68g`:  (platform: mobile_app)
  - `notify.23117ra68g`: None (platform: mobile_app)
  - `sensor.23117ra68g_detected_activity`: Detected activity (platform: mobile_app)
  - `sensor.23117ra68g_sleep_confidence`: Sleep confidence (platform: mobile_app)
  - `sensor.23117ra68g_sleep_segment`: Sleep segment (platform: mobile_app)
  - `binary_sensor.23117ra68g_android_auto`: Android Auto (platform: mobile_app)
  - `sensor.23117ra68g_os_version`: OS version (platform: mobile_app)
  - `sensor.23117ra68g_security_patch`: Security patch (platform: mobile_app)
  - `sensor.23117ra68g_current_version`: Current version (platform: mobile_app)
  - `sensor.23117ra68g_app_rx_gb`: App Rx GB (platform: mobile_app)
  - `sensor.23117ra68g_app_tx_gb`: App Tx GB (platform: mobile_app)
  - `sensor.23117ra68g_app_memory`: App memory (platform: mobile_app)
  - `binary_sensor.23117ra68g_app_inactive`: App inactive (platform: mobile_app)
  - `sensor.23117ra68g_app_standby_bucket`: App standby bucket (platform: mobile_app)
  - `sensor.23117ra68g_app_importance`: App importance (platform: mobile_app)
  - `sensor.23117ra68g_ringer_mode`: Ringer mode (platform: mobile_app)
  - `sensor.23117ra68g_audio_mode`: Audio mode (platform: mobile_app)
  - `binary_sensor.23117ra68g_headphones`: Headphones (platform: mobile_app)
  - `binary_sensor.23117ra68g_mic_muted`: Mic muted (platform: mobile_app)
  - `binary_sensor.23117ra68g_speakerphone`: Speakerphone (platform: mobile_app)
  - `binary_sensor.23117ra68g_music_active`: Music active (platform: mobile_app)
  - `sensor.23117ra68g_volume_level_alarm`: Volume level alarm (platform: mobile_app)
  - `sensor.23117ra68g_volume_level_call`: Volume level call (platform: mobile_app)
  - `sensor.23117ra68g_volume_level_music`: Volume level music (platform: mobile_app)
  - `sensor.23117ra68g_volume_level_ringer`: Volume level ringer (platform: mobile_app)
  - `sensor.23117ra68g_volume_level_notification`: Volume level notification (platform: mobile_app)
  - `sensor.23117ra68g_volume_level_system`: Volume level system (platform: mobile_app)
  - `sensor.23117ra68g_volume_level_dtmf`: Volume level DTMF (platform: mobile_app)
  - `sensor.23117ra68g_volume_level_accessibility`: Volume level accessibility (platform: mobile_app)
  - `sensor.23117ra68g_battery_level`: Battery level (platform: mobile_app)
  - `sensor.23117ra68g_battery_state`: Battery state (platform: mobile_app)
  - `binary_sensor.23117ra68g_is_charging`: Is charging (platform: mobile_app)
  - `sensor.23117ra68g_charger_type`: Charger type (platform: mobile_app)
  - `sensor.23117ra68g_battery_health`: Battery health (platform: mobile_app)
  - `sensor.23117ra68g_battery_temperature`: Battery temperature (platform: mobile_app)
  - `sensor.23117ra68g_battery_power`: Battery power (platform: mobile_app)
  - `sensor.23117ra68g_remaining_charge_time`: Remaining charge time (platform: mobile_app)
  - `sensor.23117ra68g_battery_cycle_count`: Battery cycle count (platform: mobile_app)
  - `sensor.23117ra68g_bluetooth_connection`: Bluetooth connection (platform: mobile_app)
  - `binary_sensor.23117ra68g_bluetooth_state`: Bluetooth state (platform: mobile_app)
  - `sensor.23117ra68g_ble_transmitter`: BLE transmitter (platform: mobile_app)
  - `sensor.23117ra68g_beacon_monitor`: Beacon monitor (platform: mobile_app)
  - `sensor.23117ra68g_car_battery`: Car battery (platform: mobile_app)
  - `sensor.23117ra68g_car_name`: Car name (platform: mobile_app)
  - `sensor.23117ra68g_car_charging_status`: Car charging status (platform: mobile_app)
  - `sensor.23117ra68g_car_ev_connector_type`: Car EV connector type (platform: mobile_app)
  - `sensor.23117ra68g_car_fuel`: Car fuel (platform: mobile_app)
  - `sensor.23117ra68g_car_fuel_type`: Car fuel type (platform: mobile_app)
  - `sensor.23117ra68g_car_odometer`: Car odometer (platform: mobile_app)
  - `sensor.23117ra68g_car_speed`: Car speed (platform: mobile_app)
  - `sensor.23117ra68g_car_range_remaining`: Car range remaining (platform: mobile_app)
  - `sensor.23117ra68g_screen_brightness`: Screen brightness (platform: mobile_app)
  - `sensor.23117ra68g_screen_off_timeout`: Screen off timeout (platform: mobile_app)
  - `sensor.23117ra68g_screen_orientation`: Screen orientation (platform: mobile_app)
  - `sensor.23117ra68g_screen_rotation`: Screen rotation (platform: mobile_app)
  - `sensor.23117ra68g_do_not_disturb_sensor`: Do Not Disturb sensor (platform: mobile_app)
  - `sensor.23117ra68g_accent_color`: Accent color (platform: mobile_app)
  - `binary_sensor.23117ra68g_work_profile`: Work profile (platform: mobile_app)
  - `sensor.23117ra68g_geocoded_location`: Geocoded location (platform: mobile_app)
  - `sensor.23117ra68g_active_calories_burned`: Active calories burned (platform: mobile_app)
  - `sensor.23117ra68g_basal_body_temperature`: Basal body temperature (platform: mobile_app)
  - `sensor.23117ra68g_basal_metabolic_rate`: Basal metabolic rate (platform: mobile_app)
  - `sensor.23117ra68g_blood_glucose`: Blood glucose (platform: mobile_app)
  - `sensor.23117ra68g_body_fat`: Body fat (platform: mobile_app)
  - `sensor.23117ra68g_body_temperature`: Body temperature (platform: mobile_app)
  - `sensor.23117ra68g_body_water_mass`: Body water mass (platform: mobile_app)
  - `sensor.23117ra68g_bone_mass`: Bone mass (platform: mobile_app)
  - `sensor.23117ra68g_diastolic_blood_pressure`: Diastolic blood pressure (platform: mobile_app)
  - `sensor.23117ra68g_daily_distance`: Daily distance (platform: mobile_app)
  - `sensor.23117ra68g_daily_elevation_gained`: Daily elevation gained (platform: mobile_app)
  - `sensor.23117ra68g_daily_floors`: Daily floors (platform: mobile_app)
  - `sensor.23117ra68g_heart_rate`: Heart rate (platform: mobile_app)
  - `sensor.23117ra68g_heart_rate_variability`: Heart rate variability (platform: mobile_app)
  - `sensor.23117ra68g_height`: Height (platform: mobile_app)
  - `sensor.23117ra68g_daily_hydration`: Daily hydration (platform: mobile_app)
  - `sensor.23117ra68g_lean_body_mass`: Lean body mass (platform: mobile_app)
  - `sensor.23117ra68g_oxygen_saturation`: Oxygen saturation (platform: mobile_app)
  - `sensor.23117ra68g_respiratory_rate`: Respiratory rate (platform: mobile_app)
  - `sensor.23117ra68g_resting_heart_rate`: Resting heart rate (platform: mobile_app)
  - `sensor.23117ra68g_sleep_duration`: Sleep duration (platform: mobile_app)
  - `sensor.23117ra68g_daily_steps`: Daily steps (platform: mobile_app)
  - `sensor.23117ra68g_systolic_blood_pressure`: Systolic blood pressure (platform: mobile_app)
  - `sensor.23117ra68g_total_calories_burned`: Total calories burned (platform: mobile_app)
  - `sensor.23117ra68g_vo2_max`: VO2 max (platform: mobile_app)
  - `sensor.23117ra68g_weight`: Weight (platform: mobile_app)
  - `binary_sensor.23117ra68g_device_locked`: Device locked (platform: mobile_app)
  - `binary_sensor.23117ra68g_device_secure`: Device secure (platform: mobile_app)
  - `binary_sensor.23117ra68g_keyguard_locked`: Keyguard locked (platform: mobile_app)
  - `binary_sensor.23117ra68g_keyguard_secure`: Keyguard secure (platform: mobile_app)
  - `sensor.23117ra68g_last_used_app`: Last used app (platform: mobile_app)
  - `sensor.23117ra68g_last_reboot`: Last reboot (platform: mobile_app)
  - `sensor.23117ra68g_last_update_trigger`: Last update trigger (platform: mobile_app)
  - `sensor.23117ra68g_light_sensor`: Light sensor (platform: mobile_app)
  - `binary_sensor.23117ra68g_high_accuracy_mode`: High accuracy mode (platform: mobile_app)
  - `sensor.23117ra68g_high_accuracy_update_interval`: High accuracy update interval (platform: mobile_app)
  - `binary_sensor.23117ra68g_mobile_data`: Mobile data (platform: mobile_app)
  - `binary_sensor.23117ra68g_mobile_data_roaming`: Mobile data roaming (platform: mobile_app)
  - `sensor.23117ra68g_wi_fi_connection`: Wi-Fi connection (platform: mobile_app)
  - `sensor.23117ra68g_wi_fi_bssid`: Wi-Fi BSSID (platform: mobile_app)
  - `sensor.23117ra68g_wi_fi_ip_address`: Wi-Fi IP address (platform: mobile_app)
  - `sensor.23117ra68g_wi_fi_link_speed`: Wi-Fi link speed (platform: mobile_app)
  - `binary_sensor.23117ra68g_wi_fi_state`: Wi-Fi state (platform: mobile_app)
  - `sensor.23117ra68g_wi_fi_frequency`: Wi-Fi frequency (platform: mobile_app)
  - `sensor.23117ra68g_wi_fi_signal_strength`: Wi-Fi signal strength (platform: mobile_app)
  - `sensor.23117ra68g_public_ip_address`: Public IP address (platform: mobile_app)
  - `binary_sensor.23117ra68g_hotspot_state`: Hotspot state (platform: mobile_app)
  - `sensor.23117ra68g_network_type`: Network type (platform: mobile_app)
  - `sensor.23117ra68g_ipv6_addresses`: IPv6 addresses (platform: mobile_app)
  - `binary_sensor.23117ra68g_nfc_state`: NFC state (platform: mobile_app)
  - `sensor.23117ra68g_next_alarm`: Next alarm (platform: mobile_app)
  - `sensor.23117ra68g_last_notification`: Last notification (platform: mobile_app)
  - `sensor.23117ra68g_last_removed_notification`: Last removed notification (platform: mobile_app)
  - `sensor.23117ra68g_active_notification_count`: Active notification count (platform: mobile_app)
  - `sensor.23117ra68g_media_session`: Media session (platform: mobile_app)
  - `sensor.23117ra68g_phone_state`: Phone state (platform: mobile_app)
  - `sensor.23117ra68g_sim_1`: SIM 1 (platform: mobile_app)
  - `sensor.23117ra68g_sim_2`: SIM 2 (platform: mobile_app)
  - `sensor.23117ra68g_signal_strength_sim_1`: Signal strength (SIM 1) (platform: mobile_app)
  - `sensor.23117ra68g_signal_strength_sim_2`: Signal strength (SIM 2) (platform: mobile_app)
  - `sensor.23117ra68g_data_network_type_sim_1`: Data network type (SIM 1) (platform: mobile_app)
  - `sensor.23117ra68g_data_network_type_sim_2`: Data network type (SIM 2) (platform: mobile_app)
  - `binary_sensor.23117ra68g_interactive`: Interactive (platform: mobile_app)
  - `binary_sensor.23117ra68g_doze_mode`: Doze mode (platform: mobile_app)
  - `binary_sensor.23117ra68g_power_save`: Power save (platform: mobile_app)
  - `sensor.23117ra68g_proximity_sensor`: Proximity sensor (platform: mobile_app)
  - `sensor.23117ra68g_steps_sensor`: Steps sensor (platform: mobile_app)
  - `sensor.23117ra68g_internal_storage`: Internal storage (platform: mobile_app)
  - `sensor.23117ra68g_external_storage`: External storage (platform: mobile_app)
  - `sensor.23117ra68g_current_time_zone`: Current time zone (platform: mobile_app)
  - `sensor.23117ra68g_mobile_rx_gb`: Mobile Rx GB (platform: mobile_app)
  - `sensor.23117ra68g_mobile_tx_gb`: Mobile Tx GB (platform: mobile_app)
  - `sensor.23117ra68g_total_rx_gb`: Total Rx GB (platform: mobile_app)
  - `sensor.23117ra68g_total_tx_gb`: Total Tx GB (platform: mobile_app)

#### 26. mini-graph-card (`82062678e08df1c4f4f6d1e1bc28d98d`)
- **Manufacturer / Model:** kalkih / plugin
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.mini_graph_card_update`: Update (platform: hacs)
  - `switch.mini_graph_card_pre_release`: Pre-release (platform: hacs)

#### 27. Samba share (`fb19fc776973fd1e36dac460a3625b4d`)
- **Manufacturer / Model:** Official apps / Home Assistant App
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 12.11.0
- **Related Entities (7):**
  - `binary_sensor.samba_share_running`: Running (platform: hassio)
  - `sensor.samba_share_version`: Version (platform: hassio)
  - `sensor.samba_share_newest_version`: Newest version (platform: hassio)
  - `sensor.samba_share_cpu_percent`: CPU percent (platform: hassio)
  - `sensor.samba_share_memory_percent`: Memory percent (platform: hassio)
  - `switch.samba_share`: None (platform: hassio)
  - `update.samba_share_update`: Update (platform: hassio)

#### 28. Tailscale (`04d27c69021efceb8fda2f9921a6a7cf`)
- **Manufacturer / Model:** Home Assistant Community Apps / Home Assistant App
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 0.30.7
- **Related Entities (7):**
  - `binary_sensor.tailscale_running`: Running (platform: hassio)
  - `sensor.tailscale_version`: Version (platform: hassio)
  - `sensor.tailscale_newest_version`: Newest version (platform: hassio)
  - `sensor.tailscale_cpu_percent`: CPU percent (platform: hassio)
  - `sensor.tailscale_memory_percent`: Memory percent (platform: hassio)
  - `switch.tailscale`: None (platform: hassio)
  - `update.tailscale_update`: Update (platform: hassio)

#### 29. SmartIR (`750ef99e66b80d7e4af4d399089cdc2a`)
- **Manufacturer / Model:** smartHomeHub / integration
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.smartir_update`: Update (platform: hacs)
  - `switch.smartir_pre_release`: Pre-release (platform: hacs)

#### 30. openWakeWord (`f7927a67750b80f2992af60870c1cfc9`)
- **Manufacturer / Model:** Official apps / Home Assistant App
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 2.1.1
- **Related Entities (7):**
  - `binary_sensor.openwakeword_running`: Running (platform: hassio)
  - `sensor.openwakeword_version`: Version (platform: hassio)
  - `sensor.openwakeword_newest_version`: Newest version (platform: hassio)
  - `sensor.openwakeword_cpu_percent`: CPU percent (platform: hassio)
  - `sensor.openwakeword_memory_percent`: Memory percent (platform: hassio)
  - `switch.openwakeword`: None (platform: hassio)
  - `update.openwakeword_update`: Update (platform: hassio)

#### 31. Piper (`6ad12444e134bf01b388d11d1ef7dd44`)
- **Manufacturer / Model:** Official apps / Home Assistant App
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 2.5.4
- **Related Entities (7):**
  - `binary_sensor.piper_running`: Running (platform: hassio)
  - `sensor.piper_version`: Version (platform: hassio)
  - `sensor.piper_newest_version`: Newest version (platform: hassio)
  - `sensor.piper_cpu_percent`: CPU percent (platform: hassio)
  - `sensor.piper_memory_percent`: Memory percent (platform: hassio)
  - `switch.piper`: None (platform: hassio)
  - `update.piper_update`: Update (platform: hassio)

#### 32. Whisper (`e5736b49e8b56c1653e50e0b635e6d18`)
- **Manufacturer / Model:** Official apps / Home Assistant App
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 3.6.1
- **Related Entities (7):**
  - `binary_sensor.whisper_running`: Running (platform: hassio)
  - `sensor.whisper_version`: Version (platform: hassio)
  - `sensor.whisper_newest_version`: Newest version (platform: hassio)
  - `sensor.whisper_cpu_percent`: CPU percent (platform: hassio)
  - `sensor.whisper_memory_percent`: Memory percent (platform: hassio)
  - `switch.whisper`: None (platform: hassio)
  - `update.whisper_update`: Update (platform: hassio)

#### 33. Assist Microphone (`da13b1d89552e53055ef016a8e1ce4a6`)
- **Manufacturer / Model:** Official apps / Home Assistant App
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 1.3.0
- **Related Entities (7):**
  - `binary_sensor.assist_microphone_running`: Running (platform: hassio)
  - `sensor.assist_microphone_version`: Version (platform: hassio)
  - `sensor.assist_microphone_newest_version`: Newest version (platform: hassio)
  - `sensor.assist_microphone_cpu_percent`: CPU percent (platform: hassio)
  - `sensor.assist_microphone_memory_percent`: Memory percent (platform: hassio)
  - `switch.assist_microphone`: None (platform: hassio)
  - `update.assist_microphone_update`: Update (platform: hassio)

#### 34. Kiosk Mode (`f68ef5283c76b4c7e67f31fb31f84385`)
- **Manufacturer / Model:** NemesisRE / plugin
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.kiosk_mode_update`: Update (platform: hacs)
  - `switch.kiosk_mode_pre_release`: Pre-release (platform: hacs)

#### 35. Silent remotes card (`ad49906e98b754eb730bb44a49ec43e5`)
- **Manufacturer / Model:** silentbil / plugin
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.silent_remotes_card_update`: Update (platform: hacs)
  - `switch.silent_remotes_card_pre_release`: Pre-release (platform: hacs)

#### 36. Check Button Card (`b2aa8badaba5c97ea1a2258a290ed1cf`)
- **Manufacturer / Model:** custom-cards / plugin
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.check_button_card_update`: Update (platform: hacs)
  - `switch.check_button_card_pre_release`: Pre-release (platform: hacs)

#### 37. Home Assistant Google Drive Backup (`2479552cd49bb997b9ea3462be7ff59c`)
- **Manufacturer / Model:** Home Assistant Google Drive Backup Repository / Home Assistant App
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 0.112.1
- **Related Entities (7):**
  - `binary_sensor.home_assistant_google_drive_backup_running`: Running (platform: hassio)
  - `sensor.home_assistant_google_drive_backup_version`: Version (platform: hassio)
  - `sensor.home_assistant_google_drive_backup_newest_version`: Newest version (platform: hassio)
  - `sensor.home_assistant_google_drive_backup_cpu_percent`: CPU percent (platform: hassio)
  - `sensor.home_assistant_google_drive_backup_memory_percent`: Memory percent (platform: hassio)
  - `switch.home_assistant_google_drive_backup`: None (platform: hassio)
  - `update.home_assistant_google_drive_backup_update`: Update (platform: hassio)

#### 38. Z2M IR Bridge (`7d03a67e7a6a578e9e6456b20e481b7d`)
- **Manufacturer / Model:** tomer2526 / integration
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.z2m_ir_bridge_update`: Update (platform: hacs)
  - `switch.z2m_ir_bridge_pre_release`: Pre-release (platform: hacs)

#### 39. Zigbee Mesh Map Card (`10fd3546c6bb0f0b74807ab72c519f64`)
- **Manufacturer / Model:** lubomir-moric / plugin
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.zigbee_mesh_map_card_update`: Update (platform: hacs)
  - `switch.zigbee_mesh_map_card_pre_release`: Pre-release (platform: hacs)

#### 40. Everyday (`3d95a37ac29cb050e2c578d4ca565a0b`)
- **Manufacturer / Model:** f17mkx / theme
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.everyday_update`: Update (platform: hacs)
  - `switch.everyday_pre_release`: Pre-release (platform: hacs)

#### 41. Rhasspy Assistant (`4d5284e44fe913831d48e1de5b69e140`)
- **Manufacturer / Model:** Rhasspy Hass.IO Add-Ons / Home Assistant App
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 2.5.11
- **Related Entities (7):**
  - `binary_sensor.rhasspy_assistant_running`: Running (platform: hassio)
  - `sensor.rhasspy_assistant_version`: Version (platform: hassio)
  - `sensor.rhasspy_assistant_newest_version`: Newest version (platform: hassio)
  - `sensor.rhasspy_assistant_cpu_percent`: CPU percent (platform: hassio)
  - `sensor.rhasspy_assistant_memory_percent`: Memory percent (platform: hassio)
  - `switch.rhasspy_assistant`: None (platform: hassio)
  - `update.rhasspy_assistant_update`: Update (platform: hassio)

#### 42. Rhasspy Junior (`0fbcbb9ca31013b0dfff6595de9a2227`)
- **Manufacturer / Model:** Rhasspy Hass.IO Add-Ons / Home Assistant App
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 0.2.2
- **Related Entities (7):**
  - `binary_sensor.rhasspy_junior_running`: Running (platform: hassio)
  - `sensor.rhasspy_junior_version`: Version (platform: hassio)
  - `sensor.rhasspy_junior_newest_version`: Newest version (platform: hassio)
  - `sensor.rhasspy_junior_cpu_percent`: CPU percent (platform: hassio)
  - `sensor.rhasspy_junior_memory_percent`: Memory percent (platform: hassio)
  - `switch.rhasspy_junior`: None (platform: hassio)
  - `update.rhasspy_junior_update`: Update (platform: hassio)

#### 43. dell mini tabelt 92 (`4a45912602f110a66f160ddc47e9d0f3`)
- **Manufacturer / Model:** rockchip / px30_evb
- **Integration:** `mobile_app`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 27
- **Related Entities (74):**
  - `device_tracker.px30_evb`:  (platform: mobile_app)
  - `notify.px30_evb`: None (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_os_version`: OS version (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_security_patch`: Security patch (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_current_version`: Current version (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_app_rx_gb`: App Rx GB (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_app_tx_gb`: App Tx GB (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_app_memory`: App memory (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_app_inactive`: App inactive (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_app_importance`: App importance (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_ringer_mode`: Ringer mode (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_audio_mode`: Audio mode (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_headphones`: Headphones (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_mic_muted`: Mic muted (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_speakerphone`: Speakerphone (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_music_active`: Music active (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_volume_level_alarm`: Volume level alarm (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_volume_level_call`: Volume level call (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_volume_level_music`: Volume level music (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_volume_level_ringer`: Volume level ringer (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_volume_level_notification`: Volume level notification (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_volume_level_system`: Volume level system (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_volume_level_dtmf`: Volume level DTMF (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_volume_level_accessibility`: Volume level accessibility (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_battery_level`: Battery level (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_battery_state`: Battery state (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_is_charging`: Is charging (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_charger_type`: Charger type (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_battery_health`: Battery health (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_battery_temperature`: Battery temperature (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_battery_power`: Battery power (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_bluetooth_connection`: Bluetooth connection (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_bluetooth_state`: Bluetooth state (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_ble_transmitter`: BLE transmitter (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_beacon_monitor`: Beacon monitor (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_screen_brightness`: Screen brightness (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_screen_off_timeout`: Screen off timeout (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_screen_orientation`: Screen orientation (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_screen_rotation`: Screen rotation (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_do_not_disturb_sensor`: Do Not Disturb sensor (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_work_profile`: Work profile (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_device_locked`: Device locked (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_device_secure`: Device secure (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_keyguard_locked`: Keyguard locked (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_keyguard_secure`: Keyguard secure (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_last_used_app`: Last used app (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_last_reboot`: Last reboot (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_last_update_trigger`: Last update trigger (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_light_sensor`: Light sensor (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_wi_fi_connection`: Wi-Fi connection (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_wi_fi_bssid`: Wi-Fi BSSID (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_wi_fi_ip_address`: Wi-Fi IP address (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_wi_fi_link_speed`: Wi-Fi link speed (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_wi_fi_state`: Wi-Fi state (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_wi_fi_frequency`: Wi-Fi frequency (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_wi_fi_signal_strength`: Wi-Fi signal strength (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_public_ip_address`: Public IP address (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_hotspot_state`: Hotspot state (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_network_type`: Network type (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_ipv6_addresses`: IPv6 addresses (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_next_alarm`: Next alarm (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_last_notification`: Last notification (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_last_removed_notification`: Last removed notification (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_active_notification_count`: Active notification count (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_media_session`: Media session (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_interactive`: Interactive (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_doze_mode`: Doze mode (platform: mobile_app)
  - `binary_sensor.dell_mini_tabelt_92_power_save`: Power save (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_proximity_sensor`: Proximity sensor (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_internal_storage`: Internal storage (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_external_storage`: External storage (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_current_time_zone`: Current time zone (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_total_rx_gb`: Total Rx GB (platform: mobile_app)
  - `sensor.dell_mini_tabelt_92_total_tx_gb`: Total Tx GB (platform: mobile_app)

#### 44. PN16 (`0fe2d93bbc6ccf5725a8e738227e88a1`)
- **Manufacturer / Model:** ZSVIOT / 16-way controller
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** Zigbee2MQTT 2.14.3
- **Related Entities (24):**
  - `select.pn16_power_on_behavior`: Power-on behavior (platform: mqtt)
  - `switch.pn16_all`: All (platform: mqtt)
  - `select.pn16_switch_type_l1_l8`: Switch type 1-8 channels l1_l8 (platform: mqtt)
  - `switch.pn16_l1`: meeting room lamp (platform: mqtt)
  - `switch.pn16_l2`: L2 (platform: mqtt)
  - `switch.pn16_l3`: L3 (platform: mqtt)
  - `switch.pn16_l4`: L4 (platform: mqtt)
  - `switch.pn16_l5`: L5 (platform: mqtt)
  - `switch.pn16_l6`: L6 (platform: mqtt)
  - `switch.pn16_l7`: L7 (platform: mqtt)
  - `switch.pn16_l8`: L8 (platform: mqtt)
  - `select.pn16_switch_type_l9_l16`: Switch type 9-16 channels l9_l16 (platform: mqtt)
  - `switch.pn16_l9`: L9 (platform: mqtt)
  - `switch.pn16_l10`: L10 (platform: mqtt)
  - `select.pn16_switch_mode_l11_l12`: Mode 11-12 channels l11_l12 (platform: mqtt)
  - `switch.pn16_l11`: L11 (platform: mqtt)
  - `switch.pn16_l12`: L12 (platform: mqtt)
  - `select.pn16_switch_mode_l13_l14`: Mode 13-14 channels l13_l14 (platform: mqtt)
  - `switch.pn16_l13`: L13 (platform: mqtt)
  - `switch.pn16_l14`: L14 (platform: mqtt)
  - `select.pn16_switch_mode_l15_l16`: Mode 15-16 channels l15_l16 (platform: mqtt)
  - `switch.pn16_l15`: L15 (platform: mqtt)
  - `switch.pn16_l16`: L16 (platform: mqtt)
  - `sensor.0x44e2f8fffebea206_linkquality`: Linkquality (platform: mqtt)

#### 45. Domolux (`1952deeb6b224ec0880e6ea118c3768e`)
- **Manufacturer / Model:** Open-Meteo / Unknown
- **Integration:** `open_meteo`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (1):**
  - `weather.domolux`: None (platform: open_meteo)

#### 46. ir_blaster_met (`1f0cc516f90c11a115bc16bb7e59f6dc`)
- **Manufacturer / Model:** Moes / Universal smart IR remote control
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** metarea
- **Firmware / Software Version:** Zigbee2MQTT 2.14.3
- **Related Entities (8):**
  - `button.ir_blaster_met_switch_learn_ir_code`: Learn ir code (platform: mqtt)
  - `sensor.ir_blaster_met_learned_ir_code`: Learned ir code (platform: mqtt)
  - `infrared.ir_blaster_met_learned_ir_timings`: Learned ir timings (platform: mqtt)
  - `text.ir_blaster_met_ir_code_to_send`: Ir code to send (platform: mqtt)
  - `infrared.ir_blaster_met_ir_emitter`: Ir emitter (platform: mqtt)
  - `sensor.ir_blaster_met_battery`: Battery (platform: mqtt)
  - `sensor.ir_blaster_met_voltage`: Voltage (platform: mqtt)
  - `sensor.0xf0fd45fffef7e41c_linkquality`: Linkquality (platform: mqtt)

#### 47. Duck DNS (`8eabf710244429915b09942dc5c6b620`)
- **Manufacturer / Model:** Official apps / Home Assistant App
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 2.0.1
- **Related Entities (7):**
  - `binary_sensor.duck_dns_running`: Running (platform: hassio)
  - `sensor.duck_dns_version`: Version (platform: hassio)
  - `sensor.duck_dns_newest_version`: Newest version (platform: hassio)
  - `sensor.duck_dns_cpu_percent`: CPU percent (platform: hassio)
  - `sensor.duck_dns_memory_percent`: Memory percent (platform: hassio)
  - `switch.duck_dns`: None (platform: hassio)
  - `update.duck_dns_update`: Update (platform: hassio)

#### 48. assist microphone (`2b66704d93d3e34369fe3530e36d11f2`)
- **Manufacturer / Model:** Unknown / Unknown
- **Integration:** `wyoming`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (8):**
  - `assist_satellite.assist_microphone`: None (platform: wyoming)
  - `binary_sensor.assist_microphone_assist_in_progress`: Assist in progress (platform: wyoming)
  - `select.assist_microphone_assistant`: Assistant (platform: wyoming)
  - `select.assist_microphone_noise_suppression_level`: Noise suppression level (platform: wyoming)
  - `select.assist_microphone_finished_speaking_detection`: Finished speaking detection (platform: wyoming)
  - `switch.assist_microphone_mute`: Mute (platform: wyoming)
  - `number.assist_microphone_auto_gain`: Auto gain (platform: wyoming)
  - `number.assist_microphone_mic_volume`: Mic volume (platform: wyoming)

#### 49. Cloudflared (`333790843fb0d21102d51b1308b5a0de`)
- **Manufacturer / Model:** Unofficial Home Assistant Apps (Add-ons) / Home Assistant App
- **Integration:** `hassio`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 7.0.22
- **Related Entities (7):**
  - `binary_sensor.cloudflared_running`: Running (platform: hassio)
  - `sensor.cloudflared_version`: Version (platform: hassio)
  - `sensor.cloudflared_newest_version`: Newest version (platform: hassio)
  - `sensor.cloudflared_cpu_percent`: CPU percent (platform: hassio)
  - `sensor.cloudflared_memory_percent`: Memory percent (platform: hassio)
  - `switch.cloudflared`: None (platform: hassio)
  - `update.cloudflared_update`: Update (platform: hassio)

#### 50. HA-MCP — Manage Home Assistant with AI (`32f93cd36701cbe9081cce8a69aa9ef7`)
- **Manufacturer / Model:** homeassistant-ai / integration
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.ha_mcp_custom_component_update`: Update (platform: hacs)
  - `switch.ha_mcp_custom_component_pre_release`: Pre-release (platform: hacs)

#### 51. HA-MCP Server (`2982feeb2ef6bdf54a049a26a0dd49a5`)
- **Manufacturer / Model:** homeassistant-ai / ha-mcp (in-process server)
- **Integration:** `ha_mcp_tools`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 9.2.0
- **Related Entities (1):**
  - `switch.ha_mcp_server_access`: Access (platform: ha_mcp_tools)

#### 52. ir_blaster_fet (`03eb707054a468660586c332a2107048`)
- **Manufacturer / Model:** Moes / Universal smart IR remote control
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** Zigbee2MQTT 2.14.3
- **Related Entities (8):**
  - `button.ir_blaster_fet_switch_learn_ir_code`: Learn ir code (platform: mqtt)
  - `sensor.ir_blaster_fet_learned_ir_code`: Learned ir code (platform: mqtt)
  - `infrared.ir_blaster_fet_learned_ir_timings`: Learned ir timings (platform: mqtt)
  - `text.ir_blaster_fet_ir_code_to_send`: Ir code to send (platform: mqtt)
  - `infrared.ir_blaster_fet_ir_emitter`: Ir emitter (platform: mqtt)
  - `sensor.ir_blaster_fet_battery`: Battery (platform: mqtt)
  - `sensor.ir_blaster_fet_voltage`: Voltage (platform: mqtt)
  - `sensor.ir_blaster_fet_linkquality`: Linkquality (platform: mqtt)

#### 53. ir_blaster_wrk (`07cfdf3a43f47a040b31c5dd1853b9ad`)
- **Manufacturer / Model:** Moes / Universal smart IR remote control
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** Zigbee2MQTT 2.14.3
- **Related Entities (8):**
  - `button.ir_blaster_wrk_switch_learn_ir_code`: Learn ir code (platform: mqtt)
  - `sensor.ir_blaster_wrk_learned_ir_code`: Learned ir code (platform: mqtt)
  - `infrared.ir_blaster_wrk_learned_ir_timings`: Learned ir timings (platform: mqtt)
  - `text.ir_blaster_wrk_ir_code_to_send`: Ir code to send (platform: mqtt)
  - `infrared.ir_blaster_wrk_ir_emitter`: Ir emitter (platform: mqtt)
  - `sensor.ir_blaster_wrk_battery`: Battery (platform: mqtt)
  - `sensor.ir_blaster_wrk_voltage`: Voltage (platform: mqtt)
  - `sensor.0x20a716fffe488d8d_linkquality`: Linkquality (platform: mqtt)

#### 54. SM-S918U1 (`e20dd9867d9bcda711216fce9aefdd58`)
- **Manufacturer / Model:** samsung / SM-S918U1
- **Integration:** `mobile_app`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 35
- **Related Entities (134):**
  - `device_tracker.sm_s918u1`:  (platform: mobile_app)
  - `notify.sm_s918u1`: None (platform: mobile_app)
  - `sensor.sm_s918u1_detected_activity`: Detected activity (platform: mobile_app)
  - `sensor.sm_s918u1_sleep_confidence`: Sleep confidence (platform: mobile_app)
  - `sensor.sm_s918u1_sleep_segment`: Sleep segment (platform: mobile_app)
  - `binary_sensor.sm_s918u1_android_auto`: Android Auto (platform: mobile_app)
  - `sensor.sm_s918u1_os_version`: OS version (platform: mobile_app)
  - `sensor.sm_s918u1_security_patch`: Security patch (platform: mobile_app)
  - `sensor.sm_s918u1_current_version`: Current version (platform: mobile_app)
  - `sensor.sm_s918u1_app_rx_gb`: App Rx GB (platform: mobile_app)
  - `sensor.sm_s918u1_app_tx_gb`: App Tx GB (platform: mobile_app)
  - `sensor.sm_s918u1_app_memory`: App memory (platform: mobile_app)
  - `binary_sensor.sm_s918u1_app_inactive`: App inactive (platform: mobile_app)
  - `sensor.sm_s918u1_app_standby_bucket`: App standby bucket (platform: mobile_app)
  - `sensor.sm_s918u1_app_importance`: App importance (platform: mobile_app)
  - `sensor.sm_s918u1_ringer_mode`: Ringer mode (platform: mobile_app)
  - `sensor.sm_s918u1_audio_mode`: Audio mode (platform: mobile_app)
  - `binary_sensor.sm_s918u1_headphones`: Headphones (platform: mobile_app)
  - `binary_sensor.sm_s918u1_mic_muted`: Mic muted (platform: mobile_app)
  - `binary_sensor.sm_s918u1_speakerphone`: Speakerphone (platform: mobile_app)
  - `binary_sensor.sm_s918u1_music_active`: Music active (platform: mobile_app)
  - `sensor.sm_s918u1_volume_level_alarm`: Volume level alarm (platform: mobile_app)
  - `sensor.sm_s918u1_volume_level_call`: Volume level call (platform: mobile_app)
  - `sensor.sm_s918u1_volume_level_music`: Volume level music (platform: mobile_app)
  - `sensor.sm_s918u1_volume_level_ringer`: Volume level ringer (platform: mobile_app)
  - `sensor.sm_s918u1_volume_level_notification`: Volume level notification (platform: mobile_app)
  - `sensor.sm_s918u1_volume_level_system`: Volume level system (platform: mobile_app)
  - `sensor.sm_s918u1_volume_level_dtmf`: Volume level DTMF (platform: mobile_app)
  - `sensor.sm_s918u1_volume_level_accessibility`: Volume level accessibility (platform: mobile_app)
  - `sensor.sm_s918u1_battery_level`: Battery level (platform: mobile_app)
  - `sensor.sm_s918u1_battery_state`: Battery state (platform: mobile_app)
  - `binary_sensor.sm_s918u1_is_charging`: Is charging (platform: mobile_app)
  - `sensor.sm_s918u1_charger_type`: Charger type (platform: mobile_app)
  - `sensor.sm_s918u1_battery_health`: Battery health (platform: mobile_app)
  - `sensor.sm_s918u1_battery_temperature`: Battery temperature (platform: mobile_app)
  - `sensor.sm_s918u1_battery_power`: Battery power (platform: mobile_app)
  - `sensor.sm_s918u1_remaining_charge_time`: Remaining charge time (platform: mobile_app)
  - `sensor.sm_s918u1_battery_cycle_count`: Battery cycle count (platform: mobile_app)
  - `sensor.sm_s918u1_bluetooth_connection`: Bluetooth connection (platform: mobile_app)
  - `binary_sensor.sm_s918u1_bluetooth_state`: Bluetooth state (platform: mobile_app)
  - `sensor.sm_s918u1_ble_transmitter`: BLE transmitter (platform: mobile_app)
  - `sensor.sm_s918u1_beacon_monitor`: Beacon monitor (platform: mobile_app)
  - `sensor.sm_s918u1_car_battery`: Car battery (platform: mobile_app)
  - `sensor.sm_s918u1_car_name`: Car name (platform: mobile_app)
  - `sensor.sm_s918u1_car_charging_status`: Car charging status (platform: mobile_app)
  - `sensor.sm_s918u1_car_ev_connector_type`: Car EV connector type (platform: mobile_app)
  - `sensor.sm_s918u1_car_fuel`: Car fuel (platform: mobile_app)
  - `sensor.sm_s918u1_car_fuel_type`: Car fuel type (platform: mobile_app)
  - `sensor.sm_s918u1_car_odometer`: Car odometer (platform: mobile_app)
  - `sensor.sm_s918u1_car_speed`: Car speed (platform: mobile_app)
  - `sensor.sm_s918u1_car_range_remaining`: Car range remaining (platform: mobile_app)
  - `sensor.sm_s918u1_screen_brightness`: Screen brightness (platform: mobile_app)
  - `sensor.sm_s918u1_screen_off_timeout`: Screen off timeout (platform: mobile_app)
  - `sensor.sm_s918u1_screen_orientation`: Screen orientation (platform: mobile_app)
  - `sensor.sm_s918u1_screen_rotation`: Screen rotation (platform: mobile_app)
  - `sensor.sm_s918u1_do_not_disturb_sensor`: Do Not Disturb sensor (platform: mobile_app)
  - `sensor.sm_s918u1_accent_color`: Accent color (platform: mobile_app)
  - `binary_sensor.sm_s918u1_work_profile`: Work profile (platform: mobile_app)
  - `sensor.sm_s918u1_geocoded_location`: Geocoded location (platform: mobile_app)
  - `sensor.sm_s918u1_active_calories_burned`: Active calories burned (platform: mobile_app)
  - `sensor.sm_s918u1_basal_body_temperature`: Basal body temperature (platform: mobile_app)
  - `sensor.sm_s918u1_basal_metabolic_rate`: Basal metabolic rate (platform: mobile_app)
  - `sensor.sm_s918u1_blood_glucose`: Blood glucose (platform: mobile_app)
  - `sensor.sm_s918u1_body_fat`: Body fat (platform: mobile_app)
  - `sensor.sm_s918u1_body_temperature`: Body temperature (platform: mobile_app)
  - `sensor.sm_s918u1_body_water_mass`: Body water mass (platform: mobile_app)
  - `sensor.sm_s918u1_bone_mass`: Bone mass (platform: mobile_app)
  - `sensor.sm_s918u1_diastolic_blood_pressure`: Diastolic blood pressure (platform: mobile_app)
  - `sensor.sm_s918u1_daily_distance`: Daily distance (platform: mobile_app)
  - `sensor.sm_s918u1_daily_elevation_gained`: Daily elevation gained (platform: mobile_app)
  - `sensor.sm_s918u1_daily_floors`: Daily floors (platform: mobile_app)
  - `sensor.sm_s918u1_heart_rate`: Heart rate (platform: mobile_app)
  - `sensor.sm_s918u1_heart_rate_variability`: Heart rate variability (platform: mobile_app)
  - `sensor.sm_s918u1_height`: Height (platform: mobile_app)
  - `sensor.sm_s918u1_daily_hydration`: Daily hydration (platform: mobile_app)
  - `sensor.sm_s918u1_lean_body_mass`: Lean body mass (platform: mobile_app)
  - `sensor.sm_s918u1_oxygen_saturation`: Oxygen saturation (platform: mobile_app)
  - `sensor.sm_s918u1_respiratory_rate`: Respiratory rate (platform: mobile_app)
  - `sensor.sm_s918u1_resting_heart_rate`: Resting heart rate (platform: mobile_app)
  - `sensor.sm_s918u1_sleep_duration`: Sleep duration (platform: mobile_app)
  - `sensor.sm_s918u1_daily_steps`: Daily steps (platform: mobile_app)
  - `sensor.sm_s918u1_systolic_blood_pressure`: Systolic blood pressure (platform: mobile_app)
  - `sensor.sm_s918u1_total_calories_burned`: Total calories burned (platform: mobile_app)
  - `sensor.sm_s918u1_vo2_max`: VO2 max (platform: mobile_app)
  - `sensor.sm_s918u1_weight`: Weight (platform: mobile_app)
  - `binary_sensor.sm_s918u1_device_locked`: Device locked (platform: mobile_app)
  - `binary_sensor.sm_s918u1_device_secure`: Device secure (platform: mobile_app)
  - `binary_sensor.sm_s918u1_keyguard_locked`: Keyguard locked (platform: mobile_app)
  - `binary_sensor.sm_s918u1_keyguard_secure`: Keyguard secure (platform: mobile_app)
  - `sensor.sm_s918u1_last_used_app`: Last used app (platform: mobile_app)
  - `sensor.sm_s918u1_last_reboot`: Last reboot (platform: mobile_app)
  - `sensor.sm_s918u1_last_update_trigger`: Last update trigger (platform: mobile_app)
  - `sensor.sm_s918u1_light_sensor`: Light sensor (platform: mobile_app)
  - `binary_sensor.sm_s918u1_high_accuracy_mode`: High accuracy mode (platform: mobile_app)
  - `sensor.sm_s918u1_high_accuracy_update_interval`: High accuracy update interval (platform: mobile_app)
  - `binary_sensor.sm_s918u1_mobile_data`: Mobile data (platform: mobile_app)
  - `binary_sensor.sm_s918u1_mobile_data_roaming`: Mobile data roaming (platform: mobile_app)
  - `sensor.sm_s918u1_wi_fi_connection`: Wi-Fi connection (platform: mobile_app)
  - `sensor.sm_s918u1_wi_fi_bssid`: Wi-Fi BSSID (platform: mobile_app)
  - `sensor.sm_s918u1_wi_fi_ip_address`: Wi-Fi IP address (platform: mobile_app)
  - `sensor.sm_s918u1_wi_fi_link_speed`: Wi-Fi link speed (platform: mobile_app)
  - `binary_sensor.sm_s918u1_wi_fi_state`: Wi-Fi state (platform: mobile_app)
  - `sensor.sm_s918u1_wi_fi_frequency`: Wi-Fi frequency (platform: mobile_app)
  - `sensor.sm_s918u1_wi_fi_signal_strength`: Wi-Fi signal strength (platform: mobile_app)
  - `sensor.sm_s918u1_public_ip_address`: Public IP address (platform: mobile_app)
  - `binary_sensor.sm_s918u1_hotspot_state`: Hotspot state (platform: mobile_app)
  - `sensor.sm_s918u1_network_type`: Network type (platform: mobile_app)
  - `sensor.sm_s918u1_ipv6_addresses`: IPv6 addresses (platform: mobile_app)
  - `binary_sensor.sm_s918u1_nfc_state`: NFC state (platform: mobile_app)
  - `sensor.sm_s918u1_next_alarm`: Next alarm (platform: mobile_app)
  - `sensor.sm_s918u1_last_notification`: Last notification (platform: mobile_app)
  - `sensor.sm_s918u1_last_removed_notification`: Last removed notification (platform: mobile_app)
  - `sensor.sm_s918u1_active_notification_count`: Active notification count (platform: mobile_app)
  - `sensor.sm_s918u1_media_session`: Media session (platform: mobile_app)
  - `sensor.sm_s918u1_phone_state`: Phone state (platform: mobile_app)
  - `sensor.sm_s918u1_sim_1`: SIM 1 (platform: mobile_app)
  - `sensor.sm_s918u1_sim_2`: SIM 2 (platform: mobile_app)
  - `sensor.sm_s918u1_signal_strength_sim_1`: Signal strength (SIM 1) (platform: mobile_app)
  - `sensor.sm_s918u1_signal_strength_sim_2`: Signal strength (SIM 2) (platform: mobile_app)
  - `sensor.sm_s918u1_data_network_type_sim_1`: Data network type (SIM 1) (platform: mobile_app)
  - `sensor.sm_s918u1_data_network_type_sim_2`: Data network type (SIM 2) (platform: mobile_app)
  - `binary_sensor.sm_s918u1_interactive`: Interactive (platform: mobile_app)
  - `binary_sensor.sm_s918u1_doze_mode`: Doze mode (platform: mobile_app)
  - `binary_sensor.sm_s918u1_power_save`: Power save (platform: mobile_app)
  - `sensor.sm_s918u1_pressure_sensor`: Pressure sensor (platform: mobile_app)
  - `sensor.sm_s918u1_proximity_sensor`: Proximity sensor (platform: mobile_app)
  - `sensor.sm_s918u1_steps_sensor`: Steps sensor (platform: mobile_app)
  - `sensor.sm_s918u1_internal_storage`: Internal storage (platform: mobile_app)
  - `sensor.sm_s918u1_external_storage`: External storage (platform: mobile_app)
  - `sensor.sm_s918u1_current_time_zone`: Current time zone (platform: mobile_app)
  - `sensor.sm_s918u1_mobile_rx_gb`: Mobile Rx GB (platform: mobile_app)
  - `sensor.sm_s918u1_mobile_tx_gb`: Mobile Tx GB (platform: mobile_app)
  - `sensor.sm_s918u1_total_rx_gb`: Total Rx GB (platform: mobile_app)
  - `sensor.sm_s918u1_total_tx_gb`: Total Tx GB (platform: mobile_app)

#### 55. Zm108m (`2628764f4f159b65f981d917b82b71d8`)
- **Manufacturer / Model:** Moes / Smart curtain switch module
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 1.0.1
- **Related Entities (9):**
  - `cover.zm108m`: hallwayrideaux (platform: mqtt)
  - `sensor.zm108m_moving`: Moving (platform: mqtt)
  - `switch.zm108m_motor_reversal`: Motor reversal (platform: mqtt)
  - `switch.zm108m_calibration`: Calibration (platform: mqtt)
  - `sensor.zm108m_calibration_time`: Calibration time (platform: mqtt)
  - `select.zm108m_indicator_mode`: Indicator mode (platform: mqtt)
  - `switch.zm108m_backlight_mode`: Backlight mode (platform: mqtt)
  - `select.zm108m_switch_type_curtain`: Switch type curtain (platform: mqtt)
  - `sensor.0xb43522fffee045d0_linkquality`: Linkquality (platform: mqtt)

#### 56. WP101 (`af05b18af15d718736190d8accbfcfe5`)
- **Manufacturer / Model:** PRETECH / WP101
- **Integration:** `mobile_app`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 34
- **Related Entities (120):**
  - `device_tracker.wp103`:  (platform: mobile_app)
  - `notify.wp103`: None (platform: mobile_app)
  - `sensor.wp101_current_version`: Current version (platform: mobile_app)
  - `sensor.wp101_app_rx_gb`: App Rx GB (platform: mobile_app)
  - `sensor.wp101_app_tx_gb`: App Tx GB (platform: mobile_app)
  - `sensor.wp101_app_memory`: App memory (platform: mobile_app)
  - `binary_sensor.wp101_app_inactive`: App inactive (platform: mobile_app)
  - `sensor.wp101_app_standby_bucket`: App standby bucket (platform: mobile_app)
  - `sensor.wp101_app_importance`: App importance (platform: mobile_app)
  - `sensor.wp101_car_battery`: Car battery (platform: mobile_app)
  - `sensor.wp101_car_name`: Car name (platform: mobile_app)
  - `sensor.wp101_car_charging_status`: Car charging status (platform: mobile_app)
  - `sensor.wp101_car_ev_connector_type`: Car EV connector type (platform: mobile_app)
  - `sensor.wp101_car_fuel`: Car fuel (platform: mobile_app)
  - `sensor.wp101_car_fuel_type`: Car fuel type (platform: mobile_app)
  - `sensor.wp101_car_odometer`: Car odometer (platform: mobile_app)
  - `sensor.wp101_car_speed`: Car speed (platform: mobile_app)
  - `sensor.wp101_car_range_remaining`: Car range remaining (platform: mobile_app)
  - `binary_sensor.wp101_work_profile`: Work profile (platform: mobile_app)
  - `sensor.wp101_accent_color`: Accent color (platform: mobile_app)
  - `sensor.wp101_geocoded_location`: Geocoded location (platform: mobile_app)
  - `sensor.wp101_active_calories_burned`: Active calories burned (platform: mobile_app)
  - `sensor.wp101_basal_body_temperature`: Basal body temperature (platform: mobile_app)
  - `sensor.wp101_basal_metabolic_rate`: Basal metabolic rate (platform: mobile_app)
  - `sensor.wp101_blood_glucose`: Blood glucose (platform: mobile_app)
  - `sensor.wp101_body_fat`: Body fat (platform: mobile_app)
  - `sensor.wp101_body_temperature`: Body temperature (platform: mobile_app)
  - `sensor.wp101_body_water_mass`: Body water mass (platform: mobile_app)
  - `sensor.wp101_bone_mass`: Bone mass (platform: mobile_app)
  - `sensor.wp101_diastolic_blood_pressure`: Diastolic blood pressure (platform: mobile_app)
  - `sensor.wp101_daily_distance`: Daily distance (platform: mobile_app)
  - `sensor.wp101_daily_elevation_gained`: Daily elevation gained (platform: mobile_app)
  - `sensor.wp101_daily_floors`: Daily floors (platform: mobile_app)
  - `sensor.wp101_heart_rate`: Heart rate (platform: mobile_app)
  - `sensor.wp101_heart_rate_variability`: Heart rate variability (platform: mobile_app)
  - `sensor.wp101_height`: Height (platform: mobile_app)
  - `sensor.wp101_daily_hydration`: Daily hydration (platform: mobile_app)
  - `sensor.wp101_lean_body_mass`: Lean body mass (platform: mobile_app)
  - `sensor.wp101_oxygen_saturation`: Oxygen saturation (platform: mobile_app)
  - `sensor.wp101_respiratory_rate`: Respiratory rate (platform: mobile_app)
  - `sensor.wp101_resting_heart_rate`: Resting heart rate (platform: mobile_app)
  - `sensor.wp101_sleep_duration`: Sleep duration (platform: mobile_app)
  - `sensor.wp101_daily_steps`: Daily steps (platform: mobile_app)
  - `sensor.wp101_systolic_blood_pressure`: Systolic blood pressure (platform: mobile_app)
  - `sensor.wp101_total_calories_burned`: Total calories burned (platform: mobile_app)
  - `sensor.wp101_vo2_max`: VO2 max (platform: mobile_app)
  - `sensor.wp101_weight`: Weight (platform: mobile_app)
  - `sensor.wp101_last_used_app`: Last used app (platform: mobile_app)
  - `sensor.wp101_last_notification`: Last notification (platform: mobile_app)
  - `sensor.wp101_last_removed_notification`: Last removed notification (platform: mobile_app)
  - `sensor.wp101_active_notification_count`: Active notification count (platform: mobile_app)
  - `sensor.wp101_media_session`: Media session (platform: mobile_app)
  - `sensor.wp101_detected_activity`: Detected activity (platform: mobile_app)
  - `sensor.wp101_sleep_confidence`: Sleep confidence (platform: mobile_app)
  - `sensor.wp101_sleep_segment`: Sleep segment (platform: mobile_app)
  - `binary_sensor.wp101_android_auto`: Android Auto (platform: mobile_app)
  - `binary_sensor.wp101_high_accuracy_mode`: High accuracy mode (platform: mobile_app)
  - `sensor.wp101_high_accuracy_update_interval`: High accuracy update interval (platform: mobile_app)
  - `sensor.wp101_os_version`: OS version (platform: mobile_app)
  - `sensor.wp101_security_patch`: Security patch (platform: mobile_app)
  - `sensor.wp101_ringer_mode`: Ringer mode (platform: mobile_app)
  - `sensor.wp101_audio_mode`: Audio mode (platform: mobile_app)
  - `binary_sensor.wp101_headphones`: Headphones (platform: mobile_app)
  - `binary_sensor.wp101_mic_muted`: Mic muted (platform: mobile_app)
  - `binary_sensor.wp101_speakerphone`: Speakerphone (platform: mobile_app)
  - `binary_sensor.wp101_music_active`: Music active (platform: mobile_app)
  - `sensor.wp101_volume_level_alarm`: Volume level alarm (platform: mobile_app)
  - `sensor.wp101_volume_level_call`: Volume level call (platform: mobile_app)
  - `sensor.wp101_volume_level_music`: Volume level music (platform: mobile_app)
  - `sensor.wp101_volume_level_ringer`: Volume level ringer (platform: mobile_app)
  - `sensor.wp101_volume_level_notification`: Volume level notification (platform: mobile_app)
  - `sensor.wp101_volume_level_system`: Volume level system (platform: mobile_app)
  - `sensor.wp101_volume_level_dtmf`: Volume level DTMF (platform: mobile_app)
  - `sensor.wp101_volume_level_accessibility`: Volume level accessibility (platform: mobile_app)
  - `sensor.wp101_battery_level`: Battery level (platform: mobile_app)
  - `sensor.wp101_battery_state`: Battery state (platform: mobile_app)
  - `binary_sensor.wp101_is_charging`: Is charging (platform: mobile_app)
  - `sensor.wp101_charger_type`: Charger type (platform: mobile_app)
  - `sensor.wp101_battery_health`: Battery health (platform: mobile_app)
  - `sensor.wp101_battery_temperature`: Battery temperature (platform: mobile_app)
  - `sensor.wp101_battery_power`: Battery power (platform: mobile_app)
  - `sensor.wp101_remaining_charge_time`: Remaining charge time (platform: mobile_app)
  - `sensor.wp101_battery_cycle_count`: Battery cycle count (platform: mobile_app)
  - `sensor.wp101_bluetooth_connection`: Bluetooth connection (platform: mobile_app)
  - `binary_sensor.wp101_bluetooth_state`: Bluetooth state (platform: mobile_app)
  - `sensor.wp101_ble_transmitter`: BLE transmitter (platform: mobile_app)
  - `sensor.wp101_beacon_monitor`: Beacon monitor (platform: mobile_app)
  - `sensor.wp101_do_not_disturb_sensor`: Do Not Disturb sensor (platform: mobile_app)
  - `sensor.wp101_screen_brightness`: Screen brightness (platform: mobile_app)
  - `sensor.wp101_screen_off_timeout`: Screen off timeout (platform: mobile_app)
  - `sensor.wp101_screen_orientation`: Screen orientation (platform: mobile_app)
  - `sensor.wp101_screen_rotation`: Screen rotation (platform: mobile_app)
  - `binary_sensor.wp101_device_locked`: Device locked (platform: mobile_app)
  - `binary_sensor.wp101_device_secure`: Device secure (platform: mobile_app)
  - `binary_sensor.wp101_keyguard_locked`: Keyguard locked (platform: mobile_app)
  - `binary_sensor.wp101_keyguard_secure`: Keyguard secure (platform: mobile_app)
  - `sensor.wp101_last_reboot`: Last reboot (platform: mobile_app)
  - `sensor.wp101_last_update_trigger`: Last update trigger (platform: mobile_app)
  - `sensor.wp101_light_sensor`: Light sensor (platform: mobile_app)
  - `sensor.wp101_wi_fi_connection`: Wi-Fi connection (platform: mobile_app)
  - `sensor.wp101_wi_fi_bssid`: Wi-Fi BSSID (platform: mobile_app)
  - `sensor.wp101_wi_fi_ip_address`: Wi-Fi IP address (platform: mobile_app)
  - `sensor.wp101_wi_fi_link_speed`: Wi-Fi link speed (platform: mobile_app)
  - `binary_sensor.wp101_wi_fi_state`: Wi-Fi state (platform: mobile_app)
  - `sensor.wp101_wi_fi_frequency`: Wi-Fi frequency (platform: mobile_app)
  - `sensor.wp101_wi_fi_signal_strength`: Wi-Fi signal strength (platform: mobile_app)
  - `sensor.wp101_public_ip_address`: Public IP address (platform: mobile_app)
  - `binary_sensor.wp101_hotspot_state`: Hotspot state (platform: mobile_app)
  - `sensor.wp101_network_type`: Network type (platform: mobile_app)
  - `sensor.wp101_ipv6_addresses`: IPv6 addresses (platform: mobile_app)
  - `sensor.wp101_next_alarm`: Next alarm (platform: mobile_app)
  - `binary_sensor.wp101_interactive`: Interactive (platform: mobile_app)
  - `binary_sensor.wp101_doze_mode`: Doze mode (platform: mobile_app)
  - `binary_sensor.wp101_power_save`: Power save (platform: mobile_app)
  - `sensor.wp101_proximity_sensor`: Proximity sensor (platform: mobile_app)
  - `sensor.wp101_internal_storage`: Internal storage (platform: mobile_app)
  - `sensor.wp101_external_storage`: External storage (platform: mobile_app)
  - `sensor.wp101_current_time_zone`: Current time zone (platform: mobile_app)
  - `sensor.wp101_total_rx_gb`: Total Rx GB (platform: mobile_app)
  - `sensor.wp101_total_tx_gb`: Total Tx GB (platform: mobile_app)

#### 57. Samsung (`cfb78ad9a9cf137e0b31f202b58a0bfa`)
- **Manufacturer / Model:** samsung / SM-X230
- **Integration:** `mobile_app`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 36
- **Related Entities (114):**
  - `device_tracker.sm_x230`:  (platform: mobile_app)
  - `notify.sm_x230`: None (platform: mobile_app)
  - `sensor.samsung_detected_activity`: Detected activity (platform: mobile_app)
  - `sensor.samsung_sleep_confidence`: Sleep confidence (platform: mobile_app)
  - `sensor.samsung_sleep_segment`: Sleep segment (platform: mobile_app)
  - `binary_sensor.samsung_android_auto`: Android Auto (platform: mobile_app)
  - `sensor.samsung_os_version`: OS version (platform: mobile_app)
  - `sensor.samsung_security_patch`: Security patch (platform: mobile_app)
  - `sensor.samsung_current_version`: Current version (platform: mobile_app)
  - `sensor.samsung_app_rx_gb`: App Rx GB (platform: mobile_app)
  - `sensor.samsung_app_tx_gb`: App Tx GB (platform: mobile_app)
  - `sensor.samsung_app_memory`: App memory (platform: mobile_app)
  - `binary_sensor.samsung_app_inactive`: App inactive (platform: mobile_app)
  - `sensor.samsung_app_standby_bucket`: App standby bucket (platform: mobile_app)
  - `sensor.samsung_app_importance`: App importance (platform: mobile_app)
  - `sensor.samsung_ringer_mode`: Ringer mode (platform: mobile_app)
  - `sensor.samsung_audio_mode`: Audio mode (platform: mobile_app)
  - `binary_sensor.samsung_headphones`: Headphones (platform: mobile_app)
  - `binary_sensor.samsung_mic_muted`: Mic muted (platform: mobile_app)
  - `binary_sensor.samsung_speakerphone`: Speakerphone (platform: mobile_app)
  - `binary_sensor.samsung_music_active`: Music active (platform: mobile_app)
  - `sensor.samsung_volume_level_alarm`: Volume level alarm (platform: mobile_app)
  - `sensor.samsung_volume_level_call`: Volume level call (platform: mobile_app)
  - `sensor.samsung_volume_level_music`: Volume level music (platform: mobile_app)
  - `sensor.samsung_volume_level_ringer`: Volume level ringer (platform: mobile_app)
  - `sensor.samsung_volume_level_notification`: Volume level notification (platform: mobile_app)
  - `sensor.samsung_volume_level_system`: Volume level system (platform: mobile_app)
  - `sensor.samsung_volume_level_dtmf`: Volume level DTMF (platform: mobile_app)
  - `sensor.samsung_volume_level_accessibility`: Volume level accessibility (platform: mobile_app)
  - `sensor.samsung_battery_level`: Battery level (platform: mobile_app)
  - `sensor.samsung_battery_state`: Battery state (platform: mobile_app)
  - `binary_sensor.samsung_is_charging`: Is charging (platform: mobile_app)
  - `sensor.samsung_charger_type`: Charger type (platform: mobile_app)
  - `sensor.samsung_battery_health`: Battery health (platform: mobile_app)
  - `sensor.samsung_battery_temperature`: Battery temperature (platform: mobile_app)
  - `sensor.samsung_battery_power`: Battery power (platform: mobile_app)
  - `sensor.samsung_remaining_charge_time`: Remaining charge time (platform: mobile_app)
  - `sensor.samsung_battery_cycle_count`: Battery cycle count (platform: mobile_app)
  - `sensor.samsung_bluetooth_connection`: Bluetooth connection (platform: mobile_app)
  - `binary_sensor.samsung_bluetooth_state`: Bluetooth state (platform: mobile_app)
  - `sensor.samsung_ble_transmitter`: BLE transmitter (platform: mobile_app)
  - `sensor.samsung_beacon_monitor`: Beacon monitor (platform: mobile_app)
  - `sensor.samsung_car_battery`: Car battery (platform: mobile_app)
  - `sensor.samsung_car_name`: Car name (platform: mobile_app)
  - `sensor.samsung_car_charging_status`: Car charging status (platform: mobile_app)
  - `sensor.samsung_car_ev_connector_type`: Car EV connector type (platform: mobile_app)
  - `sensor.samsung_car_fuel`: Car fuel (platform: mobile_app)
  - `sensor.samsung_car_fuel_type`: Car fuel type (platform: mobile_app)
  - `sensor.samsung_car_odometer`: Car odometer (platform: mobile_app)
  - `sensor.samsung_car_speed`: Car speed (platform: mobile_app)
  - `sensor.samsung_car_range_remaining`: Car range remaining (platform: mobile_app)
  - `sensor.samsung_screen_brightness`: Screen brightness (platform: mobile_app)
  - `sensor.samsung_screen_off_timeout`: Screen off timeout (platform: mobile_app)
  - `sensor.samsung_screen_orientation`: Screen orientation (platform: mobile_app)
  - `sensor.samsung_screen_rotation`: Screen rotation (platform: mobile_app)
  - `sensor.samsung_do_not_disturb_sensor`: Do Not Disturb sensor (platform: mobile_app)
  - `sensor.samsung_accent_color`: Accent color (platform: mobile_app)
  - `binary_sensor.samsung_work_profile`: Work profile (platform: mobile_app)
  - `sensor.samsung_geocoded_location`: Geocoded location (platform: mobile_app)
  - `sensor.samsung_active_calories_burned`: Active calories burned (platform: mobile_app)
  - `sensor.samsung_basal_body_temperature`: Basal body temperature (platform: mobile_app)
  - `sensor.samsung_basal_metabolic_rate`: Basal metabolic rate (platform: mobile_app)
  - `sensor.samsung_blood_glucose`: Blood glucose (platform: mobile_app)
  - `sensor.samsung_body_fat`: Body fat (platform: mobile_app)
  - `sensor.samsung_body_temperature`: Body temperature (platform: mobile_app)
  - `sensor.samsung_body_water_mass`: Body water mass (platform: mobile_app)
  - `sensor.samsung_bone_mass`: Bone mass (platform: mobile_app)
  - `sensor.samsung_diastolic_blood_pressure`: Diastolic blood pressure (platform: mobile_app)
  - `sensor.samsung_daily_distance`: Daily distance (platform: mobile_app)
  - `sensor.samsung_daily_elevation_gained`: Daily elevation gained (platform: mobile_app)
  - `sensor.samsung_daily_floors`: Daily floors (platform: mobile_app)
  - `sensor.samsung_heart_rate`: Heart rate (platform: mobile_app)
  - `sensor.samsung_heart_rate_variability`: Heart rate variability (platform: mobile_app)
  - `sensor.samsung_height`: Height (platform: mobile_app)
  - `sensor.samsung_daily_hydration`: Daily hydration (platform: mobile_app)
  - `sensor.samsung_lean_body_mass`: Lean body mass (platform: mobile_app)
  - `sensor.samsung_oxygen_saturation`: Oxygen saturation (platform: mobile_app)
  - `sensor.samsung_respiratory_rate`: Respiratory rate (platform: mobile_app)
  - `sensor.samsung_resting_heart_rate`: Resting heart rate (platform: mobile_app)
  - `sensor.samsung_sleep_duration`: Sleep duration (platform: mobile_app)
  - `sensor.samsung_daily_steps`: Daily steps (platform: mobile_app)
  - `sensor.samsung_systolic_blood_pressure`: Systolic blood pressure (platform: mobile_app)
  - `sensor.samsung_total_calories_burned`: Total calories burned (platform: mobile_app)
  - `sensor.samsung_vo2_max`: VO2 max (platform: mobile_app)
  - `sensor.samsung_weight`: Weight (platform: mobile_app)
  - `binary_sensor.samsung_device_locked`: Device locked (platform: mobile_app)
  - `binary_sensor.samsung_device_secure`: Device secure (platform: mobile_app)
  - `binary_sensor.samsung_keyguard_locked`: Keyguard locked (platform: mobile_app)
  - `binary_sensor.samsung_keyguard_secure`: Keyguard secure (platform: mobile_app)
  - `sensor.samsung_last_used_app`: Last used app (platform: mobile_app)
  - `sensor.samsung_last_reboot`: Last reboot (platform: mobile_app)
  - `sensor.samsung_light_sensor`: Light sensor (platform: mobile_app)
  - `sensor.samsung_wi_fi_connection`: Wi-Fi connection (platform: mobile_app)
  - `sensor.samsung_wi_fi_bssid`: Wi-Fi BSSID (platform: mobile_app)
  - `sensor.samsung_wi_fi_ip_address`: Wi-Fi IP address (platform: mobile_app)
  - `sensor.samsung_wi_fi_link_speed`: Wi-Fi link speed (platform: mobile_app)
  - `binary_sensor.samsung_wi_fi_state`: Wi-Fi state (platform: mobile_app)
  - `sensor.samsung_wi_fi_frequency`: Wi-Fi frequency (platform: mobile_app)
  - `sensor.samsung_wi_fi_signal_strength`: Wi-Fi signal strength (platform: mobile_app)
  - `sensor.samsung_public_ip_address`: Public IP address (platform: mobile_app)
  - `binary_sensor.samsung_hotspot_state`: Hotspot state (platform: mobile_app)
  - `sensor.samsung_network_type`: Network type (platform: mobile_app)
  - `sensor.samsung_ipv6_addresses`: IPv6 addresses (platform: mobile_app)
  - `sensor.samsung_next_alarm`: Next alarm (platform: mobile_app)
  - `sensor.samsung_media_session`: Media session (platform: mobile_app)
  - `binary_sensor.samsung_interactive`: Interactive (platform: mobile_app)
  - `binary_sensor.samsung_doze_mode`: Doze mode (platform: mobile_app)
  - `binary_sensor.samsung_power_save`: Power save (platform: mobile_app)
  - `sensor.samsung_steps_sensor`: Steps sensor (platform: mobile_app)
  - `sensor.samsung_internal_storage`: Internal storage (platform: mobile_app)
  - `sensor.samsung_external_storage`: External storage (platform: mobile_app)
  - `sensor.samsung_current_time_zone`: Current time zone (platform: mobile_app)
  - `sensor.samsung_total_rx_gb`: Total Rx GB (platform: mobile_app)
  - `sensor.samsung_total_tx_gb`: Total Tx GB (platform: mobile_app)

#### 58. Swipe Card (`d884c541e6ffc38ae89fa3e1939ccc4a`)
- **Manufacturer / Model:** bramkragten / plugin
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.swipe_card_update`: Update (platform: hacs)
  - `switch.swipe_card_pre_release_2`: Pre-release (platform: hacs)

#### 59. Swipe Card (`7728079425e550f9ed7bd4e69db51220`)
- **Manufacturer / Model:** keshavdv / plugin
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.swipe_card_update_2`: Update (platform: hacs)
  - `switch.swipe_card_pre_release`: Pre-release (platform: hacs)

#### 60. door_wrk (`019386b186cb3ff0b26cd3083356af7a`)
- **Manufacturer / Model:** Moes / Door/window alarm sensor
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** Zigbee2MQTT 2.14.3
- **Related Entities (6):**
  - `binary_sensor.door_wrk_contact`: None (platform: mqtt)
  - `sensor.door_wrk_battery`: Battery (platform: mqtt)
  - `sensor.door_wrk_voltage`: Voltage (platform: mqtt)
  - `binary_sensor.door_wrk_tamper`: Tamper (platform: mqtt)
  - `binary_sensor.door_wrk_battery_low`: Battery (platform: mqtt)
  - `sensor.0xa4c138f8a7c5f9c0_linkquality`: Linkquality (platform: mqtt)

#### 61. door_kit (`7a23629f265b7dc4e7dd3bed250b03c4`)
- **Manufacturer / Model:** Moes / Door/window alarm sensor
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** Zigbee2MQTT 2.14.3
- **Related Entities (6):**
  - `binary_sensor.door_kit_contact`: None (platform: mqtt)
  - `sensor.door_kit_battery`: Battery (platform: mqtt)
  - `sensor.door_kit_voltage`: Voltage (platform: mqtt)
  - `binary_sensor.door_kit_tamper`: Tamper (platform: mqtt)
  - `binary_sensor.door_kit_battery_low`: Battery (platform: mqtt)
  - `sensor.0xa4c1388091218d82_linkquality`: Linkquality (platform: mqtt)

#### 62. door_hal (`15bd188d47de1e421088cc5b8febaa25`)
- **Manufacturer / Model:** Moes / Door/window alarm sensor
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** Zigbee2MQTT 2.14.3
- **Related Entities (6):**
  - `binary_sensor.door_hal_contact`: None (platform: mqtt)
  - `sensor.door_hal_battery`: Battery (platform: mqtt)
  - `sensor.door_hal_voltage`: Voltage (platform: mqtt)
  - `binary_sensor.door_hal_tamper`: Tamper (platform: mqtt)
  - `binary_sensor.door_hal_battery_low`: Battery (platform: mqtt)
  - `sensor.0xa4c1383b4b03af05_linkquality`: Linkquality (platform: mqtt)

#### 63. door_fet (`078dc26168701d963baed3f0f089ebce`)
- **Manufacturer / Model:** Moes / Door/window alarm sensor
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** Zigbee2MQTT 2.14.3
- **Related Entities (6):**
  - `binary_sensor.door_fet_contact`: None (platform: mqtt)
  - `sensor.door_fet_battery`: Battery (platform: mqtt)
  - `sensor.door_fet_voltage`: Voltage (platform: mqtt)
  - `binary_sensor.door_fet_tamper`: Tamper (platform: mqtt)
  - `binary_sensor.door_fet_battery_low`: Battery (platform: mqtt)
  - `sensor.0xa4c138c299229d73_linkquality`: Linkquality (platform: mqtt)

#### 64. itel A665L (`ebd103a40e80d354bd9ae43827d8ca0f`)
- **Manufacturer / Model:** ITEL / itel A665L
- **Integration:** `mobile_app`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** 33
- **Related Entities (103):**
  - `device_tracker.itel_a665l`:  (platform: mobile_app)
  - `notify.itel_a665l`: None (platform: mobile_app)
  - `sensor.itel_a665l_current_version`: Current version (platform: mobile_app)
  - `sensor.itel_a665l_app_rx_gb`: App Rx GB (platform: mobile_app)
  - `sensor.itel_a665l_app_tx_gb`: App Tx GB (platform: mobile_app)
  - `sensor.itel_a665l_app_memory`: App memory (platform: mobile_app)
  - `binary_sensor.itel_a665l_app_inactive`: App inactive (platform: mobile_app)
  - `sensor.itel_a665l_app_standby_bucket`: App standby bucket (platform: mobile_app)
  - `sensor.itel_a665l_app_importance`: App importance (platform: mobile_app)
  - `sensor.itel_a665l_car_battery`: Car battery (platform: mobile_app)
  - `sensor.itel_a665l_car_name`: Car name (platform: mobile_app)
  - `sensor.itel_a665l_car_charging_status`: Car charging status (platform: mobile_app)
  - `sensor.itel_a665l_car_ev_connector_type`: Car EV connector type (platform: mobile_app)
  - `sensor.itel_a665l_car_fuel`: Car fuel (platform: mobile_app)
  - `sensor.itel_a665l_car_fuel_type`: Car fuel type (platform: mobile_app)
  - `sensor.itel_a665l_car_odometer`: Car odometer (platform: mobile_app)
  - `sensor.itel_a665l_car_speed`: Car speed (platform: mobile_app)
  - `sensor.itel_a665l_car_range_remaining`: Car range remaining (platform: mobile_app)
  - `binary_sensor.itel_a665l_work_profile`: Work profile (platform: mobile_app)
  - `sensor.itel_a665l_accent_color`: Accent color (platform: mobile_app)
  - `sensor.itel_a665l_tonal_palette`: Tonal palette (platform: mobile_app)
  - `sensor.itel_a665l_geocoded_location`: Geocoded location (platform: mobile_app)
  - `sensor.itel_a665l_last_used_app`: Last used app (platform: mobile_app)
  - `sensor.itel_a665l_last_notification`: Last notification (platform: mobile_app)
  - `sensor.itel_a665l_last_removed_notification`: Last removed notification (platform: mobile_app)
  - `sensor.itel_a665l_active_notification_count`: Active notification count (platform: mobile_app)
  - `sensor.itel_a665l_media_session`: Media session (platform: mobile_app)
  - `sensor.itel_a665l_detected_activity`: Detected activity (platform: mobile_app)
  - `sensor.itel_a665l_sleep_confidence`: Sleep confidence (platform: mobile_app)
  - `sensor.itel_a665l_sleep_segment`: Sleep segment (platform: mobile_app)
  - `binary_sensor.itel_a665l_android_auto`: Android Auto (platform: mobile_app)
  - `binary_sensor.itel_a665l_high_accuracy_mode`: High accuracy mode (platform: mobile_app)
  - `sensor.itel_a665l_high_accuracy_update_interval`: High accuracy update interval (platform: mobile_app)
  - `sensor.itel_a665l_os_version`: OS version (platform: mobile_app)
  - `sensor.itel_a665l_security_patch`: Security patch (platform: mobile_app)
  - `sensor.itel_a665l_ringer_mode`: Ringer mode (platform: mobile_app)
  - `sensor.itel_a665l_audio_mode`: Audio mode (platform: mobile_app)
  - `binary_sensor.itel_a665l_headphones`: Headphones (platform: mobile_app)
  - `binary_sensor.itel_a665l_mic_muted`: Mic muted (platform: mobile_app)
  - `binary_sensor.itel_a665l_speakerphone`: Speakerphone (platform: mobile_app)
  - `binary_sensor.itel_a665l_music_active`: Music active (platform: mobile_app)
  - `sensor.itel_a665l_volume_level_alarm`: Volume level alarm (platform: mobile_app)
  - `sensor.itel_a665l_volume_level_call`: Volume level call (platform: mobile_app)
  - `sensor.itel_a665l_volume_level_music`: Volume level music (platform: mobile_app)
  - `sensor.itel_a665l_volume_level_ringer`: Volume level ringer (platform: mobile_app)
  - `sensor.itel_a665l_volume_level_notification`: Volume level notification (platform: mobile_app)
  - `sensor.itel_a665l_volume_level_system`: Volume level system (platform: mobile_app)
  - `sensor.itel_a665l_volume_level_dtmf`: Volume level DTMF (platform: mobile_app)
  - `sensor.itel_a665l_volume_level_accessibility`: Volume level accessibility (platform: mobile_app)
  - `sensor.itel_a665l_battery_level`: Battery level (platform: mobile_app)
  - `sensor.itel_a665l_battery_state`: Battery state (platform: mobile_app)
  - `binary_sensor.itel_a665l_is_charging`: Is charging (platform: mobile_app)
  - `sensor.itel_a665l_charger_type`: Charger type (platform: mobile_app)
  - `sensor.itel_a665l_battery_health`: Battery health (platform: mobile_app)
  - `sensor.itel_a665l_battery_temperature`: Battery temperature (platform: mobile_app)
  - `sensor.itel_a665l_battery_power`: Battery power (platform: mobile_app)
  - `sensor.itel_a665l_remaining_charge_time`: Remaining charge time (platform: mobile_app)
  - `sensor.itel_a665l_bluetooth_connection`: Bluetooth connection (platform: mobile_app)
  - `binary_sensor.itel_a665l_bluetooth_state`: Bluetooth state (platform: mobile_app)
  - `sensor.itel_a665l_ble_transmitter`: BLE transmitter (platform: mobile_app)
  - `sensor.itel_a665l_beacon_monitor`: Beacon monitor (platform: mobile_app)
  - `sensor.itel_a665l_do_not_disturb_sensor`: Do Not Disturb sensor (platform: mobile_app)
  - `sensor.itel_a665l_screen_brightness`: Screen brightness (platform: mobile_app)
  - `sensor.itel_a665l_screen_off_timeout`: Screen off timeout (platform: mobile_app)
  - `sensor.itel_a665l_screen_orientation`: Screen orientation (platform: mobile_app)
  - `sensor.itel_a665l_screen_rotation`: Screen rotation (platform: mobile_app)
  - `binary_sensor.itel_a665l_device_locked`: Device locked (platform: mobile_app)
  - `binary_sensor.itel_a665l_device_secure`: Device secure (platform: mobile_app)
  - `binary_sensor.itel_a665l_keyguard_locked`: Keyguard locked (platform: mobile_app)
  - `binary_sensor.itel_a665l_keyguard_secure`: Keyguard secure (platform: mobile_app)
  - `sensor.itel_a665l_last_reboot`: Last reboot (platform: mobile_app)
  - `sensor.itel_a665l_last_update_trigger`: Last update trigger (platform: mobile_app)
  - `binary_sensor.itel_a665l_mobile_data`: Mobile data (platform: mobile_app)
  - `binary_sensor.itel_a665l_mobile_data_roaming`: Mobile data roaming (platform: mobile_app)
  - `sensor.itel_a665l_wi_fi_connection`: Wi-Fi connection (platform: mobile_app)
  - `sensor.itel_a665l_wi_fi_bssid`: Wi-Fi BSSID (platform: mobile_app)
  - `sensor.itel_a665l_wi_fi_ip_address`: Wi-Fi IP address (platform: mobile_app)
  - `sensor.itel_a665l_wi_fi_link_speed`: Wi-Fi link speed (platform: mobile_app)
  - `binary_sensor.itel_a665l_wi_fi_state`: Wi-Fi state (platform: mobile_app)
  - `sensor.itel_a665l_wi_fi_frequency`: Wi-Fi frequency (platform: mobile_app)
  - `sensor.itel_a665l_wi_fi_signal_strength`: Wi-Fi signal strength (platform: mobile_app)
  - `sensor.itel_a665l_public_ip_address`: Public IP address (platform: mobile_app)
  - `binary_sensor.itel_a665l_hotspot_state`: Hotspot state (platform: mobile_app)
  - `sensor.itel_a665l_network_type`: Network type (platform: mobile_app)
  - `sensor.itel_a665l_ipv6_addresses`: IPv6 addresses (platform: mobile_app)
  - `sensor.itel_a665l_next_alarm`: Next alarm (platform: mobile_app)
  - `sensor.itel_a665l_phone_state`: Phone state (platform: mobile_app)
  - `sensor.itel_a665l_sim_1`: SIM 1 (platform: mobile_app)
  - `sensor.itel_a665l_sim_2`: SIM 2 (platform: mobile_app)
  - `sensor.itel_a665l_signal_strength_sim_1`: Signal strength (SIM 1) (platform: mobile_app)
  - `sensor.itel_a665l_signal_strength_sim_2`: Signal strength (SIM 2) (platform: mobile_app)
  - `sensor.itel_a665l_data_network_type_sim_1`: Data network type (SIM 1) (platform: mobile_app)
  - `sensor.itel_a665l_data_network_type_sim_2`: Data network type (SIM 2) (platform: mobile_app)
  - `binary_sensor.itel_a665l_interactive`: Interactive (platform: mobile_app)
  - `binary_sensor.itel_a665l_doze_mode`: Doze mode (platform: mobile_app)
  - `binary_sensor.itel_a665l_power_save`: Power save (platform: mobile_app)
  - `sensor.itel_a665l_proximity_sensor`: Proximity sensor (platform: mobile_app)
  - `sensor.itel_a665l_steps_sensor`: Steps sensor (platform: mobile_app)
  - `sensor.itel_a665l_internal_storage`: Internal storage (platform: mobile_app)
  - `sensor.itel_a665l_external_storage`: External storage (platform: mobile_app)
  - `sensor.itel_a665l_current_time_zone`: Current time zone (platform: mobile_app)
  - `sensor.itel_a665l_total_rx_gb`: Total Rx GB (platform: mobile_app)
  - `sensor.itel_a665l_total_tx_gb`: Total Tx GB (platform: mobile_app)

#### 65. NeonPlan 3D (`526d591af56bf6fdc17d0e2c1115f530`)
- **Manufacturer / Model:** Mastershort / integration
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.neonplan_3d_update`: Update (platform: hacs)
  - `switch.neonplan_3d_pre_release`: Pre-release (platform: hacs)

#### 66. Zigbee Health (`10bd982aab661a62ae89b9c07c9ea80d`)
- **Manufacturer / Model:** Mastershort / integration
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.zigbee_health_update`: Update (platform: hacs)
  - `switch.zigbee_health_pre_release`: Pre-release (platform: hacs)

#### 67. Zigbee Health (Zigbee2MQTT) (`9bd6157de9bcbe16938eecd607959fb3`)
- **Manufacturer / Model:** Zigbee Health / Zigbee2MQTT
- **Integration:** `zigbee_health`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (18):**
  - `binary_sensor.zigbee_health_zigbee2mqtt_problems`: Problems (platform: zigbee_health)
  - `button.zigbee_health_zigbee2mqtt_scan_network_now`: Scan network now (platform: zigbee_health)
  - `button.zigbee_health_zigbee2mqtt_analyse_now`: Analyse now (platform: zigbee_health)
  - `sensor.zigbee_health_zigbee2mqtt_network_health`: Network health (platform: zigbee_health)
  - `sensor.zigbee_health_zigbee2mqtt_status`: Status (platform: zigbee_health)
  - `sensor.zigbee_health_zigbee2mqtt_devices`: Devices (platform: zigbee_health)
  - `sensor.zigbee_health_zigbee2mqtt_routers`: Routers (platform: zigbee_health)
  - `sensor.zigbee_health_zigbee2mqtt_end_devices`: End devices (platform: zigbee_health)
  - `sensor.zigbee_health_zigbee2mqtt_always_on_routers`: Always-on routers (platform: zigbee_health)
  - `sensor.zigbee_health_zigbee2mqtt_part_time_routers`: Part-time routers (platform: zigbee_health)
  - `sensor.zigbee_health_zigbee2mqtt_offline`: Offline (platform: zigbee_health)
  - `sensor.zigbee_health_zigbee2mqtt_dead`: Dead (platform: zigbee_health)
  - `sensor.zigbee_health_zigbee2mqtt_battery_critical`: Battery critical (platform: zigbee_health)
  - `sensor.zigbee_health_zigbee2mqtt_weak_links`: Weak links (platform: zigbee_health)
  - `sensor.zigbee_health_zigbee2mqtt_open_findings`: Open findings (platform: zigbee_health)
  - `sensor.zigbee_health_zigbee2mqtt_messages_s_total`: Messages/s total (platform: zigbee_health)
  - `sensor.zigbee_health_zigbee2mqtt_last_network_scan`: Last network scan (platform: zigbee_health)
  - `sensor.zigbee_health_zigbee2mqtt_scan_duration`: Scan duration (platform: zigbee_health)

#### 68. Unnamed Device (`7073dd677b3a7ac05b0f5f39052616d7`)
- **Manufacturer / Model:** Unknown / Unknown
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (5):**
  - `sensor.zigbee_state`: Zigbee state (platform: zigbee_health)
  - `sensor.zigbee_health`: Zigbee health (platform: zigbee_health)
  - `sensor.parent_router`: Parent router (platform: zigbee_health)
  - `sensor.lqi_to_parent`: LQI to parent (platform: zigbee_health)
  - `sensor.battery_empty_forecast`: Battery empty (forecast) (platform: zigbee_health)

#### 69. Unnamed Device (`f628af68d3db51b317d358f0a9b1210e`)
- **Manufacturer / Model:** Unknown / Unknown
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (5):**
  - `sensor.zigbee_state_2`: Zigbee state (platform: zigbee_health)
  - `sensor.zigbee_health_2`: Zigbee health (platform: zigbee_health)
  - `sensor.parent_router_2`: Parent router (platform: zigbee_health)
  - `sensor.lqi_to_parent_2`: LQI to parent (platform: zigbee_health)
  - `sensor.battery_empty_forecast_2`: Battery empty (forecast) (platform: zigbee_health)

#### 70. Unnamed Device (`15d6b19b99cb6e01f9285e5d24013466`)
- **Manufacturer / Model:** Unknown / Unknown
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (3):**
  - `sensor.zigbee_state_3`: Zigbee state (platform: zigbee_health)
  - `sensor.zigbee_health_3`: Zigbee health (platform: zigbee_health)
  - `sensor.children`: Children (platform: zigbee_health)

#### 71. Unnamed Device (`7b891715961393e2f25b6df35536e488`)
- **Manufacturer / Model:** Unknown / Unknown
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (3):**
  - `sensor.zigbee_state_4`: Zigbee state (platform: zigbee_health)
  - `sensor.zigbee_health_4`: Zigbee health (platform: zigbee_health)
  - `sensor.children_2`: Children (platform: zigbee_health)

#### 72. Unnamed Device (`790074299173314bdee99a6675be01a4`)
- **Manufacturer / Model:** Unknown / Unknown
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (5):**
  - `sensor.zigbee_state_5`: Zigbee state (platform: zigbee_health)
  - `sensor.zigbee_health_5`: Zigbee health (platform: zigbee_health)
  - `sensor.parent_router_3`: Parent router (platform: zigbee_health)
  - `sensor.lqi_to_parent_3`: LQI to parent (platform: zigbee_health)
  - `sensor.battery_empty_forecast_3`: Battery empty (forecast) (platform: zigbee_health)

#### 73. Unnamed Device (`930a816220e59ac1f080bc0388c6f46b`)
- **Manufacturer / Model:** Unknown / Unknown
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (5):**
  - `sensor.zigbee_state_6`: Zigbee state (platform: zigbee_health)
  - `sensor.zigbee_health_6`: Zigbee health (platform: zigbee_health)
  - `sensor.parent_router_4`: Parent router (platform: zigbee_health)
  - `sensor.lqi_to_parent_4`: LQI to parent (platform: zigbee_health)
  - `sensor.battery_empty_forecast_4`: Battery empty (forecast) (platform: zigbee_health)

#### 74. Unnamed Device (`30c038ede5edf9b989c8f2d13b9799b4`)
- **Manufacturer / Model:** Unknown / Unknown
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (5):**
  - `sensor.zigbee_state_7`: Zigbee state (platform: zigbee_health)
  - `sensor.zigbee_health_7`: Zigbee health (platform: zigbee_health)
  - `sensor.parent_router_5`: Parent router (platform: zigbee_health)
  - `sensor.lqi_to_parent_5`: LQI to parent (platform: zigbee_health)
  - `sensor.battery_empty_forecast_5`: Battery empty (forecast) (platform: zigbee_health)

#### 75. Unnamed Device (`ae548f32886919651ed61fb87748e63c`)
- **Manufacturer / Model:** Unknown / Unknown
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (5):**
  - `sensor.zigbee_state_8`: Zigbee state (platform: zigbee_health)
  - `sensor.zigbee_health_8`: Zigbee health (platform: zigbee_health)
  - `sensor.parent_router_6`: Parent router (platform: zigbee_health)
  - `sensor.lqi_to_parent_6`: LQI to parent (platform: zigbee_health)
  - `sensor.battery_empty_forecast_6`: Battery empty (forecast) (platform: zigbee_health)

#### 76. Unnamed Device (`fef666d0724f6fbf00f46f16c48b5fb7`)
- **Manufacturer / Model:** Unknown / Unknown
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (5):**
  - `sensor.zigbee_state_9`: Zigbee state (platform: zigbee_health)
  - `sensor.zigbee_health_9`: Zigbee health (platform: zigbee_health)
  - `sensor.parent_router_7`: Parent router (platform: zigbee_health)
  - `sensor.lqi_to_parent_7`: LQI to parent (platform: zigbee_health)
  - `sensor.battery_empty_forecast_7`: Battery empty (forecast) (platform: zigbee_health)

#### 77. Unnamed Device (`8786438f2774f7f62abebf2f953288f9`)
- **Manufacturer / Model:** Unknown / Unknown
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (3):**
  - `sensor.zigbee_state_10`: Zigbee state (platform: zigbee_health)
  - `sensor.zigbee_health_10`: Zigbee health (platform: zigbee_health)
  - `sensor.children_3`: Children (platform: zigbee_health)

#### 78. Unnamed Device (`5ed9ef90c5d1634e2fcc0c9e3617ab77`)
- **Manufacturer / Model:** Unknown / Unknown
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (5):**
  - `sensor.zigbee_state_11`: Zigbee state (platform: zigbee_health)
  - `sensor.zigbee_health_11`: Zigbee health (platform: zigbee_health)
  - `sensor.parent_router_8`: Parent router (platform: zigbee_health)
  - `sensor.lqi_to_parent_8`: LQI to parent (platform: zigbee_health)
  - `sensor.battery_empty_forecast_8`: Battery empty (forecast) (platform: zigbee_health)

#### 79. Unnamed Device (`c3de5c4d62b2214957c22b47394a75ab`)
- **Manufacturer / Model:** Unknown / Unknown
- **Integration:** `zigbee2mqtt`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (3):**
  - `sensor.zigbee_state_12`: Zigbee state (platform: zigbee_health)
  - `sensor.zigbee_health_12`: Zigbee health (platform: zigbee_health)
  - `sensor.children_4`: Children (platform: zigbee_health)

#### 80. NeonPlan 3D (`c3ed892432a793f689a60731e082c997`)
- **Manufacturer / Model:** Mastershort / integration
- **Integration:** `hacs`
- **Assigned Area:** Unassigned
- **Firmware / Software Version:** N/A
- **Related Entities (2):**
  - `update.neonplan_3d_update_2`: Update (platform: hacs)
  - `switch.neonplan_3d_pre_release_2`: Pre-release (platform: hacs)

