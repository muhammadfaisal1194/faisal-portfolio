/**
 * Subtle animated audio-waveform motif — pure CSS animation (no JS),
 * pauses automatically under prefers-reduced-motion via globals.css.
 */
const bars = [
  0.35, 0.55, 0.4, 0.75, 0.5, 0.9, 0.65, 1, 0.7, 0.85,
  0.5, 0.95, 0.6, 0.8, 0.45, 0.7, 0.55, 0.4, 0.6, 0.35,
];

export function Waveform({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-[5px] ${className}`}
      aria-hidden="true"
    >
      {bars.map((height, i) => (
        <span
          key={i}
          className="w-[3px] animate-wave rounded-full bg-gradient-to-t from-accent-600/40 to-accent-400"
          style={{
            height: `${height * 100}%`,
            animationDelay: `${(i % 7) * 0.13}s`,
            animationDuration: `${1.2 + (i % 5) * 0.18}s`,
          }}
        />
      ))}
    </div>
  );
}
