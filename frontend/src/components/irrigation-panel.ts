// Irrigation Panel: displays OpenSprinkler / irrigation controller status, master controls,
// and real-time state of all activatable irrigation devices grouped by zone.

import { css, html, LitElement, nothing } from "lit";
import { entityName } from "../devices.ts";
import { translate, type I18nKey } from "../i18n.ts";
import type { Building } from "../model.ts";
import { IRRIGATION_SPRINKLER_TYPES } from "../model.ts";
import { controls, tokens } from "../styles.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";

export interface IrrigationZoneGroup {
  zoneName: string;
  emitters: IrrigationEmitterInfo[];
  activeCount: number;
}

export interface IrrigationEmitterInfo {
  id: string;
  name: string;
  type: string;
  floorId: string;
  floorName: string;
  zone: string;
  entity: string | null;
  waterSensor: string | null;
  actionService: string | null;
  actionServiceData: string | null;
  actionServiceOff: string | null;
  actionServiceOffData: string | null;
  active: boolean;
  x: number;
  z: number;
}

export class Fp3dIrrigationPanel extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    floorId: { attribute: false },
    selectedZone: { state: true },
  };

  declare hass: HomeAssistant;
  declare building: Building | null;
  declare floorId: string | null;
  declare selectedZone: string | null;

  constructor() {
    super();
    this.selectedZone = null;
  }

  private t(key: I18nKey, vars: Record<string, string | number> = {}) {
    return translate(this.hass, key, vars);
  }

  /** Finds the main irrigation controller entity (from settings, placed controller item, or OpenSprinkler entity). */
  private getControllerEntity(): HassEntity | null {
    if (!this.hass?.states) return null;
    const settingsEntity = this.building?.settings.irrigation?.controller_entity;
    if (settingsEntity && this.hass.states[settingsEntity]) return this.hass.states[settingsEntity];

    // Check placed irrigation_controller furniture items
    for (const fl of this.building?.floors ?? []) {
      for (const m of fl.furniture) {
        if (m.type === "irrigation_controller" && m.entity && this.hass.states[m.entity]) {
          return this.hass.states[m.entity];
        }
      }
    }

    // Auto-detect OpenSprinkler or controller switch/sensor
    const candidate = Object.keys(this.hass.states).find(
      (id) =>
        id.startsWith("switch.opensprinkler_") ||
        id.startsWith("sensor.opensprinkler_") ||
        id.includes("irrigation_controller") ||
        id.includes("centralina_irrigazione"),
    );
    return candidate ? this.hass.states[candidate] ?? null : null;
  }

  /** Gathers all activatable irrigation emitters across floors, grouped by zone. */
  private getZones(): IrrigationZoneGroup[] {
    const doc = this.building;
    if (!doc) return [];

    const zoneMap = new Map<string, IrrigationEmitterInfo[]>();

    for (const fl of doc.floors) {
      for (const m of fl.furniture) {
        if (!IRRIGATION_SPRINKLER_TYPES.has(m.type) && m.type !== "irrigation_valve") continue;
        const entityId = m.entity && m.entity !== "none" ? m.entity : null;
        // Only show devices that are activatable (have an entity or custom action service)
        if (!entityId && !m.action_service) continue;

        const stateEntity = m.water_sensor && m.water_sensor !== "none" ? m.water_sensor : (entityId ?? null);
        const stateObj = stateEntity ? this.hass?.states[stateEntity] : null;
        const st = stateObj?.state?.toLowerCase();
        const active = st === "on" || st === "open" || st === "watering" || st === "active" || st === "true";

        const zone = m.irrigation_zone?.trim() || this.t("irrigation_zone_default");

        const info: IrrigationEmitterInfo = {
          id: m.id,
          name: m.name || (entityId ? entityName(this.hass, entityId) : this.t(`furn_${m.type}` as I18nKey)),
          type: m.type,
          floorId: fl.id,
          floorName: fl.name,
          zone,
          entity: entityId,
          waterSensor: m.water_sensor ?? null,
          actionService: m.action_service ?? null,
          actionServiceData: m.action_service_data ?? null,
          actionServiceOff: m.action_service_off ?? null,
          actionServiceOffData: m.action_service_off_data ?? null,
          active,
          x: m.x,
          z: m.z,
        };

        if (!zoneMap.has(zone)) zoneMap.set(zone, []);
        zoneMap.get(zone)!.push(info);
      }

      // Check placements strictly for irrigation devices (exclude cameras, lights, media, climate, covers)
      for (const pl of fl.placements ?? []) {
        if (
          pl.entity_id.startsWith("camera.") ||
          pl.entity_id.startsWith("light.") ||
          pl.entity_id.startsWith("media_player.") ||
          pl.entity_id.startsWith("climate.") ||
          pl.entity_id.startsWith("cover.")
        ) {
          continue;
        }

        // Only include placements if explicitly marked as irrigation or belonging to OpenSprinkler/irrigation valve
        const isIrrigPlacement =
          !!pl.irrigation_zone ||
          !!pl.water_sensor ||
          pl.entity_id.startsWith("valve.opensprinkler_") ||
          pl.entity_id.startsWith("switch.opensprinkler_") ||
          ((pl.entity_id.startsWith("valve.") || pl.entity_id.startsWith("switch.")) &&
            (pl.entity_id.includes("irrig") || pl.entity_id.includes("sprinkler")));

        if (!isIrrigPlacement) continue;

        const entityId = pl.entity_id;
        const stateEntity = pl.water_sensor && pl.water_sensor !== "none" ? pl.water_sensor : entityId;
        const stateObj = this.hass?.states[stateEntity];
        const st = stateObj?.state?.toLowerCase();
        const active = st === "on" || st === "open" || st === "watering" || st === "active" || st === "true";
        const zone = pl.irrigation_zone?.trim() || this.t("irrigation_zone_default");

        const info: IrrigationEmitterInfo = {
          id: pl.entity_id,
          name: pl.name || entityName(this.hass, pl.entity_id),
          type: pl.entity_id.startsWith("valve.") ? "irrigation_valve" : "sprinkler_popup",
          floorId: fl.id,
          floorName: fl.name,
          zone,
          entity: entityId,
          waterSensor: pl.water_sensor ?? null,
          actionService: pl.action_service ?? null,
          actionServiceData: pl.action_service_data ?? null,
          actionServiceOff: pl.action_service_off ?? null,
          actionServiceOffData: pl.action_service_off_data ?? null,
          active,
          x: pl.x,
          z: pl.z,
        };

        if (!zoneMap.has(zone)) zoneMap.set(zone, []);
        zoneMap.get(zone)!.push(info);
      }
    }

    return Array.from(zoneMap.entries())
      .filter(([, emitters]) => emitters.length > 0)
      .map(([zoneName, emitters]) => ({
        zoneName,
        emitters,
        activeCount: emitters.filter((e) => e.active).length,
      }));
  }

  private async toggleEmitter(emitter: IrrigationEmitterInfo) {
    if (!this.hass) return;
    const active = emitter.active;

    // Stop action with custom service
    if (active && emitter.actionServiceOff) {
      const parts = emitter.actionServiceOff.split(".");
      if (parts.length === 2) {
        const [domain, service] = parts;
        let data: Record<string, unknown> = {};
        if (emitter.actionServiceOffData) {
          try {
            data = JSON.parse(emitter.actionServiceOffData);
          } catch {
            /* ignore */
          }
        }
        if (emitter.entity && !data.entity_id) data.entity_id = emitter.entity;
        try {
          await this.hass.callService(domain, service, data);
          return;
        } catch (err) {
          console.error("Failed stop irrigation service call:", err);
        }
      }
    }

    // Start action with custom service
    if (!active && emitter.actionService) {
      const parts = emitter.actionService.split(".");
      if (parts.length === 2) {
        const [domain, service] = parts;
        let data: Record<string, unknown> = {};
        if (emitter.actionServiceData) {
          try {
            data = JSON.parse(emitter.actionServiceData);
          } catch {
            /* ignore */
          }
        }
        if (emitter.entity && !data.entity_id) data.entity_id = emitter.entity;
        try {
          await this.hass.callService(domain, service, data);
          return;
        } catch (err) {
          console.error("Failed start irrigation service call:", err);
        }
      }
    }

    // Fallback: standard switch or valve
    if (!emitter.entity) return;
    const domain = emitter.entity.split(".")[0];
    const service =
      domain === "valve"
        ? active
          ? "close_valve"
          : "open_valve"
        : active
          ? "turn_off"
          : "turn_on";
    try {
      if (domain === "binary_sensor") {
        const switchCandidate = emitter.entity.replace(/^binary_sensor\./, "switch.");
        if (this.hass.states[switchCandidate]) {
          await this.hass.callService("switch", service, { entity_id: switchCandidate });
          return;
        }
      }
      await this.hass.callService(domain, service, { entity_id: emitter.entity });
    } catch (err) {
      console.error("Failed to toggle irrigation emitter:", err);
    }
  }

  private async toggleController(controller: HassEntity) {
    if (!this.hass) return;
    const domain = controller.entity_id.split(".")[0];
    const active = controller.state === "on";
    const service = active ? "turn_off" : "turn_on";
    try {
      await this.hass.callService(domain, service, { entity_id: controller.entity_id });
    } catch (err) {
      console.error("Failed to toggle irrigation controller:", err);
    }
  }

  private locateEmitter(e: IrrigationEmitterInfo) {
    this.dispatchEvent(
      new CustomEvent("sprinkler-pick", {
        detail: { id: e.id, floorId: e.floorId, x: e.x, z: e.z },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private emitterIcon(type: string): string {
    switch (type) {
      case "sprinkler_popup":
        return "💦";
      case "sprinkler_rotor":
        return "🌊";
      case "sprinkler_drip":
        return "💧";
      case "drip_line":
        return "〰️";
      case "irrigation_valve":
        return "🚰";
      default:
        return "🌱";
    }
  }

  render() {
    const zones = this.getZones();
    const totalActive = zones.reduce((sum, z) => sum + z.activeCount, 0);
    const controller = this.getControllerEntity();

    return html`
      <div class="fp3d-irrig-wrap">
        <header class="fp3d-irrig-head">
          <div class="fp3d-irrig-title-row">
            <span class="fp3d-irrig-icon">💧</span>
            <div>
              <div class="fp3d-irrig-title">${this.t("irrigation_title")}</div>
              <div class="fp3d-irrig-subtitle">
                ${totalActive > 0
                  ? html`<span class="fp3d-badge-active">● ${totalActive} ${this.t("irrigation_active")}</span>`
                  : html`<span class="fp3d-badge-idle">○ ${this.t("irrigation_idle")}</span>`}
              </div>
            </div>
          </div>
          <button
            class="fp3d-btn fp3d-close-btn"
            title=${this.t("close")}
            aria-label=${this.t("close")}
            @click=${() => this.dispatchEvent(new CustomEvent("irrigation-close", { bubbles: true, composed: true }))}
          >
            ✕
          </button>
        </header>

        ${controller
          ? html`<div class="fp3d-irrig-controller-card">
              <div class="fp3d-ctrl-head">
                <div class="fp3d-ctrl-title">
                  <span class="fp3d-ctrl-icon">🎛️</span>
                  <div>
                    <div class="fp3d-ctrl-name">${controller.attributes.friendly_name || controller.entity_id}</div>
                    <div class="fp3d-ctrl-desc">OpenSprinkler</div>
                  </div>
                </div>
                ${controller.entity_id.startsWith("switch.")
                  ? html`<button
                      class="fp3d-btn ${controller.state === "on" ? "fp3d-danger" : "fp3d-primary"}"
                      @click=${() => this.toggleController(controller)}
                    >
                      ${controller.state === "on" ? this.t("irrigation_stop") : this.t("irrigation_start")}
                    </button>`
                  : html`<span class="fp3d-state-text">${controller.state}</span>`}
              </div>
              ${controller.attributes.rain_delay
                ? html`<div class="fp3d-ctrl-attr">🌧️ Rain Delay: ${controller.attributes.rain_delay} h</div>`
                : nothing}
            </div>`
          : nothing}

        ${zones.length === 0
          ? html`<div class="fp3d-irrig-empty">
              <p>${this.t("irrigation_no_elements")}</p>
            </div>`
          : html`
              <div class="fp3d-irrig-zones-list">
                ${zones.map(
                  (grp) => html`
                    <div class="fp3d-zone-group">
                      <div class="fp3d-zone-header">
                        <span class="fp3d-zone-name">🌿 ${grp.zoneName}</span>
                        ${grp.activeCount > 0
                          ? html`<span class="fp3d-badge-active">${grp.activeCount} ${this.t("irrigation_active")}</span>`
                          : nothing}
                      </div>

                      <div class="fp3d-emitters-grid">
                        ${grp.emitters.map(
                          (em) => html`
                            <div class="fp3d-emitter-card ${em.active ? "fp3d-emitter-active" : ""}">
                              <div class="fp3d-emitter-main" @click=${() => this.locateEmitter(em)} title="Centra nel piano 3D">
                                <span class="fp3d-emitter-icon">${this.emitterIcon(em.type)}</span>
                                <div class="fp3d-emitter-info">
                                  <div class="fp3d-emitter-name">${em.name}</div>
                                  <div class="fp3d-emitter-status-text">
                                    ${em.active
                                      ? html`<span class="fp3d-badge-active">● ${this.t("irrigation_active")}</span>`
                                      : html`<span class="fp3d-badge-idle">${this.t("irrigation_idle")}</span>`}
                                  </div>
                                </div>
                              </div>
                              <div class="fp3d-emitter-action">
                                <button
                                  class="fp3d-btn fp3d-mini-btn ${em.active ? "fp3d-danger" : "fp3d-primary"}"
                                  @click=${() => this.toggleEmitter(em)}
                                >
                                  ${em.active ? this.t("irrigation_stop") : this.t("irrigation_start")}
                                </button>
                              </div>
                            </div>
                          `,
                        )}
                      </div>
                    </div>
                  `,
                )}
              </div>
            `}
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
        width: 320px;
        max-width: calc(100vw - 24px);
        max-height: calc(100vh - 80px);
        background: rgba(14, 23, 42, 0.96);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        border: 1px solid rgba(56, 189, 248, 0.25);
        border-radius: 12px;
        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.55);
        color: #fff;
        z-index: 40;
        overflow-y: auto;
      }
      .fp3d-irrig-wrap {
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .fp3d-irrig-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .fp3d-irrig-title-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .fp3d-irrig-icon {
        font-size: 20px;
      }
      .fp3d-irrig-title {
        font-weight: 700;
        font-size: 15px;
        letter-spacing: -0.2px;
      }
      .fp3d-irrig-subtitle {
        font-size: 11px;
        margin-top: 1px;
      }
      .fp3d-badge-active {
        color: #38bdf8;
        font-weight: 600;
      }
      .fp3d-badge-idle {
        color: #94a3b8;
      }
      .fp3d-close-btn {
        width: 26px;
        height: 26px;
        min-width: 26px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
      }
      .fp3d-irrig-controller-card {
        background: rgba(30, 41, 59, 0.65);
        border: 1px solid rgba(56, 189, 248, 0.2);
        border-radius: 8px;
        padding: 8px 10px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .fp3d-ctrl-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .fp3d-ctrl-title {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .fp3d-ctrl-icon {
        font-size: 18px;
      }
      .fp3d-ctrl-name {
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-ctrl-desc {
        font-size: 10px;
        color: #94a3b8;
      }
      .fp3d-ctrl-attr {
        font-size: 11px;
        color: #cbd5e1;
      }
      .fp3d-state-text {
        font-size: 12px;
        font-weight: 600;
        color: #38bdf8;
      }
      .fp3d-irrig-empty {
        padding: 18px 8px;
        text-align: center;
        color: #94a3b8;
        font-size: 12px;
      }
      .fp3d-irrig-zones-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .fp3d-zone-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .fp3d-zone-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2px;
      }
      .fp3d-zone-name {
        font-size: 12px;
        font-weight: 700;
        color: #e2e8f0;
      }
      .fp3d-emitters-grid {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      .fp3d-emitter-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(30, 41, 59, 0.45);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 6px;
        padding: 6px 8px;
        transition: all 0.2s ease;
      }
      .fp3d-emitter-active {
        background: rgba(2, 132, 199, 0.18);
        border-color: rgba(56, 189, 248, 0.45);
        box-shadow: 0 0 10px rgba(56, 189, 248, 0.2);
      }
      .fp3d-emitter-main {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        flex: 1;
        min-width: 0;
      }
      .fp3d-emitter-icon {
        font-size: 16px;
      }
      .fp3d-emitter-info {
        display: flex;
        flex-direction: column;
        min-width: 0;
      }
      .fp3d-emitter-name {
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-emitter-status-text {
        font-size: 10.5px;
        margin-top: 1px;
      }
      .fp3d-emitter-action {
        margin-left: 6px;
      }
      .fp3d-mini-btn {
        padding: 3px 8px;
        font-size: 11px;
        min-height: 24px;
      }
    `,
  ];
}

if (!customElements.get("fp3d-irrigation-panel")) {
  customElements.define("fp3d-irrigation-panel", Fp3dIrrigationPanel);
}
