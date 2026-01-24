"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="border-b bg-white dark:bg-gray-950 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="font-bold text-xl">Design System KB</div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
            Components
          </Link>
          <a
            href="https://github.com"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

