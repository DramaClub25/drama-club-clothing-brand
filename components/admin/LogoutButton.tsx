
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogout = async () => {
    setIsLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      setError("Unable to sign out. Please try again.");
      setIsLoading(false);
      return;
    }

    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleLogout}
        disabled={isLoading}
        className="flex items-center gap-2 text-white/50 transition hover:text-white disabled:opacity-50"
        aria-label="Log out"
      >
        <LogOut size={19} />
        <span className="hidden text-xs uppercase tracking-wider sm:inline">
          {isLoading ? "Signing Out..." : "Logout"}
        </span>
      </button>

      {error && (
        <p role="alert" className="absolute right-0 top-full mt-2 whitespace-nowrap text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
