"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartContext";

type ProductOptionsProps = {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  sizes: string[];
};

export default function ProductOptions({
  product,
  sizes,
}: ProductOptionsProps) {
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(
    sizes[0] ?? ""
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleDecrease = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const handleIncrease = () => {
    setQuantity((current) => current + 1);
  };

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
      },
      quantity
    );

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <>
      {/* SIZE */}
        {sizes.length > 0 && (
        <div className="mt-10">
            <div className="mb-4 flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.2em]">
            Select Size
          </p>

          <button
            type="button"
            className="text-xs text-white/40 underline underline-offset-4"
          >
            Size Guide
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`border py-4 text-sm transition ${
                selectedSize === size
                  ? "border-white bg-white text-black"
                  : "border-white/20 text-white hover:border-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
        )}

      {/* QUANTITY */}
      <div className="mt-8">
        <p className="mb-4 text-xs uppercase tracking-[0.2em]">
          Quantity
        </p>

        <div className="flex w-fit items-center border border-white/20">
          <button
            type="button"
            onClick={handleDecrease}
            className="px-5 py-3 text-lg text-white/60 transition hover:text-white"
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span className="min-w-12 text-center text-sm">
            {quantity}
          </span>

          <button
            type="button"
            onClick={handleIncrease}
            className="px-5 py-3 text-lg text-white/60 transition hover:text-white"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* ADD TO CART */}
      <button
        type="button"
        onClick={handleAddToCart}
        className="mt-8 w-full bg-white px-8 py-5 text-sm font-medium uppercase tracking-[0.2em] text-black transition hover:bg-white/80"
      >
        {added ? "Added to Cart ✓" : "Add to Cart"}
      </button>
    </>
  );
}