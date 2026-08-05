"use client";

import {
  Loader2,
  LocateFixed,
  MapPin,
  Moon,
  Search,
  Settings2,
  Sunrise,
  Sun,
  Sunset,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

import { usePrayerTimes } from "@/hooks/use-prayer-times";
import {
  CALCULATION_METHODS,
  type PrayerKey,
} from "@/lib/prayer-times";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const ICONS: Record<PrayerKey, LucideIcon> = {
  Fajr: Moon,
  Sunrise: Sunrise,
  Dhuhr: Sun,
  Asr: Sun,
  Maghrib: Sunset,
  Isha: Moon,
};

export function PrayerTimesView() {
  const {
    location,
    methodId,
    setLocation,
    setMethodId,
    day,
    slots,
    next,
    countdown,
    loading,
    error,
    cityQuery,
    setCityQuery,
    cityResults,
    searchingCity,
    locating,
    locateMe,
  } = usePrayerTimes();

  const [cityOpen, setCityOpen] = useState(false);
  const [methodOpen, setMethodOpen] = useState(false);

  const method =
    CALCULATION_METHODS.find((m) => m.id === methodId) ?? CALCULATION_METHODS[0];

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-5 py-8 md:gap-8 md:px-8 md:py-10 lg:px-10">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-400">
            Horaires
          </p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-brand-pearl md:text-4xl">
            Prière
          </h1>
          {day?.hijri && (
            <p className="mt-1 text-sm text-brand-mist">{day.hijri}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => setCityOpen(true)}
            className="max-w-[12rem] truncate"
          >
            <MapPin className="size-3.5 shrink-0" />
            <span className="truncate">{location.name}</span>
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => setMethodOpen(true)}
            className="hidden sm:inline-flex"
          >
            <Settings2 className="size-3.5" />
            {method.short}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Méthode de calcul"
            className="sm:hidden"
            onClick={() => setMethodOpen(true)}
          >
            <Settings2 className="size-4" />
          </Button>
        </div>
      </header>

      {/* Mobile: stack · Desktop: 2 colonnes */}
      <div className="grid gap-5 lg:grid-cols-[1fr_1.15fr] lg:gap-8 lg:items-start">
        <section className="glass-panel relative overflow-hidden rounded-[1.75rem] px-5 py-7 md:px-7 md:py-9 lg:min-h-[20rem] lg:flex lg:flex-col lg:justify-center">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-warm/10 blur-3xl" />

          {loading && !next ? (
            <div className="flex items-center gap-3 text-brand-mist">
              <Loader2 className="size-5 animate-spin text-brand-warm" />
              Chargement des horaires…
            </div>
          ) : error && !next ? (
            <p className="text-sm text-brand-danger">{error}</p>
          ) : next ? (
            <div className="relative space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold-400">
                Prochaine{next.isTomorrow ? " · demain" : ""}
              </p>
              <div>
                <p className="text-4xl font-extrabold tracking-tight text-brand-pearl md:text-5xl">
                  {next.label}
                </p>
                <p className="mt-2 text-3xl font-semibold text-brand-warm tabular-nums md:text-4xl">
                  {next.time}
                </p>
              </div>
              <p className="font-mono text-3xl font-bold tabular-nums text-brand-pearl md:text-4xl">
                {countdown}
              </p>
              <p className="text-sm text-brand-steel-400">
                {method.short} · {location.name}
              </p>
            </div>
          ) : null}
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold tracking-wide text-brand-soft">
            Aujourd’hui
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
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
                    "flex items-center gap-3.5 rounded-2xl border px-4 py-3.5 transition-colors",
                    isNext
                      ? "border-brand-gold-400/35 bg-brand-warm/10"
                      : "border-brand-line/40 bg-brand-panel/60",
                    slot.secondary && !isNext && "opacity-70"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-xl",
                      isNext
                        ? "bg-brand-warm/15 text-brand-warm"
                        : "bg-brand-panel-elevated text-brand-steel-300"
                    )}
                  >
                    <Icon className="size-4" strokeWidth={2.2} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "block text-sm font-bold",
                        isNext ? "text-brand-warm" : "text-brand-pearl",
                        isPast && "text-brand-mist"
                      )}
                    >
                      {slot.label}
                      {slot.secondary && (
                        <span className="ml-2 text-[10px] font-medium uppercase tracking-wider text-brand-steel-400">
                          lever
                        </span>
                      )}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "font-mono text-base font-semibold tabular-nums",
                      isNext ? "text-brand-warm" : "text-brand-pearl",
                      isPast && "text-brand-mist"
                    )}
                  >
                    {loading && !slot.time ? "--:--" : slot.time}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      <Sheet open={cityOpen} onOpenChange={setCityOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Ville</SheetTitle>
            <SheetDescription>
              Recherche une commune en France ou utilise ta position.
            </SheetDescription>
          </SheetHeader>

          <div className="space-y-4 px-5 pb-6">
            <Button
              type="button"
              variant="secondary"
              className="w-full"
              disabled={locating}
              onClick={async () => {
                await locateMe();
                setCityOpen(false);
              }}
            >
              {locating ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <LocateFixed className="size-4" />
              )}
              Ma position
            </Button>

            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-brand-mist" />
              <Input
                value={cityQuery}
                onChange={(e) => setCityQuery(e.target.value)}
                placeholder="Rechercher une ville…"
                className="pl-10"
                autoFocus
              />
            </div>

            {searchingCity && (
              <p className="text-xs text-brand-mist">Recherche…</p>
            )}

            <ul className="max-h-64 space-y-1.5 overflow-y-auto">
              {cityResults.map((city) => (
                <li key={`${city.name}-${city.lat}-${city.lng}`}>
                  <button
                    type="button"
                    className="glass-panel-interactive flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left"
                    onClick={() => {
                      setLocation({
                        name: city.name,
                        lat: city.lat,
                        lng: city.lng,
                      });
                      setCityQuery("");
                      setCityOpen(false);
                    }}
                  >
                    <MapPin className="size-4 shrink-0 text-brand-warm" />
                    <span>
                      <span className="block text-sm font-semibold text-brand-pearl">
                        {city.name}
                      </span>
                      {city.postcode && (
                        <span className="text-xs text-brand-mist">
                          {city.postcode}
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet open={methodOpen} onOpenChange={setMethodOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Méthode de calcul</SheetTitle>
            <SheetDescription>
              Choisis la convention utilisée pour Fajr et Isha.
            </SheetDescription>
          </SheetHeader>

          <ul className="space-y-2 px-4 pb-6">
            {CALCULATION_METHODS.map((m) => {
              const active = m.id === methodId;
              return (
                <li key={m.id}>
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl border px-4 py-3.5 text-left transition-colors",
                      active
                        ? "border-brand-gold-400/40 bg-brand-warm/10"
                        : "border-brand-line/40 bg-brand-panel/50 hover:border-brand-gold-400/25"
                    )}
                    onClick={() => {
                      setMethodId(m.id);
                      setMethodOpen(false);
                    }}
                  >
                    <span>
                      <span className="block text-sm font-bold text-brand-pearl">
                        {m.short}
                      </span>
                      <span className="text-xs text-brand-mist">{m.label}</span>
                    </span>
                    {active && (
                      <span className="text-xs font-semibold text-brand-warm">
                        Actif
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </main>
  );
}
