
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { merchProducts } from "@/data/merch";

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY!
);

export async function POST(request: Request) {
  try {
    const { items } = await request.json();

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Your cart is empty." },
        { status: 400 }
      );
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
      items.map((item) => {
        const product = merchProducts.find(
          (product) => product.id === item.id
        );

        if (!product) {
          throw new Error("Invalid product in cart.");
        }

        const quantity = Number(item.quantity);

        if (
          !Number.isInteger(quantity) ||
          quantity < 1 ||
          quantity > 10
        ) {
          throw new Error("Invalid product quantity.");
        }

        if (
          product.sizes?.length &&
          !product.sizes.includes(item.size)
        ) {
          throw new Error("Invalid product size.");
        }

        return {
          quantity,
          price_data: {
            currency: "usd",
            unit_amount: Math.round(product.price * 100),
            product_data: {
              name: product.name,
              description: item.size
                ? `Size: ${item.size}`
                : undefined,
              metadata: {
                image: product.image,
                product_id: product.id,
              },
            },
          },
        };
      });

const session = await stripe.checkout.sessions.create({
  mode: "payment",
  line_items: lineItems,

  wallet_options: {
    link: {
      display: "never",
    },
  },

  shipping_address_collection: {
    allowed_countries: ["US"],
  },
  phone_number_collection: {
    enabled: true,
  },
  success_url: `${new URL(request.url).origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
  cancel_url: `${new URL(request.url).origin}/checkout`,
});

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error("Checkout error:", error);

    return NextResponse.json(
      { error: "Unable to start checkout. Please try again." },
      { status: 500 }
    );
  }
}
