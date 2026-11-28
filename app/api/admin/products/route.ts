
import { NextResponse } from "next/server";
import { createClient as createServerClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  try {
    // Verify the logged-in admin
    const authClient = await createServerClient();
    const {
      data: { user },
    } = await authClient.auth.getUser();

    if (!user || user.id !== process.env.ADMIN_USER_ID) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();

    const {
      name,
      slug,
      description,
      price,
      image,
      category,
      sizes,
      stock_quantity,
      is_active,
    } = body;

    // Basic validation
    if (!name || !slug || !category || price === "" || price == null) {
      return NextResponse.json(
        { error: "Name, slug, category, and price are required." },
        { status: 400 }
      );
    }

    const numericPrice = Number(price);
    const stockQuantity = Number(stock_quantity);

    if (
      !Number.isFinite(numericPrice) ||
      numericPrice < 0 ||
      !Number.isInteger(stockQuantity) ||
      stockQuantity < 0
    ) {
      return NextResponse.json(
        { error: "Enter a valid price and stock quantity." },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from("products")
      .insert({
        id: String(slug).trim(),
        name: String(name).trim(),
        slug: String(slug).trim(),
        description: description || "",
        price: numericPrice,
        image: image || "",
        images: [],
        category: String(category).trim(),
        sizes: Array.isArray(sizes) ? sizes : [],
        stock_quantity: stockQuantity,
        is_active: Boolean(is_active),
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ product: data }, { status: 201 });
  } catch (error) {
    console.error("Product creation error:", error);

    return NextResponse.json(
      { error: "Unable to create product." },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    // Verify the logged-in admin
    const authClient = await createServerClient();
    const {
      data: { user },
    } = await authClient.auth.getUser();

    if (!user || user.id !== process.env.ADMIN_USER_ID) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();

    const {
      id,
      name,
      slug,
      description,
      price,
      image,
      category,
      sizes,
      stock_quantity,
      is_active,
    } = body;

    // Basic validation
    if (
      !id ||
      !name ||
      !slug ||
      !category ||
      price === "" ||
      price == null
    ) {
      return NextResponse.json(
        {
          error:
            "Product ID, name, slug, category, and price are required.",
        },
        { status: 400 }
      );
    }

    const numericPrice = Number(price);
    const stockQuantity = Number(stock_quantity);

    if (
      !Number.isFinite(numericPrice) ||
      numericPrice < 0 ||
      !Number.isInteger(stockQuantity) ||
      stockQuantity < 0
    ) {
      return NextResponse.json(
        { error: "Enter a valid price and stock quantity." },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from("products")
      .update({
        name: String(name).trim(),
        slug: String(slug).trim(),
        description: description || "",
        price: numericPrice,
        image: image || "",
        category: String(category).trim(),
        sizes: Array.isArray(sizes) ? sizes : [],
        stock_quantity: stockQuantity,
        is_active: Boolean(is_active),
        updated_at: new Date().toISOString(),
      })
      .eq("id", String(id))
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ product: data });
  } catch (error) {
    console.error("Product update error:", error);

    return NextResponse.json(
      { error: "Unable to update product." },
      { status: 500 }
    );
  }
}
