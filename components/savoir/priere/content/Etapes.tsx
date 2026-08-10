"use client";

import { Footprints } from "lucide-react";

import { PrayerStepsCarousel } from "@/components/savoir/priere/prayer-steps-carousel";
import {
  ChapterHero,
  StoryCallout,
  StoryPage,
  StoryScene,
} from "@/components/savoir/priere/story-ui";

export function EtapesContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={6}
        chip="Guide Pratique"
        icon={Footprints}
        title="La Prière Pas à Pas"
        intro="Voici le déroulé d'une unité de prière (Rak'at). Prenez votre temps sur chaque étape. C'est un dialogue, pas une course."
      />

      <StoryScene scene={1} title="Une unité de prière">
        <PrayerStepsCarousel />
      </StoryScene>

      <StoryScene scene={2} title="Combien de fois répéter l'unité ci-dessus ?">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { label: "Fajr (Matin)", count: "2" },
            { label: "Maghrib", count: "3" },
            { label: "Dhuhr, Asr, Isha", count: "4" },
          ].map((item) => (
            <div
              key={item.label}
              className="border-b border-brand-line/30 pb-3 text-center sm:border-b-0 sm:border-l sm:border-brand-line/30 sm:pb-0 sm:pl-4 sm:first:border-l-0 sm:first:pl-0"
            >
              <span className="mb-2 block text-[10px] font-bold tracking-wider text-brand-gold-400 uppercase">
                {item.label}
              </span>
              <span className="text-3xl font-extrabold text-brand-pearl tabular-nums">
                {item.count}{" "}
                <span className="text-base font-normal text-brand-mist">
                  fois
                </span>
              </span>
            </div>
          ))}
        </div>
        <StoryCallout variant="tip">
          Répétez l&apos;unité du carrousel autant de fois que l&apos;indique
          chaque prière — sans précipitation.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
