import type { Metadata } from "next";
import { FileText } from "lucide-react";

import { LegalDoc } from "@/components/layout/legal-doc";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Conditions d’utilisation",
  description:
    "Conditions générales d’utilisation de GoMuslimLife.",
  path: "/conditions",
});

export default function ConditionsPage() {
  return (
    <LegalDoc
      eyebrow="Conditions"
      title="Conditions d’utilisation"
      intro="En utilisant GoMuslimLife, vous acceptez les règles ci-dessous. Le service vise à soutenir une pratique éclairée, dans le respect de l’éthique musulmane."
      updated="16 août 2026"
      icon={FileText}
      sections={[
        {
          title: "Acceptation",
          body: (
            <p>
              L’accès et l’utilisation de GoMuslimLife (le « Service »)
              impliquent l’acceptation pleine et entière des présentes
              conditions. Si vous n’êtes pas d’accord, veuillez ne pas utiliser
              le Service.
            </p>
          ),
        },
        {
          title: "Objet du Service",
          body: (
            <p>
              GoMuslimLife propose des outils éducatifs et pratiques :
              horaires de prière, modules de savoir, histoires, Coran (Sawra),
              invocations, questions/réponses sourcées, et fonctionnalités
              associées. Le contenu est fourni à titre{" "}
              <strong>informatif et pédagogique</strong>.
            </p>
          ),
        },
        {
          title: "Contenu religieux",
          body: (
            <>
              <p>
                Nous nous efforçons de nous appuyer sur des sources
                reconnues (Coran, Sunna, avis de savants). Toutefois :
              </p>
              <ul>
                <li>
                  Le Service <strong>ne remplace pas</strong> l’avis d’un savant
                  compétent pour une situation personnelle.
                </li>
                <li>
                  Les horaires de prière résultent de calculs astronomiques et
                  peuvent différer légèrement des horaires locaux d’une
                  mosquée.
                </li>
                <li>
                  Toute erreur signalée sera examinée de bonne foi.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "Utilisation acceptable",
          body: (
            <ul>
              <li>Usage personnel, non commercial sans autorisation</li>
              <li>Respect d’autrui : pas de contenu haineux, illégal ou trompeur</li>
              <li>Pas d’accès non autorisé, scraping abusif ou perturbation du Service</li>
              <li>Pas d’usurpation d’identité ni de contournement de sécurité</li>
            </ul>
          ),
        },
        {
          title: "Compte utilisateur",
          body: (
            <p>
              Si un compte est proposé, vous êtes responsable de la
              confidentialité de vos identifiants et des activités réalisées
              sous votre compte. Nous pouvons suspendre un compte en cas
              d’usage contraire aux présentes conditions.
            </p>
          ),
        },
        {
          title: "Propriété intellectuelle",
          body: (
            <p>
              L’interface, la marque GoMuslimLife et les contenus originaux
              restent protégés. Les textes sacrés, récitations et données
              tierces restent la propriété de leurs ayants droit ; voir la page{" "}
              <a href="/sources">Sources</a> pour les crédits.
            </p>
          ),
        },
        {
          title: "Limitation de responsabilité",
          body: (
            <p>
              Le Service est fourni « en l’état ». Dans les limites permises par
              la loi, GoMuslimLife ne saurait être tenu responsable des
              dommages indirects, pertes de données ou décisions prises sur la
              seule base du contenu proposé. Vérifiez toujours les informations
              critiques (horaires, jugements religieux) auprès de sources
              locales fiables.
            </p>
          ),
        },
        {
          title: "Disponibilité",
          body: (
            <p>
              Nous visons une disponibilité continue, sans garantie d’absence
              d’interruption. Des maintenances ou pannes peuvent survenir.
            </p>
          ),
        },
        {
          title: "Droit applicable",
          body: (
            <p>
              Les présentes conditions sont régies par le droit français. Tout
              litige relevant des tribunaux compétents en France, sous réserve
              des dispositions impératives de protection du consommateur.
            </p>
          ),
        },
        {
          title: "Contact & éditeur",
          body: (
            <p>
              GoMuslimLife et le site frère{" "}
              <a
                href="https://sawra.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sawra
              </a>{" "}
              sont édités par{" "}
              <a
                href="https://sofianeweb.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                SofianeWeb
              </a>{" "}
              (sofianeweb.fr). Pour toute question, réclamation ou demande
              (y compris suppression de données), contactez{" "}
              <a href="mailto:contact@sofianeweb.fr">contact@sofianeweb.fr</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
