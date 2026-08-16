import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type LegalSection = {
  title: string;
  body: ReactNode;
};

type LegalDocProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  icon: LucideIcon;
  sections: LegalSection[];
};

export function LegalDoc({
  eyebrow,
  title,
  intro,
  updated,
  icon: Icon,
  sections,
}: LegalDocProps) {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-5 py-8 md:gap-10 md:px-8 md:py-12">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-brand-mist transition-colors hover:text-brand-warm"
        >
          <ArrowLeft className="size-3.5" />
          Accueil
        </Link>
      </div>

      <header className="space-y-4 border-b border-brand-line/25 pb-8">
        <p className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-brand-warm uppercase">
          <Icon className="size-3.5" />
          {eyebrow}
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-brand-pearl md:text-4xl">
          {title}
        </h1>
        <p className="max-w-xl text-sm text-brand-mist md:text-base">{intro}</p>
        <p className="text-xs text-brand-steel-500">Dernière mise à jour : {updated}</p>
      </header>

      <div className="space-y-10">
        {sections.map((section, i) => (
          <section key={section.title} className="space-y-3">
            <h2 className="flex items-baseline gap-3 text-lg font-bold text-brand-pearl">
              <span className="font-mono text-xs text-brand-gold-400/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              {section.title}
            </h2>
            <div
              className={cn(
                "space-y-3 text-sm leading-relaxed text-brand-soft md:text-[15px]",
                "[&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5",
                "[&_a]:font-medium [&_a]:text-brand-warm hover:[&_a]:text-brand-gold-300",
                "[&_strong]:font-semibold [&_strong]:text-brand-pearl"
              )}
            >
              {section.body}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
