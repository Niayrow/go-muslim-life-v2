"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  Compass,
  GraduationCap,
  Home,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const SUGGESTIONS: {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}[] = [
  {
    label: "Accueil",
    description: "Horaires & modules",
    href: "/",
    icon: Home,
  },
  {
    label: "Savoir",
    description: "Guides pas à pas",
    href: "/savoir",
    icon: GraduationCap,
  },
  {
    label: "Invocations",
    description: "Douas & adhkars",
    href: "/invocations",
    icon: Sparkles,
  },
  {
    label: "Coran",
    description: "Écouter sur Sawra",
    href: "https://sawra.app/ecouter",
    icon: BookOpen,
    external: true,
  },
];

function SuggestionLink({
  item,
  className,
  children,
}: {
  item: (typeof SUGGESTIONS)[number];
  className: string;
  children: React.ReactNode;
}) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {children}
    </Link>
  );
}

function BackgroundDecor({ reduce }: { reduce: boolean | null }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="select-none bg-gradient-to-b from-brand-gold-400/14 via-brand-gold-500/6 to-transparent bg-clip-text text-[clamp(7rem,32vw,20rem)] font-extrabold leading-none tracking-tighter text-transparent">
          404
        </span>
      </div>

      <div className="absolute left-1/2 top-1/2 size-[min(92vw,560px)] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="absolute inset-0 rounded-full border border-brand-gold-400/10"
          animate={reduce ? undefined : { scale: [1, 1.03, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-10 rounded-full border border-brand-line/25"
          animate={reduce ? undefined : { scale: [1, 0.97, 1], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.div
          className="absolute inset-[4.5rem] rounded-full border border-dashed border-brand-gold-400/20"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="absolute -left-16 top-1/4 size-56 rounded-full bg-brand-warm/10 blur-3xl" />
      <div className="absolute -right-10 bottom-1/4 size-64 rounded-full bg-brand-steel-400/10 blur-3xl" />
    </div>
  );
}

export function NotFoundView() {
  const reduce = useReducedMotion();

  return (
    <main className="relative flex min-h-[calc(100dvh-8rem)] flex-1 flex-col items-center justify-center overflow-hidden px-5 py-10 md:px-8 md:py-16">
      <BackgroundDecor reduce={reduce} />

      <motion.div
        className="relative z-[1] w-full max-w-3xl"
        initial={reduce ? false : { opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: EASE }}
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-gold-400/18 bg-brand-panel/55 px-6 py-10 shadow-[0_40px_100px_rgba(0,0,0,0.42)] backdrop-blur-xl md:rounded-[2.25rem] md:px-12 md:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-28 left-1/2 h-52 w-80 -translate-x-1/2 rounded-full bg-brand-warm/18 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold-400/45 to-transparent"
          />

          <div className="relative space-y-8 text-center">
            <div className="space-y-5">
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-brand-gold-400/25 bg-brand-gold-400/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.28em] text-brand-warm uppercase"
                initial={reduce ? false : { opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
              >
                <Compass className="size-3.5" />
                Page introuvable
              </motion.span>

              <div className="space-y-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-brand-pearl md:text-5xl">
                  Cette page{" "}
                  <span className="bg-gradient-to-r from-brand-warm via-brand-gold-300 to-brand-gold-500 bg-clip-text text-transparent">
                    n&apos;existe pas
                  </span>
                </h1>
                <p className="mx-auto max-w-lg text-base leading-relaxed text-brand-mist md:text-lg">
                  L&apos;adresse est incorrecte ou la page a été déplacée.
                  Retournez à l&apos;accueil ou choisissez une section ci-dessous.
                </p>
              </div>
            </div>

            <motion.section
              className="brand-card mx-auto max-w-xl rounded-[1.5rem] px-5 py-6 md:px-7 md:py-7"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25, ease: EASE }}
            >
              <p className="mb-3 text-[10px] font-semibold tracking-[0.22em] text-brand-gold-400 uppercase">
                Un rappel
              </p>
              <p
                dir="rtl"
                lang="ar"
                className="font-arabic text-2xl leading-relaxed text-brand-pearl md:text-[1.75rem]"
              >
                إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-brand-mist">
                « Certes, avec la difficulté est une facilité. »
              </p>
              <p className="mt-2 text-xs text-brand-steel-400">Ash-Sharh · 94:6</p>
            </motion.section>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-3"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
            >
              <Button asChild size="lg" className="btn-bronze-shine min-w-[200px]">
                <Link href="/">
                  <Home className="size-4" />
                  Retour à l&apos;accueil
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/savoir">
                  <Compass className="size-4" />
                  Explorer le savoir
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.nav
          aria-label="Pages utiles"
          className="mt-8"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
        >
          <p className="mb-4 text-center text-[10px] font-bold tracking-[0.22em] text-brand-steel-400 uppercase">
            Accès rapide
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {SUGGESTIONS.map((item, index) => {
              const Icon = item.icon;
              const linkClass = cn(
                "group relative flex items-center gap-4 overflow-hidden rounded-[1.25rem] border border-brand-line/30 bg-brand-panel-elevated/45 px-4 py-4 transition-[border-color,background-color,transform] duration-300",
                "hover:border-brand-gold-400/40 hover:bg-brand-panel-elevated/70 hover:-translate-y-0.5"
              );

              return (
                <motion.li
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.5 + index * 0.07,
                    ease: EASE,
                  }}
                >
                  <SuggestionLink item={item} className={linkClass}>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-6 -bottom-6 size-24 rounded-full bg-brand-warm/8 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <span className="relative flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand-gold-400/20 bg-brand-gold-400/10 text-brand-warm transition-colors group-hover:border-brand-gold-400/35 group-hover:bg-brand-gold-400/16">
                      <Icon className="size-5" />
                    </span>
                    <span className="relative min-w-0 flex-1 text-left">
                      <span className="block text-sm font-semibold text-brand-pearl">
                        {item.label}
                      </span>
                      <span className="block text-xs text-brand-mist">
                        {item.description}
                      </span>
                    </span>
                    <ArrowUpRight className="relative size-4 shrink-0 text-brand-mist transition-[transform,color] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-warm" />
                  </SuggestionLink>
                </motion.li>
              );
            })}
          </ul>
        </motion.nav>
      </motion.div>
    </main>
  );
}
