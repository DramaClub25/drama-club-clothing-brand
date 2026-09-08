"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart/CartContext";
import Footer from "@/components/layout/Footer";

export default function CartPage() {
  const {
    items,
    cartTotal,
    cartCount,
    updateQuantity,
    removeFromCart,
  } = useCart();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/shop"
            className="text-xs uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
          >
            ← Continue Shopping
          </Link>

          <p className="text-xs uppercase tracking-[0.25em]">
            Cart
          </p>
        </div>
      </header>

      {/* CART */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Drama Club Brand Clothing x Accessories
          </p>

          <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
            Your Cart
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="border-t border-white/10 py-24 text-center">
            <h2 className="font-serif text-3xl">
              Your cart is empty.
            </h2>

            <p className="mt-4 text-sm text-white/50">
              Nothing here yet. Find something worth making
              an entrance in.
            </p>

            <Link
              href="/shop"
              className="mt-8 inline-flex bg-white px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-black transition hover:bg-white/80"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            {/* ITEMS */}
            <div className="border-t border-white/10">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="grid gap-6 border-b border-white/10 py-8 sm:grid-cols-[140px_1fr] sm:gap-8"
                >
                  {/* IMAGE */}
                  <div className="relative aspect-square overflow-hidden bg-white">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* INFO */}
                  <div className="flex flex-col justify-between gap-6">
                    <div>
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <h2 className="font-serif text-2xl leading-tight">
                            {item.name}
                          </h2>

                          {item.size && (
                            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/40">
                              Size: {item.size}
                            </p>
                          )}
                        </div>

                        <p className="whitespace-nowrap text-sm">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      {/* QUANTITY */}
                      <div className="flex items-center border border-white/20">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1,
                              item.size
                            )
                          }
                          className="px-4 py-2 text-lg text-white/60 transition hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>

                        <span className="min-w-10 text-center text-sm">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1,
                              item.size
                            )
                          }
                          className="px-4 py-2 text-lg text-white/60 transition hover:text-white"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(item.id, item.size)
                        }
                        className="text-xs uppercase tracking-[0.2em] text-white/40 underline underline-offset-4 transition hover:text-white"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <aside className="h-fit border border-white/10 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Order Summary
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
                {cartCount} {cartCount === 1 ? "Item" : "Items"}
              </p>

              <div className="mt-8 flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-sm text-white/60">
                  Subtotal
                </span>

                <span className="text-sm">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between py-5">
                <span className="text-sm text-white/60">
                  Shipping
                </span>

                <span className="text-xs uppercase tracking-[0.15em] text-white/40">
                  Calculated at checkout
                </span>
              </div>

              <div className="border-t border-white/10 pt-5">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl">
                    Total
                  </span>

                  <span className="font-serif text-xl">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="mt-8 flex w-full items-center justify-center bg-white px-6 py-5 text-xs font-medium uppercase tracking-[0.2em] text-black transition hover:bg-white/80"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/shop"
                className="mt-3 flex w-full items-center justify-center border border-white/20 px-6 py-5 text-xs uppercase tracking-[0.2em] text-white transition hover:border-white"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </section>

      {/* STATEMENT */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="font-serif text-3xl sm:text-4xl">
            Drama Club Plays on the Stage of Life.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}