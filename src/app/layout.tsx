import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MedivetJsonLd } from "@/components/medivet/json-ld";
import { getMedivetSiteUrl } from "@/lib/medivet/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getMedivetSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Medivet — Trusted Veterinary Care & 24/7 Emergency",
  description:
    "Compassionate vets for dogs & cats. Surgery, vaccines, dental & preventive care. 24/7 emergency veterinary support. Book a consultation online.",
  keywords: [
    "veterinary services",
    "veterinary clinic",
    "animal hospital",
    "vet near me",
    "emergency vet",
    "pet surgery",
    "dog vaccinations",
    "cat dental care",
    "preventive pet care",
    "pet wellness exams",
  ],
  openGraph: {
    title: "Medivet — Trusted Veterinary Care & 24/7 Emergency",
    description:
      "Family-friendly care with round-the-clock emergencies. Book a consultation or reach our 24/7 line.",
    url: siteUrl,
    siteName: "Medivet",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medivet — Trusted Veterinary Care & 24/7 Emergency",
    description:
      "Family-friendly care with round-the-clock emergencies. Book a consultation online.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <MedivetJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
