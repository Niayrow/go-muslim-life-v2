import Image from "next/image";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Taille visuelle du mark (px CSS). */
  size?: number;
  priority?: boolean;
};

/** Mark GoMuslimLife — variante optimisée de `public/gml.png`. */
export function BrandLogo({
  className,
  size = 32,
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="GoMuslimLife"
      width={size}
      height={size}
      priority={priority}
      className={cn("rounded-full object-cover", className)}
      style={{ width: size, height: size }}
    />
  );
}
