import { useEffect, useMemo, useState } from "react";
import { Conclusion } from "./components/Conclusion";
import { NavBar } from "./components/NavBar";
import { Reflection } from "./components/Reflection";
import { Roadmap } from "./components/Roadmap";
import { StationPanel } from "./components/StationPanel";
import { StudentAvatar } from "./components/StudentAvatar";
import {
  dailySchedule,
  projectSubtitle,
  projectTitle,
  stations
} from "./data/projectContent";
import type { RouteState, Section } from "./types";

const storageKey = "emotional-metro-map-visited";

function hashFor(route: RouteState) {
  if (route.section === "station") {
    return `#station-${(route.stationIndex ?? 0) + 1}`;
  }
  if (route.section === "reflection") {
    return "#part-1";
  }
  if (route.section === "conclusion") {
    return "#conclusion";
  }
  if (route.section === "map") {
    return "#map";
  }
  return "#home";
}

function parseHash(): RouteState {
  const hash = window.location.hash.replace("#", "");
  const stationMatch = hash.match(/^station-(\d+)$/);

  if (stationMatch) {
    const index = Number(stationMatch[1]) - 1;
    if (index >= 0 && index < stations.length) {
      return { section: "station", stationIndex: index };
    }
  }

  if (hash === "part-1") {
    return { section: "reflection" };
  }

  if (hash === "map") {
    return { section: "map" };
  }

  if (hash === "conclusion") {
    return { section: "conclusion" };
  }

  return { section: "home" };
}

function loadVisited() {
  try {
    const saved = window.sessionStorage.getItem(storageKey);
    if (!saved) {
      return new Set<number>([1]);
    }
    const values = JSON.parse(saved) as number[];
    return new Set(values.filter((value) => value >= 1 && value <= stations.length));
  } catch {
    return new Set<number>([1]);
  }
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mediaQuery.matches);

    const handleChange = () => setReduced(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}

export default function App() {
  const [route, setRoute] = useState<RouteState>(() => parseHash());
  const [activeIndex, setActiveIndex] = useState(() => parseHash().stationIndex ?? 0);
  const [visited, setVisited] = useState<Set<number>>(() => loadVisited());
  const [moving, setMoving] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const currentStation = stations[activeIndex];
  const completedVisited = useMemo(() => new Set(stations.map((station) => station.id)), []);

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = parseHash();
      setRoute(nextRoute);
      if (nextRoute.stationIndex !== undefined) {
        setActiveIndex(nextRoute.stationIndex);
        setVisited((previous) => new Set(previous).add(nextRoute.stationIndex! + 1));
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem(storageKey, JSON.stringify(Array.from(visited)));
  }, [visited]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  }, [route.section, route.stationIndex, reducedMotion]);

  function navigate(section: Section, stationIndex?: number) {
    const nextRoute: RouteState = { section, stationIndex };
    const nextHash = hashFor(nextRoute);

    if (window.location.hash === nextHash) {
      setRoute(nextRoute);
      return;
    }

    window.location.hash = nextHash;
  }

  function addVisited(index: number) {
    setVisited((previous) => new Set(previous).add(index + 1));
  }

  function travelToStation(index: number) {
    const boundedIndex = Math.max(0, Math.min(index, stations.length - 1));
    setActiveIndex(boundedIndex);
    addVisited(boundedIndex);

    if (reducedMotion) {
      navigate("station", boundedIndex);
      return;
    }

    setMoving(true);
    window.setTimeout(() => {
      setMoving(false);
      navigate("station", boundedIndex);
    }, 620);
  }

  function completeJourney() {
    setVisited(completedVisited);
    navigate("conclusion");
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <NavBar section={route.section} onNavigate={(section) => navigate(section)} />
      <main id="main-content" tabIndex={-1}>
        {route.section === "home" ? (
          <Home onBegin={() => navigate("reflection")} onPartOne={() => navigate("reflection")} onMap={() => navigate("map")} />
        ) : null}

        {route.section === "reflection" ? <Reflection onOpenMap={() => navigate("map")} /> : null}

        {route.section === "map" ? (
          <MapPage
            activeIndex={activeIndex}
            visited={visited}
            moving={moving}
            onSelectStation={travelToStation}
          />
        ) : null}

        {route.section === "station" ? (
          <StationPanel
            station={currentStation}
            activeIndex={activeIndex}
            total={stations.length}
            visited={visited}
            moving={moving}
            onSelectStation={travelToStation}
            onPrevious={() => travelToStation(activeIndex - 1)}
            onNext={() => {
              if (activeIndex === stations.length - 1) {
                completeJourney();
                return;
              }
              travelToStation(activeIndex + 1);
            }}
            onMap={() => navigate("map")}
          />
        ) : null}

        {route.section === "conclusion" ? (
          <Conclusion
            activeIndex={stations.length - 1}
            visited={completedVisited}
            onSelectStation={travelToStation}
            onPartOne={() => navigate("reflection")}
            onMap={() => navigate("map")}
          />
        ) : null}
      </main>
    </div>
  );
}

function Home({
  onBegin,
  onPartOne,
  onMap
}: {
  onBegin: () => void;
  onPartOne: () => void;
  onMap: () => void;
}) {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="hero-copy">
        <p className="eyebrow">Psychology Assignment 2 · Emotional Regulation</p>
        <h1 id="home-title">{projectTitle}</h1>
        <p className="hero-subtitle">{projectSubtitle}</p>
        <div className="hero-actions">
          <button className="primary-button" type="button" onClick={onBegin}>
            <span aria-hidden="true">→</span>
            <span>Begin the Journey</span>
          </button>
          <button className="secondary-button" type="button" onClick={onPartOne}>
            <span aria-hidden="true">I</span>
            <span>View Part 1</span>
          </button>
          <button className="secondary-button" type="button" onClick={onMap}>
            <span aria-hidden="true">◎</span>
            <span>Open Map</span>
          </button>
        </div>
      </div>

      <div className="hero-visual" role="img" aria-label="Original illustrated emotional metro path with student avatar">
        <div className="hero-sky" aria-hidden="true" />
        <div className="hero-road" aria-hidden="true" />
        <div className="hero-stations" aria-hidden="true">
          {stations.map((station) => (
            <span key={station.id} style={{ "--i": station.id } as React.CSSProperties}>
              {station.id}
            </span>
          ))}
        </div>
        <StudentAvatar label="Original neutral student avatar" />
      </div>
    </section>
  );
}

function MapPage({
  activeIndex,
  visited,
  moving,
  onSelectStation
}: {
  activeIndex: number;
  visited: Set<number>;
  moving: boolean;
  onSelectStation: (index: number) => void;
}) {
  return (
    <div className="page-section map-page">
      <Roadmap activeIndex={activeIndex} visited={visited} moving={moving} onSelect={onSelectStation} />

      <section className="schedule-band" aria-labelledby="schedule-title">
        <div>
          <p className="eyebrow">Daily Structure</p>
          <h2 id="schedule-title">The stations follow the real day</h2>
        </div>
        <ol>
          {dailySchedule.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}

