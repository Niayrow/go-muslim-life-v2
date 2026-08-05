import Link from "next/link";
import {
  Droplets,
  Heart,
  Moon,
  Scale,
  Users,
  type LucideIcon,
} from "lucide-react";

const MODULES: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Purification",
    description: "Ablutions et pureté",
    href: "/purification",
    icon: Droplets,
  },
  {
    title: "Prière",
    description: "Guide de la salat",
    href: "/savoir/priere",
    icon: Moon,
  },
  {
    title: "Comportement",
    description: "Éthique au quotidien",
    href: "/plus",
    icon: Users,
  },
  {
    title: "Jeûne",
    description: "Ramadan et sawm",
    href: "/jeune",
    icon: Heart,
  },
  {
    title: "Zakat",
    description: "Calcul et règles",
    href: "/zakat",
    icon: Scale,
  },
];

export function ModulesSection() {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-3">
        <h2 className="text-sm font-semibold tracking-wide text-brand-soft">
          Apprendre
        </h2>
        <Link
          href="/savoir"
          className="text-xs font-medium text-brand-gold-400 transition-colors hover:text-brand-warm"
        >
          Tout voir
        </Link>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {MODULES.map((mod) => {
          const Icon = mod.icon;
          return (
            <Link
              key={mod.title}
              href={mod.href}
              className="glass-panel-interactive flex items-center gap-3.5 rounded-2xl px-4 py-3.5 md:flex-col md:items-start md:gap-4 md:p-5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-warm/10 text-brand-warm">
                <Icon className="size-4" strokeWidth={2.2} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-bold text-brand-pearl">
                  {mod.title}
                </span>
                <span className="block text-xs text-brand-mist">
                  {mod.description}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
