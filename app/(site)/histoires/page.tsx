import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookHeart } from "lucide-react";

import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Histoires des Prophètes",
  description:
    "Récits de la Sîra et des prophètes, chapitre par chapitre — Muhammad ﷺ et bientôt d’autres parcours.",
  path: "/histoires",
});

const STORIES = [
  {
    slug: "muhammad",
    name: "Muhammad ﷺ",
    arabic: "محمد رسول الله",
    era: "570 – 632",
    chapters: 8,
    blurb:
      "De l'Année de l'Éléphant au Pèlerinage d'Adieu — la Sîra complète en huit chapitres.",
    ready: true,
  },
  {
    slug: "ibrahim",
    name: "Ibrâhîm",
    arabic: "إبراهيم",
    era: "Bientôt",
    chapters: 0,
    blurb: "Le père des monothéistes.",
    ready: false,
  },
  {
    slug: "moussa",
    name: "Mûsâ",
    arabic: "موسى",
    era: "Bientôt",
    chapters: 0,
    blurb: "Le dialogue avec le Buisson.",
    ready: false,
  },
  {
    slug: "issa",
    name: "Îsâ",
    arabic: "عيسى",
    era: "Bientôt",
    chapters: 0,
    blurb: "Le Messie dans la tradition islamique.",
    ready: false,
  },
];

export default function HistoiresPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-12 px-5 py-10 md:px-8 md:py-14 lg:px-10">
      <div>
        <Link
          href="/savoir"
          className="inline-flex items-center gap-1.5 text-sm text-brand-mist transition-colors hover:text-brand-warm"
        >
          <ArrowLeft className="size-3.5" />
          Savoir
        </Link>
      </div>

      <header className="space-y-5 border-b border-brand-line/25 pb-10">
        <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-brand-warm uppercase">
          <BookHeart className="size-3.5" />
          Récits
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-brand-pearl md:text-5xl">
          Histoires des Prophètes
        </h1>
        <p className="max-w-xl text-brand-mist md:text-lg">
          Des récits immersifs, chapitre par chapitre, selon la tradition
          islamique classique.
        </p>
      </header>

      <ul className="space-y-4">
        {STORIES.map((story) => {
          if (!story.ready) {
            return (
              <li
                key={story.slug}
                className="rounded-2xl border border-brand-line/25 bg-brand-panel/30 px-5 py-5 opacity-50"
              >
                <p className="font-serif text-lg text-brand-gold-300/70">
                  {story.arabic}
                </p>
                <p className="mt-1 text-lg font-bold text-brand-pearl">
                  {story.name}
                </p>
                <p className="mt-1 text-sm text-brand-mist">{story.blurb}</p>
              </li>
            );
          }

          return (
            <li key={story.slug}>
              <Link
                href={`/histoires/${story.slug}`}
                className="group block rounded-2xl border border-brand-gold-400/20 bg-brand-panel/40 px-5 py-6 transition-colors hover:border-brand-gold-400/40 hover:bg-brand-panel/60"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="font-serif text-xl text-brand-gold-300 md:text-2xl">
                      {story.arabic}
                    </p>
                    <h2 className="text-xl font-extrabold text-brand-pearl md:text-2xl">
                      {story.name}
                    </h2>
                    <p className="max-w-md text-sm text-brand-mist md:text-base">
                      {story.blurb}
                    </p>
                    <p className="text-[10px] font-bold tracking-widest text-brand-steel-400 uppercase">
                      {story.era} · {story.chapters} chapitres
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-warm transition-transform group-hover:translate-x-0.5">
                    Lire
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
