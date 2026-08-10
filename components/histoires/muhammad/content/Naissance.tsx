"use client";

import { Star } from "lucide-react";

import {
  SagaBeat,
  SagaHero,
  SagaNote,
  SagaPage,
  SagaQuote,
} from "@/components/histoires/saga-ui";

export function NaissanceContent() {
  return (
    <SagaPage>
      <SagaHero
        step={1}
        era="vers 570 – 6 ans"
        chip="Année de l'Éléphant"
        icon={Star}
        title="Naissance et première enfance"
        intro="Dans le clan des Banu Hâchim, à La Mecque, naît un orphelin dont le destin changera le monde."
      />

      <SagaBeat beat={1} title="La Mecque, vers 570">
        <p>
          Muhammad ibn Abdullah ibn Abd al-Muttalib ibn Hâchim naît à La Mecque,
          dans le clan des Banu Hâchim de la tribu des Quraych, vers 570 de
          l&apos;ère chrétienne — l&apos;année appelée{" "}
          <strong className="text-brand-pearl">« Année de l&apos;Éléphant »</strong>.
        </p>
        <SagaNote title="Pourquoi ce nom ?">
          Abraha, roi du Yémen, aurait tenté d&apos;attaquer la Kaaba avec des
          éléphants et aurait échoué. La tradition retient cet événement comme
          le marqueur de l&apos;année de naissance.
        </SagaNote>
      </SagaBeat>

      <SagaBeat beat={2} title="Un père déjà parti">
        <p>
          Son père, Abdullah, meurt avant sa naissance — ou peu après, selon
          certaines versions — lors d&apos;un voyage commercial. Sa mère,{" "}
          <strong className="text-brand-pearl">Amina bint Wahb</strong>,
          l&apos;élève seule.
        </p>
      </SagaBeat>

      <SagaBeat beat={3} title="Halîma et le désert">
        <p>
          Selon la coutume arabe de l&apos;époque, l&apos;enfant est confié dès
          les premiers mois à une nourrice bédouine,{" "}
          <strong className="text-brand-pearl">Halîma as-Sa&apos;diyya</strong>,
          de la tribu des Banu Sa&apos;d, pour qu&apos;il grandisse dans le
          désert — air plus sain, langue pure.
        </p>
      </SagaBeat>

      <SagaBeat beat={4} title="L'ouverture de la poitrine">
        <p>
          C&apos;est pendant cette période que la tradition rapporte
          l&apos;événement de{" "}
          <strong className="text-brand-pearl">
            « l&apos;ouverture de la poitrine » (Sharh as-Sadr)
          </strong>{" "}
          :
        </p>
        <SagaQuote>
          Deux anges auraient ouvert sa poitrine, retiré un caillot noir —
          symbole du mal — et l&apos;auraient lavée avec de l&apos;eau de
          Zamzam avant de la refermer.
        </SagaQuote>
      </SagaBeat>

      <SagaBeat beat={5} title="Orphelin de père et de mère">
        <p>
          À environ 6 ans, sa mère Amina meurt à Al-Abwâ&apos; — entre La Mecque
          et Yathrib (Médine) — lors d&apos;un voyage de retour.
        </p>
        <p className="font-medium text-brand-pearl">
          Muhammad devient orphelin de père et de mère.
        </p>
      </SagaBeat>
    </SagaPage>
  );
}
