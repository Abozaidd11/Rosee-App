"use client";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import "@smastrom/react-rating/style.css";
import ClearButton from "./clear-button";
import { useQueryParams } from "../_hooks/categories/use-query-params";

export default function Rating2() {
  // Translations
  const t = useTranslations("Products");
  //hooks
  const { QueryParams, toggleQueryParams, clearQueryParams } = useQueryParams("rateAvg");

  return (
    <section className="w-full space-y-2.5 px-1 pt-2.5  pb-5">
      {/* head of components */}
      <div aria-labelledby="Ratting-title" className="flex items-center justify-between">
        {/* title */}
        <h2 id="Ratting-title" className="font-semibold font-inter text-lg text-zinc-800">
          {t("rating")}
        </h2>

        {/* reset rating */}
        {QueryParams && QueryParams.length > 0 && (
          <ClearButton onClick={clearQueryParams} label={t("reset")} />
        )}
      </div>

      {/* list of stars */}
      <ul className="flex gap-2 text-yellow-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <li
            onClick={() => toggleQueryParams(String(index + 1))}
            className={`cursor-pointer `}
            key={index}
          >
            <Star
              className={` ${Number(QueryParams) >= index + 1 ? "fill-yellow-500" : ""} text-yellow-500  `}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
