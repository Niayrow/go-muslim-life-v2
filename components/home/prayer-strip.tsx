"use client";

import Link from "next/link";
import { ChevronRight, Loader2, MapPin, Moon } from "lucide-react";

import { usePrayerTimes } from "@/hooks/use-prayer-times";
import { cn } from "@/lib/utils";

type PrayerStripProps = {
  /** `card` = panneau vertical pour desktop home ; `strip` = bandeau compact */
  variant?: "strip" | "card";
};

export function PrayerStrip({ variant = "strip" }: PrayerStripProps) {
  const { next, countdown, countdownShort, location, loading, error } =
    usePrayerTimes();

  if (variant === "card") {
    return (
      <Link
        href="/priere"
        className="glass-panel-interactive group flex h-full min-h-[11.5rem] select-none flex-col justify-between rounded-[1.5rem] p-5 lg:p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <span className="flex size-11 items-center justify-center rounded-xl bg-brand-warm/12 text-brand-warm">
            {loading && !next ? (
              <Loader2 className="size-5 animate-spin" />
            ) : (
              <Moon className="size-5" strokeWidth={2.2} />
            )}
          </span>
          <span className="flex items-center gap-1 text-xs text-brand-steel-400">
            <MapPin className="size-3" />
            {location.name}
          </span>
        </div>

        <div className="mt-6 space-y-1">
          {error && !next ? (
            <p className="text-sm text-brand-danger">Horaires indisponibles</p>
          ) : next ? (
            <>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-gold-400">
                Prochaine{next.isTomorrow ? " · demain" : ""}
              </p>
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-2xl font-extrabold text-brand-pearl lg:text-3xl">
                    {next.label}
                  </p>
                  <p className="select-none text-lg font-semibold text-brand-warm tabular-nums">
                    {next.time}
                  </p>
                </div>
                <p className="select-none font-mono text-xl font-bold tabular-nums text-brand-pearl lg:text-2xl">
                  {countdown}
                </p>
              </div>
            </>
          ) : (
            <p className="text-sm text-brand-mist">Chargement…</p>
          )}
        </div>

        <p className="mt-4 flex items-center gap-1 text-xs font-medium text-brand-steel-400 transition-colors group-hover:text-brand-warm">
          Voir les horaires
          <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </p>
      </Link>
    );
  }

  return (
    <Link
      href="/priere"
      className={cn(
        "glass-panel-interactive group flex select-none items-center gap-4 rounded-2xl px-4 py-3.5 md:px-5"
      )}
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-warm/12 text-brand-warm">
        {loading && !next ? (
          <Loader2 className="size-5 animate-spin" strokeWidth={2.2} />
        ) : (
          <Moon className="size-5" strokeWidth={2.2} />
        )}
      </span>

      <span className="min-w-0 flex-1">
        {error && !next ? (
          <span className="text-sm text-brand-danger">Horaires indisponibles</span>
        ) : next ? (
          <>
            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <span className="text-sm font-bold text-brand-pearl">
                Prochaine · {next.label}
              </span>
              <span className="select-none text-sm font-semibold text-brand-warm tabular-nums">
                {next.time}
              </span>
              <span className="text-xs text-brand-mist">{countdownShort}</span>
            </span>
            <span className="mt-0.5 flex items-center gap-1 text-xs text-brand-steel-400">
              <MapPin className="size-3" />
              {location.name}
            </span>
          </>
        ) : (
          <span className="text-sm text-brand-mist">Chargement des horaires…</span>
        )}
      </span>

      <ChevronRight className="size-4 shrink-0 text-brand-steel-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-warm" />
    </Link>
  );
}
