"use client";

import { useState } from "react";
import Link from "next/link";
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

export function PrayerLayer() {
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
      <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-5 px-1 text-center md:max-w-xl md:gap-7">
        <div className="space-y-1.5">
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
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setCityOpen(true)}
            className="inline-flex max-w-[14rem] items-center gap-1.5 rounded-full border border-brand-line/40 bg-brand-panel/70 px-3 py-1.5 text-xs font-semibold text-brand-pearl transition-colors hover:border-brand-gold-400/35 hover:bg-brand-warm/10"
          >
            <MapPin className="size-3.5 shrink-0 text-brand-warm" />
            <span className="truncate">{location.name}</span>
          </button>
          <button
            type="button"
            onClick={() => setMethodOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-full border border-brand-line/40 bg-brand-panel/70 px-3 py-1.5 text-xs font-semibold text-brand-pearl transition-colors hover:border-brand-gold-400/35 hover:bg-brand-warm/10"
            aria-label="Changer la méthode de calcul"
          >
            <Settings2 className="size-3.5 shrink-0 text-brand-warm" />
            {method.short}
          </button>
          <button
            type="button"
            onClick={() => setWeekOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-full border border-brand-line/40 bg-brand-panel/70 px-3 py-1.5 text-xs font-semibold text-brand-pearl transition-colors hover:border-brand-gold-400/35 hover:bg-brand-warm/10"
          >
            <CalendarDays className="size-3.5 shrink-0 text-brand-warm" />
            Semaine
          </button>
        </div>

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
                  <p className="text-4xl font-extrabold tracking-tight text-brand-pearl md:text-5xl">
                    {next.label}
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-brand-warm tabular-nums md:text-3xl">
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

        <ul className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3">
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
              <li
                key={slot.key}
                className={cn(
                  "flex items-center gap-2.5 rounded-2xl border px-3 py-2.5 text-left",
                  isNext
                    ? "border-brand-gold-400/35 bg-brand-warm/10"
                    : "border-brand-line/40 bg-brand-panel/70",
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
                    "font-mono text-sm font-semibold tabular-nums",
                    isNext ? "text-brand-warm" : "text-brand-pearl",
                    isPast && "text-brand-mist"
                  )}
                >
                  {slot.time || "--:--"}
                </span>
              </li>
            );
          })}
        </ul>

        <Link
          href="/priere"
          className="text-sm font-semibold text-brand-warm transition-colors hover:text-brand-gold-300"
        >
          Voir le détail →
        </Link>
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
