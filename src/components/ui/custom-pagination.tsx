"use client";
import * as React from "react";
import { cn } from "@/lib/utils/tailwind-merge";
interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}
export function CustomPagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: CustomPaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    if (currentPage <= 3) {
      pages.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
    }

    return pages;
  };
  const handleFirstPage = () => {
    if (currentPage !== 1) {
      onPageChange(1);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  const handleLastPage = () => {
    if (currentPage !== totalPages) {
      onPageChange(totalPages);
    }
  };
  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };
  const pageNumbers = getPageNumbers();
  return (
    <nav
      role="navigation"
      aria-label="Pagination Navigation"
      className={cn("flex items-center justify-center gap-2.5", className)}
    >
      {/* First Page Button */}
      <button
        onClick={handleFirstPage}
        disabled={currentPage === 1}
        aria-label="Go to first page"
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-lg border transition-colors text-base",
          "border-gray-300 bg-white text-gray-700",
          "hover:bg-gray-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white dark:disabled:hover:bg-zinc-800",
          "rtl:rotate-180"
        )}
      >
        <span className="text-[16px] leading-none">«</span>
      </button>

      {/* Previous Page Button */}
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-lg border transition-colors",
          "border-gray-300 bg-white text-gray-700",
          "hover:bg-gray-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white dark:disabled:hover:bg-zinc-800",
          "rtl:rotate-180"
        )}
      >
        <span className="text-[16px] leading-none">‹</span>
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="flex h-8 w-8 items-center justify-center text-gray-500 dark:text-gray-400"
              aria-hidden="true"
            >
              ...
            </span>
          );
        }

        const pageNumber = page as number;
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            aria-label={`Go to page ${pageNumber}`}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg border transition-colors font-medium",
              isActive
                ? "border-maroon-600 bg-maroon-600 text-white hover:bg-maroon-700 dark:border-maroon-600 dark:bg-maroon-600 dark:hover:bg-maroon-700"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700"
            )}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Page Button */}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-lg border transition-colors",
          "border-gray-300 bg-white text-gray-700",
          "hover:bg-gray-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white dark:disabled:hover:bg-zinc-800",
          "rtl:rotate-180"
        )}
      >
        <span className="text-[16px] leading-none">›</span>
      </button>

      {/* Last Page Button */}
      <button
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
        aria-label="Go to last page"
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-lg border transition-colors",
          "border-gray-300 bg-white text-gray-700",
          "hover:bg-gray-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white dark:disabled:hover:bg-zinc-800",
          "rtl:rotate-180"
        )}
      >
        <span className="text-[16px] leading-none">»</span>
      </button>
    </nav>
  );
}
