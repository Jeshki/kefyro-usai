import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "lt" ? "Apie mus" : "About Us",
    description:
      locale === "lt"
        ? "Kefyro ūsai istorija — stogo terasa Palangoje su jūros vaizdu"
        : "The story of Kefyro ūsai — Palanga's rooftop bar with sea views",
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutContent />;
}
