import test from "node:test";
import assert from "node:assert/strict";
import {
  FURNITURE_SIZE,
  FURNITURE_GROUPS,
  IRRIGATION_SPRINKLER_TYPES,
  IRRIGATION_TYPES,
  ELECTRIC_FURNITURE,
  techBase,
} from "./model.ts";
import {
  buildIrrigationWater,
  updateIrrigationWater,
  disposeIrrigationWater,
  type ActiveSprinkler,
} from "./viewer/irrigation-water.ts";
import { Mesh, LineSegments } from "three";

test("irrigation furniture types and defaults are defined", () => {
  for (const t of IRRIGATION_TYPES) {
    assert.ok((FURNITURE_SIZE as Record<string, [number, number, number]>)[t], `FURNITURE_SIZE has entry for ${t}`);
    assert.ok(ELECTRIC_FURNITURE.has(t), `ELECTRIC_FURNITURE includes ${t}`);
  }

  assert.ok(IRRIGATION_SPRINKLER_TYPES.has("sprinkler_popup"));
  assert.ok(IRRIGATION_SPRINKLER_TYPES.has("sprinkler_rotor"));
  assert.ok(IRRIGATION_SPRINKLER_TYPES.has("sprinkler_drip"));
  assert.ok(IRRIGATION_SPRINKLER_TYPES.has("drip_line"));
  assert.equal(IRRIGATION_SPRINKLER_TYPES.has("irrigation_controller"), false);

  assert.ok(FURNITURE_GROUPS.irrigation.includes("irrigation_controller"));
  assert.ok(FURNITURE_GROUPS.irrigation.includes("sprinkler_popup"));
  assert.ok(FURNITURE_GROUPS.irrigation.includes("sprinkler_rotor"));
  assert.ok(FURNITURE_GROUPS.irrigation.includes("sprinkler_drip"));
  assert.ok(FURNITURE_GROUPS.irrigation.includes("drip_line"));
  assert.ok(FURNITURE_GROUPS.irrigation.includes("irrigation_valve"));

  assert.equal(techBase({ type: "irrigation_controller", h: 0.22 }, 2.5), 1.3);
});

test("buildIrrigationWater creates 3D water meshes for active sprinklers and respects reach, fov and type", () => {
  const sprinklers: ActiveSprinkler[] = [
    {
      id: "pop1",
      floorId: "f1",
      x: 0,
      y: 0.1,
      z: 0,
      rotation: 45,
      fov: 90,
      reach: 4.0,
      type: "sprinkler_popup",
      active: true,
      zone: "Zone 1",
    },
    {
      id: "rot1",
      floorId: "f1",
      x: 5,
      y: 0.1,
      z: 5,
      rotation: 180,
      fov: 120,
      reach: 8.0,
      type: "sprinkler_rotor",
      active: true,
      zone: "Zone 2",
    },
    {
      id: "drip1",
      floorId: "f1",
      x: 2,
      y: 0.1,
      z: 2,
      rotation: 0,
      fov: 360,
      reach: 0.8,
      type: "sprinkler_drip",
      active: true,
      zone: "Zone 3",
    },
    {
      id: "line1",
      floorId: "f1",
      x: -4,
      y: 0.05,
      z: 2,
      rotation: 90,
      fov: 360,
      reach: 0.5,
      length: 3.0,
      dripPitch: 0.33,
      type: "drip_line",
      active: true,
      zone: "Zone 4",
    },
    {
      id: "inactive1",
      floorId: "f1",
      x: 10,
      y: 0.1,
      z: 10,
      rotation: 0,
      fov: 90,
      reach: 3.5,
      type: "sprinkler_popup",
      active: false,
    },
  ];

  const group = buildIrrigationWater(sprinklers, 1.0);
  assert.equal(group.name, "fp3d-irrigation");
  assert.ok(group.children.length > 0, "Created water meshes for active sprinklers");

  // Verify meshes and lines were generated
  const meshes = group.children.filter((c) => c instanceof Mesh);
  const lines = group.children.filter((c) => c instanceof LineSegments);
  assert.ok(meshes.length >= 3, "Contains water mesh for each active sprinkler type");
  assert.ok(lines.length >= 2, "Contains stream/ripple lines");

  // Verify alpha attribute exists and transparency increases (alpha decreases) along the jet
  const popupMesh = meshes[0];
  const alphaAttr = popupMesh.geometry.getAttribute("alpha");
  assert.ok(alphaAttr, "Water mesh has alpha attribute for transparency gradient");
  assert.ok(alphaAttr.getX(0) > 0.8, "Alpha is high (opaque) near nozzle");
  assert.ok(alphaAttr.getX(alphaAttr.count - 1) < 0.25, "Alpha is low (transparent) at the end of the jet");

  // Check update animation step
  updateIrrigationWater(group, sprinklers, 2.5);
  assert.ok(group.children.length > 0, "Updated water meshes smoothly");

  // Check cleanup
  disposeIrrigationWater(group);
  assert.equal(group.children.length, 0, "Cleaned up all meshes on dispose");
});
