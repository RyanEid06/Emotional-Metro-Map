import { conclusion } from "../data/projectContent";
import { Roadmap } from "./Roadmap";

type ConclusionProps = {
  activeIndex: number;
  visited: Set<number>;
  onSelectStation: (index: number) => void;
  onPartOne: () => void;
  onMap: () => void;
};

export function Conclusion({
  activeIndex,
  visited,
  onSelectStation,
  onPartOne,
  onMap
}: ConclusionProps) {
  return (
    <section className="page-section conclusion-section" aria-labelledby="conclusion-title">
      <div className="section-heading">
        <p className="eyebrow">Completion</p>
        <h1 id="conclusion-title">The full route stays realistic</h1>
        <p>{conclusion}</p>
      </div>

      <Roadmap activeIndex={activeIndex} visited={visited} onSelect={onSelectStation} />

      <div className="station-actions">
        <button className="secondary-button" type="button" onClick={onPartOne}>
          <span>Return to Part 1</span>
        </button>
        <button className="primary-button" type="button" onClick={onMap}>
          <span>Revisit the Map</span>
        </button>
      </div>
    </section>
  );
}
