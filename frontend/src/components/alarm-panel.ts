// Alarm Control Panel: shows the alarm state, arm/disarm actions with optional PIN,
// and real-time status of all security sensors ordered by floor and room.

import { css, html, LitElement, nothing } from "lit";
import { entityName, findSensorRoom, isUnavailable } from "../devices.ts";
import { translate, type I18nKey } from "../i18n.ts";
import type { Building, Floor, Room } from "../model.ts";
import { AVAILABLE_ALARM_MODES } from "../model.ts";
import { controls, tokens } from "../styles.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";

export interface AlarmSensorItem {
  id: string;
  name: string;
  kind: "pir" | "presence" | "contact" | "safety";
  active: boolean;
  unavailable: boolean;
  roomName: string;
  roomId: string | null;
  floorId: string | null;
  floorRank: number;
  roomRank: number;
  stateText: string;
  modes: string[];
  modesText: string;
}

export class Fp3dAlarmPanel extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    floorId: { attribute: false },
    roomId: { attribute: false },
    selectedAlarmId: { state: true },
    pinCode: { state: true },
    showPinPad: { state: true },
  };

  declare hass: HomeAssistant;
  declare building: Building | null;
  declare floorId: string | null;
  declare roomId: string | null;
  declare selectedAlarmId: string | null;
  declare pinCode: string;
  declare showPinPad: boolean;

  constructor() {
    super();
    this.selectedAlarmId = null;
    this.pinCode = "";
    this.showPinPad = false;
  }

  private t(key: I18nKey, vars: Record<string, string | number> = {}) {
    return translate(this.hass, key, vars);
  }

  private alarmEntities(): string[] {
    if (!this.hass?.states) return [];
    return Object.keys(this.hass.states).filter((id) => id.startsWith("alarm_control_panel."));
  }

  private currentAlarm(): HassEntity | null {
    const alarms = this.alarmEntities();
    const primary = this.building?.settings.alarm?.entity;
    if (primary && alarms.includes(primary) && !this.selectedAlarmId) return this.hass.states[primary] ?? null;
    const id = this.selectedAlarmId && alarms.includes(this.selectedAlarmId) ? this.selectedAlarmId : alarms[0];
    return id ? this.hass.states[id] ?? null : null;
  }

  private modeLabel(mode: string): string {
    const def = AVAILABLE_ALARM_MODES.find((m) => m.key === mode);
    if (def) return this.t(def.labelKey as I18nKey);
    return mode.replace(/^armed_/, "");
  }

  private collectSensors(): AlarmSensorItem[] {
    if (!this.hass?.states || !this.building) return [];
    const out: AlarmSensorItem[] = [];
    const seen = new Set<string>();

    // 1. Sort floors ascending by elevation
    const sortedFloors = [...this.building.floors].sort((a, b) => a.elevation - b.elevation);
    const floorRanks = new Map<string, number>();
    sortedFloors.forEach((fl, idx) => floorRanks.set(fl.id, idx));

    // 2. Room lookup and rank within each floor's room list
    const roomLookup = new Map<string, { room: Room; floor: Floor; roomRank: number }>();
    for (const fl of sortedFloors) {
      fl.rooms.forEach((r, idx) => {
        roomLookup.set(r.id, { room: r, floor: fl, roomRank: idx });
      });
    }

    const defaultModesFor = (kind: AlarmSensorItem["kind"]): string[] => {
      if (kind === "contact") return ["armed_away", "armed_home", "armed_night"];
      if (kind === "safety") return ["armed_away", "armed_home", "armed_night", "armed_vacation"];
      return ["armed_away", "armed_night"];
    };

    // 1. Dedicated furniture sensors (PIR, presence, contact)
    for (const f of sortedFloors) {
      const fRank = floorRanks.get(f.id) ?? 0;
      for (const item of f.furniture) {
        if (!item.entity || item.entity === "none") continue;
        const id = item.entity;
        if (seen.has(id)) continue;
        const st = this.hass.states[id];
        if (!st) continue;

        let kind: AlarmSensorItem["kind"] = "safety";
        if (item.type === "sensor_pir") kind = "pir";
        else if (item.type === "sensor_presence") kind = "presence";
        else if (item.type === "sensor_contact") kind = "contact";
        else {
          const dc = String(st.attributes.device_class ?? "");
          if (["motion", "occupancy"].includes(dc)) kind = "pir";
          else if (dc === "presence") kind = "presence";
          else if (["door", "window", "opening", "garage_door"].includes(dc)) kind = "contact";
          else continue;
        }

        seen.add(id);
        const rmInfo = findSensorRoom(f, item.x, item.z, id, this.hass, this.building);
        const rRank = rmInfo.roomId ? (roomLookup.get(rmInfo.roomId)?.roomRank ?? 1000) : 1000;
        const active = st.state === "on" || st.state === "open";
        const modes = Array.isArray(item.alarm_modes) && item.alarm_modes.length ? item.alarm_modes : defaultModesFor(kind);
        const modesText = modes.map((m) => this.modeLabel(m)).join(" · ");

        out.push({
          id,
          name: item.name || entityName(this.hass, id),
          kind,
          active,
          unavailable: isUnavailable(st),
          roomName: rmInfo.roomName,
          roomId: rmInfo.roomId,
          floorId: rmInfo.floorId,
          floorRank: floorRanks.get(rmInfo.floorId) ?? fRank,
          roomRank: rRank,
          stateText: active ? this.t("alarm_state_detected") : this.t("alarm_state_clear"),
          modes,
          modesText,
        });
      }
    }

    // 2. Door and window contacts on Openings
    for (const f of sortedFloors) {
      const fRank = floorRanks.get(f.id) ?? 0;
      for (const op of f.openings) {
        for (const cid of [op.contact, op.contact2]) {
          if (!cid || cid === "none" || seen.has(cid)) continue;
          const st = this.hass.states[cid];
          if (!st) continue;
          seen.add(cid);
          const active = st.state === "on" || st.state === "open";
          const rmInfo = findSensorRoom(f, op.offset, 0, cid, this.hass, this.building, op.room_id);
          const rRank = rmInfo.roomId ? (roomLookup.get(rmInfo.roomId)?.roomRank ?? 1000) : 1000;
          const modes = Array.isArray(op.alarm_modes) && op.alarm_modes.length ? op.alarm_modes : defaultModesFor("contact");
          const modesText = modes.map((m) => this.modeLabel(m)).join(" · ");

          out.push({
            id: cid,
            name: entityName(this.hass, cid),
            kind: "contact",
            active,
            unavailable: isUnavailable(st),
            roomName: rmInfo.roomName,
            roomId: rmInfo.roomId,
            floorId: rmInfo.floorId,
            floorRank: floorRanks.get(rmInfo.floorId) ?? fRank,
            roomRank: rRank,
            stateText: active ? this.t("alarm_state_detected") : this.t("alarm_state_clear"),
            modes,
            modesText,
          });
        }
      }
    }

    // 3. Placed binary sensors in Building placements
    for (const f of sortedFloors) {
      const fRank = floorRanks.get(f.id) ?? 0;
      for (const pl of f.placements) {
        if (!pl.entity_id.startsWith("binary_sensor.") || seen.has(pl.entity_id)) continue;
        const st = this.hass.states[pl.entity_id];
        if (!st) continue;
        const dc = String(st.attributes.device_class ?? "");
        let kind: AlarmSensorItem["kind"] | null = null;
        if (["motion", "occupancy"].includes(dc)) kind = "pir";
        else if (dc === "presence") kind = "presence";
        else if (["door", "window", "opening", "garage_door"].includes(dc)) kind = "contact";
        else if (["smoke", "gas", "moisture", "carbon_monoxide", "safety", "tamper"].includes(dc)) kind = "safety";

        if (!kind) continue;
        seen.add(pl.entity_id);
        const active = st.state === "on" || st.state === "open";
        const rmInfo = findSensorRoom(f, pl.x, pl.z, pl.entity_id, this.hass, this.building);
        const rRank = rmInfo.roomId ? (roomLookup.get(rmInfo.roomId)?.roomRank ?? 1000) : 1000;
        const modes = defaultModesFor(kind);
        const modesText = modes.map((m) => this.modeLabel(m)).join(" · ");

        out.push({
          id: pl.entity_id,
          name: pl.name || entityName(this.hass, pl.entity_id),
          kind,
          active,
          unavailable: isUnavailable(st),
          roomName: rmInfo.roomName,
          roomId: rmInfo.roomId,
          floorId: rmInfo.floorId,
          floorRank: floorRanks.get(rmInfo.floorId) ?? fRank,
          roomRank: rRank,
          stateText: active ? this.t("alarm_state_detected") : this.t("alarm_state_clear"),
          modes,
          modesText,
        });
      }
    }

    // Sort: 1) floor ascending, 2) room list order in that floor, 3) active sensors first within group
    return out.sort((a, b) => {
      if (a.floorRank !== b.floorRank) return a.floorRank - b.floorRank;
      if (a.roomRank !== b.roomRank) return a.roomRank - b.roomRank;
      if (a.active !== b.active) return a.active ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
  }

  private hasConfiguredPin(): boolean {
    const pin = this.building?.settings.alarm?.pin;
    return typeof pin === "string" && pin.trim().length > 0;
  }

  private async callAlarmService(service: string) {
    const alarm = this.currentAlarm();
    if (!alarm) return;
    const data: Record<string, unknown> = { entity_id: alarm.entity_id };
    const configuredPin = this.building?.settings.alarm?.pin;

    if (service === "alarm_disarm") {
      if (this.hasConfiguredPin()) {
        const code = this.pinCode.trim();
        if (!code) return;
        data.code = code;
      } else if (configuredPin) {
        data.code = configuredPin;
      }
    }

    await this.hass.callService("alarm_control_panel", service, data);
    this.pinCode = "";
    this.showPinPad = false;
  }

  private appendPin(digit: string) {
    if (this.pinCode.length < 12) this.pinCode += digit;
  }

  private backspacePin() {
    this.pinCode = this.pinCode.slice(0, -1);
  }

  private clearPin() {
    this.pinCode = "";
  }

  private statusInfo(state: string) {
    switch (state) {
      case "disarmed":
        return { label: this.t("alarm_state_disarmed"), color: "#4caf50", icon: "shield-check", bg: "rgba(76, 175, 80, 0.15)" };
      case "armed_home":
        return { label: this.t("alarm_state_armed_home"), color: "#03a9f4", icon: "shield-home", bg: "rgba(3, 169, 244, 0.15)" };
      case "armed_away":
        return { label: this.t("alarm_state_armed_away"), color: "#ff9800", icon: "shield-lock", bg: "rgba(255, 152, 0, 0.15)" };
      case "armed_night":
        return { label: this.t("alarm_state_armed_night"), color: "#5c6bc0", icon: "shield-moon", bg: "rgba(92, 107, 192, 0.15)" };
      case "armed_vacation":
        return { label: this.t("alarm_state_armed_vacation"), color: "#ab47bc", icon: "shield-airplane", bg: "rgba(171, 71, 188, 0.15)" };
      case "triggered":
        return { label: this.t("alarm_state_triggered"), color: "#f44336", icon: "shield-alert", bg: "rgba(244, 67, 54, 0.25)", pulse: true };
      case "pending":
      case "arming":
      case "disarming":
        return { label: this.t(`alarm_state_${state}` as I18nKey), color: "#ffeb3b", icon: "shield-sync", bg: "rgba(255, 235, 59, 0.15)" };
      default:
        return { label: state, color: "#9e9e9e", icon: "shield", bg: "rgba(158, 158, 158, 0.15)" };
    }
  }

  render() {
    const alarms = this.alarmEntities();
    const alarm = this.currentAlarm();
    const sensors = this.collectSensors();
    const activeSensors = sensors.filter((s) => s.active);
    const status = alarm ? this.statusInfo(alarm.state) : null;
    const reqPin = this.hasConfiguredPin();
    const enabledModes = new Set(this.building?.settings.alarm?.modes ?? ["armed_away", "armed_home", "armed_night"]);

    return html`
      <div class="fp3d-alarm-wrap">
        <div class="fp3d-alarm-head">
          <div class="fp3d-alarm-title-row">
            <span class="fp3d-alarm-icon">${status ? html`<ha-icon icon="mdi:${status.icon}"></ha-icon>` : "🛡️"}</span>
            <span class="fp3d-alarm-title">${this.t("alarm_title")}</span>
          </div>
          <button class="fp3d-chip fp3d-close-btn" @click=${() => this.dispatchEvent(new CustomEvent("alarm-close", { bubbles: true, composed: true }))}>✕</button>
        </div>

        ${alarms.length > 1
          ? html`<div class="fp3d-alarm-picker">
              ${alarms.map(
                (id) => html`
                  <button class="fp3d-chip ${id === alarm?.entity_id ? "fp3d-chip-on" : ""}" @click=${() => (this.selectedAlarmId = id)}>
                    ${entityName(this.hass, id)}
                  </button>
                `,
              )}
            </div>`
          : nothing}

        ${alarm && status
          ? html`
              <div class="fp3d-alarm-banner ${status.pulse ? "fp3d-alarm-pulse" : ""}" style="background:${status.bg};border-color:${status.color}">
                <div class="fp3d-status-badge" style="color:${status.color}">
                  <span class="fp3d-status-icon"><ha-icon icon="mdi:${status.icon}"></ha-icon></span>
                  <span class="fp3d-status-text">${status.label}</span>
                </div>
                <div class="fp3d-status-sub">${entityName(this.hass, alarm.entity_id)}</div>
              </div>

              <div class="fp3d-alarm-actions">
                <button
                  class="fp3d-action-btn fp3d-btn-disarm"
                  ?disabled=${reqPin && !this.pinCode.trim()}
                  @click=${() => this.callAlarmService("alarm_disarm")}
                >
                  <ha-icon icon="mdi:shield-off"></ha-icon>
                  <span>${this.t("alarm_disarm")}</span>
                </button>
                ${enabledModes.has("armed_home")
                  ? html`<button class="fp3d-action-btn fp3d-btn-home" @click=${() => this.callAlarmService("alarm_arm_home")}>
                      <ha-icon icon="mdi:shield-home"></ha-icon>
                      <span>${this.t("alarm_arm_home")}</span>
                    </button>`
                  : nothing}
                ${enabledModes.has("armed_away")
                  ? html`<button class="fp3d-action-btn fp3d-btn-away" @click=${() => this.callAlarmService("alarm_arm_away")}>
                      <ha-icon icon="mdi:shield-lock"></ha-icon>
                      <span>${this.t("alarm_arm_away")}</span>
                    </button>`
                  : nothing}
                ${enabledModes.has("armed_night")
                  ? html`<button class="fp3d-action-btn fp3d-btn-night" @click=${() => this.callAlarmService("alarm_arm_night")}>
                      <ha-icon icon="mdi:shield-moon"></ha-icon>
                      <span>${this.t("alarm_arm_night")}</span>
                    </button>`
                  : nothing}
                ${enabledModes.has("armed_vacation")
                  ? html`<button class="fp3d-action-btn fp3d-btn-vacation" @click=${() => this.callAlarmService("alarm_arm_vacation")}>
                      <ha-icon icon="mdi:shield-airplane"></ha-icon>
                      <span>${this.t("alarm_arm_vacation")}</span>
                    </button>`
                  : nothing}
              </div>

              ${reqPin
                ? html`
                    <div class="fp3d-pin-section">
                      <div class="fp3d-pin-row">
                        <input
                          type="password"
                          class="fp3d-pin-input"
                          placeholder=${this.t("alarm_code_prompt")}
                          .value=${this.pinCode}
                          @input=${(e: Event) => (this.pinCode = (e.target as HTMLInputElement).value)}
                        />
                        <button class="fp3d-chip" @click=${() => (this.showPinPad = !this.showPinPad)}>
                          🔢 ${this.showPinPad ? "▲" : "▼"}
                        </button>
                      </div>
                      ${this.showPinPad
                        ? html`
                            <div class="fp3d-keypad">
                              ${["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "⌫"].map(
                                (k) => html`
                                  <button
                                    class="fp3d-key-btn"
                                    @click=${() => {
                                      if (k === "C") this.clearPin();
                                      else if (k === "⌫") this.backspacePin();
                                      else this.appendPin(k);
                                    }}
                                  >
                                    ${k}
                                  </button>
                                `,
                              )}
                            </div>
                          `
                        : nothing}
                    </div>
                  `
                : nothing}
            `
          : nothing}

        <div class="fp3d-sensors-header">
          <span>${this.t("alarm_sensors_title")} (${sensors.length})</span>
          ${activeSensors.length > 0
            ? html`<span class="fp3d-sensor-alert-tag">🚨 ${activeSensors.length} ${this.t("alarm_sensors_active")}</span>`
            : html`<span class="fp3d-sensor-ok-tag">✓ OK</span>`}
        </div>

        <div class="fp3d-sensor-list">
          ${sensors.length === 0
            ? html`<p class="fp3d-empty-hint">${this.t("alarm_no_sensors")}</p>`
            : sensors.map(
                (s) => html`
                  <div
                    class="fp3d-sensor-row ${s.active ? "fp3d-sensor-active" : ""}"
                    @click=${() =>
                      this.dispatchEvent(
                        new CustomEvent("sensor-pick", {
                          detail: { id: s.id, roomId: s.roomId, floorId: s.floorId },
                          bubbles: true,
                          composed: true,
                        }),
                      )}
                  >
                    <span class="fp3d-sensor-icon">
                      ${s.kind === "pir"
                        ? html`<ha-icon icon="mdi:motion-sensor"></ha-icon>`
                        : s.kind === "presence"
                          ? html`<ha-icon icon="mdi:radar"></ha-icon>`
                          : s.kind === "contact"
                            ? html`<ha-icon icon="mdi:door-open"></ha-icon>`
                            : html`<ha-icon icon="mdi:shield-alert"></ha-icon>`}
                    </span>
                    <div class="fp3d-sensor-meta">
                      <div class="fp3d-sensor-name-line">
                        <span class="fp3d-sensor-name">${s.name}</span>
                        <span class="fp3d-sensor-room">${s.roomName}</span>
                      </div>
                      <div class="fp3d-sensor-modes">${s.modesText}</div>
                    </div>
                    <span class="fp3d-sensor-badge ${s.active ? "fp3d-badge-active" : "fp3d-badge-clear"}">
                      ${s.stateText}
                    </span>
                  </div>
                `,
              )}
        </div>
      </div>
    `;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: block;
        position: absolute;
        top: 12px;
        right: 12px;
        width: 350px;
        max-width: calc(100vw - 24px);
        max-height: calc(100vh - 80px);
        background: rgba(14, 20, 36, 0.95);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 14px;
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
        color: #fff;
        z-index: 40;
        overflow-y: auto;
      }
      .fp3d-alarm-wrap {
        padding: 14px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .fp3d-alarm-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .fp3d-alarm-title-row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 700;
        font-size: 16px;
      }
      .fp3d-alarm-icon {
        font-size: 20px;
        display: flex;
        align-items: center;
      }
      .fp3d-close-btn {
        width: 28px;
        height: 28px;
        min-width: 28px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
      }
      .fp3d-alarm-picker {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
      }
      .fp3d-alarm-banner {
        border-radius: 10px;
        border: 2px solid;
        padding: 12px;
        text-align: center;
        transition: all 0.3s ease;
      }
      .fp3d-alarm-pulse {
        animation: banner-pulse 1s infinite alternate;
      }
      @keyframes banner-pulse {
        from {
          box-shadow: 0 0 10px rgba(244, 67, 54, 0.5);
        }
        to {
          box-shadow: 0 0 24px rgba(244, 67, 54, 0.9);
        }
      }
      .fp3d-status-badge {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 18px;
        font-weight: 800;
        letter-spacing: 0.5px;
      }
      .fp3d-status-sub {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.7);
        margin-top: 4px;
      }
      .fp3d-alarm-actions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }
      .fp3d-action-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.08);
        color: #fff;
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
        transition: background 0.2s;
      }
      .fp3d-action-btn:hover {
        background: rgba(255, 255, 255, 0.16);
      }
      .fp3d-btn-disarm {
        border-color: rgba(76, 175, 80, 0.4);
      }
      .fp3d-btn-home {
        border-color: rgba(3, 169, 244, 0.4);
      }
      .fp3d-btn-away {
        border-color: rgba(255, 152, 0, 0.4);
      }
      .fp3d-btn-night {
        border-color: rgba(92, 107, 192, 0.4);
      }
      .fp3d-pin-section {
        background: rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .fp3d-pin-row {
        display: flex;
        gap: 6px;
      }
      .fp3d-pin-input {
        flex: 1;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 6px;
        padding: 6px 10px;
        color: #fff;
        font-size: 14px;
        letter-spacing: 2px;
      }
      .fp3d-keypad {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 6px;
      }
      .fp3d-key-btn {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 6px;
        padding: 8px;
        color: #fff;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-key-btn:hover {
        background: rgba(255, 255, 255, 0.2);
      }
      .fp3d-sensors-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 13px;
        font-weight: 700;
        padding-top: 4px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }
      .fp3d-sensor-alert-tag {
        color: #ff5252;
        background: rgba(255, 82, 82, 0.2);
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 11px;
      }
      .fp3d-sensor-ok-tag {
        color: #4caf50;
        background: rgba(76, 175, 80, 0.2);
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 11px;
      }
      .fp3d-sensor-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
        max-height: 240px;
        overflow-y: auto;
      }
      .fp3d-sensor-row {
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(255, 255, 255, 0.04);
        padding: 6px 10px;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.15s;
      }
      .fp3d-sensor-row:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      .fp3d-sensor-active {
        background: rgba(229, 57, 53, 0.25) !important;
        border-left: 3px solid #f44336;
      }
      .fp3d-sensor-icon {
        display: flex;
        align-items: center;
        opacity: 0.8;
      }
      .fp3d-sensor-meta {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .fp3d-sensor-name-line {
        display: flex;
        align-items: baseline;
        gap: 6px;
      }
      .fp3d-sensor-name {
        font-size: 12.5px;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-sensor-room {
        font-size: 10.5px;
        color: rgba(255, 255, 255, 0.55);
      }
      .fp3d-sensor-modes {
        font-size: 10px;
        color: rgba(255, 255, 255, 0.65);
      }
      .fp3d-sensor-badge {
        font-size: 11px;
        padding: 2px 6px;
        border-radius: 4px;
        font-weight: 600;
      }
      .fp3d-badge-active {
        background: #e53935;
        color: #fff;
        box-shadow: 0 0 8px rgba(229, 57, 53, 0.7);
      }
      .fp3d-badge-clear {
        background: rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.7);
      }
      .fp3d-empty-hint {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
        text-align: center;
        padding: 12px;
        margin: 0;
      }
    `,
  ];
}

if (!customElements.get("fp3d-alarm-panel")) {
  customElements.define("fp3d-alarm-panel", Fp3dAlarmPanel);
}
