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
      {/* Only show fixed toggle when sidebar is closed */}
      {!sidebarOpen && (
        <button
          className="docs-sidebar-toggle"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      <Sidebar
        components={components}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((open) => !open)}
      />

      <div
        className={`flex flex-col flex-1 min-w-0 bg-background docs-main-content ${sidebarOpen ? "docs-main-content--sidebar-open" : ""}`}
      >
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="container mx-auto px-4 py-6 max-w-65ch">
            <div className="docs-content-panel">{children}</div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
