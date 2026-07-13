"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { COCKTAILS } from "@/lib/menu-data";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";

export function CocktailsCarousel() {
  const t = useTranslations("cocktails");
  const locale = useLocale() as "lt" | "en";
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        </FadeIn>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {COCKTAILS.map((cocktail, i) => (
                <div
                  key={cocktail.id}
                  className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
                >
                  <FadeIn delay={i * 0.1}>
                    <div className="group relative overflow-hidden rounded-2xl bg-card shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image
                          src={cocktail.image}
                          alt={cocktail.name[locale]}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 85vw, 30vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-display text-xl font-bold text-white">
                            {cocktail.name[locale]}
                          </h3>
                          <p className="mt-1 text-sm text-white/70 line-clamp-2">
                            {cocktail.description[locale]}
                          </p>
                          <p className="mt-3 text-lg font-bold text-gold">
                            €{cocktail.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            disabled={!canPrev}
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-background/90 p-3 shadow-lg backdrop-blur-sm transition-all hover:bg-background disabled:opacity-30 lg:flex"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canNext}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-background/90 p-3 shadow-lg backdrop-blur-sm transition-all hover:bg-background disabled:opacity-30 lg:flex"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/menu">{t("viewAll")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
