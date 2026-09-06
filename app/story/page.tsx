import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BrandValues from "@/components/story/BrandValues";
import HyenaSection from "@/components/story/HyenaSection";
import JoeGansSection from "@/components/story/JoeGansSection";

export default function StoryPage() {
  return (
    <main className="bg-black text-white">
      <Header />

      {/* HERO */}
      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden px-6 pt-32 text-center">
        <div className="relative z-10 max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-white/50">
            The Story
          </p>

          <h1 className="font-serif text-6xl leading-none sm:text-7xl md:text-8xl lg:text-9xl">
            DRAMA CLUB
          </h1>

          <div className="mx-auto mt-8 h-px w-20 bg-white/40" />

          <p className="mx-auto mt-8 max-w-2xl text-sm uppercase tracking-[0.25em] text-white/60 sm:text-base">
            Plays on the Stage of Life.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-t border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 text-xs uppercase tracking-[0.35em] text-white/40">
            More Than Clothing
          </p>

          <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Every life has a story.
            <br />
            <span className="text-white/50">We wear ours.</span>
          </h2>

          <div className="mt-10 max-w-2xl space-y-6 text-base leading-8 text-white/65">
            <p>
              Drama Club Brand is built around the idea that life is a stage.
              Every day brings a new role, a new scene, and a new opportunity
              to make an entrance.
            </p>

            <p>
              Our clothing and accessories are designed for people who
              understand that style is more than appearance. It is expression,
              attitude, culture, and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <BrandValues />

      {/* HYENA */}
      <HyenaSection />

      {/* JOE GANS */}
      <JoeGansSection />

      {/* PHILOSOPHY */}
      <section className="border-t border-white/10 px-6 py-24 text-center md:py-40">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            The Philosophy
          </p>

          <h2 className="mt-8 font-serif text-5xl leading-tight sm:text-6xl md:text-7xl">
            Life is the stage.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            There are no rehearsals. No second takes. Step into your role. Own your story. Make your entrance count.
          </p>

          <p className="mt-10 text-xs uppercase tracking-[0.3em] text-white/40">
            Drama Club Brand x Accessories
          </p>
        </div>
      </section>

      {/* SHOP CTA */}
      <section className="border-t border-white/10 px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-white/40">
          The Collection
        </p>

        <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
          Wear the story.
        </h2>

        <a
          href="/shop"
          className="mt-10 inline-block border border-white/30 px-8 py-4 text-xs uppercase tracking-[0.25em] transition hover:bg-white hover:text-black"
        >
          Shop Drama Club
        </a>
      </section>

      <Footer />
    </main>
  );
}