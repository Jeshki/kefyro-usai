"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { DAILY_SPECIALS } from "@/lib/menu-data";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";

export function DailySpecials() {
  const t = useTranslations("specials");
  const tMenu = useTranslations("menu");
  const locale = useLocale() as "lt" | "en";

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {DAILY_SPECIALS.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.15}>
              <article className="group overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name[locale]}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <Badge variant="coral" className="absolute left-4 top-4">
                    {t("badge")}
                  </Badge>
                  {item.vegan && (
                    <Badge variant="vegan" className="absolute right-4 top-4">
                      {tMenu("vegan")}
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold">
                    {item.name[locale]}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description[locale]}
                  </p>
                  <p className="mt-4 text-xl font-bold text-coral">
                    €{item.price.toFixed(2)}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
