"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Download, ExternalLink } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MENU_ITEMS,
  FOOD_SECTIONS,
  WOLT_MENU_SOURCE,
  type MenuItem,
} from "@/lib/menu-data";
import { SITE } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";

const TAB_KEYS = [
  "food",
  "cocktails",
  "wineBeer",
  "nonAlcoholic",
  "takeaway",
] as const;

function MenuCard({ item, locale }: { item: MenuItem; locale: "lt" | "en" }) {
  const t = useTranslations("menu");

  return (
    <article className="group flex gap-4 rounded-2xl border border-border/50 bg-card p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 sm:p-5">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28">
        <Image
          src={item.image}
          alt={item.name[locale]}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="112px"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-semibold sm:text-lg">
            {item.name[locale]}
          </h3>
          <span className="shrink-0 text-lg font-bold text-coral">
            €{item.price.toFixed(2)}
          </span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {item.description[locale]}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {item.isNew && <Badge variant="coral">{t("new")}</Badge>}
          {item.vegan && <Badge variant="vegan">{t("vegan")}</Badge>}
          {item.allergens?.map((a) => (
            <Badge key={a} variant="outline" className="text-xs">
              {a}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}

export function MenuContent() {
  const t = useTranslations("menu");
  const locale = useLocale() as "lt" | "en";

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              {WOLT_MENU_SOURCE.label[locale]}
            </p>
            <Button asChild variant="outline" size="sm">
              <a href={SITE.order.wolt} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                {t("orderWolt")}
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="/menu.pdf" download>
                <Download className="h-4 w-4" />
                {t("downloadPdf")}
              </a>
            </Button>
          </div>
        </FadeIn>

        <Tabs defaultValue="food" className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto">
            {TAB_KEYS.map((key) => (
              <TabsTrigger key={key} value={key}>
                {key === "takeaway" ? t("combos") : t(`tabs.${key}`)}
              </TabsTrigger>
            ))}
          </TabsList>

          {TAB_KEYS.map((key) => {
            const items = MENU_ITEMS.filter((item) => item.category === key);

            if (key === "food") {
              return (
                <TabsContent key={key} value={key} className="space-y-10">
                  {FOOD_SECTIONS.map((section) => {
                    const sectionItems = items.filter(
                      (item) => item.section === section.key
                    );
                    if (sectionItems.length === 0) return null;

                    return (
                      <div key={section.key}>
                        <h2 className="mb-4 font-display text-xl font-semibold">
                          {section.label[locale]}
                        </h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {sectionItems.map((item, i) => (
                            <FadeIn key={item.id} delay={i * 0.05}>
                              <MenuCard item={item} locale={locale} />
                            </FadeIn>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </TabsContent>
              );
            }

            return (
              <TabsContent key={key} value={key}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {items.map((item, i) => (
                    <FadeIn key={item.id} delay={i * 0.05}>
                      <MenuCard item={item} locale={locale} />
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>

        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link href="/reservations">{t("bookCta")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
