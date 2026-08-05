import Link from "next/link";

import { MORE_LINKS } from "@/components/layout/nav-items";

export default function PlusPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-5 py-10 md:px-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-brand-pearl">
          Plus
        </h1>
        <p className="text-brand-mist">
          Modules secondaires et compte.
        </p>
      </header>

      <ul className="space-y-2">
        {MORE_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className="glass-panel-interactive flex items-center gap-3 rounded-2xl px-4 py-3"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-warm/10 text-brand-warm">
                  <Icon className="size-4" strokeWidth={2.2} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-brand-pearl">
                    {link.label}
                  </span>
                  <span className="block text-xs text-brand-mist">
                    {link.description}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
