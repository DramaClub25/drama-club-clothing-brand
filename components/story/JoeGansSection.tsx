import Image from "next/image";

export default function JoeGansSection() {
  return (
    <section className="border-t border-white/10">
      <div className="grid md:grid-cols-2">
        <div className="order-2 flex items-center px-6 py-20 md:order-1 md:px-12 lg:px-20">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              Legacy
            </p>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
              Joe Gans
            </h2>

            <div className="mt-8 space-y-6 text-sm leading-7 text-white/60">
              <p>
                Joe Gans represents excellence, discipline, and the power of
                becoming the best version of yourself.
              </p>

              <p>
                His legacy carries a spirit that reaches beyond the ring —
                determination, preparation, confidence, and the courage to step
                into history.
              </p>

              <p>
                Drama Club draws inspiration from that mindset: show up,
                prepare for your moment, and leave your mark.
              </p>
            </div>

            <div className="mt-10 h-px w-16 bg-[#c8a84e]" />

            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#c8a84e]">
              Respect the Legacy.
            </p>
          </div>
        </div>

        <div className="relative order-1 min-h-[500px] bg-black md:order-2">
          <Image
            src="/images/collections/joe-gans.jpg"
            alt="Joe Gans collection"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}