
import Link from "next/link"

const storeInfo = [
  {
    label: "Store Name",
    value: "Drama Club Brand",
  },
  {
    label: "Business Email",
    value: "support@dramaclubbrand.com",
  },
  {
    label: "Contact Phone",
    value: "215-280-2312",
  },
  {
    label: "Website",
    value: "https://www.dramaclubbrand.com",
  },
]

export default function StoreSettingsPage() {
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
          Store Information
        </h1>

        <p className="mt-2 text-sm text-white/40">
          Your store identity and business contact information.
        </p>

        <section className="mt-10 border border-white/10 p-6 md:p-8">
          <h2 className="font-serif text-xl">
            Business Details
          </h2>

          <p className="mt-2 text-sm text-white/40">
            Official information for Drama Club Brand.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {storeInfo.map((item) => (
              <div key={item.label}>
                <p className="text-xs uppercase tracking-wider text-white/40">
                  {item.label}
                </p>
                <p className="mt-2 text-sm text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-6 text-xs text-white/30">
          Store information is currently managed directly in the application.
        </p>
      </div>
    </main>
  )
}
