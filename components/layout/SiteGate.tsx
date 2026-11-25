
"use client";

import { usePathname } from "next/navigation";
import UnderConstruction from "@/components/layout/UnderConstruction";

export default function SiteGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return <>{children}</>;
  }

  return <UnderConstruction />;
}
