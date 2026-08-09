import {
  Droplets,
  GraduationCap,
  Heart,
  Home,
  MoreHorizontal,
  Scale,
  Settings,
  User,
  type LucideIcon,
} from "lucide-react";

export type NavId = "home" | "savoir" | "plus";

export type NavItem = {
  id: NavId;
  label: string;
  href: string;
  icon: LucideIcon;
  /** Extra path prefixes that keep this tab active */
  match?: string[];
};

export const PRIMARY_NAV: NavItem[] = [
  { id: "home", label: "Accueil", href: "/", icon: Home },
  {
    id: "savoir",
    label: "Savoir",
    href: "/savoir",
    icon: GraduationCap,
    match: ["/apprendre", "/quiz", "/bibliotheque", "/histoires"],
  },
  { id: "plus", label: "Plus", href: "/plus", icon: MoreHorizontal },
];

export type MoreLink = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export const MORE_LINKS: MoreLink[] = [
  {
    label: "Purification",
    href: "/purification",
    description: "Ablutions et hygiène",
    icon: Droplets,
  },
  {
    label: "Jeûne",
    href: "/jeune",
    description: "Ramadan et jeûne",
    icon: Heart,
  },
  {
    label: "Zakat",
    href: "/zakat",
    description: "Calcul et règles",
    icon: Scale,
  },
  {
    label: "Profil",
    href: "/profil",
    description: "Compte et progression",
    icon: User,
  },
  {
    label: "Réglages",
    href: "/settings",
    description: "Préférences",
    icon: Settings,
  },
  {
    label: "Design system",
    href: "/design-system",
    description: "Tokens et composants",
    icon: GraduationCap,
  },
];

export function isNavActive(pathname: string, item: NavItem): boolean {
  if (item.href === "/") {
    return pathname === "/";
  }
  if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
    return true;
  }
  return Boolean(
    item.match?.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
    )
  );
}
