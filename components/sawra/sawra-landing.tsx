"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useInView,
} from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  Headphones,
  Pause,
  Play,
  Shield,
  Volume2,
} from "lucide-react";

import { RECITER_PORTRAITS } from "@/lib/reciters/portraits";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const SAWRA_URL = "https://sawra.app";

const WAVE_BARS = [
  0.28, 0.45, 0.62, 0.38, 0.85, 0.55, 0.72, 0.4, 0.95, 0.5, 0.68, 0.35, 0.8,
  0.48, 0.9, 0.42, 0.75, 0.58, 0.33, 0.88, 0.52, 0.7, 0.44, 0.92, 0.36, 0.65,
  0.5, 0.78, 0.41, 0.86, 0.47, 0.6,
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 36 }}
      animate={
        reduce || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }
      }
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function Waveform({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn("flex h-16 items-end justify-center gap-[3px] sm:h-20", className)}
      aria-hidden
    >
      {WAVE_BARS.map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-brand-gold-500/40 via-brand-warm to-brand-pearl/90 sm:w-1"
          style={{ height: `${h * 100}%` }}
          animate={
            reduce
              ? undefined
              : {
                  scaleY: [0.45, 1, 0.55, 0.9, 0.45],
                  opacity: [0.45, 1, 0.6, 0.95, 0.45],
                }
          }
          transition={{
            duration: 1.6 + (i % 5) * 0.18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (i % 8) * 0.07,
          }}
        />
      ))}
    </div>
  );
}

