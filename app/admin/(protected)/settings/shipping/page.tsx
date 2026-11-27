
import Link from "next/link"

const shippingSections = [
  {
    title: "Shipping Methods",
    description: "Manage the delivery options customers can select at checkout.",
    options: ["Standard Shipping", "Expedited Shipping", "Local Pickup"],
  },
  {
    title: "Shipping Rates",
    description: "Set shipping prices and free-shipping thresholds.",
    options: ["Flat-rate shipping", "Free shipping threshold"],
  },
  {
    title: "Processing Times",
    description: "Define how long orders take to prepare before shipment.",
    options: ["Order processing time", "Handling time"],
  },
  {
    title: "Delivery Regions",
    description: "Define where Drama Club Brand currently delivers.",
    options: ["Domestic shipping", "International shipping"],
  },
]

export default function ShippingSettingsPage() {
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
          Shipping & Fulfillment
        </h1>

        <p className="mt-2 text-sm text-white/40">
          Manage how orders are prepared, shipped, and delivered.
        </p>

        <div className="mt-10 space-y-5">
          {shippingSections.map((section) => (
            <section
              key={section.title}
              className="border border-white/10 p-6 md:p-8"
            >
              <h2 className="font-serif text-xl">{section.title}</h2>

              <p className="mt-2 text-sm text-white/40">
                {section.description}
              </p>

              <div className="mt-6 space-y-3">
                {section.options.map((option) => (
                  <div
                    key={option}
                    className="flex items-center justify-between border-t border-white/10 py-4"
                  >
                    <span className="text-sm text-white/80">{option}</span>
                    <span className="text-xs text-white/30">
                      Not configured
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-6 text-xs text-white/30">
          Shipping settings are currently informational and are not connected
          to checkout.
        </p>
      </div>
    </main>
  )
}
