"use client";

import { Coins } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function DefinitionContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={1}
        total={7}
        chip="Le 3ème Pilier"
        icon={Coins}
        title="Qu'est-ce que la Zakat ?"
        intro={
          <>
            Ce n&apos;est pas un impôt — c&apos;est une{" "}
            <span className="font-bold text-brand-warm">purification</span> de
            votre richesse et une croissance spirituelle au cœur de
            l&apos;Islam.
          </>
        }
      />

      <StoryScene scene={1} title="Commandement Divin">
        <StoryCallout
          variant="quote"
          attribution="Coran 9:103 — Commandement Divin"
        >
          &quot;Prends de leurs biens une aumône pour les purifier et les
          sanctifier par elle.&quot;
        </StoryCallout>
        <p>
          La Zakat est le{" "}
          <strong className="text-brand-warm">3ème pilier de l&apos;Islam</strong>,
          mentionnée plus de 30 fois dans le Coran, souvent aux côtés de la
          Prière (Salat). Cette association n&apos;est pas un hasard : la Salat
          nourrit le lien vertical avec Allah, la Zakat renforce le lien
          horizontal avec la communauté.
        </p>
      </StoryScene>

      <StoryScene scene={2} title="Purification & Justice Sociale">
        <p>La Zakat porte deux dimensions indissociables :</p>
        <StoryList
          items={[
            {
              title: "Purification personnelle",
              description:
                "Elle purifie votre richesse des impuretés spirituelles et protège contre l'attachement excessif aux biens matériels.",
            },
            {
              title: "Justice sociale",
              description:
                "Elle redistribue la richesse au sein de la communauté, réduit les inégalités et garantit que personne ne soit laissé pour compte.",
            },
            {
              title: "Croissance (zakâ = croissance)",
              description:
                "Le mot arabe Zakat signifie à la fois « purification » et « croissance ». En donnant, votre richesse ne diminue pas — elle croît par la bénédiction d'Allah.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={3} title="Un Pilier, pas une Option">
        <StoryCallout variant="note">
          La Zakat est mentionnée{" "}
          <strong>plus de 30 fois dans le Coran</strong>. Le calife Abu Bakr
          (رضي الله عنه) fit la guerre à ceux qui refusaient de la payer après
          la mort du Prophète (ﷺ), montrant que ce n&apos;est pas une simple
          recommandation : c&apos;est une obligation fondamentale de la foi.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
