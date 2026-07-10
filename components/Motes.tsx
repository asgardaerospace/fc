"use client";

import { useMemo } from "react";

/**
 * Gentle rising motes of light. Deterministic (no Math.random at render)
 * so SSR and client agree. Purely decorative; honours reduced-motion via CSS.
 */
export function Motes({
  count = 18,
  className = "",
  tint,
  glow,
}: {
  count?: number;
  className?: string;
  /** override the mote colour, e.g. "var(--color-gold)" */
  tint?: string;
  /** override the mote glow colour */
  glow?: string;
}) {
  const motes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const a = ((i * 9301 + 49297) % 233280) / 233280;
        const b = (((i + 7) * 4021 + 12043) % 233280) / 233280;
        return {
          left: (i * 8.7 + a * 7) % 100,
          dur: 11 + a * 13,
          delay: b * 16,
          drift: Math.round((b - 0.5) * 90),
          size: a > 0.78 ? 4 : a > 0.42 ? 3 : 2,
        };
      }),
    [count],
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
      style={
        {
          ...(tint ? { "--mote": tint } : {}),
          ...(glow ? { "--mote-glow": glow } : {}),
        } as React.CSSProperties
      }
    >
      {motes.map((m, i) => (
        <span
          key={i}
          className="mote"
          style={
            {
              left: `${m.left}%`,
              width: m.size,
              height: m.size,
              "--dur": `${m.dur}s`,
              "--delay": `${m.delay}s`,
              "--drift": `${m.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
