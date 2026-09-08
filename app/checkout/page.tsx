"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart/CartContext";
import Footer from "@/components/layout/Footer";

export default function CheckoutPage() {
  const { items, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-black text-white">
        <header className="border-b border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <Link
              href="/shop"
              className="text-xs uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
            >
              ← Continue Shopping
            </Link>

            <Link
              href="/cart"
              className="text-xs uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
            >
              Cart
            </Link>
          </div>
        </header>

        <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Drama Club Brand Clothing x Accessories
          </p>

          <h1 className="mt-5 font-serif text-5xl">
            Your Cart is Empty
          </h1>

          <Link
            href="/shop"
            className="mt-8 bg-white px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-black transition hover:bg-white/80"
          >
            Shop the Collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/cart"
            className="text-xs uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
          >
            ← Back to Cart
          </Link>

          <p className="text-xs uppercase tracking-[0.25em]">
            Checkout
          </p>
        </div>
      </header>

      {/* CHECKOUT */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Drama Club Brand Clothing x Accessories
          </p>

          <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
            Checkout
          </h1>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
          {/* FORM */}
          <div className="space-y-12">
            {/* CONTACT */}
            <section>
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  01
                </p>

                <h2 className="mt-2 font-serif text-3xl">
                  Contact Information
                </h2>
              </div>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-white/20 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-white/20 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white"
                />
              </div>
            </section>

            {/* SHIPPING */}
            <section>
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  02
                </p>

                <h2 className="mt-2 font-serif text-3xl">
                  Shipping Address
                </h2>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-white/20 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-white/20 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Address"
                  className="w-full border border-white/20 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white"
                />

                <input
                  type="text"
                  placeholder="Apartment, Suite, etc. (Optional)"
                  className="w-full border border-white/20 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white"
                />

                <div className="grid gap-4 sm:grid-cols-3">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full border border-white/20 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white"
                  />

                  <input
                    type="text"
                    placeholder="State"
                    className="w-full border border-white/20 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white"
                  />

                  <input
                    type="text"
                    placeholder="ZIP Code"
                    className="w-full border border-white/20 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white"
                  />
                </div>
              </div>
            </section>

            {/* SHIPPING METHOD */}
            <section>
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  03
                </p>

                <h2 className="mt-2 font-serif text-3xl">
                  Delivery
                </h2>
              </div>

              <div className="border border-white/20 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">
                      Standard Shipping
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      Shipping calculated based on order
                    </p>
                  </div>

                  <p className="text-sm">
                    Calculated later
                  </p>
                </div>
              </div>
            </section>

            {/* PLACE ORDER */}
            <section>
              <button
                type="button"
                className="w-full bg-white px-8 py-5 text-sm font-medium uppercase tracking-[0.2em] text-black transition hover:bg-white/80"
              >
                Place Order
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-white/30">
                Payment processing and order confirmation will be
                connected during the production setup.
              </p>
            </section>
          </div>

          {/* ORDER SUMMARY */}
          <aside className="h-fit border border-white/10 p-6 md:p-8 lg:sticky lg:top-8">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Your Order
            </p>

            <div className="mt-8 space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-white">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />

                    <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center bg-black px-1 text-[10px]">
                      {item.quantity}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm leading-5">
                      {item.name}
                    </p>

                    {item.size && (
                      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/40">
                        Size: {item.size}
                      </p>
                    )}

                    <p className="mt-2 text-xs text-white/60">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">
                  Subtotal
                </span>

                <span className="text-sm">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-white/60">
                  Shipping
                </span>

                <span className="text-xs uppercase tracking-[0.1em] text-white/40">
                  Calculated later
                </span>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl">
                    Total
                  </span>

                  <span className="font-serif text-xl">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="/cart"
              className="mt-6 block text-center text-xs uppercase tracking-[0.2em] text-white/40 underline underline-offset-4 transition hover:text-white"
            >
              Edit Cart
            </Link>
          </aside>
        </div>
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