import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ShippingPage() {
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
            Shipping Info
          </h1>

          <div className="mx-auto mt-7 h-px w-16 bg-white/70" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Everything you need to know about getting your Drama Club Brand
            order from us to you.
          </p>
        </div>
      </section>

      {/* SHIPPING POLICY */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="space-y-16">
          {/* Processing */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              01
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Order Processing
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                Orders are processed after your purchase has been successfully
                completed.
              </p>

              <p>
                Processing times may vary depending on product availability,
                order volume, and whether an item is made to order.
              </p>

              <p>
                You will receive shipping information once your order has been
                prepared and shipped.
              </p>
            </div>
          </div>

          {/* Shipping */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              02
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Shipping
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                Shipping options and costs will be displayed during checkout
                based on your delivery address and order.
              </p>

              <p>
                Available shipping methods may vary depending on your
                location and the products included in your order.
              </p>
            </div>
          </div>

          {/* Delivery */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              03
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Delivery
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                Delivery times begin once your order has shipped and may vary
                depending on your selected shipping method and destination.
              </p>

              <p>
                Once a package has been handed to the shipping carrier, Drama
                Club Brand is not responsible for carrier delays caused by
                weather, service interruptions, incorrect addresses, or other
                circumstances outside our control.
              </p>
            </div>
          </div>

          {/* Tracking */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              04
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Tracking
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                When tracking information is available, it will be provided
                with your shipping confirmation.
              </p>

              <p>
                Please allow some time for tracking information to update
                after your package has been shipped.
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              05
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Shipping Address
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                Please make sure your shipping address is correct before
                submitting your order.
              </p>

              <p>
                If you notice an error after placing an order, contact us as
                soon as possible. We will do our best to assist before the
                order ships.
              </p>

              <p>
                Once an order has shipped, we may not be able to change the
                delivery address.
              </p>
            </div>
          </div>

          {/* International */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              06
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              International Orders
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                International shipping availability, rates, duties, taxes,
                and delivery times may vary by destination.
              </p>

              <p>
                Any applicable customs fees, duties, or taxes may be the
                responsibility of the customer.
              </p>
            </div>
          </div>

          {/* Questions */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              07
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Questions About Your Order?
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                If you have a question about an order, shipment, or delivery,
                we're here to help.
              </p>

              <p>
                Please include your order number when contacting us so we can
                assist you as quickly as possible.
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