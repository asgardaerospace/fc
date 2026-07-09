"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed ambient background video (the fairy grove).
 * Falls back to the poster image when the visitor prefers reduced motion,
 * or before the video is ready. Muted, looping, non-interactive.
 */
export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduced) v.pause();
    else v.play().catch(() => {});
  }, [reduced]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-void" aria-hidden="true">
      {!reduced && (
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-100 motion-safe:animate-[fadein_1.6s_ease]"
          autoPlay
          muted
          loop
          playsInline
          poster="/video/grove-poster.jpg"
        >
          <source src="/video/grove.webm" type="video/webm" />
          <source src="/video/grove.mp4" type="video/mp4" />
        </video>
      )}
      {reduced && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/video/grove-poster.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      )}

      {/* Legibility + mood overlays */}
      <div className="absolute inset-0 bg-void/55" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,7,16,0.85) 0%, rgba(10,7,16,0.25) 28%, rgba(10,7,16,0.35) 62%, rgba(10,7,16,0.96) 100%)",
        }}
      />
      {/* Spectral kiss from the cauldron's glow */}
      <div
        className="absolute inset-0 opacity-70 mix-blend-screen"
        style={{
          background:
            "radial-gradient(45% 40% at 68% 42%, rgba(124,58,237,0.22), transparent 70%), radial-gradient(35% 30% at 30% 30%, rgba(46,217,208,0.16), transparent 70%)",
        }}
      />
    </div>
  );
}
