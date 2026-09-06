import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Hero Image */}
  

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-24 text-center">
        <div className="flex max-w-4xl flex-col items-center">
            {/* Drama Club Logo */}
            <div className="relative mb-7 h-36 w-36 overflow-hidden rounded-full md:h-44 md:w-44">
            <Image
                src="/logo/whiteLogo.JPG"
                alt="Drama Club"
                fill
                priority
                className="object-cover"
            />
            </div>

          <h1 className="font-serif text-5xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Drama Club Brand Clothing × Accessories
        </h1>

            {/* <p className="mt-3 font-serif text-xl uppercase tracking-[0.08em] sm:text-2xl md:text-3xl">
            Drama Club Brand Clothing × Accessories
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/60 sm:text-sm">
            Drama Club Plays on the Stage of Life
            </p> */}

          {/* Tagline */}
          {/* <p className="mt-3 font-serif text-xl uppercase tracking-[0.12em] sm:text-2xl md:text-3xl">
            Plays on the Stage of Life.
          </p> */}

          {/* CTA */}
          <Link
            href="/shop"
            className="mt-9 inline-flex bg-white px-10 py-4 font-serif text-sm uppercase tracking-wide text-black transition hover:bg-neutral-200"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}