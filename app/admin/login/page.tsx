
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Invalid email or password. Please try again.");
      setIsLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Drama Club Brand
          </p>

          <h1 className="mt-5 font-serif text-4xl">
            Admin Login
          </h1>

          <p className="mt-3 text-sm text-white/50">
            Sign in to manage your store.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/60"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-white/20 bg-transparent px-4 py-4 text-sm outline-none transition focus:border-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/60"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-white/20 bg-transparent px-4 py-4 text-sm outline-none transition focus:border-white"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-black transition hover:bg-white/80 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center">
            <Link
                href="/admin/forgot-password"
                className="text-xs text-white/50 underline underline-offset-4 transition hover:text-white"
            >
                Forgot Password?
            </Link>
         </div>

        <p className="mt-10 text-center text-[10px] uppercase tracking-[0.2em] text-white/30">
          Authorized Personnel Only
        </p>
      </div>
    </main>
  );
}
