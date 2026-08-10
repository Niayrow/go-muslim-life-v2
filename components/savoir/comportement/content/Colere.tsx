"use client";

import { Flame } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function ColereContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={2}
        total={6}
        chip="Exemple Prophétique"
        icon={Flame}
        title="La Maîtrise de Soi"
        intro="La colère est une braise du Diable. Apprenez à l'éteindre avant qu'elle ne brûle tout."
      />

      <StoryScene scene={1} title="Le Bédouin et le Manteau">
        <p>
          Un homme vint saisir le manteau du Prophète (ﷺ) par derrière avec une
          telle violence que le tissu laissa une marque sur son cou. Il lui cria
          :{" "}
          <i>
            &laquo;Ordonne qu&apos;on me donne de l&apos;argent d&apos;Allah
            que tu détiens !&raquo;
          </i>
        </p>
        <p>
          Le Prophète (ﷺ) se retourna et... sourit. Puis il ordonna
          qu&apos;on lui donne.
        </p>
        <StoryCallout variant="note" title="Réaction">
          Voilà le niveau. Pas de contre-attaque, pas d&apos;humiliation
          publique. Une maîtrise totale au moment le plus difficile.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={2} title="Le Code Secret">
        <p>
          Le Prophète (ﷺ) a enseigné une formule précise pour couper la colère
          à sa racine :
        </p>
        <StoryCallout variant="tip" title="A'oudhou billahi mina sh-shaytani r-rajim">
          &laquo;Je me réfugie auprès d&apos;Allah contre le Diable
          maudit.&raquo; Ce n&apos;est pas une formule magique — c&apos;est une
          reconnaissance que la colère n&apos;est pas vous. C&apos;est un
          souffleur extérieur.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={3} title="Changer d'État">
        <p>
          Si la formule ne suffit pas, changez physiquement d&apos;état. Le
          Prophète (ﷺ) a enseigné :
        </p>
        <StoryList
          numbered
          items={[
            {
              title: "Vous êtes debout ?",
              description: "Asseyez-vous.",
            },
            {
              title: "Vous êtes assis ?",
              description: "Allongez-vous.",
            },
            {
              title: "La colère persiste ?",
              description:
                "Faites les ablutions. L'eau froide éteint le feu intérieur.",
            },
          ]}
        />
        <StoryCallout variant="note">
          La colère est liée à votre corps. Changer de posture change
          littéralement votre état intérieur.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
