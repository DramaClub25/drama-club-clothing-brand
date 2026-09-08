import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <div className="mx-auto mt-7 h-px w-16 bg-white/70" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Your privacy matters to us. This policy explains how information
            may be collected, used, and protected when you use our website.
          </p>
        </div>
      </section>

      {/* PRIVACY POLICY */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="space-y-16">
          {/* Introduction */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              01
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Introduction
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                Drama Club Brand Clothing x Accessories respects your privacy
                and is committed to protecting the information you provide to
                us.
              </p>

              <p>
                This Privacy Policy explains what information we may collect,
                how we may use it, and the choices you may have regarding your
                information.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              02
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Information We Collect
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                We may collect information that you provide directly to us,
                such as when you place an order, contact us, sign up for
                communications, or otherwise interact with the website.
              </p>

              <p>Depending on how you use the website, this may include:</p>

              <ul className="list-disc space-y-3 pl-6">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Shipping and billing information</li>
                <li>Order and transaction information</li>
                <li>Messages or other information you submit to us</li>
              </ul>
            </div>
          </div>

          {/* Automatically Collected */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              03
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Information Collected Automatically
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                When you visit our website, certain information may be
                collected automatically by us or by third-party services.
              </p>

              <p>
                This may include information such as your IP address, browser
                type, device information, pages visited, referring website,
                and general usage information.
              </p>

              <p>
                This information may be used to understand how visitors use
                our website, improve the site, and maintain website security.
              </p>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              04
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              How We Use Your Information
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>Information may be used to:</p>

              <ul className="list-disc space-y-3 pl-6">
                <li>Process and fulfill orders</li>
                <li>Provide customer support</li>
                <li>Respond to questions and inquiries</li>
                <li>Communicate with you about your orders</li>
                <li>Improve our products and website</li>
                <li>Prevent fraud and protect website security</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>
          </div>

          {/* Payments */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              05
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Payments
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                Payments may be processed through third-party payment
                providers. Payment information may be handled directly by
                those providers according to their own privacy policies and
                security practices.
              </p>

              <p>
                We do not intend to store complete payment card information on
                our website unless specifically required by the payment
                service we use.
              </p>
            </div>
          </div>

          {/* Sharing */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              06
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Sharing Information
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                We may share information with trusted service providers when
                necessary to operate the website and provide services to you.
              </p>

              <p>
                These providers may assist with payment processing, hosting,
                shipping, analytics, communications, customer service, or
                other business operations.
              </p>

              <p>
                We may also disclose information when required by law or when
                reasonably necessary to protect our rights, customers, or
                website.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              07
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Cookies & Similar Technologies
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                Our website and third-party services may use cookies or
                similar technologies to remember preferences, understand
                website usage, maintain functionality, and improve your
                experience.
              </p>

              <p>
                Your browser may provide options for managing or disabling
                cookies. Some website features may not function properly if
                certain cookies are disabled.
              </p>
            </div>
          </div>

          {/* Marketing */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              08
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Communications
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                If you choose to receive marketing or promotional
                communications from us, you may unsubscribe using the
                instructions included in those communications.
              </p>

              <p>
                We may still send transactional or service-related
                communications when necessary to fulfill an order or respond
                to a request.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              09
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Data Security
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                We take reasonable measures to protect information from
                unauthorized access, use, alteration, or disclosure.
              </p>

              <p>
                However, no method of transmitting or storing information
                electronically can be guaranteed to be completely secure.
              </p>
            </div>
          </div>

          {/* Your Choices */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              10
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Your Choices
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                Depending on applicable law, you may have rights regarding
                personal information we maintain about you.
              </p>

              <p>
                You may contact us to ask questions about your information or
                request access, correction, or deletion where applicable.
              </p>
            </div>
          </div>

          {/* Children */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              11
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Children's Privacy
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                Our website is not intended to knowingly collect personal
                information directly from children without appropriate
                involvement or consent from a parent or guardian where
                required by law.
              </p>
            </div>
          </div>

          {/* Third Party Links */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              12
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Third-Party Links
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices or
                content of those third parties.
              </p>

              <p>
                We encourage you to review the privacy policies of any
                third-party websites you visit.
              </p>
            </div>
          </div>

          {/* Changes */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              13
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Changes to This Policy
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                We may update this Privacy Policy from time to time as our
                website, business practices, or legal requirements change.
              </p>

              <p>
                Any updated policy will be posted on this page with the
                appropriate effective date.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="border-t border-white/10 pt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              14
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Questions About Privacy?
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/60 sm:text-base">
              <p>
                If you have questions about this Privacy Policy or how your
                information is handled, please contact the Drama Club Brand
                team.
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