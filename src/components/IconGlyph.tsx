import type { SceneKind } from "../data/projectContent";

type IconGlyphProps = {
  scene: SceneKind;
};

export function IconGlyph({ scene }: IconGlyphProps) {
  return (
    <span className={`icon-glyph icon-glyph--${scene}`} aria-hidden="true">
      <span />
    </span>
  );
}
