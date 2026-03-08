"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { ComponentMetadata } from "@/lib/markdown";

interface AppShellProps {
  components: ComponentMetadata[];
  children: React.ReactNode;
}

export function AppShell({ components, children }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-1 bg-background">
      {/* Persistent hamburger: fixed top-left, toggles sidebar */}
      <Button
        variant="outline"
        size="icon"
        className="docs-sidebar-toggle fixed top-4 left-4 z-50"
        onClick={() => setSidebarOpen((open) => !open)}
        aria-label={sidebarOpen ? "Close menu" : "Open menu"}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>

      <Sidebar
        components={components}
        isOpen={sidebarOpen}
      />

      <div
        className={`flex flex-col flex-1 min-w-0 bg-background docs-main-content ${sidebarOpen ? "docs-main-content--sidebar-open" : ""}`}
      >
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="container mx-auto px-4 py-8 max-w-80ch">
            <div className="docs-content-panel">{children}</div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
