import React from "react";

export default function NotificationsSkeleton() {
  /* Skeleton for loading notifications */
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <li
          key={index}
          className="p-4 border-t border-zinc-300 dark:border-zinc-600 font-semibold animate-pulse"
        >
          <div className="flex items-start justify-between">
            {/* Title skeleton */}
            <div className="h-4 w-3/5 bg-zinc-400 dark:bg-zinc-500 rounded mb-2"></div>

            {/* Dropdown button skeleton */}
            <div className="h-4 w-4 bg-zinc-400 dark:bg-zinc-500 rounded"></div>
          </div>

          {/* Message skeleton */}
          <div className="h-3 w-full bg-zinc-300 dark:bg-zinc-500 rounded mt-2"></div>
          <div className="h-3 w-5/6 bg-zinc-300 dark:bg-zinc-500 rounded mt-1"></div>
        </li>
      ))}
    </>
  );
}
