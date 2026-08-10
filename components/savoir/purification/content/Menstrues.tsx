"use client";

import { ShieldCheck } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function MenstruesContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={6}
        total={6}
        chip="Pause légale"
        icon={ShieldCheck}
        title="Règles & Lochies"
        intro="Une période de pause légale accordée par Allah."
      />

      <StoryScene scene={1} title="Ce qui est suspendu (Interdit)">
        <StoryList
          items={[
            {
              title: "La Prière",
              description: "On ne prie pas pendant les règles. Ces prières ne sont pas à rattraper.",
            },
            {
              title: "Le Jeûne",
              description: "On ne jeûne pas. Ces jours sont à rattraper (Qada) après la période.",
            },
            {
              title: "Les Relations Intimes",
              description: "Les rapports sexuels sont interdits jusqu'à la purification complète.",
            },
            {
              title: "Le Tawaf",
              description: "Tourner autour de la Kaaba est interdit pendant cette période.",
            },
            {
              title: "Toucher le Coran",
              description: "Toucher physiquement le Mushaf est interdit selon la majorité des savants.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={2} title="Ce qui reste autorisé">
        <StoryList
          items={[
            {
              title: "Le Dhikr",
              description: "Rappel d'Allah, Subhanallah, Alhamdulillah, Allahu Akbar — librement.",
            },
            {
              title: "La Doua",
              description: "Invoquer Allah et faire des supplications sans restriction.",
            },
            {
              title: "Écouter le Coran",
              description: "Écouter la récitation du Coran est permis.",
            },
            {
              title: "Lire le Coran de mémoire",
              description: "Réciter de mémoire sans toucher le Mushaf est permis selon de nombreux savants.",
            },
            {
              title: "Rester dans la mosquée (avec précautions)",
              description: "Selon certains savants, passer par la mosquée ou s'y arrêter brièvement est permis.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={3} title="Après les règles">
        <StoryCallout variant="tip" title="Le Ghusl de purification">
          Dès que les règles se terminent, il est obligatoire de faire le Ghusl
          complet avant de reprendre la prière. C&apos;est l&apos;acte qui
          officialise la sortie de la période de pause légale.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
