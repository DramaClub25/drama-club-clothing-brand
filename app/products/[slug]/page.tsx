import Link from "next/link";
import ProductGallery from "@/components/products/ProductGallery";
import { merchProducts } from "@/data/merch";
import ProductOptions from "@/components/products/ProductOptions";
import CartLink from "@/components/cart/CartLink";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = merchProducts.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Drama Club Brand Clothing x Accessories
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

  const galleryImages =
    product.images && product.images.length > 0
      ? product.images
      : [
          {
            src: product.image,
            label: "Product",
          },
        ];

const sizes = product.sizes ?? [];


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

          <CartLink />

        </div>
      </header>

      {/* PRODUCT */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* IMAGE */}
          <div>
            <ProductGallery images={galleryImages} />

            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/30">
              Drama Club Brand Clothing x Accessories
            </p>
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              {product.category}
            </p>

            <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>

            <p className="mt-7 text-2xl text-white/90">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/60">
              {product.description ||
                "Drama Club Brand Clothing and Accessories."}
            </p>

            <ProductOptions
                product={{
                  id: product.slug,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                }}
                sizes={sizes}
              />

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
            Drama Club Brand Clothing x Accessories
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