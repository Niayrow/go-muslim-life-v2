"use client";

import { Star } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function AidContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={10}
        total={10}
        chip="Fête"
        icon={Star}
        title="Eid Mubarak !"
        intro="Vous avez traversé un mois entier de jeûne, de prières et de recueillement. L'Aïd al-Fitr est la récompense terrestre que vous méritez — et la meilleure reste avec Allah."
      />

      <StoryScene scene={1} title="Le jour de l'Aïd">
        <p>
          L&apos;Aïd al-Fitr est une{" "}
          <strong>fête d&apos;action de grâces</strong>, pas juste une journée de
          ripaille. C&apos;est le moment de célébrer avec votre communauté,
          d&apos;embrasser vos proches et de remercier Allah.
        </p>
        <StoryList
          items={[
            {
              title: "Mangez quelque chose avant la prière",
              description: "Dattes de préférence — contrairement au sacrifice.",
            },
            {
              title: "Prenez le plus beau chemin aller, et revenez par un autre",
              description: "Sunnah du Prophète ﷺ.",
            },
            {
              title: "Prononcez le Takbir",
              description: "Allahu Akbar, Allahu Akbar, lā ilāha illā Allāh… en chemin.",
            },
            {
              title: "Priez la Salat de l'Aïd",
              description: "2 rak'at avec takbirat supplémentaires — en congrégation.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={2} title="Bonus : les 6 jours de Shawwal">
        <StoryCallout variant="quote" attribution="Prophète Muhammad ﷺ">
          &quot;Celui qui jeûne Ramadan puis le fait suivre de six jours de Shawwal,
          c&apos;est comme s&apos;il avait jeûné toute l&apos;année.&quot;
        </StoryCallout>
        <p>
          Shawwal est le mois qui suit Ramadan. Ces 6 jours sont une{" "}
          <strong>Sunnah fortement recommandée</strong>. Ils peuvent être
          consécutifs ou répartis dans le mois.
        </p>
        <StoryList
          items={[
            {
              title: "Terminez d'abord vos Qada",
              description: "Si vous avez des jours à rattraper, rattrapez-les en priorité selon la majorité des savants.",
            },
            {
              title: "6 jours à n'importe quel moment du mois",
              description: "Pas obligatoirement consécutifs après l'Aïd.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={3}>
        <StoryCallout variant="tip" title="Taqabbal Allah minna wa minkum">
          &quot;Qu&apos;Allah accepte de nous et de vous.&quot; C&apos;est le vœu que les
          Compagnons s&apos;échangeaient pour l&apos;Aïd. Partagez-le avec vos proches.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
