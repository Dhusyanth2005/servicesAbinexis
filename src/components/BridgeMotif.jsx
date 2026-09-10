// Abstract "bridge" motif — connected nodes across a span.
// Visual signature referencing Abinexis as a "retail bridge" between
// consumers, entrepreneurs, and community. Reused (at different sizes)
// on Home, About, and Services.
export default function BridgeMotif({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract diagram of connected nodes representing Abinexis's network"
    >
      <path
        d="M20 300 C 140 300, 160 120, 260 120 S 400 300, 500 300"
        stroke="var(--color-ink-line, #363a63)"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M20 260 C 120 260, 180 60, 260 60 S 420 260, 500 260"
        stroke="var(--color-gold, #c89b3c)"
        strokeWidth="1.5"
        opacity="0.7"
      />

      {/* nodes */}
      <circle cx="20" cy="260" r="6" fill="var(--color-gold, #c89b3c)" />
      <circle cx="260" cy="60" r="8" fill="var(--color-gold, #c89b3c)" />
      <circle cx="500" cy="260" r="6" fill="var(--color-gold, #c89b3c)" />

      <circle cx="20" cy="300" r="5" fill="var(--color-ink-line, #363a63)" />
      <circle cx="260" cy="120" r="6" fill="var(--color-ink-line, #363a63)" />
      <circle cx="500" cy="300" r="5" fill="var(--color-ink-line, #363a63)" />
    </svg>
  );
}