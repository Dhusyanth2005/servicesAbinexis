// Minimal stroke icons, sized via CSS. Kept as one file since they're
// small and only used on the Services page.
const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconCart(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6" />
      <circle cx="9.5" cy="20" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="20" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconAutomation(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="6" y="6" width="12" height="12" rx="2.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2 2M17.1 17.1l2 2M19.1 4.9l-2 2M6.9 17.1l-2 2" />
    </svg>
  );
}

export function IconCode(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M8 8 3 12l5 4M16 8l5 4-5 4M14 5l-4 14" />
    </svg>
  );
}

export function IconApp(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </svg>
  );
}

export function IconCloud(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M7 18a4.2 4.2 0 0 1-.6-8.36A5.5 5.5 0 0 1 17.3 8.1 4 4 0 0 1 17 18H7Z" />
    </svg>
  );
}

export function IconCommunity(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 19c.6-3 2.7-4.6 6.5-4.6s5.9 1.6 6.5 4.6" />
      <path d="M16 4.3a3 3 0 0 1 0 5.8M20 19c-.4-2-1.4-3.3-3-4" />
    </svg>
  );
}

export function IconChip(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9.5 7V3.5M14.5 7V3.5M9.5 20.5V17M14.5 20.5V17M7 9.5H3.5M7 14.5H3.5M20.5 9.5H17M20.5 14.5H17" />
    </svg>
  );
}

export function IconGlobe(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

export function IconBulb(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5.9 1.2.9 2.2h5.4c0-1 .3-1.7.9-2.2A6 6 0 0 0 12 3Z" />
    </svg>
  );
}