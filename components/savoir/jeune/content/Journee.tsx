"use client";

import { Sun } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function JourneeContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={5}
        total={10}
        chip="Pratique"
        icon={Sun}
        title="Une Journée Type"
        intro="Du Suhoor avant l'aube jusqu'à l'Iftar au coucher du soleil — voici comment structurer votre journée de Ramadan."
      />

      <StoryScene scene={1} title="Le Suhoor — repas de l'aube">
        <StoryCallout variant="quote" attribution="Prophète Muhammad ﷺ">
          &quot;Prenez le Suhoor, car il y a une bénédiction dans ce repas.&quot;
        </StoryCallout>
        <StoryList
          items={[
            {
              title: "Ne le sautez pas",
              description:
                "Même si c'est juste un verre d'eau et une datte — la bénédiction (baraka) est réelle.",
            },
            {
              title: "Hydratez-vous bien",
              description: "Eau, jus, tisane — préparez votre corps pour la journée.",
            },
            {
              title: "Faites votre intention la nuit",
              description: "Le Suhoor est le moment idéal pour la confirmer dans le cœur.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={2} title="L'Iftar — la rupture">
        <p>
          Dès l&apos;adhan du Maghrib, rompez <strong>immédiatement</strong>.
          La Sunnah : commencer par des dattes impaires (1, 3, 5) puis de l&apos;eau,
          avant la prière.
        </p>
        <div className="rounded-2xl border border-brand-gold-400/25 bg-brand-panel-elevated/30 px-5 py-4 space-y-3">
          <p className="text-center text-xl font-bold text-brand-gold-300 tracking-wide">
            اللَّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ
          </p>
          <p className="text-center text-sm italic text-brand-mist">
            Allahumma laka sumtu wa bika āmantu wa ʿalā rizqika aftartu
          </p>
          <p className="text-center text-sm text-brand-soft border-t border-brand-line/20 pt-3">
            &quot;Ô Allah, c&apos;est pour Toi que j&apos;ai jeûné, c&apos;est en Toi que je crois,
            et c&apos;est avec Ta subsistance que je romps mon jeûne.&quot;
          </p>
        </div>
      </StoryScene>

      <StoryScene scene={3} title="Entre Fajr et Maghrib">
        <StoryList
          items={[
            {
              title: "Continuez votre travail normalement",
              description: "Le jeûne n'est pas une excuse pour l'inactivité.",
            },
            {
              title: "Lisez le Coran",
              description: "C'est le mois du Coran — même 5 minutes après chaque prière.",
            },
            {
              title: "Évitez les disputes",
              description: "Si quelqu'un vous provoque, dites : « Je jeûne. »",
            },
            {
              title: "Faites une sieste si possible",
              description: "La Sunnah du qailula (repos de mi-journée).",
            },
          ]}
        />
      </StoryScene>
    </StoryPage>
  );
}
