"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartContext";

export default function CartLink() {
  const { cartCount } = useCart();

  return (
    <Link
      href="/cart"
      className="text-xs uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
    >
      Cart {cartCount > 0 && `(${cartCount})`}
    </Link>
  );
}