
import Link from "next/link";
import Stripe from "stripe";
import { CheckCircle2, Package } from "lucide-react";
import ClearCartOnSuccess from "@/components/cart/ClearCartOnSuccess";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type SuccessPageProps = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

export default async function CheckoutSuccessPage({
  searchParams,
}: SuccessPageProps) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Order Not Found</h1>
          <p className="mt-3 text-white/60">
            We couldn't locate your checkout session.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-block bg-white px-8 py-4 text-sm uppercase tracking-widest text-black"
          >
            Return to Shop
          </Link>
        </div>
      </main>
    );
  }

  let session: Stripe.Response<Stripe.Checkout.Session> | null = null;

  try {
    session = await stripe.checkout.sessions.retrieve(session_id);
  } catch (error) {
    console.error("Stripe session verification failed:", error);
  }

  if (!session || session.payment_status !== "paid") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">
            Payment Not Confirmed
          </h1>
          <p className="mt-3 text-white/60">
            We couldn't confirm your payment. Please contact us if you believe this is an error.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-block bg-white px-8 py-4 text-sm uppercase tracking-widest text-black"
          >
            Return to Shop
          </Link>
        </div>
      </main>
    );
  }

  const customerName =
    session.customer_details?.name?.split(" ")[0];

  const orderNumber = session.id.slice(-8).toUpperCase();

  const totalPaid = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: session.currency ?? "usd",
  }).format((session.amount_total ?? 0) / 100);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-20 text-white">
       <ClearCartOnSuccess />
      <div className="w-full max-w-xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/20">
          <CheckCircle2 size={40} strokeWidth={1.2} />
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/50">
          Drama Club Brand
        </p>

        <h1 className="mt-4 text-3xl font-semibold md:text-5xl">
          Thank You{customerName ? `, ${customerName}` : ""}!
        </h1>

        <p className="mt-5 text-sm leading-7 text-white/60">
          Your order has been successfully placed.
          We appreciate you supporting Drama Club Brand.
        </p>

        <div className="mt-10 border border-white/15 p-6 text-left">
          <div className="flex items-center gap-3">
            <Package size={22} />
            <h2 className="text-sm uppercase tracking-widest">
              Order Confirmation
            </h2>
          </div>

          <div className="mt-6 flex justify-between border-b border-white/10 pb-4 text-sm">
            <span className="text-white/50">Order Number</span>
            <span>#{orderNumber}</span>
          </div>

          <div className="mt-4 flex justify-between text-sm">
            <span className="text-white/50">Total Paid</span>
            <span>{totalPaid}</span>
          </div>
        </div>

        <Link
          href="/shop"
          className="mt-10 inline-block w-full bg-white px-8 py-5 text-sm font-medium uppercase tracking-[0.2em] text-black transition hover:bg-white/80"
        >
          Continue Shopping
        </Link>

        <p className="mt-6 text-xs text-white/40">
          Thank you for shopping with Drama Club Brand.
        </p>
      </div>
    </main>
  );
}
