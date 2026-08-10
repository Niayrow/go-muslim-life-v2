"use client";

import { useState } from "react";
import {
  Check,
  Clock,
  LayoutTemplate,
  Loader2,
  LocateFixed,
  MapPin,
  Settings2,
} from "lucide-react";

import { PrayerCityDialog } from "@/components/prayer/prayer-settings-dialogs";
import { useAppSettings } from "@/hooks/use-app-settings";
import { usePrayerTimes } from "@/hooks/use-prayer-times";
import {
  CALCULATION_METHODS,
  formatMethodAngles,
} from "@/lib/prayer-times";
import { cn } from "@/lib/utils";

export function SettingsView() {
  const {
    location,
    methodId,
    setMethodId,
    setLocation,
    cityQuery,
    setCityQuery,
    cityResults,
    searchingCity,
    locating,
    locateMe,
    hydrated: prayerHydrated,
  } = usePrayerTimes();

  const {
    stickyPrayerBar,
    setStickyPrayerBar,
    hydrated: settingsHydrated,
  } = useAppSettings();

  const [cityOpen, setCityOpen] = useState(false);

  const activeMethod =
    CALCULATION_METHODS.find((m) => m.id === methodId) ?? CALCULATION_METHODS[0];

  const ready = prayerHydrated && settingsHydrated;

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-10 px-5 py-8 md:px-8 md:py-12">
      <header className="space-y-2">
        <p className="text-xs font-semibold tracking-[0.18em] text-brand-gold-400 uppercase">
          Préférences
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-brand-pearl md:text-4xl">
          Réglages
        </h1>
        <p className="text-brand-mist">
          Tout est enregistré localement sur cet appareil.
        </p>
      </header>

      {!ready ? (
        <p className="flex items-center gap-2 text-sm text-brand-mist">
          <Loader2 className="size-4 animate-spin text-brand-warm" />
          Chargement des préférences…
        </p>
      ) : (
        <>
          {/* 1. Horaires */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-brand-line/30 pb-3">
              <Clock className="size-4 text-brand-warm" />
              <h2 className="text-sm font-bold tracking-wide text-brand-pearl uppercase">
                Horaires de prière
              </h2>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setCityOpen(true)}
                className="flex w-full items-center gap-3 rounded-2xl border border-brand-line/35 bg-brand-panel/50 px-4 py-4 text-left transition-colors hover:border-brand-gold-400/30 hover:bg-brand-panel-elevated/50"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-warm/12 text-brand-warm">
                  <MapPin className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold tracking-wide text-brand-steel-400 uppercase">
                    Ville
                  </span>
                  <span className="mt-0.5 block truncate text-base font-bold text-brand-pearl">
                    {location.name}
                  </span>
                </span>
                <span className="text-xs font-semibold text-brand-warm">
                  Modifier
                </span>
              </button>

              <div className="rounded-2xl border border-brand-line/35 bg-brand-panel/40 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Settings2 className="size-4 text-brand-warm" />
                  <p className="text-xs font-semibold tracking-wide text-brand-steel-400 uppercase">
                    Méthode de calcul
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {CALCULATION_METHODS.map((m) => {
                    const active = m.id === methodId;
                    return (
                      <li key={m.id}>
                        <button
                          type="button"
                          onClick={() => setMethodId(m.id)}
                          className={cn(
                            "flex w-full items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-all",
                            active
                              ? "border-brand-gold-400/40 bg-brand-warm/10"
                              : "border-transparent hover:bg-brand-panel-elevated/60"
                          )}
                        >
                          <span className="min-w-0 flex-1">
                            <span className="flex flex-wrap items-center gap-x-2">
                              <span className="text-sm font-bold text-brand-pearl">
                                {m.short}
                              </span>
                              <span className="text-xs text-brand-mist">
                                {m.label}
                              </span>
                            </span>
                            <span className="mt-0.5 block text-[10px] text-brand-steel-400">
                              {formatMethodAngles(m)}
                            </span>
                          </span>
                          <span
                            className={cn(
                              "flex size-6 shrink-0 items-center justify-center rounded-full border",
                              active
                                ? "border-brand-warm/40 bg-brand-warm/20 text-brand-warm"
                                : "border-brand-line/40 text-transparent"
                            )}
                          >
                            <Check className="size-3" strokeWidth={2.5} />
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-3 text-xs text-brand-steel-400">
                  Actuel : {activeMethod.short} — {activeMethod.label}
                </p>
              </div>

              <button
                type="button"
                disabled={locating}
                onClick={() => void locateMe()}
                className="inline-flex items-center gap-2 rounded-xl border border-brand-line/40 bg-brand-panel/50 px-3 py-2 text-xs font-semibold text-brand-pearl transition-colors hover:border-brand-gold-400/30 disabled:opacity-60"
              >
                {locating ? (
                  <Loader2 className="size-3.5 animate-spin" />
                ) : (
                  <LocateFixed className="size-3.5 text-brand-warm" />
                )}
                Me géolocaliser
              </button>
            </div>
          </section>

          {/* 2. Affichage */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-brand-line/30 pb-3">
              <LayoutTemplate className="size-4 text-brand-warm" />
              <h2 className="text-sm font-bold tracking-wide text-brand-pearl uppercase">
                Affichage
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setStickyPrayerBar(!stickyPrayerBar)}
              className="flex w-full cursor-pointer items-start gap-4 rounded-2xl border border-brand-line/35 bg-brand-panel/50 px-4 py-4 text-left transition-colors hover:border-brand-gold-400/25"
            >
              <span className="min-w-0 flex-1 space-y-1">
                <span className="block text-base font-bold text-brand-pearl">
                  Horaires dans la barre de navigation
                </span>
                <span className="block text-sm leading-relaxed text-brand-mist">
                  Affiche la prochaine prière à droite de la navbar et les
                  horaires du jour juste en dessous, en transparence.
                </span>
              </span>
              <span
                role="switch"
                aria-checked={stickyPrayerBar}
                className={cn(
                  "relative mt-0.5 h-7 w-12 shrink-0 rounded-full border transition-colors",
                  stickyPrayerBar
                    ? "border-brand-gold-400/40 bg-brand-warm/30"
                    : "border-brand-line/50 bg-brand-night-soft"
                )}
              >
                <span
                  className={cn(
                    "absolute top-0.5 left-0.5 size-5 rounded-full bg-brand-pearl transition-transform",
                    stickyPrayerBar && "translate-x-5 bg-brand-warm"
                  )}
                />
              </span>
            </button>
          </section>

          <p className="text-xs text-brand-steel-500">
            Données stockées dans le localStorage de ton navigateur (ville,
            méthode, affichage).
          </p>
        </>
      )}

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

    </main>
  );
}
