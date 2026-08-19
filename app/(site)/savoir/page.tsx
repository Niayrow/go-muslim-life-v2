import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookHeart,
  Coins,
  Compass,
  Crown,
  Droplets,
  Footprints,
  Moon,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Savoir",
  description:
    "Modules pour pratiquer (purification, prière, comportement, jeûne, zakat) et histoires des Prophètes, chapitre par chapitre.",
  path: "/savoir",
});

const MODULES: {
  n: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  chapters: number;
}[] = [
  {
    n: "01",
    title: "La Purification",
    description: "Wudu, Ghusl et Tayammum — la clé avant toute adoration.",
    href: "/savoir/purification",
    icon: Droplets,
    chapters: 6,
  },
  {
    n: "02",
    title: "La Prière",
    description: "Le pilier central. Positions, récitations et sens.",
    href: "/savoir/priere",
    icon: Footprints,
    chapters: 13,
  },
  {
    n: "03",
    title: "Comportement",
    description: "Ihsan : colère, famille, langue et excellence du caractère.",
    href: "/savoir/comportement",
    icon: Crown,
    chapters: 6,
  },
  {
    n: "04",
    title: "Le Jeûne",
    description: "Ramadan, Tarawih, Laylatul Qadr et Aïd.",
    href: "/savoir/jeune",
    icon: Moon,
    chapters: 10,
  },
  {
    n: "05",
    title: "La Zakat",
    description: "Nisab, calcul, bénéficiaires et Zakat al-Fitr.",
    href: "/savoir/zakat",
    icon: Coins,
    chapters: 7,
  },
];

const STORIES: {
  name: string;
  arabic: string;
  blurb: string;
  href: string;
  meta: string;
  ready: boolean;
}[] = [
  {
    name: "Muhammad ﷺ",
    arabic: "محمد رسول الله",
    blurb:
      "De l'Année de l'Éléphant au Pèlerinage d'Adieu — la Sîra en huit chapitres.",
    href: "/histoires/muhammad",
    meta: "8 chapitres · 570–632",
    ready: true,
  },
  {
    name: "Ibrâhîm",
    arabic: "إبراهيم",
    blurb: "Le père des monothéistes.",
    href: "/histoires",
    meta: "Bientôt",
    ready: false,
  },
  {
    name: "Mûsâ",
    arabic: "موسى",
    blurb: "Le dialogue avec le Buisson.",
    href: "/histoires",
    meta: "Bientôt",
    ready: false,
  },
];

