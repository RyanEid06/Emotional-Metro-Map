import type { Station } from "../data/projectContent";

type StationSceneProps = {
  station: Station;
};

export function StationScene({ station }: StationSceneProps) {
  return (
    <div
      className={`station-scene station-scene--${station.scene}`}
      style={
        {
          "--scene-sky": station.theme.sky,
          "--scene-ground": station.theme.ground,
          "--scene-accent": station.theme.accent,
          "--scene-accent-dark": station.theme.accentDark,
          "--scene-soft": station.theme.soft
        } as React.CSSProperties
      }
      role="img"
      aria-label={`${station.title} illustrated scene`}
    >
      <div className="scene-sky" aria-hidden="true" />
      <div className="scene-ground" aria-hidden="true" />
      <SceneArtwork scene={station.scene} />
    </div>
  );
}

function SceneArtwork({ scene }: { scene: Station["scene"] }) {
  switch (scene) {
    case "morning":
      return (
        <div className="scene-art morning-art" aria-hidden="true">
          <span className="scene-sun" />
          <span className="window-frame" />
          <span className="bed-shape" />
          <span className="clock-shape">7:00</span>
          <span className="phone-shape">
            <i />
          </span>
          <span className="message-bubble bubble-one" />
          <span className="message-bubble bubble-two" />
          <span className="chess-piece chess-piece--small" />
          <span className="clothes-shape" />
        </div>
      );
    case "car":
      return (
        <div className="scene-art car-art" aria-hidden="true">
          <span className="road-strip" />
          <span className="car-dashboard" />
          <span className="car-window" />
          <span className="music-note note-one">♪</span>
          <span className="music-note note-two">♫</span>
          <span className="thought-bubble thought-book">book</span>
          <span className="thought-bubble thought-code">&lt;/&gt;</span>
          <span className="thought-bubble thought-layout">grid</span>
        </div>
      );
    case "seaMorning":
      return (
        <div className="scene-art sea-art sea-morning-art" aria-hidden="true">
          <span className="sea-horizon" />
          <span className="wave wave-one" />
          <span className="wave wave-two" />
          <span className="bench-shape" />
          <span className="water-bottle" />
          <span className="phone-aside" />
          <span className="pause-badge">10 min</span>
          <span className="breath-ring ring-one" />
          <span className="breath-ring ring-two" />
        </div>
      );
    case "seaAfternoon":
      return (
        <div className="scene-art sea-art sea-afternoon-art" aria-hidden="true">
          <span className="sea-horizon" />
          <span className="wave wave-one" />
          <span className="quiet-bench" />
          <span className="battery-shell">
            <i />
          </span>
          <span className="mountain-memory">
            <i />
            <b />
          </span>
          <span className="anchor-hands" />
        </div>
      );
    case "lunch":
      return (
        <div className="scene-art lunch-art" aria-hidden="true">
          <span className="table-shape" />
          <span className="plate-shape">
            <i />
          </span>
          <span className="salad-bowl" />
          <span className="bread-slice" />
          <span className="phone-away" />
          <span className="conversation-dot dot-one" />
          <span className="conversation-dot dot-two" />
          <span className="streak-card">4 days</span>
        </div>
      );
    case "study":
      return (
        <div className="scene-art study-art" aria-hidden="true">
          <span className="sofa-shape" />
          <span className="timer-shape">30</span>
          <span className="desk-shape" />
          <span className="laptop-shape">&lt;/&gt;</span>
          <span className="plan-card card-one">plan</span>
          <span className="plan-card card-two">start</span>
          <span className="book-stack" />
        </div>
      );
    case "workout":
      return (
        <div className="scene-art workout-art" aria-hidden="true">
          <span className="mat-shape" />
          <span className="dumbbell dumbbell-one" />
          <span className="dumbbell dumbbell-two" />
          <span className="snack-shape" />
          <span className="calendar-shape">
            <i />
            <i />
            <i />
          </span>
          <span className="energy-meter">
            <i />
          </span>
        </div>
      );
    case "night":
      return (
        <div className="scene-art night-art" aria-hidden="true">
          <span className="moon-shape" />
          <span className="bed-night" />
          <span className="phone-glow" />
          <span className="chess-board" />
          <span className="chess-piece chess-piece--night" />
          <span className="midnight-clock">12</span>
          <span className="breath-ring night-ring" />
        </div>
      );
    default:
      return null;
  }
}
