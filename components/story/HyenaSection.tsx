import Image from "next/image";

export default function HyenaSection() {
  return (
    <section className="border-t border-white/10">
      <div className="grid md:grid-cols-2">
<div className="relative h-[360px] bg-white sm:h-[450px] md:min-h-[500px] md:h-auto">
              <Image
            src="/images/brand/brandStory.jpg"
            alt="Drama Club Brand"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="flex items-center px-6 py-20 md:px-12 lg:px-20">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              The Symbol
            </p>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
              The Hyena
            </h2>

            <div className="mt-8 space-y-6 text-sm leading-7 text-white/60">
              <p>
                The Hyena represents a spirit that refuses to blend into the
                background. Intelligent, adaptable, resilient, and impossible
                to ignore.
              </p>

              <p>
                For Drama Club, the symbol speaks to individuality and the
                ability to move through different worlds while remaining true
                to yourself.
              </p>

              <p>
                It is a reminder that the role you play is yours to define.
              </p>
            </div>

            <div className="mt-10 h-px w-16 bg-[#c8a84e]" />

            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#c8a84e]">
              Adapt. Perform. Own Your Role.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}