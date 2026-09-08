import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/products/ProductGrid";
import { merchProducts } from "@/data/merch";

type Collection = {
  name: string;
  category: string;
  description: string;
};

const collections: Record<string, Collection> = {
  "knit-sweaters": {
    name: "Knit Sweaters",
    category: "Knit Sweaters",
    description:
      "Statement knitwear designed with bold patterns, cultural references, and the Drama Club Brand point of view.",
  },

  "t-shirts": {
    name: "T-Shirts",
    category: "T-Shirts",
    description:
      "Graphic tees designed with bold artwork, cultural references, and the Drama Club Brand point of view.",
  },

  hoodies: {
    name: "Hoodies",
    category: "Hoodies",
    description:
      "Signature hoodies designed for comfort, expression, and the Drama Club Brand point of view.",
  },

  jackets: {
    name: "Jackets",
    category: "Jackets",
    description:
      "Statement outerwear designed to bring the Drama Club aesthetic into every season.",
  },

  bottoms: {
    name: "Bottoms",
    category: "Bottoms",
    description:
      "Pants, shorts, and other essential pieces designed to complete the Drama Club look.",
  },

  shirts: {
    name: "Shirts",
    category: "Shirts",
    description:
      "Elevated shirts and statement pieces created with the Drama Club Brand perspective.",
  },

  femme: {
    name: "Femme",
    category: "Femme",
    description:
      "A collection of pieces celebrating the Drama Club femme perspective through clothing and design.",
  },

  kids: {
    name: "Kids",
    category: "Kids",
    description:
      "Drama Club Brand pieces created for the younger generation.",
  },

  accessories: {
    name: "Accessories",
    category: "Accessories",
    description:
      "The finishing touches — bags, accessories, and statement pieces that complete the Drama Club experience.",
  },
};

type CollectionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CollectionPage({
  params,
}: CollectionPageProps) {
  const { slug } = await params;

  const collection = collections[slug];

  if (!collection) {
    notFound();
  }

  const products = merchProducts.filter(
    (product) => product.category === collection.category
  );

  return (
    <main className="bg-black text-white">
      <Header />

      {/* COLLECTION HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
          <Link
            href="/shop"
            className="mb-8 inline-block text-xs uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
          >
            ← Back to Shop
          </Link>

          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/50">
            Drama Club Brand x Accessories
          </p>

          <h1 className="font-serif text-5xl tracking-tight sm:text-6xl md:text-8xl">
            {collection.name}
          </h1>

          <div className="mx-auto mt-7 h-px w-16 bg-white/70" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            {collection.description}
          </p>
        </div>
      </section>

      {/* COLLECTION HEADER */}
      <section className="mx-auto flex max-w-7xl items-end justify-between px-6 pb-8 pt-16">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
            The Collection
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl">
            {collection.name}
          </h2>
        </div>

        <p className="hidden text-xs uppercase tracking-[0.2em] text-white/40 sm:block">
          {products.length} Pieces
        </p>
      </section>

      {/* PRODUCT GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <p className="py-20 text-center text-sm text-white/50">
            No products are currently available in this collection.
          </p>
        )}
      </section>

      <Footer />
    </main>
  );
}