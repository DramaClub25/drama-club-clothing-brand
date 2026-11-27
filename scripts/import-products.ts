
import { createClient } from "@supabase/supabase-js"
import { merchProducts } from "@/data/merch"

async function importProducts() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY

  if (!supabaseUrl || !supabaseSecretKey) {
    throw new Error("Missing Supabase environment variables.")
  }

  const supabase = createClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })

  const products = merchProducts.map((product) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    description: product.description,
    price: product.price,
    image: product.image,
    images: product.images ?? [],
    category: product.category,
    sizes: product.sizes ?? [],
    is_active: true,
    stock_quantity: 0,
  }))

  const { data, error } = await supabase
    .from("products")
    .upsert(products, { onConflict: "id" })
    .select("id")

  if (error) {
    throw new Error(error.message)
  }

  console.log(`Successfully imported ${data.length} products.`)
}

importProducts().catch((error) => {
  console.error("Product import failed:", error.message)
  process.exit(1)
})
