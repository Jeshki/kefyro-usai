"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { SITE } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  date: z.string().min(1),
  time: z.string().min(1),
  guests: z.number().min(1).max(20),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function ReservationForm() {
  const t = useTranslations("reservations");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { guests: 2 },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "reservation" }),
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
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        </FadeIn>

        <FadeIn delay={0.2}>
          {status === "success" ? (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
              <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                {t("form.success")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("form.name")}</Label>
                  <Input id="name" {...register("name")} />
                  {errors.name && <p className="text-xs text-red-500">Required</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("form.email")}</Label>
                  <Input id="email" type="email" {...register("email")} />
                  {errors.email && <p className="text-xs text-red-500">Invalid email</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t("form.phone")}</Label>
                  <Input id="phone" type="tel" {...register("phone")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">{t("form.guests")}</Label>
                  <Input id="guests" type="number" min={1} max={20} {...register("guests", { valueAsNumber: true })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">{t("form.date")}</Label>
                  <Input id="date" type="date" {...register("date")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">{t("form.time")}</Label>
                  <Input id="time" type="time" {...register("time")} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t("form.message")}</Label>
                <Textarea id="message" rows={4} {...register("message")} />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                {t("form.submit")}
              </Button>
              {status === "error" && (
                <p className="text-center text-sm text-red-500">{t("form.error")}</p>
              )}
            </form>
          )}

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">{t("contactTitle")}</p>
            <Button asChild variant="outline" size="lg" className="mt-4">
              <a href={`tel:${SITE.phone}`}>
                <Phone className="h-4 w-4" />
                {t("callUs")} — {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
