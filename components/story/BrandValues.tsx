export default function BrandValues() {
  const values = [
    {
      number: "01",
      title: "Expression",
      text: "Style is personal. Drama Club is made for people who use what they wear to say something without saying a word.",
    },
    {
      number: "02",
      title: "Culture",
      text: "Our designs draw from music, fashion, history, performance, and the culture that shapes the way we see the world.",
    },
    {
      number: "03",
      title: "Confidence",
      text: "Every entrance deserves presence. Drama Club is about stepping into your role and owning the moment.",
    },
  ];

  return (
    <section className="border-t border-white/10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            What We Stand For
          </p>

          <h2 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl">
            The roles we play.
          </h2>
        </div>

        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.number}
              className="bg-black p-8 md:p-10"
            >
              <p className="text-xs tracking-[0.3em] text-white/30">
                {value.number}
              </p>

              <h3 className="mt-10 font-serif text-3xl">
                {value.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}