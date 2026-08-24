export function LiquidGlassRefractLayers() {
  return (
    <div className="liquid-glass-dock__refract" aria-hidden>
      <span className="liquid-glass-dock__refract-base" />
      <span className="liquid-glass-dock__prism liquid-glass-dock__prism--left" />
      <span className="liquid-glass-dock__prism liquid-glass-dock__prism--right" />
      <span className="liquid-glass-dock__chromatic liquid-glass-dock__chromatic--left" />
      <span className="liquid-glass-dock__chromatic liquid-glass-dock__chromatic--right" />
      <span className="liquid-glass-dock__caustic" />
      <span className="liquid-glass-dock__specular" />
      <span className="liquid-glass-dock__rim" />
    </div>
  );
}
