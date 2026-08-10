"use client";

import { Wind } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function TayammumContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={4}
        total={6}
        chip="Alternative"
        icon={Wind}
        title="Le Tayammum (Sans eau)"
        intro="Pas d'eau ? Trop malade pour toucher l'eau ? On utilise la terre propre (pierre, sable, poussière)."
      />

      <StoryScene scene={1} title="La Méthode (4 étapes)">
        <StoryList
          numbered
          items={[
            {
              title: "L'Intention",
              description: "Poser l'intention de se purifier par le Tayammum.",
            },
            {
              title: "Frapper la terre propre",
              description: "Poser les deux paumes sur une surface poussiéreuse propre (sol, mur, pierre).",
            },
            {
              title: "Souffler ou secouer",
              description: "Secouer légèrement les mains pour enlever l'excès de poussière.",
            },
            {
              title: "Passer sur le visage puis les mains",
              description: "Passer les paumes sur tout le visage, puis la main droite sur la main gauche jusqu'aux poignets, et inversement.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={2} title="Quand le Tayammum est-il permis ?">
        <StoryCallout variant="warn" title="Conditions">
          Le Tayammum remplace le Wudu ou le Ghusl uniquement dans ces cas :
        </StoryCallout>
        <StoryList
          items={[
            {
              title: "Absence d'eau",
              description: "Vous ne trouvez pas d'eau après avoir cherché.",
            },
            {
              title: "Maladie",
              description: "L'eau vous nuit physiquement (blessure, maladie de peau, grand froid).",
            },
            {
              title: "Eau insuffisante",
              description: "L'eau disponible est nécessaire pour boire ou cuisiner (survie).",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={3} title="Ce qui annule le Tayammum">
        <p>
          Tout ce qui annule le Wudu annule aussi le Tayammum. De plus :
        </p>
        <StoryCallout variant="note">
          Dès que vous trouvez de l&apos;eau (ou que la raison qui vous empêchait
          de l&apos;utiliser disparaît), le Tayammum est annulé automatiquement.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
