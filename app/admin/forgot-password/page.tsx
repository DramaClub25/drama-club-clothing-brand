
"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleResetRequest = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsLoading(true);
    setMessage("");
    setError("");

    const supabase = createClient();

    const { error } = await supabase.auth.resetPasswordForEmail(
      email,
      {
        redirectTo: "https://www.dramaclubbrand.com/admin/reset-password",
      }
    );

    if (error) {
      setError(error.message);
    } else {
      setMessage(
        "If an account exists for that email, a password reset link has been sent."
      );
    }

    setIsLoading(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Drama Club Brand
          </p>

          <h1 className="mt-5 font-serif text-4xl">
            Forgot Password?
          </h1>

          <p className="mt-3 text-sm leading-6 text-white/50">
            Enter your admin email address and we'll send you a
            link to reset your password.
          </p>
        </div>

        <form onSubmit={handleResetRequest} className="space-y-6">
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
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-white/20 bg-transparent px-4 py-4 text-sm outline-none transition focus:border-white"
              placeholder="Enter your email"
            />
          </div>

          {message && (
            <p role="status" className="text-sm leading-6 text-green-400">
              {message}
            </p>
          )}

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
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/admin/login"
            className="text-xs uppercase tracking-[0.2em] text-white/50 underline underline-offset-4 transition hover:text-white"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </main>
  );
}
