"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartContext";

type AddToCartButtonProps = {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  size?: string;
  quantity?: number;
};

export default function AddToCartButton({
  product,
  size,
  quantity = 1,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size,
      },
      quantity
    );

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-8 w-full bg-white px-8 py-5 text-sm font-medium uppercase tracking-[0.2em] text-black transition hover:bg-white/80"
    >
      {added ? "Added to Cart ✓" : "Add to Cart"}
    </button>
  );
}