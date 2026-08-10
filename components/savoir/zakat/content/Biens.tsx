"use client";

import { Package } from "lucide-react";

import {
  ChapterHero,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function BiensContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={3}
        total={7}
        chip="Les Catégories"
        icon={Package}
        title="Sur quoi la Zakat est-elle due ?"
        intro="Tous les biens ne sont pas soumis à la Zakat. Voici les catégories concernées et celles qui en sont exemptées."
      />

      <StoryScene scene={1} title="Les 4 Catégories Concernées">
        <StoryList
          items={[
            {
              title: "Or, argent, épargne & liquidités",
              description:
                "Espèces, comptes bancaires, or et argent physiques, et leurs équivalents. C'est la catégorie la plus courante.",
              meta: "2,5% après un an",
            },
            {
              title: "Marchandises commerciales",
              description:
                "Tout bien acheté dans l'intention de le revendre (stock d'une entreprise, immobilier acheté pour la revente).",
              meta: "2,5% sur la valeur de revente",
            },
            {
              title: "Récoltes agricoles",
              description:
                "Les cultures irriguées naturellement (pluie) : 10%. Irriguées artificiellement : 5%.",
              meta: "5% ou 10% selon l'irrigation",
            },
            {
              title: "Animaux d'élevage",
              description:
                "Chameaux, bovins, ovins et caprins qui paissent librement. Barèmes spécifiques selon le nombre.",
              meta: "Barèmes variables",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={2} title="Ce qui n'est pas soumis à la Zakat">
        <StoryList
          items={[
            {
              title: "La résidence principale",
              description:
                "Votre maison ou appartement dans lequel vous vivez.",
            },
            {
              title: "Les véhicules personnels",
              description:
                "Voiture, moto ou autre véhicule utilisé à titre personnel.",
            },
            {
              title: "Les meubles et appareils du foyer",
              description: "Mobilier, électroménager, vêtements personnels.",
            },
            {
              title: "Les bijoux portés par les femmes",
              description:
                "Selon l'opinion majoritaire des savants, les bijoux d'usage quotidien sont exemptés.",
            },
            {
              title: "L'immobilier locatif conservé",
              description:
                "Un bien immobilier que vous ne revendez pas — mais la Zakat reste due sur les loyers perçus s'ils atteignent le Nisab.",
            },
            {
              title: "Les outils professionnels",
              description:
                "Équipements utilisés pour exercer une profession (machines, matériel informatique professionnel, etc.).",
            },
          ]}
        />
      </StoryScene>
    </StoryPage>
  );
}
