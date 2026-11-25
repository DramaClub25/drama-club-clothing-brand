"use client";

import { useEffect } from "react";
import { useCart } from "@/components/cart/CartContext";

export default function ClearCartOnSuccess() {
  const { clearCart, isLoaded } = useCart();

  useEffect(() => {
    if (!isLoaded) return;

    clearCart();
  }, [isLoaded, clearCart]);

  return null;
}