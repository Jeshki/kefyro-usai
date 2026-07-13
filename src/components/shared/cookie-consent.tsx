"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "@/i18n/routing";

const COOKIE_KEY = "kefyro-cookie-consent";

export function CookieConsent() {
  const t = useTranslations("cookie");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in slide-in-from-bottom duration-500">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-border/50 bg-background/95 p-5 shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground pr-8 sm:pr-0">
          {t("message")}{" "}
          <Link href="/contact" className="text-teal underline hover:text-teal-light">
            {t("learnMore")}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="ghost" size="sm" onClick={decline}>
            {t("decline")}
          </Button>
          <Button size="sm" onClick={accept}>
            {t("accept")}
          </Button>
        </div>
        <button
          onClick={decline}
          className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground hover:text-foreground sm:hidden"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
