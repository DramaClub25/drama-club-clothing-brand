"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 text-white backdrop-blur-sm">
        <div className="flex h-20 items-center justify-between px-5 pt-2 md:h-24 md:px-10 md:pt-0 lg:px-14">
          {/* Logo */}
          <Link href="/" className="shrink-0" onClick={closeMenu}>
            <div className="relative h-14 w-14 overflow-hidden rounded-full md:h-16 md:w-16">
              <Image
                src="/logo/whiteLogo.JPG"
                alt="Drama Club"
                fill
                sizes="64px"
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

            {/* Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex flex-col gap-1.5"
            >
              <span
                className={`block h-px w-7 bg-white transition-transform duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-7 bg-white transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-7 bg-white transition-transform duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-black text-white transition-all duration-300 md:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div className="relative flex min-h-screen flex-col px-6 pb-12 pt-28">
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="absolute right-6 top-7 flex h-10 w-10 items-center justify-center"
          >
            <span className="absolute h-px w-7 rotate-45 bg-white" />
            <span className="absolute h-px w-7 -rotate-45 bg-white" />
          </button>
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              Drama Club Brand Clothing x Accessories
            </p>
            <div className="mt-4 h-px w-12 bg-white/40" />
          </div>

          <nav className="flex flex-col">
            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-white/10 py-6 font-serif text-4xl"
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={closeMenu}
              className="border-b border-white/10 py-6 font-serif text-4xl"
            >
              Shop
            </Link>

            <Link
              href="/collections"
              onClick={closeMenu}
              className="border-b border-white/10 py-6 font-serif text-4xl"
            >
              Collections
            </Link>

            <Link
              href="/story"
              onClick={closeMenu}
              className="border-b border-white/10 py-6 font-serif text-4xl"
            >
              Story
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="border-b border-white/10 py-6 font-serif text-4xl"
            >
              Contact
            </Link>

            <Link
              href="/cart"
              onClick={closeMenu}
              className="border-b border-white/10 py-6 font-serif text-4xl"
            >
              Cart
            </Link>
          </nav>

          <div className="mt-auto pt-12">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Plays on the Stage of Life
            </p>
          </div>
        </div>
      </div>
    </>
  );
}