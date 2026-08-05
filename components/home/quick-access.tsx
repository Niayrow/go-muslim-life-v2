import Link from "next/link";
import {
  BookOpen,
  Headphones,
  Heart,
  HelpCircle,
  Library,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const QUICK: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Coran", href: "/coran", icon: BookOpen },
  { label: "Écouter", href: "/coran", icon: Headphones },
  { label: "Invocations", href: "/plus", icon: Heart },
  { label: "Quiz", href: "/savoir", icon: Sparkles },
  { label: "Bibliothèque", href: "/savoir", icon: Library },
  { label: "Questions", href: "/savoir", icon: HelpCircle },
];

export function QuickAccess() {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-semibold tracking-wide text-brand-soft">
        Accès rapide
      </h2>
      <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-6 md:gap-3">
        {QUICK.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="glass-panel-interactive flex flex-col items-center gap-2.5 rounded-2xl px-2 py-3.5 text-center md:flex-row md:justify-start md:gap-3 md:px-4 md:py-4 md:text-left"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-panel-elevated text-brand-warm md:size-10">
                <Icon className="size-4" strokeWidth={2.2} />
              </span>
              <span className="text-[11px] font-semibold text-brand-pearl md:text-sm">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
