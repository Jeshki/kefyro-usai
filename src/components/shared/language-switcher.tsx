"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = locale === "lt" ? "en" : "lt";
    router.replace(pathname, { locale: next });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      className="rounded-full font-semibold uppercase tracking-wider text-foreground hover:bg-muted"
      aria-label="Switch language"
    >
      {locale === "lt" ? "EN" : "LT"}
    </Button>
  );
}
