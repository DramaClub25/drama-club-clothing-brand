
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createAdminClient } from "@/lib/supabase/admin";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: "Missing webhook configuration." },
      { status: 400 }
    );
  }

  const body = await request.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );
  } catch (error) {
    console.error("Webhook signature verification failed:", error);

    return NextResponse.json(
      { error: "Invalid webhook signature." },
      { status: 400 }
    );
  }

  if (
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded"
  ) {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status !== "paid") {
      return NextResponse.json({ received: true });
    }

    try {
      const lineItems = await stripe.checkout.sessions.listLineItems(
        session.id
      );

      const items = lineItems.data.map((item) => ({
        name: item.description ?? "Store item",
        quantity: item.quantity ?? 1,
        amount_total: item.amount_total ?? 0,
        currency: item.currency,
      }));

      const supabase = createAdminClient();

      const { error } = await supabase
        .from("orders")
        .upsert(
          {
            stripe_checkout_session_id: session.id,
            stripe_payment_intent_id:
              typeof session.payment_intent === "string"
                ? session.payment_intent
                : session.payment_intent?.id ?? null,
            customer_name: session.customer_details?.name ?? null,
            customer_email: session.customer_details?.email ?? null,
            customer_phone: session.customer_details?.phone ?? null,
            shipping_address:
                session.collected_information?.shipping_details?.address ??
                session.customer_details?.address ??
              null,
            items,
            subtotal_amount: session.amount_subtotal ?? 0,
            shipping_amount: session.shipping_cost?.amount_total ?? 0,
            tax_amount: session.total_details?.amount_tax ?? 0,
            total_amount: session.amount_total ?? 0,
            currency: session.currency ?? "usd",
            payment_status: "paid",
          },
          {
            onConflict: "stripe_checkout_session_id",
          }
        );

      if (error) {
        console.error("Supabase order insert failed:", error);

        return NextResponse.json(
          { error: "Unable to save order." },
          { status: 500 }
        );
      }
    } catch (error) {
      console.error("Order processing failed:", error);

      return NextResponse.json(
        { error: "Unable to process order." },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ received: true });
}
