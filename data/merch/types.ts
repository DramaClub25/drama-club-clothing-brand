export type MerchProductImage = {
  src: string
  label: string
}

export type MerchProduct = {
  id: string
  name: string
  slug: string
  description: string
  price: number
  image: string
  images?: MerchProductImage[]
  category: string
  sizes?: string[]
  // colors?: string[]
  // featured?: boolean
}