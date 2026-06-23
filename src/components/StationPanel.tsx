import type { DetailBlock, Station } from "../data/projectContent";
import { Roadmap } from "./Roadmap";
import { StationScene } from "./StationScene";

type StationPanelProps = {
  station: Station;
  activeIndex: number;
  total: number;
  visited: Set<number>;
  moving: boolean;
  onSelectStation: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  onMap: () => void;
};

function Detail({ block }: { block: DetailBlock }) {
  return (
    <article className="detail-block">
      <h3>{block.label}</h3>
      {block.body ? <p>{block.body}</p> : null}
      {block.items ? (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export function StationPanel({
  station,
  activeIndex,
  total,
  visited,
  moving,
  onSelectStation,
  onPrevious,
  onNext,
  onMap
}: StationPanelProps) {
  const coreDetails: DetailBlock[] = [
    { label: "Time", body: station.time },
    { label: "Location", body: station.location },
    { label: "Specific activity", body: station.activity },
    { label: "Automatic habit", body: station.automaticHabit },
    { label: "Tool or technique from class", body: station.technique },
    { label: "Honest emotional effect or challenge", body: station.emotionalEffect },
    { label: "Emotional state supported", body: station.supportedState },
    { label: "Small realistic improvement", items: station.improvement }
  ];

  return (
    <section
      className="station-page"
      aria-labelledby="station-title"
      style={
        {
          "--panel": station.theme.panel,
          "--accent": station.theme.accent,
          "--accent-dark": station.theme.accentDark,
          "--soft": station.theme.soft,
          "--station-text": station.theme.text
        } as React.CSSProperties
      }
    >
      <div className="station-topline">
        <p className="eyebrow">Station {station.id} of {total}</p>
        <Roadmap
          activeIndex={activeIndex}
          visited={visited}
          onSelect={onSelectStation}
          compact
          moving={moving}
        />
      </div>

      <div className="station-hero">
        <div className="station-title-block">
          <p className="station-source">{station.sourceHeading}</p>
          <h1 id="station-title">{station.title}</h1>
          <p>{station.supportedState}</p>
        </div>
        <StationScene station={station} />
      </div>

      <div className="station-content-grid">
        {coreDetails.map((block) => (
          <Detail block={block} key={block.label} />
        ))}
        {station.extraDetails.map((block) => (
          <Detail block={block} key={block.label} />
        ))}
      </div>

      <div className="station-actions" aria-label="Station navigation">
        <button className="secondary-button" type="button" onClick={onPrevious} disabled={activeIndex === 0}>
          <span aria-hidden="true">←</span>
          <span>Previous</span>
        </button>
        <button className="secondary-button" type="button" onClick={onMap}>
          <span aria-hidden="true">◎</span>
          <span>Full Map</span>
        </button>
        <button className="primary-button" type="button" onClick={onNext}>
          <span>{activeIndex === total - 1 ? "Complete Map" : "Next"}</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
