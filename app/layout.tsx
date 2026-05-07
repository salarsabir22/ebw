import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Quicksand } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  title: {
    default: `${site.name} | In-home pediatric speech therapy`,
    template: `%s | ${site.name}`,
  },
  description:
    "In-home pediatric speech therapy in Northwest Houston with Verda Butt, M.S., CCC-SLP—play-based care, bilingual support, evaluations, and parent coaching. Opening a world of language for those with special talents.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description:
      "In-home pediatric speech therapy in Northwest Houston and The Woodlands.",
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
      className={cn("h-full", plusJakarta.variable, quicksand.variable)}
    >
      <body
        className={cn(
          "min-h-full flex flex-col antialiased text-[var(--ebw-ink)]",
        )}
      >
        <JsonLd />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9WEDJX7H46"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9WEDJX7H46');
          `}
        </Script>
      </body>
    </html>
  );
}
