"use client";

import {
  Check,
  Loader2,
  LocateFixed,
  MapPin,
  Search,
  Settings2,
  type LucideIcon,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  CALCULATION_METHODS,
  formatMethodAngles,
  type CitySearchResult,
  type PrayerLocation,
} from "@/lib/prayer-times";
import { cn } from "@/lib/utils";

function ModalHero({
  icon: Icon,
  eyebrow,
  title,
  description,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-4 px-5 pt-6 pb-5 md:px-6">
      <div className="flex items-start gap-3.5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-brand-gold-400/25 bg-brand-warm/12 text-brand-warm shadow-[0_0_24px_rgba(240,209,188,0.12)]">
          <Icon className="size-5" strokeWidth={2.1} />
        </span>
        <DialogHeader className="gap-1.5">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-brand-gold-400 uppercase">
            {eyebrow}
          </p>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </div>
      <div className="modal-header-rule" aria-hidden />
    </div>
  );
}

type CityDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  cityQuery: string;
  setCityQuery: (q: string) => void;
  cityResults: CitySearchResult[];
  searchingCity: boolean;
  locating: boolean;
  locateMe: () => Promise<PrayerLocation>;
  setLocation: (loc: PrayerLocation) => void;
};

export function PrayerCityDialog({
  open,
  onOpenChange,
  cityQuery,
  setCityQuery,
  cityResults,
  searchingCity,
  locating,
  locateMe,
  setLocation,
}: CityDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85dvh] overflow-hidden">
        <ModalHero
          icon={MapPin}
          eyebrow="Localisation"
          title="Changer de ville"
          description="Utilise ta position ou recherche une commune en France."
        />

        <div className="space-y-4 px-5 pb-6 md:px-6">
          <button
            type="button"
            disabled={locating}
            onClick={async () => {
              try {
                await locateMe();
                onOpenChange(false);
              } catch {
                /* erreur déjà gérée dans le hook */
              }
            }}
            className="brand-button-primary flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-sm font-bold disabled:opacity-60"
          >
            {locating ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <LocateFixed className="size-4" />
            )}
            {locating ? "Localisation…" : "Me géolocaliser"}
          </button>

          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-brand-steel-400" />
            <Input
              value={cityQuery}
              onChange={(e) => setCityQuery(e.target.value)}
              placeholder="Rechercher une ville…"
              className="h-12 rounded-2xl border-brand-line/40 bg-brand-night/50 pl-11"
              autoFocus
            />
          </div>

          {searchingCity && (
            <p className="flex items-center gap-2 text-xs text-brand-mist">
              <Loader2 className="size-3.5 animate-spin text-brand-warm" />
              Recherche…
            </p>
          )}

          <ul className="max-h-56 space-y-2 overflow-y-auto pr-0.5">
            {cityResults.map((city) => (
              <li key={`${city.name}-${city.lat}-${city.lng}`}>
                <button
                  type="button"
                  className="group flex w-full items-center gap-3 rounded-2xl border border-brand-line/30 bg-brand-night/35 px-3.5 py-3 text-left transition-all hover:border-brand-gold-400/30 hover:bg-brand-warm/8"
                  onClick={() => {
                    setLocation({
                      name: city.name,
                      lat: city.lat,
                      lng: city.lng,
                    });
                    setCityQuery("");
                    onOpenChange(false);
                  }}
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-warm/10 text-brand-warm transition-transform group-hover:scale-105">
                    <MapPin className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-brand-pearl">
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
            {!searchingCity &&
              cityQuery.trim().length >= 2 &&
              cityResults.length === 0 && (
                <li className="rounded-2xl border border-dashed border-brand-line/30 px-4 py-8 text-center text-sm text-brand-mist">
                  Aucune ville trouvée
                </li>
              )}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}

type MethodDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  methodId: number;
  setMethodId: (id: number) => void;
};

export function PrayerMethodDialog({
  open,
  onOpenChange,
  methodId,
  setMethodId,
}: MethodDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden">
        <div className="space-y-3 px-5 pt-5 pb-3 md:px-6">
          <div className="flex items-start gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-brand-gold-400/25 bg-brand-warm/12 text-brand-warm">
              <Settings2 className="size-4" strokeWidth={2.1} />
            </span>
            <DialogHeader className="gap-0.5">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-brand-gold-400 uppercase">
                Calcul
              </p>
              <DialogTitle className="text-lg">Méthode de calcul</DialogTitle>
              <DialogDescription className="text-xs">
                Convention pour Fajr et Isha.
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="modal-header-rule" aria-hidden />
        </div>

        <ul className="space-y-1.5 px-5 pb-5 md:px-6">
          {CALCULATION_METHODS.map((m) => {
            const active = m.id === methodId;
            return (
              <li key={m.id}>
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-all",
                    active
                      ? "border-brand-gold-400/40 bg-gradient-to-br from-brand-warm/15 to-brand-warm/5"
                      : "border-brand-line/30 bg-brand-night/35 hover:border-brand-gold-400/25 hover:bg-brand-warm/6"
                  )}
                  onClick={() => {
                    setMethodId(m.id);
                    onOpenChange(false);
                  }}
                >
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      <span className="text-sm font-bold text-brand-pearl">
                        {m.short}
                      </span>
                      <span className="text-[11px] text-brand-mist">
                        {m.label}
                      </span>
                      {active && (
                        <span className="rounded-full bg-brand-warm/20 px-1.5 py-px text-[9px] font-semibold tracking-wide text-brand-warm uppercase">
                          Actif
                        </span>
                      )}
                    </span>
                    <span className="mt-0.5 block text-[10px] font-medium text-brand-steel-400">
                      {formatMethodAngles(m)}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "flex size-6 shrink-0 items-center justify-center rounded-full border transition-colors",
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
      </DialogContent>
    </Dialog>
  );
}
