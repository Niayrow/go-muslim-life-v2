"use client";

import { MessageCircle } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function LangueContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={4}
        total={6}
        chip="Silence"
        icon={MessageCircle}
        title="Le Danger de la Langue"
        intro="La plupart des péchés du fils d'Adam proviennent de sa langue."
      />

      <StoryScene scene={1} title="Retiens celle-ci">
        <p>
          Mu&apos;adh ibn Jabal (رضي الله عنه) demanda au Prophète (ﷺ) :
          &laquo;Ô Messager d&apos;Allah, allons-nous être tenus responsables
          de ce que nous disons ?&raquo;
        </p>
        <p>
          Le Prophète (ﷺ) saisit sa propre langue et répondit :{" "}
          <i>
            &laquo;Mère de Mu&apos;adh ! Est-ce qu&apos;autre chose que les
            récoltes des langues précipite les gens dans le Feu sur leurs
            visages — ou sur leurs nez ?&raquo;
          </i>
        </p>
        <StoryCallout variant="note">
          Chaque parole que vous prononcez est enregistrée. Ce n&apos;est pas
          une métaphore — c&apos;est une réalité.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={2} title="Le Filtre des 3 Portes">
        <p>
          Avant de parler, faites passer vos mots par trois filtres. Si votre
          message ne passe aucune des trois, la réponse est simple :
        </p>
        <StoryList
          numbered
          items={[
            {
              title: "Est-ce vrai ?",
              description: "Si ce n'est pas certain, ne le dites pas.",
            },
            {
              title: "Est-ce utile ?",
              description:
                "Si ça ne sert à rien de constructif, économisez vos mots.",
            },
            {
              title: "Est-ce nécessaire ?",
              description:
                "Si votre absence de réponse ne cause aucun tort, abstenez-vous.",
            },
          ]}
        />
        <StoryCallout variant="warn">
          TAISEZ-VOUS. Le silence est une ibada (adoration). Le Prophète (ﷺ) a
          dit : &laquo;Que celui qui croit en Allah et au Jour dernier dise une
          bonne parole ou qu&apos;il se taise.&raquo;
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
