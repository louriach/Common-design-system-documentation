"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { ComponentMetadata } from "@/lib/markdown";

interface AppShellProps {
  components: ComponentMetadata[];
  children: React.ReactNode;
}

export function AppShell({ components, children }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="docs-shell">
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

      <div className="docs-shell-inner">
        <Sidebar
          components={components}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen((open) => !open)}
        />

        <div className="docs-main-content">
          <main className="flex-1">
            <div className="docs-main-inner">
              <div className="docs-content-panel">{children}</div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
