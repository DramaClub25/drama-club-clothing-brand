"use client";

import { useState } from "react";
import Image from "next/image";

type ProductGalleryProps = {
  images: {
    src: string;
    label: string;
  }[];
};

export default function ProductGallery({
  images,
}: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-white">
        <Image
          src={images[activeImage].src}
          alt={images[activeImage].label}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={`${image.label}-${index}`}
            type="button"
            onClick={() => setActiveImage(index)}
            className={`relative aspect-square overflow-hidden border transition ${
              activeImage === index
                ? "border-white"
                : "border-white/20 opacity-60 hover:opacity-100"
            }`}
            aria-label={`View ${image.label}`}
          >
            <Image
              src={image.src}
              alt={image.label}
              fill
              className="object-cover"
            />

            <span className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 text-[9px] uppercase tracking-[0.15em] text-white">
              {image.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}