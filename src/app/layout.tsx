import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { JsonLd } from "@/components/shared/json-ld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/** Supports Lithuanian letters incl. ū */
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kefyrousai.lt"),
  title: {
    default: "Kefyro ūsai — Bariukas Palanga",
    template: "%s | Kefyro ūsai",
  },
  description:
    "Vegetarian / vegan friendly 🌱 Draugiški gyvūnams 🐶 Bariukas Palangoje. Maistas ir gėrimai, dienos pietūs. J. Janonio g. 1.",
  keywords: [
    "Kefyro ūsai",
    "bar Palanga",
    "bariukas Palanga",
    "vegan Palanga",
    "kokteiliai Palanga",
    "dienos pietūs Palanga",
    "bariukas",
    "kavinė Palanga",
  ],
  authors: [{ name: "Kefyro ūsai" }],
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "lt_LT",
    alternateLocale: "en_US",
    siteName: "Kefyro ūsai",
    title: "Kefyro ūsai — Bariukas Palangoje",
    description:
      "Vegetarian / vegan friendly 🌱 Draugiški gyvūnams 🐶 Maistas ir gėrimai, dienos pietūs. J. Janonio g. 1.",
    images: [
      {
        url: "/cover.jpg",
        width: 1920,
        height: 1080,
        alt: "Kefyro ūsai — jauki interjeras Palangoje",
      },
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Kefyro ūsai logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kefyro ūsai — Bariukas Palanga",
    description: "Vegetarian / vegan friendly 🌱 Pet friendly 🐶 Bar in Palanga, Lithuania",
    images: ["/cover.jpg"],
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F19421" },
    { media: "(prefers-color-scheme: dark)", color: "#4D3B4D" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('kefyro-theme')||'dark';document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} min-h-screen antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
