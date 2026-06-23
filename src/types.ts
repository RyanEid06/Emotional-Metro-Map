export type Section = "home" | "reflection" | "map" | "station" | "conclusion";

export type RouteState = {
  section: Section;
  stationIndex?: number;
};
