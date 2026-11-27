
import { createAdminClient } from "@/lib/supabase/admin"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default async function AnalyticsPage() {
  const supabase = createAdminClient()

  const [
    { data: orders, error: ordersError },
    { data: products, error: productsError },
  ] = await Promise.all([
    supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false }),
    supabase.from("products").select("*"),
  ])

  if (ordersError || productsError) {
    return (
      <main className="min-h-screen bg-[#080808] px-6 py-10 text-white md:px-10">
        <h1 className="font-serif text-4xl">Analytics</h1>
        <p className="mt-6 text-sm text-red-400">
          Unable to load analytics data.
        </p>
        <p className="mt-2 text-sm text-white/50">
          {ordersError?.message || productsError?.message}
        </p>
      </main>
    )
  }

  const allOrders = orders ?? []
  const allProducts = products ?? []

  const paidOrders = allOrders.filter(
    (order) => order.payment_status === "paid"
  )

  const totalRevenue = paidOrders.reduce(
    (total, order) => total + Number(order.total_amount ?? 0),
    0
  )

  const averageOrderValue =
    paidOrders.length > 0
      ? totalRevenue / paidOrders.length
      : 0

  const totalStock = allProducts.reduce(
    (total, product) =>
      total + Number(product.stock_quantity ?? 0),
    0
  )

  const lowStock = allProducts.filter(
    (product) =>
      Number(product.stock_quantity ?? 0) > 0 &&
      Number(product.stock_quantity ?? 0) <= 5
  ).length

  const outOfStock = allProducts.filter(
    (product) => Number(product.stock_quantity ?? 0) === 0
  ).length

  const fulfillmentCounts = allOrders.reduce(
    (counts: Record<string, number>, order) => {
      const status = order.fulfillment_status || "Unknown"
      counts[status] = (counts[status] || 0) + 1
      return counts
    },
    {}
  )

  const formatCurrency = (cents: number) =>
    `$${(cents / 100).toFixed(2)}`

  const stats = [
    {
      label: "Total Revenue",
      value: formatCurrency(totalRevenue),
      description: "Successfully paid orders",
    },
    {
      label: "Total Orders",
      value: allOrders.length.toString(),
      description: "All recorded orders",
    },
    {
      label: "Paid Orders",
      value: paidOrders.length.toString(),
      description: "Confirmed payments",
    },
    {
      label: "Average Order Value",
      value: formatCurrency(averageOrderValue),
      description: "Per paid order",
    },
  ]

  return (
    <main className="min-h-screen bg-[#080808] px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/admin"
          className="mb-6 inline-flex items-center gap-2 text-xs text-white/50 transition hover:text-white"
        >
          ← Back to Dashboard
        </Link>

        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          Drama Club Brand / Administration
        </p>

        <h1 className="mt-4 font-serif text-4xl">Analytics</h1>
        <p className="mt-2 text-sm text-white/40">
          Store performance and business insights.
        </p>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-white/10 bg-white/[0.02] p-5"
            >
              <p className="text-xs uppercase tracking-wider text-white/40">
                {stat.label}
              </p>
              <p className="mt-3 font-serif text-3xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-white/30">
                {stat.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl">Inventory Overview</h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Total Products", value: allProducts.length },
              { label: "Total Stock", value: totalStock },
              { label: "Low Stock", value: lowStock },
              { label: "Out of Stock", value: outOfStock },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-white/10 p-5"
              >
                <p className="text-xs uppercase tracking-wider text-white/40">
                  {item.label}
                </p>
                <p className="mt-3 font-serif text-3xl">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl">
            Fulfillment Overview
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(fulfillmentCounts).map(
              ([status, count]) => (
                <div
                  key={status}
                  className="border border-white/10 p-5"
                >
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    {status}
                  </p>
                  <p className="mt-3 font-serif text-3xl">
                    {count}
                  </p>
                  <p className="mt-2 text-xs text-white/30">
                    Orders
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5">
            <h2 className="font-serif text-2xl">Recent Orders</h2>
            <p className="mt-2 text-sm text-white/40">
              Your latest five orders.
            </p>
          </div>

          <div className="overflow-x-auto border border-white/10">
            <table className="w-full min-w-[700px] text-left">
              <thead className="border-b border-white/10 text-xs uppercase tracking-wider text-white/40">
                <tr>
                  <th className="p-5">Order</th>
                  <th className="p-5">Customer</th>
                  <th className="p-5">Total</th>
                  <th className="p-5">Payment</th>
                  <th className="p-5">Fulfillment</th>
                </tr>
              </thead>

              <tbody>
                {allOrders.slice(0, 5).map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-white/5 text-sm"
                  >
                    <td className="p-5">
                      <Link
                        href={`/admin/orders/${order.id}`}
                        className="transition hover:text-white/60"
                      >
                        {order.order_number} →
                      </Link>
                    </td>
                    <td className="p-5">
                      {order.customer_name ?? "Guest"}
                    </td>
                    <td className="p-5">
                      {formatCurrency(Number(order.total_amount ?? 0))}
                    </td>
                    <td className="p-5">
                      {order.payment_status}
                    </td>
                    <td className="p-5">
                      {order.fulfillment_status}
                    </td>
                  </tr>
                ))}

                {!allOrders.length && (
                  <tr>
                    <td
                      colSpan={5}
                      className="p-10 text-center text-white/40"
                    >
                      No orders found yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}
