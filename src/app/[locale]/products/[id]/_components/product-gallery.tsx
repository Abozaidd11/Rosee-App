"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/tailwind-merge";
import { X } from "lucide-react";
import logo from "@/../public/assets/logo.png";

interface ProductGalleryProps {
  title: string;
  imgCover: string;
  images: string[];
}

export default function ProductGallery({ title, imgCover, images }: ProductGalleryProps) {
  // state
  const [activeImage, setActiveImage] = useState(imgCover);
  const [isFullscreen, setIsFullscreen] = useState(false);

  //all images
  const allImages = Array.from(new Set([imgCover, ...images]));

  //   functions
  const chooseImage = (imgUrl: string) => {
    setActiveImage(imgUrl);
  };

  return (
    <div className="flex flex-col gap-y-3">
      {/* Cover Image */}
      <figure
        onClick={() => setIsFullscreen(true)}
        className="relative aspect-[605/402] overflow-hidden rounded-md cursor-pointer"
      >
        <Image
          key={activeImage}
          src={activeImage ?? logo}
          alt={title ?? "product image"}
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          priority={activeImage === imgCover}
          className="object-cover"
        />
      </figure>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors duration-300 text-3xl font-bold z-50"
            onClick={() => setIsFullscreen(false)}
          >
            <X />
          </button>
          <figure className="relative w-full h-full max-w-[90%] max-h-[90%]">
            <Image
              src={activeImage}
              alt={title ?? "fullscreen image"}
              fill
              className="object-contain rounded-xl"
            />
          </figure>
        </div>
      )}

      {/* Thumbnails */}
      <div className="grid grid-cols-6 gap-2 overflow-x-auto hide-scroll">
        {allImages.map((img, index) => {
          const isActive = activeImage === img;
          return (
            <figure
              key={index}
              onClick={() => chooseImage(img)}
              className={cn(
                "group relative aspect-[91/111] overflow-hidden rounded-sm border-2 transition cursor-pointer",
                isActive && "border-primary opacity-100"
              )}
            >
              {/* overlay */}
              {!isActive && (
                <div className="absolute z-10 inset-0 bg-black/30 transition-colors group-hover:bg-black/0"></div>
              )}
              {/* image */}
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                sizes="150px"
                fill
                className="object-cover"
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
}
