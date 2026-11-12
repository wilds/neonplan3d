import test from "node:test";
import assert from "node:assert/strict";
import { Fp3dAlarmPanel } from "./components/alarm-panel.ts";
import type { Building } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

test("alarm panel collects PIR, presence, contact sensors and alarm states", async () => {
  const panel = new Fp3dAlarmPanel();
  const hass = {
    language: "it",
    states: {
      "alarm_control_panel.home": {
        entity_id: "alarm_control_panel.home",
        state: "armed_home",
        attributes: { friendly_name: "Allarme Casa", code_format: "number" },
      },
      "binary_sensor.pir_salotto": {
        entity_id: "binary_sensor.pir_salotto",
        state: "on",
        attributes: { device_class: "motion", friendly_name: "PIR Salotto" },
      },
      "binary_sensor.presenza_studio": {
        entity_id: "binary_sensor.presenza_studio",
        state: "off",
        attributes: { device_class: "presence", friendly_name: "Presenza Studio" },
      },
      "binary_sensor.porta_ingresso": {
        entity_id: "binary_sensor.porta_ingresso",
        state: "off",
        attributes: { device_class: "door", friendly_name: "Porta Ingresso" },
      },
    },
    callService: async () => {},
  } as unknown as HomeAssistant;

  const building: Building = {
    version: 1,
    presence: [],
    settings: {} as any,
    energy: {} as any,
    floors: [
      {
        id: "piano1",
        name: "Piano Terra",
        elevation: 0,
        height: 2.7,
        rooms: [{ id: "r1", name: "Salotto", area_id: null, points: [[0, 0], [5, 0], [5, 5], [0, 5]], floor_material: null } as any],
        openings: [
          {
            id: "o1",
            room_id: "r1",
            edge: 0,
            offset: 1,
            width: 0.9,
            type: "door",
            sill: 0,
            height: 2.1,
            hinge: "left",
            leaves: 1,
            swing: "in",
            cover: null,
            tilt: null,
            contact: "binary_sensor.porta_ingresso",
            contact2: null,
          } as any,
        ],
        furniture: [
          {
            id: "f_pir",
            type: "sensor_pir",
            x: 2,
            z: 2,
            rotation: 0,
            w: 0.08,
            d: 0.08,
            h: 0.1,
            variant: null,
            entity: "binary_sensor.pir_salotto",
          } as any,
          {
            id: "f_pres",
            type: "sensor_presence",
            x: 3,
            z: 3,
            rotation: 0,
            w: 0.08,
            d: 0.04,
            h: 0.08,
            variant: null,
            entity: "binary_sensor.presenza_studio",
          } as any,
        ],
        placements: [],
      } as any,
    ],
  };

  panel.hass = hass;
  panel.building = building;

  const sensors = (panel as any).collectSensors();
  assert.equal(sensors.length, 3);

  // Active sensor comes first within its room, and sensors have their alarm trigger modes
  assert.equal(sensors[0].id, "binary_sensor.pir_salotto");
  assert.equal(sensors[0].active, true);
  assert.equal(sensors[0].kind, "pir");
  assert.ok(sensors[0].modes.includes("armed_away"));

  // Contact sensor on the door
  const contact = sensors.find((s: any) => s.id === "binary_sensor.porta_ingresso");
  assert.ok(contact);
  assert.equal(contact.kind, "contact");
  assert.equal(contact.active, false);
  assert.ok(contact.modes.includes("armed_home"));
  assert.ok(contact.modes.includes("armed_away"));

  // Alarm entity
  const alarms = (panel as any).alarmEntities();
  assert.deepEqual(alarms, ["alarm_control_panel.home"]);
  const cur = (panel as any).currentAlarm();
  assert.equal(cur.state, "armed_home");

  // PIN requirement test: no pin configured -> hasConfiguredPin is false
  assert.equal((panel as any).hasConfiguredPin(), false);

  // Set pin in building settings
  building.settings.alarm = { pin: "1234", modes: ["armed_home", "armed_away"] };
  assert.equal((panel as any).hasConfiguredPin(), true);

  let serviceCalled = false;
  let serviceData: any = null;
  (hass as any).callService = async (_domain: string, _service: string, data: any) => {
    serviceCalled = true;
    serviceData = data;
  };

  // Disarm without entered pin must NOT call service when pin is required
  panel.pinCode = "";
  await (panel as any).callAlarmService("alarm_disarm");
  assert.equal(serviceCalled, false);

  // Disarm with entered pin calls service
  panel.pinCode = "1234";
  await (panel as any).callAlarmService("alarm_disarm");
  assert.equal(serviceCalled, true);
  assert.equal(serviceData.code, "1234");
});
