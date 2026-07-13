"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { MapPin, Phone, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { SITE } from "@/lib/constants";
import { BrandName } from "@/components/shared/brand-name";
import { NewsletterForm } from "@/components/shared/newsletter-form";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="bg-plum-dark text-beige">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Logo size="lg" imageClassName="ring-2 ring-white/10" />
            <p className="text-sm text-beige/70 leading-relaxed">{t("description")}</p>
            <div className="flex gap-3">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-orange"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-orange"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-orange">{t("quickLinks")}</h4>
            <ul className="space-y-2 text-sm text-beige/70">
              <li><Link href="/menu" className="hover:text-white transition-colors">{tNav("menu")}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{tNav("about")}</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">{tNav("gallery")}</Link></li>
              <li><Link href="/reservations" className="hover:text-white transition-colors">{tNav("reservations")}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{tNav("contact")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-orange">{t("contact")}</h4>
            <ul className="space-y-3 text-sm text-beige/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-orange" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-orange" />
                <a href={`tel:${SITE.phone}`} className="hover:text-white">{SITE.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-orange" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <NewsletterForm />
          </div>
        </div>

        {/* Order buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 border-t border-white/10 pt-8">
          <span className="text-sm text-white/50">{t("order")}:</span>
          <Button asChild variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
            <a href={SITE.order.wolt} target="_blank" rel="noopener noreferrer">
              Wolt
            </a>
          </Button>
          <Button asChild variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
            <a href={SITE.order.bolt} target="_blank" rel="noopener noreferrer">
              Bolt Food
            </a>
          </Button>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p className="text-sm text-beige/70">
            &copy; {new Date().getFullYear()} <BrandName />. {t("rights")}
          </p>
          <p>{SITE.priceRange}</p>
        </div>
      </div>
    </footer>
  );
}
