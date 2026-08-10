"use client";

import { AlertTriangle } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function InterditsContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={6}
        total={10}
        chip="Attention"
        icon={AlertTriangle}
        title="Ce qui annule le jeûne"
        intro="Il y a une liste courte mais précise de ce qui invalide le jeûne. Connaître ces règles vous évite bien des soucis."
      />

      <StoryScene scene={1} title="Les 3 annulatifs principaux">
        <StoryList
          numbered
          items={[
            {
              title: "Manger ou boire volontairement",
              description:
                "Intentionnellement avaler quelque chose — solide ou liquide — casse le jeûne. Le rattrapage (Qada) est obligatoire.",
              meta: "Qada obligatoire",
            },
            {
              title: "Les relations conjugales",
              description:
                "Pendant la journée du Ramadan. La Kaffarah (expiation) s'y ajoute dans ce cas : jeûner 60 jours consécutifs, ou nourrir 60 pauvres.",
              meta: "Qada + Kaffarah",
            },
            {
              title: "Éjaculation intentionnelle",
              description:
                "Hors relation conjugale. Le Qada est requis. (Le rêve nocturne ne casse pas le jeûne.)",
              meta: "Qada obligatoire",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={2} title="Ce qui ne casse PAS le jeûne">
        <StoryList
          items={[
            {
              title: "Avaler par oubli",
              description:
                "Si vous oubliez et mangez, continuez votre jeûne. Allah vous a offert ce repas.",
            },
            {
              title: "Rinçage de la bouche (sans avaler)",
              description: "Wudu, brossage de dents — évitez juste d'avaler.",
            },
            {
              title: "Injections médicales",
              description: "Piqûres ou perfusions non nutritives selon la majorité des savants.",
            },
            {
              title: "Vomissements involontaires",
              description: "Si vous vomissez sans le vouloir, le jeûne reste valide.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={3}>
        <StoryCallout variant="tip" title="Oubli ? Aucun souci.">
          Le Prophète ﷺ a dit : &quot;Celui qui oublie et mange ou boit, qu&apos;il
          complète son jeûne. C&apos;est Allah qui l&apos;a nourri et abreuvé.&quot; Continuez
          dès que vous vous en rendez compte.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
