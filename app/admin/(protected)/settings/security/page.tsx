
import Link from "next/link"

const securityItems = [
  {
    title: "Admin Authentication",
    description: "Your admin dashboard is protected by Supabase authentication.",
    status: "Enabled",
  },
  {
    title: "Password Management",
    description: "Manage your password through the existing account recovery process.",
    status: "Available",
  },
  {
    title: "Password Recovery",
    description: "Recover access using the existing forgot-password workflow.",
    status: "Available",
  },
  {
    title: "Admin Access",
    description: "Access to protected dashboard pages is restricted to authorized administrators.",
    status: "Restricted",
  },
  {
    title: "Session Management",
    description: "Authentication sessions are handled by Supabase.",
    status: "Supabase managed",
  },
]

const accountLinks = [
  {
    label: "Admin Login",
    href: "/admin/login",
  },
  {
    label: "Forgot Password",
    href: "/admin/forgot-password",
  },
]

export default function SecuritySettingsPage() {
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
          Security & Account
        </h1>

        <p className="mt-2 text-sm text-white/40">
          Review administrator access and account security.
        </p>

        <section className="mt-10 border border-white/10 p-6 md:p-8">
          <h2 className="font-serif text-xl">Security Overview</h2>

          <div className="mt-6 divide-y divide-white/10">
            {securityItems.map((item) => (
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

                <span className="text-xs text-white/40">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 border border-white/10 p-6 md:p-8">
          <h2 className="font-serif text-xl">Account Access</h2>
          <p className="mt-2 text-sm text-white/40">
            Quick links to your existing account authentication pages.
          </p>

          <div className="mt-6 divide-y divide-white/10">
            {accountLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between py-4 text-sm text-white/80 transition hover:text-white"
              >
                {item.label}
                <span className="text-white/40">→</span>
              </Link>
            ))}
          </div>
        </section>

        <p className="mt-6 text-xs text-white/30">
          Authentication and account security are managed through your
          existing Supabase integration. This page does not modify security
          settings.
        </p>
      </div>
    </main>
  )
}
