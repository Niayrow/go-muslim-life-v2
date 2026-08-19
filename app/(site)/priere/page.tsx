import type { Metadata } from "next";

import { PrayerTimesView } from "@/components/prayer/prayer-times-view";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Horaires de prière",
  description:
    "Horaires de prière du jour, prochaine prière et compte à rebours. Ville, méthode de calcul (UOIF…) et vue semaine.",
  path: "/priere",
});

export default function PrierePage() {
  return <PrayerTimesView />;
}
