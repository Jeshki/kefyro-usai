"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const t = useTranslations("newsletter");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <h4 className="mb-2 font-semibold text-gold">{t("title")}</h4>
      <p className="mb-4 text-sm text-white/70">{t("subtitle")}</p>
      {status === "success" ? (
        <p className="text-sm text-emerald-400">{t("success")}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            required
            placeholder={t("placeholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
          />
          <Button
            type="submit"
            variant="gold"
            size="sm"
            disabled={status === "loading"}
            className="shrink-0"
          >
            {t("submit")}
          </Button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-2 text-sm text-red-400">{t("error")}</p>
      )}
    </div>
  );
}
