"use client";

import { XCircle } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function AnnulatifsContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={5}
        total={6}
        chip="Attention"
        icon={XCircle}
        title="Ce qui annule tout"
        intro="Si l'une de ces choses arrive, vos ablutions ne sont plus valides."
      />

      <StoryScene scene={1} title="Les Annulatifs du Wudu">
        <StoryList
          items={[
            {
              title: "Besoins Naturels",
              description: "Tout ce qui sort par les deux voies (urine, selles, gaz) annule immédiatement les ablutions.",
            },
            {
              title: "Perte de Conscience",
              description: "Le sommeil profond, l'évanouissement, l'ivresse ou tout état qui fait perdre la conscience de son corps.",
            },
            {
              title: "Toucher les parties intimes",
              description:
                "Toucher directement son propre sexe (ou celui d'autrui) avec la paume ou l'intérieur des doigts, sans barrière.",
            },
            {
              title: "Manger du Chameau",
              description: "D'après un hadith authentique, consommer de la viande de chameau annule les ablutions.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={2} title="Ce qui n'annule PAS">
        <p>
          Contrairement à certaines croyances populaires, ces actions{" "}
          <strong className="text-brand-warm">ne cassent pas</strong> vos
          ablutions :
        </p>
        <StoryList
          items={[
            {
              title: "Rire pendant la prière",
              description: "Cela ne casse que la prière elle-même, pas les ablutions.",
            },
            {
              title: "Saignement (nez, blessure)",
              description: "Selon la majorité des savants, le sang qui sort ailleurs que des deux voies n'annule pas le Wudu.",
            },
            {
              title: "Toucher une femme",
              description: "Le simple contact physique avec une femme (sans intentions ou actes intimes) n'annule pas les ablutions.",
            },
          ]}
        />
        <StoryCallout variant="tip" title="En cas de doute">
          La règle de base : votre pureté est acquise jusqu&apos;à ce que vous
          soyez certain qu&apos;un annulatif s&apos;est produit. Un simple doute
          ne suffit pas.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
