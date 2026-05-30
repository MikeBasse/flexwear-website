import type { Metadata, Viewport } from "next";
import { Fraunces, Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const sans = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...buildMetadata({
    title: site.name,
    description: site.description,
    path: "/",
  }),
  icons: {
    icon: "/logo-badge.png",
    apple: "/logo-badge.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#16181D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    slogan: site.tagline,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PG",
    },
    identifier: site.registrationNumber,
  };

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
