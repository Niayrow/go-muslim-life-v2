export function VerseSection() {
  return (
    <section className="brand-card rounded-[1.75rem] px-5 py-7 text-center md:px-8 md:py-9">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold-400">
        Verset du jour
      </p>
      <p
        dir="rtl"
        className="font-arabic text-2xl leading-relaxed text-brand-pearl md:text-3xl"
      >
        إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا
      </p>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-brand-mist">
        « Certes, avec la difficulté est une facilité. »
      </p>
      <p className="mt-3 text-xs text-brand-steel-400">Ash-Sharh · 94:6</p>
    </section>
  );
}
