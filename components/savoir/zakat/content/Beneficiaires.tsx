"use client";

import { Users } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function BeneficiairesContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={5}
        total={7}
        chip="Coran 9:60"
        icon={Users}
        title="À qui donner la Zakat ?"
        intro="Le Coran définit précisément les 8 catégories de bénéficiaires. Cette liste est exhaustive et ne peut pas être étendue arbitrairement."
      />

      <StoryScene scene={1} title="Le Verset Fondateur">
        <StoryCallout
          variant="quote"
          attribution="Coran 9:60 — Les Bénéficiaires"
        >
          &quot;Les aumônes ne sont destinées qu&apos;aux pauvres, aux
          indigents, à ceux qui y travaillent, à ceux dont les cœurs sont à
          gagner, à l&apos;affranchissement des esclaves, à ceux qui sont
          lourdement endettés, dans le sentier d&apos;Allah et au voyageur
          [en détresse]. C&apos;est une obligation imposée par Allah.&quot;
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={2} title="Les 8 Catégories">
        <StoryList
          numbered
          items={[
            {
              title: "Al-Fuqarâ — Les pauvres",
              description:
                "Ceux dont les revenus ne couvrent pas leurs besoins essentiels.",
            },
            {
              title: "Al-Masâkîn — Les indigents",
              description:
                "Ceux qui sont dans une situation de dénuement encore plus sévère que les pauvres.",
            },
            {
              title: "Al-'Âmilîn — Les collecteurs",
              description:
                "Ceux qui travaillent à la collecte et à la distribution de la Zakat.",
            },
            {
              title: "Al-Mu'allafati Qulûbuhum — Cœurs à gagner",
              description:
                "Nouveaux convertis ou non-musulmans dont le soutien bénéficierait à la communauté.",
            },
            {
              title: "Fî Riqâb — L'affranchissement",
              description:
                "Historiquement : racheter des esclaves. Contemporainement : toute forme de libération de l'oppression.",
            },
            {
              title: "Al-Ghârimîn — Les endettés",
              description:
                "Ceux qui ont contracté des dettes pour des besoins légitimes et ne peuvent les rembourser.",
            },
            {
              title: "Fî Sabîlillâh — Dans le sentier d'Allah",
              description:
                "Les causes qui servent l'Islam et la communauté (éducation islamique, mosquées, œuvres caritatives).",
            },
            {
              title: "Ibn As-Sabîl — Le voyageur en détresse",
              description:
                "Celui qui est loin de chez lui et se trouve dans le besoin, même s'il est riche dans son pays.",
            },
          ]}
        />
      </StoryScene>
    </StoryPage>
  );
}
