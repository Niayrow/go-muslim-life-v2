import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full rounded-xl border border-brand-line bg-brand-panel/80 px-4 py-2 text-sm text-brand-pearl shadow-sm transition-colors",
        "placeholder:text-brand-mist/70",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-400/50 focus-visible:border-brand-gold-400/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-brand-pearl",
        className
      )}
      {...props}
    />
  );
}

export { Input };
