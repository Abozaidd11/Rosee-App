"use client";

import { useState } from "react";

import { CustomPagination } from "@/components/shared/custom-pagination";

export default function BestSellingPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex w-full items-center justify-center">
      <CustomPagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
    </div>
  );
}
