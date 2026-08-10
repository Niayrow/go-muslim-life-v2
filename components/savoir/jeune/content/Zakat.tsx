"use client";

import { HandCoins } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function ZakatContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={9}
        total={10}
        chip="Aumône"
        icon={HandCoins}
        title="Zakat al-Fitr"
        intro="La Zakat al-Fitr est l'aumône obligatoire qui clôt le Ramadan. Elle purifie votre jeûne et nourrit les plus démunis pour l'Aïd."
      />

      <StoryScene scene={1} title="Combien ?">
        <StoryCallout variant="note" title="Environ 7€ par personne">
          La Zakat al-Fitr correspond à un <strong>Saa&apos;</strong> de nourriture
          de base (environ 2,5 kg de dates, blé, riz…). En Europe, cela
          représente généralement <strong>7€ à 10€ par personne</strong> dans
          le foyer.
        </StoryCallout>
        <p className="text-sm text-brand-mist">
          Le chef de famille la paie pour lui-même ET pour chaque personne à sa
          charge (conjoint, enfants, etc.).
        </p>
      </StoryScene>

      <StoryScene scene={2} title="Quand ?">
        <StoryList
          items={[
            {
              title: "Idéalement 1 à 2 jours avant l'Aïd",
              description: "Pour que les bénéficiaires puissent en profiter le jour de fête.",
              meta: "Recommandé",
            },
            {
              title: "Au plus tard avant la prière de l'Aïd",
              description: "Si vous la versez après la prière, elle devient une simple Sadaqa.",
              meta: "Limite obligatoire",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={3} title="Pour qui ?">
        <StoryList
          items={[
            {
              title: "Les pauvres et nécessiteux",
              description: "Ceux qui n'ont pas assez pour couvrir leurs besoins de base.",
            },
            {
              title: "Via une association islamique fiable",
              description: "Vérifiez qu'elle redistribue avant la prière de l'Aïd.",
            },
          ]}
        />
        <StoryCallout variant="tip">
          Payez tôt, pas au dernier moment. Certaines associations collectent
          dès le début du Ramadan pour mieux organiser la distribution.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
