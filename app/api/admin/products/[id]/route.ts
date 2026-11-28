
import { NextResponse } from "next/server";
import { createClient as createServerClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{ id: string }>;
};

// GET — Fetch one product
export async function GET(
  request: Request,
  { params }: RouteContext
) {
  try {
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

    const { id } = await params;
    const supabase = createAdminClient();

    const { data: product, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return NextResponse.json(
          { error: "Product not found." },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ product });
  } catch (error) {
    console.error("Product fetch error:", error);

    return NextResponse.json(
      { error: "Unable to load product." },
      { status: 500 }
    );
  }
}

// DELETE — Delete one product
export async function DELETE(
  request: Request,
  { params }: RouteContext
) {
  try {
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

    const { id } = await params;
    const supabase = createAdminClient();

    const { data: product, error } = await supabase
      .from("products")
      .delete()
      .eq("id", id)
      .select("id")
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return NextResponse.json(
          { error: "Product not found." },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: "Product deleted successfully.",
      id: product.id,
    });
  } catch (error) {
    console.error("Product deletion error:", error);

    return NextResponse.json(
      { error: "Unable to delete product." },
      { status: 500 }
    );
  }
}
