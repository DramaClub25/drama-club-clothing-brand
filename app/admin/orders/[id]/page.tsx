import Link from "next/link";
import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

type OrderItem = {
  name: string;
  quantity: number;
  amount_total: number;
  currency?: string;
  image?: string | null;
};

type ShippingAddress = {
  line1?: string | null;
  line2?: string | null;
  city?: string | null;
  state?: string | null;
  postal_code?: string | null;
  country?: string | null;
};

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createAdminClient();

  const { data: order, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !order) {
    notFound();
  }

  const items = (order.items ?? []) as OrderItem[];
  const address = order.shipping_address as ShippingAddress | null;

  const formatMoney = (amount: number) =>
    `$${(amount / 100).toFixed(2)}`;

  return (
    <main className="min-h-screen bg-[#080808] px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/admin/orders"
          className="inline-flex items-center gap-2 text-xs text-white/50 transition hover:text-white"
        >
          ← Back to Orders
        </Link>

        <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Drama Club Brand / Administration
            </p>

            <h1 className="mt-4 font-serif text-4xl">
              {order.order_number}
            </h1>

            <p className="mt-2 text-sm text-white/40">
              Placed on{" "}
              {new Date(order.created_at).toLocaleString()}
            </p>
          </div>

          <div className="flex gap-3 text-xs">
            <span className="border border-white/10 px-4 py-2">
              Payment: {order.payment_status}
            </span>
            <span className="border border-white/10 px-4 py-2">
              {order.fulfillment_status}
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <section className="border border-white/10 p-6 lg:col-span-2">
            <h2 className="font-serif text-2xl">Items Ordered</h2>

            <div className="mt-6 divide-y divide-white/10">
                {items.map((item, index) => (
                    <div
                    key={`${item.name}-${index}`}
                    className="flex flex-wrap items-center justify-between gap-4 py-5"
                    >
                    <div className="flex items-center gap-4">
                        {item.image ? (
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-16 w-16 object-cover"
                        />
                        ) : (
                        <div className="flex h-16 w-16 items-center justify-center border border-white/10 text-xs text-white/30">
                            No image
                        </div>
                        )}

                        <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="mt-1 text-xs text-white/40">
                            Quantity: {item.quantity}
                        </p>
                        </div>
                    </div>

                    <p className="text-sm">
                        {formatMoney(item.amount_total)}
                    </p>
                    </div>
                ))}

                {!items.length && (
                    <p className="py-8 text-sm text-white/40">
                    No item details available.
                    </p>
                )}
                </div>
          </section>

          <div className="space-y-6">
            <section className="border border-white/10 p-6">
              <h2 className="font-serif text-2xl">Customer</h2>

              <div className="mt-5 space-y-3 text-sm">
                <p>{order.customer_name ?? "Guest"}</p>
                <p className="text-white/50">
                  {order.customer_email ?? "No email"}
                </p>
                <p className="text-white/50">
                  {order.customer_phone ?? "No phone number"}
                </p>
              </div>
            </section>

            <section className="border border-white/10 p-6">
              <h2 className="font-serif text-2xl">Shipping Address</h2>

              <div className="mt-5 space-y-2 text-sm text-white/60">
                {address ? (
                  <>
                    {address.line1 && <p>{address.line1}</p>}
                    {address.line2 && <p>{address.line2}</p>}
                    <p>
                      {[address.city, address.state, address.postal_code]
                        .filter(Boolean)
                        .join(", ")}
                    </p>
                    {address.country && <p>{address.country}</p>}
                  </>
                ) : (
                  <p>No shipping address available.</p>
                )}
              </div>
            </section>

            <section className="border border-white/10 p-6">
              <h2 className="font-serif text-2xl">Payment Summary</h2>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between text-white/50">
                  <span>Subtotal</span>
                  <span>{formatMoney(order.subtotal_amount)}</span>
                </div>

                <div className="flex justify-between text-white/50">
                  <span>Shipping</span>
                  <span>{formatMoney(order.shipping_amount)}</span>
                </div>

                <div className="flex justify-between text-white/50">
                  <span>Tax</span>
                  <span>{formatMoney(order.tax_amount)}</span>
                </div>

                <div className="flex justify-between border-t border-white/10 pt-4 font-medium">
                  <span>Total</span>
                  <span>{formatMoney(order.total_amount)}</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}