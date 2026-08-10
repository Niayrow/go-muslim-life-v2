"use client";

import { ShieldCheck } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/priere/story-ui";

export function QuiContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={2}
        chip="Les Conditions"
        icon={ShieldCheck}
        title="Obligation"
        intro="Une règle divine simple pour dissiper les doutes : tout le monde n'est pas concerné au même moment."
      />

      <StoryScene scene={1} title="C'est Requis">
        <StoryList
          items={[
            { title: "Tu es Musulman(e)" },
            { title: "Tu as atteint la puberté" },
            { title: "Tu es sain d'esprit" },
          ]}
        />
      </StoryScene>

      <StoryScene scene={2} title="Ce n'est pas requis">
        <StoryList
          items={[
            { title: "Enfant (avant la puberté)" },
            { title: "Inconscient / Malade mental" },
            { title: "Femmes (menstrues/lochies)" },
          ]}
        />
      </StoryScene>

      <StoryScene scene={3} title="Cas particuliers importants">
        <StoryCallout variant="warn">
          <p>
            La maladie physique, le travail intense ou le voyage n&apos;enlèvent{" "}
            <span className="font-bold text-brand-pearl underline decoration-brand-gold-400/50 underline-offset-4">
              jamais
            </span>{" "}
            l&apos;obligation de la prière.
          </p>
          <p className="mt-3">
            Cependant, Allah a facilité la pratique : on peut prier assis si on
            ne peut pas tenir debout, ou regrouper les prières. Nous verrons ces
            facilités au chapitre 12.
          </p>
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