function PlayerMock() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-lg"
      initial={reduce ? false : { opacity: 0, y: 48, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-brand-warm/15 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-gold-400/20 bg-brand-panel/70 px-5 py-5 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:px-7 sm:py-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3 text-left">
            <span className="relative flex size-12 shrink-0 items-end justify-center overflow-hidden rounded-full border border-brand-gold-400/30 bg-brand-night-soft">
              <Image
                src="/reciters/alafasy.webp"
                alt=""
                width={48}
                height={48}
                className="h-[92%] w-auto object-contain object-bottom"
                unoptimized
                priority
              />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-bold tracking-[0.22em] text-brand-gold-400 uppercase">
                En écoute
              </p>
              <p
                className="mt-1 truncate font-arabic text-xl text-brand-warm sm:text-2xl"
                dir="rtl"
              >
                سورة الرحمن
              </p>
              <p className="mt-0.5 truncate text-sm text-brand-mist">
                Ar-Rahmân · Al-Afasy
              </p>
            </div>
          </div>
          <motion.span
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-warm text-brand-night shadow-[0_0_28px_rgba(240,209,188,0.35)]"
            animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Pause className="size-4 fill-current" />
          </motion.span>
        </div>

        <Waveform className="mt-6" />

        <div className="mt-4 flex items-center gap-3">
          <span className="text-[11px] tabular-nums text-brand-steel-400">
            02:14
          </span>
          <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-brand-line/35">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-gold-500 to-brand-warm"
              initial={{ width: "28%" }}
              animate={reduce ? undefined : { width: ["28%", "42%", "28%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="text-[11px] tabular-nums text-brand-steel-400">
            05:02
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function AmbientField() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Base — nuit profonde + voile chaud discret */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-night via-brand-night-soft to-brand-night" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(240,209,188,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_85%_40%,rgba(121,144,161,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_10%_75%,rgba(206,166,135,0.08),transparent_55%)]" />

      {/* Halos animés — sans grain */}
      <motion.div
        className="absolute top-[-8%] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand-warm/12 blur-[120px]"
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[38%] right-[-12%] h-80 w-80 rounded-full bg-brand-steel-400/10 blur-[100px]"
        animate={
          reduce ? undefined : { x: [0, -28, 0], y: [0, 20, 0] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[8%] left-[-8%] h-72 w-72 rounded-full bg-brand-gold-400/10 blur-[95px]"
        animate={
          reduce ? undefined : { x: [0, 32, 0], y: [0, -18, 0] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Lueur centrale douce */}
      <div className="absolute top-[42%] left-1/2 h-64 w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-warm/[0.06] blur-[80px]" />

      {/* Vignette pour ancrer le contenu */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(7,17,29,0.55)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-night to-transparent" />
    </div>
  );
}

function ScrollHint() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      <span className="text-[10px] font-bold tracking-[0.28em] text-brand-gold-300/75 uppercase">
        Découvrir
      </span>
      <span className="relative flex h-10 w-6 items-start justify-center rounded-full border border-brand-gold-400/40">
        <motion.span
          className="mt-1.5 h-1.5 w-1 rounded-full bg-brand-warm"
          animate={
            reduce ? undefined : { y: [0, 12, 0], opacity: [1, 0.3, 1] }
          }
          transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
    </motion.div>
  );
}

const PILLARS = [
  {
    icon: Headphones,
    title: "Écoute immersive",
    text: "Des récitations limpides qui remplissent l’espace — pour la maison, le trajet, la nuit.",
  },
  {
    icon: BookOpen,
    title: "Lecture claire",
    text: "Un mushaf numérique soigné, pour suivre chaque ayah sans friction.",
  },
  {
    icon: Volume2,
    title: "Voix au choix",
    text: "Plusieurs récitateurs pour trouver celle qui te rapproche vraiment.",
  },
  {
    icon: Shield,
    title: "Sans publicité",
    text: "Gratuit, pur, sans interruption. Le Coran d’abord — rien d’autre.",
  },
] as const;

export function SawraLanding() {
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <main className="relative flex w-full flex-1 flex-col overflow-x-hidden">
      <AmbientField />

      {/* ——— HERO ——— */}
      <section
        ref={heroRef}
        className="relative flex min-h-[100dvh] flex-col items-center justify-center px-5 pb-16 pt-10 md:px-8"
      >
        <motion.div
          style={
            reduce
              ? undefined
              : { opacity: heroOpacity, y: heroY, scale: heroScale }
          }
          className="flex w-full max-w-4xl flex-col items-center text-center"
        >
          <motion.p
            className="text-xs font-semibold tracking-[0.32em] text-brand-gold-400 uppercase"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            Lecteur coranique
          </motion.p>

          <motion.h1
            className="hero-title-gradient mt-5 text-7xl font-extrabold tracking-tight sm:text-8xl md:text-9xl"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease: EASE }}
          >
            Sawra
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-lg font-semibold text-brand-pearl/90 sm:text-xl md:text-2xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
          >
            Écoute le Coran. Apaise ton cœur.
          </motion.p>

          <motion.p
            className="mt-3 max-w-sm text-sm text-brand-mist sm:text-base"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
          >
            Gratuit. Sans publicité. Fait pour la présence.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
          >
            <a
              href={SAWRA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button-primary group inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold"
            >
              Ouvrir Sawra
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link
              href="/"
              className="brand-button-secondary inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold"
            >
              Retour à GoMuslimLife
            </Link>
          </motion.div>

          <div className="mt-12 w-full sm:mt-14">
            <PlayerMock />
          </div>

          <div className="mt-12 md:mt-16">
            <ScrollHint />
          </div>
        </motion.div>
      </section>

      {/* ——— INTENTION ——— */}
      <section className="relative px-5 py-24 md:px-8 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p
            className="hero-bismillah-gradient font-arabic text-3xl leading-relaxed md:text-4xl"
            dir="rtl"
          >
            ٱقْرَأْ بِٱسْمِ رَبِّكَ
          </p>
          <p className="mt-4 text-sm tracking-wide text-brand-steel-400">
            Lis, au nom de ton Seigneur.
          </p>
          <h2 className="mt-10 text-3xl font-extrabold tracking-tight text-brand-pearl md:text-4xl">
            Le Coran, autrement
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-mist md:text-lg">
            Sawra n’est pas un écran de plus. C’est un espace pour{" "}
            <span className="font-semibold text-brand-warm">écouter</span>,{" "}
            <span className="font-semibold text-brand-warm">suivre</span> et{" "}
            <span className="font-semibold text-brand-warm">rester</span> avec le
            Livre — dans le calme, sans bruit publicitaire.
          </p>
        </Reveal>
      </section>

      {/* ——— PILLARS ——— */}
      <section className="relative px-5 py-16 md:px-8 md:py-24">
        <Reveal className="mx-auto mb-14 max-w-xl text-center md:mb-20">
          <p className="text-xs font-semibold tracking-[0.24em] text-brand-gold-400 uppercase">
            L’expérience
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-pearl md:text-4xl">
            Tout ce qu’il faut. Rien d’autre.
          </h2>
        </Reveal>

        <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 lg:gap-x-16">
          {PILLARS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="group text-left">
                  <motion.span
                    className="mb-4 flex size-12 items-center justify-center rounded-2xl border border-brand-gold-400/20 bg-brand-warm/10 text-brand-warm"
                    whileHover={reduce ? undefined : { scale: 1.08, rotate: -3 }}
                    transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </motion.span>
                  <h3 className="text-xl font-bold text-brand-pearl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-brand-mist md:text-base">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ——— VOIX ——— */}
      <section className="relative px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto mb-12 max-w-xl text-center md:mb-16">
          <p className="text-xs font-semibold tracking-[0.24em] text-brand-gold-400 uppercase">
            Les voix
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-pearl md:text-4xl">
            Des récitateurs pour chaque oreille
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-mist md:text-base">
            Al-Afasy, As-Sudais, Al-Minshawi et bien d’autres — choisis celle qui
            t’accompagne le mieux sur Sawra.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-x-3 gap-y-8 sm:grid-cols-4 sm:gap-x-5 sm:gap-y-10 md:grid-cols-5 lg:grid-cols-5">
          {RECITER_PORTRAITS.map((reciter, i) => (
            <Reveal key={reciter.id} delay={Math.min(i, 8) * 0.04}>
              <a
                href={SAWRA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2.5 text-center outline-none"
              >
                <motion.span
                  className="relative flex size-[4.5rem] items-end justify-center overflow-hidden rounded-full border border-brand-gold-400/25 bg-brand-night-soft shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:size-24"
                  whileHover={reduce ? undefined : { y: -4, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 360, damping: 20 }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(206,166,135,0.22),transparent_60%)]"
                  />
                  <Image
                    src={reciter.src}
                    alt={reciter.label}
                    width={96}
                    height={96}
                    className="relative z-[1] h-[92%] w-auto object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
                    unoptimized
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_0_28px_rgba(240,209,188,0.28)]"
                  />
                </motion.span>
                <span className="max-w-[6.5rem] text-[11px] leading-snug font-semibold text-brand-mist transition-colors group-hover:text-brand-warm sm:max-w-[7.5rem] sm:text-xs">
                  {reciter.label}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 text-center md:mt-14">
          <a
            href={SAWRA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-warm transition-colors hover:text-brand-gold-300"
          >
            Explorer toutes les voix sur Sawra
            <ArrowUpRight className="size-3.5" />
          </a>
        </Reveal>
      </section>

      {/* ——— STATEMENT ——— */}
      <section className="relative overflow-hidden px-5 py-28 md:px-8 md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-brand-gold-400/35 to-transparent"
        />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="text-4xl font-extrabold tracking-tight text-brand-pearl sm:text-5xl md:text-6xl">
            Gratuit.
            <br />
            <span className="hero-title-gradient">Sans publicité.</span>
            <br />
            Toujours.
          </p>
          <p className="mx-auto mt-6 max-w-md text-base text-brand-mist">
            Une promesse simple : le Livre avant tout le reste.
          </p>
        </Reveal>
      </section>

      {/* ——— DUO ——— */}
      <section className="relative px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.24em] text-brand-gold-400 uppercase">
            Deux espaces · une intention
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-pearl md:text-4xl">
            GoMuslimLife & Sawra
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-mist md:text-lg">
            Ici tu apprends — prière, purification, histoires. Sur Sawra tu{" "}
            <span className="font-semibold text-brand-warm">
              écoutes et lis le Coran
            </span>
            . Même famille visuelle. Même douceur.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mx-auto mt-14 max-w-2xl">
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6">
            <div className="flex-1 rounded-2xl border border-brand-line/25 bg-brand-panel/40 px-6 py-5 text-center backdrop-blur-sm">
              <p className="text-xs font-bold tracking-[0.18em] text-brand-steel-400 uppercase">
                Apprendre
              </p>
              <p className="mt-2 text-lg font-bold text-brand-pearl">
                GoMuslimLife
              </p>
            </div>
            <motion.span
              className="mx-auto flex size-10 items-center justify-center rounded-full border border-brand-gold-400/30 text-brand-warm"
              animate={reduce ? undefined : { rotate: [0, 180, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <Play className="size-3.5 fill-current" />
            </motion.span>
            <div className="flex-1 rounded-2xl border border-brand-gold-400/25 bg-brand-warm/10 px-6 py-5 text-center backdrop-blur-sm">
              <p className="text-xs font-bold tracking-[0.18em] text-brand-gold-400 uppercase">
                Écouter
              </p>
              <p className="mt-2 text-lg font-bold text-brand-warm">Sawra</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ——— FINAL CTA ——— */}
      <section className="relative px-5 pb-28 pt-10 md:px-8 md:pb-36">
        <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
          <Waveform className="mb-10 h-12 w-full max-w-xs opacity-80" />
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-pearl md:text-4xl">
            Commence maintenant
          </h2>
          <p className="mt-3 text-brand-mist">
            Ouvre Sawra et laisse une récitation remplir l’instant.
          </p>
          <a
            href={SAWRA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-button-primary group mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-sm font-bold"
          >
            Lancer Sawra
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </section>
    </main>
  );
}
