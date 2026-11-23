
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

export default async function OrdersPage() {
  const supabase = createAdminClient();

  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Orders fetch error:", error.message);
  }

  return (
    <main className="min-h-screen bg-[#080808] px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          Drama Club Brand / Administration
        </p>

        <h1 className="mt-4 font-serif text-4xl">Orders</h1>
        <p className="mt-2 text-sm text-white/40">
          Manage customer purchases and fulfillment.
        </p>

        {error ? (
        <div className="mt-10 border border-red-500/30 p-5 text-sm text-red-400">
          <p>Unable to load orders.</p>
          <p className="mt-2 text-white/60">{error.message}</p>
        </div>
        ) : (
          <div className="mt-10 overflow-x-auto border border-white/10">
            <table className="w-full min-w-[850px] text-left">
              <thead className="border-b border-white/10 text-xs uppercase tracking-wider text-white/40">
                <tr>
                  <th className="p-5">Order</th>
                  <th className="p-5">Customer</th>
                  <th className="p-5">Date</th>
                  <th className="p-5">Total</th>
                  <th className="p-5">Payment</th>
                  <th className="p-5">Fulfillment</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order) => (
                  <tr key={order.id} className="border-b border-white/5 text-sm">
                    <td className="p-5">{order.order_number}</td>
                    <td className="p-5">
                      <div>{order.customer_name ?? "Guest"}</div>
                      <div className="mt-1 text-xs text-white/40">
                        {order.customer_email ?? "No email"}
                      </div>
                    </td>
                    <td className="p-5 text-white/50">
                      {new Date(order.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-5">
                      ${(order.total_amount / 100).toFixed(2)}
                    </td>
                    <td className="p-5">{order.payment_status}</td>
                    <td className="p-5">{order.fulfillment_status}</td>
                  </tr>
                ))}

                {!orders?.length && (
                  <tr>
                    <td colSpan={6} className="p-10 text-center text-white/40">
                      No orders found yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
