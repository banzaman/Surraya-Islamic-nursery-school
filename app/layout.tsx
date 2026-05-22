import type { Metadata } from "next";
import { Navbar }  from "@/components/layout/Navbar";
import { Footer }  from "@/components/layout/Footer";
import { SITE }    from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE.name}`,
    default:  `${SITE.name} — ${SITE.tagline}`,
  },
  description:  SITE.description,
  metadataBase: new URL(SITE.url),
  keywords: [
    "Islamic nursery school Kampala",
    "Muslim early years education Uganda",
    "EYFS nursery Kampala",
    "Islamic school Uganda",
    "Surraya nursery",
    "faith-based education Uganda",
  ],
  authors:  [{ name: SITE.name, url: SITE.url }],
  creator:  SITE.name,
  openGraph: {
    type:        "website",
    siteName:    SITE.name,
    title:       `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url:         SITE.url,
    locale:      "en_UG",
  },
  twitter: {
    card:        "summary_large_image",
    title:       `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index:           true,
    follow:          true,
    googleBot: {
      index:              true,
      follow:             true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon:     "/logo.png",
    apple:    "/logo.png",
    shortcut: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" data-scroll-behavior="smooth">
      <body className="antialiased min-h-full flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-1" style={{ paddingTop: "68px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
