"use client";

import type { CSSProperties } from "react";
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
  label: string;
  accent: string;
  accentRgb: string;
}[] = [
  {
    n: "01",
    title: "La Purification",
    description:
      "La clé du Paradis. Ablutions (Wudu), Ghusl et Tayammum étape par étape.",
    href: "/savoir/purification",
    icon: Droplets,
    chapters: 6,
    label: "Les fondations",
    accent: "#67d4e8",
    accentRgb: "103, 212, 232",
  },
  {
    n: "02",
    title: "La Prière",
    description:
      "Le pilier central. Positions, récitations et sens pour une connexion parfaite.",
    href: "/savoir/priere",
    icon: Footprints,
    chapters: 13,
    label: "Le quotidien",
    accent: "#c7a5ff",
    accentRgb: "199, 165, 255",
  },
  {
    n: "03",
    title: "Comportement",
    description:
      "L’Excellence (Ihsan). Colère, famille, langue… Devenez votre meilleure version.",
    href: "/savoir/comportement",
    icon: Crown,
    chapters: 6,
    label: "L’excellence",
    accent: "#f2b96f",
    accentRgb: "242, 185, 111",
  },
  {
    n: "04",
    title: "Le Jeûne",
    description:
      "Ramadan, Nuit du Destin et Aïd. Règles et sagesse du 4ème pilier.",
    href: "/savoir/jeune",
    icon: Moon,
    chapters: 10,
    label: "La spiritualité",
    accent: "#7fa7ff",
    accentRgb: "127, 167, 255",
  },
  {
    n: "05",
    title: "La Zakat",
    description:
      "Le 3ème pilier. Nisab, calcul, bénéficiaires… Maîtrisez l’aumône obligatoire.",
    href: "/savoir/zakat",
    icon: Coins,
    chapters: 7,
    label: "Le partage",
    accent: "#78d6a3",
    accentRgb: "120, 214, 163",
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

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6 lg:gap-5">
        {MODULES.map((mod, index) => {
          const Icon = mod.icon;
          const moduleStyle = {
            "--module-accent": mod.accent,
            "--module-accent-rgb": mod.accentRgb,
            background: `linear-gradient(145deg, rgba(${mod.accentRgb}, 0.18) 0%, rgba(22, 37, 56, 0.96) 42%, rgba(11, 21, 34, 0.99) 100%)`,
            borderColor: `rgba(${mod.accentRgb}, 0.34)`,
          } as CSSProperties;

          return (
            <motion.li
              key={mod.n}
              className={cn(
                "min-w-0",
                "lg:col-span-2",
                index === 4 && "sm:col-span-2",
                index >= 3 && "lg:col-span-3"
              )}
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
                style={moduleStyle}
                className={cn(
                  "float-tile shaped-card-shadow group relative flex min-h-[8.25rem] w-full overflow-hidden rounded-[1.35rem] px-4 py-4 text-left sm:min-h-[13rem] sm:flex-col sm:rounded-[1.65rem] sm:p-5 md:min-h-[14rem] md:p-6",
                  "flex-row items-start gap-4 sm:items-stretch sm:gap-0",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--module-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-brand-night",
                  "transition-[border-color,box-shadow] hover:border-[var(--module-accent)]",
                  hoverEase
                )}
              >
                {/* Signature colorée propre à chaque module */}
                <span
                  aria-hidden
                  className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--module-accent)] to-transparent opacity-80"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
                >
                  <span
                    className={cn(
                      "absolute -top-16 -right-12 size-48 rounded-full bg-[var(--module-accent)] opacity-[0.08] blur-3xl transition-opacity",
                      hoverEase,
                      "group-hover:opacity-[0.16]"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute -bottom-24 -left-14 size-44 rounded-full bg-[var(--module-accent)] opacity-[0.05] blur-3xl transition-opacity",
                      hoverEase,
                      "group-hover:opacity-[0.11]"
                    )}
                  />
                  <span
                    className="absolute right-3 -bottom-2 hidden select-none text-[6rem] leading-none font-black tracking-tighter opacity-[0.08] sm:block md:text-[7.5rem]"
                    style={{ color: mod.accent }}
                  >
                    {mod.n}
                  </span>
                </span>

                <div className="relative flex shrink-0 items-center justify-between gap-2 sm:w-full sm:items-start">
                  <span
                    style={{
                      color: mod.accent,
                      backgroundColor: `rgba(${mod.accentRgb}, 0.12)`,
                      borderColor: `rgba(${mod.accentRgb}, 0.34)`,
                      boxShadow: `inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 20px rgba(${mod.accentRgb},0.1)`,
                    }}
                    className={cn(
                      "flex size-12 items-center justify-center rounded-2xl border transition-[transform,background-color]",
                      hoverEase,
                      "group-hover:-rotate-3 group-hover:scale-110 sm:size-13 md:size-14"
                    )}
                  >
                    <Icon className="size-5 sm:size-5.5 md:size-6" strokeWidth={2} />
                  </span>
                  <span
                    className="hidden rounded-full border px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] uppercase sm:inline"
                    style={{
                      color: mod.accent,
                      borderColor: `rgba(${mod.accentRgb}, 0.24)`,
                      backgroundColor: `rgba(${mod.accentRgb}, 0.07)`,
                    }}
                  >
                    {mod.label}
                  </span>
                </div>

                <div className="relative min-w-0 flex-1 sm:mt-5 sm:flex sm:flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="min-w-0 text-base font-bold tracking-tight text-brand-pearl sm:text-lg md:text-xl">
                      {mod.title}
                    </h3>
                    <span
                      className="shrink-0 text-[10px] font-bold tracking-[0.18em] tabular-nums uppercase sm:hidden"
                      style={{ color: mod.accent }}
                    >
                      {mod.n}
                    </span>
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-brand-soft/80 sm:mt-2 sm:text-sm">
                    {mod.description}
                  </p>

                  <div
                    className={cn(
                      "mt-3 flex items-center justify-between gap-2 sm:mt-auto sm:pt-5"
                    )}
                  >
                    <span className="text-[10px] font-semibold tracking-[0.12em] text-brand-soft/65 uppercase sm:text-[11px]">
                      {mod.chapters} chapitres
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase transition-colors sm:text-[11px]",
                        hoverEase,
                        "text-brand-soft/70 group-hover:text-[var(--module-accent)]"
                      )}
                    >
                      <span>Explorer</span>
                      <span
                        style={{
                          borderColor: `rgba(${mod.accentRgb}, 0.28)`,
                          backgroundColor: `rgba(${mod.accentRgb}, 0.08)`,
                        }}
                        className={cn(
                          "flex size-7 items-center justify-center rounded-full border transition-all",
                          hoverEase,
                          "group-hover:scale-110"
                        )}
                      >
                        <ArrowRight
                          style={{ color: mod.accent }}
                          className={cn(
                            "size-3.5 transition-transform",
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
