
import { createAdminClient } from "@/lib/supabase/admin";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type ProductDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;

  const supabase = createAdminClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !product) {
    notFound();
  }

  return (
    <div className="max-w-6xl space-y-8 p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link
            href="/admin/products"
            className="text-sm text-white/50 transition hover:text-white"
          >
            ← Back to Products
          </Link>

          <h1 className="mt-4 text-2xl font-semibold">
            Product Details
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            View all information for this product.
          </p>
        </div>

      </div>

      {/* Main Product Information */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-4"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-gray-500">
              No product image available
            </div>
          )}
        </div>

        {/* Product Summary */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500">
              {product.category}
            </p>

            <h2 className="mt-2 text-3xl font-semibold">
              {product.name}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Product ID: {product.id}
            </p>
          </div>

          <div className="text-3xl font-semibold">
            ${Number(product.price).toFixed(2)}
          </div>

          <div>
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                product.is_active
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {product.is_active ? "Active" : "Inactive"}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-sm text-gray-500">
                Stock Quantity
              </p>
              <p className="mt-2 text-2xl font-semibold">
                {product.stock_quantity ?? 0}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-sm text-gray-500">
                Available Sizes
              </p>
              <p className="mt-2 text-2xl font-semibold">
                {product.sizes?.length ?? 0}
              </p>
            </div>
          </div>

          {/* Available Sizes */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">
              Available Sizes
            </h3>

            {product.sizes && product.sizes.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size: string) => (
                  <span
                    key={size}
                    className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm"
                  >
                    {size}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                No sizes assigned to this product.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="rounded-xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold">
          Product Description
        </h3>

        <div className="mt-4 text-sm leading-7 text-gray-400 whitespace-pre-wrap">
          {product.description || "No description provided."}
        </div>
      </div>

      {/* Additional Information */}
      <div className="rounded-xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold">
          Additional Information
        </h3>

        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <div>
            <p className="text-xs text-gray-500">Product Slug</p>
            <p className="mt-1 text-sm">{product.slug}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Category</p>
            <p className="mt-1 text-sm">{product.category}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Created</p>
            <p className="mt-1 text-sm">
              {product.created_at
                ? new Date(product.created_at).toLocaleDateString()
                : "Not available"}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Last Updated</p>
            <p className="mt-1 text-sm">
              {product.updated_at
                ? new Date(product.updated_at).toLocaleDateString()
                : "Not available"}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-wrap gap-3">
        <Link
          href={`/admin/products/${product.id}/edit`}
          className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
        >
          Edit Product
        </Link>

        <Link
          href="/admin/products"
          className="rounded-lg border border-white/15 px-5 py-3 text-sm transition hover:bg-white/5"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}
