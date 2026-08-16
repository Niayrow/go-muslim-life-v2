import {
  GraduationCap,
  Home,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type NavId = "home" | "savoir" | "settings";

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
    match: [
      "/apprendre",
      "/quiz",
      "/bibliotheque",
      "/histoires",
      "/invocations",
      "/questions",
    ],
  },
  { id: "settings", label: "Réglages", href: "/settings", icon: Settings },
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
