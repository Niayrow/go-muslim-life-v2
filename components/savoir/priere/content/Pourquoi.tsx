"use client";

import { Heart } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/priere/story-ui";

export function PourquoiContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={1}
        chip="L'Essence"
        icon={Heart}
        title="Pourquoi la Prière ?"
        intro={
          <>
            Ce n&apos;est pas une simple gymnastique ni une taxe à payer à Dieu.
            C&apos;est le{" "}
            <span className="font-bold text-brand-warm">fil de vie</span> entre
            le Créateur et sa créature.
          </>
        }
      />

      <StoryScene scene={1} title="Une Révélation Unique">
        <p>
          Saviez-vous que toutes les obligations (le Jeûne, la Zakat, le Hajj)
          ont été révélées au Prophète (ﷺ) sur Terre par l&apos;ange Jibril ?
        </p>
        <p className="font-bold text-brand-warm">
          Toutes, sauf une : La Prière (Salat).
        </p>
        <p>
          Pour la Prière, Allah a fait monter le Prophète (ﷺ) à travers les sept
          cieux lors du voyage nocturne (<strong>Isra &amp; Mi&apos;raj</strong>
          ) pour lui donner cet ordre directement, sans intermédiaire.
        </p>
        <StoryCallout variant="tip" title="À retenir">
          Cela montre son statut unique : c&apos;est le cadeau qu&apos;Allah
          nous a donné directement au Ciel.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={2} title="Le Nettoyage Spirituel">
        <StoryCallout
          variant="quote"
          attribution="Prophète Muhammad (ﷺ) — Le Nettoyage Spirituel"
        >
          &quot;Imaginez qu&apos;il y a une rivière devant la porte de
          l&apos;un d&apos;entre vous et qu&apos;il s&apos;y lave 5 fois par
          jour. Resterait-il de la saleté sur lui ?&quot;
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={3} title="Pourquoi 5 fois ?">
        <p>
          Imaginez que vous plongiez sous l&apos;eau (la vie d&apos;ici-bas).
          Vous devez remonter à la surface régulièrement pour respirer.
        </p>
        <StoryList
          items={[
            {
              title: "Fajr",
              description: "L'oxygène avant de plonger.",
            },
            {
              title: "Dhuhr & Asr",
              description: "Remonter au milieu du tumulte.",
            },
            {
              title: "Maghrib & Isha",
              description: "Se laver du stress avant de dormir.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={4} title="Le Pilier Central">
        <StoryCallout variant="note">
          La prière est le premier acte sur lequel nous serons interrogés. Si
          elle est valide, tout le reste suit. C&apos;est la colonne vertébrale
          de votre foi. Sans elle, tout s&apos;effondre ; avec elle, tout tient.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
