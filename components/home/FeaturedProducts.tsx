import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: 'Drama Club Brand "Sharon Hill" Unisex Classic Tee in Black',
    price: "$35.00",
    image: "/images/collections/sharonHill.jpg",
    href: "/products/sharon-hill",
  },
  {
    name: 'Drama Club "Femme" Whisper Logo Women\'s Relaxed T-Shirt (Black)',
    price: "$30.00",
    image: "/images/collections/femme.jpg",
    href: "/products/femme-whisper-logo",
  },
  {
    name: 'Drama Club Brand "Joe Gans" Commemorative Knit Sweater',
    price: "$100.00",
    image: "/images/collections/joeGans.jpg",
    href: "/products/joe-gans-knit-sweater",
  },
  {
    name: 'Drama Club Brand "Camo Weather" Windbreaker',
    price: "$70.00",
    image: "/images/collections/camoWindbreaker.jpg",
    href: "/products/camo-weather-windbreaker",
  },
  {
    name: "Drama Club Brand Big Face Logo Throw Blanket",
    price: "$60.00",
    image: "/images/collections/blanket.jpg",
    href: "/products/big-face-logo-throw-blanket",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-black px-6 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/50">
              Shop Drama Club Brand x Accessories
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Featured Products
            </h2>

            <div className="mt-4 h-px w-10 bg-white" />
          </div>

          <Link
            href="/shop"
            className="hidden border-b border-white/50 pb-1 text-xs uppercase tracking-[0.25em] transition hover:border-white md:block"
          >
            Shop All
          </Link>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Hover */}
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-black opacity-0 transition group-hover:opacity-100">
                  View Product
                </span>
              </div>

              {/* Product Info */}
              <div className="pt-4">
                <h3 className="font-serif text-lg">
                  {product.name}
                </h3>

                <p className="mt-1 text-sm text-white/60">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Shop All */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/shop"
            className="inline-flex border border-white px-7 py-4 text-xs uppercase tracking-[0.25em]"
          >
            Shop All
          </Link>
        </div>

      </div>
    </section>
  );
}