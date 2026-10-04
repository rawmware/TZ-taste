//tz-meta {"id":"nextjs-layout","title":"Root layout","category":"Starter","file":"starters/nextjs/app/layout.tsx","tags":["nextjs","layout"],"description":"Root layout with editorial-serif font pairing (Fraunces, Newsreader, Space Mono).","dnas":["editorial-serif"]}

import type { Metadata } from "next";
import { Fraunces, Newsreader, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Newsreader({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Crumb & Craft — Sourdough Bakery",
  description:
    "Long-fermented sourdough baked six mornings a week in Kittery, Maine. See today's bake and order ahead for pickup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
