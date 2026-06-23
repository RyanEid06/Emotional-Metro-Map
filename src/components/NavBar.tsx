import type { Section } from "../types";

type NavBarProps = {
  section: Section;
  onNavigate: (section: Section) => void;
};

export function NavBar({ section, onNavigate }: NavBarProps) {
  const links: Array<{ label: string; section: Section; icon: string }> = [
    { label: "Home", section: "home", icon: "⌂" },
    { label: "Part 1", section: "reflection", icon: "I" },
    { label: "Full Map", section: "map", icon: "◎" }
  ];

  return (
    <header className="site-header">
      <nav className="top-nav" aria-label="Main navigation">
        <a className="brand-mark" href="#home" onClick={(event) => {
          event.preventDefault();
          onNavigate("home");
        }}>
          <span className="brand-mark__symbol" aria-hidden="true">M</span>
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
              <span aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
