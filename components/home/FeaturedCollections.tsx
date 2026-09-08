"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const collections = [
{
    name: "BRAND TEES",
    image: "/images/collections/sharonHill.jpg",
    href: "/collections/sharon-hill",
  },
  {
    name: "JOE GANS",
    image: "/images/collections/joeGans.jpg",
    href: "/collections/joe-gans",
  },
  {
    name: "FEMME!",
    image: "/images/collections/femme.jpg",
    href: "/collections/femme",
  },
  {
    name: "JACKETS",
    image: "/images/collections/camoWindbreaker.jpg",
    href: "/collections/jackets",
  },
  {
    name: "ACCESSORIES",
    image: "/images/collections/blanket.jpg",
    href: "/collections/accessories",
  },
];

export default function FeaturedCollections() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "right" ? 350 : -350,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white px-6 py-20 text-black md:px-10 md:py-24">
      {/* Heading */}
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-black/50">
          Drama Club Brand Clothing x Accessories
        </p>

        <h2 className="font-serif text-4xl md:text-5xl">
          Featured Collections
        </h2>

        <div className="mx-auto mt-4 h-px w-10 bg-black" />
      </div>

      {/* Carousel */}
      <div className="relative mx-auto max-w-[1400px]">
        {/* Left Arrow */}
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous collections"
          className="absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center text-4xl md:flex"
        >
          ‹
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        >
          {collections.map((collection) => (
            <Link
              key={collection.name}
              href={collection.href}
              className="group relative min-w-[220px] overflow-hidden bg-black sm:min-w-[250px] md:min-w-[270px]"
            >
              {/* Image */}
        <div className="relative aspect-[3/4]">
            <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
            />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/40" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-center text-white">
                  <h3 className="font-serif text-xl">
                    {collection.name}
                  </h3>

                  <span className="mt-4 inline-flex border border-white px-5 py-2 text-[10px] uppercase tracking-[0.2em] transition group-hover:bg-white group-hover:text-black">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next collections"
          className="absolute right-0 top-1/2 z-10 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center text-4xl md:flex"
        >
          ›
        </button>
      </div>
    </section>
  );
}