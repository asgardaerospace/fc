"use client";

import Image from "next/image";
import { useMemo } from "react";

/**
 * The signature element: a living, brewing cauldron.
 * Drifting spectral aurora + rising embers behind the brand mark.
 * Purely decorative; hidden from assistive tech.
 */
export function Cauldron() {
  // Deterministic embers (no Math.random at module load to keep SSR stable)
  const embers = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const rnd = seed / 233280;
        return {
          left: 8 + ((i * 6.4) % 84),
          delay: (rnd * 7).toFixed(2),
          duration: (5 + rnd * 5).toFixed(2),
          drift: `${Math.round((rnd - 0.5) * 60)}px`,
          size: rnd > 0.7 ? 5 : 3,
        };
      }),
    [],
  );

  return (
    <div className="cauldron-stage relative mx-auto aspect-square w-full max-w-[540px]" aria-hidden="true">
      {/* Aurora field */}
      <div className="absolute inset-0">
        <span className="aurora aurora-1" style={{ inset: "18% 30% 34% 8%" }} />
        <span className="aurora aurora-2" style={{ inset: "10% 8% 40% 34%" }} />
        <span className="aurora aurora-3" style={{ inset: "34% 20% 14% 24%" }} />
        <span className="aurora aurora-4" style={{ inset: "24% 36% 30% 30%" }} />
      </div>

      {/* Rising embers */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[18%] top-[24%] overflow-hidden">
        {embers.map((e, i) => (
          <span
            key={i}
            className="ember"
            style={
              {
                left: `${e.left}%`,
                width: e.size,
                height: e.size,
                animationDelay: `${e.delay}s`,
                animationDuration: `${e.duration}s`,
                "--drift": e.drift,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Brand mark */}
      <div className="levitate relative z-10 flex h-full w-full items-center justify-center">
        <Image
          src="/cauldron-mark.png"
          alt="The Fairy Cauldron"
          width={1146}
          height={1193}
          priority
          className="h-auto w-[86%] drop-shadow-[0_30px_60px_rgba(124,58,237,0.35)]"
        />
      </div>
    </div>
  );
}
