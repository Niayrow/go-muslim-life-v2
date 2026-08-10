"use client";

import { UserCheck } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function QuiContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={2}
        total={7}
        chip="Conditions"
        icon={UserCheck}
        title="Qui doit payer la Zakat ?"
        intro="La Zakat n'est pas une obligation pour tous. Voici les quatre conditions cumulatives qui la rendent obligatoire."
      />

      <StoryScene scene={1} title="Les 4 Conditions Cumulatives">
        <StoryList
          numbered
          items={[
            {
              title: "Être musulman",
              description:
                "La Zakat est une obligation islamique qui ne s'applique qu'aux croyants.",
            },
            {
              title: "Être libre",
              description:
                "Condition héritée de l'époque classique, elle symbolise l'autonomie sur ses biens.",
            },
            {
              title: "Posséder le Nisab",
              description:
                "Avoir une richesse égale ou supérieure au seuil minimum (Nisab), calculé en or ou en argent.",
            },
            {
              title: "L'année lunaire (Hawl)",
              description:
                "Avoir possédé cette richesse sans interruption pendant une année lunaire complète (environ 354 jours).",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={2} title="Qui est dispensé ?">
        <StoryList
          items={[
            {
              title: "Le pauvre et l'indigent",
              description:
                "Celui dont la richesse est inférieure au Nisab.",
            },
            {
              title: "L'endetté",
              description:
                "Celui dont les dettes, déduites de sa richesse, le ramènent sous le Nisab.",
            },
            {
              title: "L'enfant mineur",
              description:
                "Selon la majorité des savants (bien que certains rendent la Zakat obligatoire sur ses biens).",
            },
            {
              title: "Celui dont la richesse n'a pas duré un an",
              description:
                "Si la richesse est tombée sous le Nisab en cours d'année, le compteur (Hawl) repart à zéro.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={3} title="Le Nisab en pratique">
        <StoryCallout variant="tip" title="Seuil du Nisab">
          Le Nisab est calculé sur la base de{" "}
          <strong>85 grammes d&apos;or</strong> ou de{" "}
          <strong>595 grammes d&apos;argent</strong>. En valeur actuelle, cela
          représente environ{" "}
          <strong>5 000 – 6 000 €</strong> selon le cours de l&apos;or.
          Consultez un calculateur Zakat actualisé pour obtenir le montant
          précis du moment.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
