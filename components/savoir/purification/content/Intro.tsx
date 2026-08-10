"use client";

import { Sparkles } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function IntroContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={1}
        total={6}
        chip="Fondamentaux"
        icon={Sparkles}
        title="La Clé du Paradis"
        intro="Avant de parler au Créateur, on se détache du monde temporel. C'est un reset spirituel et physique complet."
      />

      <StoryScene scene={1} title="La Pureté (Tahâra)">
        <StoryCallout
          variant="quote"
          attribution="Coran 2:222"
        >
          Allah aime ceux qui se repentent et Il aime ceux qui se purifient.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={2} title="Physique & Spirituel">
        <p>
          La purification n&apos;est pas qu&apos;une simple question
          d&apos;hygiène quotidienne. C&apos;est un rituel sacré d&apos;élévation.
        </p>
        <StoryList
          items={[
            {
              title: "Le Corps",
              description: "On se lave avec l'eau (Wudu / Ghusl).",
            },
            {
              title: "Le Cœur",
              description: "On purifie son intention posée pour Allah.",
            },
          ]}
        />
        <StoryCallout variant="note">
          Même si vous êtes parfaitement &quot;propre&quot; au sens hygiénique,
          vous avez besoin de cette intention de purification rituelle pour prier.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={3} title="Une Part Essentielle">
        <StoryCallout
          variant="quote"
          attribution="Hadith — Muslim"
        >
          La purification est la moitié de la foi.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
