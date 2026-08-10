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
  accent: string;
  iconBg: string;
  iconBorder: string;
}[] = [
  {
    n: "01",
    title: "La Purification",
    description:
      "La clé du Paradis. Ablutions (Wudu), Ghusl et Tayammum étape par étape.",
    href: "/savoir/purification",
    icon: Droplets,
    accent: "text-sky-400",
    iconBg: "bg-sky-400/10",
    iconBorder: "border-sky-400/35",
  },
  {
    n: "02",
    title: "La Prière",
    description:
      "Le pilier central. Positions, récitations et sens pour une connexion parfaite.",
    href: "/savoir/priere",
    icon: Footprints,
    accent: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    iconBorder: "border-emerald-400/35",
  },
  {
    n: "03",
    title: "Comportement",
    description:
      "L’Excellence (Ihsan). Colère, famille, langue… Devenez votre meilleure version.",
    href: "/savoir/comportement",
    icon: Crown,
    accent: "text-orange-400",
    iconBg: "bg-orange-400/10",
    iconBorder: "border-orange-400/35",
  },
  {
    n: "04",
    title: "Le Jeûne",
    description:
      "Ramadan, Nuit du Destin et Aïd. Règles et sagesse du 4ème pilier.",
    href: "/savoir/jeune",
    icon: Moon,
    accent: "text-violet-400",
    iconBg: "bg-violet-400/10",
    iconBorder: "border-violet-400/35",
  },
  {
    n: "05",
    title: "La Zakat",
    description:
      "Le 3ème pilier. Nisab, calcul, bénéficiaires… Maîtrisez l’aumône obligatoire.",
    href: "/savoir/zakat",
    icon: Coins,
    accent: "text-amber-400",
    iconBg: "bg-amber-400/10",
    iconBorder: "border-amber-400/35",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

type ModulesLayerProps = {
  active?: boolean;
};

/** Calque sticky — Nos Modules */
export function ModulesLayer({ active = true }: ModulesLayerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col justify-center gap-4 px-1 py-2 text-center sm:gap-5 md:gap-7 md:py-3">
      <motion.div
        className="mx-auto max-w-2xl space-y-2.5 md:space-y-3"
        initial={false}
        animate={
          active
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: reduceMotion ? 0 : 24 }
        }
        transition={{ duration: 0.55, ease }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-line/50 bg-brand-panel/60 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-brand-mist uppercase">
          <Boxes className="size-3.5 text-brand-steel-400" strokeWidth={2.2} />
          Apprentissage
        </span>

        <h2 className="text-2xl font-extrabold tracking-tight text-brand-pearl sm:text-3xl md:text-5xl">
          Nos{" "}
          <span className="bg-gradient-to-r from-brand-steel-400 via-sky-300 to-brand-warm bg-clip-text text-transparent">
            Modules
          </span>
        </h2>

        <p className="mx-auto hidden max-w-xl text-sm text-brand-mist sm:block md:text-base">
          Une progression structurée pour maîtriser les bases de l’Islam, de la
          purification à la spiritualité.
        </p>
      </motion.div>

      <ul className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-6 lg:gap-4">
        {MODULES.map((mod, index) => {
          const Icon = mod.icon;
          const wide = index < 2;

          return (
            <motion.li
              key={mod.n}
              className={cn(wide ? "lg:col-span-3" : "lg:col-span-2")}
              initial={false}
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
                duration: 0.5,
                delay: active ? 0.1 + index * 0.06 : 0,
                ease,
              }}
            >
              <Link
                href={mod.href}
                className={cn(
                  "group relative flex h-full min-h-[148px] flex-col overflow-hidden rounded-[1.25rem] border border-brand-line/40 bg-brand-panel/80 p-3.5 text-left transition-all duration-300 sm:min-h-[168px] sm:rounded-[1.5rem] sm:p-5 md:min-h-[190px] md:p-6",
                  "hover:-translate-y-1 hover:border-brand-line/70 hover:bg-brand-panel-elevated/90",
                  "shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
                )}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-2 bottom-0 select-none text-[4.5rem] leading-none font-extrabold tracking-tighter text-white/[0.04] sm:text-[5.5rem] md:text-[6.5rem]"
                >
                  {mod.n}
                </span>

                <span
                  className={cn(
                    "relative flex size-9 items-center justify-center rounded-xl border sm:size-10 md:size-11",
                    mod.iconBg,
                    mod.iconBorder,
                    mod.accent
                  )}
                >
                  <Icon className="size-4 sm:size-[1.15rem]" strokeWidth={2.1} />
                </span>

                <div className="relative mt-4 flex flex-1 flex-col sm:mt-5">
                  <h3 className="text-sm font-bold tracking-tight text-brand-pearl sm:text-base md:text-xl">
                    {mod.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-3 text-[11px] leading-relaxed text-brand-mist sm:text-xs md:line-clamp-4 md:text-sm">
                    {mod.description}
                  </p>

                  <span className="mt-auto flex items-center gap-2 pt-4 text-[10px] font-semibold tracking-[0.14em] text-brand-steel-400 uppercase transition-colors duration-300 group-hover:text-brand-warm sm:gap-2.5 sm:pt-5 sm:text-[11px]">
                    Explorer
                    <span className="flex size-6 items-center justify-center rounded-full border border-brand-line/50 bg-brand-night/40 transition-all duration-300 group-hover:border-brand-warm/40 group-hover:bg-brand-warm/10 sm:size-7">
                      <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 sm:size-3.5" />
                    </span>
                  </span>
                </div>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
