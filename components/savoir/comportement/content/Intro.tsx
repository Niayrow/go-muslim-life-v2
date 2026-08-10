"use client";

import { Crown } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function IntroContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={1}
        total={6}
        chip="L'Excellence (Ihsan)"
        icon={Crown}
        title="Le But Ultime"
        intro="Je n'ai été envoyé que pour parfaire les nobles caractères. — Prophète Muhammad (ﷺ)"
      />

      <StoryScene scene={1} title="L'École du Caractère">
        <p>
          L&apos;Islam n&apos;est pas seulement une liste d&apos;actes à
          accomplir. C&apos;est une école complète qui vise à transformer
          l&apos;être humain de l&apos;intérieur. Le Prophète (ﷺ) a résumé
          l&apos;essence de sa mission en une seule phrase : parfaire les nobles
          caractères.
        </p>
        <p>
          Cela signifie que la prière, le jeûne, et le pèlerinage ne sont que
          des <span className="font-bold text-brand-warm">entraînements</span>{" "}
          pour forger votre caractère — pas des fins en elles-mêmes.
        </p>
      </StoryScene>

      <StoryScene scene={2} title="Le Poids dans la Balance">
        <p>
          Ce n&apos;est pas seulement une belle valeur morale. Le bon
          caractère a un poids réel dans la balance du Jour du Jugement.
        </p>
        <StoryCallout
          variant="quote"
          attribution="Tirmidhi — Le Poids dans la Balance"
        >
          Rien ne pèse plus lourd dans la balance du croyant au Jour du
          Jugement que le bon caractère. En vérité, Allah déteste le
          grossier et l&apos;obscène.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={3} title="Reprogrammation">
        <p>
          La bonne nouvelle : le caractère s&apos;acquiert. Ce n&apos;est pas
          inné et figé. Le Prophète (ﷺ) lui-même a encouragé à{" "}
          <span className="font-bold text-brand-warm">se forcer</span> à la
          patience, à la générosité, à la douceur — jusqu&apos;à ce que cela
          devienne naturel.
        </p>
        <StoryCallout variant="tip" title="Principe clé">
          Faites semblant d&apos;être patient. Puis faites semblant encore.
          Jusqu&apos;à ce que vous le soyez vraiment.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={4} title="Protection">
        <StoryCallout variant="warn" title="Attention">
          Le mauvais comportement &laquo;dévore&raquo; les bonnes actions
          comme le feu dévore le bois sec. Une langue qui blesse, une colère
          non maîtrisée, une ingratitude — tout cela peut annuler des années
          d&apos;effort spirituel.
        </StoryCallout>
        <p>
          Ce module est votre bouclier. Apprenez à protéger votre balance.
        </p>
      </StoryScene>
    </StoryPage>
  );
}
