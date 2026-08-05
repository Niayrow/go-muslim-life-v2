import { HomeHero } from "@/components/home/home-hero";
import { ModulesSection } from "@/components/home/modules-section";
import { PrayerStrip } from "@/components/home/prayer-strip";
import { QuickAccess } from "@/components/home/quick-access";
import { VerseSection } from "@/components/home/verse-section";

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pb-10 md:px-8 md:pb-16 lg:px-10">
      {/* Desktop: hero + prière côte à côte / Mobile: stack */}
      <div className="grid items-end gap-6 pt-6 md:grid-cols-[1.35fr_1fr] md:gap-8 md:pt-4 lg:gap-10">
        <HomeHero />
        <div className="md:pb-1">
          <PrayerStrip variant="card" />
        </div>
      </div>

      <div className="mt-10 space-y-10 md:mt-14 md:space-y-12">
        <QuickAccess />
        <ModulesSection />
        <VerseSection />
      </div>
    </main>
  );
}
