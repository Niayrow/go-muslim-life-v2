import Link from "next/link";
import { ArrowRight, BookOpen, Moon } from "lucide-react";

const MODULES = [
  {
    title: "La Prière",
    description: "Guide complet de la Salat — 13 chapitres",
    href: "/savoir/priere",
    icon: Moon,
    ready: true,
  },
  {
    title: "Coran & récitation",
    description: "Bientôt",
    href: "/coran",
    icon: BookOpen,
    ready: false,
  },
];

export default function SavoirPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-5 py-8 md:px-8 md:py-10 lg:px-10">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-400">
          Apprendre
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-brand-pearl md:text-4xl">
          Savoir
        </h1>
        <p className="max-w-xl text-brand-mist">
          Parcours pédagogiques pour comprendre et pratiquer, étape par étape.
        </p>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((mod) => {
          const Icon = mod.icon;
          if (!mod.ready) {
            return (
              <div
                key={mod.title}
                className="flex flex-col gap-4 rounded-2xl border border-brand-line/30 bg-brand-panel/40 p-5 opacity-50"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-warm/12 text-brand-warm">
                  <Icon className="size-5" strokeWidth={2.2} />
                </span>
                <div>
                  <h2 className="text-base font-bold text-brand-pearl">
                    {mod.title}
                  </h2>
                  <p className="mt-1 text-sm text-brand-mist">{mod.description}</p>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={mod.href}
              href={mod.href}
              className="glass-panel-interactive flex flex-col gap-4 rounded-2xl p-5"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand-warm/12 text-brand-warm">
                <Icon className="size-5" strokeWidth={2.2} />
              </span>
              <div>
                <h2 className="text-base font-bold text-brand-pearl">
                  {mod.title}
                </h2>
                <p className="mt-1 text-sm text-brand-mist">{mod.description}</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-brand-warm">
                Commencer <ArrowRight className="size-3.5" />
              </span>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
