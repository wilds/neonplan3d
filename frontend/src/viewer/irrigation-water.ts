// 3D visualization of active irrigation:
// - Pop-up sprinklers (sprinkler_popup): curved parabolic fan/mist of water spray
// - Rotor sprinklers (sprinkler_rotor): energetic arcing water jets/zampilli sweeping across the sector
// - Drip emitters (sprinkler_drip): pulsating wet ground puddle with expanding ripples and drip droplets
// - Drip line (drip_line): flexible PE hose with droplets and puddles at each emitter hole
//
// The water effect changes color and smoothly increases transparency towards the end of the jet.

import {
  AdditiveBlending,
  BufferGeometry,
  DoubleSide,
  Float32BufferAttribute,
  Group,
  LineSegments,
  Mesh,
  ShaderMaterial,
} from "three";

export interface ActiveSprinkler {
  id: string;
  floorId: string;
  x: number;
  y: number;
  z: number;
  rotation: number;
  fov: number;
  reach: number;
  type: "sprinkler_popup" | "sprinkler_rotor" | "sprinkler_drip" | "drip_line";
  active: boolean;
  zone?: string | null;
  length?: number;
  dripPitch?: number;
}

const DEG = Math.PI / 180;

const WATER_SPRAY_VERT = /* glsl */ `
  attribute float alpha;
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    vAlpha = alpha;
    vColor = color;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const WATER_SPRAY_FRAG = /* glsl */ `
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    gl_FragColor = vec4(vColor * vAlpha, vAlpha);
  }
