import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const products = [
  {
    name: '"Drama Club Brand "Ticket Stub" Oversized Cotton Tee',
    price: "$35.00",
    image: "/images/products/sharon-hill-tee.png",
    slug: "sharon-hill-unisex-classic-tee",
  },
  {
    name: '"Drama Club "Femme Big Face Logo Women\'s Relaxed T-Shirt',
    price: "$30.00",
    image: "/images/products/femme-tee.png",
    slug: "femme-whisper-logo-tee",
  },
  {
    name: 'Drama Club Brand Knit Crew Neck Sweater "Hyena Head"',
    price: "$100.00",
    image: "/images/products/joe-gans-sweater.png",
    slug: "joe-gans-commemorative-knit-sweater",
  },
  {
    name: 'Drama Club Brand "Coat of Arms" Unisex Track Jacket',
    price: "$80.00",
    image: "/images/products/camo-windbreaker.png",
    slug: "camo-weather-windbreaker",
  },
  {
    name: "The Drama Club Dramatic Duffle Bag(Army Green)",
    price: "$100.00",
    image: "/images/products/drama-club-duffle.png",
    slug: "drama-club-big-face-throw-blanket",
  },
];

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
            href="/collections/anti-gun"
            className="shrink-0 transition hover:text-white"
          >
            Anti-Gun
          </Link>

          <Link
            href="/collections/joe-gans"
            className="shrink-0 transition hover:text-white"
          >
            Joe Gans
          </Link>

          <Link
            href="/collections/knit-sweaters"
            className="shrink-0 transition hover:text-white"
          >
            Knit Sweaters
          </Link>

          <Link
            href="/collections/femme"
            className="shrink-0 transition hover:text-white"
          >
            Femme
          </Link>

          <Link
            href="/collections/jackets"
            className="shrink-0 transition hover:text-white"
          >
            Jackets
          </Link>

          <Link
            href="/collections/accessories"
            className="shrink-0 transition hover:text-white"
          >
            Accessories
          </Link>

          <Link
            href="/collections/kids"
            className="shrink-0 transition hover:text-white"
          >
            Kids
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
          {products.length} Pieces
        </p>
      </section>

      {/* PRODUCT GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
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
                  {product.price}
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
      </section>

      {/* BOTTOM STATEMENT */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Drama Club Brand
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Every piece tells a story.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/50">
            Explore the collections and find the pieces that speak to your
            style, your culture, and your story.
          </p>

          <Link
            href="/collections"
            className="mt-9 inline-flex border border-white/40 px-7 py-4 text-xs uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
          >
            Explore Collections
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}