import Image from "next/image";
import Link from "next/link";
import { MerchProduct } from "@/data/merch";

type ProductGridProps = {
  products: MerchProduct[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <article key={product.slug} className="group">
          <Link href={`/products/${product.slug}`}>
            {/* IMAGE */}
            <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 flex items-end bg-black/0 p-5 transition duration-500 group-hover:bg-black/20">
                <span className="translate-y-3 border border-white bg-white px-5 py-3 text-xs uppercase tracking-[0.2em] text-black opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  View Product
                </span>
              </div>
            </div>
          </Link>

          {/* PRODUCT INFO */}
          <div className="pt-5">
            <Link href={`/products/${product.slug}`}>
              <h3 className="font-serif text-xl leading-tight transition hover:text-white/60">
                {product.name}
              </h3>
            </Link>

            <p className="mt-3 text-sm text-white/60">
              ${product.price.toFixed(2)}
            </p>

            <Link
              href={`/products/${product.slug}`}
              className="mt-5 inline-block border-b border-white/40 pb-1 text-xs uppercase tracking-[0.2em] text-white/70 transition hover:border-white hover:text-white"
            >
              Shop Product
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}