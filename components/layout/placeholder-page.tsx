type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-5 py-10 md:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold-400">
        Bientôt
      </p>
      <h1 className="text-3xl font-extrabold tracking-tight text-brand-pearl">
        {title}
      </h1>
      <p className="max-w-md text-brand-mist">{description}</p>
      <div className="glass-panel mt-4 rounded-2xl p-5 text-sm text-brand-soft">
        Contenu porté depuis GoMuslimLife 1.9 dans une prochaine étape.
      </div>
    </main>
  );
}
