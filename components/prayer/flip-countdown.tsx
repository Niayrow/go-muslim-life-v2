"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type RollingDigitProps = {
  digit: string;
  className?: string;
};

function RollingDigit({ digit, className }: RollingDigitProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <span
        className={cn(
          "inline-flex h-[1em] w-[0.62em] items-center justify-center",
          className
        )}
      >
        {digit}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "relative inline-block h-[1em] w-[0.62em] overflow-hidden",
        className
      )}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
      }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={digit}
          initial={{ y: "110%", opacity: 0.35 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0.35 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center tabular-nums"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

type FlipCountdownProps = {
  value: string;
  className?: string;
  digitClassName?: string;
  separatorClassName?: string;
};

/** Compteur HH:MM:SS — chaque chiffre monte depuis le bas. */
export function FlipCountdown({
  value,
  className,
  digitClassName,
  separatorClassName,
}: FlipCountdownProps) {
  const chars = value.split("");

  return (
    <span
      className={cn(
        "inline-flex items-center font-mono font-bold tabular-nums tracking-tight",
        className
      )}
      aria-label={value}
      role="timer"
    >
      {chars.map((char, index) => {
        if (char === ":") {
          return (
            <span
              key={`sep-${index}`}
              className={cn(
                "mx-0.5 inline-flex h-[1em] w-[0.35em] items-center justify-center opacity-70",
                separatorClassName
              )}
              aria-hidden
            >
              :
            </span>
          );
        }

        return (
          <RollingDigit
            key={`d-${index}`}
            digit={char}
            className={digitClassName}
          />
        );
      })}
    </span>
  );
}
