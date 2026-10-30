import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { BackgroundOrbs } from "@/components/layout/BackgroundOrbs";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { profile } from "@/content/profile";
import { site } from "@/content/site";
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
  authors: [{ name: profile.fullName, url: site.url }],
  alternates: { canonical: "/" },
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
      <body className="min-h-dvh">
        <ThemeProvider>
          <BackgroundOrbs />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
