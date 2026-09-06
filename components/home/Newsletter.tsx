import Link from "next/link";

export default function Newsletter() {
  return (
    <section className="border-t border-white/20 bg-black px-6 py-16 text-white md:px-10 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        
        {/* Text */}
        <div>
          <p className="font-serif text-3xl uppercase md:text-4xl">
            Join the Club
          </p>

          <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
            Be the first to know about new drops, exclusives & more.
          </p>
        </div>

        {/* Signup */}
        <form className="flex w-full max-w-xl">
          <input
            type="email"
            placeholder="Enter your email"
            className="min-w-0 flex-1 border border-white/40 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-white"
          />

          <button
            type="submit"
            className="border border-white bg-white px-7 py-4 font-serif text-sm uppercase tracking-wide text-black transition hover:bg-black hover:text-white"
          >
            Join
          </button>
        </form>

      </div>
    </section>
  );
}