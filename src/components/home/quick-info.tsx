"use client";

import { useTranslations } from "next-intl";
import { Clock, MapPin, Phone, Navigation } from "lucide-react";
import { SITE } from "@/lib/constants";
import { formatHoursForDisplay } from "@/lib/hours";
import { useLocale } from "next-intl";

export function QuickInfo() {
  const t = useTranslations("quickInfo");
  const locale = useLocale() as "lt" | "en";
  const hours = formatHoursForDisplay(locale);

  return (
    <section className="relative z-20 -mt-16 mx-4 sm:mx-6 lg:mx-8">
      <div className="mx-auto max-w-5xl rounded-2xl border border-border/30 bg-background/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-teal/10 p-3">
              <Clock className="h-5 w-5 text-teal" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{t("hours")}</h3>
              <div className="mt-1 space-y-0.5 text-sm text-muted-foreground">
                {hours.map((h) => (
                  <p key={h.label}>
                    <span className="font-medium">{h.label}:</span> {h.hours}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-coral/10 p-3">
              <MapPin className="h-5 w-5 text-coral" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{t("address")}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{SITE.address}</p>
              <a
                href={SITE.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-teal hover:text-teal-light"
              >
                <Navigation className="h-3.5 w-3.5" />
                {t("getDirections")}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-gold/10 p-3">
              <Phone className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{t("phone")}</h3>
              <a
                href={`tel:${SITE.phone}`}
                className="mt-1 block text-sm text-muted-foreground hover:text-teal"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
