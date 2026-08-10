"use client";

import { Flame } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function SensContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={1}
        total={10}
        chip="Le 4ème Pilier"
        icon={Flame}
        title="Pourquoi Jeûner ?"
        intro="Ce n'est pas un régime. Ce n'est pas une punition. Le jeûne de Ramadan est une école — celle de l'âme, de la volonté et de la compassion."
      />

      <StoryScene scene={1} title="La Taqwa : le vrai but">
        <StoryCallout
          variant="quote"
          attribution="Coran 2:183"
        >
          &quot;Ô vous qui croyez ! Le jeûne vous a été prescrit comme il l&apos;a été
          à ceux qui vous ont précédés. Peut-être atteindrez-vous la Taqwa.&quot;
        </StoryCallout>
        <p>
          La <strong>Taqwa</strong> n&apos;est pas juste &quot;la piété&quot;. C&apos;est cette
          conscience intérieure d&apos;Allah qui vous guide même quand personne ne vous
          regarde. C&apos;est ça le but du Ramadan.
        </p>
      </StoryScene>

      <StoryScene scene={2} title="Empathie : ressentir la faim des autres">
        <p>
          Quand vous avez faim à 16h et que vous pensez à ceux qui vivent cette
          réalité chaque jour, <strong>quelque chose change en vous</strong>. Le
          jeûne est l&apos;école de la générosité.
        </p>
        <StoryList
          items={[
            {
              title: "Comprendre la faim",
              description: "Pas juste intellectuellement, mais dans les tripes.",
            },
            {
              title: "Ouvrir le cœur",
              description: "La Zakat al-Fitr n'est pas un hasard — elle clôt le Ramadan.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={3} title="Discipline : maîtriser ses désirs">
        <StoryList
          items={[
            {
              title: "Maîtrise de la langue",
              description: "Pas de mensonge, ni médisance, ni dispute.",
            },
            {
              title: "Maîtrise du corps",
              description: "On renforce la volonté en résistant à ce qui est halal.",
            },
            {
              title: "Maîtrise du temps",
              description: "Le Ramadan réorganise vos journées autour d'Allah.",
            },
          ]}
        />
        <StoryCallout variant="tip" title="À retenir">
          Si le mois se passe et que vous n&apos;avez changé ni en bien ni en
          comportement, le jeûne n&apos;a été qu&apos;une diète. Visez la transformation.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
