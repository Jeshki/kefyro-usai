"use client";

import { useTranslations, useLocale } from "next-intl";
import { getOpenStatus, getPopularTimes } from "@/lib/hours";
import { FadeIn } from "@/components/shared/fade-in";
import { GOOGLE_RATING } from "@/lib/gallery-data";
import { cn } from "@/lib/utils";

export function OpenStatus() {
  const t = useTranslations("status");
  const tDays = useTranslations("days");
  const locale = useLocale();
  const status = getOpenStatus();
  const popularTimes = getPopularTimes();

  const statusConfig = {
    open: {
      label: t("openNow"),
      color: "bg-emerald-500",
      textColor: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    opens_today: {
      label: t("opensAt", { time: status.message ?? "" }),
      color: "bg-gold",
      textColor: "text-gold",
      bg: "bg-gold/10",
    },
    closed: {
      label: status.day
        ? t("opensOn", {
            day: tDays(status.day),
            time: status.message ?? "",
          })
        : t("closed"),
      color: "bg-red-500",
      textColor: "text-red-500",
      bg: "bg-red-500/10",
    },
  };

  const config = statusConfig[status.status];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            {/* Status badge */}
            <div className="flex items-center gap-4">
              <div className={cn("flex items-center gap-3 rounded-2xl px-6 py-4", config.bg)}>
                <span className="relative flex h-3 w-3">
                  <span
                    className={cn(
                      "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                      config.color
                    )}
                  />
                  <span className={cn("relative inline-flex h-3 w-3 rounded-full", config.color)} />
                </span>
                <span className={cn("text-lg font-semibold", config.textColor)}>
                  {config.label}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("reportedBy", { count: GOOGLE_RATING.count })}
              </p>
            </div>

            {/* Popular times chart */}
            <div className="w-full max-w-md">
              <p className="mb-3 text-sm font-medium text-muted-foreground">
                {t("popularTimes")}
              </p>
              <div className="flex items-end gap-1.5 h-20">
                {popularTimes.map((level, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm transition-all duration-300 hover:opacity-80"
                    style={{
                      height: `${level}%`,
                      background: `linear-gradient(to top, var(--color-teal), var(--color-coral))`,
                      opacity: 0.3 + (level / 100) * 0.7,
                    }}
                    title={`${12 + i}:00 — ${level}%`}
                  />
                ))}
              </div>
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>12:00</span>
                <span>18:00</span>
                <span>23:00</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
