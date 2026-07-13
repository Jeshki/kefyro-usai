"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { Logo } from "@/components/shared/logo";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/menu", key: "menu" },
  { href: "/about", key: "about" },
  { href: "/gallery", key: "gallery" },
  { href: "/reservations", key: "reservations" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/30"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo
          size="md"
          priority
          imageClassName={cn(
            "ring-2 ring-white/20",
            scrolled && "ring-plum/20"
          )}
        />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-orange"
                  : scrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/80 hover:text-white"
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Link href="/reservations">{t("bookTable")}</Link>
          </Button>
          <button
            className={cn(
              "rounded-full p-2 lg:hidden",
              scrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-border/30 bg-background/95 backdrop-blur-xl lg:hidden animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-1 p-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-orange/15 text-orange"
                    : "text-foreground/80 hover:bg-muted"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-border/30 pt-4">
              <Button asChild>
                <Link href="/reservations">{t("bookTable")}</Link>
              </Button>
              <Button asChild variant="secondary">
                <a href={SITE.order.wolt} target="_blank" rel="noopener noreferrer">
                  {t("orderWolt")}
                </a>
              </Button>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center justify-center gap-2 py-2 text-sm text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                {SITE.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
