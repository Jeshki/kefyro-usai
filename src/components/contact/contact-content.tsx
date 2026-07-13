"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { SITE } from "@/lib/constants";
import { formatHoursForDisplay } from "@/lib/hours";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export function ContactContent() {
  const t = useTranslations("contact");
  const locale = useLocale() as "lt" | "en";
  const hours = formatHoursForDisplay(locale);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "contact" }),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info + Map */}
          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-coral mt-0.5" />
                  <div>
                    <p className="font-semibold">{t("findUs")}</p>
                    <p className="text-muted-foreground">{SITE.address}</p>
                    <a
                      href={SITE.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-teal hover:text-teal-light"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      Google Maps
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-coral" />
                  <a href={`tel:${SITE.phone}`} className="hover:text-teal">{SITE.phoneDisplay}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-coral" />
                  <a href={`mailto:${SITE.email}`} className="hover:text-teal">{SITE.email}</a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-coral mt-0.5" />
                  <div>
                    <p className="font-semibold">{t("hoursTitle")}</p>
                    {hours.map((h) => (
                      <p key={h.label} className="text-sm text-muted-foreground">
                        {h.label}: {h.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border/50 shadow-lg">
                <iframe
                  src={SITE.googleMapsEmbed}
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kefyro ūsai location"
                />
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            {status === "success" ? (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
                <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                  {t("form.success")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("form.name")}</Label>
                  <Input id="name" {...register("name")} />
                  {errors.name && <p className="text-xs text-red-500">Required</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("form.email")}</Label>
                  <Input id="email" type="email" {...register("email")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{t("form.subject")}</Label>
                  <Input id="subject" {...register("subject")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("form.message")}</Label>
                  <Textarea id="message" rows={5} {...register("message")} />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                  {t("form.submit")}
                </Button>
                {status === "error" && (
                  <p className="text-center text-sm text-red-500">{t("form.error")}</p>
                )}
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
