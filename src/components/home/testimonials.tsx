"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations, useLocale } from "next-intl";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS, GOOGLE_RATING } from "@/lib/gallery-data";
import { REVIEW_HIGHLIGHTS } from "@/lib/scraped/reviews";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const tStatus = useTranslations("status");
  const locale = useLocale() as "lt" | "en";

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
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
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-10 rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm sm:p-8">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <div className="text-center sm:text-left">
                <p className="text-5xl font-bold text-foreground">{GOOGLE_RATING.score}</p>
                <div className="mt-2 flex justify-center gap-0.5 sm:justify-start">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-orange text-orange" />
                  ))}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {GOOGLE_RATING.count}{" "}
                  {locale === "lt" ? "atsiliepimų Google" : "Google reviews"}
                </p>
              </div>

              <div className="hidden h-16 w-px bg-border sm:block" />

              <div className="flex-1">
                <p className="mb-3 text-sm font-medium text-muted-foreground">
                  {tStatus("popularMentions")}
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                  {REVIEW_HIGHLIGHTS.map((tag) => (
                    <Badge key={tag.key} variant="secondary" className="text-xs">
                      {tag.label[locale]}
                      <span className="ml-1 opacity-60">{tag.count}</span>
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href={GOOGLE_RATING.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-orange hover:underline"
              >
                {tStatus("viewAllGoogle")} →
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {TESTIMONIALS.map((review) => (
                <div
                  key={review.id}
                  className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_55%] lg:flex-[0_0_38%] xl:flex-[0_0_32%]"
                >
                  <Card className="h-full border-border/30 bg-card/50 backdrop-blur-sm transition-shadow hover:shadow-md">
                    <CardContent className="flex h-full min-h-[220px] flex-col p-5 sm:p-6">
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <div className="flex gap-0.5">
                          {Array.from({ length: review.rating }).map((_, j) => (
                            <Star key={j} className="h-4 w-4 fill-orange text-orange" />
                          ))}
                        </div>
                        {review.timeAgo && (
                          <span className="shrink-0 text-xs text-muted-foreground">
                            {review.timeAgo[locale]}
                          </span>
                        )}
                      </div>

                      {review.highlight && (
                        <Badge variant="outline" className="mb-3 w-fit text-xs">
                          {review.highlight[locale]}
                        </Badge>
                      )}

                      <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-5">
                        &ldquo;{review.text[locale]}&rdquo;
                      </p>

                      <div className="mt-4 flex items-center justify-between gap-2 border-t border-border/30 pt-4">
                        <span className="text-sm font-semibold text-foreground">
                          {review.name}
                        </span>
                        <div className="flex shrink-0 items-center gap-2">
                          {review.priceRange && (
                            <span className="text-xs text-muted-foreground">
                              {review.priceRange}
                            </span>
                          )}
                          <Badge variant="outline" className="text-xs">
                            Google
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canPrev}
            className="absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-background/90 p-2.5 shadow-lg backdrop-blur-sm transition-all hover:bg-background disabled:opacity-30 sm:flex"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canNext}
            className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-background/90 p-2.5 shadow-lg backdrop-blur-sm transition-all hover:bg-background disabled:opacity-30 sm:flex"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
