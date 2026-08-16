import type { Metadata, Viewport } from "next";
import { Amiri, Outfit } from "next/font/google";

import { PwaRegister } from "@/components/pwa-register";

import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://gomuslimlife.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GoMuslimLife",
    template: "%s · GoMuslimLife",
  },
  description: "Ta pratique musulmane, au quotidien",
  applicationName: "GoMuslimLife",
  keywords: [
    "Islam",
    "Prière",
    "Coran",
    "Adhkar",
    "GoMuslimLife",
    "Horaires de prière",
  ],
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "GoMuslimLife",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "GoMuslimLife",
    title: "GoMuslimLife",
    description: "Ta pratique musulmane, au quotidien",
    images: [
      {
        url: "/logo.png",
        width: 256,
        height: 256,
        alt: "GoMuslimLife",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "GoMuslimLife",
    description: "Ta pratique musulmane, au quotidien",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#07111d" },
    { media: "(prefers-color-scheme: dark)", color: "#07111d" },
  ],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${amiri.variable} h-full antialiased`}
    >
      <body className="relative z-[1] flex min-h-full flex-col font-sans">
        {children}
        <PwaRegister />
      </body>
    </html>
  );
}
