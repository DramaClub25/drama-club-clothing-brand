import { createAdminClient } from "@/lib/supabase/admin";
import Link from "next/link";


export default async function CustomersPage() {
  const supabase = createAdminClient();

  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Unable to load customer orders.");
  }

  const customers = Object.values(
    (orders ?? []).reduce((acc: Record<string, any>, order: any) => {
      const email = order.customer_email?.toLowerCase();

      if (!email) return acc;

      if (!acc[email]) {
        acc[email] = {
          name: order.customer_name ?? "Unknown Customer",
          email,
          orders: 0,
          totalSpent: 0,
        };
      }

      acc[email].orders += 1;

      if (order.payment_status === "paid") {
        acc[email].totalSpent += Number(order.total_amount ?? 0);
      }

      return acc;
    }, {})
  );

  return (
    <main className="min-h-screen bg-black px-8 py-12 text-white">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
        Drama Club Brand / Administration
      </p>

        <Link
          href="/admin"
          className="mb-6 inline-flex items-center gap-2 text-xs text-white/50 transition hover:text-white"
        >
          ← Back to Dashboard
        </Link>

      <h1 className="mb-2 font-serif text-4xl">Customers</h1>

      <p className="mb-10 text-neutral-500">
        Manage your customer relationships and purchase history.
      </p>

      <div className="mb-6 text-sm text-neutral-400">
        {customers.length} customers
      </div>

      <div className="overflow-x-auto border border-neutral-800">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-neutral-800 text-xs uppercase tracking-wider text-neutral-500">
            <tr>
              <th className="p-5">Customer</th>
              <th className="p-5">Email</th>
              <th className="p-5">Orders</th>
              <th className="p-5">Lifetime Spend</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer: any) => (
              <tr
                key={customer.email}
                className="border-b border-neutral-900"
              >
                <td className="p-5">{customer.name}</td>
                <td className="p-5 text-neutral-400">{customer.email}</td>
                <td className="p-5">{customer.orders}</td>
                <td className="p-5">
                  ${customer.totalSpent.toFixed(2)}
                </td>
              </tr>
            ))}

            {customers.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-neutral-500">
                  No customers found yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
