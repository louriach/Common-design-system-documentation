"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentMetadata } from "@/lib/markdown";
import { Button } from "./ui/button";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useState } from "react";

interface SidebarProps {
  components: ComponentMetadata[];
}

export function Sidebar({ components }: SidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Group components by category
  const grouped = components.reduce(
    (acc, component) => {
      const category = component.category || "Components";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(component);
      return acc;
    },
    {} as Record<string, ComponentMetadata[]>
  );

  const isActive = (slug: string) => {
    return pathname === `/components/${slug}/` || pathname === `/components/${slug}`;
  };

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="outline"
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`docs-sidebar ${isOpen ? "is-open" : ""}`}
      >
        <div className="p-4">
          <div className="mb-6 pt-12 md:pt-4">
            <div className="flex items-center justify-between mb-4">
              <Link
                href="/"
                className="text-xl font-bold text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Design System KB
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(false)}
                aria-label="Close sidebar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
            </div>
          </div>

          <nav className="space-y-6">
            <div className="docs-nav-list">
              <Link
                href="/"
                className={`docs-nav-link ${pathname === "/" ? "docs-nav-link--home-active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </div>
            {Object.entries(grouped).map(([category, categoryComponents]) => (
              <div key={category}>
                <h3 className="docs-nav-category">{category}</h3>
                <ul className="docs-nav-list space-y-0">
                  {categoryComponents.map((component) => (
                    <li key={component.slug}>
                      <Link
                        href={`/components/${component.slug}/`}
                        className={`docs-nav-link ${isActive(component.slug) ? "docs-nav-link--active" : ""}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {component.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
