
import Link from "next/link"

const paymentDetails = [
  {
    title: "Payment Provider",
    description: "Your store's payment processing connection.",
    value: "Stripe",
    status: "Configured",
  },
  {
    title: "Payment Methods",
    description: "Payment options currently supported by your checkout.",
    value: "Card payments",
    status: "Review configuration",
  },
  {
    title: "Store Currency",
    description: "The currency used to display product and order prices.",
    value: "USD ($)",
    status: "Configured",
  },
  {
    title: "Refund Management",
    description: "Review and manage customer refund requests.",
    value: "Managed through Stripe",
    status: "Manual",
  },
]

export default function PaymentsSettingsPage() {
  return (
    <main className="min-h-screen bg-[#080808] px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin/settings"
          className="mb-8 inline-flex text-xs text-white/50 transition hover:text-white"
        >
          ← Back to Settings
        </Link>

        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          Drama Club Brand / Administration
        </p>

        <h1 className="mt-4 font-serif text-4xl">Payments</h1>

        <p className="mt-2 text-sm text-white/40">
          Review your payment provider, accepted payment methods, and refund
          handling.
        </p>

        <section className="mt-10 border border-white/10 p-6 md:p-8">
          <h2 className="font-serif text-xl">Payment Configuration</h2>

          <div className="mt-6 divide-y divide-white/10">
            {paymentDetails.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-sm text-white">{item.title}</h3>
                  <p className="mt-1 text-xs text-white/40">
                    {item.description}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-sm text-white/80">{item.value}</p>
                  <p className="mt-1 text-xs text-white/30">{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-6 text-xs text-white/30">
          Payment processing is handled through your existing Stripe
          integration. These settings are informational and do not modify
          your Stripe account.
        </p>
      </div>
    </main>
  )
}
