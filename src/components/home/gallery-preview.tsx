"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { GALLERY_IMAGES } from "@/lib/gallery-data";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";

export function GalleryPreview() {
  const t = useTranslations("gallery");
  const locale = useLocale() as "lt" | "en";
  const preview = GALLERY_IMAGES.slice(0, 6);

  return (
    <section className="py-20 bg-teal-dark/5 dark:bg-teal-dark/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        </FadeIn>

        <div className="columns-2 gap-4 md:columns-3 lg:gap-6">
          {preview.map((img, i) => (
            <FadeIn key={img.id} delay={i * 0.08}>
              <div className="mb-4 break-inside-avoid overflow-hidden rounded-2xl lg:mb-6">
                <div className="group relative overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt[locale]}
                    width={img.width}
                    height={img.height}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-teal-dark/0 transition-colors duration-300 group-hover:bg-teal-dark/30" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="border-teal text-teal hover:bg-teal hover:text-white">
            <Link href="/gallery">{t("viewAll")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
