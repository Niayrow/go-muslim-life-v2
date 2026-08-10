"use client";

import { Gift } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function FitrContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={6}
        total={7}
        chip="Ramadan"
        icon={Gift}
        title="Zakat al-Fitr"
        intro="La Zakat al-Fitr est une aumône spéciale liée à la fin du Ramadan. Elle diffère de la Zakat al-Mal sur plusieurs points essentiels."
      />

      <StoryScene scene={1} title="Zakat al-Mal vs Zakat al-Fitr">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="text-[10px] font-bold tracking-widest text-brand-gold-300 uppercase">
              Zakat al-Mal
            </p>
            <StoryList
              items={[
                { title: "Sur la richesse accumulée" },
                { title: "Conditionnelle (Nisab + Hawl)" },
                { title: "2,5 % de la richesse nette" },
                { title: "Payable toute l'année" },
              ]}
            />
          </div>
          <div className="space-y-3">
            <p className="text-[10px] font-bold tracking-widest text-brand-gold-300 uppercase">
              Zakat al-Fitr
            </p>
            <StoryList
              items={[
                { title: "Sur la personne (pas les biens)" },
                { title: "Obligatoire pour tout musulman capable" },
                { title: "Montant fixe en nourriture ou équivalent" },
                { title: "Uniquement à la fin du Ramadan" },
              ]}
            />
          </div>
        </div>
      </StoryScene>

      <StoryScene scene={2} title="Infos Clés">
        <StoryList
          items={[
            {
              title: "Qui est concerné ?",
              description:
                "Tout musulman qui peut subvenir à ses besoins ce jour-là. Elle est due pour soi-même et pour chaque personne à sa charge (conjoint, enfants, etc.).",
            },
            {
              title: "Quel montant ?",
              description:
                "Environ un Sa' de nourriture de base (riz, orge, dattes…), soit environ 2,5 kg par personne. En valeur monétaire, cela représente environ 7 € par personne (variable selon les pays et associations).",
            },
            {
              title: "À qui la donner ?",
              description:
                "Principalement aux pauvres et indigents, afin qu'ils puissent célébrer l'Aïd dignement.",
            },
          ]}
        />
      </StoryScene>

      <StoryScene scene={3} title="Le Timing est Crucial">
        <StoryCallout variant="warn" title="Ne pas la donner après l'Aïd">
          La Zakat al-Fitr doit être donnée{" "}
          <strong>avant la prière de l&apos;Aïd al-Fitr</strong>. Si vous la
          donnez après, elle est acceptée comme Sadaqa (aumône volontaire)
          mais ne remplit plus son rôle de Zakat. La période optimale est les
          deux ou trois jours précédant l&apos;Aïd.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
