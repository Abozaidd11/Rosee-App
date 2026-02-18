"use client";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import { useClearAllQueryParams } from "../_hooks/categories/use-clear-all-query-pramas";

export default function ResetAllQueryParams() {
  // Translations
  const t = useTranslations("Products");
  //
  const { searchParams, clearAllQueryParams } = useClearAllQueryParams();
  if (!searchParams.toString()) return null;
  return (
    <div className="py-4">
      <Button onClick={clearAllQueryParams} variant="secondary" className="w-full">
        <RotateCcw /> {t("Reset")}
      </Button>
    </div>
  );
}
