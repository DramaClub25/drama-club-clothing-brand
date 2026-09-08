import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
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
            Contact Us
          </h1>

          <div className="mx-auto mt-7 h-px w-16 bg-white/70" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Have a question about an order, our products, or Drama Club Brand?
            Send us a message and we'll get back to you.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="sr-only"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              required
              className="w-full border border-white/40 bg-transparent px-7 py-6 font-serif text-xl text-white outline-none placeholder:text-white/80 focus:border-white"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="sr-only"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full border border-white/40 bg-transparent px-7 py-6 font-serif text-xl text-white outline-none placeholder:text-white/80 focus:border-white"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="sr-only"
            >
              Phone
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone"
              className="w-full border border-white/40 bg-transparent px-7 py-6 font-serif text-xl text-white outline-none placeholder:text-white/80 focus:border-white"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="sr-only"
            >
              Address
            </label>

            <input
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              className="w-full border border-white/40 bg-transparent px-7 py-6 font-serif text-xl text-white outline-none placeholder:text-white/80 focus:border-white"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="sr-only"
            >
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              required
              className="w-full border border-white/40 bg-transparent px-7 py-6 font-serif text-xl text-white outline-none placeholder:text-white/80 focus:border-white"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="sr-only"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              required
              rows={8}
              className="w-full resize-none border border-white/40 bg-transparent px-7 py-6 font-serif text-xl text-white outline-none placeholder:text-white/80 focus:border-white"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-white px-8 py-6 text-lg font-medium uppercase tracking-[0.12em] text-black transition hover:bg-white/80"
          >
            Submit
          </button>
        </form>
      </section>

      {/* CONTACT STATEMENT */}
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