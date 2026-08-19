import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Compass,
  GraduationCap,
  Headphones,
  LayoutTemplate,
  MessageCircleQuestion,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const HIGHLIGHTS: {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
}[] = [
  {
    icon: Compass,
    title: "Nouvel accueil",
    text: "Quatre écrans : accueil, horaires, accès rapide et modules. Glisse pour explorer.",
    href: "/",
  },
  {
    icon: Clock,
    title: "Horaires de prière",
    text: "Prochaine prière, compte à rebours, ville, méthode de calcul et vue semaine.",
    href: "/priere",
  },
  {
    icon: GraduationCap,
    title: "Savoir",
    text: "Cinq modules guidés : purification, prière, comportement, jeûne et zakat.",
    href: "/savoir",
  },
  {
    icon: Headphones,
    title: "Coran avec Sawra",
    text: "Lire et écouter le Coran depuis le site frère, dans la même famille visuelle.",
    href: "/sawra",
  },
  {
    icon: Sparkles,
    title: "Invocations",
    text: "Douas et adhkar du quotidien, pour apaiser le cœur tout au long de la journée.",
    href: "/invocations",
  },
  {
    icon: MessageCircleQuestion,
    title: "Questions & réponses",
    text: "Réponses sourcées au Coran et à la Sunna, pour les doutes du quotidien.",
    href: "/questions",
  },
];

const GROUPS: {
  title: string;
  items: string[];
}[] = [
  {
    title: "Accueil & navigation",
    items: [
      "Parcours plein écran, pensé mobile d’abord",
      "Recherche globale (Cmd / Ctrl + K)",
      "Barre du bas en verre liquide, lisible et flottante",
      "Horaires optionnels dans la barre — proposés dès le premier lancement",
    ],
  },
  {
    title: "Pratique quotidienne",
    items: [
      "Horaires selon ta ville et ta méthode (UOIF, etc.)",
      "Compte à rebours jusqu’à la prochaine prière",
      "Histoires des Prophètes — Sîra de Muhammad ﷺ",
      "Calculateur de zakat, avec cours de l’or",
    ],
  },
  {
    title: "Apprentissage",
    items: [
      "Chapitres progressifs, à ton rythme",
      "Célébration à la fin d’un module",
      "Cartes modules aérées, une par ligne sur mobile",
    ],
  },
  {
    title: "Réglages",
    items: [
      "Tout reste sur ton appareil (ville, méthode, affichage)",
      "Tu peux activer ou masquer les horaires dans Réglages → Affichage",
    ],
  },
];

export function UpdatesView() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-5 py-8 md:gap-12 md:px-8 md:py-12">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-brand-mist transition-colors hover:text-brand-warm"
        >
          <ArrowLeft className="size-3.5" />
          Accueil
        </Link>
      </div>

      <header className="space-y-5">
        <p className="inline-flex items-center gap-2 rounded-full border border-brand-gold-400/30 bg-brand-warm/10 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-brand-warm uppercase">
          <Sparkles className="size-3.5" />
          Journal des versions
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-pearl md:text-5xl">
          GoMuslimLife{" "}
          <span className="bg-gradient-to-r from-brand-gold-300 via-brand-warm to-brand-gold-400 bg-clip-text text-transparent">
            2.0
          </span>
        </h1>
        <p className="max-w-xl text-base text-brand-mist md:text-lg">
          Une nouvelle maison pour apprendre, prier et apaiser ton cœur — plus
          claire, plus rapide, entièrement reconstruite.
        </p>
        <p className="text-xs text-brand-steel-500">
          Publiée le 19 août 2026
        </p>
      </header>

      <section
        className={cn(
          "relative overflow-hidden rounded-[1.75rem] border border-brand-gold-400/25",
          "bg-gradient-to-br from-brand-warm/12 via-brand-panel/80 to-brand-night p-5 md:p-7"
        )}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-10 size-48 rounded-full bg-brand-warm/20 blur-3xl"
        />
        <p className="text-[10px] font-bold tracking-[0.18em] text-brand-gold-400 uppercase">
          Version majeure
        </p>
        <h2 className="mt-2 text-xl font-extrabold tracking-tight text-brand-pearl md:text-2xl">
          Tout ce qu’il faut. Rien d’autre.
        </h2>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-brand-soft">
          GoMuslimLife 2.0 reprend l’essentiel de ta pratique — prière, savoir,
          invocations, questions — dans une interface nuit, acier et bronze,
          inspirée de Sawra.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-bold tracking-wide text-brand-pearl uppercase">
          Ce qui change
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-brand-line/35 bg-brand-panel/50 p-4 transition-colors hover:border-brand-gold-400/35 hover:bg-brand-panel-elevated/50"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand-warm/12 text-brand-warm">
                    <Icon className="size-4" strokeWidth={2.2} />
                  </span>
                  <span>
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-brand-pearl">
                        {item.title}
                      </span>
                      <ArrowRight className="size-3.5 shrink-0 text-brand-steel-500 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-warm" />
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-brand-mist">
                      {item.text}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="space-y-8">
        {GROUPS.map((group) => (
          <div key={group.title} className="space-y-3">
            <h2 className="text-sm font-bold tracking-wide text-brand-pearl uppercase">
              {group.title}
            </h2>
            <ul className="space-y-2 rounded-2xl border border-brand-line/30 bg-brand-panel/40 px-4 py-4">
              {group.items.map((line) => (
                <li
                  key={line}
                  className="flex gap-2.5 text-sm leading-relaxed text-brand-soft"
                >
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-gold-400"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-3 rounded-2xl border border-brand-line/30 bg-brand-panel/40 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <LayoutTemplate className="mt-0.5 size-4 shrink-0 text-brand-warm" />
          <div>
            <p className="text-sm font-bold text-brand-pearl">Réglages</p>
            <p className="mt-0.5 text-xs text-brand-mist">
              Ville, méthode de calcul, horaires dans la barre.
            </p>
          </div>
        </div>
        <Link
          href="/settings"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-warm hover:text-brand-gold-300"
        >
          Ouvrir les réglages
          <ArrowRight className="size-3.5" />
        </Link>
      </section>

      <p className="text-xs text-brand-steel-500">
        D’autres contenus de la 1.9 arriveront progressivement.
      </p>
    </main>
  );
}
