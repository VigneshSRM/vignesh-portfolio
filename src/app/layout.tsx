import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { portfolio } from "@/config/portfolio";
import "./globals.css";
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
export const metadata: Metadata = {
  title: portfolio.seo.title,
  description: portfolio.seo.description,
  ...(portfolio.siteUrl
    ? {
        metadataBase: new URL(portfolio.siteUrl),
        alternates: { canonical: portfolio.siteUrl },
      }
    : {}),
  openGraph: {
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    type: "website",
    locale: "en_IN",
    siteName: "Vignesh",
    ...(portfolio.siteUrl ? { url: portfolio.siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.seo.title,
    description: portfolio.seo.description,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structured = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: portfolio.name,
        jobTitle: portfolio.title,
        worksFor: { "@type": "Organization", name: portfolio.company },
        ...(portfolio.siteUrl ? { url: portfolio.siteUrl } : {}),
        ...(portfolio.linkedin ? { sameAs: [portfolio.linkedin] } : {}),
      },
      {
        "@type": "Organization",
        name: portfolio.company,
        foundingDate: "2025",
        ...(portfolio.companyUrl ? { url: portfolio.companyUrl } : {}),
      },
    ],
  };
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structured).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
