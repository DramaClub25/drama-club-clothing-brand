import Link from "next/link"


const settingsSections = [
  {
    title: "Store Information",
    description: "Manage your store name, contact details, and business information.",
    href: "/admin/settings/store",
    icon: "🏬",
  },
  {
    title: "Payments",
    description: "Manage payment settings and Stripe connection information.",
    href: "/admin/settings/payments",
    icon: "💳",
  },
  {
    title: "Shipping & Fulfillment",
    description: "Configure shipping methods, rates, and processing times.",
    href: "/admin/settings/shipping",
    icon: "📦",
  },
  {
    title: "Notifications",
    description: "Control order alerts and customer email notifications.",
    href: "/admin/settings/notifications",
    icon: "✉️",
  },
  // {
  //   title: "Storefront & Branding",
  //   description: "Manage your logo, colors, social links, and announcements.",
  //   href: "/admin/settings/branding",
  //   icon: "🎨",
  // },
  {
    title: "Security & Account",
    description: "Manage administrator access and account security.",
    href: "/admin/settings/security",
    icon: "🔐",
  },
  {
    title: "Policies & Legal",
    description: "Manage privacy, returns, refunds, and store policies.",
    href: "/admin/settings/policies",
    icon: "📄",
  },
]

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#080808] px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/admin"
          className="mb-6 inline-flex items-center gap-2 text-xs text-white/50 transition hover:text-white"
        >
          ← Back to Dashboard
        </Link>
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          Drama Club Brand / Administration
        </p>

        <h1 className="mt-4 font-serif text-4xl">Settings</h1>

        <p className="mt-2 text-sm text-white/40">
          Manage your store configuration and preferences.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {settingsSections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/30 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between">
                <span className="text-2xl">{section.icon}</span>

                <span className="text-white/30 transition group-hover:translate-x-1 group-hover:text-white">
                  →
                </span>
              </div>

              <h2 className="mt-6 font-serif text-xl">
                {section.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/40">
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
