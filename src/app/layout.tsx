import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { BackgroundOrbs } from "@/components/layout/BackgroundOrbs";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { profile } from "@/content/profile";
import { labels, site } from "@/content/site";
import "./globals.css";

const display = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const body = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${profile.fullName}` },
  description: site.description,
  applicationName: profile.fullName,
  authors: [{ name: profile.fullName, url: site.url }],
  creator: profile.fullName,
  alternates: { canonical: "/" },
  // Phone numbers are already links; stop iOS from styling other digit runs (dates).
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.fullName,
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0e" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: next-themes sets the theme class before React hydrates.
    <html
      lang={site.locale}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      {/* relative: the page-length orb layer is positioned against the body. */}
      <body className="relative min-h-dvh">
        {/* Without JS, reveal targets would stay at their initial opacity: 0. */}
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-accent-foreground"
        >
          {labels.skipToContent}
        </a>
        <ThemeProvider>
          <MotionProvider>
            <BackgroundOrbs />
            <Navbar />
            <main id="main" tabIndex={-1} className="outline-none">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
            <FloatingWhatsApp />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
