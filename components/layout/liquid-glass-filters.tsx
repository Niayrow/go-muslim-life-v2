const HORIZ_EDGE_MAP = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 64" preserveAspectRatio="none">
    <defs>
      <linearGradient id="h" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#ffd0d0"/>
        <stop offset="13%" stop-color="#808080"/>
        <stop offset="87%" stop-color="#808080"/>
        <stop offset="100%" stop-color="#ffd0d0"/>
      </linearGradient>
    </defs>
    <rect width="256" height="64" fill="url(#h)"/>
  </svg>`
);

const EDGE_WARP_MAP = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" preserveAspectRatio="none">
    <defs>
      <linearGradient id="v" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#c0c0ff"/>
        <stop offset="18%" stop-color="#808080"/>
        <stop offset="82%" stop-color="#808080"/>
        <stop offset="100%" stop-color="#c0c0ff"/>
      </linearGradient>
    </defs>
    <rect width="64" height="64" fill="url(#v)"/>
  </svg>`
);

export function LiquidGlassFilters() {
  const horizMap = `data:image/svg+xml,${HORIZ_EDGE_MAP}`;
  const edgeWarpMap = `data:image/svg+xml,${EDGE_WARP_MAP}`;

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute h-0 w-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter
          id="liquid-glass-refract-base"
          x="-12%"
          y="-20%"
          width="124%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feImage href={horizMap} result="horizMap" preserveAspectRatio="none" />
          <feGaussianBlur in="horizMap" stdDeviation="1.4" result="smoothHoriz" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011 0.045"
            numOctaves="1"
            seed="9"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="0.65" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="smoothHoriz"
            scale="7"
            xChannelSelector="R"
            yChannelSelector="G"
            result="horizWarp"
          />
          <feDisplacementMap
            in="horizWarp"
            in2="softNoise"
            scale="2.5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        <filter
          id="liquid-glass-refract-edge"
          x="-25%"
          y="-30%"
          width="150%"
          height="160%"
          colorInterpolationFilters="sRGB"
        >
          <feImage href={horizMap} result="horizMap" preserveAspectRatio="none" />
          <feImage href={edgeWarpMap} result="vertMap" preserveAspectRatio="none" />
          <feGaussianBlur in="horizMap" stdDeviation="0.9" result="smoothHoriz" />
          <feGaussianBlur in="vertMap" stdDeviation="1.1" result="smoothVert" />
          <feBlend in="smoothHoriz" in2="smoothVert" mode="multiply" result="dispMap" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="dispMap"
            scale="16"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        <filter
          id="liquid-glass-refract-edge-lite"
          x="-20%"
          y="-25%"
          width="140%"
          height="150%"
          colorInterpolationFilters="sRGB"
        >
          <feImage href={horizMap} result="horizMap" preserveAspectRatio="none" />
          <feGaussianBlur in="horizMap" stdDeviation="1.1" result="smoothHoriz" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="smoothHoriz"
            scale="10"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
