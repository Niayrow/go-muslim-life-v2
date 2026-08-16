"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Headphones } from "lucide-react";

import {
  RECITER_PORTRAITS,
  type ReciterPortrait,
} from "@/lib/reciters/portraits";
import { cn } from "@/lib/utils";

const CLOUD_COUNT = 3;
const ROTATE_MS = 4000;

const BUBBLE_ANCHORS = [
  { x: 16, rise: 92, drift: -10, delay: 0 },
  { x: 50, rise: 122, drift: 6, delay: 0.14 },
  { x: 82, rise: 86, drift: 14, delay: 0.28 },
];

const BUBBLE_SPECKS = [
  { x: 24, size: 7, rise: 44, delay: 0.1 },
  { x: 38, size: 4, rise: 60, delay: 0.5 },
  { x: 62, size: 6, rise: 52, delay: 0.28 },
  { x: 74, size: 4, rise: 66, delay: 0.62 },
  { x: 90, size: 5, rise: 40, delay: 0.42 },
];

function pickVoices(avoidIds: number[] = []): ReciterPortrait[] {
  const avoid = new Set(avoidIds);
  const shuffled = [...RECITER_PORTRAITS].sort(() => Math.random() - 0.5);
  const preferred = shuffled.filter((v) => !avoid.has(v.id));
  const pool = preferred.length >= CLOUD_COUNT ? preferred : shuffled;
  return pool.slice(0, CLOUD_COUNT);
}

type SawraHeroCtaProps = {
  className?: string;
};

/** CTA Sawra — hover nuage de voix avec portraits (méthode Explorer les voix). */
export function SawraHeroCta({ className }: SawraHeroCtaProps) {
  const [cloudOpen, setCloudOpen] = useState(false);
  const [voices, setVoices] = useState<ReciterPortrait[]>([]);
  const [cloudKey, setCloudKey] = useState(0);
  const idsRef = useRef<number[]>([]);

  const refreshCloud = useCallback(() => {
    const next = pickVoices(idsRef.current);
    idsRef.current = next.map((v) => v.id);
    setVoices(next);
    setCloudKey((k) => k + 1);
  }, []);

  const openCloud = () => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    setCloudOpen(true);
    refreshCloud();
  };

  useEffect(() => {
    if (!cloudOpen) return;
    const id = window.setInterval(refreshCloud, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [cloudOpen, refreshCloud]);

  return (
    <div
      className={cn("sawra-hero-cta relative inline-flex max-w-full", className)}
      onMouseEnter={openCloud}
      onMouseLeave={() => setCloudOpen(false)}
      onFocusCapture={openCloud}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setCloudOpen(false);
        }
      }}
    >
      <div
        className={cn("sawra-voice-bubbles", cloudOpen && "is-visible")}
        aria-hidden={!cloudOpen}
      >
        {cloudOpen && voices.length > 0 ? (
          <div key={cloudKey} className="sawra-voice-bubbles__stage">
            {BUBBLE_SPECKS.map((speck) => (
              <span
                key={`speck-${speck.x}-${speck.size}`}
                className="sawra-voice-bubbles__speck"
                style={
                  {
                    "--bubble-x": `${speck.x}%`,
                    "--bubble-size": `${speck.size}px`,
                    "--bubble-rise": `${speck.rise}px`,
                    "--bubble-delay": `${speck.delay}s`,
                  } as CSSProperties
                }
              />
            ))}

            {voices.map((voice, index) => {
              const anchor = BUBBLE_ANCHORS[index % BUBBLE_ANCHORS.length]!;
              return (
                <span
                  key={`${voice.id}-${index}`}
                  className="sawra-voice-bubbles__bubble"
                  style={
                    {
                      "--bubble-x": `${anchor.x}%`,
                      "--bubble-rise": `${anchor.rise}px`,
                      "--bubble-drift": `${anchor.drift}px`,
                      "--bubble-delay": `${anchor.delay}s`,
                    } as CSSProperties
                  }
                >
                  <span className="sawra-voice-bubbles__avatar">
                    <Image
                      src={voice.src}
                      alt=""
                      width={40}
                      height={40}
                      className="size-full object-cover object-top"
                      unoptimized
                    />
                  </span>
                  <span className="sawra-voice-bubbles__name">{voice.label}</span>
                  <span className="sawra-voice-bubbles__shine" aria-hidden />
                </span>
              );
            })}
          </div>
        ) : null}
      </div>

      <Link
        href="/sawra"
        className="btn-bronze-shine group inline-flex max-w-full items-center justify-center gap-2.5 rounded-2xl px-5 py-3.5 text-sm font-bold sm:px-7 sm:py-4 sm:text-[15px]"
      >
        <Headphones className="size-4 shrink-0 opacity-90 transition-transform duration-300 group-hover:scale-110" />
        <span className="text-balance">
          Écouter le Coran et bien plus encore avec Sawra
        </span>
      </Link>
    </div>
  );
}
