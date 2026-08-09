"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  Gamepad2,
  Library,
  ScrollText,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const FEATURED = {
  label: "Lire et écouter le Coran",
  description: "Sur Sawra.app — lecture & récitation",
  href: "https://sawra.app",
  icon: BookOpen,
};

const QUICK: {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    label: "Invocations",
    description: "Douas & Adhkar",
    href: "/plus",
    icon: Sparkles,
  },
  {
    label: "Quiz et jeux",
    description: "Apprendre en s’amusant",
    href: "/savoir",
    icon: Gamepad2,
  },
  {
    label: "Histoires des Prophètes",
    description: "Récits et enseignements",
    href: "/savoir",
    icon: ScrollText,
  },
  {
    label: "Bibliothèque",
    description: "Livres et ressources",
    href: "/savoir",
    icon: Library,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

type QuickAccessLayerProps = {
  active?: boolean;
};

/** Calque plein viewport pour la scène sticky d’accueil */
export function QuickAccessLayer({ active = true }: QuickAccessLayerProps) {
  const reduceMotion = useReducedMotion();
  const FeaturedIcon = FEATURED.icon;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col justify-center gap-4 px-1 py-2 text-center max-md:max-h-[min(100dvh,900px)] sm:gap-6 md:gap-8 md:py-4">
      <motion.div
        className="space-y-2 md:space-y-3"
        initial={false}
        animate={
          active
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: reduceMotion ? 0 : 28 }
        }
        transition={{ duration: 0.55, ease }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold-400 md:text-sm">
          Explorer
        </p>
        <h2 className="text-2xl font-extrabold tracking-tight text-brand-pearl sm:text-3xl md:text-5xl">
          Accès rapide
        </h2>
        <p className="mx-auto hidden max-w-lg text-sm text-brand-mist sm:block md:text-base">
          Accédez en un geste aux parcours essentiels.
        </p>
      </motion.div>

      <div className="grid w-full gap-2.5 sm:gap-4 lg:grid-cols-2 lg:gap-5 lg:items-stretch">
        {/* Carte Coran — dominante */}
        <motion.div
          className="h-full"
          initial={false}
          animate={
            active
              ? { opacity: 1, y: 0, scale: 1 }
              : {
                  opacity: 0,
                  y: reduceMotion ? 0 : 36,
                  scale: reduceMotion ? 1 : 0.96,
                }
          }
          transition={{ duration: 0.6, delay: active ? 0.08 : 0, ease }}
        >
          <a
            href={FEATURED.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group relative flex h-full min-h-[160px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-brand-gold-400/25 bg-gradient-to-br from-brand-warm/18 via-brand-panel to-brand-night p-5 text-left sm:min-h-[220px] md:min-h-[280px] md:p-8 lg:min-h-full lg:p-9",
              "shadow-[0_24px_60px_rgba(0,0,0,0.35)] transition-[border-color,box-shadow,transform] duration-300",
              "hover:-translate-y-1 hover:border-brand-gold-400/45 hover:shadow-[0_28px_70px_rgba(0,0,0,0.4)]"
            )}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-10 size-56 rounded-full bg-brand-warm/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-10 size-48 rounded-full bg-brand-steel-400/15 blur-3xl"
            />

            <motion.span
              className="relative flex size-12 items-center justify-center rounded-2xl bg-brand-warm/20 text-brand-warm sm:size-16 md:size-[4.5rem]"
              animate={
                active && !reduceMotion ? { y: [0, -6, 0] } : { y: 0 }
              }
              transition={
                active && !reduceMotion
                  ? { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
                  : undefined
              }
            >
              <FeaturedIcon className="size-6 sm:size-7 md:size-8" strokeWidth={2} />
            </motion.span>

            <div className="relative mt-5 space-y-1.5 sm:mt-8 md:mt-auto md:space-y-2 md:pt-10">
              <span className="block text-lg font-extrabold tracking-tight text-brand-pearl sm:text-xl md:text-2xl lg:text-3xl">
                {FEATURED.label}
              </span>
              <span className="block text-xs text-brand-mist sm:text-sm md:text-base">
                {FEATURED.description}
              </span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-warm transition-transform duration-300 group-hover:translate-x-0.5 md:mt-4">
                Ouvrir Sawra
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        </motion.div>

        {/* Grille 2×2 */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
          {QUICK.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="h-full"
                initial={false}
                animate={
                  active
                    ? { opacity: 1, y: 0, scale: 1 }
                    : {
                        opacity: 0,
                        y: reduceMotion ? 0 : 28,
                        scale: reduceMotion ? 1 : 0.97,
                      }
                }
                transition={{
                  duration: 0.5,
                  delay: active ? 0.14 + index * 0.07 : 0,
                  ease,
                }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group glass-panel-interactive relative flex h-full min-h-[108px] flex-col justify-between overflow-hidden rounded-[1.25rem] p-3.5 text-left sm:min-h-[128px] sm:rounded-[1.5rem] sm:p-5 md:min-h-[150px] md:p-6",
                    "hover:border-brand-gold-400/30"
                  )}
                >
                  <span className="flex size-9 items-center justify-center rounded-xl bg-brand-warm/12 text-brand-warm transition-transform duration-300 group-hover:scale-110 sm:size-12 sm:rounded-2xl md:size-14">
                    <Icon className="size-4 sm:size-5 md:size-6" strokeWidth={2.1} />
                  </span>
                  <span className="mt-3 block pr-4 sm:mt-5 sm:pr-6">
                    <span className="block text-sm font-bold leading-snug text-brand-pearl sm:text-base md:text-lg">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-[11px] text-brand-mist sm:mt-1 sm:text-xs md:text-sm">
                      {item.description}
                    </span>
                  </span>
                  <ArrowUpRight className="absolute top-3.5 right-3.5 size-3.5 text-brand-steel-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-warm group-hover:opacity-100 sm:top-5 sm:right-5 sm:size-4 md:top-6 md:right-6" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
