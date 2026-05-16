import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE.name}`,
    default:  `${SITE.name} — ${SITE.tagline}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    type:        "website",
    siteName:    SITE.name,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
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
