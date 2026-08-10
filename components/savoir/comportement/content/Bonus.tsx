"use client";

import { Sparkles } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function BonusContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={6}
        total={6}
        chip="Histoires"
        icon={Sparkles}
        title="Histoires d'Or"
        intro="Trois moments où le caractère du Prophète (ﷺ) a ébloui le monde."
      />

      <StoryScene scene={1} title="La Conquête de La Mecque">
        <p>
          En l&apos;an 8 de l&apos;Hégire, le Prophète (ﷺ) entre à La Mecque
          victorieux à la tête de 10 000 hommes. La ville qui l&apos;avait
          persécuté, chassé, et tenté d&apos;assassiner pendant 13 ans est
          désormais à ses pieds.
        </p>
        <p>
          Devant les Mecquois tremblants qui attendaient leur sort, il déclara
          simplement :{" "}
          <span className="font-bold text-brand-warm">
            &laquo;Allez ! Vous êtes libres.&raquo;
          </span>
        </p>
        <StoryCallout variant="quote">
          La victoire suprême n&apos;appelle pas la vengeance. Elle appelle la
          magnanimité. Le plus fort est celui qui pardonne quand il pourrait
          punir.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={2} title="Le Chat Muezza">
        <p>
          Un jour, l&apos;heure de la prière arriva et le Prophète (ﷺ) devait
          mettre son manteau. Il constata que son chat Muezza dormait sur
          la manche.
        </p>
        <p>
          Plutôt que de déranger l&apos;animal, il{" "}
          <span className="font-bold text-brand-warm">
            coupa le bout de la manche
          </span>{" "}
          pour ne pas le réveiller, et s&apos;en alla.
        </p>
        <StoryCallout variant="quote">
          La douceur envers les créatures faibles — animaux, enfants, personnes
          âgées — est le signe d&apos;un grand cœur. La vraie force ne
          s&apos;exerce jamais contre plus faible que soi.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={3} title="Le Troupeau d'une Vieille Femme">
        <p>
          Une vieille femme croisait régulièrement le Prophète (ﷺ) et lui
          déversait dessus toutes ses critiques et rancœurs. Un jour, il ne la
          vit plus. Il s&apos;enquit d&apos;elle — on lui dit qu&apos;elle
          était malade.
        </p>
        <p>
          Il lui rendit visite. Elle, stupéfaite, lui demanda pourquoi. Il
          répondit simplement :{" "}
          <i>
            &laquo;Tu es ma voisine, et le voisin a des droits.&raquo;
          </i>{" "}
          Elle embrassa l&apos;Islam ce jour-là.
        </p>
        <StoryCallout variant="quote">
          Votre comportement est votre da&apos;wa (invitation). Vous n&apos;avez
          pas besoin de discours. La cohérence, la bienveillance, et la patience
          parlent plus fort que n&apos;importe quel argument.
        </StoryCallout>
      </StoryScene>

      <div className="space-y-3 border-t border-brand-line/25 pt-8 text-center">
        <p className="text-[10px] font-bold tracking-widest text-brand-steel-500 uppercase">
          Fin du Module Comportement
        </p>
        <p className="inline-flex items-center gap-2 text-sm text-brand-warm">
          <Sparkles className="size-4" /> Qu&apos;Allah nous accorde les nobles
          caractères.
        </p>
      </div>
    </StoryPage>
  );
}
