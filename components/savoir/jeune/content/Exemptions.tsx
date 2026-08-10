"use client";

import { HeartHandshake } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function ExemptionsContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={4}
        total={10}
        chip="Facilité"
        icon={HeartHandshake}
        title="La Facilité d'Allah"
        intro="Allah ne veut pas vous mettre en difficulté. Il veut que vous accomplissiez le nombre de jours prescrits — mais avec sagesse."
      />

      <StoryScene scene={1} title="Le verset fondateur">
        <StoryCallout variant="quote" attribution="Coran 2:185">
          &quot;Allah veut pour vous la facilité, Il ne veut pas la difficulté pour
          vous. Il veut que vous accomplissiez le nombre prescrit et que vous
          glorifiiez Allah pour vous avoir guidés. Peut-être serez-vous
          reconnaissants.&quot;
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={2} title="Qada — le rattrapage temporaire">
        <p>
          Le <strong>Qada</strong> s&apos;applique aux situations{" "}
          <em>temporaires</em> : maladie passagère, voyage, règles, post-partum,
          grossesse/allaitement.
        </p>
        <StoryList
          items={[
            {
              title: "Rattraper avant le prochain Ramadan",
              description:
                "Vous avez toute l'année. Si vous tardez sans excuse, une Fidya supplémentaire peut s'ajouter selon les savants.",
            },
            {
              title: "Les jours peuvent être non consécutifs",
              description: "Pas besoin de les faire d'affilée.",
            },
            {
              title: "Intention la nuit",
              description: "Même règle que le Ramadan : intention avant le Fajr.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={3} title="Fidya — la compensation permanente">
        <StoryCallout variant="note" title="Qui peut payer la Fidya ?">
          La Fidya s&apos;adresse aux personnes incapables de jeûner de façon{" "}
          <strong>définitive</strong> : vieillard, malade chronique dont
          l&apos;état ne s&apos;améliorera pas.
        </StoryCallout>
        <StoryList
          items={[
            {
              title: "Montant",
              description: "Nourrir un pauvre pour chaque jour manqué (environ 7€ par jour).",
            },
            {
              title: "À qui ?",
              description: "À une personne dans le besoin — idéalement via une association fiable.",
            },
          ]}
        />
      </StoryScene>
    </StoryPage>
  );
}
