
import { createAdminClient } from "@/lib/supabase/admin";
import Image from "next/image";
import Link from "next/link";
import DeleteProductButton from "./DeleteProductButton";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const supabase = createAdminClient();

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <p className="mt-4 text-red-500">
          Unable to load products: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/admin"
          className="mb-6 inline-flex items-center gap-2 text-xs text-white/50 transition hover:text-white"
        >
          ← Back to Dashboard
        </Link>

        <div>
          <h1 className="text-2xl font-semibold">Products</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your Drama Club product catalog.
          </p>
        </div>

        <Link
          href="/admin/products/new"
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-200"
        >
          + Add Product
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border p-4">
          <p className="text-sm text-gray-500">Total Products</p>
          <p className="mt-2 text-2xl font-semibold">
            {products.length}
          </p>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-gray-500">Active Products</p>
          <p className="mt-2 text-2xl font-semibold">
            {products.filter((product) => product.is_active).length}
          </p>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-gray-500">Total Stock</p>
          <p className="mt-2 text-2xl font-semibold">
            {products.reduce(
              (total, product) => total + (product.stock_quantity || 0),
              0
            )}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 font-medium">Product</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Price</th>
                <th className="px-4 py-3 font-medium">Stock</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/products/${product.id}`}
                      className="group flex items-center gap-3"
                    >
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="48px"
                            className="object-cover transition group-hover:scale-105"
                          />
                        ) : null}
                      </div>

                      <div className="min-w-0">
                        <p className="font-medium transition group-hover:text-white group-hover:underline">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {product.id}
                        </p>
                      </div>
                    </Link>
                  </td>

                  <td className="px-4 py-3">
                    {product.category}
                  </td>

                  <td className="px-4 py-3">
                    ${Number(product.price).toFixed(2)}
                  </td>

                  <td className="px-4 py-3">
                    {product.stock_quantity}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        product.is_active
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {product.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/admin/products/${product.id}/edit`}
                        className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                      >
                        Edit
                      </Link>

                      <DeleteProductButton
                        productId={product.id}
                        productName={product.name}
                      />
                    </div>
                  </td>
                </tr>
              ))}

              {products.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-10 text-center text-gray-500"
                  >
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
