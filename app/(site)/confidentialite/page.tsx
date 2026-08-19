import type { Metadata } from "next";
import { Shield } from "lucide-react";

import { LegalDoc } from "@/components/layout/legal-doc";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Confidentialité",
  description:
    "Politique de confidentialité de GoMuslimLife — protection de vos données personnelles.",
  path: "/confidentialite",
});

export default function ConfidentialitePage() {
  return (
    <LegalDoc
      eyebrow="Vie privée"
      title="Politique de confidentialité"
      intro="Votre vie privée est une amanah (dépôt de confiance). Nous collectons le minimum nécessaire au fonctionnement du service."
      updated="16 août 2026"
      icon={Shield}
      sections={[
        {
          title: "Qui sommes-nous ?",
          body: (
            <p>
              GoMuslimLife est une application web éducative destinée à
              accompagner la pratique musulmane quotidienne (prière, savoir,
              Coran, invocations, questions/réponses).
            </p>
          ),
        },
        {
          title: "Données collectées",
          body: (
            <>
              <p>Selon l’usage, nous pouvons traiter :</p>
              <ul>
                <li>
                  <strong>Compte</strong> — identifiant, e-mail, profil (si vous
                  créez un compte).
                </li>
                <li>
                  <strong>Préférences</strong> — réglages locaux (ville, méthode
                  de calcul, thème) stockés sur votre appareil.
                </li>
                <li>
                  <strong>Progression</strong> — favoris, historique ou avancement
                  liés à votre compte, le cas échéant.
                </li>
                <li>
                  <strong>Technique</strong> — journaux techniques limités
                  (erreurs, performance) pour assurer la stabilité du service.
                </li>
              </ul>
              <p>
                La localisation précise n’est utilisée que si vous l’autorisez
                (ex. horaires de prière). Vous pouvez saisir une ville
                manuellement.
              </p>
            </>
          ),
        },
        {
          title: "Finalités",
          body: (
            <ul>
              <li>Fournir et améliorer les fonctionnalités du site</li>
              <li>Personnaliser horaires, contenus et préférences</li>
              <li>Assurer la sécurité et prévenir les abus</li>
              <li>Répondre à vos demandes de support</li>
            </ul>
          ),
        },
        {
          title: "Base légale & conservation",
          body: (
            <p>
              Le traitement repose sur l’exécution du service que vous
              demandez, votre consentement (cookies / localisation) et, le cas
              échéant, notre intérêt légitime à sécuriser la plateforme. Les
              données sont conservées le temps nécessaire aux finalités, puis
              supprimées ou anonymisées.
            </p>
          ),
        },
        {
          title: "Partage",
          body: (
            <p>
              Nous ne vendons pas vos données. Des prestataires techniques
              (hébergement, analytics agrégés) peuvent y accéder strictement
              pour opérer le service, sous obligations de confidentialité.
            </p>
          ),
        },
        {
          title: "Vos droits",
          body: (
            <p>
              Conformément au RGPD, vous disposez d’un droit d’accès,
              rectification, effacement, limitation, portabilité et opposition
              (y compris toute demande de suppression de compte ou de données).
              Pour exercer ces droits ou poser une question, écrivez à{" "}
              <a href="mailto:contact@sofianeweb.fr">contact@sofianeweb.fr</a>.
              Vous pouvez aussi introduire une réclamation auprès de la CNIL.
            </p>
          ),
        },
        {
          title: "Cookies & stockage local",
          body: (
            <p>
              Le site utilise le stockage local du navigateur pour mémoriser vos
              réglages. Des cookies ou outils d’audience peuvent être utilisés
              de façon agrégée ; vous pouvez les refuser via les paramètres de
              votre navigateur lorsque cela s’applique.
            </p>
          ),
        },
        {
          title: "Modifications",
          body: (
            <p>
              Cette politique peut évoluer. La date de mise à jour figurera en
              tête de page. L’usage continu du service après publication vaut
              prise de connaissance des changements essentiels.
            </p>
          ),
        },
      ]}
    />
  );
}
