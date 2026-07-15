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
  DRINK_SECTIONS,
  MENU_PAGES,
  type MenuItem,
} from "@/lib/menu-data";
import { SITE } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";

const TAB_KEYS = ["food", "cocktails", "wineBeer", "nonAlcoholic"] as const;

function formatPrice(item: MenuItem, locale: "lt" | "en") {
  if (item.displayPrice) return item.displayPrice[locale];
  return `€${item.price.toFixed(2)}`;
}

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
            {formatPrice(item, locale)}
          </span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-3">
          {item.description[locale]}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
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

function SectionBlock({
  title,
  items,
  locale,
}: {
  title: string;
  items: MenuItem[];
  locale: "lt" | "en";
}) {
  if (items.length === 0) return null;

  return (
    <div>
      <h2 className="mb-4 font-display text-xl font-semibold">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <FadeIn key={item.id} delay={i * 0.04}>
            <MenuCard item={item} locale={locale} />
          </FadeIn>
        ))}
      </div>
    </div>
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
          <p className="mb-6 text-center text-sm font-medium text-orange">
            {MENU_PAGES.note[locale]}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="outline" size="sm">
              <a href={MENU_PAGES.food} download="kefyro-usai-maistas.jpg">
                <Download className="h-4 w-4" />
                {t("downloadFood")}
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={MENU_PAGES.drinks} download="kefyro-usai-gerimai.jpg">
                <Download className="h-4 w-4" />
                {t("downloadDrinks")}
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={SITE.order.wolt} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                {t("orderWolt")}
              </a>
            </Button>
          </div>
        </FadeIn>

        <Tabs defaultValue="food" className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto">
            {TAB_KEYS.map((key) => (
              <TabsTrigger key={key} value={key}>
                {t(`tabs.${key}`)}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="food" className="space-y-10 pt-6">
            {FOOD_SECTIONS.map((section) => (
              <SectionBlock
                key={section.key}
                title={section.label[locale]}
                items={MENU_ITEMS.filter(
                  (item) => item.category === "food" && item.section === section.key
                )}
                locale={locale}
              />
            ))}
          </TabsContent>

          {(["cocktails", "wineBeer", "nonAlcoholic"] as const).map((tabKey) => (
            <TabsContent key={tabKey} value={tabKey} className="space-y-10 pt-6">
              {DRINK_SECTIONS.filter((s) => s.category === tabKey).map((section) => (
                <SectionBlock
                  key={section.key}
                  title={section.label[locale]}
                  items={MENU_ITEMS.filter(
                    (item) => item.category === tabKey && item.section === section.key
                  )}
                  locale={locale}
                />
              ))}
            </TabsContent>
          ))}
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
