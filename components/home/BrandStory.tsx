import Image from "next/image";
import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="overflow-hidden bg-black px-6 py-20 text-white md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Text */}
        <div>
          {/* <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/50">
            The Story
          </p> */}

          <h2 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            Drama Club Brand
            <br />
            <span className="text-[#c8a84e]">and the Hyena</span>
          </h2>

          <div className="mt-6 h-px w-10 bg-white" />

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 md:text-base">
            We chose the Hyena as the mascot for Drama Club Brand because it
            represents ferocity, fiercely defending the family, loyalty to the
            squad, and working together towards a common goal.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 md:text-base">
            All qualities found in the Hyena but often misrepresented.
          </p>

          <Link
            href="/story"
            className="mt-8 inline-flex border border-white px-7 py-4 text-xs uppercase tracking-[0.25em] transition hover:bg-white hover:text-black"
          >
            Our Story
          </Link>
        </div>

            {/* Hyena Image */}
            <div className="relative overflow-hidden">
            <Image
                src="/images/brand/brandStory.jpg"
                alt="Drama Club Brand and the Hyena"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
            />
            </div>
      </div>
    </section>
  );
}