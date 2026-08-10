"use client";

import { Heart } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function FamilleContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={3}
        total={6}
        chip="Service"
        icon={Heart}
        title="La Famille : Le Test"
        intro="Le meilleur d'entre vous est celui qui est le meilleur avec sa famille."
      />

      <StoryScene scene={1} title="Chef d'État à la Maison">
        <p>
          Aïcha (رضي الله عنها), la femme du Prophète (ﷺ), fut interrogée sur
          ce qu&apos;il faisait chez lui. Sa réponse détruisit toutes les
          excuses :
        </p>
        <StoryList
          items={[
            {
              title: "Il cousait ses vêtements",
              description: "Lui-même, avec ses propres mains.",
            },
            {
              title: "Il réparait ses chaussures",
              description: "Aucune tâche domestique ne lui était inférieure.",
            },
            {
              title: "Il trayait les brebis",
              description: "L'homme de la maison participait à tout.",
            },
          ]}
        />
        <StoryCallout variant="tip" title="À retenir">
          Le plus grand homme de l&apos;histoire servait sa famille. Aucun
          travail domestique n&apos;est &laquo;en dessous&raquo; de vous.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={2} title="Défi : Le Retour du Travail">
        <p>
          Le moment le plus dur : rentrer fatigué et trouver le chaos à la
          maison. C&apos;est là que le vrai caractère se révèle.
        </p>
        <StoryCallout variant="tip" title="10 minutes avant de rentrer">
          Prévoyez une &laquo;sas de décompression&raquo; : 10 minutes seul
          dans votre voiture, ou une courte marche. Entrez avec le sourire. Vos
          proches n&apos;ont pas créé votre stress — ne le déversez pas sur eux.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={3} title="Défi : Les Parents">
        <p>
          Avec les parents, le vrai test est souvent la{" "}
          <span className="font-bold text-brand-warm">répétition</span>. La
          même question pour la centième fois. La même remarque.
        </p>
        <StoryCallout variant="tip" title="Le Sourire Silencieux">
          Lorsque vous sentez l&apos;agacement monter, souriez intérieurement
          et dites-vous : &laquo;Ce moment est ma Jannah.&raquo; Allah a placé
          Son agrément dans le leur. Chaque patience est une pièce d&apos;or
          déposée dans votre balance.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
