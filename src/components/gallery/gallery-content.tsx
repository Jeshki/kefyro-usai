"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/gallery-data";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { cn } from "@/lib/utils";

const CATEGORIES = ["all", "rooftop", "food", "cocktails", "events"] as const;

export function GalleryContent() {
  const t = useTranslations("galleryPage");
  const locale = useLocale() as "lt" | "en";
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    filter === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === filter);

  const lightboxImage = GALLERY_IMAGES.find((img) => img.id === lightbox);

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        </FadeIn>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                filter === cat
                  ? "bg-teal text-white shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {t(`categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-2 gap-4 md:columns-3 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="mb-4 break-inside-avoid lg:mb-6"
              >
                <button
                  onClick={() => setLightbox(img.id)}
                  className="group relative block w-full overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal"
                >
                  <Image
                    src={img.src}
                    alt={img.alt[locale]}
                    width={img.width}
                    height={img.height}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt[locale]}
                width={lightboxImage.width}
                height={lightboxImage.height}
                className="max-h-[85vh] w-auto object-contain"
              />
              <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                {lightboxImage.alt[locale]}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
