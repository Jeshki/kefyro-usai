import { Hero } from "@/components/home/hero";
import { QuickInfo } from "@/components/home/quick-info";
import { OpenStatus } from "@/components/home/open-status";
import { CocktailsCarousel } from "@/components/home/cocktails-carousel";
import { DailySpecials } from "@/components/home/daily-specials";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { Testimonials } from "@/components/home/testimonials";
import { InstagramFeed } from "@/components/home/instagram-feed";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <QuickInfo />
      <OpenStatus />
      <CocktailsCarousel />
      <DailySpecials />
      <GalleryPreview />
      <Testimonials />
      <InstagramFeed />
    </>
  );
}
