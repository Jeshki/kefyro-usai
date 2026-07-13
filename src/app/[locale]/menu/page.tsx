import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { MenuContent } from "@/components/menu/menu-content";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "lt" ? "Meniu" : "Menu",
    description:
      locale === "lt"
        ? "Maistas ir gėrimai, išsinešimui, dienos pietūs — Kefyro ūsai meniu"
        : "Food, cocktails, wine & takeaway menu — Kefyro ūsai Palanga",
  };
}

export default async function MenuPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MenuContent />;
}