export default function SavoirPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-5 py-8 md:gap-20 md:px-8 md:py-12 lg:px-10">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs font-semibold tracking-[0.18em] text-brand-gold-400 uppercase">
          Apprendre
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-brand-pearl md:text-5xl">
          Savoir
        </h1>
        <p className="text-brand-mist md:text-lg">
          Deux univers : les{" "}
          <span className="text-brand-pearl">modules</span> pour pratiquer, les{" "}
          <span className="text-brand-pearl">histoires</span> pour s&apos;immerger
          dans les récits.
        </p>
      </header>

      {/* ——— MODULES ——— */}
      <section className="relative space-y-8">
        <div className="pointer-events-none absolute -inset-x-4 -top-6 -bottom-4 rounded-[2rem] bg-gradient-to-b from-brand-panel/40 via-transparent to-transparent md:-inset-x-6" />

        <div className="relative flex flex-col gap-4 border-b border-brand-line/30 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-line/40 bg-brand-panel-elevated/50 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-brand-steel-300 uppercase">
              <Compass className="size-3.5 text-brand-steel-400" />
              Pratique
            </span>
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold tracking-tight text-brand-pearl md:text-3xl">
                Modules
              </h2>
              <p className="max-w-lg text-sm text-brand-mist md:text-base">
                Guides pas à pas pour comprendre et appliquer les piliers —
                structure claire, scènes progressives.
              </p>
            </div>
          </div>
          <p className="shrink-0 text-[10px] font-bold tracking-widest text-brand-steel-500 uppercase">
            {MODULES.length} parcours
          </p>
        </div>

        <ul className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((mod) => {
            const Icon = mod.icon;
            return (
              <li key={mod.href}>
                <Link
                  href={mod.href}
                  className={cn(
                    "group flex h-full flex-col gap-4 rounded-2xl border border-brand-line/30 bg-brand-panel/50 p-5",
                    "transition-colors hover:border-brand-steel-400/35 hover:bg-brand-panel-elevated/55"
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-brand-line/35 bg-brand-night-soft/80 text-brand-steel-300 transition-colors group-hover:border-brand-steel-400/40 group-hover:text-brand-pearl">
                      <Icon className="size-5" strokeWidth={2} />
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-brand-steel-500 tabular-nums uppercase">
                      {mod.n}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-brand-pearl">
                      {mod.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-mist">
                      {mod.description}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-1">
                    <span className="text-[10px] font-semibold tracking-wide text-brand-steel-400 uppercase">
                      {mod.chapters} chapitres
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-steel-300 transition-colors group-hover:text-brand-warm">
                      Ouvrir
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ——— HISTOIRES ——— */}
      <section className="relative space-y-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-4 -top-8 -bottom-6 rounded-[2rem] bg-gradient-to-br from-brand-warm/[0.07] via-transparent to-brand-gold-400/[0.04] md:-inset-x-6"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-full bg-brand-warm/10 blur-3xl md:h-56 md:w-56"
        />

        <div className="relative flex flex-col gap-4 border-b border-brand-gold-400/20 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold-400/30 bg-brand-warm/10 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-brand-warm uppercase">
              <BookHeart className="size-3.5" />
              Récits
            </span>
            <div className="space-y-2">
              <h2 className="font-serif text-2xl tracking-tight text-brand-pearl md:text-4xl">
                Histoires des Prophètes
              </h2>
              <p className="max-w-lg text-sm text-brand-mist md:text-base">
                Immersion narrative dans la Sîra et les récits des messagers —
                une histoire, chapitre après chapitre.
              </p>
            </div>
          </div>
          <Link
            href="/histoires"
            className="shrink-0 text-xs font-semibold text-brand-warm transition-colors hover:text-brand-gold-300"
          >
            Voir tout
            <ArrowRight className="ml-1 inline size-3.5" />
          </Link>
        </div>

        <ul className="relative grid gap-4 md:grid-cols-2">
          {STORIES.map((story, index) => {
            if (!story.ready) {
              return (
                <li
                  key={story.name}
                  className="rounded-2xl border border-brand-gold-400/10 bg-brand-panel/30 px-5 py-6 opacity-45"
                >
                  <p className="font-serif text-lg text-brand-gold-300/60">
                    {story.arabic}
                  </p>
                  <p className="mt-1 text-base font-bold text-brand-pearl/80">
                    {story.name}
                  </p>
                  <p className="mt-1 text-sm text-brand-mist">{story.blurb}</p>
                  <p className="mt-3 text-[10px] font-bold tracking-widest text-brand-steel-500 uppercase">
                    {story.meta}
                  </p>
                </li>
              );
            }

            return (
              <li key={story.href} className={cn(index === 0 && "md:col-span-2")}>
                <Link
                  href={story.href}
                  className={cn(
                    "group relative block overflow-hidden rounded-2xl border border-brand-gold-400/25 bg-gradient-to-br from-brand-panel-elevated/80 to-brand-night-soft/90 p-6 md:p-8",
                    "transition-colors hover:border-brand-gold-400/45"
                  )}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-16 -right-10 h-44 w-44 rounded-full bg-brand-warm/15 blur-3xl transition-opacity group-hover:opacity-100"
                  />
                  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-3">
                      <p className="font-serif text-2xl text-brand-gold-300 md:text-3xl">
                        {story.arabic}
                      </p>
                      <h3 className="text-xl font-extrabold text-brand-pearl md:text-2xl">
                        {story.name}
                      </h3>
                      <p className="max-w-xl text-sm leading-relaxed text-brand-mist md:text-base">
                        {story.blurb}
                      </p>
                      <p className="text-[10px] font-bold tracking-[0.16em] text-brand-gold-400 uppercase">
                        {story.meta}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-brand-gold-400/30 bg-brand-warm/10 px-4 py-2 text-sm font-semibold text-brand-warm transition-transform group-hover:translate-x-0.5 sm:self-auto">
                      Lire le récit
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
