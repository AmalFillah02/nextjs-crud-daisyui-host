"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href ? "btn-active" : "btn-ghost";

  return (
    <div className="navbar bg-base-100 border-b shadow-sm">
      <div className="flex-1">
        <div className="text-xl font-bold">
          PostAPP
        </div>
      </div>
      <div className="flex gap-2">
        <Link href="/" className={`btn btn-sm ${isActive("/")}`}>
          Beranda
        </Link>
      </div>
    </div>
  );
}