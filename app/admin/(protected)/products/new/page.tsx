
"use client";

import Link from "next/link";
import { useState } from "react";
import { merchCategories } from "@/data/merch/categories";

const availableSizes = ["S", "M", "L", "XL", "2XL", "3XL"];

export default function NewProductPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [category, setCategory] = useState("");
  const [sizes, setSizes] = useState<string[]>([]);
  const [stockQuantity, setStockQuantity] = useState("0");
  const [isActive, setIsActive] = useState(true);

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
    setError("");

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

      setImage(result.imageUrl);
      return result.imageUrl as string;
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Image upload failed."
      );
      throw err;
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const uploadedImage = await handleImageUpload();

      const response = await fetch("/api/admin/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
        throw new Error(result.error || "Unable to save product.");
      }

      setSuccess("Product created successfully!");
      window.location.href = "/admin/products";
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl space-y-8 p-6">
      <div>
        <Link
          href="/admin/products"
          className="text-sm text-gray-500 hover:text-white"
        >
          ← Back to Products
        </Link>

        <h1 className="mt-4 text-2xl font-semibold">Add Product</h1>

        <p className="mt-1 text-sm text-gray-500">
          Add a new product to your Drama Club catalog.
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
              placeholder="Product name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">Slug</label>
            <input
              required
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-transparent p-3"
              placeholder="product-name"
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
              placeholder="0.00"
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
                <option key={item} value={item} className="text-black">
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
          <label className="mb-3 block text-sm font-medium">
            Available Sizes
          </label>

          <div className="flex flex-wrap gap-3">
            {availableSizes.map((size) => (
              <label
                key={size}
                className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-3 text-sm transition ${
                  sizes.includes(size)
                    ? "border-white bg-white text-black"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={sizes.includes(size)}
                  onChange={() => toggleSize(size)}
                  className="accent-black"
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
          <label className="mb-2 block text-sm">Description</label>
          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-transparent p-3"
            placeholder="Describe the product..."
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

        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        {success && (
          <p className="text-sm text-green-500">{success}</p>
        )}

        <div className="flex gap-3">
          <Link
            href="/admin/products"
            className="rounded-lg border px-5 py-3 text-sm"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isLoading || isUploading}
            className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black disabled:opacity-50"
          >
            {isLoading ? "Saving..." : "Save Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
