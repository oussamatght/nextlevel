"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Breadcrumb() {
  const pathname = usePathname();
  const parts = pathname?.split("/") || [];

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex overflow-hidden rounded-lg border border-gray-300 bg-white text-xl text-gray-700 w-fit">
        <li>
          <Link href="/" className="block h-10 bg-gray-400 px-4 leading-10 hover:text-gray-900">
            <Home className="inline w-5 h-5 mr-2 mb-1 text-indigo-900" />Home
          </Link>
        </li>

        {parts[1] && (
          <li className="relative flex items-center">
            <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-400 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>
            <Link
              href={`/${parts[1]}`}
              className="block h-10 pr-4 pl-6 leading-10 hover:text-gray-900"
            >
              {parts[1]}
            </Link>
          </li>
        )}

        {parts[2] && (
          <li className="relative flex items-center">
            <Link  href={`/${parts[1]}/${parts[2]}`}
              className="block h-10 pr-4 pl-6 leading-10 hover:text-gray-900"
            >
              <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-400 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>
              {parts[2]}
            </Link>
          </li>
        )}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
