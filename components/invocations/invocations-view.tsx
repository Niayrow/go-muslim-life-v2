"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CloudSun,
  HandHeart,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";

import { InvocationCard } from "@/components/invocations/invocation-card";
import { Input } from "@/components/ui/input";
import {
  INVOCATIONS,
  type InvocationCategory,
} from "@/lib/invocations/data";
import { cn } from "@/lib/utils";

type TimeOfDay = "morning" | "day" | "evening" | "night";
type FilterCategory = "Tout" | InvocationCategory;

function detectTimeOfDay(hour: number): TimeOfDay {
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 16) return "day";
  if (hour >= 16 && hour < 21) return "evening";
  return "night";
}

function greetingFor(time: TimeOfDay) {
  switch (time) {
    case "morning":
      return { text: "Bonne matinée", icon: CloudSun };
    case "day":
      return { text: "Bonne journée", icon: Sun };
    case "evening":
      return { text: "Bonne soirée", icon: Sun };
    case "night":
      return { text: "Douce nuit", icon: Moon };
  }
}

export function InvocationsView() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("day");
  const [category, setCategory] = useState<FilterCategory>("Tout");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const tod = detectTimeOfDay(new Date().getHours());
    setTimeOfDay(tod);
    if (tod === "morning") setCategory("Matin");
    else if (tod === "evening" || tod === "night") setCategory("Soir");
  }, []);

  const categories = useMemo(() => {
    const present = Array.from(
      new Set(INVOCATIONS.map((i) => i.category))
    ) as InvocationCategory[];
    const priority: InvocationCategory[] =
      timeOfDay === "morning" || timeOfDay === "day"
        ? ["Matin", "Soir"]
        : ["Soir", "Matin"];
    return [
      "Tout" as const,
      ...priority.filter((c) => present.includes(c)),
      ...present.filter((c) => !priority.includes(c)),
    ];
  }, [timeOfDay]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return INVOCATIONS.filter((inv) => {
      const catOk = category === "Tout" || inv.category === category;
      if (!catOk) return false;
      if (!q) return true;
      return (
        inv.title.toLowerCase().includes(q) ||
        inv.translation.toLowerCase().includes(q) ||
        inv.phonetic.toLowerCase().includes(q)
      );
    });
  }, [category, query]);

  const greeting = greetingFor(timeOfDay);
  const GreetingIcon = greeting.icon;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-5 py-8 md:gap-10 md:px-8 md:py-12">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-brand-mist transition-colors hover:text-brand-warm"
        >
          <ArrowLeft className="size-3.5" />
          Accueil
        </Link>
      </div>

      <header className="space-y-3 border-b border-brand-line/25 pb-8">
        <p className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-brand-warm uppercase">
          <HandHeart className="size-3.5" />
          Douas & Adhkar
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-brand-pearl md:text-4xl">
          Adhkar
        </h1>
        <p className="max-w-lg text-sm text-brand-mist md:text-base">
          La citadelle du musulman — {INVOCATIONS.length} invocations à lire,
          écouter et mémoriser.
        </p>
        <p className="inline-flex items-center gap-1.5 text-xs text-brand-steel-400">
          <GreetingIcon className="size-3.5 text-brand-warm" />
          {greeting.text}
        </p>
      </header>

      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-brand-steel-400" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher…"
            className="h-11 rounded-xl border-brand-line/35 bg-brand-panel/60 pl-10 pr-10"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 text-brand-mist hover:text-brand-warm"
              aria-label="Effacer"
            >
              <X className="size-3.5" />
            </button>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const active = category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors duration-300",
                  active
                    ? "border-brand-gold-400/40 bg-brand-warm/12 text-brand-warm"
                    : "border-brand-line/30 text-brand-soft hover:border-brand-gold-400/25 hover:text-brand-pearl"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <p className="text-xs text-brand-steel-500">
          {filtered.length} invocation{filtered.length > 1 ? "s" : ""}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-brand-line/25 bg-brand-panel/40 px-6 py-14 text-center">
          <p className="text-sm text-brand-mist">Aucun résultat.</p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5">
          {filtered.map((inv) => (
            <li key={inv.id} className="h-full">
              <InvocationCard invocation={inv} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
