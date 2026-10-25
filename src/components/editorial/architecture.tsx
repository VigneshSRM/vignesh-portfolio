export function Architecture({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className="architecture"
      viewBox="0 0 640 650"
      fill="none"
      role="img"
      aria-label="Architectural blueprint of ascending infrastructure blocks, representing a foundation for growth"
    >
      <defs>
        <pattern
          id={compact ? "grid-small" : "grid"}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path d="M40 0H0V40" stroke="#EAE6DE" strokeOpacity=".10" />
        </pattern>
        <pattern
          id={compact ? "hatch-small" : "hatch"}
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
        >
          <path d="M0 7L7 0" stroke="#EAE6DE" strokeOpacity=".3" />
        </pattern>
      </defs>
      <rect width="640" height="650" fill="#226192" />
      <rect
        width="640"
        height="650"
        fill={`url(#${compact ? "grid-small" : "grid"})`}
      />
      <circle cx="490" cy="148" r="77" fill="#EF8557" />
      <g stroke="#EAE6DE" strokeWidth="1.3">
        <path
          d="M80 477L319 615L558 477M80 454L319 592L558 454M80 431L319 569L558 431"
          opacity=".3"
        />
        <path d="M119 405L229 342L339 405L229 469Z" fill="#EAE6DE" />
        <path d="M119 405V491L229 554V469Z" fill="#16466D" />
        <path d="M229 469L339 405V491L229 554Z" fill="#3777A4" />
        <path d="M229 290L339 227L449 290L339 354Z" fill="#EAE6DE" />
        <path d="M229 290V469L339 532V354Z" fill="#16466D" />
        <path d="M339 354L449 290V469L339 532Z" fill="#3777A4" />
        <path d="M339 175L449 112L559 175L449 239Z" fill="#EAE6DE" />
        <path d="M339 175V447L449 510V239Z" fill="#16466D" />
        <path d="M449 239L559 175V447L449 510Z" fill="#3777A4" />
        <path
          d="M449 239L559 175V447L449 510Z"
          fill={`url(#${compact ? "hatch-small" : "hatch"})`}
        />
        <path
          d="M65 374L449 153M65 374V505M65 374L80 378M65 374L70 390M449 153L436 154M449 153L441 166"
          strokeDasharray="4 6"
          opacity=".6"
        />
        <path d="M105 548H560M105 540V556M560 540V556" opacity=".4" />
        <path d="M40 40H62M51 29V51M578 596H600M589 585V607" />
      </g>
      <g fill="#EAE6DE" fontFamily="monospace" fontSize="10" letterSpacing="2">
        <text x="32" y="615">
          FIG. 01 — A FOUNDATION FOR WHAT’S NEXT
        </text>
        <text x="32" y="78">
          LEARN. BUILD. REPEAT.
        </text>
        <text x="500" y="585">
          → 2027
        </text>
      </g>
    </svg>
  );
}
