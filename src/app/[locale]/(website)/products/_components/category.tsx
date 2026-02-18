"use client";
import CategoryKkelton from "@/components/skeletons/category.skelton";
import Image from "next/image";
import React from "react";
import { useGetCategories } from "../_hooks/categories/use-get-category";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTranslations } from "next-intl";
import { useQueryParams } from "../_hooks/categories/use-query-params";

import ClearButton from "./clear-button";

export default function Category() {
  // Translations
  const t = useTranslations("Products");

  // hooks
  const { data, isPending, fetchNextPage, hasNextPage } = useGetCategories();
  const { QueryParams, toggleQueryParams, clearQueryParams } = useQueryParams("category");

  // Data variables
  const ctaegoriesData = data?.pages.flatMap((page) => page.categories) ?? [];
  const isChoseCatogry = (id: string) => QueryParams == id;
  const sorted = ctaegoriesData.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="w-full space-y-2.5 px-1 pt-2.5  pb-5">
      {/* Category header */}
      <div aria-labelledby="category-filter-title" className="flex items-center justify-between">
        <h2 id="category-filter-title" className="font-semibold font-inter text-lg text-zinc-800">
          {t("category")}
        </h2>
        {QueryParams && QueryParams.length > 0 && (
          <ClearButton onClick={clearQueryParams} label={t("reset")} />
        )}
      </div>

      {/* CategoryKkelton */}
      {isPending && <CategoryKkelton />}

      {/* Categories lists */}
      {!isPending && (
        <ul role="group" aria-label="Product categories" className=" space-y-2.5  overflow-auto">
          {/* InfiniteScroll data */}
          <InfiniteScroll
            dataLength={ctaegoriesData.length}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={
              <div className="w-full py-2 text-center text-sm text-zinc-500">
                {t("loading-more")}
              </div>
            }
            className=" space-y-2.5 hide-scroll  overflow-auto"
            height={260}
          >
            {/* item of categroies */}
            {sorted.map((categoryData) => (
              <li
                onClick={() => {
                  toggleQueryParams(categoryData._id);
                }}
                key={categoryData._id}
                className={` ${isChoseCatogry(categoryData._id) ? "bg-maroon-50 hover:bg-maroon-100 dark:bg-pink-100 dark:hover:bg-purple-200" : "bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-800"} h-9 cursor-pointer  rounded-sm`}
              >
                <button
                  type="button"
                  className=" flex gap-2.5 items-center"
                  role="checkbox"
                  aria-checked="false"
                >
                  {/* category image */}
                  <div
                    className={` ${isChoseCatogry(categoryData._id) ? "bg-maroon-600 dark:bg-pink-300" : "bg-zinc-500"} w-9 h-9 p-2  rounded-s-sm`}
                  >
                    <Image
                      style={{
                        filter:
                          "invert(100%) sepia(3%) saturate(2%) hue-rotate(307deg) brightness(203%) contrast(100%)",
                      }}
                      className=" "
                      src={categoryData.image}
                      width={36}
                      height={36}
                      alt={"img"}
                    />
                  </div>

                  {/* category name */}
                  <span className="font-medium">{categoryData.name}</span>
                </button>
              </li>
            ))}
          </InfiniteScroll>
        </ul>
      )}
    </section>
  );
}
