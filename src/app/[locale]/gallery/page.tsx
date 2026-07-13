import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { GalleryContent } from "@/components/gallery/gallery-content";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "lt" ? "Galerija" : "Gallery",
    description:
      locale === "lt"
        ? "Kefyro ūsai galerija — stogo terasa, maistas, kokteiliai ir renginiai"
        : "Kefyro ūsai gallery — rooftop, food, cocktails and events",
  };
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GalleryContent />;
}
