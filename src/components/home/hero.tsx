"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { BrandName } from "@/components/shared/brand-name";
import { BRAND, SITE } from "@/lib/constants";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={BRAND.cover}
          alt="Kefyro ūsai — jauki atmosfera Palangoje"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-plum-dark/75 via-plum/45 to-plum-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/30" />
        <div className="absolute inset-0 bg-orange/5" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 flex justify-center"
          >
            <Logo
              size="hero"
              priority
              imageClassName="shadow-2xl ring-4 ring-orange/40"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <BrandName
              as="h1"
              className="text-5xl font-bold leading-tight text-beige drop-shadow-lg sm:text-6xl lg:text-7xl"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange"
          >
            Palanga · Lietuva
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl font-display text-2xl font-bold leading-snug text-beige drop-shadow-md sm:text-3xl"
          >
            {t("tagline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button asChild size="xl" variant="default">
              <Link href="/reservations">{t("bookTable")}</Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <a href={SITE.order.wolt} target="_blank" rel="noopener noreferrer">
                {t("orderWolt")}
              </a>
            </Button>
            <Button asChild size="xl" variant="gold">
              <Link href="/menu">{t("seeMenu")}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-beige/70"
        >
          <span className="text-xs uppercase tracking-widest">{t("scroll")}</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
