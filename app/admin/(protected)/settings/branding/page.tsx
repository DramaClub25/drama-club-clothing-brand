
import Link from "next/link"

const brandingAssets = [
  {
    title: "Store Logo",
    description: "Primary logo displayed throughout the storefront.",
    location: "public/",
    status: "Review",
  },
  {
    title: "Favicon",
    description: "Small icon displayed in browser tabs.",
    location: "public/favicon.ico",
    status: "Review",
  },
  {
    title: "Apple Touch Icon",
    description: "Icon used when customers save the store to an Apple device.",
    location: "public/apple-touch-icon.png",
    status: "Review",
  },
  {
    title: "Social Sharing Image",
    description: "Image displayed when your website is shared on social media.",
    location: "public/og-image.jpg",
    status: "Review",
  },
]

const brandColors = [
  { name: "Primary Color", value: "Not documented" },
  { name: "Secondary Color", value: "Not documented" },
  { name: "Background Color", value: "Not documented" },
  { name: "Accent Color", value: "Not documented" },
]

export default function BrandingSettingsPage() {
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
          Storefront & Branding
        </h1>

        <p className="mt-2 text-sm text-white/40">
          Review your storefront identity, brand colors, and visual assets.
        </p>

        <section className="mt-10 border border-white/10 p-6 md:p-8">
          <h2 className="font-serif text-xl">Brand Identity</h2>
          <p className="mt-2 text-sm text-white/40">
            Your brand's visual foundation.
          </p>

          <div className="mt-6 divide-y divide-white/10">
            {brandColors.map((color) => (
              <div
                key={color.name}
                className="flex items-center justify-between gap-4 py-4"
              >
                <span className="text-sm text-white/80">
                  {color.name}
                </span>
                <span className="text-xs text-white/30">
                  {color.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 border border-white/10 p-6 md:p-8">
          <h2 className="font-serif text-xl">Branding Assets</h2>
          <p className="mt-2 text-sm text-white/40">
            Important images and icons used across your website.
          </p>

          <div className="mt-6 divide-y divide-white/10">
            {brandingAssets.map((asset) => (
              <div
                key={asset.title}
                className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-sm text-white">
                    {asset.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/40">
                    {asset.description}
                  </p>
                  <p className="mt-2 text-xs text-white/30">
                    {asset.location}
                  </p>
                </div>

                <span className="text-xs text-white/40">
                  {asset.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-6 text-xs text-white/30">
          Branding information is currently informational. Asset uploads
          and storefront customization will be added separately.
        </p>
      </div>
    </main>
  )
}
