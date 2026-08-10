"use client";

import { HelpCircle } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryPage,
  StoryScene,
} from "@/components/savoir/priere/story-ui";

export function WaswasContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={11}
        chip="Gérer les doutes"
        icon={HelpCircle}
        title="Les Waswas (Doutes)"
        intro={
          '"Est-ce que j\'ai fait 3 ou 4 rak\'ats ?" "Est-ce que j\'ai perdu mes ablutions ?" Ces doutes (insufflés par le diable) sont normaux. Voici la règle d\'or pour les détruire.'
        }
      />

      <StoryScene scene={1} title="La Certitude ne disparaît pas avec le Doute">
        <StoryCallout variant="tip">
          Si vous êtes <strong>certain</strong> d&apos;avoir fait vos ablutions
          ce matin, mais que vous avez un <i>léger doute</i> de les avoir
          perdues... <strong>Vous avez toujours vos ablutions.</strong> Ignorez
          le doute.
        </StoryCallout>
      </StoryScene>

      <StoryScene
        scene={2}
        title={'Les Scénarios Fréquents · "3 ou 4 Rak\'ats ?"'}
      >
        <p>
          En plein milieu de la prière, vous ne savez plus à quelle unité vous
          êtes.
        </p>
        <StoryCallout variant="note" title="Solution">
          Bâtissez sur le Minimum. Si vous doutez entre 3 et 4, considérez que
          c&apos;est <strong>3</strong> (la certitude) et ajoutez-en une. Puis
          faites une prosternation de l&apos;oubli.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={3} title={"\"J'ai senti quelque chose...\""}>
        <p>
          Vous ressentez un gargouillement dans le ventre et doutez d&apos;avoir
          perdu les ablutions en pleine prière.
        </p>
        <StoryCallout variant="note" title="Solution">
          Le Prophète ﷺ a dit : &quot;Ne quitte pas la prière jusqu&apos;à
          entendre un bruit ou sentir une odeur&quot;. Si ce n&apos;est
          qu&apos;une sensation interne, <strong>ignorez-la</strong> et
          continuez.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={4} title="La Prosternation de l'Oubli (Sujud Sahw)">
        <p>
          C&apos;est un cadeau d&apos;Allah. Si vous avez oublié quelque chose
          ou si vous avez douté et bâti sur le minimum, vous n&apos;avez pas à
          refaire toute la prière. Vous faites juste deux prosternations
          supplémentaires à la fin.
        </p>
        <StoryCallout variant="note" title="Avant le Salam">
          <p className="mb-1 text-[10px] font-bold tracking-wider text-brand-gold-400 uppercase">
            Oubli / Doute
          </p>
          Si vous avez oublié une partie obligatoire et rattrapé, faites deux
          prosternations juste après le Tashahhud final, puis faites le Salam
          pour terminer.
        </StoryCallout>
        <StoryCallout variant="note" title="Après le Salam">
          <p className="mb-1 text-[10px] font-bold tracking-wider text-brand-gold-400 uppercase">
            Ajout
          </p>
          Si vous avez fait une Rak&apos;at en trop par erreur. Vous terminez
          votre prière normalement par le Salam. Puis vous refaites deux
          prosternations, et un nouveau Salam.
        </StoryCallout>
        <p className="text-xs text-brand-steel-400 italic">
          Note : Dans le doute (Avant ou Après), si vous le faites avant le
          Salam, c&apos;est valide dans tous les cas. InshaAllah.
        </p>
      </StoryScene>
    </StoryPage>
  );
}
