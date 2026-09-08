import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { merchProducts } from "@/data/merch";

const collections = [
  {
    slug: "t-shirts",
    name: "T-Shirts",
    category: "T-Shirts",
    description:
      "Graphic tees, bold artwork, cultural references, and everyday pieces built around the Drama Club Brand point of view.",
  },
  {
    slug: "knit-sweaters",
    name: "Knit Sweaters",
    category: "Knit Sweaters",
    description:
      "Statement knitwear featuring bold patterns, cultural references, and seasonal Drama Club designs.",
  },
  {
    slug: "hoodies",
    name: "Hoodies",
    category: "Hoodies",
    description:
      "Heavyweight layers and signature graphics designed for comfort with a Drama Club edge.",
  },
  {
    slug: "jackets",
    name: "Jackets",
    category: "Jackets",
    description:
      "Outerwear designed to make a statement from the street to the clubhouse.",
  },
  {
    slug: "shirts",
    name: "Shirts",
    category: "Shirts",
    description:
      "Elevated shirts and statement pieces that bring the Drama Club aesthetic into your rotation.",
  },
  {
    slug: "bottoms",
    name: "Bottoms",
    category: "Bottoms",
    description:
      "Pants, shorts, and other pieces designed to complete the Drama Club look.",
  },
  {
    slug: "femme",
    name: "Femme",
    category: "Femme",
    description:
      "A collection of pieces designed with the Drama Club femme perspective in mind.",
  },
  {
    slug: "kids",
    name: "Kids",
    category: "Kids",
    description:
      "Drama Club pieces made for the younger generation.",
  },
  {
    slug: "accessories",
    name: "Accessories",
    category: "Accessories",
    description:
      "The finishing touches — bags, accessories, and pieces that complete the Drama Club experience.",
  },
];

export default function CollectionsPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
            Drama Club Brand Clothing x Accessories
          </p>

          <h1 className="font-serif text-5xl tracking-tight sm:text-6xl md:text-8xl">
            Collections
          </h1>

          <div className="mx-auto mt-7 h-px w-16 bg-white/70" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Explore the world of Drama Club through clothing, accessories,
            artwork, and pieces created to stand apart.
          </p>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
              Explore
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Shop by Collection
            </h2>
          </div>

          <Link
            href="/shop"
            className="hidden text-xs uppercase tracking-[0.2em] text-white/50 transition hover:text-white sm:block"
          >
            View All Products →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => {
            const products = merchProducts.filter(
              (product) => product.category === collection.category
            );

            const featuredProduct = products[0];

            return (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group"
              >
                <article>
                  {/* IMAGE */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                    {featuredProduct ? (
                      <Image
                        src={featuredProduct.image}
                        alt={collection.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <p className="text-xs uppercase tracking-[0.25em] text-white/20">
                          Coming Soon
                        </p>
                      </div>
                    )}

                    {/* HOVER */}
                    <div className="absolute inset-0 flex items-end bg-black/0 p-6 transition duration-500 group-hover:bg-black/25">
                      <span className="translate-y-3 border border-white bg-white px-6 py-3 text-xs uppercase tracking-[0.2em] text-black opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        Explore Collection
                      </span>
                    </div>
                  </div>

                  {/* INFO */}
                  <div className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-2xl leading-tight transition group-hover:text-white/70">
                        {collection.name}
                      </h3>

                      <span className="pt-1 text-xs uppercase tracking-[0.15em] text-white/30">
                        {products.length}
                      </span>
                    </div>

                    <p className="mt-4 max-w-md text-sm leading-6 text-white/50">
                      {collection.description}
                    </p>

                    <div className="mt-5 inline-block border-b border-white/30 pb-1 text-xs uppercase tracking-[0.2em] text-white/60 transition group-hover:border-white group-hover:text-white">
                      Shop Collection
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* MOBILE SHOP ALL */}
        <div className="mt-16 text-center sm:hidden">
          <Link
            href="/shop"
            className="inline-block border border-white/30 px-7 py-4 text-xs uppercase tracking-[0.2em] transition hover:border-white hover:bg-white hover:text-black"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Drama Club Brand Clothing x Accessories
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Drama Club Plays on the Stage of Life.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/50">
            Every collection is part of the story. Find the pieces that speak
            to you.
          </p>

          <Link
            href="/shop"
            className="mt-9 inline-flex border border-white/40 px-7 py-4 text-xs uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
          >
            Shop All
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}