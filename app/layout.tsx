import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "The OCIP Co. | Orange County Pavers, Hardscape & Pool Decks",
  description:
    "Orange County interlocking pavers, pool decks, driveways, and outdoor living. Speculative Novenworks redesign of theocip.com — not an official OCIP site.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased bg-ink text-cream">{children}</body>
    </html>
  );
}
