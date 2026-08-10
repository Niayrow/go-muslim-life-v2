"use client";

import { Droplet } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/priere/story-ui";

export function WuduContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={4}
        chip="Purification"
        icon={Droplet}
        title="Les Ablutions"
        intro="La clé de la prière est la purification. Ce n'est pas qu'un lavage physique, c'est l'eau qui efface les petits péchés de vos membres."
      />

      <StoryScene scene={1} title="Le Minimum Obligatoire (Coran 5:6)">
        <p>
          Si vous n&apos;avez pas beaucoup de temps ou d&apos;eau, voici
          exactement ce que le Coran exige pour que vos ablutions soient valides
          (après avoir mis l&apos;intention) :
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

      <StoryScene scene={2} title="Et le reste ? (Gargarisme, etc.)">
        <p>
          Laver les mains au début, se gargariser, nettoyer le nez, laver les
          oreilles... Ce sont des <strong className="text-brand-warm">Sunnahs</strong>{" "}
          (actes très recommandés du Prophète ﷺ).
        </p>
        <p>
          Les faire augmente énormément votre récompense, mais si vous les
          oubliez, <strong>vos ablutions restent valides</strong> tant que les 4
          piliers ci-dessus sont faits.
        </p>
      </StoryScene>

      <StoryScene scene={3} title="Les Annulatifs">
        <StoryList
          items={[
            {
              title: "Besoin naturel",
              description: "Urine, selles ou gaz.",
            },
            {
              title: "Sommeil profond",
              description:
                "Où l'on perd conscience de son corps.",
            },
            {
              title: "Perte de raison",
              description: "Évanouissement, etc.",
            },
          ]}
        />
        <StoryCallout variant="warn">
          Dès qu&apos;un annulatif survient, refaites vos ablutions avant de
          prier.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
