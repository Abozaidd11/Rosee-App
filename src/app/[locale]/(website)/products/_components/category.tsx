import CategoryKkelton from "@/components/skeletons/category.skelton";
import Image from "next/image";
import React from "react";

export default function Category() {
  return (
    <section className="w-full space-y-2.5">
      {/* Category header */}
      <div aria-labelledby="category-filter-title" className="flex items-center justify-between">
        <h2 id="category-filter-title" className="font-semibold font-inter text-lg text-zinc-800">
          Category
        </h2>
        <button aria-label="Reset selected categories" className="text-red-600 text-sm font-normal">
          X Reset{" "}
        </button>
      </div>

      {/* CategoryKkelton */}
      {/* <CategoryKkelton /> */}

      {/* Categories lists */}
      <ul role="group" aria-label="Product categories">
        <li className="h-9 bg-zinc-200 hover:bg-zinc-300 rounded-sm">
          <button
            type="button"
            className=" flex gap-2.5 items-center"
            role="checkbox"
            aria-checked="false"
          >
            <Image
              style={{
                filter:
                  "invert(100%) sepia(3%) saturate(2%) hue-rotate(307deg) brightness(103%) contrast(100%)",
              }}
              className="w-9 h-9 p-2 bg-zinc-500 rounded-s-sm "
              src={
                "https://flower.elevateegy.com/uploads/39c641a6-4ec4-421a-8f55-5d8f5eeba5c3-flowers.png"
              }
              width={36}
              height={36}
              alt={"img"}
            />
            <span className="font-medium">Cards</span>
          </button>
        </li>
      </ul>
    </section>
  );
}
