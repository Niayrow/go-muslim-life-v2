"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, ExternalLink, FileText, Headphones, Shield, Sparkles } from "lucide-react";

import { BrandLogo } from "@/components/layout/brand-logo";
import { cn } from "@/lib/utils";

const LEGAL = [
  { href: "/mises-a-jour", label: "Mises à jour", icon: Sparkles },
  { href: "/confidentialite", label: "Confidentialité", icon: Shield },
  { href: "/sources", label: "Sources", icon: BookOpen },
  { href: "/conditions", label: "Conditions", icon: FileText },
] as const;

/** Footer collé en bas du document (hors accueil plein écran). */
export function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "mt-auto w-full border-t border-brand-line/25 bg-brand-night/80",
        "pb-[calc(1rem+env(safe-area-inset-bottom))] pt-8 md:pb-8 md:pt-10"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 md:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex max-w-md flex-col gap-4">
            <Link href="/" className="group flex items-center gap-3">
              <span className="relative size-10 shrink-0 overflow-hidden rounded-full ring-1 ring-brand-gold-400/30">
                <BrandLogo size={40} />
              </span>
              <span className="flex flex-col justify-center gap-0.5 leading-none">
                <span className="text-sm font-bold tracking-tight text-brand-pearl group-hover:text-brand-warm">
                  GoMuslimLife
                </span>
                <span className="text-[11px] leading-snug text-brand-steel-400">
                  Ta pratique, au quotidien
                </span>
              </span>
            </Link>

            <div className="flex items-start gap-2 pl-0.5">
              <Headphones
                className="mt-[2px] size-3.5 shrink-0 text-brand-gold-400/80"
                aria-hidden
              />
              <p className="text-[11px] leading-relaxed text-brand-steel-500">
                <span className="font-semibold text-brand-mist">Sawra</span>
                {" — "}
                site frère pour écouter et lire le Coran, créé par le même
                éditeur{" "}
                <a
                  href="https://sofianeweb.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap font-medium text-brand-warm/90 underline-offset-2 hover:text-brand-warm hover:underline"
                >
                  SofianeWeb
                </a>
                .
              </p>
            </div>
          </div>

          <nav
            aria-label="Informations légales"
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            {LEGAL.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-mist transition-colors hover:text-brand-warm"
              >
                <Icon className="size-3.5 opacity-70" />
                {label}
              </Link>
            ))}
            <a
              href="https://sawra.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-mist transition-colors hover:text-brand-warm"
            >
              <ExternalLink className="size-3.5 opacity-70" />
              Sawra
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-brand-line/20 pt-5 text-[11px] text-brand-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} GoMuslimLife · Éditeur{" "}
            <a
              href="https://sofianeweb.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-mist transition-colors hover:text-brand-warm"
            >
              sofianeweb.fr
            </a>
            {" · "}
            <a
              href="mailto:contact@sofianeweb.fr"
              className="text-brand-mist transition-colors hover:text-brand-warm"
            >
              contact@sofianeweb.fr
            </a>
          </p>
          <p>
            Contenu éducatif — ne remplace pas l’avis d’un savant compétent.
          </p>
        </div>
      </div>
    </footer>
  );
}
