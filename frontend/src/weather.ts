/**
 * Weather outside the house, read from a `weather.*` entity: how much it rains or snows, fog, cloud
 * cover, wind and lightning, each 0…1, so the 3D view can draw particles, dim the sky and the sun.
 */
import { DEFAULT_WEATHER_EFFECTS, type WeatherEffect } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

export interface WeatherState {
  entity: string;
  condition: string;
  rain: number;
  snow: number;
  fog: number;
  cloud: number;
  wind: number;
  wind_bearing: number | null;
  lightning: boolean;
}

/** Home Assistant's weather conditions and what they look like (cloud cover is replaced by the attribute when present). */
const CONDITIONS: Record<string, Partial<Omit<WeatherState, "entity" | "condition">>> = {
  "clear-night": {},
  sunny: {},
  partlycloudy: { cloud: 0.45 },
  cloudy: { cloud: 0.9 },
  fog: { fog: 1, cloud: 0.6 },
  hail: { rain: 0.8, cloud: 1 },
  lightning: { lightning: true, cloud: 0.9 },
  "lightning-rainy": { rain: 0.8, lightning: true, cloud: 1 },
  pouring: { rain: 1, cloud: 1 },
  rainy: { rain: 0.55, cloud: 0.85 },
  snowy: { snow: 0.8, cloud: 0.9 },
  "snowy-rainy": { rain: 0.35, snow: 0.5, cloud: 1 },
  windy: { wind: 0.8, cloud: 0.2 },
  "windy-variant": { wind: 0.8, cloud: 0.7 },
  exceptional: { cloud: 0.5 },
};

/** The weather entity to show: the preferred one when it exists, otherwise the first `weather.*`. */
export function weatherEntity(hass: HomeAssistant, preferred?: string | null): string | null {
  if (preferred && hass.states[preferred]) return preferred;
  return (
    Object.keys(hass.states)
      .filter((id) => id.startsWith("weather."))
      .sort()[0] ?? null
  );
}

/**
 * How hard it rains by a weather station of one's own (0 dry … 1 pouring), null when the entity tells nothing:
 * a rain sensor (binary_sensor, on = rain) or a rain rate (mm/h, in/h; above 0.1 mm/h counts as rain).
 */
export function stationRain(hass: HomeAssistant, entity: string | null | undefined): number | null {
  const st = entity ? hass.states[entity] : undefined;
  if (!st || st.state === "unavailable" || st.state === "unknown") return null;
  if (st.entity_id.startsWith("binary_sensor.")) return st.state === "on" ? 0.6 : 0;
  const v = Number(st.state);
  if (!Number.isFinite(v)) return null;
  const unit = String(st.attributes.unit_of_measurement ?? "");
  const mmh = unit.startsWith("in") ? v * 25.4 : v;
  if (mmh <= 0.1) return 0;
  return Math.min(1, 0.3 + mmh / 10);
}

/** Entities that can tell rain: rain sensors (moisture, rain) and rain rates (…/h, precipitation intensity). */
export function isRainSource(hass: HomeAssistant, id: string): boolean {
  const st = hass.states[id];
  if (!st) return false;
  const dc = String(st.attributes.device_class ?? "");
  if (id.startsWith("binary_sensor.")) return dc === "moisture" || /(rain|regen|pluie|lluvia|pioggia)/.test(id);
  if (!id.startsWith("sensor.")) return false;
  return dc === "precipitation_intensity" || /\/h$/.test(String(st.attributes.unit_of_measurement ?? ""));
}

/** Wind speed from a weather station (0 calm … 1 storm at 60 km/h), null when not telling a number. */
export function stationWindSpeed(hass: HomeAssistant, entity: string | null | undefined): number | null {
  const st = entity ? hass.states[entity] : undefined;
  if (!st || st.state === "unavailable" || st.state === "unknown") return null;
  const v = Number(st.state);
  if (!Number.isFinite(v)) return null;
  const unit = String(st.attributes.unit_of_measurement ?? "").toLowerCase().trim();
  const kmh =
    unit === "m/s"
      ? v * 3.6
      : unit === "mph"
        ? v * 1.60934
        : unit === "kn" || unit === "knot" || unit === "knots"
          ? v * 1.852
          : unit === "ft/s"
            ? v * 1.09728
            : unit === "bft" || unit === "beaufort"
              ? 0.836 * Math.pow(v, 1.5) * 3.6
              : v;
  return Math.min(1, Math.max(0, kmh / 60));
}

const COMPASS_POINTS: Record<string, number> = {
  n: 0,
  nne: 22.5,
  ne: 45,
  ene: 67.5,
  e: 90,
  ese: 112.5,
  se: 135,
  sse: 157.5,
  s: 180,
  ssw: 202.5,
  sw: 225,
  wsw: 247.5,
  w: 270,
  wnw: 292.5,
  nw: 315,
  nnw: 337.5,
};

