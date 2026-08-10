"use client";

import { Star } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/priere/story-ui";

export function SunnahContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={9}
        chip="Les Bonus"
        icon={Star}
        title="Les Sunnahs"
        intro='Une fois que vous maîtrisez le minimum, ajoutez ces éléments que le Prophète ﷺ nous a enseignés. Ce sont des "multiplicateurs de récompenses" qui embellissent votre prière sans être obligatoires.'
      />

      <StoryScene scene={1} title="Avant & Pendant la prière">
        <StoryList
          numbered
          items={[
            {
              title: "L'Iqama (Appel)",
              description:
                "Faire le petit appel à la prière juste avant de commencer (même seul à la maison). C'est très recommandé.",
            },
            {
              title: "L'Invocation d'Ouverture",
              description: (
                <>
                  Après le premier &quot;Allahu Akbar&quot;, dire une petite
                  invocation (ex: <i>Subhānaka Allāhumma...</i>) avant de
                  réciter la Fatiha.
                </>
              ),
            },
            {
              title: 'Dire "Amine"',
              description:
                'Après la Fatiha, prononcer "Amine" ("Allah exauce"), à voix haute lors des prières à voix haute.',
            },
            {
              title: "Une sourate en plus",
              description: (
                <>
                  Réciter une autre petite sourate (comme Al-Ikhlas, Al-Falaq){" "}
                  <strong>après</strong> la Fatiha lors des 2 premières
                  Rak&apos;ats.
                </>
              ),
            },
            {
              title: "Augmenter les rappels",
              description: (
                <>
                  Dire <i>Subhāna Rabbiya...</i> plus de 3 fois dans
                  l&apos;inclinaison/prosternation (5, 7 ou 9 fois par
                  exemple).
                </>
              ),
            },
            {
              title: "Le Mouvement du doigt",
              description:
                "Lever l'index ou le bouger légèrement pendant le Tashahhud (la récitation assise à la fin).",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={2} title="Règle Majeure">
        <StoryCallout variant="tip">
          Si vous oubliez une Sunnah (même réciter une autre sourate après la
          Fatiha), <strong>votre prière reste totalement valide</strong>. Vous
          n&apos;avez pas besoin de la refaire ni de faire une prosternation de
          réparation. C&apos;est juste un bonus en moins !
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
