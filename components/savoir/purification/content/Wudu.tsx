"use client";

import { Droplet } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function WuduContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={2}
        total={6}
        chip="Quotidien"
        icon={Droplet}
        title="Le Wudu (Pas à pas)"
        intro="C'est le rituel de pureté le plus fréquent. Distinguons l'obligatoire (validité) du recommandé (perfection)."
      />

      <StoryScene scene={1} title="Minimum Vital Obligatoire">
        <p>
          Si vous faites uniquement ces 4 gestes (+ l&apos;intention) avec de
          l&apos;eau, vos ablutions sont{" "}
          <strong className="text-brand-warm">100% valides</strong>.
        </p>
        <StoryList
          numbered
          items={[
            {
              title: "Visage",
              description: "Laver tout le visage (du front au menton).",
            },
            {
              title: "Bras",
              description: "Laver les bras jusqu'aux coudes inclus.",
            },
            {
              title: "Tête",
              description: "Passer les mains mouillées sur la tête.",
            },
            {
              title: "Pieds",
              description: "Laver les pieds jusqu'aux chevilles incluses.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={2} title="Bonus Sunnah">
        <p>
          Ces actes supplémentaires augmentent votre récompense et complètent
          la perfection de vos ablutions :
        </p>
        <StoryList
          items={[
            {
              title: "Répétition × 3",
              description: "Laver chaque partie trois fois au lieu d'une.",
            },
            {
              title: "Bouche & Nez",
              description: "Se gargariser et se rincer le nez.",
            },
            {
              title: "Oreilles",
              description: "Passer les index dans les oreilles et les pouces derrière.",
            },
            {
              title: "Mains au début",
              description: "Laver les deux mains jusqu'aux poignets avant de commencer.",
            },
          ]}
        />
        <StoryCallout variant="tip" title="À retenir">
          Les Sunnahs sont fortement recommandées mais leur absence ne invalide
          pas vos ablutions.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
