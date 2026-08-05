import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative pt-6 md:pt-2">
      <div className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-64 overflow-hidden">
        <div className="absolute left-0 top-0 h-56 w-[28rem] rounded-full bg-brand-warm/[0.07] blur-3xl md:left-1/4" />
      </div>

      <p className="home-reveal text-sm font-medium text-brand-soft">
        Assalamou alaykoum ·{" "}
        <span className="font-arabic text-base text-brand-mist">السلام عليكم</span>
      </p>

      <h1 className="home-reveal home-reveal-delay-1 mt-3 text-[2.5rem] font-extrabold leading-[0.95] tracking-tight text-brand-pearl sm:text-5xl lg:text-6xl">
        GoMuslimLife
      </h1>

      <p className="home-reveal home-reveal-delay-2 mt-4 max-w-lg text-base text-brand-mist md:text-lg">
        Apprends, écoute et pratique — Coran, prière et savoir, au même endroit.
      </p>

      <div className="home-reveal home-reveal-delay-3 mt-6 flex flex-wrap items-center gap-3">
        <Button asChild size="lg">
          <Link href="/coran">
            <BookOpen className="size-4" />
            Ouvrir le Coran
            <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <Link href="/priere">Voir la prière</Link>
        </Button>
      </div>
    </section>
  );
}
