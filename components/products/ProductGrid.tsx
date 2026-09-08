"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { MerchProduct } from "@/data/merch/types";

type ProductGridProps = {
  products: MerchProduct[];
};

export default function ProductGrid({
  products,
}: ProductGridProps) {
  const PRODUCTS_PER_PAGE = 12;

const [currentPage, setCurrentPage] = useState(1);
const [loadedExtra, setLoadedExtra] = useState(0);
const [sortBy, setSortBy] = useState("featured");

const sortedProducts = [...products].sort((a, b) => {
  switch (sortBy) {
    case "price-low":
      return a.price - b.price;

    case "price-high":
      return b.price - a.price;

    case "az":
      return a.name.localeCompare(b.name);

    case "featured":
    case "newest":
    default:
      return 0;
  }
});

const totalPages = Math.ceil(
  sortedProducts.length / PRODUCTS_PER_PAGE
);

const startIndex =
  (currentPage - 1) * PRODUCTS_PER_PAGE;

const endIndex =
  startIndex + PRODUCTS_PER_PAGE + loadedExtra;

const visibleProducts = sortedProducts.slice(
  startIndex,
  endIndex
);

const hasMoreProducts =
  endIndex < sortedProducts.length;


const goToPage = (page: number) => {
  setCurrentPage(page);
  setLoadedExtra(0);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (

  <>
    {/* SORTING */}
    <div className="mb-10 flex items-center justify-end border-b border-white/10 pb-6">
      <label className="flex items-center gap-3">
        <span className="text-xs uppercase tracking-[0.2em] text-white/40">
          Sort By
        </span>

        <select
          value={sortBy}
          onChange={(event) => {
            setSortBy(event.target.value);
            setCurrentPage(1);
            setLoadedExtra(0);
          }}
          className="cursor-pointer border border-white/20 bg-black px-4 py-3 text-xs uppercase tracking-[0.15em] text-white outline-none transition hover:border-white"
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
          <option value="az">A → Z</option>
        </select>
      </label>
    </div>

    
      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <article key={product.slug} className="group">
            <Link href={`/products/${product.slug}`}>
              {/* IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 flex items-end bg-black/0 p-5 transition duration-500 group-hover:bg-black/20">
                  <span className="translate-y-3 border border-white bg-white px-5 py-3 text-xs uppercase tracking-[0.2em] text-black opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    View Product
                  </span>
                </div>
              </div>
            </Link>

            {/* PRODUCT INFO */}
            <div className="pt-5">
              <Link href={`/products/${product.slug}`}>
                <h3 className="font-serif text-xl leading-tight transition hover:text-white/60">
                  {product.name}
                </h3>
              </Link>

              <p className="mt-3 text-sm text-white/60">
                ${product.price.toFixed(2)}
              </p>

              <Link
                href={`/products/${product.slug}`}
                className="mt-5 inline-block border-b border-white/40 pb-1 text-xs uppercase tracking-[0.2em] text-white/70 transition hover:border-white hover:text-white"
              >
                Shop Product
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="mt-16 flex items-center justify-center gap-2">
          {/* PREVIOUS */}
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-3 text-xs uppercase tracking-[0.15em] text-white/50 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-20"
          >
            ←
          </button>

          {/* PAGE NUMBERS */}
          {Array.from(
            { length: totalPages },
            (_, index) => {
              const page = index + 1;

              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={`min-w-10 px-3 py-3 text-xs transition ${
                    currentPage === page
                      ? "bg-white text-black"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {page}
                </button>
              );
            }
          )}

          {/* NEXT */}
          <button
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-3 text-xs uppercase tracking-[0.15em] text-white/50 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-20"
          >
            →
          </button>
        </div>
      )}

      {/* LOAD MORE */}
      {hasMoreProducts && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() =>
              setLoadedExtra(
                (current) => current + PRODUCTS_PER_PAGE
              )
            }
            className="border border-white/30 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}