"use client";

import { MapPin } from "lucide-react";

import {
  SagaBeat,
  SagaHero,
  SagaNote,
  SagaPage,
  SagaQuote,
} from "@/components/histoires/saga-ui";

export function HegireContent() {
  return (
    <SagaPage>
      <SagaHero
        step={6}
        era="622 – 624"
        chip="An 1 de l'Hégire"
        icon={MapPin}
        title="L'Hégire et la fondation de Médine"
        intro="Une fuite secrète devient le début d’un calendrier — et d’une cité fraternelle."
      />

      <SagaBeat beat={1} title="La nuit de la fuite">
        <p>
          En 622, face aux menaces d&apos;assassinat, Muhammad et Abû Bakr
          quittent secrètement La Mecque pour Yathrib — qui prendra le nom de{" "}
          <strong className="text-brand-pearl">Médine</strong>, « la Ville ».
        </p>
        <SagaQuote>
          Cet événement, l&apos;Hégire, marque le début du calendrier islamique.
        </SagaQuote>
      </SagaBeat>

      <SagaBeat beat={2} title="La Constitution de Médine">
        <p>
          À Médine, Muhammad conclut un pacte avec les tribus arabes (Aws et
          Khazraj) et les communautés juives — la{" "}
          <strong className="text-brand-pearl">
            Constitution de Médine
          </strong>
          .
        </p>
      </SagaBeat>

      <SagaBeat beat={3} title="Mosquée et fraternité">
        <p>
          Il construit la première mosquée et organise la fraternité entre les{" "}
          <strong className="text-brand-pearl">Muhâjirûn</strong> (émigrés de
          La Mecque) et les{" "}
          <strong className="text-brand-pearl">Ansâr</strong> (auxiliaires de
          Médine).
        </p>
        <SagaNote>
          Une communauté naît non seulement par la foi, mais par le partage du
          foyer, du pain et de la protection mutuelle.
        </SagaNote>
      </SagaBeat>
    </SagaPage>
  );
}
