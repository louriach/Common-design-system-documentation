"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="docs-header">
      <div className="docs-header-inner">
        <Link href="/" className="docs-header-logo flex items-center gap-2">
          Design System KB
        </Link>
        <nav className="hidden md:flex docs-header-nav">
          <Link href="/">Components</Link>
          <Link href="/changelog/">Changelog</Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

