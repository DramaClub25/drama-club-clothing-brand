import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ReturnsPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
            Drama Club Brand Clothing x Accessories
          </p>

          <h1 className="font-serif text-5xl tracking-tight sm:text-6xl md:text-8xl">
            Returns & Refunds
          </h1>

          <div className="mx-auto mt-7 h-px w-16 bg-white/70" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            We want you to be happy with your Drama Club Brand purchase.
            Please review our return and refund guidelines below.
          </p>
        </div>
      </section>

      {/* POLICY */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="space-y-16">
          {/* Returns */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              01
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Returns
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                We accept returns on eligible merchandise within{" "}
                <span className="text-white">30 days</span> of delivery.
              </p>

              <p>
                Items must be unworn, unused, and in their original condition
                with any original tags or packaging still attached.
              </p>

              <p>
                Items that have been worn, washed, damaged, altered, or
                otherwise used may not qualify for a return.
              </p>
            </div>
          </div>

          {/* Non-Returnable */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              02
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Non-Returnable Items
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                Certain items may be final sale and cannot be returned or
                refunded.
              </p>

              <p>
                This may include gift cards, personalized merchandise,
                clearance or final-sale items, and products that have been
                worn or used.
              </p>

              <p>
                Any final-sale restrictions will be identified at the time of
                purchase.
              </p>
            </div>
          </div>

          {/* Refunds */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              03
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Refunds
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                Once your returned item is received and inspected, we will
                determine whether it qualifies for a refund.
              </p>

              <p>
                Approved refunds will be issued to the original payment
                method.
              </p>

              <p>
                Please allow your financial institution additional processing
                time after the refund has been issued.
              </p>
            </div>
          </div>

          {/* Damaged / Incorrect */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              04
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Damaged or Incorrect Items
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                If your order arrives damaged, defective, or different from
                what you ordered, please contact us as soon as possible.
              </p>

              <p>
                Include your order number and photographs of the item and
                packaging when contacting us so we can help resolve the issue.
              </p>
            </div>
          </div>

          {/* Exchanges */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              05
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Exchanges
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                If you need a different size or item, please contact us before
                sending your order back.
              </p>

              <p>
                Exchanges are subject to product availability. If the
                requested item is unavailable, a refund may be offered instead.
              </p>
            </div>
          </div>

          {/* How to Start */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              06
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Start a Return
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                To begin a return or ask a question about an order, contact
                the Drama Club Brand team with your order number and the
                reason for your request.
              </p>

              <p>
                Our team will provide the next steps and return instructions.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex border border-white/40 px-7 py-4 text-xs uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
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