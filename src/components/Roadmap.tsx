import type { Station } from "../data/projectContent";
import { stations } from "../data/projectContent";
import { IconGlyph } from "./IconGlyph";
import { StudentAvatar } from "./StudentAvatar";

type RoadmapProps = {
  activeIndex: number;
  visited: Set<number>;
  onSelect: (index: number) => void;
  compact?: boolean;
  moving?: boolean;
};

const pathD =
  "M 10 76 C 19 75 25 69 28 61 C 32 51 17 52 18 42 C 19 32 35 35 42 31 C 51 25 56 40 63 47 C 71 54 75 39 79 31 C 82 22 70 21 68 13 C 72 4 86 8 90 11";

function StationButton({
  station,
  index,
  active,
  completed,
  onSelect
}: {
  station: Station;
  index: number;
  active: boolean;
  completed: boolean;
  onSelect: (index: number) => void;
}) {
  return (
    <button
      className={`station-marker${active ? " is-active" : ""}${completed ? " is-complete" : ""}`}
      type="button"
      onClick={() => onSelect(index)}
      aria-current={active ? "step" : undefined}
      aria-label={`Open station ${station.id}: ${station.title}`}
    >
      <IconGlyph scene={station.scene} />
      <span className="station-marker__number">{station.id}</span>
      <span className="station-marker__title">{station.title}</span>
      <span className="station-marker__time">{station.time}</span>
    </button>
  );
}

export function Roadmap({
  activeIndex,
  visited,
  onSelect,
  compact = false,
  moving = false
}: RoadmapProps) {
  const activeStation = stations[activeIndex];

  if (compact) {
    return (
      <div className="journey-rail" aria-label="Station progress">
        <div className="journey-rail__track" aria-hidden="true" />
        <div
          className={`journey-rail__avatar${moving ? " is-moving" : ""}`}
          style={
            {
              "--rail-x": `${(activeIndex / (stations.length - 1)) * 100}%`,
              "--rail-mobile-x": `${1.85 + activeIndex * 2.8}rem`
            } as React.CSSProperties
          }
        >
          <StudentAvatar compact />
        </div>
        {stations.map((station, index) => (
          <button
            className={`rail-stop${index === activeIndex ? " is-active" : ""}${
              visited.has(station.id) ? " is-complete" : ""
            }`}
            type="button"
            key={station.id}
            onClick={() => onSelect(index)}
            aria-label={`Jump to station ${station.id}: ${station.title}`}
            aria-current={index === activeIndex ? "step" : undefined}
          >
            <span>{station.id}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <section className="roadmap-shell" aria-labelledby="map-title">
      <div className="roadmap-heading">
        <p className="eyebrow">Part 2 · Emotional Roadmap</p>
        <h2 id="map-title">Eight stations across one normal day</h2>
        <p>
          Select any station. The avatar moves automatically, then the station opens with the
          activity, habit, technique, emotion, and realistic improvement.
        </p>
      </div>

      <div className="roadmap-stage" aria-label="Interactive winding emotional metro map">
        <svg className="road-line" viewBox="0 0 100 90" aria-hidden="true" preserveAspectRatio="none">
          <path className="road-line__shadow" d={pathD} />
          <path className="road-line__base" d={pathD} />
          <path
            className="road-line__progress"
            d={pathD}
            style={{ "--progress": `${Math.max(0.08, (activeIndex + 1) / stations.length)}` } as React.CSSProperties}
          />
        </svg>
        <div
          className={`map-avatar${moving ? " is-moving" : ""}`}
          style={
            {
              "--avatar-x": `${activeStation.mapPosition.x}%`,
              "--avatar-y": `${activeStation.mapPosition.y}%`
            } as React.CSSProperties
          }
        >
          <StudentAvatar label={`Avatar at station ${activeStation.id}`} />
        </div>
        {stations.map((station, index) => (
          <div
            className="station-marker-wrap"
            key={station.id}
            style={
              {
                "--marker-x": `${station.mapPosition.x}%`,
                "--marker-y": `${station.mapPosition.y}%`
              } as React.CSSProperties
            }
          >
            <StationButton
              station={station}
              index={index}
              active={index === activeIndex}
              completed={visited.has(station.id)}
              onSelect={onSelect}
            />
          </div>
        ))}
      </div>

      <ol className="roadmap-list" aria-label="Mobile station list">
        {stations.map((station, index) => (
          <li key={station.id}>
            <StationButton
              station={station}
              index={index}
              active={index === activeIndex}
              completed={visited.has(station.id)}
              onSelect={onSelect}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
