import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="border-t border-white/20 px-6 py-14 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">

          {/* Shop / Brand */}
          <div>
            <h3 className="mb-5 font-serif text-lg uppercase">
              Drama Club
            </h3>

            <nav className="flex flex-col gap-3 text-sm text-white/60">
              <Link href="/shop" className="transition hover:text-white">
                Shop
              </Link>

              <Link
                href="/collections"
                className="transition hover:text-white"
              >
                Collections
              </Link>

              <Link href="/story" className="transition hover:text-white">
                Our Story
              </Link>
            </nav>
          </div>

          {/* Help */}
          <div>
            <h3 className="mb-5 font-serif text-lg uppercase">
              Help
            </h3>

            <nav className="flex flex-col gap-3 text-sm text-white/60">
              <Link href="/contact" className="transition hover:text-white">
                Contact Us
              </Link>

              <Link
                href="/policies/returns"
                className="transition hover:text-white"
              >
                Returns & Refunds
              </Link>

              <Link
                href="/policies/shipping"
                className="transition hover:text-white"
              >
                Shipping Info
              </Link>

              <Link
                href="/policies/terms"
                className="transition hover:text-white"
              >
                Terms of Service
              </Link>

              <Link
                href="/policies/privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

                    {/* Social */}
          <div>
            <h3 className="mb-5 font-serif text-lg uppercase">
              Follow Us
            </h3>

            <div className="flex gap-5 text-sm text-white/60">
              <a href="#" className="transition hover:text-white">
                Instagram
              </a>

              <a href="#" className="transition hover:text-white">
                Facebook
              </a>

              <a href="#" className="transition hover:text-white">
                TikTok
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-start md:items-center">
            <Link href="/" className="relative h-24 w-24 overflow-hidden rounded-full">
              <Image
                src="/logo/whiteLogo.JPG"
                alt="Drama Club"
                fill
                className="object-cover"
              />
            </Link>

            <p className="mt-4 text-center text-xs text-white/50">
              © {new Date().getFullYear()}  Drama Club Brand x Accessories
              <br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="border-t border-white/10 px-6 py-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
          Website Designed & Developed by
        </p>

        <Link
          href="https://www.fromlondontoparis.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block font-serif text-lg text-white transition hover:text-white/60"
        >
          From London to Paris LLC
        </Link>

        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/30">
          Learn • Build • Launch
        </p>
      </div>
    </footer>
  );
}