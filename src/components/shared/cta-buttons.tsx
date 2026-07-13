import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

interface CtaButtonsProps {
  bookLabel: string;
  woltLabel: string;
  menuLabel?: string;
  size?: "default" | "lg" | "xl";
  className?: string;
}

export function CtaButtons({
  bookLabel,
  woltLabel,
  menuLabel,
  size = "lg",
  className,
}: CtaButtonsProps) {
  return (
    <div className={`flex flex-wrap gap-4 ${className ?? ""}`}>
      <Button asChild variant="default" size={size}>
        <Link href="/reservations">{bookLabel}</Link>
      </Button>
      <Button asChild variant="outline" size={size}>
        <a href={SITE.order.wolt} target="_blank" rel="noopener noreferrer">
          {woltLabel}
        </a>
      </Button>
      {menuLabel && (
        <Button asChild variant="secondary" size={size}>
          <Link href="/menu">{menuLabel}</Link>
        </Button>
      )}
    </div>
  );
}
