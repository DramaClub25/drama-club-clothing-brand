
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordUpdate = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (password.length < 8) {
      setError("Your password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    setIsLoading(true);

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setError("Your reset session is invalid or has expired. Request a new reset link.");
      setIsLoading(false);
      return;
    }

    const { error: updateError } = await supabase.auth.updateUser({
      password,
    });

    if (updateError) {
      setError(updateError.message);
      setIsLoading(false);
      return;
    }

    await supabase.auth.signOut();

    setMessage("Your password has been updated. Redirecting to login...");

    setTimeout(() => {
      router.push("/admin/login");
      router.refresh();
    }, 2000);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Drama Club Brand
          </p>

          <h1 className="mt-5 font-serif text-4xl">
            Reset Password
          </h1>

          <p className="mt-3 text-sm leading-6 text-white/50">
            Choose a new password for your admin account.
          </p>
        </div>

        <form onSubmit={handlePasswordUpdate} className="space-y-6">
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/60"
            >
              New Password
            </label>

            <input
              id="password"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-white/20 bg-transparent px-4 py-4 text-sm outline-none transition focus:border-white"
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/60"
            >
              Confirm New Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-white/20 bg-transparent px-4 py-4 text-sm outline-none transition focus:border-white"
              placeholder="Confirm new password"
            />
          </div>

          {error && (
            <p role="alert" className="text-sm leading-6 text-red-400">
              {error}
            </p>
          )}

          {message && (
            <p role="status" className="text-sm leading-6 text-green-400">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-black transition hover:bg-white/80 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? "Updating Password..." : "Update Password"}
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
