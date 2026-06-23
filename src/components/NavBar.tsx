import type { Section } from "../types";

type NavBarProps = {
  section: Section;
  onNavigate: (section: Section) => void;
};

export function NavBar({ section, onNavigate }: NavBarProps) {
  const links: Array<{ label: string; section: Section; icon?: "home" }> = [
    { label: "Home", section: "home", icon: "home" },
    { label: "Part 1", section: "reflection" },
    { label: "Full Map", section: "map" }
  ];

  return (
    <header className="site-header">
      <nav className="top-nav" aria-label="Main navigation">
        <a
          className="brand-mark"
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("home");
          }}
        >
          <span className="brand-mark__symbol brand-logo" aria-hidden="true">
            <span className="brand-logo__path" />
            <span className="brand-logo__station brand-logo__station--one" />
            <span className="brand-logo__station brand-logo__station--two" />
            <span className="brand-logo__station brand-logo__station--three" />
            <span className="brand-logo__avatar" />
          </span>
          <span>Emotional Metro Map</span>
        </a>
        <div className="top-nav__links">
          {links.map((item) => (
            <button
              className="nav-button"
              type="button"
              key={item.section}
              aria-current={section === item.section ? "page" : undefined}
              onClick={() => onNavigate(item.section)}
            >
              {item.icon === "home" ? (
                <span className="nav-icon nav-icon--home" aria-hidden="true">
                  <span />
                </span>
              ) : null}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