`;

function waterSprayMaterial(): ShaderMaterial {
  return new ShaderMaterial({
    vertexShader: WATER_SPRAY_VERT,
    fragmentShader: WATER_SPRAY_FRAG,
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    side: DoubleSide,
    blending: AdditiveBlending,
  });
}

/**
 * Calculates color and opacity along the jet (frac from 0 = nozzle to 1 = end of jet).
 * Changes color from dense water blue to crystal azure to pale aerosol mist,
 * while smoothly increasing transparency towards the end.
 */
function waterColorAndAlpha(frac: number): { r: number; g: number; b: number; a: number } {
  const f = Math.max(0, Math.min(1, frac));
  let r: number, g: number, b: number;
  if (f < 0.4) {
    const t = f / 0.4;
    r = 0.10 + 0.22 * t;
    g = 0.58 + 0.22 * t;
    b = 0.98 + 0.02 * t;
  } else {
    const t = (f - 0.4) / 0.6;
    r = 0.32 + 0.43 * t;
    g = 0.80 + 0.12 * t;
    b = 1.0;
  }
  // Transparency increases towards the end of the jet: alpha fades from 0.92 down to 0.04
  const a = Math.max(0.04, 0.92 * Math.pow(Math.max(0, 1.0 - f * 0.96), 1.5));
  return { r, g, b, a };
}

/** Builds a 3D group containing water meshes for all currently active sprinklers on a floor. */
export function buildIrrigationWater(sprinklers: ActiveSprinkler[], time = 0): Group {
  const group = new Group();
  group.name = "fp3d-irrigation";
  group.renderOrder = 8; // render over ground and furniture

  for (const s of sprinklers) {
    if (!s.active) continue;
    switch (s.type) {
      case "sprinkler_popup":
        buildPopupSpray(group, s, time);
        break;
      case "sprinkler_rotor":
        buildRotorJets(group, s, time);
        break;
      case "sprinkler_drip":
        buildDripPuddle(group, s, time);
        break;
      case "drip_line":
        buildDripLinePuddles(group, s, time);
        break;
    }
  }

  return group;
}

/** Updates dynamic animated components (e.g. oscillating sweeping rotor stream, drip pulses). */
export function updateIrrigationWater(group: Group, sprinklers: ActiveSprinkler[], time: number): void {
  disposeIrrigationWater(group);
  for (const s of sprinklers) {
    if (!s.active) continue;
    switch (s.type) {
      case "sprinkler_popup":
        buildPopupSpray(group, s, time);
        break;
      case "sprinkler_rotor":
        buildRotorJets(group, s, time);
        break;
      case "sprinkler_drip":
        buildDripPuddle(group, s, time);
        break;
      case "drip_line":
        buildDripLinePuddles(group, s, time);
        break;
    }
  }
}

/** Pop-up sprinkler: arched parabolic mist fan of fine water spray with fading transparency. */
function buildPopupSpray(group: Group, s: ActiveSprinkler, time: number): void {
  const fov = Math.min(360, Math.max(15, s.fov ?? 90));
  const reach = Math.max(0.5, s.reach ?? 3.5);
  const rot = (s.rotation ?? 0) * DEG;
  const half = (fov * DEG) / 2;
  const n = Math.max(8, Math.round(fov / 7));
  const rings = 10;
  const maxH = Math.min(1.2, Math.max(0.4, reach * 0.22));

  const positions: number[] = [];
  const colors: number[] = [];
  const alphas: number[] = [];

  const linePos: number[] = [];
  const lineCol: number[] = [];
  const lineAlpha: number[] = [];

  const wave = Math.sin(time * 6.0) * 0.04;

  const getPt = (angleOff: number, frac: number): [number, number, number] => {
    const a = rot + angleOff;
    const r = reach * frac;
    const arc = 4.0 * maxH * frac * (1.0 - 0.95 * frac) + wave * frac;
    const px = s.x - Math.sin(a) * r;
    const py = s.y + arc;
    const pz = s.z + Math.cos(a) * r;
    return [px, py, pz];
  };

  const pushVertex = (pos: [number, number, number], frac: number) => {
    positions.push(...pos);
    const ca = waterColorAndAlpha(frac);
    colors.push(ca.r, ca.g, ca.b);
    alphas.push(ca.a);
  };

  for (let i = 0; i < n; i++) {
    const a0 = -half + (2 * half * i) / n;
    const a1 = -half + (2 * half * (i + 1)) / n;

    for (let k = 0; k < rings; k++) {
      const f0 = k / rings;
      const f1 = (k + 1) / rings;

      const p00 = getPt(a0, f0);
      const p10 = getPt(a1, f0);
      const p11 = getPt(a1, f1);
      const p01 = getPt(a0, f1);

      // Tri 1: p00, p10, p11
      pushVertex(p00, f0);
      pushVertex(p10, f0);
      pushVertex(p11, f1);

      // Tri 2: p00, p11, p01
      pushVertex(p00, f0);
      pushVertex(p11, f1);
      pushVertex(p01, f1);
    }

    // Outer stream lines fading towards the end of the jet
    const streamSteps = 6;
    for (let st = 0; st < streamSteps; st++) {
      const sf0 = st / streamSteps;
      const sf1 = (st + 1) / streamSteps;
      const lp0 = getPt(a0, sf0);
      const lp1 = getPt(a0, sf1);

      linePos.push(...lp0, ...lp1);
      const c0 = waterColorAndAlpha(sf0);
      const c1 = waterColorAndAlpha(sf1);
      lineCol.push(c0.r, c0.g, c0.b, c1.r, c1.g, c1.b);
      lineAlpha.push(c0.a * 0.8, c1.a * 0.8);
    }
  }

  const geom = new BufferGeometry();
  geom.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geom.setAttribute("color", new Float32BufferAttribute(colors, 3));
  geom.setAttribute("alpha", new Float32BufferAttribute(alphas, 1));
  group.add(new Mesh(geom, waterSprayMaterial()));

  if (linePos.length > 0) {
    const lineGeom = new BufferGeometry();
    lineGeom.setAttribute("position", new Float32BufferAttribute(linePos, 3));
    lineGeom.setAttribute("color", new Float32BufferAttribute(lineCol, 3));
    lineGeom.setAttribute("alpha", new Float32BufferAttribute(lineAlpha, 1));
    group.add(new LineSegments(lineGeom, waterSprayMaterial()));
  }
}

/** Rotor sprinkler: sweeping stream jets with color shift and increasing transparency towards landing. */
function buildRotorJets(group: Group, s: ActiveSprinkler, time: number): void {
  const fov = Math.min(360, Math.max(15, s.fov ?? 90));
  const reach = Math.max(1.0, s.reach ?? 6.0);
  const rot = (s.rotation ?? 0) * DEG;
  const half = (fov * DEG) / 2;
  const maxH = Math.min(1.8, Math.max(0.6, reach * 0.26));

  const osc = Math.sin(time * 2.2);
  const sweepAngle = rot + osc * half;

  const positions: number[] = [];
  const colors: number[] = [];
  const alphas: number[] = [];

  const linePos: number[] = [];
  const lineCol: number[] = [];
  const lineAlpha: number[] = [];

  const streams = [
    { angle: sweepAngle, rMax: reach, hMul: 1.0, power: 1.0 },
    { angle: rot + (osc * 0.5 - 0.25) * half, rMax: reach * 0.65, hMul: 0.8, power: 0.7 },
    { angle: rot + (osc * 0.5 + 0.25) * half, rMax: reach * 0.35, hMul: 0.6, power: 0.5 },
  ];

  for (const st of streams) {
    const steps = 18;
    let prevPt: [number, number, number] = [s.x, s.y, s.z];

    for (let k = 1; k <= steps; k++) {
      const prevFrac = (k - 1) / steps;
      const currFrac = k / steps;
      const r = st.rMax * currFrac;
      const arc = 4.0 * maxH * st.hMul * currFrac * (1.0 - 0.94 * currFrac);
      const px = s.x - Math.sin(st.angle) * r;
      const py = s.y + arc;
      const pz = s.z + Math.cos(st.angle) * r;
      const currPt: [number, number, number] = [px, py, pz];

      linePos.push(...prevPt, ...currPt);
      const c0 = waterColorAndAlpha(prevFrac);
      const c1 = waterColorAndAlpha(currFrac);
      lineCol.push(c0.r, c0.g, c0.b, c1.r, c1.g, c1.b);
      lineAlpha.push(c0.a, c1.a);

      // Ribbon volume
      const ribbonW = 0.04 * st.power;
      const perpX = Math.cos(st.angle) * ribbonW;
      const perpZ = Math.sin(st.angle) * ribbonW;

      positions.push(
        currPt[0] - perpX, currPt[1], currPt[2] - perpZ,
        currPt[0] + perpX, currPt[1], currPt[2] + perpZ,
        prevPt[0] + perpX, prevPt[1], prevPt[2] + perpZ,
      );
      colors.push(c1.r, c1.g, c1.b, c1.r, c1.g, c1.b, c0.r, c0.g, c0.b);
      alphas.push(c1.a, c1.a, c0.a);

      prevPt = currPt;
    }

    // Impact splash disc at stream landing tip
    const tipX = prevPt[0];
    const tipZ = prevPt[2];
    const splashR = 0.28 * st.power;
    const splashSegs = 12;
    for (let j = 0; j < splashSegs; j++) {
      const sa0 = (j / splashSegs) * Math.PI * 2;
      const sa1 = ((j + 1) / splashSegs) * Math.PI * 2;
      positions.push(
        tipX, s.y + 0.02, tipZ,
        tipX + Math.cos(sa0) * splashR, s.y + 0.02, tipZ + Math.sin(sa0) * splashR,
        tipX + Math.cos(sa1) * splashR, s.y + 0.02, tipZ + Math.sin(sa1) * splashR,
      );
      colors.push(0.85, 0.95, 1.0, 0.45, 0.85, 1.0, 0.45, 0.85, 1.0);
      alphas.push(0.4, 0.08, 0.08);
    }
  }

  // Faint guide lines for sector boundaries
  const leftEdge = [s.x - Math.sin(rot - half) * reach, s.y + 0.02, s.z + Math.cos(rot - half) * reach];
  const rightEdge = [s.x - Math.sin(rot + half) * reach, s.y + 0.02, s.z + Math.cos(rot + half) * reach];
  linePos.push(s.x, s.y + 0.02, s.z, leftEdge[0], leftEdge[1], leftEdge[2]);
  linePos.push(s.x, s.y + 0.02, s.z, rightEdge[0], rightEdge[1], rightEdge[2]);
  lineCol.push(0.38, 0.74, 0.98, 0.75, 0.92, 1.0, 0.38, 0.74, 0.98, 0.75, 0.92, 1.0);
  lineAlpha.push(0.3, 0.05, 0.3, 0.05);

  const geom = new BufferGeometry();
  geom.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geom.setAttribute("color", new Float32BufferAttribute(colors, 3));
  geom.setAttribute("alpha", new Float32BufferAttribute(alphas, 1));
  group.add(new Mesh(geom, waterSprayMaterial()));

  const lineGeom = new BufferGeometry();
  lineGeom.setAttribute("position", new Float32BufferAttribute(linePos, 3));
  lineGeom.setAttribute("color", new Float32BufferAttribute(lineCol, 3));
  lineGeom.setAttribute("alpha", new Float32BufferAttribute(lineAlpha, 1));
  group.add(new LineSegments(lineGeom, waterSprayMaterial()));
}

/** Drip emitter: pulsating wet ground puddle with expanding ripples and dripping droplet line. */
function buildDripPuddle(group: Group, s: ActiveSprinkler, time: number): void {
  const reach = Math.max(0.3, s.reach ?? 0.6);
  const puddleR = reach;
  const segs = 16;
  const positions: number[] = [];
  const colors: number[] = [];
  const alphas: number[] = [];

  for (let i = 0; i < segs; i++) {
    const a0 = (i / segs) * Math.PI * 2;
    const a1 = ((i + 1) / segs) * Math.PI * 2;
    positions.push(
      s.x, s.y + 0.015, s.z,
      s.x + Math.cos(a0) * puddleR, s.y + 0.015, s.z + Math.sin(a0) * puddleR,
      s.x + Math.cos(a1) * puddleR, s.y + 0.015, s.z + Math.sin(a1) * puddleR,
    );
    colors.push(0.2, 0.7, 0.95, 0.5, 0.85, 1.0, 0.5, 0.85, 1.0);
    alphas.push(0.65, 0.06, 0.06);
  }

  const rippleFrac = (time * 1.2) % 1.0;
  const ripR = puddleR * rippleFrac;
  const linesPos: number[] = [];
  const lineCol: number[] = [];
  const lineAlpha: number[] = [];

  for (let i = 0; i < segs; i++) {
    const a0 = (i / segs) * Math.PI * 2;
    const a1 = ((i + 1) / segs) * Math.PI * 2;
    linesPos.push(
      s.x + Math.cos(a0) * ripR, s.y + 0.02, s.z + Math.sin(a0) * ripR,
      s.x + Math.cos(a1) * ripR, s.y + 0.02, s.z + Math.sin(a1) * ripR,
    );
    lineCol.push(0.4, 0.85, 1.0, 0.4, 0.85, 1.0);
    lineAlpha.push(0.7 * (1.0 - rippleFrac), 0.7 * (1.0 - rippleFrac));
  }

  const dropY = s.y + 0.08 - ((time * 2.0) % 1.0) * 0.07;
  linesPos.push(s.x, s.y + 0.08, s.z, s.x, dropY, s.z);
  lineCol.push(0.8, 0.95, 1.0, 0.4, 0.8, 1.0);
  lineAlpha.push(0.8, 0.3);

  const geom = new BufferGeometry();
  geom.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geom.setAttribute("color", new Float32BufferAttribute(colors, 3));
  geom.setAttribute("alpha", new Float32BufferAttribute(alphas, 1));
  group.add(new Mesh(geom, waterSprayMaterial()));

  const lineGeom = new BufferGeometry();
  lineGeom.setAttribute("position", new Float32BufferAttribute(linesPos, 3));
  lineGeom.setAttribute("color", new Float32BufferAttribute(lineCol, 3));
  lineGeom.setAttribute("alpha", new Float32BufferAttribute(lineAlpha, 1));
  group.add(new LineSegments(lineGeom, waterSprayMaterial()));
}

/** Drip line / tubo gocciolante: emits water droplets and wet puddles at every emitter hole along the hose. */
function buildDripLinePuddles(group: Group, s: ActiveSprinkler, time: number): void {
  const len = Math.max(0.4, s.length ?? 4.0);
  const pitch = Math.max(0.08, s.dripPitch ?? 0.33);
  const rot = (s.rotation ?? 0) * DEG;
  const count = Math.max(1, Math.floor(len / pitch));
  const step = len / count;
  const dirX = Math.cos(rot);
  const dirZ = Math.sin(rot);

  const puddleR = Math.min(0.25, Math.max(0.08, pitch * 0.45));
  const segs = 10;
  const positions: number[] = [];
  const colors: number[] = [];
  const alphas: number[] = [];
  const linesPos: number[] = [];
  const lineCol: number[] = [];
  const lineAlpha: number[] = [];

  for (let i = 0; i <= count; i++) {
    const d = -len / 2 + i * step;
    const hx = s.x + dirX * d;
    const hz = s.z + dirZ * d;

    // Small wet puddle for each hole
    for (let j = 0; j < segs; j++) {
      const a0 = (j / segs) * Math.PI * 2;
      const a1 = ((j + 1) / segs) * Math.PI * 2;
      positions.push(
        hx, s.y + 0.012, hz,
        hx + Math.cos(a0) * puddleR, s.y + 0.012, hz + Math.sin(a0) * puddleR,
        hx + Math.cos(a1) * puddleR, s.y + 0.012, hz + Math.sin(a1) * puddleR,
      );
      colors.push(0.25, 0.72, 0.95, 0.5, 0.85, 1.0, 0.5, 0.85, 1.0);
      alphas.push(0.65, 0.06, 0.06);
    }

    const ripFrac = (time * 1.4 + i * 0.25) % 1.0;
    const ripR = puddleR * ripFrac;
    for (let j = 0; j < segs; j++) {
      const a0 = (j / segs) * Math.PI * 2;
      const a1 = ((j + 1) / segs) * Math.PI * 2;
      linesPos.push(
        hx + Math.cos(a0) * ripR, s.y + 0.016, hz + Math.sin(a0) * ripR,
        hx + Math.cos(a1) * ripR, s.y + 0.016, hz + Math.sin(a1) * ripR,
      );
      lineCol.push(0.4, 0.85, 1.0, 0.4, 0.85, 1.0);
      lineAlpha.push(0.7 * (1.0 - ripFrac), 0.7 * (1.0 - ripFrac));
    }

    const dropY = s.y + 0.025 - ((time * 2.2 + i * 0.3) % 1.0) * 0.02;
    linesPos.push(hx, s.y + 0.025, hz, hx, dropY, hz);
    lineCol.push(0.85, 0.95, 1.0, 0.4, 0.8, 1.0);
    lineAlpha.push(0.8, 0.2);
  }

  const geom = new BufferGeometry();
  geom.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geom.setAttribute("color", new Float32BufferAttribute(colors, 3));
  geom.setAttribute("alpha", new Float32BufferAttribute(alphas, 1));
  group.add(new Mesh(geom, waterSprayMaterial()));

  if (linesPos.length > 0) {
    const lineGeom = new BufferGeometry();
    lineGeom.setAttribute("position", new Float32BufferAttribute(linesPos, 3));
    lineGeom.setAttribute("color", new Float32BufferAttribute(lineCol, 3));
    lineGeom.setAttribute("alpha", new Float32BufferAttribute(lineAlpha, 1));
    group.add(new LineSegments(lineGeom, waterSprayMaterial()));
  }
}

/** Frees all geometries and materials of an irrigation group. */
export function disposeIrrigationWater(group: Group): void {
  for (const c of group.children) {
    (c as Mesh).geometry?.dispose();
    ((c as Mesh).material as { dispose?: () => void } | undefined)?.dispose?.();
  }
  group.clear();
}
