import { keyIdeas, reflectionParagraphs } from "../data/projectContent";

type ReflectionProps = {
  onOpenMap: () => void;
};

export function Reflection({ onOpenMap }: ReflectionProps) {
  return (
    <section className="page-section reflection-section" aria-labelledby="reflection-title">
      <div className="section-heading">
        <p className="eyebrow">Part 1 · Conceptual Reflection</p>
        <h1 id="reflection-title">Points of reference and navigation</h1>
      </div>

      <div className="reflection-layout">
        <article className="reflection-copy" aria-label="Full Part 1 reflection">
          {reflectionParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <aside className="concept-grid" aria-label="Key ideas from Part 1">
          {keyIdeas.map((idea) => (
            <article className="concept-card" key={idea.title}>
              <h2>{idea.title}</h2>
              <p>{idea.body}</p>
            </article>
          ))}
        </aside>
      </div>

      <div className="transition-panel">
        <p>Now follow me through the eight stations of my day.</p>
        <button className="primary-button" type="button" onClick={onOpenMap}>
          <span aria-hidden="true">◎</span>
          <span>Open the Full Map</span>
        </button>
      </div>
    </section>
  );
}
