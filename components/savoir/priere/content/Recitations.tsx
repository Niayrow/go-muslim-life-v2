"use client";

import { MessageCircleQuestion } from "lucide-react";

import { RecitationCard } from "@/components/savoir/priere/recitation-card";
import {
  ChapterHero,
  StoryCallout,
  StoryPage,
  StoryScene,
} from "@/components/savoir/priere/story-ui";

const FATIHA_VERSES = [
  {
    text: "Bismillāhi r-raḥmāni r-raḥīm",
    trans: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
  },
  {
    text: "Al-ḥamdu lillāhi rabbi l-ʿālamīn",
    trans: "Louange à Allah, Seigneur de l'univers.",
  },
  {
    text: "Ar-raḥmāni r-raḥīm",
    trans: "Le Tout Miséricordieux, le Très Miséricordieux.",
  },
  {
    text: "Māliki yawmi d-dīn",
    trans: "Maître du Jour de la Rétribution.",
  },
  {
    text: "Iyyāka naʿbudu wa iyyāka nastaʿīn",
    trans:
      "C'est Toi seul que nous adorons, et c'est Toi seul dont nous implorons secours.",
  },
  {
    text: "Ihdinā ṣ-ṣirāṭa l-mustaqīm",
    trans: "Guide-nous dans le droit chemin.",
  },
  {
    text: "Ṣirāṭa lladhīna anʿamta ʿalayhim ghayri l-maghḍūbi ʿalayhim wa-lā ḍ-ḍāllīn",
    trans:
      "Le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés.",
  },
];

export function RecitationsContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={7}
        chip="Les Paroles Sacrées"
        icon={MessageCircleQuestion}
        title="Que doit-on dire ?"
        intro={
          <>
            La prière n&apos;est pas une méditation silencieuse, c&apos;est un
            dialogue. Voici les formules essentielles. Ne vous inquiétez pas
            pour l&apos;accent au début,{" "}
            <span className="font-bold text-brand-warm">
              c&apos;est l&apos;effort qui compte
            </span>
            .
          </>
        }
      />

      <StoryScene scene={1} title="La Fatiha (L'Ouverture)">
        <p className="text-xs font-bold tracking-widest text-brand-gold-300 uppercase">
          Pilier Obligatoire · Position Debout
        </p>
        <p className="text-brand-mist">
          À réciter entièrement à chaque unité (Rak&apos;at).
        </p>
        <div className="space-y-4 border-t border-brand-line/25 pt-4">
          {FATIHA_VERSES.map((v, i) => (
            <div key={v.text} className="space-y-1.5">
              <p className="font-serif text-lg font-bold text-brand-pearl md:text-xl">
                <span className="mr-3 font-sans text-sm font-bold text-brand-gold-400/60">
                  {i + 1}.
                </span>
                {v.text}
              </p>
              <p className="border-l-2 border-brand-gold-400/25 pl-4 text-sm text-brand-mist italic">
                {v.trans}
              </p>
            </div>
          ))}
          <p className="text-right text-sm font-bold text-brand-warm">
            &quot;Amine&quot;
          </p>
        </div>
      </StoryScene>

      <StoryScene scene={2} title="Invocations courtes">
        <div className="grid gap-4 md:grid-cols-2">
          <RecitationCard
            stepLabel="1. Inclinaison (Ruku)"
            title="Le Ruku"
            repetitions={3}
            arabic="سُبْحَانَ رَبِّيَ الْعَظِيمِ"
            phonetic="Subḥāna Rabbiya l-ʿAẓīm"
            translation="Gloire et pureté à mon Seigneur l'Immense."
          />
          <RecitationCard
            stepLabel="2. En se relevant"
            title="Le Rappel"
            repetitions={1}
            arabic="سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ - رَبَّنَا وَلَكَ الْحَمْدُ"
            phonetic="Samiʿ Allāhu liman ḥamidah. Rabbanā wa laka l-ḥamd."
            translation="Allah entend celui qui Le loue. Ô notre Seigneur, à Toi la louange."
          />
          <RecitationCard
            stepLabel="3. Front au sol (Sujud)"
            title="Le Sujud"
            repetitions={3}
            arabic="سُبْحَانَ رَبِّيَ الأَعْلَى"
            phonetic="Subḥāna Rabbiya l-Aʿlā"
            translation="Gloire et pureté à mon Seigneur le Très-Haut."
          />
          <RecitationCard
            stepLabel="4. Assis (Pause)"
            title="Le Pardon"
            repetitions={2}
            arabic="رَبِّ اغْفِرْ لِي"
            phonetic="Rabbighfir lī"
            translation="Ô Seigneur, pardonne-moi."
          />
        </div>
      </StoryScene>

      <StoryScene scene={3} title="Le Tashahhud Complet">
        <p className="text-brand-mist">
          À réciter en position assise (Index levé).
        </p>

        <StoryCallout variant="note" title="Partie 1 : Salutations">
          <p className="mb-2 text-[10px] font-bold tracking-wider text-brand-gold-400 uppercase">
            Milieu &amp; Fin de prière
          </p>
          <p className="mb-3 font-serif text-lg font-bold not-italic leading-relaxed text-brand-pearl md:text-xl">
            &quot;At-taḥiyyātu lillāhi wa ṣ-ṣalawātu wa ṭ-ṭayyibāt. As-salāmu
            ʿalayka ayyuhā n-nabiyyu wa raḥmatu llāhi wa barakātuh. As-salāmu
            ʿalaynā wa ʿalā ʿibādi llāhi ṣ-ṣāliḥīn. Ash-hadu an lā ilāha illā
            Allāh, wa ash-hadu anna Muḥammadan ʿabduhū wa rasūluh.&quot;
          </p>
          <p className="text-sm text-brand-mist italic">
            Les salutations sont pour Allah, ainsi que les prières et les
            bonnes œuvres. Que le salut soit sur toi, ô Prophète, ainsi que la
            miséricorde d&apos;Allah et Ses bénédictions. Que le salut soit sur
            nous et sur les serviteurs vertueux d&apos;Allah. Je témoigne
            qu&apos;il n&apos;y a de divinité qu&apos;Allah et que Muhammad est
            Son serviteur et messager.
          </p>
        </StoryCallout>

        <StoryCallout variant="note" title="Partie 2 : Prière sur le Prophète">
          <p className="mb-2 text-[10px] font-bold tracking-wider text-brand-gold-400 uppercase">
            Fin uniquement (avant le salam)
          </p>
          <p className="mb-3 font-serif text-lg font-bold not-italic leading-relaxed text-brand-pearl md:text-xl">
            &quot;Allāhumma ṣalli ʿalā Muḥammad wa ʿalā āli Muḥammad kamā
            ṣallayta ʿalā Ibrāhīm wa ʿalā āli Ibrāhīm, innaka Ḥamīdun Majīd.
            Allāhumma bārik ʿalā Muḥammad wa ʿalā āli Muḥammad kamā bārakta ʿalā
            Ibrāhīm wa ʿalā āli Ibrāhīm, innaka Ḥamīdun Majīd.&quot;
          </p>
          <p className="text-sm text-brand-mist italic">
            Ô Allah, prie sur Muhammad et sur la famille de Muhammad comme Tu
            as prié sur Ibrahim et sur la famille d&apos;Ibrahim, Tu es certes
            Digne de louange et de gloire. Ô Allah, bénis Muhammad et la
            famille de Muhammad comme Tu as béni Ibrahim et la famille
            d&apos;Ibrahim, Tu es certes Digne de louange et de gloire.
          </p>
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
