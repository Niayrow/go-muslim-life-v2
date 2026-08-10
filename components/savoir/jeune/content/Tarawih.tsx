"use client";

import { Moon } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function TarawihContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={7}
        total={10}
        chip="Nuits"
        icon={Moon}
        title="Les Tarawih"
        intro="Les nuits du Ramadan sont aussi précieuses que les jours. La prière des Tarawih est la marque distinctive des veillées de ce mois béni."
      />

      <StoryScene scene={1} title="C'est quoi les Tarawih ?">
        <p>
          Les Tarawih sont des <strong>prières surérogatoires</strong> (Sunnah
          Muakkadah) accomplies chaque nuit de Ramadan, après la prière de{" "}
          <strong>Isha</strong>. Elles sont fortement recommandées par le
          Prophète ﷺ.
        </p>
        <StoryCallout variant="quote" attribution="Prophète Muhammad ﷺ">
          &quot;Celui qui accomplit la prière de nuit du Ramadan par foi sincère et
          en espérant la récompense d&apos;Allah, ses péchés passés seront
          pardonnés.&quot;
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={2} title="Combien de rak'at ?">
        <StoryList
          items={[
            {
              title: "8 rak'at + 3 Witr",
              description:
                "Pratique de nombreuses mosquées suivant la Sunnah du Prophète ﷺ.",
              meta: "Opinion de beaucoup de savants",
            },
            {
              title: "20 rak'at + 3 Witr",
              description:
                "Pratique établie par le Calife Omar ibn al-Khattab et adoptée dans de nombreuses mosquées.",
              meta: "Opinion de l'école hanafite et autres",
            },
          ]}
        />
        <StoryCallout variant="tip" title="L'essentiel">
          Peu importe le nombre — <strong>la présence et le recueillement</strong>{" "}
          comptent plus que le chiffre. Suivez votre imam local.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={3} title="En congregation ou seul ?">
        <StoryList
          items={[
            {
              title: "En congrégation à la mosquée",
              description: "Hautement recommandé — le Prophète ﷺ a prié en congrégation.",
            },
            {
              title: "Seul chez soi",
              description: "Parfaitement valide si la mosquée est inaccessible.",
            },
          ]}
        />
      </StoryScene>
    </StoryPage>
  );
}
