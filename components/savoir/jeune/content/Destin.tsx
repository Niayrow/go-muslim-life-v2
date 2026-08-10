"use client";

import { Sparkles } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function DestinContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={8}
        total={10}
        chip="Le Trésor"
        icon={Sparkles}
        title="Laylatul Qadr"
        intro="Une nuit vaut plus que 83 ans de dévotion. C'est la nuit où le destin est écrit, où les portes du Ciel s'ouvrent en grand."
      />

      <StoryScene scene={1} title="83 ANS en une nuit">
        <StoryCallout variant="quote" attribution="Coran 97:3 — Sourate Al-Qadr">
          &quot;La Nuit du Destin est meilleure que mille mois.&quot;
        </StoryCallout>
        <p>
          Mille mois = 83 ans et 4 mois. Une nuit de dévotion sincère équivaut à
          une vie entière passée à adorer Allah. C&apos;est le cadeau le plus
          exceptionnel d&apos;Allah à cette communauté.
        </p>
      </StoryScene>

      <StoryScene scene={2} title="Quand est-elle ?">
        <p>
          Elle se trouve dans les <strong>10 dernières nuits de Ramadan</strong>,
          et plus précisément dans les nuits impaires.
        </p>
        <StoryList
          items={[
            { title: "21ème nuit", description: "Commencez dès cette nuit." },
            { title: "23ème nuit", description: "Intensifiez vos actes." },
            { title: "25ème nuit", description: "Augmentez encore." },
            { title: "27ème nuit", description: "La plus mentionnée — maximisez votre effort." },
            { title: "29ème nuit", description: "Dernière chance des nuits impaires." },
          ]}
        />
        <StoryCallout variant="tip">
          Sa date est cachée pour que vous cherchiez avec sincérité{" "}
          <strong>toutes les nuits</strong> — pas juste le 27.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={3} title="La Dua d'Aïsha — apprenez-la par cœur">
        <div className="rounded-2xl border border-brand-gold-400/25 bg-brand-panel-elevated/30 px-5 py-4 space-y-3">
          <p className="text-center text-xl font-bold text-brand-gold-300 tracking-wide">
            اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
          </p>
          <p className="text-center text-sm italic text-brand-mist">
            Allahumma innaka ʿafuwwun tuhibbu al-ʿafwa faʿfu ʿannī
          </p>
          <p className="text-center text-sm text-brand-soft border-t border-brand-line/20 pt-3">
            &quot;Ô Allah, Tu es Celui qui pardonne et Tu aimes le pardon,
            alors pardonne-moi.&quot;
          </p>
        </div>
        <p className="text-sm text-brand-mist">
          Aïsha (ra) a demandé au Prophète ﷺ quelle dua faire pendant Laylatul
          Qadr. Il lui a appris celle-ci. Répétez-la encore et encore.
        </p>
      </StoryScene>
    </StoryPage>
  );
}
