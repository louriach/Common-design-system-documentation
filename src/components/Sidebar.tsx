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
        className={`
          fixed md:sticky md:top-0 left-0 h-screen md:h-screen w-64 bg-background border-r border-border
          z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          overflow-y-auto md:overflow-y-auto
        `}
      >
        <div className="p-4">
          {/* Sidebar header */}
          <div className="mb-6 pt-12 md:pt-4">
            <div className="flex items-center justify-between mb-4">
              <Link
                href="/"
                className="text-xl font-bold hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Design System KB
              </Link>
              {/* Close button for mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(false)}
                aria-label="Close sidebar"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            </div>
            {/* Theme switcher */}
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-6">
            <div>
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === "/"
                    ? "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </div>

            {/* Components by category */}
            {Object.entries(grouped).map(([category, categoryComponents]) => (
              <div key={category}>
                <h3 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {category}
                </h3>
                <ul className="space-y-1">
                  {categoryComponents.map((component) => (
                    <li key={component.slug}>
                      <Link
                        href={`/components/${component.slug}/`}
                        className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                          isActive(component.slug)
                            ? "bg-muted text-primary font-medium"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
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
