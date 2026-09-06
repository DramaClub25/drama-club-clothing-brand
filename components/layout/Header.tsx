import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 text-white backdrop-blur-sm">
      <div className="flex h-20 items-center justify-between px-5 pt-2 md:h-24 md:px-10 md:pt-0 lg:px-14">
          {/* Logo */}
        <Link href="/" className="shrink-0">
          <div className="relative h-14 w-14 overflow-hidden rounded-full md:h-16 md:w-16">
              <Image
                src="/logo/whiteLogo.JPG"
                alt="Drama Club"
                fill
                className="object-contain"
            />
            </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-12 md:flex">
          <Link
            href="/shop"
            className="font-serif text-sm uppercase tracking-wide transition-opacity hover:opacity-60"
          >
            Shop
          </Link>

          <Link
            href="/collections"
            className="font-serif text-sm uppercase tracking-wide transition-opacity hover:opacity-60"
          >
            Collections
          </Link>

          <Link
            href="/story"
            className="font-serif text-sm uppercase tracking-wide transition-opacity hover:opacity-60"
          >
            Story
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="group relative"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 8H18L19 21H5L6 8Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M9 8V6C9 4.343 10.343 3 12 3C13.657 3 15 4.343 15 6V8"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>

            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[9px] text-black">
              0
            </span>
          </Link>

          {/* Menu */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex flex-col gap-1.5"
          >
            <span className="block h-px w-7 bg-white" />
            <span className="block h-px w-7 bg-white" />
            <span className="block h-px w-7 bg-white" />
          </button>
        </div>
      </div>
    </header>
  );
}