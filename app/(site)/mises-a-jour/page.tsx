import type { Metadata } from "next";

import { UpdatesView } from "@/components/updates/updates-view";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Mises à jour",
  description:
    "GoMuslimLife 2.0 — journal des versions : nouvel accueil, horaires, savoir, Sawra et plus.",
  path: "/mises-a-jour",
});

export default function MisesAJourPage() {
  return <UpdatesView />;
}
