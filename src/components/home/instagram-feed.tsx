"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { InstagramIcon } from "@/components/shared/social-icons";
import { INSTAGRAM_POSTS, SOCIAL_LINKS } from "@/lib/gallery-data";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

const INSTAGRAM_SCRIPT_ID = "instagram-embed-script";

function loadInstagramEmbed() {
  if (typeof window === "undefined") return;

  const processEmbeds = () => {
    window.instgrm?.Embeds.process();
  };

  const existing = document.getElementById(INSTAGRAM_SCRIPT_ID) as HTMLScriptElement | null;
  if (existing) {
    processEmbeds();
    return;
  }

  const script = document.createElement("script");
  script.id = INSTAGRAM_SCRIPT_ID;
  script.src = "https://www.instagram.com/embed.js";
  script.async = true;
  script.onload = processEmbeds;
  document.body.appendChild(script);
}

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export function InstagramFeed() {
  const t = useTranslations("instagram");

  useEffect(() => {
    loadInstagramEmbed();
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title={t("title")}
            subtitle={SOCIAL_LINKS.instagramHandle}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-8 flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={`${SOCIAL_LINKS.instagram}?utm_source=ig_embed&utm_campaign=loading`}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: 3,
                boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: 1,
                maxWidth: 540,
                minWidth: 326,
                padding: 0,
                width: "99.375%",
              }}
            >
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-8 text-teal hover:underline"
              >
                {SOCIAL_LINKS.instagramHandle}
              </a>
            </blockquote>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {INSTAGRAM_POSTS.map((post, i) => (
            <FadeIn key={post.id} delay={i * 0.05}>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl"
                aria-label={`${post.alt} — Instagram`}
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                  <InstagramIcon className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild variant="secondary" size="lg">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="h-5 w-5" />
              {t("follow")} {SOCIAL_LINKS.instagramHandle}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
