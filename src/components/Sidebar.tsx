"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentMetadata } from "@/lib/markdown";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface SidebarProps {
  components: ComponentMetadata[];
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ components, isOpen, onClose }: SidebarProps) {
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
          <div className="mb-6 pt-12 md:pt-4">
            <Link
              href="/"
              className="text-xl font-bold text-foreground hover:text-primary block mb-4"
              onClick={onClose}
            >
              Design System KB
            </Link>
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
            </div>
          </div>

          <nav className="space-y-6">
            <div className="docs-nav-list">
              <Link
                href="/"
                className={`docs-nav-link ${pathname === "/" ? "docs-nav-link--home-active" : ""}`}
                onClick={onClose}
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
                        onClick={onClose}
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
