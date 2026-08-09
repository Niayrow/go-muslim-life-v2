"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Loader2, MapPin } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  fetchWeekTimings,
  PRAYER_SLOTS,
  type PrayerLocation,
  type WeekDayRow,
} from "@/lib/prayer-times";
import { cn } from "@/lib/utils";

type PrayerWeekDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  location: PrayerLocation;
  methodId: number;
  methodShort: string;
};

export function PrayerWeekDialog({
  open,
  onOpenChange,
  location,
  methodId,
  methodShort,
}: PrayerWeekDialogProps) {
  const [rows, setRows] = useState<WeekDayRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchWeekTimings(location, methodId);
        if (!cancelled) setRows(data);
      } catch {
        if (!cancelled) {
          setError("Impossible de charger la semaine.");
          setRows([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void load();
    return () => {
      cancelled = true;
    };
  }, [open, location, methodId]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[90dvh] w-[calc(100%-1.25rem)] max-w-4xl flex-col overflow-hidden rounded-[1.75rem]">
        <div className="space-y-4 px-5 pt-6 pb-4 md:px-6">
          <div className="flex items-start gap-3.5 pr-10">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-brand-gold-400/30 bg-brand-warm/15 text-brand-warm">
              <CalendarDays className="size-5" strokeWidth={2.1} />
            </span>
            <DialogHeader className="gap-1.5 pr-0">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-brand-gold-400 uppercase">
                Planning
              </p>
              <DialogTitle>Horaires de la semaine</DialogTitle>
              <DialogDescription className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3" />
                  {location.name}
                </span>
                <span className="text-brand-steel-400">·</span>
                <span>{methodShort}</span>
                <span className="text-brand-steel-400">·</span>
                <span>7 prochains jours</span>
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="modal-header-rule" aria-hidden />
        </div>

        <div className="min-h-0 flex-1 overflow-auto px-4 pb-5 md:px-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center gap-3 py-20 text-brand-mist">
              <Loader2 className="size-6 animate-spin text-brand-warm" />
              <p className="text-sm">Chargement de la semaine…</p>
            </div>
          ) : error ? (
            <p className="py-16 text-center text-sm text-brand-danger">{error}</p>
          ) : (
            <div className="space-y-2.5">
              {/* En-tête colonnes */}
              <div className="hidden overflow-hidden rounded-2xl border border-brand-line/30 bg-brand-panel/70 sm:block">
                <div className="grid grid-cols-[minmax(7.5rem,1.1fr)_repeat(6,minmax(0,1fr))] gap-1 px-3 py-2.5 md:px-4">
                  <span className="text-[10px] font-semibold tracking-[0.12em] text-brand-steel-400 uppercase">
                    Jour
                  </span>
                  {PRAYER_SLOTS.map((slot) => (
                    <span
                      key={slot.key}
                      className={cn(
                        "text-center text-[10px] font-semibold tracking-[0.1em] uppercase",
                        slot.secondary
                          ? "text-brand-steel-400/80"
                          : "text-brand-gold-400"
                      )}
                    >
                      {slot.label}
                    </span>
                  ))}
                </div>
              </div>

              {rows.map((row) => (
                <div
                  key={row.dateKey}
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-colors",
                    row.isToday
                      ? "border-brand-gold-400/35 bg-brand-warm/12"
                      : "border-brand-line/30 bg-brand-panel/55 hover:border-brand-line/50 hover:bg-brand-panel/75"
                  )}
                >
                  <div className="grid grid-cols-1 gap-3 px-3 py-3 sm:grid-cols-[minmax(7.5rem,1.1fr)_repeat(6,minmax(0,1fr))] sm:items-center sm:gap-1 md:px-4 md:py-3.5">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={cn(
                            "text-sm font-bold",
                            row.isToday ? "text-brand-warm" : "text-brand-pearl"
                          )}
                        >
                          {row.weekday}
                        </span>
                        {row.isToday && (
                          <span className="rounded-full bg-brand-warm/25 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-brand-warm uppercase">
                            Aujourd’hui
                          </span>
                        )}
                      </div>
                      <span className="mt-0.5 block text-xs text-brand-mist">
                        {row.dayMonth}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:contents">
                      {PRAYER_SLOTS.map((slot) => (
                        <div
                          key={slot.key}
                          className={cn(
                            "rounded-xl px-2 py-1.5 text-center sm:rounded-none sm:bg-transparent sm:px-0 sm:py-0",
                            row.isToday
                              ? "bg-brand-warm/10 sm:bg-transparent"
                              : "bg-brand-night/35 sm:bg-transparent"
                          )}
                        >
                          <span className="mb-0.5 block text-[9px] font-semibold tracking-wide text-brand-steel-400 uppercase sm:hidden">
                            {slot.label}
                          </span>
                          <span
                            className={cn(
                              "font-mono text-sm tabular-nums md:text-[0.95rem]",
                              row.isToday
                                ? "font-semibold text-brand-warm"
                                : slot.secondary
                                  ? "text-brand-mist"
                                  : "text-brand-pearl"
                            )}
                          >
                            {row.times[slot.key]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
