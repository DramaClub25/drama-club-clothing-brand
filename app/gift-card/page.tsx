"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

const presetAmounts = [25, 50, 100, 200];

export default function GiftCardPage() {
  const [amount, setAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [recipientType, setRecipientType] = useState<"someone" | "myself">(
    "someone"
  );

  const selectedAmount =
    customAmount !== "" ? Number(customAmount) : amount;

  const total = selectedAmount * quantity;

  return (
    <main className="bg-black text-white">
      <Header />

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
            Drama Club Brand Clothing x Accessories
          </p>

          <h1 className="font-serif text-5xl leading-tight tracking-tight sm:text-6xl md:text-8xl">
            Dramatic eGift Card
          </h1>

          <div className="mx-auto mt-7 h-px w-16 bg-white/70" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            You want to get someone something from Drama Club Brand Clothing x
            Accessories but don't know what? Give them the Drama Club
            Dramatic eGift Card.
          </p>
        </div>
      </section>

      {/* GIFT CARD */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">

            
            {/* IMAGE / CARD */}
            <div>
            <div className="relative overflow-hidden border border-white/10 bg-white/[0.04]">
                <Image
                src="/images/gift-card/drama-club-gift-card.png"
                alt="Drama Club Brand Clothing x Accessories Gift Card"
                width={1536}
                height={1024}
                className="h-auto w-full object-cover"
                priority
                />
            </div>

            <p className="mt-5 text-xs leading-6 text-white/40">
                Give someone the freedom to choose their own Drama Club Brand Clothing x
                Accessories piece.
            </p>
            </div>

          {/* FORM */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Gift Card
            </p>

            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Give the gift of Drama.
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Choose an amount, tell us who it's for, and add a personal
              message.
            </p>

            {/* AMOUNT */}
            <div className="mt-10">
              <label className="mb-4 block font-serif text-2xl">
                Amount
              </label>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {presetAmounts.map((preset) => {
                  const selected =
                    amount === preset && customAmount === "";

                  return (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => {
                        setAmount(preset);
                        setCustomAmount("");
                      }}
                      className={`border px-5 py-4 font-serif text-xl transition ${
                        selected
                          ? "border-white bg-white text-black"
                          : "border-white/30 text-white hover:border-white"
                      }`}
                    >
                      ${preset}
                    </button>
                  );
                })}
              </div>

              <div className="mt-3">
                <label htmlFor="customAmount" className="sr-only">
                  Other amount
                </label>

                <input
                  id="customAmount"
                  type="number"
                  min="1"
                  step="1"
                  value={customAmount}
                  onChange={(event) => {
                    setCustomAmount(event.target.value);
                  }}
                  placeholder="Other amount"
                  className="w-full border border-white/30 bg-transparent px-5 py-4 font-serif text-xl text-white outline-none placeholder:text-white/50 focus:border-white"
                />
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mt-10">
              <label className="mb-4 block font-serif text-2xl">
                Quantity
              </label>

              <div className="flex w-fit items-center border border-white/30">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  className="px-6 py-4 text-2xl text-white/50 transition hover:text-white"
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span className="min-w-14 text-center font-serif text-xl">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="px-6 py-4 text-2xl text-white/50 transition hover:text-white"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* RECIPIENT */}
            <div className="mt-10">
              <label className="mb-4 block font-serif text-2xl">
                Who is the gift card for?
              </label>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setRecipientType("someone")}
                  className={`border px-5 py-5 font-serif text-lg transition ${
                    recipientType === "someone"
                      ? "border-white bg-white text-black"
                      : "border-white/30 hover:border-white"
                  }`}
                >
                  For someone else
                </button>

                <button
                  type="button"
                  onClick={() => setRecipientType("myself")}
                  className={`border px-5 py-5 font-serif text-lg transition ${
                    recipientType === "myself"
                      ? "border-white bg-white text-black"
                      : "border-white/30 hover:border-white"
                  }`}
                >
                  For myself
                </button>
              </div>
            </div>

            {/* RECIPIENT DETAILS */}
            {recipientType === "someone" && (
              <div className="mt-10 space-y-5">
                <div>
                  <label
                    htmlFor="recipientEmail"
                    className="mb-3 block font-serif text-2xl"
                  >
                    Recipient email *
                  </label>

                  <input
                    id="recipientEmail"
                    name="recipientEmail"
                    type="email"
                    required
                    placeholder="Recipient email"
                    className="w-full border border-white/30 bg-transparent px-5 py-5 text-white outline-none placeholder:text-white/40 focus:border-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="recipientName"
                    className="mb-3 block font-serif text-2xl"
                  >
                    Recipient name
                  </label>

                  <input
                    id="recipientName"
                    name="recipientName"
                    type="text"
                    placeholder="Recipient name"
                    className="w-full border border-white/30 bg-transparent px-5 py-5 text-white outline-none placeholder:text-white/40 focus:border-white"
                  />
                </div>
              </div>
            )}

            {/* DELIVERY */}
            {recipientType === "someone" && (
              <div className="mt-10">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="deliveryDate"
                      className="mb-3 block font-serif text-2xl"
                    >
                      Delivery date
                    </label>

                    <input
                      id="deliveryDate"
                      name="deliveryDate"
                      type="date"
                      defaultValue={new Date()
                        .toISOString()
                        .split("T")[0]}
                      className="w-full border border-white/30 bg-transparent px-5 py-5 text-white outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="deliveryTime"
                      className="mb-3 block font-serif text-2xl"
                    >
                      Delivery time
                    </label>

                    <select
                      id="deliveryTime"
                      name="deliveryTime"
                      defaultValue="now"
                      className="w-full border border-white/30 bg-black px-5 py-5 text-white outline-none focus:border-white"
                    >
                      <option value="now">Now</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </div>
                </div>

                <p className="mt-4 text-sm text-white/40">
                  Gift card never expires.
                </p>
              </div>
            )}

            {/* MESSAGE */}
            {recipientType === "someone" && (
              <div className="mt-10">
                <label
                  htmlFor="message"
                  className="mb-3 block font-serif text-2xl"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Add a message..."
                  className="w-full resize-none border border-white/30 bg-transparent px-5 py-5 text-white outline-none placeholder:text-white/40 focus:border-white"
                />
              </div>
            )}

            {/* TOTAL */}
            <div className="mt-10 flex items-end justify-between border-t border-white/10 pt-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Total
                </p>

                <p className="mt-2 font-serif text-3xl">
                  ${Number.isFinite(total) ? total.toFixed(2) : "0.00"}
                </p>
              </div>

              <p className="text-xs text-white/40">
                {quantity} {quantity === 1 ? "gift card" : "gift cards"}
              </p>
            </div>

            {/* BUY */}
            <button
              type="button"
              className="mt-8 w-full bg-white px-8 py-6 font-serif text-2xl text-black transition hover:bg-white/80"
            >
              Buy Now
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-white/30">
              Gift card purchasing will be connected to the store checkout
              system.
            </p>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-28">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Drama Club Brand Clothing x Accessories
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Drama Club Plays on the Stage of Life.
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}