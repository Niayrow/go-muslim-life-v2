"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Boxes,
  Coins,
  Crown,
  Droplets,
  Footprints,
  Moon,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

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
    description:
      "La clé du Paradis. Ablutions (Wudu), Ghusl et Tayammum étape par étape.",
    href: "/savoir/purification",
    icon: Droplets,
    chapters: 6,
  },
  {
    n: "02",
    title: "La Prière",
    description:
      "Le pilier central. Positions, récitations et sens pour une connexion parfaite.",
    href: "/savoir/priere",
    icon: Footprints,
    chapters: 13,
  },
  {
    n: "03",
    title: "Comportement",
    description:
      "L’Excellence (Ihsan). Colère, famille, langue… Devenez votre meilleure version.",
    href: "/savoir/comportement",
    icon: Crown,
    chapters: 6,
  },
  {
    n: "04",
    title: "Le Jeûne",
    description:
      "Ramadan, Nuit du Destin et Aïd. Règles et sagesse du 4ème pilier.",
    href: "/savoir/jeune",
    icon: Moon,
    chapters: 10,
  },
  {
    n: "05",
    title: "La Zakat",
    description:
      "Le 3ème pilier. Nisab, calcul, bénéficiaires… Maîtrisez l’aumône obligatoire.",
    href: "/savoir/zakat",
    icon: Coins,
    chapters: 7,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;
const hoverEase =
  "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" as const;

type ModulesLayerProps = {
  active?: boolean;
};

/** Calque sticky — Nos Modules */
export function ModulesLayer({ active = true }: ModulesLayerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col justify-start gap-5 px-1 py-0 text-center sm:gap-6 md:justify-center md:gap-7 md:py-3">
      <motion.div
        className="mx-auto max-w-2xl space-y-2.5 md:space-y-3"
        initial={{ opacity: 0, y: 28 }}
        animate={
          active
            ? { opacity: 1, y: 0 }
            : {
                opacity: 0,
                y: reduceMotion ? 0 : 24,
              }
        }
        transition={{
          duration: active ? 0.6 : 0.28,
          delay: active ? 0.18 : 0,
          ease,
        }}
      >
        <span className="float-chip inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-brand-gold-400 uppercase">
          <Boxes className="size-3.5 text-brand-warm" strokeWidth={2.2} />
          Apprentissage
        </span>

        <h2 className="text-2xl font-extrabold tracking-tight text-brand-pearl sm:text-3xl md:text-5xl">
          Nos{" "}
          <span className="bg-gradient-to-r from-brand-gold-300 via-brand-warm to-brand-gold-400 bg-clip-text text-transparent">
            Modules
          </span>
        </h2>

        <p className="mx-auto hidden max-w-xl text-sm text-brand-mist sm:block md:text-base">
          Une progression structurée pour maîtriser les bases de l’Islam, de la
          purification à la spiritualité.
        </p>
      </motion.div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5 lg:gap-5">
        {MODULES.map((mod, index) => {
          const Icon = mod.icon;

          return (
            <motion.li
              key={mod.n}
              className="h-[5.75rem] min-w-0 overflow-hidden sm:h-[168px] md:h-[190px]"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={
                active
                  ? { opacity: 1, y: 0, scale: 1 }
                  : {
                      opacity: 0,
                      y: reduceMotion ? 0 : 24,
                      scale: reduceMotion ? 1 : 0.97,
                    }
              }
              transition={{
                duration: active ? 0.55 : 0.25,
                delay: active ? 0.28 + index * 0.08 : 0,
                ease,
              }}
            >
              <Link
                href={mod.href}
                className={cn(
                  "float-tile group relative flex h-full w-full overflow-hidden rounded-[1.25rem] px-4 py-3.5 text-left sm:flex-col sm:rounded-[1.5rem] sm:p-5 md:p-6",
                  "flex-row items-center gap-4 sm:items-stretch sm:gap-0",
                  "border-brand-gold-400/15 transition-[border-color] hover:border-brand-gold-400/40",
                  hoverEase
                )}
              >
                {/* Halo bronze au hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
                >
                  <span
                    className={cn(
                      "absolute -top-16 -right-12 size-40 rounded-full bg-brand-warm/15 blur-3xl opacity-0 transition-opacity",
                      hoverEase,
                      "group-hover:opacity-100"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute -bottom-20 -left-10 size-36 rounded-full bg-brand-gold-400/10 blur-3xl opacity-40 transition-opacity",
                      hoverEase,
                      "group-hover:opacity-80"
                    )}
                  />
                  <span className="absolute right-2 bottom-0 hidden select-none font-extrabold tracking-tighter text-brand-gold-400/[0.07] text-[4.5rem] leading-none sm:block sm:text-[5.5rem] md:text-[6.5rem]">
                    {mod.n}
                  </span>
                </span>

                <div className="relative flex shrink-0 items-center justify-between gap-2 sm:w-full sm:items-start">
                  <span
                    className={cn(
                      "flex size-11 items-center justify-center rounded-xl border border-brand-gold-400/25 bg-brand-warm/12 text-brand-warm shadow-[inset_0_1px_0_rgba(240,209,188,0.16)] transition-[transform,border-color,background-color]",
                      hoverEase,
                      "group-hover:scale-105 group-hover:border-brand-gold-400/45 group-hover:bg-brand-warm/18 sm:size-10 md:size-11"
                    )}
                  >
                    <Icon className="size-4 sm:size-[1.15rem]" strokeWidth={2.1} />
                  </span>
                  <span className="hidden text-[10px] font-bold tracking-[0.18em] text-brand-steel-500 tabular-nums uppercase sm:inline sm:text-[11px]">
                    {mod.n}
                  </span>
                </div>

                <div className="relative min-w-0 flex-1 overflow-hidden sm:mt-5 sm:flex sm:flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="min-w-0 truncate text-sm font-bold tracking-tight text-brand-pearl sm:text-base md:text-xl">
                      {mod.title}
                    </h3>
                    <span className="shrink-0 text-[10px] font-bold tracking-[0.18em] text-brand-steel-500 tabular-nums uppercase sm:hidden">
                      {mod.n}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-[11px] leading-relaxed text-brand-mist sm:mt-1.5 sm:line-clamp-2 sm:whitespace-normal sm:text-xs md:text-sm">
                    {mod.description}
                  </p>

                  <div
                    className={cn(
                      "mt-2 flex items-center justify-between gap-2 sm:mt-auto sm:pt-5"
                    )}
                  >
                    <span className="text-[10px] font-semibold tracking-[0.12em] text-brand-steel-500 uppercase sm:text-[11px]">
                      {mod.chapters} chapitres
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.12em] text-brand-steel-400 uppercase transition-colors sm:text-[11px]",
                        hoverEase,
                        "group-hover:text-brand-warm"
                      )}
                    >
                      <span className="hidden sm:inline">Explorer</span>
                      <span
                        className={cn(
                          "flex size-6 items-center justify-center rounded-full border border-brand-gold-400/20 bg-brand-warm/8 shadow-[inset_0_1px_0_rgba(240,209,188,0.12)] transition-all sm:size-7",
                          hoverEase,
                          "group-hover:border-brand-gold-400/45 group-hover:bg-brand-warm/15"
                        )}
                      >
                        <ArrowRight
                          className={cn(
                            "size-3 text-brand-warm transition-transform sm:size-3.5",
                            hoverEase,
                            "group-hover:translate-x-0.5"
                          )}
                        />
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
