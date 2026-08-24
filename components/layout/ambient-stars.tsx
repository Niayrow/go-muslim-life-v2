"use client";

import { motion, useReducedMotion } from "motion/react";

const STARS = [
  { top: "8%", left: "12%", delay: 0, duration: 3 },
  { top: "14%", left: "78%", delay: 0.6, duration: 4 },
  { top: "22%", left: "42%", delay: 1.2, duration: 3.5 },
  { top: "18%", left: "91%", delay: 0.3, duration: 4.5 },
  { top: "32%", left: "6%", delay: 1.8, duration: 3.2 },
  { top: "38%", left: "68%", delay: 0.9, duration: 3.8 },
  { top: "46%", left: "24%", delay: 2.1, duration: 4.2 },
  { top: "52%", left: "88%", delay: 1.4, duration: 3.6 },
  { top: "58%", left: "52%", delay: 0.5, duration: 4.8 },
  { top: "64%", left: "14%", delay: 2.4, duration: 3.4 },
  { top: "72%", left: "72%", delay: 1.1, duration: 4.1 },
  { top: "78%", left: "34%", delay: 0.2, duration: 3.9 },
  { top: "84%", left: "58%", delay: 1.7, duration: 4.4 },
  { top: "88%", left: "8%", delay: 2.6, duration: 3.3 },
  { top: "92%", left: "86%", delay: 0.8, duration: 4.6 },
  { top: "28%", left: "55%", delay: 2.0, duration: 3.7 },
] as const;

export function AmbientStars() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden contain-paint"
    >
      {STARS.map((star, i) => (
        <motion.span
          key={i}
          className="absolute size-1 rounded-full bg-brand-warm/70 shadow-[0_0_12px_rgba(240,209,188,0.55)]"
          style={{ top: star.top, left: star.left }}
          animate={
            reduce
              ? { opacity: 0.45, scale: 1 }
              : { opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.2, 0.8] }
          }
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
