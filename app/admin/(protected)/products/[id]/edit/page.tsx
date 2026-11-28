
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { merchCategories } from "@/data/merch/categories";

type Product = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  image: string | null;
  category: string;
  sizes: string[] | null;
  stock_quantity: number;
  is_active: boolean;
};

const availableSizes = ["S", "M", "L", "XL", "2XL", "3XL"];

export default function EditProductPage() {
  const params = useParams();
  const id = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [category, setCategory] = useState("");
  const [sizes, setSizes] = useState<string[]>([]);
  const [stockQuantity, setStockQuantity] = useState("0");
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await fetch(`/api/admin/products/${id}`);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Unable to load product.");
        }

        const data = result.product as Product;

        setProduct(data);
        setName(data.name);
        setSlug(data.slug);
        setDescription(data.description || "");
        setPrice(String(data.price));
        setImage(data.image || "");
        setImagePreview(data.image || "");
        setCategory(data.category);
        setSizes(data.sizes || []);
        setStockQuantity(String(data.stock_quantity ?? 0));
        setIsActive(data.is_active);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Unable to load product."
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (id) loadProduct();
  }, [id]);

  const toggleSize = (size: string) => {
    setSizes((currentSizes) =>
      currentSizes.includes(size)
        ? currentSizes.filter((item) => item !== size)
        : [...currentSizes, size]
    );
  };

  const handleImageUpload = async () => {
    if (!selectedFile) return image;

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("/api/admin/products/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Image upload failed.");
      }

      return result.imageUrl as string;
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSaving(true);
    setError("");

    try {
      const uploadedImage = await handleImageUpload();

      const response = await fetch("/api/admin/products", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          name,
          slug,
          description,
          price,
          image: uploadedImage,
          category,
          sizes,
          stock_quantity: stockQuantity,
          is_active: isActive,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to update product.");
      }

      window.location.href = "/admin/products";
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="p-6 text-gray-400">Loading product...</div>;
  }

  if (!product) {
    return (
      <div className="space-y-4 p-6">
        <p className="text-red-500">{error || "Product not found."}</p>
        <Link
          href="/admin/products"
          className="text-sm text-white/70 hover:text-white"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-8 p-6">
      <div>
        <Link
          href="/admin/products"
          className="text-sm text-gray-500 hover:text-white"
        >
          ← Back to Products
        </Link>

        <h1 className="mt-4 text-2xl font-semibold">Edit Product</h1>

        <p className="mt-1 text-sm text-gray-500">
          Update your Drama Club product details.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm">Product Name</label>
            <input
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSlug(
                  e.target.value
                    .toLowerCase()
                    .trim()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-|-$/g, "")
                );
              }}
              className="w-full rounded-lg border border-gray-300 bg-transparent p-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">Slug</label>
            <input
              required
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-transparent p-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">Price ($)</label>
            <input
              required
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-transparent p-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">Category</label>
            <select
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-transparent p-3 text-white"
            >
              <option value="" disabled className="text-black">
                Select a category
              </option>

              {merchCategories.map((item) => (
                <option
                  key={item}
                  value={item}
                  className="text-black"
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Product Image
            </label>

            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;

                if (file.size > 5 * 1024 * 1024) {
                  setError("Image must be smaller than 5MB.");
                  e.target.value = "";
                  return;
                }

                setError("");
                setSelectedFile(file);
                setImagePreview(URL.createObjectURL(file));
              }}
              className="w-full rounded-lg border border-gray-300 bg-transparent p-3 text-sm"
            />

            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Product preview"
                  className="h-40 w-40 rounded-lg border object-cover"
                />
              </div>
            )}

            {isUploading && (
              <p className="mt-2 text-sm text-gray-500">
                Uploading image...
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm">Description</label>
          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-transparent p-3"
          />
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium">
            Available Sizes
          </label>

          <div className="flex flex-wrap gap-3">
            {availableSizes.map((size) => (
              <label
                key={size}
                className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-3 text-sm transition ${
                  sizes.includes(size)
                    ? "border-white bg-white/10 text-white"
                    : "border-white/15 text-gray-400 hover:border-white/30"
                }`}
              >
                <input
                  type="checkbox"
                  checked={sizes.includes(size)}
                  onChange={() => toggleSize(size)}
                  className="accent-white"
                />
                {size}
              </label>
            ))}
          </div>

          <p className="mt-2 text-xs text-gray-500">
            Select all sizes available for this product.
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm">Stock Quantity</label>
          <input
            required
            type="number"
            min="0"
            step="1"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-transparent p-3"
          />
        </div>

        <label className="flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
          Make product active
        </label>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <div className="flex gap-3">
          <Link
            href="/admin/products"
            className="rounded-lg border px-5 py-3 text-sm"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isSaving || isUploading}
            className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
