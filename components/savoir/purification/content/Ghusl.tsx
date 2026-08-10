"use client";

import { Waves } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function GhuslContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={3}
        total={6}
        chip="Majeur"
        icon={Waves}
        title="Le Ghusl (Grandes Ablutions)"
        intro="La douche rituelle complète. Obligatoire après les rapports intimes (Janaba), les règles ou les lochies."
      />

      <StoryScene scene={1} title="Le Minimum Absolu">
        <p>
          Pour que le Ghusl soit valide, deux choses suffisent :
        </p>
        <StoryList
          numbered
          items={[
            {
              title: "L'Intention",
              description: "Poser dans son cœur l'intention de se purifier de l'état de janaba (ou des règles/lochies).",
            },
            {
              title: "Mouiller TOUT le corps",
              description: "Faire couler de l'eau sur chaque partie du corps sans exception — cheveux, oreilles, nombril, entre les orteils.",
            },
          ]}
        />
        <StoryCallout variant="tip" title="Simple mais complet">
          Une douche avec intention suffit. Si l&apos;eau atteint chaque
          centimètre de votre corps, le Ghusl est valide.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={2} title="La Méthode Sunnah (6 étapes)">
        <StoryList
          numbered
          items={[
            {
              title: "Laver les mains",
              description: "Trois fois, pour commencer par la propreté.",
            },
            {
              title: "Laver les parties intimes",
              description: "Enlever toute impureté avant de continuer.",
            },
            {
              title: "Faire le Wudu complet",
              description: "Comme pour la prière (sauf les pieds que l'on peut laver à la fin).",
            },
            {
              title: "Mouiller les cheveux à la racine",
              description: "Passer les doigts à la base des cheveux pour que l'eau atteigne le cuir chevelu.",
            },
            {
              title: "Verser l'eau sur tout le corps",
              description: "Côté droit d'abord, puis côté gauche, en frottant.",
            },
            {
              title: "Laver les pieds",
              description: "Si on ne les a pas lavés lors du Wudu.",
            },
          ]}
        />
      </StoryScene>
    </StoryPage>
  );
}
