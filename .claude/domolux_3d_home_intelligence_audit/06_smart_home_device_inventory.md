# 06. Smart-Home Device Inventory Report

## Executive Summary
This document provides a verified inventory of the smart-home physical devices, controllers, and entities represented in the user's residence. All data is grounded in direct Home Assistant MCP queries. No device control services were executed.

---

## 1. Verified Device Inventory by Room

### 1.1 Master Bedroom (`fethi`)
- **Door Security:** `binary_sensor.door_fet_contact` (door contact sensor, state: `off`/closed).
- **HVAC / Climate:**
  - `input_boolean.ac_fet_power` (AC power state helper).
  - `input_number.ac_fet_target_temp` (target temperature setpoint, 23.0°C).
  - Control scripts: `script.ac_fet_power_on`, `script.ac_fet_power_off`, `script.ac_fet_temp_up`, `script.ac_fet_temp_down`.
- **Lighting Relays:** `switch.pn16_l7` (bedroom direct light relay) + access to central channels `switch.pn16_l2`–`switch.pn16_l6`.
- **Presence & Occupancy:** `binary_sensor.0xf4b3b1fffe495048_occupancy` (SNZB-06P radar presence sensor).
- **Infrared Blaster:** `button.ir_blaster_fet_switch_learn_ir_code`, `sensor.ir_blaster_fet_voltage`.

### 1.2 Bathroom (`salle_de_bain`)
- **Lighting Relays:** `switch.pn16_l1` through `switch.pn16_l6` (multi-channel relay PN16).
- **Occupancy Sensor:** `binary_sensor.0xf4b3b1fffe495048_occupancy`.

### 1.3 Meeting / Living / Media Room (`meeting`)
- **Motorized Curtains & Shading:**
  - `cover.yellow_switch` (SC500ZB-v4 curtain motor, state: `closed`).
  - `cover.digital` / `cover.meetingrideaux` (logical curtain entity).
  - Calibration entities: `number.yellow_switch_calibration_time_to_open`, `number.yellow_switch_calibration_time_to_close`.
- **HVAC / Climate:**
  - `input_boolean.ac_met_power` (AC power helper).
  - `input_number.ac_met_target_temp` (target setpoint, 24.0°C).
  - Control scripts: `script.ac_met_power_on`, `script.ac_met_power_off`, `script.ac_met_temp_up`, `script.ac_met_temp_down`.
- **Audio/Video & Media:**
  - `input_boolean.tv_power` (Samsung TV power state).
  - `input_boolean.tv_playing` (playback status).
  - Media helper scripts: `script.tv_power_on_helper`, `script.tv_netflix_helper`, `script.tv_prime_video_helper`, `script.tv_volume_up_helper`, `script.tv_volume_down_helper`, `script.tv_mute_helper`.
- **Door Security:** `binary_sensor.0xa4c138997d10233c_contact` (door contact sensor).
- **Occupancy & Radar:** `binary_sensor.0xf4b3b1fffe495048_occupancy` (SNZB-06P, sensitivity: `medium`, timeout: 20s).
- **Infrared Blaster:** `button.ir_blaster_met_switch_learn_ir_code`, `sensor.ir_blaster_met_learned_ir_code`.
- **Lighting Relays:** `switch.pn16_l1` through `switch.pn16_l6`.

### 1.4 Workspace / Office (`working`)
- **Door Security:** `binary_sensor.door_wrk_contact` (contact sensor, battery: `sensor.door_wrk_voltage`).
- **HVAC / Climate:**
  - `input_boolean.ac_wrk_power` (AC power state).
  - `input_number.ac_wrk_target_temp` (target setpoint, 22.0°C).
  - Control scripts: `script.ac_wrk_power_on`, `script.ac_wrk_power_off`, `script.ac_wrk_temp_up`, `script.ac_wrk_temp_down`.
- **Lighting Relays:** `switch.pn16_l1` through `switch.pn16_l6`.
- **Presence & Occupancy:** `binary_sensor.0xf4b3b1fffe495048_occupancy`.
- **Infrared Blaster:** `button.ir_blaster_wrk_switch_learn_ir_code`.

### 1.5 Hallway (`hallway`)
- **Motorized Curtains & Shading:**
  - `cover.zm108m` / `cover.hallwayrideaux` (motorized blind/curtain, state: `closed`).
  - `select.zm108m_switch_type_curtain`, `switch.zm108m_calibration`.
- **Door Security:** `binary_sensor.door_hal_contact` (hallway entrance contact sensor).
- **Lighting Relays:** `switch.pn16_l1` through `switch.pn16_l6`.

### 1.6 Kitchen (`kitchen`)
- **Door Security:** `binary_sensor.door_kit_contact` (kitchen door contact sensor).
- **Lighting Relays:** `switch.pn16_l1` through `switch.pn16_l6`.

---

## 2. Central Infrastructure & System Hardware

- **Multi-Channel Actuator:** PN16 16-channel DIN rail relay module (`switch.pn16_l1` through `switch.pn16_l16`).
- **Zigbee Coordinator:** Zigbee2MQTT `2.14.3-1` managing Sonoff and Tuya end-devices.
- **Voice Pipeline:** Piper `2.5.4` (TTS), Whisper `3.6.1` (STT), openWakeWord `2.1.1`, Assist satellite (`assist_satellite.assist_microphone`).
- **Backup & Storage:** Google Drive Backup `0.112.1`, local daily snapshots.

---

## 3. Physical Entity vs. 3D Scene Representation Mapping

In NeonPlan 3D, devices are placed into the 3D scene using `PLACEMENT_SCHEMA` (`placements` array in each floor):
```python
PLACEMENT_SCHEMA = vol.Schema({
    vol.Required("entity_id"): str,
    vol.Required("x"): float,
    vol.Required("z"): float,
    vol.Required("y"): vol.Any(None, float),
    vol.Optional("mount"): vol.In(["ceiling", "floor", "table", "wall"]),
    vol.Optional("rotation"): float,
    vol.Optional("glow_scale"): float,
    vol.Optional("marker"): vol.In(["always", "active", "no_power", "never"]),
})
```

### Mapping Status:
1. **Physical Entities Registered in HA:** Verified (599 total).
2. **Dashboard Interactive Bindings:** Verified in `dashboard-user`.
3. **3D Pin Coordinates ($x, y, z$) in Scene:** Encapsulated in `/config/.storage/neonplan3d.building` (inaccessible via standard HA MCP tools).
