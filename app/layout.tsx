import type { Metadata } from "next";
import { Amiri, Outfit } from "next/font/google";
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

export const metadata: Metadata = {
  title: "GoMuslimLife 2.0",
  description: "Ta pratique musulmane, au quotidien",
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
      <body className="relative z-[1] min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
