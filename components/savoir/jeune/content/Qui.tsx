"use client";

import { Users } from "lucide-react";

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
        step={3}
        total={10}
        chip="Obligation"
        icon={Users}
        title="Qui doit jeûner ?"
        intro="Le jeûne de Ramadan est un pilier de l'Islam — obligatoire pour tout musulman adulte, sain et sédentaire. Mais Allah est Ar-Rahman, le Tout-Miséricordieux."
      />

      <StoryScene scene={1} title="Obligatoire pour :">
        <StoryList
          numbered
          items={[
            {
              title: "Muslim(e) adulte",
              description: "Ayant atteint la puberté (bulugh).",
            },
            {
              title: "Sain d'esprit",
              description: "La personne inconsciente ou folle n'est pas obligée.",
            },
            {
              title: "En bonne santé",
              description: "Sans maladie chronique qui rend le jeûne dangereux.",
            },
            {
              title: "Sédentaire",
              description: "Ni en voyage qui permet la dispense.",
            },
            {
              title: "Femme non en période de règles ou post-partum",
              description: "Ces périodes dispensent et interdisent le jeûne.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={2} title="Dispensé (avec rattrapage) :">
        <StoryList
          items={[
            {
              title: "Le voyageur",
              description: "Peut casser le jeûne et rattraper les jours manqués.",
            },
            {
              title: "Le malade temporaire",
              description: "Maladie passagère → rattrapage (Qada) après guérison.",
            },
            {
              title: "La femme enceinte ou allaitante",
              description: "Si elle craint pour elle ou son enfant → Qada.",
            },
            {
              title: "La femme en période de règles ou nifas",
              description: "Interdit de jeûner, rattrapage obligatoire.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={3} title="Dispensé sans rattrapage (Fidya) :">
        <StoryCallout variant="note" title="Cas permanents">
          Le vieillard ou le malade chronique incapable de jeûner peut payer la{" "}
          <strong>Fidya</strong> : nourrir un pauvre pour chaque jour manqué, à
          la place du rattrapage.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
