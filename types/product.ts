export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  images: {
    src: string;
    label: string;
  }[] | null;
  category: string;
  sizes: string[] | null;
  is_active: boolean;
  stock_quantity: number;
  created_at: string;
  updated_at: string;
};