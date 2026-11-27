import Image from "next/image";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08),_transparent_65%)]" />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        <div className="relative mb-10 h-32 w-32 overflow-hidden rounded-full">
          <Image
            src="/logo/whiteLogo.JPG"
            alt="Drama Club Brand"
            fill
            priority
            sizes="128px"
            className="object-contain"
          />
        </div>

        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/50">
          Drama Club Brand Clothing × Accessories
        </p>

        <div className="mb-8 h-px w-16 bg-[#c8a84e]" />

        <h1 className="font-serif text-4xl tracking-wide sm:text-6xl">
          UNDER CONSTRUCTION
        </h1>

        <p className="mt-7 max-w-lg text-sm leading-8 text-white/60 sm:text-base">
          We're preparing for our next entrance.
          A new Drama Club experience is coming soon.
        </p>

        <p className="mt-12 text-xs uppercase tracking-[0.35em] text-[#c8a84e]">
          Plays on the Stage of Life.
        </p>
<br></br>
        <Link
          href="/admin/login"
          className="text-[10px] uppercase tracking-[0.2em] text-white/25 transition hover:text-[#c8a84e]"
        >
          Admin Login
        </Link>

      <div className="mt-16 flex flex-col items-center gap-5">
        <div className="text-[10px] uppercase tracking-[0.25em] text-white/30">
          © {new Date().getFullYear()} Drama Club Brand
        </div>


      </div>
      </div>
    </main>
  );
}
