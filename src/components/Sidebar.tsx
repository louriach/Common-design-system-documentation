"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentMetadata } from "@/lib/markdown";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface SidebarProps {
  components: ComponentMetadata[];
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ components, isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname();

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
    <aside
        className={`docs-sidebar ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div>
          <div className="docs-sidebar-header">
            <button className="docs-sidebar-toggle-btn" onClick={onToggle} aria-label="Close menu">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/" className="docs-sidebar-brand">
              Design System KB
            </Link>
            <ThemeSwitcher />
          </div>

          <nav className="space-y-6">
            <div className="docs-nav-list">
              <Link
                href="/"
                className={`docs-nav-link ${pathname === "/" ? "docs-nav-link--home-active" : ""}`}
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
  );
}