/** Parses wind bearing degrees (0..360) from numbers or compass points ("N", "SSW", etc.). */
export function parseWindBearing(val: unknown): number | null {
  if (val == null) return null;
  if (typeof val === "number" && Number.isFinite(val)) {
    return ((val % 360) + 360) % 360;
  }
  const str = String(val).trim().toLowerCase();
  const num = Number(str);
  if (Number.isFinite(num)) {
    return ((num % 360) + 360) % 360;
  }
  if (str in COMPASS_POINTS) {
    return COMPASS_POINTS[str];
  }
  return null;
}

/** Wind direction (0..360 degrees) from a weather station sensor. */
export function stationWindBearing(hass: HomeAssistant, entity: string | null | undefined): number | null {
  const st = entity ? hass.states[entity] : undefined;
  if (!st || st.state === "unavailable" || st.state === "unknown") return null;
  return parseWindBearing(st.state);
}

/** Entities that can tell wind speed: sensors with wind_speed device class, speed units, or name. */
export function isWindSpeedSource(hass: HomeAssistant, id: string): boolean {
  const st = hass.states[id];
  if (!st || !id.startsWith("sensor.")) return false;
  const dc = String(st.attributes.device_class ?? "");
  if (dc === "wind_speed") return true;
  const unit = String(st.attributes.unit_of_measurement ?? "").toLowerCase().trim();
  if (["m/s", "km/h", "mph", "kn", "knot", "knots", "bft", "ft/s"].includes(unit)) return true;
  return /(wind.*speed|wind_speed|windgeschwindigkeit|vitesse.*vent|velocit.*vento|velocidad.*viento)/i.test(id);
}

/** Entities that can tell wind direction: sensors with wind_direction device class, degree units, or name. */
export function isWindBearingSource(hass: HomeAssistant, id: string): boolean {
  const st = hass.states[id];
  if (!st || !id.startsWith("sensor.")) return false;
  const dc = String(st.attributes.device_class ?? "");
  if (dc === "wind_direction") return true;
  const unit = String(st.attributes.unit_of_measurement ?? "").trim();
  if (unit === "°" || unit === "deg") return true;
  return /(wind.*(bearing|dir)|wind_direction|windrichtung|direction.*vent|direzion.*vento|direcci.*viento)/i.test(id);
}

export function weatherState(
  hass: HomeAssistant,
  entity: string | null,
  rainEntity?: string | null,
  windSpeedEntity?: string | null,
  windBearingEntity?: string | null,
): WeatherState | null {
  const st = entity ? hass.states[entity] : undefined;
  if (!st || st.state === "unavailable" || st.state === "unknown") return null;
  const base = CONDITIONS[st.state];
  if (!base) return null;
  const attrs = st.attributes as Record<string, unknown>;
  let cloud = base.cloud ?? 0;
  if (typeof attrs.cloud_coverage === "number") cloud = Math.min(1, Math.max(0, attrs.cloud_coverage / 100));
  let wind = base.wind ?? 0;
  if (typeof attrs.wind_speed === "number") {
    const kmh = attrs.wind_speed_unit === "m/s" ? attrs.wind_speed * 3.6 : attrs.wind_speed_unit === "mph" ? attrs.wind_speed * 1.609 : attrs.wind_speed;
    wind = Math.max(wind, Math.min(1, kmh / 60));
  }
  let windBearing: number | null = parseWindBearing(attrs.wind_bearing);

  // a weather station of one's own says whether it really rains at the house (D407)
  const station = stationRain(hass, rainEntity);
  if (station !== null && station > 0) cloud = Math.max(cloud, 0.85);

  const speed = stationWindSpeed(hass, windSpeedEntity);
  if (speed !== null) wind = speed;

  const bearing = stationWindBearing(hass, windBearingEntity);
  if (bearing !== null) windBearing = bearing;

  return {
    entity: st.entity_id,
    condition: st.state,
    rain: station ?? base.rain ?? 0,
    snow: base.snow ?? 0,
    fog: base.fog ?? 0,
    cloud,
    wind,
    wind_bearing: windBearing,
    lightning: !!base.lightning,
  };
}

/** Only the chosen effects stay (the others are zeroed); `sky` says whether the sun or moon disc shows. */
export function limitEffects(w: WeatherState, effects: readonly WeatherEffect[] | null | undefined): WeatherState & { sky: boolean } {
  const on = new Set(effects ?? DEFAULT_WEATHER_EFFECTS);
  return {
    ...w,
    rain: on.has("rain") ? w.rain : 0,
    snow: on.has("snow") ? w.snow : 0,
    fog: on.has("fog") ? w.fog : 0,
    cloud: on.has("clouds") ? w.cloud : 0,
    lightning: on.has("lightning") && w.lightning,
    sky: on.has("sky"),
  };
}

/** Whether anything moves or dims: the view can skip the weather layer otherwise. */
export function weatherActive(w: WeatherState | null): boolean {
  return !!w && (w.rain > 0 || w.snow > 0 || w.fog > 0 || w.cloud > 0 || w.lightning);
}
