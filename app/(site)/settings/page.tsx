import type { Metadata } from "next";

import { SettingsView } from "@/components/settings/settings-view";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Réglages",
  description: "Ville, méthode de calcul et affichage des horaires de prière.",
  path: "/settings",
  noIndex: true,
});

export default function Page() {
  return <SettingsView />;
}
