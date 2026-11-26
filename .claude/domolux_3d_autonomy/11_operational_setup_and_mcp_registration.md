# DOMOLUX 3D AUTONOMY — OPERATIONAL SETUP & MCP REGISTRATION
**Document ID:** `11_operational_setup_and_mcp_registration.md`  
**Date:** 2026-11-26  
**Status:** CONFIGURATION REFERENCE

---

## 1. Antigravity MCP Registration

To enable the Domolux 3D MCP Bridge inside Antigravity:

File: `~/.gemini/config/mcp_config.json`

```json
{
  "mcpServers": {
    "home-assistant": {
      "disabled": false,
      "serverUrl": "http://192.168.100.92:9584/private_sJ3_VIjqNtGue0BK2F7Ahw",
      "url": "http://192.168.100.92:9584/private_sJ3_VIjqNtGue0BK2F7Ahw"
    },
    "domolux-3d": {
      "command": "node",
      "args": [
        "/home/ismabeast/Desktop/ponglearn/neonplan3d/tools/domolux_bridge/src/mcp-server.js"
      ],
      "env": {
        "HA_WS_URL": "ws://192.168.100.92:8123/api/websocket",
        "HA_REFRESH_TOKEN_ID": "211d0dd783bf473790bcc27905c9c725"
      }
    }
  }
}
```

---

## 2. Server Startup & Verification
1. Build server: `npm run build` in `tools/domolux_bridge/`
2. Test standalone invocation: `node tools/domolux_bridge/dist/server.js`
3. MCP handshake: Server listens on `stdio` adhering to JSON-RPC 2.0.
