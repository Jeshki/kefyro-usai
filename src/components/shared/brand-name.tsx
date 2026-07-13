import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface BrandNameProps {
  className?: string;
  as?: "span" | "h1" | "h2" | "p";
}

/** Always renders with font that supports Lithuanian „ū“ */
export function BrandName({ className, as: Tag = "span" }: BrandNameProps) {
  return (
    <Tag className={cn("font-sans", className)}>
      Kefyro <span className="tracking-normal">ūsai</span>
    </Tag>
  );
}

export const BRAND_NAME = SITE.name;
