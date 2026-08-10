"use client";

import { Briefcase } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/priere/story-ui";

export function QuotidienContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={12}
        chip="Solutions Pratiques"
        icon={Briefcase}
        title="La Prière dans la Vraie Vie"
        intro="L'Islam n'est pas fait pour vous compliquer la vie, mais pour l'accompagner. Allah a prévu des facilités (Rukhsah) pour le travail, le voyage et la maladie."
      />

      <StoryScene scene={1} title='Le "Hack" au travail : Masah sur les chaussettes'>
        <p>
          C&apos;est la solution n°1 pour prier au bureau sans mettre de l&apos;eau
          partout. Au lieu de laver vos pieds à chaque fois, vous pouvez
          simplement passer les mains mouillées sur vos chaussettes.
        </p>
        <StoryList
          numbered
          items={[
            {
              title: "Condition préalable",
              description: (
                <>
                  Avoir fait des ablutions complètes (en lavant les pieds){" "}
                  <strong>AVANT</strong> d&apos;enfiler les chaussettes ce
                  matin.
                </>
              ),
            },
            {
              title: "Le Geste exact",
              description: (
                <>
                  Passer les mains mouillées{" "}
                  <strong>uniquement sur le DESSUS</strong> du pied (orteils
                  vers cheville). Jamais en dessous.
                </>
              ),
            },
            {
              title: "Durée : 24 heures",
              description:
                "Valable 24h pour le résident. Idéal pour tenir toute la journée de travail jusqu'au soir.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={2} title="Au Travail / École">
        <StoryList
          items={[
            {
              title: "Le lieu",
              description:
                "Toute la terre est pure. Un bureau vide, un vestiaire, un escalier de secours propre suffisent.",
            },
            {
              title: "Le temps",
              description:
                "Une prière prend 5 à 7 minutes. C'est le temps d'une pause café.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={3} title="Maladie & Grossesse">
        <p>
          La règle est simple :{" "}
          <strong>
            &quot;Prie debout. Si tu ne peux pas, alors assis. Si tu ne peux
            pas, alors allongé.&quot;
          </strong>
        </p>
        <StoryCallout variant="tip" title="Assis sur une chaise">
          Inclinez légèrement le buste pour le Ruku. Pour le Sujud,
          inclinez-vous beaucoup plus bas (sans toucher le sol).
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={4} title="Le Voyageur">
        <p>
          Dès que vous quittez votre ville (+80km), Allah vous offre deux
          cadeaux de voyage :
        </p>
        <StoryList
          numbered
          items={[
            {
              title: "Qasr",
              description:
                "Les prières de 4 rak'ats (Dhuhr, Asr, Isha) passent à 2 rak'ats.",
            },
            {
              title: "Jam'",
              description:
                "Vous pouvez regrouper Dhuhr avec Asr, et Maghrib avec Isha (en les priant l'une après l'autre).",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={5} title="Oubli et Sommeil">
        <StoryCallout variant="quote">
          &quot;Celui qui dort ou oublie une prière, qu&apos;il la prie dès
          qu&apos;il s&apos;en souvient.&quot;
        </StoryCallout>
        <StoryCallout variant="note" title="Exemple (L'Ordre)">
          Si vous rentrez et que l&apos;heure du Maghrib a commencé alors que
          vous avez raté l&apos;Asr : Faites l&apos;Asr d&apos;abord
          (rattrapage), puis le Maghrib tout de suite après.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={6} title="Questions Flash">
        <StoryCallout
          variant="note"
          title="Puis-je prier assis dans ma voiture ou le train ?"
        >
          Seulement si vous avez la certitude que l&apos;heure de la prière sera
          terminée avant d&apos;arriver à destination et que vous ne pouvez pas
          prier debout dans le train. (La direction de la prière Kaba est
          souhaitable mais pas invalidante si vous ne pouvez pas vous tourner).
        </StoryCallout>
        <StoryCallout variant="note" title="Prier avec ses chaussures ?">
          Oui, c&apos;est totalement autorisé si elles sont propres (pas
          d&apos;impuretés visibles sous la semelle type urine, selles).
          C&apos;est même une sunnah pratiquée en extérieur.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
