"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const parts = pathname?.split("/").filter(Boolean) || [];

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 mt-4 flex items-center justify-start"
    >
      <ol className="flex items-center flex-wrap gap-2 bg-white/80 backdrop-blur-md border border-gray-200 px-4 py-2 rounded-xl shadow-sm">
        {/* Home */}
        <li>
          <Link
            href="/"
            className="flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-semibold"
          >
            <Home className="w-5 h-5" />
            Home
          </Link>
        </li>

        {parts.map((part, index) => {
          const href = "/" + parts.slice(0, index + 1).join("/");
          const isLast = index === parts.length - 1;
          return (
            <li key={href} className="flex items-center">
              <span className="mx-2 text-gray-400">›</span>
              <Link
                href={href}
                className={`capitalize ${
                  isLast
                    ? "text-gray-700 font-semibold"
                    : "text-indigo-600 hover:text-indigo-800"
                }`}
              >
                {decodeURIComponent(part)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
