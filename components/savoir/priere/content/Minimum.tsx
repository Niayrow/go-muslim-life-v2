"use client";

import { ShieldCheck } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/priere/story-ui";

export function MinimumContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={5}
        chip="Concept Clé"
        icon={ShieldCheck}
        title="Le Minimum Vital (MVP)"
        intro={
          <>
            L&apos;erreur n°1 des débutants est de vouloir tout faire
            parfaitement dès le premier jour. Voici ce qui rend votre prière{" "}
            <strong>valide à 100%</strong>, sans le stress.
          </>
        }
      />

      <StoryScene scene={1} title="Ce qu'il faut absolument dire (Obligatoire)">
        <StoryList
          numbered
          items={[
            {
              title: "Allahu Akbar (Takbir)",
              description: "Pour entrer dans la prière.",
            },
            {
              title: "Sourate Al-Fatiha",
              description:
                "La réciter debout (obligatoire à chaque rak'at).",
            },
            {
              title: "Les Mouvements Clés",
              description:
                "L'inclinaison (Ruku) et les prosternations (Sujud).",
            },
            {
              title: "Le dernier Tashahhud",
              description: "La formule assise finale avant de terminer.",
            },
            {
              title: "As-salamu 'alaykum...",
              description:
                "Le salut final (vers la droite minimum) pour sortir de la prière.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={2} title="C'est tout ?">
        <StoryCallout variant="tip">
          Oui. Si vous dites &quot;Allahu Akbar&quot;, récitez Al Fatiha, vous
          vous inclinez et vous prosternez silencieusement, vous faites le
          tashahhud final et vous passez le salam...{" "}
          <strong className="text-brand-gold-400">
            Votre prière est officiellement valide.
          </strong>{" "}
          Tout le reste (les autres sourates, les invocations précises en
          s&apos;inclinant) sont des Sunnahs.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
