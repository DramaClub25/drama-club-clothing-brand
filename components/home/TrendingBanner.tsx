import Link from "next/link";

export default function TrendingBanner() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 text-white md:py-28">
      {/* Subtle top divider */}
      <div className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-white/30" />

      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-white/30" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/60 md:text-xs">
            Drama Club Brand
          </p>
          <span className="h-px w-10 bg-white/30" />
        </div>

        {/* Main Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            What&apos;s
            <br />
            Making Noise
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-xs uppercase leading-7 tracking-[0.25em] text-white/60 md:text-sm">
            New pieces. Signature styles.
            <br />
            Drama Club favorites.
          </p>
        </div>

        {/* Buttons */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-px border border-white/20 bg-white/20 md:grid-cols-3">
          <Link
            href="/shop"
            className="group relative bg-black px-6 py-6 text-center transition-colors duration-300 hover:bg-white hover:text-black"
          >
            <span className="block text-[10px] uppercase tracking-[0.3em] text-white/50 transition-colors group-hover:text-black/50">
              Explore
            </span>

            <span className="mt-2 block font-serif text-2xl">
              New Arrivals
            </span>

            <span className="mt-4 block text-sm transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/shop"
            className="group relative bg-black px-6 py-6 text-center transition-colors duration-300 hover:bg-white hover:text-black"
          >
            <span className="block text-[10px] uppercase tracking-[0.3em] text-white/50 transition-colors group-hover:text-black/50">
              The Favorites
            </span>

            <span className="mt-2 block font-serif text-2xl">
              Bestsellers
            </span>

            <span className="mt-4 block text-sm transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/shop"
            className="group relative bg-black px-6 py-6 text-center transition-colors duration-300 hover:bg-white hover:text-black"
          >
            <span className="block text-[10px] uppercase tracking-[0.3em] text-white/50 transition-colors group-hover:text-black/50">
              Curated
            </span>

            <span className="mt-2 block font-serif text-2xl">
              Drama Club Picks
            </span>

            <span className="mt-4 block text-sm transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Bottom Brand Statement */}
        <div className="mt-16 text-center md:mt-20">
          <p className="text-[9px] uppercase tracking-[0.5em] text-white/40 md:text-[10px]">
            Drama Club Plays on the Stage of Life
          </p>
        </div>
      </div>
    </section>
  );
}