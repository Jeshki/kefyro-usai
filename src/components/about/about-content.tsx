"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Utensils, Wine, Leaf, ShoppingBag, Sun, Users } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { CtaButtons } from "@/components/shared/cta-buttons";

const FEATURES = [
  { key: "rooftop" as const, icon: Sun },
  { key: "outdoor" as const, icon: Users },
  { key: "cocktails" as const, icon: Wine },
  { key: "vegan" as const, icon: Leaf },
  { key: "takeaway" as const, icon: ShoppingBag },
  { key: "lunch" as const, icon: Utensils },
];

export function AboutContent() {
  const t = useTranslations("about");
  const tHero = useTranslations("hero");
  const tCta = useTranslations("cta");

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        </FadeIn>

        {/* Story section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80"
                alt="Kefyro ūsai rooftop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">{t("storyTitle")}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t("story1")}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t("story2")}</p>
          </FadeIn>
        </div>

        {/* Features grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <FadeIn key={feature.key} delay={i * 0.08}>
              <div className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-0.5">
                <div className="rounded-xl bg-teal/10 p-3">
                  <feature.icon className="h-6 w-6 text-teal" />
                </div>
                <span className="font-semibold">{t(`features.${feature.key}`)}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Rooftop highlight */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn delay={0.1} className="order-2 lg:order-1">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">{t("rooftopTitle")}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t("rooftopDesc")}</p>
            <h3 className="mt-8 font-display text-2xl font-bold sm:text-3xl">{t("teamTitle")}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t("teamDesc")}</p>
          </FadeIn>
          <FadeIn className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80"
                alt="Sea view from rooftop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <CtaButtons
            bookLabel={tHero("bookTable")}
            woltLabel={tHero("orderWolt")}
            menuLabel={tCta("seeMenu")}
            className="justify-center"
          />
        </div>
      </div>
    </div>
  );
}
