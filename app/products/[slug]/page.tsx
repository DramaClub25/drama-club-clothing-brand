import Image from "next/image";
import Link from "next/link";
import ProductGallery from "@/components/products/ProductGallery";

const products = [
{
  name: 'Drama Club Brand "Ticket Stub" Oversized Cotton Tee',
  price: "$60.00",
  category: "T-Shirts",
  description:
  "The Drama Club Brand Ticket Stub Oversized Cotton Tee. A statement piece designed for the stage of life.",
  image: "/images/products/sharon-hill-tee.png",
  images: [
    {
      src: "/images/products/sharon-hill-tee.png",
      label: "Front",
    },
    {
      src: "/images/products/sharon-hill-tee-back.png",
      label: "Back",
    },
    {
      src: "/images/products/sharon-hill-tee-side.png",
      label: "Side",
    },
  ],
  slug: "sharon-hill-unisex-classic-tee",
},
  {
    name: '"Drama Club "Femme Big Face Logo" Women\'s Relaxed T-Shirt',
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
    name: "The Drama Club Dramatic Duffle Bag (Army Green)",
    price: "$100.00",
    image: "/images/products/drama-club-duffle.png",
    slug: "drama-club-big-face-throw-blanket",
  },
];


export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Drama Club Brand
          </p>

          <h1 className="mt-5 font-serif text-5xl">
            Product Not Found
          </h1>

          <Link
            href="/shop"
            className="mt-8 border border-white/40 px-7 py-4 text-xs uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black text-white">
      {/* HEADER */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/shop"
            className="text-xs uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
          >
            ← Back to Shop
          </Link>


          <Link
            href="/cart"
            className="text-xs uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
          >
            Cart
          </Link>
        </div>
      </header>

      {/* PRODUCT */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* IMAGE */}
          <div>
         {product.images && (
            <ProductGallery images={product.images} />
          )}

            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/30">
              Drama Club Brand
            </p>
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              {product.category ?? "Drama Club Brand"}
            </p>

            <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>

            <p className="mt-7 text-2xl text-white/90">
              {product.price}
            </p>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/60">
              {product.description ?? "Drama Club Brand clothing and accessories."}
            </p>

            {/* SIZE */}
            <div className="mt-10">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em]">
                  Select Size
                </p>

                <button className="text-xs text-white/40 underline underline-offset-4">
                  Size Guide
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="border border-white/20 py-4 text-sm transition hover:border-white hover:bg-white hover:text-black"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mt-8">
              <p className="mb-4 text-xs uppercase tracking-[0.2em]">
                Quantity
              </p>

              <div className="flex w-fit items-center border border-white/20">
                <button className="px-5 py-3 text-lg text-white/60 transition hover:text-white">
                  −
                </button>

                <span className="min-w-12 text-center text-sm">
                  1
                </span>

                <button className="px-5 py-3 text-lg text-white/60 transition hover:text-white">
                  +
                </button>
              </div>
            </div>

            {/* ADD TO CART */}
            <button className="mt-8 w-full bg-white px-8 py-5 text-sm font-medium uppercase tracking-[0.2em] text-black transition hover:bg-white/80">
              Add to Cart
            </button>

            {/* DETAILS */}
            <div className="mt-10 border-t border-white/10">
              <div className="border-b border-white/10 py-5">
                <p className="text-xs uppercase tracking-[0.2em]">
                  Product Details
                </p>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  Authentic Drama Club Brand merchandise. Product
                  availability, materials, sizing, and care information
                  will be managed through the store.
                </p>
              </div>

              <div className="py-5">
                <p className="text-xs uppercase tracking-[0.2em]">
                  Shipping & Returns
                </p>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  Please review our shipping and return policies before
                  completing your purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Drama Club Brand
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Drama Club Plays on the Stage of Life.
          </h2>

          <Link
            href="/shop"
            className="mt-9 inline-flex border border-white/40 px-7 py-4 text-xs uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    </main>
  );
}