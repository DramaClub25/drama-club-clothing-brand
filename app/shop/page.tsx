import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { merchProducts } from "@/data/merch";
import ProductGrid from "@/components/products/ProductGrid";



export default function ShopPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      {/* SHOP HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/50">
            Drama Club Brand Clothing × Accessories
          </p>

          <h1 className="font-serif text-5xl tracking-tight sm:text-6xl md:text-8xl">
            Shop
          </h1>

          <div className="mx-auto mt-7 h-px w-16 bg-white/70" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Clothing, accessories, and statement pieces made for those who
            understand that style is part of the story.
          </p>
        </div>
      </section>

      {/* CATEGORY NAV */}
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-6 py-6 text-xs uppercase tracking-[0.2em] text-white/60">
          <Link
            href="/shop"
            className="shrink-0 text-white transition hover:text-white/70"
          >
            All
          </Link>

          <Link
            href="/collections/knit-sweaters"
            className="shrink-0 transition hover:text-white"
          >
            Knit Sweaters
          </Link>

          <Link
            href="/collections/t-shirts"
            className="shrink-0 transition hover:text-white"
          >
            T-Shirts
          </Link>

          <Link
            href="/collections/hoodies"
            className="shrink-0 transition hover:text-white"
          >
            Hoodies
          </Link>

          <Link
            href="/collections/jackets"
            className="shrink-0 transition hover:text-white"
          >
            Jackets
          </Link>

          <Link
            href="/collections/bottoms"
            className="shrink-0 transition hover:text-white"
          >
            Bottoms
          </Link>

          <Link
            href="/collections/shirts"
            className="shrink-0 transition hover:text-white"
          >
            Shirts
          </Link>

          <Link
            href="/collections/femme"
            className="shrink-0 transition hover:text-white"
          >
            Femme
          </Link>

          <Link
            href="/collections/kids"
            className="shrink-0 transition hover:text-white"
          >
            Kids
          </Link>

          <Link
            href="/collections/accessories"
            className="shrink-0 transition hover:text-white"
          >
            Accessories
          </Link>

        </div>
      </section>

      {/* SHOP HEADER */}
      <section className="mx-auto flex max-w-7xl items-end justify-between px-6 pb-8 pt-16">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
            The Collection
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl">
            Shop All
          </h2>
        </div>

        <p className="hidden text-xs uppercase tracking-[0.2em] text-white/40 sm:block">
          {merchProducts.length} Pieces
        </p>
      </section>

        {/* PRODUCT GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <ProductGrid products={merchProducts} />
      </section>

             
      <Footer />
    </main>
  );
}