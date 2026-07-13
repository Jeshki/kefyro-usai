import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { ReservationForm } from "@/components/reservations/reservation-form";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "lt" ? "Rezervacijos" : "Reservations",
    description:
      locale === "lt"
        ? "Rezervuokite stalą Kefyro ūsai stogo terasoje Palangoje"
        : "Book a table at Kefyro ūsai rooftop terrace in Palanga",
  };
}

export default async function ReservationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ReservationForm />;
}
