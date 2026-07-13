import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "lt" ? "Kontaktai" : "Contact",
    description:
      locale === "lt"
        ? "Kefyro ūsai kontaktai — J. Janonio g. 1, Palanga. Telefonas, žemėlapis, darbo laikas"
        : "Contact Kefyro ūsai — J. Janonio g. 1, Palanga. Phone, map, opening hours",
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactContent />;
}
