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
        ? "Kefyro ūsai — bariukas Palangoje, vegan friendly ir pet friendly"
        : "Kefyro ūsai — cozy bar in Palanga, vegan friendly and pet friendly",
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutContent />;
}
