import Image from "next/image";
import { Link } from "@/i18n/routing";
import { BRAND, SITE } from "@/lib/constants";
import { BrandName } from "@/components/shared/brand-name";
import { cn } from "@/lib/utils";

const SIZES = {
  sm: { w: 36, h: 36, text: "text-lg" },
  md: { w: 44, h: 44, text: "text-xl" },
  lg: { w: 64, h: 64, text: "text-3xl" },
  xl: { w: 96, h: 96, text: "text-5xl" },
  hero: { w: 140, h: 140, text: "text-6xl" },
} as const;

type LogoSize = keyof typeof SIZES;

interface LogoProps {
  size?: LogoSize;
  showText?: boolean;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function Logo({
  size = "md",
  showText = false,
  className,
  imageClassName,
  priority = false,
}: LogoProps) {
  const s = SIZES[size];

  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5 transition-opacity hover:opacity-90", className)}
      aria-label={SITE.name}
    >
      <Image
        src={BRAND.logo}
        alt={SITE.name}
        width={s.w}
        height={s.h}
        priority={priority}
        className={cn("rounded-lg object-contain shadow-sm", imageClassName)}
      />
      {showText && (
        <span className={cn("font-sans font-bold text-foreground", s.text)}>
          <BrandName />
        </span>
      )}
    </Link>
  );
}
