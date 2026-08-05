import type { Metadata } from "next";

import { PrayerTimesView } from "@/components/prayer/prayer-times-view";

export const metadata: Metadata = {
  title: "Prière — GoMuslimLife",
  description: "Horaires de prière du jour",
};

export default function PrierePage() {
  return <PrayerTimesView />;
}
