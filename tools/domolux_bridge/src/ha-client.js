// Home Assistant WebSocket Client for NeonPlan 3D
import crypto from 'node:crypto';

export class HomeAssistantWebSocketClient {
  constructor(options = {}) {
    this.wsUrl = options.wsUrl || process.env.HA_WS_URL || 'ws://192.168.100.92:8123/api/websocket';
    this.jwtKey = options.jwtKey || process.env.HA_JWT_KEY || 'd135aa4abfd6943a48c4550409e3256706ea43cf7ace5d9caa8821a9eaa9316ca0b9062a4c62571e6be6aa451467d5d97ab9596517b3bdd2d54926d3323d732e';
    this.refreshTokenId = options.refreshTokenId || process.env.HA_REFRESH_TOKEN_ID || '211d0dd783bf473790bcc27905c9c725';
    this.ws = null;
    this.reqId = 1;
    this.pending = new Map();
    this.authenticated = false;
  }

  generateAccessToken() {
    const b64url = buf => buf.toString('base64url');
    const header = { alg: 'HS256', typ: 'JWT' };
    const now = Math.floor(Date.now() / 1000);
    const payload = {
      iss: this.refreshTokenId,
      iat: now,
      exp: now + 315360000 // 10 years
    };

    const hStr = b64url(Buffer.from(JSON.stringify(header)));
    const pStr = b64url(Buffer.from(JSON.stringify(payload)));
    const signingInput = `${hStr}.${pStr}`;
    const sig = crypto.createHmac('sha256', this.jwtKey).update(signingInput).digest();
    return `${signingInput}.${b64url(sig)}`;
  }

  async connect() {
    if (this.ws && this.authenticated) return;

    return new Promise((resolve, reject) => {
      try {
        this.ws = new WebSocket(this.wsUrl);
      } catch (err) {
        return reject(err);
      }

      const timer = setTimeout(() => {
        reject(new Error(`WebSocket connection timeout to ${this.wsUrl}`));
      }, 10000);
      if (timer.unref) timer.unref();

      this.ws.onopen = () => {
        // Wait for auth_required message
      };

      this.ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          if (msg.type === 'auth_required') {
            const token = this.generateAccessToken();
            this.ws.send(JSON.stringify({ type: 'auth', access_token: token }));
          } else if (msg.type === 'auth_ok') {
            clearTimeout(timer);
            this.authenticated = true;
            resolve();
          } else if (msg.type === 'auth_invalid') {
            clearTimeout(timer);
            reject(new Error(`Authentication failed: ${msg.message}`));
          } else if (msg.id && this.pending.has(msg.id)) {
            const { resolve: res, reject: rej } = this.pending.get(msg.id);
            this.pending.delete(msg.id);
            if (msg.success) {
              res(msg.result);
            } else {
              const err = new Error(msg.error?.message || (typeof msg.error === 'string' ? msg.error : 'Unknown error'));
              err.code = msg.error?.code || 'WEBSOCKET_ERROR';
              rej(err);
            }
          }
        } catch (err) {
          // parse error
        }
      };

      this.ws.onerror = (err) => {
        clearTimeout(timer);
        this.authenticated = false;
        reject(err);
      };

      this.ws.onclose = () => {
        this.authenticated = false;
      };
    });
  }

  async sendCommand(command) {
    await this.connect();
    const id = this.reqId++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      const payload = JSON.stringify({ id, ...command });
      this.ws.send(payload);

      // 15 second request timeout
      const timer = setTimeout(() => {
        if (this.pending.has(id)) {
          this.pending.delete(id);
          reject(new Error(`Command timeout: ${command.type} (id=${id})`));
        }
      }, 15000);
      if (timer.unref) timer.unref();
    });
  }

  async getBuilding(planId = null) {
    const cmd = { type: 'neonplan3d/building/get' };
    if (planId && planId !== 'main') cmd.plan = planId;
    return this.sendCommand(cmd);
  }

  async saveBuilding(planId, building, baseRevision = undefined) {
    const cmd = {
      type: 'neonplan3d/building/save',
      building
    };
    if (planId && planId !== 'main') cmd.plan = planId;
    if (baseRevision !== undefined && baseRevision >= 0) cmd.base_revision = baseRevision;
    return this.sendCommand(cmd);
  }

  async listPlans() {
    return this.sendCommand({ type: 'neonplan3d/plans/list' });
  }

  async createPlan(name, from = {}) {
    const cmd = {
      type: 'neonplan3d/plans/create',
      name
    };
    if (from.copyOf) cmd.copy_of = from.copyOf;
    if (from.building) cmd.building = from.building;
    if (from.icon) cmd.icon = from.icon;
    return this.sendCommand(cmd);
  }

  async updatePlan(planId, changes = {}) {
    return this.sendCommand({
      type: 'neonplan3d/plans/update',
      plan: planId,
      ...changes
    });
  }

  async deletePlan(planId) {
    return this.sendCommand({
      type: 'neonplan3d/plans/delete',
      plan: planId
    });
  }

  async restorePlan(planId) {
    return this.sendCommand({
      type: 'neonplan3d/plans/restore',
      plan: planId
    });
  }

  async listPacks() {
    return this.sendCommand({ type: 'neonplan3d/packs/list' });
  }

  async snapshotHistory(planId = null) {
    const cmd = { type: 'neonplan3d/history/snapshot' };
    if (planId && planId !== 'main') cmd.plan = planId;
    return this.sendCommand(cmd);
  }

  close() {
    if (this.ws) {
      try { this.ws.close(); } catch (e) {}
      this.ws = null;
      this.authenticated = false;
    }
  }
}
