"use client";

import ErrorBoundary from "@/components/shared/error-boundary";
import useOccasions from "@/hooks/shared/use-occasions";
import OccasionFilterSkeleton from "@/components/skeletons/shared/occasion-filter.skeleton";
import Image from "next/image";
import { useRef, useEffect, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils/tailwind-merge";
import ClearButton from "./clear-button";

const OCCASION_OVERLAY_GRADIENT =
  "linear-gradient(180deg, rgba(166, 37, 42, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)";
const OCCASION_PARAM = "occasion";

export default function OccasionFilter() {
  const { isPending, data: payload, error, refetch, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useOccasions();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const scrollRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const activeOccasionIds = new Set(searchParams.getAll(OCCASION_PARAM));

  const setOccasionParams = useCallback(
    (ids: Set<string>) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(OCCASION_PARAM);
      ids.forEach((id) => params.append(OCCASION_PARAM, id));
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname);
    },
    [pathname, router, searchParams]
  );

  const handleToggle = useCallback(
    (id: string) => {
      const current = new Set(searchParams.getAll(OCCASION_PARAM));
      if (current.has(id)) current.delete(id);
      else current.add(id);
      setOccasionParams(current);
    },
    [searchParams, setOccasionParams]
  );

  const handleClear = useCallback(() => {
    setOccasionParams(new Set());
  }, [setOccasionParams]);

  // IntersectionObserver: load more when sentinel scrolls into view
  useEffect(() => {
    const root = scrollRef.current;
    const sentinel = sentinelRef.current;
    if (!root || !sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { root, rootMargin: "80px", threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (error) return <ErrorBoundary onRetry={refetch} error={error} />;
  if (isPending) return <OccasionFilterSkeleton />;

  const imageBaseUrl = "https://flower.elevateegy.com/uploads/";
  const occasions = payload?.pages.flatMap((page) => page.occasions) ?? [];

  return (
    <section className="border-b border-zinc-100 dark:border-zinc-700 pb-5">
        <div className="flex justify-between items-center">
        {/* filter title */}
        <h3 className="text-zinc-800 dark:text-zinc-50 font-medium text-lg ps-[5px]">
            Occasion
        </h3>
        {/* clear button */}
        <ClearButton onClick={handleClear} />
        </div>
        {/* Occasions list */}
      <div
        ref={scrollRef}
        className="flex flex-wrap justify-between overflow-y-auto overflow-x-hidden overscroll-contain hide-scroll"
        style={{ maxHeight: "min(270px, calc(100vh - 12rem))" }}
      >
        {occasions.map((occasion) => {
          const isActive = activeOccasionIds.has(occasion._id);
          return (
            <div
              key={occasion._id}
              role="button"
              tabIndex={0}
              onClick={() => handleToggle(occasion._id)}
              onKeyDown={(e) => e.key === "Enter" && handleToggle(occasion._id)}
              className={cn(
                "w-1/2 cursor-pointer overflow-hidden pt-[10px] ps-[5px] pe-[5px] pb-[5px] outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                isActive && "active"
              )}
            >
              <div className="relative rounded-lg">
                <Image
                  src={`${imageBaseUrl}${occasion.image}`}
                  alt={occasion.name}
                  width={133}
                  height={74}
                  sizes="133px"
                  className="h-[74px] w-full object-cover rounded-lg"
                />
                <div
                  className={cn(
                    "absolute inset-0 rounded-lg",
                    !isActive && "bg-black/50"
                  )}
                  style={isActive ? { background: OCCASION_OVERLAY_GRADIENT } : undefined}
                  aria-hidden
                />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-50 font-medium text-center text-nowrap">
                  {occasion.name}
                </p>
              </div>
            </div>
          );
        })}
        <div ref={sentinelRef} className="w-full h-0 shrink-0" aria-hidden />
        {isFetchingNextPage && (
          <div className="w-full py-2 text-center text-sm text-zinc-500">Loading more…</div>
        )}
      </div>
    </section>
  );
}