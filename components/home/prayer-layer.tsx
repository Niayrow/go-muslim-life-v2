"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  Loader2,
  CalendarDays,
  MapPin,
  Moon,
  Settings2,
  Sunrise,
  Sun,
  Sunset,
  type LucideIcon,
} from "lucide-react";

import {
  PrayerCityDialog,
  PrayerMethodDialog,
} from "@/components/prayer/prayer-settings-dialogs";
import { FlipCountdown } from "@/components/prayer/flip-countdown";
import { PrayerWeekDialog } from "@/components/prayer/prayer-week-dialog";
import { usePrayerTimes } from "@/hooks/use-prayer-times";
import {
  CALCULATION_METHODS,
  type PrayerKey,
} from "@/lib/prayer-times";
import { cn } from "@/lib/utils";

const ICONS: Record<PrayerKey, LucideIcon> = {
  Fajr: Moon,
  Sunrise: Sunrise,
  Dhuhr: Sun,
  Asr: Sun,
  Maghrib: Sunset,
  Isha: Moon,
};

const ease = [0.16, 1, 0.3, 1] as const;

function Reveal({
  active,
  index,
  children,
  className,
}: {
  active: boolean;
  index: number;
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={
        active
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 24 }
      }
      transition={{
        duration: active ? 0.6 : 0.28,
        delay: active ? 0.2 + index * 0.09 : 0,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

type PrayerLayerProps = {
  active?: boolean;
};

export function PrayerLayer({ active = true }: PrayerLayerProps) {
  const reduceMotion = useReducedMotion();
  const {
    next,
    countdown,
    location,
    slots,
    loading,
    error,
    day,
    methodId,
    setMethodId,
    setLocation,
    cityQuery,
    setCityQuery,
    cityResults,
    searchingCity,
    locating,
    locateMe,
  } = usePrayerTimes();

  const [cityOpen, setCityOpen] = useState(false);
  const [methodOpen, setMethodOpen] = useState(false);
  const [weekOpen, setWeekOpen] = useState(false);

  const method =
    CALCULATION_METHODS.find((m) => m.id === methodId) ?? CALCULATION_METHODS[0];

  return (
    <>
      <div className="mx-auto flex w-full max-w-lg select-none flex-col items-center gap-4 px-1 text-center md:max-w-xl md:gap-7">
        <Reveal active={active} index={0} className="space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-400">
            Horaires
          </p>
          {day?.gregorian && (
            <p className="text-sm font-medium text-brand-pearl md:text-base">
              {day.gregorian}
            </p>
          )}
          {day?.hijri && (
            <p className="text-xs text-brand-mist md:text-sm">{day.hijri}</p>
          )}
        </Reveal>

        <Reveal
          active={active}
          index={1}
          className="flex flex-wrap items-center justify-center gap-2.5"
        >
          <button
            type="button"
            onClick={() => setCityOpen(true)}
            className="float-chip inline-flex max-w-[14rem] items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold text-brand-pearl"
          >
            <MapPin className="size-3.5 shrink-0 text-brand-warm" />
            <span className="truncate">{location.name}</span>
          </button>
          <button
            type="button"
            onClick={() => setMethodOpen(true)}
            className="float-chip inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold text-brand-pearl"
            aria-label="Changer la méthode de calcul"
          >
            <Settings2 className="size-3.5 shrink-0 text-brand-warm" />
            {method.short}
          </button>
          <button
            type="button"
            onClick={() => setWeekOpen(true)}
            className="float-chip inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold text-brand-pearl"
          >
            <CalendarDays className="size-3.5 shrink-0 text-brand-warm" />
            Semaine
          </button>
        </Reveal>

        <Reveal active={active} index={2} className="w-full">
          <div className="glass-panel w-full rounded-[1.75rem] px-5 py-7 md:px-8 md:py-9">
            {loading && !next ? (
              <div className="flex items-center justify-center gap-3 text-brand-mist">
                <Loader2 className="size-5 animate-spin text-brand-warm" />
                Chargement…
              </div>
            ) : error && !next ? (
              <p className="text-sm text-brand-danger">{error}</p>
            ) : next ? (
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold-400">
                  Prochaine{next.isTomorrow ? " · demain" : ""}
                </p>
                <div className="flex flex-wrap items-end justify-center gap-x-6 gap-y-2 md:justify-between">
                  <div className="text-left">
                    <p className="text-bronze-shine text-4xl font-extrabold tracking-tight md:text-5xl">
                      {next.label}
                    </p>
                    <p className="mt-1 select-none text-2xl font-semibold text-brand-warm tabular-nums md:text-3xl">
                      {next.time}
                    </p>
                  </div>
                  <FlipCountdown
                    value={countdown}
                    className="text-3xl text-brand-pearl md:text-4xl"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </Reveal>

        <ul className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
          {slots.map((slot, index) => {
            const Icon = ICONS[slot.key];
            const nextIndex = next
              ? slots.findIndex((s) => s.key === next.key)
              : -1;
            const isNext = Boolean(
              next && next.key === slot.key && !next.isTomorrow
            );
            const isPast = Boolean(
              next &&
                (next.isTomorrow || (nextIndex > -1 && index < nextIndex))
            );

            return (
              <motion.li
                key={slot.key}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 28 }
                }
                animate={
                  active || reduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: active ? 0.55 : 0.25,
                  delay: active && !reduceMotion ? 0.45 + index * 0.07 : 0,
                  ease,
                }}
                className={cn(
                  "float-tile flex items-center gap-2.5 rounded-2xl px-3 py-3 text-left",
                  isNext && "float-tile--active",
                  slot.secondary && !isNext && "opacity-70"
                )}
              >
                <Icon
                  className={cn(
                    "size-3.5 shrink-0",
                    isNext ? "text-brand-warm" : "text-brand-steel-400"
                  )}
                  strokeWidth={2.2}
                />
                <span className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "block truncate text-xs font-bold",
                      isNext ? "text-brand-warm" : "text-brand-pearl",
                      isPast && "text-brand-mist"
                    )}
                  >
                    {slot.label}
                  </span>
                </span>
                <span
                  className={cn(
                    "select-none font-mono text-sm font-semibold tabular-nums",
                    isNext ? "text-brand-warm" : "text-brand-pearl",
                    isPast && "text-brand-mist"
                  )}
                >
                  {slot.time || "--:--"}
                </span>
              </motion.li>
            );
          })}
        </ul>

        <Reveal active={active} index={3 + slots.length}>
          <Link
            href="/priere"
            className="text-sm font-semibold text-brand-warm transition-colors hover:text-brand-gold-300"
          >
            Voir le détail →
          </Link>
        </Reveal>
      </div>

      <PrayerCityDialog
        open={cityOpen}
        onOpenChange={setCityOpen}
        cityQuery={cityQuery}
        setCityQuery={setCityQuery}
        cityResults={cityResults}
        searchingCity={searchingCity}
        locating={locating}
        locateMe={locateMe}
        setLocation={setLocation}
      />

      <PrayerMethodDialog
        open={methodOpen}
        onOpenChange={setMethodOpen}
        methodId={methodId}
        setMethodId={setMethodId}
      />

      <PrayerWeekDialog
        open={weekOpen}
        onOpenChange={setWeekOpen}
        location={location}
        methodId={methodId}
        methodShort={method.short}
      />
    </>
  );
}
