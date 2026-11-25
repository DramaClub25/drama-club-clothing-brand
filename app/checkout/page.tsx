
"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";
import Footer from "@/components/layout/Footer";

export default function CheckoutPage() {
  const { items, cartTotal } = useCart();

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data.error || "Unable to start checkout.");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
      setIsLoading(false);
    }
  };

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
            href="/shop"
            className="text-xs uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
          >
            Continue Shopping
          </Link>

          <p className="text-xs uppercase tracking-[0.25em]">
            Checkout
          </p>

          <Link
            href="/cart"
            aria-label={`View cart, ${cartCount} items`}
            className="relative flex items-center gap-2 text-white/70 transition hover:text-white"
          >
            <ShoppingBag size={21} strokeWidth={1.5} />

            <span className="text-xs uppercase tracking-wider">
              Cart
            </span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-medium text-black">
              {cartCount}
            </span>
          </Link>
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
          {/* CHECKOUT INFORMATION */}
          <div className="flex flex-col justify-center">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Secure Payment
              </p>

              <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
                Almost Yours.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/60">
                Your items are ready. Continue to our secure checkout
                powered by Stripe to enter your contact information
                and shipping address and complete your purchase.
              </p>

              <div className="mt-8 border border-white/10 p-5">
                <div className="flex items-center gap-3">
                  <ShoppingBag size={20} strokeWidth={1.5} />

                  <p className="text-sm">
                    {cartCount} {cartCount === 1 ? "item" : "items"} in your bag
                  </p>
                </div>

                <p className="mt-3 text-xs leading-6 text-white/40">
                  Your shipping details will be collected during the
                  secure payment process.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                disabled={isLoading}
                className="mt-8 w-full bg-white px-8 py-5 text-sm font-medium uppercase tracking-[0.2em] text-black transition hover:bg-white/80 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading
                  ? "Redirecting to Stripe..."
                  : "Continue to Payment"}
              </button>

              {error && (
                <p className="mt-4 text-center text-sm text-red-400">
                  {error}
                </p>
              )}

              <p className="mt-4 text-center text-xs leading-5 text-white/30">
                Secure checkout powered by Stripe.
              </p>
            </div>
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
