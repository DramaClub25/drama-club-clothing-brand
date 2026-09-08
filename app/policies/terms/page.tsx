import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
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
            Terms of Service
          </h1>

          <div className="mx-auto mt-7 h-px w-16 bg-white/70" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Please review these terms before using the Drama Club Brand
            Clothing x Accessories website or purchasing our products.
          </p>
        </div>
      </section>

      {/* TERMS */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="space-y-16">
          {/* Acceptance */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              01
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Acceptance of Terms
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                By accessing or using the Drama Club Brand Clothing x
                Accessories website, you agree to be bound by these Terms of
                Service.
              </p>

              <p>
                If you do not agree with these terms, please do not use the
                website or purchase products through it.
              </p>
            </div>
          </div>

          {/* Website Use */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              02
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Use of the Website
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                You agree to use this website only for lawful purposes and in
                a way that does not interfere with the operation of the site
                or the experience of other customers.
              </p>

              <p>
                You may not attempt to gain unauthorized access to the website,
                its systems, accounts, or data.
              </p>

              <p>
                We reserve the right to restrict or terminate access to the
                website when necessary to protect the business, customers, or
                website.
              </p>
            </div>
          </div>

          {/* Products */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              03
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Products & Availability
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                We make every effort to display product descriptions, images,
                prices, and availability as accurately as possible.
              </p>

              <p>
                Product colors and appearance may vary depending on your
                device or display.
              </p>

              <p>
                We reserve the right to limit quantities, discontinue
                products, or change product information and pricing at any
                time.
              </p>

              <p>
                If a product becomes unavailable after an order is placed, we
                may contact you regarding the order or issue an appropriate
                refund.
              </p>
            </div>
          </div>

          {/* Orders */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              04
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Orders & Payments
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                By placing an order, you agree to provide accurate and
                complete information necessary to process your purchase.
              </p>

              <p>
                All orders are subject to availability and acceptance by
                Drama Club Brand.
              </p>

              <p>
                We reserve the right to cancel or refuse an order when
                necessary, including in cases involving suspected fraud,
                incorrect pricing, or product availability issues.
              </p>

              <p>
                Applicable taxes and shipping charges will be presented during
                checkout when applicable.
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              05
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Pricing
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                Prices displayed on the website are subject to change without
                notice.
              </p>

              <p>
                We make reasonable efforts to ensure pricing information is
                accurate. If an obvious pricing error occurs, we reserve the
                right to correct the error and contact affected customers.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              06
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Intellectual Property
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                The Drama Club Brand name, logos, artwork, graphics,
                photographs, product designs, website content, and other
                materials are owned by or licensed to Drama Club Brand unless
                otherwise stated.
              </p>

              <p>
                You may not reproduce, distribute, modify, sell, or use our
                intellectual property without prior written permission.
              </p>
            </div>
          </div>

          {/* User Content */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              07
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              User Submissions
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                If you submit information, reviews, comments, photographs, or
                other content through the website, you agree that the content
                is accurate and does not violate the rights of another person.
              </p>

              <p>
                Do not submit content that is unlawful, threatening,
                defamatory, abusive, or otherwise inappropriate.
              </p>
            </div>
          </div>

          {/* Third Party */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              08
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Third-Party Services
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                The website may use third-party services for payment
                processing, shipping, analytics, hosting, communications, or
                other business functions.
              </p>

              <p>
                Third-party services may have their own terms and privacy
                policies, which may apply to your use of those services.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              09
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Disclaimer
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                We make reasonable efforts to keep the website accurate and
                available, but we do not guarantee that the website will
                always be uninterrupted, error-free, or completely current.
              </p>

              <p>
                To the extent permitted by applicable law, Drama Club Brand
                is not responsible for losses resulting from circumstances
                outside of its reasonable control.
              </p>
            </div>
          </div>

          {/* Limitation */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              10
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Limitation of Liability
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                To the fullest extent permitted by applicable law, Drama Club
                Brand will not be liable for indirect, incidental, special,
                consequential, or punitive damages arising from your use of
                the website or products purchased through the website.
              </p>
            </div>
          </div>

          {/* Changes */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              11
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Changes to These Terms
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                We may update these Terms of Service from time to time.
                Changes will become effective when posted on this page unless
                otherwise required by law.
              </p>

              <p>
                Your continued use of the website after changes are posted
                constitutes acceptance of the updated terms.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              12
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Questions?
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                If you have questions about these Terms of Service, please
                contact the Drama Club Brand team.
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