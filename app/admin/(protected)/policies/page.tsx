
import Link from "next/link"

const policies = [
  {
    title: "Return & Refund Policy",
    description: "Explains return eligibility, refund conditions, and how customers request a refund.",
    status: "Needs Review",
  },
  {
    title: "Shipping Policy",
    description: "Outlines shipping methods, processing times, delivery expectations, and shipping costs.",
    status: "Needs Review",
  },
  {
    title: "Privacy Policy",
    description: "Explains how customer information is collected, used, and protected.",
    status: "Needs Review",
  },
  {
    title: "Terms & Conditions",
    description: "Establishes the terms customers agree to when using the store.",
    status: "Needs Review",
  },
  {
    title: "Cancellation Policy",
    description: "Explains whether and when customers can cancel an order.",
    status: "Needs Review",
  },
]

export default function PoliciesSettingsPage() {
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

        <h1 className="mt-4 font-serif text-4xl">
          Policies & Legal
        </h1>

        <p className="mt-2 text-sm text-white/40">
          Review the policies that govern customer purchases and store usage.
        </p>

        <section className="mt-10 border border-white/10 p-6 md:p-8">
          <h2 className="font-serif text-xl">Store Policies</h2>

          <p className="mt-2 text-sm text-white/40">
            Keep your customer-facing policies organized and accessible.
          </p>

          <div className="mt-6 divide-y divide-white/10">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-sm text-white">
                    {policy.title}
                  </h3>
                  <p className="mt-1 text-xs leading-6 text-white/40">
                    {policy.description}
                  </p>
                </div>

                <span className="shrink-0 text-xs text-white/40">
                  {policy.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-6 text-xs text-white/30">
          Policies are currently listed for administrative reference.
          Editing, publishing, and customer-facing policy links will be
          handled separately.
        </p>
      </div>
    </main>
  )
}
