import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteAltBilgi } from "@/components/SiteAltBilgi";
import { SiteBaslik } from "@/components/SiteBaslik";
import { site } from "@/data/icerik";
import "./globals.css";

// scripts/build-fonts.sh ile üretilir: 400–700 ağırlık, Latin + Türkçe alt küme.
const manrope = localFont({
  src: "./fonts/Manrope.woff2",
  weight: "400 700",
  variable: "--font-manrope",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMono.woff2",
  weight: "400 700",
  variable: "--font-geist-mono",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["ui-monospace", "Menlo", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.ad,
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.dil} className={`${manrope.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-zemin text-metin antialiased">
        <SiteBaslik />
        <main>{children}</main>
        <SiteAltBilgi />
      </body>
    </html>
  );
}
