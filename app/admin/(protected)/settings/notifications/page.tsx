
import Link from "next/link"

const notificationSettings = [
  {
    title: "New Order Notifications",
    description: "Alerts when a customer places a new order.",
    recipient: "Store administrator",
  },
  {
    title: "Order Confirmations",
    description: "Confirmation emails sent to customers after checkout.",
    recipient: "Customer",
  },
  {
    title: "Shipping Updates",
    description: "Updates when an order is shipped or fulfilled.",
    recipient: "Customer",
  },
  {
    title: "Low Stock Alerts",
    description: "Alerts when product inventory reaches a low level.",
    recipient: "Store administrator",
  },
  {
    title: "Customer Inquiries",
    description: "Notifications when a customer submits a question or request.",
    recipient: "Store administrator",
  },
]

export default function NotificationsSettingsPage() {
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

        <h1 className="mt-4 font-serif text-4xl">Notifications</h1>

        <p className="mt-2 text-sm text-white/40">
          Review the notifications that help keep your store running smoothly.
        </p>

        <section className="mt-10 border border-white/10 p-6 md:p-8">
          <h2 className="font-serif text-xl">Notification Preferences</h2>

          <div className="mt-6 divide-y divide-white/10">
            {notificationSettings.map((item) => (
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
                  <p className="text-xs uppercase tracking-wider text-white/30">
                    Recipient
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    {item.recipient}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-6 text-xs text-white/30">
          These notification preferences are informational for now. Email
          delivery and alert controls will be configured separately.
        </p>
      </div>
    </main>
  )
}
